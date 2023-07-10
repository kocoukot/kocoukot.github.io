
export const ea = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this;
      (n.canvasContainer = null), (n.currentLine = 0);
  
      var welcome_sec = document.querySelector(".".concat("welcome"));
  
      if (!welcome_sec) throw new Error("Cant initialize Welcome Screen");
      
      (n.root = welcome_sec),
        (n.canvasContainer = n.root.querySelector(
          ".".concat("welcome__canvas-container")
        )),
        n.processCanvas();
      var r = n.root.querySelector(".".concat("js-typing"));
      return (
        r &&
          ((n.typingController = new s(r)),
          n.typingController.forceClear()),
        n.startSwapLines(),
        n
      );
    }
  
  
    return (
      Js(t, e),
      (t.prototype.hide = function () {
        e.prototype.hide.call(this);
      }),
      (t.prototype.show = function () {
        e.prototype.show.call(this);
      }),
      (t.prototype.isCanBeChanged = function (e) {
        return (
          this.currentLine === aims_list.length - 1 &&
          !this.typingController.getIsPrinting()
        );
      }),
      (t.prototype.processCanvas = function () {
        var e = this;
        if (this.canvasContainer) {
          var t = new hs({
            premultipliedAlpha: !1,
            alpha: !0,
            antialias: !0,
          });
          this.canvasContainer.appendChild(t.domElement);
          var n = new ds(),
            i = new wn();
          n.add(i);
          var r = 0,
            s = new fn(
              new ps(1, 50, 50),
              new yn({
                vertexShader:
                  "\n    #include <common>\n    #include <fog_pars_vertex>\n    #include <shadowmap_pars_vertex>\n    \n    varying vec3 vNormal;\n    varying vec3 vPosition;\n    varying vec2 vUv;\n\n    float random (in vec2 st) {\n        return fract(sin(dot(st.xy,\n                             vec2(12.9898,78.233)))\n                     * 43758.5453123);\n    }\n    float noise (in vec2 st) {\n        vec2 i = floor(st);\n        vec2 f = fract(st);\n    \n        float a = random(i);\n        float b = random(i + vec2(1.0, 0.0));\n        float c = random(i + vec2(0.0, 1.0));\n        float d = random(i + vec2(1.0, 1.0));\n    \n        vec2 u = f*f*(3.0-2.0*f);\n    \n        return mix(a, b, u.x) +\n                (c - a)* u.y * (1.0 - u.x) +\n                (d - b) * u.x * u.y;\n    }\n\n    uniform float time;\n\n    void main() {\n        vNormal = normal;\n        vPosition = position;\n        vUv = uv;\n        \n        vec3 pos = position + vNormal * noise(vec2(vPosition.x*2.+time/500., vPosition.y+time/100.));\n               \n        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);\n    }\n\n",
                fragmentShader:
                  "\n    varying vec3 vNormal;\n    varying vec3 vPosition;\n    varying vec2 vUv;\n\n    uniform float time;\n\n    float random (in vec2 st) {\n        return fract(sin(dot(st.xy,\n                             vec2(12.9898,78.233)))\n                     * 43758.5453123);\n    }\n    float noise (in vec2 st) {\n        vec2 i = floor(st);\n        vec2 f = fract(st);\n    \n        float a = random(i);\n        float b = random(i + vec2(1.0, 0.0));\n        float c = random(i + vec2(0.0, 1.0));\n        float d = random(i + vec2(1.0, 1.0));\n    \n        vec2 u = f*f*(3.0-2.0*f);\n    \n        return mix(a, b, u.x) +\n                (c - a)* u.y * (1.0 - u.x) +\n                (d - b) * u.x * u.y;\n    }\n\n    vec3 rgb2hsv(vec3 c)\n    {\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n    \n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n    }\n\n    void main() {\n    \n      float light = dot(\n        vec3(0., 1., 1.),\n        vNormal\n      );\n\n      vec2 tUv = fract(vUv*100.);\n      \n      float point = 1. - distance(vec2(.5), tUv);\n      float part = smoothstep(.8, .85 + .5*vPosition.z/5., point);\n      \n      \n      vec3 baseColor = vPosition - abs(sin(time/200.))/2.;\n      \n      vec3 color = mix(\n        baseColor,\n        baseColor - vec3(-.3, .3, .3),\n        light\n      );\n      \n      gl_FragColor = vec4(color, part);\n    }\n",
                uniforms: { time: { value: r } },
              })
            );
          s.position.set(0, 0, -5), n.add(s);
          var a = function () {
            var n, r;
            (t.domElement.style.display = "none"),
              (t.domElement.width = n = e.canvasContainer.clientWidth),
              (t.domElement.height = r = e.canvasContainer.clientHeight),
              t.setViewport(0, 0, n, r),
              i.updateProjectionMatrix(),
              (t.domElement.style.display = "block");
          };
          a();
          var o = !0;
          new IntersectionObserver(function (e, t) {
            var n;
            o =
              null === (n = e[0]) || void 0 === n
                ? void 0
                : n.isIntersecting;
          }).observe(t.domElement),
            window.addEventListener("resize", function () {
              a();
            }),
            $s.addRenderCallback(function (e) {
              o &&
                (t.clear(),
                r++,
                (s.material.uniforms.time.value = r),
                t.render(n, i));
            });
        }
      }),
      (t.prototype.startSwapLines = function () {
        var e, t, n, i, r;
        return (
          (t = this),
          (n = void 0),
          (r = function () {
            var t,
              n = this;
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
                    if (n)
                      throw new TypeError(
                        "Generator is already executing."
                      );
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & s[0]
                                ? i.return
                                : s[0]
                                ? i.throw ||
                                  ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, s[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (s = [2 & s[0], r.value]), s[0])
                        ) {
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
                                  (r = a.trys).length > 0 &&
                                  r[r.length - 1]) ||
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
            })(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t =
                      this.currentLine + 1 === aims_list.length - 1
                        ? 0
                        : this.currentLine + 1),
                    (this.currentLine = t),
                    [
                      4,
                      null === (e = this.typingController) || void 0 === e
                        ? void 0
                        : e.changeTo(aims_list[t]),
                    ]
                  );
                case 1:
                  return (
                    i.sent(),
                    setTimeout(function () {
                      n.startSwapLines();
                    }, 1500),
                    [2]
                  );
              }
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
  })
  
  