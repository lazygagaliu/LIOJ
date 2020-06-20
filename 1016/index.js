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
  const n = lines[0]
  const result = lines.reduce(
    (obj, cur, i) => {
      if (i === 0) return obj
      if (cur === 'A') {
        let arr = obj.a
        arr.push(i)
        return {
          ...obj,
          a: arr
        }
      } else {
        let arr = obj.b
        arr.push(i)
        return {
          ...obj,
          b: arr
        }
      }
    },
    {
      a: [],
      b: []
    }
  )
  const { a, b } = result
  if (a.length === b.length || a.length === 0 || b.length === 0) {
    console.log('PEACE')
  } else if (a.length < b.length) {
    a.forEach(e => console.log(e))
  } else {
    b.forEach(e => console.log(e))
  }
}

// for/if/func
// function solve(lines) {
//   const n = lines[0]
//   let a = []
//   let b = []
//   for(let i = 1; i <= n; i++){
//     if(lines[i] === 'A') a.push(i)
//     else b.push(i)
//   }
//   if(a.length === b.length || a.length === 0 || b.length === 0) {
//     console.log('PEACE')
//   }
//   else if(a.length < b.length) {
//     for(let i = 0; i < a.length; i++){
//       console.log(a[i])
//     }
//   } else {
//     for (let i = 0; i < b.length; i++) {
//       console.log(b[i])
//     }
//   }
// }
