import React, {useState } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Container } from '../styles/styles'
import Axios from 'axios'
import Loading from '../components/Loading'


interface DataCurrency {

}
export default function Home() {

  return (
    <Container>
      <Head>

      </Head>
      <main>

      </main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const reponse = await Axios({
    url: 'https://economia.awesomeapi.com.br/json/daily/USD-BRL/15',
    method: 'GET'
  })

  const dataProps = reponse.data

  return {
    props: { dataProps },
    revalidate: 30
  }
}
