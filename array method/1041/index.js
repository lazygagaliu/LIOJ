const readline = require('readline')
const { UV_FS_O_FILEMAP, EALREADY } = require('constants')
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
  const str = lines[0]
  console.log(trim(str))
}

function trim(string) {
  let result = ''
  let isConfrontFirstLetter = false
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ' || isConfrontFirstLetter) {
      isConfrontFirstLetter = true
      result += string[i]
    }
  }

  let newStr = ''
  let isConfrontLastLetter = false
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] !== ' ' || isConfrontLastLetter) {
      isConfrontLastLetter = true
      newStr = result[i] + newStr
    }
  }
  return newStr
}
