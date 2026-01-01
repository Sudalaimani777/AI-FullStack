class UserDataLibrary {

    //GET Request :-
    static async get(url){
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }

    //POST Request :-
    static async post(url, data){
        const response = await fetch(url, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    }

    //PUT Request :-
    static async put(url, data){
        const response = await fetch(url, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const responseData =await response.json();
        return responseData;
    }

    //DELETE Request :-
    static async delete(url){
        const response = await fetch(url,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        });
        const responseData = await response.json();
        return responseData;
    }
}
export default UserDataLibrary;
