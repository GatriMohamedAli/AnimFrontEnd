import React, { useState, useEffect } from "react";
import axios from "axios";

import "./css/Bar.css";

const Bar = () => {
  const [Search, SetSearch] = useState("");
  const filter = () => {
    axios.get("http://localhost:8080/" + Search).then((response) => {
      console.log(response.data);
    });
  };
  const handle = (e) => {
    SetSearch(e);
    filter();
  };
  return (
    <>
      <div className='adjust d-flex justify-content-between'>
        <div className='d-flex justify-content-around'>
          <button className='rounds cont'>RH</button>
          <button className='rounds cont'>Finance</button>
          <button className='rounds cont'>Marketing</button>
          <button className='rounds cont'>Sponsoring</button>
        </div>
        <div className='container h-100'>
          <div className='d-flex justify-content-end h-100'>
            <div className='searchbar'>
              <input
                id='Search'
                className='search_input'
                type='text'
                name='Search'
                placeholder='Search...'
                value={Search}
                onKeyUp={(e) => handle(e.target.value)}
                /* onKeyUp={() => filter()} */
              />
              <a href='#' className='search_icon'>
                <i style={{ fontSize: 1.5 + "rem" }} class='bx bx-search'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bar;
