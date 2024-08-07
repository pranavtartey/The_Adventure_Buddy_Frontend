import { Link } from "react-router-dom";
import LinkCard from "./LinkCard";

const Home = () => {
  return (
    <>
      <p>This is the image component</p>
      <h2>Welcome To Adventure Life</h2>
      <p>
        Embark on an adventure with The Adventure Buddy - Pioneering Affordable
        and Accessible Outdoor Experiences in Bundelkhand
      </p>
      <button>Read More</button>
      <br />
      <h2>30+</h2>
      School Camps
      <h2>5000+</h2>
      Students Enrollment
      <h2>15+</h2>
      Adventure Tours
      <h2>25+</h2>
      Adventure Activities
      <h2>What We Offering?</h2>
      <h1>Our Activities</h1>
      <LinkCard>School Camps</LinkCard>
      <LinkCard>Outdoor Camps</LinkCard>
      <LinkCard>Adventure Activities</LinkCard>
      <h3>leading with</h3>
      <h1>SAFETY</h1>
      <h3>in mind</h3>
      <LinkCard>Professional Trainer</LinkCard>
      <LinkCard>Accilives</LinkCard>
      <LinkCard>Certified Equipments</LinkCard>
      <h2>Let's Begin</h2>
      <h1>The Adventure...</h1>
      <Link>Linktree</Link>
      <br />
      <h2>Experience</h2>
      <h1>The Thrill</h1>
      <h1>Adventure</h1>
      <h4>What's Happening</h4>
      <h1>News Articles</h1>
      <h1>What People Say About Us...</h1>
      <footer>
        <div>
          <ul>
            <li>
              <h2>Explore</h2>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h2>Quick Links</h2>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Register</Link>
            </li>
            <li>
              <Link>Safety</Link>
            </li>
            <li>
              <Link>Gallery</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>School Camps</Link>
            </li>
            <li>
              <Link>Outdoor Camps</Link>
            </li>
            <li>
              <Link>Adventure Camps</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h2>Head Office</h2>
            </li>
            <li>
              RISE Incubation Center, Nagar Nigam Premise , Elite Chauraha,
              Civil Lines, Jhansi, Uttar Pradesh - 284003
            </li>
            <li>
              <h2>Connect With Us!</h2>
            </li>
            <li>9335819313, 8527275665</li>
            <li>connect@theadventurebuddy.in</li>
          </ul>
        </div>
        &#169;2024 The Adventure Buddy. All Rights Reserved.
      </footer>
    </>
  );
};

export default Home;
