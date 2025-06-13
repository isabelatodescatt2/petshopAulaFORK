import React from "react";
import Rotulo from "../components/Rotulo";
import ContentImgLeft from "../components/ContentImgLeft.js" 
import banhoTosa from "../imagens/banhoTosa.jpg"
import CallToAction from "../components/CallToAction.js";
import ContentImgRight from "../components/ContentImgRight.js";
import vacina from "../imagens/imagens-banho-e-tosa/vacina-cachorro.jpg"

const BanhoTosa = () => {
	return (
		<div>
			<Rotulo rotulo='Banho e Tosa' />

			<ContentImgLeft imagem={ banhoTosa } textoimagem='Foto de banho e tosa' titulo='Cuidados com seu pet' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor diam erat, sed tristique turpis elementum sed. Sed quis euismod diam. Suspendisse odio felis, sodales condimentum dui eu, mattis faucibus risus. Praesent suscipit neque mauris, vitae semper ipsum posuere quis. Integer tempor metus id ex consequat consectetur. Curabitur iaculis, nunc sed dapibus interdum, velit nisi posuere purus, ac sagittis elit sapien eget mauris. In facilisis metus et ante tristique, quis bibendum urna facilisis. Ut tristique hendrerit tincidunt.'/>

			<CallToAction titulo='PET CARE' />

			<ContentImgRight titulo='Atenção especial ao seu pet' texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex justo, dictum nec ante nec, commodo mollis nibh. Sed nec nisl varius lorem dictum ornare. Donec fringilla sagittis ipsum quis finibus. Quisque laoreet congue vehicula. Sed et tempus dolor. Ut eget fermentum tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce lacinia nulla a velit posuere, non pretium velit commodo. Aliquam aliquet ipsum et ligula condimentum pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin placerat malesuada purus, sed maximus ante ultricies eu.' imagem={ vacina } textoImagem='Cachorro sendo vacinado' mostrarBotao={ true }/>
		</div>
	);
};

export default BanhoTosa;
