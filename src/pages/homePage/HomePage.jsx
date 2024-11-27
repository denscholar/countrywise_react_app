import React from 'react'
import { Link } from 'react-router-dom'
import PageNav from '../../components/pageNav/PageNav'

const HomePage = () => {
  return (
    <div>
    <PageNav/>
      <h1>Home Page</h1>
      <Link to="/app">Go to page layout</Link>

    </div>
  )
}

export default HomePage