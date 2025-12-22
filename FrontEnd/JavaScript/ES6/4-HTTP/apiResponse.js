class EasyHttp {
    //GET Request :-
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err));
        })
    };
    //POST Request :-
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data),
            }).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err));
        })
    }

    //PUT Request (UPDATE) :-
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            }).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err));
        })
    }

    //DELETE Request :-
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"DELETE",
                headers:{
                    "Content-type": "application/json"
                }
            }).then(response => response.json()).then(data => resolve(data)).catch(err => reject(err));
        })
    }

}