import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Gallery from './components/Gallery';

function App() {
  return (
    <Layout>
      <Hero />
      <Story />
      <Menu />
      <Reservation />
      <Gallery />
    </Layout>
  );
}

export default App;
