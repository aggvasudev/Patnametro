import React from 'react';
import '../css/Blue.css';
import $ from 'jquery';
// import '../css/Orange.css';

export default function Header() {
  $(document).ready(function () {
    // var maxFontSizeChange = 3; 

    $('#fontincrease').click(function () {
        modifyFontSize('increase');
    });
    $('#fontdecrease').click(function () {
        modifyFontSize('decrease');
    });
    $('#fontreset').click(function () {
        modifyFontSize('reset');
    });

    function modifyFontSize(flag) {
        var divElement = $('body');
        var currentFontSize = parseInt(divElement.css('font-size'));

        if (flag === 'increase') {
            currentFontSize += 3;
            if (currentFontSize > 22) { // Limit to a maximum of 24px
                currentFontSize = 22;
            }
        } else if (flag === 'decrease') {
            currentFontSize -= 3;
            if (currentFontSize < 11) { // Limit to a minimum of 12px
                currentFontSize = 11;
            }
        } else {
            currentFontSize = 16; // Reset to the default font size
        }

        divElement.css('font-size', currentFontSize + 'px');
    }
});
  return (
    <header className="header_top">
    <div className="top_head_res w-100 d-flex justify-content-between container-fluid ">
        <ul className="social-icons">
            <li><a href="/"><img src="https://www.iconpacks.net/icons/2/free-facebook-logo-icon-2428-thumb.png" alt="Facebook"/></a></li>
            <li><a href="/"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="Twitter"/></a></li>
            <li><a href="/"><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="Instagram"/></a></li>
            <input type="text" className="search-input" placeholder="Search..."/>
        </ul>
        <div className="gap-3 d-flex">
            <div className=" gap-2 d-flex">
                    <a href="javascript:void(0)" onclick="setActiveStyleSheet('blue'); return false;"><img src="assets/images/blue.png" alt="Blue Theme" title="Blue Theme"/></a>
                    <a href="javascript:void(0)" onclick="setActiveStyleSheet('outrageous_orange'); return false;"><img src="assets/images/outrageous_orange.png" className="img_width" alt="Outrageous Red" title="Outrageous Red"/></a>
            </div>
            <a href="/">Screen Reader Access</a>
            <div className="theme-popup">
                <input type="radio" name="theme" id="default" />
                <input type="radio" name="theme" id="light"/>
                <input type="radio" name="theme" id="dark"/>
                <input type="checkbox" id="checkbox"/>
              <label for="checkbox" className="theme-popup__button">
                A
              </label>
              <div className="theme-popup__list-container">
                <ul className="theme-popup__list">
                  <li id="fontincrease" href="javascript:void(0)">
                    <label for="default">  
                      <p>A+</p>
                    </label>
                  </li>
                  <li id="fontreset" href="javascript:void(0)">
                    <label for="light">
                      <p >A</p>
                    </label>
                  </li>
                  <li id="fontdecrease" href="javascript:void(0)">
                    <label for="dark">
                      <p>A-</p>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            
        </div>
    </div>
</header>
  )
}
