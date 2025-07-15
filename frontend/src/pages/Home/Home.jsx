import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import AboutUs from '../../components/AboutUs/AboutUs';
import ContactUs from '../../components/ContactUs/ContactUs';
import Blog from '../../components/Blog/Blog';

const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
       <section id="about-us">
        <AboutUs />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
      <section id="app-download">
        <AppDownload/>
      </section>
    </>
  )
}

export default Home