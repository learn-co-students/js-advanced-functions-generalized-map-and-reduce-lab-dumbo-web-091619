// Add your functions here
//map
const map = (arr, func) => {
    let newArr = []
    arr.forEach(element => {
        newArr.push(func(element))
    })
    return newArr
}


const reduce = (arr, func, num = 0) => {
    let result = (!!num) ? num : arr[0]
    let i = (!!num) ? 0 : 1
  
    for (i; i < arr.length; i++) {
      result = func(arr[i], result)
    }
    return result
}

// let  reduce = (arr, func, num = 0) =>{
//     let result = (!!num) ? num : arr[0]
//     let i = (!!num) ? 0 : 1
  
//     for (; i < arr.length; i++) {
//       result = func(arr[i], result)
//     }
  
//     return result;
//   }