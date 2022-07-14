import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Portfolio from '../components/portfolio'

const Home: NextPage = () => {
  return (
    <div className="">
      <Layout>
        <Portfolio />
      </Layout>
    </div>
  )
}

export default Home
