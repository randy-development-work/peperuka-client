import React, { Fragment } from 'react';
// import '../../App.css';
import '../App.css'
// import Cards from '../Cards';
import Welcome from '../Welcome';
// import Footer from '../Footer';
import Categories from '../Categories';

function Home() {
  return (
    <Fragment>
      <Welcome />
      <Categories />
      {/* <Footer /> */}
    </Fragment>
  );
}

export default Home;