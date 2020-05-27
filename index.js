const readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin
})

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
})

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
// Array methods
function solve(lines) {
  // 1991 11 7
  const getResult = numbers => {
    if(typeof numbers !== 'string') numbers = numbers.toString()
    result = numbers
      .split('')
      .map(e => +e)
      .reduce((acc, cur) => acc + cur, 0)
    if(result >= 10){
      getResult(result)
    } else {
      console.log(result)
    }
  }

  getResult(lines[0])
}

// for/if/func
// function solve(lines) {
//   // 1991 11 7
//   const numbers = lines[0]

//   const getResult = numbers => {
//     let result = 0
//     for(let i = 0; i < numbers.length; i++){
//       if(numbers[i]){
//         result += Number(numbers[i])
//       }
//     }

//     if (result >= 10) {
//       getResult(result.toString())
//     } else {
//       console.log(result)
//     }
//   }

//   getResult(numbers)
// }
