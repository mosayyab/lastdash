// ListItem.tsx
import React from 'react';

interface ListItemProps {
  index: number;
  name: string;
  playcount: number;
  artistName?: string; // Optional artist name for tracks and albums
}

const ListItem = ({ index, name, playcount, artistName }) => {
  return (
    <div>
      <h1>
        <b>{index + 1}</b>.{' '}
        <span className="text-[#ff4444]">{artistName || name}</span> - {name} [{playcount}]
      </h1>
    </div>
  );
};

export default ListItem;
