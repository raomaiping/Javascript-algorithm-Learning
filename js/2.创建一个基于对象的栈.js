// #region example
class Stack {
    constructor() {
        this.count = 0;
        this.items = {}
    }
    // 向栈添加一个元素
    push(element) {
        this.items[this.count] = element
        this.count += 1
    }
    // 移除当前栈顶元素,同时返回被移除的元素
    pop() {
        if (this.isEmpty()) return undefined
        this.count -= 1
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    // 查看当前栈顶元素(不做任何修改)
    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.count - 1]
    }
    // 查询栈里是否有元素，如果有返回true否则返回false
    isEmpty() {
        return this.count === 0
    }
    // 清除栈里所有的元素
    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }
    // 返回栈里元素的个数
    size() {
        return this.count
    }
    // 把栈内的数据转换为字符串，以逗号隔开
    toString() {
        if (this.isEmpty()) return ''
        let objString = this.items[0]
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}
// #endregion example

// #region test
// test
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.toString()); // 1,2,3
console.log(stack.peek()); // 3


console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.size()); //2
console.log(stack.isEmpty()); // false
stack.clear()
console.log(stack.peek()); // undefined
console.log(stack.isEmpty()); // true
console.log(stack.toString()); // ''
// #endregion test
