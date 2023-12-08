import { useEffect, useState } from 'react';
import rickAudio from '../ressources/rick.mp3';
import zizouAudio from '../ressources/zizou.mp3';

export default function Konami() {
    const [audioRickPlaying, setAudioRickPlaying] = useState(false);
    const [audioZizouPlaying, setAudioZizouPlaying] = useState(false);
    let konamiPosition = 0;
    let rickPosition = 0;

    const [position, setPosition] = useState(0);
    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyQ"];
    const rick = ["KeyR", "KeyI", "KeyC", "KeyK"];

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prevPosition) => (prevPosition < 100 ? prevPosition + 1 : 0));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    function handleKeyDown(e) {
        watchKonami(e);
        watchRick(e);
    }

    function watchKonami(e) {
        e.preventDefault();
        if (e.code === konami[konamiPosition]) {
            konamiPosition++;
            console.log(e.code);

            if (konamiPosition === konami.length) {
                konamiPosition = 0;
                setAudioZizouPlaying(true);
            }
        } else {
            konamiPosition = 0;
        }
    }

    function watchRick(e) {
        e.preventDefault();
        if (e.code === rick[rickPosition]) {
            rickPosition++;
            console.log(e.code);

            if (rickPosition === rick.length) {
                rickPosition = 0;
                setAudioRickPlaying(true);
            }
        } else {
            rickPosition = 0;
        }
    }

    useEffect(() => {
        const audioRick = new Audio(rickAudio);
        const audioZizou = new Audio(zizouAudio);

        if (audioRickPlaying) {
            audioRick.play();
        }

        if (audioZizouPlaying) {
            audioZizou.play();
        }

        return () => {
            audioRick.pause();
            audioRick.currentTime = 0;
            audioZizou.pause();
            audioZizou.currentTime = 0;
        };
    }, [audioRickPlaying, audioZizouPlaying]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [audioRickPlaying, audioZizouPlaying]);

    return null; 
}
