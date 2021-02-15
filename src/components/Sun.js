import { BLEND_MODES, Container, Sprite } from "pixi.js";

export default class Sun extends Container{
    constructor(){
        super();
        this.name = 'sun';

        this._body = null;
        this._blast= null;
        this._glowTop = null;
        this._glowBottom = null;

        this._createBody();
        this._createBlast();
        this._createGlowTop();
        this._createGlowBottom();
    }

    _createBody(){
        this._body = new Sprite.from('sun')
        this._body.anchor.set(0.5);
        this._body.x = 450
        this._body.y = -200
        this.addChild(this._body)
    }

    _createBlast(){
        this._blast = new Sprite.from('sun-blast');
    }

    _createGlowTop(){
        this._glowTop = new Sprite.from('sun-glow')
        this._glowTop.blendMode = BLEND_MODES.SCREEN
        this._glowTop.anchor.set(0.5);
        this._glowTop.x = 450
        this._glowTop.y = -200
        this.addChild(this._glowTop)
    }

    _createGlowBottom(){
        this._glowBottom = new Sprite.from('sun-glow')
        this._glowTop.blendMode = BLEND_MODES.SCREEN
    }
}