import express from "express";

const app = express();
const PORT = 5000;

app.get("/", (request, response) => {
    response.send("Index Page")
})

app.listen(PORT, () => {
    console.log("PORT is running")
})

// Get Request :-
// app.get("/users", (request, response) => {
//     response.send("Retrive all user data")
// })

// // POST Request :-
// app.post("/users",(request, response) => {
//     response.send("Created New User")
// })

// // PUT Request :-
// app.put("/users/123",(request, response) =>{
//     response.send("User Fully Updated")
// })

// // PATCH Request :-
// app.patch("/users/123",(request, response) => {
//     response.send("User partially modified")
// })

// // DELETE Request :-
// app.delete("/users/123", (request, response) => {
//     response.send("User Data was deleted")
// })


// Real Time Example :-
app.get("/user", (request, response) => {
    response.json([{id:1, name:"Sudalaimani"},{id:2,name:"Varun"}])
})

// Get Retrive Single User
app.get("/user/1",(request, response) =>{
    response.json({id:1, name:"Sudalaimani"})
})

// POST
app.post("/user",(request, response) => {
    response.json({id:3, name: "Kumar"})
})

// PUT
app.put("/user/1",(request, response) =>{
    response.json({message:"User Fully Modified"})
})

// PATCH :-
app.patch("/user/1", (request, response) => {
    response.json({message:"User was modified some datas"})
})

// DELETE
app.delete("/user/1",(request, response) =>{
    response.json({message:"User was deleted"})
})