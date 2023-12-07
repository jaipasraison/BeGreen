export default function Konami(){
    let konamiPosition = 0;
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
    // let rick = [
    //     "KeyR",
    //     "KeyI",
    //     "KeyC",
    //     "KeyK"
    // ]

    window.addEventListener("keydown", (e) => {
        watchKonami(e);
        // watchRick(e);
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

    // function watchRick(){
    //     if (e.code == rick[konamiPosition]){
    //         konamiPosition++;
    //         console.log(e.code);

    //         if(konamiPosition === rick.length){
    //             alert('Kuuuu');

    //         }
    //     }
    // }
}