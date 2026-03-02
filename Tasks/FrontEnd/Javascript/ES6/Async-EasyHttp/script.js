import UserDataLibrary from "./library.js";

const userData = {
    user:"Sudalaimani"
}

const data = UserDataLibrary;
data.get('https://jsonplaceholder.typicode.com/users').then(user => console.log(user)).catch(err => console.log(err));

data.post("https://jsonplaceholder.typicode.com/users", userData).then(user => console.log(user)).catch(err => console.log(err));

data.put("https://jsonplaceholder.typicode.com/users/5", userData).then(user => console.log(user)).catch(err => console.log(err));

data.delete("https://jsonplaceholder.typicode.com/users/5").then(user => console.log(user)).catch(err => console.log(err));



