(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[332], {
    5577: function(a) {
        !/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
        function(b, c) {
            a.exports = c()
        }(this, function() {
            "use strict";
            let a = new Map
              , b = {
                set(b, c, d) {
                    a.has(b) || a.set(b, new Map);
                    let e = a.get(b);
                    if (!e.has(c) && 0 !== e.size) {
                        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(e.keys())[0]}.`);
                        return
                    }
                    e.set(c, d)
                },
                get: (b, c) => a.has(b) && a.get(b).get(c) || null,
                remove(b, c) {
                    if (!a.has(b))
                        return;
                    let d = a.get(b);
                    d.delete(c),
                    0 === d.size && a.delete(b)
                }
            }
              , c = "transitionend"
              , d = a => (a && window.CSS && window.CSS.escape && (a = a.replace(/#([^\s"#']+)/g, (a, b) => `#${CSS.escape(b)}`)),
            a)
              , e = a => null == a ? `${a}` : Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()
              , f = a => {
                do
                    a += Math.floor(1e6 * Math.random());
                while (document.getElementById(a))return a
            }
              , g = a => {
                if (!a)
                    return 0;
                let {transitionDuration: b, transitionDelay: c} = window.getComputedStyle(a)
                  , d = Number.parseFloat(b)
                  , e = Number.parseFloat(c);
                return d || e ? (b = b.split(",")[0],
                c = c.split(",")[0],
                (Number.parseFloat(b) + Number.parseFloat(c)) * 1e3) : 0
            }
              , h = a => {
                a.dispatchEvent(new Event(c))
            }
              , i = a => !!a && "object" == typeof a && (void 0 !== a.jquery && (a = a[0]),
            void 0 !== a.nodeType)
              , j = a => i(a) ? a.jquery ? a[0] : a : "string" == typeof a && a.length > 0 ? document.querySelector(d(a)) : null
              , k = a => {
                if (!i(a) || 0 === a.getClientRects().length)
                    return !1;
                let b = "visible" === getComputedStyle(a).getPropertyValue("visibility")
                  , c = a.closest("details:not([open])");
                if (!c)
                    return b;
                if (c !== a) {
                    let d = a.closest("summary");
                    if (d && d.parentNode !== c || null === d)
                        return !1
                }
                return b
            }
              , l = a => !!(!a || a.nodeType !== Node.ELEMENT_NODE || a.classList.contains("disabled")) || (void 0 !== a.disabled ? a.disabled : a.hasAttribute("disabled") && "false" !== a.getAttribute("disabled"))
              , m = a => {
                if (!document.documentElement.attachShadow)
                    return null;
                if ("function" == typeof a.getRootNode) {
                    let b = a.getRootNode();
                    return b instanceof ShadowRoot ? b : null
                }
                return a instanceof ShadowRoot ? a : a.parentNode ? m(a.parentNode) : null
            }
              , n = () => {}
              , o = a => {
                a.offsetHeight
            }
              , p = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null
              , q = []
              , r = a => {
                "loading" === document.readyState ? (q.length || document.addEventListener("DOMContentLoaded", () => {
                    for (let a of q)
                        a()
                }
                ),
                q.push(a)) : a()
            }
              , s = () => "rtl" === document.documentElement.dir
              , t = a => {
                r( () => {
                    let b = p();
                    if (b) {
                        let c = a.NAME
                          , d = b.fn[c];
                        b.fn[c] = a.jQueryInterface,
                        b.fn[c].Constructor = a,
                        b.fn[c].noConflict = () => (b.fn[c] = d,
                        a.jQueryInterface)
                    }
                }
                )
            }
              , u = (a, b=[], c=a) => "function" == typeof a ? a(...b) : c
              , v = (a, b, d=!0) => {
                if (!d) {
                    u(a);
                    return
                }
                let e = g(b) + 5
                  , f = !1
                  , i = ({target: d}) => {
                    d === b && (f = !0,
                    b.removeEventListener(c, i),
                    u(a))
                }
                ;
                b.addEventListener(c, i),
                setTimeout( () => {
                    f || h(b)
                }
                , e)
            }
              , w = (a, b, c, d) => {
                let e = a.length
                  , f = a.indexOf(b);
                return -1 === f ? !c && d ? a[e - 1] : a[0] : (f += c ? 1 : -1,
                d && (f = (f + e) % e),
                a[Math.max(0, Math.min(f, e - 1))])
            }
              , x = /[^.]*(?=\..*)\.|.*/
              , y = /\..*/
              , z = /::\d+$/
              , A = {}
              , B = 1
              , C = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }
              , D = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
            function E(a, b) {
                return b && `${b}::${B++}` || a.uidEvent || B++
            }
            function F(a) {
                let b = E(a);
                return a.uidEvent = b,
                A[b] = A[b] || {},
                A[b]
            }
            function G(a, b, c=null) {
                return Object.values(a).find(a => a.callable === b && a.delegationSelector === c)
            }
            function H(a, b, c) {
                let d = "string" == typeof b
                  , e = L(a);
                return D.has(e) || (e = a),
                [d, d ? c : b || c, e]
            }
            function I(a, b, c, d, e) {
                var f, g, h, i, j;
                if ("string" != typeof b || !a)
                    return;
                let[k,l,m] = H(b, c, d);
                if (b in C) {
                    let n = a => function(b) {
                        if (!b.relatedTarget || b.relatedTarget !== b.delegateTarget && !b.delegateTarget.contains(b.relatedTarget))
                            return a.call(this, b)
                    }
                    ;
                    l = n(l)
                }
                let o = F(a)
                  , p = o[m] || (o[m] = {})
                  , q = G(p, l, k ? c : null);
                if (q) {
                    q.oneOff = q.oneOff && e;
                    return
                }
                let r = E(l, b.replace(x, ""))
                  , s = k ? (f = a,
                g = c,
                h = l,
                function a(b) {
                    let c = f.querySelectorAll(g);
                    for (let {target: d} = b; d && d !== this; d = d.parentNode)
                        for (let e of c)
                            if (e === d)
                                return N(b, {
                                    delegateTarget: d
                                }),
                                a.oneOff && M.off(f, b.type, g, h),
                                h.apply(d, [b])
                }
                ) : (i = a,
                j = l,
                function a(b) {
                    return N(b, {
                        delegateTarget: i
                    }),
                    a.oneOff && M.off(i, b.type, j),
                    j.apply(i, [b])
                }
                );
                s.delegationSelector = k ? c : null,
                s.callable = l,
                s.oneOff = e,
                s.uidEvent = r,
                p[r] = s,
                a.addEventListener(m, s, k)
            }
            function J(a, b, c, d, e) {
                let f = G(b[c], d, e);
                f && (a.removeEventListener(c, f, Boolean(e)),
                delete b[c][f.uidEvent])
            }
            function K(a, b, c, d) {
                let e = b[c] || {};
                for (let[f,g] of Object.entries(e))
                    f.includes(d) && J(a, b, c, g.callable, g.delegationSelector)
            }
            function L(a) {
                return C[a = a.replace(y, "")] || a
            }
            let M = {
                on(a, b, c, d) {
                    I(a, b, c, d, !1)
                },
                one(a, b, c, d) {
                    I(a, b, c, d, !0)
                },
                off(a, b, c, d) {
                    if ("string" != typeof b || !a)
                        return;
                    let[e,f,g] = H(b, c, d)
                      , h = g !== b
                      , i = F(a)
                      , j = i[g] || {}
                      , k = b.startsWith(".");
                    if (void 0 !== f) {
                        if (!Object.keys(j).length)
                            return;
                        J(a, i, g, f, e ? c : null);
                        return
                    }
                    if (k)
                        for (let l of Object.keys(i))
                            K(a, i, l, b.slice(1));
                    for (let[m,n] of Object.entries(j)) {
                        let o = m.replace(z, "");
                        (!h || b.includes(o)) && J(a, i, g, n.callable, n.delegationSelector)
                    }
                },
                trigger(a, b, c) {
                    if ("string" != typeof b || !a)
                        return null;
                    let d = p()
                      , e = L(b)
                      , f = null
                      , g = !0
                      , h = !0
                      , i = !1;
                    b !== e && d && (f = d.Event(b, c),
                    d(a).trigger(f),
                    g = !f.isPropagationStopped(),
                    h = !f.isImmediatePropagationStopped(),
                    i = f.isDefaultPrevented());
                    let j = N(new Event(b,{
                        bubbles: g,
                        cancelable: !0
                    }), c);
                    return i && j.preventDefault(),
                    h && a.dispatchEvent(j),
                    j.defaultPrevented && f && f.preventDefault(),
                    j
                }
            };
            function N(a, b={}) {
                for (let[c,d] of Object.entries(b))
                    try {
                        a[c] = d
                    } catch (e) {
                        Object.defineProperty(a, c, {
                            configurable: !0,
                            get: () => d
                        })
                    }
                return a
            }
            function O(a) {
                if ("true" === a)
                    return !0;
                if ("false" === a)
                    return !1;
                if (a === Number(a).toString())
                    return Number(a);
                if ("" === a || "null" === a)
                    return null;
                if ("string" != typeof a)
                    return a;
                try {
                    return JSON.parse(decodeURIComponent(a))
                } catch (b) {
                    return a
                }
            }
            function P(a) {
                return a.replace(/[A-Z]/g, a => `-${a.toLowerCase()}`)
            }
            let Q = {
                setDataAttribute(a, b, c) {
                    a.setAttribute(`data-bs-${P(b)}`, c)
                },
                removeDataAttribute(a, b) {
                    a.removeAttribute(`data-bs-${P(b)}`)
                },
                getDataAttributes(a) {
                    if (!a)
                        return {};
                    let b = {}
                      , c = Object.keys(a.dataset).filter(a => a.startsWith("bs") && !a.startsWith("bsConfig"));
                    for (let d of c) {
                        let e = d.replace(/^bs/, "");
                        b[e = e.charAt(0).toLowerCase() + e.slice(1, e.length)] = O(a.dataset[d])
                    }
                    return b
                },
                getDataAttribute: (a, b) => O(a.getAttribute(`data-bs-${P(b)}`))
            };
            class R {
                static get Default() {
                    return {}
                }
                static get DefaultType() {
                    return {}
                }
                static get NAME() {
                    throw Error('You have to implement the static method "NAME", for each component!')
                }
                _getConfig(a) {
                    return a = this._mergeConfigObj(a),
                    a = this._configAfterMerge(a),
                    this._typeCheckConfig(a),
                    a
                }
                _configAfterMerge(a) {
                    return a
                }
                _mergeConfigObj(a, b) {
                    let c = i(b) ? Q.getDataAttribute(b, "config") : {};
                    return {
                        ...this.constructor.Default,
                        ..."object" == typeof c ? c : {},
                        ...i(b) ? Q.getDataAttributes(b) : {},
                        ..."object" == typeof a ? a : {}
                    }
                }
                _typeCheckConfig(a, b=this.constructor.DefaultType) {
                    for (let[c,d] of Object.entries(b)) {
                        let f = a[c]
                          , g = i(f) ? "element" : e(f);
                        if (!RegExp(d).test(g))
                            throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${c}" provided type "${g}" but expected type "${d}".`)
                    }
                }
            }
            class S extends R {
                constructor(a, c) {
                    if (super(),
                    !(a = j(a)))
                        return;
                    this._element = a,
                    this._config = this._getConfig(c),
                    b.set(this._element, this.constructor.DATA_KEY, this)
                }
                dispose() {
                    for (let a of (b.remove(this._element, this.constructor.DATA_KEY),
                    M.off(this._element, this.constructor.EVENT_KEY),
                    Object.getOwnPropertyNames(this)))
                        this[a] = null
                }
                _queueCallback(a, b, c=!0) {
                    v(a, b, c)
                }
                _getConfig(a) {
                    return a = this._mergeConfigObj(a, this._element),
                    a = this._configAfterMerge(a),
                    this._typeCheckConfig(a),
                    a
                }
                static getInstance(a) {
                    return b.get(j(a), this.DATA_KEY)
                }
                static getOrCreateInstance(a, b={}) {
                    return this.getInstance(a) || new this(a,"object" == typeof b ? b : null)
                }
                static get VERSION() {
                    return "5.3.3"
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`
                }
                static eventName(a) {
                    return `${a}${this.EVENT_KEY}`
                }
            }
            let T = a => {
                let b = a.getAttribute("data-bs-target");
                if (!b || "#" === b) {
                    let c = a.getAttribute("href");
                    if (!c || !c.includes("#") && !c.startsWith("."))
                        return null;
                    c.includes("#") && !c.startsWith("#") && (c = `#${c.split("#")[1]}`),
                    b = c && "#" !== c ? c.trim() : null
                }
                return b ? b.split(",").map(a => d(a)).join(",") : null
            }
              , U = {
                find: (a, b=document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(b, a)),
                findOne: (a, b=document.documentElement) => Element.prototype.querySelector.call(b, a),
                children: (a, b) => [].concat(...a.children).filter(a => a.matches(b)),
                parents(a, b) {
                    let c = []
                      , d = a.parentNode.closest(b);
                    for (; d; )
                        c.push(d),
                        d = d.parentNode.closest(b);
                    return c
                },
                prev(a, b) {
                    let c = a.previousElementSibling;
                    for (; c; ) {
                        if (c.matches(b))
                            return [c];
                        c = c.previousElementSibling
                    }
                    return []
                },
                next(a, b) {
                    let c = a.nextElementSibling;
                    for (; c; ) {
                        if (c.matches(b))
                            return [c];
                        c = c.nextElementSibling
                    }
                    return []
                },
                focusableChildren(a) {
                    let b = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(a => `${a}:not([tabindex^="-"])`).join(",");
                    return this.find(b, a).filter(a => !l(a) && k(a))
                },
                getSelectorFromElement(a) {
                    let b = T(a);
                    return b && U.findOne(b) ? b : null
                },
                getElementFromSelector(a) {
                    let b = T(a);
                    return b ? U.findOne(b) : null
                },
                getMultipleElementsFromSelector(a) {
                    let b = T(a);
                    return b ? U.find(b) : []
                }
            }
              , V = (a, b="hide") => {
                let c = `click.dismiss${a.EVENT_KEY}`
                  , d = a.NAME;
                M.on(document, c, `[data-bs-dismiss="${d}"]`, function(c) {
                    if (["A", "AREA"].includes(this.tagName) && c.preventDefault(),
                    l(this))
                        return;
                    let e = U.getElementFromSelector(this) || this.closest(`.${d}`)
                      , f = a.getOrCreateInstance(e);
                    f[b]()
                })
            }
              , W = ".bs.alert"
              , X = `close${W}`
              , Y = `closed${W}`;
            class Z extends S {
                static get NAME() {
                    return "alert"
                }
                close() {
                    let a = M.trigger(this._element, X);
                    if (a.defaultPrevented)
                        return;
                    this._element.classList.remove("show");
                    let b = this._element.classList.contains("fade");
                    this._queueCallback( () => this._destroyElement(), this._element, b)
                }
                _destroyElement() {
                    this._element.remove(),
                    M.trigger(this._element, Y),
                    this.dispose()
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = Z.getOrCreateInstance(this);
                        if ("string" == typeof a) {
                            if (void 0 === b[a] || a.startsWith("_") || "constructor" === a)
                                throw TypeError(`No method named "${a}"`);
                            b[a](this)
                        }
                    })
                }
            }
            V(Z, "close"),
            t(Z);
            let $ = '[data-bs-toggle="button"]'
              , _ = "click.bs.button.data-api";
            class aa extends S {
                static get NAME() {
                    return "button"
                }
                toggle() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = aa.getOrCreateInstance(this);
                        "toggle" === a && b[a]()
                    })
                }
            }
            M.on(document, _, $, a => {
                a.preventDefault();
                let b = a.target.closest($)
                  , c = aa.getOrCreateInstance(b);
                c.toggle()
            }
            ),
            t(aa);
            let ab = ".bs.swipe"
              , ac = `touchstart${ab}`
              , ad = `touchmove${ab}`
              , ae = `touchend${ab}`
              , af = `pointerdown${ab}`
              , ag = `pointerup${ab}`
              , ah = {
                endCallback: null,
                leftCallback: null,
                rightCallback: null
            }
              , ai = {
                endCallback: "(function|null)",
                leftCallback: "(function|null)",
                rightCallback: "(function|null)"
            };
            class aj extends R {
                constructor(a, b) {
                    if (super(),
                    this._element = a,
                    !a || !aj.isSupported())
                        return;
                    this._config = this._getConfig(b),
                    this._deltaX = 0,
                    this._supportPointerEvents = Boolean(window.PointerEvent),
                    this._initEvents()
                }
                static get Default() {
                    return ah
                }
                static get DefaultType() {
                    return ai
                }
                static get NAME() {
                    return "swipe"
                }
                dispose() {
                    M.off(this._element, ab)
                }
                _start(a) {
                    if (!this._supportPointerEvents) {
                        this._deltaX = a.touches[0].clientX;
                        return
                    }
                    this._eventIsPointerPenTouch(a) && (this._deltaX = a.clientX)
                }
                _end(a) {
                    this._eventIsPointerPenTouch(a) && (this._deltaX = a.clientX - this._deltaX),
                    this._handleSwipe(),
                    u(this._config.endCallback)
                }
                _move(a) {
                    this._deltaX = a.touches && a.touches.length > 1 ? 0 : a.touches[0].clientX - this._deltaX
                }
                _handleSwipe() {
                    let a = Math.abs(this._deltaX);
                    if (a <= 40)
                        return;
                    let b = a / this._deltaX;
                    this._deltaX = 0,
                    b && u(b > 0 ? this._config.rightCallback : this._config.leftCallback)
                }
                _initEvents() {
                    this._supportPointerEvents ? (M.on(this._element, af, a => this._start(a)),
                    M.on(this._element, ag, a => this._end(a)),
                    this._element.classList.add("pointer-event")) : (M.on(this._element, ac, a => this._start(a)),
                    M.on(this._element, ad, a => this._move(a)),
                    M.on(this._element, ae, a => this._end(a)))
                }
                _eventIsPointerPenTouch(a) {
                    return this._supportPointerEvents && ("pen" === a.pointerType || "touch" === a.pointerType)
                }
                static isSupported() {
                    return "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0
                }
            }
            let ak = ".bs.carousel"
              , al = ".data-api"
              , am = "next"
              , an = "prev"
              , ao = "left"
              , ap = "right"
              , aq = `slide${ak}`
              , ar = `slid${ak}`
              , as = `keydown${ak}`
              , at = `mouseenter${ak}`
              , au = `mouseleave${ak}`
              , av = `dragstart${ak}`
              , aw = `load${ak}${al}`
              , ax = `click${ak}${al}`
              , ay = "carousel"
              , az = "active"
              , aA = ".active"
              , aB = ".carousel-item"
              , aC = aA + aB
              , aD = {
                ArrowLeft: ap,
                ArrowRight: ao
            }
              , aE = {
                interval: 5e3,
                keyboard: !0,
                pause: "hover",
                ride: !1,
                touch: !0,
                wrap: !0
            }
              , aF = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                pause: "(string|boolean)",
                ride: "(boolean|string)",
                touch: "boolean",
                wrap: "boolean"
            };
            class aG extends S {
                constructor(a, b) {
                    super(a, b),
                    this._interval = null,
                    this._activeElement = null,
                    this._isSliding = !1,
                    this.touchTimeout = null,
                    this._swipeHelper = null,
                    this._indicatorsElement = U.findOne(".carousel-indicators", this._element),
                    this._addEventListeners(),
                    this._config.ride === ay && this.cycle()
                }
                static get Default() {
                    return aE
                }
                static get DefaultType() {
                    return aF
                }
                static get NAME() {
                    return "carousel"
                }
                next() {
                    this._slide(am)
                }
                nextWhenVisible() {
                    !document.hidden && k(this._element) && this.next()
                }
                prev() {
                    this._slide(an)
                }
                pause() {
                    this._isSliding && h(this._element),
                    this._clearInterval()
                }
                cycle() {
                    this._clearInterval(),
                    this._updateInterval(),
                    this._interval = setInterval( () => this.nextWhenVisible(), this._config.interval)
                }
                _maybeEnableCycle() {
                    if (this._config.ride) {
                        if (this._isSliding) {
                            M.one(this._element, ar, () => this.cycle());
                            return
                        }
                        this.cycle()
                    }
                }
                to(a) {
                    let b = this._getItems();
                    if (a > b.length - 1 || a < 0)
                        return;
                    if (this._isSliding) {
                        M.one(this._element, ar, () => this.to(a));
                        return
                    }
                    let c = this._getItemIndex(this._getActive());
                    c !== a && this._slide(a > c ? am : an, b[a])
                }
                dispose() {
                    this._swipeHelper && this._swipeHelper.dispose(),
                    super.dispose()
                }
                _configAfterMerge(a) {
                    return a.defaultInterval = a.interval,
                    a
                }
                _addEventListeners() {
                    this._config.keyboard && M.on(this._element, as, a => this._keydown(a)),
                    "hover" === this._config.pause && (M.on(this._element, at, () => this.pause()),
                    M.on(this._element, au, () => this._maybeEnableCycle())),
                    this._config.touch && aj.isSupported() && this._addTouchEventListeners()
                }
                _addTouchEventListeners() {
                    for (let a of U.find(".carousel-item img", this._element))
                        M.on(a, av, a => a.preventDefault());
                    let b = () => {
                        "hover" === this._config.pause && (this.pause(),
                        this.touchTimeout && clearTimeout(this.touchTimeout),
                        this.touchTimeout = setTimeout( () => this._maybeEnableCycle(), 500 + this._config.interval))
                    }
                    ;
                    this._swipeHelper = new aj(this._element,{
                        leftCallback: () => this._slide(this._directionToOrder(ao)),
                        rightCallback: () => this._slide(this._directionToOrder(ap)),
                        endCallback: b
                    })
                }
                _keydown(a) {
                    if (/input|textarea/i.test(a.target.tagName))
                        return;
                    let b = aD[a.key];
                    b && (a.preventDefault(),
                    this._slide(this._directionToOrder(b)))
                }
                _getItemIndex(a) {
                    return this._getItems().indexOf(a)
                }
                _setActiveIndicatorElement(a) {
                    if (!this._indicatorsElement)
                        return;
                    let b = U.findOne(aA, this._indicatorsElement);
                    b.classList.remove(az),
                    b.removeAttribute("aria-current");
                    let c = U.findOne(`[data-bs-slide-to="${a}"]`, this._indicatorsElement);
                    c && (c.classList.add(az),
                    c.setAttribute("aria-current", "true"))
                }
                _updateInterval() {
                    let a = this._activeElement || this._getActive();
                    if (!a)
                        return;
                    let b = Number.parseInt(a.getAttribute("data-bs-interval"), 10);
                    this._config.interval = b || this._config.defaultInterval
                }
                _slide(a, b=null) {
                    if (this._isSliding)
                        return;
                    let c = this._getActive()
                      , d = a === am
                      , e = b || w(this._getItems(), c, d, this._config.wrap);
                    if (e === c)
                        return;
                    let f = this._getItemIndex(e)
                      , g = b => M.trigger(this._element, b, {
                        relatedTarget: e,
                        direction: this._orderToDirection(a),
                        from: this._getItemIndex(c),
                        to: f
                    })
                      , h = g(aq);
                    if (h.defaultPrevented || !c || !e)
                        return;
                    let i = Boolean(this._interval);
                    this.pause(),
                    this._isSliding = !0,
                    this._setActiveIndicatorElement(f),
                    this._activeElement = e;
                    let j = d ? "carousel-item-start" : "carousel-item-end"
                      , k = d ? "carousel-item-next" : "carousel-item-prev";
                    e.classList.add(k),
                    o(e),
                    c.classList.add(j),
                    e.classList.add(j);
                    let l = () => {
                        e.classList.remove(j, k),
                        e.classList.add(az),
                        c.classList.remove(az, k, j),
                        this._isSliding = !1,
                        g(ar)
                    }
                    ;
                    this._queueCallback(l, c, this._isAnimated()),
                    i && this.cycle()
                }
                _isAnimated() {
                    return this._element.classList.contains("slide")
                }
                _getActive() {
                    return U.findOne(aC, this._element)
                }
                _getItems() {
                    return U.find(aB, this._element)
                }
                _clearInterval() {
                    this._interval && (clearInterval(this._interval),
                    this._interval = null)
                }
                _directionToOrder(a) {
                    return s() ? a === ao ? an : am : a === ao ? am : an
                }
                _orderToDirection(a) {
                    return s() ? a === an ? ao : ap : a === an ? ap : ao
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = aG.getOrCreateInstance(this, a);
                        if ("number" == typeof a) {
                            b.to(a);
                            return
                        }
                        if ("string" == typeof a) {
                            if (void 0 === b[a] || a.startsWith("_") || "constructor" === a)
                                throw TypeError(`No method named "${a}"`);
                            b[a]()
                        }
                    })
                }
            }
            M.on(document, ax, "[data-bs-slide], [data-bs-slide-to]", function(a) {
                let b = U.getElementFromSelector(this);
                if (!b || !b.classList.contains(ay))
                    return;
                a.preventDefault();
                let c = aG.getOrCreateInstance(b)
                  , d = this.getAttribute("data-bs-slide-to");
                if (d) {
                    c.to(d),
                    c._maybeEnableCycle();
                    return
                }
                if ("next" === Q.getDataAttribute(this, "slide")) {
                    c.next(),
                    c._maybeEnableCycle();
                    return
                }
                c.prev(),
                c._maybeEnableCycle()
            }),
            M.on(window, aw, () => {
                let a = U.find('[data-bs-ride="carousel"]');
                for (let b of a)
                    aG.getOrCreateInstance(b)
            }
            ),
            t(aG);
            let aH = ".bs.collapse"
              , aI = `show${aH}`
              , aJ = `shown${aH}`
              , aK = `hide${aH}`
              , aL = `hidden${aH}`
              , aM = `click${aH}.data-api`
              , aN = "show"
              , aO = "collapse"
              , aP = "collapsing"
              , aQ = `:scope .${aO} .${aO}`
              , aR = '[data-bs-toggle="collapse"]'
              , aS = {
                parent: null,
                toggle: !0
            }
              , aT = {
                parent: "(null|element)",
                toggle: "boolean"
            };
            class aU extends S {
                constructor(a, b) {
                    super(a, b),
                    this._isTransitioning = !1,
                    this._triggerArray = [];
                    let c = U.find(aR);
                    for (let d of c) {
                        let e = U.getSelectorFromElement(d)
                          , f = U.find(e).filter(a => a === this._element);
                        null !== e && f.length && this._triggerArray.push(d)
                    }
                    this._initializeChildren(),
                    this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
                    this._config.toggle && this.toggle()
                }
                static get Default() {
                    return aS
                }
                static get DefaultType() {
                    return aT
                }
                static get NAME() {
                    return "collapse"
                }
                toggle() {
                    this._isShown() ? this.hide() : this.show()
                }
                show() {
                    if (this._isTransitioning || this._isShown())
                        return;
                    let a = [];
                    if (this._config.parent && (a = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(a => a !== this._element).map(a => aU.getOrCreateInstance(a, {
                        toggle: !1
                    }))),
                    a.length && a[0]._isTransitioning)
                        return;
                    let b = M.trigger(this._element, aI);
                    if (b.defaultPrevented)
                        return;
                    for (let c of a)
                        c.hide();
                    let d = this._getDimension();
                    this._element.classList.remove(aO),
                    this._element.classList.add(aP),
                    this._element.style[d] = 0,
                    this._addAriaAndCollapsedClass(this._triggerArray, !0),
                    this._isTransitioning = !0;
                    let e = () => {
                        this._isTransitioning = !1,
                        this._element.classList.remove(aP),
                        this._element.classList.add(aO, aN),
                        this._element.style[d] = "",
                        M.trigger(this._element, aJ)
                    }
                      , f = d[0].toUpperCase() + d.slice(1)
                      , g = `scroll${f}`;
                    this._queueCallback(e, this._element, !0),
                    this._element.style[d] = `${this._element[g]}px`
                }
                hide() {
                    if (this._isTransitioning || !this._isShown())
                        return;
                    let a = M.trigger(this._element, aK);
                    if (a.defaultPrevented)
                        return;
                    let b = this._getDimension();
                    for (let c of (this._element.style[b] = `${this._element.getBoundingClientRect()[b]}px`,
                    o(this._element),
                    this._element.classList.add(aP),
                    this._element.classList.remove(aO, aN),
                    this._triggerArray)) {
                        let d = U.getElementFromSelector(c);
                        d && !this._isShown(d) && this._addAriaAndCollapsedClass([c], !1)
                    }
                    this._isTransitioning = !0;
                    let e = () => {
                        this._isTransitioning = !1,
                        this._element.classList.remove(aP),
                        this._element.classList.add(aO),
                        M.trigger(this._element, aL)
                    }
                    ;
                    this._element.style[b] = "",
                    this._queueCallback(e, this._element, !0)
                }
                _isShown(a=this._element) {
                    return a.classList.contains(aN)
                }
                _configAfterMerge(a) {
                    return a.toggle = Boolean(a.toggle),
                    a.parent = j(a.parent),
                    a
                }
                _getDimension() {
                    return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                }
                _initializeChildren() {
                    if (!this._config.parent)
                        return;
                    let a = this._getFirstLevelChildren(aR);
                    for (let b of a) {
                        let c = U.getElementFromSelector(b);
                        c && this._addAriaAndCollapsedClass([b], this._isShown(c))
                    }
                }
                _getFirstLevelChildren(a) {
                    let b = U.find(aQ, this._config.parent);
                    return U.find(a, this._config.parent).filter(a => !b.includes(a))
                }
                _addAriaAndCollapsedClass(a, b) {
                    if (a.length)
                        for (let c of a)
                            c.classList.toggle("collapsed", !b),
                            c.setAttribute("aria-expanded", b)
                }
                static jQueryInterface(a) {
                    let b = {};
                    return "string" == typeof a && /show|hide/.test(a) && (b.toggle = !1),
                    this.each(function() {
                        let c = aU.getOrCreateInstance(this, b);
                        if ("string" == typeof a) {
                            if (void 0 === c[a])
                                throw TypeError(`No method named "${a}"`);
                            c[a]()
                        }
                    })
                }
            }
            M.on(document, aM, aR, function(a) {
                for (let b of (("A" === a.target.tagName || a.delegateTarget && "A" === a.delegateTarget.tagName) && a.preventDefault(),
                U.getMultipleElementsFromSelector(this)))
                    aU.getOrCreateInstance(b, {
                        toggle: !1
                    }).toggle()
            }),
            t(aU);
            var aV = "top"
              , aW = "bottom"
              , aX = "right"
              , aY = "left"
              , aZ = "auto"
              , a$ = [aV, aW, aX, aY]
              , a_ = "start"
              , a0 = "clippingParents"
              , a1 = "viewport"
              , a2 = "popper"
              , a3 = "reference"
              , a4 = a$.reduce(function(a, b) {
                return a.concat([b + "-" + a_, b + "-end"])
            }, [])
              , a5 = [].concat(a$, [aZ]).reduce(function(a, b) {
                return a.concat([b, b + "-" + a_, b + "-end"])
            }, [])
              , a6 = "beforeRead"
              , a7 = "read"
              , a8 = "afterRead"
              , a9 = "beforeMain"
              , ba = "main"
              , bb = "afterMain"
              , bc = "beforeWrite"
              , bd = "write"
              , be = "afterWrite"
              , bf = [a6, a7, a8, a9, ba, bb, bc, bd, be];
            function bg(a) {
                return a ? (a.nodeName || "").toLowerCase() : null
            }
            function bh(a) {
                if (null == a)
                    return window;
                if ("[object Window]" !== a.toString()) {
                    var b = a.ownerDocument;
                    return b && b.defaultView || window
                }
                return a
            }
            function bi(a) {
                var b = bh(a).Element;
                return a instanceof b || a instanceof Element
            }
            function bj(a) {
                var b = bh(a).HTMLElement;
                return a instanceof b || a instanceof HTMLElement
            }
            function bk(a) {
                if ("undefined" == typeof ShadowRoot)
                    return !1;
                var b = bh(a).ShadowRoot;
                return a instanceof b || a instanceof ShadowRoot
            }
            let bl = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(a) {
                    var b = a.state;
                    Object.keys(b.elements).forEach(function(a) {
                        var c = b.styles[a] || {}
                          , d = b.attributes[a] || {}
                          , e = b.elements[a];
                        bj(e) && bg(e) && (Object.assign(e.style, c),
                        Object.keys(d).forEach(function(a) {
                            var b = d[a];
                            !1 === b ? e.removeAttribute(a) : e.setAttribute(a, !0 === b ? "" : b)
                        }))
                    })
                },
                effect: function(a) {
                    var b = a.state
                      , c = {
                        popper: {
                            position: b.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                    return Object.assign(b.elements.popper.style, c.popper),
                    b.styles = c,
                    b.elements.arrow && Object.assign(b.elements.arrow.style, c.arrow),
                    function() {
                        Object.keys(b.elements).forEach(function(a) {
                            var d = b.elements[a]
                              , e = b.attributes[a] || {}
                              , f = Object.keys(b.styles.hasOwnProperty(a) ? b.styles[a] : c[a])
                              , g = f.reduce(function(a, b) {
                                return a[b] = "",
                                a
                            }, {});
                            bj(d) && bg(d) && (Object.assign(d.style, g),
                            Object.keys(e).forEach(function(a) {
                                d.removeAttribute(a)
                            }))
                        })
                    }
                },
                requires: ["computeStyles"]
            };
            function bm(a) {
                return a.split("-")[0]
            }
            var bn = Math.max
              , bo = Math.min
              , bp = Math.round;
            function bq() {
                var a = navigator.userAgentData;
                return null != a && a.brands && Array.isArray(a.brands) ? a.brands.map(function(a) {
                    return a.brand + "/" + a.version
                }).join(" ") : navigator.userAgent
            }
            function br() {
                return !/^((?!chrome|android).)*safari/i.test(bq())
            }
            function bs(a, b, c) {
                void 0 === b && (b = !1),
                void 0 === c && (c = !1);
                var d = a.getBoundingClientRect()
                  , e = 1
                  , f = 1;
                b && bj(a) && (e = a.offsetWidth > 0 && bp(d.width) / a.offsetWidth || 1,
                f = a.offsetHeight > 0 && bp(d.height) / a.offsetHeight || 1);
                var g = (bi(a) ? bh(a) : window).visualViewport
                  , h = !br() && c
                  , i = (d.left + (h && g ? g.offsetLeft : 0)) / e
                  , j = (d.top + (h && g ? g.offsetTop : 0)) / f
                  , k = d.width / e
                  , l = d.height / f;
                return {
                    width: k,
                    height: l,
                    top: j,
                    right: i + k,
                    bottom: j + l,
                    left: i,
                    x: i,
                    y: j
                }
            }
            function bt(a) {
                var b = bs(a)
                  , c = a.offsetWidth
                  , d = a.offsetHeight;
                return 1 >= Math.abs(b.width - c) && (c = b.width),
                1 >= Math.abs(b.height - d) && (d = b.height),
                {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    width: c,
                    height: d
                }
            }
            function bu(a, b) {
                var c = b.getRootNode && b.getRootNode();
                if (a.contains(b))
                    return !0;
                if (c && bk(c)) {
                    var d = b;
                    do {
                        if (d && a.isSameNode(d))
                            return !0;
                        d = d.parentNode || d.host
                    } while (d)
                }
                return !1
            }
            function bv(a) {
                return bh(a).getComputedStyle(a)
            }
            function bw(a) {
                return ["table", "td", "th"].indexOf(bg(a)) >= 0
            }
            function bx(a) {
                return ((bi(a) ? a.ownerDocument : a.document) || window.document).documentElement
            }
            function by(a) {
                return "html" === bg(a) ? a : a.assignedSlot || a.parentNode || (bk(a) ? a.host : null) || bx(a)
            }
            function bz(a) {
                return bj(a) && "fixed" !== bv(a).position ? a.offsetParent : null
            }
            function bA(a) {
                for (var b = bh(a), c = bz(a); c && bw(c) && "static" === bv(c).position; )
                    c = bz(c);
                return c && ("html" === bg(c) || "body" === bg(c) && "static" === bv(c).position) ? b : c || function(a) {
                    var b = /firefox/i.test(bq());
                    if (/Trident/i.test(bq()) && bj(a) && "fixed" === bv(a).position)
                        return null;
                    var c = by(a);
                    for (bk(c) && (c = c.host); bj(c) && 0 > ["html", "body"].indexOf(bg(c)); ) {
                        var d = bv(c);
                        if ("none" !== d.transform || "none" !== d.perspective || "paint" === d.contain || -1 !== ["transform", "perspective"].indexOf(d.willChange) || b && "filter" === d.willChange || b && d.filter && "none" !== d.filter)
                            return c;
                        c = c.parentNode
                    }
                    return null
                }(a) || b
            }
            function bB(a) {
                return ["top", "bottom"].indexOf(a) >= 0 ? "x" : "y"
            }
            function bC(a, b, c) {
                return bn(a, bo(b, c))
            }
            function bD() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
            function bE(a) {
                return Object.assign({}, bD(), a)
            }
            function bF(a, b) {
                return b.reduce(function(b, c) {
                    return b[c] = a,
                    b
                }, {})
            }
            let bG = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(a) {
                    var b, c = a.state, d = a.name, e = a.options, f = c.elements.arrow, g = c.modifiersData.popperOffsets, h = bm(c.placement), i = bB(h), j = [aY, aX].indexOf(h) >= 0, k = j ? "height" : "width";
                    if (f && g) {
                        var l, m, n = (l = e.padding,
                        m = c,
                        bE("number" != typeof (l = "function" == typeof l ? l(Object.assign({}, m.rects, {
                            placement: m.placement
                        })) : l) ? l : bF(l, a$))), o = bt(f), p = c.rects.reference[k] + c.rects.reference[i] - g[i] - c.rects.popper[k], q = g[i] - c.rects.reference[i], r = bA(f), s = r ? "y" === i ? r.clientHeight || 0 : r.clientWidth || 0 : 0, t = n["y" === i ? aV : aY], u = s - o[k] - n["y" === i ? aW : aX], v = s / 2 - o[k] / 2 + (p / 2 - q / 2), w = bC(t, v, u), x = i;
                        c.modifiersData[d] = ((b = {})[x] = w,
                        b.centerOffset = w - v,
                        b)
                    }
                },
                effect: function(a) {
                    var b = a.state
                      , c = a.options.element
                      , d = void 0 === c ? "[data-popper-arrow]" : c;
                    null != d && ("string" != typeof d || (d = b.elements.popper.querySelector(d))) && bu(b.elements.popper, d) && (b.elements.arrow = d)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };
            function bH(a) {
                return a.split("-")[1]
            }
            var bI = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };
            function bJ(a) {
                var b, c, d = a.popper, e = a.popperRect, f = a.placement, g = a.variation, h = a.offsets, i = a.position, j = a.gpuAcceleration, k = a.adaptive, l = a.roundOffsets, m = a.isFixed, n = h.x, o = void 0 === n ? 0 : n, p = h.y, q = void 0 === p ? 0 : p, r = "function" == typeof l ? l({
                    x: o,
                    y: q
                }) : {
                    x: o,
                    y: q
                };
                o = r.x,
                q = r.y;
                var s = h.hasOwnProperty("x")
                  , t = h.hasOwnProperty("y")
                  , u = aY
                  , v = aV
                  , w = window;
                if (k) {
                    var x = bA(d)
                      , y = "clientHeight"
                      , z = "clientWidth";
                    if (x === bh(d) && (x = bx(d),
                    "static" !== bv(x).position && "absolute" === i && (y = "scrollHeight",
                    z = "scrollWidth")),
                    f === aV || (f === aY || f === aX) && "end" === g) {
                        v = aW;
                        var A = m && x === w && w.visualViewport ? w.visualViewport.height : x[y];
                        q -= A - e.height,
                        q *= j ? 1 : -1
                    }
                    if (f === aY || (f === aV || f === aW) && "end" === g) {
                        u = aX;
                        var B = m && x === w && w.visualViewport ? w.visualViewport.width : x[z];
                        o -= B - e.width,
                        o *= j ? 1 : -1
                    }
                }
                var C, D, E, F, G, H = Object.assign({
                    position: i
                }, k && bI), I = !0 === l ? (C = {
                    x: o,
                    y: q
                },
                D = bh(d),
                E = C.x,
                F = C.y,
                G = D.devicePixelRatio || 1,
                {
                    x: bp(E * G) / G || 0,
                    y: bp(F * G) / G || 0
                }) : {
                    x: o,
                    y: q
                };
                return (o = I.x,
                q = I.y,
                j) ? Object.assign({}, H, ((c = {})[v] = t ? "0" : "",
                c[u] = s ? "0" : "",
                c.transform = 1 >= (w.devicePixelRatio || 1) ? "translate(" + o + "px, " + q + "px)" : "translate3d(" + o + "px, " + q + "px, 0)",
                c)) : Object.assign({}, H, ((b = {})[v] = t ? q + "px" : "",
                b[u] = s ? o + "px" : "",
                b.transform = "",
                b))
            }
            let bK = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(a) {
                    var b = a.state
                      , c = a.options
                      , d = c.gpuAcceleration
                      , e = c.adaptive
                      , f = c.roundOffsets
                      , g = void 0 === f || f
                      , h = {
                        placement: bm(b.placement),
                        variation: bH(b.placement),
                        popper: b.elements.popper,
                        popperRect: b.rects.popper,
                        gpuAcceleration: void 0 === d || d,
                        isFixed: "fixed" === b.options.strategy
                    };
                    null != b.modifiersData.popperOffsets && (b.styles.popper = Object.assign({}, b.styles.popper, bJ(Object.assign({}, h, {
                        offsets: b.modifiersData.popperOffsets,
                        position: b.options.strategy,
                        adaptive: void 0 === e || e,
                        roundOffsets: g
                    })))),
                    null != b.modifiersData.arrow && (b.styles.arrow = Object.assign({}, b.styles.arrow, bJ(Object.assign({}, h, {
                        offsets: b.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: g
                    })))),
                    b.attributes.popper = Object.assign({}, b.attributes.popper, {
                        "data-popper-placement": b.placement
                    })
                },
                data: {}
            };
            var bL = {
                passive: !0
            };
            let bM = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(a) {
                    var b = a.state
                      , c = a.instance
                      , d = a.options
                      , e = d.scroll
                      , f = void 0 === e || e
                      , g = d.resize
                      , h = void 0 === g || g
                      , i = bh(b.elements.popper)
                      , j = [].concat(b.scrollParents.reference, b.scrollParents.popper);
                    return f && j.forEach(function(a) {
                        a.addEventListener("scroll", c.update, bL)
                    }),
                    h && i.addEventListener("resize", c.update, bL),
                    function() {
                        f && j.forEach(function(a) {
                            a.removeEventListener("scroll", c.update, bL)
                        }),
                        h && i.removeEventListener("resize", c.update, bL)
                    }
                },
                data: {}
            };
            var bN = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            function bO(a) {
                return a.replace(/left|right|bottom|top/g, function(a) {
                    return bN[a]
                })
            }
            var bP = {
                start: "end",
                end: "start"
            };
            function bQ(a) {
                return a.replace(/start|end/g, function(a) {
                    return bP[a]
                })
            }
            function bR(a) {
                var b = bh(a)
                  , c = b.pageXOffset
                  , d = b.pageYOffset;
                return {
                    scrollLeft: c,
                    scrollTop: d
                }
            }
            function bS(a) {
                return bs(bx(a)).left + bR(a).scrollLeft
            }
            function bT(a) {
                var b = bv(a)
                  , c = b.overflow
                  , d = b.overflowX
                  , e = b.overflowY;
                return /auto|scroll|overlay|hidden/.test(c + e + d)
            }
            function bU(a) {
                return ["html", "body", "#document"].indexOf(bg(a)) >= 0 ? a.ownerDocument.body : bj(a) && bT(a) ? a : bU(by(a))
            }
            function bV(a, b) {
                void 0 === b && (b = []);
                var c, d = bU(a), e = d === (null == (c = a.ownerDocument) ? void 0 : c.body), f = bh(d), g = e ? [f].concat(f.visualViewport || [], bT(d) ? d : []) : d, h = b.concat(g);
                return e ? h : h.concat(bV(by(g)))
            }
            function bW(a) {
                return Object.assign({}, a, {
                    left: a.x,
                    top: a.y,
                    right: a.x + a.width,
                    bottom: a.y + a.height
                })
            }
            function bX(a, b, c) {
                var d, e, f, g, h, i, j, k, l, m, n, o;
                return b === a1 ? bW(function(a, b) {
                    var c = bh(a)
                      , d = bx(a)
                      , e = c.visualViewport
                      , f = d.clientWidth
                      , g = d.clientHeight
                      , h = 0
                      , i = 0;
                    if (e) {
                        f = e.width,
                        g = e.height;
                        var j = br();
                        (j || !j && "fixed" === b) && (h = e.offsetLeft,
                        i = e.offsetTop)
                    }
                    return {
                        width: f,
                        height: g,
                        x: h + bS(a),
                        y: i
                    }
                }(a, c)) : bi(b) ? (d = b,
                (f = bs(d, !1, "fixed" === (e = c))).top = f.top + d.clientTop,
                f.left = f.left + d.clientLeft,
                f.bottom = f.top + d.clientHeight,
                f.right = f.left + d.clientWidth,
                f.width = d.clientWidth,
                f.height = d.clientHeight,
                f.x = f.left,
                f.y = f.top,
                f) : bW((g = bx(a),
                i = bx(g),
                j = bR(g),
                k = null == (h = g.ownerDocument) ? void 0 : h.body,
                l = bn(i.scrollWidth, i.clientWidth, k ? k.scrollWidth : 0, k ? k.clientWidth : 0),
                m = bn(i.scrollHeight, i.clientHeight, k ? k.scrollHeight : 0, k ? k.clientHeight : 0),
                n = -j.scrollLeft + bS(g),
                o = -j.scrollTop,
                "rtl" === bv(k || i).direction && (n += bn(i.clientWidth, k ? k.clientWidth : 0) - l),
                {
                    width: l,
                    height: m,
                    x: n,
                    y: o
                }))
            }
            function bY(a) {
                var b, c = a.reference, d = a.element, e = a.placement, f = e ? bm(e) : null, g = e ? bH(e) : null, h = c.x + c.width / 2 - d.width / 2, i = c.y + c.height / 2 - d.height / 2;
                switch (f) {
                case aV:
                    b = {
                        x: h,
                        y: c.y - d.height
                    };
                    break;
                case aW:
                    b = {
                        x: h,
                        y: c.y + c.height
                    };
                    break;
                case aX:
                    b = {
                        x: c.x + c.width,
                        y: i
                    };
                    break;
                case aY:
                    b = {
                        x: c.x - d.width,
                        y: i
                    };
                    break;
                default:
                    b = {
                        x: c.x,
                        y: c.y
                    }
                }
                var j = f ? bB(f) : null;
                if (null != j) {
                    var k = "y" === j ? "height" : "width";
                    switch (g) {
                    case a_:
                        b[j] = b[j] - (c[k] / 2 - d[k] / 2);
                        break;
                    case "end":
                        b[j] = b[j] + (c[k] / 2 - d[k] / 2)
                    }
                }
                return b
            }
            function bZ(a, b) {
                void 0 === b && (b = {});
                var c, d, e, f, g, h, i, j, k, l, m = b, n = m.placement, o = void 0 === n ? a.placement : n, p = m.strategy, q = void 0 === p ? a.strategy : p, r = m.boundary, s = m.rootBoundary, t = m.elementContext, u = void 0 === t ? a2 : t, v = m.altBoundary, w = m.padding, x = void 0 === w ? 0 : w, y = bE("number" != typeof x ? x : bF(x, a$)), z = a.rects.popper, A = a.elements[void 0 !== v && v ? u === a2 ? a3 : a2 : u], B = (c = bi(A) ? A : A.contextElement || bx(a.elements.popper),
                d = void 0 === r ? a0 : r,
                e = void 0 === s ? a1 : s,
                f = q,
                k = (j = [].concat("clippingParents" === d ? (h = bV(by(g = c)),
                i = ["absolute", "fixed"].indexOf(bv(g).position) >= 0 && bj(g) ? bA(g) : g,
                bi(i) ? h.filter(function(a) {
                    return bi(a) && bu(a, i) && "body" !== bg(a)
                }) : []) : [].concat(d), [e]))[0],
                l = j.reduce(function(a, b) {
                    var d = bX(c, b, f);
                    return a.top = bn(d.top, a.top),
                    a.right = bo(d.right, a.right),
                    a.bottom = bo(d.bottom, a.bottom),
                    a.left = bn(d.left, a.left),
                    a
                }, bX(c, k, f)),
                l.width = l.right - l.left,
                l.height = l.bottom - l.top,
                l.x = l.left,
                l.y = l.top,
                l), C = bs(a.elements.reference), D = bY({
                    reference: C,
                    element: z,
                    strategy: "absolute",
                    placement: o
                }), E = bW(Object.assign({}, z, D)), F = u === a2 ? E : C, G = {
                    top: B.top - F.top + y.top,
                    bottom: F.bottom - B.bottom + y.bottom,
                    left: B.left - F.left + y.left,
                    right: F.right - B.right + y.right
                }, H = a.modifiersData.offset;
                if (u === a2 && H) {
                    var I = H[o];
                    Object.keys(G).forEach(function(a) {
                        var b = [aX, aW].indexOf(a) >= 0 ? 1 : -1
                          , c = [aV, aW].indexOf(a) >= 0 ? "y" : "x";
                        G[a] += I[c] * b
                    })
                }
                return G
            }
            let b$ = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(a) {
                    var b = a.state
                      , c = a.options
                      , d = a.name;
                    if (!b.modifiersData[d]._skip) {
                        for (var e = c.mainAxis, f = void 0 === e || e, g = c.altAxis, h = void 0 === g || g, i = c.fallbackPlacements, j = c.padding, k = c.boundary, l = c.rootBoundary, m = c.altBoundary, n = c.flipVariations, o = void 0 === n || n, p = c.allowedAutoPlacements, q = b.options.placement, r = bm(q), s = i || (r !== q && o ? function(a) {
                            if (bm(a) === aZ)
                                return [];
                            var b = bO(a);
                            return [bQ(a), b, bQ(b)]
                        }(q) : [bO(q)]), t = [q].concat(s).reduce(function(a, c) {
                            var d, e, f, g, h, i, m, n, q, r, s, t, u, v;
                            return a.concat(bm(c) === aZ ? (d = b,
                            e = {
                                placement: c,
                                boundary: k,
                                rootBoundary: l,
                                padding: j,
                                flipVariations: o,
                                allowedAutoPlacements: p
                            },
                            g = (f = e).placement,
                            h = f.boundary,
                            i = f.rootBoundary,
                            m = f.padding,
                            n = f.flipVariations,
                            q = f.allowedAutoPlacements,
                            r = void 0 === q ? a5 : q,
                            s = bH(g),
                            t = s ? n ? a4 : a4.filter(function(a) {
                                return bH(a) === s
                            }) : a$,
                            u = t.filter(function(a) {
                                return r.indexOf(a) >= 0
                            }),
                            0 === u.length && (u = t),
                            v = u.reduce(function(a, b) {
                                return a[b] = bZ(d, {
                                    placement: b,
                                    boundary: h,
                                    rootBoundary: i,
                                    padding: m
                                })[bm(b)],
                                a
                            }, {}),
                            Object.keys(v).sort(function(a, b) {
                                return v[a] - v[b]
                            })) : c)
                        }, []), u = b.rects.reference, v = b.rects.popper, w = new Map, x = !0, y = t[0], z = 0; z < t.length; z++) {
                            var A = t[z]
                              , B = bm(A)
                              , C = bH(A) === a_
                              , D = [aV, aW].indexOf(B) >= 0
                              , E = D ? "width" : "height"
                              , F = bZ(b, {
                                placement: A,
                                boundary: k,
                                rootBoundary: l,
                                altBoundary: m,
                                padding: j
                            })
                              , G = D ? C ? aX : aY : C ? aW : aV;
                            u[E] > v[E] && (G = bO(G));
                            var H = bO(G)
                              , I = [];
                            if (f && I.push(F[B] <= 0),
                            h && I.push(F[G] <= 0, F[H] <= 0),
                            I.every(function(a) {
                                return a
                            })) {
                                y = A,
                                x = !1;
                                break
                            }
                            w.set(A, I)
                        }
                        if (x)
                            for (var J = o ? 3 : 1, K = function(a) {
                                var b = t.find(function(b) {
                                    var c = w.get(b);
                                    if (c)
                                        return c.slice(0, a).every(function(a) {
                                            return a
                                        })
                                });
                                if (b)
                                    return y = b,
                                    "break"
                            }, L = J; L > 0 && "break" !== K(L); L--)
                                ;
                        b.placement !== y && (b.modifiersData[d]._skip = !0,
                        b.placement = y,
                        b.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            };
            function b_(a, b, c) {
                return void 0 === c && (c = {
                    x: 0,
                    y: 0
                }),
                {
                    top: a.top - b.height - c.y,
                    right: a.right - b.width + c.x,
                    bottom: a.bottom - b.height + c.y,
                    left: a.left - b.width - c.x
                }
            }
            function b0(a) {
                return [aV, aX, aW, aY].some(function(b) {
                    return a[b] >= 0
                })
            }
            let b1 = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(a) {
                    var b = a.state
                      , c = a.name
                      , d = b.rects.reference
                      , e = b.rects.popper
                      , f = b.modifiersData.preventOverflow
                      , g = bZ(b, {
                        elementContext: "reference"
                    })
                      , h = bZ(b, {
                        altBoundary: !0
                    })
                      , i = b_(g, d)
                      , j = b_(h, e, f)
                      , k = b0(i)
                      , l = b0(j);
                    b.modifiersData[c] = {
                        referenceClippingOffsets: i,
                        popperEscapeOffsets: j,
                        isReferenceHidden: k,
                        hasPopperEscaped: l
                    },
                    b.attributes.popper = Object.assign({}, b.attributes.popper, {
                        "data-popper-reference-hidden": k,
                        "data-popper-escaped": l
                    })
                }
            }
              , b2 = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(a) {
                    var b = a.state
                      , c = a.options
                      , d = a.name
                      , e = c.offset
                      , f = void 0 === e ? [0, 0] : e
                      , g = a5.reduce(function(a, c) {
                        var d, e, g, h, i, j, k, l;
                        return a[c] = (d = c,
                        e = b.rects,
                        g = f,
                        i = [aY, aV].indexOf(h = bm(d)) >= 0 ? -1 : 1,
                        k = (j = "function" == typeof g ? g(Object.assign({}, e, {
                            placement: d
                        })) : g)[0],
                        l = j[1],
                        k = k || 0,
                        l = (l || 0) * i,
                        [aY, aX].indexOf(h) >= 0 ? {
                            x: l,
                            y: k
                        } : {
                            x: k,
                            y: l
                        }),
                        a
                    }, {})
                      , h = g[b.placement]
                      , i = h.x
                      , j = h.y;
                    null != b.modifiersData.popperOffsets && (b.modifiersData.popperOffsets.x += i,
                    b.modifiersData.popperOffsets.y += j),
                    b.modifiersData[d] = g
                }
            }
              , b3 = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(a) {
                    var b = a.state
                      , c = a.name;
                    b.modifiersData[c] = bY({
                        reference: b.rects.reference,
                        element: b.rects.popper,
                        strategy: "absolute",
                        placement: b.placement
                    })
                },
                data: {}
            }
              , b4 = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(a) {
                    var b, c = a.state, d = a.options, e = a.name, f = d.mainAxis, g = d.altAxis, h = d.boundary, i = d.rootBoundary, j = d.altBoundary, k = d.padding, l = d.tether, m = void 0 === l || l, n = d.tetherOffset, o = void 0 === n ? 0 : n, p = bZ(c, {
                        boundary: h,
                        rootBoundary: i,
                        padding: k,
                        altBoundary: j
                    }), q = bm(c.placement), r = bH(c.placement), s = !r, t = bB(q), u = "x" === (b = t) ? "y" : "x", v = c.modifiersData.popperOffsets, w = c.rects.reference, x = c.rects.popper, y = "function" == typeof o ? o(Object.assign({}, c.rects, {
                        placement: c.placement
                    })) : o, z = "number" == typeof y ? {
                        mainAxis: y,
                        altAxis: y
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, y), A = c.modifiersData.offset ? c.modifiersData.offset[c.placement] : null, B = {
                        x: 0,
                        y: 0
                    };
                    if (v) {
                        if (void 0 === f || f) {
                            var C, D = "y" === t ? aV : aY, E = "y" === t ? aW : aX, F = "y" === t ? "height" : "width", G = v[t], H = G + p[D], I = G - p[E], J = m ? -x[F] / 2 : 0, K = r === a_ ? w[F] : x[F], L = r === a_ ? -x[F] : -w[F], M = c.elements.arrow, N = m && M ? bt(M) : {
                                width: 0,
                                height: 0
                            }, O = c.modifiersData["arrow#persistent"] ? c.modifiersData["arrow#persistent"].padding : bD(), P = O[D], Q = O[E], R = bC(0, w[F], N[F]), S = s ? w[F] / 2 - J - R - P - z.mainAxis : K - R - P - z.mainAxis, T = s ? -w[F] / 2 + J + R + Q + z.mainAxis : L + R + Q + z.mainAxis, U = c.elements.arrow && bA(c.elements.arrow), V = U ? "y" === t ? U.clientTop || 0 : U.clientLeft || 0 : 0, W = null != (C = null == A ? void 0 : A[t]) ? C : 0, X = G + S - W - V, Y = G + T - W, Z = bC(m ? bo(H, X) : H, G, m ? bn(I, Y) : I);
                            v[t] = Z,
                            B[t] = Z - G
                        }
                        if (void 0 !== g && g) {
                            var $, _, aa, ab, ac, ad = "x" === t ? aV : aY, ae = "x" === t ? aW : aX, af = v[u], ag = "y" === u ? "height" : "width", ah = af + p[ad], ai = af - p[ae], aj = -1 !== [aV, aY].indexOf(q), ak = null != ($ = null == A ? void 0 : A[u]) ? $ : 0, al = aj ? ah : af - w[ag] - x[ag] - ak + z.altAxis, am = aj ? af + w[ag] + x[ag] - ak - z.altAxis : ai, an = m && aj ? (_ = al,
                            aa = af,
                            (ac = bC(_, aa, ab = am)) > ab ? ab : ac) : bC(m ? al : ah, af, m ? am : ai);
                            v[u] = an,
                            B[u] = an - af
                        }
                        c.modifiersData[e] = B
                    }
                },
                requiresIfExists: ["offset"]
            };
            var b5 = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };
            function b6() {
                for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)
                    b[c] = arguments[c];
                return !b.some(function(a) {
                    return !(a && "function" == typeof a.getBoundingClientRect)
                })
            }
            function b7(a) {
                void 0 === a && (a = {});
                var b = a
                  , c = b.defaultModifiers
                  , d = void 0 === c ? [] : c
                  , e = b.defaultOptions
                  , f = void 0 === e ? b5 : e;
                return function(a, b, c) {
                    void 0 === c && (c = f);
                    var e = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, b5, f),
                        modifiersData: {},
                        elements: {
                            reference: a,
                            popper: b
                        },
                        attributes: {},
                        styles: {}
                    }
                      , g = []
                      , h = !1
                      , i = {
                        state: e,
                        setOptions: function(c) {
                            var g, h, l, m, n = "function" == typeof c ? c(e.options) : c;
                            k(),
                            e.options = Object.assign({}, f, e.options, n),
                            e.scrollParents = {
                                reference: bi(a) ? bV(a) : a.contextElement ? bV(a.contextElement) : [],
                                popper: bV(b)
                            };
                            var o = (m = function(a) {
                                var b = new Map
                                  , c = new Set
                                  , d = [];
                                function e(a) {
                                    c.add(a.name),
                                    [].concat(a.requires || [], a.requiresIfExists || []).forEach(function(a) {
                                        if (!c.has(a)) {
                                            var d = b.get(a);
                                            d && e(d)
                                        }
                                    }),
                                    d.push(a)
                                }
                                return a.forEach(function(a) {
                                    b.set(a.name, a)
                                }),
                                a.forEach(function(a) {
                                    c.has(a.name) || e(a)
                                }),
                                d
                            }(l = Object.keys(h = (g = [].concat(d, e.options.modifiers)).reduce(function(a, b) {
                                var c = a[b.name];
                                return a[b.name] = c ? Object.assign({}, c, b, {
                                    options: Object.assign({}, c.options, b.options),
                                    data: Object.assign({}, c.data, b.data)
                                }) : b,
                                a
                            }, {})).map(function(a) {
                                return h[a]
                            })),
                            bf.reduce(function(a, b) {
                                return a.concat(m.filter(function(a) {
                                    return a.phase === b
                                }))
                            }, []));
                            return e.orderedModifiers = o.filter(function(a) {
                                return a.enabled
                            }),
                            j(),
                            i.update()
                        },
                        forceUpdate: function() {
                            if (!h) {
                                var a, b, c, d, f, g, j, k, l, m, n, o, p, q, r, s = e.elements, t = s.reference, u = s.popper;
                                if (b6(t, u)) {
                                    e.rects = {
                                        reference: (c = t,
                                        d = bA(u),
                                        f = "fixed" === e.options.strategy,
                                        g = bj(d),
                                        n = bj(d) && (l = bp((k = (j = d).getBoundingClientRect()).width) / j.offsetWidth || 1,
                                        m = bp(k.height) / j.offsetHeight || 1,
                                        1 !== l || 1 !== m),
                                        o = bx(d),
                                        p = bs(c, n, f),
                                        q = {
                                            scrollLeft: 0,
                                            scrollTop: 0
                                        },
                                        r = {
                                            x: 0,
                                            y: 0
                                        },
                                        (g || !g && !f) && (("body" !== bg(d) || bT(o)) && (q = (a = d,
                                        a !== bh(a) && bj(a) ? {
                                            scrollLeft: (b = a).scrollLeft,
                                            scrollTop: b.scrollTop
                                        } : bR(a))),
                                        bj(d) ? (r = bs(d, !0),
                                        r.x += d.clientLeft,
                                        r.y += d.clientTop) : o && (r.x = bS(o))),
                                        {
                                            x: p.left + q.scrollLeft - r.x,
                                            y: p.top + q.scrollTop - r.y,
                                            width: p.width,
                                            height: p.height
                                        }),
                                        popper: bt(u)
                                    },
                                    e.reset = !1,
                                    e.placement = e.options.placement,
                                    e.orderedModifiers.forEach(function(a) {
                                        return e.modifiersData[a.name] = Object.assign({}, a.data)
                                    });
                                    for (var v = 0; v < e.orderedModifiers.length; v++) {
                                        if (!0 === e.reset) {
                                            e.reset = !1,
                                            v = -1;
                                            continue
                                        }
                                        var w = e.orderedModifiers[v]
                                          , x = w.fn
                                          , y = w.options
                                          , z = void 0 === y ? {} : y
                                          , A = w.name;
                                        "function" == typeof x && (e = x({
                                            state: e,
                                            options: z,
                                            name: A,
                                            instance: i
                                        }) || e)
                                    }
                                }
                            }
                        },
                        update: function(a) {
                            var b;
                            return function() {
                                return b || (b = new Promise(function(c) {
                                    Promise.resolve().then(function() {
                                        b = void 0,
                                        c(a())
                                    })
                                }
                                )),
                                b
                            }
                        }(function() {
                            return new Promise(function(a) {
                                i.forceUpdate(),
                                a(e)
                            }
                            )
                        }),
                        destroy: function() {
                            k(),
                            h = !0
                        }
                    };
                    if (!b6(a, b))
                        return i;
                    function j() {
                        e.orderedModifiers.forEach(function(a) {
                            var b = a.name
                              , c = a.options
                              , d = a.effect;
                            if ("function" == typeof d) {
                                var f = d({
                                    state: e,
                                    name: b,
                                    instance: i,
                                    options: void 0 === c ? {} : c
                                })
                                  , h = function() {};
                                g.push(f || h)
                            }
                        })
                    }
                    function k() {
                        g.forEach(function(a) {
                            return a()
                        }),
                        g = []
                    }
                    return i.setOptions(c).then(function(a) {
                        !h && c.onFirstUpdate && c.onFirstUpdate(a)
                    }),
                    i
                }
            }
            var b8 = b7()
              , b9 = b7({
                defaultModifiers: [bM, b3, bK, bl]
            })
              , ca = b7({
                defaultModifiers: [bM, b3, bK, bl, b2, b$, b4, bG, b1]
            });
            let cb = Object.freeze(Object.defineProperty({
                __proto__: null,
                afterMain: bb,
                afterRead: a8,
                afterWrite: be,
                applyStyles: bl,
                arrow: bG,
                auto: aZ,
                basePlacements: a$,
                beforeMain: a9,
                beforeRead: a6,
                beforeWrite: bc,
                bottom: aW,
                clippingParents: a0,
                computeStyles: bK,
                createPopper: ca,
                createPopperBase: b8,
                createPopperLite: b9,
                detectOverflow: bZ,
                end: "end",
                eventListeners: bM,
                flip: b$,
                hide: b1,
                left: aY,
                main: ba,
                modifierPhases: bf,
                offset: b2,
                placements: a5,
                popper: a2,
                popperGenerator: b7,
                popperOffsets: b3,
                preventOverflow: b4,
                read: a7,
                reference: a3,
                right: aX,
                start: a_,
                top: aV,
                variationPlacements: a4,
                viewport: a1,
                write: bd
            }, Symbol.toStringTag, {
                value: "Module"
            }))
              , cc = "dropdown"
              , cd = ".bs.dropdown"
              , ce = ".data-api"
              , cf = "ArrowDown"
              , cg = `hide${cd}`
              , ch = `hidden${cd}`
              , ci = `show${cd}`
              , cj = `shown${cd}`
              , ck = `click${cd}${ce}`
              , cl = `keydown${cd}${ce}`
              , cm = `keyup${cd}${ce}`
              , cn = "show"
              , co = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)'
              , cp = `${co}.${cn}`
              , cq = ".dropdown-menu"
              , cr = s() ? "top-end" : "top-start"
              , cs = s() ? "top-start" : "top-end"
              , ct = s() ? "bottom-end" : "bottom-start"
              , cu = s() ? "bottom-start" : "bottom-end"
              , cv = s() ? "left-start" : "right-start"
              , cw = s() ? "right-start" : "left-start"
              , cx = {
                autoClose: !0,
                boundary: "clippingParents",
                display: "dynamic",
                offset: [0, 2],
                popperConfig: null,
                reference: "toggle"
            }
              , cy = {
                autoClose: "(boolean|string)",
                boundary: "(string|element)",
                display: "string",
                offset: "(array|string|function)",
                popperConfig: "(null|object|function)",
                reference: "(string|element|object)"
            };
            class cz extends S {
                constructor(a, b) {
                    super(a, b),
                    this._popper = null,
                    this._parent = this._element.parentNode,
                    this._menu = U.next(this._element, cq)[0] || U.prev(this._element, cq)[0] || U.findOne(cq, this._parent),
                    this._inNavbar = this._detectNavbar()
                }
                static get Default() {
                    return cx
                }
                static get DefaultType() {
                    return cy
                }
                static get NAME() {
                    return cc
                }
                toggle() {
                    return this._isShown() ? this.hide() : this.show()
                }
                show() {
                    if (l(this._element) || this._isShown())
                        return;
                    let a = {
                        relatedTarget: this._element
                    }
                      , b = M.trigger(this._element, ci, a);
                    if (!b.defaultPrevented) {
                        if (this._createPopper(),
                        "ontouchstart"in document.documentElement && !this._parent.closest(".navbar-nav"))
                            for (let c of [].concat(...document.body.children))
                                M.on(c, "mouseover", n);
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        this._menu.classList.add(cn),
                        this._element.classList.add(cn),
                        M.trigger(this._element, cj, a)
                    }
                }
                hide() {
                    if (l(this._element) || !this._isShown())
                        return;
                    let a = {
                        relatedTarget: this._element
                    };
                    this._completeHide(a)
                }
                dispose() {
                    this._popper && this._popper.destroy(),
                    super.dispose()
                }
                update() {
                    this._inNavbar = this._detectNavbar(),
                    this._popper && this._popper.update()
                }
                _completeHide(a) {
                    let b = M.trigger(this._element, cg, a);
                    if (!b.defaultPrevented) {
                        if ("ontouchstart"in document.documentElement)
                            for (let c of [].concat(...document.body.children))
                                M.off(c, "mouseover", n);
                        this._popper && this._popper.destroy(),
                        this._menu.classList.remove(cn),
                        this._element.classList.remove(cn),
                        this._element.setAttribute("aria-expanded", "false"),
                        Q.removeDataAttribute(this._menu, "popper"),
                        M.trigger(this._element, ch, a)
                    }
                }
                _getConfig(a) {
                    if ("object" == typeof (a = super._getConfig(a)).reference && !i(a.reference) && "function" != typeof a.reference.getBoundingClientRect)
                        throw TypeError(`${cc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                    return a
                }
                _createPopper() {
                    if (void 0 === cb)
                        throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let a = this._element;
                    "parent" === this._config.reference ? a = this._parent : i(this._config.reference) ? a = j(this._config.reference) : "object" == typeof this._config.reference && (a = this._config.reference);
                    let b = this._getPopperConfig();
                    this._popper = ca(a, this._menu, b)
                }
                _isShown() {
                    return this._menu.classList.contains(cn)
                }
                _getPlacement() {
                    let a = this._parent;
                    if (a.classList.contains("dropend"))
                        return cv;
                    if (a.classList.contains("dropstart"))
                        return cw;
                    if (a.classList.contains("dropup-center"))
                        return "top";
                    if (a.classList.contains("dropdown-center"))
                        return "bottom";
                    let b = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return a.classList.contains("dropup") ? b ? cs : cr : b ? cu : ct
                }
                _detectNavbar() {
                    return null !== this._element.closest(".navbar")
                }
                _getOffset() {
                    let {offset: a} = this._config;
                    return "string" == typeof a ? a.split(",").map(a => Number.parseInt(a, 10)) : "function" == typeof a ? b => a(b, this._element) : a
                }
                _getPopperConfig() {
                    let a = {
                        placement: this._getPlacement(),
                        modifiers: [{
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }]
                    };
                    return (this._inNavbar || "static" === this._config.display) && (Q.setDataAttribute(this._menu, "popper", "static"),
                    a.modifiers = [{
                        name: "applyStyles",
                        enabled: !1
                    }]),
                    {
                        ...a,
                        ...u(this._config.popperConfig, [a])
                    }
                }
                _selectMenuItem({key: a, target: b}) {
                    let c = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(a => k(a));
                    c.length && w(c, b, a === cf, !c.includes(b)).focus()
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = cz.getOrCreateInstance(this, a);
                        if ("string" == typeof a) {
                            if (void 0 === b[a])
                                throw TypeError(`No method named "${a}"`);
                            b[a]()
                        }
                    })
                }
                static clearMenus(a) {
                    if (2 === a.button || "keyup" === a.type && "Tab" !== a.key)
                        return;
                    let b = U.find(cp);
                    for (let c of b) {
                        let d = cz.getInstance(c);
                        if (!d || !1 === d._config.autoClose)
                            continue;
                        let e = a.composedPath()
                          , f = e.includes(d._menu);
                        if (e.includes(d._element) || "inside" === d._config.autoClose && !f || "outside" === d._config.autoClose && f || d._menu.contains(a.target) && ("keyup" === a.type && "Tab" === a.key || /input|select|option|textarea|form/i.test(a.target.tagName)))
                            continue;
                        let g = {
                            relatedTarget: d._element
                        };
                        "click" === a.type && (g.clickEvent = a),
                        d._completeHide(g)
                    }
                }
                static dataApiKeydownHandler(a) {
                    let b = /input|textarea/i.test(a.target.tagName)
                      , c = "Escape" === a.key
                      , d = ["ArrowUp", cf].includes(a.key);
                    if (!d && !c || b && !c)
                        return;
                    a.preventDefault();
                    let e = this.matches(co) ? this : U.prev(this, co)[0] || U.next(this, co)[0] || U.findOne(co, a.delegateTarget.parentNode)
                      , f = cz.getOrCreateInstance(e);
                    if (d) {
                        a.stopPropagation(),
                        f.show(),
                        f._selectMenuItem(a);
                        return
                    }
                    f._isShown() && (a.stopPropagation(),
                    f.hide(),
                    e.focus())
                }
            }
            M.on(document, cl, co, cz.dataApiKeydownHandler),
            M.on(document, cl, cq, cz.dataApiKeydownHandler),
            M.on(document, ck, cz.clearMenus),
            M.on(document, cm, cz.clearMenus),
            M.on(document, ck, co, function(a) {
                a.preventDefault(),
                cz.getOrCreateInstance(this).toggle()
            }),
            t(cz);
            let cA = "backdrop"
              , cB = "show"
              , cC = `mousedown.bs.${cA}`
              , cD = {
                className: "modal-backdrop",
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: "body"
            }
              , cE = {
                className: "string",
                clickCallback: "(function|null)",
                isAnimated: "boolean",
                isVisible: "boolean",
                rootElement: "(element|string)"
            };
            class cF extends R {
                constructor(a) {
                    super(),
                    this._config = this._getConfig(a),
                    this._isAppended = !1,
                    this._element = null
                }
                static get Default() {
                    return cD
                }
                static get DefaultType() {
                    return cE
                }
                static get NAME() {
                    return cA
                }
                show(a) {
                    if (!this._config.isVisible) {
                        u(a);
                        return
                    }
                    this._append();
                    let b = this._getElement();
                    this._config.isAnimated && o(b),
                    b.classList.add(cB),
                    this._emulateAnimation( () => {
                        u(a)
                    }
                    )
                }
                hide(a) {
                    if (!this._config.isVisible) {
                        u(a);
                        return
                    }
                    this._getElement().classList.remove(cB),
                    this._emulateAnimation( () => {
                        this.dispose(),
                        u(a)
                    }
                    )
                }
                dispose() {
                    this._isAppended && (M.off(this._element, cC),
                    this._element.remove(),
                    this._isAppended = !1)
                }
                _getElement() {
                    if (!this._element) {
                        let a = document.createElement("div");
                        a.className = this._config.className,
                        this._config.isAnimated && a.classList.add("fade"),
                        this._element = a
                    }
                    return this._element
                }
                _configAfterMerge(a) {
                    return a.rootElement = j(a.rootElement),
                    a
                }
                _append() {
                    if (this._isAppended)
                        return;
                    let a = this._getElement();
                    this._config.rootElement.append(a),
                    M.on(a, cC, () => {
                        u(this._config.clickCallback)
                    }
                    ),
                    this._isAppended = !0
                }
                _emulateAnimation(a) {
                    v(a, this._getElement(), this._config.isAnimated)
                }
            }
            let cG = ".bs.focustrap"
              , cH = `focusin${cG}`
              , cI = `keydown.tab${cG}`
              , cJ = "backward"
              , cK = {
                autofocus: !0,
                trapElement: null
            }
              , cL = {
                autofocus: "boolean",
                trapElement: "element"
            };
            class cM extends R {
                constructor(a) {
                    super(),
                    this._config = this._getConfig(a),
                    this._isActive = !1,
                    this._lastTabNavDirection = null
                }
                static get Default() {
                    return cK
                }
                static get DefaultType() {
                    return cL
                }
                static get NAME() {
                    return "focustrap"
                }
                activate() {
                    !this._isActive && (this._config.autofocus && this._config.trapElement.focus(),
                    M.off(document, cG),
                    M.on(document, cH, a => this._handleFocusin(a)),
                    M.on(document, cI, a => this._handleKeydown(a)),
                    this._isActive = !0)
                }
                deactivate() {
                    this._isActive && (this._isActive = !1,
                    M.off(document, cG))
                }
                _handleFocusin(a) {
                    let {trapElement: b} = this._config;
                    if (a.target === document || a.target === b || b.contains(a.target))
                        return;
                    let c = U.focusableChildren(b);
                    0 === c.length ? b.focus() : this._lastTabNavDirection === cJ ? c[c.length - 1].focus() : c[0].focus()
                }
                _handleKeydown(a) {
                    "Tab" === a.key && (this._lastTabNavDirection = a.shiftKey ? cJ : "forward")
                }
            }
            let cN = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
              , cO = ".sticky-top"
              , cP = "padding-right"
              , cQ = "margin-right";
            class cR {
                constructor() {
                    this._element = document.body
                }
                getWidth() {
                    let a = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - a)
                }
                hide() {
                    let a = this.getWidth();
                    this._disableOverFlow(),
                    this._setElementAttributes(this._element, cP, b => b + a),
                    this._setElementAttributes(cN, cP, b => b + a),
                    this._setElementAttributes(cO, cQ, b => b - a)
                }
                reset() {
                    this._resetElementAttributes(this._element, "overflow"),
                    this._resetElementAttributes(this._element, cP),
                    this._resetElementAttributes(cN, cP),
                    this._resetElementAttributes(cO, cQ)
                }
                isOverflowing() {
                    return this.getWidth() > 0
                }
                _disableOverFlow() {
                    this._saveInitialAttribute(this._element, "overflow"),
                    this._element.style.overflow = "hidden"
                }
                _setElementAttributes(a, b, c) {
                    let d = this.getWidth()
                      , e = a => {
                        if (a !== this._element && window.innerWidth > a.clientWidth + d)
                            return;
                        this._saveInitialAttribute(a, b);
                        let e = window.getComputedStyle(a).getPropertyValue(b);
                        a.style.setProperty(b, `${c(Number.parseFloat(e))}px`)
                    }
                    ;
                    this._applyManipulationCallback(a, e)
                }
                _saveInitialAttribute(a, b) {
                    let c = a.style.getPropertyValue(b);
                    c && Q.setDataAttribute(a, b, c)
                }
                _resetElementAttributes(a, b) {
                    let c = a => {
                        let c = Q.getDataAttribute(a, b);
                        if (null === c) {
                            a.style.removeProperty(b);
                            return
                        }
                        Q.removeDataAttribute(a, b),
                        a.style.setProperty(b, c)
                    }
                    ;
                    this._applyManipulationCallback(a, c)
                }
                _applyManipulationCallback(a, b) {
                    if (i(a)) {
                        b(a);
                        return
                    }
                    for (let c of U.find(a, this._element))
                        b(c)
                }
            }
            let cS = ".bs.modal"
              , cT = `hide${cS}`
              , cU = `hidePrevented${cS}`
              , cV = `hidden${cS}`
              , cW = `show${cS}`
              , cX = `shown${cS}`
              , cY = `resize${cS}`
              , cZ = `click.dismiss${cS}`
              , c$ = `mousedown.dismiss${cS}`
              , c_ = `keydown.dismiss${cS}`
              , c0 = `click${cS}.data-api`
              , c1 = "modal-open"
              , c2 = "show"
              , c3 = "modal-static"
              , c4 = {
                backdrop: !0,
                focus: !0,
                keyboard: !0
            }
              , c5 = {
                backdrop: "(boolean|string)",
                focus: "boolean",
                keyboard: "boolean"
            };
            class c6 extends S {
                constructor(a, b) {
                    super(a, b),
                    this._dialog = U.findOne(".modal-dialog", this._element),
                    this._backdrop = this._initializeBackDrop(),
                    this._focustrap = this._initializeFocusTrap(),
                    this._isShown = !1,
                    this._isTransitioning = !1,
                    this._scrollBar = new cR,
                    this._addEventListeners()
                }
                static get Default() {
                    return c4
                }
                static get DefaultType() {
                    return c5
                }
                static get NAME() {
                    return "modal"
                }
                toggle(a) {
                    return this._isShown ? this.hide() : this.show(a)
                }
                show(a) {
                    if (this._isShown || this._isTransitioning)
                        return;
                    let b = M.trigger(this._element, cW, {
                        relatedTarget: a
                    });
                    !b.defaultPrevented && (this._isShown = !0,
                    this._isTransitioning = !0,
                    this._scrollBar.hide(),
                    document.body.classList.add(c1),
                    this._adjustDialog(),
                    this._backdrop.show( () => this._showElement(a)))
                }
                hide() {
                    if (!this._isShown || this._isTransitioning)
                        return;
                    let a = M.trigger(this._element, cT);
                    !a.defaultPrevented && (this._isShown = !1,
                    this._isTransitioning = !0,
                    this._focustrap.deactivate(),
                    this._element.classList.remove(c2),
                    this._queueCallback( () => this._hideModal(), this._element, this._isAnimated()))
                }
                dispose() {
                    M.off(window, cS),
                    M.off(this._dialog, cS),
                    this._backdrop.dispose(),
                    this._focustrap.deactivate(),
                    super.dispose()
                }
                handleUpdate() {
                    this._adjustDialog()
                }
                _initializeBackDrop() {
                    return new cF({
                        isVisible: Boolean(this._config.backdrop),
                        isAnimated: this._isAnimated()
                    })
                }
                _initializeFocusTrap() {
                    return new cM({
                        trapElement: this._element
                    })
                }
                _showElement(a) {
                    document.body.contains(this._element) || document.body.append(this._element),
                    this._element.style.display = "block",
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.scrollTop = 0;
                    let b = U.findOne(".modal-body", this._dialog);
                    b && (b.scrollTop = 0),
                    o(this._element),
                    this._element.classList.add(c2);
                    let c = () => {
                        this._config.focus && this._focustrap.activate(),
                        this._isTransitioning = !1,
                        M.trigger(this._element, cX, {
                            relatedTarget: a
                        })
                    }
                    ;
                    this._queueCallback(c, this._dialog, this._isAnimated())
                }
                _addEventListeners() {
                    M.on(this._element, c_, a => {
                        if ("Escape" === a.key) {
                            if (this._config.keyboard) {
                                this.hide();
                                return
                            }
                            this._triggerBackdropTransition()
                        }
                    }
                    ),
                    M.on(window, cY, () => {
                        this._isShown && !this._isTransitioning && this._adjustDialog()
                    }
                    ),
                    M.on(this._element, c$, a => {
                        M.one(this._element, cZ, b => {
                            if (this._element === a.target && this._element === b.target) {
                                if ("static" === this._config.backdrop) {
                                    this._triggerBackdropTransition();
                                    return
                                }
                                this._config.backdrop && this.hide()
                            }
                        }
                        )
                    }
                    )
                }
                _hideModal() {
                    this._element.style.display = "none",
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._isTransitioning = !1,
                    this._backdrop.hide( () => {
                        document.body.classList.remove(c1),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        M.trigger(this._element, cV)
                    }
                    )
                }
                _isAnimated() {
                    return this._element.classList.contains("fade")
                }
                _triggerBackdropTransition() {
                    let a = M.trigger(this._element, cU);
                    if (a.defaultPrevented)
                        return;
                    let b = this._element.scrollHeight > document.documentElement.clientHeight
                      , c = this._element.style.overflowY;
                    !("hidden" === c || this._element.classList.contains(c3)) && (b || (this._element.style.overflowY = "hidden"),
                    this._element.classList.add(c3),
                    this._queueCallback( () => {
                        this._element.classList.remove(c3),
                        this._queueCallback( () => {
                            this._element.style.overflowY = c
                        }
                        , this._dialog)
                    }
                    , this._dialog),
                    this._element.focus())
                }
                _adjustDialog() {
                    let a = this._element.scrollHeight > document.documentElement.clientHeight
                      , b = this._scrollBar.getWidth()
                      , c = b > 0;
                    if (c && !a) {
                        let d = s() ? "paddingLeft" : "paddingRight";
                        this._element.style[d] = `${b}px`
                    }
                    if (!c && a) {
                        let e = s() ? "paddingRight" : "paddingLeft";
                        this._element.style[e] = `${b}px`
                    }
                }
                _resetAdjustments() {
                    this._element.style.paddingLeft = "",
                    this._element.style.paddingRight = ""
                }
                static jQueryInterface(a, b) {
                    return this.each(function() {
                        let c = c6.getOrCreateInstance(this, a);
                        if ("string" == typeof a) {
                            if (void 0 === c[a])
                                throw TypeError(`No method named "${a}"`);
                            c[a](b)
                        }
                    })
                }
            }
            M.on(document, c0, '[data-bs-toggle="modal"]', function(a) {
                let b = U.getElementFromSelector(this);
                ["A", "AREA"].includes(this.tagName) && a.preventDefault(),
                M.one(b, cW, a => {
                    !a.defaultPrevented && M.one(b, cV, () => {
                        k(this) && this.focus()
                    }
                    )
                }
                );
                let c = U.findOne(".modal.show");
                c && c6.getInstance(c).hide();
                let d = c6.getOrCreateInstance(b);
                d.toggle(this)
            }),
            V(c6),
            t(c6);
            let c7 = ".bs.offcanvas"
              , c8 = ".data-api"
              , c9 = `load${c7}${c8}`
              , da = "show"
              , db = "showing"
              , dc = "hiding"
              , dd = ".offcanvas.show"
              , de = `show${c7}`
              , df = `shown${c7}`
              , dg = `hide${c7}`
              , dh = `hidePrevented${c7}`
              , di = `hidden${c7}`
              , dj = `resize${c7}`
              , dk = `click${c7}${c8}`
              , dl = `keydown.dismiss${c7}`
              , dm = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            }
              , dn = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                scroll: "boolean"
            };
            class dp extends S {
                constructor(a, b) {
                    super(a, b),
                    this._isShown = !1,
                    this._backdrop = this._initializeBackDrop(),
                    this._focustrap = this._initializeFocusTrap(),
                    this._addEventListeners()
                }
                static get Default() {
                    return dm
                }
                static get DefaultType() {
                    return dn
                }
                static get NAME() {
                    return "offcanvas"
                }
                toggle(a) {
                    return this._isShown ? this.hide() : this.show(a)
                }
                show(a) {
                    if (this._isShown)
                        return;
                    let b = M.trigger(this._element, de, {
                        relatedTarget: a
                    });
                    if (b.defaultPrevented)
                        return;
                    this._isShown = !0,
                    this._backdrop.show(),
                    this._config.scroll || new cR().hide(),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add(db);
                    let c = () => {
                        (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(),
                        this._element.classList.add(da),
                        this._element.classList.remove(db),
                        M.trigger(this._element, df, {
                            relatedTarget: a
                        })
                    }
                    ;
                    this._queueCallback(c, this._element, !0)
                }
                hide() {
                    if (!this._isShown)
                        return;
                    let a = M.trigger(this._element, dg);
                    if (a.defaultPrevented)
                        return;
                    this._focustrap.deactivate(),
                    this._element.blur(),
                    this._isShown = !1,
                    this._element.classList.add(dc),
                    this._backdrop.hide();
                    let b = () => {
                        this._element.classList.remove(da, dc),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._config.scroll || new cR().reset(),
                        M.trigger(this._element, di)
                    }
                    ;
                    this._queueCallback(b, this._element, !0)
                }
                dispose() {
                    this._backdrop.dispose(),
                    this._focustrap.deactivate(),
                    super.dispose()
                }
                _initializeBackDrop() {
                    let a = () => {
                        if ("static" === this._config.backdrop) {
                            M.trigger(this._element, dh);
                            return
                        }
                        this.hide()
                    }
                      , b = Boolean(this._config.backdrop);
                    return new cF({
                        className: "offcanvas-backdrop",
                        isVisible: b,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: b ? a : null
                    })
                }
                _initializeFocusTrap() {
                    return new cM({
                        trapElement: this._element
                    })
                }
                _addEventListeners() {
                    M.on(this._element, dl, a => {
                        if ("Escape" === a.key) {
                            if (this._config.keyboard) {
                                this.hide();
                                return
                            }
                            M.trigger(this._element, dh)
                        }
                    }
                    )
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = dp.getOrCreateInstance(this, a);
                        if ("string" == typeof a) {
                            if (void 0 === b[a] || a.startsWith("_") || "constructor" === a)
                                throw TypeError(`No method named "${a}"`);
                            b[a](this)
                        }
                    })
                }
            }
            M.on(document, dk, '[data-bs-toggle="offcanvas"]', function(a) {
                let b = U.getElementFromSelector(this);
                if (["A", "AREA"].includes(this.tagName) && a.preventDefault(),
                l(this))
                    return;
                M.one(b, di, () => {
                    k(this) && this.focus()
                }
                );
                let c = U.findOne(dd);
                c && c !== b && dp.getInstance(c).hide();
                let d = dp.getOrCreateInstance(b);
                d.toggle(this)
            }),
            M.on(window, c9, () => {
                for (let a of U.find(dd))
                    dp.getOrCreateInstance(a).show()
            }
            ),
            M.on(window, dj, () => {
                for (let a of U.find("[aria-modal][class*=show][class*=offcanvas-]"))
                    "fixed" !== getComputedStyle(a).position && dp.getOrCreateInstance(a).hide()
            }
            ),
            V(dp),
            t(dp);
            let dq = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                dd: [],
                div: [],
                dl: [],
                dt: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }
              , dr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
              , ds = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i
              , dt = (a, b) => {
                let c = a.nodeName.toLowerCase();
                return b.includes(c) ? !dr.has(c) || Boolean(ds.test(a.nodeValue)) : b.filter(a => a instanceof RegExp).some(a => a.test(c))
            }
              , du = {
                allowList: dq,
                content: {},
                extraClass: "",
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: "<div></div>"
            }
              , dv = {
                allowList: "object",
                content: "object",
                extraClass: "(string|function)",
                html: "boolean",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                template: "string"
            }
              , dw = {
                entry: "(string|element|function|null)",
                selector: "(string|element)"
            };
            class dx extends R {
                constructor(a) {
                    super(),
                    this._config = this._getConfig(a)
                }
                static get Default() {
                    return du
                }
                static get DefaultType() {
                    return dv
                }
                static get NAME() {
                    return "TemplateFactory"
                }
                getContent() {
                    return Object.values(this._config.content).map(a => this._resolvePossibleFunction(a)).filter(Boolean)
                }
                hasContent() {
                    return this.getContent().length > 0
                }
                changeContent(a) {
                    return this._checkContent(a),
                    this._config.content = {
                        ...this._config.content,
                        ...a
                    },
                    this
                }
                toHtml() {
                    let a = document.createElement("div");
                    for (let[b,c] of (a.innerHTML = this._maybeSanitize(this._config.template),
                    Object.entries(this._config.content)))
                        this._setContent(a, c, b);
                    let d = a.children[0]
                      , e = this._resolvePossibleFunction(this._config.extraClass);
                    return e && d.classList.add(...e.split(" ")),
                    d
                }
                _typeCheckConfig(a) {
                    super._typeCheckConfig(a),
                    this._checkContent(a.content)
                }
                _checkContent(a) {
                    for (let[b,c] of Object.entries(a))
                        super._typeCheckConfig({
                            selector: b,
                            entry: c
                        }, dw)
                }
                _setContent(a, b, c) {
                    let d = U.findOne(c, a);
                    if (d) {
                        if (!(b = this._resolvePossibleFunction(b))) {
                            d.remove();
                            return
                        }
                        if (i(b)) {
                            this._putElementInTemplate(j(b), d);
                            return
                        }
                        if (this._config.html) {
                            d.innerHTML = this._maybeSanitize(b);
                            return
                        }
                        d.textContent = b
                    }
                }
                _maybeSanitize(a) {
                    return this._config.sanitize ? function(a, b, c) {
                        if (!a.length)
                            return a;
                        if (c && "function" == typeof c)
                            return c(a);
                        let d = new window.DOMParser
                          , e = d.parseFromString(a, "text/html")
                          , f = [].concat(...e.body.querySelectorAll("*"));
                        for (let g of f) {
                            let h = g.nodeName.toLowerCase();
                            if (!Object.keys(b).includes(h)) {
                                g.remove();
                                continue
                            }
                            let i = [].concat(...g.attributes)
                              , j = [].concat(b["*"] || [], b[h] || []);
                            for (let k of i)
                                dt(k, j) || g.removeAttribute(k.nodeName)
                        }
                        return e.body.innerHTML
                    }(a, this._config.allowList, this._config.sanitizeFn) : a
                }
                _resolvePossibleFunction(a) {
                    return u(a, [this])
                }
                _putElementInTemplate(a, b) {
                    if (this._config.html) {
                        b.innerHTML = "",
                        b.append(a);
                        return
                    }
                    b.textContent = a.textContent
                }
            }
            let dy = new Set(["sanitize", "allowList", "sanitizeFn"])
              , dz = "fade"
              , dA = "show"
              , dB = ".modal"
              , dC = "hide.bs.modal"
              , dD = "hover"
              , dE = "focus"
              , dF = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: s() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: s() ? "right" : "left"
            }
              , dG = {
                allowList: dq,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 6],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus"
            }
              , dH = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string"
            };
            class dI extends S {
                constructor(a, b) {
                    if (void 0 === cb)
                        throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    super(a, b),
                    this._isEnabled = !0,
                    this._timeout = 0,
                    this._isHovered = null,
                    this._activeTrigger = {},
                    this._popper = null,
                    this._templateFactory = null,
                    this._newContent = null,
                    this.tip = null,
                    this._setListeners(),
                    this._config.selector || this._fixTitle()
                }
                static get Default() {
                    return dG
                }
                static get DefaultType() {
                    return dH
                }
                static get NAME() {
                    return "tooltip"
                }
                enable() {
                    this._isEnabled = !0
                }
                disable() {
                    this._isEnabled = !1
                }
                toggleEnabled() {
                    this._isEnabled = !this._isEnabled
                }
                toggle() {
                    if (this._isEnabled) {
                        if (this._activeTrigger.click = !this._activeTrigger.click,
                        this._isShown()) {
                            this._leave();
                            return
                        }
                        this._enter()
                    }
                }
                dispose() {
                    clearTimeout(this._timeout),
                    M.off(this._element.closest(dB), dC, this._hideModalHandler),
                    this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
                    this._disposePopper(),
                    super.dispose()
                }
                show() {
                    if ("none" === this._element.style.display)
                        throw Error("Please use show on visible elements");
                    if (!(this._isWithContent() && this._isEnabled))
                        return;
                    let a = M.trigger(this._element, this.constructor.eventName("show"))
                      , b = m(this._element)
                      , c = (b || this._element.ownerDocument.documentElement).contains(this._element);
                    if (a.defaultPrevented || !c)
                        return;
                    this._disposePopper();
                    let d = this._getTipElement();
                    this._element.setAttribute("aria-describedby", d.getAttribute("id"));
                    let {container: e} = this._config;
                    if (this._element.ownerDocument.documentElement.contains(this.tip) || (e.append(d),
                    M.trigger(this._element, this.constructor.eventName("inserted"))),
                    this._popper = this._createPopper(d),
                    d.classList.add(dA),
                    "ontouchstart"in document.documentElement)
                        for (let f of [].concat(...document.body.children))
                            M.on(f, "mouseover", n);
                    let g = () => {
                        M.trigger(this._element, this.constructor.eventName("shown")),
                        !1 === this._isHovered && this._leave(),
                        this._isHovered = !1
                    }
                    ;
                    this._queueCallback(g, this.tip, this._isAnimated())
                }
                hide() {
                    if (!this._isShown())
                        return;
                    let a = M.trigger(this._element, this.constructor.eventName("hide"));
                    if (a.defaultPrevented)
                        return;
                    let b = this._getTipElement();
                    if (b.classList.remove(dA),
                    "ontouchstart"in document.documentElement)
                        for (let c of [].concat(...document.body.children))
                            M.off(c, "mouseover", n);
                    this._activeTrigger.click = !1,
                    this._activeTrigger[dE] = !1,
                    this._activeTrigger[dD] = !1,
                    this._isHovered = null;
                    let d = () => {
                        !this._isWithActiveTrigger() && (this._isHovered || this._disposePopper(),
                        this._element.removeAttribute("aria-describedby"),
                        M.trigger(this._element, this.constructor.eventName("hidden")))
                    }
                    ;
                    this._queueCallback(d, this.tip, this._isAnimated())
                }
                update() {
                    this._popper && this._popper.update()
                }
                _isWithContent() {
                    return Boolean(this._getTitle())
                }
                _getTipElement() {
                    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
                    this.tip
                }
                _createTipElement(a) {
                    let b = this._getTemplateFactory(a).toHtml();
                    if (!b)
                        return null;
                    b.classList.remove(dz, dA),
                    b.classList.add(`bs-${this.constructor.NAME}-auto`);
                    let c = f(this.constructor.NAME).toString();
                    return b.setAttribute("id", c),
                    this._isAnimated() && b.classList.add(dz),
                    b
                }
                setContent(a) {
                    this._newContent = a,
                    this._isShown() && (this._disposePopper(),
                    this.show())
                }
                _getTemplateFactory(a) {
                    return this._templateFactory ? this._templateFactory.changeContent(a) : this._templateFactory = new dx({
                        ...this._config,
                        content: a,
                        extraClass: this._resolvePossibleFunction(this._config.customClass)
                    }),
                    this._templateFactory
                }
                _getContentForTemplate() {
                    return {
                        ".tooltip-inner": this._getTitle()
                    }
                }
                _getTitle() {
                    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
                }
                _initializeOnDelegatedTarget(a) {
                    return this.constructor.getOrCreateInstance(a.delegateTarget, this._getDelegateConfig())
                }
                _isAnimated() {
                    return this._config.animation || this.tip && this.tip.classList.contains(dz)
                }
                _isShown() {
                    return this.tip && this.tip.classList.contains(dA)
                }
                _createPopper(a) {
                    let b = u(this._config.placement, [this, a, this._element])
                      , c = dF[b.toUpperCase()];
                    return ca(this._element, a, this._getPopperConfig(c))
                }
                _getOffset() {
                    let {offset: a} = this._config;
                    return "string" == typeof a ? a.split(",").map(a => Number.parseInt(a, 10)) : "function" == typeof a ? b => a(b, this._element) : a
                }
                _resolvePossibleFunction(a) {
                    return u(a, [this._element])
                }
                _getPopperConfig(a) {
                    let b = {
                        placement: a,
                        modifiers: [{
                            name: "flip",
                            options: {
                                fallbackPlacements: this._config.fallbackPlacements
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: `.${this.constructor.NAME}-arrow`
                            }
                        }, {
                            name: "preSetPlacement",
                            enabled: !0,
                            phase: "beforeMain",
                            fn: a => {
                                this._getTipElement().setAttribute("data-popper-placement", a.state.placement)
                            }
                        }]
                    };
                    return {
                        ...b,
                        ...u(this._config.popperConfig, [b])
                    }
                }
                _setListeners() {
                    let a = this._config.trigger.split(" ");
                    for (let b of a)
                        if ("click" === b)
                            M.on(this._element, this.constructor.eventName("click"), this._config.selector, a => {
                                let b = this._initializeOnDelegatedTarget(a);
                                b.toggle()
                            }
                            );
                        else if ("manual" !== b) {
                            let c = b === dD ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin")
                              , d = b === dD ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                            M.on(this._element, c, this._config.selector, a => {
                                let b = this._initializeOnDelegatedTarget(a);
                                b._activeTrigger["focusin" === a.type ? dE : dD] = !0,
                                b._enter()
                            }
                            ),
                            M.on(this._element, d, this._config.selector, a => {
                                let b = this._initializeOnDelegatedTarget(a);
                                b._activeTrigger["focusout" === a.type ? dE : dD] = b._element.contains(a.relatedTarget),
                                b._leave()
                            }
                            )
                        }
                    this._hideModalHandler = () => {
                        this._element && this.hide()
                    }
                    ,
                    M.on(this._element.closest(dB), dC, this._hideModalHandler)
                }
                _fixTitle() {
                    let a = this._element.getAttribute("title");
                    a && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", a),
                    this._element.setAttribute("data-bs-original-title", a),
                    this._element.removeAttribute("title"))
                }
                _enter() {
                    if (this._isShown() || this._isHovered) {
                        this._isHovered = !0;
                        return
                    }
                    this._isHovered = !0,
                    this._setTimeout( () => {
                        this._isHovered && this.show()
                    }
                    , this._config.delay.show)
                }
                _leave() {
                    !this._isWithActiveTrigger() && (this._isHovered = !1,
                    this._setTimeout( () => {
                        this._isHovered || this.hide()
                    }
                    , this._config.delay.hide))
                }
                _setTimeout(a, b) {
                    clearTimeout(this._timeout),
                    this._timeout = setTimeout(a, b)
                }
                _isWithActiveTrigger() {
                    return Object.values(this._activeTrigger).includes(!0)
                }
                _getConfig(a) {
                    let b = Q.getDataAttributes(this._element);
                    for (let c of Object.keys(b))
                        dy.has(c) && delete b[c];
                    return a = {
                        ...b,
                        ..."object" == typeof a && a ? a : {}
                    },
                    a = this._mergeConfigObj(a),
                    a = this._configAfterMerge(a),
                    this._typeCheckConfig(a),
                    a
                }
                _configAfterMerge(a) {
                    return a.container = !1 === a.container ? document.body : j(a.container),
                    "number" == typeof a.delay && (a.delay = {
                        show: a.delay,
                        hide: a.delay
                    }),
                    "number" == typeof a.title && (a.title = a.title.toString()),
                    "number" == typeof a.content && (a.content = a.content.toString()),
                    a
                }
                _getDelegateConfig() {
                    let a = {};
                    for (let[b,c] of Object.entries(this._config))
                        this.constructor.Default[b] !== c && (a[b] = c);
                    return a.selector = !1,
                    a.trigger = "manual",
                    a
                }
                _disposePopper() {
                    this._popper && (this._popper.destroy(),
                    this._popper = null),
                    this.tip && (this.tip.remove(),
                    this.tip = null)
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = dI.getOrCreateInstance(this, a);
                        if ("string" == typeof a) {
                            if (void 0 === b[a])
                                throw TypeError(`No method named "${a}"`);
                            b[a]()
                        }
                    })
                }
            }
            t(dI);
            let dJ = {
                ...dI.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click"
            }
              , dK = {
                ...dI.DefaultType,
                content: "(null|string|element|function)"
            };
            class dL extends dI {
                static get Default() {
                    return dJ
                }
                static get DefaultType() {
                    return dK
                }
                static get NAME() {
                    return "popover"
                }
                _isWithContent() {
                    return this._getTitle() || this._getContent()
                }
                _getContentForTemplate() {
                    return {
                        ".popover-header": this._getTitle(),
                        ".popover-body": this._getContent()
                    }
                }
                _getContent() {
                    return this._resolvePossibleFunction(this._config.content)
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = dL.getOrCreateInstance(this, a);
                        if ("string" == typeof a) {
                            if (void 0 === b[a])
                                throw TypeError(`No method named "${a}"`);
                            b[a]()
                        }
                    })
                }
            }
            t(dL);
            let dM = ".bs.scrollspy"
              , dN = `activate${dM}`
              , dO = `click${dM}`
              , dP = `load${dM}.data-api`
              , dQ = "active"
              , dR = "[href]"
              , dS = ".nav-link"
              , dT = `${dS}, .nav-item > ${dS}, .list-group-item`
              , dU = {
                offset: null,
                rootMargin: "0px 0px -25%",
                smoothScroll: !1,
                target: null,
                threshold: [.1, .5, 1]
            }
              , dV = {
                offset: "(number|null)",
                rootMargin: "string",
                smoothScroll: "boolean",
                target: "element",
                threshold: "array"
            };
            class dW extends S {
                constructor(a, b) {
                    super(a, b),
                    this._targetLinks = new Map,
                    this._observableSections = new Map,
                    this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element,
                    this._activeTarget = null,
                    this._observer = null,
                    this._previousScrollData = {
                        visibleEntryTop: 0,
                        parentScrollTop: 0
                    },
                    this.refresh()
                }
                static get Default() {
                    return dU
                }
                static get DefaultType() {
                    return dV
                }
                static get NAME() {
                    return "scrollspy"
                }
                refresh() {
                    for (let a of (this._initializeTargetsAndObservables(),
                    this._maybeEnableSmoothScroll(),
                    this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(),
                    this._observableSections.values()))
                        this._observer.observe(a)
                }
                dispose() {
                    this._observer.disconnect(),
                    super.dispose()
                }
                _configAfterMerge(a) {
                    return a.target = j(a.target) || document.body,
                    a.rootMargin = a.offset ? `${a.offset}px 0px -30%` : a.rootMargin,
                    "string" == typeof a.threshold && (a.threshold = a.threshold.split(",").map(a => Number.parseFloat(a))),
                    a
                }
                _maybeEnableSmoothScroll() {
                    this._config.smoothScroll && (M.off(this._config.target, dO),
                    M.on(this._config.target, dO, dR, a => {
                        let b = this._observableSections.get(a.target.hash);
                        if (b) {
                            a.preventDefault();
                            let c = this._rootElement || window
                              , d = b.offsetTop - this._element.offsetTop;
                            if (c.scrollTo) {
                                c.scrollTo({
                                    top: d,
                                    behavior: "smooth"
                                });
                                return
                            }
                            c.scrollTop = d
                        }
                    }
                    ))
                }
                _getNewObserver() {
                    let a = {
                        root: this._rootElement,
                        threshold: this._config.threshold,
                        rootMargin: this._config.rootMargin
                    };
                    return new IntersectionObserver(a => this._observerCallback(a),a)
                }
                _observerCallback(a) {
                    let b = a => this._targetLinks.get(`#${a.target.id}`)
                      , c = a => {
                        this._previousScrollData.visibleEntryTop = a.target.offsetTop,
                        this._process(b(a))
                    }
                      , d = (this._rootElement || document.documentElement).scrollTop
                      , e = d >= this._previousScrollData.parentScrollTop;
                    for (let f of (this._previousScrollData.parentScrollTop = d,
                    a)) {
                        if (!f.isIntersecting) {
                            this._activeTarget = null,
                            this._clearActiveClass(b(f));
                            continue
                        }
                        let g = f.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                        if (e && g) {
                            if (c(f),
                            !d)
                                return;
                            continue
                        }
                        e || g || c(f)
                    }
                }
                _initializeTargetsAndObservables() {
                    this._targetLinks = new Map,
                    this._observableSections = new Map;
                    let a = U.find(dR, this._config.target);
                    for (let b of a) {
                        if (!b.hash || l(b))
                            continue;
                        let c = U.findOne(decodeURI(b.hash), this._element);
                        k(c) && (this._targetLinks.set(decodeURI(b.hash), b),
                        this._observableSections.set(b.hash, c))
                    }
                }
                _process(a) {
                    this._activeTarget !== a && (this._clearActiveClass(this._config.target),
                    this._activeTarget = a,
                    a.classList.add(dQ),
                    this._activateParents(a),
                    M.trigger(this._element, dN, {
                        relatedTarget: a
                    }))
                }
                _activateParents(a) {
                    if (a.classList.contains("dropdown-item")) {
                        U.findOne(".dropdown-toggle", a.closest(".dropdown")).classList.add(dQ);
                        return
                    }
                    for (let b of U.parents(a, ".nav, .list-group"))
                        for (let c of U.prev(b, dT))
                            c.classList.add(dQ)
                }
                _clearActiveClass(a) {
                    a.classList.remove(dQ);
                    let b = U.find(`${dR}.${dQ}`, a);
                    for (let c of b)
                        c.classList.remove(dQ)
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = dW.getOrCreateInstance(this, a);
                        if ("string" == typeof a) {
                            if (void 0 === b[a] || a.startsWith("_") || "constructor" === a)
                                throw TypeError(`No method named "${a}"`);
                            b[a]()
                        }
                    })
                }
            }
            M.on(window, dP, () => {
                for (let a of U.find('[data-bs-spy="scroll"]'))
                    dW.getOrCreateInstance(a)
            }
            ),
            t(dW);
            let dX = ".bs.tab"
              , dY = `hide${dX}`
              , dZ = `hidden${dX}`
              , d$ = `show${dX}`
              , d_ = `shown${dX}`
              , d0 = `click${dX}`
              , d1 = `keydown${dX}`
              , d2 = `load${dX}`
              , d3 = "ArrowRight"
              , d4 = "ArrowDown"
              , d5 = "Home"
              , d6 = "active"
              , d7 = "fade"
              , d8 = "show"
              , d9 = ".dropdown-toggle"
              , ea = `:not(${d9})`
              , eb = `.nav-link${ea}, .list-group-item${ea}, [role="tab"]${ea}`
              , ec = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'
              , ed = `${eb}, ${ec}`
              , ee = `.${d6}[data-bs-toggle="tab"], .${d6}[data-bs-toggle="pill"], .${d6}[data-bs-toggle="list"]`;
            class ef extends S {
                constructor(a) {
                    if (super(a),
                    this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'),
                    !this._parent)
                        return;
                    this._setInitialAttributes(this._parent, this._getChildren()),
                    M.on(this._element, d1, a => this._keydown(a))
                }
                static get NAME() {
                    return "tab"
                }
                show() {
                    let a = this._element;
                    if (this._elemIsActive(a))
                        return;
                    let b = this._getActiveElem()
                      , c = b ? M.trigger(b, dY, {
                        relatedTarget: a
                    }) : null
                      , d = M.trigger(a, d$, {
                        relatedTarget: b
                    });
                    !d.defaultPrevented && (!c || !c.defaultPrevented) && (this._deactivate(b, a),
                    this._activate(a, b))
                }
                _activate(a, b) {
                    if (!a)
                        return;
                    a.classList.add(d6),
                    this._activate(U.getElementFromSelector(a));
                    let c = () => {
                        if ("tab" !== a.getAttribute("role")) {
                            a.classList.add(d8);
                            return
                        }
                        a.removeAttribute("tabindex"),
                        a.setAttribute("aria-selected", !0),
                        this._toggleDropDown(a, !0),
                        M.trigger(a, d_, {
                            relatedTarget: b
                        })
                    }
                    ;
                    this._queueCallback(c, a, a.classList.contains(d7))
                }
                _deactivate(a, b) {
                    if (!a)
                        return;
                    a.classList.remove(d6),
                    a.blur(),
                    this._deactivate(U.getElementFromSelector(a));
                    let c = () => {
                        if ("tab" !== a.getAttribute("role")) {
                            a.classList.remove(d8);
                            return
                        }
                        a.setAttribute("aria-selected", !1),
                        a.setAttribute("tabindex", "-1"),
                        this._toggleDropDown(a, !1),
                        M.trigger(a, dZ, {
                            relatedTarget: b
                        })
                    }
                    ;
                    this._queueCallback(c, a, a.classList.contains(d7))
                }
                _keydown(a) {
                    if (!["ArrowLeft", d3, "ArrowUp", d4, d5, "End"].includes(a.key))
                        return;
                    a.stopPropagation(),
                    a.preventDefault();
                    let b = this._getChildren().filter(a => !l(a)), c;
                    if ([d5, "End"].includes(a.key))
                        c = b[a.key === d5 ? 0 : b.length - 1];
                    else {
                        let d = [d3, d4].includes(a.key);
                        c = w(b, a.target, d, !0)
                    }
                    c && (c.focus({
                        preventScroll: !0
                    }),
                    ef.getOrCreateInstance(c).show())
                }
                _getChildren() {
                    return U.find(ed, this._parent)
                }
                _getActiveElem() {
                    return this._getChildren().find(a => this._elemIsActive(a)) || null
                }
                _setInitialAttributes(a, b) {
                    for (let c of (this._setAttributeIfNotExists(a, "role", "tablist"),
                    b))
                        this._setInitialAttributesOnChild(c)
                }
                _setInitialAttributesOnChild(a) {
                    a = this._getInnerElement(a);
                    let b = this._elemIsActive(a)
                      , c = this._getOuterElement(a);
                    a.setAttribute("aria-selected", b),
                    c !== a && this._setAttributeIfNotExists(c, "role", "presentation"),
                    b || a.setAttribute("tabindex", "-1"),
                    this._setAttributeIfNotExists(a, "role", "tab"),
                    this._setInitialAttributesOnTargetPanel(a)
                }
                _setInitialAttributesOnTargetPanel(a) {
                    let b = U.getElementFromSelector(a);
                    b && (this._setAttributeIfNotExists(b, "role", "tabpanel"),
                    a.id && this._setAttributeIfNotExists(b, "aria-labelledby", `${a.id}`))
                }
                _toggleDropDown(a, b) {
                    let c = this._getOuterElement(a);
                    if (!c.classList.contains("dropdown"))
                        return;
                    let d = (a, d) => {
                        let e = U.findOne(a, c);
                        e && e.classList.toggle(d, b)
                    }
                    ;
                    d(d9, d6),
                    d(".dropdown-menu", d8),
                    c.setAttribute("aria-expanded", b)
                }
                _setAttributeIfNotExists(a, b, c) {
                    a.hasAttribute(b) || a.setAttribute(b, c)
                }
                _elemIsActive(a) {
                    return a.classList.contains(d6)
                }
                _getInnerElement(a) {
                    return a.matches(ed) ? a : U.findOne(ed, a)
                }
                _getOuterElement(a) {
                    return a.closest(".nav-item, .list-group-item") || a
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = ef.getOrCreateInstance(this);
                        if ("string" == typeof a) {
                            if (void 0 === b[a] || a.startsWith("_") || "constructor" === a)
                                throw TypeError(`No method named "${a}"`);
                            b[a]()
                        }
                    })
                }
            }
            M.on(document, d0, ec, function(a) {
                ["A", "AREA"].includes(this.tagName) && a.preventDefault(),
                !l(this) && ef.getOrCreateInstance(this).show()
            }),
            M.on(window, d2, () => {
                for (let a of U.find(ee))
                    ef.getOrCreateInstance(a)
            }
            ),
            t(ef);
            let eg = ".bs.toast"
              , eh = `mouseover${eg}`
              , ei = `mouseout${eg}`
              , ej = `focusin${eg}`
              , ek = `focusout${eg}`
              , el = `hide${eg}`
              , em = `hidden${eg}`
              , en = `show${eg}`
              , eo = `shown${eg}`
              , ep = "hide"
              , eq = "show"
              , er = "showing"
              , es = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            }
              , et = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
            class eu extends S {
                constructor(a, b) {
                    super(a, b),
                    this._timeout = null,
                    this._hasMouseInteraction = !1,
                    this._hasKeyboardInteraction = !1,
                    this._setListeners()
                }
                static get Default() {
                    return et
                }
                static get DefaultType() {
                    return es
                }
                static get NAME() {
                    return "toast"
                }
                show() {
                    let a = M.trigger(this._element, en);
                    if (a.defaultPrevented)
                        return;
                    this._clearTimeout(),
                    this._config.animation && this._element.classList.add("fade");
                    let b = () => {
                        this._element.classList.remove(er),
                        M.trigger(this._element, eo),
                        this._maybeScheduleHide()
                    }
                    ;
                    this._element.classList.remove(ep),
                    o(this._element),
                    this._element.classList.add(eq, er),
                    this._queueCallback(b, this._element, this._config.animation)
                }
                hide() {
                    if (!this.isShown())
                        return;
                    let a = M.trigger(this._element, el);
                    if (a.defaultPrevented)
                        return;
                    let b = () => {
                        this._element.classList.add(ep),
                        this._element.classList.remove(er, eq),
                        M.trigger(this._element, em)
                    }
                    ;
                    this._element.classList.add(er),
                    this._queueCallback(b, this._element, this._config.animation)
                }
                dispose() {
                    this._clearTimeout(),
                    this.isShown() && this._element.classList.remove(eq),
                    super.dispose()
                }
                isShown() {
                    return this._element.classList.contains(eq)
                }
                _maybeScheduleHide() {
                    this._config.autohide && !this._hasMouseInteraction && !this._hasKeyboardInteraction && (this._timeout = setTimeout( () => {
                        this.hide()
                    }
                    , this._config.delay))
                }
                _onInteraction(a, b) {
                    switch (a.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = b;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = b
                    }
                    if (b) {
                        this._clearTimeout();
                        return
                    }
                    let c = a.relatedTarget;
                    !(this._element === c || this._element.contains(c)) && this._maybeScheduleHide()
                }
                _setListeners() {
                    M.on(this._element, eh, a => this._onInteraction(a, !0)),
                    M.on(this._element, ei, a => this._onInteraction(a, !1)),
                    M.on(this._element, ej, a => this._onInteraction(a, !0)),
                    M.on(this._element, ek, a => this._onInteraction(a, !1))
                }
                _clearTimeout() {
                    clearTimeout(this._timeout),
                    this._timeout = null
                }
                static jQueryInterface(a) {
                    return this.each(function() {
                        let b = eu.getOrCreateInstance(this, a);
                        if ("string" == typeof a) {
                            if (void 0 === b[a])
                                throw TypeError(`No method named "${a}"`);
                            b[a](this)
                        }
                    })
                }
            }
            return V(eu),
            t(eu),
            {
                Alert: Z,
                Button: aa,
                Carousel: aG,
                Collapse: aU,
                Dropdown: cz,
                Modal: c6,
                Offcanvas: dp,
                Popover: dL,
                ScrollSpy: dW,
                Tab: ef,
                Toast: eu,
                Tooltip: dI
            }
        })
    }
}])
