import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Aaron McCarthy</h2>
        <p>pronunciation Ah-rin <br /> Mack Car-Thee</p>
        <p><a href="mailto:aaronedmccarthy@gmail.com">aaronedmccarthy@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Aaron. I like building things.
        I am a <a href="https://www.scss.tcd.ie/undergraduate/computer-science-business/ss/">Trinity Computer Science and business</a> graduate
        , <a href="https://stripe.com">ex-Stripe</a>.
        Before Stripe I was consulting at <a href="https://www.ibm.com/consulting/">IBM</a>
        , and I&apos;m now looking for a new opportunity.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Aaron McCarthy <Link to="/">https://rinmcc.github.io/personal-site/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
