import React from 'react';
import glass from './Card.module.css';

const Card = () => {
  return (
      <div className={`md:w-96 md:h-72 ${glass.background} ease-in duration-200 `}>
          Card
      </div>
  );
};

export default Card;
