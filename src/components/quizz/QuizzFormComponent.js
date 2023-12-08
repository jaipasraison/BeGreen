import React from 'react';
import '../../styles/form.css';
import questionsData from '../../quizz.json';
import { useParams } from 'react-router';
import { slideInDown, fadeOut } from 'react-animations';

export var QuizzFormComponent = () => {
    var { theme } = useParams();
    var questions = questionsData.questions
    var [currentQuestion, setCurrentQuestion] = React.useState(0)
    var [selected, setSelected] = React.useState(null)
    var [selectedMult, setSelectedMult] = React.useState([])
    var [correct, setCorrect] = React.useState(0)
    var [isAnswered, setIsAnswered] = React.useState(false)
    localStorage.setItem("correctAnswers", correct)

    var questionsArray = []
    for(var i = 0; i < questions.length; i++) {
        if(questions[i].categorie.toLowerCase() === theme) {
            questionsArray.push(questions[i])
        }
    }

    var compareArrayValues = (array1, array2) => {
        if(array1.length !== array2.length) {
            return false
        }
        for(var i = 0; i < array1.length; i++) {
            if(array1[i] !== array2[i]) {
                return false
            }
        }
        return true
    }

    var displayExplanations = (e) => {
        e.preventDefault()
        var explanations = document.querySelector(".explanations")
        var form = document.querySelector("select")
        if(form) {
            form.disabled = true
        }
        if(selected === questionsArray[currentQuestion].choixCorrect || compareArrayValues(selectedMult, questionsArray[currentQuestion].choixCorrect)) {
            setCorrect(correct + 1)
            setIsAnswered(true)
            localStorage.setItem("correctAnswers", correct);
        }
        if(explanations == null || !explanations || explanations === undefined) {
            if(selected === questionsArray[currentQuestion].choixCorrect || compareArrayValues(selectedMult, questionsArray[currentQuestion].choixCorrect)) {
            explanations = document.createElement("p")
            setIsAnswered(true)
            explanations.className = "explanations"
            explanations.innerHTML = `Bien joué ! ${questionsArray[currentQuestion].explications}`
            document.querySelector(".form-field").appendChild(explanations)
         } else {
                setIsAnswered(true)
                explanations = document.createElement("p")
                explanations.className = "movaise_reponse"
                explanations.innerHTML = `Mauvaise réponse ! ${questionsArray[currentQuestion].explications}`
                document.querySelector(".form-field").appendChild(explanations)
            }
        }
    }
    var nextQuestion = (e) => {
        e.preventDefault()
        var explanations = document.querySelector(".explanations")
        var form = document.querySelector("select")
        var movaise = document.querySelector(".movaise_reponse")
        if(explanations) {
            explanations.remove()
        }
        if(movaise) {
            movaise.remove()
        }
        if(form) {
            form.disabled = false
        }
        if(currentQuestion < questionsArray.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            form = document.querySelector("form")
            form.style={animation: "fadeOut 1s"}
            form.style.animationFillMode = "forwards"
            setTimeout(() => {
                form.style.display = "none"
                var result = document.createElement("p")
                result.className = "result"
                result.innerHTML = "Vous avez terminé le quizz !"
                document.querySelector(".card-quizz").appendChild(result)
            }, 1000)
        }
    }

    var backToQ1 = (e) => {
        e.preventDefault()
        var form = document.querySelector("form")
        form.style.animation = "fadeOut 1s"
        form.style.animationFillMode = "forwards"
        setTimeout(() => {
            form.style.display = "none"
            var result = document.createElement("p")
            result.className = "result"
            result.innerHTML = "Vous avez terminé le quizz !"
            document.querySelector(".card-quizz").appendChild(result)
        }, 1000)
    }

    return (
        <div className="card-quizz" style={{ display: "flex", flexDirection: "column"}}>
            <h2 className="card-title">{theme}</h2>
            <form>
                <div className="form-field">
                    <label htmlFor={questionsArray[currentQuestion]?.id}>{questionsArray[currentQuestion]?.libelle}</label>
                    {questionsArray[currentQuestion].questionType === "manyAnswers" && (
                        <div>
                            {questionsArray[currentQuestion].choix.map((choice, index) => (
                                <div key={index}>
                                    <label htmlFor={`checkbox-${index}`} >{choice}</label>
                                    <input type="checkbox" id={`checkbox-${index}`} onClick={(e) => setSelectedMult([...selectedMult, e.target.value])} />
                                </div>
                            ))}
                        </div>
                    )}
                    {questionsArray[currentQuestion].questionType === "singleAnswer" && (
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                            <select>
                                {questionsArray[currentQuestion].choix.map((choice, index) => (
                                    <option key={index} onClick={(e) => setSelected(e.target.value)}>{choice}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
                <div className="form-field">
                    <button onClick={displayExplanations}>Valider la réponse</button>
                    <button disabled={!isAnswered} onClick={nextQuestion}>Question suivante</button>
                    <button onClick={backToQ1}>Revenir à mes statistiques</button>
                </div>
            </form>
        </div>
    )
  }
                            