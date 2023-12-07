export default function Ampoule() {

    window.addEventListener("DOMContentLoaded", getImage)

    function getImage() {
        let image = document.getElementById("ampoule");
        image.addEventListener("click", destroyAmpoule);
    }

    function destroyAmpoule() {
        console.log("Bah juste un énome classique")
    }


    return (
        <div>
            <p>Bonjour</p>
        </div>
    )
}