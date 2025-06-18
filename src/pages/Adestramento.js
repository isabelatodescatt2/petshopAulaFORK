import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import banner from '../imagens/adestramento/banner-adestramento.jpg'
import adestramento1 from '../imagens/adestramento/adestramento1.jpg'
import adestramento2 from '../imagens/adestramento/adestramento2.jpg'
import adestramento3 from '../imagens/adestramento/adestramento3.jpg'
import adestramento4 from '../imagens/adestramento/adestramento4.jpg'
import adestramento5 from '../imagens/adestramento/adestramento5.jpg'


const Adestramento = () => {

	const photos = [
		{
			id: 1,
			titulo: 'Imagem de adestramento 1',
			url: `${ adestramento1 }`
		},
		{
			id: 2,
			titulo: 'Imagem de adestramento 2',
			url: `${ adestramento2 }`
		},
		{
			id: 3,
			titulo: 'Imagem de adestramento 3',
			url: `${ adestramento3 }`
		},
		{
			id: 4,
			titulo: 'Imagem de adestramento 4',
			url: `${ adestramento4 }`
		},
		{
			id: 5,
			titulo: 'Imagem de adestramento 5',
			url: `${ adestramento5 }`
		},
	]

	return (
		<div>
			<Container fluid>
				<Row>
					<Col className="px-0">
						<img src={ banner } alt="Banner de adestramento" className="w-100"/>
					</Col>
				</Row>
			</Container>

			<Container className="py-5">
				<Row>
					<Col>
						<p>Suspendisse tincidunt elementum tellus at accumsan. Etiam vestibulum gravida augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse pretium dolor ut leo sollicitudin, condimentum mattis mi vestibulum. Donec eu congue lectus. </p>
						<p>Proin enim urna, sagittis sit amet tempor a, facilisis et purus. Nulla dapibus, elit ac tincidunt gravida, nunc dui semper diam, at rutrum nulla sapien in mauris. Nunc mattis rutrum cursus. Nam eu ultricies justo. Sed eu faucibus purus.</p>
					</Col>
				</Row>

				<Row>
					<Col className="photos">
						{
							photos.map( ( photo ) => (
								<div key={ photo.id }>
									<img src={ photo.url } alt={ photo.titulo }/>
								</div>
							)) 
						}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Adestramento;
