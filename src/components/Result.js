import React from 'react';
import image from "../img/logo.png"
import "../styles/PageResult.css"
import alimentation from "../img/alimentation.png"
import energie from "../img/energie-internet.png"
import environnement from "../img/environnement.png"
import quotidien from "../img/gestes-quotidiens.png"
import transport from "../img/transports.png"
// import { useParams } from 'react-router';

const Result = () => {
  // let result = localStorage.getItem('formResult');

  // if (result) {
  //   result = JSON.parse(result);
  //   result = result.formResponses
  //   console.log(result);
  // } else {
  //   console.log('No data found in localStorage.');
  // }
  // const waterUsedInShower = result[1][10] * 52 * result[1][10] * 10
  // const waterUsedInBath = result[1][12] * 150
  // const waterUsedInBathroom = waterUsedInShower + waterUsedInBath
  // const wateUsedInToiletPaper = result[2][14] * 52 * 0.2
  // const waterUsedInToiletFlush = result[2][13] * 52 * 10
  // const waterUsedInToilet = wateUsedInToiletPaper + waterUsedInToiletFlush
  // console.log(waterUsedInBathroom)

  // Assuming 'result' has specific properties you want to display
  // For example, if it has a 'formResponses' key


  // Render specific properties or handle the object accordingly
  // Données fictives pour les 5 cartes
  const cardData = [
    { title: 'Alimentation', imageSrc: alimentation, percentage: 80 },
    { title: 'Energie', imageSrc: energie, percentage: 60 },
    { title: 'Environnement', imageSrc: environnement, percentage: 75 },
    { title: 'Quotidien', imageSrc: quotidien, percentage: 90 },
    { title: 'Transport', imageSrc: transport, percentage: 50 },
  ];

  const additionalCards = [
    { title: 'Dépenses d\'énergie', percentage: 75 },
    { title: 'Dépenses d\'eau', percentage: 60 },
  ];

  return (
    <div className='body'>
      <header>
        <img src={image} alt="Logo" className="logo" />
      </header>
      <main className="main-container">
        <div className="main-content">
          <div className="card-container">
            {cardData.map((card, index) => (
              <div key={index} className="card_stats">
                <img src={card.imageSrc} alt={card.title} className="card-image" />
                <h2 className="card-title">{card.title}</h2>
                <p className="card-percentage">{card.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="additional-cards-container">
          {additionalCards.map((card, index) => (
            <div key={index} className="card">
              <h2 className="card-title">{card.title}</h2>
              <p className="card-percentage">{card.percentage}%</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Result;