// jadi ada array ini [ 1, 3, 5, 2, 4 ] terus treshold nya 4
// nah kita start di index pertama, buat next, boleh ke current index+1, atau current index+2
// kalo value yg diposisi sekarang selisihnya lebih dari treshold

const minStep = (arr, treshold) => {
  
}

const soal1 = () => {
  const input = [ 1, 3, 5, 2, 4 ]
  const treshold = 4
  const output = minStep(input, treshold)
  return 'For input ' + input + '\n the minimum step is ' + output
}

export { soal1 }