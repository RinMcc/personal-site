import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const blob = document.getElementById('blob');
document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.style.left = `${clientX}px`;
  blob.style.top = `${clientY}px`;
};

const Tester = () => (
  <Main
    title="Display"
    description="A playground page."
  >
    <article className="post" id="tester">
      <header>
        <h2 data-testid="heading"><Link to="/tester">Playground</Link></h2>
        <div id="blob" />
      </header>
    </article>
  </Main>
);

export default Tester;
