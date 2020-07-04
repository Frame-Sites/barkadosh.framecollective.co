import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact, faAngular, faAws } from '@fortawesome/free-brands-svg-icons'
import {
  // faPencilRuler,
  // faServer,
  // faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
  faExternalLinkSquareAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {

    const {profile: { articles }} = this.props;

    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Articles</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I'm Reading"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services(articles)}</Container>
              </div>
            </Col>
          </div>
        </Row>
        {/*<Row className="bottom">{this.counters()}</Row>*/}
      </section>
    )
  }

  services(articles) {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          {articles.map((article, i) => {

            let icon;
            let borderCss;
            if (i % 2 === 0) {
              icon = faExternalLinkSquareAlt;
              borderCss = "service border-side"
            }
            else {
              icon = faLink;
              borderCss = "service"
            }

            return (
              <Col md={4} className={borderCss}>
                <AnimationContainer delay={200} animation="fadeInLeft fast">
                  <a href={article.url} target="_blank" rel="noreferrer">
                    <div className="icon">
                      <FontAwesomeIcon icon={icon} />
                    </div>
                  </a>
                  <h4>{article.title}</h4>
                  <p>{article.caption}</p>
                </AnimationContainer>
              </Col>
            )
          })}
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={100}
                text="Happy Clients"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faPizzaSlice}
                value={1000}
                text="Pizzas Ordered"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={500}
                text="Reviews"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={50000}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      )
    }
  }
}

export default Services
