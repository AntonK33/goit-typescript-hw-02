/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Gender = {
  male: string;
  female: string;
};
const myGender: Gender[] = [{ male: 'Anton', female:'Mariia'}];

export {};
