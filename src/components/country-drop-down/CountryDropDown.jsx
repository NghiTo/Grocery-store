import { Button, Dialog, Slide } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const context = useContext(MyContext);

  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpenModal(false);
    context.setSelectedCountry(country);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);

    if (keyword !== "") {
      const filteredList = context.countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setFilteredCountryList(filteredList);
    } else {
      setFilteredCountryList(context.countryList);
    }
  };

  useEffect(() => {
    setFilteredCountryList(context.countryList);
  }, [context.countryList]);

  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">
            {context.selectedCountry !== ""
              ? context.selectedCountry.length > 10
                ? context.selectedCountry?.substr(0, 10) + "..."
                : context.selectedCountry
              : "Select a location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        TransitionComponent={Transition}
        className="locationModal"
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area</p>
        <Button className="close_" onClick={() => setIsOpenModal(false)}>
          <MdClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area..."
            value={searchTerm}
            onChange={filterList}
          />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {filteredCountryList.length !== 0 &&
            filteredCountryList.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
