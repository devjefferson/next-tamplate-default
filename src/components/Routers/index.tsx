import React from 'react';
import Link from 'next/link'

import { Container } from './styles'

function Routers(){

  const links = [
    { params: {id: 'EUR-BRL'}},
    { params: {id: 'BTC-BRL'}},
    { params: {id: 'USDT-BRL'}},
    { params: {id: 'CAD-BRL'}},
    { params: {id: 'GBP-BRL'}},

  ]

  return (
    <Container>
    <div className="dropdown">
    <button className="dropbtn">Outros Câmbios
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    {
        links.map(({params})=>{
          return(
              <a  key={params.id} href={`/${params.id}`} style={{margin: 5}}>{params.id}</a>

          )
        })
      }
    </div>
  </div>

    </Container>
  );

}

export default Routers;
