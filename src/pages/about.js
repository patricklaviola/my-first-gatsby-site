import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there! I'm the proud creator of this site, which I built ith Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage