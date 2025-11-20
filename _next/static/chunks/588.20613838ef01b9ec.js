(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[588], {
    4588: function(a, b, c) {
        !function(b, d) {
            a.exports = d(c(5893), c(7294))
        }(this, function(a, b) {
            "use strict";
            var c = function() {
                return (c = Object.assign || function(a) {
                    for (var b, c = 1, d = arguments.length; c < d; c++)
                        for (var e in b = arguments[c])
                            Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
                    return a
                }
                ).apply(this, arguments)
            };
            function d(a, c, d) {
                var e = b.useRef(c);
                b.useEffect(function() {
                    e.current = c
                }),
                b.useEffect(function() {
                    var b = void 0 === d ? window : d
                      , c = function(a) {
                        return e.current(a)
                    };
                    return null == b || b.addEventListener(a, c),
                    function() {
                        null == b || b.removeEventListener(a, c)
                    }
                }, [a, d])
            }
            var e = function() {
                var a = b.useState({
                    info: "",
                    Android: function() {
                        return null
                    },
                    BlackBerry: function() {
                        return null
                    },
                    IEMobile: function() {
                        return null
                    },
                    iOS: function() {
                        return null
                    },
                    iPad: function() {
                        return null
                    },
                    OperaMini: function() {
                        return null
                    },
                    any: function() {
                        return !1
                    }
                })
                  , d = a[0]
                  , e = a[1];
                return b.useEffect(function() {
                    if ("undefined" != typeof navigator) {
                        var a = navigator.userAgent;
                        e(function(b) {
                            return c(c({}, b), {
                                info: a,
                                Android: function() {
                                    return a.match(/Android/i)
                                },
                                BlackBerry: function() {
                                    return a.match(/BlackBerry/i)
                                },
                                IEMobile: function() {
                                    return a.match(/IEMobile/i)
                                },
                                iOS: function() {
                                    return a.match(/iPhone|iPad|iPod/i)
                                },
                                iPad: function() {
                                    return !!(a.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2)
                                },
                                OperaMini: function() {
                                    return a.match(/Opera Mini/i)
                                },
                                any: function() {
                                    var a, c, d, e, f;
                                    return !!((null === (a = b.Android()) || void 0 === a ? void 0 : a.length) || (null === (c = b.BlackBerry()) || void 0 === c ? void 0 : c.length) || (null === (d = b.iOS()) || void 0 === d ? void 0 : d.length) || b.iPad() || (null === (e = b.OperaMini()) || void 0 === e ? void 0 : e.length) || (null === (f = b.IEMobile()) || void 0 === f ? void 0 : f.length))
                                }
                            })
                        })
                    }
                }, []),
                d
            };
            function f(a, b) {
                for (var c = [], d = 2; d < arguments.length; d++)
                    c[d - 2] = arguments[d];
                if ("function" != typeof b)
                    throw TypeError("callback must be a function");
                for (var e = Object(a), f = e.length >>> 0, g = c[2], h = 0; h < f; h++) {
                    var i = e[h];
                    if (b.call(g, i, h, e))
                        return i
                }
            }
            function g(e) {
                var g = e.clickables
                  , h = void 0 === g ? ["a", 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', "label[for]", "select", "textarea", "button", ".link"] : g
                  , i = e.children
                  , j = e.color
                  , k = void 0 === j ? "220, 90, 90" : j
                  , l = e.innerScale
                  , m = void 0 === l ? .6 : l
                  , n = e.innerSize
                  , o = void 0 === n ? 8 : n
                  , p = e.innerStyle
                  , q = e.outerAlpha
                  , r = void 0 === q ? .4 : q
                  , s = e.outerScale
                  , t = void 0 === s ? 6 : s
                  , u = e.outerSize
                  , v = void 0 === u ? 8 : u
                  , w = e.outerStyle
                  , x = e.showSystemCursor
                  , y = void 0 !== x && x
                  , z = e.trailingSpeed
                  , A = void 0 === z ? 8 : z
                  , B = b.useMemo(function() {
                    return {
                        children: i,
                        color: k,
                        innerScale: m,
                        innerSize: o,
                        innerStyle: p,
                        outerAlpha: r,
                        outerScale: t,
                        outerSize: v,
                        outerStyle: w
                    }
                }, [i, k, m, o, p, r, t, v, w])
                  , C = b.useRef(null)
                  , D = b.useRef(null)
                  , E = b.useRef(null)
                  , F = b.useRef(null)
                  , G = b.useState({
                    x: 0,
                    y: 0
                })
                  , H = G[0]
                  , I = G[1]
                  , J = b.useState(!1)
                  , K = J[0]
                  , L = J[1]
                  , M = b.useState(B)
                  , N = M[0]
                  , O = M[1]
                  , P = b.useState(!1)
                  , Q = P[0]
                  , R = P[1]
                  , S = b.useState(!1)
                  , T = S[0]
                  , U = S[1]
                  , V = b.useRef(0)
                  , W = b.useRef(0)
                  , X = b.useCallback(function(a) {
                    var b = a.clientX
                      , c = a.clientY;
                    I({
                        x: b,
                        y: c
                    }),
                    null !== D.current && (D.current.style.top = "".concat(c, "px"),
                    D.current.style.left = "".concat(b, "px")),
                    V.current = b,
                    W.current = c
                }, [])
                  , Y = b.useCallback(function(a) {
                    void 0 !== F.current && (H.x += (V.current - H.x) / A,
                    H.y += (W.current - H.y) / A,
                    null !== C.current && (C.current.style.top = "".concat(H.y, "px"),
                    C.current.style.left = "".concat(H.x, "px"))),
                    F.current = a,
                    E.current = requestAnimationFrame(Y)
                }, [E]);
                b.useEffect(function() {
                    return E.current = requestAnimationFrame(Y),
                    function() {
                        null !== E.current && cancelAnimationFrame(E.current)
                    }
                }, [Y]);
                var Z = function(a, b) {
                    return "".concat(parseInt(String(a * b)), "px")
                }
                  , $ = b.useCallback(function(a, b, c) {
                    a && (a.style.height = Z(b, c),
                    a.style.width = Z(b, c))
                }, [])
                  , _ = b.useCallback(function() {
                    return R(!0)
                }, [])
                  , aa = b.useCallback(function() {
                    return R(!1)
                }, [])
                  , ab = b.useCallback(function() {
                    return L(!0)
                }, [])
                  , ac = b.useCallback(function() {
                    return L(!1)
                }, []);
                d("mousemove", X),
                d("mousedown", _),
                d("mouseup", aa),
                d("mouseover", ab),
                d("mouseout", ac),
                b.useEffect(function() {
                    Q ? ($(D.current, N.innerSize, N.innerScale),
                    $(C.current, N.outerSize, N.outerScale)) : ($(D.current, N.innerSize, 1),
                    $(C.current, N.outerSize, 1))
                }, [N.innerSize, N.innerScale, N.outerSize, N.outerScale, $, Q]),
                b.useEffect(function() {
                    T && ($(D.current, N.innerSize, 1.2 * N.innerScale),
                    $(C.current, N.outerSize, 1.4 * N.outerScale))
                }, [N.innerSize, N.innerScale, N.outerSize, N.outerScale, $, T]),
                b.useEffect(function() {
                    null != D.current && null != C.current && (K ? (D.current.style.opacity = "1",
                    C.current.style.opacity = "1") : (D.current.style.opacity = "0",
                    C.current.style.opacity = "0"))
                }, [K]),
                b.useEffect(function() {
                    var a = document.querySelectorAll(h.map(function(a) {
                        return "object" == typeof a && (null == a ? void 0 : a.target) ? a.target : null != a ? a : ""
                    }).join(","));
                    return a.forEach(function(a) {
                        y || (a.style.cursor = "none");
                        var b = "object" == typeof h ? f(h, function(b) {
                            return "object" == typeof b && a.matches(b.target)
                        }) : {}
                          , d = c(c({}, B), b);
                        a.addEventListener("mouseover", function() {
                            R(!0),
                            O(d)
                        }),
                        a.addEventListener("click", function() {
                            R(!0),
                            U(!1)
                        }),
                        a.addEventListener("mousedown", function() {
                            U(!0)
                        }),
                        a.addEventListener("mouseup", function() {
                            R(!0)
                        }),
                        a.addEventListener("mouseout", function() {
                            R(!1),
                            U(!1),
                            O(B)
                        })
                    }),
                    function() {
                        a.forEach(function(a) {
                            var b = "object" == typeof h ? f(h, function(b) {
                                return "object" == typeof b && a.matches(b.target)
                            }) : {}
                              , d = c(c({}, B), b);
                            a.removeEventListener("mouseover", function() {
                                R(!0),
                                O(d)
                            }),
                            a.removeEventListener("click", function() {
                                R(!0),
                                U(!1)
                            }),
                            a.removeEventListener("mousedown", function() {
                                U(!0)
                            }),
                            a.removeEventListener("mouseup", function() {
                                R(!0)
                            }),
                            a.removeEventListener("mouseout", function() {
                                R(!1),
                                U(!1),
                                O(B)
                            })
                        })
                    }
                }, [Q, h, y, B]),
                b.useEffect(function() {
                    "object" != typeof window || y || (document.body.style.cursor = "none")
                }, [y]);
                var ad = {
                    zIndex: 999,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "fixed",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    transition: "opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out"
                }
                  , ae = {
                    cursorInner: c(c({
                        width: N.children ? "auto" : N.innerSize,
                        height: N.children ? "auto" : N.innerSize,
                        backgroundColor: N.children ? "transparent" : "rgba(".concat(N.color, ", 1)")
                    }, ad), N.innerStyle && N.innerStyle),
                    cursorOuter: c(c({
                        width: N.outerSize,
                        height: N.outerSize,
                        backgroundColor: "rgba(".concat(N.color, ", ").concat(N.outerAlpha, ")")
                    }, ad), N.outerStyle && N.outerStyle)
                };
                return a.jsxs(a.Fragment, {
                    children: [a.jsx("div", {
                        ref: C,
                        style: ae.cursorOuter
                    }), a.jsx("div", c({
                        ref: D,
                        style: ae.cursorInner
                    }, {
                        children: a.jsx("div", c({
                            style: {
                                opacity: N.children ? 1 : 0,
                                transition: "opacity 0.3s ease-in-out"
                            }
                        }, {
                            children: N.children
                        }))
                    }))]
                })
            }
            return function(b) {
                var d = b.children
                  , f = b.clickables
                  , h = b.color
                  , i = b.innerScale
                  , j = b.innerSize
                  , k = b.innerStyle
                  , l = b.outerAlpha
                  , m = b.outerScale
                  , n = b.outerSize
                  , o = b.outerStyle
                  , p = b.showSystemCursor
                  , q = b.trailingSpeed
                  , r = e();
                return "undefined" != typeof navigator && r.any() ? a.jsx(a.Fragment, {}) : a.jsx(g, c({
                    clickables: f,
                    color: h,
                    innerScale: i,
                    innerSize: j,
                    innerStyle: k,
                    outerAlpha: l,
                    outerScale: m,
                    outerSize: n,
                    outerStyle: o,
                    showSystemCursor: p,
                    trailingSpeed: q
                }, {
                    children: d
                }))
            }
        })
    }
}])
