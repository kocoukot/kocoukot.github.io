var selected_sec_name = "current";
var sec_doc = document;
sec_doc.root = document.querySelector(".".concat("steps"));
sec_doc.stepsList = sec_doc.root.querySelectorAll(".".concat("steps__item"));
sec_doc.canvasRoot = sec_doc.root.querySelector(
  ".".concat("steps__canvas-container")
);
sec_doc.currentStep = 0;

export function scroll_listener() {
  changeCurrentStep(calculateCurrentStep());
}

function calculateCurrentStep() {
  var y_coord =
    ((window.scrollY - window.innerHeight / 2) /
      (sec_doc.root.offsetTop + sec_doc.root.clientHeight)) *
    3;
  // console.log("y_coord before" + y_coord);

  y_coord = Math.min(1, y_coord);
  y_coord = Math.max(0, y_coord);
  // console.log("y_coord " + y_coord);
  var section_index = Math.floor(y_coord * sec_doc.stepsList.length - 1);
  section_index = Math.min(sec_doc.stepsList.length - 1, section_index);
  return Math.max(0, section_index);
}

function changeCurrentStep(index) {
  setTimeout(() => {
    sec_doc.stepsList[sec_doc.currentStep].classList.remove(selected_sec_name);
    sec_doc.currentStep = index;
    sec_doc.stepsList[sec_doc.currentStep].classList.add(selected_sec_name);
  }, 0);
}
