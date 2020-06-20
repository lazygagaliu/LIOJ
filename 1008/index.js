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
// function solve(lines) {
//   let n = Number(lines[0])
//   let arr =[]
//   let sum = 0
//   for(let i = 1; i <= Math.pow(2, 31); i *= 2){
//     arr.push(i)
//   }
//   for(let i = arr.length - 1; i >= 0; i--){
//     if(arr[i] <= n){
//       n -= arr[i]
//       sum++
//     }
//   }
//   console.log(sum)
// }

// function solve(lines) {
//   let n = Number(lines[0]).toString(2)
//   let sum = 0
//   for(let i = 0; i < n.length; i++){
//     if(Number(n[i]) === 1) sum++
//   }
//   console.log(sum)
// }

function solve(lines) {
  let n = Number(lines[0])
  let sum = 0
  while (n > 0) {
    if (n & (1 === 1)) sum++
    n >>= 1
  }
  console.log(sum)
}
