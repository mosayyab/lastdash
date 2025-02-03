import React from 'react';
import { Period } from './constants.tsx';

const Dropdown = ({ isOpen, toggleDropdown, selectedOption, handleRadioChange }) => {
  if (!isOpen) return null; 

  return (
    <div className="absolute top-12 left-4 bg-[#200505] p-4 rounded-lg shadow-md w-64 z-10">
      <h3 className="text-[#e7706e]">Select Period</h3>
      <div className="flex flex-col text-cyan-50">
        <label>
          <input
            type="radio"
            value= {Period.WEEK}
            checked={selectedOption === Period.WEEK}
            onChange={handleRadioChange}
            className="mr-2"
          />
          Weekly
        </label>
        <label>
          <input
            type="radio"
            value={Period.MONTH}
            checked={selectedOption === Period.MONTH}
            onChange={handleRadioChange}
            className="mr-2"
          />
          One Month
        </label>
        <label>
          <input
            type="radio"
            value={Period.QUARTER}
            checked={selectedOption === Period.QUARTER}
            onChange={handleRadioChange}
            className="mr-2"
          />
          Three Months
        </label>
        <label>
          <input
            type="radio"
            value={Period.HALFYEAR}
            checked={selectedOption ===Period.HALFYEAR}
            onChange={handleRadioChange}
            className="mr-2"
          />
          Six Months
        </label>
        <label>
          <input
            type="radio"
            value={Period.YEAR}
            checked={selectedOption === Period.YEAR}
            onChange={handleRadioChange}
            className="mr-2"
          />
          Year
        </label>
        <label>
          <input
            type="radio"
            value={Period.OVERALL}
            checked={selectedOption === Period.OVERALL}
            onChange={handleRadioChange}
            className="mr-2"
          />
          Overall
        </label>
      </div>
    </div>
  );
};

export default Dropdown;
