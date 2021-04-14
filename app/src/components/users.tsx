import React from 'react'
import { gql, useQuery } from '@apollo/client';


const USERS_QUERY = gql`
  query {
    allUsers {
      id
      name
      email
    }
  }
`
interface User {
  id: number,
  name: string
}
export default function Users() {
  const { loading, error, data } = useQuery(USERS_QUERY)
  if (loading) {
    return <p>Loading...</p>
  }
  console.log(data);
  if (error) return <p>{error.message}</p>
  return (
    <div>
      {data.allUsers.map((user: User) => <p key={user.id}>{user.name}</p>)}
    </div>
  )
}
