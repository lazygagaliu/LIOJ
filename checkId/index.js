const readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
// Array methods
function solve(lines) {
  const str = lines[0].split('') // A123456789
  const letter = str.shift() // A

  const letterToNumber = l => {
    const data = {
      A: 10, B: 11, C: 12, D: 13, E: 14,
      F: 15, G: 16, H: 17, I: 34, J: 18,
      K: 19, L: 20, M: 21, N: 22, O: 35,
      P: 23, Q: 24, R: 25, S: 26, T: 27,
      U: 28, V: 29, W: 32, X: 30, Y: 31, Z: 33
    }
    return data[l]
  }

  let sum = letterToNumber(letter)
  .toString()
  .split('')
  .concat(str)
  .map(e => Number(e))
  .reduce( (acc, cur, index, arr) => {
    if(index === 0 || index === arr.length - 1){
      return acc + cur
    } else {
      const n = arr.length - index - 1
      return acc + cur * n
    }
  }, 0)

  const result = sum % 10 === 0
  console.log(result)
}

// for/if/func
function solve(lines) {
  const str = lines[0].split('') // A123456789
  const letter = str[0] // A

  const letterToNumber = l => {
    const data = {
      A: 10, B: 11, C: 12, D: 13, E: 14,
      F: 15, G: 16, H: 17, I: 34, J: 18,
      K: 19, L: 20, M: 21, N: 22, O: 35,
      P: 23, Q: 24, R: 25, S: 26, T: 27,
      U: 28, V: 29, W: 32, X: 30, Y: 31, Z: 33
    }
    return data[l]
  }

  let n = letterToNumber(letter)
  const num1 = Math.floor(n / 10)
  const num2 = n % 10
  let sum = num1 + num2 * 9

  for(let i = 1; i < str.length; i++){
    if(i === str.length - 1){
      sum += Number(str[i])
    }else {
      sum += str[i] * (str.length - i - 1)
    }
  }

  const result = sum % 10 === 0
  console.log(result)
}