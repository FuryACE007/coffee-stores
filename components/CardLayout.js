import React from 'react';

export const CardLayout = (props) => {
  return (
      <div className=' w-full py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {props.children}
      </div>
  );
};
