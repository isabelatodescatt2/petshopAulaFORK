import React from 'react'
import Col from 'react-bootstrap/Col'

function Delivery(props) {
  return (
    <Col className='delivery'>
          <img className='img_Delivery' src={ props.imagemDelivery } alt={ props.altDelivery } />
          <div className='atendimento_txt'>
            <h3 className='titulo_delivery text-center'>{ props.tituloDelivery }</h3>
            <h2 className='delivery_titulo text-center'>{ props.numeroDelivery }</h2>
          </div>
      </Col>
  )
}

export default Delivery