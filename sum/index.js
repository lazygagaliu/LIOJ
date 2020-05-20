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
  const result = lines[0]
    .split('')
    .map(e => Number(e))
    .reduce((acc, cur) => {
      if (isNaN(cur)) {
        return acc
      } else {
        return acc + cur
      }
    }, 0)
  console.log(result)
}

// for/if/func
function solve(lines) {
    let n = Number(lines[0])
    if (n < 0) n = n * -1
    let sum = 0
    while (n > 0) {
      sum += n % 10
      n = Math.floor(n / 10)
    }
    console.log(sum)
  }