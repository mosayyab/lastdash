// Sidebar.jsx
import React from 'react';
import logo from "../logo.svg"; // Example logo import

// icons
import { MdMenuOpen, MdDashboard  } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import { FaUserCircle } from 'react-icons/fa';
import { CiSettings } from "react-icons/ci";

const menuItems = [
    {
      icons: <IoHomeOutline size={20} />,
      label: 'Home',
    },
    {
      icons: <MdDashboard size={20} />,
      label: 'Dashboard',
    },
    {
      icons: <CiSettings size={20} />,
      label: 'Settings',
    },
];

export default function Sidebar({ open, setOpen }) {
  return (
    <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-[#9e3333] text-white ${open ? 'w-60' : 'w-16'}`}>
      {/* Header */}
      <div className="px-3 py-2 h-20 flex justify-between items-center">
        <img src={logo} alt="Logo" className={`${open ? 'w-10' : 'w-0'} rounded-md`} />
        <div>
          <MdMenuOpen
            size={34}
            className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)} // Toggle the sidebar state
          />
        </div>
      </div>

      {/* Body */}
      <ul className="flex-1">
        {menuItems.map((item, index) => {
          return (
            <li key={index} className="px-3 z-20 py-2 my-2 hover:bg-[#631616] rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group">
              <div>{item.icons}</div>
              <p className={`${!open && 'w-0  translate-x-24'} duration-500 overflow-hidden`}>
                {item.label}
              </p>
              <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 bg-[#250938] text-white duration-300 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}>
                {item.label}
              </p>
            </li>
          );
        })}
      </ul>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-3">
        <div><FaUserCircle size={30} /></div>
        <div className={`leading-5 ${!open && 'w-0 translate-x-24 '} duration-500 overflow-hidden`}>
          <p>Meow</p>
          <span className="text-xs">meow@meow.com</span>
        </div>
      </div>
    </nav>
  );
}
