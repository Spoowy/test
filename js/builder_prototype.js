! function(n, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? e(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return e(n)
    } : e(n)
}("undefined" != typeof window ? window : this, function(n, e) {
    function t(n) {
        var e = !!n && "length" in n && n.length,
            t = un.type(n);
        return "function" !== t && !un.isWindow(n) && ("array" === t || 0 === e || "number" == typeof e && e > 0 && e - 1 in n)
    }

    function a(n, e, t) {
        if (un.isFunction(e)) return un.grep(n, function(n, a) {
            return !!e.call(n, a, n) !== t
        });
        if (e.nodeType) return un.grep(n, function(n) {
            return n === e !== t
        });
        if ("string" == typeof e) {
            if (jn.test(e)) return un.filter(e, n, t);
            e = un.filter(e, n)
        }
        return un.grep(n, function(n) {
            return un.inArray(n, e) > -1 !== t
        })
    }

    function s(n, e) {
        do {
            n = n[e]
        } while (n && 1 !== n.nodeType);
        return n
    }

    function i(n) {
        var e = {};
        return un.each(n.match(Cn) || [], function(n, t) {
            e[t] = !0
        }), e
    }

    function o() {
        an.addEventListener ? (an.removeEventListener("DOMContentLoaded", l), n.removeEventListener("load", l)) : (an.detachEvent("onreadystatechange", l), n.detachEvent("onload", l))
    }

    function l() {
        (an.addEventListener || "load" === n.event.type || "complete" === an.readyState) && (o(), un.ready())
    }

    function r(n, e, t) {
        if (t === undefined && 1 === n.nodeType) {
            var a = "data-" + e.replace(Ln, "-$1").toLowerCase();
            if ("string" == typeof(t = n.getAttribute(a))) {
                try {
                    t = "true" === t || "false" !== t && ("null" === t ? null : +t + "" === t ? +t : Rn.test(t) ? un.parseJSON(t) : t)
                } catch (n) {}
                un.data(n, e, t)
            } else t = undefined
        }
        return t
    }

    function c(n) {
        var e;
        for (e in n)
            if (("data" !== e || !un.isEmptyObject(n[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function d(n, e, t, a) {
        if (An(n)) {
            var s, i, o = un.expando,
                l = n.nodeType,
                r = l ? un.cache : n,
                c = l ? n[o] : n[o] && o;
            if (c && r[c] && (a || r[c].data) || t !== undefined || "string" != typeof e) return c || (c = l ? n[o] = tn.pop() || un.guid++ : o), r[c] || (r[c] = l ? {} : {
                toJSON: un.noop
            }), "object" != typeof e && "function" != typeof e || (a ? r[c] = un.extend(r[c], e) : r[c].data = un.extend(r[c].data, e)), i = r[c], a || (i.data || (i.data = {}), i = i.data), t !== undefined && (i[un.camelCase(e)] = t), "string" == typeof e ? null == (s = i[e]) && (s = i[un.camelCase(e)]) : s = i, s
        }
    }

    function m(n, e, t) {
        if (An(n)) {
            var a, s, i = n.nodeType,
                o = i ? un.cache : n,
                l = i ? n[un.expando] : un.expando;
            if (o[l]) {
                if (e && (a = t ? o[l] : o[l].data)) {
                    un.isArray(e) ? e = e.concat(un.map(e, un.camelCase)) : e in a ? e = [e] : (e = un.camelCase(e), e = e in a ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete a[e[s]];
                    if (t ? !c(a) : !un.isEmptyObject(a)) return
                }(t || (delete o[l].data, c(o[l]))) && (i ? un.cleanData([n], !0) : pn.deleteExpando || o != o.window ? delete o[l] : o[l] = undefined)
            }
        }
    }

    function p(n, e, t, a) {
        var s, i = 1,
            o = 20,
            l = a ? function() {
                return a.cur()
            } : function() {
                return un.css(n, e, "")
            },
            r = l(),
            c = t && t[3] || (un.cssNumber[e] ? "" : "px"),
            d = (un.cssNumber[e] || "px" !== c && +r) && Nn.exec(un.css(n, e));
        if (d && d[3] !== c) {
            c = c || d[3], t = t || [], d = +r || 1;
            do {
                i = i || ".5", d /= i, un.style(n, e, d + c)
            } while (i !== (i = l() / r) && 1 !== i && --o)
        }
        return t && (d = +d || +r || 0, s = t[1] ? d + (t[1] + 1) * t[2] : +t[2], a && (a.unit = c, a.start = d, a.end = s)), s
    }

    function h(n) {
        var e = Wn.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            for (; e.length;) t.createElement(e.pop());
        return t
    }

    function u(n, e) {
        var t, a, s = 0,
            i = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(e || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(e || "*") : undefined;
        if (!i)
            for (i = [], t = n.childNodes || n; null != (a = t[s]); s++) !e || un.nodeName(a, e) ? i.push(a) : un.merge(i, u(a, e));
        return e === undefined || e && un.nodeName(n, e) ? un.merge([n], i) : i
    }

    function g(n, e) {
        for (var t, a = 0; null != (t = n[a]); a++) un._data(t, "globalEval", !e || un._data(e[a], "globalEval"))
    }

    function f(n) {
        On.test(n.type) && (n.defaultChecked = n.checked)
    }

    function v(n, e, t, a, s) {
        for (var i, o, l, r, c, d, m, p = n.length, v = h(e), b = [], w = 0; w < p; w++)
            if ((o = n[w]) || 0 === o)
                if ("object" === un.type(o)) un.merge(b, o.nodeType ? [o] : o);
                else if (Un.test(o)) {
            for (r = r || v.appendChild(e.createElement("div")), c = (qn.exec(o) || ["", ""])[1].toLowerCase(), m = $n[c] || $n._default, r.innerHTML = m[1] + un.htmlPrefilter(o) + m[2], i = m[0]; i--;) r = r.lastChild;
            if (!pn.leadingWhitespace && zn.test(o) && b.push(e.createTextNode(zn.exec(o)[0])), !pn.tbody)
                for (o = "table" !== c || Xn.test(o) ? "<table>" !== m[1] || Xn.test(o) ? 0 : r : r.firstChild, i = o && o.childNodes.length; i--;) un.nodeName(d = o.childNodes[i], "tbody") && !d.childNodes.length && o.removeChild(d);
            for (un.merge(b, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
            r = v.lastChild
        } else b.push(e.createTextNode(o));
        for (r && v.removeChild(r), pn.appendChecked || un.grep(u(b, "input"), f), w = 0; o = b[w++];)
            if (a && un.inArray(o, a) > -1) s && s.push(o);
            else if (l = un.contains(o.ownerDocument, o), r = u(v.appendChild(o), "script"), l && g(r), t)
            for (i = 0; o = r[i++];) Vn.test(o.type || "") && t.push(o);
        return r = null, v
    }

    function b() {
        return !0
    }

    function w() {
        return !1
    }

    function y() {
        try {
            return an.activeElement
        } catch (n) {}
    }

    function x(n, e, t, a, s, i) {
        var o, l;
        if ("object" == typeof e) {
            "string" != typeof t && (a = a || t, t = undefined);
            for (l in e) x(n, l, t, a, e[l], i);
            return n
        }
        if (null == a && null == s ? (s = t, a = t = undefined) : null == s && ("string" == typeof t ? (s = a, a = undefined) : (s = a, a = t, t = undefined)), !1 === s) s = w;
        else if (!s) return n;
        return 1 === i && (o = s, s = function(n) {
            return un().off(n), o.apply(this, arguments)
        }, s.guid = o.guid || (o.guid = un.guid++)), n.each(function() {
            un.event.add(this, e, s, a, t)
        })
    }

    function k(n, e) {
        return un.nodeName(n, "table") && un.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function D(n) {
        return n.type = (null !== un.find.attr(n, "type")) + "/" + n.type, n
    }

    function j(n) {
        var e = se.exec(n.type);
        return e ? n.type = e[1] : n.removeAttribute("type"), n
    }

    function B(n, e) {
        if (1 === e.nodeType && un.hasData(n)) {
            var t, a, s, i = un._data(n),
                o = un._data(e, i),
                l = i.events;
            if (l) {
                delete o.handle, o.events = {};
                for (t in l)
                    for (a = 0, s = l[t].length; a < s; a++) un.event.add(e, t, l[t][a])
            }
            o.data && (o.data = un.extend({}, o.data))
        }
    }

    function _(n, e) {
        var t, a, s;
        if (1 === e.nodeType) {
            if (t = e.nodeName.toLowerCase(), !pn.noCloneEvent && e[un.expando]) {
                s = un._data(e);
                for (a in s.events) un.removeEvent(e, a, s.handle);
                e.removeAttribute(un.expando)
            }
            "script" === t && e.text !== n.text ? (D(e).text = n.text, j(e)) : "object" === t ? (e.parentNode && (e.outerHTML = n.outerHTML), pn.html5Clone && n.innerHTML && !un.trim(e.innerHTML) && (e.innerHTML = n.innerHTML)) : "input" === t && On.test(n.type) ? (e.defaultChecked = e.checked = n.checked, e.value !== n.value && (e.value = n.value)) : "option" === t ? e.defaultSelected = e.selected = n.defaultSelected : "input" !== t && "textarea" !== t || (e.defaultValue = n.defaultValue)
        }
    }

    function F(n, e, t, a) {
        e = on.apply([], e);
        var s, i, o, l, r, c, d = 0,
            m = n.length,
            p = m - 1,
            h = e[0],
            g = un.isFunction(h);
        if (g || m > 1 && "string" == typeof h && !pn.checkClone && ae.test(h)) return n.each(function(s) {
            var i = n.eq(s);
            g && (e[0] = h.call(this, s, i.html())), F(i, e, t, a)
        });
        if (m && (c = v(e, n[0].ownerDocument, !1, n, a), s = c.firstChild, 1 === c.childNodes.length && (c = s), s || a)) {
            for (l = un.map(u(c, "script"), D), o = l.length; d < m; d++) i = c, d !== p && (i = un.clone(i, !0, !0), o && un.merge(l, u(i, "script"))), t.call(n[d], i, d);
            if (o)
                for (r = l[l.length - 1].ownerDocument, un.map(l, j), d = 0; d < o; d++) i = l[d], Vn.test(i.type || "") && !un._data(i, "globalEval") && un.contains(r, i) && (i.src ? un._evalUrl && un._evalUrl(i.src) : un.globalEval((i.text || i.textContent || i.innerHTML || "").replace(ie, "")));
            c = s = null
        }
        return n
    }

    function S(n, e, t) {
        for (var a, s = e ? un.filter(e, n) : n, i = 0; null != (a = s[i]); i++) t || 1 !== a.nodeType || un.cleanData(u(a)), a.parentNode && (t && un.contains(a.ownerDocument, a) && g(u(a, "script")), a.parentNode.removeChild(a));
        return n
    }

    function C(n, e) {
        var t = un(e.createElement(n)).appendTo(e.body),
            a = un.css(t[0], "display");
        return t.detach(), a
    }

    function T(n) {
        var e = an,
            t = ce[n];
        return t || (t = C(n, e), "none" !== t && t || (re = (re || un("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (re[0].contentWindow || re[0].contentDocument).document, e.write(), e.close(), t = C(n, e), re.detach()), ce[n] = t), t
    }

    function E(n, e) {
        return {
            get: function() {
                return n() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function A(n) {
        if (n in je) return n;
        for (var e = n.charAt(0).toUpperCase() + n.slice(1), t = De.length; t--;)
            if ((n = De[t] + e) in je) return n
    }

    function R(n, e) {
        for (var t, a, s, i = [], o = 0, l = n.length; o < l; o++) a = n[o], a.style && (i[o] = un._data(a, "olddisplay"), t = a.style.display, e ? (i[o] || "none" !== t || (a.style.display = ""), "" === a.style.display && In(a) && (i[o] = un._data(a, "olddisplay", T(a.nodeName)))) : (s = In(a), (t && "none" !== t || !s) && un._data(a, "olddisplay", s ? t : un.css(a, "display"))));
        for (o = 0; o < l; o++) a = n[o], a.style && (e && "none" !== a.style.display && "" !== a.style.display || (a.style.display = e ? i[o] || "" : "none"));
        return n
    }

    function L(n, e, t) {
        var a = ye.exec(e);
        return a ? Math.max(0, a[1] - (t || 0)) + (a[2] || "px") : e
    }

    function P(n, e, t, a, s) {
        for (var i = t === (a ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; i < 4; i += 2) "margin" === t && (o += un.css(n, t + Hn[i], !0, s)), a ? ("content" === t && (o -= un.css(n, "padding" + Hn[i], !0, s)), "margin" !== t && (o -= un.css(n, "border" + Hn[i] + "Width", !0, s))) : (o += un.css(n, "padding" + Hn[i], !0, s), "padding" !== t && (o += un.css(n, "border" + Hn[i] + "Width", !0, s)));
        return o
    }

    function N(n, e, t) {
        var a = !0,
            s = "width" === e ? n.offsetWidth : n.offsetHeight,
            i = ue(n),
            o = pn.boxSizing && "border-box" === un.css(n, "boxSizing", !1, i);
        if (s <= 0 || null == s) {
            if (s = ge(n, e, i), (s < 0 || null == s) && (s = n.style[e]), me.test(s)) return s;
            a = o && (pn.boxSizingReliable() || s === n.style[e]), s = parseFloat(s) || 0
        }
        return s + P(n, e, t || (o ? "border" : "content"), a, i) + "px"
    }

    function H(n, e, t, a, s) {
        return new H.prototype.init(n, e, t, a, s)
    }

    function I() {
        return n.setTimeout(function() {
            Be = undefined
        }), Be = un.now()
    }

    function M(n, e) {
        var t, a = {
                height: n
            },
            s = 0;
        for (e = e ? 1 : 0; s < 4; s += 2 - e) t = Hn[s], a["margin" + t] = a["padding" + t] = n;
        return e && (a.opacity = a.width = n), a
    }

    function O(n, e, t) {
        for (var a, s = (z.tweeners[e] || []).concat(z.tweeners["*"]), i = 0, o = s.length; i < o; i++)
            if (a = s[i].call(t, e, n)) return a
    }

    function q(n, e, t) {
        var a, s, i, o, l, r, c, d = this,
            m = {},
            p = n.style,
            h = n.nodeType && In(n),
            u = un._data(n, "fxshow");
        t.queue || (l = un._queueHooks(n, "fx"), null == l.unqueued && (l.unqueued = 0, r = l.empty.fire, l.empty.fire = function() {
            l.unqueued || r()
        }), l.unqueued++, d.always(function() {
            d.always(function() {
                l.unqueued--, un.queue(n, "fx").length || l.empty.fire()
            })
        })), 1 === n.nodeType && ("height" in e || "width" in e) && (t.overflow = [p.overflow, p.overflowX, p.overflowY], c = un.css(n, "display"), "inline" === ("none" === c ? un._data(n, "olddisplay") || T(n.nodeName) : c) && "none" === un.css(n, "float") && (pn.inlineBlockNeedsLayout && "inline" !== T(n.nodeName) ? p.zoom = 1 : p.display = "inline-block")), t.overflow && (p.overflow = "hidden", pn.shrinkWrapBlocks() || d.always(function() {
            p.overflow = t.overflow[0], p.overflowX = t.overflow[1], p.overflowY = t.overflow[2]
        }));
        for (a in e)
            if (s = e[a], Fe.exec(s)) {
                if (delete e[a], i = i || "toggle" === s, s === (h ? "hide" : "show")) {
                    if ("show" !== s || !u || u[a] === undefined) continue;
                    h = !0
                }
                m[a] = u && u[a] || un.style(n, a)
            } else c = undefined;
        if (un.isEmptyObject(m)) "inline" === ("none" === c ? T(n.nodeName) : c) && (p.display = c);
        else {
            u ? "hidden" in u && (h = u.hidden) : u = un._data(n, "fxshow", {}), i && (u.hidden = !h), h ? un(n).show() : d.done(function() {
                un(n).hide()
            }), d.done(function() {
                var e;
                un._removeData(n, "fxshow");
                for (e in m) un.style(n, e, m[e])
            });
            for (a in m) o = O(h ? u[a] : 0, a, d), a in u || (u[a] = o.start, h && (o.end = o.start, o.start = "width" === a || "height" === a ? 1 : 0))
        }
    }

    function V(n, e) {
        var t, a, s, i, o;
        for (t in n)
            if (a = un.camelCase(t), s = e[a], i = n[t], un.isArray(i) && (s = i[1], i = n[t] = i[0]), t !== a && (n[a] = i, delete n[t]), (o = un.cssHooks[a]) && "expand" in o) {
                i = o.expand(i), delete n[a];
                for (t in i) t in n || (n[t] = i[t], e[t] = s)
            } else e[a] = s
    }

    function z(n, e, t) {
        var a, s, i = 0,
            o = z.prefilters.length,
            l = un.Deferred().always(function() {
                delete r.elem
            }),
            r = function() {
                if (s) return !1;
                for (var e = Be || I(), t = Math.max(0, c.startTime + c.duration - e), a = t / c.duration || 0, i = 1 - a, o = 0, r = c.tweens.length; o < r; o++) c.tweens[o].run(i);
                return l.notifyWith(n, [c, i, t]), i < 1 && r ? t : (l.resolveWith(n, [c]), !1)
            },
            c = l.promise({
                elem: n,
                props: un.extend({}, e),
                opts: un.extend(!0, {
                    specialEasing: {},
                    easing: un.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Be || I(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var a = un.Tween(n, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(a), a
                },
                stop: function(e) {
                    var t = 0,
                        a = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < a; t++) c.tweens[t].run(1);
                    return e ? (l.notifyWith(n, [c, 1, 0]), l.resolveWith(n, [c, e])) : l.rejectWith(n, [c, e]), this
                }
            }),
            d = c.props;
        for (V(d, c.opts.specialEasing); i < o; i++)
            if (a = z.prefilters[i].call(c, n, d, c.opts)) return un.isFunction(a.stop) && (un._queueHooks(c.elem, c.opts.queue).stop = un.proxy(a.stop, a)), a;
        return un.map(d, O, c), un.isFunction(c.opts.start) && c.opts.start.call(n, c), un.fx.timer(un.extend(r, {
            elem: n,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function W(n) {
        return un.attr(n, "class") || ""
    }

    function $(n) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var a, s = 0,
                i = e.toLowerCase().match(Cn) || [];
            if (un.isFunction(t))
                for (; a = i[s++];) "+" === a.charAt(0) ? (a = a.slice(1) || "*", (n[a] = n[a] || []).unshift(t)) : (n[a] = n[a] || []).push(t)
        }
    }

    function U(n, e, t, a) {
        function s(l) {
            var r;
            return i[l] = !0, un.each(n[l] || [], function(n, l) {
                var c = l(e, t, a);
                return "string" != typeof c || o || i[c] ? o ? !(r = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
            }), r
        }
        var i = {},
            o = n === Qe;
        return s(e.dataTypes[0]) || !i["*"] && s("*")
    }

    function X(n, e) {
        var t, a, s = un.ajaxSettings.flatOptions || {};
        for (a in e) e[a] !== undefined && ((s[a] ? n : t || (t = {}))[a] = e[a]);
        return t && un.extend(!0, n, t), n
    }

    function J(n, e, t) {
        for (var a, s, i, o, l = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), s === undefined && (s = n.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (o in l)
                if (l[o] && l[o].test(s)) {
                    r.unshift(o);
                    break
                }
        if (r[0] in t) i = r[0];
        else {
            for (o in t) {
                if (!r[0] || n.converters[o + " " + r[0]]) {
                    i = o;
                    break
                }
                a || (a = o)
            }
            i = i || a
        }
        if (i) return i !== r[0] && r.unshift(i), t[i]
    }

    function Z(n, e, t, a) {
        var s, i, o, l, r, c = {},
            d = n.dataTypes.slice();
        if (d[1])
            for (o in n.converters) c[o.toLowerCase()] = n.converters[o];
        for (i = d.shift(); i;)
            if (n.responseFields[i] && (t[n.responseFields[i]] = e), !r && a && n.dataFilter && (e = n.dataFilter(e, n.dataType)), r = i, i = d.shift())
                if ("*" === i) i = r;
                else if ("*" !== r && r !== i) {
            if (!(o = c[r + " " + i] || c["* " + i]))
                for (s in c)
                    if (l = s.split(" "), l[1] === i && (o = c[r + " " + l[0]] || c["* " + l[0]])) {
                        !0 === o ? o = c[s] : !0 !== c[s] && (i = l[0], d.unshift(l[1]));
                        break
                    }
            if (!0 !== o)
                if (o && n["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (n) {
                    return {
                        state: "parsererror",
                        error: o ? n : "No conversion from " + r + " to " + i
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function G(n) {
        return n.style && n.style.display || un.css(n, "display")
    }

    function Y(n) {
        if (!un.contains(n.ownerDocument || an, n)) return !0;
        for (; n && 1 === n.nodeType;) {
            if ("none" === G(n) || "hidden" === n.type) return !0;
            n = n.parentNode
        }
        return !1
    }

    function Q(n, e, t, a) {
        var s;
        if (un.isArray(e)) un.each(e, function(e, s) {
            t || at.test(n) ? a(n, s) : Q(n + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, t, a)
        });
        else if (t || "object" !== un.type(e)) a(n, e);
        else
            for (s in e) Q(n + "[" + s + "]", e[s], t, a)
    }

    function K() {
        try {
            return new n.XMLHttpRequest
        } catch (n) {}
    }

    function nn() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (n) {}
    }

    function en(n) {
        return un.isWindow(n) ? n : 9 === n.nodeType && (n.defaultView || n.parentWindow)
    }
    var tn = [],
        an = n.document,
        sn = tn.slice,
        on = tn.concat,
        ln = tn.push,
        rn = tn.indexOf,
        cn = {},
        dn = cn.toString,
        mn = cn.hasOwnProperty,
        pn = {},
        hn = "1.12.4",
        un = function(n, e) {
            return new un.fn.init(n, e)
        },
        gn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        fn = /^-ms-/,
        vn = /-([\da-z])/gi,
        bn = function(n, e) {
            return e.toUpperCase()
        };
    un.fn = un.prototype = {
        jquery: hn,
        constructor: un,
        selector: "",
        length: 0,
        toArray: function() {
            return sn.call(this)
        },
        get: function(n) {
            return null != n ? n < 0 ? this[n + this.length] : this[n] : sn.call(this)
        },
        pushStack: function(n) {
            var e = un.merge(this.constructor(), n);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(n) {
            return un.each(this, n)
        },
        map: function(n) {
            return this.pushStack(un.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(sn.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var e = this.length,
                t = +n + (n < 0 ? e : 0);
            return this.pushStack(t >= 0 && t < e ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ln,
        sort: tn.sort,
        splice: tn.splice
    }, un.extend = un.fn.extend = function() {
        var n, e, t, a, s, i, o = arguments[0] || {},
            l = 1,
            r = arguments.length,
            c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[l] || {}, l++), "object" == typeof o || un.isFunction(o) || (o = {}), l === r && (o = this, l--); l < r; l++)
            if (null != (s = arguments[l]))
                for (a in s) n = o[a], t = s[a], o !== t && (c && t && (un.isPlainObject(t) || (e = un.isArray(t))) ? (e ? (e = !1, i = n && un.isArray(n) ? n : []) : i = n && un.isPlainObject(n) ? n : {}, o[a] = un.extend(c, i, t)) : t !== undefined && (o[a] = t));
        return o
    }, un.extend({
        expando: "jQuery" + (hn + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n)
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === un.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === un.type(n)
        },
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            var e = n && n.toString();
            return !un.isArray(n) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(n) {
            var e;
            for (e in n) return !1;
            return !0
        },
        isPlainObject: function(n) {
            var e;
            if (!n || "object" !== un.type(n) || n.nodeType || un.isWindow(n)) return !1;
            try {
                if (n.constructor && !mn.call(n, "constructor") && !mn.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!pn.ownFirst)
                for (e in n) return mn.call(n, e);
            for (e in n);
            return e === undefined || mn.call(n, e)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? cn[dn.call(n)] || "object" : typeof n
        },
        globalEval: function(e) {
            e && un.trim(e) && (n.execScript || function(e) {
                n.eval.call(n, e)
            })(e)
        },
        camelCase: function(n) {
            return n.replace(fn, "ms-").replace(vn, bn)
        },
        nodeName: function(n, e) {
            return n.nodeName && n.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(n, e) {
            var a, s = 0;
            if (t(n))
                for (a = n.length; s < a && !1 !== e.call(n[s], s, n[s]); s++);
            else
                for (s in n)
                    if (!1 === e.call(n[s], s, n[s])) break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(gn, "")
        },
        makeArray: function(n, e) {
            var a = e || [];
            return null != n && (t(Object(n)) ? un.merge(a, "string" == typeof n ? [n] : n) : ln.call(a, n)), a
        },
        inArray: function(n, e, t) {
            var a;
            if (e) {
                if (rn) return rn.call(e, n, t);
                for (a = e.length, t = t ? t < 0 ? Math.max(0, a + t) : t : 0; t < a; t++)
                    if (t in e && e[t] === n) return t
            }
            return -1
        },
        merge: function(n, e) {
            for (var t = +e.length, a = 0, s = n.length; a < t;) n[s++] = e[a++];
            if (t !== t)
                for (; e[a] !== undefined;) n[s++] = e[a++];
            return n.length = s, n
        },
        grep: function(n, e, t) {
            for (var a = [], s = 0, i = n.length, o = !t; s < i; s++) !e(n[s], s) !== o && a.push(n[s]);
            return a
        },
        map: function(n, e, a) {
            var s, i, o = 0,
                l = [];
            if (t(n))
                for (s = n.length; o < s; o++) null != (i = e(n[o], o, a)) && l.push(i);
            else
                for (o in n) null != (i = e(n[o], o, a)) && l.push(i);
            return on.apply([], l)
        },
        guid: 1,
        proxy: function(n, e) {
            var t, a, s;
            return "string" == typeof e && (s = n[e], e = n, n = s), un.isFunction(n) ? (t = sn.call(arguments, 2), a = function() {
                return n.apply(e || this, t.concat(sn.call(arguments)))
            }, a.guid = n.guid = n.guid || un.guid++, a) : undefined
        },
        now: function() {
            return +new Date
        },
        support: pn
    }), "function" == typeof Symbol && (un.fn[Symbol.iterator] = tn[Symbol.iterator]), un.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, e) {
        cn["[object " + e + "]"] = e.toLowerCase()
    });
    var wn = function(n) {
        function e(n, e, t, a) {
            var s, i, o, l, r, c, m, h, u = e && e.ownerDocument,
                g = e ? e.nodeType : 9;
            if (t = t || [], "string" != typeof n || !n || 1 !== g && 9 !== g && 11 !== g) return t;
            if (!a && ((e ? e.ownerDocument || e : O) !== A && E(e), e = e || A, L)) {
                if (11 !== g && (c = bn.exec(n)))
                    if (s = c[1]) {
                        if (9 === g) {
                            if (!(o = e.getElementById(s))) return t;
                            if (o.id === s) return t.push(o), t
                        } else if (u && (o = u.getElementById(s)) && I(e, o) && o.id === s) return t.push(o), t
                    } else {
                        if (c[2]) return Q.apply(t, e.getElementsByTagName(n)), t;
                        if ((s = c[3]) && x.getElementsByClassName && e.getElementsByClassName) return Q.apply(t, e.getElementsByClassName(s)), t
                    }
                if (x.qsa && !$[n + " "] && (!P || !P.test(n))) {
                    if (1 !== g) u = e, h = n;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((l = e.getAttribute("id")) ? l = l.replace(yn, "\\$&") : e.setAttribute("id", l = M), m = B(n), i = m.length, r = hn.test(l) ? "#" + l : "[id='" + l + "']"; i--;) m[i] = r + " " + p(m[i]);
                        h = m.join(","), u = wn.test(n) && d(e.parentNode) || e
                    }
                    if (h) try {
                        return Q.apply(t, u.querySelectorAll(h)), t
                    } catch (n) {} finally {
                        l === M && e.removeAttribute("id")
                    }
                }
            }
            return F(n.replace(rn, "$1"), e, t, a)
        }

        function t() {
            function n(t, a) {
                return e.push(t + " ") > k.cacheLength && delete n[e.shift()], n[t + " "] = a
            }
            var e = [];
            return n
        }

        function a(n) {
            return n[M] = !0, n
        }

        function s(n) {
            var e = A.createElement("div");
            try {
                return !!n(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function i(n, e) {
            for (var t = n.split("|"), a = t.length; a--;) k.attrHandle[t[a]] = e
        }

        function o(n, e) {
            var t = e && n,
                a = t && 1 === n.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~n.sourceIndex || X);
            if (a) return a;
            if (t)
                for (; t = t.nextSibling;)
                    if (t === e) return -1;
            return n ? 1 : -1
        }

        function l(n) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === n
            }
        }

        function r(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function c(n) {
            return a(function(e) {
                return e = +e, a(function(t, a) {
                    for (var s, i = n([], t.length, e), o = i.length; o--;) t[s = i[o]] && (t[s] = !(a[s] = t[s]))
                })
            })
        }

        function d(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }

        function m() {}

        function p(n) {
            for (var e = 0, t = n.length, a = ""; e < t; e++) a += n[e].value;
            return a
        }

        function h(n, e, t) {
            var a = e.dir,
                s = t && "parentNode" === a,
                i = V++;
            return e.first ? function(e, t, i) {
                for (; e = e[a];)
                    if (1 === e.nodeType || s) return n(e, t, i)
            } : function(e, t, o) {
                var l, r, c, d = [q, i];
                if (o) {
                    for (; e = e[a];)
                        if ((1 === e.nodeType || s) && n(e, t, o)) return !0
                } else
                    for (; e = e[a];)
                        if (1 === e.nodeType || s) {
                            if (c = e[M] || (e[M] = {}), r = c[e.uniqueID] || (c[e.uniqueID] = {}), (l = r[a]) && l[0] === q && l[1] === i) return d[2] = l[2];
                            if (r[a] = d, d[2] = n(e, t, o)) return !0
                        }
            }
        }

        function u(n) {
            return n.length > 1 ? function(e, t, a) {
                for (var s = n.length; s--;)
                    if (!n[s](e, t, a)) return !1;
                return !0
            } : n[0]
        }

        function g(n, t, a) {
            for (var s = 0, i = t.length; s < i; s++) e(n, t[s], a);
            return a
        }

        function f(n, e, t, a, s) {
            for (var i, o = [], l = 0, r = n.length, c = null != e; l < r; l++)(i = n[l]) && (t && !t(i, a, s) || (o.push(i), c && e.push(l)));
            return o
        }

        function v(n, e, t, s, i, o) {
            return s && !s[M] && (s = v(s)), i && !i[M] && (i = v(i, o)), a(function(a, o, l, r) {
                var c, d, m, p = [],
                    h = [],
                    u = o.length,
                    v = a || g(e || "*", l.nodeType ? [l] : l, []),
                    b = !n || !a && e ? v : f(v, p, n, l, r),
                    w = t ? i || (a ? n : u || s) ? [] : o : b;
                if (t && t(b, w, l, r), s)
                    for (c = f(w, h), s(c, [], l, r), d = c.length; d--;)(m = c[d]) && (w[h[d]] = !(b[h[d]] = m));
                if (a) {
                    if (i || n) {
                        if (i) {
                            for (c = [], d = w.length; d--;)(m = w[d]) && c.push(b[d] = m);
                            i(null, w = [], c, r)
                        }
                        for (d = w.length; d--;)(m = w[d]) && (c = i ? nn(a, m) : p[d]) > -1 && (a[c] = !(o[c] = m))
                    }
                } else w = f(w === o ? w.splice(u, w.length) : w), i ? i(null, o, w, r) : Q.apply(o, w)
            })
        }

        function b(n) {
            for (var e, t, a, s = n.length, i = k.relative[n[0].type], o = i || k.relative[" "], l = i ? 1 : 0, r = h(function(n) {
                    return n === e
                }, o, !0), c = h(function(n) {
                    return nn(e, n) > -1
                }, o, !0), d = [function(n, t, a) {
                    var s = !i && (a || t !== S) || ((e = t).nodeType ? r(n, t, a) : c(n, t, a));
                    return e = null, s
                }]; l < s; l++)
                if (t = k.relative[n[l].type]) d = [h(u(d), t)];
                else {
                    if (t = k.filter[n[l].type].apply(null, n[l].matches), t[M]) {
                        for (a = ++l; a < s && !k.relative[n[a].type]; a++);
                        return v(l > 1 && u(d), l > 1 && p(n.slice(0, l - 1).concat({
                            value: " " === n[l - 2].type ? "*" : ""
                        })).replace(rn, "$1"), t, l < a && b(n.slice(l, a)), a < s && b(n = n.slice(a)), a < s && p(n))
                    }
                    d.push(t)
                }
            return u(d)
        }

        function w(n, t) {
            var s = t.length > 0,
                i = n.length > 0,
                o = function(a, o, l, r, c) {
                    var d, m, p, h = 0,
                        u = "0",
                        g = a && [],
                        v = [],
                        b = S,
                        w = a || i && k.find.TAG("*", c),
                        y = q += null == b ? 1 : Math.random() || .1,
                        x = w.length;
                    for (c && (S = o === A || o || c); u !== x && null != (d = w[u]); u++) {
                        if (i && d) {
                            for (m = 0, o || d.ownerDocument === A || (E(d), l = !L); p = n[m++];)
                                if (p(d, o || A, l)) {
                                    r.push(d);
                                    break
                                }
                            c && (q = y)
                        }
                        s && ((d = !p && d) && h--, a && g.push(d))
                    }
                    if (h += u, s && u !== h) {
                        for (m = 0; p = t[m++];) p(g, v, o, l);
                        if (a) {
                            if (h > 0)
                                for (; u--;) g[u] || v[u] || (v[u] = G.call(r));
                            v = f(v)
                        }
                        Q.apply(r, v), c && !a && v.length > 0 && h + t.length > 1 && e.uniqueSort(r)
                    }
                    return c && (q = y, S = b), g
                };
            return s ? a(o) : o
        }
        var y, x, k, D, j, B, _, F, S, C, T, E, A, R, L, P, N, H, I, M = "sizzle" + 1 * new Date,
            O = n.document,
            q = 0,
            V = 0,
            z = t(),
            W = t(),
            $ = t(),
            U = function(n, e) {
                return n === e && (T = !0), 0
            },
            X = 1 << 31,
            J = {}.hasOwnProperty,
            Z = [],
            G = Z.pop,
            Y = Z.push,
            Q = Z.push,
            K = Z.slice,
            nn = function(n, e) {
                for (var t = 0, a = n.length; t < a; t++)
                    if (n[t] === e) return t;
                return -1
            },
            en = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tn = "[\\x20\\t\\r\\n\\f]",
            an = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            sn = "\\[" + tn + "*(" + an + ")(?:" + tn + "*([*^$|!~]?=)" + tn + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + an + "))|)" + tn + "*\\]",
            on = ":(" + an + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + sn + ")*)|.*)\\)|)",
            ln = new RegExp(tn + "+", "g"),
            rn = new RegExp("^" + tn + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tn + "+$", "g"),
            cn = new RegExp("^" + tn + "*," + tn + "*"),
            dn = new RegExp("^" + tn + "*([>+~]|" + tn + ")" + tn + "*"),
            mn = new RegExp("=" + tn + "*([^\\]'\"]*?)" + tn + "*\\]", "g"),
            pn = new RegExp(on),
            hn = new RegExp("^" + an + "$"),
            un = {
                ID: new RegExp("^#(" + an + ")"),
                CLASS: new RegExp("^\\.(" + an + ")"),
                TAG: new RegExp("^(" + an + "|[*])"),
                ATTR: new RegExp("^" + sn),
                PSEUDO: new RegExp("^" + on),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tn + "*(even|odd|(([+-]|)(\\d*)n|)" + tn + "*(?:([+-]|)" + tn + "*(\\d+)|))" + tn + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + en + ")$", "i"),
                needsContext: new RegExp("^" + tn + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tn + "*((?:-\\d)?\\d*)" + tn + "*\\)|)(?=[^-]|$)", "i")
            },
            gn = /^(?:input|select|textarea|button)$/i,
            fn = /^h\d$/i,
            vn = /^[^{]+\{\s*\[native \w/,
            bn = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            wn = /[+~]/,
            yn = /'|\\/g,
            xn = new RegExp("\\\\([\\da-f]{1,6}" + tn + "?|(" + tn + ")|.)", "ig"),
            kn = function(n, e, t) {
                var a = "0x" + e - 65536;
                return a !== a || t ? e : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            Dn = function() {
                E()
            };
        try {
            Q.apply(Z = K.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
        } catch (n) {
            Q = {
                apply: Z.length ? function(n, e) {
                    Y.apply(n, K.call(e))
                } : function(n, e) {
                    for (var t = n.length, a = 0; n[t++] = e[a++];);
                    n.length = t - 1
                }
            }
        }
        x = e.support = {}, j = e.isXML = function(n) {
            var e = n && (n.ownerDocument || n).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, E = e.setDocument = function(n) {
            var e, t, a = n ? n.ownerDocument || n : O;
            return a !== A && 9 === a.nodeType && a.documentElement ? (A = a, R = A.documentElement, L = !j(A), (t = A.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", Dn, !1) : t.attachEvent && t.attachEvent("onunload", Dn)), x.attributes = s(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), x.getElementsByTagName = s(function(n) {
                return n.appendChild(A.createComment("")), !n.getElementsByTagName("*").length
            }), x.getElementsByClassName = vn.test(A.getElementsByClassName), x.getById = s(function(n) {
                return R.appendChild(n).id = M, !A.getElementsByName || !A.getElementsByName(M).length
            }), x.getById ? (k.find.ID = function(n, e) {
                if ("undefined" != typeof e.getElementById && L) {
                    var t = e.getElementById(n);
                    return t ? [t] : []
                }
            }, k.filter.ID = function(n) {
                var e = n.replace(xn, kn);
                return function(n) {
                    return n.getAttribute("id") === e
                }
            }) : (delete k.find.ID, k.filter.ID = function(n) {
                var e = n.replace(xn, kn);
                return function(n) {
                    var t = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return t && t.value === e
                }
            }), k.find.TAG = x.getElementsByTagName ? function(n, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(n) : x.qsa ? e.querySelectorAll(n) : void 0
            } : function(n, e) {
                var t, a = [],
                    s = 0,
                    i = e.getElementsByTagName(n);
                if ("*" === n) {
                    for (; t = i[s++];) 1 === t.nodeType && a.push(t);
                    return a
                }
                return i
            }, k.find.CLASS = x.getElementsByClassName && function(n, e) {
                if ("undefined" != typeof e.getElementsByClassName && L) return e.getElementsByClassName(n)
            }, N = [], P = [], (x.qsa = vn.test(A.querySelectorAll)) && (s(function(n) {
                R.appendChild(n).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", n.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + tn + "*(?:''|\"\")"), n.querySelectorAll("[selected]").length || P.push("\\[" + tn + "*(?:value|" + en + ")"), n.querySelectorAll("[id~=" + M + "-]").length || P.push("~="), n.querySelectorAll(":checked").length || P.push(":checked"), n.querySelectorAll("a#" + M + "+*").length || P.push(".#.+[+~]")
            }), s(function(n) {
                var e = A.createElement("input");
                e.setAttribute("type", "hidden"), n.appendChild(e).setAttribute("name", "D"), n.querySelectorAll("[name=d]").length && P.push("name" + tn + "*[*^$|!~]?="), n.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), n.querySelectorAll("*,:x"), P.push(",.*:")
            })), (x.matchesSelector = vn.test(H = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && s(function(n) {
                x.disconnectedMatch = H.call(n, "div"), H.call(n, "[s!='']:x"), N.push("!=", on)
            }), P = P.length && new RegExp(P.join("|")), N = N.length && new RegExp(N.join("|")), e = vn.test(R.compareDocumentPosition), I = e || vn.test(R.contains) ? function(n, e) {
                var t = 9 === n.nodeType ? n.documentElement : n,
                    a = e && e.parentNode;
                return n === a || !(!a || 1 !== a.nodeType || !(t.contains ? t.contains(a) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(a)))
            } : function(n, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === n) return !0;
                return !1
            }, U = e ? function(n, e) {
                if (n === e) return T = !0, 0;
                var t = !n.compareDocumentPosition - !e.compareDocumentPosition;
                return t || (t = (n.ownerDocument || n) === (e.ownerDocument || e) ? n.compareDocumentPosition(e) : 1, 1 & t || !x.sortDetached && e.compareDocumentPosition(n) === t ? n === A || n.ownerDocument === O && I(O, n) ? -1 : e === A || e.ownerDocument === O && I(O, e) ? 1 : C ? nn(C, n) - nn(C, e) : 0 : 4 & t ? -1 : 1)
            } : function(n, e) {
                if (n === e) return T = !0, 0;
                var t, a = 0,
                    s = n.parentNode,
                    i = e.parentNode,
                    l = [n],
                    r = [e];
                if (!s || !i) return n === A ? -1 : e === A ? 1 : s ? -1 : i ? 1 : C ? nn(C, n) - nn(C, e) : 0;
                if (s === i) return o(n, e);
                for (t = n; t = t.parentNode;) l.unshift(t);
                for (t = e; t = t.parentNode;) r.unshift(t);
                for (; l[a] === r[a];) a++;
                return a ? o(l[a], r[a]) : l[a] === O ? -1 : r[a] === O ? 1 : 0
            }, A) : A
        }, e.matches = function(n, t) {
            return e(n, null, null, t)
        }, e.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== A && E(n), t = t.replace(mn, "='$1']"), x.matchesSelector && L && !$[t + " "] && (!N || !N.test(t)) && (!P || !P.test(t))) try {
                var a = H.call(n, t);
                if (a || x.disconnectedMatch || n.document && 11 !== n.document.nodeType) return a
            } catch (n) {}
            return e(t, A, null, [n]).length > 0
        }, e.contains = function(n, e) {
            return (n.ownerDocument || n) !== A && E(n), I(n, e)
        }, e.attr = function(n, e) {
            (n.ownerDocument || n) !== A && E(n);
            var t = k.attrHandle[e.toLowerCase()],
                a = t && J.call(k.attrHandle, e.toLowerCase()) ? t(n, e, !L) : undefined;
            return a !== undefined ? a : x.attributes || !L ? n.getAttribute(e) : (a = n.getAttributeNode(e)) && a.specified ? a.value : null
        }, e.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n)
        }, e.uniqueSort = function(n) {
            var e, t = [],
                a = 0,
                s = 0;
            if (T = !x.detectDuplicates, C = !x.sortStable && n.slice(0), n.sort(U), T) {
                for (; e = n[s++];) e === n[s] && (a = t.push(s));
                for (; a--;) n.splice(t[a], 1)
            }
            return C = null, n
        }, D = e.getText = function(n) {
            var e, t = "",
                a = 0,
                s = n.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) t += D(n)
                } else if (3 === s || 4 === s) return n.nodeValue
            } else
                for (; e = n[a++];) t += D(e);
            return t
        }, k = e.selectors = {
            cacheLength: 50,
            createPseudo: a,
            match: un,
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
                ATTR: function(n) {
                    return n[1] = n[1].replace(xn, kn), n[3] = (n[3] || n[4] || n[5] || "").replace(xn, kn), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || e.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && e.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var e, t = !n[6] && n[2];
                    return un.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && pn.test(t) && (e = B(t, !0)) && (e = t.indexOf(")", t.length - e) - t.length) && (n[0] = n[0].slice(0, e), n[2] = t.slice(0, e)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var e = n.replace(xn, kn).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(n) {
                    var e = z[n + " "];
                    return e || (e = new RegExp("(^|" + tn + ")" + n + "(" + tn + "|$)")) && z(n, function(n) {
                        return e.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, a) {
                    return function(s) {
                        var i = e.attr(s, n);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === a : "!=" === t ? i !== a : "^=" === t ? a && 0 === i.indexOf(a) : "*=" === t ? a && i.indexOf(a) > -1 : "$=" === t ? a && i.slice(-a.length) === a : "~=" === t ? (" " + i.replace(ln, " ") + " ").indexOf(a) > -1 : "|=" === t && (i === a || i.slice(0, a.length + 1) === a + "-"))
                    }
                },
                CHILD: function(n, e, t, a, s) {
                    var i = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        l = "of-type" === e;
                    return 1 === a && 0 === s ? function(n) {
                        return !!n.parentNode
                    } : function(e, t, r) {
                        var c, d, m, p, h, u, g = i !== o ? "nextSibling" : "previousSibling",
                            f = e.parentNode,
                            v = l && e.nodeName.toLowerCase(),
                            b = !r && !l,
                            w = !1;
                        if (f) {
                            if (i) {
                                for (; g;) {
                                    for (p = e; p = p[g];)
                                        if (l ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    u = g = "only" === n && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [o ? f.firstChild : f.lastChild], o && b) {
                                for (p = f, m = p[M] || (p[M] = {}), d = m[p.uniqueID] || (m[p.uniqueID] = {}), c = d[n] || [], h = c[0] === q && c[1], w = h && c[2], p = h && f.childNodes[h]; p = ++h && p && p[g] || (w = h = 0) || u.pop();)
                                    if (1 === p.nodeType && ++w && p === e) {
                                        d[n] = [q, h, w];
                                        break
                                    }
                            } else if (b && (p = e, m = p[M] || (p[M] = {}), d = m[p.uniqueID] || (m[p.uniqueID] = {}), c = d[n] || [], h = c[0] === q && c[1], w = h), !1 === w)
                                for (;
                                    (p = ++h && p && p[g] || (w = h = 0) || u.pop()) && ((l ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (b && (m = p[M] || (p[M] = {}), d = m[p.uniqueID] || (m[p.uniqueID] = {}), d[n] = [q, w]), p !== e)););
                            return (w -= s) === a || w % a == 0 && w / a >= 0
                        }
                    }
                },
                PSEUDO: function(n, t) {
                    var s, i = k.pseudos[n] || k.setFilters[n.toLowerCase()] || e.error("unsupported pseudo: " + n);
                    return i[M] ? i(t) : i.length > 1 ? (s = [n, n, "", t], k.setFilters.hasOwnProperty(n.toLowerCase()) ? a(function(n, e) {
                        for (var a, s = i(n, t), o = s.length; o--;) a = nn(n, s[o]), n[a] = !(e[a] = s[o])
                    }) : function(n) {
                        return i(n, 0, s)
                    }) : i
                }
            },
            pseudos: {
                not: a(function(n) {
                    var e = [],
                        t = [],
                        s = _(n.replace(rn, "$1"));
                    return s[M] ? a(function(n, e, t, a) {
                        for (var i, o = s(n, null, a, []), l = n.length; l--;)(i = o[l]) && (n[l] = !(e[l] = i))
                    }) : function(n, a, i) {
                        return e[0] = n, s(e, null, i, t), e[0] = null, !t.pop()
                    }
                }),
                has: a(function(n) {
                    return function(t) {
                        return e(n, t).length > 0
                    }
                }),
                contains: a(function(n) {
                    return n = n.replace(xn, kn),
                        function(e) {
                            return (e.textContent || e.innerText || D(e)).indexOf(n) > -1
                        }
                }),
                lang: a(function(n) {
                    return hn.test(n || "") || e.error("unsupported lang: " + n), n = n.replace(xn, kn).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(n) {
                    return n === R
                },
                focus: function(n) {
                    return n === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return !1 === n.disabled
                },
                disabled: function(n) {
                    return !0 === n.disabled
                },
                checked: function(n) {
                    var e = n.nodeName.toLowerCase();
                    return "input" === e && !!n.checked || "option" === e && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !k.pseudos.empty(n)
                },
                header: function(n) {
                    return fn.test(n.nodeName)
                },
                input: function(n) {
                    return gn.test(n.nodeName)
                },
                button: function(n) {
                    var e = n.nodeName.toLowerCase();
                    return "input" === e && "button" === n.type || "button" === e
                },
                text: function(n) {
                    var e;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (e = n.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(n, e) {
                    return [e - 1]
                }),
                eq: c(function(n, e, t) {
                    return [t < 0 ? t + e : t]
                }),
                even: c(function(n, e) {
                    for (var t = 0; t < e; t += 2) n.push(t);
                    return n
                }),
                odd: c(function(n, e) {
                    for (var t = 1; t < e; t += 2) n.push(t);
                    return n
                }),
                lt: c(function(n, e, t) {
                    for (var a = t < 0 ? t + e : t; --a >= 0;) n.push(a);
                    return n
                }),
                gt: c(function(n, e, t) {
                    for (var a = t < 0 ? t + e : t; ++a < e;) n.push(a);
                    return n
                })
            }
        }, k.pseudos.nth = k.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) k.pseudos[y] = l(y);
        for (y in {
                submit: !0,
                reset: !0
            }) k.pseudos[y] = r(y);
        return m.prototype = k.filters = k.pseudos, k.setFilters = new m, B = e.tokenize = function(n, t) {
            var a, s, i, o, l, r, c, d = W[n + " "];
            if (d) return t ? 0 : d.slice(0);
            for (l = n, r = [], c = k.preFilter; l;) {
                a && !(s = cn.exec(l)) || (s && (l = l.slice(s[0].length) || l), r.push(i = [])), a = !1, (s = dn.exec(l)) && (a = s.shift(), i.push({
                    value: a,
                    type: s[0].replace(rn, " ")
                }), l = l.slice(a.length));
                for (o in k.filter) !(s = un[o].exec(l)) || c[o] && !(s = c[o](s)) || (a = s.shift(), i.push({
                    value: a,
                    type: o,
                    matches: s
                }), l = l.slice(a.length));
                if (!a) break
            }
            return t ? l.length : l ? e.error(n) : W(n, r).slice(0)
        }, _ = e.compile = function(n, e) {
            var t, a = [],
                s = [],
                i = $[n + " "];
            if (!i) {
                for (e || (e = B(n)), t = e.length; t--;) i = b(e[t]), i[M] ? a.push(i) : s.push(i);
                i = $(n, w(s, a)), i.selector = n
            }
            return i
        }, F = e.select = function(n, e, t, a) {
            var s, i, o, l, r, c = "function" == typeof n && n,
                m = !a && B(n = c.selector || n);
            if (t = t || [], 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (o = i[0]).type && x.getById && 9 === e.nodeType && L && k.relative[i[1].type]) {
                    if (!(e = (k.find.ID(o.matches[0].replace(xn, kn), e) || [])[0])) return t;
                    c && (e = e.parentNode), n = n.slice(i.shift().value.length)
                }
                for (s = un.needsContext.test(n) ? 0 : i.length; s-- && (o = i[s], !k.relative[l = o.type]);)
                    if ((r = k.find[l]) && (a = r(o.matches[0].replace(xn, kn), wn.test(i[0].type) && d(e.parentNode) || e))) {
                        if (i.splice(s, 1), !(n = a.length && p(i))) return Q.apply(t, a), t;
                        break
                    }
            }
            return (c || _(n, m))(a, e, !L, t, !e || wn.test(n) && d(e.parentNode) || e), t
        }, x.sortStable = M.split("").sort(U).join("") === M, x.detectDuplicates = !!T, E(), x.sortDetached = s(function(n) {
            return 1 & n.compareDocumentPosition(A.createElement("div"))
        }), s(function(n) {
            return n.innerHTML = "<a href='#'></a>", "#" === n.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(n, e, t) {
            if (!t) return n.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && s(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || i("value", function(n, e, t) {
            if (!t && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), s(function(n) {
            return null == n.getAttribute("disabled")
        }) || i(en, function(n, e, t) {
            var a;
            if (!t) return !0 === n[e] ? e.toLowerCase() : (a = n.getAttributeNode(e)) && a.specified ? a.value : null
        }), e
    }(n);
    un.find = wn, un.expr = wn.selectors, un.expr[":"] = un.expr.pseudos, un.uniqueSort = un.unique = wn.uniqueSort, un.text = wn.getText, un.isXMLDoc = wn.isXML, un.contains = wn.contains;
    var yn = function(n, e, t) {
            for (var a = [], s = t !== undefined;
                (n = n[e]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (s && un(n).is(t)) break;
                    a.push(n)
                }
            return a
        },
        xn = function(n, e) {
            for (var t = []; n; n = n.nextSibling) 1 === n.nodeType && n !== e && t.push(n);
            return t
        },
        kn = un.expr.match.needsContext,
        Dn = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        jn = /^.[^:#\[\.,]*$/;
    un.filter = function(n, e, t) {
        var a = e[0];
        return t && (n = ":not(" + n + ")"), 1 === e.length && 1 === a.nodeType ? un.find.matchesSelector(a, n) ? [a] : [] : un.find.matches(n, un.grep(e, function(n) {
            return 1 === n.nodeType
        }))
    }, un.fn.extend({
        find: function(n) {
            var e, t = [],
                a = this,
                s = a.length;
            if ("string" != typeof n) return this.pushStack(un(n).filter(function() {
                for (e = 0; e < s; e++)
                    if (un.contains(a[e], this)) return !0
            }));
            for (e = 0; e < s; e++) un.find(n, a[e], t);
            return t = this.pushStack(s > 1 ? un.unique(t) : t), t.selector = this.selector ? this.selector + " " + n : n, t
        },
        filter: function(n) {
            return this.pushStack(a(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(a(this, n || [], !0))
        },
        is: function(n) {
            return !!a(this, "string" == typeof n && kn.test(n) ? un(n) : n || [], !1).length
        }
    });
    var Bn, _n = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (un.fn.init = function(n, e, t) {
        var a, s;
        if (!n) return this;
        if (t = t || Bn, "string" == typeof n) {
            if (!(a = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : _n.exec(n)) || !a[1] && e) return !e || e.jquery ? (e || t).find(n) : this.constructor(e).find(n);
            if (a[1]) {
                if (e = e instanceof un ? e[0] : e, un.merge(this, un.parseHTML(a[1], e && e.nodeType ? e.ownerDocument || e : an, !0)), Dn.test(a[1]) && un.isPlainObject(e))
                    for (a in e) un.isFunction(this[a]) ? this[a](e[a]) : this.attr(a, e[a]);
                return this
            }
            if ((s = an.getElementById(a[2])) && s.parentNode) {
                if (s.id !== a[2]) return Bn.find(n);
                this.length = 1, this[0] = s
            }
            return this.context = an, this.selector = n, this
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : un.isFunction(n) ? "undefined" != typeof t.ready ? t.ready(n) : n(un) : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), un.makeArray(n, this))
    }).prototype = un.fn, Bn = un(an);
    var Fn = /^(?:parents|prev(?:Until|All))/,
        Sn = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    un.fn.extend({
        has: function(n) {
            var e, t = un(n, this),
                a = t.length;
            return this.filter(function() {
                for (e = 0; e < a; e++)
                    if (un.contains(this, t[e])) return !0
            })
        },
        closest: function(n, e) {
            for (var t, a = 0, s = this.length, i = [], o = kn.test(n) || "string" != typeof n ? un(n, e || this.context) : 0; a < s; a++)
                for (t = this[a]; t && t !== e; t = t.parentNode)
                    if (t.nodeType < 11 && (o ? o.index(t) > -1 : 1 === t.nodeType && un.find.matchesSelector(t, n))) {
                        i.push(t);
                        break
                    }
            return this.pushStack(i.length > 1 ? un.uniqueSort(i) : i)
        },
        index: function(n) {
            return n ? "string" == typeof n ? un.inArray(this[0], un(n)) : un.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, e) {
            return this.pushStack(un.uniqueSort(un.merge(this.get(), un(n, e))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    }), un.each({
        parent: function(n) {
            var e = n.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(n) {
            return yn(n, "parentNode")
        },
        parentsUntil: function(n, e, t) {
            return yn(n, "parentNode", t)
        },
        next: function(n) {
            return s(n, "nextSibling")
        },
        prev: function(n) {
            return s(n, "previousSibling")
        },
        nextAll: function(n) {
            return yn(n, "nextSibling")
        },
        prevAll: function(n) {
            return yn(n, "previousSibling")
        },
        nextUntil: function(n, e, t) {
            return yn(n, "nextSibling", t)
        },
        prevUntil: function(n, e, t) {
            return yn(n, "previousSibling", t)
        },
        siblings: function(n) {
            return xn((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return xn(n.firstChild)
        },
        contents: function(n) {
            return un.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : un.merge([], n.childNodes)
        }
    }, function(n, e) {
        un.fn[n] = function(t, a) {
            var s = un.map(this, e, t);
            return "Until" !== n.slice(-5) && (a = t), a && "string" == typeof a && (s = un.filter(a, s)), this.length > 1 && (Sn[n] || (s = un.uniqueSort(s)), Fn.test(n) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var Cn = /\S+/g;
    un.Callbacks = function(n) {
        n = "string" == typeof n ? i(n) : un.extend({}, n);
        var e, t, a, s, o = [],
            l = [],
            r = -1,
            c = function() {
                for (s = n.once, a = e = !0; l.length; r = -1)
                    for (t = l.shift(); ++r < o.length;) !1 === o[r].apply(t[0], t[1]) && n.stopOnFalse && (r = o.length, t = !1);
                n.memory || (t = !1), e = !1, s && (o = t ? [] : "")
            },
            d = {
                add: function() {
                    return o && (t && !e && (r = o.length - 1, l.push(t)), function e(t) {
                        un.each(t, function(t, a) {
                            un.isFunction(a) ? n.unique && d.has(a) || o.push(a) : a && a.length && "string" !== un.type(a) && e(a)
                        })
                    }(arguments), t && !e && c()), this
                },
                remove: function() {
                    return un.each(arguments, function(n, e) {
                        for (var t;
                            (t = un.inArray(e, o, t)) > -1;) o.splice(t, 1), t <= r && r--
                    }), this
                },
                has: function(n) {
                    return n ? un.inArray(n, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return s = l = [], o = t = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return s = !0, t || d.disable(), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(n, t) {
                    return s || (t = t || [], t = [n, t.slice ? t.slice() : t], l.push(t), e || c()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return d
    }, un.extend({
        Deferred: function(n) {
            var e = [
                    ["resolve", "done", un.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", un.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", un.Callbacks("memory")]
                ],
                t = "pending",
                a = {
                    state: function() {
                        return t
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return un.Deferred(function(t) {
                            un.each(e, function(e, i) {
                                var o = un.isFunction(n[e]) && n[e];
                                s[i[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && un.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this === a ? t.promise() : this, o ? [n] : arguments)
                                })
                            }), n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? un.extend(n, a) : a
                    }
                },
                s = {};
            return a.pipe = a.then, un.each(e, function(n, i) {
                var o = i[2],
                    l = i[3];
                a[i[1]] = o.add, l && o.add(function() {
                    t = l
                }, e[1 ^ n][2].disable, e[2][2].lock), s[i[0]] = function() {
                    return s[i[0] + "With"](this === s ? a : this, arguments), this
                }, s[i[0] + "With"] = o.fireWith
            }), a.promise(s), n && n.call(s, s), s
        },
        when: function(n) {
            var e, t, a, s = 0,
                i = sn.call(arguments),
                o = i.length,
                l = 1 !== o || n && un.isFunction(n.promise) ? o : 0,
                r = 1 === l ? n : un.Deferred(),
                c = function(n, t, a) {
                    return function(s) {
                        t[n] = this, a[n] = arguments.length > 1 ? sn.call(arguments) : s, a === e ? r.notifyWith(t, a) : --l || r.resolveWith(t, a)
                    }
                };
            if (o > 1)
                for (e = new Array(o), t = new Array(o), a = new Array(o); s < o; s++) i[s] && un.isFunction(i[s].promise) ? i[s].promise().progress(c(s, t, e)).done(c(s, a, i)).fail(r.reject) : --l;
            return l || r.resolveWith(a, i), r.promise()
        }
    });
    var Tn;
    un.fn.ready = function(n) {
        return un.ready.promise().done(n), this
    }, un.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? un.readyWait++ : un.ready(!0)
        },
        ready: function(n) {
            (!0 === n ? --un.readyWait : un.isReady) || (un.isReady = !0, !0 !== n && --un.readyWait > 0 || (Tn.resolveWith(an, [un]), un.fn.triggerHandler && (un(an).triggerHandler("ready"), un(an).off("ready"))))
        }
    }), un.ready.promise = function(e) {
        if (!Tn)
            if (Tn = un.Deferred(), "complete" === an.readyState || "loading" !== an.readyState && !an.documentElement.doScroll) n.setTimeout(un.ready);
            else if (an.addEventListener) an.addEventListener("DOMContentLoaded", l), n.addEventListener("load", l);
        else {
            an.attachEvent("onreadystatechange", l), n.attachEvent("onload", l);
            var t = !1;
            try {
                t = null == n.frameElement && an.documentElement
            } catch (n) {}
            t && t.doScroll && function e() {
                if (!un.isReady) {
                    try {
                        t.doScroll("left")
                    } catch (t) {
                        return n.setTimeout(e, 50)
                    }
                    o(), un.ready()
                }
            }()
        }
        return Tn.promise(e)
    }, un.ready.promise();
    var En;
    for (En in un(pn)) break;
    pn.ownFirst = "0" === En, pn.inlineBlockNeedsLayout = !1, un(function() {
            var n, e, t, a;
            (t = an.getElementsByTagName("body")[0]) && t.style && (e = an.createElement("div"), a = an.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(a).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", pn.inlineBlockNeedsLayout = n = 3 === e.offsetWidth, n && (t.style.zoom = 1)), t.removeChild(a))
        }),
        function() {
            var n = an.createElement("div");
            pn.deleteExpando = !0;
            try {
                delete n.test
            } catch (n) {
                pn.deleteExpando = !1
            }
            n = null
        }();
    var An = function(n) {
            var e = un.noData[(n.nodeName + " ").toLowerCase()],
                t = +n.nodeType || 1;
            return (1 === t || 9 === t) && (!e || !0 !== e && n.getAttribute("classid") === e)
        },
        Rn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ln = /([A-Z])/g;
    un.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(n) {
                return !!(n = n.nodeType ? un.cache[n[un.expando]] : n[un.expando]) && !c(n)
            },
            data: function(n, e, t) {
                return d(n, e, t)
            },
            removeData: function(n, e) {
                return m(n, e)
            },
            _data: function(n, e, t) {
                return d(n, e, t, !0)
            },
            _removeData: function(n, e) {
                return m(n, e, !0)
            }
        }), un.fn.extend({
            data: function(n, e) {
                var t, a, s, i = this[0],
                    o = i && i.attributes;
                if (n === undefined) {
                    if (this.length && (s = un.data(i), 1 === i.nodeType && !un._data(i, "parsedAttrs"))) {
                        for (t = o.length; t--;) o[t] && (a = o[t].name, 0 === a.indexOf("data-") && (a = un.camelCase(a.slice(5)), r(i, a, s[a])));
                        un._data(i, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof n ? this.each(function() {
                    un.data(this, n)
                }) : arguments.length > 1 ? this.each(function() {
                    un.data(this, n, e)
                }) : i ? r(i, n, un.data(i, n)) : undefined
            },
            removeData: function(n) {
                return this.each(function() {
                    un.removeData(this, n)
                })
            }
        }), un.extend({
            queue: function(n, e, t) {
                var a;
                if (n) return e = (e || "fx") + "queue", a = un._data(n, e), t && (!a || un.isArray(t) ? a = un._data(n, e, un.makeArray(t)) : a.push(t)), a || []
            },
            dequeue: function(n, e) {
                e = e || "fx";
                var t = un.queue(n, e),
                    a = t.length,
                    s = t.shift(),
                    i = un._queueHooks(n, e),
                    o = function() {
                        un.dequeue(n, e)
                    };
                "inprogress" === s && (s = t.shift(), a--), s && ("fx" === e && t.unshift("inprogress"), delete i.stop, s.call(n, o, i)), !a && i && i.empty.fire()
            },
            _queueHooks: function(n, e) {
                var t = e + "queueHooks";
                return un._data(n, t) || un._data(n, t, {
                    empty: un.Callbacks("once memory").add(function() {
                        un._removeData(n, e + "queue"), un._removeData(n, t)
                    })
                })
            }
        }), un.fn.extend({
            queue: function(n, e) {
                var t = 2;
                return "string" != typeof n && (e = n, n = "fx", t--), arguments.length < t ? un.queue(this[0], n) : e === undefined ? this : this.each(function() {
                    var t = un.queue(this, n, e);
                    un._queueHooks(this, n), "fx" === n && "inprogress" !== t[0] && un.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    un.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, e) {
                var t, a = 1,
                    s = un.Deferred(),
                    i = this,
                    o = this.length,
                    l = function() {
                        --a || s.resolveWith(i, [i])
                    };
                for ("string" != typeof n && (e = n, n = undefined), n = n || "fx"; o--;)(t = un._data(i[o], n + "queueHooks")) && t.empty && (a++, t.empty.add(l));
                return l(), s.promise(e)
            }
        }),
        function() {
            var n;
            pn.shrinkWrapBlocks = function() {
                if (null != n) return n;
                n = !1;
                var e, t, a;
                return (t = an.getElementsByTagName("body")[0]) && t.style ? (e = an.createElement("div"), a = an.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(a).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(an.createElement("div")).style.width = "5px", n = 3 !== e.offsetWidth), t.removeChild(a), n) : void 0
            }
        }();
    var Pn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Nn = new RegExp("^(?:([+-])=|)(" + Pn + ")([a-z%]*)$", "i"),
        Hn = ["Top", "Right", "Bottom", "Left"],
        In = function(n, e) {
            return n = e || n, "none" === un.css(n, "display") || !un.contains(n.ownerDocument, n)
        },
        Mn = function(n, e, t, a, s, i, o) {
            var l = 0,
                r = n.length,
                c = null == t;
            if ("object" === un.type(t)) {
                s = !0;
                for (l in t) Mn(n, e, l, t[l], !0, i, o)
            } else if (a !== undefined && (s = !0, un.isFunction(a) || (o = !0), c && (o ? (e.call(n, a), e = null) : (c = e, e = function(n, e, t) {
                    return c.call(un(n), t)
                })), e))
                for (; l < r; l++) e(n[l], t, o ? a : a.call(n[l], l, e(n[l], t)));
            return s ? n : c ? e.call(n) : r ? e(n[0], t) : i
        },
        On = /^(?:checkbox|radio)$/i,
        qn = /<([\w:-]+)/,
        Vn = /^$|\/(?:java|ecma)script/i,
        zn = /^\s+/,
        Wn = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var n = an.createElement("div"),
            e = an.createDocumentFragment(),
            t = an.createElement("input");
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", pn.leadingWhitespace = 3 === n.firstChild.nodeType, pn.tbody = !n.getElementsByTagName("tbody").length, pn.htmlSerialize = !!n.getElementsByTagName("link").length, pn.html5Clone = "<:nav></:nav>" !== an.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, e.appendChild(t), pn.appendChecked = t.checked, n.innerHTML = "<textarea>x</textarea>", pn.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, e.appendChild(n), t = an.createElement("input"), t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), n.appendChild(t), pn.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, pn.noCloneEvent = !!n.addEventListener, n[un.expando] = 1, pn.attributes = !n.getAttribute(un.expando)
    }();
    var $n = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: pn.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    $n.optgroup = $n.option, $n.tbody = $n.tfoot = $n.colgroup = $n.caption = $n.thead, $n.th = $n.td;
    var Un = /<|&#?\w+;/,
        Xn = /<tbody/i;
    ! function() {
        var e, t, a = an.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e, (pn[e] = t in n) || (a.setAttribute(t, "t"), pn[e] = !1 === a.attributes[t].expando);
        a = null
    }();
    var Jn = /^(?:input|select|textarea)$/i,
        Zn = /^key/,
        Gn = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Yn = /^(?:focusinfocus|focusoutblur)$/,
        Qn = /^([^.]*)(?:\.(.+)|)/;
    un.event = {
        global: {},
        add: function(n, e, t, a, s) {
            var i, o, l, r, c, d, m, p, h, u, g, f = un._data(n);
            if (f) {
                for (t.handler && (r = t, t = r.handler, s = r.selector), t.guid || (t.guid = un.guid++), (o = f.events) || (o = f.events = {}), (d = f.handle) || (d = f.handle = function(n) {
                        return void 0 === un || n && un.event.triggered === n.type ? undefined : un.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = n), e = (e || "").match(Cn) || [""], l = e.length; l--;) i = Qn.exec(e[l]) || [], h = g = i[1], u = (i[2] || "").split(".").sort(), h && (c = un.event.special[h] || {}, h = (s ? c.delegateType : c.bindType) || h, c = un.event.special[h] || {}, m = un.extend({
                    type: h,
                    origType: g,
                    data: a,
                    handler: t,
                    guid: t.guid,
                    selector: s,
                    needsContext: s && un.expr.match.needsContext.test(s),
                    namespace: u.join(".")
                }, r), (p = o[h]) || (p = o[h] = [], p.delegateCount = 0, c.setup && !1 !== c.setup.call(n, a, u, d) || (n.addEventListener ? n.addEventListener(h, d, !1) : n.attachEvent && n.attachEvent("on" + h, d))), c.add && (c.add.call(n, m), m.handler.guid || (m.handler.guid = t.guid)), s ? p.splice(p.delegateCount++, 0, m) : p.push(m), un.event.global[h] = !0);
                n = null
            }
        },
        remove: function(n, e, t, a, s) {
            var i, o, l, r, c, d, m, p, h, u, g, f = un.hasData(n) && un._data(n);
            if (f && (d = f.events)) {
                for (e = (e || "").match(Cn) || [""], c = e.length; c--;)
                    if (l = Qn.exec(e[c]) || [], h = g = l[1], u = (l[2] || "").split(".").sort(), h) {
                        for (m = un.event.special[h] || {}, h = (a ? m.delegateType : m.bindType) || h, p = d[h] || [], l = l[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = i = p.length; i--;) o = p[i], !s && g !== o.origType || t && t.guid !== o.guid || l && !l.test(o.namespace) || a && a !== o.selector && ("**" !== a || !o.selector) || (p.splice(i, 1), o.selector && p.delegateCount--, m.remove && m.remove.call(n, o));
                        r && !p.length && (m.teardown && !1 !== m.teardown.call(n, u, f.handle) || un.removeEvent(n, h, f.handle), delete d[h])
                    } else
                        for (h in d) un.event.remove(n, h + e[c], t, a, !0);
                un.isEmptyObject(d) && (delete f.handle, un._removeData(n, "events"))
            }
        },
        trigger: function(e, t, a, s) {
            var i, o, l, r, c, d, m, p = [a || an],
                h = mn.call(e, "type") ? e.type : e,
                u = mn.call(e, "namespace") ? e.namespace.split(".") : [];
            if (l = d = a = a || an, 3 !== a.nodeType && 8 !== a.nodeType && !Yn.test(h + un.event.triggered) && (h.indexOf(".") > -1 && (u = h.split("."), h = u.shift(), u.sort()), o = h.indexOf(":") < 0 && "on" + h, e = e[un.expando] ? e : new un.Event(h, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = u.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = a), t = null == t ? [e] : un.makeArray(t, [e]), c = un.event.special[h] || {}, s || !c.trigger || !1 !== c.trigger.apply(a, t))) {
                if (!s && !c.noBubble && !un.isWindow(a)) {
                    for (r = c.delegateType || h, Yn.test(r + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;
                    d === (a.ownerDocument || an) && p.push(d.defaultView || d.parentWindow || n)
                }
                for (m = 0;
                    (l = p[m++]) && !e.isPropagationStopped();) e.type = m > 1 ? r : c.bindType || h, i = (un._data(l, "events") || {})[e.type] && un._data(l, "handle"), i && i.apply(l, t), (i = o && l[o]) && i.apply && An(l) && (e.result = i.apply(l, t), !1 === e.result && e.preventDefault());
                if (e.type = h, !s && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), t)) && An(a) && o && a[h] && !un.isWindow(a)) {
                    d = a[o], d && (a[o] = null), un.event.triggered = h;
                    try {
                        a[h]()
                    } catch (n) {}
                    un.event.triggered = undefined, d && (a[o] = d)
                }
                return e.result
            }
        },
        dispatch: function(n) {
            n = un.event.fix(n);
            var e, t, a, s, i, o = [],
                l = sn.call(arguments),
                r = (un._data(this, "events") || {})[n.type] || [],
                c = un.event.special[n.type] || {};
            if (l[0] = n, n.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, n)) {
                for (o = un.event.handlers.call(this, n, r), e = 0;
                    (s = o[e++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = s.elem, t = 0;
                        (i = s.handlers[t++]) && !n.isImmediatePropagationStopped();) n.rnamespace && !n.rnamespace.test(i.namespace) || (n.handleObj = i, n.data = i.data, (a = ((un.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, l)) !== undefined && !1 === (n.result = a) && (n.preventDefault(), n.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, e) {
            var t, a, s, i, o = [],
                l = e.delegateCount,
                r = n.target;
            if (l && r.nodeType && ("click" !== n.type || isNaN(n.button) || n.button < 1))
                for (; r != this; r = r.parentNode || this)
                    if (1 === r.nodeType && (!0 !== r.disabled || "click" !== n.type)) {
                        for (a = [], t = 0; t < l; t++) i = e[t], s = i.selector + " ", a[s] === undefined && (a[s] = i.needsContext ? un(s, this).index(r) > -1 : un.find(s, this, null, [r]).length), a[s] && a.push(i);
                        a.length && o.push({
                            elem: r,
                            handlers: a
                        })
                    }
            return l < e.length && o.push({
                elem: this,
                handlers: e.slice(l)
            }), o
        },
        fix: function(n) {
            if (n[un.expando]) return n;
            var e, t, a, s = n.type,
                i = n,
                o = this.fixHooks[s];
            for (o || (this.fixHooks[s] = o = Gn.test(s) ? this.mouseHooks : Zn.test(s) ? this.keyHooks : {}), a = o.props ? this.props.concat(o.props) : this.props, n = new un.Event(i), e = a.length; e--;) t = a[e], n[t] = i[t];
            return n.target || (n.target = i.srcElement || an), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, o.filter ? o.filter(n, i) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, e) {
                return null == n.which && (n.which = null != e.charCode ? e.charCode : e.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, e) {
                var t, a, s, i = e.button,
                    o = e.fromElement;
                return null == n.pageX && null != e.clientX && (a = n.target.ownerDocument || an, s = a.documentElement, t = a.body, n.pageX = e.clientX + (s && s.scrollLeft || t && t.scrollLeft || 0) - (s && s.clientLeft || t && t.clientLeft || 0), n.pageY = e.clientY + (s && s.scrollTop || t && t.scrollTop || 0) - (s && s.clientTop || t && t.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? e.toElement : o), n.which || i === undefined || (n.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== y() && this.focus) try {
                        return this.focus(), !1
                    } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === y() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (un.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(n) {
                    return un.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, e, t) {
            var a = un.extend(new un.Event, t, {
                type: n,
                isSimulated: !0
            });
            un.event.trigger(a, null, e), a.isDefaultPrevented() && t.preventDefault()
        }
    }, un.removeEvent = an.removeEventListener ? function(n, e, t) {
        n.removeEventListener && n.removeEventListener(e, t)
    } : function(n, e, t) {
        var a = "on" + e;
        n.detachEvent && ("undefined" == typeof n[a] && (n[a] = null), n.detachEvent(a, t))
    }, un.Event = function(n, e) {
        if (!(this instanceof un.Event)) return new un.Event(n, e);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && !1 === n.returnValue ? b : w) : this.type = n, e && un.extend(this, e), this.timeStamp = n && n.timeStamp || un.now(), this[un.expando] = !0
    }, un.Event.prototype = {
        constructor: un.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = b, n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = b, n && !this.isSimulated && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = b, n && n.stopImmediatePropagation && n.stopImmediatePropagation(), this.stopPropagation()
        }
    }, un.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, e) {
        un.event.special[n] = {
            delegateType: e,
            bindType: e,
            handle: function(n) {
                var t, a = this,
                    s = n.relatedTarget,
                    i = n.handleObj;
                return s && (s === a || un.contains(a, s)) || (n.type = i.origType, t = i.handler.apply(this, arguments), n.type = e), t
            }
        }
    }), pn.submit || (un.event.special.submit = {
        setup: function() {
            if (un.nodeName(this, "form")) return !1;
            un.event.add(this, "click._submit keypress._submit", function(n) {
                var e = n.target,
                    t = un.nodeName(e, "input") || un.nodeName(e, "button") ? un.prop(e, "form") : undefined;
                t && !un._data(t, "submit") && (un.event.add(t, "submit._submit", function(n) {
                    n._submitBubble = !0
                }), un._data(t, "submit", !0))
            })
        },
        postDispatch: function(n) {
            n._submitBubble && (delete n._submitBubble, this.parentNode && !n.isTrigger && un.event.simulate("submit", this.parentNode, n))
        },
        teardown: function() {
            if (un.nodeName(this, "form")) return !1;
            un.event.remove(this, "._submit")
        }
    }), pn.change || (un.event.special.change = {
        setup: function() {
            if (Jn.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (un.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._justChanged = !0)
            }), un.event.add(this, "click._change", function(n) {
                this._justChanged && !n.isTrigger && (this._justChanged = !1), un.event.simulate("change", this, n)
            })), !1;
            un.event.add(this, "beforeactivate._change", function(n) {
                var e = n.target;
                Jn.test(e.nodeName) && !un._data(e, "change") && (un.event.add(e, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || un.event.simulate("change", this.parentNode, n)
                }), un._data(e, "change", !0))
            })
        },
        handle: function(n) {
            var e = n.target;
            if (this !== e || n.isSimulated || n.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return un.event.remove(this, "._change"), !Jn.test(this.nodeName)
        }
    }), pn.focusin || un.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, e) {
        var t = function(n) {
            un.event.simulate(e, n.target, un.event.fix(n))
        };
        un.event.special[e] = {
            setup: function() {
                var a = this.ownerDocument || this,
                    s = un._data(a, e);
                s || a.addEventListener(n, t, !0), un._data(a, e, (s || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this,
                    s = un._data(a, e) - 1;
                s ? un._data(a, e, s) : (a.removeEventListener(n, t, !0), un._removeData(a, e))
            }
        }
    }), un.fn.extend({
        on: function(n, e, t, a) {
            return x(this, n, e, t, a)
        },
        one: function(n, e, t, a) {
            return x(this, n, e, t, a, 1)
        },
        off: function(n, e, t) {
            var a, s;
            if (n && n.preventDefault && n.handleObj) return a = n.handleObj, un(n.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof n) {
                for (s in n) this.off(s, e, n[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (t = e, e = undefined), !1 === t && (t = w), this.each(function() {
                un.event.remove(this, n, t, e)
            })
        },
        trigger: function(n, e) {
            return this.each(function() {
                un.event.trigger(n, e, this)
            })
        },
        triggerHandler: function(n, e) {
            var t = this[0];
            if (t) return un.event.trigger(n, e, t, !0)
        }
    });
    var Kn = / jQuery\d+="(?:null|\d+)"/g,
        ne = new RegExp("<(?:" + Wn + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        te = /<script|<style|<link/i,
        ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^true\/(.*)/,
        ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oe = h(an),
        le = oe.appendChild(an.createElement("div"));
    un.extend({
        htmlPrefilter: function(n) {
            return n.replace(ee, "<$1></$2>")
        },
        clone: function(n, e, t) {
            var a, s, i, o, l, r = un.contains(n.ownerDocument, n);
            if (pn.html5Clone || un.isXMLDoc(n) || !ne.test("<" + n.nodeName + ">") ? i = n.cloneNode(!0) : (le.innerHTML = n.outerHTML, le.removeChild(i = le.firstChild)), !(pn.noCloneEvent && pn.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || un.isXMLDoc(n)))
                for (a = u(i), l = u(n), o = 0; null != (s = l[o]); ++o) a[o] && _(s, a[o]);
            if (e)
                if (t)
                    for (l = l || u(n), a = a || u(i), o = 0; null != (s = l[o]); o++) B(s, a[o]);
                else B(n, i);
            return a = u(i, "script"), a.length > 0 && g(a, !r && u(n, "script")), a = l = s = null, i
        },
        cleanData: function(n, e) {
            for (var t, a, s, i, o = 0, l = un.expando, r = un.cache, c = pn.attributes, d = un.event.special; null != (t = n[o]); o++)
                if ((e || An(t)) && (s = t[l], i = s && r[s])) {
                    if (i.events)
                        for (a in i.events) d[a] ? un.event.remove(t, a) : un.removeEvent(t, a, i.handle);
                    r[s] && (delete r[s], c || "undefined" == typeof t.removeAttribute ? t[l] = undefined : t.removeAttribute(l), tn.push(s))
                }
        }
    }), un.fn.extend({
        domManip: F,
        detach: function(n) {
            return S(this, n, !0)
        },
        remove: function(n) {
            return S(this, n)
        },
        text: function(n) {
            return Mn(this, function(n) {
                return n === undefined ? un.text(this) : this.empty().append((this[0] && this[0].ownerDocument || an).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return F(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    k(this, n).appendChild(n)
                }
            })
        },
        prepend: function() {
            return F(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = k(this, n);
                    e.insertBefore(n, e.firstChild)
                }
            })
        },
        before: function() {
            return F(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return F(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, e = 0; null != (n = this[e]); e++) {
                for (1 === n.nodeType && un.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && un.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, e) {
            return n = null != n && n, e = null == e ? n : e, this.map(function() {
                return un.clone(this, n, e)
            })
        },
        html: function(n) {
            return Mn(this, function(n) {
                var e = this[0] || {},
                    t = 0,
                    a = this.length;
                if (n === undefined) return 1 === e.nodeType ? e.innerHTML.replace(Kn, "") : undefined;
                if ("string" == typeof n && !te.test(n) && (pn.htmlSerialize || !ne.test(n)) && (pn.leadingWhitespace || !zn.test(n)) && !$n[(qn.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = un.htmlPrefilter(n);
                    try {
                        for (; t < a; t++) e = this[t] || {}, 1 === e.nodeType && (un.cleanData(u(e, !1)), e.innerHTML = n);
                        e = 0
                    } catch (n) {}
                }
                e && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return F(this, arguments, function(e) {
                var t = this.parentNode;
                un.inArray(this, n) < 0 && (un.cleanData(u(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), un.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, e) {
        un.fn[n] = function(n) {
            for (var t, a = 0, s = [], i = un(n), o = i.length - 1; a <= o; a++) t = a === o ? this : this.clone(!0), un(i[a])[e](t), ln.apply(s, t.get());
            return this.pushStack(s)
        }
    });
    var re, ce = {
            HTML: "block",
            BODY: "block"
        },
        de = /^margin/,
        me = new RegExp("^(" + Pn + ")(?!px)[a-z%]+$", "i"),
        pe = function(n, e, t, a) {
            var s, i, o = {};
            for (i in e) o[i] = n.style[i], n.style[i] = e[i];
            s = t.apply(n, a || []);
            for (i in e) n.style[i] = o[i];
            return s
        },
        he = an.documentElement;
    ! function() {
        function e() {
            var e, d, m = an.documentElement;
            m.appendChild(r), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = s = l = !1, a = o = !0, n.getComputedStyle && (d = n.getComputedStyle(c), t = "1%" !== (d || {}).top, l = "2px" === (d || {}).marginLeft, s = "4px" === (d || {
                width: "4px"
            }).width, c.style.marginRight = "50%", a = "4px" === (d || {
                marginRight: "4px"
            }).marginRight, e = c.appendChild(an.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", o = !parseFloat((n.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", i = 0 === c.getClientRects().length, i && (c.style.display = "",
                c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (i = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", i = 0 === e[0].offsetHeight)), m.removeChild(r)
        }
        var t, a, s, i, o, l, r = an.createElement("div"),
            c = an.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", pn.opacity = "0.5" === c.style.opacity, pn.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", pn.clearCloneStyle = "content-box" === c.style.backgroundClip, r = an.createElement("div"), r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", r.appendChild(c), pn.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, un.extend(pn, {
            reliableHiddenOffsets: function() {
                return null == t && e(), i
            },
            boxSizingReliable: function() {
                return null == t && e(), s
            },
            pixelMarginRight: function() {
                return null == t && e(), a
            },
            pixelPosition: function() {
                return null == t && e(), t
            },
            reliableMarginRight: function() {
                return null == t && e(), o
            },
            reliableMarginLeft: function() {
                return null == t && e(), l
            }
        }))
    }();
    var ue, ge, fe = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (ue = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
    }, ge = function(n, e, t) {
        var a, s, i, o, l = n.style;
        return t = t || ue(n), o = t ? t.getPropertyValue(e) || t[e] : undefined, "" !== o && o !== undefined || un.contains(n.ownerDocument, n) || (o = un.style(n, e)), t && !pn.pixelMarginRight() && me.test(o) && de.test(e) && (a = l.width, s = l.minWidth, i = l.maxWidth, l.minWidth = l.maxWidth = l.width = o, o = t.width, l.width = a, l.minWidth = s, l.maxWidth = i), o === undefined ? o : o + ""
    }) : he.currentStyle && (ue = function(n) {
        return n.currentStyle
    }, ge = function(n, e, t) {
        var a, s, i, o, l = n.style;
        return t = t || ue(n), o = t ? t[e] : undefined, null == o && l && l[e] && (o = l[e]), me.test(o) && !fe.test(e) && (a = l.left, s = n.runtimeStyle, i = s && s.left, i && (s.left = n.currentStyle.left), l.left = "fontSize" === e ? "1em" : o, o = l.pixelLeft + "px", l.left = a, i && (s.left = i)), o === undefined ? o : o + "" || "auto"
    });
    var ve = /alpha\([^)]*\)/i,
        be = /opacity\s*=\s*([^)]*)/i,
        we = /^(none|table(?!-c[ea]).+)/,
        ye = new RegExp("^(" + Pn + ")(.*)$", "i"),
        xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ke = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        De = ["Webkit", "O", "Moz", "ms"],
        je = an.createElement("div").style;
    un.extend({
        cssHooks: {
            opacity: {
                get: function(n, e) {
                    if (e) {
                        var t = ge(n, "opacity");
                        return "" === t ? "1" : t
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": pn.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, e, t, a) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var s, i, o, l = un.camelCase(e),
                    r = n.style;
                if (e = un.cssProps[l] || (un.cssProps[l] = A(l) || l), o = un.cssHooks[e] || un.cssHooks[l], t === undefined) return o && "get" in o && (s = o.get(n, !1, a)) !== undefined ? s : r[e];
                if (i = typeof t, "string" === i && (s = Nn.exec(t)) && s[1] && (t = p(n, e, s), i = "number"), null != t && t === t && ("number" === i && (t += s && s[3] || (un.cssNumber[l] ? "" : "px")), pn.clearCloneStyle || "" !== t || 0 !== e.indexOf("background") || (r[e] = "inherit"), !(o && "set" in o && (t = o.set(n, t, a)) === undefined))) try {
                    r[e] = t
                } catch (n) {}
            }
        },
        css: function(n, e, t, a) {
            var s, i, o, l = un.camelCase(e);
            return e = un.cssProps[l] || (un.cssProps[l] = A(l) || l), o = un.cssHooks[e] || un.cssHooks[l], o && "get" in o && (i = o.get(n, !0, t)), i === undefined && (i = ge(n, e, a)), "normal" === i && e in ke && (i = ke[e]), "" === t || t ? (s = parseFloat(i), !0 === t || isFinite(s) ? s || 0 : i) : i
        }
    }), un.each(["height", "width"], function(n, e) {
        un.cssHooks[e] = {
            get: function(n, t, a) {
                if (t) return we.test(un.css(n, "display")) && 0 === n.offsetWidth ? pe(n, xe, function() {
                    return N(n, e, a)
                }) : N(n, e, a)
            },
            set: function(n, t, a) {
                var s = a && ue(n);
                return L(n, t, a ? P(n, e, a, pn.boxSizing && "border-box" === un.css(n, "boxSizing", !1, s), s) : 0)
            }
        }
    }), pn.opacity || (un.cssHooks.opacity = {
        get: function(n, e) {
            return be.test((e && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(n, e) {
            var t = n.style,
                a = n.currentStyle,
                s = un.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                i = a && a.filter || t.filter || "";
            t.zoom = 1, (e >= 1 || "" === e) && "" === un.trim(i.replace(ve, "")) && t.removeAttribute && (t.removeAttribute("filter"), "" === e || a && !a.filter) || (t.filter = ve.test(i) ? i.replace(ve, s) : i + " " + s)
        }
    }), un.cssHooks.marginRight = E(pn.reliableMarginRight, function(n, e) {
        if (e) return pe(n, {
            display: "inline-block"
        }, ge, [n, "marginRight"])
    }), un.cssHooks.marginLeft = E(pn.reliableMarginLeft, function(n, e) {
        if (e) return (parseFloat(ge(n, "marginLeft")) || (un.contains(n.ownerDocument, n) ? n.getBoundingClientRect().left - pe(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        }) : 0)) + "px"
    }), un.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, e) {
        un.cssHooks[n + e] = {
            expand: function(t) {
                for (var a = 0, s = {}, i = "string" == typeof t ? t.split(" ") : [t]; a < 4; a++) s[n + Hn[a] + e] = i[a] || i[a - 2] || i[0];
                return s
            }
        }, de.test(n) || (un.cssHooks[n + e].set = L)
    }), un.fn.extend({
        css: function(n, e) {
            return Mn(this, function(n, e, t) {
                var a, s, i = {},
                    o = 0;
                if (un.isArray(e)) {
                    for (a = ue(n), s = e.length; o < s; o++) i[e[o]] = un.css(n, e[o], !1, a);
                    return i
                }
                return t !== undefined ? un.style(n, e, t) : un.css(n, e)
            }, n, e, arguments.length > 1)
        },
        show: function() {
            return R(this, !0)
        },
        hide: function() {
            return R(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                In(this) ? un(this).show() : un(this).hide()
            })
        }
    }), un.Tween = H, H.prototype = {
        constructor: H,
        init: function(n, e, t, a, s, i) {
            this.elem = n, this.prop = t, this.easing = s || un.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = a, this.unit = i || (un.cssNumber[t] ? "" : "px")
        },
        cur: function() {
            var n = H.propHooks[this.prop];
            return n && n.get ? n.get(this) : H.propHooks._default.get(this)
        },
        run: function(n) {
            var e, t = H.propHooks[this.prop];
            return this.options.duration ? this.pos = e = un.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : this.pos = e = n, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(n) {
                var e;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (e = un.css(n.elem, n.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(n) {
                un.fx.step[n.prop] ? un.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[un.cssProps[n.prop]] && !un.cssHooks[n.prop] ? n.elem[n.prop] = n.now : un.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    }, un.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    }, un.fx = H.prototype.init, un.fx.step = {};
    var Be, _e, Fe = /^(?:toggle|show|hide)$/,
        Se = /queueHooks$/;
    un.Animation = un.extend(z, {
            tweeners: {
                "*": [function(n, e) {
                    var t = this.createTween(n, e);
                    return p(t.elem, n, Nn.exec(e), t), t
                }]
            },
            tweener: function(n, e) {
                un.isFunction(n) ? (e = n, n = ["*"]) : n = n.match(Cn);
                for (var t, a = 0, s = n.length; a < s; a++) t = n[a], z.tweeners[t] = z.tweeners[t] || [], z.tweeners[t].unshift(e)
            },
            prefilters: [q],
            prefilter: function(n, e) {
                e ? z.prefilters.unshift(n) : z.prefilters.push(n)
            }
        }), un.speed = function(n, e, t) {
            var a = n && "object" == typeof n ? un.extend({}, n) : {
                complete: t || !t && e || un.isFunction(n) && n,
                duration: n,
                easing: t && e || e && !un.isFunction(e) && e
            };
            return a.duration = un.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in un.fx.speeds ? un.fx.speeds[a.duration] : un.fx.speeds._default, null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                un.isFunction(a.old) && a.old.call(this), a.queue && un.dequeue(this, a.queue)
            }, a
        }, un.fn.extend({
            fadeTo: function(n, e, t, a) {
                return this.filter(In).css("opacity", 0).show().end().animate({
                    opacity: e
                }, n, t, a)
            },
            animate: function(n, e, t, a) {
                var s = un.isEmptyObject(n),
                    i = un.speed(e, t, a),
                    o = function() {
                        var e = z(this, un.extend({}, n), i);
                        (s || un._data(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, s || !1 === i.queue ? this.each(o) : this.queue(i.queue, o)
            },
            stop: function(n, e, t) {
                var a = function(n) {
                    var e = n.stop;
                    delete n.stop, e(t)
                };
                return "string" != typeof n && (t = e, e = n, n = undefined), e && !1 !== n && this.queue(n || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != n && n + "queueHooks",
                        i = un.timers,
                        o = un._data(this);
                    if (s) o[s] && o[s].stop && a(o[s]);
                    else
                        for (s in o) o[s] && o[s].stop && Se.test(s) && a(o[s]);
                    for (s = i.length; s--;) i[s].elem !== this || null != n && i[s].queue !== n || (i[s].anim.stop(t), e = !1, i.splice(s, 1));
                    !e && t || un.dequeue(this, n)
                })
            },
            finish: function(n) {
                return !1 !== n && (n = n || "fx"), this.each(function() {
                    var e, t = un._data(this),
                        a = t[n + "queue"],
                        s = t[n + "queueHooks"],
                        i = un.timers,
                        o = a ? a.length : 0;
                    for (t.finish = !0, un.queue(this, n, []), s && s.stop && s.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === n && (i[e].anim.stop(!0), i.splice(e, 1));
                    for (e = 0; e < o; e++) a[e] && a[e].finish && a[e].finish.call(this);
                    delete t.finish
                })
            }
        }), un.each(["toggle", "show", "hide"], function(n, e) {
            var t = un.fn[e];
            un.fn[e] = function(n, a, s) {
                return null == n || "boolean" == typeof n ? t.apply(this, arguments) : this.animate(M(e, !0), n, a, s)
            }
        }), un.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, e) {
            un.fn[n] = function(n, t, a) {
                return this.animate(e, n, t, a)
            }
        }), un.timers = [], un.fx.tick = function() {
            var n, e = un.timers,
                t = 0;
            for (Be = un.now(); t < e.length; t++)(n = e[t])() || e[t] !== n || e.splice(t--, 1);
            e.length || un.fx.stop(), Be = undefined
        }, un.fx.timer = function(n) {
            un.timers.push(n), n() ? un.fx.start() : un.timers.pop()
        }, un.fx.interval = 13, un.fx.start = function() {
            _e || (_e = n.setInterval(un.fx.tick, un.fx.interval))
        }, un.fx.stop = function() {
            n.clearInterval(_e), _e = null
        }, un.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, un.fn.delay = function(e, t) {
            return e = un.fx ? un.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, a) {
                var s = n.setTimeout(t, e);
                a.stop = function() {
                    n.clearTimeout(s)
                }
            })
        },
        function() {
            var n, e = an.createElement("input"),
                t = an.createElement("div"),
                a = an.createElement("select"),
                s = a.appendChild(an.createElement("option"));
            t = an.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), t.appendChild(e), n = t.getElementsByTagName("a")[0], n.style.cssText = "top:1px", pn.getSetAttribute = "t" !== t.className, pn.style = /top/.test(n.getAttribute("style")), pn.hrefNormalized = "/a" === n.getAttribute("href"), pn.checkOn = !!e.value, pn.optSelected = s.selected, pn.enctype = !!an.createElement("form").enctype, a.disabled = !0, pn.optDisabled = !s.disabled, e = an.createElement("input"), e.setAttribute("value", ""), pn.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), pn.radioValue = "t" === e.value
        }();
    var Ce = /\r/g,
        Te = /[\x20\t\r\n\f]+/g;
    un.fn.extend({
        val: function(n) {
            var e, t, a, s = this[0]; {
                if (arguments.length) return a = un.isFunction(n), this.each(function(t) {
                    var s;
                    1 === this.nodeType && (s = a ? n.call(this, t, un(this).val()) : n, null == s ? s = "" : "number" == typeof s ? s += "" : un.isArray(s) && (s = un.map(s, function(n) {
                        return null == n ? "" : n + ""
                    })), (e = un.valHooks[this.type] || un.valHooks[this.nodeName.toLowerCase()]) && "set" in e && e.set(this, s, "value") !== undefined || (this.value = s))
                });
                if (s) return (e = un.valHooks[s.type] || un.valHooks[s.nodeName.toLowerCase()]) && "get" in e && (t = e.get(s, "value")) !== undefined ? t : (t = s.value, "string" == typeof t ? t.replace(Ce, "") : null == t ? "" : t)
            }
        }
    }), un.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var e = un.find.attr(n, "value");
                    return null != e ? e : un.trim(un.text(n)).replace(Te, " ")
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, a = n.options, s = n.selectedIndex, i = "select-one" === n.type || s < 0, o = i ? null : [], l = i ? s + 1 : a.length, r = s < 0 ? l : i ? s : 0; r < l; r++)
                        if (t = a[r], (t.selected || r === s) && (pn.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !un.nodeName(t.parentNode, "optgroup"))) {
                            if (e = un(t).val(), i) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(n, e) {
                    for (var t, a, s = n.options, i = un.makeArray(e), o = s.length; o--;)
                        if (a = s[o], un.inArray(un.valHooks.option.get(a), i) > -1) try {
                            a.selected = t = !0
                        } catch (n) {
                            a.scrollHeight
                        } else a.selected = !1;
                    return t || (n.selectedIndex = -1), s
                }
            }
        }
    }), un.each(["radio", "checkbox"], function() {
        un.valHooks[this] = {
            set: function(n, e) {
                if (un.isArray(e)) return n.checked = un.inArray(un(n).val(), e) > -1
            }
        }, pn.checkOn || (un.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    var Ee, Ae, Re = un.expr.attrHandle,
        Le = /^(?:checked|selected)$/i,
        Pe = pn.getSetAttribute,
        Ne = pn.input;
    un.fn.extend({
        attr: function(n, e) {
            return Mn(this, un.attr, n, e, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                un.removeAttr(this, n)
            })
        }
    }), un.extend({
        attr: function(n, e, t) {
            var a, s, i = n.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof n.getAttribute ? un.prop(n, e, t) : (1 === i && un.isXMLDoc(n) || (e = e.toLowerCase(), s = un.attrHooks[e] || (un.expr.match.bool.test(e) ? Ae : Ee)), t !== undefined ? null === t ? void un.removeAttr(n, e) : s && "set" in s && (a = s.set(n, t, e)) !== undefined ? a : (n.setAttribute(e, t + ""), t) : s && "get" in s && null !== (a = s.get(n, e)) ? a : (a = un.find.attr(n, e), null == a ? undefined : a))
        },
        attrHooks: {
            type: {
                set: function(n, e) {
                    if (!pn.radioValue && "radio" === e && un.nodeName(n, "input")) {
                        var t = n.value;
                        return n.setAttribute("type", e), t && (n.value = t), e
                    }
                }
            }
        },
        removeAttr: function(n, e) {
            var t, a, s = 0,
                i = e && e.match(Cn);
            if (i && 1 === n.nodeType)
                for (; t = i[s++];) a = un.propFix[t] || t, un.expr.match.bool.test(t) ? Ne && Pe || !Le.test(t) ? n[a] = !1 : n[un.camelCase("default-" + t)] = n[a] = !1 : un.attr(n, t, ""), n.removeAttribute(Pe ? t : a)
        }
    }), Ae = {
        set: function(n, e, t) {
            return !1 === e ? un.removeAttr(n, t) : Ne && Pe || !Le.test(t) ? n.setAttribute(!Pe && un.propFix[t] || t, t) : n[un.camelCase("default-" + t)] = n[t] = !0, t
        }
    }, un.each(un.expr.match.bool.source.match(/\w+/g), function(n, e) {
        var t = Re[e] || un.find.attr;
        Ne && Pe || !Le.test(e) ? Re[e] = function(n, e, a) {
            var s, i;
            return a || (i = Re[e], Re[e] = s, s = null != t(n, e, a) ? e.toLowerCase() : null, Re[e] = i), s
        } : Re[e] = function(n, e, t) {
            if (!t) return n[un.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ne && Pe || (un.attrHooks.value = {
        set: function(n, e, t) {
            if (!un.nodeName(n, "input")) return Ee && Ee.set(n, e, t);
            n.defaultValue = e
        }
    }), Pe || (Ee = {
        set: function(n, e, t) {
            var a = n.getAttributeNode(t);
            if (a || n.setAttributeNode(a = n.ownerDocument.createAttribute(t)), a.value = e += "", "value" === t || e === n.getAttribute(t)) return e
        }
    }, Re.id = Re.name = Re.coords = function(n, e, t) {
        var a;
        if (!t) return (a = n.getAttributeNode(e)) && "" !== a.value ? a.value : null
    }, un.valHooks.button = {
        get: function(n, e) {
            var t = n.getAttributeNode(e);
            if (t && t.specified) return t.value
        },
        set: Ee.set
    }, un.attrHooks.contenteditable = {
        set: function(n, e, t) {
            Ee.set(n, "" !== e && e, t)
        }
    }, un.each(["width", "height"], function(n, e) {
        un.attrHooks[e] = {
            set: function(n, t) {
                if ("" === t) return n.setAttribute(e, "auto"), t
            }
        }
    })), pn.style || (un.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || undefined
        },
        set: function(n, e) {
            return n.style.cssText = e + ""
        }
    });
    var He = /^(?:input|select|textarea|button|object)$/i,
        Ie = /^(?:a|area)$/i;
    un.fn.extend({
        prop: function(n, e) {
            return Mn(this, un.prop, n, e, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = un.propFix[n] || n, this.each(function() {
                try {
                    this[n] = undefined, delete this[n]
                } catch (n) {}
            })
        }
    }), un.extend({
        prop: function(n, e, t) {
            var a, s, i = n.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && un.isXMLDoc(n) || (e = un.propFix[e] || e, s = un.propHooks[e]), t !== undefined ? s && "set" in s && (a = s.set(n, t, e)) !== undefined ? a : n[e] = t : s && "get" in s && null !== (a = s.get(n, e)) ? a : n[e]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var e = un.find.attr(n, "tabindex");
                    return e ? parseInt(e, 10) : He.test(n.nodeName) || Ie.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), pn.hrefNormalized || un.each(["href", "src"], function(n, e) {
        un.propHooks[e] = {
            get: function(n) {
                return n.getAttribute(e, 4)
            }
        }
    }), pn.optSelected || (un.propHooks.selected = {
        get: function(n) {
            var e = n.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function(n) {
            var e = n.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), un.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        un.propFix[this.toLowerCase()] = this
    }), pn.enctype || (un.propFix.enctype = "encoding");
    var Me = /[\t\r\n\f]/g;
    un.fn.extend({
        addClass: function(n) {
            var e, t, a, s, i, o, l, r = 0;
            if (un.isFunction(n)) return this.each(function(e) {
                un(this).addClass(n.call(this, e, W(this)))
            });
            if ("string" == typeof n && n)
                for (e = n.match(Cn) || []; t = this[r++];)
                    if (s = W(t), a = 1 === t.nodeType && (" " + s + " ").replace(Me, " ")) {
                        for (o = 0; i = e[o++];) a.indexOf(" " + i + " ") < 0 && (a += i + " ");
                        l = un.trim(a), s !== l && un.attr(t, "class", l)
                    }
            return this
        },
        removeClass: function(n) {
            var e, t, a, s, i, o, l, r = 0;
            if (un.isFunction(n)) return this.each(function(e) {
                un(this).removeClass(n.call(this, e, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof n && n)
                for (e = n.match(Cn) || []; t = this[r++];)
                    if (s = W(t), a = 1 === t.nodeType && (" " + s + " ").replace(Me, " ")) {
                        for (o = 0; i = e[o++];)
                            for (; a.indexOf(" " + i + " ") > -1;) a = a.replace(" " + i + " ", " ");
                        l = un.trim(a), s !== l && un.attr(t, "class", l)
                    }
            return this
        },
        toggleClass: function(n, e) {
            var t = typeof n;
            return "boolean" == typeof e && "string" === t ? e ? this.addClass(n) : this.removeClass(n) : un.isFunction(n) ? this.each(function(t) {
                un(this).toggleClass(n.call(this, t, W(this), e), e)
            }) : this.each(function() {
                var e, a, s, i;
                if ("string" === t)
                    for (a = 0, s = un(this), i = n.match(Cn) || []; e = i[a++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else n !== undefined && "boolean" !== t || (e = W(this), e && un._data(this, "__className__", e), un.attr(this, "class", e || !1 === n ? "" : un._data(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            var e, t, a = 0;
            for (e = " " + n + " "; t = this[a++];)
                if (1 === t.nodeType && (" " + W(t) + " ").replace(Me, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), un.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, e) {
        un.fn[e] = function(n, t) {
            return arguments.length > 0 ? this.on(e, null, n, t) : this.trigger(e)
        }
    }), un.fn.extend({
        hover: function(n, e) {
            return this.mouseenter(n).mouseleave(e || n)
        }
    });
    var Oe = n.location,
        qe = un.now(),
        Ve = /\?/,
        ze = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    un.parseJSON = function(e) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
        var t, a = null,
            s = un.trim(e + "");
        return s && !un.trim(s.replace(ze, function(n, e, s, i) {
            return t && e && (a = 0), 0 === a ? n : (t = s || e, a += !i - !s, "")
        })) ? Function("return " + s)() : un.error("Invalid JSON: " + e)
    }, un.parseXML = function(e) {
        var t, a;
        if (!e || "string" != typeof e) return null;
        try {
            n.DOMParser ? (a = new n.DOMParser, t = a.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
        } catch (n) {
            t = undefined
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || un.error("Invalid XML: " + e), t
    };
    var We = /#.*$/,
        $e = /([?&])_=[^&]*/,
        Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Je = /^(?:GET|HEAD)$/,
        Ze = /^\/\//,
        Ge = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ye = {},
        Qe = {},
        Ke = "*/".concat("*"),
        nt = Oe.href,
        et = Ge.exec(nt.toLowerCase()) || [];
    un.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: nt,
            type: "GET",
            isLocal: Xe.test(et[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ke,
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
                "text json": un.parseJSON,
                "text xml": un.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, e) {
            return e ? X(X(n, un.ajaxSettings), e) : X(un.ajaxSettings, n)
        },
        ajaxPrefilter: $(Ye),
        ajaxTransport: $(Qe),
        ajax: function(e, t) {
            function a(e, t, a, s) {
                var i, m, b, w, x, D = t;
                2 !== y && (y = 2, r && n.clearTimeout(r), d = undefined, l = s || "", k.readyState = e > 0 ? 4 : 0, i = e >= 200 && e < 300 || 304 === e, a && (w = J(p, k, a)), w = Z(p, w, k, i), i ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"), x && (un.lastModified[o] = x), (x = k.getResponseHeader("etag")) && (un.etag[o] = x)), 204 === e || "HEAD" === p.type ? D = "nocontent" : 304 === e ? D = "notmodified" : (D = w.state, m = w.data, b = w.error, i = !b)) : (b = D, !e && D || (D = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || D) + "", i ? g.resolveWith(h, [m, D, k]) : g.rejectWith(h, [k, D, b]), k.statusCode(v), v = undefined, c && u.trigger(i ? "ajaxSuccess" : "ajaxError", [k, p, i ? m : b]), f.fireWith(h, [k, D]), c && (u.trigger("ajaxComplete", [k, p]), --un.active || un.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var s, i, o, l, r, c, d, m, p = un.ajaxSetup({}, t),
                h = p.context || p,
                u = p.context && (h.nodeType || h.jquery) ? un(h) : un.event,
                g = un.Deferred(),
                f = un.Callbacks("once memory"),
                v = p.statusCode || {},
                b = {},
                w = {},
                y = 0,
                x = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var e;
                        if (2 === y) {
                            if (!m)
                                for (m = {}; e = Ue.exec(l);) m[e[1].toLowerCase()] = e[2];
                            e = m[n.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? l : null
                    },
                    setRequestHeader: function(n, e) {
                        var t = n.toLowerCase();
                        return y || (n = w[t] = w[t] || n, b[n] = e), this
                    },
                    overrideMimeType: function(n) {
                        return y || (p.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var e;
                        if (n)
                            if (y < 2)
                                for (e in n) v[e] = [v[e], n[e]];
                            else k.always(n[k.status]);
                        return this
                    },
                    abort: function(n) {
                        var e = n || x;
                        return d && d.abort(e), a(0, e), this
                    }
                };
            if (g.promise(k).complete = f.add, k.success = k.done, k.error = k.fail, p.url = ((e || p.url || nt) + "").replace(We, "").replace(Ze, et[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = un.trim(p.dataType || "*").toLowerCase().match(Cn) || [""], null == p.crossDomain && (s = Ge.exec(p.url.toLowerCase()), p.crossDomain = !(!s || s[1] === et[1] && s[2] === et[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (et[3] || ("http:" === et[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = un.param(p.data, p.traditional)), U(Ye, p, t, k), 2 === y) return k;
            c = un.event && p.global, c && 0 == un.active++ && un.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Je.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (Ve.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = $e.test(o) ? o.replace($e, "$1_=" + qe++) : o + (Ve.test(o) ? "&" : "?") + "_=" + qe++)), p.ifModified && (un.lastModified[o] && k.setRequestHeader("If-Modified-Since", un.lastModified[o]), un.etag[o] && k.setRequestHeader("If-None-Match", un.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) k.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || 2 === y)) return k.abort();
            x = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) k[i](p[i]);
            if (d = U(Qe, p, t, k)) {
                if (k.readyState = 1, c && u.trigger("ajaxSend", [k, p]), 2 === y) return k;
                p.async && p.timeout > 0 && (r = n.setTimeout(function() {
                    k.abort("timeout")
                }, p.timeout));
                try {
                    y = 1, d.send(b, a)
                } catch (n) {
                    if (!(y < 2)) throw n;
                    a(-1, n)
                }
            } else a(-1, "No Transport");
            return k
        },
        getJSON: function(n, e, t) {
            return un.get(n, e, t, "json")
        },
        getScript: function(n, e) {
            return un.get(n, undefined, e, "script")
        }
    }), un.each(["get", "post"], function(n, e) {
        un[e] = function(n, t, a, s) {
            return un.isFunction(t) && (s = s || a, a = t, t = undefined), un.ajax(un.extend({
                url: n,
                type: e,
                dataType: s,
                data: t,
                success: a
            }, un.isPlainObject(n) && n))
        }
    }), un._evalUrl = function(n) {
        return un.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, un.fn.extend({
        wrapAll: function(n) {
            if (un.isFunction(n)) return this.each(function(e) {
                un(this).wrapAll(n.call(this, e))
            });
            if (this[0]) {
                var e = un(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return un.isFunction(n) ? this.each(function(e) {
                un(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = un(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(n) {
            var e = un.isFunction(n);
            return this.each(function(t) {
                un(this).wrapAll(e ? n.call(this, t) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                un.nodeName(this, "body") || un(this).replaceWith(this.childNodes)
            }).end()
        }
    }), un.expr.filters.hidden = function(n) {
        return pn.reliableHiddenOffsets() ? n.offsetWidth <= 0 && n.offsetHeight <= 0 && !n.getClientRects().length : Y(n)
    }, un.expr.filters.visible = function(n) {
        return !un.expr.filters.hidden(n)
    };
    var tt = /%20/g,
        at = /\[\]$/,
        st = /\r?\n/g,
        it = /^(?:submit|button|image|reset|file)$/i,
        ot = /^(?:input|select|textarea|keygen)/i;
    un.param = function(n, e) {
        var t, a = [],
            s = function(n, e) {
                e = un.isFunction(e) ? e() : null == e ? "" : e, a[a.length] = encodeURIComponent(n) + "=" + encodeURIComponent(e)
            };
        if (e === undefined && (e = un.ajaxSettings && un.ajaxSettings.traditional), un.isArray(n) || n.jquery && !un.isPlainObject(n)) un.each(n, function() {
            s(this.name, this.value)
        });
        else
            for (t in n) Q(t, n[t], e, s);
        return a.join("&").replace(tt, "+")
    }, un.fn.extend({
        serialize: function() {
            return un.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = un.prop(this, "elements");
                return n ? un.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !un(this).is(":disabled") && ot.test(this.nodeName) && !it.test(n) && (this.checked || !On.test(n))
            }).map(function(n, e) {
                var t = un(this).val();
                return null == t ? null : un.isArray(t) ? un.map(t, function(n) {
                    return {
                        name: e.name,
                        value: n.replace(st, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: t.replace(st, "\r\n")
                }
            }).get()
        }
    }), un.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function() {
        return this.isLocal ? nn() : an.documentMode > 8 ? K() : /^(get|post|head|put|delete|options)$/i.test(this.type) && K() || nn()
    } : K;
    var lt = 0,
        rt = {},
        ct = un.ajaxSettings.xhr();
    n.attachEvent && n.attachEvent("onunload", function() {
        for (var n in rt) rt[n](undefined, !0)
    }), pn.cors = !!ct && "withCredentials" in ct, ct = pn.ajax = !!ct, ct && un.ajaxTransport(function(e) {
        if (!e.crossDomain || pn.cors) {
            var t;
            return {
                send: function(a, s) {
                    var i, o = e.xhr(),
                        l = ++lt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                    for (i in a) a[i] !== undefined && o.setRequestHeader(i, a[i] + "");
                    o.send(e.hasContent && e.data || null), t = function(n, a) {
                        var i, r, c;
                        if (t && (a || 4 === o.readyState))
                            if (delete rt[l], t = undefined, o.onreadystatechange = un.noop, a) 4 !== o.readyState && o.abort();
                            else {
                                c = {}, i = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                try {
                                    r = o.statusText
                                } catch (n) {
                                    r = ""
                                }
                                i || !e.isLocal || e.crossDomain ? 1223 === i && (i = 204) : i = c.text ? 200 : 404
                            }
                        c && s(i, r, c, o.getAllResponseHeaders())
                    }, e.async ? 4 === o.readyState ? n.setTimeout(t) : o.onreadystatechange = rt[l] = t : t()
                },
                abort: function() {
                    t && t(undefined, !0)
                }
            }
        }
    }), un.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return un.globalEval(n), n
            }
        }
    }), un.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
    }), un.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var e, t = an.head || un("head")[0] || an.documentElement;
            return {
                send: function(a, s) {
                    e = an.createElement("script"), e.async = !0, n.scriptCharset && (e.charset = n.scriptCharset), e.src = n.url, e.onload = e.onreadystatechange = function(n, t) {
                        (t || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, t || s(200, "success"))
                    }, t.insertBefore(e, t.firstChild)
                },
                abort: function() {
                    e && e.onload(undefined, !0)
                }
            }
        }
    });
    var dt = [],
        mt = /(=)\?(?=&|$)|\?\?/;
    un.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = dt.pop() || un.expando + "_" + qe++;
            return this[n] = !0, n
        }
    }), un.ajaxPrefilter("json jsonp", function(e, t, a) {
        var s, i, o, l = !1 !== e.jsonp && (mt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && mt.test(e.data) && "data");
        if (l || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = un.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(mt, "$1" + s) : !1 !== e.jsonp && (e.url += (Ve.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return o || un.error(s + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = n[s], n[s] = function() {
            o = arguments
        }, a.always(function() {
            i === undefined ? un(n).removeProp(s) : n[s] = i, e[s] && (e.jsonpCallback = t.jsonpCallback, dt.push(s)), o && un.isFunction(i) && i(o[0]), o = i = undefined
        }), "script"
    }), un.parseHTML = function(n, e, t) {
        if (!n || "string" != typeof n) return null;
        "boolean" == typeof e && (t = e, e = !1), e = e || an;
        var a = Dn.exec(n),
            s = !t && [];
        return a ? [e.createElement(a[1])] : (a = v([n], e, s), s && s.length && un(s).remove(), un.merge([], a.childNodes))
    };
    var pt = un.fn.load;
    un.fn.load = function(n, e, t) {
        if ("string" != typeof n && pt) return pt.apply(this, arguments);
        var a, s, i, o = this,
            l = n.indexOf(" ");
        return l > -1 && (a = un.trim(n.slice(l, n.length)), n = n.slice(0, l)), un.isFunction(e) ? (t = e, e = undefined) : e && "object" == typeof e && (s = "POST"), o.length > 0 && un.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(n) {
            i = arguments, o.html(a ? un("<div>").append(un.parseHTML(n)).find(a) : n)
        }).always(t && function(n, e) {
            o.each(function() {
                t.apply(this, i || [n.responseText, e, n])
            })
        }), this
    }, un.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, e) {
        un.fn[e] = function(n) {
            return this.on(e, n)
        }
    }), un.expr.filters.animated = function(n) {
        return un.grep(un.timers, function(e) {
            return n === e.elem
        }).length
    }, un.offset = {
        setOffset: function(n, e, t) {
            var a, s, i, o, l, r, c, d = un.css(n, "position"),
                m = un(n),
                p = {};
            "static" === d && (n.style.position = "relative"), l = m.offset(), i = un.css(n, "top"), r = un.css(n, "left"), c = ("absolute" === d || "fixed" === d) && un.inArray("auto", [i, r]) > -1, c ? (a = m.position(), o = a.top, s = a.left) : (o = parseFloat(i) || 0, s = parseFloat(r) || 0), un.isFunction(e) && (e = e.call(n, t, un.extend({}, l))), null != e.top && (p.top = e.top - l.top + o), null != e.left && (p.left = e.left - l.left + s), "using" in e ? e.using.call(n, p) : m.css(p)
        }
    }, un.fn.extend({
        offset: function(n) {
            if (arguments.length) return n === undefined ? this : this.each(function(e) {
                un.offset.setOffset(this, n, e)
            });
            var e, t, a = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                i = s && s.ownerDocument;
            if (i) return e = i.documentElement, un.contains(e, s) ? ("undefined" != typeof s.getBoundingClientRect && (a = s.getBoundingClientRect()), t = en(i), {
                top: a.top + (t.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: a.left + (t.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : a
        },
        position: function() {
            if (this[0]) {
                var n, e, t = {
                        top: 0,
                        left: 0
                    },
                    a = this[0];
                return "fixed" === un.css(a, "position") ? e = a.getBoundingClientRect() : (n = this.offsetParent(), e = this.offset(), un.nodeName(n[0], "html") || (t = n.offset()), t.top += un.css(n[0], "borderTopWidth", !0), t.left += un.css(n[0], "borderLeftWidth", !0)), {
                    top: e.top - t.top - un.css(a, "marginTop", !0),
                    left: e.left - t.left - un.css(a, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && !un.nodeName(n, "html") && "static" === un.css(n, "position");) n = n.offsetParent;
                return n || he
            })
        }
    }), un.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, e) {
        var t = /Y/.test(e);
        un.fn[n] = function(a) {
            return Mn(this, function(n, a, s) {
                var i = en(n);
                if (s === undefined) return i ? e in i ? i[e] : i.document.documentElement[a] : n[a];
                i ? i.scrollTo(t ? un(i).scrollLeft() : s, t ? s : un(i).scrollTop()) : n[a] = s
            }, n, a, arguments.length, null)
        }
    }), un.each(["top", "left"], function(n, e) {
        un.cssHooks[e] = E(pn.pixelPosition, function(n, t) {
            if (t) return t = ge(n, e), me.test(t) ? un(n).position()[e] + "px" : t
        })
    }), un.each({
        Height: "height",
        Width: "width"
    }, function(n, e) {
        un.each({
            padding: "inner" + n,
            content: e,
            "": "outer" + n
        }, function(t, a) {
            un.fn[a] = function(a, s) {
                var i = arguments.length && (t || "boolean" != typeof a),
                    o = t || (!0 === a || !0 === s ? "margin" : "border");
                return Mn(this, function(e, t, a) {
                    var s;
                    return un.isWindow(e) ? e.document.documentElement["client" + n] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + n], s["scroll" + n], e.body["offset" + n], s["offset" + n], s["client" + n])) : a === undefined ? un.css(e, t, o) : un.style(e, t, a, o)
                }, e, i ? a : undefined, i, null)
            }
        })
    }), un.fn.extend({
        bind: function(n, e, t) {
            return this.on(n, null, e, t)
        },
        unbind: function(n, e) {
            return this.off(n, null, e)
        },
        delegate: function(n, e, t, a) {
            return this.on(e, n, t, a)
        },
        undelegate: function(n, e, t) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(e, n || "**", t)
        }
    }), un.fn.size = function() {
        return this.length
    }, un.fn.andSelf = un.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return un
    });
    var ht = n.jQuery,
        ut = n.$;
    return un.noConflict = function(e) {
        return n.$ === un && (n.$ = ut), e && n.jQuery === un && (n.jQuery = ht), un
    }, e || (n.jQuery = n.$ = un), un
}),
function(n, e) {
    "use strict";
    n.rails !== e && n.error("jquery-ujs has already been loaded!");
    var t, a = n(document);
    n.rails = t = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return n("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return n("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(n) {
            var e = t.csrfToken();
            e && n.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            n('form input[name="' + t.csrfParam() + '"]').val(t.csrfToken())
        },
        fire: function(e, t, a) {
            var s = n.Event(t);
            return e.trigger(s, a), !1 !== s.result
        },
        confirm: function(n) {
            return confirm(n)
        },
        ajax: function(e) {
            return n.ajax(e)
        },
        href: function(n) {
            return n[0].href
        },
        isRemote: function(n) {
            return n.data("remote") !== e && !1 !== n.data("remote")
        },
        handleRemote: function(a) {
            var s, i, o, l, r, c;
            if (t.fire(a, "ajax:before")) {
                if (l = a.data("with-credentials") || null, r = a.data("type") || n.ajaxSettings && n.ajaxSettings.dataType, a.is("form")) {
                    s = a.data("ujs:submit-button-formmethod") || a.attr("method"), i = a.data("ujs:submit-button-formaction") || a.attr("action"), o = n(a[0]).serializeArray();
                    var d = a.data("ujs:submit-button");
                    d && (o.push(d), a.data("ujs:submit-button", null)), a.data("ujs:submit-button-formmethod", null), a.data("ujs:submit-button-formaction", null)
                } else a.is(t.inputChangeSelector) ? (s = a.data("method"), i = a.data("url"), o = a.serialize(), a.data("params") && (o = o + "&" + a.data("params"))) : a.is(t.buttonClickSelector) ? (s = a.data("method") || "get", i = a.data("url"), o = a.serialize(), a.data("params") && (o = o + "&" + a.data("params"))) : (s = a.data("method"), i = t.href(a), o = a.data("params") || null);
                return c = {
                    type: s || "GET",
                    data: o,
                    dataType: r,
                    beforeSend: function(n, s) {
                        if (s.dataType === e && n.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), !t.fire(a, "ajax:beforeSend", [n, s])) return !1;
                        a.trigger("ajax:send", n)
                    },
                    success: function(n, e, t) {
                        a.trigger("ajax:success", [n, e, t])
                    },
                    complete: function(n, e) {
                        a.trigger("ajax:complete", [n, e])
                    },
                    error: function(n, e, t) {
                        a.trigger("ajax:error", [n, e, t])
                    },
                    crossDomain: t.isCrossDomain(i)
                }, l && (c.xhrFields = {
                    withCredentials: l
                }), i && (c.url = i), t.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(n) {
            var e = document.createElement("a");
            e.href = location.href;
            var t = document.createElement("a");
            try {
                return t.href = n, t.href = t.href, !((!t.protocol || ":" === t.protocol) && !t.host || e.protocol + "//" + e.host == t.protocol + "//" + t.host)
            } catch (n) {
                return !0
            }
        },
        handleMethod: function(a) {
            var s = t.href(a),
                i = a.data("method"),
                o = a.attr("target"),
                l = t.csrfToken(),
                r = t.csrfParam(),
                c = n('<form method="post" action="' + s + '"></form>'),
                d = '<input name="_method" value="' + i + '" type="hidden" />';
            r === e || l === e || t.isCrossDomain(s) || (d += '<input name="' + r + '" value="' + l + '" type="hidden" />'), o && c.attr("target", o), c.hide().append(d).appendTo("body"), c.submit()
        },
        formElements: function(e, t) {
            return e.is("form") ? n(e[0].elements).filter(t) : e.find(t)
        },
        disableFormElements: function(e) {
            t.formElements(e, t.disableSelector).each(function() {
                t.disableFormElement(n(this))
            })
        },
        disableFormElement: function(n) {
            var t, a;
            t = n.is("button") ? "html" : "val", a = n.data("disable-with"), a !== e && (n.data("ujs:enable-with", n[t]()), n[t](a)), n.prop("disabled", !0), n.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            t.formElements(e, t.enableSelector).each(function() {
                t.enableFormElement(n(this))
            })
        },
        enableFormElement: function(n) {
            var t = n.is("button") ? "html" : "val";
            n.data("ujs:enable-with") !== e && (n[t](n.data("ujs:enable-with")), n.removeData("ujs:enable-with")), n.prop("disabled", !1), n.removeData("ujs:disabled")
        },
        allowAction: function(n) {
            var e, a = n.data("confirm"),
                s = !1;
            if (!a) return !0;
            if (t.fire(n, "confirm")) {
                try {
                    s = t.confirm(a)
                } catch (n) {
                    (console.error || console.log).call(console, n.stack || n)
                }
                e = t.fire(n, "confirm:complete", [s])
            }
            return s && e
        },
        blankInputs: function(e, t, a) {
            var s, i, o, l, r = n(),
                c = t || "input,textarea",
                d = e.find(c),
                m = {};
            return d.each(function() {
                s = n(this), s.is("input[type=radio]") ? (l = s.attr("name"), m[l] || (0 === e.find('input[type=radio]:checked[name="' + l + '"]').length && (o = e.find('input[type=radio][name="' + l + '"]'), r = r.add(o)), m[l] = l)) : (i = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : !!s.val()) === a && (r = r.add(s))
            }), !!r.length && r
        },
        nonBlankInputs: function(n, e) {
            return t.blankInputs(n, e, !0)
        },
        stopEverything: function(e) {
            return n(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(n) {
            var a = n.data("disable-with");
            a !== e && (n.data("ujs:enable-with", n.html()), n.html(a)), n.bind("click.railsDisable", function(n) {
                return t.stopEverything(n)
            }), n.data("ujs:disabled", !0)
        },
        enableElement: function(n) {
            n.data("ujs:enable-with") !== e && (n.html(n.data("ujs:enable-with")), n.removeData("ujs:enable-with")), n.unbind("click.railsDisable"), n.removeData("ujs:disabled")
        }
    }, t.fire(a, "rails:attachBindings") && (n.ajaxPrefilter(function(n, e, a) {
        n.crossDomain || t.CSRFProtection(a)
    }), n(window).on("pageshow.rails", function() {
        n(n.rails.enableSelector).each(function() {
            var e = n(this);
            e.data("ujs:disabled") && n.rails.enableFormElement(e)
        }), n(n.rails.linkDisableSelector).each(function() {
            var e = n(this);
            e.data("ujs:disabled") && n.rails.enableElement(e)
        })
    }), a.on("ajax:complete", t.linkDisableSelector, function() {
        t.enableElement(n(this))
    }), a.on("ajax:complete", t.buttonDisableSelector, function() {
        t.enableFormElement(n(this))
    }), a.on("click.rails", t.linkClickSelector, function(e) {
        var a = n(this),
            s = a.data("method"),
            i = a.data("params"),
            o = e.metaKey || e.ctrlKey;
        if (!t.allowAction(a)) return t.stopEverything(e);
        if (!o && a.is(t.linkDisableSelector) && t.disableElement(a), t.isRemote(a)) {
            if (o && (!s || "GET" === s) && !i) return !0;
            var l = t.handleRemote(a);
            return !1 === l ? t.enableElement(a) : l.fail(function() {
                t.enableElement(a)
            }), !1
        }
        return s ? (t.handleMethod(a), !1) : void 0
    }), a.on("click.rails", t.buttonClickSelector, function(e) {
        var a = n(this);
        if (!t.allowAction(a) || !t.isRemote(a)) return t.stopEverything(e);
        a.is(t.buttonDisableSelector) && t.disableFormElement(a);
        var s = t.handleRemote(a);
        return !1 === s ? t.enableFormElement(a) : s.fail(function() {
            t.enableFormElement(a)
        }), !1
    }), a.on("change.rails", t.inputChangeSelector, function(e) {
        var a = n(this);
        return t.allowAction(a) && t.isRemote(a) ? (t.handleRemote(a), !1) : t.stopEverything(e)
    }), a.on("submit.rails", t.formSubmitSelector, function(a) {
        var s, i, o = n(this),
            l = t.isRemote(o);
        if (!t.allowAction(o)) return t.stopEverything(a);
        if (o.attr("novalidate") === e)
            if (o.data("ujs:formnovalidate-button") === e) {
                if ((s = t.blankInputs(o, t.requiredInputSelector, !1)) && t.fire(o, "ajax:aborted:required", [s])) return t.stopEverything(a)
            } else o.data("ujs:formnovalidate-button", e);
        if (l) {
            if (i = t.nonBlankInputs(o, t.fileInputSelector)) {
                setTimeout(function() {
                    t.disableFormElements(o)
                }, 13);
                var r = t.fire(o, "ajax:aborted:file", [i]);
                return r || setTimeout(function() {
                    t.enableFormElements(o)
                }, 13), r
            }
            return t.handleRemote(o), !1
        }
        setTimeout(function() {
            t.disableFormElements(o)
        }, 13)
    }), a.on("click.rails", t.formInputClickSelector, function(e) {
        var a = n(this);
        if (!t.allowAction(a)) return t.stopEverything(e);
        var s = a.attr("name"),
            i = s ? {
                name: s,
                value: a.val()
            } : null,
            o = a.closest("form");
        0 === o.length && (o = n("#" + a.attr("form"))), o.data("ujs:submit-button", i), o.data("ujs:formnovalidate-button", a.attr("formnovalidate")), o.data("ujs:submit-button-formaction", a.attr("formaction")), o.data("ujs:submit-button-formmethod", a.attr("formmethod"))
    }), a.on("ajax:send.rails", t.formSubmitSelector, function(e) {
        this === e.target && t.disableFormElements(n(this))
    }), a.on("ajax:complete.rails", t.formSubmitSelector, function(e) {
        this === e.target && t.enableFormElements(n(this))
    }), n(function() {
        t.refreshCSRFTokens()
    }))
}(jQuery),
function() {
    window.setCookie = function(n, e, t) {
        var a, s;
        return t ? (a = new Date, a.setTime(a.getTime() + 24 * t * 60 * 60 * 1e3), s = "; expires=" + a.toGMTString()) : s = "", document.cookie = n + "=" + e + s + "; path=/"
    }, window.getCookie = function(n) {
        var e, t, a, s;
        for (s = n + "=", t = document.cookie.split(";"), a = 0; a < t.length;) {
            for (e = t[a];
                " " === e.charAt(0);) e = e.substring(1, e.length);
            if (0 === e.indexOf(s)) return e.substring(s.length, e.length);
            a++
        }
        return null
    }, window.deleteCookie = function(n) {
        return setCookie(n, "", -1)
    }
}.call(this), window.mobilecheck = function() {
        var n = !1;
        return function(e) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (n = !0)
        }(navigator.userAgent || navigator.vendor || window.opera), n
    },
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.FroalaPages = e()
    }(this, function() {
        "use strict";
        var n = function(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            e = function(n, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
            },
            t = function(n, e) {
                if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? n : e
            },
            a = function() {
                function e() {
                    n(this, e)
                }
                return e.createElement = function(n) {
                    var e = document.createElement("DIV");
                    return e.innerHTML = n, e.firstChild
                }, e.prepend = function(n, e) {
                    n.firstChild ? n.insertBefore(e, n.firstChild) : n.append(e)
                }, e.append = function(n, e) {
                    n.appendChild(e)
                }, e.after = function(n, e) {
                    n.parentNode.insertBefore(e, n.nextSibling)
                }, e.before = function(n, e) {
                    n.parentNode.insertBefore(e, n)
                }, e.remove = function(n) {
                    n && n.parentNode && n.parentNode.removeChild(n)
                }, e.offset = function(n) {
                    var e = n.getBoundingClientRect();
                    return {
                        top: e.top,
                        left: e.left
                    }
                }, e.outerHeight = function(n) {
                    var e = arguments.length > 1 && arguments[1] !== undefined && arguments[1],
                        t = n.offsetHeight;
                    if (e) {
                        var a = getComputedStyle(n);
                        return t += parseInt(a.marginTop, 10) + parseInt(a.marginBottom, 10)
                    }
                    return t
                }, e.outerWidth = function(n) {
                    var e = arguments.length > 1 && arguments[1] !== undefined && arguments[1],
                        t = n.offsetWidth;
                    if (e) {
                        var a = getComputedStyle(n);
                        return t += parseInt(a.marginLeft, 10) + parseInt(a.marginRight, 10)
                    }
                    return 0
                }, e.underscores = function(n) {
                    return n.toLowerCase().split(" ").join("_")
                }, e.scrollTo = function(n) {
                    n.scrollIntoView({
                        behavior: "smooth",
                        block: "end"
                    })
                }, e
            }(),
            s = function e(t) {
                n(this, e), this.page = t, this.events = t.events, this.doc = t.doc, this.opts = t.opts;
                for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) s[i - 1] = arguments[i];
                this.init.apply(this, s)
            },
            i = function(s) {
                function i() {
                    return n(this, i), t(this, s.apply(this, arguments))
                }
                return e(i, s), i.prototype.init = function(n) {
                    var e = this;
                    this.designBlock = n, this.id = ++i.ID, this.el = a.createElement(n.render({
                        imagesDir: this.opts.designsImagesDir
                    })), this.el.setAttribute("data-block-type", a.underscores(n.blockType)), this.el.setAttribute("data-id", this.id), this.events.on(this.el, "mouseenter", function() {
                        return e._mouseEnter()
                    })
                }, i.prototype._mouseEnter = function() {
                    this.events.emit("block.mouseenter", this)
                }, i
            }(s);
        i.ID = 0;
        var o = 50,
            l = function(s) {
                function i() {
                    return n(this, i), t(this, s.apply(this, arguments))
                }
                return e(i, s), i.prototype.init = function(n, e) {
                    var t = this;
                    this.el = document.createElement("IMG"), this.el.setAttribute("draggable", !0), this.blockType = n, this.template = e.template, this.image = e.image, this.el.setAttribute("src", "" + (this.opts.designsThumbsDir || "") + this.image), this.events.on(this.el, "click", function() {
                        return t.click()
                    }), this.events.on(this.el, "dragstart", function(n) {
                        return t.dragstart(n)
                    })
                }, i.prototype.click = function() {
                    this.events.emit("designBlock.click", this)
                }, i.prototype.dragstart = function(n) {
                    this.dragImage = this.doc.createElement("IMG"), this.dragImage.src = this.el.src, this.dragImage.setAttribute("height", o), this.dragImage.style.position = "absolute", a.append(this.page.body, this.dragImage), n.dataTransfer.setDragImage(this.dragImage, 0, 0), n.dataTransfer.setData("text/html", null), this.events.emit("designBlock.willDrag", this)
                }, i.prototype.render = function(n) {
                    return this.template.replace(/{{[a-zA-Z_]*}}/g, function(e) {
                        var t = e.replace(/{|}/g, "").trim();
                        return n[t]
                    })
                }, i
            }(s);
        l.BLOCKS = {}, l.HEADER = "Headers", l.FOOTER = "Footers", l.Register = function(n, e, t) {
            l.BLOCKS[n] || (l.BLOCKS[n] = []), l.BLOCKS[n].push({
                template: e,
                image: t
            })
        };
        var r = {
                ADD: 1,
                FULL: 2,
                DESKTOP: 100,
                TABLET_LANDSCAPE: 1024,
                TABLET_PORTRAIT: 768,
                PHONE: 375
            },
            c = function(a) {
                function s() {
                    return n(this, s), t(this, a.apply(this, arguments))
                }
                return e(s, a), s.prototype.init = function(n) {
                    var e = this;
                    if (this.props = s._[n], !this.props) throw new Error("A button with the name " + n + " could not be found");
                    this._render(n), this.events.on(this.el, "click", function() {
                        return e._click()
                    }), this.events.listen("button.refresh", function() {
                        return e._refresh()
                    }), this.props.afterBuild && this.props.afterBuild.apply(this)
                }, s.prototype._refresh = function() {
                    this.props.refresh && this.props.refresh.apply(this)
                }, s.prototype._render = function(n) {
                    this.el = this.doc.createElement("BUTTON"), this.el.innerHTML = this.props.icon.template, this.el.classList.add("fp-btn", "fp-" + n + "-btn", "fr-btn-type-" + this.props.icon.type), this.el.setAttribute("title", this.props.title)
                }, s.prototype._click = function() {
                    this.props.callback.apply(this), this.events.emit("button.refresh")
                }, s
            }(s);
        c.Register = function(n, e) {
            c._ || (c._ = {}), c._[n] = e
        }, c.Register("layout", {
            title: "Layout",
            icon: {
                type: "svg",
                template: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                <path d="M0 0h24v24H0z" fill="none"/>\n                <path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"/>\n              </svg>'
            },
            callback: function() {
                this.page.activeView = r.ADD, this.page.refreshView(), this.page.designsPanel.show()
            },
            refresh: function() {
                this.el.classList.toggle("fp-active", this.page.activeView === r.ADD)
            }
        }), c.Register("moveUp", {
            title: "Move Up",
            icon: {
                type: "svg",
                template: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>\n            <path d="M0 0h24v24H0z" fill="none"/>\n          </svg>'
            },
            callback: function() {
                for (var n = this.page.activeBlock, e = n.el.previousSibling; e && (!e.classList || !e.classList.contains("fdb-block"));) e = e.previousSibling;
                window.a = e, window.b = n.el, e && a.before(e, n.el), this.page.activeView === r.FULL && a.scrollTo(n.el), this.page.blockToolbar.hide(), this.page.blockToolbar.refreshPosition()
            },
            refresh: function() {
                if (this.page.activeBlock) {
                    this.el.classList.toggle("fp-hidden", [l.HEADER, l.FOOTER].indexOf(this.page.activeBlock.designBlock.blockType) >= 0);
                    for (var n = this.page.activeBlock, e = n.el.previousSibling; e && (!e.classList || !e.classList.contains("fdb-block"));) e = e.previousSibling;
                    e ? (this.el.classList.remove("fp-disabled"), this.el.removeAttribute("disabled")) : (this.el.classList.add("fp-disabled"), this.el.setAttribute("disabled", "disabled"))
                }
            }
        }), c.Register("remove", {
            title: "Remove",
            icon: {
                type: "svg",
                template: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>\n              <path d="M0 0h24v24H0z" fill="none"/>\n          </svg>'
            },
            callback: function() {
                if (this.page.activeBlock && confirm("Are you sure you want to remove this design block?")) {
                    var n = this.page.activeBlock;
                    this.page.blockToolbar.hide(), a.remove(n.el), this.page.refreshBlocks()
                }
            },
            afterBuild: function() {
                this.el.classList.add("fp-remove-btn")
            }
        }), c.Register("edit", {
            title: "Edit",
            icon: {
                type: "svg",
                template: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"/>\n  <path d="M0 0h24v24H0z" fill="none"/>\n    </svg>'
            },
            callback: function() {
                this.page.activeView = r.FULL, this.page.refreshView(), this.page.designsPanel.hide()
            },
            refresh: function() {
                this.el.classList.toggle("fp-active", this.page.activeView === r.FULL)
            }
        }), c.Register("download", {
            title: "Download",
            icon: {
                type: "html",
                template: '\n    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>\n        <path d="M0 0h24v24H0z" fill="none"/>\n    </svg>\n    <span>Download</span>'
            }
        }), c.Register("desktop", {
            title: "Desktop",
            icon: {
                type: "svg",
                template: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                <path d="M0 0h24v24H0z" fill="none"/>\n                <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>\n              </svg>'
            },
            callback: function() {
                this.page.screenSize = r.DESKTOP, this.page.iframe.style.width = null, this.page.el.classList.remove("fp-view-small"), this.page.refreshIframeSize()
            },
            refresh: function() {
                this.el.classList.toggle("fp-active", this.page.screenSize === r.DESKTOP)
            },
            afterBuild: function() {
                this.page.screenSize = r.DESKTOP
            }
        }), c.Register("tablet_landscape", {
            title: "Tablet Landscape",
            icon: {
                type: "svg",
                template: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/>\n              </svg>'
            },
            callback: function() {
                this.page.screenSize = r.TABLET_LANDSCAPE, this.page.iframe.style.width = r.TABLET_LANDSCAPE + "px", this.page.el.classList.add("fp-view-small"), this.page.refreshIframeSize()
            },
            refresh: function() {
                this.el.classList.toggle("fp-active", this.page.screenSize === r.TABLET_LANDSCAPE)
            }
        }), c.Register("tablet_portrait", {
            title: "Tablet Portrait",
            icon: {
                type: "svg",
                template: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/>\n              </svg>'
            },
            callback: function() {
                this.page.screenSize = r.TABLET_PORTRAIT, this.page.iframe.style.width = r.TABLET_PORTRAIT + "px", this.page.el.classList.add("fp-view-small"), this.page.refreshIframeSize()
            },
            refresh: function() {
                this.el.classList.toggle("fp-active", this.page.screenSize === r.TABLET_PORTRAIT)
            }
        }), c.Register("phone", {
            title: "Phone",
            icon: {
                type: "svg",
                template: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n                <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>\n                <path d="M0 0h24v24H0z" fill="none"/>\n              </svg>'
            },
            callback: function() {
                this.page.screenSize = r.PHONE, this.page.iframe.style.width = r.PHONE + "px", this.page.el.classList.add("fp-view-small"), this.page.refreshIframeSize()
            },
            refresh: function() {
                this.el.classList.toggle("fp-active", this.page.screenSize === r.PHONE)
            }
        });
        var d = 50,
            m = function(s) {
                function i() {
                    return n(this, i), t(this, s.apply(this, arguments))
                }
                return e(i, s), i.prototype.init = function() {
                    this.el = this.doc.createElement("DIV"), this.el.classList.add("fp-block-toolbar"), a.append(this.page.body, this.el), this._addButtons(), this._initEvents()
                }, i.prototype._initEvents = function() {
                    var n = this;
                    this.events.listen("block.mouseenter", function(e) {
                        return n.showForBlock(e)
                    }), this.events.on(this.page.iframeDoc, "mouseleave", function() {
                        return n._doLeave()
                    }), this.events.on(this.el, "mouseenter", function() {
                        return clearTimeout(n.leaveTimeout)
                    }), this.events.on(this.el, "mouseleave", function() {
                        return n._doLeave()
                    }), this.events.on(this.page.iframeDoc, "scroll", function() {
                        return n.refreshPosition()
                    }), this.events.on(this.page.el, "scroll", function() {
                        return n.refreshPosition()
                    })
                }, i.prototype._doLeave = function() {
                    var n = this;
                    this.leaveTimeout = setTimeout(function() {
                        return n.hide()
                    }, d)
                }, i.prototype._addButtons = function() {
                    var n = this;
                    this.opts.blockButtons.forEach(function(e) {
                        var t = new c(n.page, e);
                        a.append(n.el, t.el)
                    })
                }, i.prototype.refreshPosition = function() {
                    this.isVisible() && this.showForBlock(this.page.activeBlock), this.events.emit("button.refresh")
                }, i.prototype.showForBlock = function(n) {
                    clearTimeout(this.leaveTimeout);
                    var e = a.offset(n.el);
                    this.page.activeBlock = n;
                    var t = this.page.iframeBody.querySelector(".fp-active");
                    t && t.classList.remove("fp-active"), n.el.classList.add("fp-active"), this.show(e.left, e.top)
                }, i.prototype.show = function(n, e) {
                    this.el.classList.add("fp-visible"), this.el.style.left = n + a.offset(this.page.iframe).left + "px", this.el.style.top = Math.max(0, e) / (this.page.activeView === r.ADD ? 4 : 1) + a.offset(this.page.iframe).top + "px", this.events.emit("button.refresh")
                }, i.prototype.hide = function() {
                    this.el.classList.remove("fp-visible")
                }, i.prototype.isVisible = function() {
                    return this.el.classList.contains("fp-visible")
                }, i
            }(s),
            p = '\nbody, html {\n  margin: 0;\n  height: 100%;\n}\n\nbody.no-block {\n  flex-flow: column;\n  overflow-x: hidden;\n  display: flex;\n}\n\nbody {\n  background: #DEDEDE;\n}\n\n.fp-no-block {\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-direction: column;\n  cursor: pointer;\n  color: #444;\n  display: none;\n  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\n  text-align: center;\n  background: #FFF;\n  transition: margin 0.25s linear 0.25s;\n}\n\n.fp-no-block:hover {\n  background: #EFEFEF;\n}\n\n.fp-no-block.fp-visible {\n  display: flex;\n}\n\n.fp-no-sections {\n  flex: 2;\n}\n\n.fp-no-block p {\n  margin: 0;\n}\n\n.fp-no-sections p + p {\n  font-size: 16px;\n  margin-top: 5px;\n}\n\n.fdb-block {\n  box-shadow: 0;\n  margin-bottom: 0;\n  transition: margin 0.25s linear 0.25s;\n}\n\n.fp-active {\n  box-shadow: 0px 0px 20px rgba(0,0,0,0.14), 0 0px 6px rgba(0,0,0,0.16);\n  -moz-box-shadow: 0px 0px 20px rgba(0,0,0,0.14), 0 0px 6px rgba(0,0,0,0.16);\n  -webkit-box-shadow: 0px 0px 20px rgba(0,0,0,0.14), 0 0px 6px rgba(0,0,0,0.16);\n  z-index: 9999;\n}\n\nbody.fp-add-view [data-block-type],\nbody.fp-add-view .fp-no-block {\n  margin-bottom: 20px;\n}\n\nbody.fp-add-view [data-block-type] {\n  user-select: none;\n  position: relative;\n}\n\nbody.fp-add-view [data-block-type]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: block;\n  z-index: 10000;\n  content: "";\n}\n\n.fp-drop-placeholder {\n  height: 200px;\n  width: 100%;\n  border: solid 10px  #0098f7;\n  background: #FFF;\n  margin-bottom: 20px;\n}\n\n.fp-dragging {\n  display: none;\n}\n',
            h = {
                designsThumbsDir: "/img/block_thumbs/",
                designsImagesDir: "/img/block_images/",
                designsDefaultBlocks: "Contents",
                designStylesheets: ["https://cdnjs.cloudflare.com/ajax/libs/froala-design-blocks/1.0.2/css/froala_blocks.min.css", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css", "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"],
                designJavascripts: ["https://code.jquery.com/jquery-3.2.1.slim.min.js", "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js", "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"],
                appStyle: p,
                blockButtons: ["moveUp", "remove"],
                pageLeftButtons: [
                    ["edit", "layout"],
                    ["desktop", "tablet_landscape", "tablet_portrait", "phone"]
                ],
                pageCenterButtons: ['<div style="display: flex;"><span style="margin-top: 5px;">Powered by </span><a href="https://www.froala.com" style="display: inline-block; height: 20px; margin-left: 10px;" title="Froala" target="_blank"><svg style="height: 100%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 822.8 225.8"><defs><style>.cls-1,.cls-2{fill:#0098f7;}.cls-2{stroke:#231f20;stroke-miterlimit:10;stroke-width:5px;}</style></defs><title>froal-no-margin</title><path class="cls-1" d="M123.58,78.65A16.16,16.16,0,0,0,111.13,73H16.6C7.6,73,0,80.78,0,89.94V128.3a16.45,16.45,0,0,0,32.9,0V104.14h78.5A15.63,15.63,0,0,0,126.87,91.2,15.14,15.14,0,0,0,123.58,78.65Z" transform="translate(0 -61.94)"/><path class="cls-1" d="M103.54,170a16.05,16.05,0,0,0-11.44-4.85H15.79A15.81,15.81,0,0,0,0,180.93v88.69a16.88,16.88,0,0,0,5,11.92,16,16,0,0,0,11.35,4.7h.17a16.45,16.45,0,0,0,16.41-16.6v-73.4H92.2A15.61,15.61,0,0,0,107.89,181,15.1,15.1,0,0,0,103.54,170Z" transform="translate(0 -61.94)"/><path class="cls-2" d="M30.4,167.64" transform="translate(0 -61.94)"/><path class="cls-1" d="M233,144.17c-5.29-6.22-16-7.52-24.14-7.52-16.68,0-28.72,7.71-36.5,23.47v-5.67a16.15,16.15,0,1,0-32.3,0v115.5a16.15,16.15,0,1,0,32.3,0v-38.7c0-19.09,3.5-63.5,35.9-63.5a44.73,44.73,0,0,1,5.95.27h.12c12.79,1.2,20.06-2.73,21.6-11.69C236.76,151.48,235.78,147.39,233,144.17Z" transform="translate(0 -61.94)"/><path class="cls-1" d="M371.83,157c-13.93-13.11-32.9-20.33-53.43-20.33S279,143.86,265.12,157c-14.67,13.88-22.42,32.82-22.42,54.77,0,21.68,8,41.28,22.4,55.2,13.92,13.41,32.85,20.8,53.3,20.8s39.44-7.38,53.44-20.79c14.55-13.94,22.56-33.54,22.56-55.21S386.39,170.67,371.83,157Zm-9.73,54.77c0,25.84-18.38,44.6-43.7,44.6s-43.7-18.76-43.7-44.6c0-25.15,18.38-43.4,43.7-43.4S362.1,186.59,362.1,211.74Z" transform="translate(0 -61.94)"/><path class="cls-1" d="M552.7,138.14a16.17,16.17,0,0,0-16,16.3v1C526.41,143.85,509,136.64,490,136.64c-19.83,0-38.19,7.24-51.69,20.4C424,171,416.4,190,416.4,212c0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,552.7,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C513.73,168.34,536.4,183.55,536.4,211.74Z" transform="translate(0 -61.94)"/><path class="cls-1" d="M623.5,61.94a16.17,16.17,0,0,0-16,16.3v191.7a16.15,16.15,0,1,0,32.3,0V78.24A16.32,16.32,0,0,0,623.5,61.94Z" transform="translate(0 -61.94)"/><path class="cls-1" d="M806.5,138.14a16.17,16.17,0,0,0-16,16.3v1c-10.29-11.63-27.74-18.84-46.7-18.84-19.83,0-38.19,7.24-51.69,20.4-14.33,14-21.91,33-21.91,55,0,21.61,7.78,41.16,21.9,55,13.56,13.33,31.92,20.67,51.7,20.67,18.83,0,36.29-7.41,46.7-19.37v1.57a16.15,16.15,0,1,0,32.3,0V154.44A16.32,16.32,0,0,0,806.5,138.14Zm-16.3,73.6c0,30.44-22.81,44.3-44,44.3-24.57,0-43.1-19-43.1-44.3s18.13-43.4,43.1-43.4C767.53,168.34,790.2,183.55,790.2,211.74Z" transform="translate(0 -61.94)"/></svg></a></div>'],
                pageRightButtons: [
                    ["download"]
                ]
            },
            u = function(s) {
                function i() {
                    return n(this, i), t(this, s.apply(this, arguments))
                }
                return e(i, s), i.prototype.init = function(n, e) {
                    this.el = this.doc.createElement("DIV"), this.el.setAttribute("class", "fp-panel"), this._addTitle(n), this._addContent(e), a.append(this.page.container, this.el), this.render()
                }, i.prototype._addContent = function(n) {
                    var e = this.doc.createElement("DIV");
                    e.setAttribute("class", "fp-panel-body"), n && (e.innerHTML = n), a.append(this.el, e), this.body = e
                }, i.prototype._addTitle = function(n) {
                    var e = this.doc.createElement("DIV");
                    if (e.setAttribute("class", "fp-panel-head"), n) {
                        var t = this.doc.createElement("H2");
                        t.innerHTML = n, a.append(e, t)
                    }
                    a.append(this.el, e), this.head = e
                }, i.prototype.show = function() {
                    this.el.classList.add("fp-visible")
                }, i.prototype.hide = function() {
                    this.el.classList.remove("fp-visible")
                }, i.prototype.isVisible = function() {
                    return this.el.classList.contains("fp-visible")
                }, i
            }(s),
            g = function(s) {
                function i() {
                    return n(this, i), t(this, s.apply(this, arguments))
                }
                return e(i, s), i.prototype.render = function() {
                    this._initFilters(), this._initPanel(), this.loadedDesigns = {}
                }, i.prototype._initFilters = function() {
                    var n = this,
                        e = document.createElement("DIV");
                    e.classList.add("fp-panel-filter"), a.append(this.head, e);
                    var t = function(t) {
                        if (Object.prototype.hasOwnProperty.call(l.BLOCKS, t)) {
                            var s = n.doc.createElement("A");
                            s.setAttribute("data-block-type", a.underscores(t)), s.innerHTML = t, a.append(e, s), n.events.on(s, "click", function() {
                                return n.setActiveBlock(t)
                            })
                        }
                    };
                    for (var s in l.BLOCKS) t(s);
                    this.filter = e
                }, i.prototype._initPanel = function() {
                    var n = document.createElement("DIV");
                    n.classList.add("fp-panel-panel"), this.panel = n, a.append(this.body, n)
                }, i.prototype._refreshFilters = function(n) {
                    var e = this.panel.querySelector(".fp-panel-blocks-wrapper.fp-visible");
                    e && (e.classList.remove("fp-visible"), this.filter.querySelector("a.fp-active").classList.remove("fp-active")), this.filter.querySelector('a[data-block-type="' + a.underscores(n) + '"]').classList.add("fp-active")
                }, i.prototype._refreshDesigns = function(n) {
                    var e = void 0;
                    if (this.loadedDesigns[a.underscores(n)]) e = this.panel.querySelector('div.fp-panel-blocks-wrapper[data-block-type="' + a.underscores(n) + '"]');
                    else {
                        e = document.createElement("DIV"), e.setAttribute("data-block-type", a.underscores(n)), e.classList.add("fp-panel-blocks-wrapper"), a.append(this.panel, e);
                        for (var t = 1; t <= l.BLOCKS[n].length; t++) {
                            var s = new l(this, n, l.BLOCKS[n][t - 1]);
                            a.append(e, s.el)
                        }
                        this.loadedDesigns[a.underscores(n)] = !0
                    }
                    e.classList.add("fp-visible")
                }, i.prototype.setActiveBlock = function() {
                    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Sections";
                    "Sections" === n && (n = this.opts.designsDefaultBlocks), this._refreshFilters(n), this._refreshDesigns(n)
                }, i
            }(u),
            f = function(a) {
                function s() {
                    return n(this, s), t(this, a.apply(this, arguments))
                }
                return e(s, a), s.prototype.init = function(n) {
                    var e = this;
                    this.name = n.name, this.template = n.template;
                    var t = this.doc.createElement("DIV");
                    t.classList.add("fp-no-block", "fp-no-" + this.name.toLowerCase()), t.setAttribute("data-fp", "true"), t.innerHTML = this.template, this.el = t, this.events.on(t, "click", function() {
                        return e.click()
                    }), this.events.on(t, "mouseenter", function() {
                        return e._mouseEnter()
                    })
                }, s.prototype.click = function() {
                    this.events.emit("emptyBlock.click", this)
                }, s.prototype._mouseEnter = function() {
                    this.page.blockToolbar.hide()
                }, s
            }(s);
        f.HEADER = {
            name: "Headers",
            template: "<p>Header</p>"
        }, f.FOOTER = {
            name: "Footers",
            template: "<p>Footer</p>"
        }, f.SECTION = {
            name: "Sections",
            template: "<h1>Blank Website</h1><p>(click to add a design block)</p>"
        };
        var v = function() {
                function e() {
                    n(this, e), this.domEvents = {}, this.internalEvents = {}
                }
                return e.prototype._id = function(n) {
                    return this._ids || (this._ids = {}), this._ids[n] ? this._ids[n] : (this._ids[n] = Object.keys(this._ids).length + 1, this._ids[n])
                }, e.prototype.on = function(n, e, t) {
                    var a = this,
                        s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    e.split(" ").forEach(function(e) {
                        var i = a._id(n);
                        a.domEvents[i] || (a.domEvents[i] = {}), a.domEvents[i][e] || (a.domEvents[i][e] = []), a.domEvents[i][e].push({
                            callback: t,
                            options: s
                        }), n.addEventListener(e, t, s)
                    })
                }, e.prototype.off = function(n, e) {
                    var t = this;
                    e.split(" ").forEach(function(e) {
                        var a = t._id(n);
                        t.domEvents[a] && t.domEvents[a][e] && t.domEvents[a][e].forEach(function(t) {
                            n.removeEventListener(e, t.callback, t.options)
                        })
                    })
                }, e.prototype.once = function(n, e, t) {
                    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    a.once = !0, this.on(n, e, t, a)
                }, e.prototype.listen = function(n, e) {
                    var t = this;
                    n.split(" ").forEach(function(n) {
                        t.internalEvents[n] || (t.internalEvents[n] = []), t.internalEvents[n].push(e)
                    })
                }, e.prototype.emit = function(n) {
                    for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) t[a - 1] = arguments[a];
                    this.internalEvents[n] && this.internalEvents[n].forEach(function(n) {
                        n.apply(undefined, t)
                    })
                }, e
            }(),
            b = function(s) {
                function i() {
                    return n(this, i), t(this, s.apply(this, arguments))
                }
                return e(i, s), i.prototype.init = function() {
                    this.el = this.doc.createElement("DIV"), this.el.classList.add("fp-page-toolbar"), a.append(this.page.body, this.el), this._addButtons(this.opts.pageLeftButtons, "fp-lp-zone"), this._addButtons(this.opts.pageCenterButtons, "fp-cp-zone"), this._addButtons(this.opts.pageRightButtons, "fp-rp-zone"), this.events.emit("button.refresh")
                }, i.prototype._addButtons = function(n, e) {
                    var t = this,
                        s = this.doc.createElement("DIV");
                    s.classList.add("fp-btn-zone"), e && s.setAttribute("id", e), n.forEach(function(n) {
                        if (Array.isArray(n)) {
                            var e = t.doc.createElement("DIV");
                            e.classList.add("fp-btn-group"), n.forEach(function(n) {
                                var s = new c(t.page, n);
                                a.append(e, s.el)
                            }), a.append(s, e)
                        } else s.innerHTML += n
                    }), a.append(this.el, s)
                }, i
            }(s),
            w = function() {
                function e(t) {
                    n(this, e), this.opts = Object.assign({}, h, t), this.doc = document, this.body = document.body, this.container = this.doc.createElement("DIV"), this.container.classList.add("fp-container"), a.append(this.body, this.container), this.el = this.doc.createElement("DIV"), this.el.classList.add("fp-element"), a.append(this.container, this.el), this.events = new v, this.designsPanel = new g(this), this.render()
                }
                return e.prototype.render = function() {
                    this._initIframe(), this._initEmptyBlocks(), this._initPageToolbar(), this._initDropZone(), this._initBlockToolbar(), this._initEvents(), this.refreshBlocks(), this.refreshView()
                }, e.prototype._initBlockToolbar = function() {
                    this.blockToolbar = new m(this)
                }, e.prototype._initPageToolbar = function() {
                    this.activeView = r.ADD, this.pageToolbar = new b(this), this.container.style.height = "calc(100% - " + this.pageToolbar.el.getBoundingClientRect().height + "px)"
                }, e.prototype._buildStylesheets = function() {
                    return this.opts.designStylesheets.map(function(n) {
                        return '<link rel="stylesheet" href="' + n + '" />'
                    }).join("")
                }, e.prototype._buildJavascripts = function() {
                    return this.opts.designJavascripts.map(function(n) {
                        return '<script src="' + n + '"></script>'
                    }).join("")
                }, e.prototype._initIframe = function() {
                    var n = document.createElement("IFRAME");
                    this.iframe = n, n.setAttribute("src", "about:blank"), a.append(this.el, n), this.iframeDoc = n.contentWindow.document, this.iframeDoc.open(), this.iframeDoc.write("<!DOCTYPE html>"), this.iframeDoc.write('<html>\n                            <head>\n                              <meta name="viewport" content="width=device-width, initial-scale=1">\n                              ' + this._buildStylesheets() + "\n\n                              <style data-fp>" + this.opts.appStyle + "</style>\n                            </head>\n                            <body>\n                              " + this._buildJavascripts() + "\n                            </body>\n                          </html>"), this.iframeDoc.close(), this.iframeBody = this.iframeDoc.body, this.iframeHead = this.iframeDoc.head
                }, e.prototype._initEmptyBlocks = function() {
                    this.emptySection = new f(this, f.SECTION), a.append(this.iframeBody, this.emptySection.el)
                }, e.prototype.refreshIframeSize = function() {
                    this.iframe.style.height = this.iframeBody.scrollHeight + "px"
                }, e.prototype.refreshBlocks = function() {
                    var n = !this.iframeBody.querySelector("[data-block-type]");
                    this.emptySection.el.classList.toggle("fp-visible", n), this.iframeBody.classList.toggle("no-block", n), this.container.classList.toggle("fp-no-block", n), this.refreshIframeSize(), this.events.emit("page.refresh")
                }, e.prototype.refreshView = function() {
                    var n = this;
                    this.body.classList.toggle("fp-add-view", this.activeView === r.ADD), this.body.classList.toggle("fp-full-view", this.activeView === r.FULL), this.iframeBody.classList.toggle("fp-add-view", this.activeView === r.ADD), this.iframeBody.classList.toggle("fp-full-view", this.activeView === r.FULL), this.designsPanel.setActiveBlock(), this.activeView === r.ADD ? this.designsPanel.show() : this.designsPanel.hide(), Array.from(this.iframeBody.querySelectorAll("[data-block-type]:not(header):not(footer)")).forEach(function(e) {
                        n.activeView === r.ADD ? e.setAttribute("draggable", "true") : e.removeAttribute("draggable")
                    })
                }, e.prototype._initEvents = function() {
                    var n = this;
                    this.events.listen("emptyBlock.click", function() {
                        n.activeView = r.ADD, n.refreshView()
                    }), this.events.listen("designBlock.click", function(e) {
                        return n.insertBlock(e)
                    }), this.events.listen("designBlock.willDrag", function(e) {
                        n.draggingDesignBlock = e, n.dragImage = e.dragImage, n.dropPlaceholder && (n.dropPlaceholder.style.height = "")
                    })
                }, e.prototype._dragend = function() {
                    this.dropPlaceholder && (a.remove(this.dropPlaceholder), this.dropPlaceholder.isVisible = !1), this.body.classList.remove("fp-dragging")
                }, e.prototype._drop = function() {
                    this.activeView === r.ADD && (this.draggingBlock && this.dropPlaceholder && this.dropPlaceholder.isVisible && (this.draggingBlock.classList.remove("fp-dragging"), a.after(this.dropPlaceholder, this.draggingBlock), a.remove(this.dropPlaceholder), a.remove(this.dragImage)), this.draggingDesignBlock && (this.dropPlaceholder && this.dropPlaceholder.isVisible || this.container.classList.contains("fp-no-block")) && (this.insertBlock(this.draggingDesignBlock, this.dropPlaceholder), a.remove(this.dropPlaceholder), a.remove(this.dragImage)), this.dropPlaceholder.isVisible = !1, this.draggingDesignBlock = null, this.draggingBlock = null), this.body.classList.remove("fp-dragging")
                }, e.prototype._initDropZone = function() {
                    var n = this;
                    this.dropZone = this.doc.createElement("DIV"), this.dropZone.classList.add("fp-drop-zone"), this.dropZone.innerHTML = '<p>Drag & Drop a Design Block</p>\n                                <p>(or click one)</p>\n                                <div id="fp-drop-visual">\n                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200.26 68.42">\n                                    <path d="M6.19,9.4Q4.9,7.87,3.62,6.3L5.18,5Q6.44,6.6,7.72,8.11Z"/>\n                                    <path d="M139.15,68.42q-2,0-4,0l0-2q4.09.08,8.16,0l0,2Q141.29,68.42,139.15,68.42ZM128,68.13c-2.75-.15-5.52-.35-8.22-.61l.19-2c2.68.25,5.42.45,8.14.6Zm22.65,0-.11-2c2.7-.14,5.44-.33,8.15-.58l.18,2C156.12,67.78,153.36,68,150.63,68.12ZM166,66.79l-.24-2c2.69-.32,5.41-.7,8.09-1.11l.31,2C171.48,66.09,168.73,66.47,166,66.79Zm-53.43-.08c-2.73-.36-5.47-.78-8.15-1.25l.35-2c2.64.47,5.36.88,8.06,1.24Zm68.69-2.25-.37-2c2.66-.49,5.35-1,8-1.62l.43,2C186.68,63.41,184,64,181.28,64.46Zm-83.92-.4c-2.68-.58-5.38-1.24-8-1.94l.52-1.93c2.6.69,5.27,1.34,7.93,1.92Zm-15-3.94c-2.63-.82-5.26-1.71-7.81-2.65l.69-1.88c2.53.93,5.12,1.81,7.72,2.62ZM67.87,54.84c-2.54-1.06-5.07-2.19-7.53-3.37l.86-1.8C63.63,50.83,66.13,52,68.64,53Zm-14-6.62c-2.41-1.29-4.82-2.66-7.17-4.07l1-1.71c2.32,1.4,4.71,2.75,7.08,4ZM40.62,40.27c-2.28-1.52-4.55-3.12-6.74-4.75l1.19-1.6c2.17,1.62,4.41,3.19,6.66,4.69ZM28.19,31.08c-2.11-1.73-4.22-3.54-6.25-5.38l1.34-1.48c2,1.82,4.09,3.61,6.18,5.31ZM16.69,20.75c-1.94-1.91-3.86-3.91-5.73-5.93l1.47-1.35c1.84,2,3.74,4,5.66,5.86Z"/>\n                                    <path d="M196.38,61.16l-.49-1.94q1.94-.49,3.85-1l.52,1.93Q198.33,60.67,196.38,61.16Z"/>\n                                    <polygon points="1.39 9.88 0 0 9.24 3.73 1.39 9.88"/>\n                                  </svg>\n                                </div>\n                                ', a.append(this.container, this.dropZone), this.events.on(this.dropZone, "dragover dragenter", function(e) {
                        e.preventDefault(), n.dropZone.classList.add("fp-hover")
                    }), this.events.on(this.dropZone, "dragleave dragend", function() {
                        n.dropZone.classList.remove("fp-hover")
                    }), this.events.on(this.dropZone, "drop", function(e) {
                        return n._drop(e)
                    })
                }, e.prototype._makeBlockDraggable = function(n) {
                    var e = this,
                        t = n.el,
                        s = n.designBlock.blockType === l.HEADER,
                        i = n.designBlock.blockType === l.FOOTER;
                    this.dropPlaceholder || (this.dropPlaceholder = this.doc.createElement("DIV"), this.dropPlaceholder.classList.add("fp-drop-placeholder"), this.events.on(this.iframeDoc, "drop", function(n) {
                        return e._drop(n)
                    }), this.events.on(this.doc, "drop", function(n) {
                        return e._drop(n)
                    }), this.events.on(this.iframeDoc, "dragend", function(n) {
                        return e._drop(n)
                    }), this.events.on(this.doc, "dragend", function(n) {
                        return e._drop(n)
                    }), this.events.on(this.iframeDoc, "dragenter dragover", function(n) {
                        return n.preventDefault()
                    }), this.events.on(this.doc, "dragenter dragover", function(n) {
                        return n.preventDefault()
                    })), s || i || t.setAttribute("draggable", "true"), this.events.on(t, "dragover dragenter", function(n) {
                        if (n.preventDefault(), e.activeView === r.ADD) {
                            var o = n.clientY,
                                l = a.offset(t).top,
                                c = a.outerHeight(t);
                            s && o > l ? a.after(t, e.dropPlaceholder) : i && o > l ? a.before(t, e.dropPlaceholder) : o > l + c / 2 ? a.after(t, e.dropPlaceholder) : a.before(t, e.dropPlaceholder), e.dropPlaceholder.isVisible = !0, e.refreshIframeSize()
                        }
                    }), this.events.on(t, "dragstart", function(n) {
                        if (e.activeView === r.ADD) {
                            if (s || i) return n.preventDefault(), n.stopPropagation(), !1;
                            e.body.classList.add("fp-dragging"), e.dragImage = e.doc.createElement("IMG"), e.dragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==", e.dragImage.style.position = "aboslute", a.append(e.body, e.dragImage), n.dataTransfer.setDragImage(e.dragImage, 0, 0), n.dataTransfer.setData("text/html", null), setTimeout(function() {
                                a.after(t, e.dropPlaceholder), e.dropPlaceholder.style.height = a.outerHeight(t, !0) + "px", e.dropPlaceholder.isVisible = !0, t.classList.add("fp-dragging")
                            }), e.draggingBlock = t
                        }
                        return !0
                    })
                }, e.prototype.insertBlock = function(n, e) {
                    var t = this,
                        s = new i(this, n);
                    if (Array.from(s.el.querySelectorAll("img")).forEach(function(n) {
                            t.events.once(n, "load", function() {
                                return t.refreshIframeSize()
                            }), a.scrollTo(s.el)
                        }), n.blockType === l.HEADER) {
                        var o = this.iframeBody.querySelector("header");
                        o && a.remove(o), a.prepend(this.iframeBody, s.el)
                    } else if (n.blockType === l.FOOTER) {
                        var r = this.iframeBody.querySelector("footer");
                        r && a.remove(r), a.append(this.iframeBody, s.el)
                    } else if (e) a.after(e, s.el);
                    else {
                        var c = this.iframeBody.querySelector("footer");
                        c ? a.before(c, s.el) : a.append(this.iframeBody, s.el)
                    }
                    this.refreshBlocks(), this._makeBlockDraggable(s), this.events.on(s.el, "click", function(n) {
                        n.target && "A" === n.target.tagName && n.preventDefault()
                    }), this.events.emit("block.inserted", s)
                }, e.prototype.setBlockPlaceholder = function(n) {
                    this._blockPlaceholder = n
                }, e.prototype._getHeadHTML = function() {
                    return Array.from(this.iframeDoc.querySelectorAll("head > *:not([data-fp])")).map(function(n) {
                        return n.outerHTML
                    }).join("\n  ")
                }, e.prototype._getBodyHTML = function() {
                    return Array.from(this.iframeDoc.querySelectorAll("body > [data-block-type]")).map(function(n) {
                        return n.outerHTML
                    }).join("\n") + "\n      " + Array.from(this.iframeDoc.querySelectorAll("body > *:not([data-fp]):not([data-block-type])")).map(function(n) {
                        return n.outerHTML
                    }).join("\n") + "\n    "
                }, e.prototype.getHTML = function() {
                    return "<!DOCTYPE html>\n<html>\n<head>\n  " + this._getHeadHTML() + "\n</head>\n<body>\n" + this._getBodyHTML() + "\n</body>\n</html>\n"
                }, e
            }();
        return w.Events = v, w.Helpers = a, w.RegisterDesignBlock = l.Register, w.Button = c, w
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n, n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 text-center">\n        <p class="text-h3">\n          "Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast."\n        </p>\n\n        <p class="mt-5 mt-sm-4">\n          <a class="btn" href="https://www.froala.com">Download</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/1.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-6 text-center">\n        <h1>Call to Action</h1>\n        <p class="text-h3">\n          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts\n        </p>\n        <p class="mt-5 mt-sm-4">\n          <a class="btn" href="https://www.froala.com">Download</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/2.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-sm-8 col-md-6 col-lg-4 text-center">\n        <h3>\n          <strong>Right at the coast of the Semantics, a large language ocean. A small river named Duden.</strong>\n        </h3>\n        <p class="mt-5 mt-sm-4">\n          <a class="btn" href="https://www.froala.com">Download</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/3.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 col-lg-6 text-center">\n        <h1>Call to Action</h1>\n        <p class="text-h3">\n          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts\n        </p>\n        <p class="mt-5 mt-sm-4">\n          <a class="btn" href="https://www.froala.com">Download</a>\n        </p>\n      </div>\n    </div>\n\n    <div class="row pt-5 pb-3">\n      <div class="col-12 text-center">\n        <p><strong>Fortune 100 companies are using our products</strong></p>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-12 text-center">\n        <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/adobe.svg">\n        <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/discovery.svg">\n        <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2 " src="{{imagesDir}}/customers/ebay.svg">\n        <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/samsung.svg">\n        <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/orange.svg">\n        <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/salesforce.svg">\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/4.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 text-center">\n        <h1>Far far away, behind the word mountains, far from</h1>\n        <p class="mt-5">\n          <a class="btn" href="https://www.froala.com">Download</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/5.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-sm-10 col-md-8 col-lg-4 text-center">\n        <p class="text-h3">\n          Follow us and ask more on:\n        </p>\n        <p class="text-h2">\n          <a href="https://www.froala.com"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-pinterest"></i></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/6.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center pb-0 pb-lg-4">\n      <div class="col-12">\n        <h1>Call to action</h1>\n      </div>\n    </div>\n    <div class="row text-center pt-4 pt-md-5">\n      <div class="col-12 col-sm-10 col-md-6 col-lg-4 m-sm-auto">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3>First Action</h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>\n        <p class="mt-3"><a class="btn" href="https://www.froala.com">Button</a></p>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-6 col-lg-4 ml-sm-auto mr-sm-auto mt-5 mt-md-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3>Second Action</h3>\n        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n        <p class="mt-3"><a class="btn" href="https://www.froala.com">Button</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/7.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_c_1.svg)">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-10 col-lg-8 text-center">\n        <div class="fdb-box">\n          <h1>Call to Action</h1>\n          <p class="text-h3">\n            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts\n          </p>\n          <p class="mt-4">\n            <a class="btn" href="https://www.froala.com">Download</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/8.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-sm-9 text-left">\n        <h2>Use Froala Design Blocks for free in your project</h2>\n      </div>\n      <div class="col-12 col-sm-3 text-left text-sm-center mt-4 mt-sm-0">\n        <a class="btn" href="https://www.froala.com">Download</a>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/9.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block pb-0" style="background-image: url({{imagesDir}}/bg_1.svg)">\n  <div class="container">\n    <div class="row justify-content-end">\n      <div class="col-12 col-md-8 col-lg-6 text-center">\n        <div class="fdb-box br-0">\n          <h1>Call to Action</h1>\n          <p class="text-h3">\n            When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove\n          </p>\n          <p class="mt-4">\n            <a class="btn" href="https://www.froala.com">Download</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/10.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-sm-3 text-center">\n        <a class="btn" href="https://www.froala.com">Download</a>\n      </div>\n\n      <div class="col-12 col-sm-9 text-center text-sm-right mt-4 mt-sm-0">\n        <h2>Use Froala Design Blocks for free in your project</h2>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/11.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block" style="background-image: url({{imagesDir}}/alt_wide_2.svg)">\n  <div class="container">\n    <div class="row">\n      <div class="col-12 col-sm-10 col-md-8 col-lg-6 text-left">\n        <h1>Call to Action</h1>\n        <p class="text-h3">\n          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n        <p class="mt-4">\n          <a class="btn" href="https://www.froala.com">Download</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/12.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col-12">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">\n          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.\n        </p>\n      </div>\n    </div>\n\n    <div class="row justify-content-center align-items-center pt-5">\n      <div class="col-8 col-sm-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_2.svg">\n      </div>\n      <div class="col-12 col-sm-6 m-auto pt-4 pt-sm-0">\n        <h2><strong>Bootstrap</strong></h2>\n        <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>\n      </div>\n      <div class="col-12 col-sm-3 text-center pt-4 pt-sm-0">\n        <p><a class="btn btn-empty" href="https://www.froala.com">Take a Tour</a></p>\n        <p><a class="btn" href="https://www.froala.com">Start Now</a></p>\n        <p class="text-h5"><em>Some foo text</em></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/13.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col-12 text-center">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h2">\n          Far far away, behind the word mountains, far from.\n        </p>\n      </div>\n    </div>\n\n    <div class="row align-items-center pt-2 pt-lg-5">\n      <div class="col-12 col-md-8 col-lg-7">\n        <h2>Call to action</h2>\n        <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>\n        <p class="mt-4"><a class="btn" href="https://www.froala.com">Take a Tour</a></p>\n      </div>\n\n      <div class="col-8 col-md-4 m-auto m-md-0 ml-md-auto pt-5">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_1.svg">\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/14.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_4.svg">\n      </div>\n\n      <div class="col-12 col-md-8 ml-auto pt-5 pt-md-0">\n        <h2>Call to action</h2>\n        <p class="text-h3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>\n        <p class="mt-4"><a class="btn" href="https://www.froala.com">Take a Tour</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/15.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block bg-dark fdb-viewport" style="background-image: url({{imagesDir}}/bg_c_1.svg);">\n  <div class="container align-items-center justify-content-center d-flex">\n    <div class="row justify-content-center text-center">\n      <div class="col-12 col-md-10 col-lg-8">\n        <h1>Froala Design Blocks is Open Source and free to use in your apps</h1>\n        <p class="mt-5"><a href="https://www.froala.com" class="btn">Call to Action</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/16.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block fdb-viewport bg-dark" style="background-image: url({{imagesDir}}/bg_0.svg)">\n  <div class="container justify-content-center align-items-center d-flex">\n    <div class="row justify-content-center text-center">\n      <div class="col-12 col-md-8">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n        <p class="mt-5"><a href="https://www.froala.com" class="btn">Call to Action</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/17.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block pb-0">\n  <div class="container align-items-end justify-content-center d-flex">\n    <div class="row align-items-top text-left">\n      <div class="col-12 col-md-6 col-lg-5">\n        <p class="mb-5 mt-5"><img alt="image" height="40" src="{{imagesDir}}/img_logo.png"></p>\n        <h1>Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n        <p class="mt-4"><a href="https://www.froala.com" class="btn">Call to Action</a></p>\n      </div>\n\n      <div class="col-12 col-sm-4 col-md-6 col-lg-4 m-auto pt-5">\n        <img alt="image" class="img-fluid br-0" src="{{imagesDir}}/img_tall.png">\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/18.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n  <div class="container align-items-center justify-content-center d-flex">\n    <div class="row align-items-center text-left">\n      <div class="col-12 col-sm-6">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n\n      <div class="col-12 col-lg-5 ml-auto pt-5 pt-lg-0">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>\n        <p class="mt-4"><a href="https://www.froala.com" class="btn">Call to Action</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/19.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block pb-0">\n  <div class="container">\n    <div class="row align-items-center text-left">\n      <div class="col-12 col-md-8">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>\n      </div>\n      <div class="col-12 col-md-3 ml-auto text-left text-md-right">\n        <p><a href="https://www.froala.com" class="btn">Call to Action</a></p>\n      </div>\n    </div>\n\n    <div class="row pt-5">\n      <div class="col-12">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_very_wide.svg">\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/20.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block fdb-viewport" style="background-image: url({{imagesDir}}/alt_wide_1.svg)">\n  <div class="container align-items-center justify-content-center d-flex">\n    <div class="row align-items-center text-left">\n      <div class="col-12 col-sm-10 col-md-8 col-lg-6">\n        <h1>Froala Design Blocks is build on Boostrap Framework</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there.</p>\n        <p class="mt-5">\n          <a href="https://www.froala.com" class="btn btn-shadow">Call to Action</a>\n          <a href="https://www.froala.com" class="btn btn-white btn-shadow ml-4">Button</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "call_to_action/21.jpg"), n.RegisterDesignBlock("Call To Action", '<section class="fdb-block">\n    <div class="container">\n      <div class="row justify-content-center">\n        <div class="col-12 col-md-8 col-lg-5 text-center pb-md-5">\n          <h1>Froala Design Blocks</h1>\n          <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n          <p class="mt-4"><a href="https://www.froala.com" class="btn">Call to Action</a></p>\n        </div>\n      </div>\n\n      <div class="row text-center justify-content-center pt-5">\n        <div class="col-12 col-sm-6 col-lg-3">\n          <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n\n          <h3><strong>Feature One</strong></h3>\n\n          <p>Far far away, behind the word mountains, far from the countries</p>\n        </div>\n        <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">\n          <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n\n          <h3><strong>Feature Two</strong></h3>\n\n          <p>Separated they live in Bookmarksgrove right at the coast</p>\n        </div>\n\n        <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">\n          <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n\n          <h3><strong>Feature Three</strong></h3>\n\n          <p>A small river named Duden flows by their place and supplies it</p>\n        </div>\n\n        <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">\n          <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n\n          <h3><strong>Feature Four</strong></h3>\n\n          <p>Far far away, behind the word mountains, far from the countries</p>\n        </div>\n      </div>\n    </div>\n  </section>\n', "call_to_action/22.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n,
            n.RegisterDesignBlock("Contacts", '<section class="fdb-block pt-0">\n  <div class="container-fluid p-0 pb-md-5">\n    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"\n      width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>\n  </div>\n  <div class="container">\n    <div class="row mt-5">\n      <div class="col-12 col-md-6 col-lg-5">\n        <h2>Contact Us</h2>\n        <p class="text-h3">\n          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.\n        </p>\n\n        <p class="text-h3">\n          It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n\n\n        <p class="text-h3 mt-5">\n          <strong>Email:</strong> <a href="https://www.froala.com">hello@website.com</a>\n        </p>\n        <p class="text-h3">\n          <strong>Phone:</strong> <a href="https://www.froala.com">+44 123 123 1232</a>\n        </p>\n      </div>\n\n      <div class="col-12 col-md-6 ml-auto pt-5 pt-md-0">\n        <form>\n          <div class="row">\n            <div class="col">\n              <input type="text" class="form-control" placeholder="First name">\n            </div>\n            <div class="col">\n              <input type="text" class="form-control" placeholder="Last name">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Enter email">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Subject">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <button type="submit" class="btn">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/1.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block bg-dark" style="background-image: url({{imagesDir}}/bg_0.svg)">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-12 col-md-8 col-lg-7">\n        <h1>Contact Us</h1>\n        <h2>We love to hear from you!</h2>\n      </div>\n    </div>\n\n    <div class="row pt-4">\n      <div class="col-12">\n        <form>\n          <div class="row">\n            <div class="col-12 col-md">\n              <input type="text" class="form-control" placeholder="Name">\n            </div>\n            <div class="col-12 col-md mt-4 mt-md-0">\n              <input type="text" class="form-control" placeholder="Email">\n            </div>\n            <div class="col-12 col-md mt-4 mt-md-0">\n              <input type="text" class="form-control" placeholder="Phone (optional)">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Subject">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col text-center">\n              <button type="submit" class="btn">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/2.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-12 col-md-8 col-lg-7">\n        <h1>Contact Us</h1>\n        <p class="text-h3">One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>\n      </div>\n    </div>\n\n    <div class="row pt-4">\n      <div class="col-12 col-md-6">\n        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"\n          width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>\n      </div>\n\n      <div class="col-12 col-md-6 pt-5 pt-md-0">\n        <form>\n          <div class="row">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Enter email">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Subject">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <button type="submit" class="btn">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/3.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_0.svg)">\n  <div class="container">\n    <div class="row">\n      <div class="col">\n        <div class="fdb-box fdb-touch">\n          <div class="row text-center justify-content-center">\n            <div class="col-12 col-md-9 col-lg-7">\n              <h1>Contact Us</h1>\n              <p class="text-h3">Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>\n            </div>\n          </div>\n\n          <div class="row justify-content-center pt-4">\n            <div class="col-12 col-md-8">\n              <form>\n                <div class="row">\n                  <div class="col-12 col-md">\n                    <input type="text" class="form-control" placeholder="Name">\n                  </div>\n                  <div class="col-12 col-md mt-4 mt-md-0">\n                    <input type="text" class="form-control" placeholder="Email">\n                  </div>\n                </div>\n\n                <div class="row mt-4">\n                  <div class="col">\n                    <input type="email" class="form-control" placeholder="Subject">\n                  </div>\n                </div>\n\n                <div class="row mt-4">\n                  <div class="col">\n                    <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>\n                  </div>\n                </div>\n                <div class="row mt-4">\n                  <div class="col text-center">\n                    <button type="submit" class="btn">Submit</button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/4.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block pt-0">\n  <div class="container-fluid p-0 pb-3">\n    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"\n      width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>\n  </div>\n  <div class="container">\n    <div class="row text-center justify-content-center pt-5">\n      <div class="col-12 col-md-7">\n        <h1>Contact Us</h1>\n      </div>\n    </div>\n\n    <div class="row justify-content-center pt-4">\n      <div class="col-12 col-md-7">\n        <form>\n          <div class="row">\n            <div class="col">\n              <input type="text" class="form-control" placeholder="Email">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Subject">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col text-center">\n              <button type="submit" class="btn">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class="row-100"></div>\n  </div>\n  <div class="bg-dark">\n    <div class="container">\n      <div class="row-50"></div>\n      <div class="row justify-content-center text-center">\n        <div class="col-12 col-md mr-auto ml-auto">\n          <img alt="image" height="40" class="mb-2" src="{{imagesDir}}/img_round.svg">\n          <p class="text-h3">+44 (112) 123 752</p>\n        </div>\n\n        <div class="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">\n          <img alt="image" height="40" class="mb-2" src="{{imagesDir}}/img_round.svg">\n          <p class="text-h3">123 6th St.<br>Melbourne, FL 32904</p>\n        </div>\n\n        <div class="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">\n          <img alt="image" height="40" class="mb-2" src="{{imagesDir}}/img_round.svg">\n          <p class="text-h3">support@website.com</p>\n        </div>\n      </div>\n      <div class="row-50"></div>\n    </div>\n  </div>\n\n  <div class="container">\n    <div class="row-70"></div>\n    <div class="row text-center">\n      <div class="col">\n        <p class="text-h2">\n          <a href="https://www.froala.com"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-pinterest"></i></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/5.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block pt-0">\n  <div class="container-fluid p-0 pb-5">\n    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"\n      width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>\n  </div>\n  <div class="container">\n    <div class="row pt-5">\n      <div class="col-12">\n        <form>\n          <div class="row">\n            <div class="col-12 col-md">\n              <label>First Name</label>\n              <input type="text" class="form-control">\n            </div>\n            <div class="col-12 col-md mt-4 mt-md-0">\n              <label>Last Name</label>\n              <input type="text" class="form-control">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <label>Your Email</label>\n              <input type="email" class="form-control">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <label>Subject (optional but helpful)</label>\n              <input type="email" class="form-control">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <label>How can we help?</label>\n              <textarea class="form-control" name="message" rows="3"></textarea>\n            </div>\n          </div>\n          <div class="row mt-4 text-center">\n            <div class="col">\n              <button type="submit" class="btn">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/6.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block pb-0" style="background-image: url({{imagesDir}}/bg_3.svg)">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-12 col-md-8 col-lg-7">\n        <h1>Contact Us</h1>\n        <p class="text-h3">If you\u2019re already an active user, please <a href="https://www.froala.com">sign in</a> before contacting us.</p>\n      </div>\n    </div>\n    <div class="row-50">\n    </div>\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 col-lg-7">\n        <form>\n          <div class="row">\n            <div class="col">\n              <label>Your Email Address</label>\n              <input type="text" class="form-control">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <label>Subject (optional but helpful)</label>\n              <input type="email" class="form-control">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <label>How can we help?</label>\n              <textarea class="form-control" name="message" rows="3"></textarea>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col text-right">\n              <button type="submit" class="btn">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class="row-100"></div>\n  </div>\n\n  <div class="container-fluid p-0">\n    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"\n      width="100%" height="300" frameborder="0" style="border:0" allowfullscreen=""></iframe>\n  </div>\n</section>\n', "contacts/7.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block pt-0">\n  <div class="bg-gray">\n    <div class="container">\n      <div class="row-100"></div>\n      <div class="row text-left">\n        <div class="col-8">\n          <h1>Contact Us</h1>\n          <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n        </div>\n      </div>\n      <div class="row-100"></div>\n    </div>\n  </div>\n  <div class="container">\n    <div class="row-100"></div>\n    <div class="row">\n      <div class="col-12 col-md-6 col-lg-5">\n        <h2>Call or email</h2>\n        <p class="text-large">Support, Sales, and Account Management services are currently available in English</p>\n\n        <p class="text-h3 mt-4 mt-lg-5">\n          <strong>Support</strong>\n        </p>\n        <p>\n          +800 3005 4300\n        </p>\n        <p>\n          <a href="https://www.froala.com">Contact Support</a>\n        </p>\n        <p>\n          Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.\n        </p>\n\n        <p class="text-h3 mt-4 mt-lg-5">\n          <strong>Sales</strong>\n        </p>\n        <p>\n          +800 3005 4300\n        </p>\n        <p>\n          <a href="https://www.froala.com">Contact Sales</a>\n        </p>\n        <p>\n          Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.\n        </p>\n\n        <p class="text-h3 mt-4 mt-lg-5">\n          <strong>General inquiries</strong>\n        </p>\n        <p>\n          <a href="https://www.froala.com">hello@website.com</a>\n        </p>\n      </div>\n\n      <div class="col-12 col-md-6 ml-auto">\n        <h2>Drop us a line</h2>\n        <form>\n          <div class="row">\n            <div class="col">\n              <input type="text" class="form-control" placeholder="First name">\n            </div>\n            <div class="col">\n              <input type="text" class="form-control" placeholder="Last name">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="text" class="form-control" placeholder="Company Name">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Email">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="text" class="form-control" placeholder="Phone">\n            </div>\n            <div class="col">\n              <input type="text" class="form-control" placeholder="Country">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <select class="form-control" required="">\n                  <option value="">Select Department</option>\n                  <option value="1">Support</option>\n                  <option value="2">Sales</option>\n                  <option value="3">Accounting</option>\n                </select>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <textarea class="form-control" name="message" rows="5" placeholder="How can we help?"></textarea>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <button type="submit" class="btn">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/8.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block bg-gray">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-12 col-md-8 col-lg-7">\n        <p class="text-h2">support@website.com</p>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n        <p><br></p>\n        <p class="text-h2">\n          <a href="https://www.froala.com"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-pinterest"></i></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/9.jpg"), n.RegisterDesignBlock("Contacts", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-12 col-md-8 col-lg-7">\n        <h1>Contact Us</h1>\n        <p class="text-h3">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n    </div>\n    <div class="row-70"></div>\n    <div class="row">\n      <div class="col-12 col-md-8 col-lg m-auto">\n        <form>\n          <div class="row">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Enter email">\n            </div>\n          </div>\n\n          <div class="row mt-4">\n            <div class="col">\n              <input type="email" class="form-control" placeholder="Subject">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <textarea class="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <button type="submit" class="btn">Submit</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <div class="col-12 col-md-8 col-lg pt-5 m-auto pt-lg-0">\n        <iframe class="mb-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"\n          width="100%" height="200" frameborder="0" style="border:0" allowfullscreen=""></iframe>\n\n        <p><strong>Showroom</strong></p>\n        <p>\n          71 Pilgrim Avenue<br>Chevy Chase, MD 20815\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contacts/10.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n, n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col col-md-8 text-center">\n        <h1>Froala Design Blocks</h1>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/1.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col col-md-8 text-center">\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in <a href="https://www.froala.com">Bookmarksgrove</a> right at the coast of the Semantics, a large language\n          ocean.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/2.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col col-md-8 text-center">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far <a href="https://www.froala.com">World of Grammar</a>.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/3.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col col-sm-10 col-md-8 text-left">\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/4.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-end">\n      <div class="col col-sm-10 col-md-8 text-left">\n        <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far <a href="https://www.froala.com">World of Grammar</a>.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/5.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col text-left">\n        <h2>Far far away...</h2>\n\n        <p>Far far away, behind the word mountains, far from the countries <a href="https://www.froala.com">Vokalia</a> and <a href="https://www.froala.com">Consonantia</a>, there live the blind texts. Separated they live in Bookmarksgrove right at the coast\n          of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n\n        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the <a href="https://www.froala.com">Little Blind Text</a>          should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn\u2019t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their\n          agency, where they abused her for their.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/6.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col text-center">\n        <h1>Froala Design Blocks</h1>\n\n        <div class="row text-left pt-4">\n          <div class="col-12 col-md-6">\n            <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden\n              flows by their place far far away.</p>\n          </div>\n          <div class="col-12 col-md-6">\n            <p class="text-h3">Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at\n              the coast.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/7.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col text-center">\n        <h1>Froala Design Blocks</h1>\n        <h2>Subtitle comes here.</h2>\n        <p class="text-h3"><a href="https://www.froala.com">Learn More &gt;</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.froala.com">Buy &gt;</a></p>\n        <img alt="image" class="img-fluid mt-5" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/8.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col text-center">\n        <h1>Froala Design Blocks</h1>\n      </div>\n    </div>\n\n    <div class="row pt-4">\n      <div class="col">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n      <div class="col">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_2.jpg">\n      </div>\n    </div>\n    <div class="row pt-4">\n      <div class="col">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/9.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col text-center">\n        <h1>Froala Design Blocks</h1>\n      </div>\n    </div>\n    <div class="row pt-4">\n      <div class="col">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n      <div class="col">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n      <div class="col">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/10.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col text-center">\n        <h1>Froala Design Blocks</h1>\n      </div>\n    </div>\n\n    <div class="row pt-4">\n      <div class="col-6 col-md-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n      <div class="col-6 col-md-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_2.jpg">\n      </div>\n      <div class="col-6 col-md-3 mt-4 mt-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n      <div class="col-6 col-md-3 mt-4 mt-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_2.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/11.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-6 col-lg-5">\n        <h1>Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n      </div>\n      <div class="col-12 col-md-6 ml-md-auto mt-4 mt-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/12.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col col-md-8 text-center">\n        <img alt="image" class="fdb-icon mb-4" src="{{imagesDir}}/img_square_1.svg">\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/13.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-6 mb-4 mb-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n      <div class="col-12 col-md-6 col-lg-5 ml-md-auto text-left">\n        <h1>Froala Blocks</h1>\n        <p class="text-h3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n        <p><a class="btn btn-round mt-4" href="https://www.froala.com">Download</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/14.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block pb-0">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-6 col-lg-5">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_square_1.svg">\n        <h1>Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n      </div>\n      <div class="col-10 col-sm-6 m-auto col-md-4 pt-4 pt-md-0">\n        <img alt="image" class="img-fluid br-0" src="{{imagesDir}}/img_tall.png">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/15.jpg"),
            n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 text-center">\n        <div class="row justify-content-center pb-4">\n          <div class="col-4 col-sm-3 col-md-2"><img alt="image" class="fdb-icon" src="{{imagesDir}}/img_square_1.svg"></div>\n          <div class="col-4 col-sm-3 col-md-2"><img alt="image" class="fdb-icon" src="{{imagesDir}}/img_square_2.svg"></div>\n          <div class="col-4 col-sm-3 col-md-2"><img alt="image" class="fdb-icon" src="{{imagesDir}}/img_square_3.svg"></div>\n        </div>\n\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/16.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block pb-0">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-10 col-sm-6 m-auto col-md-4 pb-4 pb-md-0">\n        <img alt="image" class="img-fluid br-0" src="{{imagesDir}}/img_tall.png">\n      </div>\n\n      <div class="col-12 ml-auto col-md-6 col-lg-5">\n        <h1>Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n        <p><a class="btn btn-round mt-4 mb-5 mb-md-0" href="https://www.froala.com">Download</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/17.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-12 col-lg-6 col-xl-5">\n        <h1>Design Blocks</h1>\n        <p class="text-h3 mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n\n        <p><strong>Works in every browser:</strong></p>\n        <p>\n          <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_square_1.svg">\n          <img alt="image" class="fdb-icon ml-2" src="{{imagesDir}}/img_square_2.svg">\n          <img alt="image" class="fdb-icon ml-2" src="{{imagesDir}}/img_square_3.svg">\n          <img alt="image" class="fdb-icon ml-2" src="{{imagesDir}}/img_square_4.svg"></p>\n      </div>\n      <div class="col-12 col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/18.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-left">\n      <div class="col-12 col-md-6">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_square_1.svg">\n        <h3><strong>Awesome Things</strong></h3>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far from the countries Vokalia and Consonantia.</p>\n      </div>\n      <div class="col-12 col-md-6 pt-5 pt-md-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_square_2.svg">\n        <h3><strong>More Awesomeness</strong></h3>\n        <p class="text-h3">Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries <a href="https://www.froala.com">Vokalia and Consonantia</a>, there live the blind texts. </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/19.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_c_1.svg);">\n  <div class="container">\n    <div class="row text-left">\n      <div class="col-12 col-sm-10 m-auto m-md-0 col-md-8 col-lg-6">\n        <div class="fdb-box">\n          <div class="row justify-content-center">\n            <div class="col-12 col-xl-8 text-center">\n              <h1>Froala Design Blocks</h1>\n              <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>\n\n              <p class="text-h3 mt-4"><a href="https://www.froala.com">Learn More &gt;</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/20.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block fdb-image-bg" style="background-image: url({{imagesDir}}/alt_wide_2.svg);">\n  <div class="container">\n    <div class="row text-left">\n      <div class="col-12 col-md-8 col-lg-6 ml-sm-auto">\n        <div class="fdb-box fdb-touch">\n          <div class="row justify-content-center">\n            <div class="col-12 col-xl-8 text-center">\n              <h1>Froala Design Blocks</h1>\n              <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>\n\n              <p class="text-h3 mt-4"><a href="https://www.froala.com" class="btn btn-round">Register</a></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/21.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-lg-8 col-xl-6 text-center">\n        <img alt="image" width="200" src="{{imagesDir}}/img_logo.png">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</p>\n\n        <p class="text-h3 mt-5"><a href="https://www.froala.com" class="btn btn-round">Download Now</a></p>\n        <p>Latest Version: 2.3.5</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/22.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block pb-0">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pb-5 pb-md-0">\n        <img alt="image" class="img-fluid br-0" src="{{imagesDir}}/img_tall.png">\n      </div>\n\n      <div class="col-12 ml-md-auto col-md-7 col-lg-5 pb-5 pb-md-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_square_1.svg">\n        <h1>Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>\n        <p class="mt-4">\n          <a class="btn" href="https://www.froala.com">Download</a>\n          <a class="btn ml-3" href="https://www.froala.com">Register</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/23.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block pb-0">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-7 col-lg-5 ml-md-auto">\n        <h1>Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>\n\n        <p class="mt-5">\n          <img alt="image" height="25" class="mr-4" src="{{imagesDir}}/customers/samsung.svg">\n          <img alt="image" height="25" class="mr-4" src="{{imagesDir}}/customers/adobe.svg">\n          <img alt="image" height="25" src="{{imagesDir}}/customers/amazon.svg">\n        </p>\n      </div>\n\n      <div class="col-10 col-sm-6 col-md-5 col-lg-4 m-auto pt-5 pt-md-0">\n        <img alt="image" class="img-fluid br-0" src="{{imagesDir}}/img_tall.png">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/24.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col-12">\n        <div class="row justify-content-center pb-5">\n          <div class="col-12 col-lg-8 text-center">\n            <h1>Froala Design Blocks is Open Source and free to use</h1>\n          </div>\n        </div>\n\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/25.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="col-fill-left" style="background-image: url({{imagesDir}}/bg_c_1.svg)">\n  </div>\n\n  <div class="container">\n    <div class="row justify-content-end">\n      <div class="col-12 col-md-5 text-center">\n        <h1>Froala Blocks</h1>\n        <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove</p>\n\n        <p class="mt-4"><a href="https://www.froala.com">Learn More &gt;</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/26.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block pt-0 pb-0">\n  <div class="col-fill-right" style="background-image: url({{imagesDir}}/bg_c_2.svg)">\n  </div>\n\n  <div class="container pt-5 pb-5">\n    <div class="row">\n      <div class="col-12 col-md-5 text-center">\n        <h1>Froala Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n        <p class="mt-4 mb-5"><a class="btn" href="https://www.froala.com">Button</a></p>\n\n        <p>Follow us on</p>\n        <p>\n          <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/27.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block fdb-image-bg" style="background: url({{imagesDir}}/img_bg.jpg)">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>Made with <span class="heart">\u2764</span> by Froala</h1>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/28.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center align-items-center">\n      <div class="col-8 col-md-4">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_2.svg">\n      </div>\n\n      <div class="col-4 col-md-2">\n        <div class="row">\n          <div class="col-12">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_3.svg">\n          </div>\n        </div>\n\n        <div class="row mt-4">\n          <div class="col-12">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_4.svg">\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-6 col-lg-5 ml-auto pt-5 pt-md-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h1>Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/29.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-6 col-lg-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n\n      <div class="col-6 col-lg-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_2.jpg">\n      </div>\n\n      <div class="col-12 col-lg-6 pt-5 pt-lg-0">\n        <p class="text-h3 text-left">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>\n        <p class="text-h3 text-left">Right at the coast of the Semantics, a large language ocean. A small river named Duden. <a href="https://www.froala.com">[Read More]</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/30.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-left align-items-center">\n      <div class="col-12 col-md-6 col-lg-4">\n        <h2>Your Website</h2>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n        <p class="text-h3"><a href="https://www.froala.com">Read More</a></p>\n      </div>\n\n      <div class="col-12 col-md-6 col-lg-4 pt-4 pt-md-0">\n        <h2>Amazing Design</h2>\n        <p class="text-h3">Right at the coast of the Semantics, a large language ocean. A small river named Dude a rge language ocean there live the blind.</p>\n        <p class="text-h3"><a href="https://www.froala.com">Read More</a></p>\n      </div>\n\n      <div class="col-12 col-md-8 m-auto m-lg-0 col-lg-4 pt-5 pt-lg-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/31.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h2"><em>Right at the coast of the Semantics, a large language ocean.</em></p>\n      </div>\n    </div>\n\n    <div class="row text-center pt-3 pt-xl-5">\n      <div class="col-12 col-sm-10 m-auto m-md-0 col-md-6">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n      </div>\n\n      <div class="col-12 col-sm-10 m-auto m-md-0 col-md-6 pt-5 pt-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_2.jpg">\n        <p class="text-h3">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/32.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block pb-0" style="background-image: url({{imagesDir}}/bg_0.svg);">\n  <div class="container">\n    <div class="row text-left">\n      <div class="col-12 col-md-8 col-lg-6">\n        <div class="fdb-box fdb-touch br-0">\n          <h2><strong>Design Blocks</strong></h2>\n          <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n          <p class="text-h3 mt-4"><a href="https://www.froala.com">Read More</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/33.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block pb-0" style="background-image: url({{imagesDir}}/bg_3.svg);">\n  <div class="container">\n    <div class="row text-left justify-content-end">\n      <div class="col-12 col-md-6 col-xl-4">\n        <div class="fdb-box br-0">\n          <h2><strong>Design Blocks</strong></h2>\n          <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>\n\n          <p class="text-h3 mt-4"><a href="https://www.froala.com">Read More</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/34.jpg"), n.RegisterDesignBlock("Contents", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-left align-items-center">\n      <div class="col-10 col-sm-6 m-auto m-lg-0 col-lg-4">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_1.svg">\n      </div>\n\n      <div class="col-12 col-lg-8 pt-4 pt-lg-0">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>\n\n        <div class="row mt-5">\n          <div class="col-12 col-sm-6">\n            <h3><strong>Open Source</strong></h3>\n            <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n          </div>\n\n          <div class="col-12 col-sm-6 pt-3 pt-sm-0">\n            <h3><strong>Bootstrap</strong></h3>\n            <p class="text-h3">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "contents/35.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n, n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center justify-content-sm-center no-gutters">\n      <div class="col-12 col-sm-8 col-md-3 m-auto">\n        <h3><strong>Feature 1</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n      </div>\n\n      <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">\n        <h3><strong>Feature 2</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n\n      <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">\n        <h3><strong>Feature 3</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n    </div>\n\n    <div class="row text-center justify-content-md-center pt-3 pt-md-5">\n      <div class="col-12 col-sm-8 col-md-3 m-auto">\n        <h3><strong>Feature 4</strong></h3>\n        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>\n      </div>\n\n      <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">\n        <h3><strong>Feature 5</strong></h3>\n        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day.</p>\n      </div>\n\n      <div class="col-12 col-sm-8 col-md-3 m-auto pt-3 pt-md-0">\n        <h3><strong>Feature 6</strong></h3>\n        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/1.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-left justify-content-sm-center">\n      <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto">\n        <h3><strong>Feature 1</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0">\n        <h3><strong>Feature 2</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast of the.</p>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">\n        <h3><strong>Feature 3</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it with.</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">\n        <h3><strong>Feature 4</strong></h3>\n        <p>But nothing the copy said could convince her and so it didn\u2019t take long</p>\n      </div>\n    </div>\n\n    <div class="row text-left justify-content-sm-center pt-3 pt-lg-5">\n      <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto">\n        <h3><strong>Feature 5</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-md-0 pt-lg-0">\n        <h3><strong>Feature 6</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast of the.</p>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">\n        <h3><strong>Feature 7</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it with.</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-lg-3 col-xl-2 ml-xl-auto mr-xl-auto pt-3 pt-lg-0">\n        <h3><strong>Feature 8</strong></h3>\n        <p>But nothing the copy said could convince her and so it didn\u2019t take long</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/2.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col-12 text-center">\n        <h1>Features</h1>\n      </div>\n    </div>\n\n    <div class="row text-left justify-content-center pt-5">\n      <div class="col-12 col-md-6 col-lg-5 m-auto">\n        <h3><strong>Feature One</strong></h3>\n\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n      </div>\n      <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-md-0">\n        <h3><strong>Feature Two</strong></h3>\n\n        <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.</p>\n      </div>\n    </div>\n\n    <div class="row text-left justify-content-center pt-lg-4">\n      <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">\n        <h3><strong>Feature Three</strong></h3>\n\n        <p class="text-h3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>\n      </div>\n      <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">\n        <h3><strong>Feature Four</strong></h3>\n\n        <p class="text-h3">A small river named Duden flows by their place far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/3.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block bg-dark" style="background-image: url({{imagesDir}}/bg_0.svg)">\n  <div class="container">\n    <div class="row">\n      <div class="col text-center">\n        <h1>Froala Design Blocks</h1>\n      </div>\n    </div>\n\n    <div class="row-70"></div>\n\n    <div class="row text-center justify-content-sm-center no-gutters">\n      <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto">\n        <div class="fdb-box fdb-touch">\n          <h2>Feature 1</h2>\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n          <p class="mt-4"><a href="https://www.froala.com">Learn More &gt;</a></p>\n        </div>\n      </div>\n      <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">\n        <div class="fdb-box fdb-touch">\n          <h2>Feature 2</h2>\n          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n          <p class="mt-4"><a href="https://www.froala.com">Learn More &gt;</a></p>\n        </div>\n      </div>\n      <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">\n        <div class="fdb-box fdb-touch">\n          <h2>Feature 3</h2>\n          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n          <p class="mt-4"><a href="https://www.froala.com">Learn More &gt;</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/4.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-lg-6 col-xl-5">\n        <h1>Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n\n        <div class="row pt-4 pt-xl-5">\n          <div class="col-12 col-md-5">\n            <h4><strong>Feature One</strong></h4>\n            <p>A small river named Duden flows</p>\n          </div>\n          <div class="col-12 col-md-5 m-auto pt-3 pt-md-0">\n            <h4><strong>Feature Two</strong></h4>\n            <p>Separated they live in Bookmarksgrove</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n    </div>\n  </div>\n</section>\n', "features/5.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-8 col-lg-6 m-md-auto ml-lg-0 mr-lg-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n      <div class="col-12 col-lg-6 col-xl-5 ml-sm-auto pt-5 pt-lg-0">\n        <h1>Design Blocks</h1>\n\n        <div class="row pt-4 pt-xl-5">\n          <div class="col-12 col-sm-6 col-xl-5">\n            <h4><strong>Feature One</strong></h4>\n            <p>Far far away, behind the word mountains</p>\n          </div>\n          <div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">\n            <h4><strong>Feature Two</strong></h4>\n            <p>Separated they live in Bookmarksgrove</p>\n          </div>\n        </div>\n\n        <div class="row pt-3">\n          <div class="col-12 col-sm-6 col-xl-5">\n            <h4><strong>Feature Three</strong></h4>\n            <p>A small river named Duden flows by me</p>\n          </div>\n          <div class="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">\n            <h4><strong>Feature Four</strong></h4>\n            <p>Separated they live in Bookmarksgrove</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/6.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature 1</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-lg-5 col-xl-4 m-auto pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature 2</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/7.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>Features</h1>\n        <img alt="image" class="img-fluid mt-5" src="{{imagesDir}}/img_very_wide.svg">\n      </div>\n    </div>\n\n    <div class="row text-center justify-content-center mt-5">\n      <div class="col-12 col-sm-4 col-lg-3 m-md-auto">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature 1</strong></h3>\n      </div>\n\n      <div class="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature 2</strong></h3>\n      </div>\n\n      <div class="col-12 col-sm-4 col-lg-3 m-auto pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature 3</strong></h3>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/8.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>Features</h1>\n      </div>\n    </div>\n\n    <div class="row text-center justify-content-center mt-5">\n      <div class="col-12 col-sm-4 col-xl-3 m-md-auto">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature 1</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>\n      </div>\n\n      <div class="col-12 col-sm-4 col-xl-3 m-auto pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature 2</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n\n      <div class="col-12 col-sm-4 col-xl-3 m-auto pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature 3</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/9.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>Features</h1>\n      </div>\n    </div>\n    <div class="row text-center justify-content-center mt-5">\n      <div class="col-12 col-sm-6 col-lg-3">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature One</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature Two</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature Three</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature Four</strong></h3>\n        <p>Duden flows by their place far far away, behind the word mountains.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/10.jpg"),
            n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>Features</h1>\n      </div>\n    </div>\n    <div class="row text-left mt-5">\n      <div class="col-12 col-md-4">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature One</strong></h3>\n            <p>Far far away, behind the word mountains, far from the countries</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Two</strong></h3>\n            <p>Even the all-powerful Pointing has no control about the blind texts.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Three</strong></h3>\n            <p>A small river named Duden flows by their place and supplies it</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row text-left pt-3 pt-sm-4 pt-md-5">\n      <div class="col-12 col-md-4">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Four</strong></h3>\n            <p>Duden flows by their place far far away, behind the word mountains.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Five</strong></h3>\n            <p>Separated they live in Bookmarksgrove right at the coast</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-4 pt-3 pt-sm-4 pt-md-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Six</strong></h3>\n            <p>On her way she met a copy. The copy warned the Little Blind Text.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/11.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>Features</h1>\n      </div>\n    </div>\n    <div class="row text-left mt-5">\n      <div class="col-12 col-sm-6 col-lg-3">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature One</strong></h3>\n            <p>Even the all-powerful Pointing has no control about the blind texts</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Two</strong></h3>\n            <p>Separated they live in Bookmarksgrove right at the coast</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Three</strong></h3>\n            <p>A small river named Duden flows by their place and supplies it</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Four</strong></h3>\n            <p>Far far away, behind the word mountains, far from the countries</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row text-left pt-3 pt-lg-5">\n      <div class="col-12 col-sm-6 col-lg-3">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Five</strong></h3>\n            <p>On her way she met a copy. The copy warned the Little Blind Text.</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-sm-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Six</strong></h3>\n            <p>Far far away, behind the word mountains, far from the countries</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Seven</strong></h3>\n            <p>Duden flows by their place far far away, behind the word mountains.</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-12 col-sm-6 col-lg-3 pt-3 pt-lg-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Eight</strong></h3>\n            <p>Separated they live in Bookmarksgrove right at the coast</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/12.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block pb-0">\n  <div class="container">\n    <div class="row text-lg-right align-items-center">\n      <div class="col-12 col-sm-6 col-lg-3">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h4><strong>Feature One</strong></h4>\n        <p>Far far away, behind the word mountains is hope.</p>\n\n        <img alt="image" class="fdb-icon mt-3 mt-xl-5" src="{{imagesDir}}/img_round.svg">\n        <h4><strong>Feature Two</strong></h4>\n        <p>On her way she met a copy of the Little Blind Text.</p>\n\n        <img alt="image" class="fdb-icon mt-3 mt-xl-5" src="{{imagesDir}}/img_round.svg">\n        <h4><strong>Feature Three</strong></h4>\n        <p>Even the all-powerful has no control about the blind texts</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-lg-3 text-left pt-3 pt-sm-0 order-lg-12">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h4><strong>Feature Four</strong></h4>\n        <p>Duden flows by their place, behind the word mountains.</p>\n\n        <img alt="image" class="fdb-icon mt-3 mt-xl-5" src="{{imagesDir}}/img_round.svg">\n        <h4><strong>Feature Five</strong></h4>\n        <p>Separated they live in Bookmark right at the coast</p>\n\n        <img alt="image" class="fdb-icon mt-3 mt-xl-5" src="{{imagesDir}}/img_round.svg">\n        <h4><strong>Feature Six</strong></h4>\n        <p>A small river named Duden flows by their place and supplies it</p>\n      </div>\n\n      <div class="col-7 col-sm-4 col-lg-4 m-auto pt-5 pt-lg-0 order-lg-1">\n        <img alt="image" class="img-fluid br-b-0" src="{{imagesDir}}/img_very_tall.png">\n      </div>\n    </div>\n  </div>\n</section>\n', "features/13.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block pb-md-0">\n  <div class="container">\n    <div class="row text-right align-items-center">\n      <div class="col-7 col-md-4 m-auto">\n        <img alt="image" class="img-fluid br-b-0" src="{{imagesDir}}/img_very_tall.png">\n      </div>\n\n      <div class="col-12 col-md-7 col-lg-5 m-auto text-left pt-5 pt-md-0">\n        <div class="row pb-lg-5">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Seven</strong></h3>\n            <p>Even the all-powerful Pointing has no control about the blind texts.</p>\n          </div>\n        </div>\n\n        <div class="row pt-4 pt-md-5 pb-lg-5">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Seven</strong></h3>\n            <p>Duden flows by their place far far away, behind the word mountains.</p>\n          </div>\n        </div>\n\n\n        <div class="row pt-4 pt-md-5">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Seven</strong></h3>\n            <p>A small river named Duden flows by their place and supplies it.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/14.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block pb-0">\n  <div class="container">\n    <div class="row text-right align-items-center">\n      <div class="col-12 col-lg-6 col-xl-5 m-lg-auto text-left">\n        <h1>Features</h1>\n        <p class="text-h3 pb-xl-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n\n        <div class="row pt-5">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.</p>\n          </div>\n        </div>\n\n        <div class="row pt-5">\n          <div class="col-9 text-right">\n            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, there live the blind texts.</p>\n          </div>\n\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n        </div>\n      </div>\n\n      <div class="col-7 col-sm-4 m-auto pt-5 pt-md-0">\n        <img alt="image" class="img-fluid br-b-0" src="{{imagesDir}}/img_very_tall.png">\n      </div>\n    </div>\n  </div>\n</section>\n', "features/15.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block pb-md-0">\n  <div class="container">\n    <div class="row justify-content-center pb-xl-5">\n      <div class="col-12 col-md-8 text-center">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n    </div>\n\n    <div class="row text-right align-items-center-lg align-items-end pt-5">\n      <div class="col-7 col-sm-4 m-auto mb-md-0 mt-md-0 m-lg-auto">\n        <img alt="image" class="img-fluid br-b-0" src="{{imagesDir}}/img_tall.png">\n      </div>\n\n      <div class="col-12 col-md-7 col-lg-6 col-xl-5 m-auto text-left pt-5 pt-md-0">\n        <h3><strong>Feature One</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.</p>\n\n        <h3 class="mt-4 mt-xl-5"><strong>Feature Two</strong></h3>\n        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, there live the blind texts.</p>\n\n        <h3 class="mt-4 mt-xl-5"><strong>Feature Three</strong></h3>\n        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/16.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 text-left">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n        <img alt="image" class="img-fluid mt-5" src="{{imagesDir}}/img_very_wide.svg">\n      </div>\n    </div>\n\n    <div class="row text-left mt-5">\n      <div class="col-12 col-md-4">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature One</strong></h3>\n            <p>Far far away, behind the word mountains, far from the countries</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-4 pt-4 pt-md-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Two</strong></h3>\n            <p>Separated they live in Bookmarksgrove right at the coast</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-4 pt-4 pt-md-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Three</strong></h3>\n            <p>A small river named Duden flows by their place and supplies it</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/17.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 text-center">\n        <h1>Features</h1>\n      </div>\n    </div>\n\n    <div class="row text-center mt-5">\n      <div class="col-12 col-sm-4">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature One</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>\n      </div>\n\n      <div class="col-12 col-sm-4 pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature Two</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>\n      </div>\n\n      <div class="col-12 col-sm-4 pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature Three</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,</p>\n      </div>\n    </div>\n\n    <div class="row mt-5">\n      <div class="col-12">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_very_wide.svg">\n      </div>\n    </div>\n  </div>\n</section>\n', "features/18.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 text-left">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n    </div>\n\n    <div class="row text-left mt-5">\n      <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto mr-md-auto ml-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_1.svg">\n        <h3><strong>Feature One</strong></h3>\n        <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n\n      <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto pt-5 pt-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_2.svg">\n        <h3><strong>Feature Two</strong></h3>\n        <p> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>\n      </div>\n\n      <div class="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto ml-md-auto mr-md-0 pt-5 pt-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_3.svg">\n        <h3><strong>Feature Three</strong></h3>\n        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn\u2019t listen.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/19.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 text-left">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n\n        <img alt="image" class="img-fluid mt-5" src="{{imagesDir}}/img_very_wide.svg">\n      </div>\n    </div>\n\n    <div class="row text-left pt-5">\n      <div class="col-12 col-md-6">\n        <h3><strong>Feature One</strong></h3>\n\n        <p>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with\n          the necessary regelialia. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>\n\n        <p><a href="https://www.froala.com">Learn More &gt;</a></p>\n      </div>\n      <div class="col-12 col-md-6 pt-4 pt-md-0">\n        <h3><strong>Feature Two</strong></h3>\n\n        <p> It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. The Big Oxmox advised her not to do so, because there\n          were thousands of bad Commas, wild Question Marks and devious Semikoli. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from\n          its origin.</p>\n\n        <p><a href="https://www.froala.com">Learn More &gt;</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/20.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 text-left">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. On her way she met a copy.\n          The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text.</p>\n      </div>\n    </div>\n\n    <div class="row text-left pt-5">\n      <div class="col-12 col-sm-6 col-md-5">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_2.svg">\n        <h3><strong>Feature One</strong></h3>\n        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-5 ml-sm-auto pt-5 pt-sm-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_4.svg">\n        <h3><strong>Feature Two</strong></h3>\n        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/21.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center pb-5">\n      <div class="col-12 text-center">\n        <h1>Froala Design Blocks</h1>\n      </div>\n    </div>\n\n    <div class="row text-left align-items-center pt-5 pb-md-5">\n      <div class="col-4 col-md-5">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_1.svg">\n      </div>\n\n      <div class="col-12 col-md-5 m-md-auto">\n        <h2><strong>Feature One</strong></h2>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n        <p><a href="https://www.froala.com">Learn More &gt;</a></p>\n      </div>\n    </div>\n\n    <div class="row text-left align-items-center pt-5 pb-md-5">\n      <div class="col-4 col-md-5 m-md-auto order-md-5">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_3.svg">\n      </div>\n\n      <div class="col-12 col-md-5">\n        <h2><strong>Feature Two</strong></h2>\n        <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>\n        <p><a href="https://www.froala.com">Learn More &gt;</a></p>\n      </div>\n    </div>\n\n    <div class="row text-left align-items-center pt-5">\n      <div class="col-4 col-md-5">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_2.svg">\n      </div>\n\n      <div class="col-12 col-md-5 m-md-auto">\n        <h2><strong>Feature Three</strong></h2>\n        <p class="text-h3">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn\n          around.</p>\n        <p><a href="https://www.froala.com">Learn More &gt;</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/22.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col-12 col-md-10 col-lg-8 text-left">\n        <h1>Froala Design Blocks is simply ahead the word mountains</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n\n        <p class="text-h3"><a href="https://www.froala.com">Explore all features &gt;</a></p>\n      </div>\n    </div>\n\n    <div class="row text-center no-gutters pt-5">\n      <div class="col-12 col-md-10 col-lg-8">\n        <div class="row">\n          <div class="col-8 col-sm-5 col-md-2 m-auto">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            <h4>Feature One</h4>\n          </div>\n          <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-sm-0">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            <h4>Feature Two</h4>\n          </div>\n          <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-md-0">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            <h4>Feature Three</h4>\n          </div>\n          <div class="col-8 col-sm-5 col-md-2 m-auto pt-5 pt-md-0">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            <h4>Feature Four</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/23.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-top">\n      <div class="col-12 col-md-6 col-xl-4 m-auto">\n        <h2>Learn more about the Froala Design Blocks you love</h2>\n      </div>\n\n      <div class="col-12 col-md-6 pt-5 pt-md-0">\n        <div class="row justify-content-left">\n          <div class="col-3 m-auto text-center">\n            <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n            <p><a href="https://www.froala.com">One &gt;</a></p>\n          </div>\n          <div class="col-3 m-auto text-center">\n            <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n            <p><a href="https://www.froala.com">Two &gt;</a></p>\n          </div>\n          <div class="col-3 m-auto text-center">\n            <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n            <p><a href="https://www.froala.com">Three &gt;</a></p>\n          </div>\n        </div>\n\n        <div class="row justify-content-left mt-4 mt-xl-5">\n          <div class="col-3 m-auto text-center">\n            <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n            <p><a href="https://www.froala.com">Four &gt;</a></p>\n          </div>\n          <div class="col-3 m-auto text-center">\n            <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n            <p><a href="https://www.froala.com">Five &gt;</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/24.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>There is a feature for everyone</h1>\n        <p class="text-h3"><a href="https://www.froala.com">See all features &gt;</a>\n        </p>\n      </div>\n    </div>\n\n    <div class="row text-center justify-content-center mt-5">\n      <div class="col-10 col-sm-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_1.svg">\n        <h3><strong>Feature One</strong></h3>\n      </div>\n      <div class="col-10 col-sm-3 pt-5 pt-sm-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_4.svg">\n        <h3><strong>Feature Two</strong></h3>\n      </div>\n\n      <div class="col-10 col-sm-3 pt-5 pt-sm-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_2.svg">\n        <h3><strong>Feature Three</strong></h3>\n      </div>\n\n      <div class="col-10 col-sm-3 pt-5 pt-sm-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_3.svg">\n        <h3><strong>Feature Four</strong></h3>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/25.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center pb-xl-5">\n      <div class="col-12 col-md-7 col-xl-5">\n        <h1>Froala Design Blocks</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n      </div>\n      <div class="col-12 col-sm-6 col-md-4 m-sm-auto mr-md-0 ml-md-auto pt-4 pt-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_1.svg">\n      </div>\n    </div>\n\n    <div class="row pt-5">\n      <div class="col-12 col-sm-6 col-md-3">\n        <h3><strong>Feature One</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large ocean.</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-3 pt-3 pt-sm-0">\n        <h3><strong>Feature Two</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">\n        <h3><strong>Feature Three</strong></h3>\n        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-3 pt-3 pt-md-0">\n        <h3><strong>Feature Four</strong></h3>\n        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/26.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center pb-xl-5">\n      <div class="col-12 col-sm-11 text-center">\n        <h1>Froala Design Blocks</h1>\n        <img alt="image" class="img-fluid mt-5" src="{{imagesDir}}/img_very_wide.svg">\n      </div>\n    </div>\n\n    <div class="row text-left justify-content-center pt-5">\n      <div class="col-12 col-md-6 col-lg-5 m-sm-auto">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature One</strong></h3>\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-12 col-md-6 col-lg-5 m-sm-auto pt-3 pt-sm-5 pt-md-0">\n        <div class="row">\n          <div class="col-3">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n          <div class="col-9">\n            <h3><strong>Feature Two</strong></h3>\n            <p>Separated they live in Bookmarksgrove, right at the coast of the Semantics, a large language ocean.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/27.jpg"),
            n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h1>Features</h1>\n      </div>\n    </div>\n    <div class="row text-center justify-content-center mt-5">\n      <div class="col-12 col-md-4 col-lg-3 m-md-auto">\n        <h3><strong>Feature 1</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>\n      </div>\n\n      <div class="col-12 col-md-4 col-lg-3 m-md-auto pt-3 pt-md-0">\n        <h3><strong>Feature 2</strong></h3>\n        <p>Separated they live in Bookmarksgrove right at the coast, a large language ocean.</p>\n      </div>\n\n      <div class="col-12 col-md-4 col-lg-3 m-md-auto pt-3 pt-md-0">\n        <h3><strong>Feature 3</strong></h3>\n        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/28.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12col-md-10 col-lg-8 text-center">\n        <h1>Froala Design Blocks</h1>\n      </div>\n    </div>\n\n    <div class="row justify-content-center text-center mt-5">\n      <div class="col-12 col-sm-6 col-md-5 col-lg-3">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature one longer Text</strong></h3>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-5 col-lg-3 pt-4 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Feature two shorter</strong></h3>\n      </div>\n    </div>\n\n    <div class="row justify-content-center text-center mt-5 mt-md-4">\n      <div class="col-12 col-md-10 col-lg-8">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_very_wide.svg">\n        <p><em>Coming this fall</em></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/29.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12 col-sm-6 col-md-3">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>The all-powerful Pointing has no control</strong></h3>\n        <p class="mt-3"><a class="btn" href="https://www.froala.com">Learn</a></p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-3 pt-5 pt-sm-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>Far far away, behind the word mountains</strong></h3>\n        <p class="mt-3"><a class="btn" href="https://www.froala.com">Learn</a></p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-3 pt-5 pt-md-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>The Big Oxmox advised her not to do so</strong></h3>\n        <p class="mt-3"><a class="btn" href="https://www.froala.com">Learn</a></p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-3 pt-5 pt-md-0">\n        <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n        <h3><strong>The copy warned the Little Blind Text</strong></h3>\n        <p class="mt-3"><a class="btn" href="https://www.froala.com">Learn</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/30.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12 col-md-8 m-auto col-lg-4">\n        <div class="fdb-box fdb-touch">\n          <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n          <h2>Feature 1</h2>\n          <p>Far far away, behind the word mountains, far from the countries.</p>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">\n        <div class="fdb-box fdb-touch">\n          <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n          <h2>Feature 2</h2>\n          <p>Separated they live in Bookmarksgrove right at the coast.</p>\n        </div>\n      </div>\n\n      <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">\n        <div class="fdb-box fdb-touch">\n          <img alt="image" class="fdb-icon" src="{{imagesDir}}/img_round.svg">\n          <h2>Feature 3</h2>\n          <p>A small river named Duden flows by their place and supplies.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/31.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-left">\n      <div class="col-12 col-md-8 m-auto col-lg-4">\n        <div class="fdb-box fdb-touch">\n          <h2>Feature 1</h2>\n          <p>Far far away, behind the word mountains, far from the country Vokalia, there live the blind texts.</p>\n          <p><a href="https://www.froala.com">Read more</a></p>\n        </div>\n      </div>\n      <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">\n        <div class="fdb-box fdb-touch">\n          <h2>Feature 2</h2>\n          <p>Separated they live in Bookmarks right at the coast of the Semantics, a large language ocean.</p>\n          <p><a href="https://www.froala.com">Read more</a></p>\n        </div>\n      </div>\n      <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">\n        <div class="fdb-box fdb-touch">\n          <h2>Feature 3</h2>\n          <p>A small river named Duden flows by their small place and supplies it with the necessary regelialia.</p>\n          <p><a href="https://www.froala.com">Read more</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/32.jpg"), n.RegisterDesignBlock("Features", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-left">\n      <div class="col-12 col-md-4">\n        <h2>Feature One</h2>\n        <p><strong>Far far away</strong>, behind the word mountains, far from the countries <a href="https://www.froala.com">Vokalia and Consonantia</a>, there live the blind texts.</p>\n      </div>\n\n      <div class="col-12 col-md-4 pt-5 pt-sm-4 pt-md-0">\n        <h2>Feature Two</h2>\n        <p> A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n      </div>\n\n      <div class="col-12 col-md-4 pt-5 pt-sm-4 pt-md-0">\n        <h2>Feature Three</h2>\n        <p>Even the all-powerful Pointing has no control about the <strong>blind texts</strong> it is an almost unorthographic life.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "features/33.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n, n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <p>\xa9 2017 Froala. All Rights Reserved</p>\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/1.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small bg-dark">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-8">\n        <ul class="nav justify-content-center justify-content-md-start">\n          <li class="nav-item">\n            <a class="nav-link active" href="https://www.froala.com">Home</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Terms</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">\n        \xa9 2017 Froala. All Rights Reserved\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/2.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small">\n  <div class="container">\n    <div class="row text-center align-items-center">\n      <div class="col-12 col-md-8">\n        <ul class="nav justify-content-center justify-content-md-start align-items-center">\n          <li class="nav-item">\n            <a class="nav-link active" href="https://www.froala.com">\n                <img alt="image" src="{{imagesDir}}/img_logo.png" height="40">\n              </a>\n          </li>\n          <li class="w-100 d-block d-sm-none"></li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Terms</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="col-12 col-md-4 mt-4 mt-md-0 text-md-right">\n        \xa9 2013-2017 Froala\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/3.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small">\n  <div class="container">\n    <div class="row text-center align-items-center">\n      <div class="col-12 col-sm-6 col-md-4 text-sm-left">\n        <img alt="image" src="{{imagesDir}}/img_logo.png" height="40">\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center">\n        \xa9 2013-2017 Froala\n      </div>\n\n      <div class="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">\n        <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/4.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-6">\n        <ul class="nav justify-content-center justify-content-md-start">\n          <li class="nav-item">\n            <a class="nav-link active" href="https://www.froala.com">Home</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Terms</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="col-12 col-md-6 mt-4 mt-md-0 text-center text-md-right">\n        <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/5.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small bg-dark">\n  <div class="container">\n    <div class="row text-center align-items-center">\n      <div class="col">\n        <ul class="nav justify-content-center">\n          <li class="nav-item">\n            <a class="nav-link active" href="https://www.froala.com">Home</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Privacy Policy</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Terms</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n\n        <p class="text-h5 mt-5">\xa9 2013-2017 Froala</p>\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/6.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small">\n  <div class="container">\n    <div class="row text-center align-items-center">\n      <div class="col-12 col-lg-2 text-lg-left">\n        <img alt="image" src="{{imagesDir}}/img_logo.png" height="40">\n      </div>\n\n      <div class="col mt-4 mt-lg-0 text-center">\n        <ul class="nav justify-content-center">\n          <li class="nav-item">\n            <a class="nav-link active" href="https://www.froala.com">Home</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Privacy Policy</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Terms</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right">\n        <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp;\n        <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>\n      </div>\n    </div>\n\n    <div class="row mt-4">\n      <div class="col text-center">\n        \xa9 2017 Froala. All Rights Reserved\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/7.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-12 col-md-6">\n        <ul class="nav justify-content-center justify-content-md-start">\n          <li class="nav-item">\n            <a class="nav-link active" href="https://www.froala.com">Home</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Terms</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="col mt-4 mt-md-0 text-center text-md-right">\n        <a href="https://www.froala.com" class="btn">Contact Us</a>\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/8.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-large">\n  <div class="container">\n    <div class="row align-items-top text-center">\n      <div class="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">\n        <h3><strong>Group 1</strong></h3>\n        <nav class="nav flex-column">\n          <a class="nav-link active" href="https://www.froala.com">Home</a>\n          <a class="nav-link" href="https://www.froala.com">Features</a>\n          <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          <a class="nav-link" href="https://www.froala.com">Team</a>\n          <a class="nav-link" href="https://www.froala.com">Contact Us</a>\n        </nav>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">\n        <h3><strong>Group 2</strong></h3>\n        <nav class="nav flex-column">\n          <a class="nav-link active" href="https://www.froala.com">Privacy Policy</a>\n          <a class="nav-link" href="https://www.froala.com">Terms</a>\n          <a class="nav-link" href="https://www.froala.com">FAQ</a>\n          <a class="nav-link" href="https://www.froala.com">Support</a>\n        </nav>\n      </div>\n\n      <div class="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0">\n        <h3><strong>About Us</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n      </div>\n\n      <div class="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">\n        <h3><strong>Follow Us</strong></h3>\n        <p class="text-h3">\n          <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>\n        </p>\n      </div>\n    </div>\n\n    <div class="row mt-3">\n      <div class="col text-center">\n        \xa9 2017 Froala. All Rights Reserved\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/9.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-large bg-dark">\n  <div class="container">\n    <div class="row align-items-top text-center text-md-left">\n      <div class="col-12 col-sm-6 col-md-4">\n        <h3><strong>Country A</strong></h3>\n        <p>Street Address 52<br>Contact Name</p>\n        <p>+44 827 312 5002</p>\n        <p><a href="https://www.froala.com">countrya@amazing.com</a></p>\n      </div>\n\n      <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">\n        <h3><strong>Country B</strong></h3>\n        <p>Street Address 100<br>Contact Name</p>\n        <p>+13 827 312 5002</p>\n        <p><a href="https://www.froala.com">countryb@amazing.com</a></p>\n      </div>\n\n      <div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left">\n        <h3><strong>About Us</strong></h3>\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n      </div>\n    </div>\n\n    <div class="row mt-5">\n      <div class="col text-center">\n        \xa9 2017 Froala. All Rights Reserved\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/10.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-small">\n  <div class="container">\n    <div class="row align-items-center text-center">\n      <div class="col-12 col-lg-4 text-lg-left">\n        \xa9 2017 Froala\n      </div>\n\n      <div class="col-12 col-lg-4 mt-4 mt-lg-0">\n        <img alt="image" src="{{imagesDir}}/img_logo.png" height="40">\n      </div>\n\n      <div class="col-12 col-lg-4 text-lg-right mt-4 mt-lg-0">\n        <ul class="nav justify-content-lg-end justify-content-center">\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Privacy</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Terms</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/11.jpg"), n.RegisterDesignBlock("Footers", '<footer class="fdb-block footer-large">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h3>Company Name</h3>\n        <p>70 Bowman St.<br>South Windsor, CT 06074</p>\n        <p>USA</p>\n        <p>+13 827 312 5002</p>\n      </div>\n    </div>\n\n    <div class="row mt-4">\n      <div class="col text-center">\n        <p class="text-h3">\n          <a href="https://www.froala.com"><i class="fa fa-twitter" aria-hidden="true"></i></a> &nbsp; &nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-facebook" aria-hidden="true"></i></a> &nbsp; &nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-instagram" aria-hidden="true"></i></a> &nbsp; &nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-pinterest" aria-hidden="true"></i></a> &nbsp; &nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-google" aria-hidden="true"></i></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</footer>\n', "footers/12.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n, n.RegisterDesignBlock("Forms", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 col-lg-6 text-center">\n        <h1>Subscribe</h1>\n        <div class="input-group mt-4 mb-4">\n          <input type="text" class="form-control" placeholder="Enter your email address">\n          <span class="input-group-btn">\n              <button class="btn" type="button">Submit</button>\n            </span>\n        </div>\n\n        <p class="text-h4">Find us on <a href="https://www.froala.com">Facebook</a> and <a href="https://www.froala.com">Twitter</a>.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/1.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_2.svg)">\n  <div class="container">\n    <div class="fdb-box">\n      <div class="row justify-content-center align-items-center">\n        <div class="col-12 col-lg-6">\n          <h2>Join us!</h2>\n          <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>\n        </div>\n        <div class="col-12 col-lg-5 text-center">\n          <div class="input-group mt-4">\n            <input type="text" class="form-control" placeholder="Enter your email address">\n            <span class="input-group-btn">\n                <button class="btn" type="button">Submit</button>\n              </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/2.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-lg-10 col-xl-8 text-center">\n        <div class="row">\n          <div class="col">\n            <h1>Register</h1>\n            <p class="text-h3">When she reached the first hills, she had a last view back on the skyline of her hometown.</p>\n          </div>\n        </div>\n        <div class="row align-items-center">\n          <div class="col-12 col-md-5 mt-4">\n            <input type="text" class="form-control" placeholder="Email">\n          </div>\n          <div class="col-12 col-md-5 mt-4">\n            <input type="password" class="form-control" placeholder="Password">\n          </div>\n          <div class="col-12 col-md-2 mt-4">\n            <button class="btn" type="button">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/3.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block" style="background-image: url({{imagesDir}}/alt_wide_1.svg)">\n  <div class="container">\n    <div class="row">\n      <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-left">\n        <div class="row">\n          <div class="col">\n            <h1>Sign Up</h1>\n            <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col mt-4">\n            <input type="text" class="form-control" placeholder="Email">\n          </div>\n        </div>\n        <div class="row mt-4">\n          <div class="col">\n            <input type="password" class="form-control" placeholder="Password">\n          </div>\n        </div>\n        <div class="row mt-4">\n          <div class="col">\n            <button class="btn" type="button">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/4.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_4.svg)">\n  <div class="container">\n    <div class="row justify-content-end">\n      <div class="col-12 col-md-8 col-lg-6 col-xl-5 text-left">\n        <div class="fdb-box">\n          <div class="row">\n            <div class="col">\n              <h1>Log In</h1>\n              <p class="text-h3">Right at the coast of the Semantics, a large language ocean. A small river named Duden.</p>\n            </div>\n          </div>\n          <div class="row">\n            <div class="col mt-4">\n              <input type="text" class="form-control" placeholder="Email">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <input type="password" class="form-control" placeholder="Password">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <button class="btn" type="button">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/5.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 col-lg-8 col-xl-6">\n        <div class="row">\n          <div class="col text-center">\n            <h1>Register</h1>\n            <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>\n          </div>\n        </div>\n        <div class="row align-items-center">\n          <div class="col mt-4">\n            <input type="text" class="form-control" placeholder="Company Name">\n          </div>\n        </div>\n        <div class="row align-items-center mt-4">\n          <div class="col">\n            <input type="email" class="form-control" placeholder="Email">\n          </div>\n        </div>\n        <div class="row align-items-center mt-4">\n          <div class="col">\n            <input type="password" class="form-control" placeholder="Password">\n          </div>\n          <div class="col">\n            <input type="password" class="form-control" placeholder="Confirm Password">\n          </div>\n        </div>\n        <div class="row justify-content-start mt-4">\n          <div class="col">\n            <div class="form-check">\n              <label class="form-check-label">\n                  <input type="checkbox" class="form-check-input">\n                  I Read and Accept <a href="https://www.froala.com">Terms and Conditions</a>\n                </label>\n            </div>\n\n            <button class="btn mt-4">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/6.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_0.svg)">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-center">\n        <div class="fdb-box fdb-touch">\n          <div class="row">\n            <div class="col">\n              <h1>Log In</h1>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <input type="text" class="form-control" placeholder="Email">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <input type="password" class="form-control mb-1" placeholder="Password">\n              <p class="text-right"><a href="https://www.froala.com">Recover Password</a></p>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <button class="btn" type="button">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/7.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-8 col-lg-7 col-md-5 text-center">\n        <div class="fdb-box fdb-touch">\n          <div class="row">\n            <div class="col">\n              <h1>Register</h1>\n            </div>\n          </div>\n          <div class="row">\n            <div class="col mt-4">\n              <input type="text" class="form-control" placeholder="Name">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <input type="text" class="form-control" placeholder="Email">\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <input type="password" class="form-control mb-1" placeholder="Password">\n              <p class="text-right"><a href="https://www.froala.com">Already have an account?</a></p>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col">\n              <button class="btn" type="button">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/8.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block bg-gray">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12  col-md-10 col-lg-8 col-xl-6 text-center">\n        <img alt="image" height="40" src="{{imagesDir}}/img_round.svg">\n        <h1>Never miss an update</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>\n        <div class="input-group mt-4 mb-4">\n          <input type="text" class="form-control" placeholder="Enter your email address">\n          <span class="input-group-btn">\n              <button class="btn" type="button">Submit</button>\n            </span>\n        </div>\n        <p class="text-h5"><em>*Your email address is safe with us. We never share your email address.</em></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/9.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block">\n  <div class="container">\n    <div class="row justify-content-center">\n      <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">\n        <h1>Company Name</h1>\n        <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown.</p>\n        <div class="input-group mt-5 mb-5">\n          <input type="text" class="form-control" placeholder="Enter your email address">\n          <span class="input-group-btn">\n              <button class="btn" type="button">Submit</button>\n            </span>\n        </div>\n        <p class="text-h2">\n          <a href="https://www.froala.com"><i class="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-google"></i></a>&nbsp;&nbsp;&nbsp;\n          <a href="https://www.froala.com"><i class="fa fa-pinterest"></i></a>\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/10.jpg"),
            n.RegisterDesignBlock("Forms", '<section class="fdb-block">\n  <div class="container">\n    <div class="row">\n      <div class="col-12 col-md-6 m-md-auto ml-lg-0 col-lg-5">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n      </div>\n      <div class="col-12 col-md-10 col-lg-6 mt-4 mt-lg-0 ml-auto mr-auto ml-lg-auto text-left">\n        <div class="row">\n          <div class="col">\n            <h1>Subscribe</h1>\n            <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>\n          </div>\n        </div>\n        <div class="row mt-4">\n          <div class="col">\n            <div class="input-group">\n              <input type="text" class="form-control" placeholder="Enter your email address">\n              <span class="input-group-btn">\n                  <button class="btn" type="button">Submit</button>\n                </span>\n            </div>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="col">\n            <p class="text-h4">* Leave your email address to be notified first.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/11.jpg"), n.RegisterDesignBlock("Forms", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_c_2.svg);">\n  <div class="container">\n    <div class="row justify-content-end">\n      <div class="col-12 col-md-9 col-lg-8">\n        <div class="fdb-box fdb-touch">\n          <div class="row justify-content-center">\n            <div class="col-12 col-lg-10">\n              <h1>Subscribe</h1>\n              <p class="text-h3">When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.</p>\n            </div>\n          </div>\n          <div class="row justify-content-center mt-4">\n            <div class="col-12 col-lg-10">\n              <div class="input-group">\n                <input type="text" class="form-control" placeholder="Enter your email address">\n                <span class="input-group-btn">\n                    <button class="btn" type="button">Submit</button>\n                  </span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "forms/12.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n, n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar">\n      <a href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n    </nav>\n  </div>\n</header>\n', "headers/1.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container text-center">\n    <nav class="navbar">\n      <a class="ml-auto mr-auto" href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n    </nav>\n  </div>\n</header>\n', "headers/2.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar navbar-expand-md">\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav0" aria-controls="navbarNav0" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n      <div class="collapse navbar-collapse" id="navbarNav0">\n        <ul class="navbar-nav mr-auto ml-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/3.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar navbar-expand-md">\n      <a class="navbar-brand" href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse" id="navbarNav1">\n        <ul class="navbar-nav mr-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n\n        <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>\n          </li>\n        </ul>\n\n        <a class="btn btn-empty ml-md-3" href="https://www.froala.com">Button</a>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/4.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar navbar-expand-md no-gutters">\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav2" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="col-4 col-md-2 text-right text-md-center order-lg-6">\n        <a href="https://www.froala.com">\n            <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n          </a>\n      </div>\n\n      <div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav2">\n        <ul class="navbar-nav col-5">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n      </div>\n\n      <ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n', "headers/5.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar navbar-expand-md">\n      <a class="navbar-brand" href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse" id="navbarNav3">\n        <ul class="navbar-nav ml-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n\n        <a class="btn btn-empty ml-md-3" href="https://www.froala.com">Button</a>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/6.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar navbar-expand-md no-gutters">\n      <div class="col-2 text-left">\n        <a href="https://www.froala.com">\n            <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n          </a>\n      </div>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav4" aria-controls="navbarNav4" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav4">\n        <ul class="navbar-nav justify-content-center">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n      </div>\n\n      <ul class="navbar-nav col-2 justify-content-end d-none d-md-flex">\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-facebook"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-google"></i></a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n', "headers/7.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar navbar-expand-lg">\n      <a class="navbar-brand" href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav5" aria-controls="navbarNav5" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse" id="navbarNav5">\n        <ul class="navbar-nav mr-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n\n        <ul class="navbar-nav justify-content-end ml-auto">\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Docs</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Contact</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Log In</a>\n          </li>\n        </ul>\n\n        <a class="btn ml-md-3" href="https://www.froala.com">Button</a>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/8.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar navbar-expand-md no-gutters">\n      <div class="col-2 text-left">\n        <a href="https://www.froala.com">\n            <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n          </a>\n      </div>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-1" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-1">\n        <ul class="navbar-nav justify-content-center">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Contact</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-1">\n        <ul class="navbar-nav">\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Log In \u2192</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/9.jpg"), n.RegisterDesignBlock("Headers", '<header>\n  <div class="container">\n    <nav class="navbar navbar-expand-md no-gutters">\n      <div class="col-3 text-left">\n        <a href="https://www.froala.com">\n            <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n          </a>\n      </div>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-2" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse navbar-collapse-2 justify-content-center col-md-6" id="navbarNav7">\n        <ul class="navbar-nav justify-content-center">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Contact</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="collapse navbar-collapse navbar-collapse-2">\n        <ul class="navbar-nav ml-auto justify-content-end">\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Log In</a>\n          </li>\n        </ul>\n\n        <a class="btn ml-md-3" href="https://www.froala.com">Register</a>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/10.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar">\n      <a href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n    </nav>\n  </div>\n</header>\n', "headers/11.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container text-center">\n    <nav class="navbar">\n      <a class="ml-auto mr-auto" href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n    </nav>\n  </div>\n</header>\n', "headers/12.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar navbar-expand-md">\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav8" aria-controls="navbarNav8" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse" id="navbarNav8">\n        <ul class="navbar-nav mr-auto ml-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/13.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar navbar-expand-md">\n      <a class="navbar-brand" href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav9" aria-controls="navbarNav9" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse" id="navbarNav9">\n        <ul class="navbar-nav mr-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n\n        <ul class="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>\n          </li>\n        </ul>\n\n        <a class="btn btn-white btn-empty ml-md-3" href="https://www.froala.com">Button</a>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/14.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar navbar-expand-md no-gutters">\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav10" aria-controls="navbarNav10" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="col-4 col-sm-2 text-center order-lg-6">\n        <a href="https://www.froala.com">\n            <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n          </a>\n      </div>\n\n      <div class="collapse navbar-collapse col-12 col-md-5 order-lg-1" id="navbarNav10">\n        <ul class="navbar-nav col-5">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n      </div>\n\n      <ul class="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-slack"></i></a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n', "headers/15.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar navbar-expand-md">\n      <a class="navbar-brand" href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav11" aria-controls="navbarNav11" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse" id="navbarNav11">\n        <ul class="navbar-nav ml-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">About</a>\n          </li>\n        </ul>\n\n        <a class="btn btn-white btn-empty ml-md-3" href="https://www.froala.com">Button</a>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/16.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar navbar-expand-md no-gutters">\n      <div class="col-2 text-left">\n        <a href="https://www.froala.com">\n            <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n          </a>\n      </div>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav12" aria-controls="navbarNav12" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse justify-content-center col-md-8" id="navbarNav12">\n        <ul class="navbar-nav justify-content-center">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n      </div>\n\n      <ul class="navbar-nav col-2 justify-content-end d-none d-md-flex">\n        <li class="nav-item active">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-facebook"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-twitter"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-github"></i></a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="https://www.froala.com"><i class="fa fa-google"></i></a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n', "headers/17.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar navbar-expand-lg">\n      <a class="navbar-brand" href="https://www.froala.com">\n          <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n        </a>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav13" aria-controls="navbarNav13" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse" id="navbarNav13">\n        <ul class="navbar-nav mr-auto">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n        </ul>\n\n        <ul class="navbar-nav justify-content-end ml-auto">\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Docs</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Contact</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Log In</a>\n          </li>\n        </ul>\n\n        <a class="btn btn-white ml-md-3" href="https://www.froala.com">Button</a>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/18.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar navbar-expand-md no-gutters">\n      <div class="col-2 text-left">\n        <a href="https://www.froala.com">\n            <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n          </a>\n      </div>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-3" aria-controls="navbarNav6" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-3">\n        <ul class="navbar-nav justify-content-center">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Contact</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="collapse navbar-collapse justify-content-end col-md-2 navbar-collapse-3">\n        <ul class="navbar-nav">\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Log In \u2192</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/19.jpg"), n.RegisterDesignBlock("Headers", '<header class="bg-dark">\n  <div class="container">\n    <nav class="navbar navbar-expand-md no-gutters">\n      <div class="col-3 text-left">\n        <a href="https://www.froala.com">\n            <img src="{{imagesDir}}/img_logo.png" height="30" alt="image">\n          </a>\n      </div>\n\n      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse-4" aria-controls="navbarNav7" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n\n      <div class="collapse navbar-collapse navbar-collapse-4 justify-content-center col-md-6" id="navbarNav7">\n        <ul class="navbar-nav justify-content-center">\n          <li class="nav-item active">\n            <a class="nav-link" href="https://www.froala.com">Home <span class="sr-only">(current)</span></a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Features</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Pricing</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Team</a>\n          </li>\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Contact</a>\n          </li>\n        </ul>\n      </div>\n\n      <div class="collapse navbar-collapse navbar-collapse-4">\n        <ul class="navbar-nav ml-auto justify-content-end">\n          <li class="nav-item">\n            <a class="nav-link" href="https://www.froala.com">Log In</a>\n          </li>\n        </ul>\n\n        <a class="btn ml-md-3" href="https://www.froala.com">Register</a>\n      </div>\n    </nav>\n  </div>\n</header>\n', "headers/20.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n,
            n.RegisterDesignBlock("Pricings", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-center">\n      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center">\n        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 br">\n          <h2 class="font-weight-light">Hobby</h2>\n          <p class="text-h2"><strong>$9 / month</strong></p>\n          <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts.</p>\n\n          <ul class="text-left mt-5 mb-5">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p><a href="https://www.froala.com" class="btn mt-4">Subscribe</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">\n        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 fdb-touch br">\n          <h2 class="font-weight-light">Professional</h2>\n          <p class="text-h2"><strong>$19 / month</strong></p>\n          <p class="text-h3">Far far away, behind the word mountains, far from the countries.</p>\n\n          <ul class="text-left mt-5 mb-5">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p><a href="https://www.froala.com" class="btn mt-4">Subscribe</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">\n        <div class="bg-dark pb-5 pt-5 pl-3 pr-3 br">\n          <h2 class="font-weight-light">Business</h2>\n          <p class="text-h2"><strong>$49 / month</strong></p>\n          <p class="text-h3">Wild Question Marks, but the Little Blind Text didn\u2019t listen.</p>\n\n          <ul class="text-left mt-5 mb-5">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p><a href="https://www.froala.com" class="btn mt-4">Subscribe</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/1.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-center">\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">\n        <div class="fdb-box fdb-touch p-5 br">\n          <h2>Hobby <strong class="float-xl-right d-lg-block d-xl-inline">$99</strong></h2>\n          <p class="text-h3"><em>Copy Writers ambushed her, made her drunk with Longe.</em></p>\n\n          <ul class="text-left pl-3 mt-5 mb-5">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p class="text-left pt-4"><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">\n        <div class="fdb-box fdb-touch p-5 br">\n          <h2>Advanced <strong class="float-xl-right d-lg-block d-xl-inline">$349</strong></h2>\n          <p class="text-h3"><em>Separated they live in Bookmarks right at the coast.</em></p>\n\n          <ul class="text-left pl-3 mt-5 mb-5">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p class="text-left pt-4"><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">\n        <div class="fdb-box fdb-touch p-5 br">\n          <h2>Business <strong class="float-xl-right d-lg-block d-xl-inline">$849</strong></h2>\n          <p class="text-h3"><em>A small river named Duden flows by their place.</em></p>\n\n          <ul class="text-left pl-3 mt-5 mb-5">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p class="text-left pt-4"><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/2.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block bg-dark" style="background-image: url({{imagesDir}}/bg_0.svg);">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-center">\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center">\n        <div class="fdb-box fdb-touch p-4 br">\n          <h2>Hobby</h2>\n          <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n\n          <p class="text-h1 mt-5 mb-5">$99</p>\n\n          <p><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">\n        <div class="fdb-box fdb-touch p-4 br">\n          <h2>Advanced</h2>\n          <p class="text-h3">Separated they live in Bookmarksgrove right at the coast, a large language ocean.</p>\n\n          <p class="text-h1 mt-5 mb-5">$299</p>\n\n          <p><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">\n        <div class="fdb-box fdb-touch p-4 br">\n          <h2>Business</h2>\n          <p class="text-h3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>\n\n          <p class="text-h1 mb-5 mt-5">$799</p>\n\n          <p><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/3.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing Plans</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-top">\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">\n        <div class="bg-gray pb-5 pt-5 pl-4 pr-4 br">\n          <h2 class="font-weight-light">Startup</h2>\n          <hr>\n          <p class="text-h2"><strong>$9.90</strong></p>\n          <p class="text-h4">Far far away, behind the word mountains, far from the countries.</p>\n          <hr>\n          <p class="text-right"><em>Unlimited calls</em></p>\n          <p class="text-right"><em>Free hosting</em></p>\n          <p class="text-right"><em>40MB of storage</em></p>\n          <p><br></p>\n          <p><br></p>\n          <p><br></p>\n          <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">\n        <div class="bg-gray pb-5 pt-5 pl-4 pr-4 br">\n          <h2 class="font-weight-light">Standard</h2>\n          <hr>\n          <p class="text-h2"><strong>$29.90</strong></p>\n          <p class="text-h4">The copy warned the Blind Text, that it would have been rewritten</p>\n          <hr>\n          <p class="text-right"><em>Unlimited calls</em></p>\n          <p class="text-right"><em>Free hosting</em></p>\n          <p class="text-right"><em>1GB of storage</em></p>\n          <p class="text-right"><em>10 hours of support</em></p>\n          <p class="text-right"><em>Custom domain</em></p>\n          <p><br></p>\n          <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">\n        <div class="bg-gray pb-5 pt-5 pl-4 pr-4 br">\n          <h2 class="font-weight-light">Professional</h2>\n          <hr>\n          <p class="text-h2"><strong>$59.90</strong></p>\n          <p class="text-h4"> the headline of Alphabet Village and the subline of her own road.</p>\n          <hr>\n          <p class="text-right"><em>Unlimited calls</em></p>\n          <p class="text-right"><em>Free hosting</em></p>\n          <p class="text-right"><em>1GB of storage</em></p>\n          <p class="text-right"><em>20 hours of support</em></p>\n          <p class="text-right"><em>Custom domain</em></p>\n          <p class="text-right"><em>Analytics and SEO</em></p>\n\n          <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/4.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block bg-dark" style="background-image: url({{imagesDir}}/bg_1.svg);">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing Plans</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-center no-gutters">\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center">\n        <div class="bg-gray pb-5 pt-5 pl-4 pr-4">\n          <h2 class="font-weight-light">Basic</h2>\n\n          <p class="text-h1 mt-5 mb-5"><strong>$19</strong> <span class="text-h4">/month</span></p>\n\n          <ul class="text-left">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round btn-white btn-shadow">Choose Plan</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 sl-1 pt-0 pt-lg-3 pb-0 pb-lg-3 bg-gray fdb-touch">\n        <div class="pb-5 pt-5 pl-4 pr-4">\n          <h2 class="font-weight-light">Standard</h2>\n\n          <p class="text-h1 mt-5 mb-5"><strong>$49</strong> <span class="text-h4">/month</span></p>\n\n          <ul class="text-left">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round btn-shadow">Choose Plan</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0">\n        <div class="bg-gray pb-5 pt-5 pl-4 pr-4">\n          <h2 class="font-weight-light">OEM</h2>\n\n          <p class="text-h1 mt-5 mb-5"><strong>$99</strong> <span class="text-h4">/month</span></p>\n\n          <ul class="text-left">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n          </ul>\n\n          <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-round btn-white btn-shadow">Choose Plan</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/5.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing Plans</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-top">\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">\n        <div class="br">\n          <div class="bg-dark p-3 text-center">\n            <h2 class="font-weight-light">Startup</h2>\n            <p class="text-h2"><strong>$9.90</strong></p>\n          </div>\n\n          <div class="bg-gray p-5 text-center">\n            <p><img alt="image" height="40" src="{{imagesDir}}/img_round.svg"></p>\n            <p class="text-h4"><strong>For small companies</strong></p>\n            <p><br></p>\n            <p>10 hours of support</p>\n            <p>40MB of storage</p>\n            <p>Subdomain</p>\n\n            <p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">\n        <div class="br">\n          <div class="bg-dark p-3 text-center">\n            <h2 class="font-weight-light">Standard</h2>\n            <p class="text-h2"><strong>$19.90</strong></p>\n          </div>\n\n          <div class="bg-gray p-5 text-center">\n            <p><img alt="image" height="40" src="{{imagesDir}}/img_round.svg"></p>\n            <p class="text-h4"><strong>For medium companies</strong></p>\n            <p><br></p>\n            <p>10 hours of support</p>\n            <p>40MB of storage</p>\n            <p>Subdomain</p>\n\n            <p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">\n        <div class="br">\n          <div class="bg-dark p-3 text-center">\n            <h2 class="font-weight-light">Business</h2>\n            <p class="text-h2"><strong>$29.90</strong></p>\n          </div>\n\n          <div class="bg-gray p-5 text-center">\n            <p><img alt="image" height="40" src="{{imagesDir}}/img_round.svg"></p>\n            <p class="text-h4"><strong>For large companies</strong></p>\n            <p><br></p>\n            <p>10 hours of support</p>\n            <p>40MB of storage</p>\n            <p>Subdomain</p>\n\n            <p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/6.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing Plans</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-top">\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center">\n        <div class="bg-gray pb-5 pt-5 pl-4 pr-4 br">\n          <h3><strong>Startup</strong></h3>\n          <p class="text-h4">&lt; 10 employees</p>\n\n          <p class="text-h1 mt-5">$9.90 <span class="text-h3">/ month</span></p>\n          <p>Far far away, behind the word mountains, far from the countries.</p>\n          <hr>\n          <p><em>Unlimited calls</em></p>\n          <p><em>Free hosting</em></p>\n          <p><em>40MB of storage</em></p>\n\n          <p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Subscribe</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">\n        <div class="bg-gray pb-5 pt-5 pl-4 pr-4 br">\n          <h3><strong>Agency</strong></h3>\n          <p class="text-h4">10-100 employees</p>\n\n          <p class="text-h1 mt-5">$19.90 <span class="text-h3">/ month</span></p>\n          <p>And if she hasn\u2019t been rewritten, then they are still using her.</p>\n          <hr>\n          <p><em>Unlimited calls</em></p>\n          <p><em>Free hosting</em></p>\n          <p><em>40MB of storage</em></p>\n\n          <p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Subscribe</a></p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">\n        <div class="bg-gray pb-5 pt-5 pl-4 pr-4 br">\n          <h3><strong>Business</strong></h3>\n          <p class="text-h4">&gt;100 employees</p>\n\n          <p class="text-h1 mt-5">$99.90 <span class="text-h3">/ month</span></p>\n          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>\n          <hr>\n          <p><em>Unlimited calls</em></p>\n          <p><em>Free hosting</em></p>\n          <p><em>40MB of storage</em></p>\n\n          <p class="text-center pt-5"><a href="https://www.froala.com" class="btn btn-round">Subscribe</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/7.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing Plans</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-top">\n      <div class="col-12 col-md-8 m-auto col-lg-4 text-center">\n        <img alt="image" height="80" src="{{imagesDir}}/img_round.svg">\n        <h2><strong>Startup</strong></h2>\n        <p class="text-h3 mb-4 mb-lg-5"><em>$9 / month</em></p>\n\n        <p>10 hours of support</p>\n        <p>40MB of storage</p>\n        <p>Subdomain</p>\n\n        <p class="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n      </div>\n\n      <div class="col-12 col-md-8 col-lg-4 text-center m-auto pt-5 pt-lg-0">\n        <img alt="image" height="80" src="{{imagesDir}}/img_round.svg">\n        <h2><strong>Advanced</strong></h2>\n        <p class="text-h3 mb-4 mb-lg-5"><em>$19 / month</em></p>\n\n        <p>10 hours of support</p>\n        <p>40MB of storage</p>\n        <p>Subdomain</p>\n\n        <p class="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n      </div>\n\n      <div class="col-12 col-md-8 m-auto col-lg-4 text-center pt-5 pt-lg-0">\n        <img alt="image" height="80" src="{{imagesDir}}/img_round.svg">\n        <h2><strong>Business</strong></h2>\n        <p class="text-h3 mb-4 mb-lg-5"><em>$29 / month</em></p>\n\n        <p>10 hours of support</p>\n        <p>40MB of storage</p>\n        <p>Subdomain</p>\n\n        <p class="text-center mt-4 mt-lg-5"><a href="https://www.froala.com" class="btn btn-round">Choose Plan</a></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/8.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing Plans</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-top">\n      <div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left">\n        <div class="bg-gray p-3 text-center br sl-1">\n          <h2 class="font-weight-light">Startup</h2>\n          <p class="text-h2">$99</p>\n          <p class="text-center"><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p>\n\n          <hr class="mt-5 mb-5">\n\n          <p>10 hours of support</p>\n          <p>40MB of storage</p>\n          <p>Subdomain</p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-md-0">\n        <div class="bg-gray p-3 text-center br sl-1">\n          <h2 class="font-weight-light">Advanced</h2>\n          <p class="text-h2">$399</p>\n          <p class="text-center"><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n\n          <hr class="mt-5 mb-5">\n\n          <p>10 hours of support</p>\n          <p>40MB of storage</p>\n          <p>Subdomain</p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0">\n        <div class="bg-gray p-3 text-center br sl-1">\n          <h2 class="font-weight-light">Business</h2>\n          <p class="text-h2">$999</p>\n          <p class="text-center"><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p>\n\n          <hr class="mt-5 mb-5">\n\n          <p>10 hours of support</p>\n          <p>40MB of storage</p>\n          <p>Subdomain</p>\n        </div>\n      </div>\n\n      <div class="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0">\n        <div class="bg-gray p-3 text-center br sl-1">\n          <h2 class="font-weight-light">Enterprise</h2>\n          <p class="text-h2">Call Us</p>\n          <p class="text-center"><a href="https://www.froala.com" class="btn btn-empty">Contact</a></p>\n\n          <hr class="mt-5 mb-5">\n\n          <p>10 hours of support</p>\n          <p>40MB of storage</p>\n          <p>Subdomain</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "pricings/9.jpg"), n.RegisterDesignBlock("Pricings", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col">\n        <h1>Pricing Plans</h1>\n      </div>\n    </div>\n\n    <table class="table text-center mt-5 d-none d-lg-table">\n      <tbody>\n        <tr class="no-border">\n          <th scope="row"></th>\n          <td class="text-center">\n            <h2 class="font-weight-light">Hobby</h2>\n            <p class="text-h2">$99</p>\n            <p><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p>\n          </td>\n          <td class="text-center">\n            <h2 class="font-weight-light">Professional</h2>\n            <p class="text-h2">$399</p>\n            <p><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p>\n          </td>\n          <td class="text-center">\n            <h2 class="font-weight-light">Business</h2>\n            <p class="text-h2">$899</p>\n            <p><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n          </td>\n          <td class="text-center">\n            <h2 class="font-weight-light">Enterprise</h2>\n            <p class="text-h2">Call us</p>\n            <p><a href="https://www.froala.com" class="btn btn-empty">Contact</a></p>\n          </td>\n        </tr>\n        <tr>\n          <th scope="row">Support</th>\n          <td>3 months</td>\n          <td>6 months</td>\n          <td>12 months</td>\n          <td>Custom</td>\n        </tr>\n        <tr>\n          <th scope="row">Full source code</th>\n          <td>\u2713</td>\n          <td>\u2713</td>\n          <td>\u2713</td>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">SaaS / Subscription</th>\n          <td>\u2713</td>\n          <td>\u2713</td>\n          <td>\u2713</td>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Intranet</th>\n          <td></td>\n          <td>\u2713</td>\n          <td>\u2713</td>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Downloadable Software</th>\n          <td></td>\n          <td></td>\n          <td>\u2713</td>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Redistribute</th>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Custom code</th>\n          <td></td>\n          <td></td>\n          <td></td>\n          <td>\u2713</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <table class="table text-center mt-5 d-table d-lg-none">\n      <tbody>\n        <tr class="no-border">\n          <td class="text-center" colspan="2">\n            <h2 class="font-weight-light">Hobby</h2>\n            <p class="text-h2">$99</p>\n            <p><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p>\n          </td>\n        </tr>\n        <tr>\n          <th scope="row">Support</th>\n          <td>3 months</td>\n        </tr>\n        <tr>\n          <th scope="row">Full source code</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">SaaS / Subscription</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Intranet</th>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope="row">Downloadable Software</th>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope="row">Redistribute</th>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope="row">Custom code</th>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n\n    <table class="table text-center mt-5 d-table d-lg-none">\n      <tbody>\n        <tr class="no-border">\n          <td class="text-center" colspan="2">\n            <h2 class="font-weight-light">Professional</h2>\n            <p class="text-h2">$399</p>\n            <p><a href="https://www.froala.com" class="btn btn-empty">Buy Now</a></p>\n          </td>\n        </tr>\n        <tr>\n          <th scope="row">Support</th>\n          <td>6 months</td>\n        </tr>\n        <tr>\n          <th scope="row">Full source code</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">SaaS / Subscription</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Intranet</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Downloadable Software</th>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope="row">Redistribute</th>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope="row">Custom code</th>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n\n    <table class="table text-center mt-5 d-table d-lg-none">\n      <tbody>\n        <tr class="no-border">\n          <td class="text-center" colspan="2">\n            <h2 class="font-weight-light">Business</h2>\n            <p class="text-h2">$899</p>\n            <p><a href="https://www.froala.com" class="btn">Buy Now</a></p>\n          </td>\n        </tr>\n        <tr>\n          <th scope="row">Support</th>\n          <td>12 months</td>\n        </tr>\n        <tr>\n          <th scope="row">Full source code</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">SaaS / Subscription</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Intranet</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Downloadable Software</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Redistribute</th>\n          <td></td>\n        </tr>\n        <tr>\n          <th scope="row">Custom code</th>\n          <td></td>\n        </tr>\n      </tbody>\n    </table>\n\n    <table class="table text-center mt-5 d-table d-lg-none">\n      <tbody>\n        <tr class="no-border">\n          <td class="text-center" colspan="2">\n            <h2 class="font-weight-light">Enterprise</h2>\n            <p class="text-h2">Call us</p>\n            <p><a href="https://www.froala.com" class="btn btn-empty">Contact</a></p>\n          </td>\n        </tr>\n        <tr>\n          <th scope="row">Support</th>\n          <td>Custom</td>\n        </tr>\n        <tr>\n          <th scope="row">Full source code</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">SaaS / Subscription</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Intranet</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Downloadable Software</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Redistribute</th>\n          <td>\u2713</td>\n        </tr>\n        <tr>\n          <th scope="row">Custom code</th>\n          <td>\u2713</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n', "pricings/10.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n, n.RegisterDesignBlock("Teams", '<section class="fdb-block team-1">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-8">\n        <h1>Our Team</h1>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries.</p>\n      </div>\n    </div>\n\n    <div class="row-50"></div>\n\n    <div class="row">\n      <div class="col-sm-3 text-left">\n        <div class="fdb-box">\n          <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_1.svg">\n\n          <div class="content">\n            <h3><strong>Sara Doe</strong></h3>\n            <p>Founder</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-3 text-left">\n        <div class="fdb-box">\n          <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_2.svg">\n\n          <div class="content">\n            <h3><strong>Sara Doe</strong></h3>\n            <p>Founder</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-sm-3 text-left">\n        <div class="fdb-box">\n          <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_3.svg">\n\n          <div class="content">\n            <h3><strong>Sara Doe</strong></h3>\n            <p>Founder</p>\n          </div>\n        </div>\n      </div>\n      <div class="col-sm-3 text-left">\n        <div class="fdb-box">\n          <img alt="image" class="img-fluid" src="{{imagesDir}}/img_square_4.svg">\n\n          <div class="content">\n            <h3><strong>Sara Doe</strong></h3>\n            <p>Founder</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "teams/1.jpg"), n.RegisterDesignBlock("Teams", '<section class="fdb-block team-2">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-8">\n        <h1>Meet Our Team</h1>\n      </div>\n    </div>\n\n    <div class="row-50"></div>\n\n    <div class="row text-center justify-content-center">\n      <div class="col-sm-3 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h2>Sara Doe</h2>\n        <p>Founder</p>\n      </div>\n\n      <div class="col-sm-3 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h2>Sara Doe</h2>\n        <p>Founder</p>\n      </div>\n\n      <div class="col-sm-3 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h2>Sara Doe</h2>\n\n        <p>Founder</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "teams/2.jpg"), n.RegisterDesignBlock("Teams", '<section class="fdb-block team-3">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-8">\n        <h1>Meet Our Team</h1>\n      </div>\n    </div>\n\n    <div class="row-70"></div>\n\n    <div class="row text-center justify-content-center">\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p><em>Founder</em></p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p><em>Founder</em></p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p><em>Founder</em></p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p><em>Founder</em></p>\n      </div>\n    </div>\n\n    <div class="row justify-content-center text-center">\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p><em>Founder</em></p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p><em>Founder</em></p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p><em>Founder</em></p>\n      </div>\n    </div>\n  </div>\n</section>\n', "teams/3.jpg"),
            n.RegisterDesignBlock("Teams", '<section class="fdb-block team-4">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-8">\n        <h1>Team</h1>\n      </div>\n    </div>\n\n    <div class="row text-center">\n      <div class="col-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n        <h3><strong>John Smith</strong></h3>\n        <p>Position</p>\n        <p>A wonderful serenity has taken possession of my entire soul.</p>\n      </div>\n\n      <div class="col-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n        <h3><strong>John Smith</strong></h3>\n        <p>Position</p>\n        <p>Pityful a rethoric question ran over her cheek.</p>\n      </div>\n\n      <div class="col-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n        <h3><strong>John Smith</strong></h3>\n        <p>Position</p>\n        <p>And if she hasn\u2019t been rewritten, then they are still using her.</p>\n      </div>\n\n      <div class="col-3">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n        <h3><strong>John Smith</strong></h3>\n        <p>Position</p>\n        <p>Wild Question Marks, but the Little Blind Text didn\u2019t listen.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "teams/4.jpg"), n.RegisterDesignBlock("Teams", '<section class="fdb-block team-5">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-8">\n        <h1>Meet Our Team</h1>\n      </div>\n    </div>\n\n    <div class="row-70"></div>\n\n    <div class="row text-center justify-content-center">\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p>"Wild Question Marks, but the Little Blind"</p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p>"Wild Question Marks, but the Little Blind"</p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p>"Wild Question Marks, but the Little Blind"</p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p>"Wild Question Marks, but the Little Blind"</p>\n      </div>\n    </div>\n\n    <div class="row justify-content-center text-center">\n      <div class="col-sm-2  m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p>"Wild Question Marks, but the Little Blind"</p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p>"Wild Question Marks, but the Little Blind"</p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p>"Wild Question Marks, but the Little Blind"</p>\n      </div>\n\n      <div class="col-sm-2 m-sm-auto">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n\n        <h3><strong>Sara Doe</strong></h3>\n        <p>"Wild Question Marks, but the Little Blind"</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "teams/5.jpg"), n.RegisterDesignBlock("Teams", '<section class="fdb-block team-6">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-8">\n        <h1>Team</h1>\n      </div>\n    </div>\n\n    <div class="row text-center">\n      <div class="col-4">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n        <h3><strong>John Smith</strong></h3>\n        <p>Position</p>\n        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>\n      </div>\n\n      <div class="col-4">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n        <h3><strong>John Smith</strong></h3>\n        <p>Position</p>\n        <p>One morning, when Gregor Samsa woke from troubled dreams.</p>\n      </div>\n\n      <div class="col-4">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/colors_wide_1.jpg">\n        <h3><strong>John Smith</strong></h3>\n        <p>Position</p>\n        <p>A small river named Duden flows by their place and supplies it.</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "teams/6.jpg"), n.RegisterDesignBlock("Teams", '<section class="fdb-block team-7">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-8">\n        <h1>Team</h1>\n      </div>\n    </div>\n\n    <div class="row-70"></div>\n\n    <div class="row justify-content-center">\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row-50"></div>\n\n    <div class="row justify-content-center">\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row-50"></div>\n\n    <div class="row justify-content-center">\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-3 m-sm-auto">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3>Employee Name</h3>\n            <p>Position</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "teams/7.jpg"), n.RegisterDesignBlock("Teams", '<section class="fdb-block team-8">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-8">\n        <h1>Our Amazing Team</h1>\n        <p class="text-h3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n      </div>\n    </div>\n\n    <div class="row-100"></div>\n\n    <div class="row justify-content-center text-left">\n      <div class="col-sm-6">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3><strong>Employee Name</strong></h3>\n            <p class="text-h3">Position</p>\n\n            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-6">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3><strong>Employee Name</strong></h3>\n            <p class="text-h3">Position</p>\n\n            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="row-70"></div>\n\n    <div class="row justify-content-center text-left">\n      <div class="col-sm-6">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3><strong>Employee Name</strong></h3>\n            <p class="text-h3">Position</p>\n\n            <p>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-sm-6">\n        <div class="row align-items-center">\n          <div class="col-4">\n            <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n          </div>\n\n          <div class="col-8">\n            <h3><strong>Employee Name</strong></h3>\n            <p class="text-h3">Position</p>\n\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "teams/8.jpg")
    }),
    function(n, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(require("FroalaPages")) : "function" == typeof define && define.amd ? define(["FroalaPages"], e) : e(n.FroalaPages)
    }(this, function(n) {
        "use strict";
        n = n && n.hasOwnProperty("default") ? n["default"] : n, n.RegisterDesignBlock("Testimonials", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center justify-content-center">\n      <div class="col-12 col-md-10 col-lg-8">\n        <p class="text-h3">\n          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."\n        </p>\n\n        <p class="text-h3"><strong>Person Name</strong>&nbsp; &nbsp;&nbsp;<em>Co-founder at Company</em></p>\n      </div>\n      <div class="col-8 col-sm-6 col-md-2 col-lg-3 col-xl-2 mt-4 mt-md-0 ml-auto mr-auto mr-md-0">\n        <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/1.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_3.svg)">\n  <div class="container">\n    <div class="fdb-box">\n      <div class="row align-items-center justify-content-center">\n        <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto">\n          <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n        </div>\n\n        <div class="col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0">\n          <p class="text-h3">\n            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."\n          </p>\n\n          <p class="text-h3 mt-4 mt-lg-5"><strong>Person Name</strong></p>\n          <p><em>Co-founder at Company</em></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/2.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center">\n      <div class="col-12">\n        <h3><strong>You are in good company</strong></h3>\n\n        <div class="mt-5 justify-content-center">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/adobe.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/discovery.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/ebay.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/samsung.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/orange.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/salesforce.svg">\n        </div>\n        <div class="mt-2 mt-md-5 justify-content-center">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/cisco.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/apple.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/ibm.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/intel.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/panasonic.svg">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/3.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block">\n  <div class="container">\n    <div class="row align-items-center justify-content-center">\n      <div class="col-md-6">\n        <div class="fdb-box fdb-touch">\n          <p class="text-h3 mb-4">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics."</p>\n\n          <p>\n            <img alt="image" height="50" src="{{imagesDir}}/img_round.svg">\n            <strong class="ml-3">Person Name</strong>\n          </p>\n        </div>\n      </div>\n\n      <div class="col-md-6 mt-4 mt-md-0">\n        <div class="fdb-box fdb-touch">\n          <p class="text-h3 mb-4">"A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."</p>\n\n          <p>\n            <img alt="image" height="50" src="{{imagesDir}}/img_round.svg">\n            <strong class="ml-3">Person Name</strong>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/4.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block" style="background-image: url({{imagesDir}}/bg_2.svg)">\n  <div class="container">\n    <div class="row align-items-center justify-content-center">\n      <div class="col-lg-9 col-xl-6">\n        <div class="fdb-box">\n          <div class="row">\n            <div class="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">\n              <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            </div>\n\n            <div class="col-md-8 mt-4 mt-md-0">\n              <p class="text-h3">\n                "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."\n              </p>\n\n              <p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>\n              <p><em>Co-founder at Company</em></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-lg-9 col-xl-6 mt-4 mt-xl-0">\n        <div class="fdb-box">\n          <div class="row">\n            <div class="col-8 col-sm-6 col-md-4 col-xl-3 ml-auto mr-auto">\n              <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            </div>\n\n            <div class="col-md-8 mt-4 mt-md-0">\n              <p class="text-h3">\n                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."\n              </p>\n\n              <p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>\n              <p><em>Co-founder at Company</em></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/5.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-lg-8">\n        <h2>You are in good company</h2>\n        <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>\n        <div class="mt-5 justify-content-center">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/adobe.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/discovery.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/ebay.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/samsung.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/orange.svg">\n          <img alt="image" height="30" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/salesforce.svg">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/6.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block bg-dark">\n  <div class="container">\n    <div class="row justify-content-center text-center">\n      <div class="col">\n        <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/adobe.svg">\n        <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/discovery.svg">\n        <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/ebay.svg">\n        <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/samsung.svg">\n        <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/orange.svg">\n        <img alt="image" height="40" class="ml-3 mr-3 mb-2 mt-2" src="{{imagesDir}}/customers/salesforce.svg">\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/7.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block">\n  <div class="container">\n    <div class="row pb-xl-5 text-center justify-content-center">\n      <div class="col-md-10 col-lg-7">\n        <h1>Testimonials</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 justify-content-center">\n      <div class="col-md-8 col-lg-4 col-xl-3 m-auto text-center">\n        <img alt="image" height="50" src="{{imagesDir}}/customers/intel.svg">\n        <p class="text-h3 mt-3">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p>\n\n        <p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>\n        <p>Co-founder at Company</p>\n      </div>\n\n      <div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center">\n        <img alt="image" height="50" src="{{imagesDir}}/customers/apple.svg">\n        <p class="text-h3 mt-3">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>\n\n        <p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>\n        <p>Co-founder at Company</p>\n      </div>\n\n      <div class="col-md-8 col-lg-4 col-xl-3 pt-5 pt-lg-0 m-auto text-center">\n        <img alt="image" height="50" src="{{imagesDir}}/customers/samsung.svg">\n        <p class="text-h3 mt-3">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p>\n\n        <p class="text-h3 mt-4 mt-xl-5"><strong>Person Name</strong></p>\n        <p>Co-founder at Company</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/8.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block bg-dark" style="background-image: url({{imagesDir}}/bg_4.svg)">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-md-10 col-lg-8 col-xl-7">\n        <h1>Testimonials</h1>\n        <p class="text-h3">A small river named Duden flows by their place and supplies it with the necessary regelialia. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>\n      </div>\n    </div>\n\n    <div class="row mt-5 align-items-center justify-content-center">\n      <div class="col-md-8 col-lg-4">\n        <div class="fdb-box">\n          <div class="row no-gutters align-items-center">\n            <div class="col-3">\n              <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            </div>\n            <div class="col-8 ml-auto">\n              <p>\n                <strong>Person Name</strong><br>\n                <em>Co-founder at Company</em>\n              </p>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col-12">\n              <p class="text-h3">\n                "Even the all-powerful Pointing has no control about the blind texts it is an unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-md-8 col-lg-4 mt-4 mt-lg-0">\n        <div class="fdb-box">\n          <div class="row no-gutters align-items-center">\n            <div class="col-3">\n              <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            </div>\n            <div class="col-8 ml-auto">\n              <p>\n                <strong>Person Name</strong><br>\n                <em>Co-founder at Company</em>\n              </p>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col-12">\n              <p class="text-h3">\n                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-md-8 col-lg-4 mt-4 mt-lg-0">\n        <div class="fdb-box">\n          <div class="row no-gutters align-items-center">\n            <div class="col-3">\n              <img alt="image" class="img-fluid" src="{{imagesDir}}/img_round.svg">\n            </div>\n            <div class="col-8 ml-auto">\n              <p>\n                <strong>Person Name</strong><br>\n                <em>Co-founder at Company</em>\n              </p>\n            </div>\n          </div>\n          <div class="row mt-4">\n            <div class="col-12">\n              <p class="text-h3">\n                "Separated they live in Bookmarksgrove right at the coast of the Semantics, far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/9.jpg"), n.RegisterDesignBlock("Testimonials", '<section class="fdb-block">\n  <div class="container">\n    <div class="row text-center justify-content-center">\n      <div class="col-md-10 col-lg-7">\n        <h1>Testimonials</h1>\n      </div>\n    </div>\n\n    <div class="row mt-5 justify-content-center">\n      <div class="col-md-10 col-lg-3 ml-auto mr-auto text-center">\n        <p class="text-h3 mb-4 mb-lg-5">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</p>\n\n        <p><img alt="image" height="50" src="{{imagesDir}}/img_round.svg"></p>\n        <p class="text-h3"><strong>Person Name</strong></p>\n        <p>Co-founder, Company</p>\n      </div>\n\n      <div class="col-md-10 col-lg-3 pt-5 pt-lg-0 ml-auto mr-auto text-center">\n        <p class="text-h3 mb-4 mb-lg-5">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>\n\n        <p><img alt="image" height="50" src="{{imagesDir}}/img_round.svg"></p>\n        <p class="text-h3"><strong>Person Name</strong></p>\n        <p>Co-founder, Company</p>\n      </div>\n\n      <div class="col-md-10 col-lg-3 pt-5 pt-lg-0 ml-auto mr-auto text-center">\n        <p class="text-h3 mb-4 mb-lg-5">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</p>\n\n        <p><img alt="image" height="50" src="{{imagesDir}}/img_round.svg"></p>\n        <p class="text-h3"><strong>Person Name</strong></p>\n        <p>Co-founder, Company</p>\n      </div>\n    </div>\n  </div>\n</section>\n', "testimonials/10.jpg")
    }),
    function() {
        document.addEventListener("DOMContentLoaded", function() {
            var n, e;
            return !1 === mobilecheck() ? (e = new FroalaPages({
                designsThumbsDir: "https://editor-latest.s3.amazonaws.com/design-blocks/block_thumbs/",
                designsImagesDir: "https://editor-latest.s3.amazonaws.com/design-blocks/block_images"
            }), FroalaPages.Button._.download.callback = function() {
                return $(".white-modal").css("opacity", "1").css("visibility", "visible")
            }, $(".white-modal .white-modal-close").on("click", function() {
                return $(".white-modal").css("opacity", "0").css("visibility", "hidden"), $(".db-after-download").hide(), $(".db-builder-mobile + .db-builder").show()
            }), $(".white-modal a#db-download").on("click", function(e) {
                return e.preventDefault(), n()
            }), $(".white-modal form").on("ajax:success", function(e, t) {
                return t.success ? n() : $(".white-modal form .form-group").addClass("has-error")
            }), n = function() {
                var n, t, a;
                return t = new Blob([e.getHTML()], {
                    type: "text/html"
                }), a = window.URL.createObjectURL(t), n = document.createElement("a"), n.href = a, n.download = "froala_design_blocks_website.html", n.click(), $(".white-modal").css("opacity", "1").css("visibility", "visible"), $(".db-after-download").show(), $(".db-builder-mobile + .db-builder").hide()
            }) : ($(".white-modal").css("opacity", "1").css("visibility", "visible"), $(".db-builder-mobile").show(), $(".db-builder-mobile + .db-builder").hide(), $(".white-modal .white-modal-close").hide())
        })
    }.call(this);
