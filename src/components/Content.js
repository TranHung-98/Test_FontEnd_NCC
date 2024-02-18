import React from "react";
import logo from '../assets/images/logoNCC 1.png';
import html from '../assets/images/html-icon 1.png';
import url from '../assets/images/url-icon 1.png';
import css from '../assets/images/css-icon 1.png';

class Content extends React.Component {
  render() {
    return (
      <>
        <div className='content'>
          <img src={logo} className='img' alt="" />
          <div className='grid'>
            <div className='bgr-light'>
              <h1>Lorem ipsum dolor sit asmet?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu<br></br> posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia <br></br>ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque <br></br>suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper <br></br>turpis pellentesque a.
              </p>
            </div>
            <div className='desc'>
              <ul className='d-flex list'>
                <li>
                  <h2 className='text-left'>Lorem ipsum dolor sit amet</h2>
                  <div className='d-flex'>
                    <img src={css} alt="" />
                    <p className='text-left p-left'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Sed non dui sodales, faucibus<br></br> libero ut, posuere felis. Donec imperdiet<br></br> suscipit accumsan. Aenean consequat <br></br>condimentum velit ut tempor. Nam porta <br></br>massa in metus bibendum congue. <br></br>Pellentesque ultrices liquam egestas nunc at </p>
                  </div>
                  <p className='text-left'>
                    ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est <br></br>ullamcorper id. Aenean consequat condimentum velit ut tempor.<br></br> Nam porta massa in metus bibendum congue. Pellentesque <br></br>ultrices vestibulum mattis.
                  </p>
                </li>
                <li>
                  <h2 className='text-left'>Lorem ipsum dolor sit amet</h2>
                  <div className='d-flex'>
                    <img src={html} alt="" />
                    <p className='text-left p-left'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Sed non dui sodales, faucibus<br></br> libero ut, posuere felis. Donec imperdiet <br></br>suscipit accumsan. Aenean consequat<br></br>condimentum velit ut tempor. Nam porta <br></br>massa in metus bibendum congue.<br></br> Pellentesque ultrices liquam egestas nunc at </p>
                  </div>
                  <p className='text-left'>
                    ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est <br></br>ullamcorper id. Aenean consequat condimentum velit ut tempor. <br></br>Nam porta massa in metus bibendum congue. Pellentesque <br></br>ultrices vestibulum mattis.
                  </p>
                </li>
                <li>
                  <h2 className='text-left'>Lorem ipsum dolor sit amet</h2>
                  <div className='d-flex'>
                    <img src={url} alt="" />
                    <p className='text-left p-left'>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Sed non dui sodales, faucibus <br></br>libero ut, posuere felis. Donec imperdiet <br></br>suscipit accumsan. Aenean consequat<br></br> condimentum velit ut tempor. Nam porta<br></br> massa in metus bibendum congue. <br></br>Pellentesque ultrices liquam egestas nunc at </p>
                  </div>
                  <p className='text-left'>
                    ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est <br></br>ullamcorper id. Aenean consequat condimentum velit ut tempor. <br></br>Nam porta massa in metus bibendum congue. Pellentesque <br></br>ultrices vestibulum mattis.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer'>
            <p>Copyright © 2021</p>
          </div>
        </div>
      </>
    )
  }
}

export default Content;
