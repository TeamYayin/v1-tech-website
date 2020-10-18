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
        <div className="content">
          <div className="row"></div>
          <ul className="feature-icons">
            <li className="row icon solid fa-laptop">
              <a href="https://www.linkedin.com/in/vishwastyagi">
                Vishwas Tyagi
              </a>{' '}
              Initial core team member, He is a veteran software engineer with 8
              years of experience.
            </li>
            <li className="row icon solid fa-mobile">Shylaja, Co-Founder</li>
            <li className="row icon solid fa-user-secret">
              <a href="https://prajwalyashasvi.in/">Prajwal</a> Founder and Full
              Stack Developer, with working experience in ML and Information
              Security.
            </li>
          </ul>
        </div>
      </section>
      <section id="first">
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
