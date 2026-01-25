//In all Webpages we have an UI, data and the data was stored in the DB 
//When the App started then the events will be started...(So events are in the App Controller)

//Data Controller (IIFE) :-
const dataController = (() => {

    //Private Data :-
    const API_URL = "https://697637efc0c36a2a99508a09.mockapi.io/api/v1/task"

    //Creating Constructor of the Items :-
    const Item = function (id, task, money) {
        this.id = id;
        this.task = task;
        this.money = money;
    }

    const data = {
        //All Data :-
        items: [
            // { id: 0, task: "Complete day 28 video and learn", money: 2000 },
            // { id: 1, task: "Learn JS", money: 99000 },
            // { id: 2, task: "Try", money: 10000 },
        ],
        //Total Money :-
        totalMoney: 0,
        currentItem: null,
    };

    //Access these above data by returning them :-
    return {
        //Load Items :-
        loadItem: async () => {
            try {
                const response = await fetch(API_URL);
                //Validation :-
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const items = await response.json();
                console.log(items);

                data.items = items;
                return items;

            } catch (err) {
                console.log("Error")
            }
        },
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
        addNewData: async function (task, money) {
            try {
                const response = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            task: task,
                            money: parseInt(money)
                        }
                    )
                })
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const newItem = await response.json();
                data.items.push(newItem);
                return newItem;
            } catch (err) {
                console.log("Error", err);
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
            return total;
        },
        getItemById: (id) => {
            let found = null;
            data.items.forEach(item => {
                if (item.id === id) {
                    found = item;
                }
            })
            return found;
        },
        setCurrentItem: (item) => {
            data.currentItem = item
        },
        getCurrentItem: () => {
            return data.currentItem;
        },
        //Delete Item :-
        deleteItem: async (id) => {
            try {
                const response = await fetch(`${API_URL}/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                //Filter the Items :-
                data.items = data.items.filter(item => item.id !== parseInt(id));
                return true;
            } catch (err) {
                console.log(err)
            }
        },
        //Update Item :-
        updateItem: (task, money) => {
            money = parseInt(money);
            console.log(task, money);

            let found = null;
            data.items.forEach(items => {
                if (items.id === data.currentItem.id) {
                    console.log(items)
                    //Updating the values :-
                    items.task = task;
                    items.money = money;
                    found = items;
                    console.log(found);
                }
            })
            return found;
        },
        //Clear All Items :-
        clearAllItems: () => {
            data.items = [];
        }
    }

})();



//UI Controller :-
const uiController = (() => {
    return {
        //Populate Data :-
        populateData: (data) => {
            showDataUI(data);
        },
        //Error Data :-
        errorData: (data) => {
            showErrorUI(data);
        },
        //Alert UI :-
        alertUI: () => {
            alert("Invalid Datas")
        },
        //Show Total Money :-
        showTotalMoney: (totalMoney) => {
            const totalMoneyElement = document.querySelector(".total");
            totalMoneyElement.innerText = totalMoney;
        },
        //Clear Input Fields :-
        clearInputFields: () => {
            document.querySelector("#name").value = "";
            document.querySelector("#money").value = "";
        },
        //Clear Btn State :-
        clearBtnState: () => {
            document.querySelector(".update-btn").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
            document.querySelector(".add-btn").style.display = "inline";
        },
        //Show Edit Btns :-
        showEditBtns: () => {
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
            document.querySelector(".add-btn").style.display = "none";
        },
        //Add Item to the Form :-
        addItemToForm: () => {
            const currentItem = dataController.getCurrentItem();
            document.querySelector("#name").value = currentItem.task;
            document.querySelector("#money").value = currentItem.money;
        },
        //Delete List Item :-
        deleteListItem: (id) => {
            console.log(id);
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        //UPdate List Item :-
        updateListItem: (updatedItem) => {
            console.log(updatedItem);
            let listItems = document.querySelectorAll(".collection-item");
            console.log(listItems);
            //Convert Node list to array :-
            listItems.forEach(item => {
                console.log(item);
                const itemID = item.getAttribute("id");
                console.log(itemID);
                if (itemID === `item-${updatedItem.id}`) {
                    //Updating the UI :-
                    console.log(itemID);
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${updatedItem.task} : </strong> <em>${updatedItem.money}</em>
                    <a href="#" class="secondary-content">
                        <i class="fa-solid fa-pencil"></i>
                    </a>`;

                    //Get the total Money :-
                    const getTotalMoney = dataController.getTotalMoney();

                    //Displaying the Total Money :-
                    uiController.showTotalMoney(getTotalMoney);

                    //Clear the Input Fields :-
                    uiController.clearInputFields();
                }
            })
        },
        //Clear All Items UI :-
        clearAllItemsUI: () => {
            document.querySelector("#item-list").innerHTML = "";
        }
    }
})();


