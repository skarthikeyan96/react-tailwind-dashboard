import React from 'react';

const Card = ({ title, amount, removeBorder }: any) => {

  return (
    <div className={!removeBorder ? "border-2 border-gray-200 p-4 rounded-xl flex flex-col": ""}>
      <h4 className="text-gray-500 pb-4 capitalize tracking-wide"> {title} </h4>
      <span className="text-2xl xl:text-4xl font-bold pb-2"> {amount} </span>
    </div>
  );
};

export default Card;
