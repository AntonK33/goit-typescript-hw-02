/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}
type Qwe = Pick<AllType,'name'&'color'>
type Ewq = Pick<AllType, 'position' & 'weight'>

let top: Qwe = {
  name:'Martin',
  color:'Braun'
}
let bottom: Ewq = {
  position:4,
  weight:5
}
function compare (top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

export {};