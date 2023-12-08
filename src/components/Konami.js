export default function Konami(){
    let konamiPosition = 0;
    let rickPosition = 0;
    let bianPosition = 0;
    const konami = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "KeyB",
        "KeyQ",
    ];
    let rick = [
        "KeyR",
        "KeyI",
        "KeyC",
        "KeyK",
    ];
    let cuckbian = [
        "KeyC",
        "KeyU",
        "KeyC",
        "KeyK",
        "KeyB",
        "KeyI",
        "KeyQ",
        "KeyN",
    ]

    window.addEventListener("keydown", (e) => {
        watchKonami(e);
        watchRick(e);
        watchBian(e);
    });

    function watchKonami(e){
        if (e.code == konami[konamiPosition]){
            konamiPosition ++;
            console.log(e.code);
           
            if (konamiPosition === konami.length){
                alert("WOOOAAAAW");
                konamiPosition = 0;
            }
        }else{
            konamiPosition = 0;
        }
    }

    function watchRick(e){
        if (e.code == rick[rickPosition]){
            rickPosition++;
            console.log(e.code);

            if(rickPosition === rick.length){
                alert('Kuuuu');
                rickPosition = 0;
            }
        }
    }

    function watchBian(e){
        if (e.code == cuckbian[bianPosition]){
            bianPosition++;
            console.log(e.code);

            if(bianPosition === cuckbian.length){
                alert('Je suis le cuck originel');
                bianPosition = 0;
            }
        }
    }
}