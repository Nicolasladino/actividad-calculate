// const username = document.getElementById('username')
// const btnGreat = document.querySelector('#btnGreat')

// // esta es para que cuando le de click haga la funcion saludar 
// btnGreat.addEventListener('click',great)

// // esta es la funcion para saludar 
// function great () {
//   alert(username.value)
// }

const username = document.getElementById('nombre')
const data1 = document.getElementById('nota1') 
const data2 = document.getElementById('nota2') 
const data3 = document.getElementById('nota3') 
const bntCalculate = document.getElementById('btn-calculate')
const bntPredict = document.getElementById('btn-predict')
const respone = document.getElementById('resultado') 
const respone2 = document.getElementById('resultado2')

bntCalculate.addEventListener('click', calculateNote)
bntPredict.addEventListener('click',prediction)

function calculateNote(event){

    event.preventDefault()   

    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)
     let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)

     respone.style.color = 'green'
     respone.textContent = ` ${username.value} su nota definitiva es: ${result}`
     validatenotes(result)
}

function validatenotes(result) {
    if (result > 4.5) {
        respone2.style.color = "green" 
        respone2.textContent = `tuviste un buen resultado: ${result}`   

    } else if (result >= 3.5 && result <= 4.5){
        respone2.style.color = "orange"
        respone2.textContent = `tuviste un exelente resultado: ${result}`
        
    }else{
        respone2.style.color = "black"
        respone2.textContent =`perdiste la materia: ${result}`
    }
}


function prediction(event) {

    event.preventDefault()
    let nota1 = Number(data1.value)
    let nota2 = Number(data2.value)
    let result = ((3.5 - (nota1 * 0.3) - (nota2 * 0.3))/0.4).toFixed(2)

    data3.value = result
}