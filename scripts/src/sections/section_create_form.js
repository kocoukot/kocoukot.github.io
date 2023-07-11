const create_form = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    (n.finish = !1), (n.lastTouch = null), (n.canBeShowed = !0);
    var i = document.querySelector(".".concat("create"));
    if (!i) throw new Error("Cant initialize Create Screen");
    n.root = i;
    var r = document.querySelector(".".concat("create__circle"));
    if (!r) throw new Error("Cant initialize Dot");
    n.point = r;
    var s = document.querySelector(".".concat("create__transition"));
    if (!s) throw new Error("Cant initialize transition");
    n.transition = s;
    var a = n.transition.querySelector(".create__transition-button");
    if (!a) throw new Error("Cant initialize transition button");
    return (
      (n.transitionButton = a),
      n.handlePoint(),
      n.handleLastScroll(),
      (n.formController = new xl()),
      n.addListeners(),
      n
    );
  }
  return (
    Tl(t, e),
    (t.prototype.show = function () {
      e.prototype.show.call(this), this.point.classList.add("visible");
    }),
    (t.prototype.hide = function () {
      e.prototype.hide.call(this), this.point.classList.remove("visible");
    }),
    (t.prototype.isCanBeChanged = function (e) {
      return !0;
    }),
    (t.prototype.addListeners = function () {
      var e = this;
      bl.onBtnClick(function () {
        document.body.classList.contains("point-active") || e.showForm();
      }),
        this.root
          .querySelectorAll(".".concat("create__item-btn"))
          .forEach(function (t) {
            return t.addEventListener("click", function (t) {
              t.preventDefault(), e.showForm();
            });
          }),
        bl.onLogoClick(function () {
          e.hideForm();
        });
    }),
    (t.prototype.handlePoint = function () {
      var e = this;
      new IntersectionObserver(
        function (t) {
          t.forEach(function (t) {
            (e.finish = t.isIntersecting),
              e.point.classList.toggle("visible", t.isIntersecting);
          });
        },
        { threshold: 0.8 }
      ).observe(this.root),
        this.transitionButton.addEventListener("click", function () {
          document.body.classList.add("form-visible"),
            e.transitionButton.classList.add("full");
        });
    }),
    (t.prototype.handleLastScroll = function () {
      var e = this;
      window.addEventListener("wheel", function (t) {
        window.scrollY + window.innerHeight >= document.body.scrollHeight &&
          t.deltaY > 0 &&
          e.showForm();
      }),
        window.addEventListener("touchstart", function (t) {
          return (e.lastTouch = t.touches[0].clientY);
        }),
        window.addEventListener("touchmove", function (t) {
          var n = e.lastTouch - t.touches[0].clientY;
          window.scrollY + window.innerHeight >= document.body.scrollHeight &&
            n > 0 &&
            e.showForm();
        });
    }),
    (t.prototype.showForm = function () {
      var e = this;
      if (this.canBeShowed) {
        bl.forceSmall();
        var t = window.innerWidth > 940 ? 2e3 : 0;
        this.point.classList.add("visible"),
          document.body.classList.add("point-active"),
          this.point.classList.add("moved"),
          setTimeout(
            function () {
              e.transitionButton.classList.add("partial-visible"),
                setTimeout(function () {
                  e.transitionButton.classList.add("moved");
                }, 1e3);
            },
            t ? 1500 : 0
          ),
          setTimeout(function () {
            e.point.classList.add("full"),
              e.transition.classList.add("visible");
          }, t),
          setTimeout(function () {
            e.transitionButton.classList.add("text-visible");
          }, t + 500);
      }
    }),
    (t.prototype.hideForm = function () {
      var e = this;
      (this.canBeShowed = !1),
        document.body.classList.add("form-hide"),
        setTimeout(function () {
          document.body.classList.remove("point-active"),
            document.body.classList.remove("form-visible"),
            document.body.classList.remove("point-active"),
            e.point.classList.remove("visible"),
            e.point.classList.remove("moved"),
            e.transitionButton.classList.remove("text-visible"),
            e.point.classList.remove("full"),
            e.transition.classList.remove("visible"),
            e.transitionButton.classList.remove("moved"),
            e.transitionButton.classList.remove("full"),
            e.transitionButton.classList.remove("partial-visible"),
            setTimeout(function () {
              document.body.classList.remove("form-hide"), (e.canBeShowed = !0);
            }, 500);
        }, 1e3);
    }),
    t
  );
};

export default create_form;
