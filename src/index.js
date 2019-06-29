import React, { Component } from "react";
import { render } from "react-dom";
import Glide, {
  Controls,
  Breakpoints,
  Swipe
} from "@glidejs/glide/dist/glide.modular.esm";
import "./index.scss";

// Required Core Stylesheet
//require("../node_modules/@glidejs/glide/src/assets/sass/glide.core");

// Optional Theme Stylesheet
//require("../node_modules/@glidejs/glide/src/assets/sass/glide.theme");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "React/Parcel Starter"
    };
  }

  componentDidMount() {
    new Glide(".glide").mount({ Controls, Breakpoints, Swipe });
  }
  render() {
    return (
      <div>
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide">0</li>
              <li class="glide__slide">1</li>
              <li class="glide__slide">2</li>
            </ul>
          </div>

          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              prev
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
