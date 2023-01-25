import React, { useState } from 'react';

function Skeleton({ width, height }) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`bg-gray-300 shadow-lg rounded-2xl ${height} ${width} ${
        loading ? 'block' : 'hidden'
      }`}
    >
      {/* Store code snippet in a component & use .map() to render if loading is true */}
    </div>
  );
}

export default Skeleton;
