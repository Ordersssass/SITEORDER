(()=>{
    "use strict";
    var e, n = {
        3529: (e,n,a)=>{
            var s = a(3759)
              , c = a.n(s);
            a(1901);
            const t = {
                input: {
                    numeric: function(e) {
                        c()("input.ui-numeric").each((function() {
                            let n = c()(this);
                            n.removeClass("ui-numeric"),
                            e && !1 === e.readonly || n.attr("readonly", "readonly");
                            let a = "ui" + t.uniqid();
                            c()(this).replaceWith(c()("<div/>", {
                                id: a,
                                class: "ui-numeric d-flex align-items-center"
                            })),
                            c()("#" + a).append(n),
                            n.before(c()("<div/>", {
                                class: "ui-numeric-spinner d-flex align-items-center justify-content-center",
                                "data-id": a,
                                "data-dir": "minus",
                                html: '<i class="icon-ic-minus"></i>'
                            })),
                            n.after(c()("<div/>", {
                                class: "ui-numeric-spinner d-flex align-items-center justify-content-center",
                                "data-id": a,
                                "data-dir": "plus",
                                html: '<i class="icon-ic-plus"></i>'
                            })),
                            c()('.ui-numeric-spinner[data-id="' + a + '"]').click((function() {
                                let e = c()(this).parent().find("input")
                                  , n = parseInt(e.val());
                                n += "plus" == c()(this).data("dir") ? 1 : -1,
                                n < 1 && (n = 1),
                                e.val(n),
                                e.change()
                            }
                            ))
                        }
                        ))
                    },
                    password: function(e) {
                        c()('input[type="password"]').each((function() {
                            c()(this).after('<i class="icon-ic-pass-show password-toggler"></i>')
                        }
                        ))
                    },
                    reg: function(e, n) {
                        e.bind("change keyup input click", (function() {
                            this.value.match(n) && (this.value = this.value.replace(n, ""))
                        }
                        ))
                    },
                    range: function(e, n, a) {
                        let s, t = parseInt(n.data("min")), r = parseInt(n.data("max")), o = parseInt(n.val()), d = a ? parseInt(a.val()) : "", i = {
                            skin: "round",
                            min: t,
                            max: r,
                            from: o,
                            to: d,
                            hide_min_max: !0,
                            hide_from_to: !0,
                            onStart: function(e) {
                                n.prop("value", e.from),
                                a && a.length && a.prop("value", e.to)
                            },
                            onChange: function(e) {
                                n.prop("value", e.from),
                                a && a.length && a.prop("value", e.to)
                            }
                        };
                        return a && a.length && (i.type = "double"),
                        e.ionRangeSlider(i),
                        s = e.data("ionRangeSlider"),
                        n.on("input", (function() {
                            let e = c()(this).prop("value");
                            e < t ? e = t : e > r && (e = r),
                            s.update({
                                from: e
                            })
                        }
                        )),
                        s.update({
                            from: n.val()
                        }),
                        a && a.length && (a.on("input", (function() {
                            let e = c()(this).prop("value");
                            e < t ? e = t : e > r && (e = r),
                            s.update({
                                to: e
                            })
                        }
                        )),
                        s.update({
                            to: a.val()
                        })),
                        s
                    }
                },
                toast: function(e, n, a) {
                    let s;
                    if (s = "success" === e ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#08C91E"/>\n            </svg>' : "warning" === e ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M12.8656 3.00002L22.3916 19.5C22.4794 19.652 22.5256 19.8245 22.5256 20C22.5256 20.1755 22.4794 20.348 22.3916 20.5C22.3038 20.652 22.1776 20.7783 22.0256 20.866C21.8736 20.9538 21.7011 21 21.5256 21H2.47361C2.29807 21 2.12563 20.9538 1.97362 20.866C1.8216 20.7783 1.69537 20.652 1.6076 20.5C1.51984 20.348 1.47363 20.1755 1.47363 20C1.47363 19.8245 1.51984 19.652 1.60761 19.5L11.1336 3.00002C11.2214 2.84801 11.3476 2.72178 11.4996 2.63402C11.6516 2.54626 11.8241 2.50006 11.9996 2.50006C12.1751 2.50006 12.3476 2.54626 12.4996 2.63402C12.6516 2.72178 12.7778 2.84801 12.8656 3.00002ZM10.9996 16V18H12.9996V16H10.9996ZM10.9996 9.00002V14H12.9996V9.00002H10.9996Z" fill="#F5A500"/>\n            </svg>' : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" fill="#CB010E"/>\n            </svg>',
                    !c()('[id*="toast"]').length) {
                        c()("body").append(`<div id="toast-${e}" class="toast-alert ${e}-alert">\n                ${s}\n                <div class="toast-alert__right">\n                    <div class="toast-alert__header">${n}</div>\n                    <div class="toast-alert__text">${a}</div>\n                </div>   \n             </div>`);
                        let t = c()(`#toast-${e}`);
                        t.addClass("slide-up"),
                        setTimeout((function() {
                            t.removeClass("slide-up"),
                            setTimeout((function() {
                                t.remove()
                            }
                            ), 300)
                        }
                        ), 3e3)
                    }
                },
                compareToast: function(e, n, a, s) {
                    function r(e) {
                        e.removeClass("slide-up-notification"),
                        setTimeout((function() {
                            e.remove()
                        }
                        ), 300)
                    }
                    function o() {
                        t.ajax("compare_notification", {
                            id: e,
                            img: a,
                            name: n,
                            count: s
                        }, (function(n) {
                            c()("body").append(n.html);
                            let a = c()(`#compare-notification-${e}`);
                            a.addClass("slide-up-notification"),
                            setTimeout((function() {
                                r(a)
                            }
                            ), 15e3),
                            a.find(".compare-notification__right__close").on("click", (function() {
                                r(a)
                            }
                            ))
                        }
                        ))
                    }
                    c()('[id*="compare-notification"]').length ? c()(`#compare-notification-${e}`).length || (!function() {
                        let e = c()('[id*="compare-notification"]');
                        e.removeClass("slide-up-notification"),
                        setTimeout((function() {
                            e.remove()
                        }
                        ), 300)
                    }(),
                    o()) : o()
                },
                resetForm: function(e) {
                    e.length && (e[0].reset(),
                    e.find(".is-invalid").removeClass("is-invalid"))
                },
                clickout: function(e, n, a) {
                    let s = function(a) {
                        var s = e;
                        s.is(a.target) || function(n) {
                            if (e.closest(".modal-window").prop("scrollWidth") <= n)
                                return !0
                        }(a.pageX) || 0 !== s.has(a.target).length || n(e)
                    };
                    "for-modal" === a ? c()(document).on("mousedown.modal", s) : c()(document).mousedown((function(e) {
                        s(e)
                    }
                    ))
                },
                mouseout: function(e, n) {
                    c()(document).on("mouseover", (function(a) {
                        var s = e;
                        s.is(a.target) || 0 !== s.has(a.target).length || n(e)
                    }
                    ))
                },
                capitalize: function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                },
                modal: function(e, n, a, s, r) {
                    let o = s || {};
                    o.template = n,
                    o.header = e,
                    o.classes = s ? s.classes : "",
                    o.data = a || {};
                    let d = s ? s.callback : function() {}
                    ;
                    t.ajax("get_modal", o, (function(e) {
                        if (e.error)
                            return t.toast("error", "Ошибка", e.error),
                            !0;
                        c()("body").append(e.html);
                        let n = c()("#" + e.id);
                        c()(".pop-over__installment-modal__trigger").length && r.popOver(".pop-over__installment-modal__trigger", ".modal-bottom", "mouseenter"),
                        n.addClass("visible fade-in"),
                        c()("body").addClass("no-scroll");
                        let a = n.find(".modal-body")
                          , s = n.find("[data-step=1]");
                        a.css("max-height", `${s.prop("scrollHeight") + parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom")) + c()(".modal-body > .modal-title").outerHeight(!0)}px`),
                        jQuery.fn.hasScrollBar = function() {
                            return this.get(0).scrollHeight > this.height()
                        }
                        ,
                        n.hasScrollBar() && n.addClass("modal-with-scroll"),
                        n.find(".js-modal-close").click((function() {
                            let e = c()(".modal-window").length;
                            if (e >= 2) {
                                let n = c()(".modal-window:last-of-type");
                                t.closeModal(n, e)
                            } else
                                t.closeModal(n, 1)
                        }
                        )),
                        t.modalClickout(),
                        d && window[d](e)
                    }
                    ))
                },
                modalClickout: function() {
                    let e = c()(".modal-window").length
                      , n = c()(".modal-window:last-of-type");
                    c()(document).off(".modal"),
                    t.clickout(n.find(".modal-container"), (function(a) {
                        t.closeModal(n, e)
                    }
                    ), "for-modal")
                },
                closeModal: function(e, n) {
                    e.hasClass("visible") && (e.removeClass("fade-in"),
                    setTimeout((function() {
                        e.removeClass("visible"),
                        n < 2 && c()("body").removeClass("no-scroll"),
                        setTimeout((function() {
                            e.remove(),
                            t.modalClickout()
                        }
                        ), 100)
                    }
                    ), 500))
                },
                uniqid: function(e, n) {
                    var a;
                    e = e || "",
                    n = n || !1;
                    return this.seed = function(e, n) {
                        return n < (e = parseInt(e, 10).toString(16)).length ? e.slice(e.length - n) : n > e.length ? new Array(n - e.length + 1).join("0") + e : e
                    }
                    ,
                    a = e + this.seed(parseInt((new Date).getTime() / 1e3, 10), 8) + this.seed(Math.floor(123456789 * Math.random()) + 1, 5),
                    n && (a += (10 * Math.random()).toFixed(8).toString()),
                    a
                },
                cookie: {
                    set: function(e, n, a={}) {
                        (a = {
                            path: "/"
                        }).expires instanceof Date && (a.expires = a.expires.toUTCString());
                        let s = encodeURIComponent(e) + "=" + encodeURIComponent(n);
                        for (let e in a) {
                            s += "; " + e;
                            let n = a[e];
                            !0 !== n && (s += "=" + n)
                        }
                        document.cookie = s
                    },
                    get: function(e) {
                        let n = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
                        return n ? decodeURIComponent(n[1]) : void 0
                    }
                },
                cut: (e,n,a)=>e.length > n ? e.slice(0, n) + a : e,
                ajax: function(e, n, a, s, t) {
                    let r = "object" == typeof e;
                    a = r ? e.success : null != a ? a : function() {}
                    ,
                    s = r ? e.error : null != s ? s : function() {}
                    ,
                    (n = r ? e.data : n) || (n = {}),
                    n instanceof FormData ? n.append("action", r ? e.action : e) : n.action = r ? e.action : e;
                    let o = {
                        type: "POST",
                        dataType: "json",
                        data: n,
                        success: a,
                        error: s
                    };
                    return r && e.url && (o.url = e.url),
                    (r && e.file || t) && (o.cache = !1,
                    o.processData = !1,
                    o.contentType = !1),
                    c().ajax(o)
                },
                money: function(e) {
                    return e.toString().replace(/(\d)(?=(\d{3}))/g, "$1 ")
                },
                gdf: function(e) {
                    let n = {};
                    const a = /(?!^|\[)\w+(?=\]|$)/g;
                    return c()(e).find('input[type="text"],input[type="date"],input[type="email"],input[type="password"],input[type="hidden"],input[type="number"],input[type="checkbox"],input[type="radio"]:checked,select,textarea,[contenteditable][name]').each((function() {
                        let e = c()(this).attr("name");
                        if ("disabled" == c()(this).attr("disabled"))
                            return !0;
                        let s = c()(this).val();
                        if ("checkbox" == c()(this).attr("type") && (s = c()(this).is(":checked") ? 1 : 0),
                        c()(this).attr("contenteditable") && (s = c()(this).text()),
                        e && "" != e)
                            if (e.match(/\[/gi)) {
                                let c = e.match(a)
                                  , t = "[" + c + "]"
                                  , r = e.replace(t, "");
                                n[r] || (n[r] = {});
                                let o = n[r];
                                for (let e = 0; e < c.length; e++)
                                    void 0 === o[c[e]] && (o[c[e]] = {}),
                                    e === c.length - 1 ? o[c[e]] = s : o = o[c[e]]
                            } else if (n[e]) {
                                if (!Array.isArray(n[e])) {
                                    var t = n[e];
                                    n[e] = [],
                                    n[e].push(t)
                                }
                                n[e].push(s)
                            } else
                                n[e] = s
                    }
                    )),
                    n
                },
                inArray: function(e, n) {
                    for (var a = n.length, s = 0; s < a; s++)
                        if (n[s] == e)
                            return !0;
                    return !1
                },
                priceFormat: function(e) {
                    return e += "",
                    (e = new Array(4 - e.length % 3).join("U") + e).replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "")
                },
                urlParam: function(e) {
                    var n = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.href);
                    return null == n ? null : n[1] || 0
                },
                confirm: function(e, n, a, s, c) {
                    bootbox.confirm({
                        title: e,
                        message: n,
                        buttons: {
                            confirm: {
                                label: a
                            },
                            cancel: {
                                label: s
                            }
                        },
                        callback: c
                    })
                },
                ldColorByHSL: function(e, n=100) {
                    let a = !1;
                    "#" == e[0] && (e = e.slice(1),
                    a = !0);
                    let s = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(e)
                      , c = parseInt(s[1], 16)
                      , t = parseInt(s[2], 16)
                      , r = parseInt(s[3], 16);
                    c /= 255,
                    t /= 255,
                    r /= 255;
                    let o, d, i = Math.max(c, t, r), _ = Math.min(c, t, r), m = (i + _) / 2;
                    if (i == _)
                        o = d = 0;
                    else {
                        let e = i - _;
                        switch (d = m > .5 ? e / (2 - i - _) : e / (i + _),
                        i) {
                        case c:
                            o = (t - r) / e + (t < r ? 6 : 0);
                            break;
                        case t:
                            o = (r - c) / e + 2;
                            break;
                        case r:
                            o = (c - t) / e + 4
                        }
                        o /= 6
                    }
                    if (m += (1 - m) * n / 100,
                    0 === d)
                        c = t = r = m;
                    else {
                        const e = function(e, n, a) {
                            return a < 0 && (a += 1),
                            a > 1 && (a -= 1),
                            a < 1 / 6 ? e + 6 * (n - e) * a : a < .5 ? n : a < 2 / 3 ? e + (n - e) * (2 / 3 - a) * 6 : e
                        }
                          , n = m < .5 ? m * (1 + d) : m + d - m * d
                          , a = 2 * m - n;
                        c = e(a, n, o + 1 / 3),
                        t = e(a, n, o),
                        r = e(a, n, o - 1 / 3)
                    }
                    const u = function(e) {
                        const n = Math.round(255 * e).toString(16);
                        return 1 === n.length ? "0" + n : n
                    };
                    return (a ? "#" : "") + u(c) + u(t) + u(r)
                }
            };
            class r {
                constructor() {
                    this.mobileMenu(),
                    this.searchModal(),
                    this.headerBottomStickyOnScroll(),
                    this.telegramBanner()
                }
                mobileMenu() {
                    const e = c()(".header-open")
                      , n = c()(".header-close")
                      , a = c()(".header")
                      , s = c()(".header__mobile")
                      , t = c()(".header__mobile__container");
                    let r = !1;
                    function o(e) {
                        r = e,
                        r ? (a.addClass("mobile"),
                        s.addClass("fade-in"),
                        c()("body").addClass("no-scroll")) : (s.removeClass("fade-in"),
                        setTimeout((function() {
                            a.removeClass("mobile"),
                            c()("body").removeClass("no-scroll")
                        }
                        ), 500))
                    }
                    e.on("click", (function() {
                        o(!r)
                    }
                    )),
                    n.on("click", (function() {
                        o(!r)
                    }
                    )),
                    c()("body").on("click", (function(n) {
                        if (r) {
                            e[0].contains(n.target) || t[0].contains(n.target) || o(!1)
                        }
                    }
                    ))
                }
                headerBottomStickyOnScroll() {
                    let e = c()(".header")
                      , n = e.find(".header__top")
                      , a = n.outerHeight();
                    function s(n) {
                        c()(window).outerWidth() > 1242 && (c()(window).scrollTop() > n ? e.hasClass("sticky") || (e.css("height", n + 58),
                        e.addClass("sticky")) : e.hasClass("sticky") && (e.css("height", n + 58),
                        e.removeClass("sticky")))
                    }
                    s(a),
                    c()(window).on("scroll", (e=>{
                        a = n.outerHeight(),
                        s(a)
                    }
                    )),
                    c()(window).on("resize", (function() {
                        c()(window).outerWidth() <= 1242 ? e.hasClass("autoHeight") || e.addClass("autoHeight") : e.hasClass("autoHeight") && e.removeClass("autoHeight")
                    }
                    ))
                }
                telegramBanner() {
                    let e = c()(".header")
                      , n = e.find(".header__top")
                      , a = c()(".header__telegram__banner");
                    if (!a.length)
                        return !1;
                    c()(".header__telegram__banner__close").on("click", (s=>{
                        a.addClass("closed"),
                        t.cookie.set("noheaderbanner", 1),
                        c()(window).outerWidth() > 1242 && e.css("height", n.outerHeight() + 58)
                    }
                    ))
                }
                searchModal() {
                    const e = c()(".header__top__info__search-initiate")
                      , n = c()(".search-modal__close")
                      , a = c()("body")
                      , s = c()(".header")
                      , t = c()(".search-modal");
                    c()(".search-modal__container");
                    let r = !1;
                    function o(e) {
                        r = e,
                        r ? (a.addClass("searched"),
                        s.addClass("below-search"),
                        t.addClass("fade-in"),
                        a.addClass("no-scroll")) : (t.removeClass("fade-in"),
                        setTimeout((function() {
                            a.removeClass("searched"),
                            s.removeClass("below-search"),
                            a.removeClass("no-scroll")
                        }
                        ), 500))
                    }
                    e.on("click", (function() {
                        o(!r)
                    }
                    )),
                    n.on("click", (function() {
                        o(!r)
                    }
                    ))
                }
            }
            a(6306),
            a(9813),
            a(4601),
            a(1405);
            var o = a(4262)
              , d = (a(2313),
            a(1113))
              , i = (a(6364),
            a(9279),
            a(7053))
              , _ = (a(6978),
            a(4796))
              , m = a(5850);
            a(4685);
            class u {
                add(e) {
                    let n = this;
                    t.ajax("add_to_cart", e, (function(e) {
                        n.setUpdate(e),
                        _tmr.push({
                            type: "reachGoal",
                            id: 3352224,
                            value: e.price,
                            goal: "addToCart",
                            params: {
                                product_id: e.product_id
                            }
                        })
                    }
                    ))
                }
                setUpdate(e) {
                    const n = $(".basket-count")
                      , a = $(".basket-interactive")
                      , s = e.hasOwnProperty("info") ? e.info.qty : e.qty;
                    n.html(s),
                    a.toggleClass("not-empty", 0 != parseInt(s))
                }
                delete(e) {
                    let n = this;
                    t.ajax("delete_from_cart", e, (function(e) {
                        n.setUpdate(e)
                    }
                    ))
                }
            }
            const l = {
                phoneMasks: [{
                    mask: "+247-####",
                    cc: "AC",
                    name_en: "Ascension",
                    desc_en: "",
                    name_ru: "Остров Вознесения",
                    desc_ru: ""
                }, {
                    mask: "+376-###-###",
                    cc: "AD",
                    name_en: "Andorra",
                    desc_en: "",
                    name_ru: "Андорра",
                    desc_ru: ""
                }, {
                    mask: "+971-#-###-####",
                    cc: "AE",
                    name_en: "United Arab Emirates",
                    desc_en: "",
                    name_ru: "Объединенные Арабские Эмираты",
                    desc_ru: ""
                }, {
                    mask: "+971-5#-###-####",
                    cc: "AE",
                    name_en: "United Arab Emirates",
                    desc_en: "mobile",
                    name_ru: "Объединенные Арабские Эмираты",
                    desc_ru: "мобильные"
                }, {
                    mask: "+93-##-###-####",
                    cc: "AF",
                    name_en: "Afghanistan",
                    desc_en: "",
                    name_ru: "Афганистан",
                    desc_ru: ""
                }, {
                    mask: "+1 (268) ###-####",
                    cc: "AG",
                    name_en: "Antigua & Barbuda",
                    desc_en: "",
                    name_ru: "Антигуа и Барбуда",
                    desc_ru: ""
                }, {
                    mask: "+1 (264) ###-####",
                    cc: "AI",
                    name_en: "Anguilla",
                    desc_en: "",
                    name_ru: "Ангилья",
                    desc_ru: ""
                }, {
                    mask: "+355 (###) ###-###",
                    cc: "AL",
                    name_en: "Albania",
                    desc_en: "",
                    name_ru: "Албания",
                    desc_ru: ""
                }, {
                    mask: "+374-##-###-###",
                    cc: "AM",
                    name_en: "Armenia",
                    desc_en: "",
                    name_ru: "Армения",
                    desc_ru: ""
                }, {
                    mask: "+599-###-####",
                    cc: "AN",
                    name_en: "Caribbean Netherlands",
                    desc_en: "",
                    name_ru: "Карибские Нидерланды",
                    desc_ru: ""
                }, {
                    mask: "+599-###-####",
                    cc: "AN",
                    name_en: "Netherlands Antilles",
                    desc_en: "",
                    name_ru: "Нидерландские Антильские острова",
                    desc_ru: ""
                }, {
                    mask: "+599-9###-####",
                    cc: "AN",
                    name_en: "Netherlands Antilles",
                    desc_en: "Curacao",
                    name_ru: "Нидерландские Антильские острова",
                    desc_ru: "Кюрасао"
                }, {
                    mask: "+244 (###) ###-###",
                    cc: "AO",
                    name_en: "Angola",
                    desc_en: "",
                    name_ru: "Ангола",
                    desc_ru: ""
                }, {
                    mask: "+672-1##-###",
                    cc: "AQ",
                    name_en: "Australian bases in Antarctica",
                    desc_en: "",
                    name_ru: "Австралийская антарктическая база",
                    desc_ru: ""
                }, {
                    mask: "+54 (###) ###-####",
                    cc: "AR",
                    name_en: "Argentina",
                    desc_en: "",
                    name_ru: "Аргентина",
                    desc_ru: ""
                }, {
                    mask: "+1 (684) ###-####",
                    cc: "AS",
                    name_en: "American Samoa",
                    desc_en: "",
                    name_ru: "Американское Самоа",
                    desc_ru: ""
                }, {
                    mask: "+43 (###) ###-####",
                    cc: "AT",
                    name_en: "Austria",
                    desc_en: "",
                    name_ru: "Австрия",
                    desc_ru: ""
                }, {
                    mask: "+61-#-####-####",
                    cc: "AU",
                    name_en: "Australia",
                    desc_en: "",
                    name_ru: "Австралия",
                    desc_ru: ""
                }, {
                    mask: "+297-###-####",
                    cc: "AW",
                    name_en: "Aruba",
                    desc_en: "",
                    name_ru: "Аруба",
                    desc_ru: ""
                }, {
                    mask: "+994-##-###-##-##",
                    cc: "AZ",
                    name_en: "Azerbaijan",
                    desc_en: "",
                    name_ru: "Азербайджан",
                    desc_ru: ""
                }, {
                    mask: "+387-##-#####",
                    cc: "BA",
                    name_en: "Bosnia and Herzegovina",
                    desc_en: "",
                    name_ru: "Босния и Герцеговина",
                    desc_ru: ""
                }, {
                    mask: "+387-##-####",
                    cc: "BA",
                    name_en: "Bosnia and Herzegovina",
                    desc_en: "",
                    name_ru: "Босния и Герцеговина",
                    desc_ru: ""
                }, {
                    mask: "+1 (246) ###-####",
                    cc: "BB",
                    name_en: "Barbados",
                    desc_en: "",
                    name_ru: "Барбадос",
                    desc_ru: ""
                }, {
                    mask: "+880-##-###-###",
                    cc: "BD",
                    name_en: "Bangladesh",
                    desc_en: "",
                    name_ru: "Бангладеш",
                    desc_ru: ""
                }, {
                    mask: "+32 (###) ###-###",
                    cc: "BE",
                    name_en: "Belgium",
                    desc_en: "",
                    name_ru: "Бельгия",
                    desc_ru: ""
                }, {
                    mask: "+226-##-##-####",
                    cc: "BF",
                    name_en: "Burkina Faso",
                    desc_en: "",
                    name_ru: "Буркина Фасо",
                    desc_ru: ""
                }, {
                    mask: "+359 (###) ###-###",
                    cc: "BG",
                    name_en: "Bulgaria",
                    desc_en: "",
                    name_ru: "Болгария",
                    desc_ru: ""
                }, {
                    mask: "+973-####-####",
                    cc: "BH",
                    name_en: "Bahrain",
                    desc_en: "",
                    name_ru: "Бахрейн",
                    desc_ru: ""
                }, {
                    mask: "+257-##-##-####",
                    cc: "BI",
                    name_en: "Burundi",
                    desc_en: "",
                    name_ru: "Бурунди",
                    desc_ru: ""
                }, {
                    mask: "+229-##-##-####",
                    cc: "BJ",
                    name_en: "Benin",
                    desc_en: "",
                    name_ru: "Бенин",
                    desc_ru: ""
                }, {
                    mask: "+1 (441) ###-####",
                    cc: "BM",
                    name_en: "Bermuda",
                    desc_en: "",
                    name_ru: "Бермудские острова",
                    desc_ru: ""
                }, {
                    mask: "+673-###-####",
                    cc: "BN",
                    name_en: "Brunei Darussalam",
                    desc_en: "",
                    name_ru: "Бруней-Даруссалам",
                    desc_ru: ""
                }, {
                    mask: "+591-#-###-####",
                    cc: "BO",
                    name_en: "Bolivia",
                    desc_en: "",
                    name_ru: "Боливия",
                    desc_ru: ""
                }, {
                    mask: "+55 (##) ####-####",
                    cc: "BR",
                    name_en: "Brazil",
                    desc_en: "",
                    name_ru: "Бразилия",
                    desc_ru: ""
                }, {
                    mask: "+55 (##) 7###-####",
                    cc: "BR",
                    name_en: "Brazil",
                    desc_en: "mobile",
                    name_ru: "Бразилия",
                    desc_ru: "мобильные"
                }, {
                    mask: "+55 (##) 9####-####",
                    cc: "BR",
                    name_en: "Brazil",
                    desc_en: "mobile",
                    name_ru: "Бразилия",
                    desc_ru: "мобильные"
                }, {
                    mask: "+1 (242) ###-####",
                    cc: "BS",
                    name_en: "Bahamas",
                    desc_en: "",
                    name_ru: "Багамские Острова",
                    desc_ru: ""
                }, {
                    mask: "+975-17-###-###",
                    cc: "BT",
                    name_en: "Bhutan",
                    desc_en: "",
                    name_ru: "Бутан",
                    desc_ru: ""
                }, {
                    mask: "+975-#-###-###",
                    cc: "BT",
                    name_en: "Bhutan",
                    desc_en: "",
                    name_ru: "Бутан",
                    desc_ru: ""
                }, {
                    mask: "+267-##-###-###",
                    cc: "BW",
                    name_en: "Botswana",
                    desc_en: "",
                    name_ru: "Ботсвана",
                    desc_ru: ""
                }, {
                    mask: "+375 (##) ###-##-##",
                    cc: "BY",
                    name_en: "Belarus",
                    desc_en: "",
                    name_ru: "Беларусь  (Белоруссия) ",
                    desc_ru: ""
                }, {
                    mask: "+501-###-####",
                    cc: "BZ",
                    name_en: "Belize",
                    desc_en: "",
                    name_ru: "Белиз",
                    desc_ru: ""
                }, {
                    mask: "+243 (###) ###-###",
                    cc: "CD",
                    name_en: "Dem. Rep. Congo",
                    desc_en: "",
                    name_ru: "Дем. Респ. Конго  (Киншаса) ",
                    desc_ru: ""
                }, {
                    mask: "+236-##-##-####",
                    cc: "CF",
                    name_en: "Central African Republic",
                    desc_en: "",
                    name_ru: "Центральноафриканская Республика",
                    desc_ru: ""
                }, {
                    mask: "+242-##-###-####",
                    cc: "CG",
                    name_en: "Congo  (Brazzaville) ",
                    desc_en: "",
                    name_ru: "Конго  (Браззавиль) ",
                    desc_ru: ""
                }, {
                    mask: "+41-##-###-####",
                    cc: "CH",
                    name_en: "Switzerland",
                    desc_en: "",
                    name_ru: "Швейцария",
                    desc_ru: ""
                }, {
                    mask: "+225-##-###-###",
                    cc: "CI",
                    name_en: "Cote d’Ivoire  (Ivory Coast) ",
                    desc_en: "",
                    name_ru: "Кот-д’Ивуар",
                    desc_ru: ""
                }, {
                    mask: "+682-##-###",
                    cc: "CK",
                    name_en: "Cook Islands",
                    desc_en: "",
                    name_ru: "Острова Кука",
                    desc_ru: ""
                }, {
                    mask: "+56-#-####-####",
                    cc: "CL",
                    name_en: "Chile",
                    desc_en: "",
                    name_ru: "Чили",
                    desc_ru: ""
                }, {
                    mask: "+237-####-####",
                    cc: "CM",
                    name_en: "Cameroon",
                    desc_en: "",
                    name_ru: "Камерун",
                    desc_ru: ""
                }, {
                    mask: "+86 (###) ####-####",
                    cc: "CN",
                    name_en: "China  (PRC) ",
                    desc_en: "",
                    name_ru: "Китайская Н.Р.",
                    desc_ru: ""
                }, {
                    mask: "+86 (###) ####-###",
                    cc: "CN",
                    name_en: "China  (PRC) ",
                    desc_en: "",
                    name_ru: "Китайская Н.Р.",
                    desc_ru: ""
                }, {
                    mask: "+86-##-#####-#####",
                    cc: "CN",
                    name_en: "China  (PRC) ",
                    desc_en: "",
                    name_ru: "Китайская Н.Р.",
                    desc_ru: ""
                }, {
                    mask: "+57 (###) ###-####",
                    cc: "CO",
                    name_en: "Colombia",
                    desc_en: "",
                    name_ru: "Колумбия",
                    desc_ru: ""
                }, {
                    mask: "+506-####-####",
                    cc: "CR",
                    name_en: "Costa Rica",
                    desc_en: "",
                    name_ru: "Коста-Рика",
                    desc_ru: ""
                }, {
                    mask: "+53-#-###-####",
                    cc: "CU",
                    name_en: "Cuba",
                    desc_en: "",
                    name_ru: "Куба",
                    desc_ru: ""
                }, {
                    mask: "+238 (###) ##-##",
                    cc: "CV",
                    name_en: "Cape Verde",
                    desc_en: "",
                    name_ru: "Кабо-Верде",
                    desc_ru: ""
                }, {
                    mask: "+599-###-####",
                    cc: "CW",
                    name_en: "Curacao",
                    desc_en: "",
                    name_ru: "Кюрасао",
                    desc_ru: ""
                }, {
                    mask: "+357-##-###-###",
                    cc: "CY",
                    name_en: "Cyprus",
                    desc_en: "",
                    name_ru: "Кипр",
                    desc_ru: ""
                }, {
                    mask: "+420 (###) ###-###",
                    cc: "CZ",
                    name_en: "Czech Republic",
                    desc_en: "",
                    name_ru: "Чехия",
                    desc_ru: ""
                }, {
                    mask: "+49 (####) ###-####",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+49 (###) ###-####",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+49 (###) ##-####",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+49 (###) ##-###",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+49 (###) ##-##",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+49-###-###",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+49 ###########",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+4917-###-##-###",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+4916-###-##-###",
                    cc: "DE",
                    name_en: "Germany",
                    desc_en: "",
                    name_ru: "Германия",
                    desc_ru: ""
                }, {
                    mask: "+253-##-##-##-##",
                    cc: "DJ",
                    name_en: "Djibouti",
                    desc_en: "",
                    name_ru: "Джибути",
                    desc_ru: ""
                }, {
                    mask: "+45-##-##-##-##",
                    cc: "DK",
                    name_en: "Denmark",
                    desc_en: "",
                    name_ru: "Дания",
                    desc_ru: ""
                }, {
                    mask: "+1 (767) ###-####",
                    cc: "DM",
                    name_en: "Dominica",
                    desc_en: "",
                    name_ru: "Доминика",
                    desc_ru: ""
                }, {
                    mask: "+1 (809) ###-####",
                    cc: "DO",
                    name_en: "Dominican Republic",
                    desc_en: "",
                    name_ru: "Доминиканская Республика",
                    desc_ru: ""
                }, {
                    mask: "+1 (829) ###-####",
                    cc: "DO",
                    name_en: "Dominican Republic",
                    desc_en: "",
                    name_ru: "Доминиканская Республика",
                    desc_ru: ""
                }, {
                    mask: "+1 (849) ###-####",
                    cc: "DO",
                    name_en: "Dominican Republic",
                    desc_en: "",
                    name_ru: "Доминиканская Республика",
                    desc_ru: ""
                }, {
                    mask: "+213-##-###-####",
                    cc: "DZ",
                    name_en: "Algeria",
                    desc_en: "",
                    name_ru: "Алжир",
                    desc_ru: ""
                }, {
                    mask: "+593-##-###-####",
                    cc: "EC",
                    name_en: "Ecuador ",
                    desc_en: "mobile",
                    name_ru: "Эквадор ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+593-#-###-####",
                    cc: "EC",
                    name_en: "Ecuador",
                    desc_en: "",
                    name_ru: "Эквадор",
                    desc_ru: ""
                }, {
                    mask: "+372-###-####",
                    cc: "EE",
                    name_en: "Estonia",
                    desc_en: "",
                    name_ru: "Эстония",
                    desc_ru: ""
                }, {
                    mask: "+372-####-####",
                    cc: "EE",
                    name_en: "Estonia ",
                    desc_en: "mobile",
                    name_ru: "Эстония ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+20 (###) ###-####",
                    cc: "EG",
                    name_en: "Egypt",
                    desc_en: "",
                    name_ru: "Египет",
                    desc_ru: ""
                }, {
                    mask: "+291-#-###-###",
                    cc: "ER",
                    name_en: "Eritrea",
                    desc_en: "",
                    name_ru: "Эритрея",
                    desc_ru: ""
                }, {
                    mask: "+34 (###) ###-###",
                    cc: "ES",
                    name_en: "Spain",
                    desc_en: "",
                    name_ru: "Испания",
                    desc_ru: ""
                }, {
                    mask: "+251-##-###-####",
                    cc: "ET",
                    name_en: "Ethiopia",
                    desc_en: "",
                    name_ru: "Эфиопия",
                    desc_ru: ""
                }, {
                    mask: "+358 (###) ###-##-##",
                    cc: "FI",
                    name_en: "Finland",
                    desc_en: "",
                    name_ru: "Финляндия",
                    desc_ru: ""
                }, {
                    mask: "+679-##-#####",
                    cc: "FJ",
                    name_en: "Fiji",
                    desc_en: "",
                    name_ru: "Фиджи",
                    desc_ru: ""
                }, {
                    mask: "+500-#####",
                    cc: "FK",
                    name_en: "Falkland Islands",
                    desc_en: "",
                    name_ru: "Фолклендские острова",
                    desc_ru: ""
                }, {
                    mask: "+691-###-####",
                    cc: "FM",
                    name_en: "F.S. Micronesia",
                    desc_en: "",
                    name_ru: "Ф.Ш. Микронезии",
                    desc_ru: ""
                }, {
                    mask: "+298-###-###",
                    cc: "FO",
                    name_en: "Faroe Islands",
                    desc_en: "",
                    name_ru: "Фарерские острова",
                    desc_ru: ""
                }, {
                    mask: "+262-#####-####",
                    cc: "FR",
                    name_en: "Mayotte",
                    desc_en: "",
                    name_ru: "Майотта",
                    desc_ru: ""
                }, {
                    mask: "+33 (###) ###-###",
                    cc: "FR",
                    name_en: "France",
                    desc_en: "",
                    name_ru: "Франция",
                    desc_ru: ""
                }, {
                    mask: "+508-##-####",
                    cc: "FR",
                    name_en: "St Pierre & Miquelon",
                    desc_en: "",
                    name_ru: "Сен-Пьер и Микелон",
                    desc_ru: ""
                }, {
                    mask: "+590 (###) ###-###",
                    cc: "FR",
                    name_en: "Guadeloupe",
                    desc_en: "",
                    name_ru: "Гваделупа",
                    desc_ru: ""
                }, {
                    mask: "+241-#-##-##-##",
                    cc: "GA",
                    name_en: "Gabon",
                    desc_en: "",
                    name_ru: "Габон",
                    desc_ru: ""
                }, {
                    mask: "+1 (473) ###-####",
                    cc: "GD",
                    name_en: "Grenada",
                    desc_en: "",
                    name_ru: "Гренада",
                    desc_ru: ""
                }, {
                    mask: "+995 (###) ###-###",
                    cc: "GE",
                    name_en: "Rep. of Georgia",
                    desc_en: "",
                    name_ru: "Грузия",
                    desc_ru: ""
                }, {
                    mask: "+594-#####-####",
                    cc: "GF",
                    name_en: "Guiana  (French) ",
                    desc_en: "",
                    name_ru: "Фр. Гвиана",
                    desc_ru: ""
                }, {
                    mask: "+233 (###) ###-###",
                    cc: "GH",
                    name_en: "Ghana",
                    desc_en: "",
                    name_ru: "Гана",
                    desc_ru: ""
                }, {
                    mask: "+350-###-#####",
                    cc: "GI",
                    name_en: "Gibraltar",
                    desc_en: "",
                    name_ru: "Гибралтар",
                    desc_ru: ""
                }, {
                    mask: "+299-##-##-##",
                    cc: "GL",
                    name_en: "Greenland",
                    desc_en: "",
                    name_ru: "Гренландия",
                    desc_ru: ""
                }, {
                    mask: "+220 (###) ##-##",
                    cc: "GM",
                    name_en: "Gambia",
                    desc_en: "",
                    name_ru: "Гамбия",
                    desc_ru: ""
                }, {
                    mask: "+224-##-###-###",
                    cc: "GN",
                    name_en: "Guinea",
                    desc_en: "",
                    name_ru: "Гвинея",
                    desc_ru: ""
                }, {
                    mask: "+240-##-###-####",
                    cc: "GQ",
                    name_en: "Equatorial Guinea",
                    desc_en: "",
                    name_ru: "Экваториальная Гвинея",
                    desc_ru: ""
                }, {
                    mask: "+30 (###) ###-####",
                    cc: "GR",
                    name_en: "Greece",
                    desc_en: "",
                    name_ru: "Греция",
                    desc_ru: ""
                }, {
                    mask: "+502-#-###-####",
                    cc: "GT",
                    name_en: "Guatemala",
                    desc_en: "",
                    name_ru: "Гватемала",
                    desc_ru: ""
                }, {
                    mask: "+1 (671) ###-####",
                    cc: "GU",
                    name_en: "Guam",
                    desc_en: "",
                    name_ru: "Гуам",
                    desc_ru: ""
                }, {
                    mask: "+245-#-######",
                    cc: "GW",
                    name_en: "Guinea-Bissau",
                    desc_en: "",
                    name_ru: "Гвинея-Бисау",
                    desc_ru: ""
                }, {
                    mask: "+592-###-####",
                    cc: "GY",
                    name_en: "Guyana",
                    desc_en: "",
                    name_ru: "Гайана",
                    desc_ru: ""
                }, {
                    mask: "+852-####-####",
                    cc: "HK",
                    name_en: "Hong Kong",
                    desc_en: "",
                    name_ru: "Гонконг",
                    desc_ru: ""
                }, {
                    mask: "+504-####-####",
                    cc: "HN",
                    name_en: "Honduras",
                    desc_en: "",
                    name_ru: "Гондурас",
                    desc_ru: ""
                }, {
                    mask: "+385-##-###-###",
                    cc: "HR",
                    name_en: "Croatia",
                    desc_en: "",
                    name_ru: "Хорватия",
                    desc_ru: ""
                }, {
                    mask: "+509-##-##-####",
                    cc: "HT",
                    name_en: "Haiti",
                    desc_en: "",
                    name_ru: "Гаити",
                    desc_ru: ""
                }, {
                    mask: "+36 (###) ###-###",
                    cc: "HU",
                    name_en: "Hungary",
                    desc_en: "",
                    name_ru: "Венгрия",
                    desc_ru: ""
                }, {
                    mask: "+62 (8##) ###-####",
                    cc: "ID",
                    name_en: "Indonesia ",
                    desc_en: "mobile",
                    name_ru: "Индонезия ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+62-##-###-##",
                    cc: "ID",
                    name_en: "Indonesia",
                    desc_en: "",
                    name_ru: "Индонезия",
                    desc_ru: ""
                }, {
                    mask: "+62-##-###-###",
                    cc: "ID",
                    name_en: "Indonesia",
                    desc_en: "",
                    name_ru: "Индонезия",
                    desc_ru: ""
                }, {
                    mask: "+62-##-###-####",
                    cc: "ID",
                    name_en: "Indonesia",
                    desc_en: "",
                    name_ru: "Индонезия",
                    desc_ru: ""
                }, {
                    mask: "+62 (8##) ###-###",
                    cc: "ID",
                    name_en: "Indonesia ",
                    desc_en: "mobile",
                    name_ru: "Индонезия ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+62 (8##) ###-##-###",
                    cc: "ID",
                    name_en: "Indonesia ",
                    desc_en: "mobile",
                    name_ru: "Индонезия ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+353 (###) ###-###",
                    cc: "IE",
                    name_en: "Ireland",
                    desc_en: "",
                    name_ru: "Ирландия",
                    desc_ru: ""
                }, {
                    mask: "+972-5#-###-####",
                    cc: "IL",
                    name_en: "Israel ",
                    desc_en: "mobile",
                    name_ru: "Израиль ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+972-#-###-####",
                    cc: "IL",
                    name_en: "Israel",
                    desc_en: "",
                    name_ru: "Израиль",
                    desc_ru: ""
                }, {
                    mask: "+972-#-###-#####",
                    cc: "IL",
                    name_en: "Israel",
                    desc_en: "",
                    name_ru: "Израиль",
                    desc_ru: ""
                }, {
                    mask: "+91 (####) ###-###",
                    cc: "IN",
                    name_en: "India",
                    desc_en: "",
                    name_ru: "Индия",
                    desc_ru: ""
                }, {
                    mask: "+246-###-####",
                    cc: "IO",
                    name_en: "Diego Garcia",
                    desc_en: "",
                    name_ru: "Диего-Гарсия",
                    desc_ru: ""
                }, {
                    mask: "+964 (###) ###-####",
                    cc: "IQ",
                    name_en: "Iraq",
                    desc_en: "",
                    name_ru: "Ирак",
                    desc_ru: ""
                }, {
                    mask: "+98 (###) ###-####",
                    cc: "IR",
                    name_en: "Iran",
                    desc_en: "",
                    name_ru: "Иран",
                    desc_ru: ""
                }, {
                    mask: "+354-###-####",
                    cc: "IS",
                    name_en: "Iceland",
                    desc_en: "",
                    name_ru: "Исландия",
                    desc_ru: ""
                }, {
                    mask: "+39 (###) ####-###",
                    cc: "IT",
                    name_en: "Italy",
                    desc_en: "",
                    name_ru: "Италия",
                    desc_ru: ""
                }, {
                    mask: "+1 (876) ###-####",
                    cc: "JM",
                    name_en: "Jamaica",
                    desc_en: "",
                    name_ru: "Ямайка",
                    desc_ru: ""
                }, {
                    mask: "+962-#-####-####",
                    cc: "JO",
                    name_en: "Jordan",
                    desc_en: "",
                    name_ru: "Иордания",
                    desc_ru: ""
                }, {
                    mask: "+81-##-####-####",
                    cc: "JP",
                    name_en: "Japan ",
                    desc_en: "mobile",
                    name_ru: "Япония ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+81 (###) ###-###",
                    cc: "JP",
                    name_en: "Japan",
                    desc_en: "",
                    name_ru: "Япония",
                    desc_ru: ""
                }, {
                    mask: "+254-###-######",
                    cc: "KE",
                    name_en: "Kenya",
                    desc_en: "",
                    name_ru: "Кения",
                    desc_ru: ""
                }, {
                    mask: "+996 (###) ###-###",
                    cc: "KG",
                    name_en: "Kyrgyzstan",
                    desc_en: "",
                    name_ru: "Киргизия",
                    desc_ru: ""
                }, {
                    mask: "+855-##-###-###",
                    cc: "KH",
                    name_en: "Cambodia",
                    desc_en: "",
                    name_ru: "Камбоджа",
                    desc_ru: ""
                }, {
                    mask: "+686-##-###",
                    cc: "KI",
                    name_en: "Kiribati",
                    desc_en: "",
                    name_ru: "Кирибати",
                    desc_ru: ""
                }, {
                    mask: "+269-##-#####",
                    cc: "KM",
                    name_en: "Comoros",
                    desc_en: "",
                    name_ru: "Коморы",
                    desc_ru: ""
                }, {
                    mask: "+1 (869) ###-####",
                    cc: "KN",
                    name_en: "Saint Kitts & Nevis",
                    desc_en: "",
                    name_ru: "Сент-Китс и Невис",
                    desc_ru: ""
                }, {
                    mask: "+850-191-###-####",
                    cc: "KP",
                    name_en: "DPR Korea  (North)  ",
                    desc_en: "mobile",
                    name_ru: "Корейская НДР ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+850-##-###-###",
                    cc: "KP",
                    name_en: "DPR Korea  (North) ",
                    desc_en: "",
                    name_ru: "Корейская НДР",
                    desc_ru: ""
                }, {
                    mask: "+850-###-####-###",
                    cc: "KP",
                    name_en: "DPR Korea  (North) ",
                    desc_en: "",
                    name_ru: "Корейская НДР",
                    desc_ru: ""
                }, {
                    mask: "+850-###-###",
                    cc: "KP",
                    name_en: "DPR Korea  (North) ",
                    desc_en: "",
                    name_ru: "Корейская НДР",
                    desc_ru: ""
                }, {
                    mask: "+850-####-####",
                    cc: "KP",
                    name_en: "DPR Korea  (North) ",
                    desc_en: "",
                    name_ru: "Корейская НДР",
                    desc_ru: ""
                }, {
                    mask: "+850-####-#############",
                    cc: "KP",
                    name_en: "DPR Korea  (North) ",
                    desc_en: "",
                    name_ru: "Корейская НДР",
                    desc_ru: ""
                }, {
                    mask: "+82-##-###-####",
                    cc: "KR",
                    name_en: "Korea  (South) ",
                    desc_en: "",
                    name_ru: "Респ. Корея",
                    desc_ru: ""
                }, {
                    mask: "+965-####-####",
                    cc: "KW",
                    name_en: "Kuwait",
                    desc_en: "",
                    name_ru: "Кувейт",
                    desc_ru: ""
                }, {
                    mask: "+1 (345) ###-####",
                    cc: "KY",
                    name_en: "Cayman Islands",
                    desc_en: "",
                    name_ru: "Каймановы острова",
                    desc_ru: ""
                }, {
                    mask: "+7 (6##) ###-##-##",
                    cc: "KZ",
                    name_en: "Kazakhstan",
                    desc_en: "",
                    name_ru: "Казахстан",
                    desc_ru: ""
                }, {
                    mask: "+7 (7##) ###-##-##",
                    cc: "KZ",
                    name_en: "Kazakhstan",
                    desc_en: "",
                    name_ru: "Казахстан",
                    desc_ru: ""
                }, {
                    mask: "+856 (20##) ###-###",
                    cc: "LA",
                    name_en: "Laos ",
                    desc_en: "mobile",
                    name_ru: "Лаос ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+856-##-###-###",
                    cc: "LA",
                    name_en: "Laos",
                    desc_en: "",
                    name_ru: "Лаос",
                    desc_ru: ""
                }, {
                    mask: "+961-##-###-###",
                    cc: "LB",
                    name_en: "Lebanon ",
                    desc_en: "mobile",
                    name_ru: "Ливан ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+961-#-###-###",
                    cc: "LB",
                    name_en: "Lebanon",
                    desc_en: "",
                    name_ru: "Ливан",
                    desc_ru: ""
                }, {
                    mask: "+1 (758) ###-####",
                    cc: "LC",
                    name_en: "Saint Lucia",
                    desc_en: "",
                    name_ru: "Сент-Люсия",
                    desc_ru: ""
                }, {
                    mask: "+423 (###) ###-####",
                    cc: "LI",
                    name_en: "Liechtenstein",
                    desc_en: "",
                    name_ru: "Лихтенштейн",
                    desc_ru: ""
                }, {
                    mask: "+94-##-###-####",
                    cc: "LK",
                    name_en: "Sri Lanka",
                    desc_en: "",
                    name_ru: "Шри-Ланка",
                    desc_ru: ""
                }, {
                    mask: "+231-##-###-###",
                    cc: "LR",
                    name_en: "Liberia",
                    desc_en: "",
                    name_ru: "Либерия",
                    desc_ru: ""
                }, {
                    mask: "+266-#-###-####",
                    cc: "LS",
                    name_en: "Lesotho",
                    desc_en: "",
                    name_ru: "Лесото",
                    desc_ru: ""
                }, {
                    mask: "+370 (###) ##-###",
                    cc: "LT",
                    name_en: "Lithuania",
                    desc_en: "",
                    name_ru: "Литва",
                    desc_ru: ""
                }, {
                    mask: "+352 (###) ###-###",
                    cc: "LU",
                    name_en: "Luxembourg",
                    desc_en: "",
                    name_ru: "Люксембург",
                    desc_ru: ""
                }, {
                    mask: "+371-##-###-###",
                    cc: "LV",
                    name_en: "Latvia",
                    desc_en: "",
                    name_ru: "Латвия",
                    desc_ru: ""
                }, {
                    mask: "+218-##-###-###",
                    cc: "LY",
                    name_en: "Libya",
                    desc_en: "",
                    name_ru: "Ливия",
                    desc_ru: ""
                }, {
                    mask: "+218-21-###-####",
                    cc: "LY",
                    name_en: "Libya",
                    desc_en: "Tripoli",
                    name_ru: "Ливия",
                    desc_ru: "Триполи"
                }, {
                    mask: "+212-##-####-###",
                    cc: "MA",
                    name_en: "Morocco",
                    desc_en: "",
                    name_ru: "Марокко",
                    desc_ru: ""
                }, {
                    mask: "+377 (###) ###-###",
                    cc: "MC",
                    name_en: "Monaco",
                    desc_en: "",
                    name_ru: "Монако",
                    desc_ru: ""
                }, {
                    mask: "+377-##-###-###",
                    cc: "MC",
                    name_en: "Monaco",
                    desc_en: "",
                    name_ru: "Монако",
                    desc_ru: ""
                }, {
                    mask: "+373-####-####",
                    cc: "MD",
                    name_en: "Moldova",
                    desc_en: "",
                    name_ru: "Молдова",
                    desc_ru: ""
                }, {
                    mask: "+382-##-###-###",
                    cc: "ME",
                    name_en: "Montenegro",
                    desc_en: "",
                    name_ru: "Черногория",
                    desc_ru: ""
                }, {
                    mask: "+261-##-##-#####",
                    cc: "MG",
                    name_en: "Madagascar",
                    desc_en: "",
                    name_ru: "Мадагаскар",
                    desc_ru: ""
                }, {
                    mask: "+692-###-####",
                    cc: "MH",
                    name_en: "Marshall Islands",
                    desc_en: "",
                    name_ru: "Маршалловы Острова",
                    desc_ru: ""
                }, {
                    mask: "+389-##-###-###",
                    cc: "MK",
                    name_en: "Republic of Macedonia",
                    desc_en: "",
                    name_ru: "Респ. Македония",
                    desc_ru: ""
                }, {
                    mask: "+223-##-##-####",
                    cc: "ML",
                    name_en: "Mali",
                    desc_en: "",
                    name_ru: "Мали",
                    desc_ru: ""
                }, {
                    mask: "+95-##-###-###",
                    cc: "MM",
                    name_en: "Burma  (Myanmar) ",
                    desc_en: "",
                    name_ru: "Бирма  (Мьянма) ",
                    desc_ru: ""
                }, {
                    mask: "+95-#-###-###",
                    cc: "MM",
                    name_en: "Burma  (Myanmar) ",
                    desc_en: "",
                    name_ru: "Бирма  (Мьянма) ",
                    desc_ru: ""
                }, {
                    mask: "+95-###-###",
                    cc: "MM",
                    name_en: "Burma  (Myanmar) ",
                    desc_en: "",
                    name_ru: "Бирма  (Мьянма) ",
                    desc_ru: ""
                }, {
                    mask: "+976-##-##-####",
                    cc: "MN",
                    name_en: "Mongolia",
                    desc_en: "",
                    name_ru: "Монголия",
                    desc_ru: ""
                }, {
                    mask: "+853-####-####",
                    cc: "MO",
                    name_en: "Macau",
                    desc_en: "",
                    name_ru: "Макао",
                    desc_ru: ""
                }, {
                    mask: "+1 (670) ###-####",
                    cc: "MP",
                    name_en: "Northern Mariana Islands",
                    desc_en: "",
                    name_ru: "Северные Марианские острова Сайпан",
                    desc_ru: ""
                }, {
                    mask: "+596 (###) ##-##-##",
                    cc: "MQ",
                    name_en: "Martinique",
                    desc_en: "",
                    name_ru: "Мартиника",
                    desc_ru: ""
                }, {
                    mask: "+222-##-##-####",
                    cc: "MR",
                    name_en: "Mauritania",
                    desc_en: "",
                    name_ru: "Мавритания",
                    desc_ru: ""
                }, {
                    mask: "+1 (664) ###-####",
                    cc: "MS",
                    name_en: "Montserrat",
                    desc_en: "",
                    name_ru: "Монтсеррат",
                    desc_ru: ""
                }, {
                    mask: "+356-####-####",
                    cc: "MT",
                    name_en: "Malta",
                    desc_en: "",
                    name_ru: "Мальта",
                    desc_ru: ""
                }, {
                    mask: "+230-###-####",
                    cc: "MU",
                    name_en: "Mauritius",
                    desc_en: "",
                    name_ru: "Маврикий",
                    desc_ru: ""
                }, {
                    mask: "+960-###-####",
                    cc: "MV",
                    name_en: "Maldives",
                    desc_en: "",
                    name_ru: "Мальдивские острова",
                    desc_ru: ""
                }, {
                    mask: "+265-1-###-###",
                    cc: "MW",
                    name_en: "Malawi",
                    desc_en: "Telecom Ltd",
                    name_ru: "Малави",
                    desc_ru: "Telecom Ltd"
                }, {
                    mask: "+265-#-####-####",
                    cc: "MW",
                    name_en: "Malawi",
                    desc_en: "",
                    name_ru: "Малави",
                    desc_ru: ""
                }, {
                    mask: "+52 (###) ###-####",
                    cc: "MX",
                    name_en: "Mexico",
                    desc_en: "",
                    name_ru: "Мексика",
                    desc_ru: ""
                }, {
                    mask: "+52-##-##-####",
                    cc: "MX",
                    name_en: "Mexico",
                    desc_en: "",
                    name_ru: "Мексика",
                    desc_ru: ""
                }, {
                    mask: "+60-##-###-####",
                    cc: "MY",
                    name_en: "Malaysia ",
                    desc_en: "mobile",
                    name_ru: "Малайзия ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+60 (###) ###-###",
                    cc: "MY",
                    name_en: "Malaysia",
                    desc_en: "",
                    name_ru: "Малайзия",
                    desc_ru: ""
                }, {
                    mask: "+60-##-###-###",
                    cc: "MY",
                    name_en: "Malaysia",
                    desc_en: "",
                    name_ru: "Малайзия",
                    desc_ru: ""
                }, {
                    mask: "+60-#-###-###",
                    cc: "MY",
                    name_en: "Malaysia",
                    desc_en: "",
                    name_ru: "Малайзия",
                    desc_ru: ""
                }, {
                    mask: "+258-##-###-###",
                    cc: "MZ",
                    name_en: "Mozambique",
                    desc_en: "",
                    name_ru: "Мозамбик",
                    desc_ru: ""
                }, {
                    mask: "+264-##-###-####",
                    cc: "NA",
                    name_en: "Namibia",
                    desc_en: "",
                    name_ru: "Намибия",
                    desc_ru: ""
                }, {
                    mask: "+687-##-####",
                    cc: "NC",
                    name_en: "New Caledonia",
                    desc_en: "",
                    name_ru: "Новая Каледония",
                    desc_ru: ""
                }, {
                    mask: "+227-##-##-####",
                    cc: "NE",
                    name_en: "Niger",
                    desc_en: "",
                    name_ru: "Нигер",
                    desc_ru: ""
                }, {
                    mask: "+672-3##-###",
                    cc: "NF",
                    name_en: "Norfolk Island",
                    desc_en: "",
                    name_ru: "Норфолк  (остров) ",
                    desc_ru: ""
                }, {
                    mask: "+234 (###) ###-####",
                    cc: "NG",
                    name_en: "Nigeria",
                    desc_en: "",
                    name_ru: "Нигерия",
                    desc_ru: ""
                }, {
                    mask: "+234-##-###-###",
                    cc: "NG",
                    name_en: "Nigeria",
                    desc_en: "",
                    name_ru: "Нигерия",
                    desc_ru: ""
                }, {
                    mask: "+234-##-###-##",
                    cc: "NG",
                    name_en: "Nigeria",
                    desc_en: "",
                    name_ru: "Нигерия",
                    desc_ru: ""
                }, {
                    mask: "+234 (###) ###-####",
                    cc: "NG",
                    name_en: "Nigeria ",
                    desc_en: "mobile",
                    name_ru: "Нигерия ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+505-####-####",
                    cc: "NI",
                    name_en: "Nicaragua",
                    desc_en: "",
                    name_ru: "Никарагуа",
                    desc_ru: ""
                }, {
                    mask: "+31-##-###-####",
                    cc: "NL",
                    name_en: "Netherlands",
                    desc_en: "",
                    name_ru: "Нидерланды",
                    desc_ru: ""
                }, {
                    mask: "+47 (###) ##-###",
                    cc: "NO",
                    name_en: "Norway",
                    desc_en: "",
                    name_ru: "Норвегия",
                    desc_ru: ""
                }, {
                    mask: "+977-##-###-###",
                    cc: "NP",
                    name_en: "Nepal",
                    desc_en: "",
                    name_ru: "Непал",
                    desc_ru: ""
                }, {
                    mask: "+674-###-####",
                    cc: "NR",
                    name_en: "Nauru",
                    desc_en: "",
                    name_ru: "Науру",
                    desc_ru: ""
                }, {
                    mask: "+683-####",
                    cc: "NU",
                    name_en: "Niue",
                    desc_en: "",
                    name_ru: "Ниуэ",
                    desc_ru: ""
                }, {
                    mask: "+64 (###) ###-###",
                    cc: "NZ",
                    name_en: "New Zealand",
                    desc_en: "",
                    name_ru: "Новая Зеландия",
                    desc_ru: ""
                }, {
                    mask: "+64-##-###-###",
                    cc: "NZ",
                    name_en: "New Zealand",
                    desc_en: "",
                    name_ru: "Новая Зеландия",
                    desc_ru: ""
                }, {
                    mask: "+64 (###) ###-####",
                    cc: "NZ",
                    name_en: "New Zealand",
                    desc_en: "",
                    name_ru: "Новая Зеландия",
                    desc_ru: ""
                }, {
                    mask: "+968-##-###-###",
                    cc: "OM",
                    name_en: "Oman",
                    desc_en: "",
                    name_ru: "Оман",
                    desc_ru: ""
                }, {
                    mask: "+507-###-####",
                    cc: "PA",
                    name_en: "Panama",
                    desc_en: "",
                    name_ru: "Панама",
                    desc_ru: ""
                }, {
                    mask: "+51 (###) ###-###",
                    cc: "PE",
                    name_en: "Peru",
                    desc_en: "",
                    name_ru: "Перу",
                    desc_ru: ""
                }, {
                    mask: "+689-##-##-##",
                    cc: "PF",
                    name_en: "French Polynesia",
                    desc_en: "",
                    name_ru: "Французская Полинезия  (Таити) ",
                    desc_ru: ""
                }, {
                    mask: "+675 (###) ##-###",
                    cc: "PG",
                    name_en: "Papua New Guinea",
                    desc_en: "",
                    name_ru: "Папуа-Новая Гвинея",
                    desc_ru: ""
                }, {
                    mask: "+63 (###) ###-####",
                    cc: "PH",
                    name_en: "Philippines",
                    desc_en: "",
                    name_ru: "Филиппины",
                    desc_ru: ""
                }, {
                    mask: "+92 (###) ###-####",
                    cc: "PK",
                    name_en: "Pakistan",
                    desc_en: "",
                    name_ru: "Пакистан",
                    desc_ru: ""
                }, {
                    mask: "+48 (###) ###-###",
                    cc: "PL",
                    name_en: "Poland",
                    desc_en: "",
                    name_ru: "Польша",
                    desc_ru: ""
                }, {
                    mask: "+970-##-###-####",
                    cc: "PS",
                    name_en: "Palestine",
                    desc_en: "",
                    name_ru: "Палестина",
                    desc_ru: ""
                }, {
                    mask: "+351-##-###-####",
                    cc: "PT",
                    name_en: "Portugal",
                    desc_en: "",
                    name_ru: "Португалия",
                    desc_ru: ""
                }, {
                    mask: "+680-###-####",
                    cc: "PW",
                    name_en: "Palau",
                    desc_en: "",
                    name_ru: "Палау",
                    desc_ru: ""
                }, {
                    mask: "+595 (###) ###-###",
                    cc: "PY",
                    name_en: "Paraguay",
                    desc_en: "",
                    name_ru: "Парагвай",
                    desc_ru: ""
                }, {
                    mask: "+974-####-####",
                    cc: "QA",
                    name_en: "Qatar",
                    desc_en: "",
                    name_ru: "Катар",
                    desc_ru: ""
                }, {
                    mask: "+262-#####-####",
                    cc: "RE",
                    name_en: "Reunion",
                    desc_en: "",
                    name_ru: "Реюньон",
                    desc_ru: ""
                }, {
                    mask: "+40-##-###-####",
                    cc: "RO",
                    name_en: "Romania",
                    desc_en: "",
                    name_ru: "Румыния",
                    desc_ru: ""
                }, {
                    mask: "+381-##-###-####",
                    cc: "RS",
                    name_en: "Serbia",
                    desc_en: "",
                    name_ru: "Сербия",
                    desc_ru: ""
                }, {
                    mask: "+7 (###) ###-##-##",
                    cc: "RU",
                    name_en: "Russia",
                    desc_en: "",
                    name_ru: "Россия",
                    desc_ru: ""
                }, {
                    mask: "8 (###) ###-##-##",
                    cc: "RU",
                    name_en: "Russia",
                    desc_en: "",
                    name_ru: "Россия",
                    desc_ru: ""
                }, {
                    mask: "+250 (###) ###-###",
                    cc: "RW",
                    name_en: "Rwanda",
                    desc_en: "",
                    name_ru: "Руанда",
                    desc_ru: ""
                }, {
                    mask: "+966-5-####-####",
                    cc: "SA",
                    name_en: "Saudi Arabia ",
                    desc_en: "mobile",
                    name_ru: "Саудовская Аравия ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+966-#-###-####",
                    cc: "SA",
                    name_en: "Saudi Arabia",
                    desc_en: "",
                    name_ru: "Саудовская Аравия",
                    desc_ru: ""
                }, {
                    mask: "+677-###-####",
                    cc: "SB",
                    name_en: "Solomon Islands ",
                    desc_en: "mobile",
                    name_ru: "Соломоновы Острова ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+677-#####",
                    cc: "SB",
                    name_en: "Solomon Islands",
                    desc_en: "",
                    name_ru: "Соломоновы Острова",
                    desc_ru: ""
                }, {
                    mask: "+248-#-###-###",
                    cc: "SC",
                    name_en: "Seychelles",
                    desc_en: "",
                    name_ru: "Сейшелы",
                    desc_ru: ""
                }, {
                    mask: "+249-##-###-####",
                    cc: "SD",
                    name_en: "Sudan",
                    desc_en: "",
                    name_ru: "Судан",
                    desc_ru: ""
                }, {
                    mask: "+46-##-###-####",
                    cc: "SE",
                    name_en: "Sweden",
                    desc_en: "",
                    name_ru: "Швеция",
                    desc_ru: ""
                }, {
                    mask: "+65-####-####",
                    cc: "SG",
                    name_en: "Singapore",
                    desc_en: "",
                    name_ru: "Сингапур",
                    desc_ru: ""
                }, {
                    mask: "+290-####",
                    cc: "SH",
                    name_en: "Saint Helena",
                    desc_en: "",
                    name_ru: "Остров Святой Елены",
                    desc_ru: ""
                }, {
                    mask: "+290-####",
                    cc: "SH",
                    name_en: "Tristan da Cunha",
                    desc_en: "",
                    name_ru: "Тристан-да-Кунья",
                    desc_ru: ""
                }, {
                    mask: "+386-##-###-###",
                    cc: "SI",
                    name_en: "Slovenia",
                    desc_en: "",
                    name_ru: "Словения",
                    desc_ru: ""
                }, {
                    mask: "+421 (###) ###-###",
                    cc: "SK",
                    name_en: "Slovakia",
                    desc_en: "",
                    name_ru: "Словакия",
                    desc_ru: ""
                }, {
                    mask: "+232-##-######",
                    cc: "SL",
                    name_en: "Sierra Leone",
                    desc_en: "",
                    name_ru: "Сьерра-Леоне",
                    desc_ru: ""
                }, {
                    mask: "+378-####-######",
                    cc: "SM",
                    name_en: "San Marino",
                    desc_en: "",
                    name_ru: "Сан-Марино",
                    desc_ru: ""
                }, {
                    mask: "+221-##-###-####",
                    cc: "SN",
                    name_en: "Senegal",
                    desc_en: "",
                    name_ru: "Сенегал",
                    desc_ru: ""
                }, {
                    mask: "+252-##-###-###",
                    cc: "SO",
                    name_en: "Somalia",
                    desc_en: "",
                    name_ru: "Сомали",
                    desc_ru: ""
                }, {
                    mask: "+252-#-###-###",
                    cc: "SO",
                    name_en: "Somalia",
                    desc_en: "",
                    name_ru: "Сомали",
                    desc_ru: ""
                }, {
                    mask: "+252-#-###-###",
                    cc: "SO",
                    name_en: "Somalia ",
                    desc_en: "mobile",
                    name_ru: "Сомали ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+597-###-####",
                    cc: "SR",
                    name_en: "Suriname ",
                    desc_en: "mobile",
                    name_ru: "Суринам ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+597-###-###",
                    cc: "SR",
                    name_en: "Suriname",
                    desc_en: "",
                    name_ru: "Суринам",
                    desc_ru: ""
                }, {
                    mask: "+211-##-###-####",
                    cc: "SS",
                    name_en: "South Sudan",
                    desc_en: "",
                    name_ru: "Южный Судан",
                    desc_ru: ""
                }, {
                    mask: "+239-##-#####",
                    cc: "ST",
                    name_en: "Sao Tome and Principe",
                    desc_en: "",
                    name_ru: "Сан-Томе и Принсипи",
                    desc_ru: ""
                }, {
                    mask: "+503-##-##-####",
                    cc: "SV",
                    name_en: "El Salvador",
                    desc_en: "",
                    name_ru: "Сальвадор",
                    desc_ru: ""
                }, {
                    mask: "+1 (721) ###-####",
                    cc: "SX",
                    name_en: "Sint Maarten",
                    desc_en: "",
                    name_ru: "Синт-Маартен",
                    desc_ru: ""
                }, {
                    mask: "+963-##-####-###",
                    cc: "SY",
                    name_en: "Syrian Arab Republic",
                    desc_en: "",
                    name_ru: "Сирийская арабская республика",
                    desc_ru: ""
                }, {
                    mask: "+268-##-##-####",
                    cc: "SZ",
                    name_en: "Swaziland",
                    desc_en: "",
                    name_ru: "Свазиленд",
                    desc_ru: ""
                }, {
                    mask: "+1 (649) ###-####",
                    cc: "TC",
                    name_en: "Turks & Caicos",
                    desc_en: "",
                    name_ru: "Тёркс и Кайкос",
                    desc_ru: ""
                }, {
                    mask: "+235-##-##-##-##",
                    cc: "TD",
                    name_en: "Chad",
                    desc_en: "",
                    name_ru: "Чад",
                    desc_ru: ""
                }, {
                    mask: "+228-##-###-###",
                    cc: "TG",
                    name_en: "Togo",
                    desc_en: "",
                    name_ru: "Того",
                    desc_ru: ""
                }, {
                    mask: "+66-##-###-####",
                    cc: "TH",
                    name_en: "Thailand ",
                    desc_en: "mobile",
                    name_ru: "Таиланд ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+992-##-###-####",
                    cc: "TJ",
                    name_en: "Tajikistan",
                    desc_en: "",
                    name_ru: "Таджикистан",
                    desc_ru: ""
                }, {
                    mask: "+690-####",
                    cc: "TK",
                    name_en: "Tokelau",
                    desc_en: "",
                    name_ru: "Токелау",
                    desc_ru: ""
                }, {
                    mask: "+670-###-####",
                    cc: "TL",
                    name_en: "East Timor",
                    desc_en: "",
                    name_ru: "Восточный Тимор",
                    desc_ru: ""
                }, {
                    mask: "+670-77#-#####",
                    cc: "TL",
                    name_en: "East Timor",
                    desc_en: "Timor Telecom",
                    name_ru: "Восточный Тимор",
                    desc_ru: "Timor Telecom"
                }, {
                    mask: "+670-78#-#####",
                    cc: "TL",
                    name_en: "East Timor",
                    desc_en: "Timor Telecom",
                    name_ru: "Восточный Тимор",
                    desc_ru: "Timor Telecom"
                }, {
                    mask: "+993-#-###-####",
                    cc: "TM",
                    name_en: "Turkmenistan",
                    desc_en: "",
                    name_ru: "Туркменистан",
                    desc_ru: ""
                }, {
                    mask: "+216-##-###-###",
                    cc: "TN",
                    name_en: "Tunisia",
                    desc_en: "",
                    name_ru: "Тунис",
                    desc_ru: ""
                }, {
                    mask: "+676-#####",
                    cc: "TO",
                    name_en: "Tonga",
                    desc_en: "",
                    name_ru: "Тонга",
                    desc_ru: ""
                }, {
                    mask: "+90 (###) ###-####",
                    cc: "TR",
                    name_en: "Turkey",
                    desc_en: "",
                    name_ru: "Турция",
                    desc_ru: ""
                }, {
                    mask: "+1 (868) ###-####",
                    cc: "TT",
                    name_en: "Trinidad & Tobago",
                    desc_en: "",
                    name_ru: "Тринидад и Тобаго",
                    desc_ru: ""
                }, {
                    mask: "+688-90####",
                    cc: "TV",
                    name_en: "Tuvalu ",
                    desc_en: "mobile",
                    name_ru: "Тувалу ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+688-2####",
                    cc: "TV",
                    name_en: "Tuvalu",
                    desc_en: "",
                    name_ru: "Тувалу",
                    desc_ru: ""
                }, {
                    mask: "+886-#-####-####",
                    cc: "TW",
                    name_en: "Taiwan",
                    desc_en: "",
                    name_ru: "Тайвань",
                    desc_ru: ""
                }, {
                    mask: "+886-####-####",
                    cc: "TW",
                    name_en: "Taiwan",
                    desc_en: "",
                    name_ru: "Тайвань",
                    desc_ru: ""
                }, {
                    mask: "+255-##-###-####",
                    cc: "TZ",
                    name_en: "Tanzania",
                    desc_en: "",
                    name_ru: "Танзания",
                    desc_ru: ""
                }, {
                    mask: "+380 (##) ###-##-##",
                    cc: "UA",
                    name_en: "Ukraine",
                    desc_en: "",
                    name_ru: "Украина",
                    desc_ru: ""
                }, {
                    mask: "+256 (###) ###-###",
                    cc: "UG",
                    name_en: "Uganda",
                    desc_en: "",
                    name_ru: "Уганда",
                    desc_ru: ""
                }, {
                    mask: "+44-##-####-####",
                    cc: "UK",
                    name_en: "United Kingdom",
                    desc_en: "",
                    name_ru: "Великобритания",
                    desc_ru: ""
                }, {
                    mask: "+598-#-###-##-##",
                    cc: "UY",
                    name_en: "Uruguay",
                    desc_en: "",
                    name_ru: "Уругвай",
                    desc_ru: ""
                }, {
                    mask: "+998-##-###-####",
                    cc: "UZ",
                    name_en: "Uzbekistan",
                    desc_en: "",
                    name_ru: "Узбекистан",
                    desc_ru: ""
                }, {
                    mask: "+39-6-698-#####",
                    cc: "VA",
                    name_en: "Vatican City",
                    desc_en: "",
                    name_ru: "Ватикан",
                    desc_ru: ""
                }, {
                    mask: "+1 (784) ###-####",
                    cc: "VC",
                    name_en: "Saint Vincent & the Grenadines",
                    desc_en: "",
                    name_ru: "Сент-Винсент и Гренадины",
                    desc_ru: ""
                }, {
                    mask: "+58 (###) ###-####",
                    cc: "VE",
                    name_en: "Venezuela",
                    desc_en: "",
                    name_ru: "Венесуэла",
                    desc_ru: ""
                }, {
                    mask: "+1 (284) ###-####",
                    cc: "VG",
                    name_en: "British Virgin Islands",
                    desc_en: "",
                    name_ru: "Британские Виргинские острова",
                    desc_ru: ""
                }, {
                    mask: "+1 (340) ###-####",
                    cc: "VI",
                    name_en: "US Virgin Islands",
                    desc_en: "",
                    name_ru: "Американские Виргинские острова",
                    desc_ru: ""
                }, {
                    mask: "+84-##-####-###",
                    cc: "VN",
                    name_en: "Vietnam",
                    desc_en: "",
                    name_ru: "Вьетнам",
                    desc_ru: ""
                }, {
                    mask: "+84 (###) ####-###",
                    cc: "VN",
                    name_en: "Vietnam",
                    desc_en: "",
                    name_ru: "Вьетнам",
                    desc_ru: ""
                }, {
                    mask: "+678-##-#####",
                    cc: "VU",
                    name_en: "Vanuatu ",
                    desc_en: "mobile",
                    name_ru: "Вануату ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+678-#####",
                    cc: "VU",
                    name_en: "Vanuatu",
                    desc_en: "",
                    name_ru: "Вануату",
                    desc_ru: ""
                }, {
                    mask: "+681-##-####",
                    cc: "WF",
                    name_en: "Wallis and Futuna",
                    desc_en: "",
                    name_ru: "Уоллис и Футуна",
                    desc_ru: ""
                }, {
                    mask: "+685-##-####",
                    cc: "WS",
                    name_en: "Samoa",
                    desc_en: "",
                    name_ru: "Самоа",
                    desc_ru: ""
                }, {
                    mask: "+967-###-###-###",
                    cc: "YE",
                    name_en: "Yemen ",
                    desc_en: "mobile",
                    name_ru: "Йемен ",
                    desc_ru: "мобильные"
                }, {
                    mask: "+967-#-###-###",
                    cc: "YE",
                    name_en: "Yemen",
                    desc_en: "",
                    name_ru: "Йемен",
                    desc_ru: ""
                }, {
                    mask: "+967-##-###-###",
                    cc: "YE",
                    name_en: "Yemen",
                    desc_en: "",
                    name_ru: "Йемен",
                    desc_ru: ""
                }, {
                    mask: "+27-##-###-####",
                    cc: "ZA",
                    name_en: "South Africa",
                    desc_en: "",
                    name_ru: "Южно-Африканская Респ.",
                    desc_ru: ""
                }, {
                    mask: "+260-##-###-####",
                    cc: "ZM",
                    name_en: "Zambia",
                    desc_en: "",
                    name_ru: "Замбия",
                    desc_ru: ""
                }, {
                    mask: "+263-#-######",
                    cc: "ZW",
                    name_en: "Zimbabwe",
                    desc_en: "",
                    name_ru: "Зимбабве",
                    desc_ru: ""
                }, {
                    mask: "+1 (###) ###-####",
                    cc: "US",
                    name_en: "USA and Canada",
                    desc_en: "",
                    name_ru: "США и Канада",
                    desc_ru: ""
                }, {
                    mask: "8 (800) ###-##-##",
                    cc: "RU",
                    name_en: "Hotline",
                    desc_en: "",
                    name_ru: "Горячая линия",
                    desc_ru: ""
                }],
                init: function() {
                    let e, n, a, s, c = this.phoneMasks;
                    function t(t) {
                        if ("INPUT" !== t.target.tagName)
                            return !1;
                        if (!t.target.dataset.phonemask)
                            return !1;
                        if (!c.length)
                            return !1;
                        for (let e of c) {
                            let n = new RegExp("^" + e.mask.replace(/\D+/g, ""));
                            t.target.value.replace(/\D+/g, "").match(n) && (s = e.mask)
                        }
                        return !!s && (e = 0,
                        n = s.replace(/\D+/g, ""),
                        a = t.target.value.replace(/\D+/g, ""),
                        t.target.value.length != s.length && ("focusout" == t.type && a.length <= n.length && (t.target.value = null),
                        void (t.target.value = s.replace(/./g, (function(n) {
                            return /[#\d]/.test(n) && e < a.length ? a.charAt(e++) : e >= a.length ? "" : n
                        }
                        )))))
                    }
                    document.addEventListener("input", t),
                    document.addEventListener("focusin", t),
                    document.addEventListener("focusout", t);
                    var r = document.createEvent("Event");
                    r.initEvent("input", !0, !0);
                    let o = document.querySelectorAll("[data-phonemask]");
                    for (let e of o)
                        e.dispatchEvent(r)
                }
            };
            var p = Object.defineProperty
              , h = Object.getOwnPropertySymbols
              , f = Object.prototype.hasOwnProperty
              , g = Object.prototype.propertyIsEnumerable
              , k = (e,n,a)=>n in e ? p(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[n] = a
              , v = (e,n)=>{
                for (var a in n || (n = {}))
                    f.call(n, a) && k(e, a, n[a]);
                if (h)
                    for (var a of h(n))
                        g.call(n, a) && k(e, a, n[a]);
                return e
            }
            ;
            window.$ = window.jQuery = a(3759),
            window.Tools = t;
            let w = a(4596);
            window.Lang = new class {
                constructor() {
                    this.guide = {
                        ru: {
                            copy_link_text: "Ссылка скопирована!"
                        },
                        en: {
                            copy_link_text: "Link copied!"
                        }
                    }
                }
                get(e, n) {
                    if (!n) {
                        n = "en" === location.href.split("/")[3] ? "en" : "ru"
                    }
                    return this.guide[n][e]
                }
            }
            ;
            window.Base = class {
                constructor() {
                    let e = Object.getPrototypeOf(this)
                      , n = Object.getPrototypeOf(e);
                    this.callInitByProto(n),
                    this.callInitByProto(e);
                    new r;
                    c()("body").removeClass("preload"),
                    this.Cart = new u,
                    l.init(),
                    c()((function() {
                        new w({
                            success: function(e) {},
                            error: function(e, n) {}
                        })
                    }
                    )),
                    c()(document).on("click", ".no-link", (function() {
                        return !1
                    }
                    )),
                    c()("#search-form, #search-form-catalog, #search-form-404").submit((function() {
                        if (0 == c()(this).find('[name="query"]').val().length)
                            return !1
                    }
                    )),
                    c()("#search-form svg, #search-form-catalog, #search-form-404").click((function() {
                        let e = c()(this).closest("form");
                        if (0 == e.find('[name="query"]').val().length)
                            return !1;
                        e.trigger("submit")
                    }
                    ))
                }
                callInitByProto(e) {
                    let n = Object.getOwnPropertyNames(e)
                      , a = 1 == new URLSearchParams(window.location.search).get("dev");
                    for (let e of n)
                        if (e.match(/^init[\w]+/, e)) {
                            let n = new Date;
                            this[e]();
                            let s = new Date;
                            a && console.log(e + ": " + (s - n) / 1e3 + "s.")
                        }
                }
                initForm() {
                    c()(document).on("submit", "form[data-action]", (function(e) {
                        return n = this,
                        a = null,
                        s = function*() {
                            let n = c()(this)
                              , a = new FormData(n[0])
                              , s = n.data("action");
                            return n.find("[contenteditable][name]").each((function() {
                                a.append(c()(this).attr("name"), c()(this).text())
                            }
                            )),
                            n.find(".error").removeClass("error"),
                            n.data("recaptcha") && "undefined" != typeof grecaptcha && (e.preventDefault(),
                            yield grecaptcha.execute("6LdRmHsjAAAAAF-m9tlbUdWO1C6VAyrseTWG_CUg", {
                                action: "submit"
                            }).then((function(e) {
                                a.append("g-recaptcha-token", e)
                            }
                            ))),
                            yield t.ajax(s, a, (function(e) {
                                if ("error" == e.status || e.error || e.errors) {
                                    if (e.error && t.toast("error", "Ошибка", e.error),
                                    e.errors)
                                        for (let a in e.errors)
                                            n.find('[name="' + a + '"]').each((function() {
                                                let n = c()(this).closest(".text-input");
                                                n.addClass("error"),
                                                n.find(".caption").html(e.errors[a])
                                            }
                                            ))
                                } else
                                    e.success;
                                if (e.actions || e.action) {
                                    e.actions || (e.actions = [e.action]);
                                    for (let a of e.actions)
                                        switch (a) {
                                        case "redirect":
                                            location.href = e.href;
                                            break;
                                        case "reload":
                                            location.reload();
                                            break;
                                        case "reset":
                                            n.trigger("reset");
                                            break;
                                        case "modalClose":
                                            c()(".modal-close").trigger("click");
                                            break;
                                        case "modalChange":
                                            window.pageObject.dt[e.dtable].ajax.reload();
                                            break;
                                        case "callback":
                                            window[e.callback](e);
                                            break;
                                        case "sendSuccess":
                                            t.modal("", "modal.success", {
                                                id: "requestSent"
                                            });
                                            let a = setInterval((function() {
                                                let e = c()("#back-counter")
                                                  , n = parseInt(e.html());
                                                n--,
                                                0 == n && (clearInterval(a),
                                                t.closeModal(c()("#requestSent"))),
                                                e.html(n)
                                            }
                                            ), 1e3)
                                        }
                                }
                                e.callback && window[e.callback](e)
                            }
                            ), !1, !0),
                            !1
                        }
                        ,
                        new Promise(((e,c)=>{
                            var t = e=>{
                                try {
                                    o(s.next(e))
                                } catch (e) {
                                    c(e)
                                }
                            }
                              , r = e=>{
                                try {
                                    o(s.throw(e))
                                } catch (e) {
                                    c(e)
                                }
                            }
                              , o = n=>n.done ? e(n.value) : Promise.resolve(n.value).then(t, r);
                            o((s = s.apply(n, a)).next())
                        }
                        ));
                        var n, a, s
                    }
                    ))
                }
                initShowMore() {
                    c()(".show-more").each((function(e, n) {
                        let a = !1;
                        c()(n).on("click", (e=>{
                            a = !a,
                            a ? c()(n).addClass("show") : c()(n).removeClass("show")
                        }
                        ))
                    }
                    ))
                }
                initBigNumberIndent() {
                    c()(".number-input").each((function(e, n) {
                        c()(n).on("input", (function() {
                            c()(n).val(c()(n).val().replace(/\D+/g, "").replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 "))
                        }
                        ))
                    }
                    ))
                }
                initSimpleDropdown() {
                    this.simpleDropdown()
                }
                initHeaderDropdown() {
                    let e = c()(".header-dropdown");
                    function n(e, n) {
                        e ? (n.addClass("fade-in"),
                        n.removeClass("fade-out")) : (n.removeClass("fade-in"),
                        n.addClass("fade-out"))
                    }
                    e.length && e.each((function(e, a) {
                        let s = c()(a).find(".header-dropdown__trigger")
                          , r = !1;
                        s.on("mouseover", (function(e) {
                            r || (r = !0,
                            n(r, c()(a)))
                        }
                        )),
                        t.mouseout(c()(a), (function(e) {
                            r && (n(!r, c()(a)),
                            r = !1)
                        }
                        ))
                    }
                    ))
                }
                scrollToBlock(e, n) {
                    let a = c()(".header")
                      , s = a.find(".header__bottom")
                      , t = c()(e)
                      , r = c()(n);
                    a.find(".header__top").outerHeight();
                    r.on("click", (function() {
                        c()(window).outerWidth() > 1242 ? c()("html").animate({
                            scrollTop: t.offset().top - s.outerHeight()
                        }, 0) : c()("html").animate({
                            scrollTop: t.offset().top - a.outerHeight()
                        }, 0)
                    }
                    ))
                }
                initSelectDropdown() {
                    c()(".select-input").each((function() {
                        c()(this).children("select").select2({
                            dropdownParent: c()(this),
                            placeholder: c()(this).attr("placeholder"),
                            minimumResultsForSearch: -1
                        })
                    }
                    ))
                }
                initDatePicker() {
                    c()(".datepicker").each((function(e, n) {
                        let a = !1
                          , s = c()(n).find("label")
                          , t = c()(n).find("input")
                          , r = c()(n).find(".datepicker-action")
                          , i = (0,
                        d.ZP)(t[0], {
                            mask: Date,
                            lazy: !0
                        })
                          , _ = new o.Z(t[0],{
                            container: n,
                            showOtherMonths: !1,
                            position({$pointer: e}) {
                                e.style.display = "none"
                            },
                            prevHtml: c()(n).find(".chevrons svg:first-of-type").prop("outerHTML"),
                            nextHtml: c()(n).find(".chevrons svg:last-of-type").prop("outerHTML"),
                            navTitles: {
                                days: "MMMM <i>yyyy</i>"
                            },
                            onShow() {
                                a = !0,
                                s.addClass("while-active-")
                            },
                            onHide() {
                                a = !1,
                                s.removeClass("while-active-")
                            }
                        });
                        t.on("change", (e=>{
                            let n = t.val()
                              , a = new Date(n.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1"));
                            _.selectDate(a),
                            _.setFocusDate(a),
                            _.setViewDate(a),
                            i.updateValue()
                        }
                        )),
                        r.on("click", (e=>{
                            a ? _.hide() : _.show()
                        }
                        ))
                    }
                    ))
                }
                initCardEffects() {
                    c()(".catalog-item").each((function(e, n) {
                        let a = c()(n).find(".catalog-item__name")
                          , s = c()(n).find(".button");
                        c()(n).on("mousedown touchstart dragstart", (function(e) {
                            let n = !1;
                            s.each((function(a, s) {
                                n = n || s.contains(e.target)
                            }
                            )),
                            n ? a.removeClass("active") : a.addClass("active")
                        }
                        )),
                        c()(document).on("mouseup touchend dragend", (function(e) {
                            a.removeClass("active")
                        }
                        )),
                        c()(n).on("mouseover", (function(e) {
                            let n = !1;
                            s.each((function(a, s) {
                                n = n || s.contains(e.target)
                            }
                            )),
                            e.cancelable && e.preventDefault(),
                            n ? a.removeClass("hovered") : a.addClass("hovered")
                        }
                        )),
                        c()(n).on("mouseout", (function(e) {
                            e.cancelable && e.preventDefault(),
                            a.removeClass("hovered")
                        }
                        ))
                    }
                    )),
                    c()(document).on("click", ".js-to-compare", (function(e) {
                        let n = c()(this).closest("[data-product]")
                          , a = n.data("product")
                          , s = n.find(".product-name").eq(0).text()
                          , r = n.find('[itemprop="image"]').attr("src");
                        t.ajax("add_compare", {
                            id: n.data("product")
                        }, (function(e) {
                            t.compareToast(a, s, r, e.cnt),
                            c()(".compare-cnt").html(e.cnt).toggleClass("d-none", 0 === e.cnt)
                        }
                        ))
                    }
                    ))
                }
                initDefaultCounters() {
                    c()(".counter:not(.local-counter)").each((function(e, n) {
                        let a = c()(n).find(".counter-score")
                          , s = c()(n).find(".counter-plus")
                          , t = c()(n).find(".counter-minus")
                          , r = a.val();
                        a.on("input", (function() {
                            c()(this).val().length > 0 ? (c()(this).val(parseInt(c()(this).val().replace(/[\D]/, ""))),
                            isNaN(c()(this).val()) ? c()(this).val(r) : /^0*$/.test(c()(this).val()) && c()(this).val(1)) : c()(this).val(1),
                            r = c()(this).val()
                        }
                        )),
                        s.on("click", (function() {
                            a.val(parseInt(a.val()) + 1),
                            a.trigger("input")
                        }
                        )),
                        t.on("click", (function() {
                            if (parseInt(a.val()) <= 1)
                                return !1;
                            a.val(parseInt(a.val()) - 1),
                            a.trigger("input")
                        }
                        ))
                    }
                    ))
                }
                initMenuTabs() {
                    let e = c()(".menu-tabs");
                    if (e.length) {
                        let n = e.find(".splide__track")
                          , a = e.find(".splide__arrow--prev")
                          , s = e.find(".splide__arrow--next");
                        const t = new _.ZP(".menu-tabs",{
                            perPage: 3,
                            perMove: 3,
                            autoWidth: !0,
                            snap: !0,
                            pagination: !1,
                            arrows: n.innerWidth() / n.parent().innerWidth() * 100 >= 100,
                            speed: 300
                        });
                        t.mount(),
                        c()(window).on("load", (function() {
                            c()(".menu-tabs").addClass("faded-in")
                        }
                        )),
                        a.on("click", (function(e) {
                            if (t.Components.Controller.getIndex() + 3 === t.Components.Controller.getEnd()) {
                                let e = n.find(".splide__list li:not(.is-visible)");
                                t.go(e.length - 3)
                            }
                        }
                        )),
                        s.on("click", (function(e) {
                            let a = n.find(".splide__list .is-active ~ li")
                              , s = 0;
                            do {
                                if (!c()(a[s]).hasClass("is-visible"))
                                    break;
                                s += 1
                            } while (s < a.length);
                            s + 3 >= a.length && t.go(t.Components.Controller.getEnd())
                        }
                        ))
                    }
                }
                initSplideNewsAbout() {
                    if (c()(".news-preview__list").length) {
                        new _.ZP(".news-preview__list",{
                            drag: !1,
                            perPage: 3,
                            perMove: 3,
                            speed: 300,
                            gap: "33px",
                            fixedWidth: "368px",
                            snap: !0,
                            pagination: !1,
                            arrows: !1,
                            breakpoints: {
                                1242: {
                                    drag: !0,
                                    perPage: 1,
                                    perMove: 1,
                                    padding: {
                                        left: "32px",
                                        right: "32px"
                                    }
                                },
                                767: {
                                    drag: !1,
                                    direction: "ttb",
                                    padding: {
                                        left: this.vw("16"),
                                        right: this.vw("16")
                                    },
                                    gap: this.vw("16"),
                                    width: "100%",
                                    height: "auto",
                                    fixedWidth: this.vw("343")
                                }
                            }
                        }).mount()
                    }
                }
                initAccordion() {
                    let e = c()(".qa__body__item");
                    e.length && e.each((function() {
                        c()(this).on("click", (function() {
                            let e = c()(this).find(".qa__body__item__content")
                              , n = e.find("p")
                              , a = 0;
                            n.each(((e,n)=>{
                                a += c()(n).outerHeight()
                            }
                            )),
                            c()(this).hasClass("active-accordion") ? (c()(this).removeClass("active-accordion"),
                            e.css("max-height", 0)) : (c()(this).addClass("active-accordion"),
                            e.css("max-height", a + "px"))
                        }
                        ))
                    }
                    ))
                }
                initTextWrappedHiding() {
                    let e = c()(".readmore__hide__text");
                    if (e.length) {
                        let n, a, s, t, r = function(r) {
                            c()(window).outerWidth() < 768 ? (n = "14",
                            a = 272) : (n = "11",
                            a = 309),
                            !0 === r ? (_.css("-webkit-line-clamp", ""),
                            _.css("height", ""),
                            s = _.outerHeight()) : s = _.outerHeight(),
                            _.css("-webkit-line-clamp", n),
                            t = _.outerHeight(),
                            _.css("-webkit-line-clamp", ""),
                            t < a ? e.addClass("short") : (_.css("-webkit-line-clamp", n),
                            _.css("height", t))
                        }, o = function(e) {
                            e ? (_.css("height", s),
                            _.css("-webkit-line-clamp", "")) : (c()(window).outerWidth() > 1242 ? c()("html").animate({
                                scrollTop: _.offset().top - i.outerHeight()
                            }, 0) : c()("html").animate({
                                scrollTop: _.offset().top - d.outerHeight()
                            }, 0),
                            setTimeout((function() {
                                _.css("height", t)
                            }
                            ), 500),
                            setTimeout((function() {
                                _.css("-webkit-line-clamp", n)
                            }
                            ), 1e3))
                        }, d = c()(".header"), i = d.find(".header__bottom"), _ = (d.find(".header__top").outerHeight(),
                        e.find(".readmore-wrapped")), m = e.find(".show-more"), u = !1;
                        m.on("click", (function() {
                            u = !u,
                            o(u)
                        }
                        )),
                        c()(window).on("load", (function() {
                            r(),
                            u = !1,
                            m.removeClass("show")
                        }
                        )),
                        c()(window).on("resize", (function() {
                            c()(window).outerWidth() <= 1242 && (r(!0),
                            u = !1,
                            m.removeClass("show"))
                        }
                        ))
                    }
                }
                initHideTextFadedIn() {
                    c()(window).on("load", (function() {
                        let e = c()(".readmore__hide__text");
                        e.length && e.addClass("faded-in")
                    }
                    ))
                }
                vw(e, n=375) {
                    return e / n * 100 + "vw"
                }
                singleRange(e, n, a, s, t, r, o, d) {
                    let _, m = n;
                    function u(n) {
                        r = n.from,
                        e ? a.prop("value", r.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") + (d ? ` ${d}` : "")) : a.prop("value", r + (d ? ` ${d}` : ""))
                    }
                    m.ionRangeSlider({
                        skin: "round",
                        hide_from_to: !0,
                        min: s,
                        max: t,
                        from: r || 0,
                        step: o || 1,
                        prettify: function(e) {
                            return (0,
                            i.abbreviateNumber)(e, 0, {
                                symbols: ["", " тыс.", " млн."]
                            })
                        },
                        onStart: u,
                        onChange: u,
                        onFinish: u
                    }),
                    _ = m.data("ionRangeSlider"),
                    a.on("input", (function() {
                        if (a.prop("value", a.prop("value").replace(/\D+/g, "").replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") + (d ? ` ${d}` : "")),
                        d) {
                            const e = Math.max(0, a[0].value.length - 2);
                            a[0].setSelectionRange(e, e)
                        }
                    }
                    )),
                    a.on("change", (function() {
                        let n = e ? c()(this).prop("value").replace(/\s/g, "") : c()(this).prop("value");
                        n < s ? n = s : n > t && (n = t),
                        _.update({
                            from: n
                        }),
                        c()(this).prop("value", (e ? n.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") : n) + (d ? ` ${d}` : ""))
                    }
                    ))
                }
                multiRange(e, n, a, s, t, r, o, d, i) {
                    let _, m = c()(n).find("input");
                    function u(n) {
                        o = n.from,
                        d = n.to,
                        e ? (a.prop("value", o.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")),
                        s.prop("value", d.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 "))) : (a.prop("value", o),
                        s.prop("value", d)),
                        l()
                    }
                    if (m.ionRangeSlider({
                        skin: "round",
                        hide_min_max: "true",
                        min: t,
                        max: r,
                        from: o,
                        to: d,
                        onStart: u,
                        onChange: u,
                        onFinish: u,
                        onUpdate: l
                    }),
                    _ = m.data("ionRangeSlider"),
                    a.on("change", (function() {
                        let n = e ? c()(this).prop("value").replace(/\s/g, "") : c()(this).prop("value");
                        n < t ? n = t : n > d && (n = d),
                        _.update({
                            from: n
                        }),
                        c()(this).prop("value", e ? n.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") : n)
                    }
                    )),
                    s.on("change", (function() {
                        let n = e ? c()(this).prop("value").replace(/\s/g, "") : c()(this).prop("value");
                        n < o ? n = o : n > r && (n = r),
                        _.update({
                            to: n
                        }),
                        c()(this).prop("value", e ? n.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") : n)
                    }
                    )),
                    i) {
                        c()(i).on("click", (function() {
                            a.prop("value", a.attr("data-limit")),
                            s.prop("value", s.attr("data-limit"));
                            let n = e ? a.prop("value").replace(/\s/g, "") : a.prop("value")
                              , c = e ? s.prop("value").replace(/\s/g, "") : s.prop("value");
                            n < t ? n = t : n > d && (n = d),
                            c < o ? c = o : c > r && (c = r),
                            _.update({
                                from: n,
                                to: c
                            }),
                            setTimeout((function() {
                                a.prop("value", e ? n.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") : n),
                                s.prop("value", e ? c.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") : c)
                            }
                            ), 10)
                        }
                        ))
                    }
                    function l() {
                        let e = c()(n).find(".irs-handle.from")
                          , a = c()(n).find(".irs-from")
                          , s = c()(n).find(".irs-handle.to")
                          , t = c()(n).find(".irs-to")
                          , r = c()(n).find(".irs-single");
                        setTimeout((function() {
                            r.addClass("irs-single-loaded")
                        }
                        ), 10),
                        c()(document).on("mousedown touchstart", (function(n) {
                            e.hasClass("state_hover") ? (a.addClass("clicked"),
                            r.addClass("clicked")) : s.hasClass("state_hover") && (t.addClass("clicked"),
                            r.addClass("clicked"))
                        }
                        )),
                        c()(document).on("mouseup touchend", (function(e) {
                            a.removeClass("clicked"),
                            t.removeClass("clicked"),
                            r.removeClass("clicked")
                        }
                        )),
                        e.on("mouseover", (function(e) {
                            e.cancelable && e.preventDefault(),
                            a.addClass("hovered"),
                            r.addClass("hovered")
                        }
                        )),
                        e.on("mouseout", (function(e) {
                            e.cancelable && e.preventDefault(),
                            a.removeClass("hovered"),
                            r.removeClass("hovered")
                        }
                        )),
                        s.on("mouseover", (function(e) {
                            e.cancelable && e.preventDefault(),
                            t.addClass("hovered"),
                            r.addClass("hovered")
                        }
                        )),
                        s.on("mouseout", (function(e) {
                            e.cancelable && e.preventDefault(),
                            t.removeClass("hovered"),
                            r.removeClass("hovered")
                        }
                        ))
                    }
                }
                textAreaResponding(e, n) {
                    let a = c()(e);
                    if (!a.length)
                        return !1;
                    let s = !1
                      , t = "";
                    function r(e, n) {
                        if (s = e,
                        t = n,
                        s) {
                            a.addClass("responding"),
                            a.html(`<b>${t},</b>&nbsp;`);
                            const e = window.getSelection()
                              , n = document.createRange();
                            e.removeAllRanges(),
                            n.selectNodeContents(a[0]),
                            n.collapse(!1),
                            e.addRange(n),
                            a[0].focus(),
                            a[0].scrollIntoView({
                                block: "center"
                            })
                        } else
                            a.removeClass("responding")
                    }
                    let o = c()(n)
                      , d = c()(".product__reviews__leave__comment");
                    o.each((function(e, n) {
                        let a = c()(n).find("[class*='name']").html();
                        c()(n).find(".to-respond").on("click", (e=>{
                            r(!0, a),
                            d.each((function(e, n) {
                                c()(n).prop("disabled", !0)
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    a.on("input", (e=>{
                        let n, s = a.find("b");
                        s && (n = s.text(),
                        n !== t + "," && r(!1));
                        let o = a.find("br");
                        o && 1 === a.text().length && o.parent().children(o).remove(),
                        d.each((function(e, s) {
                            a.hasClass("responding") ? c()(s).prop("disabled", a.text().length - 1 <= n.length) : c()(s).prop("disabled", a.text().length <= 0)
                        }
                        ))
                    }
                    ))
                }
                filterModal(e, n, a) {
                    let s = c()("." + e)
                      , t = s.children()
                      , r = c()(n)
                      , o = c()(a)
                      , d = !1;
                    function i(n) {
                        d = n,
                        d ? (s.addClass("modal"),
                        s.addClass("fade-in"),
                        c()("body").addClass("no-scroll"),
                        t.each((function(n, a) {
                            c()(a).hasClass(`${e}__close`) || c()(a).hasClass(`${e}__actions`) || c()(a).addClass("container")
                        }
                        ))) : (s.removeClass("fade-in"),
                        setTimeout((function() {
                            s.removeClass("modal"),
                            c()("body").removeClass("no-scroll"),
                            t.each((function(n, a) {
                                c()(a).hasClass(`${e}__close`) || c()(a).hasClass(`${e}__actions`) || c()(a).removeClass("container")
                            }
                            ))
                        }
                        ), 500))
                    }
                    r.on("click", (function() {
                        i(!d),
                        u()
                    }
                    )),
                    o.on("click", (function() {
                        i(!1),
                        u()
                    }
                    ));
                    let _ = c()(s).find(`.${e}__actions`);
                    u();
                    let m = c()(".simple-dropdown");
                    m.length > 0 && m.each(((e,n)=>{
                        c()(n).on("click", (e=>{
                            u()
                        }
                        ))
                    }
                    )),
                    c()(window).on("scroll", (e=>{
                        u()
                    }
                    )),
                    c()(document.body).on("touchmove", (e=>{
                        u()
                    }
                    ));
                    function u() {
                        if (!s || 0 == _.length)
                            return !1;
                        c()(window).outerWidth() > 1242 ? s.outerHeight() > _.position().top + _.outerHeight() ? _.addClass("sticky-shadow-actions") : _.removeClass("sticky-shadow-actions") : s.prop("scrollHeight") - s.outerHeight() > s.scrollTop() ? _.addClass("sticky-shadow-actions") : _.removeClass("sticky-shadow-actions")
                    }
                    new ResizeObserver((function(e) {
                        u()
                    }
                    )).observe(document.body)
                }
                galleryFunc(e, n) {
                    const a = new _.ZP(`.${e}__gallery .gallery__list__up`,{
                        type: "loop",
                        drag: !0,
                        perPage: 1,
                        perMove: 2,
                        pagination: !1,
                        arrows: !1,
                        speed: 1300,
                        lazyLoad: "sequential",
                        gap: "30px",
                        padding: {
                            left: "calc((100vw - 1170px) / 2)"
                        },
                        width: "100%",
                        height: "370px",
                        fixedWidth: "570px",
                        fixedHeight: "370px",
                        clones: 7,
                        breakpoints: {
                            1242: {
                                perMove: 1,
                                gap: "32px",
                                height: "272px",
                                fixedWidth: "418px",
                                fixedHeight: "272px",
                                padding: {
                                    left: "288px"
                                }
                            }
                        },
                        autoScroll: {
                            speed: .6,
                            autoStart: !0
                        }
                    })
                      , s = new _.ZP(`.${e}__gallery .gallery__list__down`,{
                        type: "loop",
                        drag: !0,
                        perPage: 1,
                        perMove: 1,
                        pagination: !1,
                        lazyLoad: "sequential",
                        arrows: !1,
                        speed: 1300,
                        gap: "30px",
                        width: "100%",
                        height: "370px",
                        fixedWidth: "570px",
                        fixedHeight: "370px",
                        focus: "center",
                        clones: 7,
                        breakpoints: {
                            1242: {
                                gap: "32px",
                                height: "272px",
                                fixedWidth: "418px",
                                fixedHeight: "272px",
                                padding: {
                                    left: "64px"
                                },
                                focus: 1
                            }
                        },
                        autoScroll: {
                            speed: .3,
                            autoStart: !0
                        }
                    });
                    let t = c()(`.${e}__gallery .gallery__list__cont__drag`)
                      , r = c()(a.root).find(".splide__list")
                      , o = c()(s.root).find(".splide__list")
                      , d = c()(`.${e}__gallery .gallery__arrow.splide__arrow--prev`)
                      , i = c()(`.${e}__gallery .gallery__arrow.splide__arrow--next`);
                    var u, l;
                    d.on("click", (e=>{
                        a.go("<"),
                        s.go("<")
                    }
                    )),
                    i.on("click", (e=>{
                        a.go(">"),
                        s.go(">")
                    }
                    )),
                    n ? (a.mount({
                        AutoScroll: m.l
                    }),
                    s.mount({
                        AutoScroll: m.l
                    }),
                    a.on("move", (e=>{
                        a.Components.AutoScroll.pause()
                    }
                    )),
                    a.on("moved", (e=>{
                        a.Components.AutoScroll.play()
                    }
                    )),
                    s.on("move", (e=>{
                        s.Components.AutoScroll.pause()
                    }
                    )),
                    s.on("moved", (e=>{
                        s.Components.AutoScroll.play()
                    }
                    ))) : (a.mount(),
                    s.mount()),
                    u = ["drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "touchcancel"],
                    l = t[0],
                    [r[0], o[0]].forEach((e=>{
                        u.forEach((n=>l.addEventListener(n, (function(n) {
                            e.dispatchEvent(new n.constructor(n.type,n)),
                            n.preventDefault(),
                            n.stopPropagation()
                        }
                        ))))
                    }
                    ));
                    const p = new _.ZP(`.${e}__gallery .gallery__list__mobile__main`,{
                        type: "fade",
                        pagination: !1,
                        arrows: !1,
                        lazyLoad: "sequential",
                        speed: 300,
                        width: "100%",
                        height: this.vw("252"),
                        fixedWidth: this.vw("343"),
                        fixedHeight: this.vw("252")
                    })
                      , h = new _.ZP(`.${e}__gallery .gallery__list__mobile__thumb`,{
                        isNavigation: !0,
                        drag: !0,
                        pagination: !1,
                        arrows: !1,
                        perPage: 4,
                        lazyLoad: "sequential",
                        perMove: 4,
                        speed: 300,
                        width: "100%",
                        height: this.vw("100%"),
                        fixedWidth: this.vw("70"),
                        fixedHeight: this.vw("46"),
                        gap: this.vw("8"),
                        padding: {
                            left: this.vw("16"),
                            right: this.vw("16")
                        },
                        focus: 1
                    });
                    h.mount(),
                    p.sync(h),
                    p.mount()
                }
                initCatalogBannerActions() {
                    let e = c()(".catalog-banner__slider");
                    if (!e.length)
                        return !1;
                    c()(".catalog-banner__close").on("click", (n=>{
                        e.addClass("closed"),
                        t.cookie.set("nobanner", 1)
                    }
                    ));
                    let n = new _.ZP(".catalog-banner__slider__body",{
                        type: "loop",
                        perPage: 1,
                        drag: !1,
                        autoplay: !0,
                        interval: 7e3,
                        speed: 500,
                        pagination: !1,
                        width: "100%",
                        fixedWidth: "100%"
                    });
                    function a() {
                        let n = e.find(".splide__list")
                          , a = n.css("transform").split(",");
                        n.css("transform", `${a[0]},${a[1]},${a[2]},${a[3]},${parseInt(a[4])},${a[5]}`)
                    }
                    c()(window).on("load", (function() {
                        setTimeout((()=>a()), 300)
                    }
                    )),
                    n.on("ready", (function() {
                        c()(".catalog-banner__slider .splide__track").addClass("faded-in")
                    }
                    )),
                    n.on("ready resize", (function() {
                        let e = n.Components.Controller.getEnd() + 1 > 1;
                        n.options = {
                            type: e ? "loop" : "slide"
                        },
                        c()(window).outerWidth() <= 1242 ? n.options = {
                            drag: e,
                            arrows: !1
                        } : n.options = {
                            drag: !1,
                            arrows: e
                        }
                    }
                    )),
                    n.on("moved", (function() {
                        a()
                    }
                    ));
                    let s = c()(".catalog-banner__slider__pagination__item");
                    n.on("mounted move", (function() {
                        s.removeClass("active"),
                        s.eq(n.index).addClass("active")
                    }
                    )),
                    n.on("drag", (function() {
                        n.Components.Autoplay.pause(),
                        s.eq(n.index).addClass("paused")
                    }
                    )),
                    n.on("dragged", (function() {
                        n.Components.Autoplay.play(),
                        s.eq(n.index).removeClass("active"),
                        s.eq(n.index).removeClass("paused")
                    }
                    )),
                    s.each((function(e) {
                        c()(this).on("click", (()=>{
                            n.go(e)
                        }
                        ))
                    }
                    )),
                    n.mount();
                    let r = c()(".catalog-banner__slider__pagination");
                    n.Components.Controller.getEnd() + 1 <= 1 && r.addClass("pagination-hidden")
                }
                initModal() {
                    let e = this;
                    c()(document).on("click", "[data-modal]", (function() {
                        c()(this).data("modal-second") || c()("[data-popup-close]").trigger("click");
                        let n = c()(this).data("modal-stop");
                        c()(this).data("modal-start");
                        if (n && c()(window).width() >= n)
                            return !1;
                        let a = c()(this).data();
                        if (a.before) {
                            let e = window[a.before]();
                            a = v(v({}, a), e)
                        }
                        return "modal.oneclick" == c()(this).data("modal") && yaCounter52345192.reachGoal("undefined" == typeof PRODUCT_ID ? "open_buy_catalog" : "open_order_1klik_tovar"),
                        t.modal(c()(this).data("header"), c()(this).data("modal"), a, {
                            classes: c()(this).data("class"),
                            callback: c()(this).data("callback")
                        }, e),
                        !1
                    }
                    ))
                }
                initCart() {
                    return !1
                }
                initStepper() {
                    let e = this;
                    c()(document).on("click", ".js-stepper [data-to-step]", (function() {
                        let n = c()(this).data("callback");
                        n && window[n](),
                        e.toStep(c()(this).closest(".js-stepper"), c()(this).data("to-step"), c()(".modal-body"))
                    }
                    ))
                }
                toStep(e, n, a) {
                    let s = e.find(".js-step.active")
                      , t = e.find('[data-step="' + n + '"]');
                    a.css("max-height", `${t.prop("scrollHeight") + parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom")) + (t.hasClass("success-step") || t.hasClass("error-step") || t.hasClass("empty-step") ? 0 : c()(".modal-body > .modal-title").outerHeight(!0))}px`),
                    s.removeClass("active"),
                    a.removeClass(((e,n)=>(n.match(/(^|\s)body-of-\S+/g) || []).join(" "))),
                    a.addClass(`body-of-step-${n}`),
                    t.hasClass("success-step") ? a.addClass("body-of-success-step") : t.hasClass("error-step") ? a.addClass("body-of-error-step") : t.hasClass("empty-step") && a.addClass("body-of-empty-step"),
                    t.addClass("active")
                }
                initSearchSubmit() {
                    c()('[action="/search/"] svg').click((function() {
                        c()(this).closest("form").trigger("submit")
                    }
                    ))
                }
                initLanguageSwitch() {
                    c()("#change-lang-mobile,#change-lang").change((function() {
                        let e = c()(this).is(":checked") ? "en" : "ru"
                          , n = location.href.split("/");
                        return "en" == e && "en" != n[3] ? n.splice(3, 0, "en") : "en" == n[3] && n.splice(3, 1),
                        location.href = n.join("/"),
                        !1
                    }
                    ))
                }
                setCountdown() {
                    let e = c()(".modal-window")
                      , n = e.find(".countdown")
                      , a = setInterval((function() {
                        let s = parseInt(n.html());
                        if (s--,
                        0 == s)
                            return clearInterval(a),
                            e.find(".js-modal-close").trigger("click"),
                            !1;
                        n.html(s)
                    }
                    ), 1e3)
                }
                simpleDropdown() {
                    let e = c()(".simple-dropdown");
                    function n(e, n) {
                        n.hasClass("fading") ? e ? (n.removeClass("fade-in"),
                        setTimeout((function() {
                            n.removeClass("opened")
                        }
                        ), 500)) : n.addClass("opened fade-in") : e ? n.removeClass("opened") : n.addClass("opened")
                    }
                    e.length && e.each((function(e, a) {
                        let s = c()(a).find(".simple-dropdown__trigger")
                          , r = c()(a).find(".simple-dropdown__content");
                        s.each((function(e, s) {
                            c()(s).off("click").on("click", (function(e) {
                                n(c()(a).hasClass("opened"), c()(a))
                            }
                            )),
                            c()(a).hasClass("detached") || t.clickout(c()(a), (function(e) {
                                r.length && n(!0, c()(a))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                initDropzone() {}
                sideReviews(e, n) {
                    let a = `.${e}__side-reviews .side-reviews__list__up`;
                    if (0 == c()(a).length)
                        return !1;
                    const s = new _.ZP(a,{
                        type: "loop",
                        drag: !0,
                        perPage: 1,
                        perMove: 2,
                        pagination: !1,
                        arrows: !1,
                        speed: 1300,
                        lazyLoad: "sequential",
                        gap: "30px",
                        padding: {
                            left: "calc((100vw - 1170px) / 2)"
                        },
                        width: "100%",
                        height: "296px",
                        fixedWidth: "368px",
                        fixedHeight: "296px",
                        clones: 7,
                        autoScroll: {
                            speed: .45,
                            autoStart: !0,
                            pauseOnHover: !1,
                            pauseOnFocus: !1
                        },
                        breakpoints: {
                            1242: {
                                perMove: 1,
                                padding: {
                                    left: "32px"
                                }
                            },
                            767: {
                                type: "slide",
                                gap: this.vw("16"),
                                speed: 300,
                                padding: {
                                    left: this.vw("16"),
                                    right: this.vw("16")
                                },
                                height: this.vw("200"),
                                fixedWidth: this.vw("300"),
                                fixedHeight: this.vw("200"),
                                autoScroll: !1
                            }
                        }
                    })
                      , t = new _.ZP(`.${e}__side-reviews .side-reviews__list__down`,{
                        type: "loop",
                        drag: !0,
                        perPage: 1,
                        perMove: 1,
                        pagination: !1,
                        lazyLoad: "sequential",
                        arrows: !1,
                        speed: 1300,
                        gap: "30px",
                        padding: {
                            left: "calc(((100vw - 1170px) / 2) - 101px)"
                        },
                        width: "100%",
                        height: "296px",
                        fixedWidth: "368px",
                        fixedHeight: "296px",
                        clones: 7,
                        autoScroll: {
                            speed: .3,
                            autoStart: !0,
                            pauseOnHover: !1,
                            pauseOnFocus: !1
                        },
                        breakpoints: {
                            1242: {
                                padding: {
                                    left: "273px"
                                }
                            },
                            767: {
                                destroy: !0
                            }
                        }
                    });
                    c()(`.${e}__side-reviews .side-reviews__list__cont`);
                    let r = c()(`.${e}__side-reviews .side-reviews__list__cont__drag`)
                      , o = c()(s.root).find(".splide__track")
                      , d = c()(t.root).find(".splide__track")
                      , i = c()(`.${e}__side-reviews .side-reviews__arrow.splide__arrow--prev`)
                      , u = c()(`.${e}__side-reviews .side-reviews__arrow.splide__arrow--next`);
                    function l(e, n, a) {
                        a.forEach((a=>{
                            e.forEach((e=>n.addEventListener(e, (function(n) {
                                c()(window).outerWidth() > 767 && (a.dispatchEvent(new n.constructor(n.type,n)),
                                "touchstart" !== e && "touchmove" !== e && "touchend" !== e && (n.preventDefault(),
                                n.stopPropagation()))
                            }
                            ))))
                        }
                        ))
                    }
                    i.on("click", (e=>{
                        s.go("<"),
                        t.go("<")
                    }
                    )),
                    u.on("click", (e=>{
                        s.go(">"),
                        t.go(">")
                    }
                    )),
                    n ? (s.mount({
                        AutoScroll: m.l
                    }),
                    t.mount({
                        AutoScroll: m.l
                    }),
                    c()(window).outerWidth() > 767 && (s.on("move", (e=>{
                        s.Components.AutoScroll.pause()
                    }
                    )),
                    s.on("moved", (e=>{
                        s.Components.AutoScroll.play()
                    }
                    )),
                    t.on("move", (e=>{
                        t.Components.AutoScroll.pause()
                    }
                    )),
                    t.on("moved", (e=>{
                        t.Components.AutoScroll.play()
                    }
                    )))) : (s.mount(),
                    t.mount()),
                    l(["drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "touchcancel"], o.find(".splide__list")[0], [r[0]]),
                    l(["drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "touchcancel"], d.find(".splide__list")[0], [r[1]]),
                    l(["drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "touchcancel"], r[0], [o[0], d[0]]),
                    l(["drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "touchcancel"], r[1], [o[0], d[0]])
                }
                initUISingleRange() {
                    let e = this;
                    c()(".ui-single-range").each((function() {
                        e.singleRange(!0, c()(this).find(".price-range input"), c()(this).find(".price-from"), c()(this).attr("min"), c()(this).attr("max"), c()(this).attr("value"), c()(this).attr("step"), c()(this).attr("postfix"))
                    }
                    ))
                }
            }
            ,
            window.yandexGoal = function(e) {
                window.yaCounter52345192 && yaCounter52345192.reachGoal(e)
            }
            ,
            window.cartGen = function() {
                let e = "";
                c()("#orderingModal [data-product].item").each((function() {
                    let n = c()(this).find(".item__name").html()
                      , a = c()(this).find(".counter-score").val()
                      , s = c()(this).find(".item__price span").html()
                      , t = c()(this).find(".item__price svg").clone();
                    e += '<div class="item">',
                    e += '<p class="item__name">' + n + "</p>",
                    e += '<div class="item__right">',
                    e += '<div class="item__right__count">',
                    e += "<span>" + a + "</span>",
                    e += "&nbsp;",
                    e += "<span>шт.</span>",
                    e += "</div>",
                    e += '<p class="item__right__price">',
                    e += "<span>" + s + "</span>",
                    e += t[0].outerHTML,
                    e += "</p>",
                    e += "</div>",
                    e += "</div>"
                }
                )),
                c()(".js-set-items").html(e)
            }
            ,
            window.afterSend = function(e) {
                window.yandexGoal("all_forms"),
                e.yandex && window.yandexGoal(e.yandex);
                let n = c()(".modal-window");
                window.pageObject.toStep(n.find(".js-stepper"), 2, n.find(".modal-body"));
                let a = n.find(".countdown")
                  , s = setInterval((function() {
                    let e = parseInt(a.html());
                    if (e--,
                    0 == e)
                        return clearInterval(s),
                        n.find(".js-modal-close").trigger("click"),
                        !1;
                    a.html(e)
                }
                ), 1e3)
            }
            ,
            window.afterSubscribe = function(e) {
                window.yandexGoal("all_forms"),
                e.yandex && window.yandexGoal(e.yandex),
                c()('[data-action="subscribe"] input').val(""),
                t.modal("", "modal.subscribe", {}, {
                    callback: "afterSend"
                })
            }
        }
    }, a = {};
    function s(e) {
        var c = a[e];
        if (void 0 !== c)
            return c.exports;
        var t = a[e] = {
            id: e,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, s),
        t.exports
    }
    s.m = n,
    s.amdO = {},
    e = [],
    s.O = (n,a,c,t)=>{
        if (!a) {
            var r = 1 / 0;
            for (_ = 0; _ < e.length; _++) {
                for (var [a,c,t] = e[_], o = !0, d = 0; d < a.length; d++)
                    (!1 & t || r >= t) && Object.keys(s.O).every((e=>s.O[e](a[d]))) ? a.splice(d--, 1) : (o = !1,
                    t < r && (r = t));
                if (o) {
                    e.splice(_--, 1);
                    var i = c();
                    void 0 !== i && (n = i)
                }
            }
            return n
        }
        t = t || 0;
        for (var _ = e.length; _ > 0 && e[_ - 1][2] > t; _--)
            e[_] = e[_ - 1];
        e[_] = [a, c, t]
    }
    ,
    s.n = e=>{
        var n = e && e.__esModule ? ()=>e.default : ()=>e;
        return s.d(n, {
            a: n
        }),
        n
    }
    ,
    s.d = (e,n)=>{
        for (var a in n)
            s.o(n, a) && !s.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: n[a]
            })
    }
    ,
    s.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    s.o = (e,n)=>Object.prototype.hasOwnProperty.call(e, n),
    s.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.j = 2128,
    (()=>{
        var e = {
            2128: 0
        };
        s.O.j = n=>0 === e[n];
        var n = (n,a)=>{
            var c, t, [r,o,d] = a, i = 0;
            if (r.some((n=>0 !== e[n]))) {
                for (c in o)
                    s.o(o, c) && (s.m[c] = o[c]);
                if (d)
                    var _ = d(s)
            }
            for (n && n(a); i < r.length; i++)
                t = r[i],
                s.o(e, t) && e[t] && e[t][0](),
                e[t] = 0;
            return s.O(_)
        }
          , a = self.webpackChunk = self.webpackChunk || [];
        a.forEach(n.bind(null, 0)),
        a.push = n.bind(null, a.push.bind(a))
    }
    )(),
    s.nc = void 0;
    var c = s.O(void 0, [4736], (()=>s(3529)));
    c = s.O(c)
}
)();