const API = "https://jsonplaceholder.typicode.com/users";

export async function syncThought (thought) {
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

console.log(syncThought({title:"This is a thought to be synced with the API", body:"This is the body of the thought"}));


