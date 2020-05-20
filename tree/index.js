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
function solve(lines) {
  const print = (str, n) => {
    let line = ''
    for (let i = 0; i < n; i++) {
      line += str
    }
    return line
  }

  const n = Number(lines[0])
  for(let i = 1; i <= n; i++){
    const spaces = print(' ', n - i)
    const stars = print('*', 2 * i - 1)
    const result = `${spaces}${stars}`
    console.log(result)
  }
  for(let i = 1; i <= n - 1; i++){
    const spaces = print(' ', n - 1)
    const result = `${spaces}|`
    console.log(result)
  }
}