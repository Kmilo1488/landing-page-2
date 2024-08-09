import React from "react"
import { createGlobalStyle } from 'styled-components'
import { LanguageProvider } from '../containers/language';
import Layout from "../components/layout"
import Seo from "../components/seo"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const IndexPage = () => (
  <LanguageProvider>
    <GlobalStyle />
    <Layout>
      <Seo title="Home" />
    </Layout>
  </LanguageProvider>
)

export default IndexPage
