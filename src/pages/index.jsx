import React from 'react';
import Main from '../components/Main';
import Portfolio from '../components/Portfolio';
import Employment from '../components/Employment';
import Contact from '../components/Contact';
import Layout from '../components/layout';

const HomeIndex = () => (
  <Layout title="David Yarzebinski">
    <Main />
    <Portfolio />
    <Employment />
    <Contact />
  </Layout>
);

export default HomeIndex;
