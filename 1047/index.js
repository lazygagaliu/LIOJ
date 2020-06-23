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
function solve(lines) {
  const [n, nq] = lines[0].split(' ')
  let arr = []
  let queries = []
  for(let i = 1; i <= n; i++){
    arr.push(Number(lines[i]))
  }
  for(let i = Number(n) + 1; i < lines.length; i++){
    queries.push(Number(lines[i]))
  }

  const search = (arr, query) => {
    let left = 0
    let right = arr.length - 1
    
    while(right >= left){
      let middle = Math.floor((left + right) / 2)
      if(arr[middle] === query){
        return middle
      } else if(query > arr[middle]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
    return -1
  }

  queries.forEach( query => console.log(search(arr, query)))
}


// for/if/func
// function solve(lines) {

// }