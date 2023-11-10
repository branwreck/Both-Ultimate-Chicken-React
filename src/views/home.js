import React from 'react'

import { Helmet } from 'react-helmet'

import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Both Ultimate Chicken</title>
        <meta property="og:title" content="Both Ultimate Chicken" />
      </Helmet>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">
              Welcome to NurseConnect
            </h1>
            <span className="home-hero-sub-heading">
              Connecting nurses with opportunities
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button2 button">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container2">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              About NurseConnect
            </h2>
            <span className="home-details-sub-heading">
              NurseConnect is a comprehensive website designed to help nurses
              showcase their skills, connect with potential employers, and find
              their dream job. With our user-friendly platform, you can create a
              personalized profile, upload your resume, and browse through
              numerous job listings. Join NurseConnect today and take the next
              step in your nursing career.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1592041828827-729be73052d4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY5OTU3NDMxMXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">Find Your Dream Job</h1>
          <span className="home-banner-sub-heading">
            Discover a wide range of nursing positions tailored to your skills
            and preferences.
          </span>
          <button className="home-banner-button button">Search Jobs</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container3">
              <span className="home-text03 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text06 heading2">Common questions</h2>
              <span className="home-text07">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container4">
              <Question
                Answer="I have been a nurse for 10 years, working in various healthcare settings including hospitals, clinics, and home care."
                Question="What is your nursing experience?"
              ></Question>
              <Question
                Answer="I am certified in Basic Life Support (BLS) and Advanced Cardiac Life Support (ACLS)."
                Question="What certifications do you have?"
              ></Question>
              <Question
                Answer="I have a Bachelor of Science in Nursing (BSN) degree from XYZ University."
                Question="What is your educational background?"
              ></Question>
              <Question
                Answer="Yes, I can provide references upon request."
                Question="Can you provide references?"
              ></Question>
              <Question
                Answer="Yes, I am proficient in using various EMR systems such as Epic and Cerner."
                Question="Do you have experience with electronic medical records (EMR) systems?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container5">
            <span className="home-logo">NURSEWEBSITE</span>
            <nav className="home-nav">
              <span className="home-nav2">Resume</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container6">
            <span className="home-text24">
              © 2023 myCompany, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
