import './style.css'
import logo from '/javascript.svg'
import { options } from './options'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="#" target="_blank">
      <img src="${logo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello!</h1>
    <div>
      The result is: 
      <span id="result" class="bold"></span>
    </div>
    <div id="card" class="card">
    </div>
  </div>
`

const card = document.getElementById("card")

for(const index in options) {
  card.insertAdjacentHTML('beforeend', `
    <button id="${index}" class="day-buttons" type="button">
      Day ${options[index].day} - Part ${options[index].part}
    </button>
  `)
}

const buttons = document.getElementsByClassName("day-buttons")
const divResult = document.getElementById("result")

Array.from(buttons, button => {
  button.addEventListener('click', (e) => {
    const index = e.target.id
    const result = options[index]
    
    divResult.innerHTML = result.value
  })
})

// setupCounter(document.querySelector('#counter'))
