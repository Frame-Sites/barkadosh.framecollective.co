import React from 'react'
import Helmet from 'react-helmet'
import {ApolloProvider} from 'react-apollo'
import {useQuery} from '@apollo/react-hooks'
import {gql} from "apollo-boost";
import {client} from '../apollo/client'
import Layout from 'components/layout'
import Spinner from 'components/spinner'
import Hero from 'sections/hero'
import About from 'sections/about'
// import Portfolio from 'sections/portfolio'
import Services from 'sections/services'
// import Testimonials from 'sections/testimonials'
// import Contact from 'sections/contact'

const GET_PROFILE = gql`
{
  getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
    dev
  }
}
`;

const App = () => {

  const {loading, error, data} = useQuery(GET_PROFILE);

  if (loading) return <Spinner duration={null}/>;
  if (error) return <p>{error}</p>;

  const {getProfile: {dev}} = data;
  const profile = JSON.parse(dev);

  const fullName = `${profile.first_name} ${profile.last_name}`

  const { articles, experience, leadership, education } = profile;

  return (
    <div>
      <Helmet>
        <title>{fullName}</title>
        <meta name="description" content={fullName}/>
      </Helmet>
      <Layout profile={profile}>
        <Hero id="home" profile={profile}/>
        { ((experience.length || leadership.length) && (education.length)) ? <About id="about" profile={profile}/> : <></>}
        { articles.length ? <Services id="services" profile={profile}/> : <></>}
        {/*<Services id="services" profile={profile}/>*/}
        {/*<Portfolio id="portfolio" profile={profile}/>*/}
        {/*<Testimonials id="testimonials" profile={profile}/>*/}
        {/*<Contact id="contact" profile={profile}/>*/}
        <Spinner duration={750}/>
      </Layout>
    </div>
  )
};

class Root extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    )
  }
}

export default Root
