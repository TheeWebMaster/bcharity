"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 3);
}([function (e, t, n) {
  var r;
  /*!
   * jQuery JavaScript Library v3.4.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2019-05-01T21:04Z
   */

  /*!
   * jQuery JavaScript Library v3.4.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2019-05-01T21:04Z
   */

  !function (t, n) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, i) {
    "use strict";

    var o = [],
        s = n.document,
        a = Object.getPrototypeOf,
        l = o.slice,
        u = o.concat,
        c = o.push,
        f = o.indexOf,
        p = {},
        d = p.toString,
        h = p.hasOwnProperty,
        g = h.toString,
        m = g.call(Object),
        v = {},
        y = function y(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        x = function x(e) {
      return null != e && e === e.window;
    },
        b = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function w(e, t, n) {
      var r,
          i,
          o = (n = n || s).createElement("script");
      if (o.text = e, t) for (r in b) {
        (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
      }
      n.head.appendChild(o).parentNode.removeChild(o);
    }

    function T(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? p[d.call(e)] || "object" : _typeof(e);
    }

    var C = function C(e, t) {
      return new C.fn.init(e, t);
    },
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function k(e) {
      var t = !!e && "length" in e && e.length,
          n = T(e);
      return !y(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    C.fn = C.prototype = {
      jquery: "3.4.1",
      constructor: C,
      length: 0,
      toArray: function toArray() {
        return l.call(this);
      },
      get: function get(e) {
        return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = C.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return C.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(C.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(l.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: c,
      sort: o.sort,
      splice: o.splice
    }, C.extend = C.fn.extend = function () {
      var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;

      for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
        if (null != (e = arguments[a])) for (t in e) {
          r = e[t], "__proto__" !== t && s !== r && (u && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, s[t] = C.extend(u, o, r)) : void 0 !== r && (s[t] = r));
        }
      }

      return s;
    }, C.extend({
      expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !(!e || "[object Object]" !== d.call(e)) && (!(t = a(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && g.call(n) === m);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t) {
        w(e, {
          nonce: t && t.nonce
        });
      },
      each: function each(e, t) {
        var n,
            r = 0;
        if (k(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
          ;
        } else for (r in e) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
        return e;
      },
      trim: function trim(e) {
        return null == e ? "" : (e + "").replace(S, "");
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (k(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : f.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
          e[i++] = t[r];
        }

        return e.length = i, e;
      },
      grep: function grep(e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) {
          !t(e[i], i) !== s && r.push(e[i]);
        }

        return r;
      },
      map: function map(e, t, n) {
        var r,
            i,
            o = 0,
            s = [];
        if (k(e)) for (r = e.length; o < r; o++) {
          null != (i = t(e[o], o, n)) && s.push(i);
        } else for (o in e) {
          null != (i = t(e[o], o, n)) && s.push(i);
        }
        return u.apply([], s);
      },
      guid: 1,
      support: v
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      p["[object " + t + "]"] = t.toLowerCase();
    });

    var E =
    /*!
     * Sizzle CSS Selector Engine v2.3.4
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2019-04-08
     */
    function (e) {
      var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          p,
          d,
          h,
          g,
          m,
          v,
          y,
          x,
          b = "sizzle" + 1 * new Date(),
          w = e.document,
          T = 0,
          C = 0,
          S = le(),
          k = le(),
          E = le(),
          A = le(),
          D = function D(e, t) {
        return e === t && (f = !0), 0;
      },
          j = {}.hasOwnProperty,
          N = [],
          q = N.pop,
          L = N.push,
          H = N.push,
          O = N.slice,
          P = function P(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          W = "[\\x20\\t\\r\\n\\f]",
          M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          I = "\\[" + W + "*(" + M + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + W + "*\\]",
          F = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
          B = new RegExp(W + "+", "g"),
          $ = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
          _ = new RegExp("^" + W + "*," + W + "*"),
          z = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
          X = new RegExp(W + "|>"),
          U = new RegExp(F),
          V = new RegExp("^" + M + "$"),
          Q = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", "i")
      },
          Y = /HTML$/i,
          G = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\([\\da-f]{1,6}" + W + "?|(" + W + ")|.)", "ig"),
          ne = function ne(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ie = function ie(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          oe = function oe() {
        p();
      },
          se = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        H.apply(N = O.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType;
      } catch (e) {
        H = {
          apply: N.length ? function (e, t) {
            L.apply(e, O.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      function ae(e, t, r, i) {
        var o,
            a,
            u,
            c,
            f,
            h,
            v,
            y = t && t.ownerDocument,
            T = t ? t.nodeType : 9;
        if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

        if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
          if (11 !== T && (f = Z.exec(e))) if (o = f[1]) {
            if (9 === T) {
              if (!(u = t.getElementById(o))) return r;
              if (u.id === o) return r.push(u), r;
            } else if (y && (u = y.getElementById(o)) && x(t, u) && u.id === o) return r.push(u), r;
          } else {
            if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
            if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r;
          }

          if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
            if (v = e, y = t, 1 === T && X.test(e)) {
              for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b), a = (h = s(e)).length; a--;) {
                h[a] = "#" + c + " " + xe(h[a]);
              }

              v = h.join(","), y = ee.test(e) && ve(t.parentNode) || t;
            }

            try {
              return H.apply(r, y.querySelectorAll(v)), r;
            } catch (t) {
              A(e, !0);
            } finally {
              c === b && t.removeAttribute("id");
            }
          }
        }

        return l(e.replace($, "$1"), t, r, i);
      }

      function le() {
        var e = [];
        return function t(n, i) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
        };
      }

      function ue(e) {
        return e[b] = !0, e;
      }

      function ce(e) {
        var t = d.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function fe(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) {
          r.attrHandle[n[i]] = t;
        }
      }

      function pe(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function de(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function he(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }

      function ge(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function me(e) {
        return ue(function (t) {
          return t = +t, ue(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--;) {
              n[i = o[s]] && (n[i] = !(r[i] = n[i]));
            }
          });
        });
      }

      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in n = ae.support = {}, o = ae.isXML = function (e) {
        var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || n && n.nodeName || "HTML");
      }, p = ae.setDocument = function (e) {
        var t,
            i,
            s = e ? e.ownerDocument || e : w;
        return s !== d && 9 === s.nodeType && s.documentElement ? (h = (d = s).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = ce(function (e) {
          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = J.test(d.getElementsByClassName), n.getById = ce(function (e) {
          return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
        }), n.getById ? (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n,
                r,
                i,
                o = t.getElementById(e);

            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];

              for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              }
            }

            return [];
          }
        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              i = 0,
              o = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; n = o[i++];) {
              1 === n.nodeType && r.push(n);
            }

            return r;
          }

          return o;
        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
        }, v = [], m = [], (n.qsa = J.test(d.querySelectorAll)) && (ce(function (e) {
          h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + W + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + W + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]");
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = d.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + W + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
        })), (n.matchesSelector = J.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F);
        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(h.compareDocumentPosition), x = t || J.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, D = t ? function (e, t) {
          if (e === t) return f = !0, 0;
          var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) return f = !0, 0;
          var n,
              r = 0,
              i = e.parentNode,
              o = t.parentNode,
              s = [e],
              a = [t];
          if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
          if (i === o) return pe(e, t);

          for (n = e; n = n.parentNode;) {
            s.unshift(n);
          }

          for (n = t; n = n.parentNode;) {
            a.unshift(n);
          }

          for (; s[r] === a[r];) {
            r++;
          }

          return r ? pe(s[r], a[r]) : s[r] === w ? -1 : a[r] === w ? 1 : 0;
        }, d) : d;
      }, ae.matches = function (e, t) {
        return ae(e, null, null, t);
      }, ae.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
          var r = y.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (e) {
          A(t, !0);
        }
        return ae(t, d, null, [e]).length > 0;
      }, ae.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }, ae.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
            o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
      }, ae.escape = function (e) {
        return (e + "").replace(re, ie);
      }, ae.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, ae.uniqueSort = function (e) {
        var t,
            r = [],
            i = 0,
            o = 0;

        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
          for (; t = e[o++];) {
            t === e[o] && (i = r.push(o));
          }

          for (; i--;) {
            e.splice(r[i], 1);
          }
        }

        return c = null, e;
      }, i = ae.getText = function (e) {
        var t,
            n = "",
            r = 0,
            o = e.nodeType;

        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              n += i(e);
            }
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; t = e[r++];) {
          n += i(t);
        }

        return n;
      }, (r = ae.selectors = {
        cacheLength: 50,
        createPseudo: ue,
        match: Q,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];
            return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = S[e + " "];
            return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && S(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, n) {
            return function (r) {
              var i = ae.attr(r, e);
              return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
            return 1 === r && 0 === i ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var u,
                  c,
                  f,
                  p,
                  d,
                  h,
                  g = o !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  x = !1;

              if (m) {
                if (o) {
                  for (; g;) {
                    for (p = t; p = p[g];) {
                      if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                    }

                    h = g = "only" === e && !h && "nextSibling";
                  }

                  return !0;
                }

                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                  for (x = (d = (u = (c = (f = (p = m)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) {
                    if (1 === p.nodeType && ++x && p === t) {
                      c[e] = [T, d, x];
                      break;
                    }
                  }
                } else if (y && (x = d = (u = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && u[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));) {
                  ;
                }

                return (x -= i) === r || x % r == 0 && x / r >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var n,
                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
            return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
              for (var r, o = i(e, t), s = o.length; s--;) {
                e[r = P(e, o[s])] = !(n[r] = o[s]);
              }
            }) : function (e) {
              return i(e, 0, n);
            }) : i;
          }
        },
        pseudos: {
          not: ue(function (e) {
            var t = [],
                n = [],
                r = a(e.replace($, "$1"));
            return r[b] ? ue(function (e, t, n, i) {
              for (var o, s = r(e, null, i, []), a = e.length; a--;) {
                (o = s[a]) && (e[a] = !(t[a] = o));
              }
            }) : function (e, i, o) {
              return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
            };
          }),
          has: ue(function (e) {
            return function (t) {
              return ae(e, t).length > 0;
            };
          }),
          contains: ue(function (e) {
            return e = e.replace(te, ne), function (t) {
              return (t.textContent || i(t)).indexOf(e) > -1;
            };
          }),
          lang: ue(function (e) {
            return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
              var n;

              do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function root(e) {
            return e === h;
          },
          focus: function focus(e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !r.pseudos.empty(e);
          },
          header: function header(e) {
            return K.test(e.nodeName);
          },
          input: function input(e) {
            return G.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: me(function () {
            return [0];
          }),
          last: me(function (e, t) {
            return [t - 1];
          }),
          eq: me(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: me(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: me(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: me(function (e, t, n) {
            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
              e.push(r);
            }

            return e;
          }),
          gt: me(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }

            return e;
          })
        }
      }).pseudos.nth = r.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        r.pseudos[t] = de(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        r.pseudos[t] = he(t);
      }

      function ye() {}

      function xe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }

        return r;
      }

      function be(e, t, n) {
        var r = t.dir,
            i = t.next,
            o = i || r,
            s = n && "parentNode" === o,
            a = C++;
        return t.first ? function (t, n, i) {
          for (; t = t[r];) {
            if (1 === t.nodeType || s) return e(t, n, i);
          }

          return !1;
        } : function (t, n, l) {
          var u,
              c,
              f,
              p = [T, a];

          if (l) {
            for (; t = t[r];) {
              if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            }
          } else for (; t = t[r];) {
            if (1 === t.nodeType || s) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
              if ((u = c[o]) && u[0] === T && u[1] === a) return p[2] = u[2];
              if (c[o] = p, p[2] = e(t, n, l)) return !0;
            }
          }

          return !1;
        };
      }

      function we(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var i = e.length; i--;) {
            if (!e[i](t, n, r)) return !1;
          }

          return !0;
        } : e[0];
      }

      function Te(e, t, n, r, i) {
        for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) {
          (o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
        }

        return s;
      }

      function Ce(e, t, n, r, i, o) {
        return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), ue(function (o, s, a, l) {
          var u,
              c,
              f,
              p = [],
              d = [],
              h = s.length,
              g = o || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
              ae(e, t[r], n);
            }

            return n;
          }(t || "*", a.nodeType ? [a] : a, []),
              m = !e || !o && t ? g : Te(g, p, e, a, l),
              v = n ? i || (o ? e : h || r) ? [] : s : m;

          if (n && n(m, v, a, l), r) for (u = Te(v, d), r(u, [], a, l), c = u.length; c--;) {
            (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
          }

          if (o) {
            if (i || e) {
              if (i) {
                for (u = [], c = v.length; c--;) {
                  (f = v[c]) && u.push(m[c] = f);
                }

                i(null, v = [], u, l);
              }

              for (c = v.length; c--;) {
                (f = v[c]) && (u = i ? P(o, f) : p[c]) > -1 && (o[u] = !(s[u] = f));
              }
            }
          } else v = Te(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, l) : H.apply(s, v);
        });
      }

      function Se(e) {
        for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, c = be(function (e) {
          return e === t;
        }, a, !0), f = be(function (e) {
          return P(t, e) > -1;
        }, a, !0), p = [function (e, n, r) {
          var i = !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
          return t = null, i;
        }]; l < o; l++) {
          if (n = r.relative[e[l].type]) p = [be(we(p), n)];else {
            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
              for (i = ++l; i < o && !r.relative[e[i].type]; i++) {
                ;
              }

              return Ce(l > 1 && we(p), l > 1 && xe(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace($, "$1"), n, l < i && Se(e.slice(l, i)), i < o && Se(e = e.slice(i)), i < o && xe(e));
            }

            p.push(n);
          }
        }

        return we(p);
      }

      return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), s = ae.tokenize = function (e, t) {
        var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c = k[e + " "];
        if (c) return t ? 0 : c.slice(0);

        for (a = e, l = [], u = r.preFilter; a;) {
          for (s in n && !(i = _.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = z.exec(a)) && (n = i.shift(), o.push({
            value: n,
            type: i[0].replace($, " ")
          }), a = a.slice(n.length)), r.filter) {
            !(i = Q[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), o.push({
              value: n,
              type: s,
              matches: i
            }), a = a.slice(n.length));
          }

          if (!n) break;
        }

        return t ? a.length : a ? ae.error(e) : k(e, l).slice(0);
      }, a = ae.compile = function (e, t) {
        var n,
            i = [],
            o = [],
            a = E[e + " "];

        if (!a) {
          for (t || (t = s(e)), n = t.length; n--;) {
            (a = Se(t[n]))[b] ? i.push(a) : o.push(a);
          }

          (a = E(e, function (e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function o(_o, s, a, l, c) {
              var f,
                  h,
                  m,
                  v = 0,
                  y = "0",
                  x = _o && [],
                  b = [],
                  w = u,
                  C = _o || i && r.find.TAG("*", c),
                  S = T += null == w ? 1 : Math.random() || .1,
                  k = C.length;

              for (c && (u = s === d || s || c); y !== k && null != (f = C[y]); y++) {
                if (i && f) {
                  for (h = 0, s || f.ownerDocument === d || (p(f), a = !g); m = e[h++];) {
                    if (m(f, s || d, a)) {
                      l.push(f);
                      break;
                    }
                  }

                  c && (T = S);
                }

                n && ((f = !m && f) && v--, _o && x.push(f));
              }

              if (v += y, n && y !== v) {
                for (h = 0; m = t[h++];) {
                  m(x, b, s, a);
                }

                if (_o) {
                  if (v > 0) for (; y--;) {
                    x[y] || b[y] || (b[y] = q.call(l));
                  }
                  b = Te(b);
                }

                H.apply(l, b), c && !_o && b.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
              }

              return c && (T = S, u = w), x;
            };

            return n ? ue(o) : o;
          }(o, i))).selector = e;
        }

        return a;
      }, l = ae.select = function (e, t, n, i) {
        var o,
            l,
            u,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && s(e = p.selector || e);

        if (n = n || [], 1 === d.length) {
          if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
            if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
            p && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }

          for (o = Q.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !r.relative[c = u.type]);) {
            if ((f = r.find[c]) && (i = f(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
              if (l.splice(o, 1), !(e = i.length && xe(l))) return H.apply(n, i), n;
              break;
            }
          }
        }

        return (p || a(e, d))(i, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
      }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      }), ce(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || fe("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && ce(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || fe("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ce(function (e) {
        return null == e.getAttribute("disabled");
      }) || fe(R, function (e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), ae;
    }(n);

    C.find = E, C.expr = E.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = E.uniqueSort, C.text = E.getText, C.isXMLDoc = E.isXML, C.contains = E.contains, C.escapeSelector = E.escape;

    var A = function A(e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (i && C(e).is(n)) break;
          r.push(e);
        }
      }

      return r;
    },
        D = function D(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        j = C.expr.match.needsContext;

    function N(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(e, t, n) {
      return y(t) ? C.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      }) : t.nodeType ? C.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? C.grep(e, function (e) {
        return f.call(t, e) > -1 !== n;
      }) : C.filter(t, e, n);
    }

    C.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, C.fn.extend({
      find: function find(e) {
        var t,
            n,
            r = this.length,
            i = this;
        if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
          for (t = 0; t < r; t++) {
            if (C.contains(i[t], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), t = 0; t < r; t++) {
          C.find(e, i[t], n);
        }

        return r > 1 ? C.uniqueSort(n) : n;
      },
      filter: function filter(e) {
        return this.pushStack(L(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(L(this, e || [], !0));
      },
      is: function is(e) {
        return !!L(this, "string" == typeof e && j.test(e) ? C(e) : e || [], !1).length;
      }
    });
    var H,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;

      if (n = n || H, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (r[1]) {
          if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), q.test(r[1]) && C.isPlainObject(t)) for (r in t) {
            y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }
          return this;
        }

        return (i = s.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
    }).prototype = C.fn, H = C(s);
    var P = /^(?:parents|prev(?:Until|All))/,
        R = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function W(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    C.fn.extend({
      has: function has(e) {
        var t = C(e, this),
            n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (C.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n,
            r = 0,
            i = this.length,
            o = [],
            s = "string" != typeof e && C(e);
        if (!j.test(e)) for (; r < i; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
          }
        }
        return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? f.call(C(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), C.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return A(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return A(e, "parentNode", n);
      },
      next: function next(e) {
        return W(e, "nextSibling");
      },
      prev: function prev(e) {
        return W(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return A(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return A(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, n) {
        return A(e, "nextSibling", n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return A(e, "previousSibling", n);
      },
      siblings: function siblings(e) {
        return D((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return D(e.firstChild);
      },
      contents: function contents(e) {
        return void 0 !== e.contentDocument ? e.contentDocument : (N(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
      }
    }, function (e, t) {
      C.fn[e] = function (n, r) {
        var i = C.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (R[e] || C.uniqueSort(i), P.test(e) && i.reverse()), this.pushStack(i);
      };
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function I(e) {
      return e;
    }

    function F(e) {
      throw e;
    }

    function B(e, t, n, r) {
      var i;

      try {
        e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    C.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return C.each(e.match(M) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : C.extend({}, e);

      var t,
          n,
          r,
          i,
          o = [],
          s = [],
          a = -1,
          l = function l() {
        for (i = i || e.once, r = t = !0; s.length; a = -1) {
          for (n = s.shift(); ++a < o.length;) {
            !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
          }
        }

        e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
      },
          u = {
        add: function add() {
          return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
            C.each(n, function (n, r) {
              y(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r);
            });
          }(arguments), n && !t && l()), this;
        },
        remove: function remove() {
          return C.each(arguments, function (e, t) {
            for (var n; (n = C.inArray(t, o, n)) > -1;) {
              o.splice(n, 1), n <= a && a--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? C.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function empty() {
          return o && (o = []), this;
        },
        disable: function disable() {
          return i = s = [], o = n = "", this;
        },
        disabled: function disabled() {
          return !o;
        },
        lock: function lock() {
          return i = s = [], n || t || (o = n = ""), this;
        },
        locked: function locked() {
          return !!i;
        },
        fireWith: function fireWith(e, n) {
          return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
        },
        fire: function fire() {
          return u.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!r;
        }
      };

      return u;
    }, C.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
            r = "pending",
            i = {
          state: function state() {
            return r;
          },
          always: function always() {
            return o.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return i.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return C.Deferred(function (n) {
              C.each(t, function (t, r) {
                var i = y(e[r[4]]) && e[r[4]];
                o[r[1]](function () {
                  var e = i && i.apply(this, arguments);
                  e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, r, i) {
            var o = 0;

            function s(e, t, r, i) {
              return function () {
                var a = this,
                    l = arguments,
                    u = function u() {
                  var n, u;

                  if (!(e < o)) {
                    if ((n = r.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    u = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, y(u) ? i ? u.call(n, s(o, t, I, i), s(o, t, F, i)) : (o++, u.call(n, s(o, t, I, i), s(o, t, F, i), s(o, t, I, t.notifyWith))) : (r !== I && (a = void 0, l = [n]), (i || t.resolveWith)(a, l));
                  }
                },
                    c = i ? u : function () {
                  try {
                    u();
                  } catch (n) {
                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== F && (a = void 0, l = [n]), t.rejectWith(a, l));
                  }
                };

                e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c));
              };
            }

            return C.Deferred(function (n) {
              t[0][3].add(s(0, n, y(i) ? i : I, n.notifyWith)), t[1][3].add(s(0, n, y(e) ? e : I)), t[2][3].add(s(0, n, y(r) ? r : F));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? C.extend(e, i) : i;
          }
        },
            o = {};
        return C.each(t, function (e, n) {
          var s = n[2],
              a = n[5];
          i[n[1]] = s.add, a && s.add(function () {
            r = a;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), o[n[0]] = function () {
            return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
          }, o[n[0] + "With"] = s.fireWith;
        }), i.promise(o), e && e.call(o, o), o;
      },
      when: function when(e) {
        var t = arguments.length,
            n = t,
            r = Array(n),
            i = l.call(arguments),
            o = C.Deferred(),
            s = function s(e) {
          return function (n) {
            r[e] = this, i[e] = arguments.length > 1 ? l.call(arguments) : n, --t || o.resolveWith(r, i);
          };
        };

        if (t <= 1 && (B(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();

        for (; n--;) {
          B(i[n], s(n), o.reject);
        }

        return o.promise();
      }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && $.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, C.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };

    var _ = C.Deferred();

    function z() {
      s.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), C.ready();
    }

    C.fn.ready = function (e) {
      return _.then(e)["catch"](function (e) {
        C.readyException(e);
      }), this;
    }, C.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || _.resolveWith(s, [C]));
      }
    }), C.ready.then = _.then, "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(C.ready) : (s.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));

    var X = function X(e, t, n, r, i, o, s) {
      var a = 0,
          l = e.length,
          u = null == n;
      if ("object" === T(n)) for (a in i = !0, n) {
        X(e, t, a, n[a], !0, o, s);
      } else if (void 0 !== r && (i = !0, y(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function t(e, _t2, n) {
        return u.call(C(e), n);
      })), t)) for (; a < l; a++) {
        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      }
      return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
        U = /^-ms-/,
        V = /-([a-z])/g;

    function Q(e, t) {
      return t.toUpperCase();
    }

    function Y(e) {
      return e.replace(U, "ms-").replace(V, Q);
    }

    var G = function G(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function K() {
      this.expando = C.expando + K.uid++;
    }

    K.uid = 1, K.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var r,
            i = this.cache(e);
        if ("string" == typeof t) i[Y(t)] = n;else for (r in t) {
          i[Y(r)] = t[r];
        }
        return i;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function remove(e, t) {
        var n,
            r = e[this.expando];

        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(M) || []).length;

            for (; n--;) {
              delete r[t[n]];
            }
          }

          (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !C.isEmptyObject(t);
      }
    };
    var J = new K(),
        Z = new K(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;

    function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}

        Z.set(e, t, n);
      } else n = void 0;
      return n;
    }

    C.extend({
      hasData: function hasData(e) {
        return Z.hasData(e) || J.hasData(e);
      },
      data: function data(e, t, n) {
        return Z.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        Z.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return J.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        J.remove(e, t);
      }
    }), C.fn.extend({
      data: function data(e, t) {
        var n,
            r,
            i,
            o = this[0],
            s = o && o.attributes;

        if (void 0 === e) {
          if (this.length && (i = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) {
              s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = Y(r.slice(5)), ne(o, r, i[r]));
            }

            J.set(o, "hasDataAttrs", !0);
          }

          return i;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Z.set(this, e);
        }) : X(this, function (t) {
          var n;
          if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
          this.each(function () {
            Z.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          Z.remove(this, e);
        });
      }
    }), C.extend({
      queue: function queue(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var n = C.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = C._queueHooks(e, t);

        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
          C.dequeue(e, t);
        }, o)), !r && o && o.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";
        return J.get(e, n) || J.access(e, n, {
          empty: C.Callbacks("once memory").add(function () {
            J.remove(e, [t + "queue", n]);
          })
        });
      }
    }), C.fn.extend({
      queue: function queue(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = C.queue(this, e, t);
          C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var n,
            r = 1,
            i = C.Deferred(),
            o = this,
            s = this.length,
            a = function a() {
          --r || i.resolveWith(o, [o]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
          (n = J.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
        }

        return a(), i.promise(t);
      }
    });

    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        se = s.documentElement,
        ae = function ae(e) {
      return C.contains(e.ownerDocument, e);
    },
        le = {
      composed: !0
    };

    se.getRootNode && (ae = function ae(e) {
      return C.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
    });

    var ue = function ue(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display");
    },
        ce = function ce(e, t, n, r) {
      var i,
          o,
          s = {};

      for (o in t) {
        s[o] = e.style[o], e.style[o] = t[o];
      }

      for (o in i = n.apply(e, r || []), t) {
        e.style[o] = s[o];
      }

      return i;
    };

    function fe(e, t, n, r) {
      var i,
          o,
          s = 20,
          a = r ? function () {
        return r.cur();
      } : function () {
        return C.css(e, t, "");
      },
          l = a(),
          u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (C.cssNumber[t] || "px" !== u && +l) && ie.exec(C.css(e, t));

      if (c && c[3] !== u) {
        for (l /= 2, u = u || c[3], c = +l || 1; s--;) {
          C.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
        }

        c *= 2, C.style(e, t, c + u), n = n || [];
      }

      return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i;
    }

    var pe = {};

    function de(e) {
      var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = pe[r];
      return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), pe[r] = i, i);
    }

    function he(e, t) {
      for (var n, r, i = [], o = 0, s = e.length; o < s; o++) {
        (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ue(r) && (i[o] = de(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
      }

      for (o = 0; o < s; o++) {
        null != i[o] && (e[o].style.display = i[o]);
      }

      return e;
    }

    C.fn.extend({
      show: function show() {
        return he(this, !0);
      },
      hide: function hide() {
        return he(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          ue(this) ? C(this).show() : C(this).hide();
        });
      }
    });
    var ge = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i,
        ye = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function xe(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? C.merge([e], n) : n;
    }

    function be(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
    }

    ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
    var we,
        Te,
        Ce = /<|&#?\w+;/;

    function Se(e, t, n, r, i) {
      for (var o, s, a, l, u, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
        if ((o = e[d]) || 0 === o) if ("object" === T(o)) C.merge(p, o.nodeType ? [o] : o);else if (Ce.test(o)) {
          for (s = s || f.appendChild(t.createElement("div")), a = (me.exec(o) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], c = l[0]; c--;) {
            s = s.lastChild;
          }

          C.merge(p, s.childNodes), (s = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
      }

      for (f.textContent = "", d = 0; o = p[d++];) {
        if (r && C.inArray(o, r) > -1) i && i.push(o);else if (u = ae(o), s = xe(f.appendChild(o), "script"), u && be(s), n) for (c = 0; o = s[c++];) {
          ve.test(o.type || "") && n.push(o);
        }
      }

      return f;
    }

    we = s.createDocumentFragment().appendChild(s.createElement("div")), (Te = s.createElement("input")).setAttribute("type", "radio"), Te.setAttribute("checked", "checked"), Te.setAttribute("name", "t"), we.appendChild(Te), v.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
    var ke = /^key/,
        Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ae = /^([^.]*)(?:\.(.+)|)/;

    function De() {
      return !0;
    }

    function je() {
      return !1;
    }

    function Ne(e, t) {
      return e === function () {
        try {
          return s.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function qe(e, t, n, r, i, o) {
      var s, a;

      if ("object" == _typeof(t)) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), t) {
          qe(e, a, n, r, t[a], o);
        }

        return e;
      }

      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = je;else if (!i) return e;
      return 1 === o && (s = i, (i = function i(e) {
        return C().off(e), s.apply(this, arguments);
      }).guid = s.guid || (s.guid = C.guid++)), e.each(function () {
        C.event.add(this, t, i, r, n);
      });
    }

    function Le(e, t, n) {
      n ? (J.set(e, t, !1), C.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var r,
              i,
              o = J.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (o.length) (C.event.special[t] || {}).delegateType && e.stopPropagation();else if (o = l.call(arguments), J.set(this, t, o), r = n(this, t), this[t](), o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
          } else o.length && (J.set(this, t, {
            value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === J.get(e, t) && C.event.add(e, t, De);
    }

    C.event = {
      global: {},
      add: function add(e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            m = J.get(e);
        if (m) for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(se, i), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
          return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
        }), u = (t = (t || "").match(M) || [""]).length; u--;) {
          d = g = (a = Ae.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = C.event.special[d] || {}, c = C.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && C.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[d] = !0);
        }
      },
      remove: function remove(e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            m = J.hasData(e) && J.get(e);

        if (m && (l = m.events)) {
          for (u = (t = (t || "").match(M) || [""]).length; u--;) {
            if (d = g = (a = Ae.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
              for (f = C.event.special[d] || {}, p = l[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) {
                c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              }

              s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, d, m.handle), delete l[d]);
            } else for (d in l) {
              C.event.remove(e, d + t[u], n, r, !0);
            }
          }

          C.isEmptyObject(l) && J.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a = C.event.fix(e),
            l = new Array(arguments.length),
            u = (J.get(this, "events") || {})[a.type] || [],
            c = C.event.special[a.type] || {};

        for (l[0] = a, t = 1; t < arguments.length; t++) {
          l[t] = arguments[t];
        }

        if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
          for (s = C.event.handlers.call(this, a, u), t = 0; (i = s[t++]) && !a.isPropagationStopped();) {
            for (a.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) {
              a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
            }
          }

          return c.postDispatch && c.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function handlers(e, t) {
        var n,
            r,
            i,
            o,
            s,
            a = [],
            l = t.delegateCount,
            u = e.target;
        if (l && u.nodeType && !("click" === e.type && e.button >= 1)) for (; u !== this; u = u.parentNode || this) {
          if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
            for (o = [], s = {}, n = 0; n < l; n++) {
              void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? C(i, this).index(u) > -1 : C.find(i, this, null, [u]).length), s[i] && o.push(r);
            }

            o.length && a.push({
              elem: u,
              handlers: o
            });
          }
        }
        return u = this, l < t.length && a.push({
          elem: u,
          handlers: t.slice(l)
        }), a;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(C.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: y(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[C.expando] ? e : new C.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && N(t, "input") && Le(t, "click", De), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return ge.test(t.type) && t.click && N(t, "input") && Le(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return ge.test(t.type) && t.click && N(t, "input") && J.get(t, "click") || N(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, C.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, C.Event = function (e, t) {
      if (!(this instanceof C.Event)) return new C.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? De : je, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
    }, C.Event.prototype = {
      constructor: C.Event,
      isDefaultPrevented: je,
      isPropagationStopped: je,
      isImmediatePropagationStopped: je,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = De, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = De, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = De, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, C.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(e) {
        var t = e.button;
        return null == e.which && ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, C.event.addProp), C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      C.event.special[e] = {
        setup: function setup() {
          return Le(this, e, Ne), !1;
        },
        trigger: function trigger() {
          return Le(this, e), !0;
        },
        delegateType: t
      };
    }), C.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      C.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
          return i && (i === r || C.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), C.fn.extend({
      on: function on(e, t, n, r) {
        return qe(this, e, t, n, r);
      },
      one: function one(e, t, n, r) {
        return qe(this, e, t, n, r, 1);
      },
      off: function off(e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

        if ("object" == _typeof(e)) {
          for (i in e) {
            this.off(i, t, e[i]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = je), this.each(function () {
          C.event.remove(this, e, n, t);
        });
      }
    });
    var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Oe = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function We(e, t) {
      return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
    }

    function Me(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function Ie(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function Fe(e, t) {
      var n, r, i, o, s, a, l, u;

      if (1 === t.nodeType) {
        if (J.hasData(e) && (o = J.access(e), s = J.set(t, o), u = o.events)) for (i in delete s.handle, s.events = {}, u) {
          for (n = 0, r = u[i].length; n < r; n++) {
            C.event.add(t, i, u[i][n]);
          }
        }
        Z.hasData(e) && (a = Z.access(e), l = C.extend({}, a), Z.set(t, l));
      }
    }

    function Be(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function $e(e, t, n, r) {
      t = u.apply([], t);
      var i,
          o,
          s,
          a,
          l,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          g = y(h);
      if (g || p > 1 && "string" == typeof h && !v.checkClone && Pe.test(h)) return e.each(function (i) {
        var o = e.eq(i);
        g && (t[0] = h.call(this, i, o.html())), $e(o, t, n, r);
      });

      if (p && (o = (i = Se(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (a = (s = C.map(xe(i, "script"), Me)).length; f < p; f++) {
          l = i, f !== d && (l = C.clone(l, !0, !0), a && C.merge(s, xe(l, "script"))), n.call(e[f], l, f);
        }

        if (a) for (c = s[s.length - 1].ownerDocument, C.map(s, Ie), f = 0; f < a; f++) {
          l = s[f], ve.test(l.type || "") && !J.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
            nonce: l.nonce || l.getAttribute("nonce")
          }) : w(l.textContent.replace(Re, ""), l, c));
        }
      }

      return e;
    }

    function _e(e, t, n) {
      for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
        n || 1 !== r.nodeType || C.cleanData(xe(r)), r.parentNode && (n && ae(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
      }

      return e;
    }

    C.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(He, "<$1></$2>");
      },
      clone: function clone(e, t, n) {
        var r,
            i,
            o,
            s,
            a = e.cloneNode(!0),
            l = ae(e);
        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = xe(a), r = 0, i = (o = xe(e)).length; r < i; r++) {
          Be(o[r], s[r]);
        }
        if (t) if (n) for (o = o || xe(e), s = s || xe(a), r = 0, i = o.length; r < i; r++) {
          Fe(o[r], s[r]);
        } else Fe(e, a);
        return (s = xe(a, "script")).length > 0 && be(s, !l && xe(e, "script")), a;
      },
      cleanData: function cleanData(e) {
        for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++) {
          if (G(n)) {
            if (t = n[J.expando]) {
              if (t.events) for (r in t.events) {
                i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
              }
              n[J.expando] = void 0;
            }

            n[Z.expando] && (n[Z.expando] = void 0);
          }
        }
      }
    }), C.fn.extend({
      detach: function detach(e) {
        return _e(this, e, !0);
      },
      remove: function remove(e) {
        return _e(this, e);
      },
      text: function text(e) {
        return X(this, function (e) {
          return void 0 === e ? C.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return $e(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || We(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return $e(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = We(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return $e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (C.cleanData(xe(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return C.clone(this, e, t);
        });
      },
      html: function html(e) {
        return X(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Oe.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = C.htmlPrefilter(e);

            try {
              for (; n < r; n++) {
                1 === (t = this[n] || {}).nodeType && (C.cleanData(xe(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return $e(this, arguments, function (t) {
          var n = this.parentNode;
          C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), C.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      C.fn[e] = function (e) {
        for (var n, r = [], i = C(e), o = i.length - 1, s = 0; s <= o; s++) {
          n = s === o ? this : this.clone(!0), C(i[s])[t](n), c.apply(r, n.get());
        }

        return this.pushStack(r);
      };
    });

    var ze = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        Xe = function Xe(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        Ue = new RegExp(oe.join("|"), "i");

    function Ve(e, t, n) {
      var r,
          i,
          o,
          s,
          a = e.style;
      return (n = n || Xe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = C.style(e, t)), !v.pixelBoxStyles() && ze.test(s) && Ue.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s;
    }

    function Qe(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (c) {
          u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(u).appendChild(c);
          var e = n.getComputedStyle(c);
          r = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), se.removeChild(u), c = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var r,
          i,
          o,
          a,
          l,
          u = s.createElement("div"),
          c = s.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(v, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), i;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), a;
        },
        pixelPosition: function pixelPosition() {
          return e(), r;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), o;
        }
      }));
    }();
    var Ye = ["Webkit", "Moz", "ms"],
        Ge = s.createElement("div").style,
        Ke = {};

    function Je(e) {
      var t = C.cssProps[e] || Ke[e];
      return t || (e in Ge ? e : Ke[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) {
          if ((e = Ye[n] + t) in Ge) return e;
        }
      }(e) || e);
    }

    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function rt(e, t, n) {
      var r = ie.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function it(e, t, n, r, i, o) {
      var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
      if (n === (r ? "border" : "content")) return 0;

      for (; s < 4; s += 2) {
        "margin" === n && (l += C.css(e, n + oe[s], !0, i)), r ? ("content" === n && (l -= C.css(e, "padding" + oe[s], !0, i)), "margin" !== n && (l -= C.css(e, "border" + oe[s] + "Width", !0, i))) : (l += C.css(e, "padding" + oe[s], !0, i), "padding" !== n ? l += C.css(e, "border" + oe[s] + "Width", !0, i) : a += C.css(e, "border" + oe[s] + "Width", !0, i));
      }

      return !r && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l;
    }

    function ot(e, t, n) {
      var r = Xe(e),
          i = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
          o = i,
          s = Ve(e, t, r),
          a = "offset" + t[0].toUpperCase() + t.slice(1);

      if (ze.test(s)) {
        if (!n) return s;
        s = "auto";
      }

      return (!v.boxSizingReliable() && i || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, s) + "px";
    }

    function st(e, t, n, r, i) {
      return new st.prototype.init(e, t, n, r, i);
    }

    C.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = Ve(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
              o,
              s,
              a = Y(t),
              l = et.test(t),
              u = e.style;
          if (l || (t = Je(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
          "string" === (o = _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = fe(e, t, i), o = "number"), null != n && n == n && ("number" !== o || l || (n += i && i[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n));
        }
      },
      css: function css(e, t, n, r) {
        var i,
            o,
            s,
            a = Y(t);
        return et.test(t) || (t = Je(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ve(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
      }
    }), C.each(["height", "width"], function (e, t) {
      C.cssHooks[t] = {
        get: function get(e, n, r) {
          if (n) return !Ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, r) : ce(e, tt, function () {
            return ot(e, t, r);
          });
        },
        set: function set(e, n, r) {
          var i,
              o = Xe(e),
              s = !v.scrollboxSize() && "absolute" === o.position,
              a = (s || r) && "border-box" === C.css(e, "boxSizing", !1, o),
              l = r ? it(e, t, r, a, o) : 0;
          return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - it(e, t, "border", !1, o) - .5)), l && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), rt(0, n, l);
        }
      };
    }), C.cssHooks.marginLeft = Qe(v.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), C.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      C.cssHooks[e + t] = {
        expand: function expand(n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          }

          return i;
        }
      }, "margin" !== e && (C.cssHooks[e + t].set = rt);
    }), C.fn.extend({
      css: function css(e, t) {
        return X(this, function (e, t, n) {
          var r,
              i,
              o = {},
              s = 0;

          if (Array.isArray(t)) {
            for (r = Xe(e), i = t.length; s < i; s++) {
              o[t[s]] = C.css(e, t[s], !1, r);
            }

            return o;
          }

          return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), C.Tween = st, st.prototype = {
      constructor: st,
      init: function init(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var e = st.propHooks[this.prop];
        return e && e.get ? e.get(this) : st.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            n = st.propHooks[this.prop];
        return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this;
      }
    }, st.prototype.init.prototype = st.prototype, st.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, st.propHooks.scrollTop = st.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, C.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, C.fx = st.prototype.init, C.fx.step = {};
    var at,
        lt,
        ut = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;

    function ft() {
      lt && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ft) : n.setTimeout(ft, C.fx.interval), C.fx.tick());
    }

    function pt() {
      return n.setTimeout(function () {
        at = void 0;
      }), at = Date.now();
    }

    function dt(e, t) {
      var n,
          r = 0,
          i = {
        height: e
      };

      for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        i["margin" + (n = oe[r])] = i["padding" + n] = e;
      }

      return t && (i.opacity = i.width = e), i;
    }

    function ht(e, t, n) {
      for (var r, i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, s = i.length; o < s; o++) {
        if (r = i[o].call(n, t, e)) return r;
      }
    }

    function gt(e, t, n) {
      var r,
          i,
          o = 0,
          s = gt.prefilters.length,
          a = C.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (i) return !1;

        for (var t = at || pt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) {
          u.tweens[o].run(r);
        }

        return a.notifyWith(e, [u, r, n]), r < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1);
      },
          u = a.promise({
        elem: e,
        props: C.extend({}, t),
        opts: C.extend(!0, {
          specialEasing: {},
          easing: C.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: at || pt(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(t, n) {
          var r = C.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(r), r;
        },
        stop: function stop(t) {
          var n = 0,
              r = t ? u.tweens.length : 0;
          if (i) return this;

          for (i = !0; n < r; n++) {
            u.tweens[n].run(1);
          }

          return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
        }
      }),
          c = u.props;

      for (!function (e, t) {
        var n, r, i, o, s;

        for (n in e) {
          if (i = t[r = Y(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = C.cssHooks[r]) && ("expand" in s)) for (n in o = s.expand(o), delete e[r], o) {
            (n in e) || (e[n] = o[n], t[n] = i);
          } else t[r] = i;
        }
      }(c, u.opts.specialEasing); o < s; o++) {
        if (r = gt.prefilters[o].call(u, e, c, u.opts)) return y(r.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
      }

      return C.map(c, ht, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u;
    }

    C.Animation = C.extend(gt, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return fe(n.elem, e, ie.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        y(e) ? (t = e, e = ["*"]) : e = e.match(M);

        for (var n, r = 0, i = e.length; r < i; r++) {
          n = e[r], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ue(e),
            m = J.get(e, "fxshow");

        for (r in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
          s.unqueued || a();
        }), s.unqueued++, p.always(function () {
          p.always(function () {
            s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
          });
        })), t) {
          if (i = t[r], ut.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !m || void 0 === m[r]) continue;
              g = !0;
            }

            d[r] = m && m[r] || C.style(e, r);
          }
        }

        if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = J.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (he([e], !0), u = e.style.display || u, c = C.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (p.done(function () {
          h.display = u;
        }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), l = !1, d) {
          l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
            display: u
          }), o && (m.hidden = !g), g && he([e], !0), p.done(function () {
            for (r in g || he([e]), J.remove(e, "fxshow"), d) {
              C.style(e, r, d[r]);
            }
          })), l = ht(g ? m[r] : 0, r, p), r in m || (m[r] = l.start, g && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? gt.prefilters.unshift(e) : gt.prefilters.push(e);
      }
    }), C.speed = function (e, t, n) {
      var r = e && "object" == _typeof(e) ? C.extend({}, e) : {
        complete: n || !n && t || y(e) && e,
        duration: e,
        easing: n && t || t && !y(t) && t
      };
      return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
      }, r;
    }, C.fn.extend({
      fadeTo: function fadeTo(e, t, n, r) {
        return this.filter(ue).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r);
      },
      animate: function animate(e, t, n, r) {
        var i = C.isEmptyObject(e),
            o = C.speed(t, n, r),
            s = function s() {
          var t = gt(this, C.extend({}, e), o);
          (i || J.get(this, "finish")) && t.stop(!0);
        };

        return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
      },
      stop: function stop(e, t, n) {
        var r = function r(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };

        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              i = null != e && e + "queueHooks",
              o = C.timers,
              s = J.get(this);
          if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
            s[i] && s[i].stop && ct.test(i) && r(s[i]);
          }

          for (i = o.length; i--;) {
            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          }

          !t && n || C.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = C.timers,
              s = r ? r.length : 0;

          for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          }

          for (t = 0; t < s; t++) {
            r[t] && r[t].finish && r[t].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), C.each(["toggle", "show", "hide"], function (e, t) {
      var n = C.fn[t];

      C.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, i);
      };
    }), C.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      C.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), C.timers = [], C.fx.tick = function () {
      var e,
          t = 0,
          n = C.timers;

      for (at = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }

      n.length || C.fx.stop(), at = void 0;
    }, C.fx.timer = function (e) {
      C.timers.push(e), C.fx.start();
    }, C.fx.interval = 13, C.fx.start = function () {
      lt || (lt = !0, ft());
    }, C.fx.stop = function () {
      lt = null;
    }, C.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, C.fn.delay = function (e, t) {
      return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
        var i = n.setTimeout(t, e);

        r.stop = function () {
          n.clearTimeout(i);
        };
      });
    }, function () {
      var e = s.createElement("input"),
          t = s.createElement("select").appendChild(s.createElement("option"));
      e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = s.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value;
    }();
    var mt,
        vt = C.expr.attrHandle;
    C.fn.extend({
      attr: function attr(e, t) {
        return X(this, C.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          C.removeAttr(this, e);
        });
      }
    }), C.extend({
      attr: function attr(e, t, n) {
        var r,
            i,
            o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!v.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n,
            r = 0,
            i = t && t.match(M);
        if (i && 1 === e.nodeType) for (; n = i[r++];) {
          e.removeAttribute(n);
        }
      }
    }), mt = {
      set: function set(e, t, n) {
        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = vt[t] || C.find.attr;

      vt[t] = function (e, t, r) {
        var i,
            o,
            s = t.toLowerCase();
        return r || (o = vt[s], vt[s] = i, i = null != n(e, t, r) ? s : null, vt[s] = o), i;
      };
    });
    var yt = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;

    function bt(e) {
      return (e.match(M) || []).join(" ");
    }

    function wt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function Tt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || [];
    }

    C.fn.extend({
      prop: function prop(e, t) {
        return X(this, C.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[C.propFix[e] || e];
        });
      }
    }), C.extend({
      prop: function prop(e, t, n) {
        var r,
            i,
            o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = C.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : yt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), v.optSelected || (C.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      C.propFix[this.toLowerCase()] = this;
    }), C.fn.extend({
      addClass: function addClass(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l = 0;
        if (y(e)) return this.each(function (t) {
          C(this).addClass(e.call(this, t, wt(this)));
        });
        if ((t = Tt(e)).length) for (; n = this[l++];) {
          if (i = wt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
            for (s = 0; o = t[s++];) {
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            }

            i !== (a = bt(r)) && n.setAttribute("class", a);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l = 0;
        if (y(e)) return this.each(function (t) {
          C(this).removeClass(e.call(this, t, wt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = Tt(e)).length) for (; n = this[l++];) {
          if (i = wt(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
            for (s = 0; o = t[s++];) {
              for (; r.indexOf(" " + o + " ") > -1;) {
                r = r.replace(" " + o + " ", " ");
              }
            }

            i !== (a = bt(r)) && n.setAttribute("class", a);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var n = _typeof(e),
            r = "string" === n || Array.isArray(e);

        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
          C(this).toggleClass(e.call(this, n, wt(this), t), t);
        }) : this.each(function () {
          var t, i, o, s;
          if (r) for (i = 0, o = C(this), s = Tt(e); t = s[i++];) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = wt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            n,
            r = 0;

        for (t = " " + e + " "; n = this[r++];) {
          if (1 === n.nodeType && (" " + bt(wt(n)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var Ct = /\r/g;
    C.fn.extend({
      val: function val(e) {
        var t,
            n,
            r,
            i = this[0];
        return arguments.length ? (r = y(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        })) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Ct, "") : null == n ? "" : n : void 0;
      }
    }), C.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = C.find.attr(e, "value");
            return null != t ? t : bt(C.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                n,
                r,
                i = e.options,
                o = e.selectedIndex,
                s = "select-one" === e.type,
                a = s ? null : [],
                l = s ? o + 1 : i.length;

            for (r = o < 0 ? l : s ? o : 0; r < l; r++) {
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                if (t = C(n).val(), s) return t;
                a.push(t);
              }
            }

            return a;
          },
          set: function set(e, t) {
            for (var n, r, i = e.options, o = C.makeArray(t), s = i.length; s--;) {
              ((r = i[s]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
            }

            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }), C.each(["radio", "checkbox"], function () {
      C.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
        }
      }, v.checkOn || (C.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), v.focusin = "onfocusin" in n;

    var St = /^(?:focusinfocus|focusoutblur)$/,
        kt = function kt(e) {
      e.stopPropagation();
    };

    C.extend(C.event, {
      trigger: function trigger(e, t, r, i) {
        var o,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            g = [r || s],
            m = h.call(e, "type") ? e.type : e,
            v = h.call(e, "namespace") ? e.namespace.split(".") : [];

        if (a = d = l = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(m + C.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[C.expando] ? e : new C.Event(m, "object" == _typeof(e) && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[m] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
          if (!i && !p.noBubble && !x(r)) {
            for (u = p.delegateType || m, St.test(u + m) || (a = a.parentNode); a; a = a.parentNode) {
              g.push(a), l = a;
            }

            l === (r.ownerDocument || s) && g.push(l.defaultView || l.parentWindow || n);
          }

          for (o = 0; (a = g[o++]) && !e.isPropagationStopped();) {
            d = a, e.type = o > 1 ? u : p.bindType || m, (f = (J.get(a, "events") || {})[e.type] && J.get(a, "handle")) && f.apply(a, t), (f = c && a[c]) && f.apply && G(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
          }

          return e.type = m, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), t) || !G(r) || c && y(r[m]) && !x(r) && ((l = r[c]) && (r[c] = null), C.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, kt), r[m](), e.isPropagationStopped() && d.removeEventListener(m, kt), C.event.triggered = void 0, l && (r[c] = l)), e.result;
        }
      },
      simulate: function simulate(e, t, n) {
        var r = C.extend(new C.Event(), n, {
          type: e,
          isSimulated: !0
        });
        C.event.trigger(r, null, t);
      }
    }), C.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return C.event.trigger(e, t, n, !0);
      }
    }), v.focusin || C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function n(e) {
        C.event.simulate(t, e.target, C.event.fix(e));
      };

      C.event.special[t] = {
        setup: function setup() {
          var r = this.ownerDocument || this,
              i = J.access(r, t);
          i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
        },
        teardown: function teardown() {
          var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;
          i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
        }
      };
    });
    var Et = n.location,
        At = Date.now(),
        Dt = /\?/;

    C.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t;
    };

    var jt = /\[\]$/,
        Nt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;

    function Ht(e, t, n, r) {
      var i;
      if (Array.isArray(t)) C.each(t, function (t, i) {
        n || jt.test(e) ? r(e, i) : Ht(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
      });else if (n || "object" !== T(t)) r(e, t);else for (i in t) {
        Ht(e + "[" + i + "]", t[i], n, r);
      }
    }

    C.param = function (e, t) {
      var n,
          r = [],
          i = function i(e, t) {
        var n = y(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
        i(this.name, this.value);
      });else for (n in e) {
        Ht(n, e[n], t, i);
      }
      return r.join("&");
    }, C.fn.extend({
      serialize: function serialize() {
        return C.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = C.prop(this, "elements");
          return e ? C.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !C(this).is(":disabled") && Lt.test(this.nodeName) && !qt.test(e) && (this.checked || !ge.test(e));
        }).map(function (e, t) {
          var n = C(this).val();
          return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(Nt, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(Nt, "\r\n")
          };
        }).get();
      }
    });

    var Ot = /%20/g,
        Pt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Ft = {},
        Bt = {},
        $t = "*/".concat("*"),
        _t = s.createElement("a");

    function zt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r,
            i = 0,
            o = t.toLowerCase().match(M) || [];
        if (y(n)) for (; r = o[i++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        }
      };
    }

    function Xt(e, t, n, r) {
      var i = {},
          o = e === Bt;

      function s(a) {
        var l;
        return i[a] = !0, C.each(e[a] || [], function (e, a) {
          var u = a(t, n, r);
          return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1);
        }), l;
      }

      return s(t.dataTypes[0]) || !i["*"] && s("*");
    }

    function Ut(e, t) {
      var n,
          r,
          i = C.ajaxSettings.flatOptions || {};

      for (n in t) {
        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      }

      return r && C.extend(!0, e, r), e;
    }

    _t.href = Et.href, C.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": C.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? Ut(Ut(e, C.ajaxSettings), t) : Ut(C.ajaxSettings, e);
      },
      ajaxPrefilter: zt(Ft),
      ajaxTransport: zt(Bt),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var r,
            i,
            o,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h = C.ajaxSetup({}, t),
            g = h.context || h,
            m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
            v = C.Deferred(),
            y = C.Callbacks("once memory"),
            x = h.statusCode || {},
            b = {},
            w = {},
            T = "canceled",
            S = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (c) {
              if (!a) for (a = {}; t = Wt.exec(o);) {
                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = a[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return c ? o : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (c) S.always(e[S.status]);else for (t in e) {
              x[t] = [x[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || T;
            return r && r.abort(t), k(0, t), this;
          }
        };

        if (v.promise(S), h.url = ((e || h.url || Et.href) + "").replace(It, Et.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
          u = s.createElement("a");

          try {
            u.href = h.url, u.href = u.href, h.crossDomain = _t.protocol + "//" + _t.host != u.protocol + "//" + u.host;
          } catch (e) {
            h.crossDomain = !0;
          }
        }

        if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), Xt(Ft, h, t, S), c) return S;

        for (p in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), i = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (d = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Dt.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Rt, "$1"), d = (Dt.test(i) ? "&" : "?") + "_=" + At++ + d), h.url = i + d), h.ifModified && (C.lastModified[i] && S.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && S.setRequestHeader("If-None-Match", C.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
          S.setRequestHeader(p, h.headers[p]);
        }

        if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || c)) return S.abort();

        if (T = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), r = Xt(Bt, h, t, S)) {
          if (S.readyState = 1, f && m.trigger("ajaxSend", [S, h]), c) return S;
          h.async && h.timeout > 0 && (l = n.setTimeout(function () {
            S.abort("timeout");
          }, h.timeout));

          try {
            c = !1, r.send(b, k);
          } catch (e) {
            if (c) throw e;
            k(-1, e);
          }
        } else k(-1, "No Transport");

        function k(e, t, s, a) {
          var u,
              p,
              d,
              b,
              w,
              T = t;
          c || (c = !0, l && n.clearTimeout(l), r = void 0, o = a || "", S.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (b = function (e, t, n) {
            for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (r) for (i in a) {
              if (a[i] && a[i].test(r)) {
                l.unshift(i);
                break;
              }
            }
            if (l[0] in n) o = l[0];else {
              for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                  o = i;
                  break;
                }

                s || (s = i);
              }

              o = o || s;
            }
            if (o) return o !== l[0] && l.unshift(o), n[o];
          }(h, S, s)), b = function (e, t, n, r) {
            var i,
                o,
                s,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();
            if (c[1]) for (s in e.converters) {
              u[s.toLowerCase()] = e.converters[s];
            }

            for (o = c.shift(); o;) {
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                if (!(s = u[l + " " + o] || u["* " + o])) for (i in u) {
                  if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));
                    break;
                  }
                }
                if (!0 !== s) if (s && e["throws"]) t = s(t);else try {
                  t = s(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + o
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(h, b, S, u), u ? (h.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = S.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, u = !(d = b.error))) : (d = T, !e && T || (T = "error", e < 0 && (e = 0))), S.status = e, S.statusText = (t || T) + "", u ? v.resolveWith(g, [p, T, S]) : v.rejectWith(g, [S, T, d]), S.statusCode(x), x = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [S, h, u ? p : d]), y.fireWith(g, [S, T]), f && (m.trigger("ajaxComplete", [S, h]), --C.active || C.event.trigger("ajaxStop")));
        }

        return S;
      },
      getJSON: function getJSON(e, t, n) {
        return C.get(e, t, n, "json");
      },
      getScript: function getScript(e, t) {
        return C.get(e, void 0, t, "script");
      }
    }), C.each(["get", "post"], function (e, t) {
      C[t] = function (e, n, r, i) {
        return y(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: r
        }, C.isPlainObject(e) && e));
      };
    }), C._evalUrl = function (e, t) {
      return C.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          C.globalEval(e, t);
        }
      });
    }, C.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return y(e) ? this.each(function (t) {
          C(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = C(this),
              n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = y(e);
        return this.each(function (n) {
          C(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          C(this).replaceWith(this.childNodes);
        }), this;
      }
    }), C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    }, C.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, C.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };
    var Vt = {
      0: 200,
      1223: 204
    },
        Qt = C.ajaxSettings.xhr();
    v.cors = !!Qt && "withCredentials" in Qt, v.ajax = Qt = !!Qt, C.ajaxTransport(function (e) {
      var _t3, r;

      if (v.cors || Qt && !e.crossDomain) return {
        send: function send(i, o) {
          var s,
              a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
            a[s] = e.xhrFields[s];
          }

          for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) {
            a.setRequestHeader(s, i[s]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Vt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()));
            };
          }, a.onload = _t3(), r = a.onerror = a.ontimeout = _t3("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              _t3 && r();
            });
          }, _t3 = _t3("abort");

          try {
            a.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), C.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), C.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return C.globalEval(e), e;
        }
      }
    }), C.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), C.ajaxTransport("script", function (e) {
      var t, _n;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(r, i) {
          t = C("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
          }), s.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n && _n();
        }
      };
    });
    var Yt,
        Gt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Gt.pop() || C.expando + "_" + At++;
        return this[e] = !0, e;
      }
    }), C.ajaxPrefilter("json jsonp", function (e, t, r) {
      var i,
          o,
          s,
          a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
        return s || C.error(i + " was not called"), s[0];
      }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
        s = arguments;
      }, r.always(function () {
        void 0 === o ? C(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Gt.push(i)), s && y(o) && o(s[0]), s = o = void 0;
      }), "script";
    }), v.createHTMLDocument = ((Yt = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), C.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href, t.head.appendChild(r)) : t = s), o = !n && [], (i = q.exec(e)) ? [t.createElement(i[1])] : (i = Se([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
      var r, i, o;
    }, C.fn.load = function (e, t, n) {
      var r,
          i,
          o,
          s = this,
          a = e.indexOf(" ");
      return a > -1 && (r = bt(e.slice(a)), e = e.slice(0, a)), y(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), s.length > 0 && C.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        o = arguments, s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, o || [e.responseText, t, e]);
        });
      }), this;
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), C.expr.pseudos.animated = function (e) {
      return C.grep(C.timers, function (t) {
        return e === t.elem;
      }).length;
    }, C.offset = {
      setOffset: function setOffset(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            u = C.css(e, "position"),
            c = C(e),
            f = {};
        "static" === u && (e.style.position = "relative"), a = c.offset(), o = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), y(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
      }
    }, C.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          C.offset.setOffset(this, e, t);
        });
        var t,
            n,
            r = this[0];
        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              i = {
            top: 0,
            left: 0
          };
          if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - i.top - C.css(r, "marginTop", !0),
            left: t.left - i.left - C.css(r, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === C.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || se;
        });
      }
    }), C.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;

      C.fn[e] = function (r) {
        return X(this, function (e, r, i) {
          var o;
          if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
          o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
        }, e, r, arguments.length);
      };
    }), C.each(["top", "left"], function (e, t) {
      C.cssHooks[t] = Qe(v.pixelPosition, function (e, n) {
        if (n) return n = Ve(e, t), ze.test(n) ? C(e).position()[t] + "px" : n;
      });
    }), C.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      C.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, r) {
        C.fn[r] = function (i, o) {
          var s = arguments.length && (n || "boolean" != typeof i),
              a = n || (!0 === i || !0 === o ? "margin" : "border");
          return X(this, function (t, n, i) {
            var o;
            return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, a) : C.style(t, n, i, a);
          }, t, s ? i : void 0, s);
        };
      });
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      C.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), C.fn.extend({
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), C.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      }
    }), C.proxy = function (e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = l.call(arguments, 2), (i = function i() {
        return e.apply(t || this, r.concat(l.call(arguments)));
      }).guid = e.guid = e.guid || C.guid++, i;
    }, C.holdReady = function (e) {
      e ? C.readyWait++ : C.ready(!0);
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = N, C.isFunction = y, C.isWindow = x, C.camelCase = Y, C.type = T, C.now = Date.now, C.isNumeric = function (e) {
      var t = C.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, void 0 === (r = function () {
      return C;
    }.apply(t, [])) || (e.exports = r);
    var Jt = n.jQuery,
        Zt = n.$;
    return C.noConflict = function (e) {
      return n.$ === C && (n.$ = Zt), e && n.jQuery === C && (n.jQuery = Jt), C;
    }, i || (n.jQuery = n.$ = C), C;
  });
}, function (e, t) {
  /*!
  Waypoints - 4.0.1
  Copyright © 2011-2016 Caleb Troughton
  Licensed under the MIT license.
  https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
  */
  !function () {
    "use strict";

    var e = 0,
        t = {};

    function n(r) {
      if (!r) throw new Error("No options passed to Waypoint constructor");
      if (!r.element) throw new Error("No element option passed to Waypoint constructor");
      if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");
      this.key = "waypoint-" + e, this.options = n.Adapter.extend({}, n.defaults, r), this.element = this.options.element, this.adapter = new n.Adapter(this.element), this.callback = r.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = n.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
      }), this.context = n.Context.findOrCreateByElement(this.options.context), n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), t[this.key] = this, e += 1;
    }

    n.prototype.queueTrigger = function (e) {
      this.group.queueTrigger(this, e);
    }, n.prototype.trigger = function (e) {
      this.enabled && this.callback && this.callback.apply(this, e);
    }, n.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete t[this.key];
    }, n.prototype.disable = function () {
      return this.enabled = !1, this;
    }, n.prototype.enable = function () {
      return this.context.refresh(), this.enabled = !0, this;
    }, n.prototype.next = function () {
      return this.group.next(this);
    }, n.prototype.previous = function () {
      return this.group.previous(this);
    }, n.invokeAll = function (e) {
      var n = [];

      for (var r in t) {
        n.push(t[r]);
      }

      for (var i = 0, o = n.length; i < o; i++) {
        n[i][e]();
      }
    }, n.destroyAll = function () {
      n.invokeAll("destroy");
    }, n.disableAll = function () {
      n.invokeAll("disable");
    }, n.enableAll = function () {
      for (var e in n.Context.refreshAll(), t) {
        t[e].enabled = !0;
      }

      return this;
    }, n.refreshAll = function () {
      n.Context.refreshAll();
    }, n.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }, n.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }, n.adapters = [], n.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0
    }, n.offsetAliases = {
      "bottom-in-view": function bottomInView() {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function rightInView() {
        return this.context.innerWidth() - this.adapter.outerWidth();
      }
    }, window.Waypoint = n;
  }(), function () {
    "use strict";

    function e(e) {
      window.setTimeout(e, 1e3 / 60);
    }

    var t = 0,
        n = {},
        r = window.Waypoint,
        i = window.onload;

    function o(e) {
      this.element = e, this.Adapter = r.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + t, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
      }, this.waypoints = {
        vertical: {},
        horizontal: {}
      }, e.waypointContextKey = this.key, n[e.waypointContextKey] = this, t += 1, r.windowContext || (r.windowContext = !0, r.windowContext = new o(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
    }

    o.prototype.add = function (e) {
      var t = e.options.horizontal ? "horizontal" : "vertical";
      this.waypoints[t][e.key] = e, this.refresh();
    }, o.prototype.checkEmpty = function () {
      var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          t = this.Adapter.isEmptyObject(this.waypoints.vertical),
          r = this.element == this.element.window;
      e && t && !r && (this.adapter.off(".waypoints"), delete n[this.key]);
    }, o.prototype.createThrottledResizeHandler = function () {
      var e = this;

      function t() {
        e.handleResize(), e.didResize = !1;
      }

      this.adapter.on("resize.waypoints", function () {
        e.didResize || (e.didResize = !0, r.requestAnimationFrame(t));
      });
    }, o.prototype.createThrottledScrollHandler = function () {
      var e = this;

      function t() {
        e.handleScroll(), e.didScroll = !1;
      }

      this.adapter.on("scroll.waypoints", function () {
        e.didScroll && !r.isTouch || (e.didScroll = !0, r.requestAnimationFrame(t));
      });
    }, o.prototype.handleResize = function () {
      r.Context.refreshAll();
    }, o.prototype.handleScroll = function () {
      var e = {},
          t = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left"
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up"
        }
      };

      for (var n in t) {
        var r = t[n],
            i = r.newScroll > r.oldScroll ? r.forward : r.backward;

        for (var o in this.waypoints[n]) {
          var s = this.waypoints[n][o];

          if (null !== s.triggerPoint) {
            var a = r.oldScroll < s.triggerPoint,
                l = r.newScroll >= s.triggerPoint;
            (a && l || !a && !l) && (s.queueTrigger(i), e[s.group.id] = s.group);
          }
        }
      }

      for (var u in e) {
        e[u].flushTriggers();
      }

      this.oldScroll = {
        x: t.horizontal.newScroll,
        y: t.vertical.newScroll
      };
    }, o.prototype.innerHeight = function () {
      return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight();
    }, o.prototype.remove = function (e) {
      delete this.waypoints[e.axis][e.key], this.checkEmpty();
    }, o.prototype.innerWidth = function () {
      return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth();
    }, o.prototype.destroy = function () {
      var e = [];

      for (var t in this.waypoints) {
        for (var n in this.waypoints[t]) {
          e.push(this.waypoints[t][n]);
        }
      }

      for (var r = 0, i = e.length; r < i; r++) {
        e[r].destroy();
      }
    }, o.prototype.refresh = function () {
      var e,
          t = this.element == this.element.window,
          n = t ? void 0 : this.adapter.offset(),
          i = {};

      for (var o in this.handleScroll(), e = {
        horizontal: {
          contextOffset: t ? 0 : n.left,
          contextScroll: t ? 0 : this.oldScroll.x,
          contextDimension: this.innerWidth(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left",
          offsetProp: "left"
        },
        vertical: {
          contextOffset: t ? 0 : n.top,
          contextScroll: t ? 0 : this.oldScroll.y,
          contextDimension: this.innerHeight(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up",
          offsetProp: "top"
        }
      }) {
        var s = e[o];

        for (var a in this.waypoints[o]) {
          var l,
              u,
              c,
              f,
              p = this.waypoints[o][a],
              d = p.options.offset,
              h = p.triggerPoint,
              g = 0,
              m = null == h;
          p.element !== p.element.window && (g = p.adapter.offset()[s.offsetProp]), "function" == typeof d ? d = d.apply(p) : "string" == typeof d && (d = parseFloat(d), p.options.offset.indexOf("%") > -1 && (d = Math.ceil(s.contextDimension * d / 100))), l = s.contextScroll - s.contextOffset, p.triggerPoint = Math.floor(g + l - d), u = h < s.oldScroll, c = p.triggerPoint >= s.oldScroll, f = !u && !c, !m && u && c ? (p.queueTrigger(s.backward), i[p.group.id] = p.group) : !m && f ? (p.queueTrigger(s.forward), i[p.group.id] = p.group) : m && s.oldScroll >= p.triggerPoint && (p.queueTrigger(s.forward), i[p.group.id] = p.group);
        }
      }

      return r.requestAnimationFrame(function () {
        for (var e in i) {
          i[e].flushTriggers();
        }
      }), this;
    }, o.findOrCreateByElement = function (e) {
      return o.findByElement(e) || new o(e);
    }, o.refreshAll = function () {
      for (var e in n) {
        n[e].refresh();
      }
    }, o.findByElement = function (e) {
      return n[e.waypointContextKey];
    }, window.onload = function () {
      i && i(), o.refreshAll();
    }, r.requestAnimationFrame = function (t) {
      (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t);
    }, r.Context = o;
  }(), function () {
    "use strict";

    function e(e, t) {
      return e.triggerPoint - t.triggerPoint;
    }

    function t(e, t) {
      return t.triggerPoint - e.triggerPoint;
    }

    var n = {
      vertical: {},
      horizontal: {}
    },
        r = window.Waypoint;

    function i(e) {
      this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this;
    }

    i.prototype.add = function (e) {
      this.waypoints.push(e);
    }, i.prototype.clearTriggerQueues = function () {
      this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
      };
    }, i.prototype.flushTriggers = function () {
      for (var n in this.triggerQueues) {
        var r = this.triggerQueues[n],
            i = "up" === n || "left" === n;
        r.sort(i ? t : e);

        for (var o = 0, s = r.length; o < s; o += 1) {
          var a = r[o];
          (a.options.continuous || o === r.length - 1) && a.trigger([n]);
        }
      }

      this.clearTriggerQueues();
    }, i.prototype.next = function (t) {
      this.waypoints.sort(e);
      var n = r.Adapter.inArray(t, this.waypoints);
      return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1];
    }, i.prototype.previous = function (t) {
      this.waypoints.sort(e);
      var n = r.Adapter.inArray(t, this.waypoints);
      return n ? this.waypoints[n - 1] : null;
    }, i.prototype.queueTrigger = function (e, t) {
      this.triggerQueues[t].push(e);
    }, i.prototype.remove = function (e) {
      var t = r.Adapter.inArray(e, this.waypoints);
      t > -1 && this.waypoints.splice(t, 1);
    }, i.prototype.first = function () {
      return this.waypoints[0];
    }, i.prototype.last = function () {
      return this.waypoints[this.waypoints.length - 1];
    }, i.findOrCreate = function (e) {
      return n[e.axis][e.name] || new i(e);
    }, r.Group = i;
  }(), function () {
    "use strict";

    var e = window.Waypoint;

    function t(e) {
      return e === e.window;
    }

    function n(e) {
      return t(e) ? e : e.defaultView;
    }

    function r(e) {
      this.element = e, this.handlers = {};
    }

    r.prototype.innerHeight = function () {
      return t(this.element) ? this.element.innerHeight : this.element.clientHeight;
    }, r.prototype.innerWidth = function () {
      return t(this.element) ? this.element.innerWidth : this.element.clientWidth;
    }, r.prototype.off = function (e, t) {
      function n(e, t, n) {
        for (var r = 0, i = t.length - 1; r < i; r++) {
          var o = t[r];
          n && n !== o || e.removeEventListener(o);
        }
      }

      var r = e.split("."),
          i = r[0],
          o = r[1],
          s = this.element;
      if (o && this.handlers[o] && i) n(s, this.handlers[o][i], t), this.handlers[o][i] = [];else if (i) for (var a in this.handlers) {
        n(s, this.handlers[a][i] || [], t), this.handlers[a][i] = [];
      } else if (o && this.handlers[o]) {
        for (var l in this.handlers[o]) {
          n(s, this.handlers[o][l], t);
        }

        this.handlers[o] = {};
      }
    }, r.prototype.offset = function () {
      if (!this.element.ownerDocument) return null;
      var e = this.element.ownerDocument.documentElement,
          t = n(this.element.ownerDocument),
          r = {
        top: 0,
        left: 0
      };
      return this.element.getBoundingClientRect && (r = this.element.getBoundingClientRect()), {
        top: r.top + t.pageYOffset - e.clientTop,
        left: r.left + t.pageXOffset - e.clientLeft
      };
    }, r.prototype.on = function (e, t) {
      var n = e.split("."),
          r = n[0],
          i = n[1] || "__default",
          o = this.handlers[i] = this.handlers[i] || {};
      (o[r] = o[r] || []).push(t), this.element.addEventListener(r, t);
    }, r.prototype.outerHeight = function (e) {
      var n,
          r = this.innerHeight();
      return e && !t(this.element) && (n = window.getComputedStyle(this.element), r += parseInt(n.marginTop, 10), r += parseInt(n.marginBottom, 10)), r;
    }, r.prototype.outerWidth = function (e) {
      var n,
          r = this.innerWidth();
      return e && !t(this.element) && (n = window.getComputedStyle(this.element), r += parseInt(n.marginLeft, 10), r += parseInt(n.marginRight, 10)), r;
    }, r.prototype.scrollLeft = function () {
      var e = n(this.element);
      return e ? e.pageXOffset : this.element.scrollLeft;
    }, r.prototype.scrollTop = function () {
      var e = n(this.element);
      return e ? e.pageYOffset : this.element.scrollTop;
    }, r.extend = function () {
      var e = Array.prototype.slice.call(arguments);

      function t(e, t) {
        if ("object" == _typeof(e) && "object" == _typeof(t)) for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }
        return e;
      }

      for (var n = 1, r = e.length; n < r; n++) {
        t(e[0], e[n]);
      }

      return e[0];
    }, r.inArray = function (e, t, n) {
      return null == t ? -1 : t.indexOf(e, n);
    }, r.isEmptyObject = function (e) {
      for (var t in e) {
        return !1;
      }

      return !0;
    }, e.adapters.push({
      name: "noframework",
      Adapter: r
    }), e.Adapter = r;
  }();
}, function (e, t, n) {
  var r, i, o;
  /*!
   * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
   * https://github.com/kswedberg/jquery-smooth-scroll
   * Copyright (c) 2017 Karl Swedberg
   * Licensed MIT
   */

  i = [n(0)], void 0 === (o = "function" == typeof (r = function r(e) {
    var t = {},
        n = function n(t) {
      var n = [],
          r = t.dir && "left" === t.dir ? "scrollLeft" : "scrollTop";
      return this.each(function () {
        var t = e(this);
        if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void (t[r]() > 0 ? n.push(this) : (t[r](1), t[r]() > 0 && n.push(this), t[r](0))) : (n.push(document.scrollingElement), !1);
      }), n.length || this.each(function () {
        this === document.documentElement && "smooth" === e(this).css("scrollBehavior") && (n = [this]), n.length || "BODY" !== this.nodeName || (n = [this]);
      }), "first" === t.el && n.length > 1 && (n = [n[0]]), n;
    },
        r = /^([\-\+]=)(\d+)/;

    e.fn.extend({
      scrollable: function scrollable(e) {
        var t = n.call(this, {
          dir: e
        });
        return this.pushStack(t);
      },
      firstScrollable: function firstScrollable(e) {
        var t = n.call(this, {
          el: "first",
          dir: e
        });
        return this.pushStack(t);
      },
      smoothScroll: function smoothScroll(t, n) {
        if ("options" === (t = t || {})) return n ? this.each(function () {
          var t = e(this),
              r = e.extend(t.data("ssOpts") || {}, n);
          e(this).data("ssOpts", r);
        }) : this.first().data("ssOpts");

        var r = e.extend({}, e.fn.smoothScroll.defaults, t),
            i = function i(t) {
          var n = function n(e) {
            return e.replace(/(:|\.|\/)/g, "\\$1");
          },
              i = e(this),
              o = e.extend({}, r, i.data("ssOpts") || {}),
              s = r.exclude,
              a = o.excludeWithin,
              l = 0,
              u = 0,
              c = !0,
              f = {},
              p = e.smoothScroll.filterPath(location.pathname),
              d = e.smoothScroll.filterPath(this.pathname),
              h = location.hostname === this.hostname || !this.hostname,
              g = o.scrollTarget || d === p,
              m = n(this.hash);

          if (m && !e(m).length && (c = !1), o.scrollTarget || h && g && m) {
            for (; c && l < s.length;) {
              i.is(n(s[l++])) && (c = !1);
            }

            for (; c && u < a.length;) {
              i.closest(a[u++]).length && (c = !1);
            }
          } else c = !1;

          c && (o.preventDefault && t.preventDefault(), e.extend(f, o, {
            scrollTarget: o.scrollTarget || m,
            link: this
          }), e.smoothScroll(f));
        };

        return null !== t.delegateSelector ? this.off("click.smoothscroll", t.delegateSelector).on("click.smoothscroll", t.delegateSelector, i) : this.off("click.smoothscroll").on("click.smoothscroll", i), this;
      }
    });

    var i = function i(e) {
      var t = {
        relative: ""
      },
          n = "string" == typeof e && r.exec(e);
      return "number" == typeof e ? t.px = e : n && (t.relative = n[1], t.px = parseFloat(n[2]) || 0), t;
    },
        o = function o(t) {
      var n = e(t.scrollTarget);
      t.autoFocus && n.length && (n[0].focus(), n.is(document.activeElement) || (n.prop({
        tabIndex: -1
      }), n[0].focus())), t.afterScroll.call(t.link, t);
    };

    e.smoothScroll = function (n, r) {
      if ("options" === n && "object" == _typeof(r)) return e.extend(t, r);
      var s,
          a,
          l,
          u,
          c = i(n),
          f = 0,
          p = "offset",
          d = "scrollTop",
          h = {},
          g = {};
      c.px ? s = e.extend({
        link: null
      }, e.fn.smoothScroll.defaults, t) : ((s = e.extend({
        link: null
      }, e.fn.smoothScroll.defaults, n || {}, t)).scrollElement && (p = "position", "static" === s.scrollElement.css("position") && s.scrollElement.css("position", "relative")), r && (c = i(r))), d = "left" === s.direction ? "scrollLeft" : d, s.scrollElement ? (a = s.scrollElement, c.px || /^(?:HTML|BODY)$/.test(a[0].nodeName) || (f = a[d]())) : a = e("html, body").firstScrollable(s.direction), s.beforeScroll.call(a, s), u = c.px ? c : {
        relative: "",
        px: e(s.scrollTarget)[p]() && e(s.scrollTarget)[p]()[s.direction] || 0
      }, h[d] = u.relative + (u.px + f + s.offset), "auto" === (l = s.speed) && (l = Math.abs(h[d] - a[d]()) / s.autoCoefficient), g = {
        duration: l,
        easing: s.easing,
        complete: function complete() {
          o(s);
        }
      }, s.step && (g.step = s.step), a.length ? a.stop().animate(h, g) : o(s);
    }, e.smoothScroll.version = "2.2.0", e.smoothScroll.filterPath = function (e) {
      return (e = e || "").replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
    }, e.fn.smoothScroll.defaults = {
      exclude: [],
      excludeWithin: [],
      offset: 0,
      direction: "top",
      delegateSelector: null,
      scrollElement: null,
      scrollTarget: null,
      autoFocus: !1,
      beforeScroll: function beforeScroll() {},
      afterScroll: function afterScroll() {},
      easing: "swing",
      speed: 400,
      autoCoefficient: 2,
      preventDefault: !0
    };
  }) ? r.apply(t, i) : r) || (e.exports = o);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(0),
      i = n.n(r);
  n(1);

  var o =
  /*#__PURE__*/
  function () {
    function o(e, t, n) {
      _classCallCheck(this, o);

      this.items = e, this.offset = t, this.animationClass = n, this.initialState(), this.createWaypoints();
    }

    _createClass(o, [{
      key: "initialState",
      value: function initialState() {
        this.items.addClass(this.animationClass);
      }
    }, {
      key: "createWaypoints",
      value: function createWaypoints() {
        var e = this;
        this.items.each(function (t, n) {
          new Waypoint({
            element: n,
            handler: function handler() {
              i()(n).addClass("".concat(e.animationClass, "--is-visible"));
            },
            offset: e.offset
          });
        });
      }
    }]);

    return o;
  }();

  var s =
  /*#__PURE__*/
  function () {
    function s(e, t, n) {
      _classCallCheck(this, s);

      this.elements = e, this.offset = t, this.info = n, this.completed = !1, this.intialState(), this.createWaypoints();
    }

    _createClass(s, [{
      key: "intialState",
      value: function intialState() {
        this.elements.text("2,000");
      }
    }, {
      key: "createWaypoints",
      value: function createWaypoints() {
        var e = this;
        this.elements.each(function (t, n) {
          new Waypoint({
            element: n,
            handler: function handler(t) {
              if (!e.completed) {
                var _t4 = 2;

                var _r = setInterval(function () {
                  i()(n).text(e.adjust(_t4)), (_t4 += e.info.speed) > e.info.number && clearInterval(_r);
                }, 1);

                e.completed = !0;
              }
            },
            offset: e.offset
          });
        });
      }
    }, {
      key: "adjust",
      value: function adjust(e) {
        if (e < 999) return e;
        {
          var _t5 = e.toString(10).split(""),
              _n2 = 0;

          for (var _e2 = _t5.length - 1; _e2 > -1; _e2--) {
            3 === ++_n2 & 0 !== _e2 && (_t5.splice(_e2, 0, ","), _n2 = 0);
          }

          return _t5.join("");
        }
      }
    }]);

    return s;
  }();

  n(2);

  var a =
  /*#__PURE__*/
  function () {
    function a() {
      _classCallCheck(this, a);

      this.pageSections = i()(".page-section"), this.links = i()(".header__link"), this.createPageSectionsWaypoints(), this.enableSmoothScroll();
    }

    _createClass(a, [{
      key: "createPageSectionsWaypoints",
      value: function createPageSectionsWaypoints() {
        var e = this;
        this.pageSections.each(function (t, n) {
          new Waypoint({
            element: n,
            handler: function handler(t) {
              var r = i()(n.dataset.link);
              "down" === t ? (e.links.removeClass("highlight-on-scroll"), r.addClass("highlight-on-scroll")) : "#our-features-link" === n.dataset.link && r.removeClass("highlight-on-scroll");
            },
            offset: "25%"
          }), new Waypoint({
            element: n,
            handler: function handler(t) {
              "up" === t && (e.links.removeClass("highlight-on-scroll"), i()(n.dataset.link).addClass("highlight-on-scroll"));
            },
            offset: "-40%"
          });
        });
      }
    }, {
      key: "enableSmoothScroll",
      value: function enableSmoothScroll() {
        this.links.smoothScroll();
      }
    }]);

    return a;
  }();

  new o(i()(".grid__item"), "75%", "reveal-item"), new o(i()(".slide-right"), "80%", "slide-right-on-scroll"), new o(i()(".slide-left"), "55%", "slide-left-on-scroll"), new s(i()("#total-collections"), "90%", {
    number: 589393600,
    speed: 1233041
  }), new s(i()("#helped-people"), "90%", {
    number: 1393600,
    speed: 3041
  }), new s(i()("#total-volunteers"), "90%", {
    number: 304823,
    speed: 641
  }), new s(i()("#succeeded-missions"), "90%", {
    number: 834329,
    speed: 1832
  }), new a();
}]);