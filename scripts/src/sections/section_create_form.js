let creat_btn = document.querySelectorAll(".create__item-btn");


export function init_section() {
  var n = document;

  n.finish = !1;
  n.lastTouch = null;
  n.canBeShowed = true;

  var create_screen = document.querySelector(".".concat("create"));
  if (!create_screen) throw new Error("Cant initialize Create Screen");
  n.root = create_screen;

  var circle_dot = document.querySelector(".".concat("create__circle"));
  if (!circle_dot) throw new Error("Cant initialize Dot");
  n.point = circle_dot;

  var transition = document.querySelector(".".concat("create__transition"));
  if (!transition) throw new Error("Cant initialize transition");
  n.transition = transition;

  var transition_btn = n.transition.querySelector(".create__transition-button");
  if (!transition_btn) throw new Error("Cant initialize transition button");

  creat_btn.forEach((value) => {
    value.addEventListener("click", showForm);
  });
}

export function showForm() {
  document.transitionButton = document.querySelector(
    ".create__transition-button"
  );
  document.body.classList.add("form-visible");
  document.transitionButton.classList.add("full");
  document.transition.classList.add("visible");
}

export function hideForm(){
  document.transitionButton = document.querySelector(
    ".create__transition-button"
  );
  document.body.classList.remove("form-visible");
  document.transitionButton.classList.remove("full");
  document.transition.classList.remove("visible");
}
