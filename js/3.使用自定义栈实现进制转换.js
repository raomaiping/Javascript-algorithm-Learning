// 创建一个基于数组的栈
class Stack {
    constructor() {
        this.items = []
    }
    // 向栈添加一个元素
    push(element) {
        this.items.push(element)
    }
    // 移除当前栈顶元素,同时返回被移除的元素
    pop() {
        return this.items.pop()
    }
    // 查看当前栈顶元素(不做任何修改)
    peek() {
        return this.items[this.items.length - 1]
    }
    // 查询栈里是否有元素，如果有返回true否则返回false
    isEmpty() {
        return this.items.length === 0
    }
    // 清除栈里所有的元素
    clear() {
        this.items = []
    }
    // 返回栈里元素的个数
    size() {
        return this.items.length
    }
}
// #region example
// 十进制转二进制
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
// #endregion example

// #region example1
// 任意进制转换
function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        const s = remStack.pop()
        baseString += digits[s];
    }
    return baseString;
}
// #endregion example1

// #region test
console.log(decimalToBinary(233)); // 11101001 
console.log(decimalToBinary(10)); // 1010 
console.log(decimalToBinary(1000)); // 1111101000
// #endregion test

// #region test1
console.log(baseConverter(100345, 2)); // 11000011111111001 
console.log(baseConverter(100345, 8)); // 303771 
console.log(baseConverter(100345, 16)); // 187F9 
console.log(baseConverter(100345, 35)); // 2BW0
// #endregion test1