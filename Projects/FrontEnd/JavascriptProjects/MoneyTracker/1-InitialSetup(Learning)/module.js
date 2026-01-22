//In the App there are three main controller are avaliable such as (App Controller, Data Controller, Storage Controller);

//In our Project, we have two data are avaliable such as (Task Data and Money Data) 

//1)Data Controller :- IIFE 
const dataController = (() => {

    //Private Data :-
    const data = {
        items: [
            { id: 0, task: "Complete today task", money: 1000 },
            { id: 0, task: "Arived Soon", money: 39000 },
            { id: 0, task: "Complete today workout", money: 200000 },
            { id: 0, task: "Finish 1 video in javid bro", money: 30000 }
        ]
    }

    //We need to access these private data by returning them in the type of "Object"
    return {
        //Return the Data Object :-
        getData: () => {
            return data;
        },
        //Return the Items array in the data Object :-
        getItems: function () {
            return this.getData().items
        }
    }

})();

//UI Controller :-
const uiController = (() => {
    return {
        populateData: (data) => {
            showDataUI(data);
        },
        errorData: (data) => {
            showErrorUI(data);
        }
    }
})();

//App Controller :-
//The App Controller controls every data that is shown in the UI :-
const appController = (() => {

    return {
        appStart: () => {
            console.log("App Started")

            //Accessing the Data in the dataController :-
            const data = dataController.getItems();
            // console.log(data.length); //Checking the data has the array of objects using length method.

            //Checking if the items is present or not :-
            if (data.length > 0) {
                uiController.populateData(data);
            }
            else {
                uiController.errorData(data);
            }
        }
    }
})();
appController.appStart();

//Show Data UI Function :-
function showDataUI(data) {
    data.forEach(data => {
        //Accessing the UL from the HTML
        const ul = document.querySelector("#item-list");
        //Creating the LI :-
        const li = document.createElement("li");
        //Adding ClassName to the LI
        li.className = "collection-item";
        //Creating Strong Tag :-
        const strongTag = document.createElement("strong");
        //Adding Value to the Storng tag form the Actual Data
        strongTag.textContent = data.task + " : ";
        //Creating EM tag
        const em = document.createElement("em");
        //Adding value to the em tag 
        em.textContent = data.money;
        //Creating a tag
        const a = document.createElement("a");
        //Adding class name to the a 
        a.className = "secondary-content";
        //Creating i tag :-
        const i = document.createElement("i");
        //Adding class list (many classes)
        i.classList = "fa-solid fa-pencil";

        //Appending :-
        a.appendChild(i);
        li.appendChild(strongTag);
        li.appendChild(em);
        li.appendChild(a);
        console.log(li);
        ul.appendChild(li);
    })
}

//Show Error UI :-
function showErrorUI(data){
    const ul = document.querySelector("#item-list");    
    const li = document.createElement("li");
    li.className = "collection-item";
    li.style.color = "red";
    li.style.fontWeight = "bold";
    li.textContent = "No Data Available. Please Add Some Data.";
    ul.appendChild(li);
    console.log(data);
}