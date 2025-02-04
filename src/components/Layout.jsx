// Layout.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Card from './Card';
import { GetMethod, Period } from './constants.tsx';
import Dropdown2 from './Dropdown2.jsx';
import LastFMAPI from './LastFMAPI.tsx';


const Layout = () => {
  // Declare state in the parent component
  const [pageTopTracks, setPageTopTracks] = useState(1);
  const [pageTopArtists, setPageTopArtists] = useState(1);
  const [pageTopAlbums, setPageTopAlbums] = useState(1);

  const [periodTopTracks, setPeriodTopTracks] = useState(Period.WEEK);
  const [periodTopArtists, setPeriodTopArtists] = useState(Period.WEEK);
  const [periodTopAlbums, setPeriodTopAlbums] = useState(Period.WEEK);

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("wymir");

  const handleMassPeriod = (newPeriod) => {
    setPeriodTopTracks(newPeriod);
    setPeriodTopArtists(newPeriod);
    setPeriodTopAlbums(newPeriod);
  };

  return (
    <div className="flex h-screen">

      <Sidebar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col bg-[#141414]">




        {/* Right Side */}

        <div className="scrollable p-4 overflow-y-auto bg-[#141414]">
          {/* <Header /> */}
          <div className='text-red-600 text-xl font-semibold justify-self-center py-2'>Last.fm Dashboard </div>
          {/* Search and Period */}
          {/* Text Field  */}
          <div className="flex justify-center items-center flex-col  mx-auto mt-2 mb-2 ">
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Username
            </label>
            <div className="relative flex justify-center items-center max-w-sm sm:max-w-md">
              <input
                className=" w-[350px] p-4 ps-5 text-sm text-gray-900 border border-red-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Username"
                required
              />
              {/* Search Button  */}
              <button
                onClick={() => setUser(document.querySelector('input').value)}
                className="text-white absolute right-2 bottom-2 bg-[#9e3333] hover:bg-[#7A2727] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#9e3333] dark:hover:bg-[#7A2727] dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>

            <Dropdown2 className="justify-center mt-2 " setMassPeriod={handleMassPeriod} />
          </div>


          <div className="flex py-5 flex-wrap justify-center items-center gap-4">

            {/* Top Tracks Card */}
            <Card title="Top Tracks" className="sm:w-full md:w-1/2 lg:w-1/3"
              page={pageTopTracks}
              setPage={setPageTopTracks}
              period={periodTopTracks}
              setPeriod={setPeriodTopTracks}
            >
              {/* <ReactQueryPractice method={GetMethod.TOP_TRACKS} page={pageTopTracks} /> */}
              <LastFMAPI method={GetMethod.TOP_TRACKS} page={pageTopTracks} period={periodTopTracks} user={user} />
            </Card>

            {/* Top Artists Card */}
            <Card title="Top Artists" className="sm:w-full md:w-1/2 lg:w-1/3"
              page={pageTopArtists}
              setPage={setPageTopArtists}
              period={periodTopArtists}
              setPeriod={setPeriodTopArtists}
            >
              <LastFMAPI method={GetMethod.TOP_ARTISTS} page={pageTopArtists} period={periodTopArtists} user={user} />
            </Card>

            {/* Top Albums Card */}
            <Card title="Top Albums" className="sm:w-full md:w-1/2 lg:w-1/3"
              page={pageTopAlbums}
              setPage={setPageTopAlbums}
              period={periodTopAlbums}
              setPeriod={setPeriodTopAlbums}
            >
              <LastFMAPI method={GetMethod.TOP_ALBUMS} page={pageTopAlbums} period={periodTopAlbums} user={user} />
            </Card>

            {/* Test Card
            <Card title="Test Card" className="sm:w-full md:w-1/2 lg:w-1/3">
              Baoooooooooo
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;