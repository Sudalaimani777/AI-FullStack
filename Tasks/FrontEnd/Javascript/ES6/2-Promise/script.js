//Mom Buys me a Laptop or Not :-
const myLaptopList = [{ laptopName: "LOQ", laptopPrice: 85000, laptopModel: "Gen15" }];

const getMyLaptopList = new Promise((resolve, reject) => {
    setTimeout(() => {
        let myMumDecision = true;
        if (myMumDecision) {
            resolve();
        } else {
            reject("Mom didn't buy a Laptop");
        }
    }, 2000);
});

const createLaptopUi = () => {
    const div = document.createElement("div");
    setTimeout(() => {
        let output = "";
        myLaptopList.forEach(items => {
            output += ` <h1>Laptop Name: ${items.laptopName}</h1>
                        <h2>Laptop Price : ${items.laptopPrice}</h2>
                        <h2>Laptop Model : ${items.laptopModel}</h2>
                       `
        });
        div.innerHTML = output;
        document.body.appendChild(div);
    }, 2000)
}

const errorUI = (message) => {
    const h1 = document.createElement("h1");
    h1.innerHTML = message;
    document.body.appendChild(h1);
}

getMyLaptopList.then(createLaptopUi).catch(err => errorUI(err));