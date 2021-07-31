import React from 'react'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Scroll from '../components/Scroll'
import SideFooter from '../components/SideFooter'

// line-16 <p> == {config.subHeading}

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <header>
          <h1>Team Yayin</h1>
          <p>Build, Develop, and Collaborate on innovative designs.</p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="first">
                <a href="#first" className="arrow">
                  <span className="label">Next</span>
                </a>
              </Scroll>
            </li>
          </ul>
        </header>
        </section>
        <section id="first">
        <div className="content">
          <div className="row"></div>
          <ul className="feature-icons">
            <li className="row icon solid fa-laptop">
              <a href="https://www.linkedin.com/in/vishwastyagi">Vishwas Tyagi</a>
              Lead Programming Wizard, He is a veteran software engineer with 8 years of experience.
            </li>
            <li className="row icon solid fa-laptop">
              <a href="https://www.linkedin.com/in/bharani-racharla-2339051a4/">Bharani Racharla</a>
              PCB Design Intern, She is currently pursuing a Bachelor&#39;s degree in Electronics and Communications Engineering from Osmania University. She hopes to master the circuit designing process and build a successful career as a design engineer.
            </li>
            <li className="row icon solid fa-user-secret">
              <a href="https://prajwalyashasvi.in/">Prajwal</a> 
              Founder and Full Stack Developer, his experience and interests are in Java, Cybersecurity, Python, AI and ML.
            </li>
            <li className="row icon solid fa-mobile">Shylaja, Co-Founder</li>
          </ul>
        </div>
      </section>
      <section>
        {' '}
        <header>
          <h2> Work Life at Yayin</h2>
        </header>{' '}
        <SideFooter />
        <div className="content">
          <p> Work from Home and Employee stock options.</p>
          <a
            href="https://yayin-ai-labs.breezy.hr/"
            className="button primary large"
          >
            View Current Openings
          </a>
        </div>
      </section>

      <Footer />
    </div>
  </Layout>
)

export default IndexPage
