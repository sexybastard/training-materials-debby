import { soal1 } from './soal1'
import { soal2 } from './soal2'

console.log('SOAL 1\n=======\n', soal1())
console.log('SOAL 2\n=======\n', soal2())

// let asd = 'aaaa\nbbbbb\nccccc'
// let change = asd.replace(/\n/g, " ")
// console.log(change)

const noPassword = ({ password, ...rest }) => rest
const user = {
  id: 100,
  name: 'Howard Moon',
  password: 'Password!'
}

//=> { id: 100, name: 'Howard moon' }
console.log(noPassword(user))

// // let x = {a: 1, b: 2, c: 3, z:26};
// // let {b, ...y} = x;
// // console.log(x)

// let a = {
//   a: 1, b: 2, c: 3
// }
// let x = {
//   d: 4, e: 5
// }
// let b = { ...a, ...x }
// console.log(b)