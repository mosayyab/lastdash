import React from "react";
import { useQuery } from "@tanstack/react-query"; // will handle api fetching for u
import { useQueryClient } from '@tanstack/react-query'
import {GetMethod, Period} from './constants.tsx'



const API_KEY = process.env.REACT_APP_API_KEY;

const limit = 10;
// const user = 'wymir';
const BASE_URL = `https://ws.audioscrobbler.com/2.0/?api_key=${API_KEY}&format=json&limit=${limit}&method=`;


// const getTop = (type) => {

// }

const getTop = (method: string, page: number, period: string, user: string) =>
  fetch(`${BASE_URL}user.${method}&user=${user}&period=${period}&page=${page}`).then((res) => res.json());

// The component that uses `React Query` to fetch data
export default function LastFMAPI({ method, page, period, user }: { method: GetMethod, page: number, period: Period, user: string }) {
  const queryClient = useQueryClient();
  // Use `useQuery` to fetch the data using the `getTop` function and pass in the `method`
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ['top', method, page, period, user],  // Add `method` as part of the key for caching
    queryFn: () => getTop(method, page, period, user),    // Pass method correctly into getTop
    // placeholderData: (prev) => prev
  });

  // console.log(data); 
  if (error) return <div>There was an error!</div>
  if (isLoading) return <div>Loading...</div>

  const renderData = () => {
    switch (method) {
      case GetMethod.TOP_TRACKS:
        return (
          <div>
            {/* Check if toptracks and track exist */}
            {data?.toptracks?.track?.length > 0 ? (
              data.toptracks.track.map((track, index) => {
                const maxPlaycount = Math.max(...data.toptracks.track.map(t => t.playcount));

                const barWidth = `${(track.playcount / maxPlaycount) * 100}%`;

                return (
                  <div key={index} className="mb-2">
                    <h1><b>{index + 1 + (page - 1) * 10}</b>. <span className='text-[#ff4444] font-semibold'>{track.artist.name}</span> - {track.name} [{track.playcount}]</h1>
                    {/* <hr className="border-t-1 my-1" style={{ borderColor: '#141517' }} /> */}

                    <div className="relative">
                      <div className="bg-[#e7706e] h-2 rounded-full"
                        style={{ width: barWidth }}>
                      </div>
                    </div>
                  </div>


                )

              })
            ) : (
              <p>No tracks available</p>
            )}
          </div>
        );
      case GetMethod.TOP_ARTISTS:
        // const artists = data?.topartists?.artist; 
        return (
          <div>
            {/* Check if toptracks and track exist */}
            {data?.topartists?.artist?.length > 0 ? (
              data.topartists.artist.map((artist, index) => {
                const maxPlaycount = Math.max(...data.topartists.artist.map((a) => a.playcount));
                const barWidth = `${(artist.playcount / maxPlaycount) * 100}%`;
                return (
                <div key={index} className="mb-2">
                  <h1><b>{index + 1 + (page - 1) * 10}</b>. <span className='text-[#ff4444] font-semibold'>{artist.name}</span> [{artist.playcount}]</h1>
                  
                  <div className="relative">
                  <div
                        className="bg-[#e7706e] h-2 rounded-full"
                        style={{ width: barWidth }}
                      ></div>
                  </div>
                </div>
              )})
            ) : (
              <p>No artists available</p>
            )}
          </div>
        );

      case GetMethod.TOP_ALBUMS:
        return (
          <div>
            {/* Check if topalbums and album exist */}
            {data?.topalbums?.album?.length > 0 ? (
              data.topalbums.album.map((album, index) => {
                // find max playcount
                const maxPlaycount = Math.max(...data.topalbums.album.map(a => a.playcount));

                // calculate width
                const barWidth = `${(album.playcount / maxPlaycount) * 100}%`;

                return (
                  <div key={index} className="mb-2">
                    <h1>
                      <b>{index + 1 + (page - 1) * 10}</b>.{' '}
                      <span className="text-[#e73535] font-semibold">{album.artist.name}</span> - {album.name} [{album.playcount}]
                    </h1>

                    <div className="relative">
                      <div
                        className="bg-[#e7706e] h-2 rounded-full"
                        style={{ width: barWidth }}
                      ></div>
                    </div>

                    {/* <hr className="border-t-1" style={{ borderColor: '#141517' }} /> */}
                  </div>
                );
              })
            ) : (
              <p>No albums available</p>
            )}
          </div>
        );
    }
  }

  return (
    <div>
      {renderData()}
    </div>
  )
}