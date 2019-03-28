// inputnya [ 70, 50, 50, 50, 40, 40, 40, 30, 20, 20 ]
// jadi ada bar chart, nah itu array define value masing2 bar nya
// sekarang tujuannya, kta pengen semua value itu, sama kaya value terendah yg ada
// sekali turunin value, cuma boleh turun sampe 1 tingkat yg lebih rendah dari value tsb, dan kehitung 1 step
// jadi tujuannya, buat hitung minimum step buat semua value tsb sama rata

// sample input [ 40, 40, 30, 40, 20, 50 ]
//  STATE 1
//                                           _
//             _     _           _          | |
//            | |   | |    _    | |         | |
//            | |   | |   | |   | |    _    | |
//            | |   | |   | |   | |   | |   | |
//            | |   | |   | |   | |   | |   | |
//
//            40    40    30    40    20    50


//  STATE 2
//                                           
//             _     _           _           _
//            | |   | |    _    | |         | |
//            | |   | |   | |   | |    _    | |
//            | |   | |   | |   | |   | |   | |           50 -> 40
//            | |   | |   | |   | |   | |   | |           1 steps
//                                                        total steps 1
//            40    40    30    40    20    40


//  STATE 3
//                                           
//                                        
//             _     _     _     _           _
//            | |   | |   | |   | |    _    | |           40 -> 30
//            | |   | |   | |   | |   | |   | |           4 steps
//            | |   | |   | |   | |   | |   | |           total steps 5
//
//            30    30    30    30    20    30


//  STATE 4
//                                           
//                                        
//             
//             _     _     _     _     _      _
//            | |   | |   | |   | |   | |   | |           30 -> 20
//            | |   | |   | |   | |   | |   | |           5 steps
//                                                        total steps 10
//            20    20    20    20    20    20


const stepDown = (arr, levels, currLvl, nextLvl, stepCount) => {
  const newArr = arr.map(item => {
    if(item > nextLvl){
      stepCount++
      return nextLvl
    }
    else return item
  })

  if(currLvl > nextLvl){
    currLvl = nextLvl
    if(nextLvl > levels[levels.length - 1]){
      nextLvl = levels[levels.indexOf(nextLvl) + 1]
    }
    return stepDown(newArr, levels, currLvl, nextLvl, stepCount)
  }
  else return stepCount
}

const minStep = (arr) => {
  const sorted = arr.sort((a, b) => b - a)
  const levels = sorted.filter((x, idx) => x !== sorted[idx + 1])
  return stepDown(arr, levels, levels[0], levels[1], 0)
}

const soal2 = (input) => minStep(input)

export { soal2 }