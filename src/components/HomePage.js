import React from 'react';
import "../styles/HomePage.css"
import image from "../img/logo.png"

const HomePage = () => {
    return (
        <>
            <header>
                <img src={image} alt="Logo" className="logo" />
            </header>
            <main>
                <p>Nous sommes un groupe d'étudiants en 3ème année de BUT MMI à Castres et nous avons élaboré un projet pour la Nuit de l'info 2023 : nous vous invitons à participer à ce test concernant vos habitudes et votre mode de vie. À travers celui-ci, vous obtiendrez une estimation de votre consommation d'eau et de vos émissions de CO2. Ensuite, des quiz personnalisés basés sur vos réponses vous fourniront des informations complémentaires. N'hésitez pas à explorer tous les thèmes débloqués au cours de votre parcours, et à découvrir les 4 easter eggs que nous avons intégrés. Notre objectif est de sensibiliser à l'impact de nos actions à petite échelle, tout en démystifiant les idées préconçues et en mettant en lumière les principaux polluants à l'échelle mondiale, afin de mieux comprendre les enjeux actuels.</p>
                <button>Commencer</button>
            </main>
        </>
    );
};

export default HomePage;