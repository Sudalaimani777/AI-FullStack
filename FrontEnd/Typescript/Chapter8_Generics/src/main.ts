// Generics :-
const echo = <T>(args: T): T => args;

const isObject = <T>(args: T): boolean => {
    return (typeof args === "object" && !Array.isArray(args) && args !== null);
}

console.log(isObject(true));
console.log(isObject("Sudalaimani"));
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: "Sudalaimani" }));
console.log(isObject(null));

const isTrue = <T>(args: T): { args: T, is: boolean } => {
    if (Array.isArray(args) && !args.length) {
        return { args, is: false }
    }
    if (isObject(args) && !Object.keys(args as keyof T).length) {
        return { args, is: false }
    }
    return { args, is: !!args }
}

// Logs of isTrue :-
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue("Sudalaimani"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Sudalaimani" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// We can also do this in the interfaces :-
interface BoolCheck<T> {
    value: T,
    is: boolean
}

const boolCheckVal = <T>(args: T): BoolCheck<T> => {
    if (Array.isArray(args) && !args.length) {
        return { value: args, is: false }
    }
    if (isObject(args) && !Object.keys(args as keyof T).length) {
        return { value: args, is: false }
    }
    return { value: args, is: !!args }
}

// We can also extends the Interface to the T :-
interface HasId {
    id: number
}

const checkUser = <T extends HasId>(user: T): T => user
console.log(checkUser({id: 1, name:"Sudalaimani"}));
// console.log(checkUser({name:"Varun"})) //Returns the error

const data = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
 
]

const getUserData = <T extends HasId, K extends keyof T> (user: T[], key: K): T[K][] => {
    return user.map(user => user[key]);
}

console.log(getUserData(data, "name"));