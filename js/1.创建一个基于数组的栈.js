// #region example
// 创建一个基于数组的栈
class Stack {
    constructor() {
        this.items = []
    }
    // 向栈添加一个或多个元素
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
// #endregion example


// #region test
// test 
const stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.peek()); // 2


console.log(stack.pop()); // 2
console.log(stack.peek()); // 1
console.log(stack.size()); // 1
console.log(stack.isEmpty()); // false
stack.clear()
console.log(stack.peek()); // undefined
console.log(stack.isEmpty()); // true
// #endregion test