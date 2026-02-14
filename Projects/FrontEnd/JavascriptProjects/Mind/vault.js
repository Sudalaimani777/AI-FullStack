class Vault{
    constructor(){
        this.thoughts = [];
    }

    // Add a new thought to the vault method
    addThought(thought){
        this.thoughts.push(thought);
    }

    allThoughts(){
        return this.thoughts;
    }
}

const v = new Vault();
console.log(v);
console.log(v.thoughts);

// Adding a thought to the vault
v.addThought("This is the thought 1");
console.log(v.thoughts);


class AdimnVault extends Vault {
    constructor(){
        super();
        this.role = "admin";
    }
}