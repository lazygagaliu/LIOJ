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
  const getLength = (x1, y1, x2, y2) =>
    Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2))  
  let arr = []
  let shortest = null
  let dots = {}

  for(let i = 1; i < lines.length; i++){
    const e = lines[i].split(' ')
    arr.push({x: Number(e[0]), y: Number(e[1])})
  }
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
      let length = getLength(arr[i].x, arr[i].y, arr[j].x, arr[j].y)
      if(shortest === null || shortest > length){
        shortest = length
        dots.x1 = arr[i].x
        dots.y1 = arr[i].y
        dots.x2 = arr[j].x
        dots.y2 = arr[j].y
      }
    }
  }
  if(dots.x1 > dots.x2){
    console.log(dots.x2, dots.y2)
    console.log(dots.x1, dots.y1)
  }else if(dots.x1 < dots.x2){
    console.log(dots.x1, dots.y1)
    console.log(dots.x2, dots.y2)
  }else {
    if(dots.y1 > dots.y2){
      console.log(dots.x2, dots.y2)
      console.log(dots.x1, dots.y1)
    }else {
      console.log(dots.x1, dots.y1)
      console.log(dots.x2, dots.y2)
    }
  }
}
*/

// for/if/func
function solve(lines) {
  const getLength = (x1, y1, x2, y2) =>
    Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2))

  const n = Number(lines.splice(0, 1)[0])

  const result = lines
    .map(e => {
      const arr = e.split(' ')
      return { x: Number(arr[0]), y: Number(arr[1]) }
    })
    .reduce(
      (obj, cur, index, arr) => {
        if (index < arr.length - 1) {
          let shortest = obj.shortest
          let dots = obj.dots
          for (let i = index + 1; i < arr.length; i++) {
            const length = getLength(cur.x, cur.y, arr[i].x, arr[i].y)
            const shouldUpdateObj = shortest === null || shortest > length
            if (shouldUpdateObj) {
              shortest = length
              dots.x1 = cur.x
              dots.y1 = cur.y
              dots.x2 = arr[i].x
              dots.y2 = arr[i].y
            }
          }
          return {
            shortest,
            dots
          }
        } else {
          return obj
        }
      },
      {
        shortest: null,
        dots: {}
      }
    )

  const { dots } = result
  if (dots.x1 > dots.x2) {
    console.log(dots.x2, dots.y2)
    console.log(dots.x1, dots.y1)
  } else if (dots.x1 < dots.x2) {
    console.log(dots.x1, dots.y1)
    console.log(dots.x2, dots.y2)
  } else {
    if (dots.y1 > dots.y2) {
      console.log(dots.x2, dots.y2)
      console.log(dots.x1, dots.y1)
    } else {
      console.log(dots.x1, dots.y1)
      console.log(dots.x2, dots.y2)
    }
  }
}
