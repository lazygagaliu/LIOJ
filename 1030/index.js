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
// function solve(lines) {

// }

// for/if/func
function solve(lines) {
  const arr = lines[0].split('')
  const n = Math.floor(arr.length / 2)
  let result = 'True'
  for (let i = 0; i < n; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      result = 'False'
    } else {
      result = 'True'
    }
  }
  console.log(result)
}
