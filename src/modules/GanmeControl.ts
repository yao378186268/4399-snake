import Food from "./Food";
import ScorePanel from "./ScorePanle";
import Snake from "./Snake";

class GameControl {
    food: Food
    score: ScorePanel
    snake: Snake

    direction = '' // 用户按下的按键

    isOver = true // 判断游戏是否结束

    constructor() {
        this.food = new Food()
        this.score = new ScorePanel()
        this.snake = new Snake()

        // 初始化 游戏开始
        this.init()
    }

    init() {
        document.addEventListener('keydown', this.keyMethods.bind(this))
        this.run()
    }

    keyMethods(e: KeyboardEvent) {
        this.direction = e.key
    }

    run() {
        let x = this.snake.X
        let y = this.snake.Y

        //  ArrowUp Up
        //  ArrowRight Right
        //  ArrowDown Down
        //  ArrowLeft Left
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                y -= 10
                break
            case 'ArrowRight':
            case 'Right':
                x += 10
                break
            case 'ArrowDown':
            case 'Down':
                y += 10
                break
            case 'ArrowLeft':
            case 'Left':
                x -= 10
                break
        }

        this.isEatFood(x, y)

        try {
            this.snake.X = x
            this.snake.Y = y



        } catch (error) {
            this.isOver = false
            alert(error)
        }

        // this.snake.moveBody()

        this.isOver && setTimeout(this.run.bind(this), 300 - (this.score.level - 1) * 60);
    }


    // 判断是否吃到食物
    isEatFood(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            this.food.change()
            this.score.addScore()
            this.snake.addBody()
        }
    }

}

export default GameControl