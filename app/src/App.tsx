import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';
import { setContext } from 'apollo-link-context';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Users from './components/users';
import IsAuth from './components/authRoutes/IsAuth';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })
const authLink = setContext(
  async (req, { headers }) => {
    const token = localStorage.getItem('token')
    return {
      ...headers,
      headers: {
        authorization: token ? `Bearer ${token}` : null
      }
    }
  }
)
const link = authLink.concat(httpLink as any);
const client = new ApolloClient({
  link: (link as any),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <IsAuth>
          <Route exact path='/users' component={Users} />
        </IsAuth>
      </Switch>
    </ApolloProvider>
  );
}

export default App;
