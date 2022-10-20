import React from "react"
import "./style.css"
import audi from "./Images/audir8.jpg"
import Mustang from "./Images/Mustang.jpg"
import Ferra from "./Images/roma.jpg"
import merce from "./Images/merce.jpg"
import pors from "./Images/pors.jpg"
import bm from "./Images/bmw.jpg"
import off from "./Images/off.jpg"
import prop from "./Images/prop.jpg"
import suv from "./Images/suv.jpg"
import picape from "./Images/picape2.jpg"

export default function Home() {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        ></link>
      </head>

      <div className="parallax">
        <div className="page-title">Car Specs</div>
      </div>
      <div className="menu" id="sticky">
        <ul className="menu-ul">
          <a href="#" className="a-menu">
            <li>Home</li>
          </a>
          <a href="#Automobiles" className="a-menu">
            <li>Automobiles</li>
          </a>
        </ul>
      </div>

      {/* Home Page Begins */}

      <div className="container">
        <a href="#Meat">
          <div className="categories">
            <img src={off} className="item-image"></img>
            <div className="image-title">Off-Road</div>
          </div>
        </a>

        <a href="#automobiles">
          <div className="categories">
            <img src={prop} className="item-image"></img>
            <div className="image-title">Sports</div>
          </div>
        </a>

        <a href="#Fruits">
          <div className="categories">
            <img src={suv} className="item-image"></img>
            <div className="image-title">SUV</div>
          </div>
        </a>

        <a href="#Deals">
          <div className="categories">
            <img src={picape} className="item-image"></img>
            <div className="image-title">Picape</div>
          </div>
        </a>
      </div>

      {/* Veg Begins Here */}

      <div className="deals-container" id="Automobiles">
        <div className="parallax">
          <div className="title">AUTOMOBILES</div>
        </div>
        <div className="items">
          <div className="images">
            <img src={bm} className="item-image-size"></img>
          </div>
          <div className="description">
            <b>BMW</b>
            <br></br>
            <div className="item-select"></div>
            <br></br>
            <a href="bmw"><button className="buynow-btn">View Specs</button></a>
          </div>
        </div>

        <div className="items">
          <div className="images">
            <img src={merce} className="item-image-size"></img>
          </div>
          <div className="description">
            <b>Mercedes</b>
            <br></br>
            <div className="item-select"></div>
            <br></br>
            <a href="mercedes"><button className="buynow-btn">View Specs</button></a>
          </div>
        </div>

        <div className="items">
          <div className="images">
            <img src={pors} className="item-image-size"></img>
          </div>
          <div className="description">
            <b>Porsche</b>
            <br></br>
            <div className="item-select"></div>
            <br></br>
            <a href="porsche"><button className="buynow-btn">View Specs</button></a>
          </div>
        </div>

        <div className="items">
          <div className="images">
            <img src={Ferra} className="item-image-size"></img>
          </div>
          <div className="description">
            <b>Ferrari</b>
            <br></br>
            <div className="item-select"></div>
            <br></br>
            <a href="ferrari"><button className="buynow-btn">View Specs</button></a>
          </div>
        </div>

        <div className="items">
          <div className="images">
            <img src={Mustang} className="item-image-size"></img>
          </div>
          <div className="description">
            <b>Mustang</b>
            <br></br>
            <div className="item-select"></div>
            <br></br>
            <a href="mustang"><button className="buynow-btn">View Specs</button></a>
          </div>
        </div>

        <div className="items">
          <div className="images">
            <img src={audi} className="item-image-size"></img>
          </div>
          <div className="description">
            <b>Audi R8</b>
            <br></br>
            <div className="item-select"></div>
            <br></br>
            <a href="audi"><button className="buynow-btn">View Specs</button></a>
          </div>
        </div>
      </div>

      {/* Veg Ends Here */}

      {/* Footer Starts Here */}
      <div className="parallaxl">
        <div className="footer">
          <div className="quick-links">
            <div>Locations</div>
            <ul>
              <li>
                <a href="" className="a-links">
                  Address 1
                </a>
              </li>
              <li>
                <a href="" className="a-links">
                  Address 2
                </a>
              </li>
              <li>
                <a href="" className="a-links">
                  Address 2
                </a>
              </li>
            </ul>
          </div>

          <div className="quick-links">
            <div>Careers</div>
            <ul>
              <li>
                <a href="" className="a-links">
                  Packing Staff
                </a>
              </li>
              <li>
                <a href="" className="a-links">
                  Delivery Agents
                </a>
              </li>
              <li>
                <a href="" className="a-links">
                  Shelf Fillers
                </a>
              </li>
            </ul>
          </div>

          <div className="quick-links">
            <div>Quick Links</div>
            <ul>
              <li>
                <a href="" className="a-links">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="" className="a-links">
                  FAQ
                </a>
              </li>
              <li>
                <a href="" className="a-links">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <i className="far fa-copyright fa-lx"></i>2022 By Mario and Dagoberto
      </div>

      {/* Footer Ends Here */}

      {/* Home Page Ends */}
    </div>
  )
}
