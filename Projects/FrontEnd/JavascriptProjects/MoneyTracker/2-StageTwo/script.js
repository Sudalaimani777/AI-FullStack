//In all Webpages we have an UI, data and the data was stored in the DB 
//When the App started then the events will be started...(So events are in the App Controller)

//Data Controller (IIFE) :-
const dataController = (() => {

    //Private Data :-

    //Creating Constructor of the Items :-
    const Item = function(id,task,money){
        this.id = id;
        this.task = task;
        this.money = money
    }

    const data = {
        items: [
            { id: 0, task: "Complete day 28 video and learn", money: 2000 },
            { id: 1, task: "Learn JS", money: 99000 },
            { id: 2, task: "Try", money: 10000 },
        ]
    };

    //Access these above data by returning them :-
    return {
        //Get the Whole data :-
        getData: () => {
            return data;
        },
        //Get the Specific Data :-
        getItems: function () {
            return this.getData().items;
        },
        getTaskAndMoney: () => {
            return {
                task: document.querySelector("#name").value,
                money: document.querySelector("#money").value
            }
        },
        addNewData: function (task, money) {
            // console.log(task, money);
            //Creating an ID for each objects :-
            let ID;
            if (data.items.length > 0) {
                //Incrementing the ID
                ID = data.items[data.items.length -1].id + 1;
                console.log(ID)

                //Converting the money type from string to number :-
                money = parseInt(money);
                console.log(typeof money)
                //Creating the New Items  using Constructor:-
                const newItem = new Item(ID,task,money);
                console.log(newItem); 

                //Add the created object to the items array :-
                data.items.push(newItem);
            }
            else {
                //Initilizing the ID as 0;
                ID = 0;

                
            }
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
        },
        alertUI: () => {
            alert("Invalid Datas")
        }
    }
})();


//App Controller :-
const appController = (() => {

    //Event Listeners (Buttons) :-
    const addBtn = document.querySelector(".add-btn");

    //Events :-
    const loadAllEventListeners = () => {
        //Add Money and Task :-
        addBtn.addEventListener("click", addMoneyAndTaskEvent);
    }

    //Add Money and Task Function :-
    const addMoneyAndTaskEvent = (e) => {
        //Get the Value form the Inputs which is money and task :-
        const taskAndMoneyValues = dataController.getTaskAndMoney();
        // console.log(taskAndMoneyValues);

        //Validation for the Task and Money :-
        if (taskAndMoneyValues.task === "" || taskAndMoneyValues.money === "") {
            uiController.alertUI();
        } else {
            console.log(taskAndMoneyValues);
            //Add the Entered Task and Money to the "items" object in the "dataController":-
            const newData = dataController.addNewData(taskAndMoneyValues.task, taskAndMoneyValues.money);
        }
    }

    return {
        appStart: () => {
            //Accessing the Data from the Data Controller :-
            const data = dataController.getItems();
            //Checking Whether the data is present or not :-
            if (data.length > 0) {
                //UI Controller :-
                uiController.populateData(data);
                // console.log(dataController.getTaskAndMoney())

                //Calling the load All Events when the data is avaliable
                loadAllEventListeners();
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
function showErrorUI(data) {
    const ul = document.querySelector("#item-list");
    const li = document.createElement("li");
    li.className = "collection-item";
    li.style.color = "red";
    li.style.fontWeight = "bold";
    li.textContent = "No Data Available. Please Add Some Data.";
    ul.appendChild(li);
    console.log(data);
}