import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Aaron McCarthy's personal website. Dublin based Trinity SSCS graduate, ex-Stripe and ex-IBM."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>As I build things I will make out a new section to track my portfolio of work.</p>
    </article>
  </Main>
);

export default Index;
