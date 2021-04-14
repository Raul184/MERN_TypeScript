import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Redirect } from 'react-router';

const IS_LOGGED_IN = gql`
{
  me{
    id
  }
}
`
interface Props {
  children?: React.ReactNode
}
export default function IsAuth({ children }: Props) {
  const { loading, error, data } = useQuery(IS_LOGGED_IN)
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  if (!data.me) {
    return <Redirect to={{ pathname: '/' }} />
  }
  return <>
    {children}
  </>
}
