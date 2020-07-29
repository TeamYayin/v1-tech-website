import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideFooter from '../components/SideFooter'

import heroImage from '../assets/img/randomCode.png'

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={heroImage} alt="" />
          </span>
        </div>
      </section>
      <section id="one">
        <header>
          <h2>Open Sourced Projects & Contributions</h2>
        </header>
        <section className="content">
          <h2>Coming Soon, Keep Watching</h2>
        </section>
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
)

export default IndexPage
