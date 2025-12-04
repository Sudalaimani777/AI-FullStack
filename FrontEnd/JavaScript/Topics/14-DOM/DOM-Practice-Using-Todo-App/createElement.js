/**
 * <li class="collection-item">
                List Item 2
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> 
 */
const ul = document.querySelector(".collection");

//Creating an Element :-
const li = document.createElement("li");
const a = document.createElement("a");

//Adding the class to the created li :-
li.className = "collection-item";
console.log("Added the class name to the created li ", li);

//Added the text to the li :-
li.textContent = "List item 6";
console.log("Added the proper text to the created list li ", li);

//Adding attributes and classes to the created a tag :-
a.href = "#";
a.className = "delete-item secondary-content";
//Add icon to the "a" tag :-
a.innerHTML = '<i class="fa fa-remove"></i>'

//Append the "a" tag to the li :- 
li.appendChild(a);
console.log('Append the "a" tag in the li ', li);

//Append the created li to the UL :-
ul.appendChild(li);
