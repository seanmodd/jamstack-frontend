import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './client'

export const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
