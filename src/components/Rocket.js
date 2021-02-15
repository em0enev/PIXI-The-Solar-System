import { Container, Sprite } from "pixi.js";
import Fire from "./Fire";

export default class Rocket extends Container {
  constructor() {
    super()
    this.name = 'rocket'
    this._body = null;
    this._fire = null;

    this._createBody(this.name)
    this._createFire();
  }

  /**
  * @private
  * @param {String} textureName
  */
  _createBody(textureName) {
    this._body = new Sprite.from(textureName);
    this._body.anchor.set(0.5);
    this.addChild(this._body);
  }

  _createFire() {
    this._fire = new Fire();
    this._fire.ignite();
    this._fire.y = 150
    this._fire.scale.x = 0.5
    this._fire.scale.y = 0.5
    this._fire.angle = -90
    this.addChildAt(this._fire, 0)
  }
}