import React from 'react'
import styles from './HomePage.module.css'
import { Link } from 'react-router-dom'
import PageNav from '../../components/pageNav/PageNav'


const HomePage = () => {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link className='cta' to="/app">Start tracking now</Link>
      </section>
    </main>
  )
}

export default HomePage

