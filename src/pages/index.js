import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideFooter from '../components/SideFooter'

import heroImage from '../assets/img/pic01.jpg'
import pic2 from '../assets/img/pic02.jpg'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import { Link } from 'gatsby'

const project1_img_set = [
  {
    src: require('../assets/img/gallery/fulls/01.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/01.jpg'),
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
  },
  {
    src: require('../assets/img/gallery/fulls/02.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/02.jpg'),
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/img/gallery/fulls/03.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/03.jpg'),
    title: 'Any time ',
    desc: 'Be one with the time',
  },
  {
    src: require('../assets/img/gallery/fulls/04.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/04.jpg'),
    title: 'Any source of light',
    desc: 'Be one with the light',
    full: true,
  },
]
const project2_img_set = [
  {
    src: require('../assets/img/gallery/fulls/05.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/05.jpg'),
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/img/gallery/fulls/06.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/06.jpg'),
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/img/gallery/fulls/07.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/07.jpg'),
    title: 'Be in present',
    desc: 'Be one with the present',
  },
]
const project3_img_set = [
  {
    src: require('../assets/img/gallery/fulls/08.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/08.jpg'),
    title: 'Give away',
    desc: 'Be one with the empathy',
  },
  {
    src: require('../assets/img/gallery/fulls/09.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/09.jpg'),
    title: 'Moment',
    desc: 'Be one with the moment',
  },
  {
    src: require('../assets/img/gallery/fulls/10.jpg'),
    thumbnail: require('../assets/img/gallery/thumbs/10.jpg'),
    title: 'Serenity',
    desc: 'Be one with the purity',
    full: true,
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
          <h2>Highlights</h2>
        </header>
        <div className="content">
          <p>
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing
            elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Etiam
            tristique libero eu nibh porttitor amet fermentum. Nullam venenatis
            erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
          <span className="image main">
            <img src={pic2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>Skills</h2>
        </header>
        <div className="content">
          <p>
            <strong>Etiam tristique libero</strong> eu nibh porttitor amet
            fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies
            condimentum.
          </p>
          <ul className="feature-icons">
            <li className="icon fa-laptop">Consequat tempus</li>
            <li className="icon fa-bolt">Etiam adipiscing</li>
            <li className="icon fa-signal">Libero nullam</li>
            <li className="icon fa-gear">Blandit condimentum</li>
            <li className="icon fa-map-marker">Lorem ipsum dolor</li>
            <li className="icon fa-code">Nibh amet venenatis</li>
          </ul>
          <p>
            Vehicula ultrices sed ultricies condimentum. Magna sed etiam
            consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
            dolor libero, feugiat magna tempus, sed et lorem adipiscing.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>Projects</h2>
        </header>
        <div className="content">
          <p>
            <strong>Integer mollis egestas</strong> nam maximus erat id euismod
            egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
          </p>

          <section>
            <header>
              <a href="https://www.example.com" className="large">
                <h3>Iron Spider</h3>
              </a>
              <p>
                Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
                etiam consequat, et lorem adipiscing sed dolor sit amet,
                consectetur amet do eiusmod tempor incididunt ipsum suspendisse
                ultrices gravida.
              </p>
            </header>
            <div className="content">
              <Gallery images={project1_img_set} />
            </div>
          </section>

          <section>
            <header>
              <Link to="/Elements" className="large">
                <h3>Ultimate Spiderman</h3>
              </Link>
              <p>
                Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                aliquam sed facilisis ante interdum congue. Integer mollis, nisl
                amet convallis, porttitor magna ullamcorper, amet mauris. Ut
                magna finibus nisi nec lacinia ipsum maximus.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={project2_img_set} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <Link to="/Elements" className="large">
                <h3>Amazing Spiderman</h3>
              </Link>
              <p>
                Proin aliquam facilisis ante interdum. Sed nulla amet lorem
                feugiat tempus aenean ornare velit lacus, ac varius sed enim
                lorem ullamcorper dolore. ac varius enim lorem ullamcorper
                dolore. Proin aliquam facilisis.
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={project3_img_set} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>About Me</h2>
        </header>
        <div className="content">
          <p>
            <strong>Elements</strong> This starter contains all elements for a
            page. Check it out
          </p>
          <ul className="actions">
            <li>
              <Link to="/Elements" className="button primary large">
                Goto Elements Page
              </Link>
            </li>
            <li>
              <a href="https://example.com" className="button large">
                Go Outside
              </a>
            </li>
          </ul>
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
