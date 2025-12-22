const http = new EasyHttp();

//GET :-
// http.get("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/usera").then(data => {
//     const section = document.createElement("section");
//     let output = "";
//     data.forEach((users => {
//         output += `<h1>${users.name}</h1>
//                     <h1>${users.id}</h1>
//                 `
//     }));
//     section.innerHTML = output;
//     document.body.appendChild(section);
// }).catch(err => console.log(err));

http.get("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user").then(data => console.log(data)).catch(err => console.log(err));

//POST :-
const userData = {
    name: "John Doe",
    id: 200,
    title: "THis is the sample text"
}
// http.post("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user", userData).then(data => { console.log(data); }).catch(err => console.log(err));

//PUT :-
http.put("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user/1", userData).then(data => console.log(data)).catch(err => console.log(err));

//DELETE :-
http.delete("https://694904f71ee66d04a450e3d2.mockapi.io/api/v1/user/1").then(data => console.log(data)).catch(err => console.log(err));
