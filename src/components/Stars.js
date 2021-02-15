import { Container, Sprite } from "pixi.js";

export default class Stars extends Container {
    constructor() {
        super();
        this.name = 'stars';
        this.createStars();
    }

    createStars(){
        for (let i = 0; i < 15; i++) {
            const star = new Sprite.from('star')
            star.x = this.getRandomNumber(-750,750)
            star.y = this.getRandomNumber(-350, 350)
            this.addChild(star)
        }
    }

     getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
      
}