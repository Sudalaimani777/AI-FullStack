const API = "https://jsonplaceholder.typicode.com/users";

async function syncThought (thought) {
    try{
        const response = await fetch(API,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(thought)
        });
        return response.json(); 
    }
    catch(err){
        console.log(err);
    }
}

syncThought({title:"This is a thought to be synced with the API", body:"This is the body of the thought"}); 
