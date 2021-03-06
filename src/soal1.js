// jadi ada array ini [ 1, 2, 3, 5, 4 ] terus treshold nya 4
// nah kita start di index pertama, buat next, boleh ke current index+1, atau current index+2
// kalo value yg diposisi sekarang selisihnya lebih dari treshold

const minStep = (arr, treshold) => {
  let min = arr[0], max = arr[0], count = 1, skipCount = 0, reachedTreshold = false
  for(let i=1; i<arr.length; i++){
    if((max - min) >= treshold){
      reachedTreshold = true
      count++
      break
    }

    if(arr[i] < min){
      min = arr[i]
      count++
      skipCount = 0
    }
    else if(skipCount === 2){
      count++
      skipCount = 0
      if(arr[i] > max)
        max = arr[i]
    }
    else{
      skipCount++
    }
  }

  return reachedTreshold ? count : arr.length
}

const completedOrNot = (min, max, treshold) => Math.pow(max - min) >= treshold

const minStepNewMeta = (arr, treshold) => {
  let completed = false
  let index = 0
  let count = 0
  let min = arr[0]
  let max = arr[0]
  let skipCount = 0

  while(!completed){
    if(completedOrNot(min, max, treshold)){
      count++
      completed = true
    }
    else{
      if(skipCount === 2){

      }
      else{
        skipCount++
      }
    }
  }

  return count
}

const soal1 = (input, treshold) => minStep(input, treshold)

export { soal1 }