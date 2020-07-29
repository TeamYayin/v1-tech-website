import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideFooter from '../components/SideFooter'

import heroImage from '../assets/img/randomCode.png'
import pic2 from '../assets/img/pic02.jpg'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import { Link } from 'gatsby'

const project1_img_set = [
  {
    src: require('../assets/img/gallery/fulls/blog-awsdnerd-1.webp'),
    thumbnail: require('../assets/img/gallery/thumbs/blog-awsdnerd-1.webp'),
    title: 'Landing Page Image',
    desc: 'a washedup nerd blog home page',
    full: true,
  },
  {
    src: require('../assets/img/gallery/fulls/blog-awsdnerd-2.webp'),
    thumbnail: require('../assets/img/gallery/thumbs/blog-awsdnerd-2.webp'),
    title: 'Bhaasha Landing Page Image',
    desc: 'A sub blog bhasha under Washedup Nerd blog',
  },
  {
    src: require('../assets/img/gallery/fulls/blog-awsdnerd-3.webp'),
    thumbnail: require('../assets/img/gallery/thumbs/blog-awsdnerd-3.webp'),
    title: 'Dev Landing Page Image',
    desc: 'Dev sub blog under Washedup Nerd blog',
  },
  {
    src: require('../assets/img/gallery/fulls/blog-awsdnerd-4.webp'),
    thumbnail: require('../assets/img/gallery/thumbs/blog-awsdnerd-4.webp'),
    title: 'IELTS Landing Page Image',
    desc: 'English learning sub blog under Washedup Nerd blog',
    full: true,
  },
]
const project2_img_set = [
  {
    src: require('../assets/img/gallery/fulls/makers-keyboard-1.webp'),
    thumbnail: require('../assets/img/gallery/thumbs/makers-keyboard-1.webp'),
    title: 'Telugu Keyboard Image',
    desc: 'A 75% mechanical keyboard with proirity to regional legends',
    full: true,
  },
  {
    src: require('../assets/img/gallery/fulls/makers-keyboard-2.webp'),
    thumbnail: require('../assets/img/gallery/thumbs/makers-keyboard-2.webp'),
    title: 'Coming Soon Image',
    desc: 'Keep Watching',
  },
  {
    src: require('../assets/img/gallery/fulls/makers-keyboard-3.webp'),
    thumbnail: require('../assets/img/gallery/thumbs/makers-keyboard-3.webp'),
    title: 'Coming Soon Image',
    desc: 'Keep Watching',
  },
]

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

      <section id="first">
        <header>
          <h2>Our Story</h2>
        </header>
        <div className="content">
          <p>
            <strong>Started in 2020</strong>, At Yayin, we believe that
            collaboration with the community encourages our product designs
            while working and experimenting on our innovative ideas in computing
            and electronics.
          </p>
          <ul className="feature-icons">
            <li className="icon solid fa-cog">Makers</li>
            <li className="icon solid fa-code">Training</li>
          </ul>
          <span className="image main">
            <img src={pic2} alt="circuit silicon art" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Services</h2>
        </header>
        <div className="content">
          <p>
            <strong>Although we are</strong> product-driven, we sporadically
            offer below services designed to help any business or its products.
          </p>
          <ul className="feature-icons">
            <li className="icon solid fa-laptop">Web Development</li>
            <li className="icon solid fa-mobile">Mobile Apps</li>
            <li className="icon solid fa-bug">Hunt and Fix</li>
            <li className="icon solid fa-user-secret">Analyze Risks</li>
          </ul>
        </div>
      </section>

      <section>
        <header>
          <h2>What We Accomplished</h2>
        </header>
        <div className="content">
          <p>
            <strong>Products, Clients, and</strong> Projects, which we are
            currently working on or designed and developed in the last few
            months.
          </p>

          <section>
            <header>
              <a href="https://awashedupnerd.in/" className="large">
                <h3>A Washedup Nerd Blog</h3>
              </a>
              <p>
                We designed this blog to aggregate curated learning resources
                mined from open internet for Java, Python, Javascript, other
                tech stacks, and information security titbits. We also maintain
                the Blog content and follow the blog for updates on products
                developed at Yayin.
              </p>
              <p>
                We also talk about opensource technologies for blogging and
                hosting web content in Indo-Aryan and Dravidian languages. A
                subdomain of the blog covers learning resources for IELTS and
                other English Language Tests.
              </p>
            </header>
            <div className="content">
              <Gallery images={project1_img_set} />
            </div>
          </section>

          <section>
            <header>
              <Link to="/AboutUs" className="large">
                <h3>Makers Products</h3>
              </Link>
              <p>
                Mechanical keyboards with primary layouts in regional indian
                languages.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={project2_img_set} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>Our Team</h2>
        </header>
        <div className="content">
          <p>
            <strong>Full Stack Developers,</strong> Programmers, Educators, and
            Information Security Researchers.
          </p>
          <Link to="/AboutUs" className="button primary large">
            View Team Members
          </Link>
        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
)

export default IndexPage
