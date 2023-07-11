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
  var phoneInput = document.getElementById('phone-input');
  var phoneMask = new Inputmask('+7 (999) 999-99-99');
  phoneMask.mask(phoneInput);
  
}

export function hideForm() {
  document.body.classList.add("form-hide");
  setTimeout(function () {
    document.body.classList.remove("point-active"),
      document.body.classList.remove("form-visible"),
      document.body.classList.remove("point-active"),
      document.transitionButton.classList.remove("text-visible"),
      document.transition.classList.remove("visible"),
      document.transitionButton.classList.remove("moved"),
      document.transitionButton.classList.remove("full"),
      document.transitionButton.classList.remove("partial-visible"),
      setTimeout(function () {
        document.body.classList.remove("form-hide");
      }, 500);
  }, 1000);
}