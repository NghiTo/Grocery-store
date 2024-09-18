import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";

const CountryDropDown = () => {
  return (
    <>
      <Button className="countryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">Vietnam</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};

export default CountryDropDown;
