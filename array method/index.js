const map = (arr, callback) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i])
  }
  return result
}
// const result = map([1, 2, 3], e => e * 2)
// console.log(result)

const lastIndexOf = (arr, item) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === item) {
      return i
    }
  }
  return -1
}
// const result = lastIndexOf([1, 2, 2, 1], 2)
// console.log(result)

const repeat = (str, n) => {
  let result = ''
  for (let i = 0; i < n; i++) {
    result += str
  }
  return result
}
// const result = repeat('god', 5)
// console.log(result)
