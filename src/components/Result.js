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




  // A METTRE SUR CHAQUE PAGE !!!!!
if(localStorage.getItem("unlockedItems") == null)
{
    localStorage.setItem("unlockedItems", JSON.stringify( [ { "environnement": false }, { "alimentation": false }, { "energie": false }, { "quotidien": false }, { "transports": false } ] ));
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
    for(let key in JSON.parse(localStorage.unlockedItems)[index])
    {
        if(key == libelle && !JSON.parse(localStorage.unlockedItems)[index][libelle])
        {
            div.classList.add("locked");
            div.getElementsByTagName("p")[1].textContent = "Bloqué";
        }
        else if(key == libelle && JSON.parse(localStorage.unlockedItems)[index][libelle])
        {
            div.classList.add("unlocked");
            div.getElementsByTagName("p")[1].textContent = "Débloqué !";
            //a ajouter au select
            div.addEventListener("click", changeTheme);
        }
    }
})

            //a ajouter au select
function changeTheme(event)
{
    let libelle = event.target.id;
    document.querySelector("#theme-css").href = `${libelle}.css`;
    localStorage.setItem("currentTheme", `${libelle}`);

    if(localStorage.currentTheme == "base")
    {
        document.querySelector("#selectedTheme").firstElementChild.textContent = "Le thème sélectionné est le thème de base.";
    }
    else
    {
        document.querySelector("#selectedTheme").firstElementChild.textContent = `Le thème sélectionné est ${localStorage.currentTheme.charAt(0).toUpperCase() + localStorage.currentTheme.slice(1)}.`;
    }
}

if(localStorage.currentTheme != null)
{
    if(localStorage.currentTheme == "base")
    {
        document.querySelector("#theme-css").href = "";
        document.querySelector("#selectedTheme").firstElementChild.textContent = "Le thème sélectionné est le thème de base.";
    }
    else
    {
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
        <div class="banderole"></div>
      </main>
    </>
  );
};




export default Result;
