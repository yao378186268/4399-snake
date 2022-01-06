
// 定义一个食物类
class Food {
    // 元素
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('food')!
    }

    // 获取食物元素的x坐标
    get X() {
        return this.element.offsetLeft
    }

    // 获取食物元素的y坐标
    get Y() {
        return this.element.offsetTop
    }

    // 改变食物的位置
    change() {
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10

        this.element.style.top = top + 'px'
        this.element.style.left = left + 'px'
    }
}

// let food = new Food()
// food.change()
// console.log(food.X);

export default Food