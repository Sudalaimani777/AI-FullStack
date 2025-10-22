// Task 1: Implement custom indexOf() method
Array.prototype.customIndex = function (searchElement, fromIndex = 0) {
    //ArrayLength
    let arrayLength = this.length;
    //If arry length is 0 return -1
    if (arrayLength === 0) {
        return -1;
    }
    //Starting Index :-
    let startIndex = Number(fromIndex) || 0;
    //If startIndex < 0 
    if (startIndex < 0) {
        startIndex = Math.max(0, startIndex + arrayLength);
    }
    //If the startIndex > arrayLength
    if (startIndex > arrayLength) {
        return -1;
    };
    //Loop :-
    for (let i = startIndex; i < arrayLength; i++) {
        //If the index is present 
        if (this[i] === searchElement) {
            return i;
        }
    }
    return -1

}
// ===== Usage examples / tests =====
const arr = [1, 2, 3, 2, 1];
console.log('arr.customIndexOf(3) ->', arr.customIndex(3)); // 2
console.log('arr.customIndexOf(2) ->', arr.customIndex(2)); // 1
console.log('arr.customIndexOf(2, 2) ->', arr.customIndex(2, 2)); // 3
console.log('arr.customIndexOf(4) ->', arr.customIndex(4)); // -1
console.log('arr.customIndexOf(1, -2) ->', arr.customIndex(1, -2)); // 4

// Note: same behavior as native indexOf regarding NaN (NaN is not found);

// Task 2: Implement custom lastIndexOf() method
Array.prototype.customLastIndexOf = function (searchElement, fromIndex = this.length - 1) {
    //Array Length :-
    let arrayLength = this.length;
    let startIndex = fromIndex;
    if (startIndex < 0) {
        startIndex = Math.max(0, arrayLength + startIndex);
    }
    if (startIndex >= arrayLength) {
        startIndex = arrayLength - 1;
    }
    for (let i = startIndex; i >= 0; i--) {
        if (this[i] === searchElement) {
            return i;
        }
    }
    return -1;
}
// ===== Usage examples / tests =====
console.log('arr.customLastIndexOf(2) ->', arr.customLastIndexOf(2)); // 3
console.log('arr.customLastIndexOf(2, 2) ->', arr.customLastIndexOf(2, 2)); // 1

// Task 3: Create custom push() and pop() methods
Array.prototype.customPush = function (...items) {
    let length = this.length;
    for (let i = 0; i < items.length; i++) {
        this[length + i] = items[i];
    }
    return this.length;
}

Array.prototype.customPop = function () {
    let length = this.length;
    if (length === 0) {
        return undefined;
    }
    let lastIndex = length - 1;
    let value = this[lastIndex];
    this.length = lastIndex
    return value;
}

// ===== Usage examples / tests =====
const testArr = [10, 20];
console.log('before push:', testArr.slice()); // [10,20]
console.log('testArr.customPush(30) ->', testArr.customPush(30)); // 3
console.log('after push:', testArr.slice()); // [10,20,30]
console.log('testArr.customPush(40,50) ->', testArr.customPush(40, 50)); // 5
console.log('after push:', testArr.slice()); // [10,20,30,40,50]

console.log('testArr.customPop() ->', testArr.customPop()); // 50
console.log('after pop:', testArr.slice()); // [10,20,30,40]
console.log('pop until empty:');
console.log(testArr.customPop()); // 40
console.log(testArr.customPop()); // 30
console.log(testArr.customPop()); // 20
console.log(testArr.customPop()); // 10
console.log(testArr.customPop()); // undefined
console.log('final array:', testArr.slice()); // []

// Task 4: Implement custom shift() and unshift() methods
Array.prototype.customShift = function () {
    let arrayLength = this.length;
    if (arrayLength === 0) {
        return undefined;
    }
    let firstIndex = this[0];
    for (let i = 1; i < arrayLength; i++) {
        this[i - 1] = this[i];
    }
    this.length = arrayLength - 1;
    return firstIndex;
}

Array.prototype.customUnshift = function(...items){
    let count = items.length;
    if(count === 0 ){
        return this.length;
    }
     let arrayLength = this.length;
     for(let i = arrayLength - 1; i >= 0 ; i--){
        this[i - count] = this[i];
     }
     for (let j= 0; j <count; j++){
        this[j] = items[j];
     }
     return this.length;
};

// ===== Usage examples / tests =====
const shiftTest = [1, 2, 3];
console.log('before shiftTest:', shiftTest.slice()); // [1,2,3]
console.log('shiftTest.customShift() ->', shiftTest.customShift()); // 1
console.log('after shiftTest:', shiftTest.slice()); // [2,3]
console.log('shift until empty:');
console.log(shiftTest.customShift()); // 2
console.log(shiftTest.customShift()); // 3
console.log(shiftTest.customShift()); // undefined
console.log('final shiftTest:', shiftTest.slice()); // []

const unshiftTest = [3, 4];
console.log('before unshiftTest:', unshiftTest.slice()); // [3,4]
console.log('unshiftTest.customUnshift(1,2) ->', unshiftTest.customUnshift(1, 2)); // 4
console.log('after unshiftTest:', unshiftTest.slice()); // [1,2,3,4]
console.log('unshiftTest.customUnshift() ->', unshiftTest.customUnshift()); // 4 (no change)
console.log('final unshiftTest:', unshiftTest.slice()); // [1,2,3,4]

// Task 5: Create custom includes() method:-
Array.prototype.customIncludes = function(searchElement, fromIndex = 0){
    let arrayLength = this.length;
    if(arrayLength === 0){
        return false;
    }
    if(fromIndex < 0){
        fromIndex = Math.max(0 , arrayLength + fromIndex)
    }
    for(let i = 0 ; i < arrayLength ; i++){
        if(this[i] === searchElement){
            return true;
        }
    }
    return false;
}


// ===== Usage examples / tests =====
const includesTest = [1, 2, 3];
console.log('includesTest.customIncludes(2) ->', includesTest.customIncludes(2)); // true
console.log('includesTest.customIncludes(4) ->', includesTest.customIncludes(4)); // false
console.log('includesTest.customIncludes(2, 1) ->', includesTest.customIncludes(2, 1)); // true
console.log('includesTest.customIncludes(1, 1) ->', includesTest.customIncludes(1, 1)); // false