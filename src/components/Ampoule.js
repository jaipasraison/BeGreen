import AmpouleOK from '../ressources/Ampoule.png';
import AmpouleKC from "../ressources/AmpouleKC.png";
import LED from '../ressources/Led.png';
import { useState, useEffect } from 'react';

export default function Ampoule() {
    // Déclaration des variables d'état

    const [imageVisible, setImageVisible] = useState(false);

    let srcimage = AmpouleOK;
    let srcled = LED;

    // Utilisation de l'effet secondaire useEffect pour appeler ajoutDepot une fois au montage du composant
    useEffect(() => {
        ajoutDepot();
    }, []);  // Utilisez un tableau vide en tant que dépendance pour que cela ne soit exécuté qu'une fois au montage

    // Fonction pour ajouter les gestionnaires d'événements aux éléments DOM nécessaires
    function ajoutDepot() {
        // Sélection de l'élément dropampoule et ajout des gestionnaires d'événements
        let depot = document.getElementById("dropampoule");
        depot.addEventListener("dragend", depotzone);
    }


    function setLed(){
                // Sélection de l'élément led et ajout de l'attribut draggable
                let led = document.getElementById('led');
                led.setAttribute('draggable', '');
                
                // Ajout du gestionnaire d'événements dragstart à l'élément led
                led.addEventListener("dragstart", debutdrag);
    }

    // Fonction pour changer l'image lors du clic
    function getImage() {
        let image = document.getElementById("ampoule");
        image.addEventListener("click", () => {
            srcimage = AmpouleKC;
            image.setAttribute("src", srcimage);
            setImageVisible(true)
            setLed()
        });
    }

    function changeAmpoule() {
        //let led = document.getElementById('led').setAttribute('dragable', '')
        console.log("Slaut")
        //led.addEventListener("dragstart", debutdrag)
    }

    function debutdrag(e) {
        e.dataTransfer.setData('text', e.target.id);
    }


    // Fonction pour effectuer des actions lors du glisser-déposer de l'élément led
    function depotzone() {
       let replaceimg = document.getElementById('ampoule')
       let ancienneimg = document.getElementById('led')
       ancienneimg.setAttribute('src', "")
       replaceimg.setAttribute('src', srcled)
       console.log(replaceimg.src)
    }

    // Rendu du composant 
    return (
        <div>
            <div id='dropampoule'>
            <img id='led' onDrag={changeAmpoule} src={srcled}></img>
            </div>
                <img id='ampoule' onClick={getImage} src={srcimage}></img>
        </div>
    );
}