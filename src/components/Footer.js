import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {
  return (
    <Container>
      <Row>
        <Col className='formulario'>
            <h1>TITULO</h1>

            <div className='forms'>

                <input type='text' id="nome" value={ props.nomeInput } placeholder='Nome' />
                <input type='email' id="email" value={ props.emailInput } placeholder='Email' />
                <input type='text' id="nome" className='mensagemForms' value={ props.mensagemInput } placeholder='Mensagem' />
            </div>
            
            <button id='enviar' className='botaoEnviar'>Enviar Agora</button>
        </Col>
        <Col>
        
        </Col>
      </Row>  
    </Container>
  );
}

export default Footer;