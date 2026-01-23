//In all Webpages we have an UI, data and the data was stored in the DB 
//When the App started then the events will be started...(So events are in the App Controller)

//Data Controller (IIFE) :-
const dataController = (() => {

    //Private Data :-

    //Creating Constructor of the Items :-
    const Item = function (id, task, money) {
        this.id = id;
        this.task = task;
        this.money = money;
    }

    const data = {
        //All Data :-
        items: [
            { id: 0, task: "Complete day 28 video and learn", money: 2000 },
            { id: 1, task: "Learn JS", money: 99000 },
            { id: 2, task: "Try", money: 10000 },
        ],
        //Total Money :-
        totalMoney: 0
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
                ID = data.items[data.items.length - 1].id + 1;
                console.log(ID)

                //Converting the money type from string to number :-
                money = parseInt(money);
                console.log(typeof money);

                //Creating the New Items  using Constructor:-
                const newItem = new Item(ID, task, money);
                console.log(newItem);

                //Add the created object to the items array :-
                data.items.push(newItem);
                return newItem;
            }
            else {
                //Initilizing the ID as 0;
                ID = 0;


            }
        },
        getTotalMoney: function () {
            let total = 0;

            //Validation :-
            if (data.items.length > 0) {
                data.items.forEach(items => {
                    //Adding the total money :-
                    total += items.money;

                    //Storing the total money in the data object :-
                    data.totalMoney = total
                })
                return data.totalMoney;
            } else {
                return data.totalMoney = 0;
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
        },
        showTotalMoney: (totalMoney) => {
            const totalMoneyElement = document.querySelector(".total");
            totalMoneyElement.innerText = totalMoney;
        },
        //
        clearInputFields:()=>{
            document.querySelector("#name").value = "";
            document.querySelector("#money").value = "";
        },
        //Clear Btn State :-
        clearBtnState:()=>{
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
            document.querySelector(".add-btn").style.display = "inline";
        },
        //Show Edit Btns :-
        showEditBtns:()=>{
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
            document.querySelector(".add-btn").style.display = "none";
        }
    }
})();


//App Controller :-
const appController = (() => {

    //Event Listeners (Buttons) :-
    const addBtn = document.querySelector(".add-btn");
    //UL :-
    const taskAndMoneyContainer = document.querySelector(".collection");

    //Events :-
    const loadAllEventListeners = () => {
        //Add Money and Task :-
        addBtn.addEventListener("click", addMoneyAndTaskEvent);

        //Edit Icon Click :-
        taskAndMoneyContainer.addEventListener("click",handleEdit);
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

            //Add the New Data to the UI :-
            uiController.populateData([newData]);

            //Clear the Input Fields :-
            uiController.clearInputFields();

            //Get the total Money :-
            const getTotalMoney = dataController.getTotalMoney();

            //Displaying the Total Money :-
            uiController.showTotalMoney(getTotalMoney);
        }
    }

    //Handle Edit function :-
    const handleEdit = (e) => {
        // console.log(e.target.classList.contains("fa-pencil"));
        if(e.target.classList.contains("fa-pencil")){

            //All Task ID :-
            const taskId = e.target.parentElement.parentElement.id;
            
            //Breaking the ID :-
            const idArr = taskId.split("-");

            //Getting the ID :-
            const id = parseInt(idArr[1]);
            console.log(id)

            //Show the Edit Buttons :-
            uiController.showEditBtns();
        }
    }

    return {
        appStart: () => {

            //Remove the buttons except the Add Button :-
            uiController.clearBtnState();

            //Accessing the Data from the Data Controller :-
            const data = dataController.getItems();
            //Checking Whether the data is present or not :-
            if (data.length > 0) {
                //UI Controller :-
                uiController.populateData(data);
                // console.log(dataController.getTaskAndMoney());

                //Get the total Money :-
                const getTotalMoney = dataController.getTotalMoney();

                //Displaying the Total Money :-
                uiController.showTotalMoney(getTotalMoney);

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
        //Adding ClassName to the LI :-
        li.className = "collection-item";
        //Add ID to the LI :-
        li.id = `item-${data.id}`;

        //Creating Strong Tag :-
        const strongTag = document.createElement("strong");
        //Adding Value to the Storng tag form the Actual Data
        strongTag.textContent = data.task + " : ";

        //Creating EM tag
        const em = document.createElement("em");
        //Adding value to the em tag 
        em.textContent = data.money;

        //Creating an "a" tag :-
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

//TIme 41.27