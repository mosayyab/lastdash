// Card.jsx
import React, { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import Dropdown from './Dropdown';
import {periodLabels} from './constants.tsx'

const Card = ({ title, children, className, page, setPage, period, setPeriod }) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(period);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle the radio button change
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setPeriod(event.target.value)
  };

  // Handler to go to the previous page
  const handleChevronLeftClick = () => {
    if (page > 0) {
      console.log('clicked')
      setPage(page - 1); // Decrease the page number
    }
  };

  // Handler to go to the next page
  const handleChevronRightClick = () => {
    console.log('clicked')
    setPage(page + 1); // Increase the page number
  };


  return (
    <div className={`bg-[#191a1d] h-[540px] shadow-md min-w-96 max-w-96 rounded-lg p-4 ${className} relative overflow-y-scroll scrollable`}>
      <div className="sticky top-0 bg-[#191a1d] z-10 pt-0.5 mb-4">
        <div className="flex items-center justify-between mb-4">
          {/*  Title  */}
          <div className="text-xl bg-[#141517] hover:bg-[#180000] font-semibold text-[#e7706e] cursor-pointer p-2 rounded-lg" onClick={toggleDropdown}>
            {title} - {periodLabels[period]}
          </div>

          {/* Chevron Icons in Top Right */}
          <div className="flex space-x-2">
            <HiOutlineChevronLeft onClick={handleChevronLeftClick} className="cursor-pointer text-white" />
            <span className='text-red-400 mx-1 -translate-y-1 font-semibold' >{page}</span>
            <HiOutlineChevronRight onClick={handleChevronRightClick} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <Dropdown
        isOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        selectedOption={selectedOption}
        handleRadioChange={handleRadioChange}
      />

      {/* Content */}
      <div className="scrollable overflow-y-auto h-auto text-[#e7706e]">
        {children}
      </div>
    </div>
  );


};

export default Card;
