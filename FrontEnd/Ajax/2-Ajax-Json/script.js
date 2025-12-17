const singleCustomerBtn = document.querySelector("#single-customer");
const manyCustomerBtn = document.querySelector("#many-customers");

//Load All Customer :-
function loadAllEvent() {
    singleCustomerBtn.addEventListener("click", getSingleCustomer);
    manyCustomerBtn.addEventListener("click", getManyCustomers)
}
loadAllEvent();

//Get Single Customer Data :-
function getSingleCustomer() {
    //Create the XML :-
    const xhr = new XMLHttpRequest();

    //Open the xhr :-
    xhr.open("GET", "customer.json", true);

    //Send the Data :-
    xhr.send();

    //Load the Data :-
    xhr.onload = function () {
        const display = document.querySelector("#datas");
        const customer = JSON.parse(this.responseText);
        if (this.status === 200) {
            customer.forEach((customer) => {
                display.innerHTML = `
                    <ul class="bg-white rounded-xl shadow-lg p-6 space-y-3 border-l-4 border-purple-500">
                        <li class="text-gray-700"><span class="font-semibold text-purple-600">ID:</span> ${customer.id}</li>
                        <li class="text-gray-700"><span class="font-semibold text-purple-600">Name:</span> ${customer.Name}</li>
                        <li class="text-gray-700"><span class="font-semibold text-purple-600">Company:</span> ${customer.Company}</li>
                        <li class="text-gray-700"><span class="font-semibold text-purple-600">Phone Number:</span> ${customer.PhoneNumber}</li>
                    </ul>
                `
            })
        }
    }
}

//Get Many Customer :-
function getManyCustomers() {

    //Create the xhr :-
    const xhr = new XMLHttpRequest();

    //OPen :-
    xhr.open("GET", "customers.json", true);

    //Send the Data :-
    xhr.send();

    //Load the data :-
    xhr.onload = function () {
        const displayCustomer = document.querySelector("#datas");
        const allCustomers = JSON.parse(this.responseText);
        let output = "<div class='grid grid-cols-1 md:grid-cols-2 gap-6'>"

        if (this.status === 200) {
            allCustomers.forEach((customer) => {
                output += `
                    <ul class="bg-white rounded-xl shadow-lg p-6 space-y-3 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
                        <li class="text-gray-700"><span class="font-semibold text-indigo-600">ID:</span> ${customer.Id}</li>
                        <li class="text-gray-700"><span class="font-semibold text-indigo-600">Name:</span> ${customer.Name}</li>
                        <li class="text-gray-700"><span class="font-semibold text-indigo-600">Age:</span> ${customer.Age}</li>
                        <li class="text-gray-700"><span class="font-semibold text-indigo-600">Phone Number:</span> ${customer.PhoneNumber}</li>
                    </ul>
                `
            })
            output += "</div>"
            displayCustomer.innerHTML = output;
        }

    }

}