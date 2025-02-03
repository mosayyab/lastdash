import { React, useState } from "react";
import { Period } from "./constants.tsx";

const Dropdown2 = ({ setMassPeriod }) => {
    const [selectedOption, setSelectedOption] = useState(Period.WEEK);

    // Handle change of the selected option
    const handleChange = (e) => {
        const newPeriod = e.target.value; 
        setSelectedOption(newPeriod); 
        setMassPeriod(newPeriod);
        console.log("meow");
    }

    return (
        <div className="max-w-sm mx-auto">
            <label htmlFor="period" className="text-center block py-2 mb-1 mt-1 text-sm font-medium text-gray-900 dark:text-white">Period</label>
            <select
                id="period"
                value={selectedOption} 
                onChange={handleChange} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value={Period.WEEK}>Week</option>
                <option value={Period.MONTH}>Month</option>
                <option value={Period.QUARTER}>3 Months</option>
                <option value={Period.HALFYEAR}>6 Months</option>
                <option value={Period.YEAR}>Year</option>
                <option value={Period.OVERALL}>Overall</option>
            </select>
        </div>
    );
}

export default Dropdown2;
