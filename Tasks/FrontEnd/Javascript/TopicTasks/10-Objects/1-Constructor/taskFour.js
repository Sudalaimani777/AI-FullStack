// ============================================================================
// TASK 4: Implement methods inside constructor functions using 'this'
// ============================================================================

console.log("\n=== TASK 4: Methods Inside Constructor Functions ===\n");

// Example 1: BankAccount Constructor with Methods
function BankAccount(accountHolder, initialBalance) {
    // Properties
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    
    // Method 1: Deposit money
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance: $${this.balance}`;
        }
        return "Invalid deposit amount";
    }
    
    // Method 2: Withdraw money
    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. Remaining balance: $${this.balance}`;
        }
        return "Insufficient funds or invalid amount";
    }
    
    // Method 3: Check balance
    this.checkBalance = function() {
        return `${this.accountHolder}'s balance: $${this.balance}`;
    }
    
    // Method 4: Transfer money to another account
    this.transfer = function(amount, recipientAccount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            recipientAccount.balance += amount;
            return `Transferred $${amount} to ${recipientAccount.accountHolder}`;
        }
        return "Transfer failed";
    }
}

// Creating instances and testing methods
const johnAccount = new BankAccount("John Doe", 1000);
const janeAccount = new BankAccount("Jane Smith", 500);

console.log(johnAccount.checkBalance()); // John Doe's balance: $1000
console.log(johnAccount.deposit(500));   // Deposited $500. New balance: $1500
console.log(johnAccount.withdraw(200));  // Withdrew $200. Remaining balance: $1300
console.log(johnAccount.transfer(300, janeAccount)); // Transferred $300 to Jane Smith
console.log(johnAccount.checkBalance()); // John Doe's balance: $1000
console.log(janeAccount.checkBalance()); // Jane Smith's balance: $800

console.log("\n---");

// Example 2: Car Constructor with Methods
function Car(brand, model, year) {
    // Properties
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = 0;
    this.isEngineOn = false;
    
    // Method 1: Start engine
    this.startEngine = function() {
        if (!this.isEngineOn) {
            this.isEngineOn = true;
            return `${this.brand} ${this.model} engine started!`;
        }
        return "Engine is already running";
    }
    
    // Method 2: Stop engine
    this.stopEngine = function() {
        if (this.isEngineOn && this.speed === 0) {
            this.isEngineOn = false;
            return `${this.brand} ${this.model} engine stopped!`;
        }
        return "Cannot stop: Car is moving or engine is already off";
    }
    
    // Method 3: Accelerate
    this.accelerate = function(amount) {
        if (this.isEngineOn) {
            this.speed += amount;
            return `Accelerating... Current speed: ${this.speed} km/h`;
        }
        return "Start the engine first!";
    }
    
    // Method 4: Brake
    this.brake = function(amount) {
        if (this.speed > 0) {
            this.speed = Math.max(0, this.speed - amount);
            return `Braking... Current speed: ${this.speed} km/h`;
        }
        return "Car is already stopped";
    }
    
    // Method 5: Get car info
    this.getInfo = function() {
        return `${this.year} ${this.brand} ${this.model} - Speed: ${this.speed} km/h, Engine: ${this.isEngineOn ? 'On' : 'Off'}`;
    }
}

// Creating car instances and testing methods
const myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.getInfo());           // 2022 Toyota Camry - Speed: 0 km/h, Engine: Off
console.log(myCar.startEngine());       // Toyota Camry engine started!
console.log(myCar.accelerate(50));      // Accelerating... Current speed: 50 km/h
console.log(myCar.accelerate(30));      // Accelerating... Current speed: 80 km/h
console.log(myCar.brake(20));           // Braking... Current speed: 60 km/h
console.log(myCar.getInfo());           // 2022 Toyota Camry - Speed: 60 km/h, Engine: On

console.log("\n---");

// Example 3: Student Constructor with Methods
function Student(name, rollNumber, grade) {
    // Properties
    this.name = name;
    this.rollNumber = rollNumber;
    this.grade = grade;
    this.subjects = [];
    
    // Method 1: Add subject
    this.addSubject = function(subject, marks) {
        this.subjects.push({ subject: subject, marks: marks });
        return `Added ${subject} with ${marks} marks`;
    }
    
    // Method 2: Calculate average
    this.calculateAverage = function() {
        if (this.subjects.length === 0) return 0;
        const total = this.subjects.reduce((sum, sub) => sum + sub.marks, 0);
        return (total / this.subjects.length).toFixed(2);
    }
    
    // Method 3: Get grade status
    this.getGradeStatus = function() {
        const avg = parseFloat(this.calculateAverage());
        if (avg >= 90) return "Excellent";
        if (avg >= 75) return "Good";
        if (avg >= 50) return "Average";
        return "Needs Improvement";
    }
    
    // Method 4: Display report card
    this.displayReportCard = function() {
        console.log(`\n--- Report Card ---`);
        console.log(`Name: ${this.name}`);
        console.log(`Roll Number: ${this.rollNumber}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Subjects:`);
        this.subjects.forEach(sub => {
            console.log(`  - ${sub.subject}: ${sub.marks}`);
        });
        console.log(`Average: ${this.calculateAverage()}`);
        console.log(`Status: ${this.getGradeStatus()}`);
        console.log(`-------------------\n`);
    }
}

// Creating student instance and testing methods
const student1 = new Student("Alice Johnson", "S001", "10th");
student1.addSubject("Math", 95);
student1.addSubject("Science", 88);
student1.addSubject("English", 92);
student1.displayReportCard();

console.log("\n---");

// Example 4: Counter Constructor with Methods
function Counter(initialValue = 0) {
    // Properties
    this.value = initialValue;
    this.history = [initialValue];
    
    // Method 1: Increment
    this.increment = function() {
        this.value++;
        this.history.push(this.value);
        return this.value;
    }
    
    // Method 2: Decrement
    this.decrement = function() {
        this.value--;
        this.history.push(this.value);
        return this.value;
    }
    
    // Method 3: Reset
    this.reset = function() {
        this.value = 0;
        this.history.push(0);
        return "Counter reset to 0";
    }
    
    // Method 4: Get history
    this.getHistory = function() {
        return `History: ${this.history.join(' → ')}`;
    }
    
    // Method 5: Get current value
    this.getValue = function() {
        return `Current value: ${this.value}`;
    }
}

// Creating counter instance and testing methods
const myCounter = new Counter(5);
console.log(myCounter.getValue());      // Current value: 5
myCounter.increment();
myCounter.increment();
myCounter.decrement();
console.log(myCounter.getValue());      // Current value: 6
console.log(myCounter.getHistory());    // History: 5 → 6 → 7 → 6

console.log("\n✅ Task 4 Completed: Methods inside constructor functions using 'this'");