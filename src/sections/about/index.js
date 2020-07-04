import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

  static contextType = ThemeContext

  render() {
    const {profile: {intro, skills, coursework, experience, education, leadership}} = this.props;
    const {content} = intro[0]

    return (
      <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
        {this.particles()}
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              {/*<div className="line-text">*/}
              {/*    <h4>About</h4>*/}
              {/*</div>*/}
              <div className="separator"/>
              <h3>About</h3>
              <div className="separator"/>
              <p>{content}</p>
              <div className="social social_icons">
                <FontAwesomeIcon icon={faGithub} className="social_icon"
                                 onClick={() => window.open('https://www.github.com')}/>
                <FontAwesomeIcon icon={faTwitter} className="social_icon"
                                 onClick={() => window.open('https://www.twitter.com')}/>
                <FontAwesomeIcon icon={faYoutube} className="social_icon"
                                 onClick={() => window.open('https://www.youtube.com')}/>
                <FontAwesomeIcon icon={faLinkedin} className="social_icon"
                                 onClick={() => window.open('https://www.linkedin.com')}/>
              </div>
            </div>
          </Col>
          <Col md={6} className="skills">
            <div className="line-text">
              <h4>Skills & Experience</h4>
            </div>
            { experience.length ? <h6>Professional</h6> : <></>}
            <div>
              <ul>
                {
                  experience.map(exp => {
                    return (<li key={Math.random()}>{exp.position}, {exp.company} ({exp.start_date} - {exp.end_date})</li>)
                  })
                }
              </ul>
            </div>
            {leadership.length ? <h6>Leadership</h6> : <></>}
            <div>
              <ul>
                {
                  leadership.map(lead => {
                    return (<li key={Math.random()}>{lead.position}, {lead.organization} ({lead.start_date} - {lead.end_date})</li>)
                  })
                }
              </ul>
            </div>
            { skills.length ? <h6>Skills</h6> : <></>}
            <div>
              <ul>
                {
                  skills.map(skill => {
                    return (<li key={Math.random()}>{skill.content}</li>)
                  })
                }
              </ul>
            </div>
            { coursework.length ? <h6>Coursework</h6> : <></>}
            <div>
              <ul>
                {
                  coursework.map(course => {
                    return (<li key={Math.random()}>{course.course_name}</li>)
                  })
                }
              </ul>
            </div>
            { education.length ? <h6>Education</h6> : <></>}
            <div>
              <ul>
                {
                  education.map(ed => {
                    console.log(ed)

                    if (ed.majorTwo && ed.minorOne && ed.minorTwo) {
                      return (
                        <li key={Math.random()}>
                          {ed.degreeSubtype} in {ed.majorOne} & {ed.majorTwo} with minors in {ed.minorOne} & {ed.minorTwo}
                        </li>
                      )
                    }
                    if (ed.majorTwo && ed.minorOne) {
                      return (
                        <li key={Math.random()}>
                          {ed.degreeSubtype} in {ed.majorOne} & {ed.majorTwo} with a minor in {ed.minorOne}
                        </li>
                      )
                    }
                    if (ed.majorTwo) {
                      return (
                        <li key={Math.random()}>
                          {ed.degreeSubtype} in {ed.majorOne} & {ed.majorTwo}
                        </li>
                      )
                    }
                    return (<li key={Math.random()}>{ed.degreeSubtype} in {ed.majorOne}</li>)
                  })
                }
              </ul>
            </div>
            {/*<div className="skills-container">*/}
            {/*  <p>Python</p>*/}
            {/*  <Progress name="Web Design" value={90} delay={1100}/>*/}
            {/*  <Progress name="Angular" value={50} delay={1100}/>*/}
            {/*  <Progress name="React" value={80} delay={1100}/>*/}
            {/*  <Progress name="Vue" value={40} delay={1100}/>*/}
            {/*  <Progress name="MongoDB" value={100} delay={1100}/>*/}
            {/*  <Progress name="CSS" value={50} delay={1100}/>*/}
            {/*</div>*/}
          </Col>
        </Row>
      </section>
    )
  }

  particles() {
    return (
      <Particles
        className="particles"
        params={{
          "particles": {
            "number": {
              "value": 50,
              "density": {
                "enable": false,
                "value_area": 5000
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": .5
            },
            "size": {
              "value": 1
            },
          },
          "retina_detect": true
        }}/>
    )
  }

}

export default Hero
