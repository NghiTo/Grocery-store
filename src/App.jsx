import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const getCountry = async (url) => {
    const response = await axios
      .get(url)
      .then((res) => setCountryList(res.data.data));
  };  

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry
  };

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header /> 
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

export { MyContext };
