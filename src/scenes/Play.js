import Scene from './Scene';

import Footer from '../components/Footer';
import Earth from '../components/Earth';
import gsap from 'gsap/gsap-core';
import Sun from '../components/Sun';
import Stars from '../components/Stars';

export default class Play extends Scene {
  async onCreated() {

    const footer = new Footer();
    footer.x = - window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);

    const stars = new Stars();
    const sun = new Sun();
    const earth = new Earth();
    earth.x = -400
    earth.y = 100

    gsap.to(earth._rocket, { rotation: -360, ease: 'linear.out', duration: 300, repeat: -1 })
    gsap.fromTo(sun._glowTop, { alpha: 0.2}, {alpha: 1, duration: 5, repeat: -1, yoyo: true})

    this.addChild(stars)
    this.addChild(earth);
    this.addChild(sun)
    this.filters = [sun._blast]
    window.__PIXI_APP.viewport.filters = [sun._blast]
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
