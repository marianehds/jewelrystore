import React, { useState } from 'react';
import './joinTeam.scss';
import MinhaImagem from '../../assets/img/imgJoinTeam.jpg';
import notFound from '../../assets/img/notFound.jpg';
import { PopUp } from '../../shared';

const joinTeam = () => {
  const vacanciesAvailable = 0;
  const [emailReceived, setIEmailReceived] = useState(false);

  const handleEmail = () => {
    setIEmailReceived(true);
    setTimeout(() => {
      setIEmailReceived(false);
    }, 2000);
  };
  return (
    <>
      {emailReceived && <PopUp />}
      <section data-page="join-team">
        <div className="img-join-team">
          <img src={MinhaImagem} alt="Minha Imagem" />
        </div>
        <div className="vacancies">
          <h1>Join Our Team</h1>
          <h3> Job vacancies available ({vacanciesAvailable})</h3>
          <p>We don't have any job vacancies available at the moment</p>
          <img src={notFound} alt="Minha Imagem" className="not-found" />
          <p>
            Leave your email, and we'll let you know when job openings are
            available:
          </p>
          <input
            type="email"
            id="myInput"
            placeholder="your email here"
            // value={inputValue}
            // onChange={handleChange}
          />
          <button type="submit" onClick={handleEmail}>
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default joinTeam;
