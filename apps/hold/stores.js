// Fills every [data-hold-store] link from window.HOLD_LINKS (links.js) and shows it;
// a link without a URL stays hidden, so a removed store never leaves a dead button.
(function () {
  var links = window.HOLD_LINKS || {};
  document.querySelectorAll("[data-hold-store]").forEach(function (el) {
    var url = links[el.getAttribute("data-hold-store")];
    if (url) {
      el.href = url;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });
})();
