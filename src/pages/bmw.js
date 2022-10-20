import React from "react";
import "./bmw.css";
import R8 from "./img/R8.png";
import speed from "./img/speed.png";
import rain from "./img/rain.png";
import BMW from "./img/BMW.png";

export default function CBMW() {
    return (
        <section>
        <nav>
              <a href="index.html" class="brand">HOME</a>
              </nav>
          <header className="niversa">
            <div className="header-body">
              <div>
                <h1>Join the Jorney</h1>
                <p>
                  Leaner and meaner then ever. The new BMW boddly goes where
                  no car has gone before
                </p>
              </div>
            </div>
          </header>
          <div className="about">
            <div className="heading">
              <h2>
                Take a Jorney, <br />
                bend space
              </h2>
              <p>
                The BMW can't help but steal the spotlight. With its sharp angular
                lines <br /> and exotic, glass covered engine, the BMW has a Wide
                and <br /> Commanding pressece that makes it impossible to look
                anywhere
                <br />
                else.
              </p>
            </div>
          </div>
          <div className="infos">
            <div className="info">
              <img src={R8} alt="icon" />
              <div>
                <h3>Agility</h3>
                <p>Built for speed, with a 2 liter V4 enginge</p>
              </div>
            </div>
            <div className="info">
              <img src={speed} alt="icon" />
              <div>
                <h3>Performance</h3>
                <p>Accelerating from zero to 60 mph in 7.7s</p>
              </div>
            </div>
  
            <div className="info">
              <img src={rain} alt="icon" />
            </div>
            <h3>Cuttind Edge</h3>
            <p>Sharing half of its parts with the R8 LMS racecar</p>
          </div>
          <section className="spec">
            <div>
              <div className="spec-header">
                <h2>Tech Specs</h2>
                <span>Engine</span>
              </div>
              <ul>
                <li>
                  <span>Engine displacement</span>
                  <span>1995</span>
                </li>
                <li>
                  <span>Maximun power</span>
                  <span>187.74 bhp @ 5000-6000 rpm</span>
                </li>
                <li>
                  <span>Maximum torque</span>
                  <span>Torque 400nm @ 1750-2500 rpm </span>
                </li>
                <li>
                  <span>Turning radius</span>
                  <span>11,7 m</span>
                </li>
                <li>
                  <span>No. of cylinders</span>
                  <span>4</span>
                </li>
                <li>
                  <span>Drive Type</span>
                  <span>RWD</span>
                </li>
                <li>
                  <span>Turbo Charger</span>
                  <span>no</span>
                </li>
                <li>
                  <span>Super Charger</span>
                  <span>Twin</span>
                </li>
                <li>
                  <span>Fuel Supply</span>
                  <span>Direct injection</span>
                </li>
              </ul>
            </div>
          </section>
  
          <section className="panels">
            <div className="panels-sm">
              <div className="pane">
                <div>
                  <div className="icon">
                    <i className="fas fa-fire" />
                  </div>
                  <h2>Power and speed unleashed</h2>
                  <a href="#">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="pane"></div>
              <div className="pane"></div>
              <div className="pane">
                <div>
                  <div className="icon">
                    <i className="fas fa-tint"></i>
                  </div>
                  <h2>Respectful to environment</h2>
                </div>
              </div>
            </div>
            <div className="panel-lh"></div>
          </section>
  
          <div className="car-stats">
            <div className="stats">
              <div>
                <h1 className="counter" data-target="206" data-speed="10">
                  210
                </h1>
                <h1>Kmph</h1>
                <h5>Toop Speed</h5>
              </div>
  
              <div>
                <h1 className="counter" data-target="7" data-speed="500">
                  6
                </h1>
                <h1>gears</h1>
                <h5>Gear Box</h5>
              </div>
  
              <div>
                <h1 className="couter" data-target="473" data-speed="1">
                  244
                </h1>
                <h1>Hp</h1>
                <h5>Horse power</h5>
              </div>
            </div>
          </div>
          <div className="car">
            <div className="circle">
              <img src={BMW} alt="car" />
              <div className="inner-md-circle"></div>
              <div className="inner-sm-circle"></div>
            </div>
          </div>
        </section>
    )
}