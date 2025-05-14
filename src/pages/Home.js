import React from "react";
import Banner from "../components/Banner"
import Servico from "../components/Servico";
import BemVindo from "../components/BemVindo";
import banhoTosa from "../imagens/banho-tosa.jpg";
import vacinaCachorro from "../imagens/imagens-banho-e-tosa/vacina-cachorro.jpg";
import adestramento from "../imagens/adestramento.jpg";
import hotelResort from "../imagens/hotel-para-cachorros.jpg";


const Home = () => {
	return (
		<div>
			<Banner/>

			<h1>Home</h1>
			
			<section className="section d-flex py-5">
				<Servico imagemServico={banhoTosa} tituloImagem="Banho e Tosa para Pets" tituloServico="Banho e Tosa"/>
				<Servico imagemServico={vacinaCachorro} tituloImagem="Pet Care para Pets" tituloServico="Pet Care"/>
				<Servico imagemServico={adestramento} tituloImagem="Adestramento para Pets" tituloServico="Adestramente"/>
				<Servico imagemServico={hotelResort} tituloImagem="Hotel resort para Pets" tituloServico="Hotel Resort"/>
			</section>

			<BemVindo/>
		</div>
	);
};

export default Home;
