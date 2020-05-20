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
  const print = (n, m) => {
    const result = `${n}*${m}=${n * m}`
    console.log(result)
  }

  const n = Number(lines[0])
  const m = Number(lines[1])

  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= m; j++){
      print(i, j)
    }
  }
}