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
function parenthesesChecker(symbols) {
    if (symbols.length === 0) return false; // 如果字符串长度为0,则返回false
    const stack = new Stack();
    const opens = '([{';
    const closers = ')]}';
    let balanced = true;
    let index = 0;
    let symbol;
    let top;

    while (index < symbols.length && balanced) {
        symbol = symbols[index];
        if (opens.indexOf(symbol) >= 0) { // 如果找到左括号
            stack.push(symbol); // 入栈
        } else if (stack.isEmpty()) { // 如果是空栈，说明没有左括号，返回false
            balanced = false;
        } else {
            top = stack.pop(); // 出栈一个左括号
            if (!(opens.indexOf(top) === closers.indexOf(symbol))) { // 左右括号位置是否相等，不等说明不是有效的括号
                balanced = false;
            }
        }
        index++;
    }
    return balanced && stack.isEmpty();
}
// #endregion example

// #region test
console.log(parenthesesChecker('')); // false
console.log('{([])}', parenthesesChecker('{([])}')); // true
console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}')); // true
console.log('[{()]', parenthesesChecker('[{()]')); // false
// #endregion test