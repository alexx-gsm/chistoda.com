import React from 'react';

export const Price = (price) => (

  <div className="price-download">

    <h2>{price.title}</h2>

    <div className="flex-row justify-content-between align-items-center">
      <small>{price.name}</small>
      <a href={price.link} target="_blank" className="btn__download-price">Скачать</a>
    </div>

  </div>

);
