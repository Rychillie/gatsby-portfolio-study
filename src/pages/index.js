import React from "react"

import ScrollBar from "smooth-scrollbar"

import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import VideoSection from "../components/videoSection"
import Footer from "../components/footer"

import "../styles/styles.scss"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    <VideoSection />
    <Footer />
  </div>
)

export default IndexPage
