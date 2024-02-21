/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError({message}: {message: string}) {
  try {
    throw new Error('Error');
  } catch (error) {
    customError({message: error.message})
  }
  
}

export {};