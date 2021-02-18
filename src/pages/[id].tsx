import Axios from 'axios'
import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Routers from '../components/Routers'

import { Container } from '../styles/styles'

interface DataCurrency {
}

export default function currency({ response }) {
  const [data, setData] = useState<DataCurrency>( response )


  if(!data){
    return <Loading />
  }
  return (
    <Container>
      <Head>
      </Head>

      <main>

      </main>
    </Container>
  )
}
/*
export async function getStaticProps({ params }) {
  const response = await Axios({
    url: `https://economia.awesomeapi.com.br/json/daily/${params.id}/15`,
    method: 'GET'
  })
  return { props: { response: response.data }, revalidate: 30 }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'USD-BRL' } },
      { params: { id: 'EUR-BRL' } },
      { params: { id: 'BTC-BRL' } },
      { params: { id: 'USDT-BRL' } },
      { params: { id: 'CAD-BRL' } },
      { params: { id: 'GBP-BRL' } }
    ],
    fallback: false
  }
}
*/
