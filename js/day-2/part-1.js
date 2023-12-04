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

function isValid(sets) {
  return sets.every((colors) => {
    if (colors.red > 12) {
      return false
    } else if (colors.green > 13) {
      return false
    } else if (colors.blue > 14) {
      return false
    } else {
      return true
    }
  })
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
  let value = 0

  if (isValid(currentValue.sets)) {
    value = currentValue.game
  }

  return accumulator + value
}, 0);

export const day2Part1 = total
