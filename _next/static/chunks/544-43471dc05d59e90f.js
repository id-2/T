(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [544],
  {
    6200: function (t, r, e) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (n =
              Object.assign ||
              function (t) {
                for (var r, e = 1, n = arguments.length; e < n; e++)
                  for (var o in (r = arguments[e]))
                    Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
                return t;
              }).apply(this, arguments);
          },
        o =
          (this && this.__awaiter) ||
          function (t, r, e, n) {
            return new (e || (e = Promise))(function (o, i) {
              function a(t) {
                try {
                  s(n.next(t));
                } catch (t) {
                  i(t);
                }
              }
              function u(t) {
                try {
                  s(n.throw(t));
                } catch (t) {
                  i(t);
                }
              }
              function s(t) {
                var r;
                t.done
                  ? o(t.value)
                  : ((r = t.value) instanceof e
                      ? r
                      : new e(function (t) {
                          t(r);
                        })
                    ).then(a, u);
              }
              s((n = n.apply(t, r || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (t, r) {
            var e,
              n,
              o,
              i,
              a = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (i = { next: u(0), throw: u(1), return: u(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function () {
                  return this;
                }),
              i
            );
            function u(i) {
              return function (u) {
                return (function (i) {
                  if (e) throw TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((e = 1),
                        n &&
                          (o =
                            2 & i[0]
                              ? n.return
                              : i[0]
                              ? n.throw || ((o = n.return) && o.call(n), 0)
                              : n.next) &&
                          !(o = o.call(n, i[1])).done)
                      )
                        return o;
                      switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (n = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = r.call(t, a);
                    } catch (t) {
                      (i = [6, t]), (n = 0);
                    } finally {
                      e = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, u]);
              };
            }
          },
        a =
          (this && this.__rest) ||
          function (t, r) {
            var e = {};
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) &&
                0 > r.indexOf(n) &&
                (e[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, n = Object.getOwnPropertySymbols(t);
                o < n.length;
                o++
              )
                0 > r.indexOf(n[o]) &&
                  Object.prototype.propertyIsEnumerable.call(t, n[o]) &&
                  (e[n[o]] = t[n[o]]);
            return e;
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.withSuperJSONPage =
          r.deserializeProps =
          r.withSuperJSONProps =
            void 0);
      var u = e(8679),
        s = e(67294),
        c = e(58118);
      function f(t) {
        var r = t._superjson,
          e = a(t, ["_superjson"]);
        return c.default.deserialize({ json: e, meta: r });
      }
      (r.withSuperJSONProps = function (t, r) {
        return (
          void 0 === r && (r = []),
          function () {
            for (var e = [], a = 0; a < arguments.length; a++)
              e[a] = arguments[a];
            return o(this, void 0, void 0, function () {
              var o, a, u, s, f, l;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, t.apply(void 0, e)];
                  case 1:
                    if (!("props" in (o = i.sent())) || !o.props) return [2, o];
                    return (
                      (a = r.map(function (t) {
                        var r = o.props[t];
                        return delete o.props[t], r;
                      })),
                      (s = (u = c.default.serialize(o.props)).json),
                      (f = u.meta),
                      (l = s),
                      f && (l._superjson = f),
                      r.forEach(function (t, r) {
                        var e = a[r];
                        void 0 !== e && (l[t] = e);
                      }),
                      [2, n(n({}, o), { props: l })]
                    );
                }
              });
            });
          }
        );
      }),
        (r.deserializeProps = f),
        (r.withSuperJSONPage = function (t) {
          function r(r) {
            return s.createElement(t, n({}, f(r)));
          }
          return u(r, t), r;
        });
    },
    23544: function (t, r, e) {
      t.exports = e(6200);
    },
    8679: function (t, r, e) {
      "use strict";
      var n = e(59864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {};
      function s(t) {
        return n.isMemo(t) ? a : u[t.$$typeof] || o;
      }
      (u[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (u[n.Memo] = a);
      var c = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        d = Object.prototype;
      t.exports = function t(r, e, n) {
        if ("string" != typeof e) {
          if (d) {
            var o = y(e);
            o && o !== d && t(r, o, n);
          }
          var a = f(e);
          l && (a = a.concat(l(e)));
          for (var u = s(r), m = s(e), v = 0; v < a.length; ++v) {
            var h = a[v];
            if (!i[h] && !(n && n[h]) && !(m && m[h]) && !(u && u[h])) {
              var g = p(e, h);
              try {
                c(r, h, g);
              } catch (t) {}
            }
          }
        }
        return r;
      };
    },
    69921: function (t, r) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var e = "function" == typeof Symbol && Symbol.for,
        n = e ? Symbol.for("react.element") : 60103,
        o = e ? Symbol.for("react.portal") : 60106,
        i = e ? Symbol.for("react.fragment") : 60107,
        a = e ? Symbol.for("react.strict_mode") : 60108,
        u = e ? Symbol.for("react.profiler") : 60114,
        s = e ? Symbol.for("react.provider") : 60109,
        c = e ? Symbol.for("react.context") : 60110,
        f = e ? Symbol.for("react.async_mode") : 60111,
        l = e ? Symbol.for("react.concurrent_mode") : 60111,
        p = e ? Symbol.for("react.forward_ref") : 60112,
        y = e ? Symbol.for("react.suspense") : 60113,
        d = e ? Symbol.for("react.suspense_list") : 60120,
        m = e ? Symbol.for("react.memo") : 60115,
        v = e ? Symbol.for("react.lazy") : 60116,
        h = e ? Symbol.for("react.block") : 60121,
        g = e ? Symbol.for("react.fundamental") : 60117,
        b = e ? Symbol.for("react.responder") : 60118,
        w = e ? Symbol.for("react.scope") : 60119;
      function O(t) {
        if ("object" == typeof t && null !== t) {
          var r = t.$$typeof;
          switch (r) {
            case n:
              switch ((t = t.type)) {
                case f:
                case l:
                case i:
                case u:
                case a:
                case y:
                  return t;
                default:
                  switch ((t = t && t.$$typeof)) {
                    case c:
                    case p:
                    case v:
                    case m:
                    case s:
                      return t;
                    default:
                      return r;
                  }
              }
            case o:
              return r;
          }
        }
      }
      function S(t) {
        return O(t) === l;
      }
      (r.AsyncMode = f),
        (r.ConcurrentMode = l),
        (r.ContextConsumer = c),
        (r.ContextProvider = s),
        (r.Element = n),
        (r.ForwardRef = p),
        (r.Fragment = i),
        (r.Lazy = v),
        (r.Memo = m),
        (r.Portal = o),
        (r.Profiler = u),
        (r.StrictMode = a),
        (r.Suspense = y),
        (r.isAsyncMode = function (t) {
          return S(t) || O(t) === f;
        }),
        (r.isConcurrentMode = S),
        (r.isContextConsumer = function (t) {
          return O(t) === c;
        }),
        (r.isContextProvider = function (t) {
          return O(t) === s;
        }),
        (r.isElement = function (t) {
          return "object" == typeof t && null !== t && t.$$typeof === n;
        }),
        (r.isForwardRef = function (t) {
          return O(t) === p;
        }),
        (r.isFragment = function (t) {
          return O(t) === i;
        }),
        (r.isLazy = function (t) {
          return O(t) === v;
        }),
        (r.isMemo = function (t) {
          return O(t) === m;
        }),
        (r.isPortal = function (t) {
          return O(t) === o;
        }),
        (r.isProfiler = function (t) {
          return O(t) === u;
        }),
        (r.isStrictMode = function (t) {
          return O(t) === a;
        }),
        (r.isSuspense = function (t) {
          return O(t) === y;
        }),
        (r.isValidElementType = function (t) {
          return (
            "string" == typeof t ||
            "function" == typeof t ||
            t === i ||
            t === l ||
            t === u ||
            t === a ||
            t === y ||
            t === d ||
            ("object" == typeof t &&
              null !== t &&
              (t.$$typeof === v ||
                t.$$typeof === m ||
                t.$$typeof === s ||
                t.$$typeof === c ||
                t.$$typeof === p ||
                t.$$typeof === g ||
                t.$$typeof === b ||
                t.$$typeof === w ||
                t.$$typeof === h))
          );
        }),
        (r.typeOf = O);
    },
    59864: function (t, r, e) {
      "use strict";
      t.exports = e(69921);
    },
    58118: function (t, r, e) {
      "use strict";
      e.r(r),
        e.d(r, {
          allowErrorProps: function () {
            return ts;
          },
          default: function () {
            return tt;
          },
          deserialize: function () {
            return te;
          },
          parse: function () {
            return to;
          },
          registerClass: function () {
            return ti;
          },
          registerCustom: function () {
            return ta;
          },
          registerSymbol: function () {
            return tu;
          },
          serialize: function () {
            return tr;
          },
          stringify: function () {
            return tn;
          },
        });
      var n,
        o = (function () {
          function t() {
            (this.keyToValue = new Map()), (this.valueToKey = new Map());
          }
          return (
            (t.prototype.set = function (t, r) {
              this.keyToValue.set(t, r), this.valueToKey.set(r, t);
            }),
            (t.prototype.getByKey = function (t) {
              return this.keyToValue.get(t);
            }),
            (t.prototype.getByValue = function (t) {
              return this.valueToKey.get(t);
            }),
            (t.prototype.clear = function () {
              this.keyToValue.clear(), this.valueToKey.clear();
            }),
            t
          );
        })(),
        i = (function () {
          function t(t) {
            (this.generateIdentifier = t), (this.kv = new o());
          }
          return (
            (t.prototype.register = function (t, r) {
              this.kv.getByValue(t) ||
                (r || (r = this.generateIdentifier(t)), this.kv.set(r, t));
            }),
            (t.prototype.clear = function () {
              this.kv.clear();
            }),
            (t.prototype.getIdentifier = function (t) {
              return this.kv.getByValue(t);
            }),
            (t.prototype.getValue = function (t) {
              return this.kv.getByKey(t);
            }),
            t
          );
        })(),
        a =
          ((n = function (t, r) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, r) {
                  t.__proto__ = r;
                }) ||
              function (t, r) {
                for (var e in r)
                  Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
              })(t, r);
          }),
          function (t, r) {
            if ("function" != typeof r && null !== r)
              throw TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function e() {
              this.constructor = t;
            }
            n(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((e.prototype = r.prototype), new e()));
          }),
        u = (function (t) {
          function r() {
            var r =
              t.call(this, function (t) {
                return t.name;
              }) || this;
            return (r.classToAllowedProps = new Map()), r;
          }
          return (
            a(r, t),
            (r.prototype.register = function (r, e) {
              "object" == typeof e
                ? (e.allowProps &&
                    this.classToAllowedProps.set(r, e.allowProps),
                  t.prototype.register.call(this, r, e.identifier))
                : t.prototype.register.call(this, r, e);
            }),
            (r.prototype.getAllowedProps = function (t) {
              return this.classToAllowedProps.get(t);
            }),
            r
          );
        })(i),
        s = function (t, r) {
          var e = "function" == typeof Symbol && t[Symbol.iterator];
          if (!e) return t;
          var n,
            o,
            i = e.call(t),
            a = [];
          try {
            for (; (void 0 === r || r-- > 0) && !(n = i.next()).done; )
              a.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (e = i.return) && e.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        };
      function c(t, r) {
        Object.entries(t).forEach(function (t) {
          var e = s(t, 2),
            n = e[0];
          return r(e[1], n);
        });
      }
      function f(t, r) {
        return -1 !== t.indexOf(r);
      }
      function l(t, r) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e];
          if (r(n)) return n;
        }
      }
      var p = (function () {
          function t() {
            this.transfomers = {};
          }
          return (
            (t.prototype.register = function (t) {
              this.transfomers[t.name] = t;
            }),
            (t.prototype.findApplicable = function (t) {
              return (function (t, r) {
                var e = (function (t) {
                  if ("values" in Object) return Object.values(t);
                  var r = [];
                  for (var e in t) t.hasOwnProperty(e) && r.push(t[e]);
                  return r;
                })(t);
                if ("find" in e) return e.find(r);
                for (var n = 0; n < e.length; n++) {
                  var o = e[n];
                  if (r(o)) return o;
                }
              })(this.transfomers, function (r) {
                return r.isApplicable(t);
              });
            }),
            (t.prototype.findByName = function (t) {
              return this.transfomers[t];
            }),
            t
          );
        })(),
        y = function (t) {
          return void 0 === t;
        },
        d = function (t) {
          return (
            "object" == typeof t &&
            null !== t &&
            t !== Object.prototype &&
            (null === Object.getPrototypeOf(t) ||
              (t.constructor === Object &&
                Object.getPrototypeOf(t) === Object.prototype))
          );
        },
        m = function (t) {
          return d(t) && 0 === Object.keys(t).length;
        },
        v = function (t) {
          return Array.isArray(t);
        },
        h = function (t) {
          return t instanceof Map;
        },
        g = function (t) {
          return t instanceof Set;
        },
        b = function (t) {
          return "Symbol" === Object.prototype.toString.call(t).slice(8, -1);
        },
        w = function (t) {
          return "number" == typeof t && isNaN(t);
        },
        O = function (t) {
          return (
            "boolean" == typeof t ||
            null === t ||
            y(t) ||
            ("number" == typeof t && !isNaN(t)) ||
            "string" == typeof t ||
            b(t)
          );
        },
        S = function (t) {
          return t.replace(/\./g, "\\.");
        },
        P = function (t) {
          return t.map(String).map(S).join(".");
        },
        j = function (t) {
          for (var r = [], e = "", n = 0; n < t.length; n++) {
            var o = t.charAt(n);
            if ("\\" === o && "." === t.charAt(n + 1)) {
              (e += "."), n++;
              continue;
            }
            if ("." === o) {
              r.push(e), (e = "");
              continue;
            }
            e += o;
          }
          var i = e;
          return r.push(i), r;
        },
        E = function () {
          return (E =
            Object.assign ||
            function (t) {
              for (var r, e = 1, n = arguments.length; e < n; e++)
                for (var o in (r = arguments[e]))
                  Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
              return t;
            }).apply(this, arguments);
        },
        k = function (t, r) {
          var e = "function" == typeof Symbol && t[Symbol.iterator];
          if (!e) return t;
          var n,
            o,
            i = e.call(t),
            a = [];
          try {
            for (; (void 0 === r || r-- > 0) && !(n = i.next()).done; )
              a.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (e = i.return) && e.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        _ = function (t, r) {
          for (var e = 0, n = r.length, o = t.length; e < n; e++, o++)
            t[o] = r[e];
          return t;
        };
      function I(t, r, e, n) {
        return { isApplicable: t, annotation: r, transform: e, untransform: n };
      }
      var x = [
        I(
          y,
          "undefined",
          function () {
            return null;
          },
          function () {}
        ),
        I(
          function (t) {
            return "bigint" == typeof t;
          },
          "bigint",
          function (t) {
            return t.toString();
          },
          function (t) {
            return "undefined" != typeof BigInt
              ? BigInt(t)
              : (console.error("Please add a BigInt polyfill."), t);
          }
        ),
        I(
          function (t) {
            return t instanceof Date && !isNaN(t.valueOf());
          },
          "Date",
          function (t) {
            return t.toISOString();
          },
          function (t) {
            return new Date(t);
          }
        ),
        I(
          function (t) {
            return t instanceof Error;
          },
          "Error",
          function (t, r) {
            var e = { name: t.name, message: t.message };
            return (
              r.allowedErrorProps.forEach(function (r) {
                e[r] = t[r];
              }),
              e
            );
          },
          function (t, r) {
            var e = Error(t.message);
            return (
              (e.name = t.name),
              (e.stack = t.stack),
              r.allowedErrorProps.forEach(function (r) {
                e[r] = t[r];
              }),
              e
            );
          }
        ),
        I(
          function (t) {
            return t instanceof RegExp;
          },
          "regexp",
          function (t) {
            return "" + t;
          },
          function (t) {
            return RegExp(
              t.slice(1, t.lastIndexOf("/")),
              t.slice(t.lastIndexOf("/") + 1)
            );
          }
        ),
        I(
          g,
          "set",
          function (t) {
            return _([], k(t.values()));
          },
          function (t) {
            return new Set(t);
          }
        ),
        I(
          h,
          "map",
          function (t) {
            return _([], k(t.entries()));
          },
          function (t) {
            return new Map(t);
          }
        ),
        I(
          function (t) {
            var r;
            return w(t) || (r = t) === 1 / 0 || r === -1 / 0;
          },
          "number",
          function (t) {
            return w(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity";
          },
          Number
        ),
        I(
          function (t) {
            return 0 === t && 1 / t == -1 / 0;
          },
          "number",
          function () {
            return "-0";
          },
          Number
        ),
        I(
          function (t) {
            return t instanceof URL;
          },
          "URL",
          function (t) {
            return t.toString();
          },
          function (t) {
            return new URL(t);
          }
        ),
      ];
      function A(t, r, e, n) {
        return { isApplicable: t, annotation: r, transform: e, untransform: n };
      }
      var T = A(
          function (t, r) {
            return !!b(t) && !!r.symbolRegistry.getIdentifier(t);
          },
          function (t, r) {
            return ["symbol", r.symbolRegistry.getIdentifier(t)];
          },
          function (t) {
            return t.description;
          },
          function (t, r, e) {
            var n = e.symbolRegistry.getValue(r[1]);
            if (!n) throw Error("Trying to deserialize unknown symbol");
            return n;
          }
        ),
        $ = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce(function (t, r) {
          return (t[r.name] = r), t;
        }, {}),
        z = A(
          function (t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView);
          },
          function (t) {
            return ["typed-array", t.constructor.name];
          },
          function (t) {
            return _([], k(t));
          },
          function (t, r) {
            var e = $[r[1]];
            if (!e) throw Error("Trying to deserialize unknown typed array");
            return new e(t);
          }
        );
      function N(t, r) {
        return (
          null != t &&
          !!t.constructor &&
          !!r.classRegistry.getIdentifier(t.constructor)
        );
      }
      var R = A(
          N,
          function (t, r) {
            return ["class", r.classRegistry.getIdentifier(t.constructor)];
          },
          function (t, r) {
            var e = r.classRegistry.getAllowedProps(t.constructor);
            if (!e) return E({}, t);
            var n = {};
            return (
              e.forEach(function (r) {
                n[r] = t[r];
              }),
              n
            );
          },
          function (t, r, e) {
            var n = e.classRegistry.getValue(r[1]);
            if (!n)
              throw Error(
                "Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"
              );
            return Object.assign(Object.create(n.prototype), t);
          }
        ),
        C = A(
          function (t, r) {
            return !!r.customTransformerRegistry.findApplicable(t);
          },
          function (t, r) {
            return [
              "custom",
              r.customTransformerRegistry.findApplicable(t).name,
            ];
          },
          function (t, r) {
            return r.customTransformerRegistry.findApplicable(t).serialize(t);
          },
          function (t, r, e) {
            var n = e.customTransformerRegistry.findByName(r[1]);
            if (!n) throw Error("Trying to deserialize unknown custom value");
            return n.deserialize(t);
          }
        ),
        V = [R, T, C, z],
        M = function (t, r) {
          var e = l(V, function (e) {
            return e.isApplicable(t, r);
          });
          if (e) return { value: e.transform(t, r), type: e.annotation(t, r) };
          var n = l(x, function (e) {
            return e.isApplicable(t, r);
          });
          if (n) return { value: n.transform(t, r), type: n.annotation };
        },
        B = {};
      x.forEach(function (t) {
        B[t.annotation] = t;
      });
      var F = function (t, r, e) {
          if (v(r))
            switch (r[0]) {
              case "symbol":
                return T.untransform(t, r, e);
              case "class":
                return R.untransform(t, r, e);
              case "custom":
                return C.untransform(t, r, e);
              case "typed-array":
                return z.untransform(t, r, e);
              default:
                throw Error("Unknown transformation: " + r);
            }
          else {
            var n = B[r];
            if (!n) throw Error("Unknown transformation: " + r);
            return n.untransform(t, e);
          }
        },
        U = function (t, r) {
          for (var e = t.keys(); r > 0; ) e.next(), r--;
          return e.next().value;
        };
      function D(t) {
        if (f(t, "__proto__"))
          throw Error("__proto__ is not allowed as a property");
        if (f(t, "prototype"))
          throw Error("prototype is not allowed as a property");
        if (f(t, "constructor"))
          throw Error("constructor is not allowed as a property");
      }
      var J = function (t, r) {
          D(r);
          for (var e = 0; e < r.length; e++) {
            var n = r[e];
            if (g(t)) t = U(t, +n);
            else if (h(t)) {
              var o = +n,
                i = 0 == +r[++e] ? "key" : "value",
                a = U(t, o);
              switch (i) {
                case "key":
                  t = a;
                  break;
                case "value":
                  t = t.get(a);
              }
            } else t = t[n];
          }
          return t;
        },
        K = function (t, r, e) {
          if ((D(r), 0 === r.length)) return e(t);
          for (var n = t, o = 0; o < r.length - 1; o++) {
            var i = r[o];
            if (v(n)) n = n[+i];
            else if (d(n)) n = n[i];
            else if (g(n)) {
              var a = +i;
              n = U(n, a);
            } else if (h(n)) {
              if (o === r.length - 2) break;
              var a = +i,
                u = 0 == +r[++o] ? "key" : "value",
                s = U(n, a);
              switch (u) {
                case "key":
                  n = s;
                  break;
                case "value":
                  n = n.get(s);
              }
            }
          }
          var c = r[r.length - 1];
          if (((v(n) || d(n)) && (n[c] = e(n[c])), g(n))) {
            var f = U(n, +c),
              l = e(f);
            f !== l && (n.delete(f), n.add(l));
          }
          if (h(n)) {
            var a = +r[r.length - 2],
              p = U(n, a),
              u = 0 == +c ? "key" : "value";
            switch (u) {
              case "key":
                var y = e(p);
                n.set(y, n.get(p)), y !== p && n.delete(p);
                break;
              case "value":
                n.set(p, e(n.get(p)));
            }
          }
          return t;
        },
        L = function (t, r) {
          var e = "function" == typeof Symbol && t[Symbol.iterator];
          if (!e) return t;
          var n,
            o,
            i = e.call(t),
            a = [];
          try {
            for (; (void 0 === r || r-- > 0) && !(n = i.next()).done; )
              a.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (e = i.return) && e.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        q = function (t, r) {
          for (var e = 0, n = r.length, o = t.length; e < n; e++, o++)
            t[o] = r[e];
          return t;
        },
        G = function (t, r, e, n, o) {
          if (
            (void 0 === n && (n = []),
            void 0 === o && (o = []),
            O(t) || ((i = n), (a = r.get(t)) ? a.push(i) : r.set(t, [i])),
            !(d(t) || v(t) || h(t) || g(t) || N(t, e)))
          ) {
            var i,
              a,
              u,
              s = M(t, e);
            return s
              ? { transformedValue: s.value, annotations: [s.type] }
              : { transformedValue: t };
          }
          if (f(o, t)) return { transformedValue: null };
          var l = M(t, e),
            p =
              null !== (u = null == l ? void 0 : l.value) && void 0 !== u
                ? u
                : t;
          O(t) || (o = q(q([], L(o)), [t]));
          var y = v(p) ? [] : {},
            b = {};
          return (c(p, function (t, i) {
            var a = G(t, r, e, q(q([], L(n)), [i]), o);
            (y[i] = a.transformedValue),
              v(a.annotations)
                ? (b[i] = a.annotations)
                : d(a.annotations) &&
                  c(a.annotations, function (t, r) {
                    b[S(i) + "." + r] = t;
                  });
          }),
          m(b))
            ? { transformedValue: y, annotations: l ? [l.type] : void 0 }
            : { transformedValue: y, annotations: l ? [l.type, b] : b };
        };
      function H(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      function Q(t) {
        return "Array" === H(t);
      }
      var W = function () {
          return (W =
            Object.assign ||
            function (t) {
              for (var r, e = 1, n = arguments.length; e < n; e++)
                for (var o in (r = arguments[e]))
                  Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
              return t;
            }).apply(this, arguments);
        },
        X = function (t, r) {
          var e = "function" == typeof Symbol && t[Symbol.iterator];
          if (!e) return t;
          var n,
            o,
            i = e.call(t),
            a = [];
          try {
            for (; (void 0 === r || r-- > 0) && !(n = i.next()).done; )
              a.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (e = i.return) && e.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        Y = function (t, r) {
          for (var e = 0, n = r.length, o = t.length; e < n; e++, o++)
            t[o] = r[e];
          return t;
        },
        Z = (function () {
          function t() {
            (this.classRegistry = new u()),
              (this.symbolRegistry = new i(function (t) {
                var r;
                return null !== (r = t.description) && void 0 !== r ? r : "";
              })),
              (this.customTransformerRegistry = new p()),
              (this.allowedErrorProps = []);
          }
          return (
            (t.prototype.serialize = function (t) {
              var r,
                e,
                n = new Map(),
                o = G(t, n, this),
                i = { json: o.transformedValue };
              o.annotations &&
                (i.meta = W(W({}, i.meta), { values: o.annotations }));
              var a =
                ((r = {}),
                (e = void 0),
                (n.forEach(function (t) {
                  if (!(t.length <= 1)) {
                    var n = L(
                        t
                          .map(function (t) {
                            return t.map(String);
                          })
                          .sort(function (t, r) {
                            return t.length - r.length;
                          })
                      ),
                      o = n[0],
                      i = n.slice(1);
                    0 === o.length ? (e = i.map(P)) : (r[P(o)] = i.map(P));
                  }
                }),
                e)
                  ? m(r)
                    ? [e]
                    : [e, r]
                  : m(r)
                  ? void 0
                  : r);
              return (
                a && (i.meta = W(W({}, i.meta), { referentialEqualities: a })),
                i
              );
            }),
            (t.prototype.deserialize = function (t) {
              var r,
                e,
                n,
                o = t.json,
                i = t.meta,
                a = (function t(r, e = {}) {
                  if (Q(r)) return r.map((r) => t(r, e));
                  if (
                    !(function (t) {
                      if ("Object" !== H(t)) return !1;
                      let r = Object.getPrototypeOf(t);
                      return r.constructor === Object && r === Object.prototype;
                    })(r)
                  )
                    return r;
                  let n = Object.getOwnPropertyNames(r),
                    o = Object.getOwnPropertySymbols(r);
                  return [...n, ...o].reduce((n, o) => {
                    if (Q(e.props) && !e.props.includes(o)) return n;
                    let i = r[o],
                      a = t(i, e);
                    return (
                      (function (t, r, e, n, o) {
                        let i = {}.propertyIsEnumerable.call(n, r)
                          ? "enumerable"
                          : "nonenumerable";
                        "enumerable" === i && (t[r] = e),
                          o &&
                            "nonenumerable" === i &&
                            Object.defineProperty(t, r, {
                              value: e,
                              enumerable: !1,
                              writable: !0,
                              configurable: !0,
                            });
                      })(n, o, a, r, e.nonenumerable),
                      n
                    );
                  }, {});
                })(o);
              return (
                (null == i ? void 0 : i.values) &&
                  ((r = a),
                  (e = i.values),
                  (n = this),
                  (function t(r, e, n) {
                    if ((void 0 === n && (n = []), r)) {
                      if (!v(r)) {
                        c(r, function (r, o) {
                          return t(r, e, q(q([], L(n)), L(j(o))));
                        });
                        return;
                      }
                      var o = L(r, 2),
                        i = o[0],
                        a = o[1];
                      a &&
                        c(a, function (r, o) {
                          t(r, e, q(q([], L(n)), L(j(o))));
                        }),
                        e(i, n);
                    }
                  })(e, function (t, e) {
                    r = K(r, e, function (r) {
                      return F(r, t, n);
                    });
                  }),
                  (a = r)),
                (null == i ? void 0 : i.referentialEqualities) &&
                  (a = (function (t, r) {
                    function e(r, e) {
                      var n = J(t, j(e));
                      r.map(j).forEach(function (r) {
                        t = K(t, r, function () {
                          return n;
                        });
                      });
                    }
                    if (v(r)) {
                      var n = L(r, 2),
                        o = n[0],
                        i = n[1];
                      o.forEach(function (r) {
                        t = K(t, j(r), function () {
                          return t;
                        });
                      }),
                        i && c(i, e);
                    } else c(r, e);
                    return t;
                  })(a, i.referentialEqualities)),
                a
              );
            }),
            (t.prototype.stringify = function (t) {
              return JSON.stringify(this.serialize(t));
            }),
            (t.prototype.parse = function (t) {
              return this.deserialize(JSON.parse(t));
            }),
            (t.prototype.registerClass = function (t, r) {
              this.classRegistry.register(t, r);
            }),
            (t.prototype.registerSymbol = function (t, r) {
              this.symbolRegistry.register(t, r);
            }),
            (t.prototype.registerCustom = function (t, r) {
              this.customTransformerRegistry.register(W({ name: r }, t));
            }),
            (t.prototype.allowErrorProps = function () {
              for (var t, r = [], e = 0; e < arguments.length; e++)
                r[e] = arguments[e];
              (t = this.allowedErrorProps).push.apply(t, Y([], X(r)));
            }),
            (t.defaultInstance = new t()),
            (t.serialize = t.defaultInstance.serialize.bind(t.defaultInstance)),
            (t.deserialize = t.defaultInstance.deserialize.bind(
              t.defaultInstance
            )),
            (t.stringify = t.defaultInstance.stringify.bind(t.defaultInstance)),
            (t.parse = t.defaultInstance.parse.bind(t.defaultInstance)),
            (t.registerClass = t.defaultInstance.registerClass.bind(
              t.defaultInstance
            )),
            (t.registerSymbol = t.defaultInstance.registerSymbol.bind(
              t.defaultInstance
            )),
            (t.registerCustom = t.defaultInstance.registerCustom.bind(
              t.defaultInstance
            )),
            (t.allowErrorProps = t.defaultInstance.allowErrorProps.bind(
              t.defaultInstance
            )),
            t
          );
        })(),
        tt = Z,
        tr = Z.serialize,
        te = Z.deserialize,
        tn = Z.stringify,
        to = Z.parse,
        ti = Z.registerClass,
        ta = Z.registerCustom,
        tu = Z.registerSymbol,
        ts = Z.allowErrorProps;
    },
  },
]);
