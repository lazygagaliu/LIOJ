const readline = require('readline')
const { UV_FS_O_FILEMAP } = require('constants')
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
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const checkWin = (a, b, c) => {
    return a === b && a === c && b === c 
      ? {
          isWin: true,
          winner: a === 'O' ? 'O' : 'X'
        }
      : {
          isWin: false,
          winner: null
        }
  }
  
  const block = lines.reduce( (acc, cur) => {
    const arr = cur.split('')
    return acc.concat(arr) 
  }, [])

  const result = winningConditions.reduce( (obj, cur) => {
    if(obj.isWin) return obj
    const object = checkWin(block[cur[0]], block[cur[1]], block[cur[2]])
    if(object.isWin) return object
    else return obj
  }, {
    isWin: false,
    winner: null
  })
  if(result.isWin) console.log(result.winner)
  else console.log('DRAW')
}
*/

// for/if/func
function solve(lines) {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const checkWin = (a, b, c) => {
    return a === b && a === c && b === c
      ? {
          isWin: true,
          winner: a === 'O' ? 'O' : 'X'
        }
      : {
          isWin: false,
          winner: null
        }
  }

  let block = []
  for (let i = 0; i < lines.length; i++) {
    block.push(lines[i][0])
    block.push(lines[i][1])
    block.push(lines[i][2])
  }

  const getResult = () => {
    let obj
    for (let i = 0; i < winningConditions.length; i++) {
      obj = checkWin(
        block[winningConditions[i][0]],
        block[winningConditions[i][1]],
        block[winningConditions[i][2]]
      )
      if (obj.isWin) return obj
    }
    if (!obj.isWin) return obj
  }

  const result = getResult()
  if (result.isWin) console.log(result.winner)
  else console.log('DRAW')
}
