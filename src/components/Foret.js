import Arbreseul from '../ressources/Sprite-0003.gif';
import Foret_1 from "../ressources/Foret_1.gif";
import Foret_2 from "../ressources/Foret_2.gif";
import briquet_1 from "../ressources/briquet_1.gif";
import briquet_2 from "../ressources/briquet_2.gif";
import Foret2Sound from "../ressources/noo.mp3";
import { useState, useEffect } from 'react';


export default function Foret() {
    // Déclaration des variables d'état

    let index = 0.1

    const [arbreseulVisible, setArbreseul] = useState(true)
    const [briquetVisible, setBriquetVisible] = useState(false);
    const [briquetallumeVisible, setBriquetAllumeVisible] = useState(false);
    const [foretVisible, setForetVisible] = useState(false);
    const [foretfeuVisible, setForetFeuVisible] = useState(false);
    const [briquetOpacity, setBriquetOpacity] = useState(index);
    const [audioPlaying, setAudioPlaying] = useState(false);


    function handleClick() {
        setForetVisible(<img src={Foret_1} />)
        setBriquetVisible(true)
        setArbreseul(false)
    }


    function handleFire() {
        setBriquetOpacity((prevOpacity) => {
            const newIndex = prevOpacity + 0.1;
            if (newIndex >= 1.1) {
                setForetFeuVisible(true);
                setBriquetAllumeVisible(true);
                setBriquetVisible(false);
                setForetVisible(false);
            }
            return newIndex;
        });
    }

    return (
        <div>
            {arbreseulVisible && (
                <img onClick={handleClick} src={Arbreseul}></img>
            )}
            {briquetVisible && (
                <img onClick={handleFire} src={briquet_1} style={{ opacity: briquetOpacity }} alt="Briquet" />
            )}
            {briquetallumeVisible && (
                <img src={briquet_2}></img>
            )}
            {foretVisible && (
                <img src={Foret_1}></img>
            )}

            {foretfeuVisible && (
                <img src={Foret_2} alt="Foret_2" onLoad={() => setAudioPlaying(true)} />
            )}
            {audioPlaying && (
                <audio
                    autoPlay
                    src={Foret2Sound}
                    onEnded={() => setAudioPlaying(false)}
                />
            )}

        </div>
    );
}
