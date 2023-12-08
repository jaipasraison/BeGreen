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
import { NavLink } from 'react-router-dom';


import alim from "../img/ali.png"
import ene from "../img/ene.png"
import env from "../img/env.png"
import quot from "../img/quot.png"
import tran from "../img/tren.png"
// import { useParams } from 'react-router';

const Result = () => {
  let result = localStorage.getItem('formResult');

  if (result) {
    result = JSON.parse(result);
  } else {
    console.log('No data found in localStorage.');
  }

  const waterUsedInShower = result[1][10] * 52 * result[1][10] * 10
  const waterUsedInBath = result[1][12] * 150
  const waterUsedInBathroom = waterUsedInShower + waterUsedInBath
  const wateUsedInToiletPaper = result[2][14] * 52 * 0.2
  const waterUsedInToiletFlush = result[2][13] * 52 * 10
  const waterUsedInToilet = wateUsedInToiletPaper + waterUsedInToiletFlush
  const waterUsedInMeat = result[3][19] * 52 * 1000
  const ratioLocal = (100 - result[3][22]) / 50
  const waterUsedInNormalMeal = 500 * 2 * 365 / ratioLocal
  const waterUsedInFastFood = result[3][21] * 2500 * 12
  const drinkedWater = 1.5 * 365
  const waterUsedInMeals = drinkedWater + waterUsedInNormalMeal + waterUsedInFastFood + waterUsedInMeat
  const waterUsedInPhone = 100 / result[4][26]
  const waterUsedInComputer = 500 / result[4][27]
  const waterUsedInTV = 150 / result[4][28]
  const waterUsedInOther = 100 / result[4][29]
  const waterUsedInTechnologie = waterUsedInPhone + waterUsedInComputer + waterUsedInTV + waterUsedInOther
  const haveDishWash = result[4][25].includes("Lave-vaisselles")
  const haveClotheWash = result[4][25].includes("Lave-linges")
  const waterUsedInDisheWash = haveDishWash ? 600 : 3500
  const waterUsedInClotheWash = haveClotheWash ? 8000 : 4000
  const waterUsedInWash = waterUsedInDisheWash + waterUsedInClotheWash
  const waterUsedInClothe = result[4][30] * 500
  const directUsedWater = waterUsedInBathroom + waterUsedInToilet + waterUsedInWash
  const indirectUsedWater = waterUsedInMeals + waterUsedInTechnologie + waterUsedInClothe
  const usedWater = directUsedWater + indirectUsedWater


  let ratioVehicle = 0
  switch (result[1][8]) {
    case "Trotinette electrique": ratioVehicle = 0.03
      break
    case "Voiture": ratioVehicle = 8
      break
    case "SUV": ratioVehicle = 15
      break
    case "Transports en commun": ratioVehicle = 0.4
      break
    case "Jet privÃ©": ratioVehicle = 1400
      break
    default: break
  }
  const consoVehicle = result[1][7] * 365 * ratioVehicle / 60
  const consoElec = result[2][16] * 12 * 0.220 / result[0][6]
  const consoGaz = result[2][17] * 12 * 2.113 / result[0][6]
  const consoEnergie = consoElec + consoGaz
  const consoUsedInPhone = 100 / result[4][26]
  const consoUsedInComputer = 500 / result[4][27]
  const consoUsedInTV = 300 / result[4][28]
  const consoUsedInOther = 100 / result[4][29]
  const consoUsedInTechnologie = consoUsedInPhone + consoUsedInComputer + consoUsedInTV + consoUsedInOther
  const consoPlane = result[3][20] * 1425
  const consoWater = 0.25 * usedWater
  const consoClothe = result[4][30] * 20
  const emissionCO2 = consoVehicle + consoEnergie + consoUsedInTechnologie + consoPlane + consoWater + consoClothe

  const pMeat = 50 / result[3][19]
  const pFastFood = 10 / result[3][21]
  const pProvenance = 35 / (result[3][22])
  const pAsperge = (result[5][35].includes("Oui")) ? 5 : 0
  const pAlimentation = parseInt(pMeat + pFastFood + pProvenance + pAsperge)
  console.log(consoEnergie)

  const pForfait = 5 / result[5][33]
  const pMails = 5 / (1 + result[5][33] / 100)
  const pEnergie = 90 / (1 + consoEnergie / 1000)
  const pEnergieInternet = parseInt(pForfait + pMails + pEnergie)

  const pCovoit = (result[5][31].includes("Oui")) ? 5 : 0
  const pCroisiere = 10 / (result[5][32] + 1)
  const pAvion = 40 / result[3][20]
  const pPromenade = (result[5][36].includes("Oui")) ? 5 : 0
  const pVehicle = 35 / (1 + consoVehicle / 500)
  const pTransport = parseInt(pCovoit + pCroisiere + pAvion + pPromenade + pVehicle)

  const pQuotidient = parseInt(100 / (1 + directUsedWater / 100000))


  const cardData = [
    { title: 'Alimentation', imageSrc: alim, percentage: pAlimentation },
    { title: 'Energie', imageSrc: ene, percentage: pEnergieInternet },
    { title: 'Gestes du quotidien', imageSrc: quot, percentage: pQuotidient },
    { title: 'Transport', imageSrc: tran, percentage: pTransport },
    { title: 'Environnement', imageSrc: env, percentage: "incoming" },
  ];

  const additionalCards = [
    { title: 'Dépenses de Co2', percentage: emissionCO2 },
    { title: 'Dépenses d\'eau', percentage: usedWater },
  ];




  // A METTRE SUR CHAQUE PAGE !!!!!
  if (localStorage.getItem("unlockedItems") == null) {
    localStorage.setItem("unlockedItems", JSON.stringify([{ "environnement": false }, { "alimentation": false }, { "energie": false }, { "quotidien": false }, { "transports": false }]));
  }

  let indexs = new Map();
  indexs.set("environnement", 0);
  indexs.set("alimentation", 1);
  indexs.set("energie", 2);
  indexs.set("quotidien", 3);
  indexs.set("transports", 4);

  let divIcons = document.querySelectorAll(".icon");
  divIcons.forEach((div) => {
    let libelle = div.id;
    let index = indexs.get(libelle);
    for (let key in JSON.parse(localStorage.unlockedItems)[index]) {
      if (key == libelle && !JSON.parse(localStorage.unlockedItems)[index][libelle]) {
        div.classList.add("locked");
        div.getElementsByTagName("p")[1].textContent = "Bloqué";
      }
      else if (key == libelle && JSON.parse(localStorage.unlockedItems)[index][libelle]) {
        div.classList.add("unlocked");
        div.getElementsByTagName("p")[1].textContent = "Débloqué !";
        //a ajouter au select
        div.addEventListener("click", changeTheme);
      }
    }
  })

  //a ajouter au select
  function changeTheme(event) {
    let libelle = event.target.id;
    document.querySelector("#theme-css").href = `${libelle}.css`;
    localStorage.setItem("currentTheme", `${libelle}`);

    if (localStorage.currentTheme == "base") {
      document.querySelector("#selectedTheme").firstElementChild.textContent = "Le thème sélectionné est le thème de base.";
    }
    else {
      document.querySelector("#selectedTheme").firstElementChild.textContent = `Le thème sélectionné est ${localStorage.currentTheme.charAt(0).toUpperCase() + localStorage.currentTheme.slice(1)}.`;
    }
  }

  if (localStorage.currentTheme != null) {
    if (localStorage.currentTheme == "base") {
      document.querySelector("#theme-css").href = "";
      document.querySelector("#selectedTheme").firstElementChild.textContent = "Le thème sélectionné est le thème de base.";
    }
    else {
      document.querySelector("#theme-css").href = `${localStorage.currentTheme}.css`;
      document.querySelector("#selectedTheme").firstElementChild.textContent = `Le thème sélectionné est ${localStorage.currentTheme.charAt(0).toUpperCase() + localStorage.currentTheme.slice(1)}.`;
    }
  }

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
            {cardData.map((carte, index) => (
              <NavLink
                className={"none"}
                to={{
                  pathname: `../quizz/${carte.title.toLowerCase()}`,
                }}
              ><div key={index} className="card_stats">
                  <img src={carte.imageSrc} alt={carte.title} className="card_stats-image" />
                  <h2 className="card_stats-title">{carte.title}</h2>
                  <p className="card_stats-percentage">{carte.percentage}</p>
                </div></NavLink>
            ))}
          </div>
        </div>
        <div className="additional-cards-container">
          {additionalCards.map((card, index) => (
            <div key={index} className="card_stats">
              <h2 className="card_stats-title">{card.title}</h2>
              <p className="card_stats-percentage">{card.percentage}</p>
            </div>
          ))}
        </div>
        <div class="banderole"></div>
      </main>
    </>
  );
};




export default Result;