//App Controller :-
const appController = (() => {

    //Event Listeners (Buttons) :-
    const addBtn = document.querySelector(".add-btn");
    //UL :-
    const taskAndMoneyContainer = document.querySelector(".collection");
    //Delete Btn :-
    const deleteBtn = document.querySelector(".delete-btn");
    //Edit Btn :-
    const editBtn = document.querySelector(".update-btn");
    //Back Btn :-
    const backBtn = document.querySelector(".back-btn");
    //Clear All :-
    const clearAllBtn = document.querySelector(".clear-btn");

    //Events :-
    const loadAllEventListeners = () => {
        //Add Money and Task :-
        addBtn.addEventListener("click", addMoneyAndTaskEvent);

        //Edit Icon Click :-
        taskAndMoneyContainer.addEventListener("click", handleEdit);

        //Delete Btn Click :-
        deleteBtn.addEventListener("click", itemDeleteSubmit);

        //Edit Btn Click :-
        editBtn.addEventListener("click", itemEditSubmit);

        //Back Btn CLick :-
        backBtn.addEventListener("click", itemBackSubmit);

        //Clear All Btn Click :-
        clearAllBtn.addEventListener("click", clearSubmit);
    }

    // //Add Money and Task Function :-
    const addMoneyAndTaskEvent = async (e) => {
        //Get the Value form the Inputs which is money and task :-
        const taskAndMoneyValues = dataController.getTaskAndMoney();
        // console.log(taskAndMoneyValues);

        //Validation for the Task and Money :-
        if (taskAndMoneyValues.task === "" || taskAndMoneyValues.money === "") {
            uiController.alertUI();
        } else {
            console.log(taskAndMoneyValues);
            //Add the Entered Task and Money to the "items" object in the "dataController":-
            const newData = await dataController.addNewData(taskAndMoneyValues.task, taskAndMoneyValues.money);

            if (newData) {
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
    }


    //Handle Edit function :-
    const handleEdit = (e) => {
        // console.log(e.target.classList.contains("fa-pencil"));
        if (e.target.classList.contains("fa-pencil")) {

            const listId = e.target.closest(".collection-item").id;
            //Split it into the Array :-
            const listArr = listId.split("-");
            //Get the ID :-
            const id = listArr[1];
            console.log(id);
            console.log(listId);

            //Send the data to the edit :-
            const itemToEdit = dataController.getItemById(id);
            if(itemToEdit){
                //Set the Current Item :-
                dataController.setCurrentItem(itemToEdit);
                uiController.addItemToForm();
                uiController.showEditBtns();
            }

        }
    }

    //Item Delete Submit :-
    const itemDeleteSubmit = async (e) => {

        e.preventDefault();

        //Get the Current Item :-
        const currentItem = dataController.getCurrentItem();
        console.log(currentItem);

        //Delete the item from the Data Structure :-
        const deleted = await dataController.deleteItem(currentItem.id);

        if (deleted) {
            //Get the total Money :-
            const getTotalMoney = dataController.getTotalMoney();

            //Displaying the Total Money :-
            uiController.showTotalMoney(getTotalMoney);

            //Clear the Input Fields :-
            uiController.clearInputFields();
        }

    }

    //Item Edit (Update) Submit :-
    const itemEditSubmit = (e) => {
        e.preventDefault();
        //Get the Current Item :-
        const currentItem = dataController.getCurrentItem();
        console.log(currentItem);

        //Get the updated values from the form :-
        const input = dataController.getTaskAndMoney();

        //Update the Item :-
        const updateItem = dataController.updateItem(input.task, input.money);

        console.log(updateItem);

        //Update the UI :-
        uiController.updateListItem(updateItem);
    }

    //Back Btn Submit :-
    const itemBackSubmit = (e) => {
        e.preventDefault();
        //Clear the Input Fields :-
        uiController.clearInputFields();

        //Clear the Inuput Fields :-
        uiController.clearBtnState();
    }

    //Clear All Submit :-
    const clearSubmit = () => {
        //Clear all items from the data structure :-
        dataController.clearAllItems();

        //Clear all items from the UI :-
        uiController.clearAllItemsUI();

        //Get the total Money :-
        const totalMoney = dataController.getTotalMoney();

        //Show the total Money :-
        uiController.showTotalMoney(totalMoney);
    }

    return {
        appStart: async () => {

            //Calling the load All Events when the data is avaliable
            loadAllEventListeners();

            //Remove the buttons except the Add Button :-
            uiController.clearBtnState();

            //API
            try {

                //Accessing the Data from the Data Controller :-
                // const data = dataController.getItems();

                const data = await dataController.loadItem();
                // console.log(data);

                //Checking Whether the data is present or not :-
                if (data.length > 0) {
                    //UI Controller :-
                    uiController.populateData(data);
                    // console.log(dataController.getTaskAndMoney());

                    //Get the total Money :-
                    const getTotalMoney = dataController.getTotalMoney();

                    //Displaying the Total Money :-
                    uiController.showTotalMoney(getTotalMoney);


                }
                else {
                    uiController.errorData(data);
                }
            } catch (err) {
                console.log("Error", err);
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