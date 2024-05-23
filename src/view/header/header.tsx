import React from 'react';
import './header.scss';
import { useNavigate } from 'react-router-dom';

const header = () => {
  const navigate = useNavigate();

  return (
    <section data-page="header">
      <div className='brand-name'>cool brand</div>
      <div className="buttons">
        <a onClick={() => navigate('/')}>HOME</a>
        <a onClick={() => navigate("/shop")}>SHOP</a>
        <a>CUSTOMER REVIEWS</a>
        <a onClick={() => navigate('/join-team')}>JOIN OUR TEAM</a>
      </div>
    </section>
  );
};

export default header;
