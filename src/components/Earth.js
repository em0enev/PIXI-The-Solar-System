import { Container, Sprite } from "pixi.js";
import Rocket from "./Rocket";

export default class Earth extends Container {
    constructor() {
        super();
        this.name = 'earth';
        this._body = null;
        this._rocket = null;

        this._createBody();
        this._createRocket();
        this._rocket.pivot.set(-350, 0);
    }

    _createBody() {
        this._body = new Sprite.from('earth');
        this._body.anchor.set(0.5);
        this.addChild(this._body);
    }

    _createRocket(){
        this._rocket = new Rocket();
        this.addChild(this._rocket);
    }

}