import { Button, Dialog, Slide } from "@mui/material";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your location</span>
          <span className="name">Vietnam</span>
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
          <input type="text" placeholder="Search your area..." />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
          <li>
            <Button onClick={() => setIsOpenModal(false)}>VietNam</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropDown;
