import React from "react";
import "./mustang.css";
import R8 from "./img/R8.png";
import speed from "./img/speed.png";
import rain from "./img/rain.png";
import Mustang from "./img/mustang.png";

export default function cmustang() {
    return (
        <section>
      <nav>
            <a href="index.html" class="brand">HOME</a>
            </nav>
        <header>
          <div className="header-body">
            <div>
              <h1>Join the Jorney</h1>
              <p>
                Leaner and meaner then ever. The new Mustang boddly goes where
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
              The Mustang can't help but steal the spotlight. With its sharp angular
              lines <br /> and exotic, glass covered engine, the Mustang has a Wide
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
              <p>Built for speed, with a 5 liter V8 enginge</p>
            </div>
          </div>
          <div className="info">
            <img src={speed} alt="icon" />
            <div>
              <h3>Performance</h3>
              <p>Accelerating from zero to 60 mph in 4.3s</p>
            </div>
          </div>

          <div className="info">
            <img src={rain} alt="icon" />
          </div>
          <h3>Cuttind Edge</h3>
          <p>Sharing half of its parts with the R8 LMS racecar</p>
        </div>
        <section className="specs">
          <div>
            <div className="specs-header">
              <h2>Tech Specs</h2>
              <span>Engine</span>
            </div>
            <ul>
              <li>
                <span>Engine displacement</span>
                <span>5.037</span>
              </li>
              <li>
                <span>Maximun power</span>
                <span>395 bhp @ 6500-50 rpm</span>
              </li>
              <li>
                <span>Maximum torque</span>
                <span>515 Nm @ 4250-50 rpm </span>
              </li>
              <li>
                <span>Turning radius</span>
                <span>5.8 m</span>
              </li>
              <li>
                <span>No. of cylinders</span>
                <span>8</span>
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
                <span>Yes</span>
              </li>
              <li>
                <span>Fuel Supply</span>
                <span>EFI</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="panels">
          <div className="panels-sm">
            <div className="panel">
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
            <div className="panel"></div>
            <div className="panel"></div>
            <div className="panel">
              <div>
                <div className="icon">
                  <i className="fas fa-tint"></i>
                </div>
                <h2>Respectful to environment</h2>
              </div>
            </div>
          </div>
          <div className="panel-lg"></div>
        </section>

        <div className="car-stats">
          <div className="stats">
            <div>
              <h1 className="counter" data-target="206" data-speed="10">
                250
              </h1>
              <h1>Kmph</h1>
              <h5>Toop Speed</h5>
            </div>

            <div>
              <h1 className="counter" data-target="7" data-speed="500">
                10
              </h1>
              <h1>gears</h1>
              <h5>Gear Box</h5>
            </div>

            <div>
              <h1 className="couter" data-target="473" data-speed="1">
                489
              </h1>
              <h1>Hp</h1>
              <h5>Horse power</h5>
            </div>
          </div>
        </div>
        <div className="car">
          <div className="circle">
            <img src={Mustang} alt="car" />
            <div className="inner-md-circle"></div>
            <div className="inner-sm-circle"></div>
          </div>
        </div>
      </section>
    )
}