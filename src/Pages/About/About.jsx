import React from 'react';
import './About.css';
import aboutImg from '../../assets/aboutImg.png';
import { IoMdStarOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";
import Journey from '../../components/Journey/Journey';
import FounderImg from '../../assets/founderImg.jpg';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="About-Container">

      <div className="Upper-Section">
        <div className="leftSide">
          <h1>Crafting Quality for</h1>
          <h1>Everyday Life</h1>

          <p>
            We started with a simple idea: to bring sustainable, high-quality goods
            to everyone, everywhere. Discover our journey from a small garage to
            your doorstep.
          </p>

          <Link to="/products" className="shop-collection-btn">
            Shop Our Collection
          </Link>
        </div>

        <div className="rightSide">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div>

      <div className="Lower-Section">
        <h1>Our Core Values</h1>
        <p>
          We believe in transparency, quality, and putting the customer first.
          These principles guide every decision we make.
        </p>

        <div className="Bottom-Containers">
          <div className="Bottom-Item">
            <span><IoMdStarOutline /></span>
            <h1>Quality First</h1>
            <p>
              We prioritize quality in every product and service we offer to ensure
              customer satisfaction.
            </p>
          </div>

          <div className="Bottom-Item">
            <span><FaRegHeart /></span>
            <h1>Customer Love</h1>
            <p>
              We build meaningful relationships with our customers and value their
              trust above all.
            </p>
          </div>

          <div className="Bottom-Item">
            <span><FaLeaf /></span>
            <h1>Sustainability</h1>
            <p>
              Our commitment to sustainable practices ensures a positive impact on
              the environment.
            </p>
          </div>
        </div>
      </div>

      <Journey />

      <div className="Meet-Founder">
        <div className="Founder-Container">
          <div className="Founder-Left">
            <img src={FounderImg} alt="Founder" />
          </div>

          <div className="Founder-Right">
            <span>MEET THE FOUNDER</span>
            <h1>Rohit Mehta</h1>
            <p>
              <i>
                Building this brand has been a journey of passion and persistence.
                We are dedicated to creating products that bring joy and utility
                to everyday life. Thank you for being part of our story.
              </i>
            </p>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default About;
