class Snake {
    // 蛇容器
    snakeEle: HTMLElement
    // 蛇头
    head: HTMLElement
    // 蛇的身体
    bodies: HTMLCollection

    constructor() {
        this.snakeEle = document.getElementById('snake')!

        this.head = document.querySelector('#snake > div')!

        this.bodies = this.snakeEle?.getElementsByTagName('div')!
    }

    // 获取蛇头位置
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头位置
    set X(value: number) {
        if (this.X === value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了，GAME OVER !!!')
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value -= 20
            } else {
                value += 20
            }
        }

        this.moveBody()

        this.head.style.left = value + 'px'

        this.isEatBody()
    }

    set Y(value: number) {
        if (this.Y === value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了，GAME OVER !!!')
        }

        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value -= 20
            } else {
                value += 20
            }
        }

        this.moveBody()

        this.head.style.top = value + 'px'

        this.isEatBody()
    }

    // 添加身体
    addBody() {
        let div = document.createElement('div')
        this.snakeEle.appendChild(div)
    }

    // 移动身体
    moveBody() {

        for (let i = this.bodies.length - 1; i > 0; i--) {

            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px'
        }
    }

    // 判断是否吃到身体
    isEatBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            if ((this.bodies[i] as HTMLElement).offsetLeft === this.X && (this.bodies[i] as HTMLElement).offsetTop === this.Y) {
                throw new Error('吃到自己了，GAME OVER !!!')
            }
        }
    }

}

export default Snake