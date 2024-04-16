// variables - variaveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')

const modalMessage = document.querySelector('.modal .close span')
const modalBtnClose = document.querySelector('.modal button.close')


modalWrapper.classList.add('open');
modalMessage.innerText = "qualquer coisa"




form.onsubmit = function(event) {
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  console.log(result)
}     



 function IMC (weight,height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
 }







//  outras 2 maneiras de criar e atrubuir funcao a um evento 

function notthing ( ) {
  /* form.onsubmit = () => {}       */

/*  form.onsubmit = HandleSubmit         */
}

