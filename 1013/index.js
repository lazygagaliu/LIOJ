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
/*
function solve(lines) {
  let n = lines[0]
  let arr = [0, 1]
  for(let i = 2; i <= 20; i++){
    arr[i] = arr[i-1] + arr[i-2]
  }
  console.log(arr[n])
}
*/

function solve(lines) {
  let n = lines[0]
  const f = n => {
    if (n === 0) return 0
    if (n === 1) return 1
    return f(n - 1) + f(n - 2)
  }
  console.log(f(n))
}
