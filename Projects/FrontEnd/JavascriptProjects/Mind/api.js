const API = "https://69948a24fade7a9ec0f5aecc.mockapi.io/api/v1/mind";

export async function createThought (thought) {
    try{
        const response = await fetch(API,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(thought)
        });
        const data = await response.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}


export async function getThoughts (){
    const response = await fetch(API);
    const data = await response.json();
    return data;
}


// Delete Thought :-
export async function deleteThought(id){
    try{
        const response = await fetch(API + `/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err);
    }
}