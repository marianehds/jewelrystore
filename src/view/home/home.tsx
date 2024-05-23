import React from 'react';
import './home.scss';
import MinhaImagem from '../../assets/img/teste.jpg';

const home = () => {
  return (
    <section data-page="home">
      <div className='div-titles'>
        <h1 className='bigTitle'>ELEVE SEUS NEGÓCIOS</h1>
        <h3  className='subTitle'>TEMPLATE DE SITE DE VAREJO</h3>
        <button type="button">COMPRE JÁ</button>
      </div>
      <div className='div-img'>
        <img src={MinhaImagem} alt="Minha Imagem" />
      </div>
    </section>
  );
};

export default home;
