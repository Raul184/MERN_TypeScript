import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import './App.css';

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        Hello
      </div>
    </ApolloProvider>
  );
}

export default App;
