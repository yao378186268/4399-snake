
class ScorePanel {
    score = 0;
    level = 1;

    maxLevel: number // 最高级
    maxScore: number // 最高分升级

    scoreEle: HTMLElement
    levelEle: HTMLElement

    constructor(maxLevel: number = 10, maxScore: number = 2) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!

        this.maxLevel = maxLevel
        this.maxScore = maxScore
    }

    // 加分
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.maxScore === 0) {
            this.addLevel()
        }
    }

    // 升级
    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}


// const score = new ScorePanel(100, 2)
// for (let i = 0; i < 100; i++) {
//     score.addScore()
// }

export default ScorePanel