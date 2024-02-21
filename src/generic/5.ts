/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/




interface KeyValuePair {
  firstName: any;
  lastName: any;
}

type ForKeyValuePair = keyof KeyValuePair;

export {};