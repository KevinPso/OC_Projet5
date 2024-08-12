import React from "react"
import Header from "../components/Header"
import Banner from "../components/Banner"
import homeBanner from "../assets/homeBanner.webp"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Header />
      <Banner image={homeBanner} showTitle={true}/>
      <Footer />
    </div>
  )
}

export default Home
