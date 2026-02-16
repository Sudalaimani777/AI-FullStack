export function Thought (content, type) {
    this.id = Date.now();
    this.content = content;
    this.type = type; // 'idea', 'memory', 'task'
    this.createdAt = new Date();
}

// Adding the prototype
// Thought.prototype.summary = function(){
//     return `${this.type.toUpperCase()} : ${this.content}`
// }



Thought.prototype.summary = function ()  {
    return `${this.type.toUpperCase()} : ${this.content}`
}


const data = new Thought("Learn JavaScript", "task");
console.log(data.summary());
