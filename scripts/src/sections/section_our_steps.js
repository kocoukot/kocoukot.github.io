
var ta = (function () {
  var e = function (t, n) {
    return (
      (e =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }),
      e(t, n)
    );
  };
  return function (t, n) {
    if ("function" != typeof n && null !== n)
      throw new TypeError(
        "Class extends value " +
          String(n) +
          " is not a constructor or null"
      );
    function i() {
      this.constructor = t;
    }
    e(t, n),
      (t.prototype =
        null === n
          ? Object.create(n)
          : ((i.prototype = n.prototype), new i()));
  };
})

const our_steps_section = function (e) {
  function t(t) {
    var n = e.call(this, t) || this;
    (n.canvasRoot = null), (n.body = null);
    var i = document.querySelector(".".concat("steps"));
    if (!i) throw new Error("Cant initialize Steps Screen");
    (n.root = i),
      (n.stepsList = n.root.querySelectorAll(".".concat("steps__item"))),
      (n.currentStep = Array.from(n.stepsList).findIndex(function (e) {
        return e.classList.contains(na);
      })),
      (n.canvasRoot = n.root.querySelector(
        ".".concat("steps__canvas-container")
      )),
      n.canvasRoot && n.processCanvas(),
      n.changeCurrentStep(n.calculateCurrentStep());
    var r = n.root.querySelector(".".concat("screen__body"));
    if (!r) throw new Error("Cant initialize Body Steps Screen");
    return (
      (n.body = r),
      n.changeCurrentStep(n.calculateCurrentStep()),
      n.addListeners(),
      n
    );
  }
  return (
    ta(t, e),
    (t.prototype.changeCurrentStep = function (e) {
      var t = this;
      setTimeout(function () {
        t.stepsList[t.currentStep].classList.remove(na),
          (t.currentStep = e),
          t.stepsList[t.currentStep].classList.add(na);
      }, 0);
    }),
    (t.prototype.isCanBeChanged = function (e) {
      return !0;
    }),
    (t.prototype.calculateCurrentStep = function () {
      var e =
        ((window.scrollY - window.innerHeight / 2) /
          (this.root.offsetTop + this.root.clientHeight)) *
        2;
      (e = Math.min(1, e)), (e = Math.max(0, e));
      var t = Math.floor(e * this.stepsList.length - 1);
      return (t = Math.min(this.stepsList.length - 1, t)), Math.max(0, t);
    }),
    (t.prototype.addListeners = function () {
      var e = this;
      window.addEventListener("scroll", function () {
        e.changeCurrentStep(e.calculateCurrentStep());
      });
    }),
    (t.prototype.processCanvas = function () {
      var e, t, n, i, r;
      return (
        (t = this),
        (n = void 0),
        (r = function () {
          var t,
            n,
            i,
            r,
            s,
            a,
            o,
            l,
            c,
            u,
            h,
            d = this;
          return (function (e, t) {
            var n,
              i,
              r,
              s,
              a = {
                label: 0,
                sent: function () {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (s = { next: o(0), throw: o(1), return: o(2) }),
              "function" == typeof Symbol &&
                (s[Symbol.iterator] = function () {
                  return this;
                }),
              s
            );
            function o(s) {
              return function (o) {
                return (function (s) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        i &&
                          (r =
                            2 & s[0]
                              ? i.return
                              : s[0]
                              ? i.throw || ((r = i.return) && r.call(i), 0)
                              : i.next) &&
                          !(r = r.call(i, s[1])).done)
                      )
                        return r;
                      switch (((i = 0), r && (s = [2 & s[0], r.value]), s[0])) {
                        case 0:
                        case 1:
                          r = s;
                          break;
                        case 4:
                          return a.label++, { value: s[1], done: !1 };
                        case 5:
                          a.label++, (i = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (r =
                                (r = a.trys).length > 0 && r[r.length - 1]) ||
                              (6 !== s[0] && 2 !== s[0])
                            )
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!r || (s[1] > r[0] && s[1] < r[3]))
                          ) {
                            a.label = s[1];
                            break;
                          }
                          if (6 === s[0] && a.label < r[1]) {
                            (a.label = r[1]), (r = s);
                            break;
                          }
                          if (r && a.label < r[2]) {
                            (a.label = r[2]), a.ops.push(s);
                            break;
                          }
                          r[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      s = t.call(e, a);
                    } catch (e) {
                      (s = [6, e]), (i = 0);
                    } finally {
                      n = r = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, o]);
              };
            }
          })(this, function (p) {
            return (
              (n = new ds()),
              (t = new hs({
                antialias: !0,
                alpha: !0,
                premultipliedAlpha: !1,
              })),
              (i = new wn()),
              (r = new fn(
                new fs(1, 0.4, 250, 250),
                new yn({
                  vertexShader:
                    "\n    varying vec3 vNormal;\n    varying vec3 vPosition;\n    varying vec2 vUv;\n    varying vec3 vDistortion;\n\n    float random (in vec2 st) {\n        return fract(sin(dot(st.xy,\n                             vec2(12.9898,78.233)))\n                     * 43758.5453123);\n    }\n    float noise (in vec2 st) {\n        vec2 i = floor(st);\n        vec2 f = fract(st);\n    \n        float a = random(i);\n        float b = random(i + vec2(1.0, 0.0));\n        float c = random(i + vec2(0.0, 1.0));\n        float d = random(i + vec2(1.0, 1.0));\n    \n        vec2 u = f*f*(3.0-2.0*f);\n    \n        return mix(a, b, u.x) +\n                (c - a)* u.y * (1.0 - u.x) +\n                (d - b) * u.x * u.y;\n    }\n\n    uniform float time;\n    uniform vec2 mouse;\n\n    void main() {\n        vNormal = normal;\n        vUv = uv;\n        \n        vec3 nMouse = vec3(mouse, 0.);\n        vec3 mouseDiff = nMouse - vNormal;\n        float mouseDiffVal = length(mouseDiff);\n        float mouseDistVal = 1. - distance(nMouse, vPosition);\n         \n        vDistortion = vNormal * noise(position.zx * 2. + time/2000.)  * .4;\n        \n        vPosition = position + vDistortion;\n               \n        gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.);\n    }\n\n",
                  fragmentShader:
                    "\n    varying vec3 vNormal;\n    varying vec3 vPosition;\n    varying vec2 vUv;\n    varying vec3 vDistortion;\n\n    uniform float time;\n    uniform vec2 mouse;\n\n    float random (in vec2 st) {\n        return fract(sin(dot(st.xy,\n                             vec2(12.9898,78.233)))\n                     * 43758.5453123);\n    }\n    float noise (in vec2 st) {\n        vec2 i = floor(st);\n        vec2 f = fract(st);\n    \n        float a = random(i);\n        float b = random(i + vec2(1.0, 0.0));\n        float c = random(i + vec2(0.0, 1.0));\n        float d = random(i + vec2(1.0, 1.0));\n    \n        vec2 u = f*f*(3.0-2.0*f);\n    \n        return mix(a, b, u.x) +\n                (c - a)* u.y * (1.0 - u.x) +\n                (d - b) * u.x * u.y;\n    }\n\n    void main() {\n        vec3 color = vec3(1., 0., 0.);\n        \n        vec3 dx = dFdx(vPosition);\n        vec3 dy = dFdy(vPosition);\n        vec3 rNormal = normalize(cross(dx, dy));\n        \n        float[12] lights = float[12](\n            0. + mouse.x, 2., 1.,               1.,\n            20., 10., 20.,                      .3, \n            -20., -10. + mouse.y * 10., 20.,    1.3\n        );\n        \n        float light = 0.;\n        float specular = 0.;\n        \n        for(int i = 0; i < 12; i = i + 4) {\n            vec3 lightPos = vec3(lights[i], lights[i+1], lights[i+2]);\n            vec3 lightSurfDir = lightPos - vPosition;\n            \n            light += dot(normalize(lightSurfDir), rNormal) * lights[i+3];\n            \n            vec3 halfEye = normalize(vPosition + lightSurfDir); \n            specular += pow(max(dot(halfEye, rNormal), 0.), 10.) * lights[i+3];\n        }\n       \n        gl_FragColor = vec4(rNormal * light + specular + 1. - distance(vec3(mouse, vPosition.z), vPosition), 1.);\n    }\n",
                  uniforms: {
                    time: new Us("f", 0),
                    mouse: new Us("f", [0, 0]),
                  },
                })
              )),
              (s = [0, 0]),
              (a = 0.05),
              t.domElement.addEventListener("mousemove", function (e) {
                (s[0] = 2 * (e.offsetX / t.domElement.clientWidth - 0.5)),
                  (s[1] = 2 * -(e.offsetY / t.domElement.clientHeight - 0.5)),
                  (a = 0.3);
              }),
              t.domElement.addEventListener("mouseleave", function (e) {
                (s = [0, 0]), (a = 0.01);
              }),
              (o = [0, 0]),
              r.position.set(0, 0, -5),
              n.add(r),
              (l = new Rs(16777215, 2)).position.set(0, 0, 1),
              n.add(l),
              (c = function () {
                var e = t.domElement;
                e.style.display = "none";
                var n = d.canvasRoot.clientWidth,
                  r = d.canvasRoot.clientHeight;
                (e.width = n),
                  (e.height = r),
                  t.setViewport(0, 0, n, r),
                  i.updateProjectionMatrix(),
                  (e.style.display = "block");
              }),
              null === (e = this.canvasRoot) ||
                void 0 === e ||
                e.appendChild(t.domElement),
              c(),
              window.addEventListener("resize", function () {
                c();
              }),
              (u = !0),
              (h = new IntersectionObserver(function (e, t) {
                var n;
                u =
                  null === (n = e[0]) || void 0 === n
                    ? void 0
                    : n.isIntersecting;
              })),
              h.observe(t.domElement),
              $s.addRenderCallback(function (e) {
                u &&
                  ((o[0] += (s[0] - o[0]) * a),
                  (o[1] += (s[1] - o[1]) * a),
                  (r.material.uniforms.time.value = e),
                  (r.material.uniforms.mouse.value = o),
                  t.render(n, i));
              }),
              [2]
            );
          });
        }),
        new ((i = void 0) || (i = Promise))(function (e, s) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function l(t) {
            var n;
            t.done
              ? e(t.value)
              : ((n = t.value),
                n instanceof i
                  ? n
                  : new i(function (e) {
                      e(n);
                    })).then(a, o);
          }
          l((r = r.apply(t, n || [])).next());
        })
      );
    }),
    t
  );
};


export default our_steps_section