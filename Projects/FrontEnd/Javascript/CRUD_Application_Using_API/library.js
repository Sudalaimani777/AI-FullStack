class Task{
    static async get(url){
        try{
            const response = await fetch(url);
            const responseData = await response.json();
            return responseData;
        }catch(err){
            console.log(err);
        }
    };

    //POST Request :-
    static async post(url, data){
        try{
            const response = await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });

            const responseData = await response.json()
            return responseData;
        }

        catch(err){
            console.log(err);
        }
    };

    //PUT Request :-
    static async put(url, data){
        try{
            const response = await fetch(url,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            });

            const responseData =await response.json();
            return responseData;
        }

        catch(err){
            console.log(err);
        }
    };

    //DELETE Request :-
    static async delete(url){
        try{
            const response = await fetch(url,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            });

            const responseData = await response.json();
            return responseData;
        }
        catch(err){
            console.log(err);
        }
    }
}

export default Task;