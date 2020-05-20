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
// function solve(lines) {
//   // 4182-7149-6260-3757
//   const checkBrand = firstNum => firstNum === 4 ? 'VISA' : firstNum === 5 ? 'MASTER_CARD' : 'INVALID'
//   const getWeightedOdd = n => (n * 2 >= 10 ? n * 2 - 9 : n * 2)
//   const getCheckNum = sum => (sum % 10 !== 0 ? 10 - (sum % 10) : sum % 10)

//   let cardNum = lines[0]
//   cardNum = cardNum.split('')
//   .filter( e => e !== '-')
//   .reduce((acc, cur) => [...acc, +cur], [])

//   if(checkBrand(cardNum[0]) === 'INVALID') {
//     console.log('INVALID')
//     return
//   }

//   const result = cardNum.reduce( (acc, cur, i, arr) => {
//     if(i === arr.length - 1){
//       return getCheckNum(acc) === cur
//     }else if(i % 2 === 0){
//       return acc + getWeightedOdd(cur)
//     }else if (i % 2 === 1){
//       return acc + cur
//     }
//   }, 0)

//   if(result) console.log(checkBrand(cardNum[0]))
//   else console.log('INVALID')
// }

// for/if/func
function solve(lines) {
  // 4182-7149-6260-3757
  const getCardNum = card => {
    let num = ''
    for(let i = 0; i < card.length; i++){
      if(card[i] !== '-'){
        num += card[i]
      }
    }
    return num
  }

  const getSum = card => {
    let sum = 0
    for(let i = 0; i < card.length - 1; i++){
      if(i % 2 === 0){
        let s = Number(card[i]) * 2
        if(s > 9) sum += (s - 9)
        else sum += s
      } else {
        sum += Number(card[i])
      }
    }
    return sum
  }

  const getCheckNum = sum => (sum % 10 === 0 ? sum : 10 - (sum % 10))
  const getResult = (lastNum, checkNum) => lastNum === checkNum

  const checkBrand = firstNum =>
    firstNum === '4' ? 'VISA' : firstNum === '5' ? 'MASTER_CARD' : 'INVALID'
 
  let cardNum = lines[0]
  cardNum = getCardNum(cardNum)

  if (checkBrand(cardNum[0]) === 'INVALID') {
    console.log('INVALID')
    return
  }

  const result = getResult(
    Number(cardNum[cardNum.length - 1]), getCheckNum(getSum(cardNum))
  )

  if (result) console.log(checkBrand(cardNum[0]))
  else console.log('INVALID')

}