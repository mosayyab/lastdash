import React from 'react';

export enum GetMethod{
    TOP_TRACKS = "gettoptracks",
    TOP_ARTISTS = "gettopartists",
    TOP_ALBUMS = "gettopalbums",
};

export enum ItemType{
    TRACK = "track",
    ARTIST = "artist",
    ALBUM = "album"
};

export enum Period{
    WEEK = "7day",
    MONTH = "1month",
    QUARTER = "3month",
    HALFYEAR = "6month",
    YEAR = "12month",
    OVERALL = "overall"
};

export const periodLabels = {
    [Period.WEEK]: "Week",
    [Period.MONTH]: "Month",
    [Period.QUARTER]: "3 Months",
    [Period.HALFYEAR]: "6 Months",
    [Period.YEAR]: "Year",
    [Period.OVERALL]: "Overall"
  };

type TypeMethod = {
    [itemType in ItemType]:{
        top: GetMethod;
        topPath: string;
    }
};

export const APIMethods: TypeMethod = {
    [ItemType.TRACK]: {
        top: GetMethod.TOP_TRACKS,
        topPath: "toptracks"
    }, 
    [ItemType.ARTIST]: {
        top: GetMethod.TOP_ARTISTS,
        topPath: "topartists"
    }, 
    [ItemType.ALBUM]: {
        top: GetMethod.TOP_ALBUMS,
        topPath: "topalbums"
    }, 
};

export type DataItem = {
    name: string;
    artist?: string;
    playcount: string;
}


// interface ListItemProps {
//     index: number;
//     name: string;
//     playcount: number;
//     artistName?: string; // Optional artist name for tracks and albums
//   }
  
//   const ListItem = ({ index, name, playcount, artistName }) => {
//     return (
//       <div>
//         <h1>
//           <b>{index + 1}</b>.{' '}
//           <span className="text-[#ff4444]">{artistName || name}</span> - {name} [{playcount}]
//         </h1>
//       </div>
//     );
//   };
  
//   export default ListItem;