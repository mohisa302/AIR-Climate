import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AiOutlineLeft, AiFillSetting } from 'react-icons/ai';
import { changeCat, serachWord } from '../redux/slices/categorySlice';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ category: false, search: false });
  // search input
  const activeLink = location.pathname === '/'
    ? '/'
    : location.pathname.split('').slice(1).join('');

  const geerHandler = (e) => {
    if (e.target.value.toLowerCase() === 'name') {
      dispatch(changeCat({ country: false, all: false, search: '' }));
      setFilter((pre) => ({ search: pre.search, category: !pre.category }));
      console.log(filter);
    } else {
      console.log('l');
      if (e.target.value.toLowerCase() === 'all') dispatch(changeCat({ all: true, country: false, search: '' }));
      if (e.target.value.toLowerCase() === 'country') dispatch(changeCat({ country: true, all: false, search: '' }));
      setFilter((pre) => ({ search: pre.search, category: false }));
    }
  };

  const navLinks = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Details',
      link: '/Details',
    },
  ];

  return (
    <header className="w-full border-b bg-[#210479]">

      <div className="gap-x-4 text-blue-500 sm:flex">
        {navLinks.map((link) => (
          <NavLink
            to={link.link}
            key={link.id}
          />
        ))}
      </div>
      <div className="flex items-center py-3 text-white justify-between gap-x-2 mx-1">
        {activeLink === '/'
            && (
              <h3 className="whitespace-nowrap"> average Temps </h3>
            )}
        {activeLink !== '/'
            && (
            <>
              <Link to="/">
                <AiOutlineLeft />
              </Link>
              <h3> town/city Temp</h3>
            </>
            )}
        <div className="flex items-center">
          {filter.category && (activeLink === '/') && (
          <input
            type="text"
            onChange={(event) => dispatch(serachWord(event.target.value))}
            className="text-black w-32 pl-1 mr-2"
            placeholder="Search..."

          />
          )}
          {filter.search && (activeLink === '/') && (
            <select
              onChange={geerHandler}
              className="text-black"
              data-te-select-init
              data-te-select-placeholder="Select category"
            >
              <option selected>Select</option>
              {['All', 'Country', 'Name'].map((c) => <option className="text-sm" id={`${c}`} value={c} key={c}>{c}</option>)}
            </select>
          )}
          {activeLink === '/' && (
            <AiFillSetting role="tab" className="ml-1 cursor-pointer hover:animate-spin" onClick={() => setFilter((pre) => ({ search: !pre.search, category: pre.category }))} />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
