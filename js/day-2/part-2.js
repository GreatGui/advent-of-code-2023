import input from './input.txt'

function verifyColor(textString) {
  const colors = {
    red: 0,
    blue: 0,
    green: 0,
  }

  for(let amountColor of textString) {

    if (amountColor.includes(' red')) {
      colors.red = parseInt(amountColor.split(" red")[0])
    } else if (amountColor.includes(' blue')) {
      colors.blue = parseInt(amountColor.split(" blue")[0])
    } else if (amountColor.includes(' green')) {
      colors.green = parseInt(amountColor.split(" green")[0])
    }
  }

  return colors
}

function calcFewestColors(sets) {
  const colors = {
    red: 0,
    blue: 0,
    green: 0,
  }

  for(const set of sets) {
    if (colors.green < set.green) {
      colors.green = set.green
    }
    if (colors.blue < set.blue) {
      colors.blue = set.blue
    }
    if (colors.red < set.red) {
      colors.red = set.red
    }
  }

  return colors.red * colors.green * colors.blue 
}

const text = await fetch(input)
  .then((res) => res.text())
  .then((text) => text)
  .catch((e) => console.error(e));

let lines = text.split('\n')
lines.pop()

let lineInfo = lines.map(line => {
  const info = {
    game: 0,
    sets: [],
  }

  const [gameNumber, gameRest] = line.split('Game ')[1].split(': ')
  info.game = parseInt(gameNumber)

  const gameSets = gameRest.split('; ')

  console.log('gameSets ', gameNumber , gameSets.length, gameSets)
  
  info.sets = gameSets.map(gameSet => {
    const colorsInSet = gameSet.split(', ')

    return verifyColor(colorsInSet)
  })

  return info
})

const total = lineInfo.reduce((accumulator, currentValue) => {
  let value = calcFewestColors(currentValue.sets)

  return accumulator + value
}, 0);

console.log('text', lineInfo)

export const day2Part2 = total
