import welcome_section  from "./src/sections/section_welcome.js";
import {scroll_listener}  from "./src/sections/section_our_steps.js";
import our_projects_section  from "./src/sections/section_our_projects.js";
import create_form  from "./src/sections/section_create_form.js";

window.addEventListener('scroll', scroll_listener);

window.onload = () => {


  //header logo icon
  document.getElementById("logo__icon")
  .addEventListener("click", function () {
    window.scroll({ top: 0, behavior: "smooth" });
  });
    
var Ll = location.hash
// console.log(Ll)
welcome_section()

var sections_list = [
  { current: "" === Ll || "#welcome" === Ll, screen: welcome_section },
  // { current: "#steps" === Ll, screen: our_steps_section },
  // { current: "#inwork" === Ll, screen: fo },
  // { current: "#clients" === Ll, screen: go },
  // { current: "#create" === Ll, screen: create_form },
];
  // new e(sections_list)


  document.querySelector(".scroll").addEventListener("click", () => {
    var e;
    null === (e = document.querySelector(".steps")) || void 0 === e || e.scrollIntoView({ behavior: "smooth" });
    // console.log("scroll btn click");
  });

  our_projects_section()

  document.body.classList.add("initialized");


};

