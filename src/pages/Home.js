import React from "react";
import Banner from "../components/Banner";
import banner from "../imagens/banner.jpg";
import Servico from "../components/Servico";
import banhoTosa from "../imagens/banhoTosa.jpg";
import vacinaCachorro from "../imagens/vacina-cachorro.jpg";
import adestramento from "../imagens/adestramento.jpg";
import hotelResort from "../imagens/hotel-para-cachorros.jpg";
import TituloSecao from "../components/TituloSecao";
import Cliente from "../components/Cliente";
import Cachorro from "../imagens/rottweiller.jpg"
import Delivery from "../components/Delivery";

const Home = () => {
	return (
		<div>
			<Banner/>

			<section className='section d-flex py-5'>
			<Servico imagemServico={ banhoTosa } tituloImagem="Banho e Tosa para Pets" tituloServico="Banho e Tosa" />
			<Servico imagemServico={ vacinaCachorro } tituloImagem="Pet care para pets" tituloServico="Pet Care" />
			<Servico imagemServico={ adestramento } tituloImagem="Adestramento para pets" tituloServico="Adestramento" />
			<Servico imagemServico={ hotelResort } tituloImagem="Hotel e resorts para pets" tituloServico="Hotel Resort" />
			</section>

			<TituloSecao />

			<section className='section d-flex'>
			<Cliente tituloCliente="Relação com o cliente" textCliente="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum tincidunt arcu, eu porttitor odio efficitur eget. Nunc sed augue sit amet dolor molestie interdum sed et erat. Vivamus nisi enim, eleifend id ex quis, accumsan ornare felis. Ut vel libero consequat, rhoncus orci id, auctor lorem. Donec mollis pellentesque magna a vestibulum. Nam sed arcu sit amet sapien tincidunt convallis a non quam. Cras efficitur lacus sit amet risus eleifend tincidunt. Nullam et felis molestie, tempus libero ut, egestas erat. Vestibulum iaculis efficitur felis at ornare. Quisque sed imperdiet neque. Suspendisse suscipit efficitur lacus, et scelerisque purus facilisis sit amet. Cras a quam id nisi pretium tempor. Pellentesque mattis sapien non quam gravida, a interdum massa congue. Sed in turpis dapibus, vehicula enim ut, sollicitudin lorem." Cliente imagemCliente={ Cachorro } />
			</section>

			<section className="d-flex">
				<Delivery imagemDelivery={ banner } tituloDelivery="Atendimento Delivery" numeroDelivery="0800 555 3232" />
			</section> 
			
		</div>

	);
};

export default Home;
