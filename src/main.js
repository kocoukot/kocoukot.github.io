import welcome_section from "./section_welcome.js";
import { scroll_listener } from "./section_our_steps.js";
import our_projects_section from "./section_our_projects.js";

import {
  init_section,
  showForm,
  hideForm,
} from "./section_create_form.js";

import {startSwapLines} from "./dot_figure.js";
window.addEventListener("scroll", scroll_listener);

window.onload = () => {
  document.querySelector(".header__right").addEventListener("click", showForm);

  //header logo icon
  document.getElementById("logo__icon").addEventListener("click", function () {
    document.body.classList.contains("form-visible")
      ? hideForm()
      : window.scroll({ top: 0, behavior: "smooth" });
  });

  var Ll = location.hash;
  // console.log(Ll)
  welcome_section();

  document.querySelector(".scroll").addEventListener("click", () => {
    var e;
    null === (e = document.querySelector(".steps")) ||
      void 0 === e ||
      e.scrollIntoView({ behavior: "smooth" });
  });

  startSwapLines()
  our_projects_section();
  init_section();
  
  document.body.classList.add("initialized");
};
