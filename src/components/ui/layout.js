/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query GetCategories {
      allStrapiCategory {
        edges {
          node {
            name
            strapiId
          }
        }
      }
    }
  `)
  console.log('LAYOUT UI COMPONENT GETTING CATEGORY name and strapiId GRAPHQL: ', data.allStrapiCategory.edges)

  return (
    <>
      <Header categories={data.allStrapiCategory.edges} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div
          style={{
            paddingTop: '100px',
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
