class UserTaskLibrary{
    //GET Request :-
    static get(url){
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err));
        })
    };
    //POST Request :-
    static post(url, userTask){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(userTask)
            }).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err))
        })
    }
    //DELETE Request :-
    static delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err))
        })
    }
}

export default UserTaskLibrary;