(()=>{
    var t, e = {
        9143: ()=>{}
        ,
        1580: ()=>{
            "function" == typeof Page && (window.pageObject = new Page)
        }
        ,
        4265: (t,e,a)=>{
            "use strict";
            var r = a(3759)
              , i = a.n(r);
            a(6364),
            a(9279);
            a(9143);
            class o extends Base {
                constructor() {
                    super(),
                    this.filterModal("catalog__filter", ".catalog__filter__trigger", ".catalog__filter__close__modal"),
                    this.multiRange(!0, ".catalog-price-range", i()(".price-from"), i()(".price-to"), i()(".price-from").data("limit"), i()(".price-to").data("limit"), i()(".price-from").val(), i()(".price-to").val(), '.catalog__filter [type="reset"]'),
                    this.multiRange(!0, ".catalog-watt-range", i()(".watt-from"), i()(".watt-to"), i()(".watt-from").data("limit"), i()(".watt-to").data("limit"), i()(".watt-from").val(), i()(".watt-to").val(), '.catalog__filter [type="reset"]'),
                    this.multiRange(!0, ".catalog-hashrate-range", i()(".hashrate-from"), i()(".hashrate-to"), i()(".hashrate-from").data("limit"), i()(".hashrate-to").data("limit"), i()(".hashrate-from").val(), i()(".hashrate-to").val(), '.catalog__filter [type="reset"]')
                }
                initChangeCatalogOrient() {
                    let t = this;
                    i()(".switcher-button").on("click", (function() {
                        i()(this).hasClass("active") || (i()(".switcher-button").removeClass("active"),
                        i()(this).addClass("active"),
                        t.search(i()(".catalog__filter"), !0))
                    }
                    ))
                }
                initFiltering() {
                    let t = this;
                    i()(".catalog__filter").submit((function() {
                        return t.search(i()(this), !1),
                        !1
                    }
                    ))
                }
                initLottieAnimate() {
                    const t = i()(".catalog__empty__animate");
                    if (t.length > 0) {
                        let e = !1;
                        i().fn.isInViewport = function() {
                            let t = i()(this).offset().top
                              , e = t + i()(this).outerHeight()
                              , a = i()(window).scrollTop()
                              , r = a + i()(window).height();
                            return e > a && t < r
                        }
                        ,
                        i()(window).on("scroll", (a=>{
                            !e && t.isInViewport() && (e = !0,
                            t[0].togglePlay(!0),
                            setTimeout((e=>{
                                t[0].pause()
                            }
                            ), 2190))
                        }
                        ))
                    }
                }
                initCatalogReset() {
                    i()(".catalog__filter").find('input[type="checkbox"]');
                    let t = i()('.catalog__filter [type="reset"]');
                    t && t.on("click", (function() {
                        location.href = "?"
                    }
                    ))
                }
                search(t, e) {
                    let a = Tools.gdf(t);
                    a.type = i()(".switcher-button.active").data("position"),
                    a.chars = {},
                    i()("[data-char]:checked").each((function() {
                        let t = i()(this).data("char");
                        a.chars[t] || (a.chars[t] = []),
                        a.chars[t].push(i()(this).val())
                    }
                    ));
                    const r = new URLSearchParams(window.location.search);
                    if (e && r.has("page") && "" !== r.get("page"))
                        return location.href = (0 != mainUrl ? mainUrl : "") + "?filter=" + JSON.stringify(a) + "&page=" + r.get("page");
                    location.href = (0 != mainUrl ? mainUrl : "") + "?filter=" + JSON.stringify(a)
                }
            }
            window.Page = o,
            a(1580)
        }
    }, a = {};
    function r(t) {
        var i = a[t];
        if (void 0 !== i)
            return i.exports;
        var o = a[t] = {
            id: t,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, r),
        o.exports
    }
    r.m = e,
    r.amdO = {},
    t = [],
    r.O = (e,a,i,o)=>{
        if (!a) {
            var l = 1 / 0;
            for (h = 0; h < t.length; h++) {
                for (var [a,i,o] = t[h], n = !0, s = 0; s < a.length; s++)
                    (!1 & o || l >= o) && Object.keys(r.O).every((t=>r.O[t](a[s]))) ? a.splice(s--, 1) : (n = !1,
                    o < l && (l = o));
                if (n) {
                    t.splice(h--, 1);
                    var c = i();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        o = o || 0;
        for (var h = t.length; h > 0 && t[h - 1][2] > o; h--)
            t[h] = t[h - 1];
        t[h] = [a, i, o]
    }
    ,
    r.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return r.d(e, {
            a: e
        }),
        e
    }
    ,
    r.d = (t,e)=>{
        for (var a in e)
            r.o(e, a) && !r.o(t, a) && Object.defineProperty(t, a, {
                enumerable: !0,
                get: e[a]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    r.r = t=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.j = 9818,
    (()=>{
        var t = {
            9818: 0
        };
        r.O.j = e=>0 === t[e];
        var e = (e,a)=>{
            var i, o, [l,n,s] = a, c = 0;
            if (l.some((e=>0 !== t[e]))) {
                for (i in n)
                    r.o(n, i) && (r.m[i] = n[i]);
                if (s)
                    var h = s(r)
            }
            for (e && e(a); c < l.length; c++)
                o = l[c],
                r.o(t, o) && t[o] && t[o][0](),
                t[o] = 0;
            return r.O(h)
        }
          , a = self.webpackChunk = self.webpackChunk || [];
        a.forEach(e.bind(null, 0)),
        a.push = e.bind(null, a.push.bind(a))
    }
    )(),
    r.nc = void 0;
    var i = r.O(void 0, [4736], (()=>r(4265)));
    i = r.O(i)
}
)();