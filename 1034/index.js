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

/*
// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
// Array methods
function solve(lines) {
  //String.charCodeAt
  //String.fromCharCode
  const n = Number(lines.splice(0, 1)[0])
  const getNewLetter = letter => {
    let code = letter.charCodeAt(0) - 97 + n
    if(code > 25) code = code % 26 + 97
    else code += 97
    return String.fromCharCode(code)
  }
  const result = lines[0].split('').map(e => getNewLetter(e)).join('')
  console.log(result)
}
*/

// for/if/func
function solve(lines) {
  const n = Number(lines[0])
  const getNewLetter = letter => {
    let code = letter.charCodeAt(0) - 97 + n
    if (code > 25) code = (code % 26) + 97
    else code += 97
    return String.fromCharCode(code)
  }
  let result = ''
  let string = lines[1]
  for (let i = 0; i < string.length; i++) {
    const l = getNewLetter(string[i])
    result += l
  }
  console.log(result)
}
