const readline = require('readline')
const { UV_FS_O_FILEMAP } = require('constants')
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
  const target = Number(lines[0])
  const numbers = []
  for (let i = 2; i < lines.length; i++) {
    numbers.push(Number(lines[i]))
  }
  const result = fill(numbers, target)
  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
  }
}

function fill(arr, target) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(target)
  }
  return result
}
