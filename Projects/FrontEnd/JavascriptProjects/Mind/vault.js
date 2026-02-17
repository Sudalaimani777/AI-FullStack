class Vault{
    constructor(){
        this.thoughts = [];
    }

    // Add a new thought to the vault method
    addThought(thought){
        this.thoughts.push(thought);
    }

    // Get all thoughts from the vault method
    allThoughts(){
        return this.thoughts;
    }
}

const v = new Vault();
console.log(v);
console.log(v.thoughts);

// Adding a thought to the vault
v.addThought("This is the thought 1");
v.addThought("This is the thought 2");
v.addThought("This is the thought 3");

console.log(v.allThoughts());


class AdminVault extends Vault {
    constructor(){
        super();
        this.role = "admin";
    }
}