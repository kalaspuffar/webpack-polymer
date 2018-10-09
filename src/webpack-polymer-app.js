import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'wc-input';

/**
 * @customElement
 * @polymer
 */
class WebpackPolymerApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        img {
          width: 100%;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>

      <wc-input label="Enter your name"></wc-input>

      <img src="images/view.jpg" />
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'webpack-polymer-app'
      }
    };
  }
}

window.customElements.define('webpack-polymer-app', WebpackPolymerApp);