//getElements -> HTML Collection.
//querySelection -> Node List


//QuerySelectorAll :-
const list = document.querySelectorAll(".collection-item");
console.log(list);

//The query selector has the node list which has all the js in-built methods like for each
//But the node list is not an array
//Check it has the array properties or not 
const check_List_Is_Array_Or_Not = Array.isArray(list);
console.log(check_List_Is_Array_Or_Not);

list.forEach((element, index, array) => {
    console.log(`The node list have the in-built array method like the forEach`);
    console.log("Element -", element);
    console.log("Index -", index);
    console.log("Array (Collection) -", array);
})
