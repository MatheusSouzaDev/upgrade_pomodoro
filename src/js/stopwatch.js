window.alert(`Olá, seja bem vindo ao 3D Pomodoro!!!`)
let nameSection = window.prompt("Qual é o seu nome?")
window.alert(`Fico feliz em te conhecer ${nameSection}`)
window.alert(`O método de Pomodoro consiste em 4 sessões de 30 minutos cada, onde os 25 primeiros minutos é para realizar uma tarefa e os ultimos 5 minutos para uma pausa`)
window.alert(`Então se junte a nós ${nameSection} para otimizar as suas tarefas`)

//criar uma entrada mais bonita
//colocar um if para começar o pomodoro apenas quando for aceito 

let numberSection =window.prompt(`Então nos informe quantas sessões teremos (Padrão é 4)`)
// let numberSection = 4
// console.log(numberSection + " numberSection")
let numberPercent = 100
// console.log(numberPercent + " numberPercent")
let numberTime = 30 * 60
// console.log(numberTime + " numberTime")

let borderSection = document.getElementById('borderSection')
// console.log(borderSection )
let borderPercent = document.getElementById('borderPercent')
// console.log(borderPercent )
let borderMinutes = document.getElementById('borderMinutes')
// console.log(borderMinutes )
let borderSeconds = document.getElementById('borderSeconds')
// console.log(borderSeconds )

let dotSection = document.querySelector('.dotSection')
// console.log(dotSection)
let dotPercent = document.querySelector('.dotPercent')
// console.log(dotPercent)
let dotMinutes = document.querySelector('.dotMinutes')
// console.log(dotMinutes)
let dotSeconds = document.querySelector('.dotSeconds')
// console.log(dotSeconds)

let repeatSection = 1   
// console.log(repeatSection + " repeatSection")
let minutes = 1
// console.log(minutes + " minutes")
let seconds = 0  
// console.log(seconds + " seconds")
let repeatTimeInterval = numberTime * 1000
// console.log(repeatTimeInterval + " repeatTimeInterval")
let finishTimeInterval = repeatTimeInterval
// console.log(finishTimeInterval + " finishTimeInterval")
let finishSectionInterval = repeatTimeInterval * (numberSection - 1)
// console.log(finishSectionInterval + " finishSectionInterval")

let quantSection = document.getElementById('section')
// console.log(quantSection) 
let quantPercent = document.getElementById('percent')
// console.log(quantPercent)
let quantMinutes = document.getElementById('minutes')
// console.log(quantMinutes)
let quantSeconds = document.getElementById('seconds')
// console.log(quantSeconds)

let degreeSection = 360 / numberSection
// console.log(degreeSection + "°")
let degreePercent = 360 / numberSection
// console.log(degreePercent + "°")
let degreeMinutes = 360 / 30
// console.log(degreeMinutes + "°")
let degreeSeconds = 360 / 60
// console.log(degreeSeconds + "°")


function initialSection() {
    borderSection.style.strokeDashoffset = 440 - (440 * repeatSection)/numberSection
    borderPercent.style.strokeDashoffset = 440 - (440 * repeatSection)/numberSection

    dotSection.style.transform = `rotate(${repeatSection*degreeSection}deg)`
    dotPercent.style.transform = `rotate(${repeatSection*degreePercent}deg)`

    quantSection.innerText = String(repeatSection + "/" + numberSection)
    quantPercent.innerText = Math.floor(numberPercent / numberSection * repeatSection - 1) + "%"
}

function initialTime(clock) {
    let timeInterval = setInterval(() => {
        clock--
        let numberMinutes = Math.floor(clock / 60)
        // console.log(numberMinutes + " numberMinutes")
        let numberSeconds = (clock) % 60 
        // console.log(-numberSeconds + " numberSeconds")

        seconds++
        if (numberSeconds == 0) {
            minutes++
        }
        if (minutes > 30) {
            minutes = 1
        }
        if (seconds == 60) {
            seconds = 0
        }

        borderMinutes.style.strokeDashoffset = 440 - (440 * minutes)/30
        borderSeconds.style.strokeDashoffset = 440 - (440 * seconds)/60

        dotMinutes.style.transform = `rotate(${minutes * degreeMinutes}deg)`
        dotSeconds.style.transform = `rotate(${seconds * degreeSeconds}deg)`

        quantMinutes.innerText = String(numberMinutes).padStart(2, '0')
        quantSeconds.innerText = String(numberSeconds).padStart(2, '0')
    },1000)

    setTimeout(function(){
        clearInterval(timeInterval)
    }, finishTimeInterval);
}

function start() {  
    initialSection()
    initialTime(numberTime)
    
    let startSection = setInterval(() => {
        repeatSection++
        
        initialSection()
        initialTime(numberTime)
    }, repeatTimeInterval);
    setTimeout(function(){
        clearInterval(startSection)
    }, finishSectionInterval);
}

start()
