import { input } from './input.js'

const validate = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const validate2 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

export function getFirstAndLastLetter(arr) {
  const numbers = arr.map(n => {
    let value1 = 0
    let value2 = 0

    for(let i = 0; i < n.length; i++){
      if (validate.includes(n[i])) {
        value1 = n[i]
        break
      }

      for(let j = 0; j < validate2.length; j++) {
        if (n.substring(i, validate2[j].length + i).includes(validate2[j])) {
          value1 = j
          break
        }
      }

      if (value1 > 0) {
        break
      }
    }

    for(let i = n.length - 1; i >= 0 ; i--){
      if (validate.includes(n[i])) {
        value2 = n[i]
        break
      }

      for(let j = 0; j < validate2.length; j++) {
        if (n.substring(i - validate2[j].length).includes(validate2[j])) {
          value2 = j
          break
        }
      }

      if (value2 > 0) {
        break
      }
    }

    const numberString = `${value1}${value2}`

    return Number.parseInt(numberString)
  })

  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}

const total = getFirstAndLastLetter(input)

export const day1Part2 = total
