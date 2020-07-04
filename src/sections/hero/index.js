import React from 'react'
import './styles.scss'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Glitch from 'components/glitch'
import Typewriter from 'typewriter-effect'
import ThemeContext from '../../context'
import getCDNUrl from "../../utils/cdn";

class Hero extends React.Component {

  static contextType = ThemeContext

  render() {

    const { profile: { first_name, last_name, assets, intro }} = this.props;

    const fullName = `${first_name} ${last_name}`;

    const {content} = intro[0]

    const [resumeObj] = assets.filter(asset => asset.type === 'resume');
    const resumeUrl = getCDNUrl(resumeObj.url, 'resume');

    const [imageObj] = assets.filter(asset => asset.type === 'primary');
    const imageUrl = getCDNUrl(imageObj.url, 'primary');

    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Hi, I'm</h4>
              </div>
              <Glitch text={fullName} />
              <p>{content}</p>
              {/*<Typewriter*/}
              {/*  options={{*/}
              {/*    strings: [*/}
              {/*      'UI/UX Designer',*/}
              {/*      'PHP Developer',*/}
              {/*      'Mobile App Expert',*/}
              {/*    ],*/}
              {/*    autoStart: true,*/}
              {/*    loop: true,*/}
              {/*  }}*/}
              {/*/>*/}
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                <button className="hover-button">
                  <span>Download CV</span>
                </button>
              </a>
            </div>
            {this.icons()}
          </Col>
          <Col md={6} className="img">
            <img
              // src={this.props.mainImg.childImageSharp.fluid.src}
              src={imageUrl}
              alt="person"
            />
          </Col>
        </Row>
      </section>
    )
  }

  icons() {
    return this.props.icons.edges.map((value, index) => {
      return (
        <img
          src={value.node.childImageSharp.fluid.src}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${Math.random() *
              (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)}%`,
          }}
          alt="shape"
          key={index}
        />
      )
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "icons" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "person.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
)
