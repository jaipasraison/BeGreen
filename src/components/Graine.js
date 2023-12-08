import Graine from '../ressources/Tree1.gif';
import Arbre from "../ressources/Tree2.gif";
import { useState, useEffect } from 'react';


export default function Foret() {
    // Déclaration des variables d'état

    const [graineVisible, setGraineVisible] = useState(true);
    const [arbreVisible, setArbreVisible] = useState(false);
    const [timer, setTimer] = useState(45);


    useEffect(() => {
        let interval;
        if (timer > 0) {
          interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
          }, 1000);
        }

        return () => clearInterval(interval);
    }, [timer]);

    function handleClick() {
        if (timer !== 0) {
          alert("Silence ça pousse ...");
        }else{
        setGraineVisible(false);
        setArbreVisible(true);
    }}
    

    return (
        <div>
                {graineVisible && (
                <img onClick={handleClick} src={Graine}></img>
                )}

                {arbreVisible &&(
                    <img  src={Arbre}></img>
                )}

        </div>
    );
}
