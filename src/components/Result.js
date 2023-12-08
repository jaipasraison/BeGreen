import React from 'react';
import image from "../img/logo.png"
import "../styles/PageResult.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Iconalimentation from '../img/icon_alimentation.png';
import Iconenergie from '../img/icon_energie.png';
import Iconenvironnement from '../img/icon_environnement.png';
import Iconquotidien from '../img/icon_quotidien.png';
import Icontransport from '../img/icon_transports.png';
import Iconbase from '../img/icon_base.png';


import alim from "../img/alim.png"
import ene from "../img/ene.png"
import env from "../img/env.png"
import quot from "../img/quot.png"
import tran from "../img/tran.png"
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
    { title: 'Allimentation', imageSrc: alim, percentage: 80 },
    { title: 'Energie', imageSrc: ene, percentage: 60 },
    { title: 'Environnement', imageSrc: env, percentage: 75 },
    { title: 'Quotidien', imageSrc: quot, percentage: 90 },
    { title: 'Transport', imageSrc: tran, percentage: 50 },
  ];

  const additionalCards = [
    { title: 'Dépenses d\'énergie', percentage: 75 },
    { title: 'Dépenses d\'eau', percentage: 60 },
  ];

  return (
    <>
      <header>
        <img src={image} alt="Logo" className="logo" />
        <Container fluid>

          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Thèmes"
            >
              <NavDropdown.Item href="#action/3.1"><img src={Iconbase} alt="Logo theme base" class="img-fluid" width="30" height="24" /></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><img src={Iconalimentation} alt="Logo theme alimentation" class="img-fluid" width="30" height="24" /></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><img src={Iconenergie} alt="Logo theme energie" class="img-fluid" width="30" height="24" /></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><img src={Iconenvironnement} alt="Logo theme environnment" class="img-fluid" width="30" height="24" /></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><img src={Iconquotidien} alt="Logo theme quotidien" class="img-fluid" width="30" height="24" /></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"><img src={Icontransport} alt="Logo theme transport" class="img-fluid" width="30" height="24" /></NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Container>
      </header>
      <main className="main-container">
        <div className="main-content">
          <div className="card_stats-container">
            {cardData.map((card, index) => (
              <div key={index} className="card_stats">
                <img src={card.imageSrc} alt={card.title} className="card_stats-image" />
                <h2 className="card_stats-title">{card.title}</h2>
                <p className="card_stats-percentage">{card.percentage}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="additional-cards-container">
          {additionalCards.map((card, index) => (
            <div key={index} className="card_stats">
              <h2 className="card_stats-title">{card.title}</h2>
              <p className="card_stats-percentage">{card.percentage}%</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Result;
