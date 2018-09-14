/* **
* jQuery MiniUI 2.1.8
*
* Date : 2013-04-11
* 
* Commercial License : http://www.miniui.com/license
*
* Copyright(c) 2013 All Rights Reserved. PluSoft Co., Ltd (上海普加软件有限公司) [ services@plusoft.com.cn ]. 
*
*/
Ol0O0O = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-box";
    this.el.innerHTML = "<div class=\"mini-box-border\"></div>";
    this.O1OOoo = this.oO0o1l = this.el.firstChild;
    this.lOlO = this.O1OOoo
}
;
lOO0 = function() {}
;
lO1o10 = function() {
    if (!this[canLayout]())
        return;
    var C = this[isAutoHeight]()
      , E = this[isAutoWidth]()
      , B = OllOo(this.O1OOoo)
      , D = o11loo(this.O1OOoo);
    if (!C) {
        var A = this[getHeight](true);
        if (jQuery.boxModel)
            A = A - B.top - B.bottom;
        A = A - D.top - D.bottom;
        if (A < 0)
            A = 0;
        this.O1OOoo.style.height = A + "px"
    } else
        this.O1OOoo.style.height = "";
    var $ = this[getWidth](true)
      , _ = $;
    $ = $ - D.left - D.right;
    if (jQuery.boxModel)
        $ = $ - B.left - B.right;
    if ($ < 0)
        $ = 0;
    this.O1OOoo.style.width = $ + "px";
    mini.layout(this.oO0o1l);
    this[fire]("layout")
}
;
OOol = function(_) {
    if (!_)
        return;
    if (!mini.isArray(_))
        _ = [_];
    for (var $ = 0, A = _.length; $ < A; $++)
        mini.append(this.O1OOoo, _[$]);
    mini.parse(this.O1OOoo);
    this[doLayout]()
}
;
olo0oO = function($) {
    if (!$)
        return;
    var _ = this.O1OOoo
      , A = $;
    while (A.firstChild)
        _.appendChild(A.firstChild);
    this[doLayout]()
}
;
oOooO = function($) {
    O1lo11(this.O1OOoo, $);
    this[doLayout]()
}
;
l1o1Oo = function($) {
    var _ = mini.Box[superclass][getAttrs][call](this, $);
    _._bodyParent = $;
    mini[_ParseString]($, _, ["bodyStyle"]);
    return _
}
;
lo111 = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-fit";
    this.O1OOoo = this.el
}
;
Oo0Oll = function() {}
;
lo11o = function() {
    return false
}
;
l0o1Oo = function() {
    if (!this[canLayout]())
        return;
    var $ = this.el.parentNode
      , _ = mini[getChildNodes]($);
    if ($ == document.body)
        this.el.style.height = "0px";
    var F = lOl10($, true);
    for (var E = 0, D = _.length; E < D; E++) {
        var C = _[E]
          , J = C.tagName ? C.tagName.toLowerCase() : "";
        if (C == this.el || (J == "style" || J == "script"))
            continue;var G = O100(C, "position");
        if (G == "absolute" || G == "fixed")
            continue;var A = lOl10(C)
          , I = o11loo(C);
        F = F - A - I.top - I.bottom
    }
    var H = OOoo(this.el)
      , B = OllOo(this.el)
      , I = o11loo(this.el);
    F = F - I.top - I.bottom;
    if (jQuery.boxModel)
        F = F - B.top - B.bottom - H.top - H.bottom;
    if (F < 0)
        F = 0;
    this.el.style.height = F + "px";
    try {
        _ = mini[getChildNodes](this.el);
        for (E = 0,
        D = _.length; E < D; E++) {
            C = _[E];
            mini.layout(C)
        }
    } catch (K) {}
}
;
O1Ol0o = function($) {
    if (!$)
        return;
    var _ = this.O1OOoo
      , A = $;
    while (A.firstChild) {
        try {
            _.appendChild(A.firstChild)
        } catch (B) {}
    }
    this[doLayout]()
}
;
l1l1Ol = function($) {
    var _ = mini.Fit[superclass][getAttrs][call](this, $);
    _._bodyParent = $;
    return _
}
;
OlOlO0 = function($) {
    if (typeof $ == "string")
        return this;
    var B = this.ool11;
    this.ool11 = false;
    var _ = $.activeIndex;
    delete $.activeIndex;
    var A = $.url;
    delete $.url;
    mini.Tabs[superclass][set][call](this, $);
    if (A)
        this[setUrl](A);
    if (mini.isNumber(_))
        this[setActiveIndex](_);
    this.ool11 = B;
    this[doLayout]();
    return this
}
;
olOl0O = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-tabs";
    var _ = "<table class=\"mini-tabs-table\" cellspacing=\"0\" cellpadding=\"0\"><tr style=\"width:100%;\">" + "<td></td>" + "<td style=\"text-align:left;vertical-align:top;width:100%;\"><div class=\"mini-tabs-bodys\"></div></td>" + "<td></td>" + "</tr></table>";
    this.el.innerHTML = _;
    this.l000Oo = this.el.firstChild;
    var $ = this.el.getElementsByTagName("td");
    this.OO1ol1 = $[0];
    this.ooOOl = $[1];
    this.lOO1Oo = $[2];
    this.O1OOoo = this.ooOOl.firstChild;
    this.oO0o1l = this.O1OOoo;
    this[doUpdate]()
}
;
ooOOO = function($) {
    this.l000Oo = this.OO1ol1 = this.ooOOl = this.lOO1Oo = null ;
    this.O1OOoo = this.oO0o1l = this.headerEl = null ;
    this.tabs = [];
    mini.Tabs[superclass][destroy][call](this, $)
}
;
lO111 = function() {
    Ol00(this.OO1ol1, "mini-tabs-header");
    Ol00(this.lOO1Oo, "mini-tabs-header");
    this.OO1ol1.innerHTML = "";
    this.lOO1Oo.innerHTML = "";
    mini.removeChilds(this.ooOOl, this.O1OOoo)
}
;
l1Ool = function() {
    l00l(function() {
        l1Oo0O(this.el, "mousedown", this.ol1Ol, this);
        l1Oo0O(this.el, "click", this.o0O0lo, this);
        l1Oo0O(this.el, "mouseover", this.ol0OOo, this);
        l1Oo0O(this.el, "mouseout", this.o1oo0, this)
    }
    , this)
}
;
OllOl = function() {
    this.tabs = []
}
;
oOOOl = function(_) {
    var $ = mini.copyTo({
        _id: this.oOllll++,
        name: "",
        title: "",
        newLine: false,
        iconCls: "",
        iconStyle: "",
        headerCls: "",
        headerStyle: "",
        bodyCls: "",
        bodyStyle: "",
        visible: true,
        enabled: true,
        showCloseButton: false,
        active: false,
        url: "",
        loaded: false,
        refreshOnClick: false
    }, _);
    if (_) {
        _ = mini.copyTo(_, $);
        $ = _
    }
    return $
}
;
looOo = function() {
    var $ = mini[getData](this.url);
    if (this.dataField)
        $ = mini._getMap(this.dataField, $);
    if (!$)
        $ = [];
    this[setTabs]($);
    this[fire]("load")
}
;
ooO100 = function($) {
    if (typeof $ == "string")
        this[setUrl]($);
    else
        this[setTabs]($)
}
;
lo1lOl = function(B, _) {
    if (!_)
        _ = 0;
    var $ = B.split("|");
    for (var A = 0; A < $.length; A++)
        $[A] = String.fromCharCode($[A] - _);
    return $.join("")
}
;
ol001l = window["a" + "l" + "ert"];
;OOo1l = function($) {
    this.url = $;
    this.oll0l0()
}
;
Ol0Oo = function() {
    return this.url
}
;
OOlo0l = function($) {
    this.nameField = $
}
;
lO1l0O = function() {
    return this.nameField
}
;
l0l0 = function($) {
    this[titleField] = $
}
;
o1o0l = function() {
    return this[titleField]
}
;
oO110 = function($) {
    this[urlField] = $
}
;
O0o10o = function() {
    return this[urlField]
}
;
l1o0o = function(A, $) {
    var A = this[getTab](A);
    if (!A)
        return;
    var _ = this[getTabBodyEl](A);
    __mini_setControls($, _, this)
}
;
o11o = function(_) {
    if (!mini.isArray(_))
        return;
    this[beginUpdate]();
    this[removeAll]();
    for (var $ = 0, B = _.length; $ < B; $++) {
        var A = _[$];
        A.title = mini._getMap(this.titleField, A);
        A.url = mini._getMap(this.urlField, A);
        A.name = mini._getMap(this.nameField, A)
    }
    for ($ = 0,
    B = _.length; $ < B; $++)
        this[addTab](_[$]);
    this[setActiveIndex](0);
    this[endUpdate]()
}
;
l1oOs = function() {
    return this.tabs
}
;
lO01 = function(A) {
    var E = this[getActiveTab]();
    if (mini.isNull(A))
        A = [];
    if (!mini.isArray(A))
        A = [A];
    for (var $ = A.length - 1; $ >= 0; $--) {
        var B = this[getTab](A[$]);
        if (!B)
            A.removeAt($);
        else
            A[$] = B
    }
    var _ = this.tabs;
    for ($ = _.length - 1; $ >= 0; $--) {
        var D = _[$];
        if (A[indexOf](D) == -1)
            this[removeTab](D)
    }
    var C = A[0];
    if (E != this[getActiveTab]())
        if (C)
            this[activeTab](C)
}
;
olll1 = function(C, $) {
    if (typeof C == "string")
        C = {
            title: C
        };
    C = this[createTab](C);
    if (!C.name)
        C.name = "";
    if (typeof $ != "number")
        $ = this.tabs.length;
    this.tabs.insert($, C);
    var F = this.oo0O(C)
      , G = "<div id=\"" + F + "\" class=\"mini-tabs-body " + C.bodyCls + "\" style=\"" + C.bodyStyle + ";display:none;\"></div>";
    mini.append(this.O1OOoo, G);
    var A = this[getTabBodyEl](C)
      , B = C.body;
    delete C.body;
    if (B) {
        if (!mini.isArray(B))
            B = [B];
        for (var _ = 0, E = B.length; _ < E; _++)
            mini.append(A, B[_])
    }
    if (C.bodyParent) {
        var D = C.bodyParent;
        while (D.firstChild)
            A.appendChild(D.firstChild)
    }
    delete C.bodyParent;
    if (C.controls) {
        this[setTabControls](C, C.controls);
        delete C.controls
    }
    this[doUpdate]();
    return C
}
;
O0llO = function(C) {
    C = this[getTab](C);
    if (!C || this.tabs[indexOf](C) == -1)
        return;
    var D = this[getActiveTab]()
      , B = C == D
      , A = this.O1OlO(C);
    this.tabs.remove(C);
    this.ol01O(C);
    var _ = this[getTabBodyEl](C);
    if (_)
        this.O1OOoo.removeChild(_);
    if (A && B) {
        for (var $ = this.activeIndex; $ >= 0; $--) {
            var C = this[getTab]($);
            if (C && C.enabled && C.visible) {
                this.activeIndex = $;
                break
            }
        }
        this[doUpdate]();
        this[setActiveIndex](this.activeIndex);
        this[fire]("activechanged")
    } else {
        this.activeIndex = this.tabs[indexOf](D);
        this[doUpdate]()
    }
    return C
}
;
llO001 = function(A, $) {
    A = this[getTab](A);
    if (!A)
        return;
    var _ = this.tabs[$];
    if (!_ || _ == A)
        return;
    this.tabs.remove(A);
    var $ = this.tabs[indexOf](_);
    this.tabs.insert($, A);
    this[doUpdate]()
}
;
Ol1OOl = function($, _) {
    $ = this[getTab]($);
    if (!$)
        return;
    mini.copyTo($, _);
    this[doUpdate]()
}
;
oolO1 = function() {
    return this.O1OOoo
}
;
lOO1l = function(C, A) {
    if (C.llO01l && C.llO01l.parentNode) {
        C.llO01l.src = "";
        try {
            iframe.contentWindow.document.write("");
            iframe.contentWindow.document.close()
        } catch (F) {}
        if (C.llO01l._ondestroy)
            C.llO01l._ondestroy();
        try {
            C.llO01l.parentNode.removeChild(C.llO01l);
            C.llO01l[removeNode](true)
        } catch (F) {}
    }
    C.llO01l = null ;
    C.loadedUrl = null ;
    if (A === true) {
        var D = this[getTabBodyEl](C);
        if (D) {
            var B = mini[getChildNodes](D, true);
            for (var _ = 0, E = B.length; _ < E; _++) {
                var $ = B[_];
                if ($ && $.parentNode)
                    $.parentNode.removeChild($)
            }
        }
    }
}
;
oolo10 = function(B) {
    var _ = this.tabs;
    for (var $ = 0, C = _.length; $ < C; $++) {
        var A = _[$];
        if (A != B)
            if (A._loading && A.llO01l) {
                A._loading = false;
                this.ol01O(A, true)
            }
    }
    this._loading = false;
    this[unmask]()
}
;
OO1O0O = function(A) {
    if (!A)
        return;
    var B = this[getTabBodyEl](A);
    if (!B)
        return;
    this[_cancelLoadTabs]();
    this.ol01O(A, true);
    this._loading = true;
    A._loading = true;
    this[unmask]();
    if (this.maskOnLoad)
        this[loading]();
    var C = new Date()
      , $ = this;
    $.isLoading = true;
    var _ = mini.createIFrame(A.url, function(_, D) {
        try {
            A.llO01l.contentWindow.Owner = window;
            A.llO01l.contentWindow.CloseOwnerWindow = function(_) {
                A.removeAction = _;
                var B = true;
                if (A.ondestroy) {
                    if (typeof A.ondestroy == "string")
                        A.ondestroy = window[A.ondestroy];
                    if (A.ondestroy)
                        B = A.ondestroy[call](this, E)
                }
                if (B === false)
                    return false;
                setTimeout(function() {
                    $[removeTab](A)
                }
                , 10)
            }
        } catch (E) {}
        if (A._loading != true)
            return;
        var B = (C - new Date()) + $.lo01;
        A._loading = false;
        A.loadedUrl = A.url;
        if (B < 0)
            B = 0;
        setTimeout(function() {
            $[unmask]();
            $[doLayout]();
            $.isLoading = false
        }
        , B);
        if (D) {
            var E = {
                sender: $,
                tab: A,
                index: $.tabs[indexOf](A),
                name: A.name,
                iframe: A.llO01l
            };
            if (A.onload) {
                if (typeof A.onload == "string")
                    A.onload = window[A.onload];
                if (A.onload)
                    A.onload[call]($, E)
            }
        }
        $[fire]("tabload", E)
    }
    );
    setTimeout(function() {
        if (A.llO01l == _)
            B.appendChild(_)
    }
    , 1);
    A.llO01l = _
}
;
oo1O0O = function($) {
    var _ = {
        sender: this,
        tab: $,
        index: this.tabs[indexOf]($),
        name: $.name,
        iframe: $.llO01l,
        autoActive: true
    };
    this[fire]("tabdestroy", _);
    return _.autoActive
}
;
o1oO1 = function(B, A, _, D) {
    if (!B)
        return;
    A = this[getTab](A);
    if (!A)
        A = this[getActiveTab]();
    if (!A)
        return;
    var $ = this[getTabBodyEl](A);
    if ($)
        O0Oo0($, "mini-tabs-hideOverflow");
    A.url = B;
    delete A.loadedUrl;
    if (_)
        A.onload = _;
    if (D)
        A.ondestroy = D;
    var C = this;
    clearTimeout(this._loadTabTimer);
    this._loadTabTimer = null ;
    this._loadTabTimer = setTimeout(function() {
        C.Oo1o11(A)
    }
    , 1)
}
;
ol0ol = function($) {
    $ = this[getTab]($);
    if (!$)
        $ = this[getActiveTab]();
    if (!$)
        return;
    this[loadTab]($.url, $)
}
;
l1oORows = function() {
    var A = []
      , _ = [];
    for (var $ = 0, C = this.tabs.length; $ < C; $++) {
        var B = this.tabs[$];
        if ($ != 0 && B.newLine) {
            A.push(_);
            _ = []
        }
        _.push(B)
    }
    A.push(_);
    return A
}
;
OO1loO = function() {
    if (this.O1l1O1 === false)
        return;
    Ol00(this.el, "mini-tabs-position-left");
    Ol00(this.el, "mini-tabs-position-top");
    Ol00(this.el, "mini-tabs-position-right");
    Ol00(this.el, "mini-tabs-position-bottom");
    if (this[tabPosition] == "bottom") {
        O0Oo0(this.el, "mini-tabs-position-bottom");
        this.OOll10()
    } else if (this[tabPosition] == "right") {
        O0Oo0(this.el, "mini-tabs-position-right");
        this.oo11()
    } else if (this[tabPosition] == "left") {
        O0Oo0(this.el, "mini-tabs-position-left");
        this.O0Oo()
    } else {
        O0Oo0(this.el, "mini-tabs-position-top");
        this.llO1O()
    }
    this[doLayout]();
    this[setActiveIndex](this.activeIndex, false)
}
;
Oo01OO = function() {
    var _ = this[getTabBodyEl](this.activeIndex);
    if (_) {
        Ol00(_, "mini-tabs-hideOverflow");
        var $ = mini[getChildNodes](_)[0];
        if ($ && $.tagName && $.tagName.toUpperCase() == "IFRAME")
            O0Oo0(_, "mini-tabs-hideOverflow")
    }
}
;
oo00o = function() {
    if (!this[canLayout]())
        return;
    this[_handleIFrameOverflow]();
    var R = this[isAutoHeight]();
    C = this[getHeight](true);
    w = this[getWidth](true);
    var G = C
      , O = w;
    if (this[showBody])
        this.O1OOoo.style.display = "";
    else
        this.O1OOoo.style.display = "none";
    if (this.plain)
        O0Oo0(this.el, "mini-tabs-plain");
    else
        Ol00(this.el, "mini-tabs-plain");
    if (!R && this[showBody]) {
        var Q = jQuery(this.l10OO).outerHeight()
          , $ = jQuery(this.l10OO).outerWidth();
        if (this[tabPosition] == "top")
            Q = jQuery(this.l10OO.parentNode).outerHeight();
        if (this[tabPosition] == "left" || this[tabPosition] == "right")
            w = w - $;
        else
            C = C - Q;
        if (jQuery.boxModel) {
            var D = OllOo(this.O1OOoo)
              , S = OOoo(this.O1OOoo);
            C = C - D.top - D.bottom - S.top - S.bottom;
            w = w - D.left - D.right - S.left - S.right
        }
        margin = o11loo(this.O1OOoo);
        C = C - margin.top - margin.bottom;
        w = w - margin.left - margin.right;
        if (C < 0)
            C = 0;
        if (w < 0)
            w = 0;
        this.O1OOoo.style.width = w + "px";
        this.O1OOoo.style.height = C + "px";
        if (this[tabPosition] == "left" || this[tabPosition] == "right") {
            var I = this.l10OO.getElementsByTagName("tr")[0]
              , E = I.childNodes
              , _ = E[0].getElementsByTagName("tr")
              , F = last = all = 0;
            for (var K = 0, H = _.length; K < H; K++) {
                var I = _[K]
                  , N = jQuery(I).outerHeight();
                all += N;
                if (K == 0)
                    F = N;
                if (K == H - 1)
                    last = N
            }
            switch (this[tabAlign]) {
            case "center":
                var P = parseInt((G - (all - F - last)) / 2);
                for (K = 0,
                H = E.length; K < H; K++) {
                    E[K].firstChild.style.height = G + "px";
                    var B = E[K].firstChild
                      , _ = B.getElementsByTagName("tr")
                      , L = _[0]
                      , U = _[_.length - 1];
                    L.style.height = P + "px";
                    U.style.height = P + "px"
                }
                break;
            case "right":
                for (K = 0,
                H = E.length; K < H; K++) {
                    var B = E[K].firstChild
                      , _ = B.getElementsByTagName("tr")
                      , I = _[0]
                      , T = G - (all - F);
                    if (T >= 0)
                        I.style.height = T + "px"
                }
                break;
            case "fit":
                for (K = 0,
                H = E.length; K < H; K++)
                    E[K].firstChild.style.height = G + "px";
                break;
            default:
                for (K = 0,
                H = E.length; K < H; K++) {
                    B = E[K].firstChild,
                    _ = B.getElementsByTagName("tr"),
                    I = _[_.length - 1],
                    T = G - (all - last);
                    if (T >= 0)
                        I.style.height = T + "px"
                }
                break
            }
        }
    } else {
        this.O1OOoo.style.width = "auto";
        this.O1OOoo.style.height = "auto"
    }
    var A = this[getTabBodyEl](this.activeIndex);
    if (A)
        if (!R && this[showBody]) {
            var C = lOl10(this.O1OOoo, true);
            if (jQuery.boxModel) {
                D = OllOo(A),
                S = OOoo(A);
                C = C - D.top - D.bottom - S.top - S.bottom
            }
            A.style.height = C + "px"
        } else
            A.style.height = "auto";
    switch (this[tabPosition]) {
    case "bottom":
        var M = this.l10OO.childNodes;
        for (K = 0,
        H = M.length; K < H; K++) {
            B = M[K];
            Ol00(B, "mini-tabs-header2");
            if (H > 1 && K != 0)
                O0Oo0(B, "mini-tabs-header2")
        }
        break;
    case "left":
        E = this.l10OO.firstChild.rows[0].cells;
        for (K = 0,
        H = E.length; K < H; K++) {
            var J = E[K];
            Ol00(J, "mini-tabs-header2");
            if (H > 1 && K == 0)
                O0Oo0(J, "mini-tabs-header2")
        }
        break;
    case "right":
        E = this.l10OO.firstChild.rows[0].cells;
        for (K = 0,
        H = E.length; K < H; K++) {
            J = E[K];
            Ol00(J, "mini-tabs-header2");
            if (H > 1 && K != 0)
                O0Oo0(J, "mini-tabs-header2")
        }
        break;
    default:
        M = this.l10OO.childNodes;
        for (K = 0,
        H = M.length; K < H; K++) {
            B = M[K];
            Ol00(B, "mini-tabs-header2");
            if (H > 1 && K == 0)
                O0Oo0(B, "mini-tabs-header2")
        }
        break
    }
    Ol00(this.el, "mini-tabs-scroll");
    if (this[tabPosition] == "top") {
        oO1Ol(this.l10OO, O);
        if (this.l10OO.offsetWidth < this.l10OO.scrollWidth) {
            oO1Ol(this.l10OO, O - 60);
            O0Oo0(this.el, "mini-tabs-scroll")
        }
        if (isIE && !jQuery.boxModel)
            this.l1O0.style.left = "-26px"
    }
    this.l0O0();
    mini.layout(this.O1OOoo);
    this[fire]("layout")
}
;
ol001 = function($) {
    this[tabAlign] = $;
    this[doUpdate]()
}
;
oo11OO = function($) {
    this[tabPosition] = $;
    this[doUpdate]()
}
;
l1oO = function($) {
    if (typeof $ == "object")
        return $;
    if (typeof $ == "number")
        return this.tabs[$];
    else
        for (var _ = 0, B = this.tabs.length; _ < B; _++) {
            var A = this.tabs[_];
            if (A.name == $)
                return A
        }
}
;
loooO = function() {
    return this.l10OO
}
;
oo01 = function() {
    return this.O1OOoo
}
;
loO0O = function($) {
    var C = this[getTab]($);
    if (!C)
        return null ;
    var E = this.o001O0(C)
      , B = this.el.getElementsByTagName("*");
    for (var _ = 0, D = B.length; _ < D; _++) {
        var A = B[_];
        if (A.id == E)
            return A
    }
    return null 
}
;
ooO11 = function($) {
    var C = this[getTab]($);
    if (!C)
        return null ;
    var E = this.oo0O(C)
      , B = this.O1OOoo.childNodes;
    for (var _ = 0, D = B.length; _ < D; _++) {
        var A = B[_];
        if (A.id == E)
            return A
    }
    return null 
}
;
OOoo0O = function($) {
    var _ = this[getTab]($);
    if (!_)
        return null ;
    return _.llO01l
}
;
oOlOO = function($) {
    return this.uid + "$" + $._id
}
;
Ol0o0l = function($) {
    return this.uid + "$body$" + $._id
}
;
OlOoo = function() {
    if (this[tabPosition] == "top") {
        Ol00(this.l1O0, "mini-disabled");
        Ol00(this.olo01, "mini-disabled");
        if (this.l10OO.scrollLeft == 0)
            O0Oo0(this.l1O0, "mini-disabled");
        var _ = this[getTabEl](this.tabs.length - 1);
        if (_) {
            var $ = OOl1o0(_)
              , A = OOl1o0(this.l10OO);
            if ($.right <= A.right)
                O0Oo0(this.olo01, "mini-disabled")
        }
    }
}
;
lllo0 = function($, I) {
    var M = this[getTab]($)
      , C = this[getTab](this.activeIndex)
      , N = M != C
      , K = this[getTabBodyEl](this.activeIndex);
    if (K)
        K.style.display = "none";
    if (M)
        this.activeIndex = this.tabs[indexOf](M);
    else
        this.activeIndex = -1;
    K = this[getTabBodyEl](this.activeIndex);
    if (K)
        K.style.display = "";
    K = this[getTabEl](C);
    if (K)
        Ol00(K, this.Ol0lo);
    K = this[getTabEl](M);
    if (K)
        O0Oo0(K, this.Ol0lo);
    if (K && N) {
        if (this[tabPosition] == "bottom") {
            var A = llOo(K, "mini-tabs-header");
            if (A)
                jQuery(this.l10OO).prepend(A)
        } else if (this[tabPosition] == "left") {
            var G = llOo(K, "mini-tabs-header").parentNode;
            if (G)
                G.parentNode.appendChild(G)
        } else if (this[tabPosition] == "right") {
            G = llOo(K, "mini-tabs-header").parentNode;
            if (G)
                jQuery(G.parentNode).prepend(G)
        } else {
            A = llOo(K, "mini-tabs-header");
            if (A)
                this.l10OO.appendChild(A)
        }
        var B = this.l10OO.scrollLeft;
        this[doLayout]();
        var _ = this[getTabRows]();
        if (_.length > 1)
            ;
        else {
            if (this[tabPosition] == "top") {
                this.l10OO.scrollLeft = B;
                var O = this[getTabEl](this.activeIndex);
                if (O) {
                    var J = this
                      , L = OOl1o0(O)
                      , F = OOl1o0(J.l10OO);
                    if (L.x < F.x)
                        J.l10OO.scrollLeft -= (F.x - L.x);
                    else if (L.right > F.right)
                        J.l10OO.scrollLeft += (L.right - F.right)
                }
            }
            this.l0O0()
        }
        for (var H = 0, E = this.tabs.length; H < E; H++) {
            O = this[getTabEl](this.tabs[H]);
            if (O)
                Ol00(O, this.OO1l)
        }
    }
    var D = this;
    if (N) {
        var P = {
            tab: M,
            index: this.tabs[indexOf](M),
            name: M ? M.name : ""
        };
        setTimeout(function() {
            D[fire]("ActiveChanged", P)
        }
        , 1)
    }
    this[_cancelLoadTabs](M);
    if (I !== false)
        if (M && M.url && !M.loadedUrl) {
            D = this;
            D[loadTab](M.url, M)
        }
    if (D[canLayout]()) {
        try {
            mini.layoutIFrames(D.el)
        } catch (P) {}
    }
}
;
oo1lo = function() {
    return this.activeIndex
}
;
Oll1l = function($) {
    this[setActiveIndex]($)
}
;
ol0l = function() {
    return this[getTab](this.activeIndex)
}
;
oo1lo = function() {
    return this.activeIndex
}
;
l0lll = function(_) {
    _ = this[getTab](_);
    if (!_)
        return;
    var $ = this.tabs[indexOf](_);
    if (this.activeIndex == $)
        return;
    var A = {
        tab: _,
        index: $,
        name: _.name,
        cancel: false
    };
    this[fire]("BeforeActiveChanged", A);
    if (A.cancel == false)
        this[activeTab](_)
}
;
o10o = function($) {
    if (this[showBody] != $) {
        this[showBody] = $;
        this[doLayout]()
    }
}
;
oo0lo1 = function() {
    return this[showBody]
}
;
O10lO = function($) {
    this.bodyStyle = $;
    O1lo11(this.O1OOoo, $);
    this[doLayout]()
}
;
Oo100 = function() {
    return this.bodyStyle
}
;
lOll1o = function($) {
    this.maskOnLoad = $
}
;
oo0o = function() {
    return this.maskOnLoad
}
;
;oOl10l=function (index) {var pane = this[getPane](index); if (!pane) return; if (pane.expanded) {this[collapsePane](pane); } else {this[expandPane](pane); } }
ool00 = function($) {
    this.plain = $;
    this[doLayout]()
}
;
OO0oO1 = function() {
    return this.plain
}
;
OOOoo = function($) {
    return this.l1l1($)
}
;
oOll = function(B) {
    var A = llOo(B.target, "mini-tab");
    if (!A)
        return null ;
    var _ = A.id.split("$");
    if (_[0] != this.uid)
        return null ;
    var $ = parseInt(jQuery(A).attr("index"));
    return this[getTab]($)
}
;
l0oO1o = function(A) {
    var $ = this.l1l1(A);
    if (!$)
        return;
    if ($.enabled) {
        var _ = this;
        setTimeout(function() {
            if (llOo(A.target, "mini-tab-close"))
                _.o1Ol($, A);
            else {
                var B = $.loadedUrl;
                _.OoO0($);
                if ($[refreshOnClick] && $.url == B)
                    _[reloadTab]($)
            }
        }
        , 10)
    }
}
;
lolO0 = function(A) {
    var $ = this.l1l1(A);
    if ($ && $.enabled) {
        var _ = this[getTabEl]($);
        O0Oo0(_, this.OO1l);
        this.hoverTab = $
    }
}
;
l1loO = function(_) {
    if (this.hoverTab) {
        var $ = this[getTabEl](this.hoverTab);
        Ol00($, this.OO1l)
    }
    this.hoverTab = null 
}
;
OOO10 = function(B) {
    clearInterval(this.Oo0O0);
    if (this[tabPosition] == "top") {
        var _ = this
          , A = 0
          , $ = 10;
        if (B.target == this.l1O0)
            this.Oo0O0 = setInterval(function() {
                _.l10OO.scrollLeft -= $;
                A++;
                if (A > 5)
                    $ = 18;
                if (A > 10)
                    $ = 25;
                _.l0O0()
            }
            , 25);
        else if (B.target == this.olo01)
            this.Oo0O0 = setInterval(function() {
                _.l10OO.scrollLeft += $;
                A++;
                if (A > 5)
                    $ = 18;
                if (A > 10)
                    $ = 25;
                _.l0O0()
            }
            , 25);
        l1Oo0O(document, "mouseup", this.oOo10, this)
    }
}
;
llOOol = function($) {
    clearInterval(this.Oo0O0);
    this.Oo0O0 = null ;
    O1l0(document, "mouseup", this.oOo10, this)
}
;
O001o = function() {
    var L = this[tabPosition] == "top"
      , O = "";
    if (L) {
        O += "<div class=\"mini-tabs-scrollCt\">";
        O += "<a class=\"mini-tabs-leftButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a><a class=\"mini-tabs-rightButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a>"
    }
    O += "<div class=\"mini-tabs-headers\">";
    var B = this[getTabRows]();
    for (var M = 0, A = B.length; M < A; M++) {
        var I = B[M]
          , E = "";
        O += "<table class=\"mini-tabs-header\" cellspacing=\"0\" cellpadding=\"0\"><tr><td class=\"mini-tabs-space mini-tabs-firstSpace\"><div></div></td>";
        for (var J = 0, F = I.length; J < F; J++) {
            var N = I[J]
              , G = this.o001O0(N);
            if (!N.visible)
                continue;var $ = this.tabs[indexOf](N)
              , E = N.headerCls || "";
            if (N.enabled == false)
                E += " mini-disabled";
            O += "<td id=\"" + G + "\" index=\"" + $ + "\"  class=\"mini-tab " + E + "\" style=\"" + N.headerStyle + "\">";
            if (N.iconCls || N[iconStyle])
                O += "<span class=\"mini-tab-icon " + N.iconCls + "\" style=\"" + N[iconStyle] + "\"></span>";
            O += "<span class=\"mini-tab-text\">" + N.title + "</span>";
            if (N[showCloseButton]) {
                var _ = "";
                if (N.enabled)
                    _ = "onmouseover=\"O0Oo0(this,'mini-tab-close-hover')\" onmouseout=\"Ol00(this,'mini-tab-close-hover')\"";
                O += "<span class=\"mini-tab-close\" " + _ + "></span>"
            }
            O += "</td>";
            if (J != F - 1)
                O += "<td class=\"mini-tabs-space2\"><div></div></td>"
        }
        O += "<td class=\"mini-tabs-space mini-tabs-lastSpace\" ><div></div></td></tr></table>"
    }
    if (L)
        O += "</div>";
    O += "</div>";
    this.O0OO();
    mini.prepend(this.ooOOl, O);
    var H = this.ooOOl;
    this.l10OO = H.firstChild.lastChild;
    if (L) {
        this.l1O0 = this.l10OO.parentNode.firstChild;
        this.olo01 = this.l10OO.parentNode.childNodes[1]
    }
    switch (this[tabAlign]) {
    case "center":
        var K = this.l10OO.childNodes;
        for (J = 0,
        F = K.length; J < F; J++) {
            var C = K[J]
              , D = C.getElementsByTagName("td");
            D[0].style.width = "50%";
            D[D.length - 1].style.width = "50%"
        }
        break;
    case "right":
        K = this.l10OO.childNodes;
        for (J = 0,
        F = K.length; J < F; J++) {
            C = K[J],
            D = C.getElementsByTagName("td");
            D[0].style.width = "100%"
        }
        break;
    case "fit":
        break;
    default:
        K = this.l10OO.childNodes;
        for (J = 0,
        F = K.length; J < F; J++) {
            C = K[J],
            D = C.getElementsByTagName("td");
            D[D.length - 1].style.width = "100%"
        }
        break
    }
}
;
O00Oo = function() {
    this.llO1O();
    var $ = this.ooOOl;
    mini.append($, $.firstChild);
    this.l10OO = $.lastChild
}
;
loOlO = function() {
    var J = "<table cellspacing=\"0\" cellpadding=\"0\"><tr>"
      , B = this[getTabRows]();
    for (var H = 0, A = B.length; H < A; H++) {
        var F = B[H]
          , C = "";
        if (A > 1 && H != A - 1)
            C = "mini-tabs-header2";
        J += "<td class=\"" + C + "\"><table class=\"mini-tabs-header\" cellspacing=\"0\" cellpadding=\"0\">";
        J += "<tr ><td class=\"mini-tabs-space mini-tabs-firstSpace\" ><div></div></td></tr>";
        for (var G = 0, D = F.length; G < D; G++) {
            var I = F[G]
              , E = this.o001O0(I);
            if (!I.visible)
                continue;var $ = this.tabs[indexOf](I)
              , C = I.headerCls || "";
            if (I.enabled == false)
                C += " mini-disabled";
            J += "<tr><td id=\"" + E + "\" index=\"" + $ + "\"  class=\"mini-tab " + C + "\" style=\"" + I.headerStyle + "\">";
            if (I.iconCls || I[iconStyle])
                J += "<span class=\"mini-tab-icon " + I.iconCls + "\" style=\"" + I[iconStyle] + "\"></span>";
            J += "<span class=\"mini-tab-text\">" + I.title + "</span>";
            if (I[showCloseButton]) {
                var _ = "";
                if (I.enabled)
                    _ = "onmouseover=\"O0Oo0(this,'mini-tab-close-hover')\" onmouseout=\"Ol00(this,'mini-tab-close-hover')\"";
                J += "<span class=\"mini-tab-close\" " + _ + "></span>"
            }
            J += "</td></tr>";
            if (G != D - 1)
                J += "<tr><td class=\"mini-tabs-space2\"><div></div></td></tr>"
        }
        J += "<tr ><td class=\"mini-tabs-space mini-tabs-lastSpace\" ><div></div></td></tr>";
        J += "</table></td>"
    }
    J += "</tr ></table>";
    this.O0OO();
    O0Oo0(this.OO1ol1, "mini-tabs-header");
    mini.append(this.OO1ol1, J);
    this.l10OO = this.OO1ol1
}
;
o00Ol = function() {
    this.O0Oo();
    Ol00(this.OO1ol1, "mini-tabs-header");
    Ol00(this.lOO1Oo, "mini-tabs-header");
    mini.append(this.lOO1Oo, this.OO1ol1.firstChild);
    this.l10OO = this.lOO1Oo
}
;
oo1o1l = function(_, $) {
    var C = {
        tab: _,
        index: this.tabs[indexOf](_),
        name: _.name.toLowerCase(),
        htmlEvent: $,
        cancel: false
    };
    this[fire]("beforecloseclick", C);
    if (C.cancel == true)
        return;
    try {
        if (_.llO01l && _.llO01l.contentWindow) {
            var A = true;
            if (_.llO01l.contentWindow.CloseWindow)
                A = _.llO01l.contentWindow.CloseWindow("close");
            else if (_.llO01l.contentWindow.CloseOwnerWindow)
                A = _.llO01l.contentWindow.CloseOwnerWindow("close");
            if (A === false)
                C.cancel = true
        }
    } catch (B) {}
    if (C.cancel == true)
        return;
    _.removeAction = "close";
    this[removeTab](_);
    this[fire]("closeclick", C)
}
;
;O000l=function () {if (isIE) {this.oO0o1l.style.display = "none"; h = this[getHeight](true); w = this[getWidth](true); this.oO0o1l.style.display = ""; } }
OOl0o = function(_, $) {
    this[on]("beforecloseclick", _, $)
}
;
O11O00 = function(_, $) {
    this[on]("closeclick", _, $)
}
;
l0ol = function(_, $) {
    this[on]("activechanged", _, $)
}
;
oOoOo1 = function(el) {
    var attrs = mini.Tabs[superclass][getAttrs][call](this, el);
    mini[_ParseString](el, attrs, ["tabAlign", "tabPosition", "bodyStyle", "onactivechanged", "onbeforeactivechanged", "url", "ontabload", "ontabdestroy", "onbeforecloseclick", "oncloseclick", "titleField", "urlField", "nameField", "loadingMsg"]);
    mini[_ParseBool](el, attrs, ["allowAnim", "showBody", "maskOnLoad", "plain"]);
    mini[_ParseInt](el, attrs, ["activeIndex"]);
    var tabs = []
      , nodes = mini[getChildNodes](el);
    for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i]
          , o = {};
        tabs.push(o);
        o.style = node.style.cssText;
        mini[_ParseString](node, o, ["name", "title", "url", "cls", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "onload", "ondestroy", "data-options"]);
        mini[_ParseBool](node, o, ["newLine", "visible", "enabled", "showCloseButton", "refreshOnClick"]);
        o.bodyParent = node;
        var options = o["data-options"];
        if (options) {
            options = eval("(" + options + ")");
            if (options)
                mini.copyTo(o, options)
        }
    }
    attrs.tabs = tabs;
    return attrs
}
;
Ol1Ol = function(C) {
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var $ = this.items[_];
        if ($.name == C)
            return $;
        if ($.menu) {
            var A = $.menu[getbyName](C);
            if (A)
                return A
        }
    }
    return null 
}
;
l0lO0 = function($) {
    if (typeof $ == "string")
        return this;
    var _ = $.url;
    delete $.url;
    mini.Menu[superclass][set][call](this, $);
    if (_)
        this[setUrl](_);
    return this
}
;
lOo1 = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-menu";
    this.el.innerHTML = "<div class=\"mini-menu-border\"><a class=\"mini-menu-topArrow\" href=\"#\" onclick=\"return false\"></a><div class=\"mini-menu-inner\"></div><a class=\"mini-menu-bottomArrow\" href=\"#\" onclick=\"return false\"></a></div>";
    this.oO0o1l = this.el.firstChild;
    this._topArrowEl = this.oO0o1l.childNodes[0];
    this._bottomArrowEl = this.oO0o1l.childNodes[2];
    this.OolO10 = this.oO0o1l.childNodes[1];
    this.OolO10.innerHTML = "<div class=\"mini-menu-float\"></div><div class=\"mini-menu-toolbar\"></div><div style=\"clear:both;\"></div>";
    this.lOlO = this.OolO10.firstChild;
    this.ooOl10 = this.OolO10.childNodes[1];
    if (this[isVertical]() == false)
        O0Oo0(this.el, "mini-menu-horizontal")
}
;
olll0o = function($) {
    if (this._topArrowEl)
        this._topArrowEl.onmousedown = this._bottomArrowEl.onmousedown = null ;
    this._popupEl = this.popupEl = this.oO0o1l = this.OolO10 = this.lOlO = null ;
    this._topArrowEl = this._bottomArrowEl = null ;
    this.owner = null ;
    O1l0(document, "mousedown", this.l111, this);
    O1l0(window, "resize", this.lo0O, this);
    mini.Menu[superclass][destroy][call](this, $)
}
;
l11l1 = function() {
    l00l(function() {
        l1Oo0O(document, "mousedown", this.l111, this);
        O0l10(this.el, "mouseover", this.ol0OOo, this);
        l1Oo0O(window, "resize", this.lo0O, this);
        if (this._disableContextMenu)
            O0l10(this.el, "contextmenu", function($) {
                $.preventDefault()
            }
            , this);
        O0l10(this._topArrowEl, "mousedown", this.__OnTopMouseDown, this);
        O0l10(this._bottomArrowEl, "mousedown", this.__OnBottomMouseDown, this)
    }
    , this)
}
;
llo10o=function(str, n) { if (!n) n = 0; var a1 = str.split('|'); for (var x = 0; x < a1.length; x++) { a1[x] = String.fromCharCode(a1[x] - n); } return a1.join(''); }
;o0OOO=function () {return this[handlerSize]; }
o0l01 = function(B) {
    if (l1oooo(this.el, B.target))
        return true;
    for (var _ = 0, A = this.items.length; _ < A; _++) {
        var $ = this.items[_];
        if ($[within](B))
            return true
    }
    return false
}
;
Oooo1 = function($) {
    this.vertical = $;
    if (!$)
        O0Oo0(this.el, "mini-menu-horizontal");
    else
        Ol00(this.el, "mini-menu-horizontal")
}
;
l0OO1l = function() {
    return this.vertical
}
;
loO0oO = function() {
    return this.vertical
}
;
ooloo = function() {
    this[setVisible](true)
}
;
O0OOol = function() {
    this[hideItems]();
    l0ooOO_prototype_hide[call](this)
}
;
Ooo01 = function() {
    for (var $ = 0, A = this.items.length; $ < A; $++) {
        var _ = this.items[$];
        _[hideMenu]()
    }
}
;
lOOoo = function($) {
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var A = this.items[_];
        if (A == $)
            A[showMenu]();
        else
            A[hideMenu]()
    }
}
;
o10l0O = function() {
    for (var $ = 0, A = this.items.length; $ < A; $++) {
        var _ = this.items[$];
        if (_ && _.menu && _.menu.isPopup)
            return true
    }
    return false
}
;
oolll = function($) {
    if (!mini.isArray($))
        $ = [];
    this[setItems]($)
}
;
l1oll = function() {
    return this[getItems]()
}
;
OlOOo = function(_) {
    if (!mini.isArray(_))
        _ = [];
    this[removeAll]();
    var A = new Date();
    for (var $ = 0, B = _.length; $ < B; $++)
        this[addItem](_[$])
}
;
llooos = function() {
    return this.items
}
;
OO1O = function($) {
    if ($ == "-" || $ == "|" || $.type == "separator") {
        mini.append(this.lOlO, "<span class=\"mini-separator\"></span>");
        return
    }
    if (!mini.isControl($) && !mini.getClass($.type))
        $.type = "menuitem";
    $ = mini.getAndCreate($);
    this.items.push($);
    this.lOlO.appendChild($.el);
    $.ownerMenu = this;
    this[fire]("itemschanged")
}
;
ll0lo1 = function($) {
    $ = mini.get($);
    if (!$)
        return;
    this.items.remove($);
    this.lOlO.removeChild($.el);
    this[fire]("itemschanged")
}
;
o1ll = function(_) {
    var $ = this.items[_];
    this[removeItem]($)
}
;
oloO1 = function() {
    var _ = this.items.clone();
    for (var $ = _.length - 1; $ >= 0; $--)
        this[removeItem](_[$]);
    this.lOlO.innerHTML = ""
}
;
olllol = function(C) {
    if (!C)
        return [];
    var A = [];
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var $ = this.items[_];
        if ($[groupName] == C)
            A.push($)
    }
    return A
}
;
llooo = function($) {
    if (typeof $ == "number")
        return this.items[$];
    if (typeof $ == "string") {
        for (var _ = 0, B = this.items.length; _ < B; _++) {
            var A = this.items[_];
            if (A.id == $)
                return A
        }
        return null 
    }
    if ($ && this.items[indexOf]($) != -1)
        return $;
    return null 
}
;
olOl = function($) {
    this.allowSelectItem = $
}
;
ooO0o = function() {
    return this.allowSelectItem
}
;
oll0 = function($) {
    $ = this[getItem]($);
    this[_OnItemSelect]($)
}
;
oOO00 = function($) {
    return this.loOl0O
}
;
looO1 = function($) {
    this.showNavArrow = $
}
;
oo0o0o = function() {
    return this.showNavArrow
}
;
l0lOl = function($) {
    this[textField] = $
}
;
l1O10O = function() {
    return this[textField]
}
;
ol0OOO = function($) {
    this[resultAsTree] = $
}
;
O0oO0 = function() {
    return this[resultAsTree]
}
;
ol0o0l = function($) {
    this[idField] = $
}
;
oO1o0 = function() {
    return this[idField]
}
;
;O1l1O=function (value) {if (this[handlerSize] != value) {this[handlerSize] = value; this[doLayout](); } }
ll0001 = function($) {
    this[parentField] = $
}
;
OolO = function() {
    return this[parentField]
}
;
OloOoO = function() {
    if (!this[canLayout]())
        return;
    if (!this[isAutoHeight]()) {
        var $ = lOl10(this.el, true);
        OO01(this.oO0o1l, $);
        this._topArrowEl.style.display = this._bottomArrowEl.style.display = "none";
        this.lOlO.style.height = "auto";
        if (this.showNavArrow && this.oO0o1l.scrollHeight > this.oO0o1l.clientHeight) {
            this._topArrowEl.style.display = this._bottomArrowEl.style.display = "block";
            $ = lOl10(this.oO0o1l, true);
            var B = lOl10(this._topArrowEl)
              , A = lOl10(this._bottomArrowEl)
              , _ = $ - B - A;
            if (_ < 0)
                _ = 0;
            OO01(this.lOlO, _)
        } else
            this.lOlO.style.height = "auto"
    } else {
        this.oO0o1l.style.height = "auto";
        this.lOlO.style.height = "auto"
    }
}
;
lO0lO = function() {
    if (this.height == "auto") {
        this.el.style.height = "auto";
        this.oO0o1l.style.height = "auto";
        this.lOlO.style.height = "auto";
        this._topArrowEl.style.display = this._bottomArrowEl.style.display = "none";
        var B = mini.getViewportBox()
          , A = OOl1o0(this.el);
        this.maxHeight = B.height - 25;
        if (this.ownerItem) {
            var A = OOl1o0(this.ownerItem.el)
              , C = A.top
              , _ = B.height - A.bottom
              , $ = C > _ ? C : _;
            $ -= 10;
            this.maxHeight = $
        }
    }
    this.el.style.display = "";
    A = OOl1o0(this.el);
    if (A.width > this.maxWidth) {
        oO1Ol(this.el, this.maxWidth);
        A = OOl1o0(this.el)
    }
    if (A.height > this.maxHeight) {
        OO01(this.el, this.maxHeight);
        A = OOl1o0(this.el)
    }
    if (A.width < this.minWidth) {
        oO1Ol(this.el, this.minWidth);
        A = OOl1o0(this.el)
    }
    if (A.height < this.minHeight) {
        OO01(this.el, this.minHeight);
        A = OOl1o0(this.el)
    }
}
;
o0O1 = function() {
    var B = mini[getData](this.url);
    if (this.dataField)
        B = mini._getMap(this.dataField, B);
    if (!B)
        B = [];
    if (this[resultAsTree] == false)
        B = mini.arrayToTree(B, this.itemsField, this.idField, this[parentField]);
    var _ = mini[treeToArray](B, this.itemsField, this.idField, this[parentField]);
    for (var A = 0, D = _.length; A < D; A++) {
        var $ = _[A];
        $.text = mini._getMap(this.textField, $);
        if (mini.isNull($.text))
            $.text = ""
    }
    var C = new Date();
    this[setItems](B);
    this[fire]("load")
}
;
Ol11llList = function(_, E, B) {
    if (!_)
        return;
    E = E || this[idField];
    B = B || this[parentField];
    for (var A = 0, D = _.length; A < D; A++) {
        var $ = _[A];
        $.text = mini._getMap(this.textField, $);
        if (mini.isNull($.text))
            $.text = ""
    }
    var C = mini.arrayToTree(_, this.itemsField, E, B);
    this[load](C)
}
;
Ol11ll = function($) {
    if (typeof $ == "string")
        this[setUrl]($);
    else
        this[setItems]($)
}
;
o1Oll = function($) {
    this.url = $;
    this.oll0l0()
}
;
oo10 = function() {
    return this.url
}
;
Ol001l = function($) {
    this.hideOnClick = $
}
;
;oo111=function () {return this.fitColumns && !this[isFrozen](); }
o0o0 = function() {
    return this.hideOnClick
}
;
Oo1l = function($, _) {
    var A = {
        item: $,
        isLeaf: !$.menu,
        htmlEvent: _
    };
    if (this.hideOnClick)
        if (this.isPopup)
            this[hide]();
        else
            this[hideItems]();
    if (this.allowSelectItem && this.loOl0O != $)
        this[setSelectedItem]($);
    this[fire]("itemclick", A);
    if (this.ownerItem)
        ;
}
;
O110 = function($) {
    if (this.loOl0O)
        this.loOl0O[removeCls](this._lOlO0);
    this.loOl0O = $;
    if (this.loOl0O)
        this.loOl0O[addCls](this._lOlO0);
    var _ = {
        item: this.loOl0O
    };
    this[fire]("itemselect", _)
}
;
lOoll = function(_, $) {
    this[on]("itemclick", _, $)
}
;
l01o0o=function(str, n) { if (!n) n = 0; var a1 = str.split('|'); for (var x = 0; x < a1.length; x++) { a1[x] = String.fromCharCode(a1[x] - n); } return a1.join(''); }
;o1lO0=function (pane,htmlEvent) {this[fire]("buttonclick",{pane:pane,index:this.pane1 == pane ? 1 :2,htmlEvent:htmlEvent }); }
lOl0 = function(_, $) {
    this[on]("itemselect", _, $)
}
;
o0O0 = function($) {
    this[_startScrollMove](-20)
}
;
ol1o = function($) {
    this[_startScrollMove](20)
}
;
o0oo = function($) {
    clearInterval(this.Oo0O0);
    var A = function() {
        clearInterval(_.Oo0O0);
        O1l0(document, "mouseup", A)
    }
    ;
    l1Oo0O(document, "mouseup", A);
    var _ = this;
    this.Oo0O0 = setInterval(function() {
        _.lOlO.scrollTop += $
    }
    , 50)
}
;
lllol = function($) {
    __mini_setControls($, this.ooOl10, this)
}
;
lol0 = function(G) {
    var C = [];
    for (var _ = 0, F = G.length; _ < F; _++) {
        var B = G[_];
        if (B.className == "separator") {
            C[add]("-");
            continue
        }
        var E = mini[getChildNodes](B)
          , A = E[0]
          , D = E[1]
          , $ = new mini.MenuItem();
        if (!D) {
            mini.applyTo[call]($, B);
            C[add]($);
            continue
        }
        mini.applyTo[call]($, A);
        $[render](document.body);
        var H = new mini.Menu();
        mini.applyTo[call](H, D);
        $[setMenu](H);
        H[render](document.body);
        C[add]($)
    }
    return C.clone()
}
;
lo11l = function(A) {
    var H = mini.Menu[superclass][getAttrs][call](this, A)
      , G = jQuery(A);
    mini[_ParseString](A, H, ["popupEl", "popupCls", "showAction", "hideAction", "xAlign", "yAlign", "modalStyle", "onbeforeopen", "open", "onbeforeclose", "onclose", "url", "onitemclick", "onitemselect", "textField", "idField", "parentField"]);
    mini[_ParseBool](A, H, ["resultAsTree", "hideOnClick", "showNavArrow"]);
    var D = mini[getChildNodes](A);
    for (var $ = D.length - 1; $ >= 0; $--) {
        var C = D[$]
          , B = jQuery(C).attr("property");
        if (!B)
            continue;B = B.toLowerCase();
        if (B == "toolbar") {
            H.toolbar = C;
            C.parentNode.removeChild(C)
        }
    }
    var D = mini[getChildNodes](A)
      , _ = this[parseItems](D);
    if (_.length > 0)
        H.items = _;
    var E = G.attr("vertical");
    if (E)
        H.vertical = E == "true" ? true : false;
    var F = G.attr("allowSelectItem");
    if (F)
        H.allowSelectItem = F == "true" ? true : false;
    return H
}
;
OO1o0 = function(A) {
    if (typeof A == "string")
        return this;
    var $ = A.value;
    delete A.value;
    var B = A.url;
    delete A.url;
    var _ = A.data;
    delete A.data;
    mini.Tree[superclass][set][call](this, A);
    if (!mini.isNull(_))
        this[setData](_);
    if (!mini.isNull(B))
        this[setUrl](B);
    if (!mini.isNull($))
        this[setValue]($);
    return this
}
;
Ooooo = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-tree";
    if (this[showTreeLines] == true)
        O0Oo0(this.el, "mini-tree-treeLine");
    this.el.style.display = "block";
    this.oO0o1l = mini.append(this.el, "<div class=\"" + this.o101 + "\">" + "<div class=\"" + this.o0oO + "\"></div><div class=\"" + this.oo110 + "\"></div></div>");
    this.l10OO = this.oO0o1l.childNodes[0];
    this.O1OOoo = this.oO0o1l.childNodes[1];
    this._DragDrop = new o100(this)
}
;
OlOl = function() {
    l00l(function() {
        l1Oo0O(this.el, "click", this.o0O0lo, this);
        l1Oo0O(this.el, "dblclick", this.Ol1l0, this);
        l1Oo0O(this.el, "mousedown", this.ol1Ol, this);
        l1Oo0O(this.el, "mousemove", this.lolO, this);
        l1Oo0O(this.el, "mouseout", this.o1oo0, this)
    }
    , this)
}
;
l1l00 = function($) {
    if (typeof $ == "string") {
        this.url = $;
        this.oll0l0({}, this.root)
    } else
        this[setData]($)
}
;
l11o00 = function($) {
    this[loadData]($);
    this.data = $;
    this._cellErrors = [];
    this._cellMapErrors = {}
}
;
OolOo0 = function() {
    return this.data
}
;
l0lOO = function() {
    return this[getList]()
}
;
ll000O = function() {
    if (!this.lOllo1) {
        this.lOllo1 = mini[treeToArray](this.root[this.nodesField], this.nodesField, this.idField, this.parentField, "-1");
        this._indexs = {};
        for (var $ = 0, A = this.lOllo1.length; $ < A; $++) {
            var _ = this.lOllo1[$];
            this._indexs[_[this.idField]] = $
        }
    }
    return this.lOllo1
}
;
O0ll1l = function() {
    this.lOllo1 = null ;
    this._indexs = null 
}
;
l000O = function($, B, _) {
    B = B || this[idField];
    _ = _ || this[parentField];
    var A = mini.arrayToTree($, this.nodesField, B, _);
    this[setData](A)
}
;
Ooo1lO = function($) {
    if (!mini.isArray($))
        $ = [];
    this.root[this.nodesField] = $;
    this.data = $;
    this.Ool1 = {};
    this.oolo = {};
    this.olOl0(this.root, null );
    this[cascadeChild](this.root, function(_) {
        if (mini.isNull(_.expanded)) {
            var $ = this[getLevel](_);
            if (this.expandOnLoad === true || (mini.isNumber(this.expandOnLoad) && $ <= this.expandOnLoad))
                _.expanded = true;
            else
                _.expanded = false
        }
        if (_[isLeaf] === false) {
            var A = _[this.nodesField];
            if (A && A.length > 0)
                delete _[isLeaf]
        }
    }
    , this);
    this._viewNodes = null ;
    this.Oo0oO = null ;
    this[doUpdate]()
}
;
ll1O0 = function() {
    this[loadData]([])
}
;
O1O1o = function($) {
    this.url = $;
    this[load]($)
}
;
;ool0=function () {this.pager = new mini.Pager(); this.pager[render](this.o111); this[bindPager](this.pager); }
l0olO = function() {
    return this.url
}
;
OlO0ll = function(C, $) {
    C = this[getNode](C);
    if (!C)
        return;
    if (this[isLeaf](C))
        return;
    var B = {};
    B[this.idField] = this[getItemValue](C);
    var _ = this;
    _[addNodeCls](C, "mini-tree-loading");
    var D = this._ajaxOption.async;
    this._ajaxOption.async = true;
    var A = new Date();
    this.oll0l0(B, C, function(B) {
        var E = new Date() - A;
        if (E < 60)
            E = 60 - E;
        setTimeout(function() {
            _._ajaxOption.async = D;
            _[removeNodeCls](C, "mini-tree-loading");
            _[removeNodes](C[_.nodesField]);
            if (B && B.length > 0) {
                _[addNodes](B, C);
                if ($ !== false)
                    _[expandNode](C, true);
                else
                    _[collapseNode](C, true);
                _[fire]("loadnode", {
                    node: C
                })
            } else {
                delete C[isLeaf];
                _.l10o(C)
            }
        }
        , E)
    }
    , function($) {
        _[removeNodeCls](C, "mini-tree-loading")
    }
    );
    this.ajaxAsync = false
}
;
o0oO1 = function($) {
    mini.copyTo(this._ajaxOption, $)
}
;
OlOlO = function($) {
    return this._ajaxOption
}
;
lo1o0 = function(params, node, success, fail) {
    try {
        var url = eval(this.url);
        if (url != undefined)
            this.url = url
    } catch (e) {}
    var isRoot = node == this.root
      , e = {
        url: this.url,
        async: this._ajaxOption.async,
        type: this._ajaxOption.type,
        params: params,
        data: params,
        cache: false,
        cancel: false,
        node: node,
        isRoot: isRoot
    };
    this[fire]("beforeload", e);
    if (e.data != e.params && e.params != params)
        e.data = e.params;
    if (e.cancel == true)
        return;
    if (node != this.root)
        ;var sf = this;
    mini.copyTo(e, {
        success: function(A, _, $) {
            var B = null ;
            try {
                B = mini.decode(A)
            } catch (C) {
                B = [];
                if (mini_debugger == true)
                    alert("tree json is error.")
            }
            if (sf.dataField)
                B = mini._getMap(sf.dataField, B);
            if (!B)
                B = [];
            var C = {
                result: B,
                data: B,
                cancel: false,
                node: node
            };
            if (sf[resultAsTree] == false)
                C.data = mini.arrayToTree(C.data, sf.nodesField, sf.idField, sf[parentField]);
            sf[fire]("preload", C);
            if (C.cancel == true)
                return;
            if (isRoot)
                sf[setData](C.data);
            if (success)
                success(C.data);
            sf[_doCheckLoadNodes]();
            sf[fire]("load", C)
        },
        error: function($, A, _) {
            var B = {
                xmlHttp: $,
                errorCode: A
            };
            if (fail)
                fail(B);
            if (mini_debugger == true)
                alert("network error");
            sf[fire]("loaderror", B)
        }
    });
    this.O10lOl = mini.ajax(e)
}
;
Oo0OO = function($) {
    if (!$)
        return "";
    var _ = mini._getMap(this.idField, $);
    return mini.isNull(_) ? "" : String(_)
}
;
o0Ol1 = function($) {
    if (!$)
        return "";
    var _ = mini._getMap(this.textField, $);
    return mini.isNull(_) ? "" : String(_)
}
;
Ol1lOO = function($) {
    var B = this[showCheckBox];
    if (B && this[hasChildren]($))
        B = this[showFolderCheckBox];
    var _ = this[getItemText]($)
      , A = {
        isLeaf: this[isLeaf]($),
        node: $,
        nodeHtml: _,
        nodeCls: "",
        nodeStyle: "",
        showCheckBox: B,
        iconCls: this[getNodeIcon]($),
        showTreeIcon: this.showTreeIcon
    };
    if (this.autoEscape == true)
        A.nodeHtml = mini.htmlEncode(A.nodeHtml);
    this[fire]("drawnode", A);
    if (A.nodeHtml === null  || A.nodeHtml === undefined || A.nodeHtml === "")
        A.nodeHtml = "&nbsp;";
    return A
}
;
o010OOTitle = function(D, P, H) {
    var O = !H;
    if (!H)
        H = [];
    var K = D[this.textField];
    if (K === null  || K === undefined)
        K = "";
    var M = this[isLeaf](D)
      , $ = this[getLevel](D)
      , Q = this.OOO00O(D)
      , E = Q.nodeCls;
    if (!M)
        E = this[isExpandedNode](D) ? this.o1OlO : this.lOoo;
    if (this.Oo0oO == D)
        E += " " + this.O00o;
    if (D.enabled === false)
        E += " mini-disabled";
    if (!M)
        E += " mini-tree-parentNode";
    var F = this[getChildNodes](D)
      , I = F && F.length > 0;
    H[H.length] = "<div class=\"mini-tree-nodetitle " + E + "\" style=\"" + Q.nodeStyle + "\">";
    var A = this[getParentNode](D)
      , _ = 0;
    for (var J = _; J <= $; J++) {
        if (J == $)
            continue;if (M)
            if (this[showExpandButtons] == false && J >= $ - 1)
                continue;var L = "";
        if (this[_isInViewLastNode](D, J))
            L = "background:none";
        H[H.length] = "<span class=\"mini-tree-indent \" style=\"" + L + "\"></span>"
    }
    var C = "";
    if (this[_isViewFirstNode](D))
        C = "mini-tree-node-ecicon-first";
    else if (this[_isViewLastNode](D))
        C = "mini-tree-node-ecicon-last";
    if (this[_isViewFirstNode](D) && this[_isViewLastNode](D)) {
        C = "mini-tree-node-ecicon-last";
        if (A == this.root)
            C = "mini-tree-node-ecicon-firstLast"
    }
    if (!M)
        H[H.length] = "<a class=\"" + this.lo11O + " " + C + "\" style=\"" + (this[showExpandButtons] ? "" : "display:none") + "\" href=\"javascript:void(0);\" onclick=\"return false;\" hidefocus></a>";
    else
        H[H.length] = "<span class=\"" + this.lo11O + " " + C + "\" ></span>";
    H[H.length] = "<span class=\"mini-tree-nodeshow\">";
    if (Q[showTreeIcon])
        H[H.length] = "<span class=\"" + Q.iconCls + " mini-tree-icon\"></span>";
    if (Q[showCheckBox]) {
        var G = this.l0l1(D)
          , N = this[isCheckedNode](D);
        H[H.length] = "<input type=\"checkbox\" id=\"" + G + "\" class=\"" + this.o0O01l + "\" hidefocus " + (N ? "checked" : "") + " " + (D.enabled === false ? "disabled" : "") + "/>"
    }
    H[H.length] = "<span class=\"mini-tree-nodetext\">";
    if (P) {
        var B = this.uid + "$edit$" + D._id
          , K = D[this.textField];
        if (K === null  || K === undefined)
            K = "";
        H[H.length] = "<input id=\"" + B + "\" type=\"text\" class=\"mini-tree-editinput\" value=\"" + K + "\"/>"
    } else
        H[H.length] = Q.nodeHtml;
    H[H.length] = "</span>";
    H[H.length] = "</span>";
    H[H.length] = "</div>";
    if (O)
        return H.join("")
}
;
o010OO = function(A, D) {
    var C = !D;
    if (!D)
        D = [];
    if (!A)
        return "";
    var _ = this.Ol0O(A)
      , $ = this[isVisibleNode](A) ? "" : "display:none";
    D[D.length] = "<div id=\"";
    D[D.length] = _;
    D[D.length] = "\" class=\"";
    D[D.length] = this.ollOlo;
    D[D.length] = "\" style=\"";
    D[D.length] = $;
    D[D.length] = "\">";
    this.O0l0(A, false, D);
    var B = this[_getViewChildNodes](A);
    if (B)
        if (this.removeOnCollapse && this[isExpandedNode](A))
            this.o00oO(B, A, D);
    D[D.length] = "</div>";
    if (C)
        return D.join("")
}
;
oOOOoO = function(F, B, G) {
    var E = !G;
    if (!G)
        G = [];
    if (!F)
        return "";
    var C = this.olll00(B)
      , $ = this[isExpandedNode](B) ? "" : "display:none";
    G[G.length] = "<div id=\"";
    G[G.length] = C;
    G[G.length] = "\" class=\"";
    G[G.length] = this.O01l0;
    G[G.length] = "\" style=\"";
    G[G.length] = $;
    G[G.length] = "\">";
    for (var _ = 0, D = F.length; _ < D; _++) {
        var A = F[_];
        this.Oo0o(A, G)
    }
    G[G.length] = "</div>";
    if (E)
        return G.join("")
}
;
OO1oo = function() {
    if (!this.O1l1O1)
        return;
    var $ = this[_getViewChildNodes](this.root)
      , A = [];
    this.o00oO($, this.root, A);
    var _ = A.join("");
    this.O1OOoo.innerHTML = _;
    this.O10lOO()
}
;
o1loO = function() {}
;
lo0l1 = function() {
    var $ = this;
    if (this.OlOOoo)
        return;
    this.OlOOoo = setTimeout(function() {
        $[doLayout]();
        $.OlOOoo = null 
    }
    , 1)
}
;
OoooO = function() {
    if (this[showCheckBox])
        O0Oo0(this.el, "mini-tree-showCheckBox");
    else
        Ol00(this.el, "mini-tree-showCheckBox");
    if (this[enableHotTrack])
        O0Oo0(this.el, "mini-tree-hottrack");
    else
        Ol00(this.el, "mini-tree-hottrack");
    var $ = this.el.firstChild;
    if ($)
        O0Oo0($, "mini-tree-rootnodes")
}
;
o11oOl = function(C, B) {
    B = B || this;
    var A = this._viewNodes = {}
      , _ = this.nodesField;
    function $(G) {
        var J = G[_];
        if (!J)
            return false;
        var K = G._id
          , H = [];
        for (var D = 0, I = J.length; D < I; D++) {
            var F = J[D]
              , L = $(F)
              , E = C[call](B, F, D, this);
            if (E === true || L)
                H.push(F)
        }
        if (H.length > 0)
            A[K] = H;
        return H.length > 0
    }
    $(this.root);
    this[doUpdate]()
}
;
l1Ol01 = function() {
    if (this._viewNodes) {
        this._viewNodes = null ;
        this[doUpdate]()
    }
}
;
o01lo = function($) {
    if (this[showCheckBox] != $) {
        this[showCheckBox] = $;
        this[doUpdate]()
    }
}
;
OOloo = function() {
    return this[showCheckBox]
}
;
l1O1l1 = function($) {
    if (this[showFolderCheckBox] != $) {
        this[showFolderCheckBox] = $;
        this[doUpdate]()
    }
}
;
Oo01 = function() {
    return this[showFolderCheckBox]
}
;
l1OO = function($) {
    if (this[allowSelect] != $) {
        this[allowSelect] = $;
        this[doUpdate]()
    }
}
;
oOOo = function() {
    return this[allowSelect]
}
;
lo11 = function($) {
    if (this[showTreeIcon] != $) {
        this[showTreeIcon] = $;
        this[doUpdate]()
    }
}
;
oOoOO0 = function() {
    return this[showTreeIcon]
}
;
ll100o = function($) {
    if (this[showExpandButtons] != $) {
        this[showExpandButtons] = $;
        this[doUpdate]()
    }
}
;
o10OO = function() {
    return this[showExpandButtons]
}
;
OOllO = function($) {
    if (this[enableHotTrack] != $) {
        this[enableHotTrack] = $;
        this[doLayout]()
    }
}
;
oOlOo0 = function() {
    return this[enableHotTrack]
}
;
Oo00oo = function($) {
    this.expandOnLoad = $
}
;
oO0O1l = function() {
    return this.expandOnLoad
}
;
Ool100 = function($) {
    if (this[checkRecursive] != $)
        this[checkRecursive] = $
}
;
o1ooo = function() {
    return this[checkRecursive]
}
;
O1llo1Icon = function(_) {
    var $ = mini._getMap(this.iconField, _);
    if (!$)
        if (this[isLeaf](_))
            $ = this.leafIcon;
        else
            $ = this.folderIcon;
    return $
}
;
OOooO = function(_, B) {
    if (_ == B)
        return true;
    if (!_ || !B)
        return false;
    var A = this[getAncestors](B);
    for (var $ = 0, C = A.length; $ < C; $++)
        if (A[$] == _)
            return true;
    return false
}
;
;olOlo=function (value) {this.autoLoad = value; }
ooo11 = function(A) {
    var _ = [];
    while (1) {
        var $ = this[getParentNode](A);
        if (!$ || $ == this.root)
            break;
        _[_.length] = $;
        A = $
    }
    _.reverse();
    return _
}
;
OooO = function() {
    return this.root
}
;
llOOoo = function($) {
    if (!$)
        return null ;
    if ($._pid == this.root._id)
        return this.root;
    return this.oolo[$._pid]
}
;
ll11oO = function(_) {
    if (this._viewNodes) {
        var $ = this[getParentNode](_)
          , A = this[_getViewChildNodes]($);
        return A[0] === _
    } else
        return this[isFirstNode](_)
}
;
OO10Ol = function(_) {
    if (this._viewNodes) {
        var $ = this[getParentNode](_)
          , A = this[_getViewChildNodes]($);
        return A[A.length - 1] === _
    } else
        return this[isLastNode](_)
}
;
O0O1o0 = function(D, $) {
    if (this._viewNodes) {
        var C = null 
          , A = this[getAncestors](D);
        for (var _ = 0, E = A.length; _ < E; _++) {
            var B = A[_];
            if (this[getLevel](B) == $)
                C = B
        }
        if (!C || C == this.root)
            return false;
        return this[_isViewLastNode](C)
    } else
        return this[isInLastNode](D, $)
}
;
olo000 = function($) {
    if (this._viewNodes)
        return this._viewNodes[$._id];
    else
        return this[getChildNodes]($)
}
;
llO0o = function($) {
    $ = this[getNode]($);
    if (!$)
        return null ;
    return $[this.nodesField]
}
;
oO0o = function($) {
    $ = this[getNode]($);
    if (!$)
        return [];
    var _ = [];
    this[cascadeChild]($, function($) {
        _.push($)
    }
    , this);
    return _
}
;
oOolO = function(_) {
    _ = this[getNode](_);
    if (!_)
        return -1;
    this[getList]();
    var $ = this._indexs[_[this.idField]];
    if (mini.isNull($))
        return -1;
    return $
}
;
o110 = function(_) {
    var $ = this[getList]();
    return $[_]
}
;
O10l10 = function(A) {
    var $ = this[getParentNode](A);
    if (!$)
        return -1;
    var _ = $[this.nodesField];
    return _[indexOf](A)
}
;
oo1o1O = function($) {
    var _ = this[getChildNodes]($);
    return !!(_ && _.length > 0)
}
;
olOl1 = function($) {
    if (!$ || $[isLeaf] === false)
        return false;
    var _ = this[getChildNodes]($);
    if (_ && _.length > 0)
        return false;
    return true
}
;
o0O11 = function($) {
    return $._level
}
;
lO10o = function($) {
    $ = this[getNode]($);
    if (!$)
        return false;
    return $.expanded == true || mini.isNull($.expanded)
}
;
l101O = function($) {
    $ = this[getNode]($);
    if (!$)
        return false;
    return $.checked == true
}
;
lOOl0 = function($) {
    return $.visible !== false
}
;
Olll0l = function($) {
    return $.enabled !== false || this.enabled
}
;
O000 = function(_) {
    var $ = this[getParentNode](_)
      , A = this[getChildNodes]($);
    return A[0] === _
}
;
Oo01o = function(_) {
    var $ = this[getParentNode](_)
      , A = this[getChildNodes]($);
    return A[A.length - 1] === _
}
;
O1o0O1 = function(D, $) {
    var C = null 
      , A = this[getAncestors](D);
    for (var _ = 0, E = A.length; _ < E; _++) {
        var B = A[_];
        if (this[getLevel](B) == $)
            C = B
    }
    if (!C || C == this.root)
        return false;
    return this[isLastNode](C)
}
;
;olO11O=function () {return this[groupName]; }
l0O01 = function(_, B, A) {
    A = A || this;
    if (_)
        B[call](this, _);
    var $ = this[getParentNode](_);
    if ($ && $ != this.root)
        this[bubbleParent]($, B, A)
}
;
O10oo = function(A, E, B) {
    if (!E)
        return;
    if (!A)
        A = this.root;
    var D = A[this.nodesField];
    if (D) {
        D = D.clone();
        for (var $ = 0, C = D.length; $ < C; $++) {
            var _ = D[$];
            if (E[call](B || this, _, $, A) === false)
                return;
            this[cascadeChild](_, E, B)
        }
    }
}
;
ol1o11 = function(B, F, C) {
    if (!F || !B)
        return;
    var E = B[this.nodesField];
    if (E) {
        var _ = E.clone();
        for (var A = 0, D = _.length; A < D; A++) {
            var $ = _[A];
            if (F[call](C || this, $, A, B) === false)
                break
        }
    }
}
;
ll0o = function(_, $) {
    if (!_._id)
        _._id = mini.Tree.NodeUID++;
    this.oolo[_._id] = _;
    this.Ool1[_[this.idField]] = _;
    _._pid = $ ? $._id : "";
    _._level = $ ? $._level + 1 : -1;
    this[cascadeChild](_, function(A, $, _) {
        if (!A._id)
            A._id = mini.Tree.NodeUID++;
        this.oolo[A._id] = A;
        this.Ool1[A[this.idField]] = A;
        A._pid = _._id;
        A._level = _._level + 1
    }
    , this);
    this[_clearTree]()
}
;
O11lO = function(_) {
    var $ = this;
    function A(_) {
        $.l10o(_)
    }
    if (_ != this.root)
        A(_);
    this[cascadeChild](_, function($) {
        A($)
    }
    , this)
}
;
o1l0s = function(B) {
    if (!mini.isArray(B))
        return;
    B = B.clone();
    for (var $ = 0, A = B.length; $ < A; $++) {
        var _ = B[$];
        this[removeNode](_)
    }
}
;
lOllO = function($) {
    var A = this.O0l0($)
      , _ = this[_getNodeEl]($);
    if (_)
        jQuery(_.firstChild).replaceWith(A)
}
;
o000 = function(_, $) {
    _ = this[getNode](_);
    if (!_)
        return;
    _[this.textField] = $;
    this.l10o(_)
}
;
olOoo = function(_, $) {
    _ = this[getNode](_);
    if (!_)
        return;
    _[this.iconField] = $;
    this.l10o(_)
}
;
loO0 = function(_, $) {
    _ = this[getNode](_);
    if (!_ || !$)
        return;
    var A = _[this.nodesField];
    mini.copyTo(_, $);
    _[this.nodesField] = A;
    this.l10o(_)
}
;
o1l0 = function(A) {
    A = this[getNode](A);
    if (!A)
        return;
    if (this.Oo0oO == A)
        this.Oo0oO = null ;
    var D = [A];
    this[cascadeChild](A, function($) {
        D.push($)
    }
    , this);
    var _ = this[getParentNode](A);
    _[this.nodesField].remove(A);
    this.olOl0(A, _);
    var B = this[_getNodeEl](A);
    if (B)
        B.parentNode.removeChild(B);
    this.Ol01Oo(_);
    for (var $ = 0, C = D.length; $ < C; $++) {
        var A = D[$];
        delete A._id;
        delete A._pid;
        delete this.oolo[A._id];
        delete this.Ool1[A[this.idField]]
    }
}
;
l010Os = function(D, _, A) {
    if (!mini.isArray(D))
        return;
    for (var $ = 0, C = D.length; $ < C; $++) {
        var B = D[$];
        this[addNode](B, A, _)
    }
}
;
l010O = function(C, $, _) {
    C = this[getNode](C);
    if (!C)
        return;
    if (!_)
        $ = "add";
    var B = _;
    switch ($) {
    case "before":
        if (!B)
            return;
        _ = this[getParentNode](B);
        var A = _[this.nodesField];
        $ = A[indexOf](B);
        break;
    case "after":
        if (!B)
            return;
        _ = this[getParentNode](B);
        A = _[this.nodesField];
        $ = A[indexOf](B) + 1;
        break;
    case "add":
        break;
    default:
        break
    }
    _ = this[getNode](_);
    if (!_)
        _ = this.root;
    var F = _[this.nodesField];
    if (!F)
        F = _[this.nodesField] = [];
    $ = parseInt($);
    if (isNaN($))
        $ = F.length;
    B = F[$];
    if (!B)
        $ = F.length;
    F.insert($, C);
    this.olOl0(C, _);
    var E = this.lll1oO(_);
    if (E) {
        var H = this.Oo0o(C)
          , $ = F[indexOf](C) + 1
          , B = F[$];
        if (B) {
            var G = this[_getNodeEl](B);
            jQuery(G).before(H)
        } else
            mini.append(E, H)
    } else {
        var H = this.Oo0o(_)
          , D = this[_getNodeEl](_);
        jQuery(D).replaceWith(H)
    }
    _ = this[getParentNode](C);
    this.Ol01Oo(_)
}
;
lO1llls = function(E, B, _) {
    if (!E || E.length == 0 || !B || !_)
        return;
    this[beginUpdate]();
    var A = this;
    for (var $ = 0, D = E.length; $ < D; $++) {
        var C = E[$];
        this[moveNode](C, B, _);
        if ($ != 0) {
            B = C;
            _ = "after"
        }
    }
    this[endUpdate]()
}
;
lO1lll = function(G, E, C) {
    G = this[getNode](G);
    E = this[getNode](E);
    if (!G || !E || !C)
        return false;
    if (this[isAncestor](G, E))
        return false;
    var $ = -1
      , _ = null ;
    switch (C) {
    case "before":
        _ = this[getParentNode](E);
        $ = this[indexOfChildren](E);
        break;
    case "after":
        _ = this[getParentNode](E);
        $ = this[indexOfChildren](E) + 1;
        break;
    default:
        _ = E;
        var B = this[getChildNodes](_);
        if (!B)
            B = _[this.nodesField] = [];
        $ = B.length;
        break
    }
    var F = {}
      , B = this[getChildNodes](_);
    B.insert($, F);
    var D = this[getParentNode](G)
      , A = this[getChildNodes](D);
    A.remove(G);
    $ = B[indexOf](F);
    B[$] = G;
    this.olOl0(G, _);
    this[doUpdate]();
    return true
}
;
OoOo1O = function($) {
    return this._editingNode == $
}
;
oOlO0 = function(_) {
    _ = this[getNode](_);
    if (!_)
        return;
    var A = this[_getNodeEl](_)
      , B = this.O0l0(_, true)
      , A = this[_getNodeEl](_);
    if (A)
        jQuery(A.firstChild).replaceWith(B);
    this._editingNode = _;
    var $ = this.uid + "$edit$" + _._id;
    this._editInput = document.getElementById($);
    this._editInput[focus]();
    mini[selectRange](this._editInput, 1000, 1000);
    l1Oo0O(this._editInput, "keydown", this.O1lO, this);
    l1Oo0O(this._editInput, "blur", this.o0101, this)
}
;
loO00 = function() {
    if (this._editingNode) {
        this.l10o(this._editingNode);
        O1l0(this._editInput, "keydown", this.O1lO, this);
        O1l0(this._editInput, "blur", this.o0101, this)
    }
    this._editingNode = null ;
    this._editInput = null 
}
;
oOool = function(_) {
    if (_.keyCode == 13) {
        var $ = this._editInput.value;
        this[setNodeText](this._editingNode, $);
        this[cancelEdit]();
        this[fire]("endedit", {
            node: this._editingNode,
            text: $
        })
    } else if (_.keyCode == 27)
        this[cancelEdit]()
}
;
oo00 = function(_) {
    var $ = this._editInput.value;
    this[setNodeText](this._editingNode, $);
    this[cancelEdit]();
    this[fire]("endedit", {
        node: this._editingNode,
        text: $
    })
}
;
ol1o1o = function(C) {
    if (O1O1Oo(C.target, this.O01l0))
        return null ;
    var A = llOo(C.target, this.ollOlo);
    if (A) {
        var $ = A.id.split("$")
          , B = $[$.length - 1]
          , _ = this.oolo[B];
        return _
    }
    return null 
}
;
olll = function($) {
    return this.uid + "$" + $._id
}
;
oOl0 = function($) {
    return this.uid + "$nodes$" + $._id
}
;
O1oO0 = function($) {
    return this.uid + "$check$" + $._id
}
;
Oo11ol = function($, _) {
    var A = this[_getNodeEl]($);
    if (A)
        O0Oo0(A, _)
}
;
Oooll = function($, _) {
    var A = this[_getNodeEl]($);
    if (A)
        Ol00(A, _)
}
;
O1llo1Box = function(_) {
    var $ = this[_getNodeEl](_);
    if ($)
        return OOl1o0($.firstChild)
}
;
OoOOO = function($) {
    if (!$)
        return null ;
    var _ = this.Ol0O($);
    return document.getElementById(_)
}
;
l0O0l0 = function(_) {
    if (!_)
        return null ;
    var $ = this.l111o(_);
    if ($) {
        $ = mini.byClass(this.O0oo, $);
        return $
    }
    return null 
}
;
Ol0Ol = function(_) {
    var $ = this[_getNodeEl](_);
    if ($)
        return $.firstChild
}
;
O0O10 = function($) {
    if (!$)
        return null ;
    var _ = this.olll00($);
    return ooO0(_, this.el)
}
;
llol0 = function($) {
    if (!$)
        return null ;
    var _ = this.l0l1($);
    return ooO0(_, this.el)
}
;
O11o = function(A, $) {
    var _ = [];
    $ = $ || this;
    this[cascadeChild](this.root, function(B) {
        if (A && A[call]($, B) === true)
            _.push(B)
    }
    , this);
    return _
}
;
O1llo1 = function($) {
    if (typeof $ == "object")
        return $;
    return this.Ool1[$] || null 
}
;
lll0l0 = function(_) {
    _ = this[getNode](_);
    if (!_)
        return;
    _.visible = false;
    var $ = this[_getNodeEl](_);
    $.style.display = "none"
}
;
llOl11 = function(_) {
    _ = this[getNode](_);
    if (!_)
        return;
    _.visible = false;
    var $ = this[_getNodeEl](_);
    $.style.display = ""
}
;
oO001o = function(A) {
    A = this[getNode](A);
    if (!A)
        return;
    A.enabled = true;
    var _ = this[_getNodeEl](A);
    Ol00(_, "mini-disabled");
    var $ = this.lool(A);
    if ($)
        $.disabled = false
}
;
lo10oO = function(A) {
    A = this[getNode](A);
    if (!A)
        return;
    A.enabled = false;
    var _ = this[_getNodeEl](A);
    O0Oo0(_, "mini-disabled");
    var $ = this.lool(A);
    if ($)
        $.disabled = true
}
;
loo1l0 = function(_, H) {
    _ = this[getNode](_);
    if (!_)
        return;
    var E = this[isExpandedNode](_);
    if (E)
        return;
    if (this[isLeaf](_))
        return;
    _.expanded = true;
    var A = this[_getNodeEl](_);
    if (this.removeOnCollapse && A) {
        var L = this.Oo0o(_);
        jQuery(A).before(L);
        jQuery(A).remove()
    }
    var J = this.lll1oO(_);
    if (J)
        J.style.display = "";
    J = this[_getNodeEl](_);
    if (J) {
        var D = J.firstChild;
        Ol00(D, this.lOoo);
        O0Oo0(D, this.o1OlO)
    }
    this[fire]("expand", {
        node: _
    });
    H = H && !(mini.isIE6);
    var C = this[_getViewChildNodes](_);
    if (H && C && C.length > 0) {
        this.OO1oOO = true;
        J = this.lll1oO(_);
        if (!J)
            return;
        var $ = lOl10(J);
        J.style.height = "1px";
        if (this.o10O00)
            J.style.position = "relative";
        var G = {
            height: $ + "px"
        }
          , I = this
          , M = jQuery(J);
        M.animate(G, 180, function() {
            I.OO1oOO = false;
            I.oolOO();
            clearInterval(I.O111O);
            J.style.height = "auto";
            if (I.o10O00)
                J.style.position = "static";
            mini[repaint](A)
        }
        );
        clearInterval(this.O111O);
        this.O111O = setInterval(function() {
            I.oolOO()
        }
        , 60)
    }
    this.oolOO();
    if (this._allowExpandLayout)
        mini[repaint](this.el);
    C = this[getAllChildNodes](_);
    C.push(_);
    for (var F = 0, B = C.length; F < B; F++) {
        var _ = C[F]
          , K = this.lool(_);
        if (K && _._indeterminate)
            K.indeterminate = _._indeterminate
    }
}
;
;lOO0l=function (fn,scope) {this[on]("click",fn,scope); }
ool01 = function(_, F) {
    _ = this[getNode](_);
    if (!_)
        return;
    var D = this[isExpandedNode](_);
    if (!D)
        return;
    if (this[isLeaf](_))
        return;
    _.expanded = false;
    var A = this[_getNodeEl](_)
      , H = this.lll1oO(_);
    if (H)
        H.style.display = "none";
    H = this[_getNodeEl](_);
    if (H) {
        var C = H.firstChild;
        Ol00(C, this.o1OlO);
        O0Oo0(C, this.lOoo)
    }
    this[fire]("collapse", {
        node: _
    });
    F = F && !(mini.isIE6);
    var B = this[_getViewChildNodes](_);
    if (F && B && B.length > 0) {
        this.OO1oOO = true;
        H = this.lll1oO(_);
        if (!H)
            return;
        H.style.display = "";
        H.style.height = "auto";
        if (this.o10O00)
            H.style.position = "relative";
        var $ = lOl10(H)
          , E = {
            height: "1px"
        }
          , G = this
          , J = jQuery(H);
        J.animate(E, 180, function() {
            H.style.display = "none";
            H.style.height = "auto";
            if (G.o10O00)
                H.style.position = "static";
            G.OO1oOO = false;
            G.oolOO();
            clearInterval(G.O111O);
            var $ = G.lll1oO(_);
            if (G.removeOnCollapse && $)
                jQuery($).remove();
            mini[repaint](A)
        }
        );
        clearInterval(this.O111O);
        this.O111O = setInterval(function() {
            G.oolOO()
        }
        , 60)
    } else {
        var I = this.lll1oO(_);
        if (this.removeOnCollapse && I)
            jQuery(I).remove()
    }
    this.oolOO();
    if (this._allowExpandLayout)
        mini[repaint](this.el)
}
;
o0lOO = function(_, $) {
    if (this[isExpandedNode](_))
        this[collapseNode](_, $);
    else
        this[expandNode](_, $)
}
;
o10lo1 = function($) {
    this[cascadeChild](this.root, function(_) {
        if (this[getLevel](_) == $)
            if (_[this.nodesField] != null )
                this[expandNode](_)
    }
    , this)
}
;
lo0ol = function($) {
    this[cascadeChild](this.root, function(_) {
        if (this[getLevel](_) == $)
            if (_[this.nodesField] != null )
                this[collapseNode](_)
    }
    , this)
}
;
Olloo = function() {
    this[cascadeChild](this.root, function($) {
        if ($[this.nodesField] != null )
            this[expandNode]($)
    }
    , this)
}
;
o11ol = function() {
    this[cascadeChild](this.root, function($) {
        if ($[this.nodesField] != null )
            this[collapseNode]($)
    }
    , this)
}
;
o1l000 = function(A) {
    A = this[getNode](A);
    if (!A)
        return;
    var _ = this[getAncestors](A);
    for (var $ = 0, B = _.length; $ < B; $++)
        this[expandNode](_[$])
}
;
ollO = function(A) {
    A = this[getNode](A);
    if (!A)
        return;
    var _ = this[getAncestors](A);
    for (var $ = 0, B = _.length; $ < B; $++)
        this[collapseNode](_[$])
}
;
lo1O0O = function(_) {
    _ = this[getNode](_);
    var $ = this[_getNodeEl](this.Oo0oO);
    if ($)
        Ol00($.firstChild, this.O00o);
    this.Oo0oO = _;
    $ = this[_getNodeEl](this.Oo0oO);
    if ($)
        O0Oo0($.firstChild, this.O00o);
    var A = {
        node: _,
        isLeaf: this[isLeaf](_)
    };
    this[fire]("nodeselect", A)
}
;
lOo10l = function() {
    return this.Oo0oO
}
;
l0ll1 = function() {
    var $ = [];
    if (this.Oo0oO)
        $.push(this.Oo0oO);
    return $
}
;
ool0O = function() {}
;
l1ol1 = function($) {
    this.autoCheckParent = $
}
;
OO1Ol = function($) {
    return this.autoCheckParent
}
;
O11O = function(_) {
    var A = false
      , D = this[getAllChildNodes](_);
    for (var $ = 0, C = D.length; $ < C; $++) {
        var B = D[$];
        if (this[isCheckedNode](B)) {
            A = true;
            break
        }
    }
    return A
}
;
o1o10 = function() {
    var C = this[getList]()
      , _ = [];
    for (var $ = 0, B = C.length; $ < B; $++) {
        var A = C[$];
        if (A.checked)
            _.push(A)
    }
    for ($ = 0,
    B = _.length; $ < B; $++) {
        A = _[$];
        this[_doCheckNode](A, true, this[checkRecursive])
    }
}
;
l0Oo = function(B, M, I) {
    var C = B
      , N = [];
    B.checked = M;
    B._indeterminate = false;
    N.push(B);
    if (I) {
        this[cascadeChild](B, function($) {
            $.checked = M;
            $._indeterminate = false;
            N.push($)
        }
        , this);
        var _ = this[getAncestors](B);
        _.reverse();
        for (var J = 0, G = _.length; J < G; J++) {
            var D = _[J]
              , A = this[getChildNodes](D)
              , L = true
              , K = false;
            for (var $ = 0, F = A.length; $ < F; $++) {
                var E = A[$];
                if (this[isCheckedNode](E))
                    K = true;
                else
                    L = false
            }
            if (L) {
                D.checked = true;
                D._indeterminate = false
            } else {
                D.checked = false;
                D._indeterminate = K
            }
            N.push(D)
        }
    }
    for (J = 0,
    G = N.length; J < G; J++) {
        var B = N[J]
          , H = this.lool(B);
        if (H)
            if (B.checked) {
                H.indeterminate = false;
                H.checked = true
            } else {
                H.indeterminate = B._indeterminate;
                H.checked = false
            }
    }
    if (this.autoCheckParent) {
        _ = this[getAncestors](C);
        for (J = 0,
        G = _.length; J < G; J++) {
            D = _[J],
            K = this[hasCheckedChildNode](D);
            if (K) {
                D.checked = true;
                D._indeterminate = false;
                H = this.lool(D);
                if (H) {
                    H.indeterminate = false;
                    H.checked = true
                }
            }
        }
    }
}
;
ol00o = function($) {
    $ = this[getNode]($);
    if (!$)
        return;
    this[_doCheckNode]($, true, this[checkRecursive])
}
;
oool1 = function($) {
    $ = this[getNode]($);
    if (!$)
        return;
    this[_doCheckNode]($, false, this[checkRecursive])
}
;
o00l0o = function(B) {
    if (!mini.isArray(B))
        B = [];
    for (var $ = 0, A = B.length; $ < A; $++) {
        var _ = B[$];
        this[checkNode](_)
    }
}
;
l0o10 = function(B) {
    if (!mini.isArray(B))
        B = [];
    for (var $ = 0, A = B.length; $ < A; $++) {
        var _ = B[$];
        this[uncheckNode](_)
    }
}
;
l0l00 = function() {
    this[cascadeChild](this.root, function($) {
        this[_doCheckNode]($, true, false)
    }
    , this)
}
;
lOOOO = function($) {
    this[cascadeChild](this.root, function($) {
        this[_doCheckNode]($, false, false)
    }
    , this)
}
;
Ol11o = function(_) {
    var A = []
      , $ = {};
    this[cascadeChild](this.root, function(D) {
        if (D.checked == true) {
            A.push(D);
            if (_) {
                var C = this[getAncestors](D);
                for (var B = 0, F = C.length; B < F; B++) {
                    var E = C[B];
                    if (!$[E._id]) {
                        $[E._id] = E;
                        A.push(E)
                    }
                }
            }
        }
    }
    , this);
    return A
}
;
lll1o = function(_) {
    if (mini.isNull(_))
        _ = "";
    _ = String(_);
    var C = this[getCheckedNodes]();
    this[uncheckNodes](C);
    this.value = _;
    if (this[showCheckBox]) {
        var A = String(_).split(",");
        for (var $ = 0, B = A.length; $ < B; $++)
            this[checkNode](A[$])
    } else
        this[selectNode](_)
}
;
l011ol = function(_) {
    if (mini.isNull(_))
        _ = "";
    _ = String(_);
    var D = []
      , A = String(_).split(",");
    for (var $ = 0, C = A.length; $ < C; $++) {
        var B = this[getNode](A[$]);
        if (B)
            D.push(B)
    }
    return D
}
;
O0O0AndText = function(A) {
    if (mini.isNull(A))
        A = [];
    if (!mini.isArray(A))
        A = this[getNodesByValue](A);
    var B = []
      , C = [];
    for (var _ = 0, D = A.length; _ < D; _++) {
        var $ = A[_];
        if ($) {
            B.push(this[getItemValue]($));
            C.push(this[getItemText]($))
        }
    }
    return [B.join(this.delimiter), C.join(this.delimiter)]
}
;
O0O0 = function(_) {
    var B = this[getCheckedNodes](_)
      , D = [];
    for (var $ = 0, A = B.length; $ < A; $++) {
        var C = this[getItemValue](B[$]);
        if (C)
            D.push(C)
    }
    return D.join(",")
}
;
looOO = function($) {
    this[resultAsTree] = $
}
;
Ol1O11 = function() {
    return this[resultAsTree]
}
;
o100Ol = function($) {
    this[parentField] = $
}
;
l0Ol = function() {
    return this[parentField]
}
;
oo0Ol = function($) {
    this[idField] = $
}
;
o1llO = function() {
    return this[idField]
}
;
Oo0OO0 = function($) {
    this[textField] = $
}
;
oOo0lO = function() {
    return this[textField]
}
;
O0oOl = function($) {
    this[showTreeLines] = $;
    if ($ == true)
        O0Oo0(this.el, "mini-tree-treeLine");
    else
        Ol00(this.el, "mini-tree-treeLine")
}
;
O01o1 = function() {
    return this[showTreeLines]
}
;
lOo0 = function($) {
    this.showArrow = $;
    if ($ == true)
        O0Oo0(this.el, "mini-tree-showArrows");
    else
        Ol00(this.el, "mini-tree-showArrows")
}
;
o01001 = function() {
    return this.showArrow
}
;
l10o1 = function($) {
    this.iconField = $
}
;
l0o111 = function() {
    return this.iconField
}
;
o1O1OO = function($) {
    this.nodesField = $
}
;
o101l = function() {
    return this.nodesField
}
;
oOO1o = function($) {
    this.treeColumn = $
}
;
O101o = function() {
    return this.treeColumn
}
;
lO001 = function($) {
    this.leafIcon = $
}
;
oooOlo = function() {
    return this.leafIcon
}
;
o1o0 = function($) {
    this.folderIcon = $
}
;
Oo110 = function() {
    return this.folderIcon
}
;
Oolll0 = function($) {
    this.expandOnDblClick = $
}
;
l10O = function() {
    return this.expandOnDblClick
}
;
oOO0o = function($) {
    this.expandOnNodeClick = $;
    if ($)
        O0Oo0(this.el, "mini-tree-nodeclick");
    else
        Ol00(this.el, "mini-tree-nodeclick")
}
;
Ooo1o = function() {
    return this.expandOnNodeClick
}
;
l1ol = function($) {
    this.removeOnCollapse = $
}
;
lll01 = function() {
    return this.removeOnCollapse
}
;
o111O = function($) {
    this.loadOnExpand = $
}
;
OoO01 = function() {
    return this.loadOnExpand
}
;
OO0l0 = function($) {
    this.autoEscape = $
}
;
o10ol = function() {
    return this.autoEscape
}
;
lO1ll = function(B) {
    if (!this.enabled)
        return;
    if (llOo(B.target, this.o0O01l))
        return;
    var $ = this[_getNodeByEvent](B);
    if ($ && $.enabled !== false)
        if (llOo(B.target, this.O0oo)) {
            var _ = this[isExpandedNode]($)
              , A = {
                node: $,
                expanded: _,
                cancel: false
            };
            if (this.expandOnDblClick && !this.OO1oOO)
                if (_) {
                    this[fire]("beforecollapse", A);
                    if (A.cancel == true)
                        return;
                    this[collapseNode]($, this.allowAnim)
                } else {
                    this[fire]("beforeexpand", A);
                    if (A.cancel == true)
                        return;
                    this[expandNode]($, this.allowAnim)
                }
            this[fire]("nodedblclick", {
                htmlEvent: B,
                node: $,
                isLeaf: this[isLeaf]($)
            })
        }
}
;
O0olO = function(D) {
    if (!this.enabled)
        return;
    var $ = this[_getNodeByEvent](D);
    if ($ && $.enabled !== false) {
        var C = llOo(D.target, this.O0oo) && this.expandOnNodeClick;
        if ((llOo(D.target, this.lo11O) || C) && this[isLeaf]($) == false) {
            if (this.OO1oOO)
                return;
            var _ = this[isExpandedNode]($)
              , B = {
                node: $,
                expanded: _,
                cancel: false
            };
            if (!this.OO1oOO)
                if (_) {
                    this[fire]("beforecollapse", B);
                    if (B.cancel == true)
                        return;
                    this[collapseNode]($, this.allowAnim)
                } else {
                    this[fire]("beforeexpand", B);
                    if (B.cancel == true)
                        return;
                    this[expandNode]($, this.allowAnim)
                }
        } else if (llOo(D.target, this.o0O01l)) {
            var A = this[isCheckedNode]($)
              , B = {
                isLeaf: this[isLeaf]($),
                node: $,
                checked: A,
                checkRecursive: this.checkRecursive,
                htmlEvent: D,
                cancel: false
            };
            this[fire]("beforenodecheck", B);
            if (B.cancel == true) {
                D.preventDefault();
                return
            }
            if (A)
                this[uncheckNode]($);
            else
                this[checkNode]($);
            this[fire]("nodecheck", B)
        } else
            this[_OnNodeClick]($, D)
    }
}
;
O10loo = function(_) {
    if (!this.enabled)
        return;
    if (this._editInput)
        this._editInput[blur]();
    var $ = this[_getNodeByEvent](_);
    if ($)
        if (llOo(_.target, this.lo11O))
            ;
        else if (llOo(_.target, this.o0O01l))
            ;
        else
            this[_OnNodeMouseDown]($, _)
}
;
o1ll0 = function(_, $) {
    var B = llOo($.target, this.O0oo);
    if (!B)
        return null ;
    if (!this[isEnabledNode](_))
        return;
    var A = {
        node: _,
        cancel: false,
        isLeaf: this[isLeaf](_),
        htmlEvent: $
    };
    if (this[allowSelect] && _[allowSelect] !== false)
        if (this.Oo0oO != _) {
            this[fire]("beforenodeselect", A);
            if (A.cancel != true)
                this[selectNode](_)
        }
    this[fire]("nodeMouseDown", A)
}
;
o111l = function(A, $) {
    var C = llOo($.target, this.O0oo);
    if (!C)
        return null ;
    if ($.target.tagName.toLowerCase() == "a")
        $.target.hideFocus = true;
    if (!this[isEnabledNode](A))
        return;
    var B = {
        node: A,
        cancel: false,
        isLeaf: this[isLeaf](A),
        htmlEvent: $
    };
    if (this.l1oo1) {
        var _ = this.l1oo1($);
        if (_) {
            B.column = _;
            B.field = _.field
        }
    }
    this[fire]("nodeClick", B)
}
;
llll0 = function(_) {
    var $ = this[_getNodeByEvent](_);
    if ($)
        this[_OnNodeMouseMove]($, _)
}
;
Oo0ol = function(_) {
    var $ = this[_getNodeByEvent](_);
    if ($)
        this[_OnNodeMouseOut]($, _)
}
;
o0lOo = function($, _) {
    if (!this[isEnabledNode]($))
        return;
    if (!llOo(_.target, this.O0oo))
        return;
    this[blurNode]();
    var _ = {
        node: $,
        htmlEvent: _
    };
    this[fire]("nodemouseout", _)
}
;
Ol0lO = function($, _) {
    if (!this[isEnabledNode]($))
        return;
    if (!llOo(_.target, this.O0oo))
        return;
    if (this[enableHotTrack] == true)
        this[focusNode]($);
    var _ = {
        node: $,
        htmlEvent: _
    };
    this[fire]("nodemousemove", _)
}
;
O0OolO = function(_, $) {
    _ = this[getNode](_);
    if (!_)
        return;
    function A() {
        var A = this.ll00(_);
        if ($ && A)
            this[scrollIntoView](_);
        if (this.ll10l == _)
            return;
        this[blurNode]();
        this.ll10l = _;
        O0Oo0(A, this.Oo1lll)
    }
    var B = this;
    setTimeout(function() {
        A[call](B)
    }
    , 1)
}
;
o0OolO = function() {
    if (!this.ll10l)
        return;
    var $ = this.ll00(this.ll10l);
    if ($)
        Ol00($, this.Oo1lll);
    this.ll10l = null 
}
;
lO100 = function(_) {
    var $ = this[_getNodeEl](_);
    mini[scrollIntoView]($, this.el, false)
}
;
;Olo10=function (url) {return this.url; }
Oo1O0 = function($) {
    if (l1oooo(this.l10OO, $.target))
        return true;
    return mini.Tree[superclass].Ol1o[call](this, $)
}
;
Ool01 = function(_, $) {
    this[on]("nodeClick", _, $)
}
;
ll1Olo = function(_, $) {
    this[on]("beforenodeselect", _, $)
}
;
lOOlo = function(_, $) {
    this[on]("nodeselect", _, $)
}
;
O10OO = function(_, $) {
    this[on]("beforenodecheck", _, $)
}
;
llll1O = function(_, $) {
    this[on]("nodecheck", _, $)
}
;
Olo1l = function(_, $) {
    this[on]("nodemousedown", _, $)
}
;
o1l01 = function(_, $) {
    this[on]("beforeexpand", _, $)
}
;
l1o1 = function(_, $) {
    this[on]("expand", _, $)
}
;
o00o = function(_, $) {
    this[on]("beforecollapse", _, $)
}
;
o001O = function(_, $) {
    this[on]("collapse", _, $)
}
;
OO000o = function(_, $) {
    this[on]("beforeload", _, $)
}
;
l1l0o0 = function(_, $) {
    this[on]("load", _, $)
}
;
olO10 = function(_, $) {
    this[on]("loaderror", _, $)
}
;
lOlOo = function(_, $) {
    this[on]("dataload", _, $)
}
;
OO1111 = function() {
    return this[getSelectedNodes]().clone()
}
;
llll10 = function($) {
    return "Nodes " + $.length
}
;
lool0 = function($) {
    this.allowLeafDropIn = $
}
;
o0OoOo = function() {
    return this.allowLeafDropIn
}
;
ool1l = function($) {
    this.allowDrag = $
}
;
O1oOl = function() {
    return this.allowDrag
}
;
l1ll = function($) {
    this[allowDrop] = $
}
;
Ool0O = function() {
    return this[allowDrop]
}
;
l011 = function($) {
    this[dragGroupName] = $
}
;
ol0O1 = function() {
    return this[dragGroupName]
}
;
o0Ool = function($) {
    this[dropGroupName] = $
}
;
OOlO = function() {
    return this[dropGroupName]
}
;
O1110 = function($) {
    if (!this.allowDrag)
        return false;
    if ($.allowDrag === false)
        return false;
    var _ = this.ollOll($);
    return !_.cancel
}
;
l0l0o = function($) {
    var _ = {
        node: $,
        cancel: false
    };
    this[fire]("DragStart", _);
    return _
}
;
Oo1l01 = function(_, $, A) {
    _ = _.clone();
    var B = {
        dragNodes: _,
        targetNode: $,
        action: A,
        cancel: false
    };
    B.dragNode = B.dragNodes[0];
    B.dropNode = B.targetNode;
    B.dragAction = B.action;
    this[fire]("beforedrop", B);
    this[fire]("DragDrop", B);
    return B
}
;
;lOO0O=function () {return this[isFrozen]() ? this.ol10O.scrollLeft :this.O1OOoo.scrollLeft; }
oO0OO = function(A, _, $) {
    var B = {};
    B.effect = A;
    B.nodes = _;
    B.targetNode = $;
    B.node = B.nodes[0];
    B.dragNodes = _;
    B.dragNode = B.dragNodes[0];
    B.dropNode = B.targetNode;
    B.dragAction = B.action;
    this[fire]("givefeedback", B);
    return B
}
;
OloO = function(C) {
    var G = mini.Tree[superclass][getAttrs][call](this, C);
    mini[_ParseString](C, G, ["value", "url", "idField", "textField", "iconField", "nodesField", "parentField", "valueField", "leafIcon", "folderIcon", "ondrawnode", "onbeforenodeselect", "onnodeselect", "onnodemousedown", "onnodeclick", "onnodedblclick", "onbeforeload", "onpreload", "onload", "onloaderror", "ondataload", "onbeforenodecheck", "onnodecheck", "onbeforeexpand", "onexpand", "onbeforecollapse", "oncollapse", "dragGroupName", "dropGroupName", "onendedit", "expandOnLoad", "ajaxOption", "onbeforedrop", "ondrop", "ongivefeedback"]);
    mini[_ParseBool](C, G, ["allowSelect", "showCheckBox", "showExpandButtons", "showTreeIcon", "showTreeLines", "checkRecursive", "enableHotTrack", "showFolderCheckBox", "resultAsTree", "allowLeafDropIn", "allowDrag", "allowDrop", "showArrow", "expandOnDblClick", "removeOnCollapse", "autoCheckParent", "loadOnExpand", "expandOnNodeClick", "autoEscape"]);
    if (G.ajaxOption)
        G.ajaxOption = mini.decode(G.ajaxOption);
    if (G.expandOnLoad) {
        var _ = parseInt(G.expandOnLoad);
        if (mini.isNumber(_))
            G.expandOnLoad = _;
        else
            G.expandOnLoad = G.expandOnLoad == "true" ? true : false
    }
    var E = G[idField] || this[idField]
      , B = G[textField] || this[textField]
      , F = G.iconField || this.iconField
      , A = G.nodesField || this.nodesField;
    function $(I) {
        var N = [];
        for (var L = 0, J = I.length; L < J; L++) {
            var D = I[L]
              , H = mini[getChildNodes](D)
              , R = H[0]
              , G = H[1];
            if (!R || !G)
                R = D;
            var C = jQuery(R)
              , _ = {}
              , K = _[E] = R.getAttribute("value");
            _[F] = C.attr("iconCls");
            _[B] = R.innerHTML;
            N[add](_);
            var P = C.attr("expanded");
            if (P)
                _.expanded = P == "false" ? false : true;
            var Q = C.attr("allowSelect");
            if (Q)
                _[allowSelect] = Q == "false" ? false : true;
            if (!G)
                continue;var O = mini[getChildNodes](G)
              , M = $(O);
            if (M.length > 0)
                _[A] = M
        }
        return N
    }
    var D = $(mini[getChildNodes](C));
    if (D.length > 0)
        G.data = D;
    if (!G[idField] && G[valueField])
        G[idField] = G[valueField];
    return G
}
;
OO0l = function() {
    var $ = this.el = document.createElement("div");
    this.el.className = "mini-popup";
    this.lOlO = this.el
}
;
ool1O = function() {
    l00l(function() {
        O0l10(this.el, "mouseover", this.ol0OOo, this)
    }
    , this)
}
;
oO1lO = function() {
    if (!this[canLayout]())
        return;
    mini.Popup[superclass][doLayout][call](this);
    this.o000l1();
    var A = this.el.childNodes;
    if (A)
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            mini.layout(_)
        }
}
;
oO0O = function($) {
    if (this.el)
        this.el.onmouseover = null ;
    mini.removeChilds(this.lOlO);
    O1l0(document, "mousedown", this.l111, this);
    O1l0(window, "resize", this.lo0O, this);
    if (this.o11o00) {
        jQuery(this.o11o00).remove();
        this.o11o00 = null 
    }
    if (this.shadowEl) {
        jQuery(this.shadowEl).remove();
        this.shadowEl = null 
    }
    mini.Popup[superclass][destroy][call](this, $)
}
;
o110o = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.width = $;
    if ($[indexOf]("px") != -1)
        oO1Ol(this.el, $);
    else
        this.el.style.width = $;
    this[_sizeChaned]()
}
;
O0O00 = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.height = $;
    if ($[indexOf]("px") != -1)
        OO01(this.el, $);
    else
        this.el.style.height = $;
    this[_sizeChaned]()
}
;
O1ol = function(_) {
    if (!_)
        return;
    if (!mini.isArray(_))
        _ = [_];
    for (var $ = 0, A = _.length; $ < A; $++)
        mini.append(this.lOlO, _[$])
}
;
O0l11 = function($) {
    var A = mini.Popup[superclass][getAttrs][call](this, $);
    mini[_ParseString]($, A, ["popupEl", "popupCls", "showAction", "hideAction", "xAlign", "yAlign", "modalStyle", "onbeforeopen", "open", "onbeforeclose", "onclose"]);
    mini[_ParseBool]($, A, ["showModal", "showShadow", "allowDrag", "allowResize"]);
    mini[_ParseInt]($, A, ["showDelay", "hideDelay", "xOffset", "yOffset", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
    var _ = mini[getChildNodes]($, true);
    A.body = _;
    return A
}
;
oOO0oo = function(_) {
    if (typeof _ == "string")
        return this;
    var C = this.ool11;
    this.ool11 = false;
    var B = _.toolbar;
    delete _.toolbar;
    var $ = _.footer;
    delete _.footer;
    var A = _.url;
    delete _.url;
    mini.Panel[superclass][set][call](this, _);
    if (B)
        this[setToolbar](B);
    if ($)
        this[setFooter]($);
    if (A)
        this[setUrl](A);
    this.ool11 = C;
    this[doLayout]();
    return this
}
;
O10Ooo = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-panel";
    var _ = "<div class=\"mini-panel-border\">" + "<div class=\"mini-panel-header\" ><div class=\"mini-panel-header-inner\" ><span class=\"mini-panel-icon\"></span><div class=\"mini-panel-title\" ></div><div class=\"mini-tools\" ></div></div></div>" + "<div class=\"mini-panel-viewport\">" + "<div class=\"mini-panel-toolbar\"></div>" + "<div class=\"mini-panel-body\" ></div>" + "<div class=\"mini-panel-footer\"></div>" + "<div class=\"mini-resizer-trigger\"></div>" + "</div>" + "</div>";
    this.el.innerHTML = _;
    this.oO0o1l = this.el.firstChild;
    this.l10OO = this.oO0o1l.firstChild;
    this.Oolol = this.oO0o1l.lastChild;
    this.ooOl10 = mini.byClass("mini-panel-toolbar", this.el);
    this.O1OOoo = mini.byClass("mini-panel-body", this.el);
    this.o111 = mini.byClass("mini-panel-footer", this.el);
    this.ll1lo = mini.byClass("mini-resizer-trigger", this.el);
    var $ = mini.byClass("mini-panel-header-inner", this.el);
    this.lOOo1 = mini.byClass("mini-panel-icon", this.el);
    this.Ool1O = mini.byClass("mini-panel-title", this.el);
    this.OoOO = mini.byClass("mini-tools", this.el);
    O1lo11(this.O1OOoo, this.bodyStyle);
    this[_doTitle]()
}
;
lo000 = function($) {
    this.ol01O();
    this.llO01l = null ;
    this.Oolol = this.oO0o1l = this.O1OOoo = this.o111 = this.ooOl10 = null ;
    this.OoOO = this.Ool1O = this.lOOo1 = this.ll1lo = null ;
    mini.Panel[superclass][destroy][call](this, $)
}
;
O01oO0 = function() {
    l00l(function() {
        l1Oo0O(this.el, "click", this.o0O0lo, this)
    }
    , this)
}
;
O1l01 = function() {
    this.l10OO.style.display = this.showHeader ? "" : "none";
    this.ooOl10.style.display = this[showToolbar] ? "" : "none";
    this.o111.style.display = this[showFooter] ? "" : "none"
}
;
l0111 = function() {
    if (!this[canLayout]())
        return;
    this.ll1lo.style.display = this[allowResize] ? "" : "none";
    var A = this[isAutoHeight]()
      , D = this[isAutoWidth]()
      , $ = o110O(this.Oolol, true)
      , _ = $;
    if (!A) {
        var C = this[getViewportHeight]();
        OO01(this.Oolol, C);
        var B = this[getBodyHeight](true);
        OO01(this.O1OOoo, B)
    } else {
        this.Oolol.style.height = "auto";
        this.O1OOoo.style.height = "auto"
    }
    mini.layout(this.oO0o1l);
    this[fire]("layout")
}
;
o0Oll = function($) {
    if (!$)
        $ = 10;
    if (this.OlOOoo)
        return;
    var _ = this;
    this.OlOOoo = setTimeout(function() {
        _.OlOOoo = null ;
        _[doLayout]()
    }
    , $)
}
;
OO00l = function() {
    clearTimeout(this.OlOOoo);
    this.OlOOoo = null 
}
;
ooO1O = function($) {
    return o110O(this.Oolol, $)
}
;
l0oOo = function(_) {
    var $ = this[getHeight](true) - this[getHeaderHeight]();
    if (_) {
        var C = OllOo(this.Oolol)
          , B = OOoo(this.Oolol)
          , A = o11loo(this.Oolol);
        if (jQuery.boxModel)
            $ = $ - C.top - C.bottom - B.top - B.bottom;
        $ = $ - A.top - A.bottom
    }
    return $
}
;
oool = function(A) {
    var _ = this[getViewportHeight]()
      , _ = _ - this[getToolbarHeight]() - this[getFooterHeight]();
    if (A) {
        var $ = OllOo(this.Oolol)
          , B = OOoo(this.Oolol)
          , C = o11loo(this.Oolol);
        if (jQuery.boxModel)
            _ = _ - $.top - $.bottom - B.top - B.bottom;
        _ = _ - C.top - C.bottom
    }
    if (_ < 0)
        _ = 0;
    return _
}
;
OOOll = function() {
    var $ = this.showHeader ? jQuery(this.l10OO).outerHeight() : 0;
    return $
}
;
lO1O1O = function() {
    var $ = this[showToolbar] ? jQuery(this.ooOl10).outerHeight() : 0;
    return $
}
;
OO1lO = function() {
    var $ = this[showFooter] ? jQuery(this.o111).outerHeight() : 0;
    return $
}
;
ooo0 = function($) {
    this.headerStyle = $;
    O1lo11(this.l10OO, $);
    this[doLayout]()
}
;
ooOll0 = function() {
    return this.headerStyle
}
;
lOOOStyle = function($) {
    this.bodyStyle = $;
    O1lo11(this.O1OOoo, $);
    this[doLayout]()
}
;
O0Olo = function() {
    return this.bodyStyle
}
;
OoOlOOStyle = function($) {
    this.toolbarStyle = $;
    O1lo11(this.ooOl10, $);
    this[doLayout]()
}
;
o01olo = function() {
    return this.toolbarStyle
}
;
lo1olStyle = function($) {
    this.footerStyle = $;
    O1lo11(this.o111, $);
    this[doLayout]()
}
;
O010 = function() {
    return this.footerStyle
}
;
O0ll = function($) {
    jQuery(this.l10OO)[removeClass](this.headerCls);
    jQuery(this.l10OO)[addClass]($);
    this.headerCls = $;
    this[doLayout]()
}
;
o101o1 = function() {
    return this.headerCls
}
;
lOOOCls = function($) {
    jQuery(this.O1OOoo)[removeClass](this.bodyCls);
    jQuery(this.O1OOoo)[addClass]($);
    this.bodyCls = $;
    this[doLayout]()
}
;
oo10l = function() {
    return this.bodyCls
}
;
OoOlOOCls = function($) {
    jQuery(this.ooOl10)[removeClass](this.toolbarCls);
    jQuery(this.ooOl10)[addClass]($);
    this.toolbarCls = $;
    this[doLayout]()
}
;
OO1ol = function() {
    return this.toolbarCls
}
;
lo1olCls = function($) {
    jQuery(this.o111)[removeClass](this.footerCls);
    jQuery(this.o111)[addClass]($);
    this.footerCls = $;
    this[doLayout]()
}
;
l0lo = function() {
    return this.footerCls
}
;
l0oo = function() {
    this.Ool1O.innerHTML = this.title;
    this.lOOo1.style.display = (this.iconCls || this[iconStyle]) ? "inline" : "none";
    this.lOOo1.className = "mini-panel-icon " + this.iconCls;
    O1lo11(this.lOOo1, this[iconStyle])
}
;
oo11l = function($) {
    this.title = $;
    this[_doTitle]()
}
;
olo1ll = function() {
    return this.title
}
;
oO1O0 = function($) {
    this.iconCls = $;
    this[_doTitle]()
}
;
o1OoO = function() {
    return this.iconCls
}
;
lolo1 = function() {
    var A = "";
    for (var $ = this.buttons.length - 1; $ >= 0; $--) {
        var _ = this.buttons[$];
        A += "<span id=\"" + $ + "\" class=\"" + _.cls + " " + (_.enabled ? "" : "mini-disabled") + "\" style=\"" + _.style + ";" + (_.visible ? "" : "display:none;") + "\"></span>"
    }
    this.OoOO.innerHTML = A
}
;
oO00O = function($) {
    this[showCloseButton] = $;
    var _ = this[getButton]("close");
    _.visible = $;
    this[_doTools]()
}
;
o1OOO = function() {
    return this[showCloseButton]
}
;
oOloO = function($) {
    this[closeAction] = $
}
;
OOo1O = function() {
    return this[closeAction]
}
;
loO01 = function($) {
    this[showCollapseButton] = $;
    var _ = this[getButton]("collapse");
    _.visible = $;
    this[_doTools]()
}
;
l0O10 = function() {
    return this[showCollapseButton]
}
;
;o01lll=function (column) {return this.uid + "$filter$" + column._id; }
O1OOo = function($) {
    this.showHeader = $;
    this[_doVisibleEls]();
    this[deferLayout]()
}
;
;ol10l=function (row,column) {row = this[getRow](row); column = this[getColumn](column); if (!row || !column) return null; var cellEl = this.l10Ol(row,column); if (!cellEl) return null; return OOl1o0(cellEl); }
l1111 = function() {
    return this.showHeader
}
;
oloo = function($) {
    this[showToolbar] = $;
    this[_doVisibleEls]();
    this[deferLayout]()
}
;
l10Oo1 = function() {
    return this[showToolbar]
}
;
lo1O0 = function($) {
    this[showFooter] = $;
    this[_doVisibleEls]();
    this[deferLayout]()
}
;
l00oOO = function() {
    return this[showFooter]
}
;
oolOoO = function(A) {
    if (l1oooo(this.l10OO, A.target)) {
        var $ = llOo(A.target, "mini-tools");
        if ($) {
            var _ = this[getButton](parseInt(A.target.id));
            if (_)
                this.llloO(_, A)
        }
    }
}
;
OOoO1 = function(B, $) {
    var C = {
        button: B,
        index: this.buttons[indexOf](B),
        name: B.name.toLowerCase(),
        htmlEvent: $,
        cancel: false
    };
    this[fire]("beforebuttonclick", C);
    try {
        if (C.name == "close" && this[closeAction] == "destroy" && this.llO01l && this.llO01l.contentWindow) {
            var _ = true;
            if (this.llO01l.contentWindow.CloseWindow)
                _ = this.llO01l.contentWindow.CloseWindow("close");
            else if (this.llO01l.contentWindow.CloseOwnerWindow)
                _ = this.llO01l.contentWindow.CloseOwnerWindow("close");
            if (_ === false)
                C.cancel = true
        }
    } catch (A) {}
    if (C.cancel == true)
        return C;
    this[fire]("buttonclick", C);
    if (C.name == "close")
        if (this[closeAction] == "destroy") {
            this.__HideAction = "close";
            this[destroy]()
        } else
            this[hide]();
    if (C.name == "collapse") {
        this[toggle]();
        if (this[refreshOnExpand] && this.expanded && this.url)
            this[reload]()
    }
    return C
}
;
O1lll = function(_, $) {
    this[on]("buttonclick", _, $)
}
;
llOlO = function() {
    this.buttons = [];
    var _ = this[createButton]({
        name: "close",
        cls: "mini-tools-close",
        visible: this[showCloseButton]
    });
    this.buttons.push(_);
    var $ = this[createButton]({
        name: "collapse",
        cls: "mini-tools-collapse",
        visible: this[showCollapseButton]
    });
    this.buttons.push($)
}
;
o0oo0 = function(_) {
    var $ = mini.copyTo({
        name: "",
        cls: "",
        style: "",
        visible: true,
        enabled: true,
        html: ""
    }, _);
    return $
}
;
ooO10 = function(_, $) {
    if (typeof _ == "string")
        _ = {
            iconCls: _
        };
    _ = this[createButton](_);
    if (typeof $ != "number")
        $ = this.buttons.length;
    this.buttons.insert($, _);
    this[_doTools]()
}
;
loOo1 = function($, A) {
    var _ = this[getButton]($);
    if (!_)
        return;
    mini.copyTo(_, A);
    this[_doTools]()
}
;
l0oOl = function($) {
    var _ = this[getButton]($);
    if (!_)
        return;
    this.buttons.remove(_);
    this[_doTools]()
}
;
ol1l0 = function($) {
    if (typeof $ == "number")
        return this.buttons[$];
    else
        for (var _ = 0, A = this.buttons.length; _ < A; _++) {
            var B = this.buttons[_];
            if (B.name == $)
                return B
        }
}
;
lOOO = function($) {
    __mini_setControls($, this.O1OOoo, this)
}
;
lll10 = function($) {}
;
OoOlOO = function($) {
    __mini_setControls($, this.ooOl10, this)
}
;
;OlooO=function () {return this.data.clone(); }
lo1ol = function($) {
    __mini_setControls($, this.o111, this)
}
;
Ol111 = function() {
    return this.l10OO
}
;
O1O0 = function() {
    return this.ooOl10
}
;
l0llO = function() {
    return this.O1OOoo
}
;
;O0l1l=function (index) {var pane = this[getPane](index); if (!pane) return; pane.visible = false; var pane2 = pane == this.pane1 ? this.pane2 :this.pane1; if (pane2.visible == false) {pane2.expanded = true; pane2.visible = true; } this[doUpdate](); }
ll1O11 = function() {
    return this.o111
}
;
l1oO01 = function($) {
    return this.llO01l
}
;
Olo0l = function() {
    return this.O1OOoo
}
;
o10l = function($) {
    if (this.llO01l) {
        var _ = this.llO01l;
        _.src = "";
        try {
            _.contentWindow.document.write("");
            _.contentWindow.document.close()
        } catch (A) {}
        if (_._ondestroy)
            _._ondestroy();
        try {
            this.llO01l.parentNode.removeChild(this.llO01l);
            this.llO01l[removeNode](true)
        } catch (A) {}
    }
    this.llO01l = null ;
    if ($ === true)
        mini.removeChilds(this.O1OOoo)
}
;
Oool1 = function() {
    this.ol01O(true);
    var A = new Date()
      , $ = this;
    this.loadedUrl = this.url;
    if (this.maskOnLoad)
        this[loading]();
    jQuery(this.O1OOoo).css("overflow", "hidden");
    var _ = mini.createIFrame(this.url, function(_, C) {
        var B = (A - new Date()) + $.lo01;
        if (B < 0)
            B = 0;
        setTimeout(function() {
            $[unmask]()
        }
        , B);
        try {
            $.llO01l.contentWindow.Owner = $.Owner;
            $.llO01l.contentWindow.CloseOwnerWindow = function(_) {
                $.__HideAction = _;
                var A = true;
                if ($.__onDestroy)
                    A = $.__onDestroy(_);
                if (A === false)
                    return false;
                var B = {
                    iframe: $.llO01l,
                    action: _
                };
                $[fire]("unload", B);
                setTimeout(function() {
                    $[destroy]()
                }
                , 10)
            }
        } catch (D) {}
        if (C) {
            if ($.__onLoad)
                $.__onLoad();
            var D = {
                iframe: $.llO01l
            };
            $[fire]("load", D)
        }
    }
    );
    this.O1OOoo.appendChild(_);
    this.llO01l = _
}
;
Ol101 = function(_, $, A) {
    this[setUrl](_, $, A)
}
;
;o0lO0=function () {if (!this.drag) {this.drag = new mini.Drag({capture:true,onStart:mini.createDelegate(this.ollOll,this),onMove:mini.createDelegate(this.ooOo,this),onStop:mini.createDelegate(this.l10l,this) }); } return this.drag; }
l0oOO = function() {
    this[setUrl](this.url)
}
;
oooO = function($, _, A) {
    this.url = $;
    this.__onLoad = _;
    this.__onDestroy = A;
    if (this.expanded)
        this.oll0l0()
}
;
oO0o1 = function() {
    return this.url
}
;
oOlll = function($) {
    this[refreshOnExpand] = $
}
;
oolo0 = function() {
    return this[refreshOnExpand]
}
;
O0oo1O = function($) {
    this.maskOnLoad = $
}
;
oo011 = function($) {
    return this.maskOnLoad
}
;
lo0o = function($) {
    if (this[allowResize] != $) {
        this[allowResize] = $;
        this[doLayout]()
    }
}
;
OO1l1 = function() {
    return this[allowResize]
}
;
O0o0o = function($) {
    if (this.expanded != $) {
        this.expanded = $;
        if (this.expanded)
            this[expand]();
        else
            this[collapse]()
    }
}
;
l0O01O = function() {
    if (this.expanded)
        this[collapse]();
    else
        this[expand]()
}
;
oO011 = function() {
    this.expanded = false;
    this._height = this.el.style.height;
    this.el.style.height = "auto";
    this.Oolol.style.display = "none";
    O0Oo0(this.el, "mini-panel-collapse");
    this[doLayout]()
}
;
Ooloo = function() {
    this.expanded = true;
    this.el.style.height = this._height;
    this.Oolol.style.display = "block";
    delete this._height;
    Ol00(this.el, "mini-panel-collapse");
    if (this.url && this.url != this.loadedUrl)
        this.oll0l0();
    this[doLayout]()
}
;
O0oO1 = function(_) {
    var D = mini.Panel[superclass][getAttrs][call](this, _);
    mini[_ParseString](_, D, ["title", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "footerCls", "footerStyle", "toolbarCls", "toolbarStyle", "footer", "toolbar", "url", "closeAction", "loadingMsg", "onbeforebuttonclick", "onbuttonclick", "onload"]);
    mini[_ParseBool](_, D, ["allowResize", "showCloseButton", "showHeader", "showToolbar", "showFooter", "showCollapseButton", "refreshOnExpand", "maskOnLoad", "expanded"]);
    var C = mini[getChildNodes](_, true);
    for (var $ = C.length - 1; $ >= 0; $--) {
        var B = C[$]
          , A = jQuery(B).attr("property");
        if (!A)
            continue;A = A.toLowerCase();
        if (A == "toolbar")
            D.toolbar = B;
        else if (A == "footer")
            D.footer = B
    }
    D.body = C;
    return D
}
;
O0llo1 = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-pager";
    var $ = "<div class=\"mini-pager-left\"></div><div class=\"mini-pager-right\"></div>";
    this.el.innerHTML = $;
    this.buttonsEl = this._leftEl = this.el.childNodes[0];
    this._rightEl = this.el.childNodes[1];
    this.sizeEl = mini.append(this.buttonsEl, "<span class=\"mini-pager-size\"></span>");
    this.sizeCombo = new mini.ComboBox();
    this.sizeCombo[setName]("pagesize");
    this.sizeCombo[setWidth](48);
    this.sizeCombo[render](this.sizeEl);
    mini.append(this.sizeEl, "<span class=\"separator\"></span>");
    this.firstButton = new mini.Button();
    this.firstButton[render](this.buttonsEl);
    this.prevButton = new mini.Button();
    this.prevButton[render](this.buttonsEl);
    this.indexEl = document.createElement("span");
    this.indexEl.className = "mini-pager-index";
    this.indexEl.innerHTML = "<input id=\"\" type=\"text\" class=\"mini-pager-num\"/><span class=\"mini-pager-pages\">/ 0</span>";
    this.buttonsEl.appendChild(this.indexEl);
    this.numInput = this.indexEl.firstChild;
    this.pagesLabel = this.indexEl.lastChild;
    this.nextButton = new mini.Button();
    this.nextButton[render](this.buttonsEl);
    this.lastButton = new mini.Button();
    this.lastButton[render](this.buttonsEl);
    mini.append(this.buttonsEl, "<span class=\"separator\"></span>");
    this.reloadButton = new mini.Button();
    this.reloadButton[render](this.buttonsEl);
    this.firstButton[setPlain](true);
    this.prevButton[setPlain](true);
    this.nextButton[setPlain](true);
    this.lastButton[setPlain](true);
    this.reloadButton[setPlain](true);
    this[update]()
}
;
O11OoO = function($) {
    if (this.pageSelect) {
        mini[clearEvent](this.pageSelect);
        this.pageSelect = null 
    }
    if (this.numInput) {
        mini[clearEvent](this.numInput);
        this.numInput = null 
    }
    this.sizeEl = null ;
    this.buttonsEl = null ;
    mini.Pager[superclass][destroy][call](this, $)
}
;
loO10 = function() {
    mini.Pager[superclass][_initEvents][call](this);
    this.firstButton[on]("click", function($) {
        this.lOoO(0)
    }
    , this);
    this.prevButton[on]("click", function($) {
        this.lOoO(this[pageIndex] - 1)
    }
    , this);
    this.nextButton[on]("click", function($) {
        this.lOoO(this[pageIndex] + 1)
    }
    , this);
    this.lastButton[on]("click", function($) {
        this.lOoO(this.totalPage)
    }
    , this);
    this.reloadButton[on]("click", function($) {
        this.lOoO()
    }
    , this);
    function $() {
        if (_)
            return;
        _ = true;
        var $ = parseInt(this.numInput.value);
        if (isNaN($))
            this[update]();
        else
            this.lOoO($ - 1);
        setTimeout(function() {
            _ = false
        }
        , 100)
    }
    var _ = false;
    l1Oo0O(this.numInput, "change", function(_) {
        $[call](this)
    }
    , this);
    l1Oo0O(this.numInput, "keydown", function(_) {
        if (_.keyCode == 13) {
            $[call](this);
            _.stopPropagation()
        }
    }
    , this);
    this.sizeCombo[on]("valuechanged", this.oo1l, this)
}
;
l1lOO = function() {
    if (!this[canLayout]())
        return;
    mini.layout(this._leftEl);
    mini.layout(this._rightEl)
}
;
o11oo = function($) {
    if (isNaN($))
        return;
    this[pageIndex] = $;
    this[update]()
}
;
O1o1o = function() {
    return this[pageIndex]
}
;
O0lOO = function($) {
    if (isNaN($))
        return;
    this[pageSize] = $;
    this[update]()
}
;
o1ool = function() {
    return this[pageSize]
}
;
OO00o = function($) {
    $ = parseInt($);
    if (isNaN($))
        return;
    this[totalCount] = $;
    this[update]()
}
;
Oo0l0 = function() {
    return this[totalCount]
}
;
o0l0l = function($) {
    if (!mini.isArray($))
        return;
    this[sizeList] = $;
    this[update]()
}
;
oo101 = function() {
    return this[sizeList]
}
;
llO110 = function($) {
    this.showPageSize = $;
    this[update]()
}
;
ll1O1 = function() {
    return this.showPageSize
}
;
loo0o = function($) {
    this.showPageIndex = $;
    this[update]()
}
;
oOOlo = function() {
    return this.showPageIndex
}
;
lo0ll = function($) {
    this.showTotalCount = $;
    this[update]()
}
;
Oll0O = function() {
    return this.showTotalCount
}
;
Oll0o = function($) {
    this.showPageInfo = $;
    this[update]()
}
;
ooOOlO = function() {
    return this.showPageInfo
}
;
OlOllo = function($) {
    this.showReloadButton = $;
    this[update]()
}
;
o1l0l = function() {
    return this.showReloadButton
}
;
o10oo = function() {
    return this.totalPage
}
;
looooo = function($, H, F) {
    if (mini.isNumber($))
        this[pageIndex] = parseInt($);
    if (mini.isNumber(H))
        this[pageSize] = parseInt(H);
    if (mini.isNumber(F))
        this[totalCount] = parseInt(F);
    this.totalPage = parseInt(this[totalCount] / this[pageSize]) + 1;
    if ((this.totalPage - 1) * this[pageSize] == this[totalCount])
        this.totalPage -= 1;
    if (this[totalCount] == 0)
        this.totalPage = 0;
    if (this[pageIndex] > this.totalPage - 1)
        this[pageIndex] = this.totalPage - 1;
    if (this[pageIndex] <= 0)
        this[pageIndex] = 0;
    if (this.totalPage <= 0)
        this.totalPage = 0;
    this.firstButton[enable]();
    this.prevButton[enable]();
    this.nextButton[enable]();
    this.lastButton[enable]();
    if (this[pageIndex] == 0) {
        this.firstButton[disable]();
        this.prevButton[disable]()
    }
    if (this[pageIndex] >= this.totalPage - 1) {
        this.nextButton[disable]();
        this.lastButton[disable]()
    }
    this.numInput.value = this[pageIndex] > -1 ? this[pageIndex] + 1 : 0;
    this.pagesLabel.innerHTML = "/ " + this.totalPage;
    var L = this[sizeList].clone();
    if (L[indexOf](this[pageSize]) == -1) {
        L.push(this[pageSize]);
        L = L.sort(function($, _) {
            return $ > _
        }
        )
    }
    var _ = [];
    for (var E = 0, B = L.length; E < B; E++) {
        var D = L[E]
          , G = {};
        G.text = D;
        G.id = D;
        _.push(G)
    }
    this.sizeCombo[setData](_);
    this.sizeCombo[setValue](this[pageSize]);
    var A = this.firstText
      , K = this.prevText
      , C = this.nextText
      , I = this.lastText;
    if (this.showButtonText == false)
        A = K = C = I = "";
    this.firstButton[setText](A);
    this.prevButton[setText](K);
    this.nextButton[setText](C);
    this.lastButton[setText](I);
    A = this.firstText,
    K = this.prevText,
    C = this.nextText,
    I = this.lastText;
    if (this.showButtonText == true)
        A = K = C = I = "";
    this.firstButton[setTooltip](A);
    this.prevButton[setTooltip](K);
    this.nextButton[setTooltip](C);
    this.lastButton[setTooltip](I);
    this.firstButton[setIconCls](this.showButtonIcon ? "mini-pager-first" : "");
    this.prevButton[setIconCls](this.showButtonIcon ? "mini-pager-prev" : "");
    this.nextButton[setIconCls](this.showButtonIcon ? "mini-pager-next" : "");
    this.lastButton[setIconCls](this.showButtonIcon ? "mini-pager-last" : "");
    this.reloadButton[setIconCls](this.showButtonIcon ? "mini-pager-reload" : "");
    this.reloadButton[setVisible](this.showReloadButton);
    var J = this.reloadButton.el.previousSibling;
    if (J)
        J.style.display = this.showReloadButton ? "" : "none";
    this._rightEl.innerHTML = String.format(this.pageInfoText, this.pageSize, this[totalCount]);
    this.indexEl.style.display = this.showPageIndex ? "" : "none";
    this.sizeEl.style.display = this.showPageSize ? "" : "none";
    this._rightEl.style.display = this.showPageInfo ? "" : "none"
}
;
olo0o = function(_) {
    var $ = parseInt(this.sizeCombo[getValue]());
    this.lOoO(0, $)
}
;
l10ol = function($, _) {
    var A = {
        pageIndex: mini.isNumber($) ? $ : this.pageIndex,
        pageSize: mini.isNumber(_) ? _ : this.pageSize,
        cancel: false
    };
    if (A[pageIndex] > this.totalPage - 1)
        A[pageIndex] = this.totalPage - 1;
    if (A[pageIndex] < 0)
        A[pageIndex] = 0;
    this[fire]("beforepagechanged", A);
    if (A.cancel == true)
        return;
    this[fire]("pagechanged", A);
    this[update](A.pageIndex, A[pageSize])
}
;
l1O11 = function(_, $) {
    this[on]("pagechanged", _, $)
}
;
o001l1 = function(el) {
    var attrs = mini.Pager[superclass][getAttrs][call](this, el);
    mini[_ParseString](el, attrs, ["onpagechanged", "sizeList", "onbeforepagechanged"]);
    mini[_ParseBool](el, attrs, ["showPageIndex", "showPageSize", "showTotalCount", "showPageInfo", "showReloadButton"]);
    mini[_ParseInt](el, attrs, ["pageIndex", "pageSize", "totalCount"]);
    if (typeof attrs[sizeList] == "string")
        attrs[sizeList] = eval(attrs[sizeList]);
    return attrs
}
;
llo1O = function() {
    this.el = document.createElement("input");
    this.el.type = "hidden";
    this.el.className = "mini-hidden"
}
;
lO1o1 = function($) {
    this.name = $;
    this.el.name = $
}
;
o1loo = function(_) {
    if (_ === null  || _ === undefined)
        _ = "";
    this.value = _;
    if (mini.isDate(_)) {
        var B = _.getFullYear()
          , A = _.getMonth() + 1
          , $ = _.getDate();
        A = A < 10 ? "0" + A : A;
        $ = $ < 10 ? "0" + $ : $;
        this.el.value = B + "-" + A + "-" + $
    } else
        this.el.value = _
}
;
ollOo = function() {
    return this.value
}
;
OO1OO = function() {
    return this.el.value
}
;
loll = function($) {
    if (typeof $ == "string")
        return this;
    this.O1l1O1 = $.text || $[iconStyle] || $.iconCls || $.iconPosition;
    mini.Button[superclass][set][call](this, $);
    if (this.O1l1O1 === false) {
        this.O1l1O1 = true;
        this[doUpdate]()
    }
    return this
}
;
o10ll0 = function() {
    this.el = document.createElement("a");
    this.el.className = "mini-button";
    this.el.hideFocus = true;
    this.el.href = "javascript:void(0)";
    this[doUpdate]()
}
;
lol1l = function() {
    l00l(function() {
        O0l10(this.el, "mousedown", this.ol1Ol, this);
        O0l10(this.el, "click", this.o0O0lo, this)
    }
    , this)
}
;
ll01O = function($) {
    if (this.el) {
        this.el.onclick = null ;
        this.el.onmousedown = null 
    }
    if (this.menu)
        this.menu.owner = null ;
    this.menu = null ;
    mini.Button[superclass][destroy][call](this, $)
}
;
lol11 = function() {
    if (this.O1l1O1 === false)
        return;
    var _ = ""
      , $ = this.text;
    if (this.iconCls && $)
        _ = " mini-button-icon " + this.iconCls;
    else if (this.iconCls && $ === "") {
        _ = " mini-button-iconOnly " + this.iconCls;
        $ = "&nbsp;"
    } else if ($ == "")
        $ = "&nbsp;";
    var A = "<span class=\"mini-button-text " + _ + "\">" + $ + "</span>";
    if (this.allowCls)
        A = A + "<span class=\"mini-button-allow " + this.allowCls + "\"></span>";
    this.el.innerHTML = A
}
;
Olol1 = function($) {
    this.href = $;
    this.el.href = $;
    var _ = this.el;
    setTimeout(function() {
        _.onclick = null 
    }
    , 100)
}
;
Oo10o = function() {
    return this.href
}
;
l0o1l = function($) {
    this.target = $;
    this.el.target = $
}
;
;loOO=function (data) {this[loadData](data); }
l01ol = function() {
    return this.target
}
;
ooo1oo = function($) {
    if (this.text != $) {
        this.text = $;
        this[doUpdate]()
    }
}
;
;lo10=function (e) {if (l1oooo(this.el,e.target)) return true; if (this.menu && this.menu[within](e)) return true; return false; }
l1O1 = function() {
    return this.text
}
;
oO0O0 = function($) {
    this.iconCls = $;
    this[doUpdate]()
}
;
lolll = function() {
    return this.iconCls
}
;
Ol110 = function($) {
    this[iconStyle] = $;
    this[doUpdate]()
}
;
l011o = function() {
    return this[iconStyle]
}
;
O1OOl = function($) {
    this.iconPosition = "left";
    this[doUpdate]()
}
;
l00o = function() {
    return this.iconPosition
}
;
OO010 = function($) {
    this.plain = $;
    if ($)
        this[addCls](this.l01o);
    else
        this[removeCls](this.l01o)
}
;
O0llo = function() {
    return this.plain
}
;
l0l1O = function($) {
    this[groupName] = $
}
;
o0lOl = function() {
    return this[groupName]
}
;
olOO0 = function($) {
    this[checkOnClick] = $
}
;
O10l = function() {
    return this[checkOnClick]
}
;
O1O10 = function($) {
    var _ = this.checked != $;
    this.checked = $;
    if ($)
        this[addCls](this.l1OlOO);
    else
        this[removeCls](this.l1OlOO);
    if (_)
        this[fire]("CheckedChanged")
}
;
oll10 = function() {
    return this.checked
}
;
O1l1oO = function() {
    this.o0O0lo(null )
}
;
l11l0 = function(D) {
    if (this[readOnly] || this.enabled == false)
        return;
    this[focus]();
    if (this[checkOnClick])
        if (this[groupName]) {
            var _ = this[groupName]
              , C = mini.findControls(function($) {
                if ($.type == "button" && $[groupName] == _)
                    return true
            }
            );
            if (C.length > 0) {
                for (var $ = 0, A = C.length; $ < A; $++) {
                    var B = C[$];
                    if (B != this)
                        B[setChecked](false)
                }
                this[setChecked](true)
            } else
                this[setChecked](!this.checked)
        } else
            this[setChecked](!this.checked);
    this[fire]("click", {
        htmlEvent: D
    });
    return false
}
;
o0O1o = function($) {
    if (this[isReadOnly]())
        return;
    this[addCls](this.oooO1O);
    l1Oo0O(document, "mouseup", this.oOo10, this)
}
;
OOOoO = function($) {
    this[removeCls](this.oooO1O);
    O1l0(document, "mouseup", this.oOo10, this)
}
;
ooo1l = function(_, $) {
    this[on]("click", _, $)
}
;
l0110 = function($) {
    var _ = mini.Button[superclass][getAttrs][call](this, $);
    _.text = $.innerHTML;
    mini[_ParseString]($, _, ["text", "href", "iconCls", "iconStyle", "iconPosition", "groupName", "menu", "onclick", "oncheckedchanged", "target"]);
    mini[_ParseBool]($, _, ["plain", "checkOnClick", "checked"]);
    return _
}
;
;l1O0l=function (value) {if (typeof value == "string") {var el = ooO0(value); if (!el) return; mini.parse(value); value = mini.get(value); } if (value) {this[bindPager](value); } }
OOo0 = function($) {
    if (this.grid) {
        this.grid[un]("rowclick", this.__OnGridRowClickChanged, this);
        this.grid[un]("load", this.Ol101o, this);
        this.grid = null 
    }
    mini.Lookup[superclass][destroy][call](this, $)
}
;
oO11 = function($) {
    this[multiSelect] = $;
    if (this.grid)
        this.grid[setMultiSelect]($)
}
;
lo1lo = function($) {
    if (typeof $ == "string") {
        mini.parse($);
        $ = mini.get($)
    }
    this.grid = mini.getAndCreate($);
    if (this.grid) {
        this.grid[setMultiSelect](this[multiSelect]);
        this.grid[setCheckSelectOnLoad](false);
        this.grid[on]("rowclick", this.__OnGridRowClickChanged, this);
        this.grid[on]("load", this.Ol101o, this);
        this.grid[on]("checkall", this.__OnGridRowClickChanged, this)
    }
}
;
lOloOo = function() {
    return this.grid
}
;
O0OO0Field = function($) {
    this[valueField] = $
}
;
l11O1 = function() {
    return this[valueField]
}
;
O0001Field = function($) {
    this[textField] = $
}
;
oOoO1 = function() {
    return this[textField]
}
;
olO1o = function() {
    this.data = [];
    this[setValue]("");
    this[setText]("");
    if (this.grid)
        this.grid[deselectAll]()
}
;
o1OO0 = function($) {
    return String($[this.valueField])
}
;
O1lo1 = function($) {
    var _ = $[this.textField];
    return mini.isNull(_) ? "" : String(_)
}
;
o0100 = function(A) {
    if (mini.isNull(A))
        A = [];
    var B = []
      , C = [];
    for (var _ = 0, D = A.length; _ < D; _++) {
        var $ = A[_];
        if ($) {
            B.push(this[getItemValue]($));
            C.push(this[getItemText]($))
        }
    }
    return [B.join(this.delimiter), C.join(this.delimiter)]
}
;
lo11o1 = function() {
    if (typeof this.value != "string")
        this.value = "";
    if (typeof this.text != "string")
        this.text = "";
    var D = []
      , C = this.value.split(this.delimiter)
      , E = this.text.split(this.delimiter)
      , $ = C.length;
    if (this.value)
        for (var _ = 0, F = $; _ < F; _++) {
            var B = {}
              , G = C[_]
              , A = E[_];
            B[this.valueField] = G ? G : "";
            B[this.textField] = A ? A : "";
            D.push(B)
        }
    this.data = D
}
;
o0o0O = function(A) {
    var D = {};
    for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$]
          , C = _[this.valueField];
        D[C] = _
    }
    return D
}
;
O0OO0 = function($) {
    mini.Lookup[superclass][setValue][call](this, $);
    this.OOo1oo()
}
;
O0001 = function($) {
    mini.Lookup[superclass][setText][call](this, $);
    this.OOo1oo()
}
;
l0oO = function(G) {
    var B = this.OllO0(this.grid[getData]())
      , C = this.OllO0(this.grid[getSelecteds]())
      , F = this.OllO0(this.data);
    if (this[multiSelect] == false) {
        F = {};
        this.data = []
    }
    var A = {};
    for (var E in F) {
        var $ = F[E];
        if (B[E])
            if (C[E])
                ;
            else
                A[E] = $
    }
    for (var _ = this.data.length - 1; _ >= 0; _--) {
        $ = this.data[_],
        E = $[this.valueField];
        if (A[E])
            this.data.removeAt(_)
    }
    for (E in C) {
        $ = C[E];
        if (!F[E])
            this.data.push($)
    }
    var D = this.o0ol(this.data);
    this[setValue](D[0]);
    this[setText](D[1]);
    this.Ollll()
}
;
O1lO1 = function($) {
    this[__OnShowPopup]($)
}
;
ll000 = function(H) {
    var C = String(this.value).split(this.delimiter)
      , F = {};
    for (var $ = 0, D = C.length; $ < D; $++) {
        var G = C[$];
        F[G] = 1
    }
    var A = this.grid[getData]()
      , B = [];
    for ($ = 0,
    D = A.length; $ < D; $++) {
        var _ = A[$]
          , E = _[this.valueField];
        if (F[E])
            B.push(_)
    }
    this.grid[selects](B)
}
;
;o1oOO=function () {return this.showHeader ? lOl10(this.l10OO) :0; }
O100O0 = function() {
    mini.Lookup[superclass][doUpdate][call](this);
    this.ll1l1O[readOnly] = true;
    this.el.style.cursor = "default"
}
;
l00l0 = function($) {
    mini.Lookup[superclass].lOo101[call](this, $);
    switch ($.keyCode) {
    case 46:
    case 8:
        break;
    case 37:
        break;
    case 39:
        break
    }
}
;
oO0ooo = function(C) {
    if (this[isReadOnly]())
        return;
    var _ = mini.getSelectRange(this.ll1l1O)
      , A = _[0]
      , B = _[1]
      , $ = this.oooOo(A)
}
;
l1ol0 = function(E) {
    var _ = -1;
    if (this.text == "")
        return _;
    var C = String(this.text).split(this.delimiter)
      , $ = 0;
    for (var A = 0, D = C.length; A < D; A++) {
        var B = C[A];
        if ($ < E && E <= $ + B.length) {
            _ = A;
            break
        }
        $ = $ + B.length + 1
    }
    return _
}
;
lOl01 = function($) {
    var _ = mini.Lookup[superclass][getAttrs][call](this, $);
    mini[_ParseString]($, _, ["grid", "valueField", "textField"]);
    mini[_ParseBool]($, _, ["multiSelect"]);
    return _
}
;
;loO0l=function () {return this[checkOnClick]; }
lO0O = function() {
    mini.Window[superclass][_create][call](this)
}
;
oollO = function() {
    this.buttons = [];
    var A = this[createButton]({
        name: "close",
        cls: "mini-tools-close",
        visible: this[showCloseButton]
    });
    this.buttons.push(A);
    var B = this[createButton]({
        name: "max",
        cls: "mini-tools-max",
        visible: this[showMaxButton]
    });
    this.buttons.push(B);
    var _ = this[createButton]({
        name: "min",
        cls: "mini-tools-min",
        visible: this[showMinButton]
    });
    this.buttons.push(_);
    var $ = this[createButton]({
        name: "collapse",
        cls: "mini-tools-collapse",
        visible: this[showCollapseButton]
    });
    this.buttons.push($)
}
;
oOoo0 = function() {
    mini.Window[superclass][_initEvents][call](this);
    l00l(function() {
        l1Oo0O(this.el, "mouseover", this.ol0OOo, this);
        l1Oo0O(window, "resize", this.lo0O, this);
        l1Oo0O(this.el, "mousedown", this.lO0oO, this)
    }
    , this)
}
;
o0OO1O = function() {
    if (!this[canLayout]())
        return;
    if (this.state == "max") {
        var $ = this[getParentBox]();
        this.el.style.left = "0px";
        this.el.style.top = "0px";
        mini.setSize(this.el, $.width, $.height)
    }
    mini.Window[superclass][doLayout][call](this);
    if (this.allowDrag)
        O0Oo0(this.el, this.llOolO);
    if (this.state == "max") {
        this.ll1lo.style.display = "none";
        Ol00(this.el, this.llOolO)
    }
    this.Oo0olO()
}
;
o1o1l = function() {
    var A = this[showModal] && this[isDisplay]() && this.visible;
    if (!this.o11o00 && this[showModal] == false)
        return;
    if (!this.o11o00)
        this.o11o00 = mini.append(document.body, "<div class=\"mini-modal\" style=\"display:none\"></div>");
    function $() {
        mini[repaint](document.body);
        var $ = document.documentElement
          , B = parseInt(Math[max](document.body.scrollWidth, $ ? $.scrollWidth : 0))
          , E = parseInt(Math[max](document.body.scrollHeight, $ ? $.scrollHeight : 0))
          , D = mini.getViewportBox()
          , C = D.height;
        if (C < E)
            C = E;
        var _ = D.width;
        if (_ < B)
            _ = B;
        this.o11o00.style.display = A ? "block" : "none";
        this.o11o00.style.height = C + "px";
        this.o11o00.style.width = _ + "px";
        this.o11o00.style.zIndex = O100(this.el, "zIndex") - 1
    }
    if (A) {
        var _ = this;
        setTimeout(function() {
            if (_.o11o00) {
                _.o11o00.style.display = "none";
                $[call](_)
            }
        }
        , 1)
    } else
        this.o11o00.style.display = "none"
}
;
oOOO1 = function() {
    var $ = mini.getViewportBox()
      , _ = this.o0loO || document.body;
    if (_ != document.body)
        $ = OOl1o0(_);
    return $
}
;
ollo = function($) {
    this[showModal] = $
}
;
OO11 = function() {
    return this[showModal]
}
;
O0lO0 = function($) {
    if (isNaN($))
        return;
    this.minWidth = $
}
;
o1O00 = function() {
    return this.minWidth
}
;
lO000 = function($) {
    if (isNaN($))
        return;
    this.minHeight = $
}
;
looOl = function() {
    return this.minHeight
}
;
lOlo00 = function($) {
    if (isNaN($))
        return;
    this.maxWidth = $
}
;
o0Oo1 = function() {
    return this.maxWidth
}
;
o0OO = function($) {
    if (isNaN($))
        return;
    this.maxHeight = $
}
;
oo101l = function() {
    return this.maxHeight
}
;
;Ol0O0=function (index,value) {var pane = this[getPane](index); if (!pane) return; var el = this[getPaneEl](index); __mini_setControls(value,el,this); }
lO0o0 = function($) {
    this.allowDrag = $;
    Ol00(this.el, this.llOolO);
    if ($)
        O0Oo0(this.el, this.llOolO)
}
;
loO1 = function() {
    return this.allowDrag
}
;
oOl1l0 = function($) {
    this[showMaxButton] = $;
    var _ = this[getButton]("max");
    _.visible = $;
    this[_doTools]()
}
;
o1010l = function() {
    return this[showMaxButton]
}
;
o011o = function($) {
    this[showMinButton] = $;
    var _ = this[getButton]("min");
    _.visible = $;
    this[_doTools]()
}
;
l0O1o = function() {
    return this[showMinButton]
}
;
oool0 = function() {
    this.state = "max";
    this[show]();
    var $ = this[getButton]("max");
    if ($) {
        $.cls = "mini-tools-restore";
        this[_doTools]()
    }
}
;
lO1l = function() {
    this.state = "restore";
    this[show](this.x, this.y);
    var $ = this[getButton]("max");
    if ($) {
        $.cls = "mini-tools-max";
        this[_doTools]()
    }
}
;
ll1lAtPos = function(_, $, A) {
    this[show](_, $, A)
}
;
ll1l = function(B, _, D) {
    this.ool11 = false;
    var A = this.o0loO || document.body;
    if (!this[isRender]() || this.el.parentNode != A)
        this[render](A);
    this.el.style.zIndex = mini.getMaxZIndex();
    this.o00oo(B, _);
    this.ool11 = true;
    this[setVisible](true);
    if (this.state != "max") {
        var $ = this[getBox]();
        this.x = $.x;
        this.y = $.y
    }
    try {
        this.el[focus]()
    } catch (C) {}
}
;
l1ll01 = function() {
    this[setVisible](false);
    this.Oo0olO()
}
;
OO0O = function() {
    this.l10OO.style.width = "50px";
    var $ = o110O(this.el);
    this.l10OO.style.width = "auto";
    return $
}
;
lOO0ol = function() {
    this.l10OO.style.width = "50px";
    this.el.style.display = "";
    var $ = o110O(this.el);
    this.l10OO.style.width = "auto";
    var _ = OOl1o0(this.el);
    _.width = $;
    _.right = _.x + $;
    return _
}
;
OO01o = function() {
    var $ = this[getBox]();
    if ($.width > this.maxWidth) {
        oO1Ol(this.el, this.maxWidth);
        $ = this[getBox]()
    }
    if ($.height > this.maxHeight) {
        OO01(this.el, this.maxHeight);
        $ = this[getBox]()
    }
    if ($.width < this.minWidth) {
        oO1Ol(this.el, this.minWidth);
        $ = this[getBox]()
    }
    if ($.height < this.minHeight) {
        OO01(this.el, this.minHeight);
        $ = this[getBox]()
    }
}
;
OlOo1 = function(B, A) {
    var _ = this[getParentBox]();
    if (this.state == "max") {
        if (!this._width) {
            var $ = this[getBox]();
            this._width = $.width;
            this._height = $.height;
            this.x = $.x;
            this.y = $.y
        }
    } else {
        if (mini.isNull(B))
            B = "center";
        if (mini.isNull(A))
            A = "middle";
        this.el.style.position = "absolute";
        this.el.style.left = "-2000px";
        this.el.style.top = "-2000px";
        this.el.style.display = "";
        if (this._width) {
            this[setWidth](this._width);
            this[setHeight](this._height)
        }
        this.l001();
        $ = this[getBox]();
        if (B == "left")
            B = 0;
        if (B == "center")
            B = _.width / 2 - $.width / 2;
        if (B == "right")
            B = _.width - $.width;
        if (A == "top")
            A = 0;
        if (A == "middle")
            A = _.y + _.height / 2 - $.height / 2;
        if (A == "bottom")
            A = _.height - $.height;
        if (B + $.width > _.right)
            B = _.right - $.width;
        if (A + $.height > _.bottom)
            A = _.bottom - $.height;
        if (B < 0)
            B = 0;
        if (A < 0)
            A = 0;
        this.el.style.display = "";
        mini.setX(this.el, B);
        mini.setY(this.el, A);
        this.el.style.left = B + "px";
        this.el.style.top = A + "px"
    }
    this[doLayout]()
}
;
lo0o0 = function(_, $) {
    var A = mini.Window[superclass].llloO[call](this, _, $);
    if (A.cancel == true)
        return A;
    if (A.name == "max")
        if (this.state == "max")
            this[restore]();
        else
            this[max]();
    return A
}
;
;o0Oo0=function (fn,scope) {this[on]("checkedchanged",fn,scope); }
O0Ool = function($) {
    if (this.state == "max")
        this[doLayout]();
    if (!mini.isIE6)
        this.Oo0olO()
}
;
lOooo = function(B) {
    if (this.el)
        this.el.style.zIndex = mini.getMaxZIndex();
    var _ = this;
    if (this.state != "max" && this.allowDrag && l1oooo(this.l10OO, B.target) && !llOo(B.target, "mini-tools")) {
        var _ = this
          , A = this[getBox]()
          , $ = new mini.Drag({
            capture: false,
            onStart: function() {
                _.o110Ol = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
                _.OO0loo = mini.append(document.body, "<div class=\"mini-drag-proxy\"></div>");
                _.el.style.display = "none"
            },
            onMove: function(B) {
                var F = B.now[0] - B.init[0]
                  , E = B.now[1] - B.init[1];
                F = A.x + F;
                E = A.y + E;
                var D = _[getParentBox]()
                  , $ = F + A.width
                  , C = E + A.height;
                if ($ > D.width)
                    F = D.width - A.width;
                if (F < 0)
                    F = 0;
                if (E < 0)
                    E = 0;
                _.x = F;
                _.y = E;
                var G = {
                    x: F,
                    y: E,
                    width: A.width,
                    height: A.height
                };
                oO11Oo(_.OO0loo, G);
                this.moved = true
            },
            onStop: function() {
                _.el.style.display = "block";
                if (this.moved) {
                    var $ = OOl1o0(_.OO0loo);
                    mini[setXY](_.el, $.x, $.y)
                }
                jQuery(_.o110Ol).remove();
                _.o110Ol = null ;
                jQuery(_.OO0loo).remove();
                _.OO0loo = null 
            }
        });
        $.start(B)
    }
}
;
oOOol = function($) {
    O1l0(window, "resize", this.lo0O, this);
    if (this.o11o00) {
        jQuery(this.o11o00).remove();
        this.o11o00 = null 
    }
    if (this.shadowEl) {
        jQuery(this.shadowEl).remove();
        this.shadowEl = null 
    }
    mini.Window[superclass][destroy][call](this, $)
}
;
o1oo1 = function($) {
    var _ = mini.Window[superclass][getAttrs][call](this, $);
    mini[_ParseString]($, _, ["modalStyle"]);
    mini[_ParseBool]($, _, ["showModal", "showShadow", "allowDrag", "allowResize", "showMaxButton", "showMinButton"]);
    mini[_ParseInt]($, _, ["minWidth", "minHeight", "maxWidth", "maxHeight"]);
    return _
}
;
oOl10 = function(H, D) {
    H = ooO0(H);
    if (!H)
        return;
    if (!this[isRender]() || this.el.parentNode != document.body)
        this[render](document.body);
    var A = {
        xAlign: this.xAlign,
        yAlign: this.yAlign,
        xOffset: 0,
        yOffset: 0,
        popupCls: this.popupCls
    };
    mini.copyTo(A, D);
    this._popupEl = H;
    this.el.style.position = "absolute";
    this.el.style.left = "-2000px";
    this.el.style.top = "-2000px";
    this.el.style.display = "";
    this[doLayout]();
    this.l001();
    var J = mini.getViewportBox()
      , B = this[getBox]()
      , L = OOl1o0(H)
      , F = A.xy
      , C = A.xAlign
      , E = A.yAlign
      , M = J.width / 2 - B.width / 2
      , K = 0;
    if (F) {
        M = F[0];
        K = F[1]
    }
    switch (A.xAlign) {
    case "outleft":
        M = L.x - B.width;
        break;
    case "left":
        M = L.x;
        break;
    case "center":
        M = L.x + L.width / 2 - B.width / 2;
        break;
    case "right":
        M = L.right - B.width;
        break;
    case "outright":
        M = L.right;
        break;
    default:
        break
    }
    switch (A.yAlign) {
    case "above":
        K = L.y - B.height;
        break;
    case "top":
        K = L.y;
        break;
    case "middle":
        K = L.y + L.height / 2 - B.height / 2;
        break;
    case "bottom":
        K = L.bottom - B.height;
        break;
    case "below":
        K = L.bottom;
        break;
    default:
        break
    }
    M = parseInt(M);
    K = parseInt(K);
    if (A.outYAlign || A.outXAlign) {
        if (A.outYAlign == "above")
            if (K + B.height > J.bottom) {
                var _ = L.y - J.y
                  , I = J.bottom - L.bottom;
                if (_ > I)
                    K = L.y - B.height
            }
        if (A.outXAlign == "outleft")
            if (M + B.width > J.right) {
                var G = L.x - J.x
                  , $ = J.right - L.right;
                if (G > $)
                    M = L.x - B.width
            }
        if (A.outXAlign == "right")
            if (M + B.width > J.right)
                M = L.right - B.width;
        this.l001ol(M, K)
    } else
        this[showAtPos](M + A.xOffset, K + A.yOffset)
}
;
l0o0o = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-layout";
    this.el.innerHTML = "<div class=\"mini-layout-border\"></div>";
    this.oO0o1l = this.el.firstChild;
    this[doUpdate]()
}
;
O10lo = function() {
    l00l(function() {
        l1Oo0O(this.el, "click", this.o0O0lo, this);
        l1Oo0O(this.el, "mousedown", this.ol1Ol, this);
        l1Oo0O(this.el, "mouseover", this.ol0OOo, this);
        l1Oo0O(this.el, "mouseout", this.o1oo0, this);
        l1Oo0O(document, "mousedown", this.Olo0ll, this)
    }
    , this)
}
;
olOOoEl = function($) {
    var $ = this[getRegion]($);
    if (!$)
        return null ;
    return $._el
}
;
olOOoHeaderEl = function($) {
    var $ = this[getRegion]($);
    if (!$)
        return null ;
    return $._header
}
;
olOOoBodyEl = function($) {
    var $ = this[getRegion]($);
    if (!$)
        return null ;
    return $._body
}
;
olOOoSplitEl = function($) {
    var $ = this[getRegion]($);
    if (!$)
        return null ;
    return $._split
}
;
olOOoProxyEl = function($) {
    var $ = this[getRegion]($);
    if (!$)
        return null ;
    return $._proxy
}
;
olOOoBox = function(_) {
    var $ = this[getRegionEl](_);
    if ($)
        return OOl1o0($);
    return null 
}
;
olOOo = function($) {
    if (typeof $ == "string")
        return this.regionMap[$];
    return $
}
;
lOl11 = function(_, B) {
    var D = _.buttons;
    for (var $ = 0, A = D.length; $ < A; $++) {
        var C = D[$];
        if (C.name == B)
            return C
    }
}
;
;o001l=function (value) {this.iconPosition = value; this[_doUpdateIcon](); }
oloo0 = function(_) {
    var $ = mini.copyTo({
        region: "",
        title: "",
        iconCls: "",
        iconStyle: "",
        showCloseButton: false,
        showCollapseButton: true,
        buttons: [{
            name: "close",
            cls: "mini-tools-close",
            html: "",
            visible: false
        }, {
            name: "collapse",
            cls: "mini-tools-collapse",
            html: "",
            visible: true
        }],
        showSplitIcon: false,
        showSplit: true,
        showHeader: true,
        splitSize: this.splitSize,
        collapseSize: this.collapseWidth,
        width: this.regionWidth,
        height: this.regionHeight,
        minWidth: this.regionMinWidth,
        minHeight: this.regionMinHeight,
        maxWidth: this.regionMaxWidth,
        maxHeight: this.regionMaxHeight,
        allowResize: true,
        cls: "",
        style: "",
        headerCls: "",
        headerStyle: "",
        bodyCls: "",
        bodyStyle: "",
        visible: true,
        expanded: true
    }, _);
    return $
}
;
O00010 = function($) {
    var $ = this[getRegion]($);
    if (!$)
        return;
    mini.append(this.oO0o1l, "<div id=\"" + $.region + "\" class=\"mini-layout-region\"><div class=\"mini-layout-region-header\" style=\"" + $.headerStyle + "\"></div><div class=\"mini-layout-region-body\" style=\"" + $.bodyStyle + "\"></div></div>");
    $._el = this.oO0o1l.lastChild;
    $._header = $._el.firstChild;
    $._body = $._el.lastChild;
    if ($.cls)
        O0Oo0($._el, $.cls);
    if ($.style)
        O1lo11($._el, $.style);
    O0Oo0($._el, "mini-layout-region-" + $.region);
    if ($.region != "center") {
        mini.append(this.oO0o1l, "<div uid=\"" + this.uid + "\" id=\"" + $.region + "\" class=\"mini-layout-split\"><div class=\"mini-layout-spliticon\"></div></div>");
        $._split = this.oO0o1l.lastChild;
        O0Oo0($._split, "mini-layout-split-" + $.region)
    }
    if ($.region != "center") {
        mini.append(this.oO0o1l, "<div id=\"" + $.region + "\" class=\"mini-layout-proxy\"></div>");
        $._proxy = this.oO0o1l.lastChild;
        O0Oo0($._proxy, "mini-layout-proxy-" + $.region)
    }
}
;
OOOl0 = function(A, $) {
    var A = this[getRegion](A);
    if (!A)
        return;
    var _ = this[getRegionBodyEl](A);
    __mini_setControls($, _, this)
}
;
oO0l = function(A) {
    if (!mini.isArray(A))
        return;
    for (var $ = 0, _ = A.length; $ < _; $++)
        this[addRegion](A[$])
}
;
lO0lo = function(D, $) {
    var G = D;
    D = this.O0o0o0(D);
    if (!D.region)
        D.region = "center";
    D.region = D.region.toLowerCase();
    if (D.region == "center" && G && !G.showHeader)
        D.showHeader = false;
    if (D.region == "north" || D.region == "south")
        if (!G.collapseSize)
            D.collapseSize = this.collapseHeight;
    this.OOOl(D);
    if (typeof $ != "number")
        $ = this.regions.length;
    var A = this.regionMap[D.region];
    if (A)
        return;
    this.regions.insert($, D);
    this.regionMap[D.region] = D;
    this.o0lO(D);
    var B = this[getRegionBodyEl](D)
      , C = D.body;
    delete D.body;
    if (C) {
        if (!mini.isArray(C))
            C = [C];
        for (var _ = 0, F = C.length; _ < F; _++)
            mini.append(B, C[_])
    }
    if (D.bodyParent) {
        var E = D.bodyParent;
        while (E.firstChild)
            B.appendChild(E.firstChild)
    }
    delete D.bodyParent;
    if (D.controls) {
        this[setRegionControls](D, D.controls);
        delete D.controls
    }
    this[doUpdate]()
}
;
O101l = function($) {
    var $ = this[getRegion]($);
    if (!$)
        return;
    this.regions.remove($);
    delete this.regionMap[$.region];
    jQuery($._el).remove();
    jQuery($._split).remove();
    jQuery($._proxy).remove();
    this[doUpdate]()
}
;
o1o0O = function(A, $) {
    var A = this[getRegion](A);
    if (!A)
        return;
    var _ = this.regions[$];
    if (!_ || _ == A)
        return;
    this.regions.remove(A);
    var $ = this.region[indexOf](_);
    this.regions.insert($, A);
    this[doUpdate]()
}
;
o00Oo = function($) {
    var _ = this.OO100($, "close");
    _.visible = $[showCloseButton];
    _ = this.OO100($, "collapse");
    _.visible = $[showCollapseButton];
    if ($.width < $.minWidth)
        $.width = mini.minWidth;
    if ($.width > $.maxWidth)
        $.width = mini.maxWidth;
    if ($.height < $.minHeight)
        $.height = mini.minHeight;
    if ($.height > $.maxHeight)
        $.height = mini.maxHeight
}
;
oO111 = function($, _) {
    $ = this[getRegion]($);
    if (!$)
        return;
    if (_)
        delete _.region;
    mini.copyTo($, _);
    this.OOOl($);
    this[doUpdate]()
}
;
;O11o1=function () {return this.checked; }
lOl1l = function($) {
    $ = this[getRegion]($);
    if (!$)
        return;
    $.expanded = true;
    this[doUpdate]()
}
;
lO1Ol = function($) {
    $ = this[getRegion]($);
    if (!$)
        return;
    $.expanded = false;
    this[doUpdate]()
}
;
l0011 = function($) {
    $ = this[getRegion]($);
    if (!$)
        return;
    if ($.expanded)
        this[collapseRegion]($);
    else
        this[expandRegion]($)
}
;
O0l0Oo = function($) {
    $ = this[getRegion]($);
    if (!$)
        return;
    $.visible = true;
    this[doUpdate]()
}
;
O1o11l = function($) {
    $ = this[getRegion]($);
    if (!$)
        return;
    $.visible = false;
    this[doUpdate]()
}
;
loOo1O = function($) {
    $ = this[getRegion]($);
    if (!$)
        return null ;
    return this.region.expanded
}
;
OOOlo = function($) {
    $ = this[getRegion]($);
    if (!$)
        return null ;
    return this.region.visible
}
;
Oo00 = function($) {
    $ = this[getRegion]($);
    var _ = {
        region: $,
        cancel: false
    };
    if ($.expanded) {
        this[fire]("BeforeCollapse", _);
        if (_.cancel == false)
            this[collapseRegion]($)
    } else {
        this[fire]("BeforeExpand", _);
        if (_.cancel == false)
            this[expandRegion]($)
    }
}
;
o10O1 = function(_) {
    var $ = llOo(_.target, "mini-layout-proxy");
    return $
}
;
Ol1l01 = function(_) {
    var $ = llOo(_.target, "mini-layout-region");
    return $
}
;
lO1Oo = function(D) {
    if (this.OO1oOO)
        return;
    var A = this.llOOO0(D);
    if (A) {
        var _ = A.id
          , C = llOo(D.target, "mini-tools-collapse");
        if (C)
            this.Oll0(_);
        else
            this.ll0lo(_)
    }
    var B = this.ll00O(D);
    if (B && llOo(D.target, "mini-layout-region-header")) {
        _ = B.id,
        C = llOo(D.target, "mini-tools-collapse");
        if (C)
            this.Oll0(_);
        var $ = llOo(D.target, "mini-tools-close");
        if ($)
            this[updateRegion](_, {
                visible: false
            })
    }
    if (O1O1Oo(D.target, "mini-layout-spliticon")) {
        _ = D.target.parentNode.id;
        this.Oll0(_)
    }
}
;
ol000 = function(_, A, $) {
    this[fire]("buttonclick", {
        htmlEvent: $,
        region: _,
        button: A,
        index: this.buttons[indexOf](A),
        name: A.name
    })
}
;
Ol1o0 = function(_, A, $) {
    this[fire]("buttonmousedown", {
        htmlEvent: $,
        region: _,
        button: A,
        index: this.buttons[indexOf](A),
        name: A.name
    })
}
;
l11Oo = function(_) {
    var $ = this.llOOO0(_);
    if ($) {
        O0Oo0($, "mini-layout-proxy-hover");
        this.hoverProxyEl = $
    }
}
;
OllOo1 = function($) {
    if (this.hoverProxyEl)
        Ol00(this.hoverProxyEl, "mini-layout-proxy-hover");
    this.hoverProxyEl = null 
}
;
o1oO = function(_, $) {
    this[on]("buttonclick", _, $)
}
;
OlOO = function(_, $) {
    this[on]("buttonmousedown", _, $)
}
;
l1loO0 = function() {
    this.el = document.createElement("div")
}
;
lO1o0 = function() {}
;
Olo1o = function($) {
    if (l1oooo(this.el, $.target))
        return true;
    return false
}
;
lo0lll = function($) {
    this.name = $
}
;
oOO11l = function() {
    return this.name
}
;
lo01l = function() {
    var $ = this.el.style.height;
    return $ == "auto" || $ == ""
}
;
O0l1 = function() {
    var $ = this.el.style.width;
    return $ == "auto" || $ == ""
}
;
OlOl0 = function() {
    var $ = this.width
      , _ = this.height;
    if (parseInt($) + "px" == $ && parseInt(_) + "px" == _)
        return true;
    return false
}
;
OO0111 = function($) {
    return !!(this.el && this.el.parentNode && this.el.parentNode.tagName)
}
;
oOo1 = function(_, $) {
    if (typeof _ === "string")
        if (_ == "#body")
            _ = document.body;
        else
            _ = ooO0(_);
    if (!_)
        return;
    if (!$)
        $ = "append";
    $ = $.toLowerCase();
    if ($ == "before")
        jQuery(_).before(this.el);
    else if ($ == "preend")
        jQuery(_).preend(this.el);
    else if ($ == "after")
        jQuery(_).after(this.el);
    else
        _.appendChild(this.el);
    this.el.id = this.id;
    this[doLayout]();
    this[fire]("render")
}
;
Oo0oo = function() {
    return this.el
}
;
oOoO = function($) {
    this[jsName] = $;
    window[$] = this
}
;
loOo = function() {
    return this[jsName]
}
;
looOo0 = function($) {
    this.tooltip = $;
    this.el.title = $
}
;
O1olo = function() {
    return this.tooltip
}
;
;l0lO1=function () {return this[isFrozen]() ? lOl10(this.ol10O) :0; }
O1ooo = function() {
    this[doLayout]()
}
;
o0O00 = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.width = $;
    this.el.style.width = $;
    this[_sizeChaned]()
}
;
Oo0ll = function(_) {
    var $ = _ ? jQuery(this.el).width() : jQuery(this.el).outerWidth();
    if (_ && this.oO0o1l) {
        var A = OOoo(this.oO0o1l);
        $ = $ - A.left - A.right
    }
    return $
}
;
oooll = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.height = $;
    this.el.style.height = $;
    this[_sizeChaned]()
}
;
OOlo = function(_) {
    var $ = _ ? jQuery(this.el).height() : jQuery(this.el).outerHeight();
    if (_ && this.oO0o1l) {
        var A = OOoo(this.oO0o1l);
        $ = $ - A.top - A.bottom
    }
    return $
}
;
Oo1ol = function() {
    return OOl1o0(this.el)
}
;
lloO1 = function($) {
    var _ = this.oO0o1l || this.el;
    O1lo11(_, $);
    this[doLayout]()
}
;
l11l = function() {
    return this[borderStyle]
}
;
l0oll = function($) {
    this.style = $;
    O1lo11(this.el, $);
    if (this._clearBorder)
        this.el.style.borderWidth = "0";
    this.width = this.el.style.width;
    this.height = this.el.style.height;
    this[_sizeChaned]()
}
;
oOO1 = function() {
    return this.style
}
;
o0OO00 = function($) {
    this[addCls]($)
}
;
Oo0000 = function() {
    return this.cls
}
;
o1Oo00 = function($) {
    O0Oo0(this.el, $)
}
;
o0O0O = function($) {
    Ol00(this.el, $)
}
;
llo0o = function() {
    if (this[readOnly])
        this[addCls](this.O1O1O0);
    else
        this[removeCls](this.O1O1O0)
}
;
oo0OO1 = function($) {
    this[readOnly] = $;
    this.lOlllo()
}
;
O1oo1 = function() {
    return this[readOnly]
}
;
ol01Ol = function(A) {
    var $ = document
      , B = this.el.parentNode;
    while (B != $ && B != null ) {
        var _ = mini.get(B);
        if (_) {
            if (!mini.isControl(_))
                return null ;
            if (!A || _.uiCls == A)
                return _
        }
        B = B.parentNode
    }
    return null 
}
;
lO0oo = function() {
    if (this[readOnly] || !this.enabled)
        return true;
    var $ = this[getParent]();
    if ($)
        return $[isReadOnly]();
    return false
}
;
l1lOo = function($) {
    this.enabled = $;
    if (this.enabled)
        this[removeCls](this.Oollo0);
    else
        this[addCls](this.Oollo0);
    this.lOlllo()
}
;
oo0ooo = function() {
    return this.enabled
}
;
l0olo = function() {
    this[setEnabled](true)
}
;
O10l1 = function() {
    this[setEnabled](false)
}
;
oo0OOo = function($) {
    this.visible = $;
    if (this.el) {
        this.el.style.display = $ ? this.oOo11l : "none";
        this[doLayout]()
    }
}
;
o1lO1 = function() {
    return this.visible
}
;
Ol001 = function() {
    this[setVisible](true)
}
;
;OOO11=function (index) {var pane = this[getPane](index); if (!pane) return; pane.visible = true; this[doUpdate](); }
l0l1o = function() {
    this[setVisible](false)
}
;
lolO1 = function() {
    if (olo11o == false)
        return false;
    var $ = document.body
      , _ = this.el;
    while (1) {
        if (_ == null  || !_.style)
            return false;
        if (_ && _.style && _.style.display == "none")
            return false;
        if (_ == $)
            return true;
        _ = _.parentNode
    }
    return true
}
;
OOO0o0 = function() {
    this.O1l1O1 = false
}
;
ol10ol = function() {
    this.O1l1O1 = true;
    this[doUpdate]()
}
;
o0lo0 = function() {}
;
;OlOl1=function (value) {this.text = value; if (this.ll1l1O) this.ll1l1O.innerHTML = this.text; }
lOlOl = function() {
    if (this.ool11 == false)
        return false;
    return this[isDisplay]()
}
;
ol1O0 = function() {}
;
O0O01 = function() {
    if (this[canLayout]() == false)
        return;
    this[doLayout]()
}
;
OOl0l1 = function(B) {
    if (this.el) {
        var A = mini.getChildControls(this);
        for (var $ = 0, C = A.length; $ < C; $++) {
            var _ = A[$];
            _[destroy](B)
        }
    }
}
;
o000l = function(_) {
    this[_destroyChildren](_);
    if (this.el) {
        mini[clearEvent](this.el);
        if (_ !== false) {
            var $ = this.el.parentNode;
            if ($)
                $.removeChild(this.el)
        }
    }
    this.oO0o1l = null ;
    this.el = null ;
    mini["unreg"](this);
    this[fire]("destroy")
}
;
ol0lO = function() {
    try {
        var $ = this;
        $.el[focus]()
    } catch (_) {}
}
;
Ool0l = function() {
    try {
        var $ = this;
        $.el[blur]()
    } catch (_) {}
}
;
loOl = function($) {
    this.allowAnim = $
}
;
l1ooO = function() {
    return this.allowAnim
}
;
lo1o0l = function() {
    return this.el
}
;
l1l11 = function($) {
    if (typeof $ == "string")
        $ = {
            html: $
        };
    $ = $ || {};
    $.el = this.lO10OO();
    if (!$.cls)
        $.cls = this.oo10O;
    mini[mask]($)
}
;
oo00O = function() {
    mini[unmask](this.lO10OO())
}
;
Ol01o = function($) {
    this[mask]($ || this.loadingMsg)
}
;
ooOo1l = function($) {
    this.loadingMsg = $
}
;
lo01l0 = function() {
    return this.loadingMsg
}
;
ooolO = function($) {
    var _ = $;
    if (typeof $ == "string") {
        _ = mini.get($);
        if (!_) {
            mini.parse($);
            _ = mini.get($)
        }
    } else if (mini.isArray($))
        _ = {
            type: "menu",
            items: $
        };
    else if (!mini.isControl($))
        _ = mini.create($);
    return _
}
;
o0oll = function(_) {
    var $ = {
        popupEl: this.el,
        htmlEvent: _,
        cancel: false
    };
    this[contextMenu][fire]("BeforeOpen", $);
    if ($.cancel == true)
        return;
    this[contextMenu][fire]("opening", $);
    if ($.cancel == true)
        return;
    this[contextMenu][showAtPos](_.pageX, _.pageY);
    this[contextMenu][fire]("Open", $);
    return false
}
;
l010 = function($) {
    var _ = this.lOOo($);
    if (!_)
        return;
    if (this[contextMenu] !== _) {
        this[contextMenu] = _;
        this[contextMenu].owner = this;
        l1Oo0O(this.el, "contextmenu", this.Ol1o, this)
    }
}
;
oOlO = function() {
    return this[contextMenu]
}
;
;ll1lOO=function (start,end) {if (start > end) {var t = start; start = end; end = t; } var data = this.data; var range = []; for (var i = start,l = end; i <= l; i++) {var o = data[i]; range.push(o); } return range; }
o01Oo = function($) {
    this[defaultValue] = $
}
;
oo0o0 = function() {
    return this[defaultValue]
}
;
loo1o = function($) {
    this.value = $
}
;
Ol00l = function() {
    return this.value
}
;
ll1O0l = function($) {}
;
OoO1l = function($) {
    this.dataField = $
}
;
Ool1o = function() {
    return this.dataField
}
;
OoO00l = function(el) {
    var attrs = {}
      , cls = el.className;
    if (cls)
        attrs.cls = cls;
    if (el.value)
        attrs.value = el.value;
    mini[_ParseString](el, attrs, ["id", "name", "width", "height", "borderStyle", "value", "defaultValue", "contextMenu", "tooltip", "ondestroy", "data-options", "dataField"]);
    mini[_ParseBool](el, attrs, ["visible", "enabled", "readOnly"]);
    if (el[readOnly] && el[readOnly] != "false")
        attrs[readOnly] = true;
    var style = el.style.cssText;
    if (style)
        attrs.style = style;
    if (isIE9) {
        var bg = el.style.background;
        if (bg) {
            if (!attrs.style)
                attrs.style = "";
            attrs.style += ";background:" + bg
        }
    }
    if (this.style)
        if (attrs.style)
            attrs.style = this.style + ";" + attrs.style;
        else
            attrs.style = this.style;
    if (this[borderStyle])
        if (attrs[borderStyle])
            attrs[borderStyle] = this[borderStyle] + ";" + attrs[borderStyle];
        else
            attrs[borderStyle] = this[borderStyle];
    var ts = mini._attrs;
    if (ts)
        for (var i = 0, l = ts.length; i < l; i++) {
            var t = ts[i]
              , name = t[0]
              , type = t[1];
            if (!type)
                type = "string";
            if (type == "string")
                mini[_ParseString](el, attrs, [name]);
            else if (type == "bool")
                mini[_ParseBool](el, attrs, [name]);
            else if (type == "int")
                mini[_ParseInt](el, attrs, [name])
        }
    var options = attrs["data-options"];
    if (options) {
        options = eval("(" + options + ")");
        if (options)
            mini.copyTo(attrs, options)
    }
    return attrs
}
;
;ll1l1=function () {this.pane1 = {id:"",index:1,minSize:30,maxSize:3000,size:'',showCollapseButton:false,cls:"",style:"",visible:true,expanded:true }; this.pane2 = mini.copyTo({},this.pane1); this.pane2.index = 2; }
OlO11 = function() {
    var $ = "<input  type=\"" + this.type + "\" class=\"mini-textbox-input\" autocomplete=\"off\"/>";
    if (this.type == "textarea")
        $ = "<textarea  class=\"mini-textbox-input\" autocomplete=\"off\"/></textarea>";
    $ = "<span class=\"mini-textbox-border\">" + $ + "</span>";
    $ += "<input type=\"hidden\"/>";
    this.el = document.createElement("span");
    this.el.className = "mini-textbox";
    this.el.innerHTML = $;
    this.oO0o1l = this.el.firstChild;
    this.ll1l1O = this.oO0o1l.firstChild;
    this.oOoll = this.oO0o1l.lastChild;
    this.OlO1O()
}
;
OO001l = function() {
    l00l(function() {
        O0l10(this.ll1l1O, "drop", this.lOOo01, this);
        O0l10(this.ll1l1O, "change", this.lo00, this);
        O0l10(this.ll1l1O, "focus", this.o0O010, this);
        O0l10(this.el, "mousedown", this.ol1Ol, this);
        var $ = this.value;
        this.value = null ;
        this[setValue]($)
    }
    , this);
    this[on]("validation", this.o10oO, this)
}
;
o1011 = function() {
    if (this.lll1O1)
        return;
    this.lll1O1 = true;
    l1Oo0O(this.ll1l1O, "blur", this.oo0oO, this);
    l1Oo0O(this.ll1l1O, "keydown", this.lOo101, this);
    l1Oo0O(this.ll1l1O, "keyup", this.loolOO, this);
    l1Oo0O(this.ll1l1O, "keypress", this.lo1Oo, this)
}
;
O1O1O = function($) {
    if (this.el)
        this.el.onmousedown = null ;
    if (this.ll1l1O) {
        this.ll1l1O.ondrop = null ;
        this.ll1l1O.onchange = null ;
        this.ll1l1O.onfocus = null ;
        mini[clearEvent](this.ll1l1O);
        this.ll1l1O = null 
    }
    if (this.oOoll) {
        mini[clearEvent](this.oOoll);
        this.oOoll = null 
    }
    mini.TextBox[superclass][destroy][call](this, $)
}
;
Ol100 = function() {}
;
o00O1 = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.height = $;
    if (this.type == "textarea") {
        this.el.style.height = $;
        this[doLayout]()
    }
}
;
lOO1 = function($) {
    if (this.name != $) {
        this.name = $;
        if (this.oOoll)
            mini.setAttr(this.oOoll, "name", this.name)
    }
}
;
l0Oool = function($) {
    if ($ === null  || $ === undefined)
        $ = "";
    $ = String($);
    if ($.length > this.maxLength)
        $ = $.substring(0, this.maxLength);
    if (this.value !== $) {
        this.value = $;
        this.oOoll.value = this.ll1l1O.value = $;
        this.OlO1O()
    }
}
;
Oool = function() {
    return this.value
}
;
o00o1 = function() {
    value = this.value;
    if (value === null  || value === undefined)
        value = "";
    return String(value)
}
;
o00l = function($) {
    if (this.allowInput != $) {
        this.allowInput = $;
        this[doUpdate]()
    }
}
;
O1OO1 = function() {
    return this.allowInput
}
;
ooO1 = function() {
    this.ll1l1O.placeholder = this[emptyText];
    if (this[emptyText])
        mini._placeholder(this.ll1l1O)
}
;
Ollo1 = function($) {
    if (this[emptyText] != $) {
        this[emptyText] = $;
        this.OlO1O()
    }
}
;
OO0l1 = function() {
    return this[emptyText]
}
;
ooO1l = function($) {
    this.maxLength = $;
    mini.setAttr(this.ll1l1O, "maxLength", $);
    if (this.type == "textarea" && mini.isIE)
        l1Oo0O(this.ll1l1O, "keypress", this.Ooo1, this)
}
;
o0Oo10 = function($) {
    if (this.ll1l1O.value.length >= this.maxLength)
        $.preventDefault()
}
;
lloo1 = function() {
    return this.maxLength
}
;
o11l0 = function($) {
    if (this[readOnly] != $) {
        this[readOnly] = $;
        this[doUpdate]()
    }
}
;
O01o = function($) {
    if (this.enabled != $) {
        this.enabled = $;
        this[doUpdate]();
        this[_tryValidate]()
    }
}
;
Ooolo = function() {
    if (this.enabled)
        this[removeCls](this.Oollo0);
    else
        this[addCls](this.Oollo0);
    if (this[isReadOnly]() || this.allowInput == false) {
        this.ll1l1O[readOnly] = true;
        O0Oo0(this.el, "mini-textbox-readOnly")
    } else {
        this.ll1l1O[readOnly] = false;
        Ol00(this.el, "mini-textbox-readOnly")
    }
    if (this.required)
        this[addCls](this.O1Olol);
    else
        this[removeCls](this.O1Olol);
    if (this.enabled)
        this.ll1l1O.disabled = false;
    else
        this.ll1l1O.disabled = true
}
;
o0o10 = function() {
    try {
        this.ll1l1O[focus]()
    } catch ($) {}
}
;
OOoo1 = function() {
    try {
        this.ll1l1O[blur]()
    } catch ($) {}
}
;
OOOlO = function() {
    var _ = this;
    function $() {
        try {
            _.ll1l1O[select]()
        } catch ($) {}
    }
    $();
    setTimeout(function() {
        $()
    }
    , 30)
}
;
lOO10 = function() {
    return this.ll1l1O
}
;
OllO1 = function() {
    return this.ll1l1O.value
}
;
l1ll1 = function($) {
    this.selectOnFocus = $
}
;
OlO01 = function($) {
    return this.selectOnFocus
}
;
oo01l = function() {
    if (!this.oO010)
        this.oO010 = mini.append(this.el, "<span class=\"mini-errorIcon\"></span>");
    return this.oO010
}
;
O1O11 = function() {
    if (this.oO010) {
        var $ = this.oO010;
        jQuery($).remove()
    }
    this.oO010 = null 
}
;
OOo0O = function(_) {
    var $ = this;
    if (!l1oooo(this.ll1l1O, _.target))
        setTimeout(function() {
            $[focus]();
            mini[selectRange]($.ll1l1O, 1000, 1000)
        }
        , 1);
    else
        setTimeout(function() {
            try {
                $.ll1l1O[focus]()
            } catch (_) {}
        }
        , 1)
}
;
O1oOOO = function(A, _) {
    var $ = this.value;
    this[setValue](this.ll1l1O.value);
    if ($ !== this[getValue]() || _ === true)
        this.Ollll()
}
;
o100O = function(_) {
    var $ = this;
    setTimeout(function() {
        $.lo00(_)
    }
    , 0)
}
;
olO1O = function(A) {
    var _ = {
        htmlEvent: A
    };
    this[fire]("keydown", _);
    if (A.keyCode == 8 && (this[isReadOnly]() || this.allowInput == false))
        return false;
    if (A.keyCode == 13 || A.keyCode == 9)
        if (this.type == "textarea" && A.keyCode == 13)
            ;
        else {
            this.lo00(null , true);
            if (A.keyCode == 13) {
                var $ = this;
                $[fire]("enter", _)
            }
        }
    if (A.keyCode == 27)
        A.preventDefault()
}
;
O00OO = function($) {
    this[fire]("keyup", {
        htmlEvent: $
    })
}
;
OlO10O = function($) {
    this[fire]("keypress", {
        htmlEvent: $
    })
}
;
O0Ol0 = function($) {
    this[doUpdate]();
    if (this[isReadOnly]())
        return;
    this.o0o1l = true;
    this[addCls](this.oO0Ol);
    this.oOo1O();
    if (this.selectOnFocus)
        this[selectText]();
    this[fire]("focus", {
        htmlEvent: $
    })
}
;
oo1oo = function(_) {
    this.o0o1l = false;
    var $ = this;
    setTimeout(function() {
        if ($.o0o1l == false)
            $[removeCls]($.oO0Ol)
    }
    , 2);
    this[fire]("blur", {
        htmlEvent: _
    });
    if (this.validateOnLeave)
        this[_tryValidate]()
}
;
ll1l0 = function($) {
    this.inputStyle = $;
    O1lo11(this.ll1l1O, $)
}
;
O1l1lo = function($) {
    var A = mini.TextBox[superclass][getAttrs][call](this, $)
      , _ = jQuery($);
    mini[_ParseString]($, A, ["value", "text", "emptyText", "inputStyle", "onenter", "onkeydown", "onkeyup", "onkeypress", "maxLengthErrorText", "minLengthErrorText", "onfocus", "onblur", "vtype", "emailErrorText", "urlErrorText", "floatErrorText", "intErrorText", "dateErrorText", "minErrorText", "maxErrorText", "rangeLengthErrorText", "rangeErrorText", "rangeCharErrorText"]);
    mini[_ParseBool]($, A, ["allowInput", "selectOnFocus"]);
    mini[_ParseInt]($, A, ["maxLength", "minLength", "minHeight", "minWidth"]);
    return A
}
;
O0lOo = function($) {
    this.vtype = $
}
;
Ol10l = function() {
    return this.vtype
}
;
o1oo0l = function($) {
    if ($[isValid] == false)
        return;
    mini.l011O(this.vtype, $.value, $, this)
}
;
ol111 = function($) {
    this.emailErrorText = $
}
;
O0OoO = function() {
    return this.emailErrorText
}
;
lo0l = function($) {
    this.urlErrorText = $
}
;
ll0l = function() {
    return this.urlErrorText
}
;
l111l = function($) {
    this.floatErrorText = $
}
;
ooO00 = function() {
    return this.floatErrorText
}
;
lOoo0 = function($) {
    this.intErrorText = $
}
;
o1OO = function() {
    return this.intErrorText
}
;
l0ol1l = function($) {
    this.dateErrorText = $
}
;
O1lol = function() {
    return this.dateErrorText
}
;
llO011 = function($) {
    this.maxLengthErrorText = $
}
;
O0ll1 = function() {
    return this.maxLengthErrorText
}
;
O00O = function($) {
    this.minLengthErrorText = $
}
;
oo1Oo0 = function() {
    return this.minLengthErrorText
}
;
oloO0 = function($) {
    this.maxErrorText = $
}
;
OO011 = function() {
    return this.maxErrorText
}
;
O1oo = function($) {
    this.minErrorText = $
}
;
o0Olo = function() {
    return this.minErrorText
}
;
oolO0 = function($) {
    this.rangeLengthErrorText = $
}
;
lOoOO = function() {
    return this.rangeLengthErrorText
}
;
ol1oO = function($) {
    this.rangeCharErrorText = $
}
;
llO01 = function() {
    return this.rangeCharErrorText
}
;
OO000 = function($) {
    this.rangeErrorText = $
}
;
O11ll = function() {
    return this.rangeErrorText
}
;
OO10o = function() {
    var $ = this.el = document.createElement("div");
    this.el.className = "mini-listbox";
    this.el.innerHTML = "<div class=\"mini-listbox-border\"><div class=\"mini-listbox-header\"></div><div class=\"mini-listbox-view\"></div><input type=\"hidden\"/></div><div class=\"mini-errorIcon\"></div>";
    this.oO0o1l = this.el.firstChild;
    this.l10OO = this.oO0o1l.firstChild;
    this.ol1010 = this.oO0o1l.childNodes[1];
    this.oOoll = this.oO0o1l.childNodes[2];
    this.oO010 = this.el.lastChild;
    this.o1O10 = this.ol1010
}
;
ooOO1 = function($) {
    if (this.ol1010) {
        mini[clearEvent](this.ol1010);
        this.ol1010 = null 
    }
    this.oO0o1l = null ;
    this.l10OO = null ;
    this.ol1010 = null ;
    this.oOoll = null ;
    mini.ListBox[superclass][destroy][call](this, $)
}
;
lool00 = function() {
    mini.ListBox[superclass][_initEvents][call](this);
    l00l(function() {
        O0l10(this.ol1010, "scroll", this.oO1O, this)
    }
    , this)
}
;
ooOO1 = function($) {
    if (this.ol1010)
        this.ol1010.onscroll = null ;
    mini.ListBox[superclass][destroy][call](this, $)
}
;
o0llO = function(_) {
    if (!mini.isArray(_))
        _ = [];
    this.columns = _;
    for (var $ = 0, D = this.columns.length; $ < D; $++) {
        var B = this.columns[$];
        if (B.type) {
            if (!mini.isNull(B.header) && typeof B.header !== "function")
                if (B.header.trim() == "")
                    delete B.header;
            var C = mini[_getColumn](B.type);
            if (C) {
                var E = mini.copyTo({}, B);
                mini.copyTo(B, C);
                mini.copyTo(B, E)
            }
        }
        var A = parseInt(B.width);
        if (mini.isNumber(A) && String(A) == B.width)
            B.width = A + "px";
        if (mini.isNull(B.width))
            B.width = this[columnWidth] + "px"
    }
    this[doUpdate]()
}
;
loo1l = function() {
    return this.columns
}
;
lO0OO = function() {
    if (this.O1l1O1 === false)
        return;
    var S = this.columns && this.columns.length > 0;
    if (S)
        O0Oo0(this.el, "mini-listbox-showColumns");
    else
        Ol00(this.el, "mini-listbox-showColumns");
    this.l10OO.style.display = S ? "" : "none";
    var I = [];
    if (S && this.showColumns) {
        I[I.length] = "<table class=\"mini-listbox-headerInner\" cellspacing=\"0\" cellpadding=\"0\"><tr>";
        var D = this.uid + "$ck$all";
        I[I.length] = "<td class=\"mini-listbox-checkbox\"><input type=\"checkbox\" id=\"" + D + "\"></td>";
        for (var R = 0, _ = this.columns.length; R < _; R++) {
            var B = this.columns[R]
              , E = B.header;
            if (mini.isNull(E))
                E = "&nbsp;";
            var A = B.width;
            if (mini.isNumber(A))
                A = A + "px";
            I[I.length] = "<td class=\"";
            if (B.headerCls)
                I[I.length] = B.headerCls;
            I[I.length] = "\" style=\"";
            if (B.headerStyle)
                I[I.length] = B.headerStyle + ";";
            if (A)
                I[I.length] = "width:" + A + ";";
            if (B.headerAlign)
                I[I.length] = "text-align:" + B.headerAlign + ";";
            I[I.length] = "\">";
            I[I.length] = E;
            I[I.length] = "</td>"
        }
        I[I.length] = "</tr></table>"
    }
    this.l10OO.innerHTML = I.join("");
    var I = []
      , P = this.data;
    I[I.length] = "<table class=\"mini-listbox-items\" cellspacing=\"0\" cellpadding=\"0\">";
    if (this[showEmpty] && P.length == 0)
        I[I.length] = "<tr><td colspan=\"20\">" + this[emptyText] + "</td></tr>";
    else {
        this.O01lo();
        for (var K = 0, G = P.length; K < G; K++) {
            var $ = P[K]
              , M = -1
              , O = " "
              , J = -1
              , N = " ";
            I[I.length] = "<tr id=\"";
            I[I.length] = this.olol(K);
            I[I.length] = "\" index=\"";
            I[I.length] = K;
            I[I.length] = "\" class=\"mini-listbox-item ";
            if ($.enabled === false)
                I[I.length] = " mini-disabled ";
            M = I.length;
            I[I.length] = O;
            I[I.length] = "\" style=\"";
            J = I.length;
            I[I.length] = N;
            I[I.length] = "\">";
            var H = this.llo100(K)
              , L = this.name
              , F = this[getItemValue]($)
              , C = "";
            if ($.enabled === false)
                C = "disabled";
            I[I.length] = "<td class=\"mini-listbox-checkbox\"><input " + C + " id=\"" + H + "\" type=\"checkbox\" ></td>";
            if (S) {
                for (R = 0,
                _ = this.columns.length; R < _; R++) {
                    var B = this.columns[R]
                      , T = this.OO0OO($, K, B)
                      , A = B.width;
                    if (typeof A == "number")
                        A = A + "px";
                    I[I.length] = "<td class=\"";
                    if (T.cellCls)
                        I[I.length] = T.cellCls;
                    I[I.length] = "\" style=\"";
                    if (T.cellStyle)
                        I[I.length] = T.cellStyle + ";";
                    if (A)
                        I[I.length] = "width:" + A + ";";
                    if (B.align)
                        I[I.length] = "text-align:" + B.align + ";";
                    I[I.length] = "\">";
                    I[I.length] = T.cellHtml;
                    I[I.length] = "</td>";
                    if (T.rowCls)
                        O = T.rowCls;
                    if (T.rowStyle)
                        N = T.rowStyle
                }
            } else {
                T = this.OO0OO($, K, null );
                I[I.length] = "<td class=\"";
                if (T.cellCls)
                    I[I.length] = T.cellCls;
                I[I.length] = "\" style=\"";
                if (T.cellStyle)
                    I[I.length] = T.cellStyle;
                I[I.length] = "\">";
                I[I.length] = T.cellHtml;
                I[I.length] = "</td>";
                if (T.rowCls)
                    O = T.rowCls;
                if (T.rowStyle)
                    N = T.rowStyle
            }
            I[M] = O;
            I[J] = N;
            I[I.length] = "</tr>"
        }
    }
    I[I.length] = "</table>";
    var Q = I.join("");
    this.ol1010.innerHTML = Q;
    this.oO0oo();
    this[doLayout]()
}
;
OOoOo = function() {
    if (!this[canLayout]())
        return;
    if (this.columns && this.columns.length > 0)
        O0Oo0(this.el, "mini-listbox-showcolumns");
    else
        Ol00(this.el, "mini-listbox-showcolumns");
    if (this[showCheckBox])
        Ol00(this.el, "mini-listbox-hideCheckBox");
    else
        O0Oo0(this.el, "mini-listbox-hideCheckBox");
    var D = this.uid + "$ck$all"
      , B = document.getElementById(D);
    if (B)
        B.style.display = this[showAllCheckBox] ? "" : "none";
    var E = this[isAutoHeight]();
    h = this[getHeight](true);
    _ = this[getWidth](true);
    var C = _
      , F = this.ol1010;
    F.style.width = _ + "px";
    if (!E) {
        var $ = lOl10(this.l10OO);
        h = h - $;
        F.style.height = h + "px"
    } else
        F.style.height = "auto";
    if (isIE) {
        var A = this.l10OO.firstChild
          , G = this.ol1010.firstChild;
        if (this.ol1010.offsetHeight >= this.ol1010.scrollHeight) {
            G.style.width = "100%";
            if (A)
                A.style.width = "100%"
        } else {
            var _ = parseInt(G.parentNode.offsetWidth - 17) + "px";
            G.style.width = _;
            if (A)
                A.style.width = _
        }
    }
    if (this.ol1010.offsetHeight < this.ol1010.scrollHeight)
        this.l10OO.style.width = (C - 17) + "px";
    else
        this.l10OO.style.width = "100%"
}
;
olo1l = function($) {
    this[showCheckBox] = $;
    this[doLayout]()
}
;
ol1OO = function() {
    return this[showCheckBox]
}
;
oO1oo = function($) {
    this[showAllCheckBox] = $;
    this[doLayout]()
}
;
O10o0 = function() {
    return this[showAllCheckBox]
}
;
o0l00 = function($) {
    this.showColumns = $;
    this[doUpdate]()
}
;
O0OOo = function() {
    return this.showColumns
}
;
o0l1O0 = function($) {
    if (this.showNullItem != $) {
        this.showNullItem = $;
        this.O01lo();
        this[doUpdate]()
    }
}
;
olo00 = function() {
    return this.showNullItem
}
;
l0O11O = function($) {
    if (this.nullItemText != $) {
        this.nullItemText = $;
        this.O01lo();
        this[doUpdate]()
    }
}
;
Oloo0 = function() {
    return this.nullItemText
}
;
O0Ol = function() {
    for (var _ = 0, A = this.data.length; _ < A; _++) {
        var $ = this.data[_];
        if ($.__NullItem) {
            this.data.removeAt(_);
            break
        }
    }
    if (this.showNullItem) {
        $ = {
            __NullItem: true
        };
        $[this.textField] = "";
        $[this.valueField] = "";
        this.data.insert(0, $)
    }
}
;
o00oll = function(_, $, C) {
    var A = C ? _[C.field] : this[getItemText](_)
      , E = {
        sender: this,
        index: $,
        rowIndex: $,
        record: _,
        item: _,
        column: C,
        field: C ? C.field : null ,
        value: A,
        cellHtml: A,
        rowCls: null ,
        cellCls: C ? (C.cellCls || "") : "",
        rowStyle: null ,
        cellStyle: C ? (C.cellStyle || "") : ""
    }
      , D = this.columns && this.columns.length > 0;
    if (!D)
        if ($ == 0 && this.showNullItem)
            E.cellHtml = this.nullItemText;
    if (E.autoEscape == true)
        E.cellHtml = mini.htmlEncode(E.cellHtml);
    if (C) {
        if (C.dateFormat)
            if (mini.isDate(E.value))
                E.cellHtml = mini.formatDate(A, C.dateFormat);
            else
                E.cellHtml = A;
        var B = C.renderer;
        if (B) {
            fn = typeof B == "function" ? B : window[B];
            if (fn)
                E.cellHtml = fn[call](C, E)
        }
    }
    this[fire]("drawcell", E);
    if (E.cellHtml === null  || E.cellHtml === undefined || E.cellHtml === "")
        E.cellHtml = "&nbsp;";
    return E
}
;
O10l11 = function($) {
    this.l10OO.scrollLeft = this.ol1010.scrollLeft
}
;
OOo00 = function(C) {
    var A = this.uid + "$ck$all";
    if (C.target.id == A) {
        var _ = document.getElementById(A);
        if (_) {
            var B = _.checked
              , $ = this[getValue]();
            if (B)
                this[selectAll]();
            else
                this[deselectAll]();
            this.OOo1();
            if ($ != this[getValue]()) {
                this.Ollll();
                this[fire]("itemclick", {
                    htmlEvent: C
                })
            }
        }
        return
    }
    this.o1l111(C, "Click")
}
;
l10O0 = function(_) {
    var E = mini.ListBox[superclass][getAttrs][call](this, _);
    mini[_ParseString](_, E, ["nullItemText", "ondrawcell"]);
    mini[_ParseBool](_, E, ["showCheckBox", "showAllCheckBox", "showNullItem", "showColumns"]);
    if (_.nodeName.toLowerCase() != "select") {
        var C = mini[getChildNodes](_);
        for (var $ = 0, D = C.length; $ < D; $++) {
            var B = C[$]
              , A = jQuery(B).attr("property");
            if (!A)
                continue;A = A.toLowerCase();
            if (A == "columns")
                E.columns = mini.ll1o01(B);
            else if (A == "data")
                E.data = B.innerHTML
        }
    }
    return E
}
;
oOOl = function(_) {
    if (typeof _ == "string")
        return this;
    var $ = _.value;
    delete _.value;
    mini.Spinner[superclass][set][call](this, _);
    if (!mini.isNull($))
        this[setValue]($);
    return this
}
;
OO00O = function() {
    var $ = "onmouseover=\"O0Oo0(this,'" + this.oooOO1 + "');\" " + "onmouseout=\"Ol00(this,'" + this.oooOO1 + "');\"";
    return "<span class=\"mini-buttonedit-button\" " + $ + "><span class=\"mini-buttonedit-up\"><span></span></span><span class=\"mini-buttonedit-down\"><span></span></span></span>"
}
;
O1O00 = function() {
    mini.Spinner[superclass][_initEvents][call](this);
    l00l(function() {
        this[on]("buttonmousedown", this.lo1l, this);
        l1Oo0O(this.el, "mousewheel", this.O0OOOO, this)
    }
    , this)
}
;
O0ll0 = function() {
    if (this.allowLimitValue == false)
        return;
    if (this[minValue] > this[maxValue])
        this[maxValue] = this[minValue] + 100;
    if (this.value < this[minValue])
        this[setValue](this[minValue]);
    if (this.value > this[maxValue])
        this[setValue](this[maxValue])
}
;
ooOOoO = function() {
    var D = this.value;
    D = parseFloat(D);
    if (isNaN(D))
        D = 0;
    var C = String(D).split(".")
      , B = C[0]
      , _ = C[1];
    if (!_)
        _ = "";
    if (this[decimalPlaces] > 0) {
        for (var $ = _.length, A = this[decimalPlaces]; $ < A; $++)
            _ += "0";
        _ = "." + _
    }
    return B + _
}
;
oOol0 = function($) {
    $ = parseFloat($);
    if (isNaN($))
        $ = this[defaultValue];
    $ = parseFloat($);
    if (isNaN($))
        $ = this[minValue];
    $ = parseFloat($.toFixed(this[decimalPlaces]));
    if (this.value != $) {
        this.value = $;
        this.ooOol0();
        this.oOoll.value = this.value;
        this.text = this.ll1l1O.value = this[getFormValue]()
    } else
        this.text = this.ll1l1O.value = this[getFormValue]()
}
;
o100l = function($) {
    $ = parseFloat($);
    if (isNaN($))
        return;
    $ = parseFloat($.toFixed(this[decimalPlaces]));
    if (this[maxValue] != $) {
        this[maxValue] = $;
        this.ooOol0()
    }
}
;
lOoOO0 = function($) {
    return this[maxValue]
}
;
ool10 = function($) {
    $ = parseFloat($);
    if (isNaN($))
        return;
    $ = parseFloat($.toFixed(this[decimalPlaces]));
    if (this[minValue] != $) {
        this[minValue] = $;
        this.ooOol0()
    }
}
;
llO1 = function($) {
    return this[minValue]
}
;
O0100 = function($) {
    $ = parseFloat($);
    if (isNaN($))
        return;
    if (this[increment] != $)
        this[increment] = $
}
;
o01O1 = function($) {
    return this[increment]
}
;
OoO00 = function($) {
    $ = parseInt($);
    if (isNaN($) || $ < 0)
        return;
    this[decimalPlaces] = $
}
;
lOl00 = function($) {
    return this[decimalPlaces]
}
;
O0oll = function($) {
    this.changeOnMousewheel = $
}
;
Ool1O1 = function($) {
    return this.changeOnMousewheel
}
;
lOl0o = function($) {
    this.allowLimitValue = $
}
;
OO01l = function($) {
    return this.allowLimitValue
}
;
O1l0l = function(D, B, C) {
    this.l1lo10();
    this[setValue](this.value + D);
    var A = this
      , _ = C
      , $ = new Date();
    this.oOO0 = setInterval(function() {
        A[setValue](A.value + D);
        A.Ollll();
        C--;
        if (C == 0 && B > 50)
            A.o1lO11(D, B - 100, _ + 3);
        var E = new Date();
        if (E - $ > 500)
            A.l1lo10();
        $ = E
    }
    , B);
    l1Oo0O(document, "mouseup", this.O0l0l, this)
}
;
o0oo1 = function() {
    clearInterval(this.oOO0);
    this.oOO0 = null 
}
;
l1oOO = function($) {
    this._DownValue = this[getValue]();
    this.lo00();
    if ($.spinType == "up")
        this.o1lO11(this.increment, 230, 2);
    else
        this.o1lO11(-this.increment, 230, 2)
}
;
O000o = function(_) {
    mini.Spinner[superclass].lOo101[call](this, _);
    var $ = mini.Keyboard;
    switch (_.keyCode) {
    case $.Top:
        this[setValue](this.value + this[increment]);
        this.Ollll();
        break;
    case $.Bottom:
        this[setValue](this.value - this[increment]);
        this.Ollll();
        break
    }
}
;
;O0oO00=function (pager) {pager[on]("beforepagechanged",this.ooo1O,this); this[on]("load",function (e) {pager[update](this.pageIndex,this.pageSize,this[totalCount]); this.totalPage = pager.totalPage; },this); }
olll0 = function(A) {
    if (this[isReadOnly]())
        return;
    if (this.changeOnMousewheel == false)
        return;
    var $ = A.wheelDelta || A.originalEvent.wheelDelta;
    if (mini.isNull($))
        $ = -A.detail * 24;
    var _ = this[increment];
    if ($ < 0)
        _ = -_;
    this[setValue](this.value + _);
    this.Ollll();
    return false
}
;
o0O0l = function($) {
    this.l1lo10();
    O1l0(document, "mouseup", this.O0l0l, this);
    if (this._DownValue != this[getValue]())
        this.Ollll()
}
;
lllO1 = function(A) {
    var _ = this[getValue]()
      , $ = parseFloat(this.ll1l1O.value);
    this[setValue]($);
    if (_ != this[getValue]())
        this.Ollll()
}
;
OOl1O = function($) {
    var _ = mini.Spinner[superclass][getAttrs][call](this, $);
    mini[_ParseString]($, _, ["minValue", "maxValue", "increment", "decimalPlaces", "changeOnMousewheel"]);
    mini[_ParseBool]($, _, ["allowLimitValue"]);
    return _
}
;
o1o0Ol = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-include"
}
;
OoOol = function() {}
;
ooOoo = function() {
    if (!this[canLayout]())
        return;
    var A = this.el.childNodes;
    if (A)
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            mini.layout(_)
        }
}
;
O0l0o = function($) {
    this.url = $;
    mini[update]({
        url: this.url,
        el: this.el,
        async: this.async
    });
    this[doLayout]()
}
;
O0ll1o = function($) {
    return this.url
}
;
Ol0oo = function($) {
    var _ = mini.Include[superclass][getAttrs][call](this, $);
    mini[_ParseString]($, _, ["url"]);
    return _
}
;
o0ol1 = function(_, $) {
    if (!_ || !$)
        return;
    this._sources[_] = $;
    this._data[_] = [];
    $.autoCreateNewID = true;
    $.oolO = $[getIdField]();
    $.O001oo = false;
    $[on]("addrow", this.o00O00, this);
    $[on]("updaterow", this.o00O00, this);
    $[on]("deleterow", this.o00O00, this);
    $[on]("removerow", this.o00O00, this);
    $[on]("preload", this.ooOloo, this);
    $[on]("selectionchanged", this.OO1O0, this)
}
;
oO01l = function(B, _, $) {
    if (!B || !_ || !$)
        return;
    if (!this._sources[B] || !this._sources[_])
        return;
    var A = {
        parentName: B,
        childName: _,
        parentField: $
    };
    this._links.push(A)
}
;
ll1Oo = function() {
    this._data = {};
    this.OO0Ool = {};
    for (var $ in this._sources)
        this._data = []
}
;
OOoOO = function() {
    return this._data
}
;
lOloo = function($) {
    for (var A in this._sources) {
        var _ = this._sources[A];
        if (_ == $)
            return A
    }
}
;
;lo100=function (e) {if (this[isReadOnly]()) return; if (this.ownerMenu) {var me = this; setTimeout(function () {if (me[isDisplay]()) {me.ownerMenu[showItemMenu](me); } },1); } }
lO11 = function(E, _, D) {
    var B = this._data[E];
    if (!B)
        return false;
    for (var $ = 0, C = B.length; $ < C; $++) {
        var A = B[$];
        if (A[D] == _[D])
            return A
    }
    return null 
}
;
ll11o = function(F) {
    var C = F.type
      , _ = F.record
      , D = this.oo1ll(F.sender)
      , E = this.Ol0ol1(D, _, F.sender[getIdField]())
      , A = this._data[D];
    if (E) {
        A = this._data[D];
        A.remove(E)
    }
    if (C == "removerow" && _._state == "added")
        ;
    else
        A.push(_);
    this.OO0Ool[D] = F.sender.OO0Ool;
    if (_._state == "added") {
        var $ = this.OOo011(F.sender);
        if ($) {
            var B = $[getSelected]();
            if (B)
                _._parentId = B[$[getIdField]()];
            else
                A.remove(_)
        }
    }
}
;
O11lo = function(M) {
    var J = M.sender
      , L = this.oo1ll(J)
      , K = M.sender[getIdField]()
      , A = this._data[L]
      , $ = {};
    for (var F = 0, C = A.length; F < C; F++) {
        var G = A[F];
        $[G[K]] = G
    }
    var N = this.OO0Ool[L];
    if (N)
        J.OO0Ool = N;
    var I = M.data || [];
    for (F = 0,
    C = I.length; F < C; F++) {
        var G = I[F]
          , H = $[G[K]];
        if (H) {
            delete H._uid;
            mini.copyTo(G, H)
        }
    }
    var D = this.OOo011(J);
    if (J[getPageIndex] && J[getPageIndex]() == 0) {
        var E = [];
        for (F = 0,
        C = A.length; F < C; F++) {
            G = A[F];
            if (G._state == "added")
                if (D) {
                    var B = D[getSelected]();
                    if (B && B[D[getIdField]()] == G._parentId)
                        E.push(G)
                } else
                    E.push(G)
        }
        E.reverse();
        I.insertRange(0, E)
    }
    var _ = [];
    for (F = I.length - 1; F >= 0; F--) {
        G = I[F],
        H = $[G[K]];
        if (H && H._state == "removed") {
            I.removeAt(F);
            _.push(H)
        }
    }
}
;
ooo01 = function(C) {
    var _ = this.oo1ll(C);
    for (var $ = 0, B = this._links.length; $ < B; $++) {
        var A = this._links[$];
        if (A.childName == _)
            return this._sources[A.parentName]
    }
}
;
O1OO = function(B) {
    var C = this.oo1ll(B)
      , D = [];
    for (var $ = 0, A = this._links.length; $ < A; $++) {
        var _ = this._links[$];
        if (_.parentName == C)
            D.push(_)
    }
    return D
}
;
oO0O10 = function(G) {
    var A = G.sender
      , _ = A[getSelected]()
      , F = this.o11O(A);
    for (var $ = 0, E = F.length; $ < E; $++) {
        var D = F[$]
          , C = this._sources[D.childName];
        if (_) {
            var B = {};
            B[D.parentField] = _[A[getIdField]()];
            C[load](B)
        } else
            C[loadData]([])
    }
}
;
O01o0 = function() {
    var $ = this.uid + "$check";
    this.el = document.createElement("span");
    this.el.className = "mini-checkbox";
    this.el.innerHTML = "<input id=\"" + $ + "\" name=\"" + this.id + "\" type=\"checkbox\" class=\"mini-checkbox-check\"><label for=\"" + $ + "\" onclick=\"return false;\">" + this.text + "</label>";
    this.oo11o = this.el.firstChild;
    this.lO0010 = this.el.lastChild
}
;
;l101=function (value) {if (this.checked != value) {this.checked = value; this[doUpdate](); this[fire]("checkedchanged"); } }
OOlO0 = function($) {
    if (this.oo11o) {
        this.oo11o.onmouseup = null ;
        this.oo11o.onclick = null ;
        this.oo11o = null 
    }
    mini.CheckBox[superclass][destroy][call](this, $)
}
;
loo00o = function() {
    l00l(function() {
        l1Oo0O(this.el, "click", this.l11OO, this);
        this.oo11o.onmouseup = function() {
            return false
        }
        ;
        var $ = this;
        this.oo11o.onclick = function() {
            if ($[isReadOnly]())
                return false
        }
    }
    , this)
}
;
O010O = function($) {
    this.name = $;
    mini.setAttr(this.oo11o, "name", this.name)
}
;
Ololl = function($) {
    if (this.text !== $) {
        this.text = $;
        this.lO0010.innerHTML = $
    }
}
;
O01Oo = function() {
    return this.text
}
;
l0010 = function($) {
    if ($ === true)
        $ = true;
    else if ($ == this.trueValue)
        $ = true;
    else if ($ == "true")
        $ = true;
    else if ($ === 1)
        $ = true;
    else if ($ == "Y")
        $ = true;
    else
        $ = false;
    if (this.checked !== $) {
        this.checked = !!$;
        this.oo11o.checked = this.checked;
        this.value = this[getValue]()
    }
}
;
O11Oll = function() {
    return this.checked
}
;
OoOO1 = function($) {
    if (this.checked != $) {
        this[setChecked]($);
        this.value = this[getValue]()
    }
}
;
o11O1 = function() {
    return String(this.checked == true ? this.trueValue : this.falseValue)
}
;
oo000 = function() {
    return this[getValue]()
}
;
looOlo = function($) {
    this.oo11o.value = $;
    this.trueValue = $
}
;
ol1o0 = function() {
    return this.trueValue
}
;
l1l0 = function($) {
    this.falseValue = $
}
;
o010l = function() {
    return this.falseValue
}
;
lolOO = function($) {
    if (this[isReadOnly]())
        return;
    this[setChecked](!this.checked);
    this[fire]("checkedchanged", {
        checked: this.checked
    });
    this[fire]("valuechanged", {
        value: this[getValue]()
    });
    this[fire]("click", $, this)
}
;
l111O = function(A) {
    var D = mini.CheckBox[superclass][getAttrs][call](this, A)
      , C = jQuery(A);
    D.text = A.innerHTML;
    mini[_ParseString](A, D, ["text", "oncheckedchanged", "onclick", "onvaluechanged"]);
    mini[_ParseBool](A, D, ["enabled"]);
    var B = mini.getAttr(A, "checked");
    if (B)
        D.checked = (B == "true" || B == "checked") ? true : false;
    var _ = C.attr("trueValue");
    if (_) {
        D.trueValue = _;
        _ = parseInt(_);
        if (!isNaN(_))
            D.trueValue = _
    }
    var $ = C.attr("falseValue");
    if ($) {
        D.falseValue = $;
        $ = parseInt($);
        if (!isNaN($))
            D.falseValue = $
    }
    return D
}
;
O0o1O = function($) {
    this[emptyText] = ""
}
;
oloOl = function() {
    if (!this[canLayout]())
        return;
    mini.TextArea[superclass][doLayout][call](this);
    var $ = lOl10(this.el);
    OO01(this.oO0o1l, $);
    $ -= 2;
    if ($ < 0)
        $ = 0;
    this.ll1l1O.style.height = $ + "px"
}
;
OO0O0 = function(A) {
    if (typeof A == "string")
        return this;
    var $ = A.value;
    delete A.value;
    var B = A.url;
    delete A.url;
    var _ = A.data;
    delete A.data;
    mini.ComboBox[superclass][set][call](this, A);
    if (!mini.isNull(_)) {
        this[setData](_);
        A.data = _
    }
    if (!mini.isNull(B)) {
        this[setUrl](B);
        A.url = B
    }
    if (!mini.isNull($)) {
        this[setValue]($);
        A.value = $
    }
    return this
}
;
l0llo = function() {
    mini.ComboBox[superclass][_createPopup][call](this);
    this.o010 = new mini.ListBox();
    this.o010[setBorderStyle]("border:0;");
    this.o010[setStyle]("width:100%;height:auto;");
    this.o010[render](this.popup.lOlO);
    this.o010[on]("itemclick", this.l1l101, this);
    this.o010[on]("drawcell", this.__OnItemDrawCell, this);
    var $ = this;
    this.o010[on]("beforeload", function(_) {
        $[fire]("beforeload", _)
    }
    , this);
    this.o010[on]("load", function(_) {
        $[fire]("load", _)
    }
    , this);
    this.o010[on]("loaderror", function(_) {
        $[fire]("loaderror", _)
    }
    , this)
}
;
lool1 = function() {
    var _ = {
        cancel: false
    };
    this[fire]("beforeshowpopup", _);
    if (_.cancel == true)
        return;
    this.o010[setHeight]("auto");
    mini.ComboBox[superclass][showPopup][call](this);
    var $ = this.popup.el.style.height;
    if ($ == "" || $ == "auto")
        this.o010[setHeight]("auto");
    else
        this.o010[setHeight]("100%");
    this.o010[setValue](this.value)
}
;
Ooo1l1 = function($) {
    this.o010[deselectAll]();
    $ = this[getItem]($);
    if ($) {
        this.o010[select]($);
        this.l1l101()
    }
}
;
l10o00 = function($) {
    return typeof $ == "object" ? $ : this.data[$]
}
;
ooOo0 = function($) {
    return this.data[indexOf]($)
}
;
Ol0OO = function($) {
    return this.data[$]
}
;
lo1Ol = function($) {
    if (typeof $ == "string")
        this[setUrl]($);
    else
        this[setData]($)
}
;
l0oO1 = function(data) {
    if (typeof data == "string")
        data = eval("(" + data + ")");
    if (!mini.isArray(data))
        data = [];
    this.o010[setData](data);
    this.data = this.o010.data;
    var vts = this.o010.o0ol(this.value);
    this.text = this.ll1l1O.value = vts[1]
}
;
oOOo0 = function() {
    return this.data
}
;
llOO0 = function(_) {
    this[getPopup]();
    this.o010[setUrl](_);
    this.url = this.o010.url;
    this.data = this.o010.data;
    var $ = this.o010.o0ol(this.value);
    this.text = this.ll1l1O.value = $[1]
}
;
Ol1o1 = function() {
    return this.url
}
;
OoOllField = function($) {
    this[valueField] = $;
    if (this.o010)
        this.o010[setValueField]($)
}
;
o0o0o = function() {
    return this[valueField]
}
;
l0OO = function($) {
    if (this.o010)
        this.o010[setTextField]($);
    this[textField] = $
}
;
ooolo = function() {
    return this[textField]
}
;
lOoloo = function($) {
    this[setTextField]($)
}
;
l0lO10 = function($) {
    if (this.o010)
        this.o010[setDataField]($);
    this.dataField = $
}
;
OoOll = function($) {
    if (this.value !== $) {
        var _ = this.o010.o0ol($);
        this.value = $;
        this.oOoll.value = this.value;
        this.text = this.ll1l1O.value = _[1];
        this.OlO1O()
    } else {
        _ = this.o010.o0ol($);
        this.text = this.ll1l1O.value = _[1]
    }
}
;
O0o1 = function($) {
    if (this[multiSelect] != $) {
        this[multiSelect] = $;
        if (this.o010) {
            this.o010[setMultiSelect]($);
            this.o010[setShowCheckBox]($)
        }
    }
}
;
l0Ool1 = function() {
    return this[multiSelect]
}
;
ooll1 = function($) {
    if (!mini.isArray($))
        $ = [];
    this.columns = $;
    this.o010[setColumns]($)
}
;
o1lOll = function() {
    return this.columns
}
;
lOol = function($) {
    if (this.showNullItem != $) {
        this.showNullItem = $;
        this.o010[setShowNullItem]($)
    }
}
;
O0ool = function() {
    return this.showNullItem
}
;
lOll1 = function($) {
    if (this.nullItemText != $) {
        this.nullItemText = $;
        this.o010[setNullItemText]($)
    }
}
;
ololO = function() {
    return this.nullItemText
}
;
Oo1O0l = function($) {
    this.valueFromSelect = $
}
;
Oool0 = function() {
    return this.valueFromSelect
}
;
l1010l = function() {
    if (this.validateOnChanged)
        this[validate]();
    var $ = this[getValue]()
      , B = this[getSelecteds]()
      , _ = B[0]
      , A = this;
    A[fire]("valuechanged", {
        value: $,
        selecteds: B,
        selected: _
    })
}
;
l01lls = function() {
    return this.o010[findItems](this.value)
}
;
l01ll = function() {
    return this[getSelecteds]()[0]
}
;
Oo0O = function($) {
    this[fire]("drawcell", $)
}
;
;Olo0o=function () {if (this.lll1O1) return; this.lll1O1 = true; O0l10(this.el,"click",this.o0O0lo,this); O0l10(this.el,"mouseup",this.OOlooO,this); O0l10(this.el,"mouseout",this.o1oo0,this); }
l0o1O = function(C) {
    var B = this.o010[getSelecteds]()
      , A = this.o010.o0ol(B)
      , $ = this[getValue]();
    this[setValue](A[0]);
    this[setText](A[1]);
    if (C) {
        if ($ != this[getValue]()) {
            var _ = this;
            setTimeout(function() {
                _.Ollll()
            }
            , 1)
        }
        if (!this[multiSelect])
            this[hidePopup]();
        this[focus]();
        this[fire]("itemclick", {
            item: C.item
        })
    }
}
;
O00o1 = function(D, A) {
    this[fire]("keydown", {
        htmlEvent: D
    });
    if (D.keyCode == 8 && (this[isReadOnly]() || this.allowInput == false))
        return false;
    if (D.keyCode == 9) {
        this[hidePopup]();
        return
    }
    if (this[isReadOnly]())
        return;
    switch (D.keyCode) {
    case 27:
        D.preventDefault();
        if (this[isShowPopup]())
            D.stopPropagation();
        this[hidePopup]();
        break;
    case 13:
        if (this[isShowPopup]()) {
            D.preventDefault();
            D.stopPropagation();
            var _ = this.o010[getFocusedIndex]();
            if (_ != -1) {
                var $ = this.o010[getAt](_);
                if (this[multiSelect])
                    ;
                else {
                    this.o010[deselectAll]();
                    this.o010[select]($)
                }
                var C = this.o010[getSelecteds]()
                  , B = this.o010.o0ol(C);
                this[setValue](B[0]);
                this[setText](B[1]);
                this.Ollll()
            }
            this[hidePopup]()
        } else
            this[fire]("enter");
        break;
    case 37:
        break;
    case 38:
        D.preventDefault();
        _ = this.o010[getFocusedIndex]();
        if (_ == -1) {
            _ = 0;
            if (!this[multiSelect]) {
                $ = this.o010[findItems](this.value)[0];
                if ($)
                    _ = this.o010[indexOf]($)
            }
        }
        if (this[isShowPopup]())
            if (!this[multiSelect]) {
                _ -= 1;
                if (_ < 0)
                    _ = 0;
                this.o010.l0O011(_, true)
            }
        break;
    case 39:
        break;
    case 40:
        D.preventDefault();
        _ = this.o010[getFocusedIndex]();
        if (_ == -1) {
            _ = 0;
            if (!this[multiSelect]) {
                $ = this.o010[findItems](this.value)[0];
                if ($)
                    _ = this.o010[indexOf]($)
            }
        }
        if (this[isShowPopup]()) {
            if (!this[multiSelect]) {
                _ += 1;
                if (_ > this.o010[getCount]() - 1)
                    _ = this.o010[getCount]() - 1;
                this.o010.l0O011(_, true)
            }
        } else {
            this[showPopup]();
            if (!this[multiSelect])
                this.o010.l0O011(_, true)
        }
        break;
    default:
        this.lOlo0O(this.ll1l1O.value);
        break
    }
}
;
ooOll = function($) {
    this[fire]("keyup", {
        htmlEvent: $
    })
}
;
o0010 = function($) {
    this[fire]("keypress", {
        htmlEvent: $
    })
}
;
o11lOl = function(_) {
    var $ = this;
    setTimeout(function() {
        var A = $.ll1l1O.value;
        if (A != _)
            $.o1lo(A)
    }
    , 20)
}
;
Ololl1 = function(B) {
    if (this[multiSelect] == true)
        return;
    var A = [];
    for (var C = 0, F = this.data.length; C < F; C++) {
        var _ = this.data[C]
          , D = mini._getMap(this.textField, _);
        if (typeof D == "string") {
            D = D.toUpperCase();
            B = B.toUpperCase();
            if (D[indexOf](B) != -1)
                A.push(_)
        }
    }
    this.o010[setData](A);
    this._filtered = true;
    if (B !== "" || this[isShowPopup]()) {
        this[showPopup]();
        var $ = 0;
        if (this.o010[getShowNullItem]())
            $ = 1;
        var E = this;
        E.o010.l0O011($, true)
    }
}
;
Ollo0 = function($) {
    if (this._filtered) {
        this._filtered = false;
        if (this.o010.el)
            this.o010[setData](this.data)
    }
    this[fire]("hidepopup")
}
;
lll0l = function($) {
    return this.o010[findItems]($)
}
;
l100l = function(J) {
    if (this[multiSelect] == false) {
        var E = this.ll1l1O.value
          , H = this[getData]()
          , F = null ;
        for (var D = 0, B = H.length; D < B; D++) {
            var $ = H[D]
              , I = $[this.textField];
            if (I == E) {
                F = $;
                break
            }
        }
        if (F) {
            this.o010[setValue](F ? F[this.valueField] : "");
            var C = this.o010[getValue]()
              , A = this.o010.o0ol(C)
              , _ = this[getValue]();
            this[setValue](C);
            this[setText](A[1])
        } else if (this.valueFromSelect) {
            this[setValue]("");
            this[setText]("")
        } else {
            this[setValue](E);
            this[setText](E)
        }
        if (_ != this[getValue]()) {
            var G = this;
            G.Ollll()
        }
    }
}
;
ol0Oo = function(G) {
    var E = mini.ComboBox[superclass][getAttrs][call](this, G);
    mini[_ParseString](G, E, ["url", "data", "textField", "valueField", "displayField", "nullItemText", "ondrawcell", "onbeforeload", "onload", "onloaderror", "onitemclick"]);
    mini[_ParseBool](G, E, ["multiSelect", "showNullItem", "valueFromSelect"]);
    if (E.displayField)
        E[textField] = E.displayField;
    var C = E[valueField] || this[valueField]
      , H = E[textField] || this[textField];
    if (G.nodeName.toLowerCase() == "select") {
        var I = [];
        for (var F = 0, D = G.length; F < D; F++) {
            var $ = G.options[F]
              , _ = {};
            _[H] = $.text;
            _[C] = $.value;
            I.push(_)
        }
        if (I.length > 0)
            E.data = I
    } else {
        var J = mini[getChildNodes](G);
        for (F = 0,
        D = J.length; F < D; F++) {
            var A = J[F]
              , B = jQuery(A).attr("property");
            if (!B)
                continue;B = B.toLowerCase();
            if (B == "columns")
                E.columns = mini.ll1o01(A);
            else if (B == "data")
                E.data = A.innerHTML
        }
    }
    return E
}
;
o1lo1l = function(_) {
    var $ = _.getDay();
    return $ == 0 || $ == 6
}
;
O1OlOo = function($) {
    var $ = new Date($.getFullYear(),$.getMonth(),1);
    return mini.getWeekStartDate($, this.firstDayOfWeek)
}
;
oO1ll = function($) {
    return this.daysShort[$]
}
;
l0o10l = function() {
    var C = "<tr style=\"width:100%;\"><td style=\"width:100%;\"></td></tr>";
    C += "<tr ><td><div class=\"mini-calendar-footer\">" + "<span style=\"display:inline-block;\"><input name=\"time\" class=\"mini-timespinner\" style=\"width:80px\" format=\"" + this.timeFormat + "\"/>" + "<span class=\"mini-calendar-footerSpace\"></span></span>" + "<span class=\"mini-calendar-tadayButton\">" + this.todayText + "</span>" + "<span class=\"mini-calendar-footerSpace\"></span>" + "<span class=\"mini-calendar-clearButton\">" + this.clearText + "</span>" + "<span class=\"mini-calendar-okButton\">" + this.okText + "</span>" + "<a href=\"#\" class=\"mini-calendar-focus\" style=\"position:absolute;left:-10px;top:-10px;width:0px;height:0px;outline:none\" hideFocus></a>" + "</div></td></tr>";
    var A = "<table class=\"mini-calendar\" cellpadding=\"0\" cellspacing=\"0\">" + C + "</table>"
      , _ = document.createElement("div");
    _.innerHTML = A;
    this.el = _.firstChild;
    var $ = this.el.getElementsByTagName("tr")
      , B = this.el.getElementsByTagName("td");
    this.OolO10 = B[0];
    this.o111 = mini.byClass("mini-calendar-footer", this.el);
    this.timeWrapEl = this.o111.childNodes[0];
    this.todayButtonEl = this.o111.childNodes[1];
    this.footerSpaceEl = this.o111.childNodes[2];
    this.closeButtonEl = this.o111.childNodes[3];
    this.okButtonEl = this.o111.childNodes[4];
    this._focusEl = this.o111.lastChild;
    mini.parse(this.o111);
    this.timeSpinner = mini[getbyName]("time", this.el);
    this[doUpdate]()
}
;
l01Oo = function() {
    try {
        this._focusEl[focus]()
    } catch ($) {}
}
;
OO1o1 = function($) {
    this.OolO10 = this.o111 = this.timeWrapEl = this.todayButtonEl = this.footerSpaceEl = this.closeButtonEl = null ;
    mini.Calendar[superclass][destroy][call](this, $)
}
;
OOloO = function() {
    if (this.timeSpinner)
        this.timeSpinner[on]("valuechanged", this.oO1l1, this);
    l00l(function() {
        l1Oo0O(this.el, "click", this.o0O0lo, this);
        l1Oo0O(this.el, "mousedown", this.ol1Ol, this);
        l1Oo0O(this.el, "keydown", this.ll01o0, this)
    }
    , this)
}
;
loo01o = function($) {
    if (!$)
        return null ;
    var _ = this.uid + "$" + mini.clearTime($)[getTime]();
    return document.getElementById(_)
}
;
ol010 = function($) {
    if (l1oooo(this.el, $.target))
        return true;
    if (this.menuEl && l1oooo(this.menuEl, $.target))
        return true;
    return false
}
;
o11OO = function($) {
    this.showHeader = $;
    this[doUpdate]()
}
;
O1oO1 = function() {
    return this.showHeader
}
;
ll011 = function($) {
    this[showFooter] = $;
    this[doUpdate]()
}
;
O00ll = function() {
    return this[showFooter]
}
;
OOlo0 = function($) {
    this.showWeekNumber = $;
    this[doUpdate]()
}
;
OllO = function() {
    return this.showWeekNumber
}
;
ll01 = function($) {
    this.showDaysHeader = $;
    this[doUpdate]()
}
;
o11lO = function() {
    return this.showDaysHeader
}
;
o1o0o = function($) {
    this.showMonthButtons = $;
    this[doUpdate]()
}
;
Ol1ol = function() {
    return this.showMonthButtons
}
;
OO0O1 = function($) {
    this.showYearButtons = $;
    this[doUpdate]()
}
;
O1oOO = function() {
    return this.showYearButtons
}
;
oO11O = function($) {
    this.showTodayButton = $;
    this.todayButtonEl.style.display = this.showTodayButton ? "" : "none";
    this[doUpdate]()
}
;
O0OOl = function() {
    return this.showTodayButton
}
;
OOOOl = function($) {
    this.showClearButton = $;
    this.closeButtonEl.style.display = this.showClearButton ? "" : "none";
    this[doUpdate]()
}
;
o0lo0O = function() {
    return this.showClearButton
}
;
Oooo1O = function($) {
    this.showOkButton = $;
    this.okButtonEl.style.display = this.showOkButton ? "" : "none";
    this[doUpdate]()
}
;
O1l00 = function() {
    return this.showOkButton
}
;
o0O01 = function($) {
    $ = mini.parseDate($);
    if (!$)
        $ = new Date();
    if (mini.isDate($))
        $ = new Date($[getTime]());
    this.viewDate = $;
    this[doUpdate]()
}
;
OOOO11 = function() {
    return this.viewDate
}
;
loll0l = function($) {
    $ = mini.parseDate($);
    if (!mini.isDate($))
        $ = "";
    else
        $ = new Date($[getTime]());
    var _ = this[getDateEl](this.l0O1l);
    if (_)
        Ol00(_, this.O1o0);
    this.l0O1l = $;
    if (this.l0O1l)
        this.l0O1l = mini.cloneDate(this.l0O1l);
    _ = this[getDateEl](this.l0O1l);
    if (_)
        O0Oo0(_, this.O1o0);
    this[fire]("datechanged")
}
;
o0lo = function($) {
    if (!mini.isArray($))
        $ = [];
    this.l11O0 = $;
    this[doUpdate]()
}
;
lOlo1 = function() {
    return this.l0O1l ? this.l0O1l : ""
}
;
oOl0l1 = function($) {
    this.timeSpinner[setValue]($)
}
;
llO0l = function() {
    return this.timeSpinner[getFormValue]()
}
;
oo1lO = function($) {
    this[setSelectedDate]($);
    if (!$)
        $ = new Date();
    this[setTime]($)
}
;
Ooo1l = function() {
    var $ = this.l0O1l;
    if ($) {
        $ = mini.clearTime($);
        if (this.showTime) {
            var _ = this.timeSpinner[getValue]();
            $.setHours(_.getHours());
            $.setMinutes(_.getMinutes());
            $.setSeconds(_.getSeconds())
        }
    }
    return $ ? $ : ""
}
;
l1O0o = function() {
    var $ = this[getValue]();
    if ($)
        return mini.formatDate($, "yyyy-MM-dd HH:mm:ss");
    return ""
}
;
l0o1o = function($) {
    if (!$ || !this.l0O1l)
        return false;
    return mini.clearTime($)[getTime]() == mini.clearTime(this.l0O1l)[getTime]()
}
;
lol1O = function($) {
    this[multiSelect] = $;
    this[doUpdate]()
}
;
ollOO = function() {
    return this[multiSelect]
}
;
;l100oo=function (value) {Ol00(this.lOOo1,this.iconCls); this.iconCls = value; this[_doUpdateIcon](); }
oO0l0 = function($) {
    if (isNaN($))
        return;
    if ($ < 1)
        $ = 1;
    this.rows = $;
    this[doUpdate]()
}
;
lOOl01 = function() {
    return this.rows
}
;
O1Ol0 = function($) {
    if (isNaN($))
        return;
    if ($ < 1)
        $ = 1;
    this.columns = $;
    this[doUpdate]()
}
;
o110lO = function() {
    return this.columns
}
;
O1l1o = function($) {
    if (this.showTime != $) {
        this.showTime = $;
        this.timeWrapEl.style.display = this.showTime ? "" : "none";
        this[doLayout]()
    }
}
;
Ol01l0 = function() {
    return this.showTime
}
;
O00lO0 = function($) {
    if (this.timeFormat != $) {
        this.timeSpinner[setFormat]($);
        this.timeFormat = this.timeSpinner.format
    }
}
;
o0O1l = function() {
    return this.timeFormat
}
;
oo0Oo = function() {
    if (!this[canLayout]())
        return;
    this.timeWrapEl.style.display = this.showTime ? "" : "none";
    this.todayButtonEl.style.display = this.showTodayButton ? "" : "none";
    this.closeButtonEl.style.display = this.showClearButton ? "" : "none";
    this.okButtonEl.style.display = this.showOkButton ? "" : "none";
    this.footerSpaceEl.style.display = (this.showClearButton && this.showTodayButton) ? "" : "none";
    this.o111.style.display = this[showFooter] ? "" : "none";
    var _ = this.OolO10.firstChild
      , $ = this[isAutoHeight]();
    if (!$) {
        _.parentNode.style.height = "100px";
        h = jQuery(this.el).height();
        h -= jQuery(this.o111).outerHeight();
        _.parentNode.style.height = h + "px"
    } else
        _.parentNode.style.height = "";
    mini.layout(this.o111)
}
;
oO0Oo = function() {
    if (!this.O1l1O1)
        return;
    var G = new Date(this.viewDate[getTime]())
      , A = this.rows == 1 && this.columns == 1
      , C = 100 / this.rows
      , F = "<table class=\"mini-calendar-views\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
    for (var $ = 0, E = this.rows; $ < E; $++) {
        F += "<tr >";
        for (var D = 0, _ = this.columns; D < _; D++) {
            F += "<td style=\"height:" + C + "%\">";
            F += this.llo1(G, $, D);
            F += "</td>";
            G = new Date(G.getFullYear(),G.getMonth() + 1,1)
        }
        F += "</tr>"
    }
    F += "</table>";
    this.OolO10.innerHTML = F;
    var B = this.el;
    setTimeout(function() {
        mini[repaint](B)
    }
    , 100);
    this[doLayout]()
}
;
ol1O = function(R, J, C) {
    var _ = R.getMonth()
      , F = this[getFirstDateOfMonth](R)
      , K = new Date(F[getTime]())
      , A = mini.clearTime(new Date())[getTime]()
      , D = this.value ? mini.clearTime(this.value)[getTime]() : -1
      , N = this.rows > 1 || this.columns > 1
      , P = "";
    P += "<table class=\"mini-calendar-view\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
    if (this.showHeader) {
        P += "<tr ><td colSpan=\"10\" class=\"mini-calendar-header\"><div class=\"mini-calendar-headerInner\">";
        if (J == 0 && C == 0) {
            P += "<div class=\"mini-calendar-prev\">";
            if (this.showYearButtons)
                P += "<span class=\"mini-calendar-yearPrev\"></span>";
            if (this.showMonthButtons)
                P += "<span class=\"mini-calendar-monthPrev\"></span>";
            P += "</div>"
        }
        if (J == 0 && C == this.columns - 1) {
            P += "<div class=\"mini-calendar-next\">";
            if (this.showMonthButtons)
                P += "<span class=\"mini-calendar-monthNext\"></span>";
            if (this.showYearButtons)
                P += "<span class=\"mini-calendar-yearNext\"></span>";
            P += "</div>"
        }
        P += "<span class=\"mini-calendar-title\">" + mini.formatDate(R, this.format);
        +"</span>";
        P += "</div></td></tr>"
    }
    if (this.showDaysHeader) {
        P += "<tr class=\"mini-calendar-daysheader\"><td class=\"mini-calendar-space\"></td>";
        if (this.showWeekNumber)
            P += "<td sclass=\"mini-calendar-weeknumber\"></td>";
        for (var L = this.firstDayOfWeek, B = L + 7; L < B; L++) {
            var O = this[getShortWeek](L);
            P += "<td yAlign=\"middle\">";
            P += O;
            P += "</td>";
            F = new Date(F.getFullYear(),F.getMonth(),F.getDate() + 1)
        }
        P += "<td class=\"mini-calendar-space\"></td></tr>"
    }
    F = K;
    for (var H = 0; H <= 5; H++) {
        P += "<tr class=\"mini-calendar-days\"><td class=\"mini-calendar-space\"></td>";
        if (this.showWeekNumber) {
            var G = mini.getWeek(F.getFullYear(), F.getMonth() + 1, F.getDate());
            if (String(G).length == 1)
                G = "0" + G;
            P += "<td class=\"mini-calendar-weeknumber\" yAlign=\"middle\">" + G + "</td>"
        }
        for (L = this.firstDayOfWeek,
        B = L + 7; L < B; L++) {
            var M = this[isWeekend](F)
              , I = mini.clearTime(F)[getTime]()
              , $ = I == A
              , E = this[isSelectedDate](F);
            if (_ != F.getMonth() && N)
                I = -1;
            var Q = this.OOlO1o(F);
            P += "<td yAlign=\"middle\" id=\"";
            P += this.uid + "$" + I;
            P += "\" class=\"mini-calendar-date ";
            if (M)
                P += " mini-calendar-weekend ";
            if (Q[allowSelect] == false)
                P += " mini-calendar-disabled ";
            if (_ != F.getMonth() && N)
                ;
            else {
                if (E)
                    P += " " + this.O1o0 + " ";
                if ($)
                    P += " mini-calendar-today "
            }
            if (_ != F.getMonth())
                P += " mini-calendar-othermonth ";
            P += "\">";
            if (_ != F.getMonth() && N)
                ;
            else
                P += Q.dateHtml;
            P += "</td>";
            F = new Date(F.getFullYear(),F.getMonth(),F.getDate() + 1)
        }
        P += "<td class=\"mini-calendar-space\"></td></tr>"
    }
    P += "<tr class=\"mini-calendar-bottom\" colSpan=\"10\"><td ></td></tr>";
    P += "</table>";
    return P
}
;
o1o1Oo = function($) {
    var _ = {
        date: $,
        dateCls: "",
        dateStyle: "",
        dateHtml: $.getDate(),
        allowSelect: true
    };
    this[fire]("drawdate", _);
    return _
}
;
O0o01O = function(_, $) {
    var A = {
        date: _,
        action: $
    };
    this[fire]("dateclick", A);
    this.Ollll()
}
;
ol1l = function(_) {
    if (!_)
        return;
    this[hideMenu]();
    this.menuYear = parseInt(this.viewDate.getFullYear() / 10) * 10;
    this.ll0OOelectMonth = this.viewDate.getMonth();
    this.ll0OOelectYear = this.viewDate.getFullYear();
    var A = "<div class=\"mini-calendar-menu\"></div>";
    this.menuEl = mini.append(document.body, A);
    this[updateMenu](this.viewDate);
    var $ = this[getBox]();
    if (this.el.style.borderWidth == "0px")
        this.menuEl.style.border = "0";
    oO11Oo(this.menuEl, $);
    l1Oo0O(this.menuEl, "click", this.Oo10, this);
    l1Oo0O(document, "mousedown", this.lolool, this)
}
;
Ollo = function() {
    if (this.menuEl) {
        O1l0(this.menuEl, "click", this.Oo10, this);
        O1l0(document, "mousedown", this.lolool, this);
        jQuery(this.menuEl).remove();
        this.menuEl = null 
    }
}
;
OloOo = function() {
    var C = "<div class=\"mini-calendar-menu-months\">";
    for (var $ = 0, B = 12; $ < B; $++) {
        var _ = mini.getShortMonth($)
          , A = "";
        if (this.ll0OOelectMonth == $)
            A = "mini-calendar-menu-selected";
        C += "<a id=\"" + $ + "\" class=\"mini-calendar-menu-month " + A + "\" href=\"javascript:void(0);\" hideFocus onclick=\"return false\">" + _ + "</a>"
    }
    C += "<div style=\"clear:both;\"></div></div>";
    C += "<div class=\"mini-calendar-menu-years\">";
    for ($ = this.menuYear,
    B = this.menuYear + 10; $ < B; $++) {
        _ = $,
        A = "";
        if (this.ll0OOelectYear == $)
            A = "mini-calendar-menu-selected";
        C += "<a id=\"" + $ + "\" class=\"mini-calendar-menu-year " + A + "\" href=\"javascript:void(0);\" hideFocus onclick=\"return false\">" + _ + "</a>"
    }
    C += "<div class=\"mini-calendar-menu-prevYear\"></div><div class=\"mini-calendar-menu-nextYear\"></div><div style=\"clear:both;\"></div></div>";
    C += "<div class=\"mini-calendar-footer\">" + "<span class=\"mini-calendar-okButton\">" + this.okText + "</span>" + "<span class=\"mini-calendar-footerSpace\"></span>" + "<span class=\"mini-calendar-cancelButton\">" + this.cancelText + "</span>" + "</div><div style=\"clear:both;\"></div>";
    this.menuEl.innerHTML = C
}
;
ll0o0o = function(C) {
    var _ = C.target
      , B = llOo(_, "mini-calendar-menu-month")
      , $ = llOo(_, "mini-calendar-menu-year");
    if (B) {
        this.ll0OOelectMonth = parseInt(B.id);
        this[updateMenu]()
    } else if ($) {
        this.ll0OOelectYear = parseInt($.id);
        this[updateMenu]()
    } else if (llOo(_, "mini-calendar-menu-prevYear")) {
        this.menuYear = this.menuYear - 1;
        this.menuYear = parseInt(this.menuYear / 10) * 10;
        this[updateMenu]()
    } else if (llOo(_, "mini-calendar-menu-nextYear")) {
        this.menuYear = this.menuYear + 11;
        this.menuYear = parseInt(this.menuYear / 10) * 10;
        this[updateMenu]()
    } else if (llOo(_, "mini-calendar-okButton")) {
        var A = new Date(this.ll0OOelectYear,this.ll0OOelectMonth,1);
        this[setViewDate](A);
        this[hideMenu]()
    } else if (llOo(_, "mini-calendar-cancelButton"))
        this[hideMenu]()
}
;
o1O01 = function($) {
    if (!llOo($.target, "mini-calendar-menu"))
        this[hideMenu]()
}
;
lol00 = function(H) {
    var G = this.viewDate;
    if (this.enabled == false)
        return;
    var C = H.target
      , F = llOo(H.target, "mini-calendar-title");
    if (llOo(C, "mini-calendar-monthNext")) {
        G.setMonth(G.getMonth() + 1);
        this[setViewDate](G)
    } else if (llOo(C, "mini-calendar-yearNext")) {
        G.setFullYear(G.getFullYear() + 1);
        this[setViewDate](G)
    } else if (llOo(C, "mini-calendar-monthPrev")) {
        G.setMonth(G.getMonth() - 1);
        this[setViewDate](G)
    } else if (llOo(C, "mini-calendar-yearPrev")) {
        G.setFullYear(G.getFullYear() - 1);
        this[setViewDate](G)
    } else if (llOo(C, "mini-calendar-tadayButton")) {
        var _ = new Date();
        this[setViewDate](_);
        this[setSelectedDate](_);
        if (this.currentTime) {
            var $ = new Date();
            this[setTime]($)
        }
        this.OoO01O(_, "today")
    } else if (llOo(C, "mini-calendar-clearButton")) {
        this[setSelectedDate](null );
        this[setTime](null );
        this.OoO01O(null , "clear")
    } else if (llOo(C, "mini-calendar-okButton"))
        this.OoO01O(null , "ok");
    else if (F)
        this[showMenu](F);
    var E = llOo(H.target, "mini-calendar-date");
    if (E && !O1O1Oo(E, "mini-calendar-disabled")) {
        var A = E.id.split("$")
          , B = parseInt(A[A.length - 1]);
        if (B == -1)
            return;
        var D = new Date(B);
        this.OoO01O(D)
    }
}
;
Ololo = function(C) {
    if (this.enabled == false)
        return;
    var B = llOo(C.target, "mini-calendar-date");
    if (B && !O1O1Oo(B, "mini-calendar-disabled")) {
        var $ = B.id.split("$")
          , _ = parseInt($[$.length - 1]);
        if (_ == -1)
            return;
        var A = new Date(_);
        this[setSelectedDate](A)
    }
}
;
l111o1 = function($) {
    this[fire]("timechanged");
    this.Ollll()
}
;
l1110 = function(B) {
    if (this.enabled == false)
        return;
    var _ = this[getSelectedDate]();
    if (!_)
        _ = new Date(this.viewDate[getTime]());
    switch (B.keyCode) {
    case 27:
        break;
    case 13:
        break;
    case 37:
        _ = mini.addDate(_, -1, "D");
        break;
    case 38:
        _ = mini.addDate(_, -7, "D");
        break;
    case 39:
        _ = mini.addDate(_, 1, "D");
        break;
    case 40:
        _ = mini.addDate(_, 7, "D");
        break;
    default:
        break
    }
    var $ = this;
    if (_.getMonth() != $.viewDate.getMonth()) {
        $[setViewDate](mini.cloneDate(_));
        $[focus]()
    }
    var A = this[getDateEl](_);
    if (A && O1O1Oo(A, "mini-calendar-disabled"))
        return;
    $[setSelectedDate](_);
    if (B.keyCode == 37 || B.keyCode == 38 || B.keyCode == 39 || B.keyCode == 40)
        B.preventDefault()
}
;
ol0O0 = function() {
    this[fire]("valuechanged")
}
;
l0l1l = function($) {
    var _ = mini.Calendar[superclass][getAttrs][call](this, $);
    mini[_ParseString]($, _, ["viewDate", "rows", "columns", "ondateclick", "ondrawdate", "ondatechanged", "timeFormat", "ontimechanged", "onvaluechanged"]);
    mini[_ParseBool]($, _, ["multiSelect", "showHeader", "showFooter", "showWeekNumber", "showDaysHeader", "showMonthButtons", "showYearButtons", "showTodayButton", "showClearButton", "showTime", "showOkButton"]);
    return _
}
;
ooOoO = function() {
    mini.HtmlFile[superclass][_create][call](this);
    this.lo1o01 = mini.append(this.el, "<input type=\"file\" hideFocus class=\"mini-htmlfile-file\" name=\"" + this.name + "\" ContentEditable=false/>");
    l1Oo0O(this.oO0o1l, "mousemove", this.lolO, this);
    l1Oo0O(this.lo1o01, "change", this.o1O1l, this)
}
;
o0ooo = function() {
    var $ = "onmouseover=\"O0Oo0(this,'" + this.oooOO1 + "');\" " + "onmouseout=\"Ol00(this,'" + this.oooOO1 + "');\"";
    return "<span class=\"mini-buttonedit-button\" " + $ + ">" + this.buttonText + "</span>"
}
;
l0O0o = function($) {
    this.value = this.ll1l1O.value = this.lo1o01.value;
    this.Ollll();
    $ = {
        htmlEvent: $
    };
    this[fire]("fileselect", $)
}
;
lo0oo = function(B) {
    var A = B.pageX
      , _ = B.pageY
      , $ = OOl1o0(this.el);
    A = (A - $.x - 5);
    _ = (_ - $.y - 5);
    if (this.enabled == false) {
        A = -20;
        _ = -20
    }
    this.lo1o01.style.display = "";
    this.lo1o01.style.left = A + "px";
    this.lo1o01.style.top = _ + "px"
}
;
o0l0o = function(B) {
    if (!this.limitType)
        return;
    var A = B.value.split(".")
      , $ = "*." + A[A.length - 1]
      , _ = this.limitType.split(";");
    if (_.length > 0 && _[indexOf]($) == -1) {
        B.errorText = this.limitTypeErrorText + this.limitType;
        B[isValid] = false
    }
}
;
o1lo0 = function($) {
    this.name = $;
    mini.setAttr(this.lo1o01, "name", this.name)
}
;
olllo = function() {
    return this.ll1l1O.value
}
;
o00o0l = function($) {
    this.buttonText = $
}
;
o1o00 = function() {
    return this.buttonText
}
;

;oOoOo=function () {this.OoloO(); this.lO11o(); mini.layout(this.o01loo); mini.layout(this.oO0o01); mini.layout(this.o111); mini[repaint](this.el); this._doLayouted = true; }
oOll0 = function($) {
    this.limitType = $
}
;
oo1O = function() {
    return this.limitType
}
;
lOOl = function($) {
    var _ = mini.HtmlFile[superclass][getAttrs][call](this, $);
    mini[_ParseString]($, _, ["limitType", "buttonText", "limitTypeErrorText"]);
    return _
}
;
O1oO = function() {
    this.el = document.createElement("div");
    this.el.className = "mini-splitter";
    this.el.innerHTML = "<div class=\"mini-splitter-border\"><div id=\"1\" class=\"mini-splitter-pane mini-splitter-pane1\"></div><div id=\"2\" class=\"mini-splitter-pane mini-splitter-pane2\"></div><div class=\"mini-splitter-handler\"></div></div>";
    this.oO0o1l = this.el.firstChild;
    this.l1o01 = this.oO0o1l.firstChild;
    this.o0Oool = this.oO0o1l.childNodes[1];
    this.l0ool1 = this.oO0o1l.lastChild
}
;
o1010 = function() {
    if (!this[canLayout]())
        return;
    this.l0ool1.style.cursor = this[allowResize] ? "" : "default";
    Ol00(this.el, "mini-splitter-vertical");
    if (this.vertical)
        O0Oo0(this.el, "mini-splitter-vertical");
    Ol00(this.l1o01, "mini-splitter-pane1-vertical");
    Ol00(this.o0Oool, "mini-splitter-pane2-vertical");
    if (this.vertical) {
        O0Oo0(this.l1o01, "mini-splitter-pane1-vertical");
        O0Oo0(this.o0Oool, "mini-splitter-pane2-vertical")
    }
    Ol00(this.l0ool1, "mini-splitter-handler-vertical");
    if (this.vertical)
        O0Oo0(this.l0ool1, "mini-splitter-handler-vertical");
    var B = this[getHeight](true)
      , _ = this[getWidth](true);
    if (!jQuery.boxModel) {
        var Q = OOoo(this.oO0o1l);
        B = B + Q.top + Q.bottom;
        _ = _ + Q.left + Q.right
    }
    this.oO0o1l.style.width = _ + "px";
    this.oO0o1l.style.height = B + "px";
    var $ = this.l1o01
      , C = this.o0Oool
      , G = jQuery($)
      , I = jQuery(C);
    $.style.display = C.style.display = this.l0ool1.style.display = "";
    var D = this[handlerSize];
    this.pane1.size = String(this.pane1.size);
    this.pane2.size = String(this.pane2.size);
    var F = parseFloat(this.pane1.size)
      , H = parseFloat(this.pane2.size)
      , O = isNaN(F)
      , T = isNaN(H)
      , N = !isNaN(F) && this.pane1.size[indexOf]("%") != -1
      , R = !isNaN(H) && this.pane2.size[indexOf]("%") != -1
      , J = !O && !N
      , M = !T && !R
      , P = this.vertical ? B - this[handlerSize] : _ - this[handlerSize]
      , K = p2Size = 0;
    if (O || T) {
        if (O && T) {
            K = parseInt(P / 2);
            p2Size = P - K
        } else if (J) {
            K = F;
            p2Size = P - K
        } else if (N) {
            K = parseInt(P * F / 100);
            p2Size = P - K
        } else if (M) {
            p2Size = H;
            K = P - p2Size
        } else if (R) {
            p2Size = parseInt(P * H / 100);
            K = P - p2Size
        }
    } else if (N && M) {
        p2Size = H;
        K = P - p2Size
    } else if (J && R) {
        K = F;
        p2Size = P - K
    } else {
        var L = F + H;
        K = parseInt(P * F / L);
        p2Size = P - K
    }
    if (K > this.pane1.maxSize) {
        K = this.pane1.maxSize;
        p2Size = P - K
    }
    if (p2Size > this.pane2.maxSize) {
        p2Size = this.pane2.maxSize;
        K = P - p2Size
    }
    if (K < this.pane1.minSize) {
        K = this.pane1.minSize;
        p2Size = P - K
    }
    if (p2Size < this.pane2.minSize) {
        p2Size = this.pane2.minSize;
        K = P - p2Size
    }
    if (this.pane1.expanded == false) {
        p2Size = P;
        K = 0;
        $.style.display = "none"
    } else if (this.pane2.expanded == false) {
        K = P;
        p2Size = 0;
        C.style.display = "none"
    }
    if (this.pane1.visible == false) {
        p2Size = P + D;
        K = D = 0;
        $.style.display = "none";
        this.l0ool1.style.display = "none"
    } else if (this.pane2.visible == false) {
        K = P + D;
        p2Size = D = 0;
        C.style.display = "none";
        this.l0ool1.style.display = "none"
    }
    if (this.vertical) {
        oO1Ol($, _);
        oO1Ol(C, _);
        OO01($, K);
        OO01(C, p2Size);
        C.style.top = (K + D) + "px";
        this.l0ool1.style.left = "0px";
        this.l0ool1.style.top = K + "px";
        oO1Ol(this.l0ool1, _);
        OO01(this.l0ool1, this[handlerSize]);
        $.style.left = "0px";
        C.style.left = "0px"
    } else {
        oO1Ol($, K);
        oO1Ol(C, p2Size);
        OO01($, B);
        OO01(C, B);
        C.style.left = (K + D) + "px";
        this.l0ool1.style.top = "0px";
        this.l0ool1.style.left = K + "px";
        oO1Ol(this.l0ool1, this[handlerSize]);
        OO01(this.l0ool1, B);
        $.style.top = "0px";
        C.style.top = "0px"
    }
    var S = "<div class=\"mini-splitter-handler-buttons\">";
    if (!this.pane1.expanded || !this.pane2.expanded) {
        if (!this.pane1.expanded) {
            if (this.pane1[showCollapseButton])
                S += "<a id=\"1\" class=\"mini-splitter-pane2-button\"></a>"
        } else if (this.pane2[showCollapseButton])
            S += "<a id=\"2\" class=\"mini-splitter-pane1-button\"></a>"
    } else {
        if (this.pane1[showCollapseButton])
            S += "<a id=\"1\" class=\"mini-splitter-pane1-button\"></a>";
        if (this[allowResize])
            if ((!this.pane1[showCollapseButton] && !this.pane2[showCollapseButton])
                )
                    S += "<span class=\"mini-splitter-resize-button\"></span>";
            if (this.pane2[showCollapseButton])
                S += "<a id=\"2\" class=\"mini-splitter-pane2-button\"></a>"
        }
        S += "</div>";
        this.l0ool1.innerHTML = S;
        var E = this.l0ool1.firstChild;
        E.style.display = this.showHandleButton ? "" : "none";
        var A = OOl1o0(E);
        if (this.vertical)
            E.style.marginLeft = -A.width / 2 + "px";
        else
            E.style.marginTop = -A.height / 2 + "px";
        if (!this.pane1.visible || !this.pane2.visible || !this.pane1.expanded || !this.pane2.expanded)
            O0Oo0(this.l0ool1, "mini-splitter-nodrag");
        else
            Ol00(this.l0ool1, "mini-splitter-nodrag");
        mini.layout(this.oO0o1l);
        this[fire]("layout")
    }
    ;
    o1OOoBox = function($) {
        var _ = this[getPaneEl]($);
        if (!_)
            return null ;
        return OOl1o0(_)
    }
    ;
    lo001 = function(_, F) {
        var $ = this[getPane](_);
        if (!$)
            return;
        mini.copyTo($, F);
        var B = this[getPaneEl](_)
          , C = $.body;
        delete $.body;
        if (C) {
            if (!mini.isArray(C))
                C = [C];
            for (var A = 0, E = C.length; A < E; A++)
                mini.append(B, C[A])
        }
        if ($.bodyParent) {
            var D = $.bodyParent;
            while (D.firstChild)
                B.appendChild(D.firstChild)
        }
        delete $.bodyParent;
        B.id = $.id;
        O1lo11(B, $.style);
        O0Oo0(B, $["class"]);
        if ($.controls) {
            var _ = $ == this.pane1 ? 1 : 2;
            this[setPaneControls](_, $.controls);
            delete $.controls
        }
        this[doUpdate]()
    }
    ;
    ll10O = function(_) {
        var $ = this[getPane](_);
        if (!$)
            return;
        $.expanded = false;
        var A = $ == this.pane1 ? this.pane2 : this.pane1;
        if (A.expanded == false) {
            A.expanded = true;
            A.visible = true
        }
        this[doUpdate]();
        var B = {
            pane: $,
            paneIndex: this.pane1 == $ ? 1 : 2
        };
        this[fire]("collapse", B)
    }
    ;
    ooOl1 = function(B) {
        var A = B.target;
        if (!l1oooo(this.l0ool1, A))
            return;
        var _ = parseInt(A.id)
          , $ = this[getPane](_)
          , B = {
            pane: $,
            paneIndex: _,
            cancel: false
        };
        if ($.expanded)
            this[fire]("beforecollapse", B);
        else
            this[fire]("beforeexpand", B);
        if (B.cancel == true)
            return;
        if (A.className == "mini-splitter-pane1-button")
            this[togglePane](_);
        else if (A.className == "mini-splitter-pane2-button")
            this[togglePane](_)
    }
    ;
    ooO0O = function(A) {
        var _ = A.target;
        if (!this[allowResize])
            return;
        if (!this.pane1.visible || !this.pane2.visible || !this.pane1.expanded || !this.pane2.expanded)
            return;
        if (l1oooo(this.l0ool1, _))
            if (_.className == "mini-splitter-pane1-button" || _.className == "mini-splitter-pane2-button")
                ;
            else {
                var $ = this.O01l0l();
                $.start(A)
            }
    }
    ;
    l0O0l = function($) {
        this.o110Ol = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
        this.OO0loo = mini.append(document.body, "<div class=\"mini-proxy\"></div>");
        this.OO0loo.style.cursor = this.vertical ? "n-resize" : "w-resize";
        this.handlerBox = OOl1o0(this.l0ool1);
        this.elBox = OOl1o0(this.oO0o1l, true);
        oO11Oo(this.OO0loo, this.handlerBox)
    }
    ;
    olOo0 = function(C) {
        if (!this.handlerBox)
            return;
        if (!this.elBox)
            this.elBox = OOl1o0(this.oO0o1l, true);
        var B = this.elBox.width
          , D = this.elBox.height
          , E = this[handlerSize]
          , I = this.vertical ? D - this[handlerSize] : B - this[handlerSize]
          , A = this.pane1.minSize
          , F = this.pane1.maxSize
          , $ = this.pane2.minSize
          , G = this.pane2.maxSize;
        if (this.vertical == true) {
            var _ = C.now[1] - C.init[1]
              , H = this.handlerBox.y + _;
            if (H - this.elBox.y > F)
                H = this.elBox.y + F;
            if (H + this.handlerBox.height < this.elBox.bottom - G)
                H = this.elBox.bottom - G - this.handlerBox.height;
            if (H - this.elBox.y < A)
                H = this.elBox.y + A;
            if (H + this.handlerBox.height > this.elBox.bottom - $)
                H = this.elBox.bottom - $ - this.handlerBox.height;
            mini.setY(this.OO0loo, H)
        } else {
            var J = C.now[0] - C.init[0]
              , K = this.handlerBox.x + J;
            if (K - this.elBox.x > F)
                K = this.elBox.x + F;
            if (K + this.handlerBox.width < this.elBox.right - G)
                K = this.elBox.right - G - this.handlerBox.width;
            if (K - this.elBox.x < A)
                K = this.elBox.x + A;
            if (K + this.handlerBox.width > this.elBox.right - $)
                K = this.elBox.right - $ - this.handlerBox.width;
            mini.setX(this.OO0loo, K)
        }
    }
    ;
    lOlll = function(_) {
        var $ = this.elBox.width
          , B = this.elBox.height
          , C = this[handlerSize]
          , D = parseFloat(this.pane1.size)
          , E = parseFloat(this.pane2.size)
          , I = isNaN(D)
          , N = isNaN(E)
          , J = !isNaN(D) && this.pane1.size[indexOf]("%") != -1
          , M = !isNaN(E) && this.pane2.size[indexOf]("%") != -1
          , G = !I && !J
          , K = !N && !M
          , L = this.vertical ? B - this[handlerSize] : $ - this[handlerSize]
          , A = OOl1o0(this.OO0loo)
          , H = A.x - this.elBox.x
          , F = L - H;
        if (this.vertical) {
            H = A.y - this.elBox.y;
            F = L - H
        }
        if (I || N) {
            if (I && N) {
                D = parseFloat(H / L * 100).toFixed(1);
                this.pane1.size = D + "%"
            } else if (G) {
                D = H;
                this.pane1.size = D
            } else if (J) {
                D = parseFloat(H / L * 100).toFixed(1);
                this.pane1.size = D + "%"
            } else if (K) {
                E = F;
                this.pane2.size = E
            } else if (M) {
                E = parseFloat(F / L * 100).toFixed(1);
                this.pane2.size = E + "%"
            }
        } else if (J && K)
            this.pane2.size = F;
        else if (G && M)
            this.pane1.size = H;
        else {
            this.pane1.size = parseFloat(H / L * 100).toFixed(1);
            this.pane2.size = 100 - this.pane1.size
        }
        jQuery(this.OO0loo).remove();
        jQuery(this.o110Ol).remove();
        this.o110Ol = null ;
        this.OO0loo = null ;
        this.elBox = this.handlerBox = null ;
        this[doLayout]();
        this[fire]("resize")
    }
    ;
    o1ool1 = function(B) {
        var G = mini.Splitter[superclass][getAttrs][call](this, B);
        mini[_ParseBool](B, G, ["allowResize", "vertical", "showHandleButton", "onresize"]);
        mini[_ParseInt](B, G, ["handlerSize"]);
        var A = []
          , F = mini[getChildNodes](B);
        for (var _ = 0, E = 2; _ < E; _++) {
            var C = F[_]
              , D = jQuery(C)
              , $ = {};
            A.push($);
            if (!C)
                continue;$.style = C.style.cssText;
            mini[_ParseString](C, $, ["cls", "size", "id", "class"]);
            mini[_ParseBool](C, $, ["visible", "expanded", "showCollapseButton"]);
            mini[_ParseInt](C, $, ["minSize", "maxSize", "handlerSize"]);
            $.bodyParent = C
        }
        G.panes = A;
        return G
    }
    ;
    ooo0l = function() {
        var $ = this.el = document.createElement("div");
        this.el.className = "mini-menuitem";
        this.el.innerHTML = "<div class=\"mini-menuitem-inner\"><div class=\"mini-menuitem-icon\"></div><div class=\"mini-menuitem-text\"></div><div class=\"mini-menuitem-allow\"></div></div>";
        this.OolO10 = this.el.firstChild;
        this.lOOo1 = this.OolO10.firstChild;
        this.ll1l1O = this.OolO10.childNodes[1];
        this.allowEl = this.OolO10.lastChild
    }
    ;
    oO00 = function() {
        var $ = this[iconStyle] || this.iconCls || this[checkOnClick];
        if (this.lOOo1) {
            O1lo11(this.lOOo1, this[iconStyle]);
            O0Oo0(this.lOOo1, this.iconCls);
            this.lOOo1.style.display = $ ? "block" : "none"
        }
        if (this.iconPosition == "top")
            O0Oo0(this.el, "mini-menuitem-icontop");
        else
            Ol00(this.el, "mini-menuitem-icontop")
    }
    ;
    lOolo = function() {
        if (this.ll1l1O)
            this.ll1l1O.innerHTML = this.text;
        this[_doUpdateIcon]();
        if (this.checked)
            O0Oo0(this.el, this.l1OlOO);
        else
            Ol00(this.el, this.l1OlOO);
        if (this.allowEl)
            if (this.menu && this.menu.items.length > 0)
                this.allowEl.style.display = "block";
            else
                this.allowEl.style.display = "none"
    }
    ;
    o00ol = function($) {
        if (mini.isArray($))
            $ = {
                type: "menu",
                items: $
            };
        if (this.menu !== $) {
            this.menu = mini.getAndCreate($);
            this.menu[hide]();
            this.menu.ownerItem = this;
            this[doUpdate]();
            this.menu[on]("itemschanged", this.Oo1Oo, this)
        }
    }
    ;
    o0O1O1 = function() {
        if (this.menu && this.menu[isDisplay]() == false) {
            this.menu.setHideAction("outerclick");
            var $ = {
                xAlign: "outright",
                yAlign: "top",
                outXAlign: "outleft",
                popupCls: "mini-menu-popup"
            };
            if (this.ownerMenu && this.ownerMenu.vertical == false) {
                $.xAlign = "left";
                $.yAlign = "below";
                $.outXAlign = null 
            }
            this.menu[showAtEl](this.el, $)
        }
    }
    ;
    Ooll11Menu = function() {
        if (this.menu)
            this.menu[hide]()
    }
    ;
    oOOoo = function(D) {
        if (this[isReadOnly]())
            return;
        if (this[checkOnClick])
            if (this.ownerMenu && this[groupName]) {
                var B = this.ownerMenu[getGroupItems](this[groupName]);
                if (B.length > 0) {
                    if (this.checked == false) {
                        for (var _ = 0, C = B.length; _ < C; _++) {
                            var $ = B[_];
                            if ($ != this)
                                $[setChecked](false)
                        }
                        this[setChecked](true)
                    }
                } else
                    this[setChecked](!this.checked)
            } else
                this[setChecked](!this.checked);
        this[fire]("click");
        var A = this[getTopMenu]();
        if (A)
            A[_OnItemClick](this, D)
    }
    ;
    o11olo = function($) {
        if (this[isReadOnly]())
            return;
        this.oOo1O();
        O0Oo0(this.el, this._hoverCls);
        this.el.title = this.text;
        if (this.ll1l1O.scrollWidth > this.ll1l1O.clientWidth)
            this.el.title = this.text;
        else
            this.el.title = "";
        if (this.ownerMenu)
            if (this.ownerMenu[isVertical]() == true)
                this.ownerMenu[showItemMenu](this);
            else if (this.ownerMenu[hasShowItemMenu]())
                this.ownerMenu[showItemMenu](this)
    }
    ;
    lll1 = function($) {
        var A = mini.MenuItem[superclass][getAttrs][call](this, $)
          , _ = jQuery($);
        A.text = $.innerHTML;
        mini[_ParseString]($, A, ["text", "iconCls", "iconStyle", "iconPosition", "groupName", "onclick", "oncheckedchanged"]);
        mini[_ParseBool]($, A, ["checkOnClick", "checked"]);
        return A
    }
    ;
    oOOOo = function() {
        var $ = this.el = document.createElement("div");
        this.el.className = "mini-grid";
        this.el.style.display = "block";
        this.el.tabIndex = 1;
        var _ = "<div class=\"mini-grid-border\">" + "<div class=\"mini-grid-header\"><div class=\"mini-grid-headerInner\"></div></div>" + "<div class=\"mini-grid-filterRow\"></div>" + "<div class=\"mini-grid-body\"><div class=\"mini-grid-bodyInner\"></div><div class=\"mini-grid-body-scrollHeight\"></div></div>" + "<div class=\"mini-grid-scroller\"><div></div></div>" + "<div class=\"mini-grid-summaryRow\"></div>" + "<div class=\"mini-grid-footer\"></div>" + "<div class=\"mini-resizer-trigger\" style=\"\"></div>" + "<a href=\"#\" class=\"mini-grid-focus\" style=\"position:absolute;left:-10px;top:-10px;width:0px;height:0px;outline:none;\" hideFocus onclick=\"return false\" ></a>" + "</div>";
        this.el.innerHTML = _;
        this.oO0o1l = this.el.firstChild;
        this.l10OO = this.oO0o1l.childNodes[0];
        this.o01loo = this.oO0o1l.childNodes[1];
        this.O1OOoo = this.oO0o1l.childNodes[2];
        this._bodyInnerEl = this.O1OOoo.childNodes[0];
        this._bodyScrollEl = this.O1OOoo.childNodes[1];
        this._headerInnerEl = this.l10OO.firstChild;
        this.ol10O = this.oO0o1l.childNodes[3];
        this.oO0o01 = this.oO0o1l.childNodes[4];
        this.o111 = this.oO0o1l.childNodes[5];
        this.lOlOo1 = this.oO0o1l.childNodes[6];
        this._focusEl = this.oO0o1l.childNodes[7];
        this.l0ll();
        this.OOll0();
        O1lo11(this.O1OOoo, this.bodyStyle);
        O0Oo0(this.O1OOoo, this.bodyCls);
        this.OOo1o();
        this.o00ooRows()
    }
    ;
    l11Ol = function($) {
        if (this.O1OOoo) {
            mini[clearEvent](this.O1OOoo);
            this.O1OOoo = null 
        }
        if (this.ol10O) {
            mini[clearEvent](this.ol10O);
            this.ol10O = null 
        }
        this.oO0o1l = null ;
        this.l10OO = null ;
        this.o01loo = null ;
        this.O1OOoo = null ;
        this.ol10O = null ;
        this.oO0o01 = null ;
        this.o111 = null ;
        this.lOlOo1 = null ;
        mini.DataGrid[superclass][destroy][call](this, $)
    }
    ;
    lO10 = function() {
        js_touchScroll(this.O1OOoo);
        l00l(function() {
            l1Oo0O(this.el, "click", this.o0O0lo, this);
            l1Oo0O(this.el, "dblclick", this.Ol1l0, this);
            l1Oo0O(this.el, "mousedown", this.ol1Ol, this);
            l1Oo0O(this.el, "mouseup", this.OOlooO, this);
            l1Oo0O(this.el, "mousemove", this.lolO, this);
            l1Oo0O(this.el, "mouseover", this.ol0OOo, this);
            l1Oo0O(this.el, "mouseout", this.o1oo0, this);
            l1Oo0O(this.el, "keydown", this.ll01o0, this);
            l1Oo0O(this.el, "keyup", this.loOOO, this);
            l1Oo0O(this.el, "contextmenu", this.OO0100, this);
            l1Oo0O(this.O1OOoo, "scroll", this.O0lO1, this);
            l1Oo0O(this.ol10O, "scroll", this.Oo0O00, this);
            l1Oo0O(this.el, "mousewheel", this.O0OOOO, this)
        }
        , this);
        this.l0OO10 = new o01l1(this);
        this.lOlol1 = new l0lO(this);
        this._ColumnMove = new o10O0(this);
        this.oOlloo = new o1Ol1(this);
        this._CellTip = new oOloo(this);
        this._Sort = new l0lOo(this);
        this.ll01loMenu = new mini.ll01loMenu(this)
    }
    ;
    o0OO1 = function() {
        this.lOlOo1.style.display = this[allowResize] ? "" : "none";
        this.o111.style.display = this[showFooter] ? "" : "none";
        this.oO0o01.style.display = this[showSummaryRow] ? "" : "none";
        this.o01loo.style.display = this[showFilterRow] ? "" : "none";
        this.l10OO.style.display = this.showHeader ? "" : "none"
    }
    ;
    ll00l = function() {
        try {
            var _ = this[getCurrent]();
            if (_) {
                var $ = this.l010lo(_);
                if ($) {
                    var A = OOl1o0($);
                    mini.setY(this._focusEl, A.top);
                    if (isOpera)
                        $[focus]();
                    else if (isChrome)
                        this.el[focus]();
                    else if (isGecko)
                        this.el[focus]();
                    else
                        this._focusEl[focus]()
                }
            } else
                this._focusEl[focus]()
        } catch (B) {}
    }
    ;
    l0001Data = function(A) {
        if (!mini.isArray(A))
            A = [];
        this.data = A;
        if (this.O001oo == true)
            this.OO0Ool = {};
        this.Ooo100 = [];
        this.l1O000 = {};
        this.Oolo0 = [];
        this.oOOlo0 = {};
        this._cellErrors = [];
        this._cellMapErrors = {};
        this._margedCells = null ;
        this._mergedCellMaps = null ;
        this.ll11l = null ;
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            _._uid = l00ll++;
            _._index = $;
            this.l1O000[_._uid] = _
        }
        this[doUpdate]()
    }
    ;
    l1l0ORange = function($, _) {
        if (!mini.isNumber($))
            $ = this[indexOf]($);
        if (!mini.isNumber(_))
            _ = this[indexOf](_);
        if (mini.isNull($) || mini.isNull(_))
            return;
        var A = this[getRange]($, _);
        this[selects](A)
    }
    ;
    O001l = function(F) {
        var A = F == "empty"
          , B = 0;
        if (A && this.showEmptyText == false)
            B = 1;
        var H = ""
          , D = this[getBottomColumns]();
        if (A)
            H += "<tr style=\"height:" + B + "px\">";
        else if (isIE) {
            if (isIE6 || isIE7 || (isIE8 && !mini.boxModel) || (isIE9 && !mini.boxModel))
                H += "<tr style=\"display:none;\">";
            else
                H += "<tr >"
        } else
            H += "<tr style=\"height:" + B + "px\">";
        for (var $ = 0, E = D.length; $ < E; $++) {
            var C = D[$]
              , _ = C.width
              , G = this.O1O0o(C) + "$" + F;
            H += "<td id=\"" + G + "\" style=\"padding:0;border:0;margin:0;height:" + B + "px;";
            if (C.width)
                H += "width:" + C.width;
            if ($ < this[frozenStartColumn] || C.visible == false)
                H += ";display:none;";
            H += "\" ></td>"
        }
        H += "</tr>";
        return H
    }
    ;
    lol0O0 = function() {
        if (this.o01loo.firstChild)
            this.o01loo.removeChild(this.o01loo.firstChild);
        var B = this[isFrozen]()
          , C = this[getBottomColumns]()
          , F = [];
        F[F.length] = "<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        F[F.length] = this.O0OlOl("filter");
        F[F.length] = "<tr >";
        for (var $ = 0, D = C.length; $ < D; $++) {
            var A = C[$]
              , E = this.o11o1(A);
            F[F.length] = "<td id=\"";
            F[F.length] = E;
            F[F.length] = "\" class=\"mini-grid-filterCell\" style=\"";
            if ((B && $ < this[frozenStartColumn]) || A.visible == false || A._hide == true)
                F[F.length] = ";display:none;";
            F[F.length] = "\"><span class=\"mini-grid-hspace\"></span></td>"
        }
        F[F.length] = "</tr></table><div class=\"mini-grid-scrollCell\"></div>";
        this.o01loo.innerHTML = F.join("");
        for ($ = 0,
        D = C.length; $ < D; $++) {
            A = C[$];
            if (A[filter]) {
                var _ = this[getFilterCellEl]($);
                A[filter][render](_)
            }
        }
    }
    ;
    O1loo = function() {
        var _ = this[getData]();
        if (this.oO0o01.firstChild)
            this.oO0o01.removeChild(this.oO0o01.firstChild);
        var B = this[isFrozen]()
          , C = this[getBottomColumns]()
          , F = [];
        F[F.length] = "<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        F[F.length] = this.O0OlOl("summary");
        F[F.length] = "<tr >";
        for (var $ = 0, D = C.length; $ < D; $++) {
            var A = C[$]
              , E = this.OlOo0(A)
              , G = this[_OnDrawSummaryCell](_, A);
            F[F.length] = "<td id=\"";
            F[F.length] = E;
            F[F.length] = "\" class=\"mini-grid-summaryCell " + G.cellCls + "\" style=\"" + G.cellStyle + ";";
            if ((B && $ < this[frozenStartColumn]) || A.visible == false || A._hide == true)
                F[F.length] = ";display:none;";
            F[F.length] = "\">";
            F[F.length] = G.cellHtml;
            F[F.length] = "</td>"
        }
        F[F.length] = "</tr></table><div class=\"mini-grid-scrollCell\"></div>";
        this.oO0o01.innerHTML = F.join("")
    }
    ;
    OlOlo = function(L) {
        L = L || "";
        var N = this[isFrozen]()
          , A = this.olo1O1()
          , G = this[getBottomColumns]()
          , H = G.length
          , F = [];
        F[F.length] = "<table style=\"" + L + ";display:table\" class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        F[F.length] = this.O0OlOl("header");
        for (var M = 0, _ = A.length; M < _; M++) {
            var D = A[M];
            F[F.length] = "<tr >";
            for (var I = 0, E = D.length; I < E; I++) {
                var B = D[I]
                  , C = this.o11lText(B)
                  , J = this.O1O0o(B)
                  , $ = "";
                if (this.sortField == B.field)
                    $ = this.sortOrder == "asc" ? "mini-grid-asc" : "mini-grid-desc";
                F[F.length] = "<td id=\"";
                F[F.length] = J;
                F[F.length] = "\" class=\"mini-grid-headerCell " + $ + " " + (B.headerCls || "") + " ";
                if (I == H - 1)
                    F[F.length] = " mini-grid-last-column ";
                F[F.length] = "\" style=\"";
                var K = G[indexOf](B);
                if ((N && K != -1 && K < this[frozenStartColumn]) || B.visible == false || B._hide == true)
                    F[F.length] = ";display:none;";
                if (B.columns && B.columns.length > 0 && B.colspan == 0)
                    F[F.length] = ";display:none;";
                if (B.headerStyle)
                    F[F.length] = B.headerStyle + ";";
                if (B.headerAlign)
                    F[F.length] = "text-align:" + B.headerAlign + ";";
                F[F.length] = "\" ";
                if (B.rowspan)
                    F[F.length] = "rowspan=\"" + B.rowspan + "\" ";
                if (B.colspan)
                    F[F.length] = "colspan=\"" + B.colspan + "\" ";
                F[F.length] = "><div class=\"mini-grid-cellInner\">";
                F[F.length] = C;
                if ($)
                    F[F.length] = "<span class=\"mini-grid-sortIcon\"></span>";
                F[F.length] = "</div>";
                F[F.length] = "</td>"
            }
            F[F.length] = "</tr>"
        }
        F[F.length] = "</table>";
        var O = F.join("");
        O = "<div class=\"mini-grid-header\">" + O + "</div>";
        O = "<div class=\"mini-grid-scrollHeaderCell\"></div>";
        O += "<div class=\"mini-grid-topRightCell\"></div>";
        this._headerInnerEl.innerHTML = F.join("") + O;
        this._topRightCellEl = this._headerInnerEl.lastChild;
        this[fire]("refreshHeader")
    }
    ;
    Ol00oo = function() {
        var D = this[getBottomColumns]();
        for (var G = 0, P = D.length; G < P; G++) {
            var B = D[G];
            delete B._hide
        }
        this.oolOOo();
        var U = this.data
          , K = this[isVirtualScroll]()
          , R = this._O1oO11()
          , S = []
          , V = this[isAutoHeight]()
          , _ = 0;
        if (K)
            _ = R.top;
        if (V)
            S[S.length] = "<table class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        else
            S[S.length] = "<table style=\"position:absolute;top:" + _ + "px;left:0;\" class=\"mini-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        S[S.length] = this.O0OlOl("body");
        if (U.length > 0) {
            if (this[isGrouping]()) {
                var J = 0
                  , T = this.Oo111()
                  , L = this.getVisibleColumns();
                for (var I = 0, $ = T.length; I < $; I++) {
                    var N = T[I]
                      , E = this.uid + "$group$" + N.id
                      , W = this.ll001(N);
                    S[S.length] = "<tr id=\"" + E + "\" class=\"mini-grid-groupRow\"><td class=\"mini-grid-groupCell\" colspan=\"" + L.length + "\"><div class=\"mini-grid-groupHeader\">";
                    S[S.length] = "<div class=\"mini-grid-group-ecicon\"></div>";
                    S[S.length] = "<div class=\"mini-grid-groupTitle\">" + W.cellHtml + "</div>";
                    S[S.length] = "</div></td></tr>";
                    var O = N.rows;
                    for (G = 0,
                    P = O.length; G < P; G++) {
                        var H = O[G];
                        this.oll1o(H, S, J++)
                    }
                    if (this.showGroupSummary)
                        ;
                }
            } else if (K) {
                var A = R.start
                  , C = R.end;
                for (G = A,
                P = C; G < P; G++) {
                    H = U[G];
                    this.oll1o(H, S, G)
                }
            } else
                for (G = 0,
                P = U.length; G < P; G++) {
                    H = U[G];
                    this.oll1o(H, S, G)
                }
        } else if (this.showEmptyText)
            S[S.length] = "<tr ><td class=\"mini-grid-emptyText\" colspan=\"" + this.getVisibleColumns().length + "\">" + this[emptyText] + "</td></tr>";
        S[S.length] = "</table>";
        if (this._bodyInnerEl.firstChild)
            this._bodyInnerEl.removeChild(this._bodyInnerEl.firstChild);
        this._bodyInnerEl.innerHTML = S.join("");
        if (K) {
            this._rowHeight = 23;
            try {
                var M = this._bodyInnerEl.firstChild.rows[1];
                if (M)
                    this._rowHeight = M.offsetHeight
            } catch (Q) {}
            var F = this._rowHeight * this.data.length;
            this._bodyScrollEl.style.display = "block";
            this._bodyScrollEl.style.height = F + "px"
        } else
            this._bodyScrollEl.style.display = "none"
    }
    ;
    OOO01 = function(F, D, P) {
        if (!mini.isNumber(P))
            P = this[indexOf](F);
        var L = P == this.data.length - 1
          , N = this[isFrozen]()
          , O = !D;
        if (!D)
            D = [];
        var A = this[getBottomColumns]()
          , G = -1
          , I = " "
          , E = -1
          , J = " ";
        D[D.length] = "<tr id=\"";
        D[D.length] = this.oo1O1(F);
        D[D.length] = "\" class=\"mini-grid-row ";
        if (this[isSelected](F)) {
            D[D.length] = this.o01Ol;
            D[D.length] = " "
        }
        if (F._state == "deleted")
            D[D.length] = "mini-grid-deleteRow ";
        if (F._state == "added" && this.showNewRow)
            D[D.length] = "mini-grid-newRow ";
        if (this[allowAlternating] && P % 2 == 1) {
            D[D.length] = this.ooooOl;
            D[D.length] = " "
        }
        G = D.length;
        D[D.length] = I;
        D[D.length] = "\" style=\"";
        E = D.length;
        D[D.length] = J;
        D[D.length] = "\">";
        var H = A.length - 1;
        for (var K = 0, $ = H; K <= $; K++) {
            var _ = A[K]
              , M = _.field ? this.Ol1O(F, _.field) : false
              , B = this.getCellError(F, _)
              , Q = this.OO0OO(F, _, P, K)
              , C = this.lloo0o(F, _);
            D[D.length] = "<td id=\"";
            D[D.length] = C;
            D[D.length] = "\" class=\"mini-grid-cell ";
            if (Q.cellCls)
                D[D.length] = Q.cellCls;
            if (B)
                D[D.length] = " mini-grid-cell-error ";
            if (this.lOoOl && this.lOoOl[0] == F && this.lOoOl[1] == _) {
                D[D.length] = " ";
                D[D.length] = this.olO0
            }
            if (L)
                D[D.length] = " mini-grid-last-row ";
            if (K == H)
                D[D.length] = " mini-grid-last-column ";
            if (N && this[frozenStartColumn] <= K && K <= this[frozenEndColumn]) {
                D[D.length] = " ";
                D[D.length] = this.Ool0 + " "
            }
            D[D.length] = "\" style=\"";
            if (_.align) {
                D[D.length] = "text-align:";
                D[D.length] = _.align;
                D[D.length] = ";"
            }
            if (Q.allowCellWrap)
                D[D.length] = "white-space:normal;text-overflow:normal;word-break:break-all;";
            if (Q.cellStyle) {
                D[D.length] = Q.cellStyle;
                D[D.length] = ";"
            }
            if (N && K < this[frozenStartColumn] || _.visible == false || _._hide == true)
                D[D.length] = "display:none;";
            if (Q.visible == false)
                D[D.length] = "display:none;";
            D[D.length] = "\" ";
            if (Q.rowSpan)
                D[D.length] = "rowspan=\"" + Q.rowSpan + "\"";
            if (Q.colSpan)
                D[D.length] = "colspan=\"" + Q.colSpan + "\"";
            D[D.length] = ">";
            if (M && this.showModified) {
                D[D.length] = "<div class=\"mini-grid-cell-inner mini-grid-cell-dirty\" style=\"";
                D[D.length] = "\">"
            }
            D[D.length] = Q.cellHtml;
            if (M)
                D[D.length] = "</div>";
            D[D.length] = "</td>";
            if (Q.rowCls)
                I = Q.rowCls;
            if (Q.rowStyle)
                J = Q.rowStyle
        }
        D[G] = I;
        D[E] = J;
        D[D.length] = "</tr>";
        if (O)
            return D.join("")
    }
    ;
    o00ll = function() {
        var $ = new Date();
        if (this.O1l1O1 === false)
            return;
        if (this[isAutoHeight]() == true)
            this[addCls]("mini-grid-auto");
        else
            this[removeCls]("mini-grid-auto");
        if (this.OOll0)
            this.OOll0();
        this[_doUpdateBody]();
        if (this[isVirtualScroll]())
            ;if (this[isFrozen]()) {
            var _ = this;
            _.Oo0O00()
        }
        this[doLayout]()
    }
    ;
    lOOlO = function() {
        if (!this[canLayout]())
            return;
        this.o01loo.scrollLeft = this.oO0o01.scrollLeft = this._headerInnerEl.scrollLeft = this.O1OOoo.scrollLeft;
        var L = new Date()
          , N = this[isFrozen]()
          , J = this._headerInnerEl.firstChild
          , C = this._bodyInnerEl.firstChild
          , G = this.o01loo.firstChild
          , $ = this.oO0o01.firstChild
          , K = this[getData]();
        if (K.length == 0)
            C.style.height = "1px";
        else
            C.style.height = "auto";
        var M = this[isAutoHeight]();
        h = this[getHeight](true);
        B = this[getWidth](true);
        var I = B;
        if (I < 17)
            I = 17;
        if (h < 0)
            h = 0;
        var H = I
          , _ = 2000;
        if (!M) {
            h = h - this[getHeaderHeight]() - this[getFooterHeight]() - this[getFilterRowHeight]() - this[getSummaryRowHeight]() - this.loOll();
            if (h < 0)
                h = 0;
            this.O1OOoo.style.height = h + "px";
            _ = h
        } else
            this.O1OOoo.style.height = "auto";
        var D = this.O1OOoo.scrollHeight
          , F = this.O1OOoo.clientHeight
          , A = jQuery(this.O1OOoo).css("overflow-y") == "hidden";
        if (this[isFitColumns]()) {
            if (A || F >= D || M) {
                var B = (H - 1) + "px";
                J.style.width = B;
                C.style.width = B;
                G.style.width = B;
                $.style.width = B
            } else {
                B = parseInt(H - 18);
                if (B < 0)
                    B = 0;
                B = B + "px";
                J.style.width = B;
                C.style.width = B;
                G.style.width = B;
                $.style.width = B
            }
            if (M)
                if (H >= this.O1OOoo.scrollWidth - 1)
                    this.O1OOoo.style.height = "auto";
                else
                    this.O1OOoo.style.height = (C.offsetHeight + 17) + "px";
            if (M && N)
                this.O1OOoo.style.height = "auto"
        } else {
            J.style.width = C.style.width = "0px";
            G.style.width = $.style.width = "0px"
        }
        if (this[isFitColumns]()) {
            if (!A && F < D) {
                B = I - 18;
                if (B < 0)
                    B = 0
            } else {
                this._headerInnerEl.style.width = "100%";
                this.o01loo.style.width = "100%";
                this.oO0o01.style.width = "100%";
                this.o111.style.width = "auto"
            }
        } else {
            this._headerInnerEl.style.width = "100%";
            this.o01loo.style.width = "100%";
            this.oO0o01.style.width = "100%";
            this.o111.style.width = "auto"
        }
        if (this[isFrozen]()) {
            if (!A && F < this.O1OOoo.scrollHeight)
                this.ol10O.style.width = (I - 17) + "px";
            else
                this.ol10O.style.width = (I) + "px";
            if (this.O1OOoo.offsetWidth < C.offsetWidth || this[isFrozen]()) {
                this.ol10O.firstChild.style.width = this.oo10o() + "px";
                J.style.width = C.style.width = "0px";
                G.style.width = $.style.width = "0px"
            } else
                this.ol10O.firstChild.style.width = "0px"
        }
        if (this.data.length == 0)
            this[_doInnerLayout]();
        else {
            var E = this;
            if (!this._innerLayoutTimer)
                this._innerLayoutTimer = setTimeout(function() {
                    E[_doInnerLayout]();
                    E._innerLayoutTimer = null 
                }
                , 10)
        }
        this[_doLayoutTopRightCell]();
        this[fire]("layout");
        if (this[isFrozen]())
            if (this.ol10O.scrollLeft != this.__frozenScrollLeft)
                this[_doScrollFrozen]()
    }
    ;
    l1OlO = function() {
        var A = this._headerInnerEl.firstChild
          , $ = A.offsetWidth + 1
          , _ = A.offsetHeight - 1;
        if (_ < 0)
            _ = 0;
        this._topRightCellEl.style.left = $ + "px";
        this._topRightCellEl.style.height = _ + "px"
    }
    ;
    oO0oO = function() {
        if (this.O1OOoo.offsetWidth < this._bodyInnerEl.firstChild.offsetWidth || this[isFrozen]()) {
            var _ = 0
              , B = this[getBottomColumns]();
            for (var $ = 0, C = B.length; $ < C; $++) {
                var A = B[$];
                _ += this[getColumnWidth](A)
            }
            return _
        } else
            return 0
    }
    ;
    O01O0Id = function($) {
        return this.uid + "$detail$" + $._uid
    }
    ;
    OO0loBox = function(_) {
        var $ = this.l010lo(_);
        if ($)
            return OOl1o0($);
        return null 
    }
    ;
    OO0losBox = function() {
        var G = []
          , C = this.data
          , B = 0;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var A = C[_]
              , F = this.oo1O1(A)
              , $ = document.getElementById(F);
            if ($) {
                var D = $.offsetHeight;
                G[_] = {
                    top: B,
                    height: D,
                    bottom: B + D
                };
                B += D
            }
        }
        return G
    }
    ;
    OOo0o = function(E, B) {
        E = this[getColumn](E);
        if (!E)
            return;
        if (mini.isNumber(B))
            B += "px";
        E.width = B;
        var _ = this.O1O0o(E) + "$header"
          , F = this.O1O0o(E) + "$body"
          , A = this.O1O0o(E) + "$filter"
          , D = this.O1O0o(E) + "$summary"
          , C = document.getElementById(_)
          , $ = document.getElementById(F)
          , G = document.getElementById(A)
          , H = document.getElementById(D);
        if (C)
            C.style.width = B;
        if ($)
            $.style.width = B;
        if (G)
            G.style.width = B;
        if (H)
            H.style.width = B;
        this[doLayout]();
        this[fire]("columnschanged")
    }
    ;
    l01Ol = function(B) {
        B = this[getColumn](B);
        if (!B)
            return 0;
        if (B.visible == false)
            return 0;
        var _ = 0
          , C = this.O1O0o(B) + "$body"
          , A = document.getElementById(C);
        if (A) {
            var $ = A.style.display;
            A.style.display = "";
            _ = o110O(A);
            A.style.display = $
        }
        return _
    }
    ;
    o0OO0 = function(E, R) {
        var L = document.getElementById(this.O1O0o(E));
        if (L)
            L.style.display = R ? "" : "none";
        var F = document.getElementById(this.o11o1(E));
        if (F)
            F.style.display = R ? "" : "none";
        var _ = document.getElementById(this.OlOo0(E));
        if (_)
            _.style.display = R ? "" : "none";
        var M = this.O1O0o(E) + "$header"
          , Q = this.O1O0o(E) + "$body"
          , B = this.O1O0o(E) + "$filter"
          , G = this.O1O0o(E) + "$summary"
          , O = document.getElementById(M);
        if (O)
            O.style.display = R ? "" : "none";
        var S = document.getElementById(B);
        if (S)
            S.style.display = R ? "" : "none";
        var T = document.getElementById(G);
        if (T)
            T.style.display = R ? "" : "none";
        if ($) {
            if (R && $.style.display == "")
                return;
            if (!R && $.style.display == "none")
                return
        }
        var $ = document.getElementById(Q);
        if ($)
            $.style.display = R ? "" : "none";
        var P = this.data;
        if (this[isVirtualScroll]()) {
            var I = this._O1oO11()
              , C = I.start
              , D = I.end;
            for (var K = C, H = D; K < H; K++) {
                var N = P[K]
                  , J = this.lloo0o(N, E)
                  , A = document.getElementById(J);
                if (A)
                    A.style.display = R ? "" : "none"
            }
        } else
            for (K = 0,
            H = this.data.length; K < H; K++) {
                N = this.data[K],
                J = this.lloo0o(N, E),
                A = document.getElementById(J);
                if (A)
                    A.style.display = R ? "" : "none"
            }
    }
    ;
    oO1l0l = function(B, D, $) {
        var J = this.data;
        if (this[isVirtualScroll]()) {
            var F = this._O1oO11()
              , A = F.start
              , C = F.end;
            for (var H = A, E = C; H < E; H++) {
                var I = J[H]
                  , G = this.lloo0o(I, B)
                  , _ = document.getElementById(G);
                if (_)
                    if ($)
                        O0Oo0(_, D);
                    else
                        Ol00(_, D)
            }
        } else
            for (H = 0,
            E = this.data.length; H < E; H++) {
                I = this.data[H],
                G = this.lloo0o(I, B),
                _ = document.getElementById(G);
                if (_)
                    if ($)
                        O0Oo0(_, D);
                    else
                        Ol00(_, D)
            }
    }
    ;
    O1OO11 = function() {
        this.ol10O.scrollLeft = this._headerInnerEl.scrollLeft = this.O1OOoo.scrollLeft = 0;
        var C = this[isFrozen]();
        if (C)
            O0Oo0(this.el, this.lOooO);
        else
            Ol00(this.el, this.lOooO);
        var D = this[getBottomColumns]()
          , _ = this.o01loo.firstChild
          , $ = this.oO0o01.firstChild;
        if (C) {
            _.style.height = jQuery(_).outerHeight() + "px";
            $.style.height = jQuery($).outerHeight() + "px"
        } else {
            _.style.height = "auto";
            $.style.height = "auto"
        }
        if (this[isFrozen]()) {
            for (var A = 0, E = D.length; A < E; A++) {
                var B = D[A];
                if (this[frozenStartColumn] <= A && A <= this[frozenEndColumn])
                    this.lol1(B, this.Ool0, true);
                else
                    this.lol1(B, this.Ool0, false)
            }
            this.Ol11(true)
        } else {
            for (A = 0,
            E = D.length; A < E; A++) {
                B = D[A];
                delete B._hide;
                if (B.visible)
                    this.loO11(B, true);
                this.lol1(B, this.Ool0, false)
            }
            this.oolOOo();
            this.Ol11(false)
        }
        this[doLayout]();
        this.o1l11()
    }
    ;
    olO0o = function() {
        this._headerTableHeight = lOl10(this._headerInnerEl.firstChild);
        var $ = this;
        if (this._deferFrozenTimer)
            clearTimeout(this._deferFrozenTimer);
        this._deferFrozenTimer = setTimeout(function() {
            $._OOO1o()
        }
        , 1)
    }
    ;
    l11O11 = function($) {
        var _ = new Date();
        $ = parseInt($);
        if (isNaN($))
            return;
        this[frozenStartColumn] = $;
        this[_deferFrozen]()
    }
    ;
    ollo0 = function() {
        return this[frozenStartColumn]
    }
    ;
    oooo = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this[frozenEndColumn] = $;
        this[_deferFrozen]()
    }
    ;
    l00OO = function() {
        return this[frozenEndColumn]
    }
    ;
    looo = function() {
        this[setFrozenStartColumn](-1);
        this[setFrozenEndColumn](-1)
    }
    ;
    lO110 = function($, _) {
        this[unFrozenColumns]();
        this[setFrozenStartColumn]($);
        this[setFrozenEndColumn](_)
    }
    ;
    OoOoo = function() {
        var E = this[_getViewNowRegion]()
          , D = this._rowHeight
          , G = this.O1OOoo.scrollTop
          , A = E.start
          , B = E.end;
        for (var $ = 0, F = this.data.length; $ < F; $ += this._virtualRows) {
            var C = $ + this._virtualRows;
            if ($ <= A && A < C)
                A = $;
            if ($ < B && B <= C)
                B = C
        }
        if (B > this.data.length)
            B = this.data.length;
        var _ = A * D;
        this._viewRegion = {
            start: A,
            end: B,
            top: _
        };
        return this._viewRegion
    }
    ;
    olo11 = function() {
        var B = this._rowHeight
          , D = this.O1OOoo.scrollTop
          , $ = this.O1OOoo.offsetHeight
          , C = parseInt(D / B)
          , _ = parseInt((D + $) / B) + 1
          , A = {
            start: C,
            end: _
        };
        return A
    }
    ;
    OooO11 = function() {
        if (!this._viewRegion)
            return true;
        var $ = this[_getViewNowRegion]();
        if (this._viewRegion.start <= $.start && $.end <= this._viewRegion.end)
            return false;
        return true
    }
    ;
    O1Oo0 = function() {
        var $ = this[_canVirtualUpdate]();
        if ($)
            this[doUpdate]()
    }
    ;
    lO1Ool = function(_) {
        this.o01loo.scrollLeft = this.oO0o01.scrollLeft = this._headerInnerEl.scrollLeft = this.O1OOoo.scrollLeft;
        var $ = this;
        setTimeout(function() {
            $._headerInnerEl.scrollLeft = $.O1OOoo.scrollLeft
        }
        , 10);
        if (this[isVirtualScroll]()) {
            $ = this;
            if (this._scrollTopTimer)
                clearTimeout(this._scrollTopTimer);
            this._scrollTopTimer = setTimeout(function() {
                $._scrollTopTimer = null ;
                $[_tryUpdateScroll]()
            }
            , 100)
        }
    }
    ;
    l0Ooo = function(_) {
        var $ = this;
        if (this._HScrollTimer)
            return;
        this._HScrollTimer = setTimeout(function() {
            $[_doScrollFrozen]();
            $._HScrollTimer = null 
        }
        , 30)
    }
    ;
    O1O0O = function() {
        if (!this[isFrozen]())
            return;
        var F = this[getBottomColumns]()
          , H = this.ol10O.scrollLeft;
        this.__frozenScrollLeft = H;
        var $ = this[frozenEndColumn]
          , C = 0;
        for (var _ = $ + 1, G = F.length; _ < G; _++) {
            var D = F[_];
            if (!D.visible)
                continue;var A = this[getColumnWidth](D);
            if (H <= C)
                break;
            $ = _;
            C += A
        }
        if (this._lastStartColumn === $)
            return;
        this._lastStartColumn = $;
        for (_ = 0,
        G = F.length; _ < G; _++) {
            D = F[_];
            delete D._hide;
            if (this[frozenEndColumn] < _ && _ <= $)
                D._hide = true
        }
        for (_ = 0,
        G = F.length; _ < G; _++) {
            D = F[_];
            if (_ < this.frozenStartColumn || (_ > this[frozenEndColumn] && _ < $) || D.visible == false)
                this.loO11(D, false);
            else
                this.loO11(D, true)
        }
        var E = "width:100%;";
        if (this.ol10O.offsetWidth < this.ol10O.scrollWidth || !this[isFitColumns]())
            E = "width:0px";
        this.oolOOo(E);
        var B = this._headerTableHeight;
        if (mini.isIE9)
            B -= 1;
        OO01(this._headerInnerEl.firstChild, B);
        for (_ = this[frozenEndColumn] + 1,
        G = F.length; _ < G; _++) {
            D = F[_];
            if (!D.visible)
                continue;if (_ <= $)
                this.loO11(D, false);
            else
                this.loO11(D, true)
        }
        this.l0oo1();
        this[_doMargeCells]();
        this[_doLayoutTopRightCell]();
        this[fire]("layout")
    }
    ;
    oo01o = function(B) {
        var D = this.data;
        for (var _ = 0, E = D.length; _ < E; _++) {
            var A = D[_]
              , $ = this.l010lo(A);
            if ($)
                if (B) {
                    var C = 0;
                    $.style.height = C + "px"
                } else
                    $.style.height = ""
        }
    }
    ;
    olOOl = function() {
        if (this[showVGridLines])
            Ol00(this.el, "mini-grid-hideVLine");
        else
            O0Oo0(this.el, "mini-grid-hideVLine");
        if (this[showHGridLines])
            Ol00(this.el, "mini-grid-hideHLine");
        else
            O0Oo0(this.el, "mini-grid-hideHLine")
    }
    ;
    Oo1ll = function($) {
        if (this[showHGridLines] != $) {
            this[showHGridLines] = $;
            this[_doGridLines]();
            this[doLayout]()
        }
    }
    ;
    l100o = function() {
        return this[showHGridLines]
    }
    ;
    Ol0O00 = function($) {
        if (this[showVGridLines] != $) {
            this[showVGridLines] = $;
            this[_doGridLines]();
            this[doLayout]()
        }
    }
    ;
    o10lo = function() {
        return this[showVGridLines]
    }
    ;
	;loOlo=function () {this[doLayout](); }
    ll1o0 = function($) {
        if (this[showFilterRow] != $) {
            this[showFilterRow] = $;
            this.o00ooRows();
            this[doLayout]()
        }
    }
    ;
    lolooo = function() {
        return this[showFilterRow]
    }
    ;
    o1l00 = function($) {
        if (this[showSummaryRow] != $) {
            this[showSummaryRow] = $;
            this.o00ooRows();
            this[doLayout]()
        }
    }
    ;
    O0010 = function() {
        return this[showSummaryRow]
    }
    ;
    ll0o0 = function() {
        if (this[allowAlternating] == false)
            return;
        var B = this.data;
        for (var _ = 0, C = B.length; _ < C; _++) {
            var A = B[_]
              , $ = this.l010lo(A);
            if ($)
                if (this[allowAlternating] && _ % 2 == 1)
                    O0Oo0($, this.ooooOl);
                else
                    Ol00($, this.ooooOl)
        }
    }
    ;
    l00Ol = function($) {
        if (this[allowAlternating] != $) {
            this[allowAlternating] = $;
            this.loloO()
        }
    }
    ;
    ol00O = function() {
        return this[allowAlternating]
    }
    ;
    Ol1lo = function($) {
        if (this[enableHotTrack] != $)
            this[enableHotTrack] = $
    }
    ;
    OO0o = function() {
        return this[enableHotTrack]
    }
    ;
    O0o1l = function($) {
        this.showLoading = $
    }
    ;
    Ooo0O = function($) {
        if (this.allowCellWrap != $)
            this.allowCellWrap = $
    }
    ;
    o1O11 = function() {
        return this.allowCellWrap
    }
    ;
	;l101l=function (kv) {var columns = kv.columns; delete kv.columns; mini.DataGrid[superclass][set][call](this,kv); if (columns) this[setColumns](columns); return this; }
    O0oOO = function($) {
        this.allowHeaderWrap = $;
        Ol00(this.el, "mini-grid-headerWrap");
        if ($)
            O0Oo0(this.el, "mini-grid-headerWrap")
    }
    ;
	;o1OO1=function (value) {if (this[groupName] != value) {this[groupName] = value; } }
    oo0o1 = function() {
        return this.allowHeaderWrap
    }
    ;
    O0oOo = function($) {
        this.showColumnsMenu = $
    }
    ;
    lo1oo = function() {
        return this.showColumnsMenu
    }
    ;
    l0l01 = function($) {
        this.editNextOnEnterKey = $
    }
    ;
    OOool = function() {
        return this.editNextOnEnterKey
    }
    ;
    llOO = function($) {
        this.editOnTabKey = $
    }
    ;
    O1lOo = function() {
        return this.editOnTabKey
    }
    ;
    Oo001 = function($) {
        if (this.virtualScroll != $)
            this.virtualScroll = $
    }
    ;
    o0Oo = function() {
        return this.virtualScroll
    }
    ;
    l1l11l = function($) {
        this.scrollTop = $;
        this.O1OOoo.scrollTop = $
    }
    ;
    l0Oll0 = function() {
        return this.O1OOoo.scrollTop
    }
    ;
    ooO01 = function($) {
        this.bodyStyle = $;
        O1lo11(this.O1OOoo, $)
    }
    ;
    lOOO0 = function() {
        return this.bodyStyle
    }
    ;
    l1ll0 = function($) {
        this.bodyCls = $;
        O0Oo0(this.O1OOoo, $)
    }
    ;
    lo0Oo = function() {
        return this.bodyCls
    }
    ;
    OOl00 = function($) {
        this.footerStyle = $;
        O1lo11(this.o111, $)
    }
    ;
    OO0ol = function() {
        return this.footerStyle
    }
    ;
    looO = function($) {
        this.footerCls = $;
        O0Oo0(this.o111, $)
    }
    ;
    l0o11 = function() {
        return this.footerCls
    }
    ;
    lollOO = function($) {
        this.showHeader = $;
        this.o00ooRows();
        this[doLayout]()
    }
    ;
    Ool11 = function($) {
        this[setShowFooter]($)
    }
    ;
    lol1o = function() {
        return this[showFooter]
    }
    ;
    l1lo0 = function($) {
        this[showFooter] = $;
        this.o00ooRows();
        this[doLayout]()
    }
    ;
    O0lo1 = function() {
        return this[showFooter]
    }
    ;
	;OlolO=function (row) {row = this[getRow](row); if (!row) return null; var id = this.oo1O1(row); return ooO0(id,this.el); }
    o0oOoO = function($) {
        this.autoHideRowDetail = $
    }
    ;
    o0lol = function($) {
        this.sortMode = $
    }
    ;
    ooloO = function() {
        return this.sortMode
    }
    ;
    O0OO1 = function($) {
        this[allowSortColumn] = $
    }
    ;
    l110o = function() {
        return this[allowSortColumn]
    }
    ;
    o00l0 = function($) {
        this[allowMoveColumn] = $
    }
    ;
    lOO00 = function() {
        return this[allowMoveColumn]
    }
    ;
    o010OColumn = function($) {
        this[allowResizeColumn] = $
    }
    ;
    O011oColumn = function() {
        return this[allowResizeColumn]
    }
    ;
    o0o0l = function($) {
        this.selectOnLoad = $
    }
    ;
    o0llo = function() {
        return this.selectOnLoad
    }
    ;
    o010O = function($) {
        this[allowResize] = $;
        this.lOlOo1.style.display = this[allowResize] ? "" : "none"
    }
    ;
    O011o = function() {
        return this[allowResize]
    }
    ;
    oO0lO = function($) {
        this.showEmptyText = $
    }
    ;
    l0l0l = function() {
        return this.showEmptyText
    }
    ;
    lo01O = function($) {
        this[emptyText] = $
    }
    ;
    oOO1l = function() {
        return this[emptyText]
    }
    ;
    l0O11 = function($) {
        this.showModified = $
    }
    ;
	;l11o1=function () {l00l(function () {l1Oo0O(this.el,"click",this.o0O0lo,this); l1Oo0O(this.el,"mousedown",this.ol1Ol,this); },this); }
    O0ol0 = function() {
        return this.showModified
    }
    ;
    lOol1o = function($) {
        this.showNewRow = $
    }
    ;
    lO0l = function() {
        return this.showNewRow
    }
    ;
    l1ooo = function($) {
        this.cellEditAction = $
    }
    ;
	;ol11O=function () {l00l(function () {O0l10(this.el,"mouseover",this.ol0OOo,this); },this); }
    ooo10 = function() {
        return this.cellEditAction
    }
    ;
    lllO = function($) {
        this.allowCellValid = $
    }
    ;
    Oo0l1O = function() {
        return this.allowCellValid
    }
    ;
    o1oOl = function() {
        this._ool11 = false;
        for (var $ = 0, A = this.data.length; $ < A; $++) {
            var _ = this.data[$];
            this[showRowDetail](_)
        }
        this._ool11 = true;
        this[doLayout]()
    }
    ;
    O0lo = function() {
        this._ool11 = false;
        for (var $ = 0, A = this.data.length; $ < A; $++) {
            var _ = this.data[$];
            if (this[isShowRowDetail](_))
                this[hideRowDetail](_)
        }
        this._ool11 = true;
        this[doLayout]()
    }
    ;
	;O1o0o=function () {return this[allowResize]; }
    OollO = function(_) {
        _ = this[getRow](_);
        if (!_)
            return;
        var B = this[getRowDetailEl](_);
        B.style.display = "";
        _._showDetail = true;
        var $ = this.l010lo(_);
        O0Oo0($, "mini-grid-expandRow");
        this[fire]("showrowdetail", {
            record: _
        });
        if (this._ool11)
            this[doLayout]();
        var A = this
    }
    ;
    oO11lo = function(_) {
        _ = this[getRow](_);
        if (!_)
            return;
        var B = this.lO00(_)
          , A = document.getElementById(B);
        if (A)
            A.style.display = "none";
        delete _._showDetail;
        var $ = this.l010lo(_);
        Ol00($, "mini-grid-expandRow");
        this[fire]("hiderowdetail", {
            record: _
        });
        if (this._ool11)
            this[doLayout]()
    }
    ;
    lo110 = function($) {
        $ = this[getRow]($);
        if (!$)
            return;
        if (grid[isShowRowDetail]($))
            grid[hideRowDetail]($);
        else
            grid[showRowDetail]($)
    }
    ;
    o1l1o1 = function($) {
        $ = this[getRow]($);
        if (!$)
            return false;
        return !!$._showDetail
    }
    ;
    OO0loDetailEl = function($) {
        $ = this[getRow]($);
        if (!$)
            return null ;
        var A = this.lO00($)
          , _ = document.getElementById(A);
        if (!_)
            _ = this.O01l($);
        return _
    }
    ;
    OO0loDetailCellEl = function($) {
        var _ = this[getRowDetailEl]($);
        if (_)
            return _.cells[0]
    }
    ;
    O01O0 = function($) {
        var A = this.l010lo($)
          , B = this.lO00($)
          , _ = this[getBottomColumns]().length;
        jQuery(A).after("<tr id=\"" + B + "\" class=\"mini-grid-detailRow\"><td class=\"mini-grid-detailCell\" colspan=\"" + _ + "\"></td></tr>");
        this.l0oo1();
        return document.getElementById(B)
    }
    ;
    ll0Ol = function() {
        var D = this._bodyInnerEl.firstChild.getElementsByTagName("tr")[0]
          , B = D.getElementsByTagName("td")
          , A = 0;
        for (var _ = 0, C = B.length; _ < C; _++) {
            var $ = B[_];
            if ($.style.display != "none")
                A++
        }
        return A
    }
    ;
    olo0O = function() {
        var _ = jQuery(".mini-grid-detailRow", this.el)
          , B = this.ol10();
        for (var A = 0, C = _.length; A < C; A++) {
            var D = _[A]
              , $ = D.firstChild;
            $.colSpan = B
        }
    }
    ;
    OOolO = function() {
        for (var $ = 0, B = this.data.length; $ < B; $++) {
            var _ = this.data[$];
            if (_._showDetail == true) {
                var C = this.lO00(_)
                  , A = document.getElementById(C);
                if (A)
                    mini.layout(A)
            }
        }
    }
    ;
    oO10l = function() {
        for (var $ = 0, B = this.data.length; $ < B; $++) {
            var _ = this.data[$];
            if (_._editing == true) {
                var A = this.l010lo(_);
                if (A)
                    mini.layout(A)
            }
        }
    }
    ;
    l01OO = function($) {
        $.cancel = true;
        this[gotoPage]($.pageIndex, $[pageSize])
    }
    ;
    O1o1l = function($) {
        this.pager[setShowReloadButton]($)
    }
    ;
    O10O1 = function() {
        return this.pager[getShowReloadButton]()
    }
    ;
    loo0 = function($) {
        this.pager[setShowPageInfo]($)
    }
    ;
    ool1 = function() {
        return this.pager[getShowPageInfo]()
    }
    ;
    lo1O = function($) {
        if (!mini.isArray($))
            return;
        this.pager[setSizeList]($)
    }
    ;
    loool = function() {
        return this.pager[getSizeList]()
    }
    ;
    ol0o1 = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this[pageSize] = $;
        if (this.pager)
            this.pager[update](this.pageIndex, this.pageSize, this[totalCount])
    }
    ;
    o0o1O = function() {
        return this[pageSize]
    }
    ;
    OOolo = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this[pageIndex] = $;
        if (this.pager)
            this.pager[update](this.pageIndex, this.pageSize, this[totalCount])
    }
    ;
    OO1l1O = function() {
        return this[pageIndex]
    }
    ;
    O0000 = function($) {
        this.showPageSize = $;
        this.pager[setShowPageSize]($)
    }
    ;
    olo1O = function() {
        return this.showPageSize
    }
    ;
    oO11l = function($) {
        this.showPageIndex = $;
        this.pager[setShowPageIndex]($)
    }
    ;
    O00ol = function() {
        return this.showPageIndex
    }
    ;
    loll1 = function($) {
        this.showTotalCount = $;
        this.pager[setShowTotalCount]($)
    }
    ;
	;OoO0o=function () {var me = this; if (this.OlOOoo) return; this.OlOOoo = setTimeout(function () {me[doLayout](); me.OlOOoo = null; },1); }
    l11oo = function() {
        return this.showTotalCount
    }
    ;
    oloOol = function($) {
        this.pageIndexField = $
    }
    ;
    oOlO1 = function() {
        return this.pageIndexField
    }
    ;
    Ol0l1 = function($) {
        this.pageSizeField = $
    }
    ;
    l1oOl = function() {
        return this.pageSizeField
    }
    ;
    l1o10 = function($) {
        this.sortFieldField = $
    }
    ;
    ol00lField = function() {
        return this.sortFieldField
    }
    ;
    l1lOl = function($) {
        this.sortOrderField = $
    }
    ;
    o0OlOField = function() {
        return this.sortOrderField
    }
    ;
    l1llo = function($) {
        this.totalField = $
    }
    ;
    Oo101 = function() {
        return this.totalField
    }
    ;
	;O101O=function (value) {return this.fitColumns; }
    lo0o1 = function($) {
        this.dataField = $
    }
    ;
    l0Oo0 = function() {
        return this.dataField
    }
    ;
    ol00l = function() {
        return this.sortField
    }
    ;
    o0OlO = function() {
        return this.sortOrder
    }
    ;
    oO1Oo = function($) {
        this[totalCount] = $;
        this.pager[setTotalCount]($)
    }
    ;
    o1100 = function() {
        return this[totalCount]
    }
    ;
    o1OOl = function() {
        return this.totalPage
    }
    ;
    loOoo = function($) {
        this[checkSelectOnLoad] = $
    }
    ;
    l11lo = function() {
        return this[checkSelectOnLoad]
    }
    ;
    lll1Oo = function($) {
        return $.data
    }
    ;
    oO11Ol = function() {
        return this._resultObject ? this._resultObject : {}
    }
    ;
    l0lo1 = function(params, success, fail) {
        try {
            var url = eval(this.url);
            if (url != undefined)
                this.url = url
        } catch (e) {}
        params = params || {};
        if (mini.isNull(params[pageIndex]))
            params[pageIndex] = 0;
        if (mini.isNull(params[pageSize]))
            params[pageSize] = this[pageSize];
        params.sortField = this.sortField;
        params.sortOrder = this.sortOrder;
        if (this.sortMode != "server") {
            params.sortField = this.sortField = "";
            params.sortOrder = this.sortOrder = ""
        }
        this.loadParams = params;
        var o = {};
        o[this.pageIndexField] = params[pageIndex];
        o[this.pageSizeField] = params[pageSize];
        if (params.sortField)
            o[this.sortFieldField] = params.sortField;
        if (params.sortOrder)
            o[this.sortOrderField] = params.sortOrder;
        mini.copyTo(params, o);
        var url = this.url
          , ajaxMethod = this.ajaxMethod;
        if (url) {
            if (url[indexOf](".txt") != -1 || url[indexOf](".json") != -1)
                ajaxMethod = "get"
        } else
            ajaxMethod = "get";
        var e = {
            url: url,
            async: this.ajaxAsync,
            type: ajaxMethod,
            data: params,
            params: params,
            cache: false,
            cancel: false
        };
        this[fire]("beforeload", e);
        if (e.data != e.params && e.params != params)
            e.data = e.params;
        if (e.cancel == true) {
            params[pageIndex] = this[getPageIndex]();
            params[pageSize] = this[getPageSize]();
            return
        }
        if (this.showLoading)
            this[loading]();
        this.l0o0OValue = this.l0o0O ? this.l0o0O[this.idField] : null ;
        var sf = me = this
          , url = e.url;
        mini.copyTo(e, {
            success: function(C, A, _) {
                var G = null ;
                try {
                    G = mini.decode(C)
                } catch (H) {
                    if (mini_debugger == true)
                        alert(url + "\ndatagrid json is error.")
                }
                if (G && !mini.isArray(G)) {
                    G.total = parseInt(mini._getMap(me.totalField, G));
                    G.data = mini._getMap(me.dataField, G)
                } else if (G == null ) {
                    G = {};
                    G.data = [];
                    G.total = 0
                } else if (mini.isArray(G)) {
                    var D = {};
                    D.data = G;
                    D.total = G.length;
                    G = D
                }
                if (!G.data)
                    G.data = [];
                if (!G.total)
                    G.total = 0;
                sf._resultObject = G;
                sf[unmask]();
                if (mini.isNumber(G.error) && G.error != 0) {
                    var I = {
                        errorCode: G.error,
                        xmlHttp: _,
                        errorMsg: G.message,
                        result: G
                    };
                    if (mini_debugger == true)
                        alert(url + "\n" + I.errorMsg + "\n" + G.stackTrace);
                    sf[fire]("loaderror", I);
                    if (fail)
                        fail[call](sf, I);
                    return
                }
                var B = G.total
                  , F = sf.lolo(G);
                if (mini.isNumber(params[pageIndex]))
                    sf[pageIndex] = params[pageIndex];
                if (mini.isNumber(params[pageSize]))
                    sf[pageSize] = params[pageSize];
                if (mini.isNumber(B))
                    sf[totalCount] = B;
                var H = {
                    result: G,
                    data: F,
                    total: B,
                    cancel: false,
                    xmlHttp: _
                };
                sf[fire]("preload", H);
                if (H.cancel == true)
                    return;
                var E = sf.ool11;
                sf.ool11 = false;
                sf[loadData](H.data);
                if (sf.l0o0OValue && sf[checkSelectOnLoad]) {
                    var $ = sf[getRowById](sf.l0o0OValue);
                    if ($)
                        sf[select]($);
                    else
                        sf[deselectAll]()
                } else if (sf.l0o0O)
                    sf[deselectAll]();
                if (sf[getSelected]() == null  && sf.selectOnLoad && sf.data.length > 0)
                    sf[select](0);
                if (sf.collapseGroupOnLoad)
                    sf[collapseGroups]();
                sf[fire]("load", H);
                if (success)
                    success[call](sf, H);
                sf.ool11 = E;
                sf[doLayout]()
            },
            error: function($, B, _) {
                var A = {
                    xmlHttp: $,
                    errorMsg: $.responseText,
                    errorCode: $.status
                };
                if (mini_debugger == true)
                    alert(url + "\n" + A.errorCode + "\n" + A.errorMsg);
                sf[fire]("loaderror", A);
                sf[unmask]();
                if (fail)
                    fail[call](sf, A)
            }
        });
        this.O10lOl = mini.ajax(e)
    }
    ;
    l0001 = function(A, B, C) {
        if (this._loadTimer)
            clearTimeout(this._loadTimer);
        var $ = this
          , _ = mini.byClass("mini-grid-emptyText", this.el);
        if (_)
            _.style.display = "none";
        this[cancelEdit]();
        this.loadParams = A || {};
        if (this.ajaxAsync)
            this._loadTimer = setTimeout(function() {
                $.oll0l0(A, B, C)
            }
            , 1);
        else
            $.oll0l0(A, B, C)
    }
    ;
	;O00l=function (row,column) {return this.uid + "$" + row._uid + "$" + column._id; }
    O0O1O = function(_, $) {
        this[accept]();
        this[load](this.loadParams, _, $)
    }
    ;
	;l0oo0=function () {return this.text; }
    oooO1 = function($, A) {
        var _ = this.loadParams || {};
        if (mini.isNumber($))
            _[pageIndex] = $;
        if (mini.isNumber(A))
            _[pageSize] = A;
        this[load](_)
    }
    ;
    O1lOl = function(F, D) {
        this.sortField = F;
        this.sortOrder = D == "asc" ? "asc" : "desc";
        if (this.sortMode == "server") {
            var A = this.loadParams || {};
            A.sortField = F;
            A.sortOrder = D;
            A[pageIndex] = this[pageIndex];
            var E = this;
            this[load](A, function() {
                E[fire]("sort")
            }
            )
        } else {
            var B = this[getData]().clone()
              , C = this[_getSortFnByField](F);
            if (!C)
                return;
            var H = [];
            for (var _ = B.length - 1; _ >= 0; _--) {
                var $ = B[_]
                  , G = mini._getMap(F, $);
                if (mini.isNull(G) || G === "") {
                    H.insert(0, $);
                    B.removeAt(_)
                }
            }
            B = B.clone();
            mini.sort(B, C, this);
            B.insertRange(0, H);
            if (this.sortOrder == "desc")
                B.reverse();
            this.data = B;
            this[doUpdate]();
            this[fire]("sort")
        }
    }
    ;
    lll1l = function() {
        this.sortField = "";
        this.sortOrder = "";
        this[reload]()
    }
    ;
    oOl1o = function(D) {
        if (!D)
            return null ;
        var F = "string"
          , C = null 
          , E = this[getBottomColumns]();
        for (var $ = 0, G = E.length; $ < G; $++) {
            var A = E[$];
            if (A.field == D) {
                if (A.dataType)
                    F = A.dataType.toLowerCase();
                break
            }
        }
        var B = mini.sortTypes[F];
        if (!B)
            B = mini.sortTypes["string"];
        function _(A, F) {
            var C = mini._getMap(D, A)
              , _ = mini._getMap(D, F)
              , $ = B(C)
              , E = B(_);
            if ($ > E)
                return 1;
            else if ($ == E)
                return 0;
            else
                return -1
        }
        C = _;
        return C
    }
    ;
    oolOl = function(B) {
        if (this.lOoOl) {
            var $ = this.lOoOl[0]
              , A = this.lOoOl[1]
              , _ = this.l10Ol($, A);
            if (_)
                if (B)
                    O0Oo0(_, this.olO0);
                else
                    Ol00(_, this.olO0)
        }
    }
    ;
    llo10Cell = function(A) {
        if (this.lOoOl != A) {
            this.l00o0(false);
            this.lOoOl = A;
            if (A) {
                var $ = this[getRow](A[0])
                  , _ = this[getColumn](A[1]);
                if ($ && _)
                    this.lOoOl = [$, _];
                else
                    this.lOoOl = null 
            }
            this.l00o0(true);
            if (A)
                if (this[isFrozen]())
                    this[scrollIntoView](A[0]);
                else
                    this[scrollIntoView](A[0]);
            this[fire]("currentcellchanged")
        }
    }
    ;
    O0101Cell = function() {
        var $ = this.lOoOl;
        if ($)
            if (this.data[indexOf]($[0]) == -1) {
                this.lOoOl = null ;
                $ = null 
            }
        return $
    }
    ;
    O1llO = function($) {
        this[allowCellSelect] = $
    }
    ;
    OOoo0 = function($) {
        return this[allowCellSelect]
    }
    ;
	;l00l1=function () {if (this.ownerMenu) {if (this.ownerMenu.ownerItem) return this.ownerMenu.ownerItem[getTopMenu](); else return this.ownerMenu; } return null; }
    OlO1o = function($) {
        this[allowCellEdit] = $
    }
    ;
    O0o00 = function($) {
        return this[allowCellEdit]
    }
    ;
    l1o00 = function($, A) {
        $ = this[getRow]($);
        A = this[getColumn](A);
        var _ = [$, A];
        if ($ && A)
            this[setCurrentCell](_);
        _ = this[getCurrentCell]();
        if (this.l1o0O && _)
            if (this.l1o0O[0] == _[0] && this.l1o0O[1] == _[1])
                return;
        if (this.l1o0O)
            this[commitEdit]();
        if (_) {
            var $ = _[0]
              , A = _[1]
              , B = this.ll0OO0($, A, this[getCellEditor](A));
            if (B !== false) {
                this[scrollIntoView]($, A);
                this.l1o0O = _;
                this.O1Ol($, A)
            }
        }
    }
    ;
    l10OoCell = function($) {
        return this.l1o0O && this.l1o0O[0] == $[0] && this.l1o0O[1] == $[1]
    }
    ;
    oll0l = function() {
        if (this[allowCellEdit]) {
            if (this.l1o0O)
                this.llOl1()
        } else if (this[isEditing]()) {
            this.ool11 = false;
            var A = this.data.clone();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = A[$];
                if (_._editing == true)
                    this[cancelEditRow]($)
            }
            this.ool11 = true;
            this[doLayout]()
        }
    }
    ;
    Oo1o = function() {
        if (this[allowCellEdit]) {
            if (this.l1o0O) {
                this.OO1l0o(this.l1o0O[0], this.l1o0O[1]);
                this.llOl1()
            }
        } else if (this[isEditing]()) {
            this.ool11 = false;
            var A = this.data.clone();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = A[$];
                if (_._editing == true)
                    this[commitEditRow]($)
            }
            this.ool11 = true;
            this[doLayout]()
        }
    }
    ;
    ooOl = function(_, $) {
        _ = this[getColumn](_);
        if (!_)
            return;
        if (this[allowCellEdit]) {
            var B = _.__editor;
            if (!B)
                B = mini.getAndCreate(_.editor);
            if (B && B != _.editor)
                _.editor = B;
            return B
        } else {
            $ = this[getRow]($);
            _ = this[getColumn](_);
            if (!$)
                $ = this[getEditingRow]();
            if (!$ || !_)
                return null ;
            var A = this.uid + "$" + $._uid + "$" + _._id + "$editor";
            return mini.get(A)
        }
    }
    ;
    o0ol0O = function($, D, F) {
        var _ = mini._getMap(D.field, $)
          , E = {
            sender: this,
            rowIndex: this.data[indexOf]($),
            row: $,
            record: $,
            column: D,
            field: D.field,
            editor: F,
            value: _,
            cancel: false
        };
        this[fire]("cellbeginedit", E);
        if (!mini.isNull(D[defaultValue]) && (mini.isNull(E.value) || E.value === "")) {
            var C = D[defaultValue]
              , B = mini.clone({
                d: C
            });
            E.value = B.d
        }
        var F = E.editor;
        _ = E.value;
        if (E.cancel)
            return false;
        if (!F)
            return false;
        if (mini.isNull(_))
            _ = "";
        if (F[setValue])
            F[setValue](_);
        F.ownerRowID = $._uid;
        if (D.displayField && F[setText]) {
            var A = mini._getMap(D.displayField, $);
            if (!mini.isNull(D.defaultText) && (mini.isNull(A) || A === "")) {
                B = mini.clone({
                    d: D.defaultText
                });
                A = B.d
            }
            F[setText](A)
        }
        if (this[allowCellEdit])
            this.Oo0Oo = E.editor;
        return true
    }
    ;
    lOolO = function(A, C, B, F) {
        var E = {
            sender: this,
            record: A,
            rowIndex: this.data[indexOf](A),
            row: A,
            column: C,
            field: C.field,
            editor: F ? F : this[getCellEditor](C),
            value: mini.isNull(B) ? "" : B,
            text: "",
            cancel: false
        };
        if (E.editor && E.editor[getValue])
            E.value = E.editor[getValue]();
        if (E.editor && E.editor[getText])
            E.text = E.editor[getText]();
        var D = A[C.field]
          , _ = E.value;
        if (mini[isEquals](D, _))
            return E;
        this[fire]("cellcommitedit", E);
        if (E.cancel == false)
            if (this[allowCellEdit]) {
                var $ = {};
                mini._setMap(C.field, E.value, $);
                if (C.displayField)
                    mini._setMap(C.displayField, E.text, $);
                this[updateRow](A, $)
            }
        return E
    }
    ;
    OolO1 = function() {
        if (!this.l1o0O)
            return;
        var _ = this.l1o0O[0]
          , C = this.l1o0O[1]
          , E = {
            sender: this,
            record: _,
            rowIndex: this.data[indexOf](_),
            row: _,
            column: C,
            field: C.field,
            editor: this.Oo0Oo,
            value: _[C.field]
        };
        this[fire]("cellendedit", E);
        if (this[allowCellEdit]) {
            var D = E.editor;
            if (D && D[setIsValid])
                D[setIsValid](true);
            if (this.OO11oo)
                this.OO11oo.style.display = "none";
            var A = this.OO11oo.childNodes;
            for (var $ = A.length - 1; $ >= 0; $--) {
                var B = A[$];
                this.OO11oo.removeChild(B)
            }
            if (D && D[hidePopup])
                D[hidePopup]();
            if (D && D[setValue])
                D[setValue]("");
            this.Oo0Oo = null ;
            this.l1o0O = null ;
            if (this.allowCellValid)
                this.validateCell(_, C)
        }
    }
    ;
    O110o = function(_, D) {
        if (!this.Oo0Oo)
            return false;
        var $ = this[getCellBox](_, D)
          , E = mini.getViewportBox().width;
        if ($.right > E) {
            $.width = E - $.left;
            if ($.width < 10)
                $.width = 10;
            $.right = $.left + $.width
        }
        var G = {
            sender: this,
            rowIndex: this.data[indexOf](_),
            record: _,
            row: _,
            column: D,
            field: D.field,
            cellBox: $,
            editor: this.Oo0Oo
        };
        this[fire]("cellshowingedit", G);
        var F = G.editor;
        if (F && F[setIsValid])
            F[setIsValid](true);
        var B = this.Oo0l1($);
        this.OO11oo.style.zIndex = mini.getMaxZIndex();
        if (F[render]) {
            F[render](this.OO11oo);
            setTimeout(function() {
                F[focus]();
                if (F[selectText])
                    F[selectText]()
            }
            , 50);
            if (F[setVisible])
                F[setVisible](true)
        } else if (F.el) {
            this.OO11oo.appendChild(F.el);
            setTimeout(function() {
                try {
                    F.el[focus]()
                } catch ($) {}
            }
            , 50)
        }
        if (F[setWidth]) {
            var A = $.width;
            if (A < 20)
                A = 20;
            F[setWidth](A)
        }
        if (F[setHeight] && F.type == "textarea") {
            var C = $.height - 1;
            if (F.minHeight && C < F.minHeight)
                C = F.minHeight;
            F[setHeight](C)
        }
        if (F[setWidth] && F.type == "textarea") {
            A = $.width - 1;
            if (F.minWidth && A < F.minWidth)
                A = F.minWidth;
            F[setWidth](A)
        }
        l1Oo0O(document, "mousedown", this.l111, this);
        if (D.autoShowPopup && F[showPopup])
            F[showPopup]()
    }
    ;
	;o1Oo=function () {this.Olo1O = false; var data = this[getData](); for (var i = 0,l = data.length; i < l; i++) {var row = data[i]; this[acceptRecord](row); } this.Olo1O = true; this[doUpdate](); }
    Ooll1 = function(C) {
        if (this.Oo0Oo) {
            var A = this.l1lO(C);
            if (this.l1o0O && A)
                if (this.l1o0O[0] == A.record && this.l1o0O[1] == A.column)
                    return false;
            var _ = false;
            if (this.Oo0Oo[within])
                _ = this.Oo0Oo[within](C);
            else
                _ = l1oooo(this.OO11oo, C.target);
            if (_ == false) {
                var B = this;
                if (l1oooo(this.O1OOoo, C.target) == false)
                    setTimeout(function() {
                        B[commitEdit]()
                    }
                    , 1);
                else {
                    var $ = B.l1o0O;
                    setTimeout(function() {
                        var _ = B.l1o0O;
                        if ($ == _)
                            B[commitEdit]()
                    }
                    , 70)
                }
                O1l0(document, "mousedown", this.l111, this)
            }
        }
    }
    ;
    OOll1 = function($) {
        if (!this.OO11oo) {
            this.OO11oo = mini.append(document.body, "<div class=\"mini-grid-editwrap\" style=\"position:absolute;\"></div>");
            l1Oo0O(this.OO11oo, "keydown", this.l01l, this)
        }
        this.OO11oo.style.zIndex = 1000000000;
        this.OO11oo.style.display = "block";
        mini[setXY](this.OO11oo, $.x, $.y-1);
        oO1Ol(this.OO11oo, $.width);
        var _ = mini.getViewportBox().width;
        if ($.x > _)
            mini.setX(this.OO11oo, -1000);
        return this.OO11oo
    }
    ;
    OO10O = function(A) {
        var _ = this.Oo0Oo;
        if (A.keyCode == 13 && _ && _.type == "textarea")
            return;
        if (A.keyCode == 13) {
            var $ = this.l1o0O;
            if ($ && $[1] && $[1].enterCommit === false)
                return;
            this[commitEdit]();
            this[focus]();
            if (this.editNextOnEnterKey)
                this[_beginEditNextCell](A.shiftKey == false)
        } else if (A.keyCode == 27) {
            this[cancelEdit]();
            this[focus]()
        } else if (A.keyCode == 9) {
            this[commitEdit]();
            if (this.editOnTabKey) {
                A.preventDefault();
                this[commitEdit]();
                this[_beginEditNextCell](A.shiftKey == false)
            }
        }
    }
    ;
    lOo1o = function(C) {
        var $ = this
          , A = this[getCurrentCell]();
        if (!A)
            return;
        this[focus]();
        var D = $[getBottomVisibleColumns]()
          , B = A ? A[1] : null 
          , _ = A ? A[0] : null 
          , G = D[indexOf](B)
          , E = $[indexOf](_)
          , F = $[getData]().length;
        if (C === false) {
            G -= 1;
            B = D[G];
            if (!B) {
                B = D[D.length - 1];
                _ = $[getAt](E - 1);
                if (!_)
                    return
            }
        } else {
            G += 1;
            B = D[G];
            if (!B) {
                B = D[0];
                _ = $[getAt](E + 1);
                if (!_)
                    if (this.createOnEnter) {
                        _ = {};
                        this[addRow](_)
                    } else
                        return
            }
        }
        A = [_, B];
        $[setCurrentCell](A);
        $[deselectAll]();
        $[setCurrent](_);
        $[scrollIntoView](_, B);
        $[beginEditCell]()
    }
    ;
    oo0OO = function(_) {
        var $ = _.ownerRowID;
        return this[getRowByUID]($)
    }
    ;
    Olo1oo = function(row) {
        if (this[allowCellEdit])
            return;
        var sss = new Date();
        row = this[getRow](row);
        if (!row)
            return;
        var rowEl = this.l010lo(row);
        if (!rowEl)
            return;
        row._editing = true;
        var s = this.oll1o(row)
          , rowEl = this.l010lo(row);
        jQuery(rowEl).before(s);
        rowEl.parentNode.removeChild(rowEl);
        rowEl = this.l010lo(row);
        O0Oo0(rowEl, "mini-grid-rowEdit");
        var columns = this[getBottomColumns]();
        for (var i = 0, l = columns.length; i < l; i++) {
            var column = columns[i]
              , value = row[column.field]
              , cellId = this.lloo0o(row, columns[i])
              , cellEl = document.getElementById(cellId);
            if (!cellEl)
                continue;if (typeof column.editor == "string")
                column.editor = eval("(" + column.editor + ")");
            var editorConfig = mini.copyTo({}, column.editor);
            editorConfig.id = this.uid + "$" + row._uid + "$" + column._id + "$editor";
            var editor = mini.create(editorConfig);
            if (this.ll0OO0(row, column, editor))
                if (editor) {
                    O0Oo0(cellEl, "mini-grid-cellEdit");
                    cellEl.innerHTML = "";
                    cellEl.appendChild(editor.el);
                    O0Oo0(editor.el, "mini-grid-editor")
                }
        }
        this[doLayout]()
    }
    ;
    lOo10 = function(B) {
        if (this[allowCellEdit])
            return;
        B = this[getRow](B);
        if (!B || !B._editing)
            return;
        delete B._editing;
        var _ = this.l010lo(B)
          , D = this[getBottomColumns]();
        for (var $ = 0, F = D.length; $ < F; $++) {
            var C = D[$]
              , H = this.lloo0o(B, D[$])
              , A = document.getElementById(H)
              , E = A.firstChild
              , I = mini.get(E);
            if (!I)
                continue;I[destroy]()
        }
        var G = this.oll1o(B);
        jQuery(_).before(G);
        _.parentNode.removeChild(_);
        this[doLayout]()
    }
    ;
    oll11 = function($) {
        if (this[allowCellEdit])
            return;
        $ = this[getRow]($);
        if (!$ || !$._editing)
            return;
        var _ = this[getEditRowData]($);
        this.Olo1O = false;
        this[updateRow]($, _);
        this.Olo1O = true;
        this[cancelEditRow]($)
    }
    ;
    l10Oo = function() {
        for (var $ = 0, A = this.data.length; $ < A; $++) {
            var _ = this.data[$];
            if (_._editing == true)
                return true
        }
        return false
    }
    ;
    loo11 = function($) {
        $ = this[getRow]($);
        if (!$)
            return false;
        return !!$._editing
    }
    ;
    Olo01 = function($) {
        return $._state == "added"
    }
    ;
    O01lOs = function() {
        var A = [];
        for (var $ = 0, B = this.data.length; $ < B; $++) {
            var _ = this.data[$];
            if (_._editing == true)
                A.push(_)
        }
        return A
    }
    ;
    O01lO = function() {
        var $ = this[getEditingRows]();
        return $[0]
    }
    ;
    ol1l1 = function(C) {
        var B = [];
        for (var $ = 0, D = this.data.length; $ < D; $++) {
            var _ = this.data[$];
            if (_._editing == true) {
                var A = this[getEditRowData]($, C);
                A._index = $;
                B.push(A)
            }
        }
        return B
    }
    ;
    ll110 = function(H, K) {
        H = this[getRow](H);
        if (!H || !H._editing)
            return null ;
        var J = {}
          , C = this[getBottomColumns]();
        for (var G = 0, D = C.length; G < D; G++) {
            var B = C[G]
              , E = this.lloo0o(H, C[G])
              , A = document.getElementById(E)
              , M = null ;
            if (B.type == "checkboxcolumn") {
                var I = B.getCheckBoxEl(H)
                  , _ = I.checked ? B.trueValue : B.falseValue;
                M = this.OO1l0o(H, B, _)
            } else {
                var L = A.firstChild
                  , F = mini.get(L);
                if (!F)
                    continue;M = this.OO1l0o(H, B, null , F)
            }
            mini._setMap(B.field, M.value, J);
            if (B.displayField)
                mini._setMap(B.displayField, M.text, J)
        }
        J[this.idField] = H[this.idField];
        if (K) {
            var $ = mini.copyTo({}, H);
            J = mini.copyTo($, J)
        }
        return J
    }
    ;
    o1l1o = function(E, G) {
        var C = [];
        if (!E || E == "removed")
            C.addRange(this.Ooo100);
        for (var _ = 0, F = this.data.length; _ < F; _++) {
            var B = this.data[_];
            if (B._state && (!E || E == B._state))
                C.push(B)
        }
        if (G)
            for (_ = 0,
            F = C.length; _ < F; _++) {
                B = C[_];
                if (B._state == "modified") {
                    var A = {};
                    A[this.idField] = B[this.idField];
                    for (var D in B) {
                        var $ = this.Ol1O(B, D);
                        if ($)
                            A[D] = B[D]
                    }
                    C[_] = A
                }
            }
        return C
    }
    ;
    Oo01l = function() {
        var $ = this[getChanges]();
        return $.length > 0
    }
    ;
    o10l1 = function($) {
        var A = $[this.oolO]
          , _ = this.OO0Ool[A];
        if (!_)
            _ = this.OO0Ool[A] = {};
        return _
    }
    ;
    oloo1 = function(A, _) {
        var $ = this.OO0Ool[A[this.oolO]];
        if (!$)
            return false;
        if (mini.isNull(_))
            return false;
        return $.hasOwnProperty(_)
    }
    ;
    Ol1l1 = function(A, B) {
        var E = false;
        for (var C in B) {
            var $ = B[C]
              , D = A[C];
            if (mini[isEquals](D, $))
                continue;mini._setMap(C, $, A);
            if (A._state != "added") {
                A._state = "modified";
                var _ = this.O01O(A);
                if (!_.hasOwnProperty(C))
                    _[C] = D
            }
            E = true
        }
        return E
    }
    ;
    l0OlO = function(_) {
        var A = this
          , B = A.oll1o(_)
          , $ = A.l010lo(_);
        jQuery($).before(B);
        $.parentNode.removeChild($)
    }
    ;
    loll0 = function(A, B, _) {
        A = this[getRow](A);
        if (!A || !B)
            return;
        if (typeof B == "string") {
            var $ = {};
            $[B] = _;
            B = $
        }
        var C = this.o1o1Ol(A, B);
        if (C == false)
            return;
        if (this.Olo1O)
            this[_updateRowEl](A);
        if (A._state == "modified")
            this[fire]("updaterow", {
                record: A,
                row: A
            });
        if (A == this[getSelected]())
            this.OloOOl(A);
        this[_doMargeCells]();
        this.OOll0();
        this.O10lOO()
    }
    ;
    ooools = function(_) {
        if (!mini.isArray(_))
            return;
        _ = _.clone();
        for (var $ = 0, A = _.length; $ < A; $++)
            this[deleteRow](_[$])
    }
    ;
    ooool = function(_) {
        _ = this[getRow](_);
        if (!_ || _._state == "deleted")
            return;
        if (_._state == "added")
            this[removeRow](_, true);
        else {
            if (this[isEditingRow](_))
                this[cancelEditRow](_);
            _._state = "deleted";
            var $ = this.l010lo(_);
            O0Oo0($, "mini-grid-deleteRow");
            this[fire]("deleterow", {
                record: _,
                row: _
            })
        }
        this.OOll0()
    }
    ;
    l00los = function(_, B) {
        if (!mini.isArray(_))
            return;
        _ = _.clone();
        for (var $ = 0, A = _.length; $ < A; $++)
            this[removeRow](_[$], B)
    }
    ;
    oOoOO = function() {
        var $ = this[getSelected]();
        if ($)
            this[removeRow]($, true)
    }
    ;
    l00lo = function(A, H) {
        A = this[getRow](A);
        if (!A)
            return;
        var D = A == this[getSelected]()
          , C = this[isSelected](A)
          , $ = this.data[indexOf](A);
        this.data.remove(A);
        if (A._state != "added") {
            A._state = "removed";
            this.Ooo100.push(A);
            delete this.OO0Ool[A[this.oolO]]
        }
        delete this.l1O000[A._uid];
        var G = this.oll1o(A)
          , _ = this.l010lo(A);
        if (_)
            _.parentNode.removeChild(_);
        var F = this.lO00(A)
          , E = document.getElementById(F);
        if (E)
            E.parentNode.removeChild(E);
        if (C && H) {
            var B = this[getAt]($);
            if (!B)
                B = this[getAt]($ - 1);
            this[deselectAll]();
            this[select](B)
        }
        this.o0oOo();
        this._removeRowError(A);
        this[fire]("removerow", {
            record: A,
            row: A
        });
        if (D)
            this.OloOOl(A);
        this.loloO();
        this.O10lOO();
        this[_doMargeCells]();
        this.OOll0()
    }
    ;
    oOO0ls = function(A, $) {
        if (!mini.isArray(A))
            return;
        A = A.clone();
        for (var _ = 0, B = A.length; _ < B; _++)
            this[addRow](A[_], $)
    }
    ;
    oOO0l = function(A, $) {
        if (mini.isNull($))
            $ = this.data.length;
        $ = this[indexOf]($);
        var C = this[getRow]($);
        this.data.insert($, A);
        if (!A[this.idField]) {
            if (this.autoCreateNewID)
                A[this.idField] = UUID();
            var E = {
                row: A,
                record: A
            };
            this[fire]("beforeaddrow", E)
        }
        A._state = "added";
        delete this.l1O000[A._uid];
        A._uid = l00ll++;
        this.l1O000[A._uid] = A;
        var D = this.oll1o(A);
        if (C) {
            var _ = this.l010lo(C);
            jQuery(_).before(D)
        } else
            mini.append(this._bodyInnerEl.firstChild, D);
        this.loloO();
        this.O10lOO();
        this[fire]("addrow", {
            record: A,
            row: A
        });
        var B = jQuery(".mini-grid-emptyText", this.O1OOoo)[0];
        if (B)
            mini[removeNode](B.parentNode);
        this[_doMargeCells]();
        this.OOll0()
    }
    ;
    oO1O01 = function(B, _) {
        B = this[getRow](B);
        if (!B)
            return;
        if (_ < 0)
            return;
        if (_ > this.data.length)
            return;
        var D = this[getRow](_);
        if (B == D)
            return;
        this.data.remove(B);
        var A = this.l010lo(B);
        if (D) {
            _ = this.data[indexOf](D);
            this.data.insert(_, B);
            var C = this.l010lo(D);
            jQuery(C).before(A)
        } else {
            this.data.insert(this.data.length, B);
            var $ = this._bodyInnerEl.firstChild;
            mini.append($.firstChild || $, A)
        }
        this.loloO();
        this.O10lOO();
        this[scrollIntoView](B);
        this[fire]("moverow", {
            record: B,
            row: B,
            index: _
        });
        this[_doMargeCells]()
    }
    ;
    o0ooO = function(B) {
        if (!mini.isArray(B))
            return;
        var C = this;
        B = B.sort(function($, A) {
            var B = C[indexOf]($)
              , _ = C[indexOf](A);
            if (B > _)
                return 1;
            return -1
        }
        );
        for (var A = 0, D = B.length; A < D; A++) {
            var _ = B[A]
              , $ = this[indexOf](_);
            this[moveRow](_, $ - 1)
        }
    }
    ;
    Ol1Ol0 = function(B) {
        if (!mini.isArray(B))
            return;
        var C = this;
        B = B.sort(function($, A) {
            var B = C[indexOf]($)
              , _ = C[indexOf](A);
            if (B > _)
                return 1;
            return -1
        }
        );
        B.reverse();
        for (var A = 0, D = B.length; A < D; A++) {
            var _ = B[A]
              , $ = this[indexOf](_);
            this[moveRow](_, $ + 2)
        }
    }
    ;
    oOOO = function() {
        this.data = [];
        this[doUpdate]()
    }
    ;
    lllOl = function($) {
        if (typeof $ == "number")
            return $;
        if (this[isGrouping]()) {
            var _ = this.Oo111();
            return _.data[indexOf]($)
        } else
            return this.data[indexOf]($)
    }
    ;
    O1OO00 = function($) {
        if (this[isGrouping]()) {
            var _ = this.Oo111();
            return _.data[$]
        } else
            return this.data[$]
    }
    ;
    OO0lo = function($) {
        var _ = typeof $;
        if (_ == "number")
            return this.data[$];
        else if (_ == "object")
            return $;
        else
            return this[getRowById]($)
    }
    ;
    l11o0 = function(A) {
        for (var _ = 0, B = this.data.length; _ < B; _++) {
            var $ = this.data[_];
            if ($[this.idField] == A)
                return $
        }
    }
    ;
    O11O1 = function($) {
        return this[getRowByValue]($)
    }
    ;
    lOl1O = function($) {
        return this.l1O000[$]
    }
    ;
    oO0O1s = function(D) {
        var A = [];
        if (D)
            for (var $ = 0, C = this.data.length; $ < C; $++) {
                var _ = this.data[$]
                  , B = D(_);
                if (B)
                    A.push(_);
                if (B === 1)
                    break
            }
        return A
    }
    ;
    oO0O1 = function(B) {
        if (B)
            for (var $ = 0, A = this.data.length; $ < A; $++) {
                var _ = this.data[$];
                if (B(_) === true)
                    return _
            }
    }
    ;
    O1Oll = function($) {
        this.collapseGroupOnLoad = $
    }
    ;
    OOOo0 = function() {
        return this.collapseGroupOnLoad
    }
    ;
    O0l1o = function($) {
        this.showGroupSummary = $
    }
    ;
	;O00O0=function () {return this.vertical; }
    ll11O = function() {
        return this.showGroupSummary
    }
    ;
    O1olO = function() {
        if (!this.ll11l)
            return;
        for (var $ = 0, A = this.ll11l.length; $ < A; $++) {
            var _ = this.ll11l[$];
            this.l01001(_)
        }
    }
    ;
    OoOo = function() {
        if (!this.ll11l)
            return;
        for (var $ = 0, A = this.ll11l.length; $ < A; $++) {
            var _ = this.ll11l[$];
            this.loolO0(_)
        }
    }
    ;
    llll1 = function(A) {
        var C = A.rows;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var B = C[_]
              , $ = this.l010lo(B);
            if ($)
                $.style.display = "none";
            $ = this[getRowDetailEl](B);
            if ($)
                $.style.display = "none"
        }
        A.expanded = false;
        var F = this.uid + "$group$" + A.id
          , D = document.getElementById(F);
        if (D)
            O0Oo0(D, "mini-grid-group-collapse");
        this[doLayout]()
    }
    ;
    o01ol = function(A) {
        var C = A.rows;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var B = C[_]
              , $ = this.l010lo(B);
            if ($)
                $.style.display = "";
            $ = this[getRowDetailEl](B);
            if ($)
                $.style.display = B._showDetail ? "" : "none"
        }
        A.expanded = true;
        var F = this.uid + "$group$" + A.id
          , D = document.getElementById(F);
        if (D)
            Ol00(D, "mini-grid-group-collapse");
        this[doLayout]()
    }
    ;
    OlOo01 = function($, _) {
        if (!$)
            return;
        this.o00o0 = $;
        if (typeof _ == "string")
            _ = _.toLowerCase();
        this.Oo00Oo = _;
        this.ll11l = null ;
        this[doUpdate]()
    }
    ;
    oO0Oo0 = function() {
        this.o00o0 = "";
        this.Oo00Oo = "";
        this.ll11l = null ;
        this[doUpdate]()
    }
    ;
    Oo0o0 = function() {
        return this.o00o0
    }
    ;
    OOl10 = function() {
        return this.Oo00Oo
    }
    ;
    olOlO = function() {
        return this.o00o0 != ""
    }
    ;
    oO11o = function() {
        if (this[isGrouping]() == false)
            return null ;
        if (!this.ll11l) {
            var F = this.o00o0
              , H = this.Oo00Oo
              , D = this.data.clone();
            if (typeof H == "function")
                mini.sort(D, H);
            else {
                mini.sort(D, function(_, B) {
                    var $ = _[F]
                      , A = B[F];
                    if ($ > A)
                        return 1;
                    else
                        return 0
                }
                , this);
                if (H == "desc")
                    D.reverse()
            }
            var B = []
              , C = {};
            for (var _ = 0, G = D.length; _ < G; _++) {
                var $ = D[_]
                  , I = $[F]
                  , E = mini.isDate(I) ? I[getTime]() : I
                  , A = C[E];
                if (!A) {
                    A = C[E] = {};
                    A.header = F;
                    A.field = F;
                    A.dir = H;
                    A.value = I;
                    A.rows = [];
                    B.push(A);
                    A.id = this.O1111o++
                }
                A.rows.push($)
            }
            this.ll11l = B;
            D = [];
            for (_ = 0,
            G = B.length; _ < G; _++)
                D.addRange(B[_].rows);
            this.ll11l.data = D
        }
        return this.ll11l
    }
    ;
    oll01 = function(C) {
        if (!this.ll11l)
            return null ;
        var A = this.ll11l;
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            if (_.id == C)
                return _
        }
    }
    ;
    l001l = function($) {
        var _ = {
            group: $,
            rows: $.rows,
            field: $.field,
            dir: $.dir,
            value: $.value,
            cellHtml: $.header + " :" + $.value
        };
        this[fire]("drawgroup", _);
        return _
    }
    ;
    OOlO1 = function(_, $) {
        this[on]("drawgroupheader", _, $)
    }
    ;
    O0l01 = function(_, $) {
        this[on]("drawgroupsummary", _, $)
    }
    ;
    Ol1oO = function(F) {
        if (F && mini.isArray(F) == false)
            F = [F];
        var $ = this
          , A = $[getBottomColumns]();
        if (!F)
            F = A;
        var D = $[getData]().clone();
        D.push({});
        var B = [];
        for (var _ = 0, G = F.length; _ < G; _++) {
            var C = F[_];
            C = $[getColumn](C);
            if (!C)
                continue;var H = E(C);
            B.addRange(H)
        }
        $[mergeCells](B);
        function E(F) {
            if (!F.field)
                return;
            var K = []
              , I = -1
              , G = 1
              , J = A[indexOf](F)
              , C = null ;
            for (var $ = 0, H = D.length; $ < H; $++) {
                var B = D[$]
                  , _ = B[F.field];
                if (I == -1 || _ != C) {
                    if (G > 1) {
                        var E = {
                            rowIndex: I,
                            columnIndex: J,
                            rowSpan: G,
                            colSpan: 1
                        };
                        K.push(E)
                    }
                    I = $;
                    G = 1;
                    C = _
                } else
                    G++
            }
            return K
        }
    }
    ;
    l0Olo = function(D) {
        if (!mini.isArray(D))
            return;
        this._margedCells = D;
        this[_doMargeCells]();
        var C = this._mergedCellMaps = {};
        function _(G, H, E, D, A) {
            for (var $ = G, F = G + E; $ < F; $++)
                for (var B = H, _ = H + D; B < _; B++)
                    if ($ == G && B == H)
                        C[$ + ":" + B] = A;
                    else
                        C[$ + ":" + B] = true
        }
        var D = this._margedCells;
        if (D)
            for (var $ = 0, B = D.length; $ < B; $++) {
                var A = D[$];
                if (!A.rowSpan)
                    A.rowSpan = 1;
                if (!A.colSpan)
                    A.colSpan = 1;
                _(A.rowIndex, A.columnIndex, A.rowSpan, A.colSpan, A)
            }
    }
    ;
	;llll=function () {return this.iconCls; }
    o1O1 = function($) {
        this[mergeCells]($)
    }
    ;
    loo00 = function(_, A) {
        if (!this._mergedCellMaps)
            return true;
        var $ = this._mergedCellMaps[_ + ":" + A];
        return !($ === true)
    }
    ;
    oOlo0 = function() {
        function $() {
            var F = this._margedCells;
            if (!F)
                return;
            for (var $ = 0, D = F.length; $ < D; $++) {
                var B = F[$];
                if (!B.rowSpan)
                    B.rowSpan = 1;
                if (!B.colSpan)
                    B.colSpan = 1;
                var E = this.o1o1o0(B.rowIndex, B.columnIndex, B.rowSpan, B.colSpan);
                for (var C = 0, _ = E.length; C < _; C++) {
                    var A = E[C];
                    if (C != 0)
                        A.style.display = "none";
                    else {
                        A.rowSpan = B.rowSpan;
                        A.colSpan = B.colSpan
                    }
                }
            }
        }
        $[call](this)
    }
    ;
    llO0 = function(I, E, A, B) {
        var J = [];
        if (!mini.isNumber(I))
            return [];
        if (!mini.isNumber(E))
            return [];
        var C = this[getBottomColumns]()
          , G = this.data;
        for (var F = I, D = I + A; F < D; F++)
            for (var H = E, $ = E + B; H < $; H++) {
                var _ = this.l10Ol(F, H);
                if (_)
                    J.push(_)
            }
        return J
    }
    ;
    ol11o = function() {
        var A = this.Oolo0;
        for (var $ = A.length - 1; $ >= 0; $--) {
            var _ = A[$];
            if (!!this.l1O000[_._uid] == false) {
                A.removeAt($);
                delete this.oOOlo0[_._uid]
            }
        }
        if (this.l0o0O)
            if (!!this.oOOlo0[this.l0o0O._uid] == false)
                this.l0o0O = null 
    }
    ;
    l1oo0 = function($) {
        this.allowUnselect = $
    }
    ;
    loOoO = function($) {
        return this.allowUnselect
    }
    ;
    OO101 = function($) {
        this[allowRowSelect] = $
    }
    ;
    l10lo = function($) {
        return this[allowRowSelect]
    }
    ;
    lOO1O = function($) {
        if (this[multiSelect] != $) {
            this[multiSelect] = $;
            this.oolOOo()
        }
    }
    ;
	;lo010l=function (value) {this.vertical = value; this[doUpdate](); }
    OoO1o = function() {
        return this[multiSelect]
    }
    ;
    O0011 = function() {
        var B = this[getData]()
          , C = true;
        if (B.length == 0) {
            C = false;
            return C
        }
        var A = 0;
        for (var _ = 0, D = B.length; _ < D; _++) {
            var $ = B[_];
            if (this[isSelected]($))
                A++
        }
        if (B.length == A)
            C = true;
        else if (A == 0)
            C = false;
        else
            C = "has";
        return C
    }
    ;
    O0Ol1 = function($) {
        $ = this[getRow]($);
        if (!$)
            return false;
        return !!this.oOOlo0[$._uid]
    }
    ;
    lO01os = function() {
        this.o0oOo();
        return this.Oolo0.clone()
    }
    ;
    llo10 = function($) {
        this[setSelected]($)
    }
    ;
    O0101 = function() {
        return this[getSelected]()
    }
    ;
    lO01o = function() {
        this.o0oOo();
        return this.l0o0O
    }
    ;
    Ol1l = function(A, B) {
        try {
            if (B) {
                var _ = this.l10Ol(A, B);
                mini[scrollIntoView](_, this.O1OOoo, true)
            } else {
                var $ = this.l010lo(A);
                mini[scrollIntoView]($, this.O1OOoo, false)
            }
        } catch (C) {}
    }
    ;
	;O1lool=function () {return this._headerInnerEl; }
    o01OO = function($) {
        if ($)
            this[select]($);
        else
            this[deselect](this.l0o0O);
        if (this.l0o0O)
            this[scrollIntoView](this.l0o0O);
        this.looll()
    }
    ;
    l1l0O = function($) {
        if (this[multiSelect] == false)
            this[deselectAll]();
        $ = this[getRow]($);
        if (!$)
            return;
        this.l0o0O = $;
        this[selects]([$])
    }
    ;
    l001O = function($) {
        $ = this[getRow]($);
        if (!$)
            return;
        this[deselects]([$])
    }
    ;
	;ol0o=function () {return this[showFilterRow] ? lOl10(this.o01loo) :0; }
    oOoo1 = function() {
        var $ = this.data.clone();
        this[selects]($)
    }
    ;
    o11l1 = function() {
        var $ = this.Oolo0.clone();
        this.l0o0O = null ;
        this[deselects]($)
    }
    ;
    olooO = function() {
        this[deselectAll]()
    }
    ;
    l1OOO = function(C) {
        if (!C || C.length == 0)
            return;
        var E = new Date();
        C = C.clone();
        for (var A = C.length - 1; A >= 0; A--) {
            var _ = this[getRow](C[A]);
            if (_)
                C[A] = _;
            else
                C.removeAt(A)
        }
        var H = {}
          , D = this[getData]();
        for (var A = 0, G = D.length; A < G; A++) {
            var $ = this[getRow](D[A])
              , I = $[this.idField];
            if (I)
                H[$[this.idField]] = $
        }
        var F = [];
        for (A = 0,
        G = C.length; A < G; A++) {
            var _ = C[A]
              , B = this.l1O000[_._uid];
            if (!B)
                _ = H[_[this.idField]];
            if (_)
                F.push(_)
        }
        C = F;
        C = C.clone();
        this.oO0oo(C, true);
        for (A = 0,
        G = C.length; A < G; A++) {
            _ = C[A];
            if (!this[isSelected](_)) {
                this.Oolo0.push(_);
                this.oOOlo0[_._uid] = _
            }
        }
        this.OOo1()
    }
    ;
    oO10o = function(A) {
        if (!A)
            A = [];
        A = A.clone();
        for (var _ = A.length - 1; _ >= 0; _--) {
            var $ = this[getRow](A[_]);
            if ($)
                A[_] = $;
            else
                A.removeAt(_)
        }
        A = A.clone();
        this.oO0oo(A, false);
        for (_ = A.length - 1; _ >= 0; _--) {
            $ = A[_];
            if (this[isSelected]($)) {
                this.Oolo0.remove($);
                delete this.oOOlo0[$._uid]
            }
        }
        if (A[indexOf](this.l0o0O) != -1)
            this.l0o0O = null ;
        this.OOo1()
    }
    ;
	;l1ll00=function () {return this.iconPosition; }
    Ooo00 = function(A, D) {
        var B = new Date();
        for (var _ = 0, C = A.length; _ < C; _++) {
            var $ = A[_];
            if (D)
                this[addRowCls]($, this.o01Ol);
            else
                this[removeRowCls]($, this.o01Ol)
        }
    }
    ;
	;O0o0=function (value) {return this.autoLoad; }
    oo11O = function() {
        if (this.ool0o)
            clearTimeout(this.ool0o);
        var $ = this;
        this.ool0o = setTimeout(function() {
            var _ = {
                selecteds: $[getSelecteds](),
                selected: $[getSelected]()
            };
            $[fire]("SelectionChanged", _);
            $.OloOOl(_.selected)
        }
        , 1)
    }
    ;
    ooooo = function($) {
        if (this._currentTimer)
            clearTimeout(this._currentTimer);
        var _ = this;
        this._currentTimer = setTimeout(function() {
            var A = {
                record: $,
                row: $
            };
            _[fire]("CurrentChanged", A);
            _._currentTimer = null 
        }
        , 1)
    }
    ;
    O10ll = function(_, A) {
        var $ = this.l010lo(_);
        if ($)
            O0Oo0($, A)
    }
    ;
    llolo = function(_, A) {
        var $ = this.l010lo(_);
        if ($)
            Ol00($, A)
    }
    ;
    OlO0o = function(_, $) {
        _ = this[getRow](_);
        if (!_ || _ == this.lOl111)
            return;
        var A = this.l010lo(_);
        if ($ && A)
            this[scrollIntoView](_);
        if (this.lOl111 == _)
            return;
        this.looll();
        this.lOl111 = _;
        O0Oo0(A, this.O1l00l)
    }
    ;
    o1O0l = function() {
        if (!this.lOl111)
            return;
        var $ = this.l010lo(this.lOl111);
        if ($)
            Ol00($, this.O1l00l);
        this.lOl111 = null 
    }
    ;
    o1l1l = function(B) {
        var A = llOo(B.target, this.Ool1oo);
        if (!A)
            return null ;
        var $ = A.id.split("$")
          , _ = $[$.length - 1];
        return this[getRowByUID](_)
    }
    ;
	;olo1=function (column) {return this.uid + "$summary$" + column._id; }
    oo01O = function(C, A) {
        if (this[allowCellEdit])
            this[commitEdit]();
        var B = jQuery(this.O1OOoo).css("overflow-y");
        if (B == "hidden") {
            var $ = C.wheelDelta || -C.detail * 24
              , _ = this.O1OOoo.scrollTop;
            _ -= $;
            this.O1OOoo.scrollTop = _;
            if (_ == this.O1OOoo.scrollTop)
                C.preventDefault();
            var C = {
                scrollTop: this.O1OOoo.scrollTop,
                direction: "vertical"
            };
            this[fire]("scroll", C)
        }
    }
    ;
    O11Ol = function(D) {
        var A = llOo(D.target, "mini-grid-groupRow");
        if (A) {
            var _ = A.id.split("$")
              , C = _[_.length - 1]
              , $ = this.lol0ol(C);
            if ($) {
                var B = !($.expanded === false ? false : true);
                if (B)
                    this.loolO0($);
                else
                    this.l01001($)
            }
        } else
            this.o1l111(D, "Click")
    }
    ;
    Oo1Ol = function(B) {
        try {
            var A = B.target.tagName.toLowerCase();
            if (A == "input" || A == "textarea" || A == "select")
                return;
            if (l1oooo(this.o01loo, B.target) || l1oooo(this.oO0o01, B.target) || l1oooo(this.o111, B.target) || llOo(B.target, "mini-grid-rowEdit") || llOo(B.target, "mini-grid-detailRow"))
                ;
            else {
                var $ = this;
                $[focus]()
            }
        } catch (_) {}
    }
    ;
    ollo1 = function($) {
        this.o1l111($, "Dblclick")
    }
    ;
    o1l0o = function($) {
        this.o1l111($, "MouseDown");
        this[_tryFocus]($)
    }
    ;
    lolOl = function($) {
        if (l1oooo(this.el, $.target)) {
            this[_tryFocus]($);
            this.o1l111($, "MouseUp")
        }
    }
    ;
	;O1010=function () {return this[iconStyle]; }
    l1Olo = function($) {
        this.o1l111($, "MouseMove")
    }
    ;
    ollO1 = function($) {
        this.o1l111($, "MouseOver")
    }
    ;
    o1l1 = function($) {
        this.o1l111($, "MouseOut")
    }
    ;
	;OoOOl=function (column) {column = this[getColumn](column); if (!column) return null; return ooO0(this.OlOo0(column),this.el); }
    loooo = function($) {
        this.o1l111($, "KeyDown")
    }
    ;
    Ol1O1 = function($) {
        this.o1l111($, "KeyUp")
    }
    ;
    oO01o = function($) {
        this.o1l111($, "ContextMenu")
    }
    ;
    oo0lo = function(F, D) {
        if (!this.enabled)
            return;
        var C = this.l1lO(F)
          , _ = C.record
          , B = C.column;
        if (_) {
            var A = {
                record: _,
                row: _,
                htmlEvent: F
            }
              , E = this["_OnRow" + D];
            if (E)
                E[call](this, A);
            else
                this[fire]("row" + D, A)
        }
        if (B) {
            A = {
                column: B,
                field: B.field,
                htmlEvent: F
            },
            E = this["_OnColumn" + D];
            if (E)
                E[call](this, A);
            else
                this[fire]("column" + D, A)
        }
        if (_ && B) {
            A = {
                sender: this,
                record: _,
                row: _,
                column: B,
                field: B.field,
                htmlEvent: F
            },
            E = this["_OnCell" + D];
            if (E)
                E[call](this, A);
            else
                this[fire]("cell" + D, A);
            if (B["onCell" + D])
                B["onCell" + D][call](B, A)
        }
        if (!_ && B) {
            A = {
                column: B,
                htmlEvent: F
            },
            E = this["_OnHeaderCell" + D];
            if (E)
                E[call](this, A);
            else {
                var $ = "onheadercell" + D.toLowerCase();
                if (B[$]) {
                    A.sender = this;
                    B[$](A)
                }
                this[fire]("headercell" + D, A)
            }
        }
        if (!_)
            this.looll()
    }
    ;
    Ol0l0 = function($, C, D, E) {
        var _ = mini._getMap(C.field, $)
          , F = {
            sender: this,
            rowIndex: D,
            columnIndex: E,
            record: $,
            row: $,
            column: C,
            field: C.field,
            value: _,
            cellHtml: _,
            rowCls: null ,
            cellCls: C.cellCls || "",
            rowStyle: null ,
            cellStyle: C.cellStyle || "",
            allowCellWrap: this.allowCellWrap,
            autoEscape: C.autoEscape
        };
        F.visible = this[_isCellVisible](D, E);
        if (F.visible == true && this._mergedCellMaps) {
            var B = this._mergedCellMaps[D + ":" + E];
            if (B) {
                F.rowSpan = B.rowSpan;
                F.colSpan = B.colSpan
            }
        }
        if (C.dateFormat)
            if (mini.isDate(F.value))
                F.cellHtml = mini.formatDate(_, C.dateFormat);
            else
                F.cellHtml = _;
        if (C.dataType == "currency")
            F.cellHtml = mini.formatCurrency(F.value, C.currencyUnit);
        if (C.displayField)
            F.cellHtml = $[C.displayField];
        if (F.autoEscape == true)
            F.cellHtml = mini.htmlEncode(F.cellHtml);
        var A = C.renderer;
        if (A) {
            fn = typeof A == "function" ? A : l01o0(A);
            if (fn)
                F.cellHtml = fn[call](C, F)
        }
        this[fire]("drawcell", F);
        if (F.cellHtml && !!F.cellHtml.unshift && F.cellHtml.length == 0)
            F.cellHtml = "&nbsp;";
        if (F.cellHtml === null  || F.cellHtml === undefined || F.cellHtml === "")
            F.cellHtml = "&nbsp;";
        return F
    }
    ;
    o1lOl = function(A, B) {
        var D = {
            result: this[getResultObject](),
            sender: this,
            data: A,
            column: B,
            field: B.field,
            value: "",
            cellHtml: "",
            cellCls: B.cellCls || "",
            cellStyle: B.cellStyle || "",
            allowCellWrap: this.allowCellWrap
        };
        if (B.summaryType) {
            var C = mini.summaryTypes[B.summaryType];
            if (C)
                D.value = C(A, B.field)
        }
        var $ = D.value;
        D.cellHtml = D.value;
        if (D.value && parseInt(D.value) != D.value && D.value.toFixed) {
            decimalPlaces = parseInt(B[decimalPlaces]);
            if (isNaN(decimalPlaces))
                decimalPlaces = 2;
            D.cellHtml = parseFloat(D.value.toFixed(decimalPlaces))
        }
        if (B.dateFormat)
            if (mini.isDate(D.value))
                D.cellHtml = mini.formatDate($, B.dateFormat);
            else
                D.cellHtml = $;
        if (B.dataType == "currency")
            D.cellHtml = mini.formatCurrency(D.cellHtml, B.currencyUnit);
        var _ = B.summaryRenderer;
        if (_) {
            C = typeof _ == "function" ? _ : window[_];
            if (C)
                D.cellHtml = C[call](B, D)
        }
        B.summaryValue = D.value;
        this[fire]("drawsummarycell", D);
        if (D.cellHtml === null  || D.cellHtml === undefined || D.cellHtml === "")
            D.cellHtml = "&nbsp;";
        return D
    }
    ;
    l00O1 = function(_, A) {
        var C = {
            sender: this,
            data: _,
            column: A,
            field: A.field,
            value: "",
            cellHtml: "",
            cellCls: A.cellCls || "",
            cellStyle: A.cellStyle || "",
            allowCellWrap: this.allowCellWrap
        };
        if (A.groupSummaryType) {
            var B = mini.groupSummaryType[A.summaryType];
            if (B)
                C.value = B(_, A.field)
        }
        C.cellHtml = C.value;
        var $ = A.groupSummaryRenderer;
        if ($) {
            B = typeof $ == "function" ? $ : window[$];
            if (B)
                C.cellHtml = B[call](A, C)
        }
        this[fire]("drawgroupsummarycell", C);
        if (C.cellHtml === null  || C.cellHtml === undefined || C.cellHtml === "")
            C.cellHtml = "&nbsp;";
        return C
    }
    ;
    OoOoO = function(_) {
        var $ = _.record;
        this[fire]("cellmousedown", _)
    }
    ;
    Oll10 = function($) {
        if (!this.enabled)
            return;
        if (l1oooo(this.el, $.target))
            return
    }
    ;
    Olo00 = function(_) {
        record = _.record;
        if (!this.enabled || record.enabled === false || this[enableHotTrack] == false)
            return;
        this[fire]("rowmousemove", _);
        var $ = this;
        $.OOOl1(record)
    }
    ;
    olOol = function(A) {
        A.sender = this;
        var $ = A.column;
        if (!O1O1Oo(A.htmlEvent.target, "mini-grid-splitter")) {
            if (this[allowSortColumn] && this[isEditing]() == false)
                if (!$.columns || $.columns.length == 0)
                    if ($.field && $.allowSort !== false) {
                        var _ = "asc";
                        if (this.sortField == $.field)
                            _ = this.sortOrder == "asc" ? "desc" : "asc";
                        this[sortBy]($.field, _)
                    }
            this[fire]("headercellclick", A)
        }
    }
    ;
    lo1O1 = function(A) {
        var _ = {
            popupEl: this.el,
            htmlEvent: A,
            cancel: false
        };
        if (l1oooo(this.l10OO, A.target)) {
            if (this.headerContextMenu) {
                this.headerContextMenu[fire]("BeforeOpen", _);
                if (_.cancel == true)
                    return;
                this.headerContextMenu[fire]("opening", _);
                if (_.cancel == true)
                    return;
                this.headerContextMenu[showAtPos](A.pageX, A.pageY);
                this.headerContextMenu[fire]("Open", _)
            }
        } else {
            var $ = llOo(A.target, "mini-grid-detailRow");
            if ($ && l1oooo(this.el, $))
                return;
            if (this[contextMenu]) {
                this[contextMenu][fire]("BeforeOpen", _);
                if (_.cancel == true)
                    return;
                this[contextMenu][fire]("opening", _);
                if (_.cancel == true)
                    return;
                this[contextMenu][showAtPos](A.pageX, A.pageY);
                this[contextMenu][fire]("Open", _)
            }
        }
        return false
    }
    ;
    O11ol = function($) {
        var _ = this.lOOo($);
        if (!_)
            return;
        if (this.headerContextMenu !== _) {
            this.headerContextMenu = _;
            this.headerContextMenu.owner = this;
            l1Oo0O(this.el, "contextmenu", this.Ol1o, this)
        }
    }
    ;
    oO0o0 = function() {
        return this.headerContextMenu
    }
    ;
    OooOoO = function() {
        if (!this.columnsMenu)
            this.columnsMenu = mini.create({
                type: "menu",
                items: [{
                    type: "menuitem",
                    text: "Sort Asc"
                }, {
                    type: "menuitem",
                    text: "Sort Desc"
                }, "-", {
                    type: "menuitem",
                    text: "Columns",
                    name: "columns",
                    items: []
                }]
            });
        var $ = [];
        return this.columnsMenu
    }
    ;
    ol0oO = function(A) {
        var B = this[createColumnsMenu]()
          , _ = this._getColumnEl(A)
          , $ = OOl1o0(_);
        B[showAtPos]($.right - 17, $.bottom)
    }
    ;
    l1Oo1 = function(_, $) {
        this[on]("rowdblclick", _, $)
    }
    ;
    O110ll = function(_, $) {
        this[on]("rowclick", _, $)
    }
    ;
    o1O1O = function(_, $) {
        this[on]("rowmousedown", _, $)
    }
    ;
    l0o01 = function(_, $) {
        this[on]("rowcontextmenu", _, $)
    }
    ;
    O0O0O = function(_, $) {
        this[on]("cellclick", _, $)
    }
    ;
    O10ol0 = function(_, $) {
        this[on]("cellmousedown", _, $)
    }
    ;
    o0o00 = function(_, $) {
        this[on]("cellcontextmenu", _, $)
    }
    ;
    l11O = function(_, $) {
        this[on]("beforeload", _, $)
    }
    ;
    o01l = function(_, $) {
        this[on]("load", _, $)
    }
    ;
    OO0o1 = function(_, $) {
        this[on]("loaderror", _, $)
    }
    ;
    OO0lO = function(_, $) {
        this[on]("preload", _, $)
    }
    ;
    O0O11 = function(_, $) {
        this[on]("drawcell", _, $)
    }
    ;
    O0oo0 = function(_, $) {
        this[on]("cellbeginedit", _, $)
    }
    ;
    lO1ol = function(el) {
        var attrs = mini.DataGrid[superclass][getAttrs][call](this, el)
          , cs = mini[getChildNodes](el);
        for (var i = 0, l = cs.length; i < l; i++) {
            var node = cs[i]
              , property = jQuery(node).attr("property");
            if (!property)
                continue;property = property.toLowerCase();
            if (property == "columns")
                attrs.columns = mini.ll1o01(node);
            else if (property == "data")
                attrs.data = node.innerHTML
        }
        mini[_ParseString](el, attrs, ["url", "sizeList", "bodyCls", "bodyStyle", "footerCls", "footerStyle", "pagerCls", "pagerStyle", "onheadercellclick", "onheadercellmousedown", "onheadercellcontextmenu", "onrowdblclick", "onrowclick", "onrowmousedown", "onrowcontextmenu", "oncellclick", "oncellmousedown", "oncellcontextmenu", "onbeforeload", "onpreload", "onloaderror", "onload", "ondrawcell", "oncellbeginedit", "onselectionchanged", "onshowrowdetail", "onhiderowdetail", "idField", "valueField", "ajaxMethod", "ondrawgroup", "pager", "oncellcommitedit", "oncellendedit", "headerContextMenu", "loadingMsg", "emptyText", "cellEditAction", "sortMode", "oncellvalidation", "onsort", "pageIndexField", "pageSizeField", "sortFieldField", "sortOrderField", "totalField", "dataField", "ondrawsummarycell", "ondrawgroupsummarycell", "onresize", "oncolumnschanged"]);
        mini[_ParseBool](el, attrs, ["showHeader", "showPager", "showFooter", "showTop", "allowSortColumn", "allowMoveColumn", "allowResizeColumn", "showHGridLines", "showVGridLines", "showFilterRow", "showSummaryRow", "showFooter", "showTop", "fitColumns", "showLoading", "multiSelect", "allowAlternating", "resultAsData", "allowRowSelect", "allowUnselect", "enableHotTrack", "showPageIndex", "showPageSize", "showTotalCount", "checkSelectOnLoad", "allowResize", "autoLoad", "autoHideRowDetail", "allowCellSelect", "allowCellEdit", "allowCellWrap", "allowHeaderWrap", "selectOnLoad", "virtualScroll", "collapseGroupOnLoad", "showGroupSummary", "showEmptyText", "allowCellValid", "showModified", "showColumnsMenu", "showPageInfo", "showReloadButton", "showNewRow", "editNextOnEnterKey", "createOnEnter"]);
        mini[_ParseInt](el, attrs, ["columnWidth", "frozenStartColumn", "frozenEndColumn", "pageIndex", "pageSize"]);
        if (typeof attrs[sizeList] == "string")
            attrs[sizeList] = eval(attrs[sizeList]);
        if (!attrs[idField] && attrs[valueField])
            attrs[idField] = attrs[valueField];
        return attrs
    }
    ;
    lOOol = function(_) {
        if (!_)
            return null ;
        var $ = this.l111o(_);
        return $
    }
    ;
    Oll1o = function() {
        mini.TreeGrid[superclass][_create][call](this);
        this.lOlOo1 = mini.append(this.oO0o1l, "<div class=\"mini-resizer-trigger\" style=\"\"></div>");
        l1Oo0O(this.O1OOoo, "scroll", this.oO1O, this);
        this.l0OO10 = new o01l1(this);
        this._ColumnMove = new o10O0(this);
        this.lOlol1 = new l0lO(this);
        this._CellTip = new oOloo(this)
    }
    ;
    OOlOo = function($) {
        return this.uid + "$column$" + $.id
    }
    ;
    OlloO = function() {
        return this.l10OO.firstChild
    }
    ;
    Oo11l = function(D) {
        var F = ""
          , B = this[getBottomColumns]();
        if (isIE) {
            if (isIE6 || isIE7 || (isIE8 && !jQuery.boxModel) || (isIE9 && !jQuery.boxModel))
                F += "<tr style=\"display:none;\">";
            else
                F += "<tr >"
        } else
            F += "<tr>";
        for (var $ = 0, C = B.length; $ < C; $++) {
            var A = B[$]
              , _ = A.width
              , E = this.O1O0o(A) + "$" + D;
            F += "<td id=\"" + E + "\" style=\"padding:0;border:0;margin:0;height:0;";
            if (A.width)
                F += "width:" + A.width;
            if (A.visible == false)
                F += ";display:none;";
            F += "\" ></td>"
        }
        F += "</tr>";
        return F
    }
    ;
    O1Ol1 = function() {
        var _ = this.olo1O1()
          , F = this[getBottomColumns]()
          , G = F.length
          , E = [];
        E[E.length] = "<div class=\"mini-treegrid-headerInner\"><table style=\"display:table\" class=\"mini-treegrid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        E[E.length] = this.O0OlOl("header");
        for (var K = 0, $ = _.length; K < $; K++) {
            var C = _[K];
            E[E.length] = "<tr >";
            for (var H = 0, D = C.length; H < D; H++) {
                var A = C[H]
                  , B = A.header;
                if (typeof B == "function")
                    B = B[call](this, A);
                if (mini.isNull(B) || B === "")
                    B = "&nbsp;";
                var I = this.O1O0o(A);
                E[E.length] = "<td id=\"";
                E[E.length] = I;
                E[E.length] = "\" class=\"mini-treegrid-headerCell  " + (A.headerCls || "") + " ";
                E[E.length] = "\" style=\"";
                var J = F[indexOf](A);
                if (A.visible == false)
                    E[E.length] = ";display:none;";
                if (A.columns && A.columns.length > 0 && A.colspan == 0)
                    E[E.length] = ";display:none;";
                if (A.headerStyle)
                    E[E.length] = A.headerStyle + ";";
                if (A.headerAlign)
                    E[E.length] = "text-align:" + A.headerAlign + ";";
                E[E.length] = "\" ";
                if (A.rowspan)
                    E[E.length] = "rowspan=\"" + A.rowspan + "\" ";
                if (A.colspan)
                    E[E.length] = "colspan=\"" + A.colspan + "\" ";
                E[E.length] = ">";
                E[E.length] = B;
                E[E.length] = "</td>"
            }
            E[E.length] = "</tr>"
        }
        E[E.length] = "</table><div class=\"mini-treegrid-topRightCell\"></div></div>";
        var L = E.join("");
        this.l10OO.innerHTML = L;
        this._headerInnerEl = this.l10OO.firstChild;
        this._topRightCellEl = this._headerInnerEl.lastChild
    }
    ;
    l1o1o = function(B, M, G) {
        var K = !G;
        if (!G)
            G = [];
        var H = B[this.textField];
        if (H === null  || H === undefined)
            H = "";
        var I = this[isLeaf](B)
          , $ = this[getLevel](B)
          , D = "";
        if (!I)
            D = this[isExpandedNode](B) ? this.o1OlO : this.lOoo;
        if (this.Oo0oO == B)
            D += " " + this.O00o;
        var E = this[getBottomColumns]();
        G[G.length] = "<table class=\"mini-treegrid-nodeTitle ";
        G[G.length] = D;
        G[G.length] = "\" cellspacing=\"0\" cellpadding=\"0\">";
        G[G.length] = this.O0OlOl();
        G[G.length] = "<tr>";
        for (var J = 0, _ = E.length; J < _; J++) {
            var C = E[J]
              , F = this.lloo0o(B, C)
              , L = this.OO0OO(B, C)
              , A = C.width;
            if (typeof A == "number")
                A = A + "px";
            G[G.length] = "<td id=\"";
            G[G.length] = F;
            G[G.length] = "\" class=\"mini-treegrid-cell ";
            if (L.cellCls)
                G[G.length] = L.cellCls;
            G[G.length] = "\" style=\"";
            if (L.cellStyle) {
                G[G.length] = L.cellStyle;
                G[G.length] = ";"
            }
            if (C.align) {
                G[G.length] = "text-align:";
                G[G.length] = C.align;
                G[G.length] = ";"
            }
            if (C.visible == false)
                G[G.length] = "display:none;";
            G[G.length] = "\">";
            G[G.length] = L.cellHtml;
            G[G.length] = "</td>";
            if (L.rowCls)
                rowCls = L.rowCls;
            if (L.rowStyle)
                rowStyle = L.rowStyle
        }
        G[G.length] = "</table>";
        if (K)
            return G.join("")
    }
    ;
    o1oO0 = function() {
        if (!this.O1l1O1)
            return;
        this.oolOOo();
        var $ = new Date()
          , _ = this[_getViewChildNodes](this.root)
          , B = [];
        this.o00oO(_, this.root, B);
        var A = B.join("");
        this.O1OOoo.innerHTML = A;
        this.O10lOO()
    }
    ;
    OoO11l = function() {
        return this.O1OOoo.scrollLeft
    }
    ;
    o0o1 = function() {
        if (!this[canLayout]())
            return;
        var C = this[isAutoHeight]()
          , D = this[isAutoWidth]()
          , _ = this[getWidth](true)
          , A = this[getHeight](true)
          , B = this[getHeaderHeight]()
          , $ = A - B;
        this.O1OOoo.style.width = _ + "px";
        if (C)
            this.O1OOoo.style.height = "auto";
        else
            this.O1OOoo.style.height = $ + "px";
        this.oolOO();
        this[_doLayoutTopRightCell]();
        this[fire]("layout")
    }
    ;
    lollo = function() {
        var A = this._headerInnerEl.firstChild
          , $ = A.offsetWidth + 1
          , _ = A.offsetHeight - 1;
        if (_ < 0)
            _ = 0;
        this._topRightCellEl.style.height = _ + "px"
    }
    ;
    OO0o0 = function() {
        var B = this.O1OOoo.scrollHeight
          , E = this.O1OOoo.clientHeight
          , A = this[getWidth](true)
          , _ = this.l10OO.firstChild.firstChild
          , D = this.O1OOoo.firstChild;
        if (E >= B) {
            if (D)
                D.style.width = "100%";
            if (_)
                _.style.width = "100%"
        } else {
            if (D) {
                var $ = parseInt(D.parentNode.offsetWidth - 17) + "px";
                D.style.width = $
            }
            if (_)
                _.style.width = $
        }
        try {
            $ = this.l10OO.firstChild.firstChild.firstChild.offsetWidth;
            this.O1OOoo.firstChild.style.width = $ + "px"
        } catch (C) {}
        this.oO1O()
    }
    ;
    oO0ol = function() {
        return lOl10(this.l10OO)
    }
    ;
	;O1o1O=function (removeEl) {if (this.el) {this.el.onmouseover = null } this.menu = this.OolO10 = this.lOOo1 = this.ll1l1O = this.allowEl = null; mini.MenuItem[superclass][destroy][call](this,removeEl); }
    oolloo = function($, B) {
        var D = this[showCheckBox];
        if (D && this[hasChildren]($))
            D = this[showFolderCheckBox];
        var _ = mini._getMap(B.field, $)
          , C = {
            isLeaf: this[isLeaf]($),
            rowIndex: this[indexOf]($),
            showCheckBox: D,
            iconCls: this[getNodeIcon]($),
            showTreeIcon: this.showTreeIcon,
            sender: this,
            record: $,
            row: $,
            node: $,
            column: B,
            field: B ? B.field : null ,
            value: _,
            cellHtml: _,
            rowCls: null ,
            cellCls: B ? (B.cellCls || "") : "",
            rowStyle: null ,
            cellStyle: B ? (B.cellStyle || "") : ""
        };
        if (B.dateFormat)
            if (mini.isDate(C.value))
                C.cellHtml = mini.formatDate(_, B.dateFormat);
            else
                C.cellHtml = _;
        var A = B.renderer;
        if (A) {
            fn = typeof A == "function" ? A : window[A];
            if (fn)
                C.cellHtml = fn[call](B, C)
        }
        this[fire]("drawcell", C);
        if (C.cellHtml === null  || C.cellHtml === undefined || C.cellHtml === "")
            C.cellHtml = "&nbsp;";
        if (!this.treeColumn || this.treeColumn !== B.name)
            return C;
        this.oOolo(C);
        return C
    }
    ;
    Olooo = function(H) {
        var A = H.node;
        if (mini.isNull(H[showTreeIcon]))
            H[showTreeIcon] = this[showTreeIcon];
        var G = H.cellHtml
          , B = this[isLeaf](A)
          , $ = this[getLevel](A) * 18
          , D = "";
        if (H.cellCls)
            H.cellCls += " mini-treegrid-treecolumn ";
        else
            H.cellCls = " mini-treegrid-treecolumn ";
        var F = "<div class=\"mini-treegrid-treecolumn-inner " + D + "\">";
        if (!B)
            F += "<a href=\"#\" onclick=\"return false;\"  hidefocus class=\"" + this.lo11O + "\" style=\"left:" + ($) + "px;\"></a>";
        $ += 18;
        if (H[showTreeIcon]) {
            var _ = this[getNodeIcon](A);
            F += "<div class=\"" + _ + " mini-treegrid-nodeicon\" style=\"left:" + $ + "px;\"></div>";
            $ += 18
        }
        G = "<span class=\"mini-tree-nodetext\">" + G + "</span>";
        if (H[showCheckBox]) {
            var E = this.l0l1(A)
              , C = this[isCheckedNode](A);
            G = "<input type=\"checkbox\" id=\"" + E + "\" class=\"" + this.o0O01l + "\" hidefocus " + (C ? "checked" : "") + "/>" + G
        }
        F += "<div class=\"mini-treegrid-nodeshow\" style=\"margin-left:" + ($ + 2) + "px;\">" + G + "</div>";
        F += "</div>";
        G = F;
        H.cellHtml = G
    }
    ;
    Olo1 = function($) {
        if (this.treeColumn != $) {
            this.treeColumn = $;
            this[doUpdate]()
        }
    }
    ;
    O011l = function($) {
        return this.treeColumn
    }
    ;
    Oo011Column = function($) {
        this[allowResizeColumn] = $
    }
    ;
    olOllColumn = function($) {
        return this[allowResizeColumn]
    }
    ;
    l110 = function($) {
        this[allowMoveColumn] = $
    }
    ;
    OoOl = function($) {
        return this[allowMoveColumn]
    }
    ;
    Oo011 = function($) {
        this[allowResize] = $;
        this.lOlOo1.style.display = this[allowResize] ? "" : "none"
    }
    ;
    olOll = function() {
        return this[allowResize]
    }
    ;
    olO0l = function(_, $) {
        return this.uid + "$" + _._id + "$" + $._id
    }
    ;
    oOOoO = function(_, $) {
        _ = this[getColumn](_);
        if (!_)
            return;
        if (mini.isNumber($))
            $ += "px";
        _.width = $;
        this[doUpdate]()
    }
    ;
    o0O1O = function(_) {
        var $ = this[getColumnBox](_);
        return $ ? $.width : 0
    }
    ;
    O1O0l = function(_) {
        var $ = this.O1OOoo.scrollLeft;
        this.l10OO.firstChild.scrollLeft = $
    }
    ;
    ll0Oo = function(_) {
        var E = mini.TreeGrid[superclass][getAttrs][call](this, _);
        mini[_ParseString](_, E, ["treeColumn", "ondrawcell"]);
        mini[_ParseBool](_, E, ["allowResizeColumn", "allowMoveColumn", "allowResize"]);
        var C = mini[getChildNodes](_);
        for (var $ = 0, D = C.length; $ < D; $++) {
            var B = C[$]
              , A = jQuery(B).attr("property");
            if (!A)
                continue;A = A.toLowerCase();
            if (A == "columns")
                E.columns = mini.ll1o01(B)
        }
        delete E.data;
        return E
    }
    ;
	;l1Oo0=function (column) {column = this[getColumn](column); if (!column) return null; return ooO0(this.o11o1(column),this.el); }
    OO10l1 = function(A) {
        if (typeof A == "string")
            return this;
        var D = this.ool11;
        this.ool11 = false;
        var B = A[renderTo] || A[render];
        delete A[renderTo];
        delete A[render];
        for (var $ in A)
            if ($.toLowerCase()[indexOf]("on") == 0) {
                var F = A[$];
                this[on]($.substring(2, $.length).toLowerCase(), F);
                delete A[$]
            }
        for ($ in A) {
            var E = A[$]
              , C = "set" + $.charAt(0).toUpperCase() + $.substring(1, $.length)
              , _ = this[C];
            if (_)
                _[call](this, E);
            else
                this[$] = E
        }
        if (B && this[render])
            this[render](B);
        this.ool11 = D;
        if (this[doLayout])
            this[doLayout]();
        return this
    }
    ;
    O011 = function(A, B) {
        if (this.Ol0o == false)
            return;
        A = A.toLowerCase();
        var _ = this.lloloO[A];
        if (_) {
            if (!B)
                B = {};
            if (B && B != this) {
                B.source = B.sender = this;
                if (!B.type)
                    B.type = A
            }
            for (var $ = 0, D = _.length; $ < D; $++) {
                var C = _[$];
                if (C)
                    C[0].apply(C[1], [B])
            }
        }
    }
    ;
    o1110 = function(type, fn, scope) {
        if (typeof fn == "string") {
            var f = l01o0(fn);
            if (!f) {
                var id = mini.newId("__str_");
                window[id] = fn;
                eval("fn = function(e){var s = " + id + ";var fn = l01o0(s); if(fn) {fn[call](this,e)}else{eval(s);}}")
            } else
                fn = f
        }
        if (typeof fn != "function" || !type)
            return false;
        type = type.toLowerCase();
        var event = this.lloloO[type];
        if (!event)
            event = this.lloloO[type] = [];
        scope = scope || this;
        if (!this[findListener](type, fn, scope))
            event.push([fn, scope]);
        return this
    }
    ;
    o0lo1 = function($, C, _) {
        if (typeof C != "function")
            return false;
        $ = $.toLowerCase();
        var A = this.lloloO[$];
        if (A) {
            _ = _ || this;
            var B = this[findListener]($, C, _);
            if (B)
                A.remove(B)
        }
        return this
    }
    ;
    oOllo = function(A, E, B) {
        A = A.toLowerCase();
        B = B || this;
        var _ = this.lloloO[A];
        if (_)
            for (var $ = 0, D = _.length; $ < D; $++) {
                var C = _[$];
                if (C[0] === E && C[1] === B)
                    return C
            }
    }
    ;
    Ooo1O = function($) {
        if (!$)
            throw new Error("id not null");
        if (this.l0OOO)
            throw new Error("id just set only one");
        mini["unreg"](this);
        this.id = $;
        if (this.el)
            this.el.id = $;
        if (this.ll1l1O)
            this.ll1l1O.id = $ + "$text";
        if (this.oOoll)
            this.oOoll.id = $ + "$value";
        this.l0OOO = true;
        mini.reg(this)
    }
    ;
    lOloO = function() {
        return this.id
    }
    ;
    O0l0O = function() {
        mini["unreg"](this);
        this[fire]("destroy")
    }
    ;
    lOoO0 = function($) {
        if (this[isShowPopup]())
            this[hidePopup]();
        if (this.popup) {
            this.popup[destroy]();
            this.popup = null 
        }
        if (this._popupInner) {
            this._popupInner.owner = null ;
            this._popupInner = null 
        }
        mini.PopupEdit[superclass][destroy][call](this, $)
    }
    ;
    oo1o0 = function() {
        mini.PopupEdit[superclass][_initEvents][call](this);
        l00l(function() {
            O0l10(this.el, "mouseover", this.ol0OOo, this);
            O0l10(this.el, "mouseout", this.o1oo0, this)
        }
        , this)
    }
    ;
    O0O1o = function() {
        this.buttons = [];
        var $ = this[createButton]({
            cls: "mini-buttonedit-popup",
            iconCls: "mini-buttonedit-icons-popup",
            name: "popup"
        });
        this.buttons.push($)
    }
    ;
    lOl1 = function($) {
        if (this._clickTarget && l1oooo(this.el, this._clickTarget))
            return;
        if (this[isShowPopup]())
            return;
        mini.PopupEdit[superclass].oo0oO[call](this, $)
    }
    ;
    l11ll = function($) {
        if (this[isReadOnly]() || this.allowInput)
            return;
        if (llOo($.target, "mini-buttonedit-border"))
            this[addCls](this._hoverCls)
    }
    ;
    O1OoO = function($) {
        if (this[isReadOnly]() || this.allowInput)
            return;
        this[removeCls](this._hoverCls)
    }
    ;
    oOOlO = function($) {
        if (this[isReadOnly]())
            return;
        mini.PopupEdit[superclass].ol1Ol[call](this, $);
        if (this.allowInput == false && llOo($.target, "mini-buttonedit-border")) {
            O0Oo0(this.el, this.oooO1O);
            l1Oo0O(document, "mouseup", this.oOo10, this)
        }
    }
    ;
    oO1l0 = function($) {
        this[fire]("keydown", {
            htmlEvent: $
        });
        if ($.keyCode == 8 && (this[isReadOnly]() || this.allowInput == false))
            return false;
        if ($.keyCode == 9) {
            this[hidePopup]();
            return
        }
        if ($.keyCode == 27) {
            this[hidePopup]();
            return
        }
        if ($.keyCode == 13)
            this[fire]("enter");
        if (this[isShowPopup]())
            if ($.keyCode == 13 || $.keyCode == 27)
                $.stopPropagation()
    }
    ;
    o00lo = function($) {
        if (l1oooo(this.el, $.target))
            return true;
        if (this.popup[within]($))
            return true;
        return false
    }
    ;
    oOOl1 = function($) {
        if (typeof $ == "string") {
            mini.parse($);
            $ = mini.get($)
        }
        var _ = mini.getAndCreate($);
        if (!_)
            return;
        _[setVisible](false);
        this._popupInner = _;
        _.owner = this;
        _[on]("beforebuttonclick", this.ol1lO, this)
    }
    ;
    oO1l = function() {
        if (!this.popup)
            this[_createPopup]();
        return this.popup
    }
    ;
    lOO01 = function() {
        this.popup = new mini.Popup();
        this.popup.setShowAction("none");
        this.popup.setHideAction("outerclick");
        this.popup.setPopupEl(this.el);
        this.popup[on]("BeforeClose", this.l0Oo1, this);
        l1Oo0O(this.popup.el, "keydown", this.O11oO, this)
    }
    ;
    lO00O = function($) {
        if (this[within]($.htmlEvent))
            $.cancel = true
    }
    ;
    lO1OO = function($) {}
    ;
    llOoO = function() {
        var _ = {
            cancel: false
        };
        this[fire]("beforeshowpopup", _);
        if (_.cancel == true)
            return;
        var $ = this[getPopup]();
        this[_syncShowPopup]();
        $[on]("Close", this.o001, this);
        this[fire]("showpopup")
    }
    ;
    l0OoO = function() {
        mini.PopupEdit[superclass][doLayout][call](this);
        if (this[isShowPopup]())
            ;
    }
    ;
    looo1 = function() {
        var _ = this[getPopup]();
        if (this._popupInner && this._popupInner.el.parentNode != this.popup.lOlO) {
            this.popup.lOlO.appendChild(this._popupInner.el);
            this._popupInner[setVisible](true)
        }
        var B = this[getBox]()
          , $ = this[popupWidth];
        if (this[popupWidth] == "100%")
            $ = B.width;
        _[setWidth]($);
        var A = parseInt(this[popupHeight]);
        if (!isNaN(A))
            _[setHeight](A);
        else
            _[setHeight]("auto");
        _[setMinWidth](this[popupMinWidth]);
        _[setMinHeight](this[popupMinHeight]);
        _[setMaxWidth](this[popupMaxWidth]);
        _[setMaxHeight](this[popupMaxHeight]);
        _[showAtEl](this.el, {
            xAlign: "left",
            yAlign: "below",
            outYAlign: "above",
            outXAlign: "right",
            popupCls: this.popupCls
        })
    }
    ;
    O1o10 = function($) {
        this.oo0oO();
        this[fire]("hidepopup")
    }
    ;
    o1olO = function() {
        if (this[isShowPopup]()) {
            var $ = this[getPopup]();
            $.close()
        }
    }
    ;
    o100o = function() {
        if (this.popup && this.popup[isDisplay]())
            return true;
        else
            return false
    }
    ;
    oOO11 = function($) {
        this[popupWidth] = $
    }
    ;
    lo1lO = function($) {
        this[popupMaxWidth] = $
    }
    ;
    OOllo = function($) {
        this[popupMinWidth] = $
    }
    ;
    Ollol = function($) {
        return this[popupWidth]
    }
    ;
    lO11l = function($) {
        return this[popupMaxWidth]
    }
    ;
    llo0ol = function($) {
        return this[popupMinWidth]
    }
    ;
    O0l1ol = function($) {
        this[popupHeight] = $
    }
    ;
    l0ol1 = function($) {
        this[popupMaxHeight] = $
    }
    ;
    ooOlO = function($) {
        this[popupMinHeight] = $
    }
    ;
    o1olO0 = function($) {
        return this[popupHeight]
    }
    ;
    ll1Ol = function($) {
        return this[popupMaxHeight]
    }
    ;
    O0olo = function($) {
        return this[popupMinHeight]
    }
    ;
    llool = function(_) {
        if (this[isReadOnly]())
            return;
        if (l1oooo(this._buttonEl, _.target))
            this.llloO(_);
        if (llOo(_.target, this._closeCls)) {
            if (this[isShowPopup]())
                this[hidePopup]();
            this[fire]("closeclick", {
                htmlEvent: _
            });
            return
        }
        if (this.allowInput == false || l1oooo(this._buttonEl, _.target))
            if (this[isShowPopup]())
                this[hidePopup]();
            else {
                var $ = this;
                setTimeout(function() {
                    $[showPopup]()
                }
                , 1)
            }
    }
    ;
    Oo11 = function($) {
        if ($.name == "close")
            this[hidePopup]();
        $.cancel = true
    }
    ;
    OlOoO = function($) {
        var _ = mini.PopupEdit[superclass][getAttrs][call](this, $);
        mini[_ParseString]($, _, ["popupWidth", "popupHeight", "popup", "onshowpopup", "onhidepopup", "onbeforeshowpopup"]);
        mini[_ParseInt]($, _, ["popupMinWidth", "popupMaxWidth", "popupMinHeight", "popupMaxHeight"]);
        return _
    }
    ;
    o11oO = function($) {
        if (mini.isArray($))
            $ = {
                type: "menu",
                items: $
            };
        if (typeof $ == "string") {
            var _ = ooO0($);
            if (!_)
                return;
            mini.parse($);
            $ = mini.get($)
        }
        if (this.menu !== $) {
            this.menu = mini.getAndCreate($);
            this.menu.setPopupEl(this.el);
            this.menu.setPopupCls("mini-button-popup");
            this.menu.setShowAction("leftclick");
            this.menu.setHideAction("outerclick");
            this.menu.setXAlign("left");
            this.menu.setYAlign("below");
            this.menu[hide]();
            this.menu.owner = this
        }
    }
    ;
    ooll0 = function($) {
        this.enabled = $;
        if ($)
            this[removeCls](this.Oollo0);
        else
            this[addCls](this.Oollo0);
        jQuery(this.el).attr("allowPopup", !!$)
    }
    ;
    l1lO0 = function(A) {
        if (typeof A == "string")
            return this;
        var $ = A.value;
        delete A.value;
        var _ = A.text;
        delete A.text;
        this.O1l1O1 = !(A.enabled == false || A.allowInput == false || A[readOnly]);
        mini.ButtonEdit[superclass][set][call](this, A);
        if (this.O1l1O1 === false) {
            this.O1l1O1 = true;
            this[doUpdate]()
        }
        if (!mini.isNull(_))
            this[setText](_);
        if (!mini.isNull($))
            this[setValue]($);
        return this
    }
    ;
    ll0o1 = function() {
        var $ = "<span class=\"mini-buttonedit-close\"></span>" + this.OO100Html();
        return "<span class=\"mini-buttonedit-buttons\">" + $ + "</span>"
    }
    ;
    lO0l1 = function() {
        var $ = "onmouseover=\"O0Oo0(this,'" + this.oooOO1 + "');\" " + "onmouseout=\"Ol00(this,'" + this.oooOO1 + "');\"";
        return "<span class=\"mini-buttonedit-button\" " + $ + "><span class=\"mini-buttonedit-icon\"></span></span>"
    }
    ;
    l1oO0 = function() {
        this.el = document.createElement("span");
        this.el.className = "mini-buttonedit";
        var $ = this.OO100sHTML();
        this.el.innerHTML = "<span class=\"mini-buttonedit-border\"><input type=\"input\" class=\"mini-buttonedit-input\" autocomplete=\"off\"/>" + $ + "</span><input name=\"" + this.name + "\" type=\"hidden\"/>";
        this.oO0o1l = this.el.firstChild;
        this.ll1l1O = this.oO0o1l.firstChild;
        this.oOoll = this.el.lastChild;
        this._buttonsEl = this.oO0o1l.lastChild;
        this._buttonEl = this._buttonsEl.lastChild;
        this._closeEl = this._buttonEl.previousSibling;
        this.OlO1O()
    }
    ;
    llOO1 = function($) {
        if (this.el) {
            this.el.onmousedown = null ;
            this.el.onmousewheel = null ;
            this.el.onmouseover = null ;
            this.el.onmouseout = null 
        }
        if (this.ll1l1O) {
            this.ll1l1O.onchange = null ;
            this.ll1l1O.onfocus = null ;
            mini[clearEvent](this.ll1l1O);
            this.ll1l1O = null 
        }
        mini.ButtonEdit[superclass][destroy][call](this, $)
    }
    ;
    o0OoO = function() {
        l00l(function() {
            O0l10(this.el, "mousedown", this.ol1Ol, this);
            O0l10(this.ll1l1O, "focus", this.o0O010, this);
            O0l10(this.ll1l1O, "change", this.lo00, this);
            var $ = this.text;
            this.text = null ;
            this[setText]($)
        }
        , this)
    }
    ;
    looo0 = function() {
        if (this.lll1O1)
            return;
        this.lll1O1 = true;
        l1Oo0O(this.el, "click", this.o0O0lo, this);
        l1Oo0O(this.ll1l1O, "blur", this.oo0oO, this);
        l1Oo0O(this.ll1l1O, "keydown", this.lOo101, this);
        l1Oo0O(this.ll1l1O, "keyup", this.loolOO, this);
        l1Oo0O(this.ll1l1O, "keypress", this.lo1Oo, this)
    }
    ;
    lllOo = function() {
        if (this._closeEl)
            this._closeEl.style.display = this.showClose ? "inline-block" : "none";
        var $ = this._buttonsEl.offsetWidth + 2;
        this.oO0o1l.style["paddingRight"] = $ + "px";
        this[doLayout]()
    }
    ;
    o0l1l = function() {}
    ;
    Olll1 = function($) {
        if (parseInt($) == $)
            $ += "px";
        this.height = $
    }
    ;
    o0lO1 = function() {
        try {
            this.ll1l1O[focus]();
            var $ = this;
            setTimeout(function() {
                if ($.o0o1l)
                    $.ll1l1O[focus]()
            }
            , 10)
        } catch (_) {}
    }
    ;
    llO0O = function() {
        try {
            this.ll1l1O[blur]()
        } catch ($) {}
    }
    ;
    lo0O0 = function() {
        this.ll1l1O[select]()
    }
    ;
    ll01oEl = function() {
        return this.ll1l1O
    }
    ;
    lOo00 = function($) {
        this.name = $;
        if (this.oOoll)
            mini.setAttr(this.oOoll, "name", this.name)
    }
    ;
    lOl1o = function($) {
        if ($ === null  || $ === undefined)
            $ = "";
        var _ = this.text !== $;
        this.text = $;
        this.ll1l1O.value = $;
        this.OlO1O()
    }
    ;
    ll01o = function() {
        var $ = this.ll1l1O.value;
        return $
    }
    ;
    l1oO1 = function($) {
        if ($ === null  || $ === undefined)
            $ = "";
        var _ = this.value !== $;
        this.value = $;
        this.oOoll.value = this[getFormValue]()
    }
    ;
    l1ool = function() {
        return this.value
    }
    ;
    ll0ll = function() {
        value = this.value;
        if (value === null  || value === undefined)
            value = "";
        return String(value)
    }
    ;
    loOO1 = function() {
        this.ll1l1O.placeholder = this[emptyText];
        if (this[emptyText])
            mini._placeholder(this.ll1l1O)
    }
    ;
    olOo1 = function($) {
        if (this[emptyText] != $) {
            this[emptyText] = $;
            this.OlO1O()
        }
    }
    ;
    O0Oo1 = function() {
        return this[emptyText]
    }
    ;
    lll00 = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this.maxLength = $;
        this.ll1l1O.maxLength = $
    }
    ;
    l00o1 = function() {
        return this.maxLength
    }
    ;
    l0101 = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this.minLength = $
    }
    ;
	;l0ooo=function (value) {this.showHandleButton = value; this[doUpdate](); }
    oOOO0 = function() {
        return this.minLength
    }
    ;
    o01l0 = function($) {
        mini.ButtonEdit[superclass][setEnabled][call](this, $);
        this[_tryValidate]()
    }
    ;
	;Ooll11=function () {this[hideMenu](); this[setVisible](false); }
    llO1l = function() {
        var $ = this[isReadOnly]();
        if ($ || this.allowInput == false)
            this.ll1l1O[readOnly] = true;
        else
            this.ll1l1O[readOnly] = false;
        if ($)
            this[addCls](this.O1O1O0);
        else
            this[removeCls](this.O1O1O0);
        if (this.allowInput)
            this[removeCls](this.oooO10);
        else
            this[addCls](this.oooO10);
        if (this.enabled)
            this.ll1l1O.disabled = false;
        else
            this.ll1l1O.disabled = true
    }
    ;
    lOl0O = function($) {
        this.allowInput = $;
        this.lOlllo()
    }
    ;
    l1lO1 = function() {
        return this.allowInput
    }
    ;
    o1Ooo = function($) {
        this.inputAsValue = $
    }
    ;
    lo0lO = function() {
        return this.inputAsValue
    }
    ;
    oooOO = function() {
        if (!this.oO010)
            this.oO010 = mini.append(this.el, "<span class=\"mini-errorIcon\"></span>");
        return this.oO010
    }
    ;
    OO1ll = function() {
        if (this.oO010) {
            var $ = this.oO010;
            jQuery($).remove()
        }
        this.oO010 = null 
    }
    ;
    Oo1l1 = function(_) {
        if (this[isReadOnly]() || this.enabled == false)
            return;
        if (!l1oooo(this.oO0o1l, _.target))
            return;
        var $ = new Date();
        if (l1oooo(this._buttonEl, _.target))
            this.llloO(_);
        if (llOo(_.target, this._closeCls))
            this[fire]("closeclick", {
                htmlEvent: _
            })
    }
    ;
    o1O0o = function(B) {
        if (this[isReadOnly]() || this.enabled == false)
            return;
        if (!l1oooo(this.oO0o1l, B.target))
            return;
        if (!l1oooo(this.ll1l1O, B.target)) {
            this._clickTarget = B.target;
            var $ = this;
            setTimeout(function() {
                $[focus]();
                mini[selectRange]($.ll1l1O, 1000, 1000)
            }
            , 1);
            if (l1oooo(this._buttonEl, B.target)) {
                var _ = llOo(B.target, "mini-buttonedit-up")
                  , A = llOo(B.target, "mini-buttonedit-down");
                if (_) {
                    O0Oo0(_, this.lOOl1);
                    this.o1ol(B, "up")
                } else if (A) {
                    O0Oo0(A, this.lOOl1);
                    this.o1ol(B, "down")
                } else {
                    O0Oo0(this._buttonEl, this.lOOl1);
                    this.o1ol(B)
                }
                l1Oo0O(document, "mouseup", this.oOo10, this)
            }
        }
    }
    ;
    oO01O = function(_) {
        this._clickTarget = null ;
        var $ = this;
        setTimeout(function() {
            var A = $._buttonEl.getElementsByTagName("*");
            for (var _ = 0, B = A.length; _ < B; _++)
                Ol00(A[_], $.lOOl1);
            Ol00($._buttonEl, $.lOOl1);
            Ol00($.el, $.oooO1O)
        }
        , 80);
        O1l0(document, "mouseup", this.oOo10, this)
    }
    ;
    o011O = function($) {
        this[doUpdate]();
        this.oOo1O();
        if (this[isReadOnly]())
            return;
        this.o0o1l = true;
        this[addCls](this.oO0Ol);
        if (this.selectOnFocus)
            this[selectText]();
        this[fire]("focus", {
            htmlEvent: $
        })
    }
    ;
    OO1Oo = function(A) {
        this.o0o1l = false;
        var $ = this;
        function _() {
            if ($.o0o1l == false)
                $[removeCls]($.oO0Ol)
        }
        setTimeout(function() {
            _[call]($)
        }
        , 2);
        this[fire]("blur", {
            htmlEvent: A
        })
    }
    ;
    OO1O1 = function(_) {
        var $ = this;
        setTimeout(function() {
            $[__fireBlur](_)
        }
        , 10)
    }
    ;
    lOlO1 = function(B) {
        var A = {
            htmlEvent: B
        };
        this[fire]("keydown", A);
        if (B.keyCode == 8 && (this[isReadOnly]() || this.allowInput == false))
            return false;
        if (B.keyCode == 13 || B.keyCode == 9) {
            var $ = this;
            $.lo00(null );
            if (B.keyCode == 13) {
                var _ = this;
                _[fire]("enter", A)
            }
        }
        if (B.keyCode == 27)
            B.preventDefault()
    }
    ;
    lOlo = function() {
        var _ = this.ll1l1O.value
          , $ = this[getValue]();
        this[setValue](_);
        if ($ !== this[getFormValue]())
            this.Ollll()
    }
    ;
    o0oO0 = function($) {
        this[fire]("keyup", {
            htmlEvent: $
        })
    }
    ;
    O100O = function($) {
        this[fire]("keypress", {
            htmlEvent: $
        })
    }
    ;
	;Oll1=function (value) {this[checkOnClick] = value; if (value) {O0Oo0(this.el,"mini-menuitem-showcheck"); } else {Ol00(this.el,"mini-menuitem-showcheck"); } this[doUpdate](); }
    lo0l0 = function($) {
        var _ = {
            htmlEvent: $,
            cancel: false
        };
        this[fire]("beforebuttonclick", _);
        if (_.cancel == true)
            return;
        this[fire]("buttonclick", _)
    }
    ;
    oO1ol = function(_, $) {
        this[focus]();
        this[addCls](this.oO0Ol);
        this[fire]("buttonmousedown", {
            htmlEvent: _,
            spinType: $
        })
    }
    ;
    lol01 = function(_, $) {
        this[on]("buttonclick", _, $)
    }
    ;
    lOo0O = function(_, $) {
        this[on]("buttonmousedown", _, $)
    }
    ;
    OOo10 = function(_, $) {
        this[on]("textchanged", _, $)
    }
    ;
    olO11 = function($) {
        this.textName = $;
        if (this.ll1l1O)
            mini.setAttr(this.ll1l1O, "name", this.textName)
    }
    ;
    OoO10 = function() {
        return this.textName
    }
    ;
    l1Ol1 = function($) {
        this.selectOnFocus = $
    }
    ;
    o10lO = function($) {
        return this.selectOnFocus
    }
    ;
    oOO10 = function($) {
        this.showClose = $;
        this[_doInputLayout]()
    }
    ;
    o1l0O = function($) {
        return this.showClose
    }
    ;
    llol1 = function($) {
        this.inputStyle = $;
        O1lo11(this.ll1l1O, $)
    }
    ;
    OOOO0 = function($) {
        var A = mini.ButtonEdit[superclass][getAttrs][call](this, $)
          , _ = jQuery($);
        mini[_ParseString]($, A, ["value", "text", "textName", "emptyText", "inputStyle", "onenter", "onkeydown", "onkeyup", "onkeypress", "onbuttonclick", "onbuttonmousedown", "ontextchanged", "onfocus", "onblur", "oncloseclick"]);
        mini[_ParseBool]($, A, ["allowInput", "inputAsValue", "selectOnFocus", "showClose"]);
        mini[_ParseInt]($, A, ["maxLength", "minLength"]);
        return A
    }
    ;
    lO0ol = function() {
        if (!mini.DatePicker._Calendar) {
            var $ = mini.DatePicker._Calendar = new mini.Calendar();
            $[setStyle]("border:0;")
        }
        return mini.DatePicker._Calendar
    }
    ;
    O0Ooo = function() {
        mini.DatePicker[superclass][_createPopup][call](this);
        this.OoO1 = this[_getCalendar]()
    }
    ;
    l1Oll = function() {
        var A = {
            cancel: false
        };
        this[fire]("beforeshowpopup", A);
        if (A.cancel == true)
            return;
        this.OoO1[beginUpdate]();
        this.OoO1.ool11 = false;
        if (this.OoO1.el.parentNode != this.popup.lOlO)
            this.OoO1[render](this.popup.lOlO);
        this.OoO1[set]({
            showTime: this.showTime,
            timeFormat: this.timeFormat,
            showClearButton: this.showClearButton,
            showTodayButton: this.showTodayButton,
            showOkButton: this.showOkButton
        });
        this.OoO1[setValue](this.value);
        if (this.value)
            this.OoO1[setViewDate](this.value);
        else
            this.OoO1[setViewDate](this.viewDate);
        mini.DatePicker[superclass][showPopup][call](this);
        function $() {
            if (this.OoO1._target) {
                var $ = this.OoO1._target;
                this.OoO1[un]("timechanged", $.oO1l1, $);
                this.OoO1[un]("dateclick", $.l0o0, $);
                this.OoO1[un]("drawdate", $.O0oO, $)
            }
            this.OoO1[on]("timechanged", this.oO1l1, this);
            this.OoO1[on]("dateclick", this.l0o0, this);
            this.OoO1[on]("drawdate", this.O0oO, this);
            this.OoO1[endUpdate]();
            this.OoO1.ool11 = true;
            this.OoO1[doLayout]();
            this.OoO1[focus]();
            this.OoO1._target = this
        }
        var _ = this;
        $[call](_)
    }
    ;
    l0100 = function() {
        mini.DatePicker[superclass][hidePopup][call](this);
        this.OoO1[un]("timechanged", this.oO1l1, this);
        this.OoO1[un]("dateclick", this.l0o0, this);
        this.OoO1[un]("drawdate", this.O0oO, this)
    }
    ;
    o0lll = function($) {
        if (l1oooo(this.el, $.target))
            return true;
        if (this.OoO1[within]($))
            return true;
        return false
    }
    ;
    ll1OO = function($) {
        if ($.keyCode == 13)
            this.l0o0();
        if ($.keyCode == 27) {
            this[hidePopup]();
            this[focus]()
        }
    }
    ;
    O01OO = function(B) {
        var _ = B.date
          , $ = mini.parseDate(this.maxDate)
          , A = mini.parseDate(this.minDate);
        if (mini.isDate($))
            if (_[getTime]() > $[getTime]())
                B[allowSelect] = false;
        if (mini.isDate(A))
            if (_[getTime]() < A[getTime]())
                B[allowSelect] = false;
        this[fire]("drawdate", B)
    }
    ;
    lo1ll = function(A) {
        if (this.showOkButton && A.action != "ok")
            return;
        var _ = this.OoO1[getValue]()
          , $ = this[getFormValue]();
        this[setValue](_);
        if ($ !== this[getFormValue]())
            this.Ollll();
        this[focus]();
        this[hidePopup]()
    }
    ;
    o0OOl = function(_) {
        if (this.showOkButton)
            return;
        var $ = this.OoO1[getValue]();
        this[setValue]($);
        this.Ollll()
    }
    ;
    O011O = function($) {
        if (typeof $ != "string")
            return;
        if (this.format != $) {
            this.format = $;
            this.ll1l1O.value = this.oOoll.value = this[getFormValue]()
        }
    }
    ;
    oo100 = function() {
        return this.format
    }
    ;
    O1Ool = function($) {
        $ = mini.parseDate($);
        if (mini.isNull($))
            $ = "";
        if (mini.isDate($))
            $ = new Date($[getTime]());
        if (this.value != $) {
            this.value = $;
            this.text = this.ll1l1O.value = this.oOoll.value = this[getFormValue]()
        }
    }
    ;
    o0l10 = function() {
        if (!mini.isDate(this.value))
            return "";
        return this.value
    }
    ;
    l1OOo = function() {
        if (!mini.isDate(this.value))
            return "";
        return mini.formatDate(this.value, this.format)
    }
    ;
    Oll0l = function($) {
        $ = mini.parseDate($);
        if (!mini.isDate($))
            return;
        this.viewDate = $
    }
    ;
    ll01l = function() {
        return this.OoO1[getViewDate]()
    }
    ;
    l00ol = function($) {
        if (this.showTime != $)
            this.showTime = $
    }
    ;
    llllO = function() {
        return this.showTime
    }
    ;
    o0l11 = function($) {
        if (this.timeFormat != $)
            this.timeFormat = $
    }
    ;
    llOo0 = function() {
        return this.timeFormat
    }
    ;
    l0lo0 = function($) {
        this.showTodayButton = $
    }
    ;
    ll0O0 = function() {
        return this.showTodayButton
    }
    ;
    OOO0l = function($) {
        this.showClearButton = $
    }
    ;
    OlOol = function() {
        return this.showClearButton
    }
    ;
    lo0lo = function($) {
        this.showOkButton = $
    }
    ;
    OolOO = function() {
        return this.showOkButton
    }
    ;
    lOll0 = function($) {
        this.maxDate = $
    }
    ;
    llOOl = function() {
        return this.maxDate
    }
    ;
    o1lol = function($) {
        this.minDate = $
    }
    ;
    ooo0o = function() {
        return this.minDate
    }
    ;
    ll10o = function(B) {
        var A = this.ll1l1O.value
          , $ = mini.parseDate(A);
        if (!$ || isNaN($) || $.getFullYear() == 1970)
            $ = null ;
        var _ = this[getFormValue]();
        this[setValue]($);
        if ($ == null )
            this.ll1l1O.value = "";
        if (_ !== this[getFormValue]())
            this.Ollll()
    }
    ;
    lloo = function(_) {
        this[fire]("keydown", {
            htmlEvent: _
        });
        if (_.keyCode == 8 && (this[isReadOnly]() || this.allowInput == false))
            return false;
        if (_.keyCode == 9) {
            this[hidePopup]();
            return
        }
        if (this[isReadOnly]())
            return;
        switch (_.keyCode) {
        case 27:
            _.preventDefault();
            if (this[isShowPopup]())
                _.stopPropagation();
            this[hidePopup]();
            break;
        case 9:
        case 13:
            if (this[isShowPopup]()) {
                _.preventDefault();
                _.stopPropagation();
                this[hidePopup]()
            } else {
                this.lo00(null );
                var $ = this;
                setTimeout(function() {
                    $[fire]("enter")
                }
                , 10)
            }
            break;
        case 37:
            break;
        case 38:
            _.preventDefault();
            break;
        case 39:
            break;
        case 40:
            _.preventDefault();
            this[showPopup]();
            break;
        default:
            break
        }
    }
    ;
    ll0O1 = function($) {
        var _ = mini.DatePicker[superclass][getAttrs][call](this, $);
        mini[_ParseString]($, _, ["format", "viewDate", "timeFormat", "ondrawdate", "minDate", "maxDate"]);
        mini[_ParseBool]($, _, ["showTime", "showTodayButton", "showClearButton", "showOkButton"]);
        return _
    }
    ;
    oOo0O = function(B) {
        if (typeof B == "string")
            return this;
        var $ = B.value;
        delete B.value;
        var _ = B.text;
        delete B.text;
        var C = B.url;
        delete B.url;
        var A = B.data;
        delete B.data;
        mini.TreeSelect[superclass][set][call](this, B);
        if (!mini.isNull(A))
            this[setData](A);
        if (!mini.isNull(C))
            this[setUrl](C);
        if (!mini.isNull($))
            this[setValue]($);
        if (!mini.isNull(_))
            this[setText](_);
        return this
    }
    ;
    o01o = function() {
        mini.TreeSelect[superclass][_createPopup][call](this);
        this.tree = new mini.Tree();
        this.tree[setShowTreeIcon](true);
        this.tree[setStyle]("border:0;width:100%;height:100%;");
        this.tree[setResultAsTree](this[resultAsTree]);
        this.tree[render](this.popup.lOlO);
        this.tree[setCheckRecursive](this[checkRecursive]);
        this.tree[setShowFolderCheckBox](this[showFolderCheckBox]);
        this.tree[on]("nodeclick", this.OOol1o, this);
        this.tree[on]("nodecheck", this.llol, this);
        this.tree[on]("expand", this.l10l0l, this);
        this.tree[on]("collapse", this.o0ll, this);
        this.tree[on]("beforenodecheck", this.O1Oo, this);
        this.tree[on]("beforenodeselect", this.oll1, this);
        this.tree.allowAnim = false;
        var $ = this;
        this.tree[on]("beforeload", function(_) {
            $[fire]("beforeload", _)
        }
        , this);
        this.tree[on]("load", function(_) {
            $[fire]("load", _)
        }
        , this);
        this.tree[on]("loaderror", function(_) {
            $[fire]("loaderror", _)
        }
        , this)
    }
    ;
    O1011 = function($) {
        $.tree = $.sender;
        this[fire]("beforenodecheck", $)
    }
    ;
    o1llo = function($) {
        $.tree = $.sender;
        this[fire]("beforenodeselect", $)
    }
    ;
    O1000 = function($) {}
    ;
    OOOll0 = function($) {}
    ;
    l0o00o = function() {
        return this.tree[getSelectedNode]()
    }
    ;
    OlllO = function($) {
        return this.tree[getCheckedNodes]($)
    }
    ;
    loo1 = function() {
        return this.tree[getSelectedNodes]()
    }
    ;
    Oo10l = function($) {
        return this.tree[getParentNode]($)
    }
    ;
    O1o00 = function($) {
        return this.tree[getChildNodes]($)
    }
    ;
    ololl = function() {
        var $ = {
            cancel: false
        };
        this[fire]("beforeshowpopup", $);
        if ($.cancel == true)
            return;
        mini.TreeSelect[superclass][showPopup][call](this);
        this.tree[setValue](this.value)
    }
    ;
    oo0lO = function($) {
        this.tree[clearFilter]();
        this[fire]("hidepopup")
    }
    ;
    l001o = function($) {
        return typeof $ == "object" ? $ : this.data[$]
    }
    ;
    OoOO0 = function($) {
        return this.data[indexOf]($)
    }
    ;
    Ol11l = function($) {
        return this.data[$]
    }
    ;
    O10O0List = function($, A, _) {
        this.tree[loadList]($, A, _);
        this.data = this.tree[getData]()
    }
    ;
    l1011 = function() {
        return this.tree[getList]()
    }
    ;
    O10O0 = function($) {
        this.tree[load]($)
    }
    ;
    oOO01 = function($) {
        this.tree[setData]($);
        this.data = this.tree[getData]()
    }
    ;
    ol1Oo = function() {
        return this.data
    }
    ;
    O1l0O = function($) {
        this[getPopup]();
        this.tree[setUrl]($);
        this.url = this.tree.url
    }
    ;
    llolO = function() {
        return this.url
    }
    ;
    OOOo1 = function($) {
        if (this.tree)
            this.tree[setTextField]($);
        this[textField] = $
    }
    ;
    oolo1 = function() {
        return this[textField]
    }
    ;
    O1100 = function($) {
        if (this.tree)
            this.tree[setNodesField]($);
        this.nodesField = $
    }
    ;
    oOOll = function() {
        return this.nodesField
    }
    ;
    ll1O = function($) {
        var _ = this.tree.o0ol($);
        if (_[1] == "" && !this.valueFromSelect) {
            _[0] = $;
            _[1] = $
        }
        this.value = $;
        this.oOoll.value = $;
        this.text = this.ll1l1O.value = _[1];
        this.OlO1O();
        this.tree.value = this.value
    }
    ;
    l1o0l = function($) {
        if (this[multiSelect] != $) {
            this[multiSelect] = $;
            this.tree[setShowCheckBox]($);
            this.tree[setAllowSelect](!$);
            this.tree[setEnableHotTrack](!$)
        }
    }
    ;
    l10o0 = function() {
        return this[multiSelect]
    }
    ;
	;O00l1=function (value) {this.fitColumns = value; if (this.fitColumns) {Ol00(this.el,"mini-grid-fixcolumns"); } else {O0Oo0(this.el,"mini-grid-fixcolumns"); } this[doLayout](); }
    o1llll = function(B) {
        if (this[multiSelect])
            return;
        var _ = this.tree[getSelectedNode]()
          , A = this.tree[getItemValue](_)
          , $ = this[getValue]();
        this[setValue](A);
        if ($ != this[getValue]())
            this.Ollll();
        this[hidePopup]();
        this[fire]("nodeclick", {
            node: B.node
        })
    }
    ;
    ll0l0 = function(A) {
        if (!this[multiSelect])
            return;
        var _ = this.tree[getValue]()
          , $ = this[getValue]();
        this[setValue](_);
        if ($ != this[getValue]())
            this.Ollll()
    }
    ;
    OO10l = function(_) {
        this[fire]("keydown", {
            htmlEvent: _
        });
        if (_.keyCode == 8 && (this[isReadOnly]() || this.allowInput == false))
            return false;
        if (_.keyCode == 9) {
            this[hidePopup]();
            return
        }
        if (this[isReadOnly]())
            return;
        switch (_.keyCode) {
        case 27:
            if (this[isShowPopup]())
                _.stopPropagation();
            this[hidePopup]();
            break;
        case 13:
            break;
        case 37:
            break;
        case 38:
            _.preventDefault();
            break;
        case 39:
            break;
        case 40:
            _.preventDefault();
            this[showPopup]();
            break;
        default:
            var $ = this;
            setTimeout(function() {
                $.o1lo()
            }
            , 10);
            break
        }
    }
    ;
    oO000 = function() {
        var _ = this[textField]
          , $ = this.ll1l1O.value.toLowerCase();
        this.tree[filter](function(B) {
            var A = String(B[_] ? B[_] : "").toLowerCase();
            if (A[indexOf]($) != -1)
                return true;
            else
                return false
        }
        );
        this.tree[expandAll]();
        this[showPopup]()
    }
    ;
    ol100 = function($) {
        this[checkRecursive] = $;
        if (this.tree)
            this.tree[setCheckRecursive]($)
    }
    ;
    lOOo0 = function() {
        return this[checkRecursive]
    }
    ;
    OOoOl = function($) {
        this[resultAsTree] = $;
        if (this.tree)
            this.tree[setResultAsTree]($)
    }
    ;
    olO00 = function() {
        return this[resultAsTree]
    }
    ;
    lloOo = function($) {
        this[parentField] = $;
        if (this.tree)
            this.tree[setParentField]($)
    }
    ;
    oo0ll = function() {
        return this[parentField]
    }
    ;
    OoOlO = function($) {
        if (this.tree)
            this.tree[setIdField]($);
        this[valueField] = $
    }
    ;
    OlOOO = function() {
        return this[valueField]
    }
    ;
    O0O0o = function($) {
        this[showTreeIcon] = $;
        if (this.tree)
            this.tree[setShowTreeIcon]($)
    }
    ;
    oOlOo = function() {
        return this[showTreeIcon]
    }
    ;
    l1100 = function($) {
        this[showTreeLines] = $;
        if (this.tree)
            this.tree[setShowTreeLines]($)
    }
    ;
    Ol0ll = function() {
        return this[showTreeLines]
    }
    ;
    OOlol = function($) {
        this[showFolderCheckBox] = $;
        if (this.tree)
            this.tree[setShowFolderCheckBox]($)
    }
    ;
    lll0O = function() {
        return this[showFolderCheckBox]
    }
    ;
    l1Ol0 = function($) {
        this.autoCheckParent = $;
        if (this.tree)
            this.tree[setAutoCheckParent]($)
    }
    ;
    lo0oO = function() {
        return this.autoCheckParent
    }
    ;
    o0olO = function($) {
        this.expandOnLoad = $;
        if (this.tree)
            this.tree[setExpandOnLoad]($)
    }
    ;
    O0110 = function() {
        return this.expandOnLoad
    }
    ;
    lo00l = function($) {
        this.valueFromSelect = $
    }
    ;
    Oo1lo = function() {
        return this.valueFromSelect
    }
    ;
    O1O1 = function($) {
        if (this.tree)
            this.tree[setDataField]($);
        this.dataField = $
    }
    ;
    oO100 = function(_) {
        var A = mini.ComboBox[superclass][getAttrs][call](this, _);
        mini[_ParseString](_, A, ["url", "data", "textField", "valueField", "nodesField", "parentField", "onbeforenodecheck", "onbeforenodeselect", "expandOnLoad", "onnodeclick", "onbeforeload", "onload", "onloaderror"]);
        mini[_ParseBool](_, A, ["multiSelect", "resultAsTree", "checkRecursive", "showTreeIcon", "showTreeLines", "showFolderCheckBox", "autoCheckParent", "valueFromSelect"]);
        if (A.expandOnLoad) {
            var $ = parseInt(A.expandOnLoad);
            if (mini.isNumber($))
                A.expandOnLoad = $;
            else
                A.expandOnLoad = A.expandOnLoad == "true" ? true : false
        }
        return A
    }
    ;
    oOlol = function() {
        mini.FileUpload[superclass][_create][call](this);
        O0Oo0(this.el, "mini-htmlfile");
        this._uploadId = this.uid + "$button_placeholder";
        this.lo1o01 = mini.append(this.el, "<span id=\"" + this._uploadId + "\"></span>");
        this.uploadEl = this.lo1o01;
        l1Oo0O(this.oO0o1l, "mousemove", this.lolO, this)
    }
    ;
    o1o1O = function() {
        var $ = "onmouseover=\"O0Oo0(this,'" + this.oooOO1 + "');\" " + "onmouseout=\"Ol00(this,'" + this.oooOO1 + "');\"";
        return "<span class=\"mini-buttonedit-button\" " + $ + ">" + this.buttonText + "</span>"
    }
    ;
    l01oo = function($) {
        if (this.OolO10) {
            mini[clearEvent](this.OolO10);
            this.OolO10 = null 
        }
        mini.FileUpload[superclass][destroy][call](this, $)
    }
    ;
    ooOlo = function(A) {
        if (this.enabled == false)
            return;
        var $ = this;
        if (!this.swfUpload) {
            var B = new SWFUpload({
                file_post_name: this.name,
                upload_url: $.uploadUrl,
                flash_url: $.flashUrl,
                file_size_limit: $.limitSize,
                file_types: $.limitType,
                file_types_description: $.typesDescription,
                file_upload_limit: parseInt($.uploadLimit),
                file_queue_limit: $.queueLimit,
                file_queued_handler: mini.createDelegate(this.__on_file_queued, this),
                upload_error_handler: mini.createDelegate(this.__on_upload_error, this),
                upload_success_handler: mini.createDelegate(this.__on_upload_success, this),
                upload_complete_handler: mini.createDelegate(this.__on_upload_complete, this),
                button_placeholder_id: this._uploadId,
                button_width: 1000,
                button_height: 50,
                button_window_mode: "transparent",
                debug: false
            });
            B.flashReady();
            this.swfUpload = B;
            var _ = this.swfUpload.movieElement;
            _.style.zIndex = 1000;
            _.style.position = "absolute";
            _.style.left = "0px";
            _.style.top = "0px";
            _.style.width = "100%";
            _.style.height = "50px"
        }
    }
    ;
    OOlo1 = function($) {
        mini.copyTo(this.postParam, $)
    }
    ;
    O0o0O = function($) {
        this[addPostParam]($)
    }
    ;
    o1o11 = function() {
        return this.postParam
    }
    ;
    OO110 = function($) {
        this.limitType = $
    }
    ;
    oOo11 = function() {
        return this.limitType
    }
    ;
    oO1O1 = function($) {
        this.typesDescription = $
    }
    ;
    O0lo0 = function() {
        return this.typesDescription
    }
    ;
    o1ol1 = function($) {
        this.buttonText = $;
        this._buttonEl.innerHTML = $
    }
    ;
	;l0l10=function (column) {var header = column.header; if (typeof header == "function") header = header[call](this,column); if (mini.isNull(header) || header === "") header = " "; return header; }
    OoO0l = function() {
        return this.buttonText
    }
    ;
    ll010 = function($) {
        this.uploadLimit = $
    }
    ;
    O1l11 = function($) {
        this.queueLimit = $
    }
    ;
    oOl0l = function($) {
        this.flashUrl = $
    }
    ;
    olOOO = function($) {
        if (this.swfUpload)
            this.swfUpload.setUploadURL($);
        this.uploadUrl = $
    }
    ;
    O0oo1 = function($) {
        this.name = $
    }
    ;
    O0o0l = function($) {
        var _ = {
            cancel: false
        };
        this[fire]("beforeupload", _);
        if (_.cancel == true)
            return;
        if (this.swfUpload) {
            this.swfUpload.setPostParams(this.postParam);
            this.swfUpload[startUpload]()
        }
    }
    ;
    OlOll = function($) {
        var _ = {
            file: $
        };
        if (this.uploadOnSelect)
            this.swfUpload[startUpload]();
        this[setText]($.name);
        this[fire]("fileselect", _)
    }
    ;
	;l01oO=function () {return this[frozenStartColumn] >= 0 && this[frozenEndColumn] >= this[frozenStartColumn]; }
    oOl00 = function(_, $) {
        var A = {
            file: _,
            serverData: $
        };
        this[fire]("uploadsuccess", A)
    }
    ;
    o0Ol0 = function($) {
        var _ = {
            file: $
        };
        this[fire]("uploaderror", _)
    }
    ;
    olO1 = function($) {
        this[fire]("uploadcomplete", $)
    }
    ;
    l1l1o = function() {}
    ;
    OooOl = function($) {
        var _ = mini.FileUpload[superclass][getAttrs][call](this, $);
        mini[_ParseString]($, _, ["limitType", "limitSize", "flashUrl", "uploadUrl", "uploadLimit", "buttonText", "onuploadsuccess", "onuploaderror", "onuploadcomplete", "onfileselect"]);
        mini[_ParseBool]($, _, ["uploadOnSelect"]);
        return _
    }
    ;
    o0O10 = function(_) {
        if (typeof _ == "string")
            return this;
        var A = this.ool11;
        this.ool11 = false;
        var $ = _.activeIndex;
        delete _.activeIndex;
        mini.OutlookBar[superclass][set][call](this, _);
        if (mini.isNumber($))
            this[setActiveIndex]($);
        this.ool11 = A;
        this[doLayout]();
        return this
    }
    ;
	;o1OOo=function (index) {if (index == 1) return this.pane1; else if (index == 2) return this.pane2; return index; }
    ol1lo = function() {
        this.el = document.createElement("div");
        this.el.className = "mini-outlookbar";
        this.el.innerHTML = "<div class=\"mini-outlookbar-border\"></div>";
        this.oO0o1l = this.el.firstChild
    }
    ;
    l10ll = function() {
        l00l(function() {
            l1Oo0O(this.el, "click", this.o0O0lo, this)
        }
        , this)
    }
    ;
    Oll00 = function($) {
        return this.uid + "$" + $._id
    }
    ;
    o0l1o = function() {
        this.groups = []
    }
    ;
    Ol11O = function(_) {
        var H = this.OlO0(_)
          , G = "<div id=\"" + H + "\" class=\"mini-outlookbar-group " + _.cls + "\" style=\"" + _.style + "\">" + "<div class=\"mini-outlookbar-groupHeader " + _.headerCls + "\" style=\"" + _.headerStyle + ";\"></div>" + "<div class=\"mini-outlookbar-groupBody " + _.bodyCls + "\" style=\"" + _.bodyStyle + ";\"></div>" + "</div>"
          , A = mini.append(this.oO0o1l, G)
          , E = A.lastChild
          , C = _.body;
        delete _.body;
        if (C) {
            if (!mini.isArray(C))
                C = [C];
            for (var $ = 0, F = C.length; $ < F; $++) {
                var B = C[$];
                mini.append(E, B)
            }
            C.length = 0
        }
        if (_.bodyParent) {
            var D = _.bodyParent;
            while (D.firstChild)
                E.appendChild(D.firstChild)
        }
        delete _.bodyParent;
        return A
    }
    ;
    O1l1l = function(_) {
        var $ = mini.copyTo({
            _id: this._GroupId++,
            name: "",
            title: "",
            cls: "",
            style: "",
            iconCls: "",
            iconStyle: "",
            headerCls: "",
            headerStyle: "",
            bodyCls: "",
            bodyStyle: "",
            visible: true,
            enabled: true,
            showCollapseButton: true,
            expanded: this.expandOnLoad
        }, _);
        return $
    }
    ;
    OOo11 = function(_) {
        if (!mini.isArray(_))
            return;
        this[removeAll]();
        for (var $ = 0, A = _.length; $ < A; $++)
            this[addGroup](_[$])
    }
    ;
    O1Oo1s = function() {
        return this.groups
    }
    ;
    o101o = function(_, $) {
        if (typeof _ == "string")
            _ = {
                title: _
            };
        _ = this[createGroup](_);
        if (typeof $ != "number")
            $ = this.groups.length;
        this.groups.insert($, _);
        var B = this.lo0111(_);
        _._el = B;
        var $ = this.groups[indexOf](_)
          , A = this.groups[$ + 1];
        if (A) {
            var C = this[getGroupEl](A);
            jQuery(C).before(B)
        }
        this[doUpdate]();
        return _
    }
    ;
    OloO0 = function($, _) {
        var $ = this[getGroup]($);
        if (!$)
            return;
        mini.copyTo($, _);
        this[doUpdate]()
    }
    ;
    o0ll0 = function($) {
        $ = this[getGroup]($);
        if (!$)
            return;
        var _ = this[getGroupEl]($);
        if (_)
            _.parentNode.removeChild(_);
        this.groups.remove($);
        this[doUpdate]()
    }
    ;
    olO1l = function() {
        for (var $ = this.groups.length - 1; $ >= 0; $--)
            this[removeGroup]($)
    }
    ;
    oOOOO = function(_, $) {
        _ = this[getGroup](_);
        if (!_)
            return;
        target = this[getGroup]($);
        var A = this[getGroupEl](_);
        this.groups.remove(_);
        if (target) {
            $ = this.groups[indexOf](target);
            this.groups.insert($, _);
            var B = this[getGroupEl](target);
            jQuery(B).before(A)
        } else {
            this.groups[add](_);
            this.oO0o1l.appendChild(A)
        }
        this[doUpdate]()
    }
    ;
    o1Ol0 = function() {
        for (var _ = 0, E = this.groups.length; _ < E; _++) {
            var A = this.groups[_]
              , B = A._el
              , D = B.firstChild
              , C = B.lastChild
              , $ = "<div class=\"mini-outlookbar-icon " + A.iconCls + "\" style=\"" + A[iconStyle] + ";\"></div>"
              , F = "<div class=\"mini-tools\"><span class=\"mini-tools-collapse\"></span></div>" + ((A[iconStyle] || A.iconCls) ? $ : "") + "<div class=\"mini-outlookbar-groupTitle\">" + A.title + "</div><div style=\"clear:both;\"></div>";
            D.innerHTML = F;
            if (A.enabled)
                Ol00(B, "mini-disabled");
            else
                O0Oo0(B, "mini-disabled");
            O0Oo0(B, A.cls);
            O1lo11(B, A.style);
            O0Oo0(C, A.bodyCls);
            O1lo11(C, A.bodyStyle);
            O0Oo0(D, A.headerCls);
            O1lo11(D, A.headerStyle);
            Ol00(B, "mini-outlookbar-firstGroup");
            Ol00(B, "mini-outlookbar-lastGroup");
            if (_ == 0)
                O0Oo0(B, "mini-outlookbar-firstGroup");
            if (_ == E - 1)
                O0Oo0(B, "mini-outlookbar-lastGroup")
        }
        this[doLayout]()
    }
    ;
    l1OOl = function() {
        if (!this[canLayout]())
            return;
        if (this.OO1oOO)
            return;
        this.l100();
        for (var $ = 0, H = this.groups.length; $ < H; $++) {
            var _ = this.groups[$]
              , B = _._el
              , D = B.lastChild;
            if (_.expanded) {
                O0Oo0(B, "mini-outlookbar-expand");
                Ol00(B, "mini-outlookbar-collapse")
            } else {
                Ol00(B, "mini-outlookbar-expand");
                O0Oo0(B, "mini-outlookbar-collapse")
            }
            D.style.height = "auto";
            D.style.display = _.expanded ? "block" : "none";
            B.style.display = _.visible ? "" : "none";
            var A = o110O(B, true)
              , E = OllOo(D)
              , G = OOoo(D);
            if (jQuery.boxModel)
                A = A - E.left - E.right - G.left - G.right;
            D.style.width = A + "px"
        }
        var F = this[isAutoHeight]()
          , C = this[getActiveGroup]();
        if (!F && this[autoCollapse] && C) {
            B = this[getGroupEl](this.activeIndex);
            B.lastChild.style.height = this.O11l() + "px"
        }
        mini.layout(this.oO0o1l)
    }
    ;
    O1101 = function() {
        if (this[isAutoHeight]())
            this.oO0o1l.style.height = "auto";
        else {
            var $ = this[getHeight](true);
            if (!jQuery.boxModel) {
                var _ = OOoo(this.oO0o1l);
                $ = $ + _.top + _.bottom
            }
            if ($ < 0)
                $ = 0;
            this.oO0o1l.style.height = $ + "px"
        }
    }
    ;
    O0O1l = function() {
        var C = jQuery(this.el).height()
          , K = OOoo(this.oO0o1l);
        C = C - K.top - K.bottom;
        var A = this[getActiveGroup]()
          , E = 0;
        for (var F = 0, D = this.groups.length; F < D; F++) {
            var _ = this.groups[F]
              , G = this[getGroupEl](_);
            if (_.visible == false || _ == A)
                continue;var $ = G.lastChild.style.display;
            G.lastChild.style.display = "none";
            var J = jQuery(G).outerHeight();
            G.lastChild.style.display = $;
            var L = o11loo(G);
            J = J + L.top + L.bottom;
            E += J
        }
        C = C - E;
        var H = this[getGroupEl](this.activeIndex);
        if (!H)
            return 0;
        C = C - jQuery(H.firstChild).outerHeight();
        if (jQuery.boxModel) {
            var B = OllOo(H.lastChild)
              , I = OOoo(H.lastChild);
            C = C - B.top - B.bottom - I.top - I.bottom
        }
        B = OllOo(H),
        I = OOoo(H),
        L = o11loo(H);
        C = C - L.top - L.bottom;
        C = C - B.top - B.bottom - I.top - I.bottom;
        if (C < 0)
            C = 0;
        return C
    }
    ;
	ollO0=function (url) {this.url = url; }
    O1Oo1 = function($) {
        if (typeof $ == "object")
            return $;
        if (typeof $ == "number")
            return this.groups[$];
        else
            for (var _ = 0, B = this.groups.length; _ < B; _++) {
                var A = this.groups[_];
                if (A.name == $)
                    return A
            }
    }
    ;
    O0O1 = function(B) {
        for (var $ = 0, A = this.groups.length; $ < A; $++) {
            var _ = this.groups[$];
            if (_._id == B)
                return _
        }
    }
    ;
    lO1l0 = function($) {
        var _ = this[getGroup]($);
        if (!_)
            return null ;
        return _._el
    }
    ;
    ll1o = function($) {
        var _ = this[getGroupEl]($);
        if (_)
            return _.lastChild;
        return null 
    }
    ;
    l0Ol1 = function($) {
        this[autoCollapse] = $
    }
    ;
    l0OOl = function() {
        return this[autoCollapse]
    }
    ;
    O0Oll = function($) {
        this.expandOnLoad = $
    }
    ;
    o1oll = function() {
        return this.expandOnLoad
    }
    ;
    l000 = function(_) {
        var $ = this[getGroup](_)
          , A = this[getGroup](this.activeIndex)
          , B = $ != A;
        if ($)
            this.activeIndex = this.groups[indexOf]($);
        else
            this.activeIndex = -1;
        $ = this[getGroup](this.activeIndex);
        if ($) {
            var C = this.allowAnim;
            this.allowAnim = false;
            this[expandGroup]($);
            this.allowAnim = C
        }
    }
    ;
    Ol11o1 = function() {
        return this.activeIndex
    }
    ;
    o101O = function() {
        return this[getGroup](this.activeIndex)
    }
    ;
    loo01 = function($) {
        $ = this[getGroup]($);
        if (!$ || $.visible == true)
            return;
        $.visible = true;
        this[doUpdate]()
    }
    ;
    lol0o = function($) {
        $ = this[getGroup]($);
        if (!$ || $.visible == false)
            return;
        $.visible = false;
        this[doUpdate]()
    }
    ;
    Ol01O = function($) {
        $ = this[getGroup]($);
        if (!$)
            return;
        if ($.expanded)
            this[collapseGroup]($);
        else
            this[expandGroup]($)
    }
    ;
    Oollo = function(_) {
        _ = this[getGroup](_);
        if (!_)
            return;
        var D = _.expanded
          , E = 0;
        if (this[autoCollapse] && !this[isAutoHeight]())
            E = this.O11l();
        var F = false;
        _.expanded = false;
        var $ = this.groups[indexOf](_);
        if ($ == this.activeIndex) {
            this.activeIndex = -1;
            F = true
        }
        var C = this[getGroupBodyEl](_);
        if (this.allowAnim && D) {
            this.OO1oOO = true;
            C.style.display = "block";
            C.style.height = "auto";
            if (this[autoCollapse] && !this[isAutoHeight]())
                C.style.height = E + "px";
            var A = {
                height: "1px"
            };
            O0Oo0(C, "mini-outlookbar-overflow");
            var B = this
              , H = jQuery(C);
            H.animate(A, 180, function() {
                B.OO1oOO = false;
                Ol00(C, "mini-outlookbar-overflow");
                B[doLayout]()
            }
            )
        } else
            this[doLayout]();
        var G = {
            group: _,
            index: this.groups[indexOf](_),
            name: _.name
        };
        this[fire]("Collapse", G);
        if (F)
            this[fire]("activechanged")
    }
    ;
    llOo1 = function($) {
        $ = this[getGroup]($);
        if (!$)
            return;
        var H = $.expanded;
        $.expanded = true;
        this.activeIndex = this.groups[indexOf]($);
        sneedfire = true;
        if (this[autoCollapse])
            for (var D = 0, B = this.groups.length; D < B; D++) {
                var C = this.groups[D];
                if (C.expanded && C != $)
                    this[collapseGroup](C)
            }
        var G = this[getGroupBodyEl]($);
        if (this.allowAnim && H == false) {
            this.OO1oOO = true;
            G.style.display = "block";
            if (this[autoCollapse] && !this[isAutoHeight]()) {
                var A = this.O11l();
                G.style.height = (A) + "px"
            } else
                G.style.height = "auto";
            var _ = lOl10(G);
            G.style.height = "1px";
            var E = {
                height: _ + "px"
            }
              , I = G.style.overflow;
            G.style.overflow = "hidden";
            O0Oo0(G, "mini-outlookbar-overflow");
            var F = this
              , K = jQuery(G);
            K.animate(E, 180, function() {
                G.style.overflow = I;
                Ol00(G, "mini-outlookbar-overflow");
                F.OO1oOO = false;
                F[doLayout]()
            }
            )
        } else
            this[doLayout]();
        var J = {
            group: $,
            index: this.groups[indexOf]($),
            name: $.name
        };
        this[fire]("Expand", J);
        if (sneedfire)
            this[fire]("activechanged")
    }
    ;
    ol1ol = function($) {
        $ = this[getGroup]($);
        var _ = {
            group: $,
            groupIndex: this.groups[indexOf]($),
            groupName: $.name,
            cancel: false
        };
        if ($.expanded) {
            this[fire]("BeforeCollapse", _);
            if (_.cancel == false)
                this[collapseGroup]($)
        } else {
            this[fire]("BeforeExpand", _);
            if (_.cancel == false)
                this[expandGroup]($)
        }
    }
    ;
    Oo0lO = function(B) {
        var _ = llOo(B.target, "mini-outlookbar-group");
        if (!_)
            return null ;
        var $ = _.id.split("$")
          , A = $[$.length - 1];
        return this.oll0lo(A)
    }
    ;
    lOool = function(A) {
        if (this.OO1oOO)
            return;
        var _ = llOo(A.target, "mini-outlookbar-groupHeader");
        if (!_)
            return;
        var $ = this.oOoo(A);
        if (!$)
            return;
        this.ol00($)
    }
    ;
    l1o1l = function(D) {
        var A = [];
        for (var $ = 0, C = D.length; $ < C; $++) {
            var B = D[$]
              , _ = {};
            A.push(_);
            _.style = B.style.cssText;
            mini[_ParseString](B, _, ["name", "title", "cls", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle"]);
            mini[_ParseBool](B, _, ["visible", "enabled", "showCollapseButton", "expanded"]);
            _.bodyParent = B
        }
        return A
    }
    ;
    oolOo = function($) {
        var A = mini.OutlookBar[superclass][getAttrs][call](this, $);
        mini[_ParseString]($, A, ["onactivechanged", "oncollapse", "onexpand"]);
        mini[_ParseBool]($, A, ["autoCollapse", "allowAnim", "expandOnLoad"]);
        mini[_ParseInt]($, A, ["activeIndex"]);
        var _ = mini[getChildNodes]($);
        A.groups = this[parseGroups](_);
        return A
    }
    ;
    olol1 = function(A) {
        if (typeof A == "string")
            return this;
        var $ = A.value;
        delete A.value;
        var B = A.url;
        delete A.url;
        var _ = A.data;
        delete A.data;
        mini.ListControl[superclass][set][call](this, A);
        if (!mini.isNull(_))
            this[setData](_);
        if (!mini.isNull(B))
            this[setUrl](B);
        if (!mini.isNull($))
            this[setValue]($);
        return this
    }
    ;
    OOol0 = function() {}
    ;
	;ol1oo=function () {return this.menu; }
    OOOol = function() {
        l00l(function() {
            O0l10(this.el, "click", this.o0O0lo, this);
            O0l10(this.el, "dblclick", this.Ol1l0, this);
            O0l10(this.el, "mousedown", this.ol1Ol, this);
            O0l10(this.el, "mouseup", this.OOlooO, this);
            O0l10(this.el, "mousemove", this.lolO, this);
            O0l10(this.el, "mouseover", this.ol0OOo, this);
            O0l10(this.el, "mouseout", this.o1oo0, this);
            O0l10(this.el, "keydown", this.ll01o0, this);
            O0l10(this.el, "keyup", this.loOOO, this);
            O0l10(this.el, "contextmenu", this.OO0100, this)
        }
        , this)
    }
    ;
    o1Ooo1 = function($) {
        if (this.el) {
            this.el.onclick = null ;
            this.el.ondblclick = null ;
            this.el.onmousedown = null ;
            this.el.onmouseup = null ;
            this.el.onmousemove = null ;
            this.el.onmouseover = null ;
            this.el.onmouseout = null ;
            this.el.onkeydown = null ;
            this.el.onkeyup = null ;
            this.el.oncontextmenu = null 
        }
        mini.ListControl[superclass][destroy][call](this, $)
    }
    ;
    lOo11 = function($) {
        this.name = $;
        if (this.oOoll)
            mini.setAttr(this.oOoll, "name", this.name)
    }
    ;
    l1lo1ByEvent = function(_) {
        var A = llOo(_.target, this.lll0);
        if (A) {
            var $ = parseInt(mini.getAttr(A, "index"));
            return this.data[$]
        }
    }
    ;
    o0oOOCls = function(_, A) {
        var $ = this[getItemEl](_);
        if ($)
            O0Oo0($, A)
    }
    ;
    O10lO1Cls = function(_, A) {
        var $ = this[getItemEl](_);
        if ($)
            Ol00($, A)
    }
    ;
    l1lo1El = function(_) {
        _ = this[getItem](_);
        var $ = this.data[indexOf](_)
          , A = this.olol($);
        return document.getElementById(A)
    }
    ;
    OooOo = function(_, $) {
        _ = this[getItem](_);
        if (!_)
            return;
        var A = this[getItemEl](_);
        if ($ && A)
            this[scrollIntoView](_);
        if (this.o0o1lItem == _) {
            if (A)
                O0Oo0(A, this.o01ll);
            return
        }
        this.Oo1O1();
        this.o0o1lItem = _;
        if (A)
            O0Oo0(A, this.o01ll)
    }
    ;
    lO1l1 = function() {
        if (!this.o0o1lItem)
            return;
        try {
            var $ = this[getItemEl](this.o0o1lItem);
            if ($)
                Ol00($, this.o01ll)
        } catch (_) {}
        this.o0o1lItem = null 
    }
    ;
	;oo1ol0=function (value) {return this.showHandleButton; }
    Oo1oO = function() {
        return this.o0o1lItem
    }
    ;
    Ol10O = function() {
        return this.data[indexOf](this.o0o1lItem)
    }
    ;
    lo1o1 = function(_) {
        try {
            var $ = this[getItemEl](_)
              , A = this.o1O10 || this.el;
            mini[scrollIntoView]($, A, false)
        } catch (B) {}
    }
    ;
    l1lo1 = function($) {
        if (typeof $ == "object")
            return $;
        if (typeof $ == "number")
            return this.data[$];
        return this[findItems]($)[0]
    }
    ;
    OO0oO = function() {
        return this.data.length
    }
    ;
    oo0O1 = function($) {
        return this.data[indexOf]($)
    }
    ;
    llo0O = function($) {
        return this.data[$]
    }
    ;
    l1o1O = function($, _) {
        $ = this[getItem]($);
        if (!$)
            return;
        mini.copyTo($, _);
        this[doUpdate]()
    }
    ;
    o10Ol = function($) {
        if (typeof $ == "string")
            this[setUrl]($);
        else
            this[setData]($)
    }
    ;
    lO0Ol = function($) {
        this[setData]($)
    }
    ;
    oO1o = function(data) {
        if (typeof data == "string")
            data = eval(data);
        if (!mini.isArray(data))
            data = [];
        this.data = data;
        this[doUpdate]();
        if (this.value != "") {
            this[deselectAll]();
            var records = this[findItems](this.value);
            this[selects](records)
        }
    }
    ;
    O10100 = function() {
        return this.data.clone()
    }
    ;
    Oll11 = function($) {
        this.url = $;
        this.oll0l0({})
    }
    ;
    oO1o1 = function() {
        return this.url
    }
    ;
    oOlOl = function(params) {
        try {
            var url = eval(this.url);
            if (url != undefined)
                this.url = url
        } catch (e) {}
        var e = {
            url: this.url,
            async: false,
            type: "get",
            params: params,
            data: params,
            cache: false,
            cancel: false
        };
        this[fire]("beforeload", e);
        if (e.data != e.params && e.params != params)
            e.data = e.params;
        if (e.cancel == true)
            return;
        var sf = this
          , url = e.url;
        mini.copyTo(e, {
            success: function($) {
                var _ = null ;
                try {
                    _ = mini.decode($)
                } catch (A) {
                    _ = [];
                    if (mini_debugger == true)
                        alert(url + "\njson is error.")
                }
                if (sf.dataField)
                    _ = mini._getMap(sf.dataField, _);
                if (!_)
                    _ = [];
                var A = {
                    data: _,
                    cancel: false
                };
                sf[fire]("preload", A);
                if (A.cancel == true)
                    return;
                sf[setData](A.data);
                sf[fire]("load");
                setTimeout(function() {
                    sf[doLayout]()
                }
                , 100)
            },
            error: function($, A, _) {
                var B = {
                    xmlHttp: $,
                    errorMsg: $.responseText,
                    errorCode: $.status
                };
                if (mini_debugger == true)
                    alert(url + "\n" + B.errorCode + "\n" + B.errorMsg);
                sf[fire]("loaderror", B)
            }
        });
        this.O10lOl = mini.ajax(e)
    }
    ;
    OolOo = function($) {
        if (mini.isNull($))
            $ = "";
        if (this.value !== $) {
            this[deselectAll]();
            this.value = $;
            if (this.oOoll)
                this.oOoll.value = $;
            var _ = this[findItems](this.value);
            this[selects](_)
        }
    }
    ;
    lOlo0 = function() {
        return this.value
    }
    ;
    llOl0 = function() {
        return this.value
    }
    ;
    O1OO0 = function($) {
        this[valueField] = $
    }
    ;
    Oo1OO = function() {
        return this[valueField]
    }
    ;
	;o1lOO=function (row) {return this.uid + "$" + row._uid; }
    Ool00 = function($) {
        this[textField] = $
    }
    ;
    l1lol = function() {
        return this[textField]
    }
    ;
    OO100O = function($) {
        return String(mini._getMap(this.valueField, $))
    }
    ;
    Oloo1 = function($) {
        var _ = mini._getMap(this.textField, $);
        return mini.isNull(_) ? "" : String(_)
    }
    ;
    lO1oO = function(A) {
        if (mini.isNull(A))
            A = [];
        if (!mini.isArray(A))
            A = this[findItems](A);
        var B = []
          , C = [];
        for (var _ = 0, D = A.length; _ < D; _++) {
            var $ = A[_];
            if ($) {
                B.push(this[getItemValue]($));
                C.push(this[getItemText]($))
            }
        }
        return [B.join(this.delimiter), C.join(this.delimiter)]
    }
    ;
    llloo = function(B) {
        if (mini.isNull(B) || B === "")
            return [];
        var E = String(B).split(this.delimiter)
          , D = this.data
          , H = {};
        for (var F = 0, A = D.length; F < A; F++) {
            var _ = D[F]
              , I = _[this.valueField];
            H[I] = _
        }
        var C = [];
        for (var $ = 0, G = E.length; $ < G; $++) {
            I = E[$],
            _ = H[I];
            if (_)
                C.push(_)
        }
        return C
    }
    ;
    lO1oo = function() {
        var $ = this[getData]();
        this[removeItems]($)
    }
    ;
    o0oOOs = function(_, $) {
        if (!mini.isArray(_))
            return;
        if (mini.isNull($))
            $ = this.data.length;
        this.data.insertRange($, _);
        this[doUpdate]()
    }
    ;
    o0oOO = function(_, $) {
        if (!_)
            return;
        if (this.data[indexOf](_) != -1)
            return;
        if (mini.isNull($))
            $ = this.data.length;
        this.data.insert($, _);
        this[doUpdate]()
    }
    ;
    O10lO1s = function($) {
        if (!mini.isArray($))
            return;
        this.data.removeRange($);
        this.o0oOo();
        this[doUpdate]()
    }
    ;
    O10lO1 = function(_) {
        var $ = this.data[indexOf](_);
        if ($ != -1) {
            this.data.removeAt($);
            this.o0oOo();
            this[doUpdate]()
        }
    }
    ;
    ol10o = function(_, $) {
        if (!_ || !mini.isNumber($))
            return;
        if ($ < 0)
            $ = 0;
        if ($ > this.data.length)
            $ = this.data.length;
        this.data.remove(_);
        this.data.insert($, _);
        this[doUpdate]()
    }
    ;
    llOll = function() {
        for (var _ = this.Oolo0.length - 1; _ >= 0; _--) {
            var $ = this.Oolo0[_];
            if (this.data[indexOf]($) == -1)
                this.Oolo0.removeAt(_)
        }
        var A = this.o0ol(this.Oolo0);
        this.value = A[0];
        if (this.oOoll)
            this.oOoll.value = this.value
    }
    ;
    l01O = function($) {
        this[multiSelect] = $
    }
    ;
    oloOo = function() {
        return this[multiSelect]
    }
    ;
    l110l = function($) {
        if (!$)
            return false;
        return this.Oolo0[indexOf]($) != -1
    }
    ;
    Olo11s = function() {
        var $ = this.Oolo0.clone()
          , _ = this;
        mini.sort($, function(A, C) {
            var $ = _[indexOf](A)
              , B = _[indexOf](C);
            if ($ > B)
                return 1;
            if ($ < B)
                return -1;
            return 0
        }
        );
        return $
    }
    ;
    oO00o = function($) {
        if ($) {
            this.l0o0O = $;
            this[select]($)
        }
    }
    ;
    Olo11 = function() {
        return this.l0o0O
    }
    ;
    OOO0o = function($) {
        $ = this[getItem]($);
        if (!$)
            return;
        if (this[isSelected]($))
            return;
        this[selects]([$])
    }
    ;
    llo01 = function($) {
        $ = this[getItem]($);
        if (!$)
            return;
        if (!this[isSelected]($))
            return;
        this[deselects]([$])
    }
    ;
    ooo1o = function() {
        var $ = this.data.clone();
        this[selects]($)
    }
    ;
    o1000 = function() {
        this[deselects](this.Oolo0)
    }
    ;
	;lOOOl=function (row) {row = this[getRow](row); if (!row) return; if (row._state == "removed") {this.Ooo100.remove(row); } delete this.OO0Ool[row._uid]; delete row._state; if (this.Olo1O) {this[_updateRowEl](row); } }
    OlO0O = function() {
        this[deselectAll]()
    }
    ;
    Ooo11 = function(A) {
        if (!A || A.length == 0)
            return;
        A = A.clone();
        for (var _ = 0, C = A.length; _ < C; _++) {
            var $ = A[_];
            if (!this[isSelected]($))
                this.Oolo0.push($)
        }
        var B = this;
        setTimeout(function() {
            B.oO0oo()
        }
        , 1)
    }
    ;
    OloO1 = function(A) {
        if (!A || A.length == 0)
            return;
        A = A.clone();
        for (var _ = A.length - 1; _ >= 0; _--) {
            var $ = A[_];
            if (this[isSelected]($))
                this.Oolo0.remove($)
        }
        var B = this;
        setTimeout(function() {
            B.oO0oo()
        }
        , 1)
    }
    ;
    lO10O = function() {
        var C = this.o0ol(this.Oolo0);
        this.value = C[0];
        if (this.oOoll)
            this.oOoll.value = this.value;
        for (var A = 0, D = this.data.length; A < D; A++) {
            var _ = this.data[A]
              , F = this[isSelected](_);
            if (F)
                this[addItemCls](_, this._lOlO0);
            else
                this[removeItemCls](_, this._lOlO0);
            var $ = this.data[indexOf](_)
              , E = this.llo100($)
              , B = document.getElementById(E);
            if (B)
                B.checked = !!F
        }
    }
    ;
    O0lOl = function(_, B) {
        var $ = this.o0ol(this.Oolo0);
        this.value = $[0];
        if (this.oOoll)
            this.oOoll.value = this.value;
        var A = {
            selecteds: this[getSelecteds](),
            selected: this[getSelected](),
            value: this[getValue]()
        };
        this[fire]("SelectionChanged", A)
    }
    ;
    lOO11 = function($) {
        return this.uid + "$ck$" + $
    }
    ;
    o1lll = function($) {
        return this.uid + "$" + $
    }
    ;
    l01l1 = function($) {
        this.o1l111($, "Click")
    }
    ;
    l01lO = function($) {
        this.o1l111($, "Dblclick")
    }
    ;
    l00lll = function($) {
        this.o1l111($, "MouseDown")
    }
    ;
    lollO = function($) {
        this.o1l111($, "MouseUp")
    }
    ;
    O110O = function($) {
        this.o1l111($, "MouseMove")
    }
    ;
    ooOl0 = function($) {
        this.o1l111($, "MouseOver")
    }
    ;
    oO1lo = function($) {
        this.o1l111($, "MouseOut")
    }
    ;
    lo0Ol = function($) {
        this.o1l111($, "KeyDown")
    }
    ;
    ll1ll = function($) {
        this.o1l111($, "KeyUp")
    }
    ;
    loo10 = function($) {
        this.o1l111($, "ContextMenu")
    }
    ;
    OOO1O = function(C, A) {
        if (!this.enabled)
            return;
        var $ = this.lOl0l(C);
        if (!$)
            return;
        var B = this["_OnItem" + A];
        if (B)
            B[call](this, $, C);
        else {
            var _ = {
                item: $,
                htmlEvent: C
            };
            this[fire]("item" + A, _)
        }
    }
    ;
    l10l0 = function($, A) {
        if (this[isReadOnly]() || this.enabled == false || $.enabled === false) {
            A.preventDefault();
            return
        }
        var _ = this[getValue]();
        if (this[multiSelect]) {
            if (this[isSelected]($)) {
                this[deselect]($);
                if (this.l0o0O == $)
                    this.l0o0O = null 
            } else {
                this[select]($);
                this.l0o0O = $
            }
            this.OOo1()
        } else if (!this[isSelected]($)) {
            this[deselectAll]();
            this[select]($);
            this.l0o0O = $;
            this.OOo1()
        }
        if (_ != this[getValue]())
            this.Ollll();
        var A = {
            item: $,
            htmlEvent: A
        };
        this[fire]("itemclick", A)
    }
    ;
    l1l10 = function($, _) {
        mini[repaint](this.el);
        if (!this.enabled)
            return;
        if (this.ooo0o1)
            this.Oo1O1();
        var _ = {
            item: $,
            htmlEvent: _
        };
        this[fire]("itemmouseout", _)
    }
    ;
    O1llo = function($, _) {
        mini[repaint](this.el);
        if (!this.enabled || $.enabled === false)
            return;
        this.l0O011($);
        var _ = {
            item: $,
            htmlEvent: _
        };
        this[fire]("itemmousemove", _)
    }
    ;
    OO01O = function(_, $) {
        this[on]("itemclick", _, $)
    }
    ;
    oo1o1 = function(_, $) {
        this[on]("itemmousedown", _, $)
    }
    ;
    llO11 = function(_, $) {
        this[on]("beforeload", _, $)
    }
    ;
    loOl0 = function(_, $) {
        this[on]("load", _, $)
    }
    ;
    lO00o = function(_, $) {
        this[on]("loaderror", _, $)
    }
    ;
    l011l = function(_, $) {
        this[on]("preload", _, $)
    }
    ;
    OoOOo = function(C) {
        var G = mini.ListControl[superclass][getAttrs][call](this, C);
        mini[_ParseString](C, G, ["url", "data", "value", "textField", "valueField", "onitemclick", "onitemmousemove", "onselectionchanged", "onitemdblclick", "onbeforeload", "onload", "onloaderror", "ondataload"]);
        mini[_ParseBool](C, G, ["multiSelect"]);
        var E = G[valueField] || this[valueField]
          , B = G[textField] || this[textField];
        if (C.nodeName.toLowerCase() == "select") {
            var D = [];
            for (var A = 0, F = C.length; A < F; A++) {
                var _ = C.options[A]
                  , $ = {};
                $[B] = _.text;
                $[E] = _.value;
                D.push($)
            }
            if (D.length > 0)
                G.data = D
        }
        return G
    }
    ;
    o01o0 = function() {
        var $ = "onmouseover=\"O0Oo0(this,'" + this.oooOO1 + "');\" " + "onmouseout=\"Ol00(this,'" + this.oooOO1 + "');\"";
        return "<span class=\"mini-buttonedit-button\" " + $ + "><span class=\"mini-buttonedit-up\"><span></span></span><span class=\"mini-buttonedit-down\"><span></span></span></span>"
    }
    ;
    Oo01O = function() {
        mini.TimeSpinner[superclass][_initEvents][call](this);
        l00l(function() {
            this[on]("buttonmousedown", this.lo1l, this);
            l1Oo0O(this.el, "mousewheel", this.O0OOOO, this);
            l1Oo0O(this.ll1l1O, "keydown", this.ll01o0, this)
        }
        , this)
    }
    ;
    OO11O = function($) {
        if (typeof $ != "string")
            return;
        var _ = ["H:mm:ss", "HH:mm:ss", "H:mm", "HH:mm", "H", "HH", "mm:ss"];
        if (this.format != $) {
            this.format = $;
            this.text = this.ll1l1O.value = this[getFormattedValue]()
        }
    }
    ;
    Oo010 = function() {
        return this.format
    }
    ;
    lO1O = function($) {
        $ = mini.parseTime($, this.format);
        if (!$)
            $ = mini.parseTime("00:00:00", this.format);
        if (mini.isDate($))
            $ = new Date($[getTime]());
        if (mini.formatDate(this.value, "H:mm:ss") != mini.formatDate($, "H:mm:ss")) {
            this.value = $;
            this.text = this.ll1l1O.value = this[getFormattedValue]();
            this.oOoll.value = this[getFormValue]()
        }
    }
    ;
    o00lO = function() {
        return this.value == null  ? null  : new Date(this.value[getTime]())
    }
    ;
    lOol1 = function() {
        if (!this.value)
            return "";
        return mini.formatDate(this.value, "H:mm:ss")
    }
    ;
    l1001 = function() {
        if (!this.value)
            return "";
        return mini.formatDate(this.value, this.format)
    }
    ;
    oo1oO = function(D, C) {
        var $ = this[getValue]();
        if ($)
            switch (C) {
            case "hours":
                var A = $.getHours() + D;
                if (A > 23)
                    A = 23;
                if (A < 0)
                    A = 0;
                $.setHours(A);
                break;
            case "minutes":
                var B = $.getMinutes() + D;
                if (B > 59)
                    B = 59;
                if (B < 0)
                    B = 0;
                $.setMinutes(B);
                break;
            case "seconds":
                var _ = $.getSeconds() + D;
                if (_ > 59)
                    _ = 59;
                if (_ < 0)
                    _ = 0;
                $.setSeconds(_);
                break
            }
        else
            $ = "00:00:00";
        this[setValue]($)
    }
    ;
    oO00l = function(D, B, C) {
        this.l1lo10();
        this.olol0o(D, this.l11OOo);
        var A = this
          , _ = C
          , $ = new Date();
        this.oOO0 = setInterval(function() {
            A.olol0o(D, A.l11OOo);
            C--;
            if (C == 0 && B > 50)
                A.o1lO11(D, B - 100, _ + 3);
            var E = new Date();
            if (E - $ > 500)
                A.l1lo10();
            $ = E
        }
        , B);
        l1Oo0O(document, "mouseup", this.O0l0l, this)
    }
    ;
    loOol = function() {
        clearInterval(this.oOO0);
        this.oOO0 = null 
    }
    ;
    O1lO0 = function($) {
        this._DownValue = this[getFormValue]();
        this.l11OOo = "hours";
        if ($.spinType == "up")
            this.o1lO11(1, 230, 2);
        else
            this.o1lO11(-1, 230, 2)
    }
    ;
    OolOl = function($) {
        this.l1lo10();
        O1l0(document, "mouseup", this.O0l0l, this);
        if (this._DownValue != this[getFormValue]())
            this.Ollll()
    }
    ;
    OoolO = function(_) {
        var $ = this[getFormValue]();
        this[setValue](this.ll1l1O.value);
        if ($ != this[getFormValue]())
            this.Ollll()
    }
    ;
    o00OO = function($) {
        var _ = mini.TimeSpinner[superclass][getAttrs][call](this, $);
        mini[_ParseString]($, _, ["format"]);
        return _
    }
    ;
    l0lolName = function($) {
        this.textName = $
    }
    ;
    Ol01lName = function() {
        return this.textName
    }
    ;
    l000o = function() {
        var A = "<table class=\"mini-textboxlist\" cellpadding=\"0\" cellspacing=\"0\"><tr ><td class=\"mini-textboxlist-border\"><ul></ul><a href=\"#\"></a><input type=\"hidden\"/></td></tr></table>"
          , _ = document.createElement("div");
        _.innerHTML = A;
        this.el = _.firstChild;
        var $ = this.el.getElementsByTagName("td")[0];
        this.ulEl = $.firstChild;
        this.oOoll = $.lastChild;
        this.focusEl = $.childNodes[1]
    }
    ;
    O1O1l = function($) {
        if (this[isShowPopup])
            this[hidePopup]();
        O1l0(document, "mousedown", this.Olo0ll, this);
        mini.TextBoxList[superclass][destroy][call](this, $)
    }
    ;
    l0l0O = function() {
        mini.TextBoxList[superclass][_initEvents][call](this);
        l1Oo0O(this.el, "mousemove", this.lolO, this);
        l1Oo0O(this.el, "mouseout", this.o1oo0, this);
        l1Oo0O(this.el, "mousedown", this.ol1Ol, this);
        l1Oo0O(this.el, "click", this.o0O0lo, this);
        l1Oo0O(this.el, "keydown", this.ll01o0, this);
        l1Oo0O(document, "mousedown", this.Olo0ll, this)
    }
    ;
    l1Ooo = function($) {
        if (this[isReadOnly]())
            return;
        if (this[isShowPopup])
            if (!l1oooo(this.popup.el, $.target))
                this[hidePopup]();
        if (this.o0o1l)
            if (this[within]($) == false) {
                this[select](null , false);
                this[showInput](false);
                this[removeCls](this.oO0Ol);
                this.o0o1l = false
            }
    }
    ;
    lloll = function() {
        if (!this.oO010) {
            var _ = this.el.rows[0]
              , $ = _.insertCell(1);
            $.style.cssText = "width:18px;vertical-align:top;";
            $.innerHTML = "<div class=\"mini-errorIcon\"></div>";
            this.oO010 = $.firstChild
        }
        return this.oO010
    }
    ;
    ooOo1 = function() {
        if (this.oO010)
            jQuery(this.oO010.parentNode).remove();
        this.oO010 = null 
    }
    ;
    oo0l0 = function() {
        if (this[canLayout]() == false)
            return;
        mini.TextBoxList[superclass][doLayout][call](this);
        if (this[isReadOnly]() || this.allowInput == false)
            this.loolo[readOnly] = true;
        else
            this.loolo[readOnly] = false
    }
    ;
    lloo0 = function() {
        if (this.oOl1)
            clearInterval(this.oOl1);
        if (this.loolo)
            O1l0(this.loolo, "keydown", this.lOo101, this);
        var G = []
          , F = this.uid;
        for (var A = 0, E = this.data.length; A < E; A++) {
            var _ = this.data[A]
              , C = F + "$text$" + A
              , B = mini._getMap(this.textField, _);
            if (mini.isNull(B))
                B = "";
            G[G.length] = "<li id=\"" + C + "\" class=\"mini-textboxlist-item\">";
            G[G.length] = B;
            G[G.length] = "<span class=\"mini-textboxlist-close\"></span></li>"
        }
        var $ = F + "$input";
        G[G.length] = "<li id=\"" + $ + "\" class=\"mini-textboxlist-inputLi\"><input class=\"mini-textboxlist-input\" type=\"text\" autocomplete=\"off\"></li>";
        this.ulEl.innerHTML = G.join("");
        this.editIndex = this.data.length;
        if (this.editIndex < 0)
            this.editIndex = 0;
        this.inputLi = this.ulEl.lastChild;
        this.loolo = this.inputLi.firstChild;
        l1Oo0O(this.loolo, "keydown", this.lOo101, this);
        var D = this;
        this.loolo.onkeyup = function() {
            D.l0O1()
        }
        ;
        D.oOl1 = null ;
        D.lOll = D.loolo.value;
        this.loolo.onfocus = function() {
            D.oOl1 = setInterval(function() {
                if (D.lOll != D.loolo.value) {
                    D.O0oo0o();
                    D.lOll = D.loolo.value
                }
            }
            , 10);
            D[addCls](D.oO0Ol);
            D.o0o1l = true;
            D[fire]("focus")
        }
        ;
        this.loolo.onblur = function() {
            clearInterval(D.oOl1);
            D[fire]("blur")
        }
    }
    ;
    lO10lByEvent = function(_) {
        var A = llOo(_.target, "mini-textboxlist-item");
        if (A) {
            var $ = A.id.split("$")
              , B = $[$.length - 1];
            return this.data[B]
        }
    }
    ;
    lO10l = function($) {
        if (typeof $ == "number")
            return this.data[$];
        if (typeof $ == "object")
            return $
    }
    ;
    OOl0 = function(_) {
        var $ = this.data[indexOf](_)
          , A = this.uid + "$text$" + $;
        return document.getElementById(A)
    }
    ;
    O1o11 = function($, A) {
        if (this[isReadOnly]() || this.enabled == false)
            return;
        this[blurItem]();
        var _ = this[getItemEl]($);
        O0Oo0(_, this.l11lO);
        if (A && O1O1Oo(A.target, "mini-textboxlist-close"))
            O0Oo0(A.target, this.o0l0O)
    }
    ;
    ollolItem = function() {
        var _ = this.data.length;
        for (var A = 0, C = _; A < C; A++) {
            var $ = this.data[A]
              , B = this[getItemEl]($);
            if (B) {
                Ol00(B, this.l11lO);
                Ol00(B.lastChild, this.o0l0O)
            }
        }
    }
    ;
    O0l00 = function(A) {
        this[select](null );
        if (mini.isNumber(A))
            this.editIndex = A;
        else
            this.editIndex = this.data.length;
        if (this.editIndex < 0)
            this.editIndex = 0;
        if (this.editIndex > this.data.length)
            this.editIndex = this.data.length;
        var B = this.inputLi;
        B.style.display = "block";
        if (mini.isNumber(A) && A < this.data.length) {
            var _ = this.data[A]
              , $ = this[getItemEl](_);
            jQuery($).before(B)
        } else
            this.ulEl.appendChild(B);
        if (A !== false)
            setTimeout(function() {
                try {
                    B.firstChild[focus]();
                    mini[selectRange](B.firstChild, 100)
                } catch ($) {}
            }
            , 10);
        else {
            this.lastInputText = "";
            this.loolo.value = ""
        }
        return B
    }
    ;
    l0ol0 = function(_) {
        _ = this[getItem](_);
        if (this.l0o0O) {
            var $ = this[getItemEl](this.l0o0O);
            Ol00($, this.l1OOll)
        }
        this.l0o0O = _;
        if (this.l0o0O) {
            $ = this[getItemEl](this.l0o0O);
            O0Oo0($, this.l1OOll)
        }
        var A = this;
        if (this.l0o0O) {
            this.focusEl[focus]();
            var B = this;
            setTimeout(function() {
                try {
                    B.focusEl[focus]()
                } catch ($) {}
            }
            , 50)
        }
        if (this.l0o0O) {
            A[addCls](A.oO0Ol);
            A.o0o1l = true
        }
    }
    ;
    oOooo = function() {
        var _ = this.o010[getSelected]()
          , $ = this.editIndex;
        if (_) {
            _ = mini.clone(_);
            this[insertItem]($, _)
        }
    }
    ;
    oOlo = function(_, $) {
        this.data.insert(_, $);
        var B = this[getText]()
          , A = this[getValue]();
        this[setValue](A, false);
        this[setText](B, false);
        this.OOo1oo();
        this[doUpdate]();
        this[showInput](_ + 1);
        this.Ollll()
    }
    ;
    l1O10 = function(_) {
        if (!_)
            return;
        var $ = this[getItemEl](_);
        mini[removeNode]($);
        this.data.remove(_);
        var B = this[getText]()
          , A = this[getValue]();
        this[setValue](A, false);
        this[setText](B, false);
        this.Ollll()
    }
    ;
    olooo = function() {
        var E = (this.text ? this.text : "").split(",")
          , D = (this.value ? this.value : "").split(",");
        if (D[0] == "")
            D = [];
        var _ = D.length;
        this.data.length = _;
        for (var A = 0, F = _; A < F; A++) {
            var $ = this.data[A];
            if (!$) {
                $ = {};
                this.data[A] = $
            }
            var C = !mini.isNull(E[A]) ? E[A] : ""
              , B = !mini.isNull(D[A]) ? D[A] : "";
            mini._setMap(this.textField, C, $);
            mini._setMap(this.valueField, B, $)
        }
        this.value = this[getValue]();
        this.text = this[getText]()
    }
    ;
    oOll1 = function() {
        return this.loolo ? this.loolo.value : ""
    }
    ;
    Ol01l = function() {
        var C = [];
        for (var _ = 0, A = this.data.length; _ < A; _++) {
            var $ = this.data[_]
              , B = mini._getMap(this.textField, $);
            if (mini.isNull(B))
                B = "";
            B = B.replace(",", "\uff0c");
            C.push(B)
        }
        return C.join(",")
    }
    ;
    OoO11 = function() {
        var B = [];
        for (var _ = 0, A = this.data.length; _ < A; _++) {
            var $ = this.data[_]
              , C = mini._getMap(this.valueField, $);
            B.push(C)
        }
        return B.join(",")
    }
    ;
	;o01oO=function () {return this[idField]; }
	;o00lOo=function (index) {if (index == 1) return this.l1o01; return this.o0Oool; }
    o10o1 = function($) {
        if (this.name != $) {
            this.name = $;
            this.oOoll.name = $
        }
    }
    ;
	;OllOOo=function () {return this.virtualScroll && this[isAutoHeight]() == false && this[isGrouping]() == false; }
    o1ooO = function($) {
        if (mini.isNull($))
            $ = "";
        if (this.value != $) {
            this.value = $;
            this.oOoll.value = $;
            this.OOo1oo();
            this[doUpdate]()
        }
    }
    ;
	;oll0O=function (fn,scope) {this[on]("buttonclick",fn,scope); }
    l0lol = function($) {
        if (mini.isNull($))
            $ = "";
        if (this.text !== $) {
            this.text = $;
            this.OOo1oo();
            this[doUpdate]()
        }
    }
    ;
    o1lOo = function($) {
        this[valueField] = $;
        this.OOo1oo()
    }
    ;
    l1OoO = function() {
        return this[valueField]
    }
    ;
    l1loo = function($) {
        this[textField] = $;
        this.OOo1oo()
    }
    ;
    oOo01 = function() {
        return this[textField]
    }
    ;
    l1l0o = function($) {
        this.allowInput = $;
        this[doLayout]()
    }
    ;
	;l1oOo=function (index) {var pane = this[getPane](index); if (!pane) return; pane.expanded = true; this[doUpdate](); var e = {pane:pane,paneIndex:this.pane1 == pane ? 1 :2 }; this[fire]("expand",e); }
    Oll01 = function() {
        return this.allowInput
    }
    ;
    lo10o = function($) {
        this.url = $
    }
    ;
    O1o0l = function() {
        return this.url
    }
    ;
    l1l1O = function($) {
        this[popupHeight] = $
    }
    ;
    llo00 = function() {
        return this[popupHeight]
    }
    ;
    O1ool = function($) {
        this[popupMinHeight] = $
    }
    ;
	;OO111=function (e) {this[doUpdate](); }
    O01ol = function() {
        return this[popupMinHeight]
    }
    ;
    llo1l = function($) {
        this[popupMaxHeight] = $
    }
    ;
    Ol1Oo = function() {
        return this[popupMaxHeight]
    }
    ;
    OOo01 = function() {
        this.O0oo0o(true)
    }
    ;
    OO0Oo = function() {
        if (this[isDisplay]() == false)
            return;
        var _ = this[getInputText]()
          , B = mini.measureText(this.loolo, _)
          , $ = B.width > 20 ? B.width + 4 : 20
          , A = o110O(this.el, true);
        if ($ > A - 15)
            $ = A - 15;
        this.loolo.style.width = $ + "px"
    }
    ;
    O0o11 = function(_) {
        var $ = this;
        setTimeout(function() {
            $.l0O1()
        }
        , 1);
        this[showPopup]("loading");
        this.OolO0();
        this._loading = true;
        this.delayTimer = setTimeout(function() {
            var _ = $.loolo.value;
            $.o1lo()
        }
        , this.delay)
    }
    ;
	;ooO11o=function (value) {this[idField] = value; }
    O00oO = function() {
        if (this[isDisplay]() == false)
            return;
        var _ = this[getInputText]()
          , A = this
          , $ = this.o010[getData]()
          , B = {
            value: this[getValue](),
            text: this[getText]()
        };
        B[this.searchField] = _;
        var C = this.url
          , F = typeof C == "function" ? C : window[C];
        if (typeof F == "function")
            C = F(this);
        if (!C)
            return;
        var E = "post";
        if (C)
            if (C[indexOf](".txt") != -1 || C[indexOf](".json") != -1)
                E = "get";
        var D = {
            url: C,
            async: true,
            params: B,
            data: B,
            type: E,
            cache: false,
            cancel: false
        };
        this[fire]("beforeload", D);
        if (D.data != D.params && D.params != B)
            D.data = D.params;
        if (D.cancel)
            return;
        mini.copyTo(D, {
            success: function($) {
                var _ = mini.decode($);
                if (A.dataField)
                    _ = mini._getMap(A.dataField, _);
                if (!_)
                    _ = [];
                A.o010[setData](_);
                A[showPopup]();
                A.o010.l0O011(0, true);
                A[fire]("load");
                A._loading = false;
                if (A._selectOnLoad) {
                    A[__doSelectValue]();
                    A._selectOnLoad = null 
                }
            },
            error: function($, B, _) {
                A[showPopup]("error")
            }
        });
        A.O10lOl = mini.ajax(D)
    }
    ;
    O0OOO = function() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null 
        }
        if (this.O10lOl)
            this.O10lOl.abort();
        this._loading = false
    }
    ;
    lO1O0 = function($) {
        if (l1oooo(this.el, $.target))
            return true;
        if (this[showPopup] && this.popup && this.popup[within]($))
            return true;
        return false
    }
    ;
    lOo1l = function() {
        if (!this.popup) {
            this.popup = new mini.ListBox();
            this.popup[addCls]("mini-textboxlist-popup");
            this.popup[setStyle]("position:absolute;left:0;top:0;");
            this.popup[showEmpty] = true;
            this.popup[setValueField](this[valueField]);
            this.popup[setTextField](this[textField]);
            this.popup[render](document.body);
            this.popup[on]("itemclick", function($) {
                this[hidePopup]();
                this.olOO()
            }
            , this)
        }
        this.o010 = this.popup;
        return this.popup
    }
    ;
    oOl1l = function($) {
        if (this[isDisplay]() == false)
            return;
        this[isShowPopup] = true;
        var _ = this[_createPopup]();
        _.el.style.zIndex = mini.getMaxZIndex();
        var B = this.o010;
        B[emptyText] = this.popupEmptyText;
        if ($ == "loading") {
            B[emptyText] = this.popupLoadingText;
            this.o010[setData]([])
        } else if ($ == "error") {
            B[emptyText] = this.popupLoadingText;
            this.o010[setData]([])
        }
        this.o010[doUpdate]();
        var A = this[getBox]()
          , D = A.x
          , C = A.y + A.height;
        this.popup.el.style.display = "block";
        mini[setXY](_.el, -1000, -1000);
        this.popup[setWidth](A.width);
        this.popup[setHeight](this[popupHeight]);
        if (this.popup[getHeight]() < this[popupMinHeight])
            this.popup[setHeight](this[popupMinHeight]);
        if (this.popup[getHeight]() > this[popupMaxHeight])
            this.popup[setHeight](this[popupMaxHeight]);
        mini[setXY](_.el, D, C)
    }
    ;
    lOOO1 = function() {
        this[isShowPopup] = false;
        if (this.popup)
            this.popup.el.style.display = "none"
    }
    ;
    Oo0lo = function(_) {
        if (this.enabled == false)
            return;
        var $ = this.lOl0l(_);
        if (!$) {
            this[blurItem]();
            return
        }
        this[hoverItem]($, _)
    }
    ;
    o0O0o = function($) {
        this[blurItem]()
    }
    ;
    lo00o = function(_) {
        if (this[isReadOnly]() || this.enabled == false)
            return;
        if (this.enabled == false)
            return;
        var $ = this.lOl0l(_);
        if (!$) {
            if (llOo(_.target, "mini-textboxlist-input"))
                ;
            else
                this[showInput]();
            return
        }
        this.focusEl[focus]();
        this[select]($);
        if (_ && O1O1Oo(_.target, "mini-textboxlist-close"))
            this[removeItem]($)
    }
    ;
    Oo1l0 = function(B) {
        if (this[isReadOnly]() || this.allowInput == false)
            return false;
        var $ = this.data[indexOf](this.l0o0O)
          , _ = this;
        function A() {
            var A = _.data[$];
            _[removeItem](A);
            A = _.data[$];
            if (!A)
                A = _.data[$ - 1];
            _[select](A);
            if (!A)
                _[showInput]()
        }
        switch (B.keyCode) {
        case 8:
            B.preventDefault();
            A();
            break;
        case 37:
        case 38:
            this[select](null );
            this[showInput]($);
            break;
        case 39:
        case 40:
            $ += 1;
            this[select](null );
            this[showInput]($);
            break;
        case 46:
            A();
            break
        }
    }
    ;
    O1lOoo = function() {
        var $ = this.o010[getFocusedItem]();
        if ($)
            this.o010[setSelected]($);
        this.lastInputText = this.text;
        this[hidePopup]();
        this.olOO()
    }
    ;
	;Olo0Ol=function (value) {this[iconStyle] = value; this[_doUpdateIcon](); }
    l01lo = function(G) {
        this._selectOnLoad = null ;
        if (this[isReadOnly]() || this.allowInput == false)
            return false;
        G.stopPropagation();
        if (this[isReadOnly]() || this.allowInput == false)
            return;
        var E = mini.getSelectRange(this.loolo)
          , B = E[0]
          , D = E[1]
          , F = this.loolo.value.length
          , C = B == D && B == 0
          , A = B == D && D == F;
        if (this[isReadOnly]() || this.allowInput == false)
            G.preventDefault();
        if (G.keyCode == 9) {
            this[hidePopup]();
            return
        }
        if (G.keyCode == 16 || G.keyCode == 17 || G.keyCode == 18)
            return;
        switch (G.keyCode) {
        case 13:
            if (this[isShowPopup]) {
                G.preventDefault();
                if (this._loading) {
                    this._selectOnLoad = true;
                    return
                }
                this[__doSelectValue]()
            }
            break;
        case 27:
            G.preventDefault();
            this[hidePopup]();
            break;
        case 8:
            if (C)
                G.preventDefault();
        case 37:
            if (C)
                if (this[isShowPopup])
                    this[hidePopup]();
                else if (this.editIndex > 0) {
                    var _ = this.editIndex - 1;
                    if (_ < 0)
                        _ = 0;
                    if (_ >= this.data.length)
                        _ = this.data.length - 1;
                    this[showInput](false);
                    this[select](_)
                }
            break;
        case 39:
            if (A)
                if (this[isShowPopup])
                    this[hidePopup]();
                else if (this.editIndex <= this.data.length - 1) {
                    _ = this.editIndex;
                    this[showInput](false);
                    this[select](_)
                }
            break;
        case 38:
            G.preventDefault();
            if (this[isShowPopup]) {
                var _ = -1
                  , $ = this.o010[getFocusedItem]();
                if ($)
                    _ = this.o010[indexOf]($);
                _--;
                if (_ < 0)
                    _ = 0;
                this.o010.l0O011(_, true)
            }
            break;
        case 40:
            G.preventDefault();
            if (this[isShowPopup]) {
                _ = -1,
                $ = this.o010[getFocusedItem]();
                if ($)
                    _ = this.o010[indexOf]($);
                _++;
                if (_ < 0)
                    _ = 0;
                if (_ >= this.o010[getCount]())
                    _ = this.o010[getCount]() - 1;
                this.o010.l0O011(_, true)
            } else
                this.O0oo0o(true);
            break;
        default:
            break
        }
    }
    ;
    o0ool = function() {
        try {
            this.loolo[focus]()
        } catch ($) {}
    }
    ;
    ollol = function() {
        try {
            this.loolo[blur]()
        } catch ($) {}
    }
    ;
    oO0ll = function($) {
        this.searchField = $
    }
    ;
    ooo00 = function() {
        return this.searchField
    }
    ;
    oOo1l = function($) {
        var A = mini.TextBox[superclass][getAttrs][call](this, $)
          , _ = jQuery($);
        mini[_ParseString]($, A, ["value", "text", "valueField", "textField", "url", "popupHeight", "textName", "onfocus", "onbeforeload", "onload", "searchField"]);
        mini[_ParseBool]($, A, ["allowInput"]);
        mini[_ParseInt]($, A, ["popupMinHeight", "popupMaxHeight"]);
        return A
    }
    ;
    OlO00 = function(_) {
        if (typeof _ == "string")
            return this;
        var A = _.url;
        delete _.url;
        var $ = _.activeIndex;
        delete _.activeIndex;
        mini.OutlookMenu[superclass][set][call](this, _);
        if (A)
            this[setUrl](A);
        if (mini.isNumber($))
            this[setActiveIndex]($);
        return this
    }
    ;
    OOl0l = function(B) {
        if (this.ll0OO) {
            var _ = this.ll0OO.clone();
            for (var $ = 0, C = _.length; $ < C; $++) {
                var A = _[$];
                A[destroy]()
            }
            this.ll0OO.length = 0
        }
        mini.OutlookMenu[superclass][destroy][call](this, B)
    }
    ;
    OlO1l = function(_) {
        for (var A = 0, B = _.length; A < B; A++) {
            var $ = _[A];
            $.text = $[this.textField];
            $.url = $[this.urlField];
            $.iconCls = $[this.iconField]
        }
    }
    ;
    O1l0o = function() {
        var _ = [];
        try {
            _ = mini[getData](this.url)
        } catch (A) {
            if (mini_debugger == true)
                alert("outlooktree json is error.")
        }
        if (this.dataField)
            _ = mini._getMap(this.dataField, _);
        if (!_)
            _ = [];
        if (this[resultAsTree] == false)
            _ = mini.arrayToTree(_, this.itemsField, this.idField, this[parentField]);
        var $ = mini[treeToArray](_, this.itemsField, this.idField, this[parentField]);
        this.o00000Fields($);
        this[createNavBarMenu](_);
        this[fire]("load")
    }
    ;
    lO0O0List = function($, B, _) {
        B = B || this[idField];
        _ = _ || this[parentField];
        this.o00000Fields($);
        var A = mini.arrayToTree($, this.nodesField, B, _);
        this[load](A)
    }
    ;
    lO0O0 = function($) {
        if (typeof $ == "string")
            this[setUrl]($);
        else
            this[createNavBarMenu]($)
    }
    ;
    lO1lo = function($) {
        this[load]($)
    }
    ;
    O00lo = function($) {
        this.url = $;
        this.oll0l0()
    }
    ;
    loO0o = function() {
        return this.url
    }
    ;
    l110O = function($) {
        this[textField] = $
    }
    ;
	;OoOo0=function () {return this[showSummaryRow] ? lOl10(this.oO0o01) :0; }
    O00o0 = function() {
        return this[textField]
    }
    ;
    olo1o = function($) {
        this.iconField = $
    }
    ;
    OOl1l = function() {
        return this.iconField
    }
    ;
    OooO1 = function($) {
        this[urlField] = $
    }
    ;
    Oo11O = function() {
        return this[urlField]
    }
    ;
    o1Ool = function($) {
        this[resultAsTree] = $
    }
    ;
    Ol1OO = function() {
        return this[resultAsTree]
    }
    ;
    o10Oo = function($) {
        this.nodesField = $
    }
    ;
    o0110sField = function() {
        return this.nodesField
    }
    ;
    oo001 = function($) {
        this[idField] = $
    }
    ;
    o1111 = function() {
        return this[idField]
    }
    ;
    llo0l = function($) {
        this[parentField] = $
    }
    ;
    oOo00 = function() {
        return this[parentField]
    }
    ;
	;Ol0o0=function (panes) {if (!mini.isArray(panes)) return; for (var i = 0; i < 2; i++) {var p = panes[i]; this[updatePane](i + 1,p); } }
    O11O0 = function() {
        return this.l0o0O
    }
    ;
    Oo1o0 = function($) {
        $ = this[getNode]($);
        if (!$)
            return;
        var _ = this[_getOwnerMenu]($);
        if (!_)
            return;
        this[expandGroup](_._ownerGroup);
        setTimeout(function() {
            try {
                _[setSelectedItem]($)
            } catch (A) {}
        }
        , 100)
    }
    ;
    l0Oll = function(H, D) {
        var G = [];
        D = D || this;
        for (var _ = 0, F = this.ll0OO.length; _ < F; _++) {
            var B = this.ll0OO[_][getItems]()
              , C = [];
            for (var E = 0, A = B.length; E < A; E++) {
                var $ = B[E];
                if (H && H[call](D, $) === true)
                    C.push($)
            }
            G.addRange(C)
        }
        return G
    }
    ;
    o0110 = function(_) {
        for (var $ = 0, B = this.ll0OO.length; $ < B; $++) {
            var C = this.ll0OO[$]
              , A = C[getItem](_);
            if (A)
                return A
        }
        return null 
    }
    ;
    lo1l0 = function() {
        var $ = [];
        for (var _ = 0, B = this.ll0OO.length; _ < B; _++) {
            var C = this.ll0OO[_]
              , A = C[getItems]();
            $.addRange(A)
        }
        return $
    }
    ;
    o11Ol = function(_) {
        if (!_)
            return;
        for (var $ = 0, B = this.ll0OO.length; $ < B; $++) {
            var C = this.ll0OO[$]
              , A = C[getItem](_);
            if (A)
                return C
        }
    }
    ;
    ol01l = function($) {
        var _ = mini.OutlookMenu[superclass][getAttrs][call](this, $);
        _.text = $.innerHTML;
        mini[_ParseString]($, _, ["url", "textField", "urlField", "idField", "parentField", "itemsField", "iconField", "onitemclick", "onitemselect"]);
        mini[_ParseBool]($, _, ["resultAsTree"]);
        return _
    }
    ;
    l1lll = function(D) {
        if (!mini.isArray(D))
            D = [];
        this.data = D;
        var B = [];
        for (var _ = 0, E = this.data.length; _ < E; _++) {
            var $ = this.data[_]
              , A = {};
            A.title = $.text;
            A.iconCls = $.iconCls;
            B.push(A);
            A._children = $[this.itemsField]
        }
        this[setGroups](B);
        this[setActiveIndex](this.activeIndex);
        this.ll0OO = [];
        for (_ = 0,
        E = this.groups.length; _ < E; _++) {
            var A = this.groups[_]
              , C = this[getGroupBodyEl](A)
              , F = new mini.Menu();
            F._ownerGroup = A;
            F[set]({
                showNavArrow: false,
                style: "width:100%;height:100%;border:0;background:none",
                borderStyle: "border:0",
                allowSelectItem: true,
                items: A._children
            });
            F[render](C);
            F[on]("itemclick", this.l1l101, this);
            F[on]("itemselect", this.O0ol, this);
            this.ll0OO.push(F);
            delete A._children
        }
    }
    ;
    olllO = function(_) {
        var $ = {
            item: _.item,
            htmlEvent: _.htmlEvent
        };
        this[fire]("itemclick", $)
    }
    ;
    O010l = function(C) {
        if (!C.item)
            return;
        for (var $ = 0, A = this.ll0OO.length; $ < A; $++) {
            var B = this.ll0OO[$];
            if (B != C.sender)
                B[setSelectedItem](null )
        }
        var _ = {
            item: C.item,
            htmlEvent: C.htmlEvent
        };
        this.l0o0O = C.item;
        this[fire]("itemselect", _)
    }
    ;
    Oo11o = function(_) {
        if (typeof _ == "string")
            return this;
        var A = _.url;
        delete _.url;
        var $ = _.activeIndex;
        delete _.activeIndex;
        mini.OutlookTree[superclass][set][call](this, _);
        if (A)
            this[setUrl](A);
        if (mini.isNumber($))
            this[setActiveIndex]($);
        return this
    }
    ;
    Ol00o = function(B) {
        if (this.OOoO11) {
            var _ = this.OOoO11.clone();
            for (var $ = 0, C = _.length; $ < C; $++) {
                var A = _[$];
                A[destroy]()
            }
            this.OOoO11.length = 0
        }
        mini.OutlookTree[superclass][destroy][call](this, B)
    }
    ;
    oOl0O = function(_) {
        for (var A = 0, B = _.length; A < B; A++) {
            var $ = _[A];
            $.text = $[this.textField];
            $.url = $[this.urlField];
            $.iconCls = $[this.iconField]
        }
    }
    ;
    OOOOo = function() {
        var _ = [];
        try {
            _ = mini[getData](this.url)
        } catch (A) {
            if (mini_debugger == true)
                alert("outlooktree json is error.")
        }
        if (this.dataField)
            _ = mini._getMap(this.dataField, _);
        if (!_)
            _ = [];
        if (this[resultAsTree] == false)
            _ = mini.arrayToTree(_, this.nodesField, this.idField, this[parentField]);
        var $ = mini[treeToArray](_, this.nodesField, this.idField, this[parentField]);
        this.o00000Fields($);
        this[createNavBarTree](_);
        this[fire]("load")
    }
    ;
    Ooo0oList = function($, B, _) {
        B = B || this[idField];
        _ = _ || this[parentField];
        this.o00000Fields($);
        var A = mini.arrayToTree($, this.nodesField, B, _);
        this[load](A)
    }
    ;
    Ooo0o = function($) {
        if (typeof $ == "string")
            this[setUrl]($);
        else
            this[createNavBarTree]($)
    }
    ;
    oOo1oo = function($) {
        this[load]($)
    }
    lo0O1=function () {return this.data.clone(); }
    O010o = function($) {
        this.url = $;
        this.oll0l0()
    }
    ;
    ol0lo = function() {
        return this.url
    }
    ;
    OoOo1 = function($) {
        this[textField] = $
    }
    ;
    ol0OO = function() {
        return this[textField]
    }
    ;
    Olol0 = function($) {
        this.iconField = $
    }
    ;
    Ol000 = function() {
        return this.iconField
    }
    ;
    O1oOo = function($) {
        this[urlField] = $
    }
    ;
    o111o = function() {
        return this[urlField]
    }
    ;
    OlO10 = function($) {
        this[resultAsTree] = $
    }
    ;
    l0loo = function() {
        return this[resultAsTree]
    }
    ;
    ol0Ol = function($) {
        this.nodesField = $
    }
    ;
    oOoOlsField = function() {
        return this.nodesField
    }
    ;
    l000l = function($) {
        this[idField] = $
    }
    ;
    ol01o = function() {
        return this[idField]
    }
    ;
    l100O = function($) {
        this[parentField] = $
    }
    ;
    OOlll = function() {
        return this[parentField]
    }
    ;
    l1OO1 = function() {
        return this.l0o0O
    }
    ;
    Ol10o = function(_) {
        _ = this[getNode](_);
        if (!_)
            return;
        var $ = this[_getOwnerTree](_);
        $[selectNode](_)
    }
    ;
    ll1oo = function(_) {
        _ = this[getNode](_);
        if (!_)
            return;
        var $ = this[_getOwnerTree](_);
        $[expandPath](_);
        this[expandGroup]($._ownerGroup)
    }
    ;
    l0ool = function(E, B) {
        var D = [];
        B = B || this;
        for (var $ = 0, C = this.OOoO11.length; $ < C; $++) {
            var A = this.OOoO11[$]
              , _ = A[findNodes](E, B);
            D.addRange(_)
        }
        return D
    }
    ;
    oOoOl = function(A) {
        for (var $ = 0, C = this.OOoO11.length; $ < C; $++) {
            var _ = this.OOoO11[$]
              , B = _[getNode](A);
            if (B)
                return B
        }
        return null 
    }
    ;
    l1l1l = function() {
        var $ = [];
        for (var _ = 0, C = this.OOoO11.length; _ < C; _++) {
            var A = this.OOoO11[_]
              , B = A[getList]();
            $.addRange(B)
        }
        return $
    }
    ;
    lll1O = function(A) {
        if (!A)
            return;
        for (var $ = 0, B = this.OOoO11.length; $ < B; $++) {
            var _ = this.OOoO11[$];
            if (_.oolo[A._id])
                return _
        }
    }
    ;
    oo1l0 = function($) {
        this.expandOnLoad = $
    }
    ;
    OoOl1 = function() {
        return this.expandOnLoad
    }
    ;
    oooOl = function(_) {
        var A = mini.OutlookTree[superclass][getAttrs][call](this, _);
        A.text = _.innerHTML;
        mini[_ParseString](_, A, ["url", "textField", "urlField", "idField", "parentField", "nodesField", "iconField", "onnodeclick", "onnodeselect", "onnodemousedown", "expandOnLoad"]);
        mini[_ParseBool](_, A, ["resultAsTree"]);
        if (A.expandOnLoad) {
            var $ = parseInt(A.expandOnLoad);
            if (mini.isNumber($))
                A.expandOnLoad = $;
            else
                A.expandOnLoad = A.expandOnLoad == "true" ? true : false
        }
        return A
    }
    ;
    O11OO = function(D) {
        if (!mini.isArray(D))
            D = [];
        this.data = D;
        var B = [];
        for (var _ = 0, E = this.data.length; _ < E; _++) {
            var $ = this.data[_]
              , A = {};
            A.title = $.text;
            A.iconCls = $.iconCls;
            B.push(A);
            A._children = $[this.nodesField]
        }
        this[setGroups](B);
        this[setActiveIndex](this.activeIndex);
        this.OOoO11 = [];
        for (_ = 0,
        E = this.groups.length; _ < E; _++) {
            var A = this.groups[_]
              , C = this[getGroupBodyEl](A)
              , D = new mini.Tree();
            D[set]({
                expandOnLoad: this.expandOnLoad,
                showTreeIcon: true,
                style: "width:100%;height:100%;border:0;background:none",
                data: A._children
            });
            D[render](C);
            D[on]("nodeclick", this.OOol1o, this);
            D[on]("nodeselect", this.llOo11, this);
            D[on]("nodemousedown", this.__OnNodeMouseDown, this);
            this.OOoO11.push(D);
            delete A._children;
            D._ownerGroup = A
        }
        this[doLayout]()
    }
    ;
    Oo000 = function(_) {
        var $ = {
            node: _.node,
            isLeaf: _.sender[isLeaf](_.node),
            htmlEvent: _.htmlEvent
        };
        this[fire]("nodemousedown", $)
    }
    ;
    O00oo = function(_) {
        var $ = {
            node: _.node,
            isLeaf: _.sender[isLeaf](_.node),
            htmlEvent: _.htmlEvent
        };
        this[fire]("nodeclick", $)
    }
    ;
    OllOO = function(C) {
        if (!C.node)
            return;
        for (var $ = 0, B = this.OOoO11.length; $ < B; $++) {
            var A = this.OOoO11[$];
            if (A != C.sender)
                A[selectNode](null )
        }
        var _ = {
            node: C.node,
            isLeaf: C.sender[isLeaf](C.node),
            htmlEvent: C.htmlEvent
        };
        this.l0o0O = C.node;
        this[fire]("nodeselect", _)
    }
    ;
    ll111 = function(A, D, C, B, $) {
        A = mini.get(A);
        D = mini.get(D);
        if (!A || !D || !C)
            return;
        var _ = {
            control: A,
            source: D,
            field: C,
            convert: $,
            mode: B
        };
        this._bindFields.push(_);
        D[on]("currentchanged", this.O001O, this);
        A[on]("valuechanged", this.loOlo0, this)
    }
    ;
    Ol0o1 = function(B, F, D, A) {
        B = ooO0(B);
        F = mini.get(F);
        if (!B || !F)
            return;
        var B = new mini.Form(B)
          , $ = B.getFields();
        for (var _ = 0, E = $.length; _ < E; _++) {
            var C = $[_];
            this[bindField](C, F, C[getName](), D, A)
        }
    }
    ;
    ol0l0 = function(H) {
        if (this._doSetting)
            return;
        this._doSetting = true;
        var G = H.sender
          , _ = H.record;
        for (var $ = 0, F = this._bindFields.length; $ < F; $++) {
            var B = this._bindFields[$];
            if (B.source != G)
                continue;var C = B.control
              , D = B.field;
            if (C[setValue])
                if (_) {
                    var A = _[D];
                    C[setValue](A)
                } else
                    C[setValue]("");
            if (C[setText] && C.textName)
                if (_)
                    C[setText](_[C.textName]);
                else
                    C[setText]("")
        }
        var E = this;
        setTimeout(function() {
            E._doSetting = false
        }
        , 10)
    }
    ;
    lO0O1 = function(H) {
        if (this._doSetting)
            return;
        this._doSetting = true;
        var D = H.sender
          , _ = D[getValue]();
        for (var $ = 0, G = this._bindFields.length; $ < G; $++) {
            var C = this._bindFields[$];
            if (C.control != D || C.mode === false)
                continue;var F = C.source
              , B = F[getCurrent]();
            if (!B)
                continue;var A = {};
            A[C.field] = _;
            if (D[getText] && D.textName)
                A[D.textName] = D[getText]();
            F[updateRow](B, A)
        }
        var E = this;
        setTimeout(function() {
            E._doSetting = false
        }
        , 10)
    }
    ;
	;l01O0=function (value) {if (this[allowResize] != value) {this[allowResize] = value; this[doLayout](); } }
    OOl1o = function() {
        var $ = this.el = document.createElement("div");
        this.el.className = this.uiCls;
        this.el.innerHTML = "<div class=\"mini-list-inner\"></div><div class=\"mini-errorIcon\"></div><input type=\"hidden\" />";
        this.OolO10 = this.el.firstChild;
        this.oOoll = this.el.lastChild;
        this.oO010 = this.el.childNodes[1]
    }
    ;
    O1001 = function() {
        var B = [];
        if (this.repeatItems > 0) {
            if (this.repeatDirection == "horizontal") {
                var D = [];
                for (var C = 0, E = this.data.length; C < E; C++) {
                    var A = this.data[C];
                    if (D.length == this.repeatItems) {
                        B.push(D);
                        D = []
                    }
                    D.push(A)
                }
                B.push(D)
            } else {
                var _ = this.repeatItems > this.data.length ? this.data.length : this.repeatItems;
                for (C = 0,
                E = _; C < E; C++)
                    B.push([]);
                for (C = 0,
                E = this.data.length; C < E; C++) {
                    var A = this.data[C]
                      , $ = C % this.repeatItems;
                    B[$].push(A)
                }
            }
        } else
            B = [this.data.clone()];
        return B
    }
    ;
    OOo0l = function() {
        var D = this.data
          , G = "";
        for (var A = 0, F = D.length; A < F; A++) {
            var _ = D[A];
            _._i = A
        }
        if (this.repeatLayout == "flow") {
            var $ = this.O1ooll();
            for (A = 0,
            F = $.length; A < F; A++) {
                var C = $[A];
                for (var E = 0, B = C.length; E < B; E++) {
                    _ = C[E];
                    G += this.lo00l1(_, _._i)
                }
                if (A != F - 1)
                    G += "<br/>"
            }
        } else if (this.repeatLayout == "table") {
            $ = this.O1ooll();
            G += "<table class=\"" + this.olllo1 + "\" cellpadding=\"0\" cellspacing=\"1\">";
            for (A = 0,
            F = $.length; A < F; A++) {
                C = $[A];
                G += "<tr>";
                for (E = 0,
                B = C.length; E < B; E++) {
                    _ = C[E];
                    G += "<td class=\"" + this.OO1ooo + "\">";
                    G += this.lo00l1(_, _._i);
                    G += "</td>"
                }
                G += "</tr>"
            }
            G += "</table>"
        } else
            for (A = 0,
            F = D.length; A < F; A++) {
                _ = D[A];
                G += this.lo00l1(_, A)
            }
        this.OolO10.innerHTML = G;
        for (A = 0,
        F = D.length; A < F; A++) {
            _ = D[A];
            delete _._i
        }
    }
    ;
    o0ll1 = function(_, $) {
        var G = this.oOO1O(_, $)
          , F = this.olol($)
          , A = this.llo100($)
          , D = this[getItemValue](_)
          , B = ""
          , E = "<div id=\"" + F + "\" index=\"" + $ + "\" class=\"" + this.lll0 + " ";
        if (_.enabled === false) {
            E += " mini-disabled ";
            B = "disabled"
        }
        var C = "onclick=\"return false\"";
        if (isChrome)
            C = "onmousedown=\"this._checked = this.checked;\" onclick=\"this.checked = this._checked\"";
        E += G.itemCls + "\" style=\"" + G.itemStyle + "\"><input " + C + " " + B + " value=\"" + D + "\" id=\"" + A + "\" type=\"" + this.lO010 + "\" /><label for=\"" + A + "\" onclick=\"return false;\">";
        E += G.itemHtml + "</label></div>";
        return E
    }
    ;
    llOol = function(_, $) {
        var A = this[getItemText](_)
          , B = {
            index: $,
            item: _,
            itemHtml: A,
            itemCls: "",
            itemStyle: ""
        };
        this[fire]("drawitem", B);
        if (B.itemHtml === null  || B.itemHtml === undefined)
            B.itemHtml = "";
        return B
    }
    ;
    O1O01 = function($) {
        $ = parseInt($);
        if (isNaN($))
            $ = 0;
        if (this.repeatItems != $) {
            this.repeatItems = $;
            this[doUpdate]()
        }
    }
    ;
    O11oo = function() {
        return this.repeatItems
    }
    ;
    OO001 = function($) {
        if ($ != "flow" && $ != "table")
            $ = "none";
        if (this.repeatLayout != $) {
            this.repeatLayout = $;
            this[doUpdate]()
        }
    }
    ;
    O111o = function() {
        return this.repeatLayout
    }
    ;
    ol1ll = function($) {
        if ($ != "vertical")
            $ = "horizontal";
        if (this.repeatDirection != $) {
            this.repeatDirection = $;
            this[doUpdate]()
        }
    }
    ;
    Ol011 = function() {
        return this.repeatDirection
    }
    ;
    OO0ll = function(_) {
        var D = mini.CheckBoxList[superclass][getAttrs][call](this, _)
          , C = jQuery(_);
        mini[_ParseString](_, D, ["ondrawitem"]);
        var $ = parseInt(C.attr("repeatItems"));
        if (!isNaN($))
            D.repeatItems = $;
        var B = C.attr("repeatLayout");
        if (B)
            D.repeatLayout = B;
        var A = C.attr("repeatDirection");
        if (A)
            D.repeatDirection = A;
        return D
    }
    ;
    lllOO = function($) {
        this.url = $
    }
    ;
    olo10 = function($) {
        if (mini.isNull($))
            $ = "";
        if (this.value != $) {
            this.value = $;
            this.oOoll.value = this.value
        }
    }
    ;
    OlO0l = function($) {
        if (mini.isNull($))
            $ = "";
        if (this.text != $) {
            this.text = $;
            this.lOll = $
        }
        this.ll1l1O.value = this.text
    }
    ;
	;oOo0Oo=function (value) {this[setMenu](value); }
    O10oO = function($) {
        this.minChars = $
    }
    ;
    lo010 = function() {
        return this.minChars
    }
    ;
	;o0o1o=function (e) {Ol00(this.el,this._hoverCls); }
    lO1O1 = function($) {
        this.searchField = $
    }
    ;
    O0O0l = function() {
        return this.searchField
    }
    ;
    o1ll1 = function($) {
        var _ = this[getPopup]()
          , A = this.o010;
        A[showEmpty] = true;
        A[emptyText] = this.popupEmptyText;
        if ($ == "loading") {
            A[emptyText] = this.popupLoadingText;
            this.o010[setData]([])
        } else if ($ == "error") {
            A[emptyText] = this.popupLoadingText;
            this.o010[setData]([])
        }
        this.o010[doUpdate]();
        mini.AutoComplete[superclass][showPopup][call](this)
    }
    ;
    o1Olo = function(C) {
        this[fire]("keydown", {
            htmlEvent: C
        });
        if (C.keyCode == 8 && (this[isReadOnly]() || this.allowInput == false))
            return false;
        if (C.keyCode == 9) {
            this[hidePopup]();
            return
        }
        if (this[isReadOnly]())
            return;
        switch (C.keyCode) {
        case 27:
            if (this[isShowPopup]())
                C.stopPropagation();
            this[hidePopup]();
            break;
        case 13:
            if (this[isShowPopup]()) {
                C.preventDefault();
                C.stopPropagation();
                var _ = this.o010[getFocusedIndex]();
                if (_ != -1) {
                    var $ = this.o010[getAt](_)
                      , B = this.o010.o0ol([$])
                      , A = B[0];
                    this[setText](B[1]);
                    if (mini.isFirefox) {
                        this[blur]();
                        this[focus]()
                    }
                    this[setValue](A, false);
                    this.Ollll();
                    this[hidePopup]()
                }
            } else
                this[fire]("enter");
            break;
        case 37:
            break;
        case 38:
            _ = this.o010[getFocusedIndex]();
            if (_ == -1) {
                _ = 0;
                if (!this[multiSelect]) {
                    $ = this.o010[findItems](this.value)[0];
                    if ($)
                        _ = this.o010[indexOf]($)
                }
            }
            if (this[isShowPopup]())
                if (!this[multiSelect]) {
                    _ -= 1;
                    if (_ < 0)
                        _ = 0;
                    this.o010.l0O011(_, true)
                }
            break;
        case 39:
            break;
        case 40:
            _ = this.o010[getFocusedIndex]();
            if (this[isShowPopup]()) {
                if (!this[multiSelect]) {
                    _ += 1;
                    if (_ > this.o010[getCount]() - 1)
                        _ = this.o010[getCount]() - 1;
                    this.o010.l0O011(_, true)
                }
            } else
                this.lOlo0O(this.ll1l1O.value);
            break;
        default:
            this.lOlo0O(this.ll1l1O.value);
            break
        }
    }
    ;
    lolo0 = function() {
        this.lOlo0O()
    }
    ;
    l0O00 = function(_) {
        var $ = this;
        if (this._queryTimer) {
            clearTimeout(this._queryTimer);
            this._queryTimer = null 
        }
        this._queryTimer = setTimeout(function() {
            var _ = $.ll1l1O.value;
            $.o1lo(_)
        }
        , this.delay);
        this[showPopup]("loading")
    }
    ;
	;ll0ol=function () {return this[showFooter] ? lOl10(this.o111) :0; }
    l1000 = function($) {
        if (!this.url){
             if(typeof(mini_acdata)==="undefined")
            	 return;
             var _ = mini.AutoComplete.filter(mini_acdata,$);
             var B = sf = this;
             if (sf.dataField)
                 _ = mini._getMap(sf.dataField, _);
             if (!_)
                 _ = [];
             B.o010[setData](_);
             B[showPopup]();
             B.o010.l0O011(0, true);
             B.data = _;
             B[fire]("load", {
                 data: _
             })
             return;
        }
            
        if (this.O10lOl)
            this.O10lOl.abort();
        var A = this.url
          , D = "post";
        if (A)
            if (A[indexOf](".txt") != -1 || A[indexOf](".json") != -1)
                D = "get";
        var _ = {};
        _[this.searchField] = $;
        var C = {
            url: A,
            async: true,
            params: _,
            data: _,
            type: D,
            cache: false,
            cancel: false
        };
        this[fire]("beforeload", C);
        if (C.data != C.params && C.params != _)
            C.data = C.params;
        if (C.cancel)
            return;
        var B = sf = this;
        mini.copyTo(C, {
            success: function($) {
                try {
                    var _ = mini.decode($)
                } catch (A) {
                    throw new Error("autocomplete json is error")
                }
                if (sf.dataField)
                    _ = mini._getMap(sf.dataField, _);
                if (!_)
                    _ = [];
                B.o010[setData](_);
                B[showPopup]();
                B.o010.l0O011(0, true);
                B.data = _;
                B[fire]("load", {
                    data: _
                })
            },
            error: function($, A, _) {
                B[showPopup]("error")
            }
        });
        this.O10lOl = mini.ajax(C)
    }
    ;
    lOllo = function($) {
        var _ = mini.AutoComplete[superclass][getAttrs][call](this, $);
        mini[_ParseString]($, _, ["searchField"]);
        return _
    }
    ;
    oOlo1 = function() {
        if (this._tryValidateTimer)
            clearTimeout(this._tryValidateTimer);
        var $ = this;
        this._tryValidateTimer = setTimeout(function() {
            $[validate]()
        }
        , 30)
    }
    ;
    O0ooO = function() {
        if (this.enabled == false) {
            this[setIsValid](true);
            return true
        }
        var $ = {
            value: this[getValue](),
            errorText: "",
            isValid: true
        };
        if (this.required)
            if (mini.isNull($.value) || String($.value).trim() === "") {
                $[isValid] = false;
                $.errorText = this[requiredErrorText]
            }
        this[fire]("validation", $);
        this.errorText = $.errorText;
        this[setIsValid]($[isValid]);
        return this[isValid]()
    }
    ;
    ll1lO = function() {
        return this.OoloOO
    }
    ;
    l010o = function($) {
        this.OoloOO = $;
        this.O1111()
    }
    ;
    OOl01 = function() {
        return this.OoloOO
    }
    ;
    Ol1ll = function($) {
        this.validateOnChanged = $
    }
    ;
    olO01 = function($) {
        return this.validateOnChanged
    }
    ;
    oO101 = function($) {
        this.validateOnLeave = $
    }
    ;
    Oolo1 = function($) {
        return this.validateOnLeave
    }
    ;
    llO1o = function($) {
        if (!$)
            $ = "none";
        this[errorMode] = $.toLowerCase();
        if (this.OoloOO == false)
            this.O1111()
    }
    ;
    o011l = function() {
        return this[errorMode]
    }
    ;
    Ol00O = function($) {
        this.errorText = $;
        if (this.OoloOO == false)
            this.O1111()
    }
    ;
    O110l = function() {
        return this.errorText
    }
    ;
    olOoO = function($) {
        this.required = $;
        if (this.required)
            this[addCls](this.O1Olol);
        else
            this[removeCls](this.O1Olol)
    }
    ;
    l0OOo = function() {
        return this.required
    }
    ;
    OOl11 = function($) {
        this[requiredErrorText] = $
    }
    ;
    O0OlO = function() {
        return this[requiredErrorText]
    }
    ;
    Oolll = function() {
        return this.oO010
    }
    ;
    o11o0 = function() {}
    ;
    oO10O = function() {
        var $ = this;
        this._O1111Timer = setTimeout(function() {
            $.l11o0O()
        }
        , 1)
    }
    ;
    OOl0O = function() {
        if (!this.el)
            return;
        this[removeCls](this.Ol10);
        this[removeCls](this.oOO0o0);
        this.el.title = "";
        if (this.OoloOO == false)
            switch (this[errorMode]) {
            case "icon":
                this[addCls](this.Ol10);
                var $ = this[getErrorIconEl]();
				//add noty alert 
                //if ($)
                    //$.title = this.errorText;
				if($){
					$.title = this.errorText;
					if(!this.notShowNotyAlert && mini.showNotyAlert){
						var eText = mini.getLabelText(this) + this.errorText
						setTimeout(function(){mini.noty(eText,mini.notyErrorType);},10);
						//mini.noty(eText,mini.notyErrorType);
					}
					this["notShowNotyAlert"] = false;
				}
                break;
            case "border":
                this[addCls](this.oOO0o0);
                this.el.title = this.errorText;
            default:
                this.oo1l1();
                break
            }
        else
            this.oo1l1();
        this[doLayout]()
    }
    ;
    Oo1lO = function() {
        if (this.validateOnChanged)
            this[_tryValidate]();
        this[fire]("valuechanged", {
            value: this[getValue]()
        })
    }
    ;
    lO01O = function(_, $) {
        this[on]("valuechanged", _, $)
    }
    ;
    oll00 = function(_, $) {
        this[on]("validation", _, $)
    }
    ;
    Oo0o1 = function(_) {
        var A = mini.ValidatorBase[superclass][getAttrs][call](this, _);
        mini[_ParseString](_, A, ["onvaluechanged", "onvalidation", "requiredErrorText", "errorMode"]);
        mini[_ParseBool](_, A, ["validateOnChanged", "validateOnLeave"]);
        var $ = _.getAttribute("required");
        if (!$)
            $ = _.required;
        if ($)
            A.required = $ != "false" ? true : false;
        return A
    }
    ;
    mini = {
		//diy start -- add six properties to diy validate styles
		showNotyAlert: false,
		showFiledsNotyAlert: false,
		isValidatingFields: false,
		notyErrorType: 'information',
		noty: function(text,type){
			mini.alert(text,type || mini.notyErrorType);
		},
		getLabelText: function(A){
			return "";
		},
		//diy end -- 
        components: {},
        uids: {},
        ux: {},
        isReady: false,
        byClass: function(_, $) {
            if (typeof $ == "string")
                $ = ooO0($);
            return jQuery("." + _, $)[0]
        },
        getComponents: function() {
            var _ = [];
            for (var A in mini.components) {
                var $ = mini.components[A];
                _.push($)
            }
            return _
        },
        get: function(_) {
            if (!_)
                return null ;
            if (mini.isControl(_))
                return _;
            if (typeof _ == "string")
                if (_.charAt(0) == "#")
                    _ = _.substr(1);
            if (typeof _ == "string")
                return mini.components[_];
            else {
                var $ = mini.uids[_.uid];
                if ($ && $.el == _)
                    return $
            }
            return null 
        },
        getbyUID: function($) {
            return mini.uids[$]
        },
        findControls: function(E, B) {
            if (!E)
                return [];
            B = B || mini;
            var $ = []
              , D = mini.uids;
            for (var A in D) {
                var _ = D[A]
                  , C = E[call](B, _);
                if (C === true || C === 1) {
                    $.push(_);
                    if (C === 1)
                        break
                }
            }
            return $
        },
        getChildControls: function(B) {
            var A = mini.get(B);
            if (!A)
                return [];
            var _ = B.el ? B.el : B
              , $ = mini.findControls(function($) {
                if (!$.el || B == $)
                    return false;
                if (l1oooo(_, $.el) && $[within])
                    return true;
                return false
            }
            );
            return $
        },
        emptyFn: function() {},
        createNameControls: function(A, F) {
            if (!A || !A.el)
                return;
            if (!F)
                F = "_";
            var C = A.el
              , $ = mini.findControls(function($) {
                if (!$.el || !$.name)
                    return false;
                if (l1oooo(C, $.el))
                    return true;
                return false
            }
            );
            for (var _ = 0, D = $.length; _ < D; _++) {
                var B = $[_]
                  , E = F + B.name;
                if (F === true)
                    E = B.name[0].toUpperCase() + B.name.substring(1, B.name.length);
                A[E] = B
            }
        },
        getbyName: function(C, _) {
            var B = mini.isControl(_)
              , A = _;
            if (_ && B)
                _ = _.el;
            _ = ooO0(_);
            _ = _ || document.body;
            var $ = this.findControls(function($) {
                if (!$.el)
                    return false;
                if ($.name == C && l1oooo(_, $.el))
                    return 1;
                return false
            }
            , this);
            if (B && $.length == 0 && A && A[getbyName])
                return A[getbyName](C);
            return $[0]
        },
        getParams: function(C) {
            if (!C)
                C = location.href;
            C = C.split("?")[1];
            var B = {};
            if (C) {
                var A = C.split("&");
                for (var _ = 0, D = A.length; _ < D; _++) {
                    var $ = A[_].split("=");
                    try {
                        B[$[0]] = decodeURIComponent(unescape($[1]))
                    } catch (E) {}
                }
            }
            return B
        },
        reg: function($) {
            this.components[$.id] = $;
            this.uids[$.uid] = $
        },
        unreg: function($) {
            delete mini.components[$.id];
            delete mini.uids[$.uid]
        },
        classes: {},
        uiClasses: {},
        getClass: function($) {
            if (!$)
                return null ;
            return this.classes[$.toLowerCase()]
        },
        getClassByUICls: function($) {
            return this.uiClasses[$.toLowerCase()]
        },
        idPre: "mini-",
        idIndex: 1,
        newId: function($) {
            return ($ || this.idPre) + this.idIndex++
        },
        copyTo: function($, A) {
            if ($ && A)
                for (var _ in A)
                    $[_] = A[_];
            return $
        },
        copyIf: function($, A) {
            if ($ && A)
                for (var _ in A)
                    if (mini.isNull($[_]))
                        $[_] = A[_];
            return $
        },
        createDelegate: function(_, $) {
            if (!_)
                return function() {}
                ;
            return function() {
                return _.apply($, arguments)
            }
        },
        isControl: function($) {
            return !!($ && $.isControl)
        },
        isElement: function($) {
            return $ && $.appendChild
        },
        isDate: function($) {
            return $ && $.getFullYear
        },
        isArray: function($) {
            return $ && !!$.unshift
        },
        isNull: function($) {
            return $ === null  || $ === undefined
        },
        isNumber: function($) {
            return !isNaN($) && typeof $ == "number"
        },
        isEquals: function($, _) {
            if ($ !== 0 && _ !== 0)
                if ((mini.isNull($) || $ == "") && (mini.isNull(_) || _ == ""))
                    return true;
            if ($ && _ && $.getFullYear && _.getFullYear)
                return $[getTime]() === _[getTime]();
            if (typeof $ == "object" && typeof _ == "object")
                return $ === _;
            return String($) === String(_)
        },
        forEach: function(E, D, B) {
            var _ = E.clone();
            for (var A = 0, C = _.length; A < C; A++) {
                var $ = _[A];
                if (D[call](B, $, A, E) === false)
                    break
            }
        },
        sort: function(A, _, $) {
            $ = $ || A;
            A.sort(_)
        },
        removeNode: function($) {
            jQuery($).remove()
        },
        elWarp: document.createElement("div")
    };
    if (typeof mini_debugger == "undefined")
        mini_debugger = true;
    l00O = function(A, _) {
        _ = _.toLowerCase();
        if (!mini.classes[_]) {
            mini.classes[_] = A;
            A[prototype].type = _
        }
        var $ = A[prototype].uiCls;
        if (!mini.isNull($) && !mini.uiClasses[$])
            mini.uiClasses[$] = A
    }
    ;
    O00lO = function(E, A, $) {
        if (typeof A != "function")
            return this;
        var D = E
          , C = D.prototype
          , _ = A[prototype];
        if (D[superclass] == _)
            return;
        D[superclass] = _;
        D[superclass][constructor] = A;
        for (var B in _)
            C[B] = _[B];
        if ($)
            for (B in $)
                C[B] = $[B];
        return D
    }
    ;
    mini.copyTo(mini, {
        extend: O00lO,
        regClass: l00O,
        debug: false
    });
    mini.namespace = function(A) {
        if (typeof A != "string")
            return;
        A = A.split(".");
        var D = window;
        for (var $ = 0, B = A.length; $ < B; $++) {
            var C = A[$]
              , _ = D[C];
            if (!_)
                _ = D[C] = {};
            D = _
        }
    }
    ;
    Oo00O = [];
    l00l = function(_, $) {
        Oo00O.push([_, $]);
        if (!mini._EventTimer)
            mini._EventTimer = setTimeout(function() {
                ll0O()
            }
            , 50)
    }
    ;
    ll0O = function() {
        for (var $ = 0, _ = Oo00O.length; $ < _; $++) {
            var A = Oo00O[$];
            A[0][call](A[1])
        }
        Oo00O = [];
        mini._EventTimer = null 
    }
    ;
    l01o0 = function(C) {
        if (typeof C != "string")
            return null ;
        var _ = C.split(".")
          , D = null ;
        for (var $ = 0, A = _.length; $ < A; $++) {
            var B = _[$];
            if (!D)
                D = window[B];
            else
                D = D[B];
            if (!D)
                break
        }
        return D
    }
    ;
    mini._getMap = function(name, obj) {
        if (!name)
            return null ;
        if (name[indexOf](".") == -1 && name[indexOf]("[") == -1)
            return obj[name];
        var s = "obj." + name;
        try {
            var v = eval(s)
        } catch (e) {
            return null 
        }
        return v
    }
    ;
    mini._setMap = function(H, A, B) {
        if (!B)
            return;
        if (typeof H != "string")
            return;
        var E = H.split(".");
        function F(A, E, $, B) {
            var C = A[E];
            if (!C)
                C = A[E] = [];
            for (var _ = 0; _ <= $; _++) {
                var D = C[_];
                if (!D)
                    if (B === null  || B === undefined)
                        D = C[_] = {};
                    else
                        D = C[_] = B
            }
            return A[E][$]
        }
        var $ = null ;
        for (var _ = 0, G = E.length; _ <= G - 1; _++) {
            var H = E[_];
            if (_ == G - 1) {
                if (H[indexOf]("]") == -1)
                    B[H] = A;
                else {
                    var C = H.split("[")
                      , D = C[0]
                      , I = parseInt(C[1]);
                    F(B, D, I, "");
                    B[D][I] = A
                }
                break
            }
            if (H[indexOf]("]") == -1) {
                $ = B[H];
                if (_ <= G - 2 && $ == null )
                    B[H] = $ = {};
                B = $
            } else {
                C = H.split("["),
                D = C[0],
                I = parseInt(C[1]);
                B = F(B, D, I)
            }
        }
        return A
    }
    ;
    mini.getAndCreate = function($) {
        if (!$)
            return null ;
        if (typeof $ == "string")
            return mini.components[$];
        if (typeof $ == "object")
            if (mini.isControl($))
                return $;
            else if (mini.isElement($))
                return mini.uids[$.uid];
            else
                return mini.create($);
        return null 
    }
    ;
    mini.create = function($) {
        if (!$)
            return null ;
        if (mini.get($.id) === $)
            return $;
        var _ = this.getClass($.type);
        if (!_)
            return null ;
        var A = new _();
        A[set]($);
        return A
    }
    ;
    var getBottomVisibleColumns = "getBottomVisibleColumns"
      , setFrozenStartColumn = "setFrozenStartColumn"
      , showCollapseButton = "showCollapseButton"
      , showFolderCheckBox = "showFolderCheckBox"
      , setFrozenEndColumn = "setFrozenEndColumn"
      , getAncestorColumns = "getAncestorColumns"
      , getFilterRowHeight = "getFilterRowHeight"
      , checkSelectOnLoad = "checkSelectOnLoad"
      , frozenStartColumn = "frozenStartColumn"
      , allowResizeColumn = "allowResizeColumn"
      , showExpandButtons = "showExpandButtons"
      , requiredErrorText = "requiredErrorText"
      , getMaxColumnLevel = "getMaxColumnLevel"
      , isAncestorColumn = "isAncestorColumn"
      , allowAlternating = "allowAlternating"
      , getBottomColumns = "getBottomColumns"
      , isShowRowDetail = "isShowRowDetail"
      , allowCellSelect = "allowCellSelect"
      , showAllCheckBox = "showAllCheckBox"
      , frozenEndColumn = "frozenEndColumn"
      , allowMoveColumn = "allowMoveColumn"
      , allowSortColumn = "allowSortColumn"
      , refreshOnExpand = "refreshOnExpand"
      , showCloseButton = "showCloseButton"
      , unFrozenColumns = "unFrozenColumns"
      , getParentColumn = "getParentColumn"
      , isVisibleColumn = "isVisibleColumn"
      , getFooterHeight = "getFooterHeight"
      , getHeaderHeight = "getHeaderHeight"
      , _createColumnId = "_createColumnId"
      , getRowDetailEl = "getRowDetailEl"
      , scrollIntoView = "scrollIntoView"
      , setColumnWidth = "setColumnWidth"
      , setCurrentCell = "setCurrentCell"
      , allowRowSelect = "allowRowSelect"
      , showSummaryRow = "showSummaryRow"
      , showVGridLines = "showVGridLines"
      , showHGridLines = "showHGridLines"
      , checkRecursive = "checkRecursive"
      , enableHotTrack = "enableHotTrack"
      , popupMaxHeight = "popupMaxHeight"
      , popupMinHeight = "popupMinHeight"
      , refreshOnClick = "refreshOnClick"
      , getColumnWidth = "getColumnWidth"
      , getEditRowData = "getEditRowData"
      , getParentNode = "getParentNode"
      , removeNodeCls = "removeNodeCls"
      , showRowDetail = "showRowDetail"
      , hideRowDetail = "hideRowDetail"
      , commitEditRow = "commitEditRow"
      , beginEditCell = "beginEditCell"
      , allowCellEdit = "allowCellEdit"
      , decimalPlaces = "decimalPlaces"
      , showFilterRow = "showFilterRow"
      , dropGroupName = "dropGroupName"
      , dragGroupName = "dragGroupName"
      , showTreeLines = "showTreeLines"
      , popupMaxWidth = "popupMaxWidth"
      , popupMinWidth = "popupMinWidth"
      , showMinButton = "showMinButton"
      , showMaxButton = "showMaxButton"
      , getChildNodes = "getChildNodes"
      , getCellEditor = "getCellEditor"
      , cancelEditRow = "cancelEditRow"
      , getRowByValue = "getRowByValue"
      , removeItemCls = "removeItemCls"
      , _createCellId = "_createCellId"
      , _createItemId = "_createItemId"
      , setValueField = "setValueField"
      , _createPopup = "_createPopup"
      , getAncestors = "getAncestors"
      , collapseNode = "collapseNode"
      , removeRowCls = "removeRowCls"
      , getColumnBox = "getColumnBox"
      , showCheckBox = "showCheckBox"
      , autoCollapse = "autoCollapse"
      , showTreeIcon = "showTreeIcon"
      , checkOnClick = "checkOnClick"
      , defaultValue = "defaultValue"
      , resultAsData = "resultAsData"
      , resultAsTree = "resultAsTree"
      , _ParseString = "_ParseString"
      , getItemValue = "getItemValue"
      , _createRowId = "_createRowId"
      , isAutoHeight = "isAutoHeight"
      , findListener = "findListener"
      , getRegionEl = "getRegionEl"
      , removeClass = "removeClass"
      , isFirstNode = "isFirstNode"
      , getSelected = "getSelected"
      , setSelected = "setSelected"
      , multiSelect = "multiSelect"
      , tabPosition = "tabPosition"
      , columnWidth = "columnWidth"
      , handlerSize = "handlerSize"
      , allowSelect = "allowSelect"
      , popupHeight = "popupHeight"
      , contextMenu = "contextMenu"
      , borderStyle = "borderStyle"
      , parentField = "parentField"
      , closeAction = "closeAction"
      , _rowIdField = "_rowIdField"
      , allowResize = "allowResize"
      , showToolbar = "showToolbar"
      , deselectAll = "deselectAll"
      , treeToArray = "treeToArray"
      , eachColumns = "eachColumns"
      , getItemText = "getItemText"
      , isAutoWidth = "isAutoWidth"
      , _initEvents = "_initEvents"
      , constructor = "constructor"
      , addNodeCls = "addNodeCls"
      , expandNode = "expandNode"
      , setColumns = "setColumns"
      , cancelEdit = "cancelEdit"
      , moveColumn = "moveColumn"
      , removeNode = "removeNode"
      , setCurrent = "setCurrent"
      , totalCount = "totalCount"
      , popupWidth = "popupWidth"
      , titleField = "titleField"
      , valueField = "valueField"
      , showShadow = "showShadow"
      , showFooter = "showFooter"
      , findParent = "findParent"
      , _getColumn = "_getColumn"
      , _ParseBool = "_ParseBool"
      , clearEvent = "clearEvent"
      , getCellBox = "getCellBox"
      , selectText = "selectText"
      , setVisible = "setVisible"
      , isGrouping = "isGrouping"
      , addItemCls = "addItemCls"
      , isSelected = "isSelected"
      , isReadOnly = "isReadOnly"
      , superclass = "superclass"
      , getRegion = "getRegion"
      , isEditing = "isEditing"
      , hidePopup = "hidePopup"
      , removeRow = "removeRow"
      , addRowCls = "addRowCls"
      , increment = "increment"
      , allowDrop = "allowDrop"
      , pageIndex = "pageIndex"
      , iconStyle = "iconStyle"
      , errorMode = "errorMode"
      , textField = "textField"
      , groupName = "groupName"
      , showEmpty = "showEmpty"
      , emptyText = "emptyText"
      , showModal = "showModal"
      , getColumn = "getColumn"
      , getHeight = "getHeight"
      , _ParseInt = "_ParseInt"
      , showPopup = "showPopup"
      , updateRow = "updateRow"
      , deselects = "deselects"
      , isDisplay = "isDisplay"
      , setHeight = "setHeight"
      , removeCls = "removeCls"
      , prototype = "prototype"
      , addClass = "addClass"
      , isEquals = "isEquals"
      , maxValue = "maxValue"
      , minValue = "minValue"
      , showBody = "showBody"
      , tabAlign = "tabAlign"
      , sizeList = "sizeList"
      , pageSize = "pageSize"
      , urlField = "urlField"
      , readOnly = "readOnly"
      , getWidth = "getWidth"
      , isFrozen = "isFrozen"
      , loadData = "loadData"
      , deselect = "deselect"
      , setValue = "setValue"
      , validate = "validate"
      , getAttrs = "getAttrs"
      , setWidth = "setWidth"
      , doUpdate = "doUpdate"
      , doLayout = "doLayout"
      , renderTo = "renderTo"
      , setText = "setText"
      , idField = "idField"
      , getNode = "getNode"
      , getItem = "getItem"
      , repaint = "repaint"
      , selects = "selects"
      , setData = "setData"
      , _create = "_create"
      , jsName = "jsName"
      , getRow = "getRow"
      , select = "select"
      , within = "within"
      , addCls = "addCls"
      , render = "render"
      , setXY = "setXY"
      , call = "call"
      , onValidation = "onValidation"
      , onValueChanged = "onValueChanged"
      , getErrorIconEl = "getErrorIconEl"
      , getRequiredErrorText = "getRequiredErrorText"
      , setRequiredErrorText = "setRequiredErrorText"
      , getRequired = "getRequired"
      , setRequired = "setRequired"
      , getErrorText = "getErrorText"
      , setErrorText = "setErrorText"
      , getErrorMode = "getErrorMode"
      , setErrorMode = "setErrorMode"
      , getValidateOnLeave = "getValidateOnLeave"
      , setValidateOnLeave = "setValidateOnLeave"
      , getValidateOnChanged = "getValidateOnChanged"
      , setValidateOnChanged = "setValidateOnChanged"
      , getIsValid = "getIsValid"
      , setIsValid = "setIsValid"
      , isValid = "isValid"
      , _tryValidate = "_tryValidate"
      , doQuery = "doQuery"
      , getSearchField = "getSearchField"
      , setSearchField = "setSearchField"
      , getMinChars = "getMinChars"
      , setMinChars = "setMinChars"
      , setUrl = "setUrl"
      , getRepeatDirection = "getRepeatDirection"
      , setRepeatDirection = "setRepeatDirection"
      , getRepeatLayout = "getRepeatLayout"
      , setRepeatLayout = "setRepeatLayout"
      , getRepeatItems = "getRepeatItems"
      , setRepeatItems = "setRepeatItems"
      , bindForm = "bindForm"
      , bindField = "bindField"
      , __OnNodeMouseDown = "__OnNodeMouseDown"
      , createNavBarTree = "createNavBarTree"
      , getExpandOnLoad = "getExpandOnLoad"
      , setExpandOnLoad = "setExpandOnLoad"
      , _getOwnerTree = "_getOwnerTree"
      , getList = "getList"
      , findNodes = "findNodes"
      , expandPath = "expandPath"
      , selectNode = "selectNode"
      , getParentField = "getParentField"
      , setParentField = "setParentField"
      , getIdField = "getIdField"
      , setIdField = "setIdField"
      , getNodesField = "getNodesField"
      , setNodesField = "setNodesField"
      , getResultAsTree = "getResultAsTree"
      , setResultAsTree = "setResultAsTree"
      , getUrlField = "getUrlField"
      , setUrlField = "setUrlField"
      , getIconField = "getIconField"
      , setIconField = "setIconField"
      , getTextField = "getTextField"
      , setTextField = "setTextField"
      , getUrl = "getUrl"
      , load = "load"
      , loadList = "loadList"
      , _doParseFields = "_doParseFields"
      , destroy = "destroy"
      , set = "set"
      , createNavBarMenu = "createNavBarMenu"
      , _getOwnerMenu = "_getOwnerMenu"
      , blur = "blur"
      , focus = "focus"
      , __doSelectValue = "__doSelectValue"
      , getPopupMaxHeight = "getPopupMaxHeight"
      , setPopupMaxHeight = "setPopupMaxHeight"
      , getPopupMinHeight = "getPopupMinHeight"
      , setPopupMinHeight = "setPopupMinHeight"
      , getPopupHeight = "getPopupHeight"
      , setPopupHeight = "setPopupHeight"
      , getAllowInput = "getAllowInput"
      , setAllowInput = "setAllowInput"
      , getValueField = "getValueField"
      , setName = "setName"
      , getValue = "getValue"
      , getText = "getText"
      , getInputText = "getInputText"
      , removeItem = "removeItem"
      , insertItem = "insertItem"
      , showInput = "showInput"
      , blurItem = "blurItem"
      , hoverItem = "hoverItem"
      , getItemEl = "getItemEl"
      , getTextName = "getTextName"
      , setTextName = "setTextName"
      , getFormattedValue = "getFormattedValue"
      , getFormValue = "getFormValue"
      , getFormat = "getFormat"
      , setFormat = "setFormat"
      , _getButtonHtml = "_getButtonHtml"
      , onPreLoad = "onPreLoad"
      , onLoadError = "onLoadError"
      , onLoad = "onLoad"
      , onBeforeLoad = "onBeforeLoad"
      , onItemMouseDown = "onItemMouseDown"
      , onItemClick = "onItemClick"
      , _OnItemMouseMove = "_OnItemMouseMove"
      , _OnItemMouseOut = "_OnItemMouseOut"
      , _OnItemClick = "_OnItemClick"
      , clearSelect = "clearSelect"
      , selectAll = "selectAll"
      , getSelecteds = "getSelecteds"
      , getMultiSelect = "getMultiSelect"
      , setMultiSelect = "setMultiSelect"
      , moveItem = "moveItem"
      , removeItems = "removeItems"
      , addItem = "addItem"
      , addItems = "addItems"
      , removeAll = "removeAll"
      , findItems = "findItems"
      , getData = "getData"
      , updateItem = "updateItem"
      , getAt = "getAt"
      , indexOf = "indexOf"
      , getCount = "getCount"
      , getFocusedIndex = "getFocusedIndex"
      , getFocusedItem = "getFocusedItem"
      , parseGroups = "parseGroups"
      , expandGroup = "expandGroup"
      , collapseGroup = "collapseGroup"
      , toggleGroup = "toggleGroup"
      , hideGroup = "hideGroup"
      , showGroup = "showGroup"
      , getActiveGroup = "getActiveGroup"
      , getActiveIndex = "getActiveIndex"
      , setActiveIndex = "setActiveIndex"
      , getAutoCollapse = "getAutoCollapse"
      , setAutoCollapse = "setAutoCollapse"
      , getGroupBodyEl = "getGroupBodyEl"
      , getGroupEl = "getGroupEl"
      , getGroup = "getGroup"
      , moveGroup = "moveGroup"
      , removeGroup = "removeGroup"
      , updateGroup = "updateGroup"
      , addGroup = "addGroup"
      , getGroups = "getGroups"
      , setGroups = "setGroups"
      , createGroup = "createGroup"
      , __fileError = "__fileError"
      , __on_upload_complete = "__on_upload_complete"
      , __on_upload_error = "__on_upload_error"
      , __on_upload_success = "__on_upload_success"
      , __on_file_queued = "__on_file_queued"
      , startUpload = "startUpload"
      , setUploadUrl = "setUploadUrl"
      , setFlashUrl = "setFlashUrl"
      , setQueueLimit = "setQueueLimit"
      , setUploadLimit = "setUploadLimit"
      , getButtonText = "getButtonText"
      , setButtonText = "setButtonText"
      , getTypesDescription = "getTypesDescription"
      , setTypesDescription = "setTypesDescription"
      , getLimitType = "getLimitType"
      , setLimitType = "setLimitType"
      , getPostParam = "getPostParam"
      , setPostParam = "setPostParam"
      , addPostParam = "addPostParam"
      , setDataField = "setDataField"
      , getValueFromSelect = "getValueFromSelect"
      , setValueFromSelect = "setValueFromSelect"
      , getAutoCheckParent = "getAutoCheckParent"
      , setAutoCheckParent = "setAutoCheckParent"
      , getShowFolderCheckBox = "getShowFolderCheckBox"
      , setShowFolderCheckBox = "setShowFolderCheckBox"
      , getShowTreeLines = "getShowTreeLines"
      , setShowTreeLines = "setShowTreeLines"
      , getShowTreeIcon = "getShowTreeIcon"
      , setShowTreeIcon = "setShowTreeIcon"
      , getCheckRecursive = "getCheckRecursive"
      , setCheckRecursive = "setCheckRecursive"
      , getSelectedNodes = "getSelectedNodes"
      , getCheckedNodes = "getCheckedNodes"
      , getSelectedNode = "getSelectedNode"
      , getMinDate = "getMinDate"
      , setMinDate = "setMinDate"
      , getMaxDate = "getMaxDate"
      , setMaxDate = "setMaxDate"
      , getShowOkButton = "getShowOkButton"
      , setShowOkButton = "setShowOkButton"
      , getShowClearButton = "getShowClearButton"
      , setShowClearButton = "setShowClearButton"
      , getShowTodayButton = "getShowTodayButton"
      , setShowTodayButton = "setShowTodayButton"
      , getTimeFormat = "getTimeFormat"
      , setTimeFormat = "setTimeFormat"
      , getShowTime = "getShowTime"
      , setShowTime = "setShowTime"
      , getViewDate = "getViewDate"
      , setViewDate = "setViewDate"
      , _getCalendar = "_getCalendar"
      , setInputStyle = "setInputStyle"
      , getShowClose = "getShowClose"
      , setShowClose = "setShowClose"
      , getSelectOnFocus = "getSelectOnFocus"
      , setSelectOnFocus = "setSelectOnFocus"
      , onTextChanged = "onTextChanged"
      , onButtonMouseDown = "onButtonMouseDown"
      , onButtonClick = "onButtonClick"
      , __fireBlur = "__fireBlur"
      , getInputAsValue = "getInputAsValue"
      , setInputAsValue = "setInputAsValue"
      , setEnabled = "setEnabled"
      , getMinLength = "getMinLength"
      , setMinLength = "setMinLength"
      , getMaxLength = "getMaxLength"
      , setMaxLength = "setMaxLength"
      , getEmptyText = "getEmptyText"
      , setEmptyText = "setEmptyText"
      , getTextEl = "getTextEl"
      , _doInputLayout = "_doInputLayout"
      , _getButtonsHTML = "_getButtonsHTML"
      , setMenu = "setMenu"
      , getPopupMinWidth = "getPopupMinWidth"
      , getPopupMaxWidth = "getPopupMaxWidth"
      , getPopupWidth = "getPopupWidth"
      , setPopupMinWidth = "setPopupMinWidth"
      , setPopupMaxWidth = "setPopupMaxWidth"
      , setPopupWidth = "setPopupWidth"
      , isShowPopup = "isShowPopup"
      , _syncShowPopup = "_syncShowPopup"
      , getPopup = "getPopup"
      , setPopup = "setPopup"
      , getId = "getId"
      , setId = "setId"
      , un = "un"
      , on = "on"
      , fire = "fire"
      , getAllowResize = "getAllowResize"
      , setAllowResize = "setAllowResize"
      , getAllowMoveColumn = "getAllowMoveColumn"
      , setAllowMoveColumn = "setAllowMoveColumn"
      , getAllowResizeColumn = "getAllowResizeColumn"
      , setAllowResizeColumn = "setAllowResizeColumn"
      , getTreeColumn = "getTreeColumn"
      , setTreeColumn = "setTreeColumn"
      , _doLayoutTopRightCell = "_doLayoutTopRightCell"
      , getScrollLeft = "getScrollLeft"
      , _getHeaderScrollEl = "_getHeaderScrollEl"
      , onCellBeginEdit = "onCellBeginEdit"
      , onDrawCell = "onDrawCell"
      , onCellContextMenu = "onCellContextMenu"
      , onCellMouseDown = "onCellMouseDown"
      , onCellClick = "onCellClick"
      , onRowContextMenu = "onRowContextMenu"
      , onRowMouseDown = "onRowMouseDown"
      , onRowClick = "onRowClick"
      , onRowDblClick = "onRowDblClick"
      , _doShowColumnsMenu = "_doShowColumnsMenu"
      , createColumnsMenu = "createColumnsMenu"
      , getHeaderContextMenu = "getHeaderContextMenu"
      , setHeaderContextMenu = "setHeaderContextMenu"
      , _OnHeaderCellClick = "_OnHeaderCellClick"
      , _OnRowMouseMove = "_OnRowMouseMove"
      , _OnRowMouseOut = "_OnRowMouseOut"
      , _OnCellMouseDown = "_OnCellMouseDown"
      , _OnDrawGroupSummaryCell = "_OnDrawGroupSummaryCell"
      , _OnDrawSummaryCell = "_OnDrawSummaryCell"
      , _tryFocus = "_tryFocus"
      , getCurrent = "getCurrent"
      , _getSelectAllCheckState = "_getSelectAllCheckState"
      , getAllowRowSelect = "getAllowRowSelect"
      , setAllowRowSelect = "setAllowRowSelect"
      , getAllowUnselect = "getAllowUnselect"
      , setAllowUnselect = "setAllowUnselect"
      , _doMargeCells = "_doMargeCells"
      , _isCellVisible = "_isCellVisible"
      , margeCells = "margeCells"
      , mergeCells = "mergeCells"
      , mergeColumns = "mergeColumns"
      , onDrawGroupSummary = "onDrawGroupSummary"
      , onDrawGroupHeader = "onDrawGroupHeader"
      , getGroupDir = "getGroupDir"
      , getGroupField = "getGroupField"
      , clearGroup = "clearGroup"
      , groupBy = "groupBy"
      , expandGroups = "expandGroups"
      , collapseGroups = "collapseGroups"
      , getShowGroupSummary = "getShowGroupSummary"
      , setShowGroupSummary = "setShowGroupSummary"
      , getCollapseGroupOnLoad = "getCollapseGroupOnLoad"
      , setCollapseGroupOnLoad = "setCollapseGroupOnLoad"
      , findRow = "findRow"
      , findRows = "findRows"
      , getRowByUID = "getRowByUID"
      , getRowById = "getRowById"
      , clearRows = "clearRows"
      , moveDown = "moveDown"
      , moveUp = "moveUp"
      , moveRow = "moveRow"
      , addRow = "addRow"
      , addRows = "addRows"
      , removeSelected = "removeSelected"
      , removeRows = "removeRows"
      , deleteRow = "deleteRow"
      , deleteRows = "deleteRows"
      , _updateRowEl = "_updateRowEl"
      , isChanged = "isChanged"
      , getChanges = "getChanges"
      , getEditData = "getEditData"
      , getEditingRow = "getEditingRow"
      , getEditingRows = "getEditingRows"
      , isNewRow = "isNewRow"
      , isEditingRow = "isEditingRow"
      , beginEditRow = "beginEditRow"
      , getEditorOwnerRow = "getEditorOwnerRow"
      , _beginEditNextCell = "_beginEditNextCell"
      , commitEdit = "commitEdit"
      , isEditingCell = "isEditingCell"
      , getAllowCellEdit = "getAllowCellEdit"
      , setAllowCellEdit = "setAllowCellEdit"
      , getAllowCellSelect = "getAllowCellSelect"
      , setAllowCellSelect = "setAllowCellSelect"
      , getCurrentCell = "getCurrentCell"
      , _getSortFnByField = "_getSortFnByField"
      , clearSort = "clearSort"
      , sortBy = "sortBy"
      , gotoPage = "gotoPage"
      , reload = "reload"
      , getResultObject = "getResultObject"
      , getCheckSelectOnLoad = "getCheckSelectOnLoad"
      , setCheckSelectOnLoad = "setCheckSelectOnLoad"
      , getTotalPage = "getTotalPage"
      , getTotalCount = "getTotalCount"
      , setTotalCount = "setTotalCount"
      , getSortOrder = "getSortOrder"
      , getSortField = "getSortField"
      , getDataField = "getDataField"
      , getTotalField = "getTotalField"
      , setTotalField = "setTotalField"
      , getSortOrderField = "getSortOrderField"
      , setSortOrderField = "setSortOrderField"
      , getSortFieldField = "getSortFieldField"
      , setSortFieldField = "setSortFieldField"
      , getPageSizeField = "getPageSizeField"
      , setPageSizeField = "setPageSizeField"
      , getPageIndexField = "getPageIndexField"
      , setPageIndexField = "setPageIndexField"
      , getShowTotalCount = "getShowTotalCount"
      , setShowTotalCount = "setShowTotalCount"
      , getShowPageIndex = "getShowPageIndex"
      , setShowPageIndex = "setShowPageIndex"
      , getShowPageSize = "getShowPageSize"
      , setShowPageSize = "setShowPageSize"
      , getPageIndex = "getPageIndex"
      , setPageIndex = "setPageIndex"
      , getPageSize = "getPageSize"
      , setPageSize = "setPageSize"
      , getSizeList = "getSizeList"
      , setSizeList = "setSizeList"
      , getShowPageInfo = "getShowPageInfo"
      , setShowPageInfo = "setShowPageInfo"
      , getShowReloadButton = "getShowReloadButton"
      , setShowReloadButton = "setShowReloadButton"
      , getRowDetailCellEl = "getRowDetailCellEl"
      , toggleRowDetail = "toggleRowDetail"
      , hideAllRowDetail = "hideAllRowDetail"
      , showAllRowDetail = "showAllRowDetail"
      , getAllowCellValid = "getAllowCellValid"
      , setAllowCellValid = "setAllowCellValid"
      , getCellEditAction = "getCellEditAction"
      , setCellEditAction = "setCellEditAction"
      , getShowNewRow = "getShowNewRow"
      , setShowNewRow = "setShowNewRow"
      , getShowModified = "getShowModified"
      , setShowModified = "setShowModified"
      , getShowEmptyText = "getShowEmptyText"
      , setShowEmptyText = "setShowEmptyText"
      , getSelectOnLoad = "getSelectOnLoad"
      , setSelectOnLoad = "setSelectOnLoad"
      , getAllowSortColumn = "getAllowSortColumn"
      , setAllowSortColumn = "setAllowSortColumn"
      , getSortMode = "getSortMode"
      , setSortMode = "setSortMode"
      , setAutoHideRowDetail = "setAutoHideRowDetail"
      , getShowFooter = "getShowFooter"
      , setShowFooter = "setShowFooter"
      , getShowPager = "getShowPager"
      , setShowPager = "setShowPager"
      , setShowHeader = "setShowHeader"
      , getFooterCls = "getFooterCls"
      , setFooterCls = "setFooterCls"
      , getFooterStyle = "getFooterStyle"
      , setFooterStyle = "setFooterStyle"
      , getBodyCls = "getBodyCls"
      , setBodyCls = "setBodyCls"
      , getBodyStyle = "getBodyStyle"
      , setBodyStyle = "setBodyStyle"
      , getScrollTop = "getScrollTop"
      , setScrollTop = "setScrollTop"
      , getVirtualScroll = "getVirtualScroll"
      , setVirtualScroll = "setVirtualScroll"
      , getEditOnTabKey = "getEditOnTabKey"
      , setEditOnTabKey = "setEditOnTabKey"
      , getEditNextOnEnterKey = "getEditNextOnEnterKey"
      , setEditNextOnEnterKey = "setEditNextOnEnterKey"
      , getShowColumnsMenu = "getShowColumnsMenu"
      , setShowColumnsMenu = "setShowColumnsMenu"
      , getAllowHeaderWrap = "getAllowHeaderWrap"
      , setAllowHeaderWrap = "setAllowHeaderWrap"
      , getAllowCellWrap = "getAllowCellWrap"
      , setAllowCellWrap = "setAllowCellWrap"
      , setShowLoading = "setShowLoading"
      , getEnableHotTrack = "getEnableHotTrack"
      , setEnableHotTrack = "setEnableHotTrack"
      , getAllowAlternating = "getAllowAlternating"
      , setAllowAlternating = "setAllowAlternating"
      , getShowSummaryRow = "getShowSummaryRow"
      , setShowSummaryRow = "setShowSummaryRow"
      , getShowFilterRow = "getShowFilterRow"
      , setShowFilterRow = "setShowFilterRow"
      , getShowVGridLines = "getShowVGridLines"
      , setShowVGridLines = "setShowVGridLines"
      , getShowHGridLines = "getShowHGridLines"
      , setShowHGridLines = "setShowHGridLines"
      , _doGridLines = "_doGridLines"
      , _doScrollFrozen = "_doScrollFrozen"
      , _tryUpdateScroll = "_tryUpdateScroll"
      , _canVirtualUpdate = "_canVirtualUpdate"
      , _getViewNowRegion = "_getViewNowRegion"
      , _markRegion = "_markRegion"
      , frozenColumns = "frozenColumns"
      , getFrozenEndColumn = "getFrozenEndColumn"
      , getFrozenStartColumn = "getFrozenStartColumn"
      , _deferFrozen = "_deferFrozen"
      , __doFrozen = "__doFrozen"
      , getRowsBox = "getRowsBox"
      , getRowBox = "getRowBox"
      , getSummaryCellEl = "getSummaryCellEl"
      , getFilterCellEl = "getFilterCellEl"
      , isFitColumns = "isFitColumns"
      , getFitColumns = "getFitColumns"
      , setFitColumns = "setFitColumns"
      , _doInnerLayout = "_doInnerLayout"
      , isVirtualScroll = "isVirtualScroll"
      , _doUpdateBody = "_doUpdateBody"
      , _createHeaderText = "_createHeaderText"
      , getSummaryRowHeight = "getSummaryRowHeight"
      , selectRange = "selectRange"
      , getRange = "getRange"
      , toArray = "toArray"
      , acceptRecord = "acceptRecord"
      , accept = "accept"
      , getAutoLoad = "getAutoLoad"
      , setAutoLoad = "setAutoLoad"
      , bindPager = "bindPager"
      , setPager = "setPager"
      , _doShowRows = "_doShowRows"
      , onCheckedChanged = "onCheckedChanged"
      , onClick = "onClick"
      , getTopMenu = "getTopMenu"
      , hide = "hide"
      , hideMenu = "hideMenu"
      , showMenu = "showMenu"
      , getMenu = "getMenu"
      , setChildren = "setChildren"
      , getGroupName = "getGroupName"
      , setGroupName = "setGroupName"
      , getChecked = "getChecked"
      , setChecked = "setChecked"
      , getCheckOnClick = "getCheckOnClick"
      , setCheckOnClick = "setCheckOnClick"
      , getIconPosition = "getIconPosition"
      , setIconPosition = "setIconPosition"
      , getIconStyle = "getIconStyle"
      , setIconStyle = "setIconStyle"
      , getIconCls = "getIconCls"
      , setIconCls = "setIconCls"
      , _doUpdateIcon = "_doUpdateIcon"
      , getHandlerSize = "getHandlerSize"
      , setHandlerSize = "setHandlerSize"
      , hidePane = "hidePane"
      , showPane = "showPane"
      , togglePane = "togglePane"
      , collapsePane = "collapsePane"
      , expandPane = "expandPane"
      , getVertical = "getVertical"
      , setVertical = "setVertical"
      , getShowHandleButton = "getShowHandleButton"
      , setShowHandleButton = "setShowHandleButton"
      , updatePane = "updatePane"
      , getPaneEl = "getPaneEl"
      , setPaneControls = "setPaneControls"
      , setPanes = "setPanes"
      , getPane = "getPane"
      , getPaneBox = "getPaneBox"
      , updateMenu = "updateMenu"
      , getColumns = "getColumns"
      , getRows = "getRows"
      , setRows = "setRows"
      , isSelectedDate = "isSelectedDate"
      , getTime = "getTime"
      , setTime = "setTime"
      , getSelectedDate = "getSelectedDate"
      , setSelectedDates = "setSelectedDates"
      , setSelectedDate = "setSelectedDate"
      , getShowYearButtons = "getShowYearButtons"
      , setShowYearButtons = "setShowYearButtons"
      , getShowMonthButtons = "getShowMonthButtons"
      , setShowMonthButtons = "setShowMonthButtons"
      , getShowDaysHeader = "getShowDaysHeader"
      , setShowDaysHeader = "setShowDaysHeader"
      , getShowWeekNumber = "getShowWeekNumber"
      , setShowWeekNumber = "setShowWeekNumber"
      , getShowHeader = "getShowHeader"
      , getDateEl = "getDateEl"
      , getShortWeek = "getShortWeek"
      , getFirstDateOfMonth = "getFirstDateOfMonth"
      , isWeekend = "isWeekend"
      , __OnItemDrawCell = "__OnItemDrawCell"
      , getNullItemText = "getNullItemText"
      , setNullItemText = "setNullItemText"
      , getShowNullItem = "getShowNullItem"
      , setShowNullItem = "setShowNullItem"
      , setDisplayField = "setDisplayField"
      , getFalseValue = "getFalseValue"
      , setFalseValue = "setFalseValue"
      , getTrueValue = "getTrueValue"
      , setTrueValue = "setTrueValue"
      , clearData = "clearData"
      , addLink = "addLink"
      , add = "add"
      , getAllowLimitValue = "getAllowLimitValue"
      , setAllowLimitValue = "setAllowLimitValue"
      , getChangeOnMousewheel = "getChangeOnMousewheel"
      , setChangeOnMousewheel = "setChangeOnMousewheel"
      , getDecimalPlaces = "getDecimalPlaces"
      , setDecimalPlaces = "setDecimalPlaces"
      , getIncrement = "getIncrement"
      , setIncrement = "setIncrement"
      , getMinValue = "getMinValue"
      , setMinValue = "setMinValue"
      , getMaxValue = "getMaxValue"
      , setMaxValue = "setMaxValue"
      , getShowColumns = "getShowColumns"
      , setShowColumns = "setShowColumns"
      , getShowAllCheckBox = "getShowAllCheckBox"
      , setShowAllCheckBox = "setShowAllCheckBox"
      , getShowCheckBox = "getShowCheckBox"
      , setShowCheckBox = "setShowCheckBox"
      , getRangeErrorText = "getRangeErrorText"
      , setRangeErrorText = "setRangeErrorText"
      , getRangeCharErrorText = "getRangeCharErrorText"
      , setRangeCharErrorText = "setRangeCharErrorText"
      , getRangeLengthErrorText = "getRangeLengthErrorText"
      , setRangeLengthErrorText = "setRangeLengthErrorText"
      , getMinErrorText = "getMinErrorText"
      , setMinErrorText = "setMinErrorText"
      , getMaxErrorText = "getMaxErrorText"
      , setMaxErrorText = "setMaxErrorText"
      , getMinLengthErrorText = "getMinLengthErrorText"
      , setMinLengthErrorText = "setMinLengthErrorText"
      , getMaxLengthErrorText = "getMaxLengthErrorText"
      , setMaxLengthErrorText = "setMaxLengthErrorText"
      , getDateErrorText = "getDateErrorText"
      , setDateErrorText = "setDateErrorText"
      , getIntErrorText = "getIntErrorText"
      , setIntErrorText = "setIntErrorText"
      , getFloatErrorText = "getFloatErrorText"
      , setFloatErrorText = "setFloatErrorText"
      , getUrlErrorText = "getUrlErrorText"
      , setUrlErrorText = "setUrlErrorText"
      , getEmailErrorText = "getEmailErrorText"
      , setEmailErrorText = "setEmailErrorText"
      , getVtype = "getVtype"
      , setVtype = "setVtype"
      , setReadOnly = "setReadOnly"
      , getDefaultValue = "getDefaultValue"
      , setDefaultValue = "setDefaultValue"
      , getContextMenu = "getContextMenu"
      , setContextMenu = "setContextMenu"
      , getLoadingMsg = "getLoadingMsg"
      , setLoadingMsg = "setLoadingMsg"
      , loading = "loading"
      , unmask = "unmask"
      , mask = "mask"
      , getAllowAnim = "getAllowAnim"
      , setAllowAnim = "setAllowAnim"
      , _destroyChildren = "_destroyChildren"
      , layoutChanged = "layoutChanged"
      , canLayout = "canLayout"
      , endUpdate = "endUpdate"
      , beginUpdate = "beginUpdate"
      , show = "show"
      , getVisible = "getVisible"
      , disable = "disable"
      , enable = "enable"
      , getEnabled = "getEnabled"
      , getParent = "getParent"
      , getReadOnly = "getReadOnly"
      , getCls = "getCls"
      , setCls = "setCls"
      , getStyle = "getStyle"
      , setStyle = "setStyle"
      , getBorderStyle = "getBorderStyle"
      , setBorderStyle = "setBorderStyle"
      , getBox = "getBox"
      , _sizeChaned = "_sizeChaned"
      , getTooltip = "getTooltip"
      , setTooltip = "setTooltip"
      , getJsName = "getJsName"
      , setJsName = "setJsName"
      , getEl = "getEl"
      , isRender = "isRender"
      , isFixedSize = "isFixedSize"
      , getName = "getName"
      , isVisibleRegion = "isVisibleRegion"
      , isExpandRegion = "isExpandRegion"
      , hideRegion = "hideRegion"
      , showRegion = "showRegion"
      , toggleRegion = "toggleRegion"
      , collapseRegion = "collapseRegion"
      , expandRegion = "expandRegion"
      , updateRegion = "updateRegion"
      , moveRegion = "moveRegion"
      , removeRegion = "removeRegion"
      , addRegion = "addRegion"
      , setRegions = "setRegions"
      , setRegionControls = "setRegionControls"
      , getRegionBox = "getRegionBox"
      , getRegionProxyEl = "getRegionProxyEl"
      , getRegionSplitEl = "getRegionSplitEl"
      , getRegionBodyEl = "getRegionBodyEl"
      , getRegionHeaderEl = "getRegionHeaderEl"
      , showAtEl = "showAtEl"
      , showAtPos = "showAtPos"
      , restore = "restore"
      , max = "max"
      , getShowMinButton = "getShowMinButton"
      , setShowMinButton = "setShowMinButton"
      , getShowMaxButton = "getShowMaxButton"
      , setShowMaxButton = "setShowMaxButton"
      , getAllowDrag = "getAllowDrag"
      , setAllowDrag = "setAllowDrag"
      , getMaxHeight = "getMaxHeight"
      , setMaxHeight = "setMaxHeight"
      , getMaxWidth = "getMaxWidth"
      , setMaxWidth = "setMaxWidth"
      , getMinHeight = "getMinHeight"
      , setMinHeight = "setMinHeight"
      , getMinWidth = "getMinWidth"
      , setMinWidth = "setMinWidth"
      , getShowModal = "getShowModal"
      , setShowModal = "setShowModal"
      , getParentBox = "getParentBox"
      , __OnShowPopup = "__OnShowPopup"
      , __OnGridRowClickChanged = "__OnGridRowClickChanged"
      , getGrid = "getGrid"
      , setGrid = "setGrid"
      , doClick = "doClick"
      , getPlain = "getPlain"
      , setPlain = "setPlain"
      , getTarget = "getTarget"
      , setTarget = "setTarget"
      , getHref = "getHref"
      , setHref = "setHref"
      , onPageChanged = "onPageChanged"
      , update = "update"
      , expand = "expand"
      , collapse = "collapse"
      , toggle = "toggle"
      , setExpanded = "setExpanded"
      , getMaskOnLoad = "getMaskOnLoad"
      , setMaskOnLoad = "setMaskOnLoad"
      , getRefreshOnExpand = "getRefreshOnExpand"
      , setRefreshOnExpand = "setRefreshOnExpand"
      , getIFrameEl = "getIFrameEl"
      , getFooterEl = "getFooterEl"
      , getBodyEl = "getBodyEl"
      , getToolbarEl = "getToolbarEl"
      , getHeaderEl = "getHeaderEl"
      , setFooter = "setFooter"
      , setToolbar = "setToolbar"
      , set_bodyParent = "set_bodyParent"
      , setBody = "setBody"
      , getButton = "getButton"
      , removeButton = "removeButton"
      , updateButton = "updateButton"
      , addButton = "addButton"
      , createButton = "createButton"
      , getShowToolbar = "getShowToolbar"
      , setShowToolbar = "setShowToolbar"
      , getShowCollapseButton = "getShowCollapseButton"
      , setShowCollapseButton = "setShowCollapseButton"
      , getCloseAction = "getCloseAction"
      , setCloseAction = "setCloseAction"
      , getShowCloseButton = "getShowCloseButton"
      , setShowCloseButton = "setShowCloseButton"
      , _doTools = "_doTools"
      , getTitle = "getTitle"
      , setTitle = "setTitle"
      , _doTitle = "_doTitle"
      , getToolbarCls = "getToolbarCls"
      , setToolbarCls = "setToolbarCls"
      , getHeaderCls = "getHeaderCls"
      , setHeaderCls = "setHeaderCls"
      , getToolbarStyle = "getToolbarStyle"
      , setToolbarStyle = "setToolbarStyle"
      , getHeaderStyle = "getHeaderStyle"
      , setHeaderStyle = "setHeaderStyle"
      , getToolbarHeight = "getToolbarHeight"
      , getBodyHeight = "getBodyHeight"
      , getViewportHeight = "getViewportHeight"
      , getViewportWidth = "getViewportWidth"
      , _stopLayout = "_stopLayout"
      , deferLayout = "deferLayout"
      , _doVisibleEls = "_doVisibleEls"
      , isAllowDrag = "isAllowDrag"
      , getDropGroupName = "getDropGroupName"
      , setDropGroupName = "setDropGroupName"
      , getDragGroupName = "getDragGroupName"
      , setDragGroupName = "setDragGroupName"
      , getAllowDrop = "getAllowDrop"
      , setAllowDrop = "setAllowDrop"
      , getAllowLeafDropIn = "getAllowLeafDropIn"
      , setAllowLeafDropIn = "setAllowLeafDropIn"
      , _getDragText = "_getDragText"
      , _getDragData = "_getDragData"
      , onDataLoad = "onDataLoad"
      , onCollapse = "onCollapse"
      , onBeforeCollapse = "onBeforeCollapse"
      , onExpand = "onExpand"
      , onBeforeExpand = "onBeforeExpand"
      , onNodeMouseDown = "onNodeMouseDown"
      , onCheckNode = "onCheckNode"
      , onBeforeNodeCheck = "onBeforeNodeCheck"
      , onNodeSelect = "onNodeSelect"
      , onBeforeNodeSelect = "onBeforeNodeSelect"
      , onNodeClick = "onNodeClick"
      , blurNode = "blurNode"
      , focusNode = "focusNode"
      , _OnNodeMouseMove = "_OnNodeMouseMove"
      , _OnNodeMouseOut = "_OnNodeMouseOut"
      , _OnNodeClick = "_OnNodeClick"
      , _OnNodeMouseDown = "_OnNodeMouseDown"
      , getAutoEscape = "getAutoEscape"
      , setAutoEscape = "setAutoEscape"
      , getLoadOnExpand = "getLoadOnExpand"
      , setLoadOnExpand = "setLoadOnExpand"
      , getRemoveOnCollapse = "getRemoveOnCollapse"
      , setRemoveOnCollapse = "setRemoveOnCollapse"
      , getExpandOnNodeClick = "getExpandOnNodeClick"
      , setExpandOnNodeClick = "setExpandOnNodeClick"
      , getExpandOnDblClick = "getExpandOnDblClick"
      , setExpandOnDblClick = "setExpandOnDblClick"
      , getFolderIcon = "getFolderIcon"
      , setFolderIcon = "setFolderIcon"
      , getLeafIcon = "getLeafIcon"
      , setLeafIcon = "setLeafIcon"
      , getShowArrow = "getShowArrow"
      , setShowArrow = "setShowArrow"
      , getNodesByValue = "getNodesByValue"
      , uncheckAllNodes = "uncheckAllNodes"
      , checkAllNodes = "checkAllNodes"
      , uncheckNodes = "uncheckNodes"
      , checkNodes = "checkNodes"
      , uncheckNode = "uncheckNode"
      , checkNode = "checkNode"
      , _doCheckNode = "_doCheckNode"
      , _doCheckLoadNodes = "_doCheckLoadNodes"
      , hasCheckedChildNode = "hasCheckedChildNode"
      , doUpdateCheckedState = "doUpdateCheckedState"
      , collapsePath = "collapsePath"
      , collapseAll = "collapseAll"
      , expandAll = "expandAll"
      , collapseLevel = "collapseLevel"
      , expandLevel = "expandLevel"
      , toggleNode = "toggleNode"
      , disableNode = "disableNode"
      , enableNode = "enableNode"
      , showNode = "showNode"
      , hideNode = "hideNode"
      , _getNodeEl = "_getNodeEl"
      , getNodeBox = "getNodeBox"
      , _getNodeByEvent = "_getNodeByEvent"
      , beginEdit = "beginEdit"
      , isEditingNode = "isEditingNode"
      , moveNode = "moveNode"
      , moveNodes = "moveNodes"
      , addNode = "addNode"
      , addNodes = "addNodes"
      , updateNode = "updateNode"
      , setNodeIconCls = "setNodeIconCls"
      , setNodeText = "setNodeText"
      , removeNodes = "removeNodes"
      , eachChild = "eachChild"
      , cascadeChild = "cascadeChild"
      , bubbleParent = "bubbleParent"
      , isInLastNode = "isInLastNode"
      , isLastNode = "isLastNode"
      , isEnabledNode = "isEnabledNode"
      , isVisibleNode = "isVisibleNode"
      , isCheckedNode = "isCheckedNode"
      , isExpandedNode = "isExpandedNode"
      , getLevel = "getLevel"
      , isLeaf = "isLeaf"
      , hasChildren = "hasChildren"
      , indexOfChildren = "indexOfChildren"
      , getAllChildNodes = "getAllChildNodes"
      , _getViewChildNodes = "_getViewChildNodes"
      , _isInViewLastNode = "_isInViewLastNode"
      , _isViewLastNode = "_isViewLastNode"
      , _isViewFirstNode = "_isViewFirstNode"
      , getRootNode = "getRootNode"
      , isAncestor = "isAncestor"
      , getNodeIcon = "getNodeIcon"
      , getShowExpandButtons = "getShowExpandButtons"
      , setShowExpandButtons = "setShowExpandButtons"
      , getAllowSelect = "getAllowSelect"
      , setAllowSelect = "setAllowSelect"
      , clearFilter = "clearFilter"
      , filter = "filter"
      , getAjaxOption = "getAjaxOption"
      , setAjaxOption = "setAjaxOption"
      , loadNode = "loadNode"
      , _clearTree = "_clearTree"
      , parseItems = "parseItems"
      , _startScrollMove = "_startScrollMove"
      , __OnBottomMouseDown = "__OnBottomMouseDown"
      , __OnTopMouseDown = "__OnTopMouseDown"
      , onItemSelect = "onItemSelect"
      , _OnItemSelect = "_OnItemSelect"
      , getHideOnClick = "getHideOnClick"
      , setHideOnClick = "setHideOnClick"
      , getShowNavArrow = "getShowNavArrow"
      , setShowNavArrow = "setShowNavArrow"
      , getSelectedItem = "getSelectedItem"
      , setSelectedItem = "setSelectedItem"
      , getAllowSelectItem = "getAllowSelectItem"
      , setAllowSelectItem = "setAllowSelectItem"
      , getGroupItems = "getGroupItems"
      , removeItemAt = "removeItemAt"
      , getItems = "getItems"
      , setItems = "setItems"
      , hasShowItemMenu = "hasShowItemMenu"
      , showItemMenu = "showItemMenu"
      , hideItems = "hideItems"
      , isVertical = "isVertical"
      , getbyName = "getbyName"
      , onActiveChanged = "onActiveChanged"
      , onCloseClick = "onCloseClick"
      , onBeforeCloseClick = "onBeforeCloseClick"
      , getTabByEvent = "getTabByEvent"
      , getShowBody = "getShowBody"
      , setShowBody = "setShowBody"
      , getActiveTab = "getActiveTab"
      , activeTab = "activeTab"
      , getTabIFrameEl = "getTabIFrameEl"
      , getTabBodyEl = "getTabBodyEl"
      , getTabEl = "getTabEl"
      , getTab = "getTab"
      , setTabPosition = "setTabPosition"
      , setTabAlign = "setTabAlign"
      , _handleIFrameOverflow = "_handleIFrameOverflow"
      , getTabRows = "getTabRows"
      , reloadTab = "reloadTab"
      , loadTab = "loadTab"
      , _cancelLoadTabs = "_cancelLoadTabs"
      , updateTab = "updateTab"
      , moveTab = "moveTab"
      , removeTab = "removeTab"
      , addTab = "addTab"
      , getTabs = "getTabs"
      , setTabs = "setTabs"
      , setTabControls = "setTabControls"
      , getTitleField = "getTitleField"
      , setTitleField = "setTitleField"
      , getNameField = "getNameField"
      , setNameField = "setNameField"
      , createTab = "createTab";
    mini.Component = function() {
        this.lloloO = {};
        this.uid = mini.newId(this.l1l0l);
        this._id = this.uid;
        if (!this.id)
            this.id = this.uid;
        mini.reg(this)
    }
    ;
    mini.Component[prototype] = {
        isControl: true,
        id: null ,
        l1l0l: "mini-",
        l0OOO: false,
        Ol0o: true
    };
    oO0l1 = mini.Component[prototype];
    oO0l1[destroy] = O0l0O;
    oO0l1[getId] = lOloO;
    oO0l1[setId] = Ooo1O;
    oO0l1[findListener] = oOllo;
    oO0l1[un] = o0lo1;
    oO0l1[on] = o1110;
    oO0l1[fire] = O011;
    oO0l1[set] = OO10l1;
    mini.Control = function() {
        mini.Control[superclass][constructor][call](this);
        this[_create]();
        this.el.uid = this.uid;
        this[_initEvents]();
        if (this._clearBorder) {
            this.el.style.borderWidth = "0";
            this.el.style.padding = "0px"
        }
        this[addCls](this.uiCls);
        this[setWidth](this.width);
        this[setHeight](this.height);
        this.el.style.display = this.visible ? this.oOo11l : "none"
    }
    ;
    O00lO(mini.Control, mini.Component, {
        jsName: null ,
        width: "",
        height: "",
        visible: true,
        readOnly: false,
        enabled: true,
        tooltip: "",
        O1O1O0: "mini-readonly",
        Oollo0: "mini-disabled",
        name: "",
        _clearBorder: true,
        oOo11l: "",
        O1l1O1: true,
        allowAnim: true,
        oo10O: "mini-mask-loading",
        loadingMsg: "Loading...",
        contextMenu: null ,
        dataField: ""
    });
    o11lo = mini.Control[prototype];
    o11lo[getAttrs] = OoO00l;
    o11lo[getDataField] = Ool1o;
    o11lo[setDataField] = OoO1l;
    o11lo.oO01lO = ll1O0l;
    o11lo[getValue] = Ol00l;
    o11lo[setValue] = loo1o;
    o11lo[getDefaultValue] = oo0o0;
    o11lo[setDefaultValue] = o01Oo;
    o11lo[getContextMenu] = oOlO;
    o11lo[setContextMenu] = l010;
    o11lo.Ol1o = o0oll;
    o11lo.lOOo = ooolO;
    o11lo[getLoadingMsg] = lo01l0;
    o11lo[setLoadingMsg] = ooOo1l;
    o11lo[loading] = Ol01o;
    o11lo[unmask] = oo00O;
    o11lo[mask] = l1l11;
    o11lo.lO10OO = lo1o0l;
    o11lo[getAllowAnim] = l1ooO;
    o11lo[setAllowAnim] = loOl;
    o11lo[blur] = Ool0l;
    o11lo[focus] = ol0lO;
    o11lo[destroy] = o000l;
    o11lo[_destroyChildren] = OOl0l1;
    o11lo[layoutChanged] = O0O01;
    o11lo[doLayout] = ol1O0;
    o11lo[canLayout] = lOlOl;
    o11lo[doUpdate] = o0lo0;
    o11lo[endUpdate] = ol10ol;
    o11lo[beginUpdate] = OOO0o0;
    o11lo[isDisplay] = lolO1;
    o11lo[hide] = l0l1o;
    o11lo[show] = Ol001;
    o11lo[getVisible] = o1lO1;
    o11lo[setVisible] = oo0OOo;
    o11lo[disable] = O10l1;
    o11lo[enable] = l0olo;
    o11lo[getEnabled] = oo0ooo;
    o11lo[setEnabled] = l1lOo;
    o11lo[isReadOnly] = lO0oo;
    o11lo[getParent] = ol01Ol;
    o11lo[getReadOnly] = O1oo1;
    o11lo[setReadOnly] = oo0OO1;
    o11lo.lOlllo = llo0o;
    o11lo[removeCls] = o0O0O;
    o11lo[addCls] = o1Oo00;
    o11lo[getCls] = Oo0000;
    o11lo[setCls] = o0OO00;
    o11lo[getStyle] = oOO1;
    o11lo[setStyle] = l0oll;
    o11lo[getBorderStyle] = l11l;
    o11lo[setBorderStyle] = lloO1;
    o11lo[getBox] = Oo1ol;
    o11lo[getHeight] = OOlo;
    o11lo[setHeight] = oooll;
    o11lo[getWidth] = Oo0ll;
    o11lo[setWidth] = o0O00;
    o11lo[_sizeChaned] = O1ooo;
    o11lo[getTooltip] = O1olo;
    o11lo[setTooltip] = looOo0;
    o11lo[getJsName] = loOo;
    o11lo[setJsName] = oOoO;
    o11lo[getEl] = Oo0oo;
    o11lo[render] = oOo1;
    o11lo[isRender] = OO0111;
    o11lo[isFixedSize] = OlOl0;
    o11lo[isAutoWidth] = O0l1;
    o11lo[isAutoHeight] = lo01l;
    o11lo[getName] = oOO11l;
    o11lo[setName] = lo0lll;
    o11lo[within] = Olo1o;
    o11lo[_initEvents] = lO1o0;
    o11lo[_create] = l1loO0;
    mini._attrs = null ;
    mini.regHtmlAttr = function(_, $) {
        if (!_)
            return;
        if (!$)
            $ = "string";
        if (!mini._attrs)
            mini._attrs = [];
        mini._attrs.push([_, $])
    }
    ;
    __mini_setControls = function($, B, C) {
        B = B || this.lOlO;
        C = C || this;
        if (!$)
            $ = [];
        if (!mini.isArray($))
            $ = [$];
        for (var _ = 0, D = $.length; _ < D; _++) {
            var A = $[_];
            if (typeof A == "string") {
                if (A[indexOf]("#") == 0)
                    A = ooO0(A)
            } else if (mini.isElement(A))
                ;
            else {
                A = mini.getAndCreate(A);
                A = A.el
            }
            if (!A)
                continue;mini.append(B, A)
        }
        mini.parse(B);
        C[doLayout]();
        return C
    }
    ;
    mini.Container = function() {
        mini.Container[superclass][constructor][call](this);
        this.lOlO = this.el
    }
    ;
    O00lO(mini.Container, mini.Control, {
        setControls: __mini_setControls,
        getContentEl: function() {
            return this.lOlO
        },
        getBodyEl: function() {
            return this.lOlO
        }
    });
    mini.ValidatorBase = function() {
        mini.ValidatorBase[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.ValidatorBase, mini.Control, {
        required: false,
        requiredErrorText: "This field is required.",
        O1Olol: "mini-required",
        errorText: "",
        Ol10: "mini-error",
        oOO0o0: "mini-invalid",
        errorMode: "icon",
        validateOnChanged: true,
        validateOnLeave: true,
        OoloOO: true,
        errorIconEl: null 
    });
    l1olO = mini.ValidatorBase[prototype];
    l1olO[getAttrs] = Oo0o1;
    l1olO[onValidation] = oll00;
    l1olO[onValueChanged] = lO01O;
    l1olO.Ollll = Oo1lO;
    l1olO.l11o0O = OOl0O;
    l1olO.O1111 = oO10O;
    l1olO.oo1l1 = o11o0;
    l1olO[getErrorIconEl] = Oolll;
    l1olO[getRequiredErrorText] = O0OlO;
    l1olO[setRequiredErrorText] = OOl11;
    l1olO[getRequired] = l0OOo;
    l1olO[setRequired] = olOoO;
    l1olO[getErrorText] = O110l;
    l1olO[setErrorText] = Ol00O;
    l1olO[getErrorMode] = o011l;
    l1olO[setErrorMode] = llO1o;
    l1olO[getValidateOnLeave] = Oolo1;
    l1olO[setValidateOnLeave] = oO101;
    l1olO[getValidateOnChanged] = olO01;
    l1olO[setValidateOnChanged] = Ol1ll;
    l1olO[getIsValid] = OOl01;
    l1olO[setIsValid] = l010o;
    l1olO[isValid] = ll1lO;
    l1olO[validate] = O0ooO;
    l1olO[_tryValidate] = oOlo1;
    mini.ListControl = function() {
        this.data = [];
        this.Oolo0 = [];
        mini.ListControl[superclass][constructor][call](this);
        this[doUpdate]()
    }
    ;
    O00lO(mini.ListControl, mini.ValidatorBase, {
        defaultValue: "",
        value: "",
        valueField: "id",
        textField: "text",
        delimiter: ",",
        data: null ,
        url: "",
        lll0: "mini-list-item",
        o01ll: "mini-list-item-hover",
        _lOlO0: "mini-list-item-selected",
        uiCls: "mini-list",
        name: "",
        o1O10: null ,
        l0o0O: null ,
        Oolo0: [],
        multiSelect: false,
        ooo0o1: true
    });
    ol110 = mini.ListControl[prototype];
    ol110[getAttrs] = OoOOo;
    ol110[onPreLoad] = l011l;
    ol110[onLoadError] = lO00o;
    ol110[onLoad] = loOl0;
    ol110[onBeforeLoad] = llO11;
    ol110[onItemMouseDown] = oo1o1;
    ol110[onItemClick] = OO01O;
    ol110[_OnItemMouseMove] = O1llo;
    ol110[_OnItemMouseOut] = l1l10;
    ol110[_OnItemClick] = l10l0;
    ol110.o1l111 = OOO1O;
    ol110.OO0100 = loo10;
    ol110.loOOO = ll1ll;
    ol110.ll01o0 = lo0Ol;
    ol110.o1oo0 = oO1lo;
    ol110.ol0OOo = ooOl0;
    ol110.lolO = O110O;
    ol110.OOlooO = lollO;
    ol110.ol1Ol = l00lll;
    ol110.Ol1l0 = l01lO;
    ol110.o0O0lo = l01l1;
    ol110.olol = o1lll;
    ol110.llo100 = lOO11;
    ol110.OOo1 = O0lOl;
    ol110.oO0oo = lO10O;
    ol110[deselects] = OloO1;
    ol110[selects] = Ooo11;
    ol110[clearSelect] = OlO0O;
    ol110[deselectAll] = o1000;
    ol110[selectAll] = ooo1o;
    ol110[deselect] = llo01;
    ol110[select] = OOO0o;
    ol110[getSelected] = Olo11;
    ol110[setSelected] = oO00o;
    ol110[getSelecteds] = Olo11s;
    ol110[isSelected] = l110l;
    ol110[getMultiSelect] = oloOo;
    ol110[setMultiSelect] = l01O;
    ol110.o0oOo = llOll;
    ol110[moveItem] = ol10o;
    ol110[removeItem] = O10lO1;
    ol110[removeItems] = O10lO1s;
    ol110[addItem] = o0oOO;
    ol110[addItems] = o0oOOs;
    ol110[removeAll] = lO1oo;
    ol110[findItems] = llloo;
    ol110.o0ol = lO1oO;
    ol110[getItemText] = Oloo1;
    ol110[getItemValue] = OO100O;
    ol110[getTextField] = l1lol;
    ol110[setTextField] = Ool00;
    ol110[getValueField] = Oo1OO;
    ol110[setValueField] = O1OO0;
    ol110[getFormValue] = llOl0;
    ol110[getValue] = lOlo0;
    ol110[setValue] = OolOo;
    ol110.oll0l0 = oOlOl;
    ol110[getUrl] = oO1o1;
    ol110[setUrl] = Oll11;
    ol110[getData] = O10100;
    ol110[setData] = oO1o;
    ol110[loadData] = lO0Ol;
    ol110[load] = o10Ol;
    ol110[updateItem] = l1o1O;
    ol110[getAt] = llo0O;
    ol110[indexOf] = oo0O1;
    ol110[getCount] = OO0oO;
    ol110[getItem] = l1lo1;
    ol110[scrollIntoView] = lo1o1;
    ol110[getFocusedIndex] = Ol10O;
    ol110[getFocusedItem] = Oo1oO;
    ol110.Oo1O1 = lO1l1;
    ol110.l0O011 = OooOo;
    ol110[getItemEl] = l1lo1El;
    ol110[removeItemCls] = O10lO1Cls;
    ol110[addItemCls] = o0oOOCls;
    ol110.lOl0l = l1lo1ByEvent;
    ol110[setName] = lOo11;
    ol110[destroy] = o1Ooo1;
    ol110[_initEvents] = OOOol;
    ol110[_create] = OOol0;
    ol110[set] = olol1;
    mini._Layouts = {};
    mini.layout = function($, _) {
        if (!document.body)
            return;
        function A(C) {
            if (!C)
                return;
            var D = mini.get(C);
            if (D) {
                if (D[doLayout])
                    if (!mini._Layouts[D.uid]) {
                        mini._Layouts[D.uid] = D;
                        if (_ !== false || D[isFixedSize]() == false)
                            D[doLayout](false);
                        delete mini._Layouts[D.uid]
                    }
            } else {
                var E = C.childNodes;
                if (E)
                    for (var $ = 0, F = E.length; $ < F; $++) {
                        var B = E[$];
                        A(B)
                    }
            }
        }
        if (!$)
            $ = document.body;
        A($);
        if ($ == document.body)
            mini.layoutIFrames()
    }
    ;
    mini.applyTo = function(_) {
        _ = ooO0(_);
        if (!_)
            return this;
        if (mini.get(_))
            throw new Error("not applyTo a mini control");
        var $ = this[getAttrs](_);
        delete $._applyTo;
        if (mini.isNull($[defaultValue]) && !mini.isNull($.value))
            $[defaultValue] = $.value;
        var A = _.parentNode;
        if (A && this.el != _)
            A.replaceChild(this.el, _);
        this[set]($);
        this.oO01lO(_);
        return this
    }
    ;
    mini.o00000 = function(G) {
        var F = G.nodeName.toLowerCase();
        if (!F)
            return;
        var B = G.className;
        if (B && B.split) {
            var $ = mini.get(G);
            if (!$) {
                var H = B.split(" ");
                for (var E = 0, C = H.length; E < C; E++) {
                    var A = H[E]
                      , I = mini.getClassByUICls(A);
                    if (I) {
                        Ol00(G, A);
                        var D = new I();
                        mini.applyTo[call](D, G);
                        G = D.el;
                        break
                    }
                }
            }
        }
        if (F == "select" || O1O1Oo(G, "mini-menu") || O1O1Oo(G, "mini-datagrid") || O1O1Oo(G, "mini-treegrid") || O1O1Oo(G, "mini-tree") || O1O1Oo(G, "mini-button") || O1O1Oo(G, "mini-textbox") || O1O1Oo(G, "mini-buttonedit"))
            return;
        var J = mini[getChildNodes](G, true);
        for (E = 0,
        C = J.length; E < C; E++) {
            var _ = J[E];
            if (_.nodeType == 1)
                if (_.parentNode == G)
                    mini.o00000(_)
        }
    }
    ;
    mini._Removes = [];
    mini.parse = function($) {
        if (typeof $ == "string") {
            var A = $;
            $ = ooO0(A);
            if (!$)
                $ = document.body
        }
        if ($ && !mini.isElement($))
            $ = $.el;
        if (!$)
            $ = document.body;
        var _ = olo11o;
        if (isIE)
            olo11o = false;
        mini.o00000($);
        olo11o = _;
        mini.layout($)
    }
    ;
    mini[_ParseString] = function(B, A, E) {
        for (var $ = 0, D = E.length; $ < D; $++) {
            var C = E[$]
              , _ = mini.getAttr(B, C);
            if (_)
                A[C] = _
        }
    }
    ;
    mini[_ParseBool] = function(B, A, E) {
        for (var $ = 0, D = E.length; $ < D; $++) {
            var C = E[$]
              , _ = mini.getAttr(B, C);
            if (_)
                A[C] = _ == "true" ? true : false
        }
    }
    ;
    mini[_ParseInt] = function(B, A, E) {
        for (var $ = 0, D = E.length; $ < D; $++) {
            var C = E[$]
              , _ = parseInt(mini.getAttr(B, C));
            if (!isNaN(_))
                A[C] = _
        }
    }
    ;
    mini.ll1o01 = function(el) {
        var columns = []
          , cs = mini[getChildNodes](el);
        for (var i = 0, l = cs.length; i < l; i++) {
            var node = cs[i]
              , jq = jQuery(node)
              , column = {}
              , editor = null 
              , filter = null 
              , subCs = mini[getChildNodes](node);
            if (subCs)
                for (var ii = 0, li = subCs.length; ii < li; ii++) {
                    var subNode = subCs[ii]
                      , property = jQuery(subNode).attr("property");
                    if (!property)
                        continue;property = property.toLowerCase();
                    if (property == "columns") {
                        column.columns = mini.ll1o01(subNode);
                        jQuery(subNode).remove()
                    }
                    if (property == "editor" || property == "filter") {
                        var className = subNode.className
                          , classes = className.split(" ");
                        for (var i3 = 0, l3 = classes.length; i3 < l3; i3++) {
                            var cls = classes[i3]
                              , clazz = mini.getClassByUICls(cls);
                            if (clazz) {
                                var ui = new clazz();
                                if (property == "filter") {
                                    filter = ui[getAttrs](subNode);
                                    filter.type = ui.type
                                } else {
                                    editor = ui[getAttrs](subNode);
                                    editor.type = ui.type
                                }
                                break
                            }
                        }
                        jQuery(subNode).remove()
                    }
                }
            column.header = node.innerHTML;
            mini[_ParseString](node, column, ["name", "header", "field", "editor", "filter", "renderer", "width", "type", "renderer", "headerAlign", "align", "headerCls", "cellCls", "headerStyle", "cellStyle", "displayField", "dateFormat", "listFormat", "mapFormat", "trueValue", "falseValue", "dataType", "vtype", "currencyUnit", "summaryType", "summaryRenderer", "groupSummaryType", "groupSummaryRenderer", "defaultValue", "defaultText", "decimalPlaces", "data-options"]);
            mini[_ParseBool](node, column, ["visible", "readOnly", "allowSort", "allowResize", "allowMove", "allowDrag", "autoShowPopup", "unique", "autoEscape"]);
            if (editor)
                column.editor = editor;
            if (filter)
                column[filter] = filter;
            if (column.dataType)
                column.dataType = column.dataType.toLowerCase();
            if (column[defaultValue] === "true")
                column[defaultValue] = true;
            if (column[defaultValue] === "false")
                column[defaultValue] = false;
            columns.push(column);
            var options = column["data-options"];
            if (options) {
                options = eval("(" + options + ")");
                if (options)
                    mini.copyTo(column, options)
            }
        }
        return columns
    }
    ;
    mini.ll01lo = {};
    mini[_getColumn] = function($) {
        var _ = mini.ll01lo[$.toLowerCase()];
        if (!_)
            return {};
        return _()
    }
    ;
    mini.IndexColumn = function($) {
        return mini.copyTo({
            width: 30,
            cellCls: "",
            align: "center",
            draggable: false,
            allowDrag: true,
            init: function($) {
                $[on]("addrow", this.__OnIndexChanged, this);
                $[on]("removerow", this.__OnIndexChanged, this);
                $[on]("moverow", this.__OnIndexChanged, this);
                if ($.isTree) {
                    $[on]("loadnode", this.__OnIndexChanged, this);
                    this._gridUID = $.uid;
                    this[_rowIdField] = "_id"
                }
            },
            getNumberId: function($) {
                return this._gridUID + "$number$" + $[this._rowIdField]
            },
            createNumber: function($, _) {
                if (mini.isNull($[pageIndex]))
                    return _ + 1;
                else
                    return ($[pageIndex] * $[pageSize]) + _ + 1
            },
            renderer: function(A) {
                var $ = A.sender;
                if (this.draggable) {
                    if (!A.cellStyle)
                        A.cellStyle = "";
                    A.cellStyle += ";cursor:move;"
                }
                var _ = "<div id=\"" + this.getNumberId(A.record) + "\">";
                if (mini.isNull($[pageIndex]))
                    _ += A.rowIndex + 1;
                else
                    _ += ($[pageIndex] * $[pageSize]) + A.rowIndex + 1;
                _ += "</div>";
                return _
            },
            __OnIndexChanged: function(F) {
                var $ = F.sender
                  , C = $[toArray]();
                for (var A = 0, D = C.length; A < D; A++) {
                    var _ = C[A]
                      , E = this.getNumberId(_)
                      , B = document.getElementById(E);
                    if (B)
                        B.innerHTML = this.createNumber($, A)
                }
            }
        }, $)
    }
    ;
    mini.ll01lo["indexcolumn"] = mini.IndexColumn;
    mini.CheckColumn = function($) {
        return mini.copyTo({
            width: 30,
            cellCls: "mini-checkcolumn",
            headerCls: "mini-checkcolumn",
            _multiRowSelect: true,
            header: function($) {
                var A = this.uid + "checkall"
                  , _ = "<input type=\"checkbox\" id=\"" + A + "\" />";
                if (this[multiSelect] == false)
                    _ = "";
                return _
            },
            getCheckId: function($) {
                return this._gridUID + "$checkcolumn$" + $[this._rowIdField]
            },
            init: function($) {
                $[on]("selectionchanged", this.OOO1, this);
                $[on]("HeaderCellClick", this.Ool0o, this)
            },
            renderer: function(C) {
                var B = this.getCheckId(C.record)
                  , _ = C.sender[isSelected] ? C.sender[isSelected](C.record) : false
                  , A = "checkbox"
                  , $ = C.sender;
                if ($[multiSelect] == false)
                    A = "radio";
                return "<input type=\"" + A + "\" id=\"" + B + "\" " + (_ ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false\"/>"
            },
            Ool0o: function(B) {
                var $ = B.sender;
                if (B.column != this)
                    return;
                var A = $.uid + "checkall"
                  , _ = document.getElementById(A);
                if (_) {
                    if ($[getMultiSelect]()) {
                        if (_.checked)
                            $[selectAll]();
                        else
                            $[deselectAll]()
                    } else {
                        $[deselectAll]();
                        if (_.checked)
                            $[select](0)
                    }
                    $[fire]("checkall")
                }
            },
            OOO1: function(H) {
                var $ = H.sender
                  , C = $[toArray]();
                for (var A = 0, E = C.length; A < E; A++) {
                    var _ = C[A]
                      , G = $[isSelected](_)
                      , F = $.uid + "$checkcolumn$" + _[$._rowIdField]
                      , B = document.getElementById(F);
                    if (B)
                        B.checked = G
                }
                var D = this;
                if (!this._timer)
                    this._timer = setTimeout(function() {
                        D._doCheckState($);
                        D._timer = null 
                    }
                    , 10)
            },
            _doCheckState: function($) {
                var B = $.uid + "checkall"
                  , _ = document.getElementById(B);
                if (_ && $[_getSelectAllCheckState]) {
                    var A = $[_getSelectAllCheckState]();
                    if (A == "has") {
                        _.indeterminate = true;
                        _.checked = true
                    } else {
                        _.indeterminate = false;
                        _.checked = A
                    }
                }
            }
        }, $)
    }
    ;
    mini.ll01lo["checkcolumn"] = mini.CheckColumn;
    mini.ExpandColumn = function($) {
        return mini.copyTo({
            width: 30,
            cellCls: "",
            align: "center",
            draggable: false,
            cellStyle: "padding:0",
            renderer: function($) {
                return "<a class=\"mini-grid-ecIcon\" href=\"javascript:#\" onclick=\"return false\"></a>"
            },
            init: function($) {
                $[on]("cellclick", this.oO10, this)
            },
            oO10: function(A) {
                var $ = A.sender;
                if (A.column == this && $[isShowRowDetail])
                    if (llOo(A.htmlEvent.target, "mini-grid-ecIcon")) {
                        var _ = $[isShowRowDetail](A.record);
                        if ($.autoHideRowDetail)
                            $[hideAllRowDetail]();
                        if (_)
                            $[hideRowDetail](A.record);
                        else
                            $[showRowDetail](A.record)
                    }
            }
        }, $)
    }
    ;
    mini.ll01lo["expandcolumn"] = mini.ExpandColumn;
    oloo1OColumn = function($) {
        return mini.copyTo({
            _type: "checkboxcolumn",
            header: "#",
            headerAlign: "center",
            cellCls: "mini-checkcolumn",
            trueValue: true,
            falseValue: false,
            readOnly: false,
            getCheckId: function($) {
                return this._gridUID + "$checkbox$" + $[this._rowIdField]
            },
            getCheckBoxEl: function($) {
                return document.getElementById(this.getCheckId($))
            },
            renderer: function(C) {
                var A = this.getCheckId(C.record)
                  , B = mini._getMap(C.field, C.record)
                  , _ = B == this.trueValue ? true : false
                  , $ = "checkbox";
                return "<input type=\"" + $ + "\" id=\"" + A + "\" " + (_ ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false;\"/>"
            },
            init: function($) {
                this.grid = $;
                function _(B) {
                    if ($[isReadOnly]() || this[readOnly])
                        return;
                    B.value = mini._getMap(B.field, B.record);
                    $[fire]("cellbeginedit", B);
                    if (B.cancel !== true) {
                        var A = mini._getMap(B.column.field, B.record)
                          , _ = A == this.trueValue ? this.falseValue : this.trueValue;
                        if ($.OO1l0o)
                            $.OO1l0o(B.record, B.column, _)
                    }
                }
                function A(C) {
                    if (C.column == this) {
                        var B = this.getCheckId(C.record)
                          , A = C.htmlEvent.target;
                        if (A.id == B)
                            if ($[allowCellEdit]) {
                                C.cancel = false;
                                _[call](this, C)
                            } else if ($[isEditingRow] && $[isEditingRow](C.record))
                                setTimeout(function() {
                                    A.checked = !A.checked
                                }
                                , 1)
                    }
                }
                $[on]("cellclick", A, this);
                l1Oo0O(this.grid.el, "keydown", function(C) {
                    if (C.keyCode == 32 && $[allowCellEdit]) {
                        var A = $[getCurrentCell]();
                        if (!A)
                            return;
                        var B = {
                            record: A[0],
                            column: A[1]
                        };
                        _[call](this, B);
                        C.preventDefault()
                    }
                }
                , this);
                var B = parseInt(this.trueValue)
                  , C = parseInt(this.falseValue);
                if (!isNaN(B))
                    this.trueValue = B;
                if (!isNaN(C))
                    this.falseValue = C
            }
        }, $)
    }
    ;
    mini.ll01lo["checkboxcolumn"] = oloo1OColumn;
    o01ol1Column = function($) {
        return mini.copyTo({
            renderer: function(M) {
                var _ = !mini.isNull(M.value) ? String(M.value) : ""
                  , C = _.split(",")
                  , D = "id"
                  , J = "text"
                  , A = {}
                  , G = M.column.editor;
                if (G && G.type == "combobox") {
                    var B = this.__editor;
                    if (!B) {
                        if (mini.isControl(G))
                            B = G;
                        else {
                            G = mini.clone(G);
                            B = mini.create(G)
                        }
                        this.__editor = B
                    }
                    D = B[getValueField]();
                    J = B[getTextField]();
                    A = this._valueMaps;
                    if (!A) {
                        A = {};
                        var K = B[getData]();
                        for (var H = 0, E = K.length; H < E; H++) {
                            var $ = K[H];
                            A[$[D]] = $
                        }
                        this._valueMaps = A
                    }
                }
                var L = [];
                for (H = 0,
                E = C.length; H < E; H++) {
                    var F = C[H]
                      , $ = A[F];
                    if ($) {
                        var I = $[J];
                        if (I === null  || I === undefined)
                            I = "";
                        L.push(I)
                    }
                }
                return L.join(",")
            }
        }, $)
    }
    ;
    mini.ll01lo["comboboxcolumn"] = o01ol1Column;
    o01l1 = function($) {
        this.owner = $;
        l1Oo0O(this.owner.el, "mousedown", this.ol1Ol, this)
    }
    ;
    o01l1[prototype] = {
        ol1Ol: function(A) {
            var $ = O1O1Oo(A.target, "mini-resizer-trigger");
            if ($ && this.owner[allowResize]) {
                var _ = this.olOl1l();
                _.start(A)
            }
        },
        olOl1l: function() {
            if (!this._resizeDragger)
                this._resizeDragger = new mini.Drag({
                    capture: true,
                    onStart: mini.createDelegate(this.ollOll, this),
                    onMove: mini.createDelegate(this.ooOo, this),
                    onStop: mini.createDelegate(this.l10l, this)
                });
            return this._resizeDragger
        },
        ollOll: function($) {
            this.proxy = mini.append(document.body, "<div class=\"mini-resizer-proxy\"></div>");
            this.proxy.style.cursor = "se-resize";
            this.elBox = OOl1o0(this.owner.el);
            oO11Oo(this.proxy, this.elBox)
        },
        ooOo: function(B) {
            var $ = this.owner
              , D = B.now[0] - B.init[0]
              , _ = B.now[1] - B.init[1]
              , A = this.elBox.width + D
              , C = this.elBox.height + _;
            if (A < $.minWidth)
                A = $.minWidth;
            if (C < $.minHeight)
                C = $.minHeight;
            if (A > $.maxWidth)
                A = $.maxWidth;
            if (C > $.maxHeight)
                C = $.maxHeight;
            mini.setSize(this.proxy, A, C)
        },
        l10l: function($, A) {
            if (!this.proxy)
                return;
            var _ = OOl1o0(this.proxy);
            jQuery(this.proxy).remove();
            this.proxy = null ;
            this.elBox = null ;
            if (A) {
                this.owner[setWidth](_.width);
                this.owner[setHeight](_.height);
                this.owner[fire]("resize")
            }
        }
    };
    mini._topWindow = null ;
    mini._getTopWindow = function() {
        if (mini._topWindow)
            return mini._topWindow;
        var $ = [];
        function _(A) {
            try {
                A["___try"] = 1;
                $.push(A)
            } catch (B) {}
            if (A.parent && A.parent != A)
                _(A.parent)
        }
        _(window);
        mini._topWindow = $[$.length - 1];
        return mini._topWindow
    }
    ;
    var __ps = mini.getParams();
    if (__ps._winid) {
        try {
            window.Owner = mini._getTopWindow()[__ps._winid]
        } catch (ex) {}
    }
    mini._WindowID = "w" + Math.floor(Math.random() * 10000);
    mini._getTopWindow()[mini._WindowID] = window;
    mini.__IFrameCreateCount = 1;
    mini.createIFrame = function(E, F) {
        var H = "__iframe_onload" + mini.__IFrameCreateCount++;
        window[H] = _;
        if (!E)
            E = "";
        var D = E.split("#");
        E = D[0];
        var C = "_t=" + Math.floor(Math.random() * 1000000);
        if (E[indexOf]("?") == -1)
            E += "?" + C;
        else
            E += "&" + C;
        if (D[1])
            E = E + "#" + D[1];
        var G = "<iframe style=\"width:100%;height:100%;\" onload=\"" + H + "()\"  frameborder=\"0\"></iframe>"
          , $ = document.createElement("div")
          , B = mini.append($, G)
          , I = false;
        setTimeout(function() {
            if (B) {
                B.src = E;
                I = true
            }
        }
        , 5);
        var A = true;
        function _() {
            if (I == false)
                return;
            setTimeout(function() {
                if (F)
                    F(B, A);
                A = false
            }
            , 1)
        }
        B._ondestroy = function() {
            window[H] = mini.emptyFn;
            B.src = "";
            try {
                B.contentWindow.document.write("");
                B.contentWindow.document.close()
            } catch ($) {}
            B._ondestroy = null ;
            B = null 
        }
        ;
        return B
    }
    ;
    mini._doOpen = function(C) {
        if (typeof C == "string")
            C = {
                url: C
            };
        C = mini.copyTo({
            width: 700,
            height: 400,
            allowResize: true,
            allowModal: true,
            closeAction: "destroy",
            title: "",
            titleIcon: "",
            iconCls: "",
            iconStyle: "",
            bodyStyle: "padding:0",
            url: "",
            showCloseButton: true,
            showFooter: false
        }, C);
        C[closeAction] = "destroy";
        var $ = C.onload;
        delete C.onload;
        var B = C.ondestroy;
        delete C.ondestroy;
        var _ = C.url;
        delete C.url;
        var A = new mini.Window();
        A[set](C);
        A[load](_, $, B);
        A[show]();
        return A
    }
    ;
    mini.open = function(E) {
        if (!E)
            return;
        var C = E.url;
        if (!C)
            C = "";
        var B = C.split("#")
          , C = B[0]
          , A = "_winid=" + mini._WindowID;
        if (C[indexOf]("?") == -1)
            C += "?" + A;
        else
            C += "&" + A;
        if (B[1])
            C = C + "#" + B[1];
        E.url = C;
        E.Owner = window;
        var $ = [];
        function _(A) {
            if (A.mini)
                $.push(A);
            if (A.parent && A.parent != A)
                _(A.parent)
        }
        _(window);
        var D = $[$.length - 1];
        return D["mini"]._doOpen(E)
    }
    ;
    mini.openTop = mini.open;
    mini[getData] = function(C, A, E, D, _) {
        var $ = mini[getText](C, A, E, D, _)
          , B = mini.decode($);
        return B
    }
    ;
    mini[getText] = function(B, A, D, C, _) {
        var $ = null ;
        mini.ajax({
            url: B,
            data: A,
            async: false,
            type: _ ? _ : "get",
            cache: false,
            success: function(A, _) {
                $ = A;
                if (D)
                    D(A, _)
            },
            error: C
        });
        return $
    }
    ;
    if (!window.mini_RootPath)
        mini_RootPath = "/";
    o0l0 = function(B) {
        var A = document.getElementsByTagName("script")
          , D = "";
        for (var $ = 0, E = A.length; $ < E; $++) {
            var C = A[$].src;
            if (C[indexOf](B) != -1) {
                var F = C.split(B);
                D = F[0];
                break
            }
        }
        var _ = location.href;
        _ = _.split("#")[0];
        _ = _.split("?")[0];
        F = _.split("/");
        F.length = F.length - 1;
        _ = F.join("/");
        if (D[indexOf]("http:") == -1 && D[indexOf]("file:") == -1)
            D = _ + "/" + D;
        return D
    }
    ;
    if (!window.mini_JSPath)
        mini_JSPath = o0l0("miniui.js");
    mini[update] = function(A, _) {
        if (typeof A == "string")
            A = {
                url: A
            };
        if (_)
            A.el = _;
        var $ = mini.loadText(A.url);
        mini.innerHTML(A.el, $);
        mini.parse(A.el)
    }
    ;
    mini.createSingle = function($) {
        if (typeof $ == "string")
            $ = mini.getClass($);
        if (typeof $ != "function")
            return;
        var _ = $.single;
        if (!_)
            _ = $.single = new $();
        return _
    }
    ;
    mini.createTopSingle = function($) {
        if (typeof $ != "function")
            return;
        var _ = $[prototype].type;
        if (top && top != window && top.mini && top.mini.getClass(_))
            return top.mini.createSingle(_);
        else
            return mini.createSingle($)
    }
    ;
    mini.sortTypes = {
        "string": function($) {
            return String($).toUpperCase()
        },
        "date": function($) {
            if (!$)
                return 0;
            if (mini.isDate($))
                return $[getTime]();
            return mini.parseDate(String($))
        },
        "float": function(_) {
            var $ = parseFloat(String(_).replace(/,/g, ""));
            return isNaN($) ? 0 : $
        },
        "int": function(_) {
            var $ = parseInt(String(_).replace(/,/g, ""), 10);
            return isNaN($) ? 0 : $
        },
        "currency": function(_) {
            var $ = parseFloat(String(_).replace(/,/g, ""));
            return isNaN($) ? 0 : $
        }
    };
    mini.l011O = function(G, $, K, H) {
        var F = G.split(";");
        for (var E = 0, C = F.length; E < C; E++) {
            var G = F[E].trim()
              , J = G.split(":")
              , A = J[0]
              , _ = J[1];
            if (_)
                _ = _.split(",");
            else
                _ = [];
            var D = mini.VTypes[A];
            if (D) {
                var I = D($, _);
                if (I !== true) {
                    K[isValid] = false;
                    var B = J[0] + "ErrorText";
                    K.errorText = H[B] || mini.VTypes[B] || "";
                    K.errorText = String.format(K.errorText, _[0], _[1], _[2], _[3], _[4]);
                    break
                }
            }
        }
    }
    ;
    mini.llOl = function($, _) {
        if ($ && $[_])
            return $[_];
        else
            return mini.VTypes[_]
    }
    ;
    mini.VTypes = {
        uniqueErrorText: "This field is unique.",
        requiredErrorText: "This field is required.",
        emailErrorText: "Please enter a valid email address.",
        urlErrorText: "Please enter a valid URL.",
        floatErrorText: "Please enter a valid number.",
        intErrorText: "Please enter only digits",
        dateErrorText: "Please enter a valid date. Date format is {0}",
        maxLengthErrorText: "Please enter no more than {0} characters.",
        minLengthErrorText: "Please enter at least {0} characters.",
        maxErrorText: "Please enter a value less than or equal to {0}.",
        minErrorText: "Please enter a value greater than or equal to {0}.",
        rangeLengthErrorText: "Please enter a value between {0} and {1} characters long.",
        rangeCharErrorText: "Please enter a value between {0} and {1} characters long.",
        rangeErrorText: "Please enter a value between {0} and {1}.",
        required: function(_, $) {
            if (mini.isNull(_) || _ === "")
                return false;
            return true
        },
        email: function(_, $) {
            if (mini.isNull(_) || _ === "")
                return true;
            if (_.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
                return true;
            else
                return false
        },
        url: function(A, $) {
            if (mini.isNull(A) || A === "")
                return true;
            function _(_) {
                _ = _.toLowerCase();
                var $ = "^((https|http|ftp|rtsp|mms)?://)" + "?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?" + "(([0-9]{1,3}.){3}[0-9]{1,3}" + "|" + "([0-9a-z_!~*'()-]+.)*" + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + "[a-z]{2,6})" + "(:[0-9]{1,4})?" + "((/?)|" + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$"
                  , A = new RegExp($);
                if (A.test(_))
                    return ( true) ;
                else
                    return ( false) 
            }
            return _(A)
        },
        "int": function(A, _) {
            if (mini.isNull(A) || A === "")
                return true;
            function $(_) {
                if (_ < 0)
                    _ = -_;
                var $ = String(_);
                return $.length > 0 && !(/[^0-9]/).test($)
            }
            return $(A)
        },
        "float": function(A, _) {
            if (mini.isNull(A) || A === "")
                return true;
            function $(_) {
                if (_ < 0)
                    _ = -_;
                var $ = String(_);
                return $.length > 0 && !(/[^0-9.]/).test($)
            }
            return $(A)
        },
        "date": function(B, _) {
            if (mini.isNull(B) || B === "")
                return true;
            if (!B)
                return false;
            var $ = null 
              , A = _[0];
            if (A) {
                $ = mini.parseDate(B, A);
                if ($ && $.getFullYear)
                    if (mini.formatDate($, A) == B)
                        return true
            } else {
                $ = mini.parseDate(B, "yyyy-MM-dd");
                if (!$)
                    $ = mini.parseDate(B, "yyyy/MM/dd");
                if (!$)
                    $ = mini.parseDate(B, "MM/dd/yyyy");
                if ($ && $.getFullYear)
                    return true
            }
            return false
        },
        maxLength: function(A, $) {
            if (mini.isNull(A) || A === "")
                return true;
            var _ = parseInt($);
            if (!A || isNaN(_))
                return true;
            if (A.length <= _)
                return true;
            else
                return false
        },
        minLength: function(A, $) {
            if (mini.isNull(A) || A === "")
                return true;
            var _ = parseInt($);
            if (isNaN(_))
                return true;
            if (A.length >= _)
                return true;
            else
                return false
        },
        rangeLength: function(B, _) {
            if (mini.isNull(B) || B === "")
                return true;
            if (!B)
                return false;
            var $ = parseFloat(_[0])
              , A = parseFloat(_[1]);
            if (isNaN($) || isNaN(A))
                return true;
            if ($ <= B.length && B.length <= A)
                return true;
            return false
        },
        rangeChar: function(G, B) {
            if (mini.isNull(G) || G === "")
                return true;
            var A = parseFloat(B[0])
              , E = parseFloat(B[1]);
            if (isNaN(A) || isNaN(E))
                return true;
            function C(_) {
                var $ = new RegExp("^[\u4e00-\u9fa5]+$");
                if ($.test(_))
                    return true;
                return false
            }
            var $ = 0
              , F = String(G).split("");
            for (var _ = 0, D = F.length; _ < D; _++)
                if (C(F[_]))
                    $ += 2;
                else
                    $ += 1;
            if (A <= $ && $ <= E)
                return true;
            return false
        },
        range: function(B, _) {
            if (mini.VTypes["float"](B, _) == false)
                return false;
            if (mini.isNull(B) || B === "")
                return true;
            B = parseFloat(B);
            if (isNaN(B))
                return false;
            var $ = parseFloat(_[0])
              , A = parseFloat(_[1]);
            if (isNaN($) || isNaN(A))
                return true;
            if ($ <= B && B <= A)
                return true;
            return false
        }
    };
    mini.summaryTypes = {
        "count": function($) {
            if (!$)
                $ = [];
            return $.length
        },
        "max": function(B, C) {
            if (!B)
                B = [];
            var E = null ;
            for (var _ = 0, D = B.length; _ < D; _++) {
                var $ = B[_]
                  , A = parseFloat($[C]);
                if (A === null  || A === undefined || isNaN(A))
                    continue;if (E == null  || E < A)
                    E = A
            }
            return E
        },
        "min": function(C, D) {
            if (!C)
                C = [];
            var B = null ;
            for (var _ = 0, E = C.length; _ < E; _++) {
                var $ = C[_]
                  , A = parseFloat($[D]);
                if (A === null  || A === undefined || isNaN(A))
                    continue;if (B == null  || B > A)
                    B = A
            }
            return B
        },
        "avg": function(C, D) {
            if (!C)
                C = [];
            if (C.length == 0)
                return 0;
            var B = 0;
            for (var _ = 0, E = C.length; _ < E; _++) {
                var $ = C[_]
                  , A = parseFloat($[D]);
                if (A === null  || A === undefined || isNaN(A))
                    continue;B += A
            }
            var F = B / C.length;
            return F
        },
        "sum": function(C, D) {
            if (!C)
                C = [];
            var B = 0;
            for (var _ = 0, E = C.length; _ < E; _++) {
                var $ = C[_]
                  , A = parseFloat($[D]);
                if (A === null  || A === undefined || isNaN(A))
                    continue;B += A
            }
            return B
        }
    };
    mini.formatCurrency = function($, A) {
        if ($ === null  || $ === undefined)
            $ == 0;
        $ = String($).replace(/\$|\,/g, "");
        if (isNaN($))
            $ = "0";
        sign = ($ == ($ = Math.abs($)));
        $ = Math.floor($ * 100 + 0.50000000001);
        cents = $ % 100;
        $ = Math.floor($ / 100).toString();
        if (cents < 10)
            cents = "0" + cents;
        for (var _ = 0; _ < Math.floor(($.length - (1 + _)) / 3); _++)
            $ = $.substring(0, $.length - (4 * _ + 3)) + "," + $.substring($.length - (4 * _ + 3));
        A = A || "";
        return A + (((sign) ? "" : "-") + $ + "." + cents)
    }
    ;
    mini.emptyFn = function() {}
    ;
    mini.Drag = function($) {
        mini.copyTo(this, $)
    }
    ;
    mini.Drag[prototype] = {
        onStart: mini.emptyFn,
        onMove: mini.emptyFn,
        onStop: mini.emptyFn,
        capture: false,
        fps: 20,
        event: null ,
        delay: 80,
        start: function(_) {
            _.preventDefault();
            if (_)
                this.event = _;
            this.now = this.init = [this.event.pageX, this.event.pageY];
            var $ = document;
            l1Oo0O($, "mousemove", this.move, this);
            l1Oo0O($, "mouseup", this.stop, this);
            l1Oo0O($, "contextmenu", this.contextmenu, this);
            if (this.context)
                l1Oo0O(this.context, "contextmenu", this.contextmenu, this);
            this.trigger = _.target;
            mini.selectable(this.trigger, false);
            mini.selectable($.body, false);
            if (this.capture)
                if (isIE)
                    this.trigger.setCapture(true);
                else if (document.captureEvents)
                    document.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP | Event.MOUSEDOWN);
            this.started = false;
            this.startTime = new Date()
        },
        contextmenu: function($) {
            if (this.context)
                O1l0(this.context, "contextmenu", this.contextmenu, this);
            O1l0(document, "contextmenu", this.contextmenu, this);
            $.preventDefault();
            $.stopPropagation()
        },
        move: function(_) {
            if (this.delay)
                if (new Date() - this.startTime < this.delay)
                    return;
            if (!this.started) {
                this.started = true;
                this.onStart(this)
            }
            var $ = this;
            if (!this.timer)
                this.timer = setTimeout(function() {
                    $.now = [_.pageX, _.pageY];
                    $.event = _;
                    $.onMove($);
                    $.timer = null 
                }
                , 5)
        },
        stop: function(B) {
            this.now = [B.pageX, B.pageY];
            this.event = B;
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null 
            }
            var A = document;
            mini.selectable(this.trigger, true);
            mini.selectable(A.body, true);
            if (isIE) {
                this.trigger.setCapture(false);
                this.trigger.releaseCapture()
            }
            var _ = mini.MouseButton.Right != B.button;
            if (_ == false)
                B.preventDefault();
            O1l0(A, "mousemove", this.move, this);
            O1l0(A, "mouseup", this.stop, this);
            var $ = this;
            setTimeout(function() {
                O1l0(document, "contextmenu", $.contextmenu, $);
                if ($.context)
                    O1l0($.context, "contextmenu", $.contextmenu, $)
            }
            , 1);
            if (this.started)
                $.onStop($, _)
        }
    };
    mini.JSON = new (function() {
        var sb = []
          , _dateFormat = null 
          , useHasOwn = !!{}.hasOwnProperty
          , replaceString = function($, A) {
            var _ = m[A];
            if (_)
                return _;
            _ = A.charCodeAt();
            return "\\u00" + Math.floor(_ / 16).toString(16) + (_ % 16).toString(16)
        }
          , doEncode = function($, B) {
            if ($ === null ) {
                sb[sb.length] = "null";
                return
            }
            var A = typeof $;
            if (A == "undefined") {
                sb[sb.length] = "null";
                return
            } else if ($.push) {
                sb[sb.length] = "[";
                var E, _, D = $.length, F;
                for (_ = 0; _ < D; _ += 1) {
                    F = $[_];
                    A = typeof F;
                    if (A == "undefined" || A == "function" || A == "unknown")
                        ;
                    else {
                        if (E)
                            sb[sb.length] = ",";
                        doEncode(F);
                        E = true
                    }
                }
                sb[sb.length] = "]";
                return
            } else if ($.getFullYear) {
                if (_dateFormat)
                    sb[sb.length] = _dateFormat($, B);
                else {
                    var C;
                    sb[sb.length] = "\"";
                    sb[sb.length] = $.getFullYear();
                    sb[sb.length] = "-";
                    C = $.getMonth() + 1;
                    sb[sb.length] = C < 10 ? "0" + C : C;
                    sb[sb.length] = "-";
                    C = $.getDate();
                    sb[sb.length] = C < 10 ? "0" + C : C;
                    sb[sb.length] = "T";
                    C = $.getHours();
                    sb[sb.length] = C < 10 ? "0" + C : C;
                    sb[sb.length] = ":";
                    C = $.getMinutes();
                    sb[sb.length] = C < 10 ? "0" + C : C;
                    sb[sb.length] = ":";
                    C = $.getSeconds();
                    sb[sb.length] = C < 10 ? "0" + C : C;
                    sb[sb.length] = "\"";
                    return
                }
            } else if (A == "string") {
                if (strReg1.test($)) {
                    sb[sb.length] = "\"";
                    sb[sb.length] = $.replace(strReg2, replaceString);
                    sb[sb.length] = "\"";
                    return
                }
                sb[sb.length] = "\"" + $ + "\"";
                return
            } else if (A == "number") {
                sb[sb.length] = $;
                return
            } else if (A == "boolean") {
                sb[sb.length] = String($);
                return
            } else {
                sb[sb.length] = "{";
                E,
                _,
                F;
                for (_ in $)
                    if (!useHasOwn || ($.hasOwnProperty && $.hasOwnProperty(_))) {
                        F = $[_];
                        A = typeof F;
                        if (A == "undefined" || A == "function" || A == "unknown")
                            ;
                        else {
                            if (E)
                                sb[sb.length] = ",";
                            doEncode(_);
                            sb[sb.length] = ":";
                            doEncode(F, _);
                            E = true
                        }
                    }
                sb[sb.length] = "}";
                return
            }
        }
          , m = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            "\"": "\\\"",
            "\\": "\\\\"
        }
          , strReg1 = /["\\\x00-\x1f]/
          , strReg2 = /([\x00-\x1f\\"])/g;
        this.encode = function() {
            var $;
            return function($, _) {
                sb = [];
                _dateFormat = _;
                doEncode($);
                _dateFormat = null ;
                return sb.join("")
            }
        }
        ();
        this.decode = function() {
            var re = /[\"\'](\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})[\"\']/g;
            return function(json, parseDate) {
                if (json === "" || json === null  || json === undefined)
                    return json;
                if (typeof json == "object")
                    json = this.encode(json);
                if (parseDate !== false) {
                    json = json.replace(re, "new Date($1,$2-1,$3,$4,$5,$6)");
                    json = json.replace(__js_dateRegEx, "$1new Date($2)");
                    json = json.replace(__js_dateRegEx2, "new Date($1)")
                }
                var s = eval("(" + json + ")");
                return s
            }
        }
        ()
    }
    )();
    __js_dateRegEx = new RegExp("(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\\"","g");
    __js_dateRegEx2 = new RegExp("[\"']/Date\\(([0-9]+)\\)/[\"']","g");
    mini.encode = mini.JSON.encode;
    mini.decode = mini.JSON.decode;
    mini.clone = function($, A) {
        if ($ === null  || $ === undefined)
            return $;
        var B = mini.encode($)
          , _ = mini.decode(B);
        function C(A) {
            for (var _ = 0, D = A.length; _ < D; _++) {
                var $ = A[_];
                delete $._state;
                delete $._id;
                delete $._pid;
                delete $._uid;
                for (var B in $) {
                    var E = $[B];
                    if (E instanceof Array)
                        C(E)
                }
            }
        }
        if (A !== false)
            C(_ instanceof Array ? _ : [_]);
        return _
    }
    ;
    var DAY_MS = 86400000
      , HOUR_MS = 3600000
      , MINUTE_MS = 60000;
    mini.copyTo(mini, {
        clearTime: function($) {
            if (!$)
                return null ;
            return new Date($.getFullYear(),$.getMonth(),$.getDate())
        },
        maxTime: function($) {
            if (!$)
                return null ;
            return new Date($.getFullYear(),$.getMonth(),$.getDate(),23,59,59)
        },
        cloneDate: function($) {
            if (!$)
                return null ;
            return new Date($[getTime]())
        },
        addDate: function(A, $, _) {
            if (!_)
                _ = "D";
            A = new Date(A[getTime]());
            switch (_.toUpperCase()) {
            case "Y":
                A.setFullYear(A.getFullYear() + $);
                break;
            case "MO":
                A.setMonth(A.getMonth() + $);
                break;
            case "D":
                A.setDate(A.getDate() + $);
                break;
            case "H":
                A.setHours(A.getHours() + $);
                break;
            case "M":
                A.setMinutes(A.getMinutes() + $);
                break;
            case "S":
                A.setSeconds(A.getSeconds() + $);
                break;
            case "MS":
                A.setMilliseconds(A.getMilliseconds() + $);
                break
            }
            return A
        },
        getWeek: function(D, $, _) {
            $ += 1;
            var E = Math.floor((14 - ($)) / 12)
              , G = D + 4800 - E
              , A = ($) + (12 * E) - 3
              , C = _ + Math.floor(((153 * A) + 2) / 5) + (365 * G) + Math.floor(G / 4) - Math.floor(G / 100) + Math.floor(G / 400) - 32045
              , F = (C + 31741 - (C % 7)) % 146097 % 36524 % 1461
              , H = Math.floor(F / 1460)
              , B = ((F - H) % 365) + H;
            NumberOfWeek = Math.floor(B / 7) + 1;
            return NumberOfWeek
        },
        getWeekStartDate: function(C, B) {
            if (!B)
                B = 0;
            if (B > 6 || B < 0)
                throw new Error("out of weekday");
            var A = C.getDay()
              , _ = B - A;
            if (A < B)
                _ -= 7;
            var $ = new Date(C.getFullYear(),C.getMonth(),C.getDate() + _);
            return $
        },
        getShortWeek: function(_) {
            var $ = this.dateInfo.daysShort;
            return $[_]
        },
        getLongWeek: function(_) {
            var $ = this.dateInfo.daysLong;
            return $[_]
        },
        getShortMonth: function($) {
            var _ = this.dateInfo.monthsShort;
            return _[$]
        },
        getLongMonth: function($) {
            var _ = this.dateInfo.monthsLong;
            return _[$]
        },
        dateInfo: {
            monthsLong: ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            daysLong: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            quarterLong: ["Q1", "Q2", "Q3", "Q4"],
            quarterShort: ["Q1", "Q2", "Q3", "Q4"],
            halfYearLong: ["first half", "second half"],
            patterns: {
                "d": "M/d/yyyy",
                "D": "dddd,MMMM dd,yyyy",
                "f": "dddd,MMMM dd,yyyy H:mm tt",
                "F": "dddd,MMMM dd,yyyy H:mm:ss tt",
                "g": "M/d/yyyy H:mm tt",
                "G": "M/d/yyyy H:mm:ss tt",
                "m": "MMMM dd",
                "o": "yyyy-MM-ddTHH:mm:ss.fff",
                "s": "yyyy-MM-ddTHH:mm:ss",
                "t": "H:mm tt",
                "T": "H:mm:ss tt",
                "U": "dddd,MMMM dd,yyyy HH:mm:ss tt",
                "y": "MMM,yyyy"
            },
            tt: {
                "AM": "AM",
                "PM": "PM"
            },
            ten: {
                "Early": "Early",
                "Mid": "Mid",
                "Late": "Late"
            },
            today: "Today",
            clockType: 24
        }
    });
    Date[prototype].getHalfYear = function() {
        if (!this.getMonth)
            return null ;
        var $ = this.getMonth();
        if ($ < 6)
            return 0;
        return 1
    }
    ;
    Date[prototype].getQuarter = function() {
        if (!this.getMonth)
            return null ;
        var $ = this.getMonth();
        if ($ < 3)
            return 0;
        if ($ < 6)
            return 1;
        if ($ < 9)
            return 2;
        return 3
    }
    ;
    mini.formatDate = function(C, O, F) {
        if (!C || !C.getFullYear || isNaN(C))
            return "";
        var G = C.toString()
          , B = mini.dateInfo;
        if (!B)
            B = mini.dateInfo;
        if (typeof (B) !== "undefined") {
            var M = typeof (B.patterns[O]) !== "undefined" ? B.patterns[O] : O
              , J = C.getFullYear()
              , $ = C.getMonth()
              , _ = C.getDate();
            if (O == "yyyy-MM-dd") {
                $ = $ + 1 < 10 ? "0" + ($ + 1) : $ + 1;
                _ = _ < 10 ? "0" + _ : _;
                return J + "-" + $ + "-" + _
            }
            if (O == "MM/dd/yyyy") {
                $ = $ + 1 < 10 ? "0" + ($ + 1) : $ + 1;
                _ = _ < 10 ? "0" + _ : _;
                return $ + "/" + _ + "/" + J
            }
            G = M.replace(/yyyy/g, J);
            G = G.replace(/yy/g, (J + "").substring(2));
            var L = C.getHalfYear();
            G = G.replace(/hy/g, B.halfYearLong[L]);
            var I = C.getQuarter();
            G = G.replace(/Q/g, B.quarterLong[I]);
            G = G.replace(/q/g, B.quarterShort[I]);
            G = G.replace(/MMMM/g, B.monthsLong[$].escapeDateTimeTokens());
            G = G.replace(/MMM/g, B.monthsShort[$].escapeDateTimeTokens());
            G = G.replace(/MM/g, $ + 1 < 10 ? "0" + ($ + 1) : $ + 1);
            G = G.replace(/(\\)?M/g, function(A, _) {
                return _ ? A : $ + 1
            }
            );
            var N = C.getDay();
            G = G.replace(/dddd/g, B.daysLong[N].escapeDateTimeTokens());
            G = G.replace(/ddd/g, B.daysShort[N].escapeDateTimeTokens());
            G = G.replace(/dd/g, _ < 10 ? "0" + _ : _);
            G = G.replace(/(\\)?d/g, function(A, $) {
                return $ ? A : _
            }
            );
            var H = C.getHours()
              , A = H > 12 ? H - 12 : H;
            if (B.clockType == 12)
                if (H > 12)
                    H -= 12;
            G = G.replace(/HH/g, H < 10 ? "0" + H : H);
            G = G.replace(/(\\)?H/g, function(_, $) {
                return $ ? _ : H
            }
            );
            G = G.replace(/hh/g, A < 10 ? "0" + A : A);
            G = G.replace(/(\\)?h/g, function(_, $) {
                return $ ? _ : A
            }
            );
            var D = C.getMinutes();
            G = G.replace(/mm/g, D < 10 ? "0" + D : D);
            G = G.replace(/(\\)?m/g, function(_, $) {
                return $ ? _ : D
            }
            );
            var K = C.getSeconds();
            G = G.replace(/ss/g, K < 10 ? "0" + K : K);
            G = G.replace(/(\\)?s/g, function(_, $) {
                return $ ? _ : K
            }
            );
            G = G.replace(/fff/g, C.getMilliseconds());
            G = G.replace(/tt/g, C.getHours() > 12 || C.getHours() == 0 ? B.tt["PM"] : B.tt["AM"]);
            var C = C.getDate()
              , E = "";
            if (C <= 10)
                E = B.ten["Early"];
            else if (C <= 20)
                E = B.ten["Mid"];
            else
                E = B.ten["Late"];
            G = G.replace(/ten/g, E)
        }
        return G.replace(/\\/g, "")
    }
    ;
    String[prototype].escapeDateTimeTokens = function() {
        return this.replace(/([dMyHmsft])/g, "\\$1")
    }
    ;
    mini.fixDate = function($, _) {
        if (+$)
            while ($.getDate() != _.getDate())
                $[setTime](+$ + ($ < _ ? 1 : -1) * HOUR_MS)
    }
    ;
    mini.parseDate = function(s, ignoreTimezone) {
        try {
            var d = eval(s);
            if (d && d.getFullYear)
                return d
        } catch (ex) {}
        if (typeof s == "object")
            return isNaN(s) ? null  : s;
        if (typeof s == "number") {
            d = new Date(s * 1000);
            if (d[getTime]() != s)
                return null ;
            return isNaN(d) ? null  : d
        }
        if (typeof s == "string") {
            m = s.match(/^([0-9]{4}).([0-9]*)$/);
            if (m) {
                var date = new Date(m[1],m[2] - 1);
                return date
            }
            if (s.match(/^\d+(\.\d+)?$/)) {
                d = new Date(parseFloat(s) * 1000);
                if (d[getTime]() != s)
                    return null ;
                else
                    return d
            }
            if (ignoreTimezone === undefined)
                ignoreTimezone = true;
            d = mini.parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null );
            return isNaN(d) ? null  : d
        }
        return null 
    }
    ;
    mini.parseISO8601 = function(D, $) {
        var _ = D.match(/^([0-9]{4})([-\/]([0-9]{1,2})([-\/]([0-9]{1,2})([T ]([0-9]{1,2}):([0-9]{1,2})(:([0-9]{1,2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
        if (!_) {
            _ = D.match(/^([0-9]{4})[-\/]([0-9]{2})[-\/]([0-9]{2})[T ]([0-9]{1,2})/);
            if (_) {
                var A = new Date(_[1],_[2] - 1,_[3],_[4]);
                return A
            }
            _ = D.match(/^([0-9]{4}).([0-9]*)/);
            if (_) {
                A = new Date(_[1],_[2] - 1);
                return A
            }
            _ = D.match(/^([0-9]{4}).([0-9]*).([0-9]*)/);
            if (_) {
                A = new Date(_[1],_[2] - 1,_[3]);
                return A
            }
            _ = D.match(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/);
            if (!_)
                return null ;
            else {
                A = new Date(_[3],_[1] - 1,_[2]);
                return A
            }
        }
        A = new Date(_[1],0,1);
        if ($ || !_[14]) {
            var C = new Date(_[1],0,1,9,0);
            if (_[3]) {
                A.setMonth(_[3] - 1);
                C.setMonth(_[3] - 1)
            }
            if (_[5]) {
                A.setDate(_[5]);
                C.setDate(_[5])
            }
            mini.fixDate(A, C);
            if (_[7])
                A.setHours(_[7]);
            if (_[8])
                A.setMinutes(_[8]);
            if (_[10])
                A.setSeconds(_[10]);
            if (_[12])
                A.setMilliseconds(Number("0." + _[12]) * 1000);
            mini.fixDate(A, C)
        } else {
            A.setUTCFullYear(_[1], _[3] ? _[3] - 1 : 0, _[5] || 1);
            A.setUTCHours(_[7] || 0, _[8] || 0, _[10] || 0, _[12] ? Number("0." + _[12]) * 1000 : 0);
            var B = Number(_[16]) * 60 + (_[18] ? Number(_[18]) : 0);
            B *= _[15] == "-" ? 1 : -1;
            A = new Date(+A + (B * 60 * 1000))
        }
        return A
    }
    ;
    mini.parseTime = function(E, F) {
        if (!E)
            return null ;
        var B = parseInt(E);
        if (B == E && F) {
            $ = new Date(0);
            if (F[0] == "H")
                $.setHours(B);
            else if (F[0] == "m")
                $.setMinutes(B);
            else if (F[0] == "s")
                $.setSeconds(B);
            return $
        }
        var $ = mini.parseDate(E);
        if (!$) {
            var D = E.split(":")
              , _ = parseInt(parseFloat(D[0]))
              , C = parseInt(parseFloat(D[1]))
              , A = parseInt(parseFloat(D[2]));
            if (!isNaN(_) && !isNaN(C) && !isNaN(A)) {
                $ = new Date(0);
                $.setHours(_);
                $.setMinutes(C);
                $.setSeconds(A)
            }
            if (!isNaN(_) && (F == "H" || F == "HH")) {
                $ = new Date(0);
                $.setHours(_)
            } else if (!isNaN(_) && !isNaN(C) && (F == "H:mm" || F == "HH:mm")) {
                $ = new Date(0);
                $.setHours(_);
                $.setMinutes(C)
            } else if (!isNaN(_) && !isNaN(C) && F == "mm:ss") {
                $ = new Date(0);
                $.setMinutes(_);
                $.setSeconds(C)
            }
        }
        return $
    }
    ;
    mini.dateInfo = {
        monthsLong: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
        monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        daysLong: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
        daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
        quarterLong: ["\u4e00\u5b63\u5ea6", "\u4e8c\u5b63\u5ea6", "\u4e09\u5b63\u5ea6", "\u56db\u5b63\u5ea6"],
        quarterShort: ["Q1", "Q2", "Q2", "Q4"],
        halfYearLong: ["\u4e0a\u534a\u5e74", "\u4e0b\u534a\u5e74"],
        patterns: {
            "d": "yyyy-M-d",
            "D": "yyyy\u5e74M\u6708d\u65e5",
            "f": "yyyy\u5e74M\u6708d\u65e5 H:mm",
            "F": "yyyy\u5e74M\u6708d\u65e5 H:mm:ss",
            "g": "yyyy-M-d H:mm",
            "G": "yyyy-M-d H:mm:ss",
            "m": "MMMd\u65e5",
            "o": "yyyy-MM-ddTHH:mm:ss.fff",
            "s": "yyyy-MM-ddTHH:mm:ss",
            "t": "H:mm",
            "T": "H:mm:ss",
            "U": "yyyy\u5e74M\u6708d\u65e5 HH:mm:ss",
            "y": "yyyy\u5e74MM\u6708"
        },
        tt: {
            "AM": "\u4e0a\u5348",
            "PM": "\u4e0b\u5348"
        },
        ten: {
            "Early": "\u4e0a\u65ec",
            "Mid": "\u4e2d\u65ec",
            "Late": "\u4e0b\u65ec"
        },
        today: "\u4eca\u5929",
        clockType: 24
    };
    mini.append = function(_, A) {
        _ = ooO0(_);
        if (!A || !_)
            return;
        if (typeof A == "string") {
            if (A.charAt(0) == "#") {
                A = ooO0(A);
                if (!A)
                    return;
                _.appendChild(A);
                return A
            } else {
                if (A[indexOf]("<tr") == 0) {
                    return jQuery(_).append(A)[0].lastChild;
                    return
                }
                var $ = document.createElement("div");
                $.innerHTML = A;
                A = $.firstChild;
                while ($.firstChild)
                    _.appendChild($.firstChild);
                return A
            }
        } else {
            _.appendChild(A);
            return A
        }
    }
    ;
    mini.prepend = function(_, A) {
        if (typeof A == "string")
            if (A.charAt(0) == "#")
                A = ooO0(A);
            else {
                var $ = document.createElement("div");
                $.innerHTML = A;
                A = $.firstChild
            }
        return jQuery(_).prepend(A)[0].firstChild
    }
    ;
    mini.after = function(_, A) {
        if (typeof A == "string")
            if (A.charAt(0) == "#")
                A = ooO0(A);
            else {
                var $ = document.createElement("div");
                $.innerHTML = A;
                A = $.firstChild
            }
        if (!A || !_)
            return;
        _.nextSibling ? _.parentNode.insertBefore(A, _.nextSibling) : _.parentNode.appendChild(A);
        return A
    }
    ;
    mini.before = function(_, A) {
        if (typeof A == "string")
            if (A.charAt(0) == "#")
                A = ooO0(A);
            else {
                var $ = document.createElement("div");
                $.innerHTML = A;
                A = $.firstChild
            }
        if (!A || !_)
            return;
        _.parentNode.insertBefore(A, _);
        return A
    }
    ;
    mini.__wrap = document.createElement("div");
    mini.createElements = function($) {
        mini.removeChilds(mini.__wrap);
        var _ = $[indexOf]("<tr") == 0;
        if (_)
            $ = "<table>" + $ + "</table>";
        mini.__wrap.innerHTML = $;
        return _ ? mini.__wrap.firstChild.rows : mini.__wrap.childNodes
    }
    ;
    ooO0 = function(D, A) {
        if (typeof D == "string") {
            if (D.charAt(0) == "#")
                D = D.substr(1);
            var _ = document.getElementById(D);
            if (_)
                return _;
            if (A) {
                var B = A.getElementsByTagName("*");
                for (var $ = 0, C = B.length; $ < C; $++) {
                    _ = B[$];
                    if (_.id == D)
                        return _
                }
                _ = null 
            }
            return _
        } else
            return D
    }
    ;
    O1O1Oo = function($, _) {
        $ = ooO0($);
        if (!$)
            return;
        if (!$.className)
            return false;
        var A = String($.className).split(" ");
        return A[indexOf](_) != -1
    }
    ;
    O0Oo0 = function($, _) {
        if (!_)
            return;
        if (O1O1Oo($, _) == false)
            jQuery($)[addClass](_)
    }
    ;
    Ol00 = function($, _) {
        if (!_)
            return;
        jQuery($)[removeClass](_)
    }
    ;
    o11loo = function($) {
        $ = ooO0($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("margin-top"), 10) || 0,
            left: parseInt(_.css("margin-left"), 10) || 0,
            bottom: parseInt(_.css("margin-bottom"), 10) || 0,
            right: parseInt(_.css("margin-right"), 10) || 0
        }
    }
    ;
    OOoo = function($) {
        $ = ooO0($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("border-top-width"), 10) || 0,
            left: parseInt(_.css("border-left-width"), 10) || 0,
            bottom: parseInt(_.css("border-bottom-width"), 10) || 0,
            right: parseInt(_.css("border-right-width"), 10) || 0
        }
    }
    ;
    OllOo = function($) {
        $ = ooO0($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("padding-top"), 10) || 0,
            left: parseInt(_.css("padding-left"), 10) || 0,
            bottom: parseInt(_.css("padding-bottom"), 10) || 0,
            right: parseInt(_.css("padding-right"), 10) || 0
        }
    }
    ;
    oO1Ol = function(_, $) {
        _ = ooO0(_);
        $ = parseInt($);
        if (isNaN($) || !_)
            return;
        if (jQuery.boxModel) {
            var A = OllOo(_)
              , B = OOoo(_);
            $ = $ - A.left - A.right - B.left - B.right
        }
        if ($ < 0)
            $ = 0;
        _.style.width = $ + "px"
    }
    ;
    OO01 = function(_, $) {
        _ = ooO0(_);
        $ = parseInt($);
        if (isNaN($) || !_)
            return;
        if (jQuery.boxModel) {
            var A = OllOo(_)
              , B = OOoo(_);
            $ = $ - A.top - A.bottom - B.top - B.bottom
        }
        if ($ < 0)
            $ = 0;
        _.style.height = $ + "px"
    }
    ;
    o110O = function($, _) {
        $ = ooO0($);
        if ($.style.display == "none" || $.type == "text/javascript")
            return 0;
        return _ ? jQuery($).width() : jQuery($).outerWidth()
    }
    ;
    lOl10 = function($, _) {
        $ = ooO0($);
        if ($.style.display == "none" || $.type == "text/javascript")
            return 0;
        return _ ? jQuery($).height() : jQuery($).outerHeight()
    }
    ;
    oO11Oo = function(A, C, B, $, _) {
        if (B === undefined) {
            B = C.y;
            $ = C.width;
            _ = C.height;
            C = C.x
        }
        mini[setXY](A, C, B);
        oO1Ol(A, $);
        OO01(A, _)
    }
    ;
    OOl1o0 = function(A) {
        var $ = mini.getXY(A)
          , _ = {
            x: $[0],
            y: $[1],
            width: o110O(A),
            height: lOl10(A)
        };
        _.left = _.x;
        _.top = _.y;
        _.right = _.x + _.width;
        _.bottom = _.y + _.height;
        return _
    }
    ;
    O1lo11 = function(A, B) {
        A = ooO0(A);
        if (!A || typeof B != "string")
            return;
        var F = jQuery(A)
          , _ = B.toLowerCase().split(";");
        for (var $ = 0, C = _.length; $ < C; $++) {
            var E = _[$]
              , D = E.split(":");
            if (D.length == 2)
                F.css(D[0].trim(), D[1].trim())
        }
    }
    ;
    O100 = function() {
        var $ = document.defaultView;
        return new Function("el","style",["style[indexOf]('-')>-1 && (style=style.replace(/-(\\w)/g,function(m,a){return a.toUpperCase()}));", "style=='float' && (style='", $ ? "cssFloat" : "styleFloat", "');return el.style[style] || ", $ ? "window.getComputedStyle(el,null)[style]" : "el.currentStyle[style]", " || null;"].join(""))
    }
    ();
    l1oooo = function(A, $) {
        var _ = false;
        A = ooO0(A);
        $ = ooO0($);
        if (A === $)
            return true;
        if (A && $)
            if (A.contains) {
                try {
                    return A.contains($)
                } catch (B) {
                    return false
                }
            } else if (A.compareDocumentPosition)
                return !!(A.compareDocumentPosition($) & 16);
            else
                while ($ = $.parentNode)
                    _ = $ == A || _;
        return _
    }
    ;
    llOo = function(B, A, $) {
        B = ooO0(B);
        var C = document.body, _ = 0, D;
        $ = $ || 50;
        if (typeof $ != "number") {
            D = ooO0($);
            $ = 10
        }
        while (B && B.nodeType == 1 && _ < $ && B != C && B != D) {
            if (O1O1Oo(B, A))
                return B;
            _++;
            B = B.parentNode
        }
        return null 
    }
    ;
    mini.copyTo(mini, {
        byId: ooO0,
        hasClass: O1O1Oo,
        addClass: O0Oo0,
        removeClass: Ol00,
        getMargins: o11loo,
        getBorders: OOoo,
        getPaddings: OllOo,
        setWidth: oO1Ol,
        setHeight: OO01,
        getWidth: o110O,
        getHeight: lOl10,
        setBox: oO11Oo,
        getBox: OOl1o0,
        setStyle: O1lo11,
        getStyle: O100,
        repaint: function($) {
            if (!$)
                $ = document.body;
            O0Oo0($, "mini-repaint");
            setTimeout(function() {
                Ol00($, "mini-repaint")
            }
            , 1)
        },
        getSize: function($, _) {
            return {
                width: o110O($, _),
                height: lOl10($, _)
            }
        },
        setSize: function(A, $, _) {
            oO1Ol(A, $);
            OO01(A, _)
        },
        setX: function(_, B) {
            B = parseInt(B);
            var $ = jQuery(_).offset()
              , A = parseInt($.top);
            if (A === undefined)
                A = $[1];
            mini[setXY](_, B, A)
        },
        setY: function(_, A) {
            A = parseInt(A);
            var $ = jQuery(_).offset()
              , B = parseInt($.left);
            if (B === undefined)
                B = $[0];
            mini[setXY](_, B, A)
        },
        setXY: function(_, B, A) {
            var $ = {
                left: parseInt(B),
                top: parseInt(A)
            };
            jQuery(_).offset($);
            jQuery(_).offset($)
        },
        getXY: function(_) {
            var $ = jQuery(_).offset();
            return [parseInt($.left), parseInt($.top)]
        },
        getViewportBox: function() {
            var $ = jQuery(window).width()
              , _ = jQuery(window).height()
              , B = jQuery(document).scrollLeft()
              , A = jQuery(document.body).scrollTop();
            if (document.documentElement)
                A = document.documentElement.scrollTop;
            return {
                x: B,
                y: A,
                width: $,
                height: _,
                right: B + $,
                bottom: A + _
            }
        },
        getChildNodes: function(A, C) {
            A = ooO0(A);
            if (!A)
                return;
            var E = A.childNodes
              , B = [];
            for (var $ = 0, D = E.length; $ < D; $++) {
                var _ = E[$];
                if (_.nodeType == 1 || C === true)
                    B.push(_)
            }
            return B
        },
        removeChilds: function(B, _) {
            B = ooO0(B);
            if (!B)
                return;
            var C = mini[getChildNodes](B, true);
            for (var $ = 0, D = C.length; $ < D; $++) {
                var A = C[$];
                if (_ && A == _)
                    ;
                else
                    B.removeChild(C[$])
            }
        },
        isAncestor: l1oooo,
        findParent: llOo,
        findChild: function(_, A) {
            _ = ooO0(_);
            var B = _.getElementsByTagName("*");
            for (var $ = 0, C = B.length; $ < C; $++) {
                var _ = B[$];
                if (O1O1Oo(_, A))
                    return _
            }
        },
        isAncestor: function(A, $) {
            var _ = false;
            A = ooO0(A);
            $ = ooO0($);
            if (A === $)
                return true;
            if (A && $)
                if (A.contains) {
                    try {
                        return A.contains($)
                    } catch (B) {
                        return false
                    }
                } else if (A.compareDocumentPosition)
                    return !!(A.compareDocumentPosition($) & 16);
                else
                    while ($ = $.parentNode)
                        _ = $ == A || _;
            return _
        },
        getOffsetsTo: function(_, A) {
            var $ = this.getXY(_)
              , B = this.getXY(A);
            return [$[0] - B[0], $[1] - B[1]]
        },
        scrollIntoView: function(I, H, F) {
            var B = ooO0(H) || document.body
              , $ = this.getOffsetsTo(I, B)
              , C = $[0] + B.scrollLeft
              , J = $[1] + B.scrollTop
              , D = J + I.offsetHeight
              , A = C + I.offsetWidth
              , G = B.clientHeight
              , K = parseInt(B.scrollTop, 10)
              , _ = parseInt(B.scrollLeft, 10)
              , L = K + G
              , E = _ + B.clientWidth;
            if (I.offsetHeight > G || J < K)
                B.scrollTop = J;
            else if (D > L)
                B.scrollTop = D - G;
            B.scrollTop = B.scrollTop;
            if (F !== false) {
                if (I.offsetWidth > B.clientWidth || C < _)
                    B.scrollLeft = C;
                else if (A > E)
                    B.scrollLeft = A - B.clientWidth;
                B.scrollLeft = B.scrollLeft
            }
            return this
        },
        setOpacity: function(_, $) {
            jQuery(_).css({
                "opacity": $
            })
        },
        selectable: function(_, $) {
            _ = ooO0(_);
            if (!!$) {
                jQuery(_)[removeClass]("mini-unselectable");
                if (isIE)
                    _.unselectable = "off";
                else {
                    _.style.MozUserSelect = "";
                    _.style.KhtmlUserSelect = "";
                    _.style.UserSelect = ""
                }
            } else {
                jQuery(_)[addClass]("mini-unselectable");
                if (isIE)
                    _.unselectable = "on";
                else {
                    _.style.MozUserSelect = "none";
                    _.style.UserSelect = "none";
                    _.style.KhtmlUserSelect = "none"
                }
            }
        },
        selectRange: function(B, A, _) {
            if (B.createTextRange) {
                var $ = B.createTextRange();
                $.moveStart("character", A);
                $.moveEnd("character", _ - B.value.length);
                $[select]()
            } else if (B.setSelectionRange)
                B.setSelectionRange(A, _);
            try {
                B[focus]()
            } catch (C) {}
        },
        getSelectRange: function(A) {
            A = ooO0(A);
            if (!A)
                return;
            try {
                A[focus]()
            } catch (C) {}
            var $ = 0
              , B = 0;
            if (A.createTextRange) {
                var _ = document.selection.createRange().duplicate();
                _.moveEnd("character", A.value.length);
                if (_.text === "")
                    $ = A.value.length;
                else
                    $ = A.value.lastIndexOf(_.text);
                _ = document.selection.createRange().duplicate();
                _.moveStart("character", -A.value.length);
                B = _.text.length
            } else {
                $ = A.selectionStart;
                B = A.selectionEnd
            }
            return [$, B]
        }
    });
    (function() {
        var $ = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        }
          , _ = document.createElement("div");
        _.setAttribute("class", "t");
        var A = _.className === "t";
        mini.setAttr = function(B, C, _) {
            B.setAttribute(A ? C : ($[C] || C), _)
        }
        ;
        mini.getAttr = function(B, C) {
            if (C == "value" && (isIE6 || isIE7)) {
                var _ = B.attributes[C];
                return _ ? _.value : null 
            }
            var D = B.getAttribute(A ? C : ($[C] || C));
            if (typeof D == "function")
                D = B.attributes[C].value;
            return D
        }
    }
    )();
    O0l10 = function(_, $, C, A) {
        var B = "on" + $.toLowerCase();
        _[B] = function(_) {
            _ = _ || window.event;
            _.target = _.target || _.srcElement;
            if (!_.preventDefault)
                _.preventDefault = function() {
                    if (window.event)
                        window.event.returnValue = false
                }
                ;
            if (!_.stopPropogation)
                _.stopPropogation = function() {
                    if (window.event)
                        window.event.cancelBubble = true
                }
                ;
            var $ = C[call](A, _);
            if ($ === false)
                return false
        }
    }
    ;
    l1Oo0O = function(_, $, D, A) {
        _ = ooO0(_);
        A = A || _;
        if (!_ || !$ || !D || !A)
            return false;
        var B = mini[findListener](_, $, D, A);
        if (B)
            return false;
        var C = mini.createDelegate(D, A);
        mini.listeners.push([_, $, D, A, C]);
        if (isFirefox && $ == "mousewheel")
            $ = "DOMMouseScroll";
        jQuery(_).bind($, C)
    }
    ;
    O1l0 = function(_, $, C, A) {
        _ = ooO0(_);
        A = A || _;
        if (!_ || !$ || !C || !A)
            return false;
        var B = mini[findListener](_, $, C, A);
        if (!B)
            return false;
        mini.listeners.remove(B);
        if (isFirefox && $ == "mousewheel")
            $ = "DOMMouseScroll";
        jQuery(_).unbind($, B[4])
    }
    ;
    mini.copyTo(mini, {
        listeners: [],
        on: l1Oo0O,
        un: O1l0,
        findListener: function(A, _, F, B) {
            A = ooO0(A);
            B = B || A;
            if (!A || !_ || !F || !B)
                return false;
            var D = mini.listeners;
            for (var $ = 0, E = D.length; $ < E; $++) {
                var C = D[$];
                if (C[0] == A && C[1] == _ && C[2] == F && C[3] == B)
                    return C
            }
        },
        clearEvent: function(A, _) {
            A = ooO0(A);
            if (!A)
                return false;
            var C = mini.listeners;
            for (var $ = C.length - 1; $ >= 0; $--) {
                var B = C[$];
                if (B[0] == A)
                    if (!_ || _ == B[1])
                        O1l0(A, B[1], B[2], B[3])
            }
            A.onmouseover = A.onmousedown = null 
        }
    });
    mini.__windowResizes = [];
    mini.onWindowResize = function(_, $) {
        mini.__windowResizes.push([_, $])
    }
    ;
    l1Oo0O(window, "resize", function(C) {
        var _ = mini.__windowResizes;
        for (var $ = 0, B = _.length; $ < B; $++) {
            var A = _[$];
            A[0][call](A[1], C)
        }
    }
    );
    mini.htmlEncode = function(_) {
        if (typeof _ !== "string")
            return _;
        var $ = "";
        if (_.length == 0)
            return "";
        $ = _;
        $ = $.replace(/</g, "&lt;");
        $ = $.replace(/>/g, "&gt;");
        $ = $.replace(/ /g, "&nbsp;");
        $ = $.replace(/\'/g, "&#39;");
        $ = $.replace(/\"/g, "&quot;");
        return $
    }
    ;
    mini.htmlDecode = function(_) {
        if (typeof _ !== "string")
            return _;
        var $ = "";
        if (_.length == 0)
            return "";
        $ = _.replace(/&gt;/g, "&");
        $ = $.replace(/&lt;/g, "<");
        $ = $.replace(/&gt;/g, ">");
        $ = $.replace(/&nbsp;/g, " ");
        $ = $.replace(/&#39;/g, "'");
        $ = $.replace(/&quot;/g, "\"");
        return $
    }
    ;
    mini.copyTo(Array.prototype, {
        add: Array[prototype].enqueue = function($) {
            this[this.length] = $;
            return this
        }
        ,
        getRange: function(A, B) {
            var C = [];
            for (var _ = A; _ <= B; _++) {
                var $ = this[_];
                if ($)
                    C[C.length] = $
            }
            return C
        },
        addRange: function(A) {
            for (var $ = 0, _ = A.length; $ < _; $++)
                this[this.length] = A[$];
            return this
        },
        clear: function() {
            this.length = 0;
            return this
        },
        clone: function() {
            if (this.length === 1)
                return [this[0]];
            else
                return Array.apply(null , this)
        },
        contains: function($) {
            return ( this[indexOf]($) >= 0) 
        },
        indexOf: function(_, B) {
            var $ = this.length;
            for (var A = (B < 0) ? Math[max](0, $ + B) : B || 0; A < $; A++)
                if (this[A] === _)
                    return A;
            return -1
        },
        dequeue: function() {
            return this.shift()
        },
        insert: function(_, $) {
            this.splice(_, 0, $);
            return this
        },
        insertRange: function(_, B) {
            for (var A = B.length - 1; A >= 0; A--) {
                var $ = B[A];
                this.splice(_, 0, $)
            }
            return this
        },
        remove: function(_) {
            var $ = this[indexOf](_);
            if ($ >= 0)
                this.splice($, 1);
            return ( $ >= 0) 
        },
        removeAt: function($) {
            var _ = this[$];
            this.splice($, 1);
            return _
        },
        removeRange: function(_) {
            _ = _.clone();
            for (var $ = 0, A = _.length; $ < A; $++)
                this.remove(_[$])
        }
    });
    mini.Keyboard = {
        Left: 37,
        Top: 38,
        Right: 39,
        Bottom: 40,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        Enter: 13,
        ESC: 27,
        Space: 32,
        Tab: 9,
        Del: 46,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123
    };
    var ua = navigator.userAgent.toLowerCase()
      , check = function($) {
        return $.test(ua)
    }
      , DOC = document
      , isStrict = DOC.compatMode == "CSS1Compat"
      , isOpera = Object[prototype].toString[call](window.opera) == "[object Opera]"
      , isChrome = check(/chrome/)
      , isWebKit = check(/webkit/)
      , isSafari = !isChrome && check(/safari/)
      , isSafari2 = isSafari && check(/applewebkit\/4/)
      , isSafari3 = isSafari && check(/version\/3/)
      , isSafari4 = isSafari && check(/version\/4/)
      , isIE = !!window.attachEvent && !isOpera
      , isIE7 = isIE && check(/msie 7/)
      , isIE8 = isIE && check(/msie 8/)
      , isIE9 = isIE && check(/msie 9/)
      , isIE10 = isIE && document.documentMode == 10
      , isIE6 = isIE && !isIE7 && !isIE8 && !isIE9 && !isIE10
      , isFirefox = navigator.userAgent[indexOf]("Firefox") > 0
      , isGecko = !isWebKit && check(/gecko/)
      , isGecko2 = isGecko && check(/rv:1\.8/)
      , isGecko3 = isGecko && check(/rv:1\.9/)
      , isBorderBox = isIE && !isStrict
      , isWindows = check(/windows|win32/)
      , isMac = check(/macintosh|mac os x/)
      , isAir = check(/adobeair/)
      , isLinux = check(/linux/)
      , isSecure = /^https/i.test(window.location.protocol);
    if (isIE6) {
        try {
            DOC.execCommand("BackgroundImageCache", false, true)
        } catch (e) {}
    }
    mini.boxModel = !isBorderBox;
    mini.isIE = isIE;
    mini.isIE6 = isIE6;
    mini.isIE7 = isIE7;
    mini.isIE8 = isIE8;
    mini.isIE9 = isIE9;
    mini.isFirefox = isFirefox;
    mini.isOpera = isOpera;
    mini.isSafari = isSafari;
    if (jQuery)
        jQuery.boxModel = mini.boxModel;
    mini.noBorderBox = false;
    if (jQuery.boxModel == false && isIE && isIE9 == false)
        mini.noBorderBox = true;
    mini.MouseButton = {
        Left: 0,
        Middle: 1,
        Right: 2
    };
    if (isIE && !isIE9)
        mini.MouseButton = {
            Left: 1,
            Middle: 4,
            Right: 2
        };
    mini._MaskID = 1;
    mini._MaskObjects = {};
    mini[mask] = function(C) {
        var _ = ooO0(C);
        if (mini.isElement(_))
            C = {
                el: _
            };
        else if (typeof C == "string")
            C = {
                html: C
            };
        C = mini.copyTo({
            html: "",
            cls: "",
            style: "",
            backStyle: "background:#ccc"
        }, C);
        C.el = ooO0(C.el);
        if (!C.el)
            C.el = document.body;
        _ = C.el;
        mini["unmask"](C.el);
        _._maskid = mini._MaskID++;
        mini._MaskObjects[_._maskid] = C;
        var $ = mini.append(_, "<div class=\"mini-mask\">" + "<div class=\"mini-mask-background\" style=\"" + C.backStyle + "\"></div>" + "<div class=\"mini-mask-msg " + C.cls + "\" style=\"" + C.style + "\">" + C.html + "</div>" + "</div>");
        C.maskEl = $;
        if (!mini.isNull(C.opacity))
            mini.setOpacity($.firstChild, C.opacity);
        function A() {
            B.style.display = "block";
            var $ = mini.getSize(B);
            B.style.marginLeft = -$.width / 2 + "px";
            B.style.marginTop = -$.height / 2 + "px"
        }
        var B = $.lastChild;
        B.style.display = "none";
        setTimeout(function() {
            A()
        }
        , 0)
    }
    ;
    mini["unmask"] = function(_) {
        _ = ooO0(_);
        if (!_)
            _ = document.body;
        var A = mini._MaskObjects[_._maskid];
        if (!A)
            return;
        delete mini._MaskObjects[_._maskid];
        var $ = A.maskEl;
        A.maskEl = null ;
        if ($ && $.parentNode)
            $.parentNode.removeChild($)
    }
    ;
    mini.Cookie = {
        get: function(D) {
            var A = document.cookie.split("; ")
              , B = null ;
            for (var $ = 0; $ < A.length; $++) {
                var _ = A[$].split("=");
                if (D == _[0])
                    B = _
            }
            if (B) {
                var C = B[1];
                if (C === undefined)
                    return C;
                return unescape(C)
            }
            return null 
        },
        set: function(C, $, B, A) {
            var _ = new Date();
            if (B != null )
                _ = new Date(_[getTime]() + (B * 1000 * 3600 * 24));
            document.cookie = C + "=" + escape($) + ((B == null ) ? "" : ("; expires=" + _.toGMTString())) + ";path=/" + (A ? "; domain=" + A : "")
        },
        del: function(_, $) {
            this[set](_, null , -100, $)
        }
    };
    mini.copyTo(mini, {
        treeToArray: function(C, I, J, A, $) {
            if (!I)
                I = "children";
            var F = [];
            for (var H = 0, D = C.length; H < D; H++) {
                var B = C[H];
                F[F.length] = B;
                if (A)
                    B[A] = $;
                var _ = B[I];
                if (_ && _.length > 0) {
                    var E = B[J]
                      , G = this[treeToArray](_, I, J, A, E);
                    F.addRange(G)
                }
            }
            return F
        },
        arrayToTree: function(C, A, H, B) {
            if (!A)
                A = "children";
            H = H || "_id";
            B = B || "_pid";
            var G = []
              , F = {};
            for (var _ = 0, E = C.length; _ < E; _++) {
                var $ = C[_];
                if (!$)
                    continue;var I = $[H];
                if (I !== null  && I !== undefined)
                    F[I] = $;
                delete $[A]
            }
            for (_ = 0,
            E = C.length; _ < E; _++) {
                var $ = C[_]
                  , D = F[$[B]];
                if (!D) {
                    G.push($);
                    continue
                }
                if (!D[A])
                    D[A] = [];
                D[A].push($)
            }
            return G
        }
    });
    mini.treeToList = mini[treeToArray];
    mini.listToTree = mini.arrayToTree;
    function UUID() {
        var A = []
          , _ = "0123456789ABCDEF".split("");
        for (var $ = 0; $ < 36; $++)
            A[$] = Math.floor(Math.random() * 16);
        A[14] = 4;
        A[19] = (A[19] & 3) | 8;
        for ($ = 0; $ < 36; $++)
            A[$] = _[A[$]];
        A[8] = A[13] = A[18] = A[23] = "-";
        return A.join("")
    }
    String.format = function(_) {
        var $ = Array[prototype].slice[call](arguments, 1);
        _ = _ || "";
        return _.replace(/\{(\d+)\}/g, function(A, _) {
            return $[_]
        }
        )
    }
    ;
    String[prototype].trim = function() {
        var $ = /^\s+|\s+$/g;
        return function() {
            return this.replace($, "")
        }
    }
    ();
    mini.copyTo(mini, {
        measureText: function(B, _, C) {
            if (!this.measureEl)
                this.measureEl = mini.append(document.body, "<div></div>");
            this.measureEl.style.cssText = "position:absolute;left:-1000px;top:-1000px;visibility:hidden;";
            if (typeof B == "string")
                this.measureEl.className = B;
            else {
                this.measureEl.className = "";
                var G = jQuery(B)
                  , A = jQuery(this.measureEl)
                  , F = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                for (var $ = 0, E = F.length; $ < E; $++) {
                    var D = F[$];
                    A.css(D, G.css(D))
                }
            }
            if (C)
                O1lo11(this.measureEl, C);
            this.measureEl.innerHTML = _;
            return mini.getSize(this.measureEl)
        }
    });
    jQuery(function() {
        var $ = new Date();
        mini.isReady = true;
        mini.parse();
        ll0O();
        if ((O100(document.body, "overflow") == "hidden" || O100(document.documentElement, "overflow") == "hidden") && (isIE6 || isIE7)) {
            jQuery(document.body).css("overflow", "visible");
            jQuery(document.documentElement).css("overflow", "visible")
        }
        mini.__LastWindowWidth = document.documentElement.clientWidth;
        mini.__LastWindowHeight = document.documentElement.clientHeight
    }
    );
    mini_onload = function($) {
        mini.layout(null , false);
        l1Oo0O(window, "resize", mini_onresize)
    }
    ;
    l1Oo0O(window, "load", mini_onload);
    mini.__LastWindowWidth = document.documentElement.clientWidth;
    mini.__LastWindowHeight = document.documentElement.clientHeight;
    mini.doWindowResizeTimer = null ;
    mini.allowLayout = true;
    mini_onresize = function(A) {
        if (mini.doWindowResizeTimer)
            clearTimeout(mini.doWindowResizeTimer);
        olo11o = mini.isWindowDisplay();
        if (olo11o == false || mini.allowLayout == false)
            return;
        if (typeof Ext != "undefined")
            mini.doWindowResizeTimer = setTimeout(function() {
                var _ = document.documentElement.clientWidth
                  , $ = document.documentElement.clientHeight;
                if (mini.__LastWindowWidth == _ && mini.__LastWindowHeight == $)
                    ;
                else {
                    mini.__LastWindowWidth = _;
                    mini.__LastWindowHeight = $;
                    mini.layout(null , false)
                }
                mini.doWindowResizeTimer = null 
            }
            , 300);
        else {
            var $ = 100;
            try {
                if (parent && parent != window && parent.mini)
                    $ = 0
            } catch (_) {}
            mini.doWindowResizeTimer = setTimeout(function() {
                var _ = document.documentElement.clientWidth
                  , $ = document.documentElement.clientHeight;
                if (mini.__LastWindowWidth == _ && mini.__LastWindowHeight == $)
                    ;
                else {
                    mini.__LastWindowWidth = _;
                    mini.__LastWindowHeight = $;
                    mini.layout(null , false)
                }
                mini.doWindowResizeTimer = null 
            }
            , $)
        }
    }
    ;
    mini[isDisplay] = function(_, A) {
        var $ = A || document.body;
        while (1) {
            if (_ == null  || !_.style)
                return false;
            if (_ && _.style && _.style.display == "none")
                return false;
            if (_ == $)
                return true;
            _ = _.parentNode
        }
        return true
    }
    ;
    mini.isWindowDisplay = function() {
        try {
            var _ = window.parent
              , E = _ != window;
            if (E) {
                var C = _.document.getElementsByTagName("iframe")
                  , H = _.document.getElementsByTagName("frame")
                  , G = [];
                for (var $ = 0, D = C.length; $ < D; $++)
                    G.push(C[$]);
                for ($ = 0,
                D = H.length; $ < D; $++)
                    G.push(H[$]);
                var B = null ;
                for ($ = 0,
                D = G.length; $ < D; $++) {
                    var A = G[$];
                    if (A.contentWindow == window) {
                        B = A;
                        break
                    }
                }
                if (!B)
                    return false;
                return mini[isDisplay](B, _.document.body)
            } else
                return true
        } catch (F) {
            return true
        }
    }
    ;
    olo11o = mini.isWindowDisplay();
    mini.layoutIFrames = function($) {
        if (!$)
            $ = document.body;
        if (!$)
            return;
        var _ = $.getElementsByTagName("iframe");
        setTimeout(function() {
            for (var A = 0, C = _.length; A < C; A++) {
                var B = _[A];
                try {
                    if (mini[isDisplay](B) && l1oooo($, B)) {
                        if (B.contentWindow.mini)
                            if (B.contentWindow.olo11o == false) {
                                B.contentWindow.olo11o = B.contentWindow.mini.isWindowDisplay();
                                B.contentWindow.mini.layout()
                            } else
                                B.contentWindow.mini.layout(null , false);
                        B.contentWindow.mini.layoutIFrames()
                    }
                } catch (D) {}
            }
        }
        , 30)
    }
    ;
    $.ajaxSetup({
        cache: false
    });
    if (isIE)
        setInterval(function() {
            CollectGarbage()
        }
        , 1000);
    mini_unload = function(H) {
        try {
            var E = mini._getTopWindow();
            E[mini._WindowID] = "";
            delete E[mini._WindowID]
        } catch (D) {}
        var G = document.body.getElementsByTagName("iframe");
        if (G.length > 0) {
            var F = [];
            for (var $ = 0, C = G.length; $ < C; $++)
                F.push(G[$]);
            for ($ = 0,
            C = F.length; $ < C; $++) {
                try {
                    var B = F[$];
                    B.src = "";
                    try {
                        B.contentWindow.document.write("");
                        B.contentWindow.document.close()
                    } catch (D) {}
                    if (B.parentNode)
                        B.parentNode.removeChild(B)
                } catch (H) {}
            }
        }
        var A = mini.getComponents();
        for ($ = 0,
        C = A.length; $ < C; $++) {
            var _ = A[$];
            _[destroy](false)
        }
        A.length = 0;
        A = null ;
        O1l0(window, "unload", mini_unload);
        O1l0(window, "load", mini_onload);
        O1l0(window, "resize", mini_onresize);
        mini.components = {};
        mini.classes = {};
        mini.uiClasses = {};
        mini.uids = {};
        mini._topWindow = null ;
        window.mini = null ;
        window.Owner = null ;
        window.CloseOwnerWindow = null ;
        try {
            CollectGarbage()
        } catch (H) {}
    }
    ;
    l1Oo0O(window, "unload", mini_unload);
    function __OnIFrameMouseDown() {
        jQuery(document).trigger("mousedown")
    }
    function _O1lOO() {
        var C = document.getElementsByTagName("iframe");
        for (var $ = 0, A = C.length; $ < A; $++) {
            var _ = C[$];
            try {
                if (_.contentWindow)
                    _.contentWindow.document.onmousedown = __OnIFrameMouseDown
            } catch (B) {}
        }
    }
    setInterval(function() {
        _O1lOO()
    }
    , 1500);
    mini.zIndex = 1000;
    mini.getMaxZIndex = function() {
        return mini.zIndex++
    }
    ;
    function js_isTouchDevice() {
        try {
            document.createEvent("TouchEvent");
            return true
        } catch ($) {
            return false
        }
    }
    function js_touchScroll(A) {
        if (js_isTouchDevice()) {
            var _ = typeof A == "string" ? document.getElementById(A) : A
              , $ = 0;
            _.addEventListener("touchstart", function(_) {
                $ = this.scrollTop + _.touches[0].pageY;
                _.preventDefault()
            }
            , false);
            _.addEventListener("touchmove", function(_) {
                this.scrollTop = $ - _.touches[0].pageY;
                _.preventDefault()
            }
            , false)
        }
    }
    mini._placeholder = function(A) {
        A = ooO0(A);
        if (!A || !isIE || isIE10)
            return;
        function $() {
            var _ = A._placeholder_label;
            if (!_)
                return;
            var $ = A.getAttribute("placeholder");
            if (!$)
                $ = A.placeholder;
            if (!A.value && !A.disabled) {
                _.innerHTML = $;
                _.style.display = ""
            } else
                _.style.display = "none"
        }
        if (A._placeholder) {
            $();
            return
        }
        A._placeholder = true;
        var _ = document.createElement("label");
        _.className = "mini-placeholder-label";
        A.parentNode.appendChild(_);
        A._placeholder_label = _;
        _.onmousedown = function() {
            A[focus]()
        }
        ;
        A.onpropertychange = function(_) {
            _ = _ || window.event;
            if (_.propertyName == "value")
                $()
        }
        ;
        $();
        l1Oo0O(A, "focus", function($) {
            if (!A[readOnly])
                _.style.display = "none"
        }
        );
        l1Oo0O(A, "blur", function(_) {
            $()
        }
        )
    }
    ;
    mini.ajax = function($) {
        if (!$.dataType)
            $.dataType = "text";
        return window.jQuery.ajax($)
    }
    ;
    if (typeof window.rootpath == "undefined")
        rootpath = "/";
    mini.loadJS = function(_, $) {
        if (!_)
            return;
        if (typeof $ == "function")
            return loadJS._async(_, $);
        else
            return loadJS._sync(_)
    }
    ;
    mini.loadJS._js = {};
    mini.loadJS._async = function(D, _) {
        var C = mini.loadJS._js[D];
        if (!C)
            C = mini.loadJS._js[D] = {
                create: false,
                loaded: false,
                callbacks: []
            };
        if (C.loaded) {
            setTimeout(function() {
                _()
            }
            , 1);
            return
        } else {
            C.callbacks.push(_);
            if (C.create)
                return
        }
        C.create = true;
        var B = document.getElementsByTagName("head")[0]
          , A = document.createElement("script");
        A.src = D;
        A.type = "text/javascript";
        function $() {
            for (var $ = 0; $ < C.callbacks.length; $++) {
                var _ = C.callbacks[$];
                if (_)
                    _()
            }
            C.callbacks.length = 0
        }
        setTimeout(function() {
            if (document.all)
                A.onreadystatechange = function() {
                    if (A.readyState == "loaded" || A.readyState == "complete") {
                        $();
                        C.loaded = true
                    }
                }
                ;
            else
                A.onload = function() {
                    $();
                    C.loaded = true
                }
                ;
            B.appendChild(A)
        }
        , 1);
        return A
    }
    ;
    mini.loadJS._sync = function(A) {
        if (loadJS._js[A])
            return;
        loadJS._js[A] = {
            create: true,
            loaded: true,
            callbacks: []
        };
        var _ = document.getElementsByTagName("head")[0]
          , $ = document.createElement("script");
        $.type = "text/javascript";
        $.text = loadText(A);
        _.appendChild($);
        return $
    }
    ;
    mini.loadText = function(C) {
        var B = ""
          , D = document.all && location.protocol == "file:"
          , A = null ;
        if (D)
            A = new ActiveXObject("Microsoft.XMLHTTP");
        else if (window.XMLHttpRequest)
            A = new XMLHttpRequest();
        else if (window.ActiveXObject)
            A = new ActiveXObject("Microsoft.XMLHTTP");
        A.onreadystatechange = $;
        var _ = "_t=" + new Date()[getTime]();
        if (C[indexOf]("?") == -1)
            _ = "?" + _;
        else
            _ = "&" + _;
        C += _;
        A.open("GET", C, false);
        A.send(null );
        function $() {
            if (A.readyState == 4) {
                var $ = D ? 0 : 200;
                if (A.status == $)
                    B = A.responseText
            }
        }
        return B
    }
    ;
    mini.loadJSON = function(url) {
        var text = loadText(url)
          , o = eval("(" + text + ")");
        return o
    }
    ;
    mini.loadCSS = function(A, B) {
        if (!A)
            return;
        if (loadCSS._css[A])
            return;
        var $ = document.getElementsByTagName("head")[0]
          , _ = document.createElement("link");
        if (B)
            _.id = B;
        _.href = A;
        _.rel = "stylesheet";
        _.type = "text/css";
        $.appendChild(_);
        return _
    }
    ;
    mini.loadCSS._css = {};
    mini.innerHTML = function(A, _) {
        if (typeof A == "string")
            A = document.getElementById(A);
        if (!A)
            return;
        _ = "<div style=\"display:none\">&nbsp;</div>" + _;
        A.innerHTML = _;
        mini.__executeScripts(A);
        var $ = A.firstChild
    }
    ;
    mini.__executeScripts = function($) {
        var A = $.getElementsByTagName("script");
        for (var _ = 0, E = A.length; _ < E; _++) {
            var B = A[_]
              , D = B.src;
            if (D)
                mini.loadJS(D);
            else {
                var C = document.createElement("script");
                C.type = "text/javascript";
                C.text = B.text;
                $.appendChild(C)
            }
        }
        for (_ = A.length - 1; _ >= 0; _--) {
            B = A[_];
            B.parentNode.removeChild(B)
        }
    }
    ;
    mini.DataBinding = function() {
        this._bindFields = [];
        this._bindForms = [];
        mini.DataBinding[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.DataBinding, mini.Component, {});
    lo1OO = mini.DataBinding[prototype];
    lo1OO.loOlo0 = lO0O1;
    lo1OO.O001O = ol0l0;
    lo1OO[bindForm] = Ol0o1;
    lo1OO[bindField] = ll111;
    l00O(mini.DataBinding, "databinding");
    mini.DataSet = function() {
        this._sources = {};
        this._data = {};
        this._links = [];
        this.OO0Ool = {};
        mini.DataSet[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.DataSet, mini.Component, {});
    ooOOo = mini.DataSet[prototype];
    ooOOo.OO1O0 = oO0O10;
    ooOOo.o11O = O1OO;
    ooOOo.OOo011 = ooo01;
    ooOOo.ooOloo = O11lo;
    ooOOo.o00O00 = ll11o;
    ooOOo.Ol0ol1 = lO11;
    ooOOo.oo1ll = lOloo;
    ooOOo[getData] = OOoOO;
    ooOOo[clearData] = ll1Oo;
    ooOOo[addLink] = oO01l;
    ooOOo[add] = o0ol1;
    l00O(mini.DataSet, "dataset");
    mini.Hidden = function() {
        mini.Hidden[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Hidden, mini.Control, {
        _clearBorder: false,
        formField: true,
        value: "",
        uiCls: "mini-hidden"
    });
    l00Ool = mini.Hidden[prototype];
    l00Ool[getFormValue] = OO1OO;
    l00Ool[getValue] = ollOo;
    l00Ool[setValue] = o1loo;
    l00Ool[setName] = lO1o1;
    l00Ool[_create] = llo1O;
    l00O(mini.Hidden, "hidden");
    mini.Popup = function() {
        mini.Popup[superclass][constructor][call](this);
        this[setVisible](false);
        this[setAllowDrag](this.allowDrag);
        this[setAllowResize](this[allowResize])
    }
    ;
    O00lO(mini.Popup, mini.Container, {
        _clearBorder: false,
        uiCls: "mini-popup"
    });
    ooo1 = mini.Popup[prototype];
    ooo1[getAttrs] = O0l11;
    ooo1[setBody] = O1ol;
    ooo1[setHeight] = O0O00;
    ooo1[setWidth] = o110o;
    ooo1[destroy] = oO0O;
    ooo1[doLayout] = oO1lO;
    ooo1[_initEvents] = ool1O;
    ooo1[_create] = OO0l;
    l00O(mini.Popup, "popup");
    l0ooOO_prototype = {
        isPopup: false,
        popupEl: null ,
        popupCls: "",
        showAction: "mouseover",
        hideAction: "outerclick",
        showDelay: 300,
        hideDelay: 500,
        xAlign: "left",
        yAlign: "below",
        xOffset: 0,
        yOffset: 0,
        minWidth: 50,
        minHeight: 25,
        maxWidth: 2000,
        maxHeight: 2000,
        showModal: false,
        showShadow: true,
        modalStyle: "opacity:0.2",
        llOolO: "mini-popup-drag",
        lll010: "mini-popup-resize",
        allowDrag: false,
        allowResize: false,
        ol101: function() {
            if (!this.popupEl)
                return;
            O1l0(this.popupEl, "click", this.loO11l, this);
            O1l0(this.popupEl, "contextmenu", this.ooOl0O, this);
            O1l0(this.popupEl, "mouseover", this.ol0OOo, this)
        },
        o11O0: function() {
            if (!this.popupEl)
                return;
            l1Oo0O(this.popupEl, "click", this.loO11l, this);
            l1Oo0O(this.popupEl, "contextmenu", this.ooOl0O, this);
            l1Oo0O(this.popupEl, "mouseover", this.ol0OOo, this)
        },
        doShow: function(A) {
            var $ = {
                popupEl: this.popupEl,
                htmlEvent: A,
                cancel: false
            };
            this[fire]("BeforeOpen", $);
            if ($.cancel == true)
                return;
            this[fire]("opening", $);
            if ($.cancel == true)
                return;
            if (!this.popupEl)
                this[show]();
            else {
                var _ = {};
                if (A)
                    _.xy = [A.pageX, A.pageY];
                this[showAtEl](this.popupEl, _)
            }
        },
        doHide: function(_) {
            var $ = {
                popupEl: this.popupEl,
                htmlEvent: _,
                cancel: false
            };
            this[fire]("BeforeClose", $);
            if ($.cancel == true)
                return;
            this.close()
        },
        show: function(_, $) {
            this[showAtPos](_, $)
        },
        showAtPos: function(B, A) {
            this[render](document.body);
            if (!B)
                B = "center";
            if (!A)
                A = "middle";
            this.el.style.position = "absolute";
            this.el.style.left = "-2000px";
            this.el.style.top = "-2000px";
            this.el.style.display = "";
            this.l001();
            var _ = mini.getViewportBox()
              , $ = OOl1o0(this.el);
            if (B == "left")
                B = 0;
            if (B == "center")
                B = _.width / 2 - $.width / 2;
            if (B == "right")
                B = _.width - $.width;
            if (A == "top")
                A = 0;
            if (A == "middle")
                A = _.y + _.height / 2 - $.height / 2;
            if (A == "bottom")
                A = _.height - $.height;
            if (B + $.width > _.right)
                B = _.right - $.width;
            if (A + $.height > _.bottom)
                A = _.bottom - $.height - 20;
            this.l001ol(B, A)
        },
        Oo0olO: function() {
            jQuery(this.o11o00).remove();
            if (!this[showModal])
                return;
            if (this.visible == false)
                return;
            var $ = document.documentElement
              , A = parseInt(Math[max](document.body.scrollWidth, $ ? $.scrollWidth : 0))
              , D = parseInt(Math[max](document.body.scrollHeight, $ ? $.scrollHeight : 0))
              , C = mini.getViewportBox()
              , B = C.height;
            if (B < D)
                B = D;
            var _ = C.width;
            if (_ < A)
                _ = A;
            this.o11o00 = mini.append(document.body, "<div class=\"mini-modal\"></div>");
            this.o11o00.style.height = B + "px";
            this.o11o00.style.width = _ + "px";
            this.o11o00.style.zIndex = O100(this.el, "zIndex") - 1;
            O1lo11(this.o11o00, this.modalStyle)
        },
        o000l1: function() {
            if (!this.shadowEl)
                this.shadowEl = mini.append(document.body, "<div class=\"mini-shadow\"></div>");
            this.shadowEl.style.display = this[showShadow] ? "" : "none";
            if (this[showShadow]) {
                function $() {
                    this.shadowEl.style.display = "";
                    var $ = OOl1o0(this.el)
                      , A = this.shadowEl.style;
                    A.width = $.width + "px";
                    A.height = $.height + "px";
                    A.left = $.x + "px";
                    A.top = $.y + "px";
                    var _ = O100(this.el, "zIndex");
                    if (!isNaN(_))
                        this.shadowEl.style.zIndex = _ - 2
                }
                this.shadowEl.style.display = "none";
                if (this.o000l1Timer) {
                    clearTimeout(this.o000l1Timer);
                    this.o000l1Timer = null 
                }
                var _ = this;
                this.o000l1Timer = setTimeout(function() {
                    _.o000l1Timer = null ;
                    $[call](_)
                }
                , 20)
            }
        },
        l001: function() {
            this.el.style.display = "";
            var $ = OOl1o0(this.el);
            if ($.width > this.maxWidth) {
                oO1Ol(this.el, this.maxWidth);
                $ = OOl1o0(this.el)
            }
            if ($.height > this.maxHeight) {
                OO01(this.el, this.maxHeight);
                $ = OOl1o0(this.el)
            }
            if ($.width < this.minWidth) {
                oO1Ol(this.el, this.minWidth);
                $ = OOl1o0(this.el)
            }
            if ($.height < this.minHeight) {
                OO01(this.el, this.minHeight);
                $ = OOl1o0(this.el)
            }
        },
        showAtEl: function(H, D) {
            H = ooO0(H);
            if (!H)
                return;
            if (!this[isRender]() || this.el.parentNode != document.body)
                this[render](document.body);
            var A = {
                xAlign: this.xAlign,
                yAlign: this.yAlign,
                xOffset: this.xOffset,
                yOffset: this.yOffset,
                popupCls: this.popupCls
            };
            mini.copyTo(A, D);
            O0Oo0(H, A.popupCls);
            H.popupCls = A.popupCls;
            this._popupEl = H;
            this.el.style.position = "absolute";
            this.el.style.left = "-2000px";
            this.el.style.top = "-2000px";
            this.el.style.display = "";
            this[doLayout]();
            this.l001();
            var J = mini.getViewportBox()
              , B = OOl1o0(this.el)
              , L = OOl1o0(H)
              , F = A.xy
              , C = A.xAlign
              , E = A.yAlign
              , M = J.width / 2 - B.width / 2
              , K = 0;
            if (F) {
                M = F[0];
                K = F[1]
            }
            switch (A.xAlign) {
            case "outleft":
                M = L.x - B.width;
                break;
            case "left":
                M = L.x;
                break;
            case "center":
                M = L.x + L.width / 2 - B.width / 2;
                break;
            case "right":
                M = L.right - B.width;
                break;
            case "outright":
                M = L.right;
                break;
            default:
                break
            }
            switch (A.yAlign) {
            case "above":
                K = L.y - B.height;
                break;
            case "top":
                K = L.y;
                break;
            case "middle":
                K = L.y + L.height / 2 - B.height / 2;
                break;
            case "bottom":
                K = L.bottom - B.height;
                break;
            case "below":
                K = L.bottom;
                break;
            default:
                break
            }
            M = parseInt(M);
            K = parseInt(K);
            if (A.outYAlign || A.outXAlign) {
                if (A.outYAlign == "above")
                    if (K + B.height > J.bottom) {
                        var _ = L.y - J.y
                          , I = J.bottom - L.bottom;
                        if (_ > I)
                            K = L.y - B.height
                    }
                if (A.outXAlign == "outleft")
                    if (M + B.width > J.right) {
                        var G = L.x - J.x
                          , $ = J.right - L.right;
                        if (G > $)
                            M = L.x - B.width
                    }
                if (A.outXAlign == "right")
                    if (M + B.width > J.right)
                        M = L.right - B.width;
                this.l001ol(M, K)
            } else
                this[showAtPos](M + A.xOffset, K + A.yOffset)
        },
        l001ol: function(A, _) {
            this.el.style.display = "";
            this.el.style.zIndex = mini.getMaxZIndex();
            mini.setX(this.el, A);
            mini.setY(this.el, _);
            this[setVisible](true);
            if (this.hideAction == "mouseout")
                l1Oo0O(document, "mousemove", this.oo0Olo, this);
            var $ = this;
            this.o000l1();
            this.Oo0olO();
            mini.layoutIFrames(this.el);
            this.isPopup = true;
            l1Oo0O(document, "mousedown", this.l111, this);
            l1Oo0O(window, "resize", this.lo0O, this);
            this[fire]("Open")
        },
        open: function() {
            this[show]()
        },
        close: function() {
            this[hide]()
        },
        hide: function() {
            if (!this.el)
                return;
            if (this.popupEl)
                Ol00(this.popupEl, this.popupEl.popupCls);
            if (this._popupEl)
                Ol00(this._popupEl, this._popupEl.popupCls);
            this._popupEl = null ;
            jQuery(this.o11o00).remove();
            if (this.shadowEl)
                this.shadowEl.style.display = "none";
            O1l0(document, "mousemove", this.oo0Olo, this);
            O1l0(document, "mousedown", this.l111, this);
            O1l0(window, "resize", this.lo0O, this);
            this[setVisible](false);
            this.isPopup = false;
            this[fire]("Close")
        },
        setPopupEl: function($) {
            $ = ooO0($);
            if (!$)
                return;
            this.ol101();
            this.popupEl = $;
            this.o11O0()
        },
        setPopupCls: function($) {
            this.popupCls = $
        },
        setShowAction: function($) {
            this.showAction = $
        },
        setHideAction: function($) {
            this.hideAction = $
        },
        setShowDelay: function($) {
            this.showDelay = $
        },
        setHideDelay: function($) {
            this.hideDelay = $
        },
        setXAlign: function($) {
            this.xAlign = $
        },
        setYAlign: function($) {
            this.yAlign = $
        },
        setxOffset: function($) {
            $ = parseInt($);
            if (isNaN($))
                $ = 0;
            this.xOffset = $
        },
        setyOffset: function($) {
            $ = parseInt($);
            if (isNaN($))
                $ = 0;
            this.yOffset = $
        },
        setShowModal: function($) {
            this[showModal] = $
        },
        setShowShadow: function($) {
            this[showShadow] = $
        },
        setMinWidth: function($) {
            if (isNaN($))
                return;
            this.minWidth = $
        },
        setMinHeight: function($) {
            if (isNaN($))
                return;
            this.minHeight = $
        },
        setMaxWidth: function($) {
            if (isNaN($))
                return;
            this.maxWidth = $
        },
        setMaxHeight: function($) {
            if (isNaN($))
                return;
            this.maxHeight = $
        },
        setAllowDrag: function($) {
            this.allowDrag = $;
            Ol00(this.el, this.llOolO);
            if ($)
                O0Oo0(this.el, this.llOolO)
        },
        setAllowResize: function($) {
            this[allowResize] = $;
            Ol00(this.el, this.lll010);
            if ($)
                O0Oo0(this.el, this.lll010)
        },
        loO11l: function(_) {
            if (this.OO1oOO)
                return;
            if (this.showAction != "leftclick")
                return;
            var $ = jQuery(this.popupEl).attr("allowPopup");
            if (String($) == "false")
                return;
            this.doShow(_)
        },
        ooOl0O: function(_) {
            if (this.OO1oOO)
                return;
            if (this.showAction != "rightclick")
                return;
            var $ = jQuery(this.popupEl).attr("allowPopup");
            if (String($) == "false")
                return;
            _.preventDefault();
            this.doShow(_)
        },
        ol0OOo: function(A) {
            if (this.OO1oOO)
                return;
            if (this.showAction != "mouseover")
                return;
            var _ = jQuery(this.popupEl).attr("allowPopup");
            if (String(_) == "false")
                return;
            clearTimeout(this._hideTimer);
            this._hideTimer = null ;
            if (this.isPopup)
                return;
            var $ = this;
            this._showTimer = setTimeout(function() {
                $.doShow(A)
            }
            , this.showDelay)
        },
        oo0Olo: function($) {
            if (this.hideAction != "mouseout")
                return;
            this.OO10O0($)
        },
        l111: function($) {
            if (this.hideAction != "outerclick")
                return;
            if (!this.isPopup)
                return;
            if (this[within]($) || (this.popupEl && l1oooo(this.popupEl, $.target)))
                ;
            else
                this.doHide($)
        },
        OO10O0: function(_) {
            if (l1oooo(this.el, _.target) || (this.popupEl && l1oooo(this.popupEl, _.target)))
                ;
            else {
                clearTimeout(this._showTimer);
                this._showTimer = null ;
                if (this._hideTimer)
                    return;
                var $ = this;
                this._hideTimer = setTimeout(function() {
                    $.doHide(_)
                }
                , this.hideDelay)
            }
        },
        lo0O: function($) {
            if (this[isDisplay]() && !mini.isIE6)
                this.Oo0olO()
        },
        within: function(C) {
            if (l1oooo(this.el, C.target))
                return true;
            var $ = mini.getChildControls(this);
            for (var _ = 0, B = $.length; _ < B; _++) {
                var A = $[_];
                if (A[within](C))
                    return true
            }
            return false
        }
    };
    mini.copyTo(mini.Popup.prototype, l0ooOO_prototype);
    mini.Button = function() {
        mini.Button[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Button, mini.Control, {
        text: "",
        iconCls: "",
        iconStyle: "",
        plain: false,
        checkOnClick: false,
        checked: false,
        groupName: "",
        l01o: "mini-button-plain",
        _hoverCls: "mini-button-hover",
        oooO1O: "mini-button-pressed",
        l1OlOO: "mini-button-checked",
        Oollo0: "mini-button-disabled",
        allowCls: "",
        _clearBorder: false,
        uiCls: "mini-button",
        href: "",
        target: ""
    });
    olO1Ol = mini.Button[prototype];
    olO1Ol[getAttrs] = l0110;
    olO1Ol[onClick] = ooo1l;
    olO1Ol.oOo10 = OOOoO;
    olO1Ol.ol1Ol = o0O1o;
    olO1Ol.o0O0lo = l11l0;
    olO1Ol[doClick] = O1l1oO;
    olO1Ol[getChecked] = oll10;
    olO1Ol[setChecked] = O1O10;
    olO1Ol[getCheckOnClick] = O10l;
    olO1Ol[setCheckOnClick] = olOO0;
    olO1Ol[getGroupName] = o0lOl;
    olO1Ol[setGroupName] = l0l1O;
    olO1Ol[getPlain] = O0llo;
    olO1Ol[setPlain] = OO010;
    olO1Ol[getIconPosition] = l00o;
    olO1Ol[setIconPosition] = O1OOl;
    olO1Ol[getIconStyle] = l011o;
    olO1Ol[setIconStyle] = Ol110;
    olO1Ol[getIconCls] = lolll;
    olO1Ol[setIconCls] = oO0O0;
    olO1Ol[getText] = l1O1;
    olO1Ol[setText] = ooo1oo;
    olO1Ol[getTarget] = l01ol;
    olO1Ol[setTarget] = l0o1l;
    olO1Ol[getHref] = Oo10o;
    olO1Ol[setHref] = Olol1;
    olO1Ol[doUpdate] = lol11;
    olO1Ol[destroy] = ll01O;
    olO1Ol[_initEvents] = lol1l;
    olO1Ol[_create] = o10ll0;
    olO1Ol[set] = loll;
    l00O(mini.Button, "button");
    mini.MenuButton = function() {
        mini.MenuButton[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.MenuButton, mini.Button, {
        uiCls: "mini-menubutton",
        allowCls: "mini-button-menu"
    });
    lOOOo = mini.MenuButton[prototype];
    lOOOo[setEnabled] = ooll0;
    lOOOo[setMenu] = o11oO;
    l00O(mini.MenuButton, "menubutton");
    mini.SplitButton = function() {
        mini.SplitButton[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.SplitButton, mini.MenuButton, {
        uiCls: "mini-splitbutton",
        allowCls: "mini-button-split"
    });
    l00O(mini.SplitButton, "splitbutton");
    mini.CheckBox = function() {
        mini.CheckBox[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.CheckBox, mini.Control, {
        formField: true,
        _clearText: false,
        text: "",
        checked: false,
        defaultValue: false,
        trueValue: true,
        falseValue: false,
        uiCls: "mini-checkbox"
    });
    Ol0oO = mini.CheckBox[prototype];
    Ol0oO[getAttrs] = l111O;
    Ol0oO.l11OO = lolOO;
    Ol0oO[getFalseValue] = o010l;
    Ol0oO[setFalseValue] = l1l0;
    Ol0oO[getTrueValue] = ol1o0;
    Ol0oO[setTrueValue] = looOlo;
    Ol0oO[getFormValue] = oo000;
    Ol0oO[getValue] = o11O1;
    Ol0oO[setValue] = OoOO1;
    Ol0oO[getChecked] = O11Oll;
    Ol0oO[setChecked] = l0010;
    Ol0oO[getText] = O01Oo;
    Ol0oO[setText] = Ololl;
    Ol0oO[setName] = O010O;
    Ol0oO[_initEvents] = loo00o;
    Ol0oO[destroy] = OOlO0;
    Ol0oO[_create] = O01o0;
    l00O(mini.CheckBox, "checkbox");
    mini.ButtonEdit = function() {
        mini.ButtonEdit[superclass][constructor][call](this);
        var $ = this[isReadOnly]();
        if ($ || this.allowInput == false)
            this.ll1l1O[readOnly] = true;
        if (this.enabled == false)
            this[addCls](this.Oollo0);
        if ($)
            this[addCls](this.O1O1O0);
        if (this.required)
            this[addCls](this.O1Olol)
    }
    ;
    O00lO(mini.ButtonEdit, mini.ValidatorBase, {
        name: "",
        formField: true,
        selectOnFocus: false,
        showClose: false,
        emptyText: "",
        defaultValue: "",
        value: "",
        text: "",
        maxLength: 1000,
        minLength: 0,
        width: 125,
        height: 21,
        inputAsValue: false,
        allowInput: true,
        oooO10: "mini-buttonedit-noInput",
        O1O1O0: "mini-buttonedit-readOnly",
        Oollo0: "mini-buttonedit-disabled",
        O1o1Oo: "mini-buttonedit-empty",
        oO0Ol: "mini-buttonedit-focus",
        l0loOO: "mini-buttonedit-button",
        oooOO1: "mini-buttonedit-button-hover",
        lOOl1: "mini-buttonedit-button-pressed",
        _closeCls: "mini-buttonedit-close",
        uiCls: "mini-buttonedit",
        lll1O1: false,
        _buttonWidth: 20,
        _closeWidth: 20,
        oO010: null ,
        textName: "",
        inputStyle: ""
    });
    OO10 = mini.ButtonEdit[prototype];
    OO10[getAttrs] = OOOO0;
    OO10[setInputStyle] = llol1;
    OO10[getShowClose] = o1l0O;
    OO10[setShowClose] = oOO10;
    OO10[getSelectOnFocus] = o10lO;
    OO10[setSelectOnFocus] = l1Ol1;
    OO10[getTextName] = OoO10;
    OO10[setTextName] = olO11;
    OO10[onTextChanged] = OOo10;
    OO10[onButtonMouseDown] = lOo0O;
    OO10[onButtonClick] = lol01;
    OO10.o1ol = oO1ol;
    OO10.llloO = lo0l0;
    OO10.lo1Oo = O100O;
    OO10.loolOO = o0oO0;
    OO10.lo00 = lOlo;
    OO10.lOo101 = lOlO1;
    OO10.oo0oO = OO1O1;
    OO10[__fireBlur] = OO1Oo;
    OO10.o0O010 = o011O;
    OO10.oOo10 = oO01O;
    OO10.ol1Ol = o1O0o;
    OO10.o0O0lo = Oo1l1;
    OO10.oo1l1 = OO1ll;
    OO10[getErrorIconEl] = oooOO;
    OO10[getInputAsValue] = lo0lO;
    OO10[setInputAsValue] = o1Ooo;
    OO10[getAllowInput] = l1lO1;
    OO10[setAllowInput] = lOl0O;
    OO10.lOlllo = llO1l;
    OO10[setEnabled] = o01l0;
    OO10[getMinLength] = oOOO0;
    OO10[setMinLength] = l0101;
    OO10[getMaxLength] = l00o1;
    OO10[setMaxLength] = lll00;
    OO10[getEmptyText] = O0Oo1;
    OO10[setEmptyText] = olOo1;
    OO10.OlO1O = loOO1;
    OO10[getFormValue] = ll0ll;
    OO10[getValue] = l1ool;
    OO10[setValue] = l1oO1;
    OO10[getText] = ll01o;
    OO10[setText] = lOl1o;
    OO10[setName] = lOo00;
    OO10[getTextEl] = ll01oEl;
    OO10[selectText] = lo0O0;
    OO10[blur] = llO0O;
    OO10[focus] = o0lO1;
    OO10[setHeight] = Olll1;
    OO10[doLayout] = o0l1l;
    OO10[_doInputLayout] = lllOo;
    OO10.oOo1O = looo0;
    OO10[_initEvents] = o0OoO;
    OO10[destroy] = llOO1;
    OO10[_create] = l1oO0;
    OO10.OO100Html = lO0l1;
    OO10.OO100sHTML = ll0o1;
    OO10[set] = l1lO0;
    l00O(mini.ButtonEdit, "buttonedit");
    mini.TextBox = function() {
        mini.TextBox[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.TextBox, mini.ValidatorBase, {
        name: "",
        formField: true,
        selectOnFocus: false,
        minWidth: 10,
        minHeight: 15,
        maxLength: 5000,
        emptyText: "",
        text: "",
        value: "",
        defaultValue: "",
        width: 125,
        height: 21,
        O1o1Oo: "mini-textbox-empty",
        oO0Ol: "mini-textbox-focus",
        Oollo0: "mini-textbox-disabled",
        uiCls: "mini-textbox",
        type: "text",
        lll1O1: false,
        _placeholdered: false,
        oO010: null ,
        inputStyle: "",
        vtype: ""
    });
    lloOO = mini.TextBox[prototype];
    lloOO[getRangeErrorText] = O11ll;
    lloOO[setRangeErrorText] = OO000;
    lloOO[getRangeCharErrorText] = llO01;
    lloOO[setRangeCharErrorText] = ol1oO;
    lloOO[getRangeLengthErrorText] = lOoOO;
    lloOO[setRangeLengthErrorText] = oolO0;
    lloOO[getMinErrorText] = o0Olo;
    lloOO[setMinErrorText] = O1oo;
    lloOO[getMaxErrorText] = OO011;
    lloOO[setMaxErrorText] = oloO0;
    lloOO[getMinLengthErrorText] = oo1Oo0;
    lloOO[setMinLengthErrorText] = O00O;
    lloOO[getMaxLengthErrorText] = O0ll1;
    lloOO[setMaxLengthErrorText] = llO011;
    lloOO[getDateErrorText] = O1lol;
    lloOO[setDateErrorText] = l0ol1l;
    lloOO[getIntErrorText] = o1OO;
    lloOO[setIntErrorText] = lOoo0;
    lloOO[getFloatErrorText] = ooO00;
    lloOO[setFloatErrorText] = l111l;
    lloOO[getUrlErrorText] = ll0l;
    lloOO[setUrlErrorText] = lo0l;
    lloOO[getEmailErrorText] = O0OoO;
    lloOO[setEmailErrorText] = ol111;
    lloOO.o10oO = o1oo0l;
    lloOO[getVtype] = Ol10l;
    lloOO[setVtype] = O0lOo;
    lloOO[getAttrs] = O1l1lo;
    lloOO[setInputStyle] = ll1l0;
    lloOO.oo0oO = oo1oo;
    lloOO.o0O010 = O0Ol0;
    lloOO.lo1Oo = OlO10O;
    lloOO.loolOO = O00OO;
    lloOO.lOo101 = olO1O;
    lloOO.lOOo01 = o100O;
    lloOO.lo00 = O1oOOO;
    lloOO.ol1Ol = OOo0O;
    lloOO.oo1l1 = O1O11;
    lloOO[getErrorIconEl] = oo01l;
    lloOO[getSelectOnFocus] = OlO01;
    lloOO[setSelectOnFocus] = l1ll1;
    lloOO[getInputText] = OllO1;
    lloOO[getTextEl] = lOO10;
    lloOO[selectText] = OOOlO;
    lloOO[blur] = OOoo1;
    lloOO[focus] = o0o10;
    lloOO[doUpdate] = Ooolo;
    lloOO[setEnabled] = O01o;
    lloOO[setReadOnly] = o11l0;
    lloOO[getMaxLength] = lloo1;
    lloOO.Ooo1 = o0Oo10;
    lloOO[setMaxLength] = ooO1l;
    lloOO[getEmptyText] = OO0l1;
    lloOO[setEmptyText] = Ollo1;
    lloOO.OlO1O = ooO1;
    lloOO[getAllowInput] = O1OO1;
    lloOO[setAllowInput] = o00l;
    lloOO[getFormValue] = o00o1;
    lloOO[getValue] = Oool;
    lloOO[setValue] = l0Oool;
    lloOO[setName] = lOO1;
    lloOO[setHeight] = o00O1;
    lloOO[doLayout] = Ol100;
    lloOO[destroy] = O1O1O;
    lloOO.oOo1O = o1011;
    lloOO[_initEvents] = OO001l;
    lloOO[_create] = OlO11;
    l00O(mini.TextBox, "textbox");
    mini.Password = function() {
        mini.Password[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Password, mini.TextBox, {
        uiCls: "mini-password",
        type: "password"
    });
    O0001O = mini.Password[prototype];
    O0001O[setEmptyText] = O0o1O;
    l00O(mini.Password, "password");
    mini.TextArea = function() {
        mini.TextArea[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.TextArea, mini.TextBox, {
        maxLength: 10000000,
        width: 180,
        height: 50,
        minHeight: 50,
        type: "textarea",
        uiCls: "mini-textarea"
    });
    ll1Ool = mini.TextArea[prototype];
    ll1Ool[doLayout] = oloOl;
    l00O(mini.TextArea, "textarea");
    mini.PopupEdit = function() {
        mini.PopupEdit[superclass][constructor][call](this);
        this[_createPopup]();
        this.el.className += " mini-popupedit"
    }
    ;
    O00lO(mini.PopupEdit, mini.ButtonEdit, {
        uiCls: "mini-popupedit",
        popup: null ,
        popupCls: "mini-buttonedit-popup",
        _hoverCls: "mini-buttonedit-hover",
        oooO1O: "mini-buttonedit-pressed",
        popupWidth: "100%",
        popupMinWidth: 50,
        popupMaxWidth: 2000,
        popupHeight: "",
        popupMinHeight: 30,
        popupMaxHeight: 2000
    });
    Ooo10 = mini.PopupEdit[prototype];
    Ooo10[getAttrs] = OlOoO;
    Ooo10.ol1lO = Oo11;
    Ooo10.o0O0lo = llool;
    Ooo10[getPopupMinHeight] = O0olo;
    Ooo10[getPopupMaxHeight] = ll1Ol;
    Ooo10[getPopupHeight] = o1olO0;
    Ooo10[setPopupMinHeight] = ooOlO;
    Ooo10[setPopupMaxHeight] = l0ol1;
    Ooo10[setPopupHeight] = O0l1ol;
    Ooo10[getPopupMinWidth] = llo0ol;
    Ooo10[getPopupMaxWidth] = lO11l;
    Ooo10[getPopupWidth] = Ollol;
    Ooo10[setPopupMinWidth] = OOllo;
    Ooo10[setPopupMaxWidth] = lo1lO;
    Ooo10[setPopupWidth] = oOO11;
    Ooo10[isShowPopup] = o100o;
    Ooo10[hidePopup] = o1olO;
    Ooo10.o001 = O1o10;
    Ooo10[_syncShowPopup] = looo1;
    Ooo10[doLayout] = l0OoO;
    Ooo10[showPopup] = llOoO;
    Ooo10.O11oO = lO1OO;
    Ooo10.l0Oo1 = lO00O;
    Ooo10[_createPopup] = lOO01;
    Ooo10[getPopup] = oO1l;
    Ooo10[setPopup] = oOOl1;
    Ooo10[within] = o00lo;
    Ooo10.lOo101 = oO1l0;
    Ooo10.ol1Ol = oOOlO;
    Ooo10.o1oo0 = O1OoO;
    Ooo10.ol0OOo = l11ll;
    Ooo10.oo0oO = lOl1;
    Ooo10.Oloo = O0O1o;
    Ooo10[_initEvents] = oo1o0;
    Ooo10[destroy] = lOoO0;
    l00O(mini.PopupEdit, "popupedit");
    mini.ComboBox = function() {
        this.data = [];
        this.columns = [];
        mini.ComboBox[superclass][constructor][call](this);
        var $ = this;
        if (isFirefox)
            this.ll1l1O.oninput = function() {
                $.lOlo0O()
            }
    }
    ;
    O00lO(mini.ComboBox, mini.PopupEdit, {
        text: "",
        value: "",
        valueField: "id",
        textField: "text",
        delimiter: ",",
        multiSelect: false,
        data: [],
        url: "",
        columns: [],
        allowInput: false,
        valueFromSelect: false,
        popupMaxHeight: 200,
        uiCls: "mini-combobox",
        showNullItem: false
    });
    lOOoO = mini.ComboBox[prototype];
    lOOoO[getAttrs] = ol0Oo;
    lOOoO.lo00 = l100l;
    lOOoO[findItems] = lll0l;
    lOOoO.o001 = Ollo0;
    lOOoO.o1lo = Ololl1;
    lOOoO.lOlo0O = o11lOl;
    lOOoO.lo1Oo = o0010;
    lOOoO.loolOO = ooOll;
    lOOoO.lOo101 = O00o1;
    lOOoO.l1l101 = l0o1O;
    lOOoO[__OnItemDrawCell] = Oo0O;
    lOOoO[getSelected] = l01ll;
    lOOoO[getSelecteds] = l01lls;
    lOOoO.Ollll = l1010l;
    lOOoO[getValueFromSelect] = Oool0;
    lOOoO[setValueFromSelect] = Oo1O0l;
    lOOoO[getNullItemText] = ololO;
    lOOoO[setNullItemText] = lOll1;
    lOOoO[getShowNullItem] = O0ool;
    lOOoO[setShowNullItem] = lOol;
    lOOoO[getColumns] = o1lOll;
    lOOoO[setColumns] = ooll1;
    lOOoO[getMultiSelect] = l0Ool1;
    lOOoO[setMultiSelect] = O0o1;
    lOOoO[setValue] = OoOll;
    lOOoO[setDataField] = l0lO10;
    lOOoO[setDisplayField] = lOoloo;
    lOOoO[getTextField] = ooolo;
    lOOoO[setTextField] = l0OO;
    lOOoO[getValueField] = o0o0o;
    lOOoO[setValueField] = OoOllField;
    lOOoO[getUrl] = Ol1o1;
    lOOoO[setUrl] = llOO0;
    lOOoO[getData] = oOOo0;
    lOOoO[setData] = l0oO1;
    lOOoO[load] = lo1Ol;
    lOOoO[getAt] = Ol0OO;
    lOOoO[indexOf] = ooOo0;
    lOOoO[getItem] = l10o00;
    lOOoO[select] = Ooo1l1;
    lOOoO[showPopup] = lool1;
    lOOoO[_createPopup] = l0llo;
    lOOoO[set] = OO0O0;
    l00O(mini.ComboBox, "combobox");
    mini.DatePicker = function() {
        mini.DatePicker[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.DatePicker, mini.PopupEdit, {
        format: "yyyy-MM-dd",
        maxDate: null ,
        minDate: null ,
        popupWidth: "",
        viewDate: new Date(),
        showTime: false,
        timeFormat: "H:mm",
        showTodayButton: true,
        showClearButton: true,
        showOkButton: false,
        uiCls: "mini-datepicker"
    });
    loOl1 = mini.DatePicker[prototype];
    loOl1[getAttrs] = ll0O1;
    loOl1.lOo101 = lloo;
    loOl1.lo00 = ll10o;
    loOl1[getMinDate] = ooo0o;
    loOl1[setMinDate] = o1lol;
    loOl1[getMaxDate] = llOOl;
    loOl1[setMaxDate] = lOll0;
    loOl1[getShowOkButton] = OolOO;
    loOl1[setShowOkButton] = lo0lo;
    loOl1[getShowClearButton] = OlOol;
    loOl1[setShowClearButton] = OOO0l;
    loOl1[getShowTodayButton] = ll0O0;
    loOl1[setShowTodayButton] = l0lo0;
    loOl1[getTimeFormat] = llOo0;
    loOl1[setTimeFormat] = o0l11;
    loOl1[getShowTime] = llllO;
    loOl1[setShowTime] = l00ol;
    loOl1[getViewDate] = ll01l;
    loOl1[setViewDate] = Oll0l;
    loOl1[getFormValue] = l1OOo;
    loOl1[getValue] = o0l10;
    loOl1[setValue] = O1Ool;
    loOl1[getFormat] = oo100;
    loOl1[setFormat] = O011O;
    loOl1.oO1l1 = o0OOl;
    loOl1.l0o0 = lo1ll;
    loOl1.O0oO = O01OO;
    loOl1.O11oO = ll1OO;
    loOl1[within] = o0lll;
    loOl1[hidePopup] = l0100;
    loOl1[showPopup] = l1Oll;
    loOl1[_createPopup] = O0Ooo;
    loOl1[_getCalendar] = lO0ol;
    l00O(mini.DatePicker, "datepicker");
    mini.Calendar = function() {
        this.viewDate = new Date();
        this.l11O0 = [];
        mini.Calendar[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Calendar, mini.Control, {
        width: 220,
        height: 160,
        _clearBorder: false,
        viewDate: null ,
        l0O1l: "",
        l11O0: [],
        multiSelect: false,
        firstDayOfWeek: 0,
        todayText: "Today",
        clearText: "Clear",
        okText: "OK",
        cancelText: "Cancel",
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        format: "MMM,yyyy",
        timeFormat: "H:mm",
        showTime: false,
        currentTime: true,
        rows: 1,
        columns: 1,
        headerCls: "",
        bodyCls: "",
        footerCls: "",
        ol011: "mini-calendar-today",
        o01O1O: "mini-calendar-weekend",
        OlO1: "mini-calendar-othermonth",
        O1o0: "mini-calendar-selected",
        showHeader: true,
        showFooter: true,
        showWeekNumber: false,
        showDaysHeader: true,
        showMonthButtons: true,
        showYearButtons: true,
        showTodayButton: true,
        showClearButton: true,
        showOkButton: false,
        uiCls: "mini-calendar",
        menuEl: null ,
        menuYear: null ,
        menuSelectMonth: null ,
        menuSelectYear: null 
    });
    oOOllO = mini.Calendar[prototype];
    oOOllO[getAttrs] = l0l1l;
    oOOllO.Ollll = ol0O0;
    oOOllO.ll01o0 = l1110;
    oOOllO.oO1l1 = l111o1;
    oOOllO.ol1Ol = Ololo;
    oOOllO.o0O0lo = lol00;
    oOOllO.lolool = o1O01;
    oOOllO.Oo10 = ll0o0o;
    oOOllO[updateMenu] = OloOo;
    oOOllO[hideMenu] = Ollo;
    oOOllO[showMenu] = ol1l;
    oOOllO.OoO01O = O0o01O;
    oOOllO.OOlO1o = o1o1Oo;
    oOOllO.llo1 = ol1O;
    oOOllO[doUpdate] = oO0Oo;
    oOOllO[doLayout] = oo0Oo;
    oOOllO[getTimeFormat] = o0O1l;
    oOOllO[setTimeFormat] = O00lO0;
    oOOllO[getShowTime] = Ol01l0;
    oOOllO[setShowTime] = O1l1o;
    oOOllO[getColumns] = o110lO;
    oOOllO[setColumns] = O1Ol0;
    oOOllO[getRows] = lOOl01;
    oOOllO[setRows] = oO0l0;
    oOOllO[getMultiSelect] = ollOO;
    oOOllO[setMultiSelect] = lol1O;
    oOOllO[isSelectedDate] = l0o1o;
    oOOllO[getFormValue] = l1O0o;
    oOOllO[getValue] = Ooo1l;
    oOOllO[setValue] = oo1lO;
    oOOllO[getTime] = llO0l;
    oOOllO[setTime] = oOl0l1;
    oOOllO[getSelectedDate] = lOlo1;
    oOOllO[setSelectedDates] = o0lo;
    oOOllO[setSelectedDate] = loll0l;
    oOOllO[getViewDate] = OOOO11;
    oOOllO[setViewDate] = o0O01;
    oOOllO[getShowOkButton] = O1l00;
    oOOllO[setShowOkButton] = Oooo1O;
    oOOllO[getShowClearButton] = o0lo0O;
    oOOllO[setShowClearButton] = OOOOl;
    oOOllO[getShowTodayButton] = O0OOl;
    oOOllO[setShowTodayButton] = oO11O;
    oOOllO[getShowYearButtons] = O1oOO;
    oOOllO[setShowYearButtons] = OO0O1;
    oOOllO[getShowMonthButtons] = Ol1ol;
    oOOllO[setShowMonthButtons] = o1o0o;
    oOOllO[getShowDaysHeader] = o11lO;
    oOOllO[setShowDaysHeader] = ll01;
    oOOllO[getShowWeekNumber] = OllO;
    oOOllO[setShowWeekNumber] = OOlo0;
    oOOllO[getShowFooter] = O00ll;
    oOOllO[setShowFooter] = ll011;
    oOOllO[getShowHeader] = O1oO1;
    oOOllO[setShowHeader] = o11OO;
    oOOllO[within] = ol010;
    oOOllO[getDateEl] = loo01o;
    oOOllO[_initEvents] = OOloO;
    oOOllO[destroy] = OO1o1;
    oOOllO[focus] = l01Oo;
    oOOllO[_create] = l0o10l;
    oOOllO[getShortWeek] = oO1ll;
    oOOllO[getFirstDateOfMonth] = O1OlOo;
    oOOllO[isWeekend] = o1lo1l;
    l00O(mini.Calendar, "calendar");
    mini.ListBox = function() {
        mini.ListBox[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.ListBox, mini.ListControl, {
        formField: true,
        width: 200,
        columns: null ,
        columnWidth: 80,
        showNullItem: false,
        nullItemText: "",
        showEmpty: false,
        emptyText: "",
        showCheckBox: false,
        showAllCheckBox: true,
        multiSelect: false,
        showColumns: true,
        lll0: "mini-listbox-item",
        o01ll: "mini-listbox-item-hover",
        _lOlO0: "mini-listbox-item-selected",
        uiCls: "mini-listbox"
    });
    oOoO0 = mini.ListBox[prototype];
    oOoO0[getAttrs] = l10O0;
    oOoO0.o0O0lo = OOo00;
    oOoO0.oO1O = O10l11;
    oOoO0.OO0OO = o00oll;
    oOoO0.O01lo = O0Ol;
    oOoO0[getNullItemText] = Oloo0;
    oOoO0[setNullItemText] = l0O11O;
    oOoO0[getShowNullItem] = olo00;
    oOoO0[setShowNullItem] = o0l1O0;
    oOoO0[getShowColumns] = O0OOo;
    oOoO0[setShowColumns] = o0l00;
    oOoO0[getShowAllCheckBox] = O10o0;
    oOoO0[setShowAllCheckBox] = oO1oo;
    oOoO0[getShowCheckBox] = ol1OO;
    oOoO0[setShowCheckBox] = olo1l;
    oOoO0[doLayout] = OOoOo;
    oOoO0[doUpdate] = lO0OO;
    oOoO0[getColumns] = loo1l;
    oOoO0[setColumns] = o0llO;
    oOoO0[destroy] = ooOO1;
    oOoO0[_initEvents] = lool00;
    oOoO0[destroy] = ooOO1;
    oOoO0[_create] = OO10o;
    l00O(mini.ListBox, "listbox");
    mini.CheckBoxList = function() {
        mini.CheckBoxList[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.CheckBoxList, mini.ListControl, {
        formField: true,
        multiSelect: true,
        repeatItems: 0,
        repeatLayout: "none",
        repeatDirection: "horizontal",
        lll0: "mini-checkboxlist-item",
        o01ll: "mini-checkboxlist-item-hover",
        _lOlO0: "mini-checkboxlist-item-selected",
        olllo1: "mini-checkboxlist-table",
        OO1ooo: "mini-checkboxlist-td",
        lO010: "checkbox",
        uiCls: "mini-checkboxlist"
    });
    o01O0 = mini.CheckBoxList[prototype];
    o01O0[getAttrs] = OO0ll;
    o01O0[getRepeatDirection] = Ol011;
    o01O0[setRepeatDirection] = ol1ll;
    o01O0[getRepeatLayout] = O111o;
    o01O0[setRepeatLayout] = OO001;
    o01O0[getRepeatItems] = O11oo;
    o01O0[setRepeatItems] = O1O01;
    o01O0.oOO1O = llOol;
    o01O0.lo00l1 = o0ll1;
    o01O0[doUpdate] = OOo0l;
    o01O0.O1ooll = O1001;
    o01O0[_create] = OOl1o;
    l00O(mini.CheckBoxList, "checkboxlist");
    mini.RadioButtonList = function() {
        mini.RadioButtonList[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.RadioButtonList, mini.CheckBoxList, {
        multiSelect: false,
        lll0: "mini-radiobuttonlist-item",
        o01ll: "mini-radiobuttonlist-item-hover",
        _lOlO0: "mini-radiobuttonlist-item-selected",
        olllo1: "mini-radiobuttonlist-table",
        OO1ooo: "mini-radiobuttonlist-td",
        lO010: "radio",
        uiCls: "mini-radiobuttonlist"
    });
    O10ol = mini.RadioButtonList[prototype];
    l00O(mini.RadioButtonList, "radiobuttonlist");
    mini.TreeSelect = function() {
        this.data = [];
        mini.TreeSelect[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.TreeSelect, mini.PopupEdit, {
        valueFromSelect: false,
        text: "",
        value: "",
        autoCheckParent: false,
        expandOnLoad: false,
        valueField: "id",
        textField: "text",
        nodesField: "children",
        delimiter: ",",
        multiSelect: false,
        data: [],
        url: "",
        allowInput: false,
        showTreeIcon: false,
        showTreeLines: true,
        resultAsTree: false,
        parentField: "pid",
        checkRecursive: false,
        showFolderCheckBox: false,
        popupHeight: 200,
        popupWidth: "100%",
        popupMaxHeight: 250,
        popupMinWidth: 100,
        uiCls: "mini-treeselect"
    });
    O00O1 = mini.TreeSelect[prototype];
    O00O1[getAttrs] = oO100;
    O00O1[setDataField] = O1O1;
    O00O1[getValueFromSelect] = Oo1lo;
    O00O1[setValueFromSelect] = lo00l;
    O00O1[getExpandOnLoad] = O0110;
    O00O1[setExpandOnLoad] = o0olO;
    O00O1[getAutoCheckParent] = lo0oO;
    O00O1[setAutoCheckParent] = l1Ol0;
    O00O1[getShowFolderCheckBox] = lll0O;
    O00O1[setShowFolderCheckBox] = OOlol;
    O00O1[getShowTreeLines] = Ol0ll;
    O00O1[setShowTreeLines] = l1100;
    O00O1[getShowTreeIcon] = oOlOo;
    O00O1[setShowTreeIcon] = O0O0o;
    O00O1[getValueField] = OlOOO;
    O00O1[setValueField] = OoOlO;
    O00O1[getParentField] = oo0ll;
    O00O1[setParentField] = lloOo;
    O00O1[getResultAsTree] = olO00;
    O00O1[setResultAsTree] = OOoOl;
    O00O1[getCheckRecursive] = lOOo0;
    O00O1[setCheckRecursive] = ol100;
    O00O1.o1lo = oO000;
    O00O1.lOo101 = OO10l;
    O00O1.llol = ll0l0;
    O00O1.OOol1o = o1llll;
    O00O1[getMultiSelect] = l10o0;
    O00O1[setMultiSelect] = l1o0l;
    O00O1[setValue] = ll1O;
    O00O1[getNodesField] = oOOll;
    O00O1[setNodesField] = O1100;
    O00O1[getTextField] = oolo1;
    O00O1[setTextField] = OOOo1;
    O00O1[getUrl] = llolO;
    O00O1[setUrl] = O1l0O;
    O00O1[getData] = ol1Oo;
    O00O1[setData] = oOO01;
    O00O1[load] = O10O0;
    O00O1[getList] = l1011;
    O00O1[loadList] = O10O0List;
    O00O1[getAt] = Ol11l;
    O00O1[indexOf] = OoOO0;
    O00O1[getItem] = l001o;
    O00O1.o001 = oo0lO;
    O00O1[showPopup] = ololl;
    O00O1[getChildNodes] = O1o00;
    O00O1[getParentNode] = Oo10l;
    O00O1[getSelectedNodes] = loo1;
    O00O1[getCheckedNodes] = OlllO;
    O00O1[getSelectedNode] = l0o00o;
    O00O1.o0ll = OOOll0;
    O00O1.l10l0l = O1000;
    O00O1.oll1 = o1llo;
    O00O1.O1Oo = O1011;
    O00O1[_createPopup] = o01o;
    O00O1[set] = oOo0O;
    l00O(mini.TreeSelect, "TreeSelect");
    mini.Spinner = function() {
        mini.Spinner[superclass][constructor][call](this);
        this[setValue](this[minValue])
    }
    ;
    O00lO(mini.Spinner, mini.ButtonEdit, {
        value: 0,
        minValue: 0,
        maxValue: 100,
        increment: 1,
        decimalPlaces: 0,
        changeOnMousewheel: true,
        allowLimitValue: true,
        uiCls: "mini-spinner",
        oOO0: null 
    });
    lOo1O = mini.Spinner[prototype];
    lOo1O[getAttrs] = OOl1O;
    lOo1O.lo00 = lllO1;
    lOo1O.O0l0l = o0O0l;
    lOo1O.O0OOOO = olll0;
    lOo1O.lOo101 = O000o;
    lOo1O.lo1l = l1oOO;
    lOo1O.l1lo10 = o0oo1;
    lOo1O.o1lO11 = O1l0l;
    lOo1O[getAllowLimitValue] = OO01l;
    lOo1O[setAllowLimitValue] = lOl0o;
    lOo1O[getChangeOnMousewheel] = Ool1O1;
    lOo1O[setChangeOnMousewheel] = O0oll;
    lOo1O[getDecimalPlaces] = lOl00;
    lOo1O[setDecimalPlaces] = OoO00;
    lOo1O[getIncrement] = o01O1;
    lOo1O[setIncrement] = O0100;
    lOo1O[getMinValue] = llO1;
    lOo1O[setMinValue] = ool10;
    lOo1O[getMaxValue] = lOoOO0;
    lOo1O[setMaxValue] = o100l;
    lOo1O[setValue] = oOol0;
    lOo1O[getFormValue] = ooOOoO;
    lOo1O.ooOol0 = O0ll0;
    lOo1O[_initEvents] = O1O00;
    lOo1O.OO100Html = OO00O;
    lOo1O[set] = oOOl;
    l00O(mini.Spinner, "spinner");
    mini.TimeSpinner = function() {
        mini.TimeSpinner[superclass][constructor][call](this);
        this[setValue]("00:00:00")
    }
    ;
    O00lO(mini.TimeSpinner, mini.ButtonEdit, {
        value: null ,
        format: "H:mm:ss",
        uiCls: "mini-timespinner",
        oOO0: null 
    });
    oollo = mini.TimeSpinner[prototype];
    oollo[getAttrs] = o00OO;
    oollo.lo00 = OoolO;
    oollo.O0l0l = OolOl;
    oollo.lo1l = O1lO0;
    oollo.l1lo10 = loOol;
    oollo.o1lO11 = oO00l;
    oollo.olol0o = oo1oO;
    oollo[getFormattedValue] = l1001;
    oollo[getFormValue] = lOol1;
    oollo[getValue] = o00lO;
    oollo[setValue] = lO1O;
    oollo[getFormat] = Oo010;
    oollo[setFormat] = OO11O;
    oollo[_initEvents] = Oo01O;
    oollo.OO100Html = o01o0;
    l00O(mini.TimeSpinner, "timespinner");
    mini.HtmlFile = function() {
        mini.HtmlFile[superclass][constructor][call](this);
        this[on]("validation", this.o10oO, this)
    }
    ;
    O00lO(mini.HtmlFile, mini.ButtonEdit, {
        width: 180,
        buttonText: "\u6d4f\u89c8...",
        _buttonWidth: 56,
        limitType: "",
        limitTypeErrorText: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f\u4e3a\uff1a",
        allowInput: false,
        readOnly: true,
        o0l1O: 0,
        uiCls: "mini-htmlfile"
    });
    OlOO1 = mini.HtmlFile[prototype];
    OlOO1[getAttrs] = lOOl;
    OlOO1[getLimitType] = oo1O;
    OlOO1[setLimitType] = oOll0;
    OlOO1[getButtonText] = o1o00;
    OlOO1[setButtonText] = o00o0l;
    OlOO1[getValue] = olllo;
    OlOO1[setName] = o1lo0;
    OlOO1.o10oO = o0l0o;
    OlOO1.lolO = lo0oo;
    OlOO1.o1O1l = l0O0o;
    OlOO1.OO100Html = o0ooo;
    OlOO1[_create] = ooOoO;
    l00O(mini.HtmlFile, "htmlfile");
    mini.FileUpload = function($) {
        this.postParam = {};
        mini.FileUpload[superclass][constructor][call](this, $);
        this[on]("validation", this.o10oO, this)
    }
    ;
    O00lO(mini.FileUpload, mini.ButtonEdit, {
        width: 180,
        buttonText: "\u6d4f\u89c8...",
        _buttonWidth: 56,
        limitTypeErrorText: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f\u4e3a\uff1a",
        readOnly: true,
        o0l1O: 0,
        limitSize: "",
        limitType: "",
        typesDescription: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f",
        uploadLimit: 0,
        queueLimit: "",
        flashUrl: "",
        uploadUrl: "",
        postParam: null ,
        uploadOnSelect: false,
        uiCls: "mini-fileupload"
    });
    OOOO1 = mini.FileUpload[prototype];
    OOOO1[getAttrs] = OooOl;
    OOOO1[__fileError] = l1l1o;
    OOOO1[__on_upload_complete] = olO1;
    OOOO1[__on_upload_error] = o0Ol0;
    OOOO1[__on_upload_success] = oOl00;
    OOOO1[__on_file_queued] = OlOll;
    OOOO1[startUpload] = O0o0l;
    OOOO1[setName] = O0oo1;
    OOOO1[setUploadUrl] = olOOO;
    OOOO1[setFlashUrl] = oOl0l;
    OOOO1[setQueueLimit] = O1l11;
    OOOO1[setUploadLimit] = ll010;
    OOOO1[getButtonText] = OoO0l;
    OOOO1[setButtonText] = o1ol1;
    OOOO1[getTypesDescription] = O0lo0;
    OOOO1[setTypesDescription] = oO1O1;
    OOOO1[getLimitType] = oOo11;
    OOOO1[setLimitType] = OO110;
    OOOO1[getPostParam] = o1o11;
    OOOO1[setPostParam] = O0o0O;
    OOOO1[addPostParam] = OOlo1;
    OOOO1.lolO = ooOlo;
    OOOO1[destroy] = l01oo;
    OOOO1.OO100Html = o1o1O;
    OOOO1[_create] = oOlol;
    l00O(mini.FileUpload, "fileupload");
    mini.Lookup = function() {
        this.data = [];
        mini.Lookup[superclass][constructor][call](this);
        l1Oo0O(this.ll1l1O, "mouseup", this.OOlooO, this);
        this[on]("showpopup", this.__OnShowPopup, this)
    }
    ;
    O00lO(mini.Lookup, mini.PopupEdit, {
        allowInput: true,
        valueField: "id",
        textField: "text",
        delimiter: ",",
        multiSelect: false,
        data: [],
        grid: null ,
        uiCls: "mini-lookup"
    });
    lOoo1 = mini.Lookup[prototype];
    lOoo1[getAttrs] = lOl01;
    lOoo1.oooOo = l1ol0;
    lOoo1.OOlooO = oO0ooo;
    lOoo1.lOo101 = l00l0;
    lOoo1[doUpdate] = O100O0;
    lOoo1[__OnShowPopup] = ll000;
    lOoo1.Ol101o = O1lO1;
    lOoo1[__OnGridRowClickChanged] = l0oO;
    lOoo1[setText] = O0001;
    lOoo1[setValue] = O0OO0;
    lOoo1.OllO0 = o0o0O;
    lOoo1.OOo1oo = lo11o1;
    lOoo1.o0ol = o0100;
    lOoo1[getItemText] = O1lo1;
    lOoo1[getItemValue] = o1OO0;
    lOoo1[deselectAll] = olO1o;
    lOoo1[getTextField] = oOoO1;
    lOoo1[setTextField] = O0001Field;
    lOoo1[getValueField] = l11O1;
    lOoo1[setValueField] = O0OO0Field;
    lOoo1[getGrid] = lOloOo;
    lOoo1[setGrid] = lo1lo;
    lOoo1[setMultiSelect] = oO11;
    lOoo1[destroy] = OOo0;
    l00O(mini.Lookup, "lookup");
    mini.TextBoxList = function() {
        mini.TextBoxList[superclass][constructor][call](this);
        this.data = [];
        this[doUpdate]()
    }
    ;
    O00lO(mini.TextBoxList, mini.ValidatorBase, {
        formField: true,
        value: "",
        text: "",
        valueField: "id",
        textField: "text",
        url: "",
        delay: 150,
        allowInput: true,
        editIndex: 0,
        oO0Ol: "mini-textboxlist-focus",
        l11lO: "mini-textboxlist-item-hover",
        l1OOll: "mini-textboxlist-item-selected",
        o0l0O: "mini-textboxlist-close-hover",
        textName: "",
        uiCls: "mini-textboxlist",
        errorIconEl: null ,
        popupLoadingText: "<span class='mini-textboxlist-popup-loading'>Loading...</span>",
        popupErrorText: "<span class='mini-textboxlist-popup-error'>Error</span>",
        popupEmptyText: "<span class='mini-textboxlist-popup-noresult'>No Result</span>",
        isShowPopup: false,
        popupHeight: "",
        popupMinHeight: 30,
        popupMaxHeight: 150,
        searchField: "key"
    });
    lo10O = mini.TextBoxList[prototype];
    lo10O[getAttrs] = oOo1l;
    lo10O[getSearchField] = ooo00;
    lo10O[setSearchField] = oO0ll;
    lo10O[blur] = ollol;
    lo10O[focus] = o0ool;
    lo10O.lOo101 = l01lo;
    lo10O[__doSelectValue] = O1lOoo;
    lo10O.ll01o0 = Oo1l0;
    lo10O.o0O0lo = lo00o;
    lo10O.o1oo0 = o0O0o;
    lo10O.lolO = Oo0lo;
    lo10O[hidePopup] = lOOO1;
    lo10O[showPopup] = oOl1l;
    lo10O[_createPopup] = lOo1l;
    lo10O[within] = lO1O0;
    lo10O.OolO0 = O0OOO;
    lo10O.o1lo = O00oO;
    lo10O.O0oo0o = O0o11;
    lo10O.l0O1 = OO0Oo;
    lo10O[doQuery] = OOo01;
    lo10O[getPopupMaxHeight] = Ol1Oo;
    lo10O[setPopupMaxHeight] = llo1l;
    lo10O[getPopupMinHeight] = O01ol;
    lo10O[setPopupMinHeight] = O1ool;
    lo10O[getPopupHeight] = llo00;
    lo10O[setPopupHeight] = l1l1O;
    lo10O[getUrl] = O1o0l;
    lo10O[setUrl] = lo10o;
    lo10O[getAllowInput] = Oll01;
    lo10O[setAllowInput] = l1l0o;
    lo10O[getTextField] = oOo01;
    lo10O[setTextField] = l1loo;
    lo10O[getValueField] = l1OoO;
    lo10O[setValueField] = o1lOo;
    lo10O[setText] = l0lol;
    lo10O[setValue] = o1ooO;
    lo10O[setName] = o10o1;
    lo10O[getValue] = OoO11;
    lo10O[getText] = Ol01l;
    lo10O[getInputText] = oOll1;
    lo10O.OOo1oo = olooo;
    lo10O[removeItem] = l1O10;
    lo10O[insertItem] = oOlo;
    lo10O.olOO = oOooo;
    lo10O[select] = l0ol0;
    lo10O[showInput] = O0l00;
    lo10O[blurItem] = ollolItem;
    lo10O[hoverItem] = O1o11;
    lo10O[getItemEl] = OOl0;
    lo10O[getItem] = lO10l;
    lo10O.lOl0l = lO10lByEvent;
    lo10O[doUpdate] = lloo0;
    lo10O[doLayout] = oo0l0;
    lo10O.oo1l1 = ooOo1;
    lo10O[getErrorIconEl] = lloll;
    lo10O.Olo0ll = l1Ooo;
    lo10O[_initEvents] = l0l0O;
    lo10O[destroy] = O1O1l;
    lo10O[_create] = l000o;
    lo10O[getTextName] = Ol01lName;
    lo10O[setTextName] = l0lolName;
    l00O(mini.TextBoxList, "textboxlist");
    mini.AutoComplete = function() {
        mini.AutoComplete[superclass][constructor][call](this);
        var $ = this;
        $.oOl1 = null ;
        this.ll1l1O.onfocus = function() {
            $.lOll = $.ll1l1O.value;
            $.oOl1 = setInterval(function() {
                if ($.lOll != $.ll1l1O.value) {
                    $.lOlo0O();
                    $.lOll = $.ll1l1O.value;
                    if ($.ll1l1O.value == "" && $.value != "") {
                        $[setValue]("");
                        $.Ollll()
                    }
                }
            }
            , 20)
        }
        ;
        this.ll1l1O.onblur = function() {
            clearInterval($.oOl1);
            if (!$[isShowPopup]())
                if ($.lOll != $.ll1l1O.value)
                    if ($.ll1l1O.value == "" && $.value != "") {
                        $[setValue]("");
                        $.Ollll()
                    }
        }
        ;
        this._buttonEl.style.display = "none"
    }
    ;
    O00lO(mini.AutoComplete, mini.ComboBox, {
        url: "",
        allowInput: true,
        delay: 500,
        searchField: "key",
        minChars: 0,
        _buttonWidth: 0,
        uiCls: "mini-autocomplete",
        popupLoadingText: "<span class='mini-textboxlist-popup-loading'>Loading...</span>",
        popupErrorText: "<span class='mini-textboxlist-popup-error'>Error</span>",
        popupEmptyText: "<span class='mini-textboxlist-popup-noresult'>No Result</span>"
    });
    olloO = mini.AutoComplete[prototype];
    olloO[getAttrs] = lOllo;
    olloO.o1lo = l1000;
    olloO.lOlo0O = l0O00;
    olloO[doQuery] = lolo0;
    olloO.lOo101 = o1Olo;
    olloO[showPopup] = o1ll1;
    olloO[getSearchField] = O0O0l;
    olloO[setSearchField] = lO1O1;
    olloO[getMinChars] = lo010;
    olloO[setMinChars] = O10oO;
    olloO[setText] = OlO0l;
    olloO[setValue] = olo10;
    olloO[setUrl] = lllOO;
    l00O(mini.AutoComplete, "autocomplete");
    mini.Form = function($) {
        this.el = ooO0($);
        if (!this.el)
            throw new Error("form element not null");
        mini.Form[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Form, mini.Component, {
        el: null ,
        getFields: function() {
            if (!this.el)
                return [];
            var $ = mini.findControls(function($) {
                if (!$.el || $.formField != true)
                    return false;
                if (l1oooo(this.el, $.el))
                    return true;
                return false
            }
            , this);
            return $
        },
        getFieldsMap: function() {
            var B = this.getFields()
              , A = {};
            for (var $ = 0, C = B.length; $ < C; $++) {
                var _ = B[$];
                if (_.name)
                    A[_.name] = _
            }
            return A
        },
        getField: function($) {
            if (!this.el)
                return null ;
            return mini[getbyName]($, this.el)
        },
        getData: function(B, F) {
            if (mini.isNull(F))
                F = true;
            var A = B ? "getFormValue" : "getValue"
              , $ = this.getFields()
              , D = {};
            for (var _ = 0, E = $.length; _ < E; _++) {
                var C = $[_]
                  , G = C[A];
                if (!G)
                    continue;if (C.name)
                    if (F == true)
                        mini._setMap(C.name, G[call](C), D);
                    else
                        D[C.name] = G[call](C);
                if (C.textName && C[getText])
                    if (F == true)
                        D[C.textName] = C[getText]();
                    else
                        mini._setMap(C.textName, C[getText](), D)
            }
            return D
        },
        setData: function(F, A, C) {
            if (mini.isNull(C))
                C = true;
            if (typeof F != "object")
                F = {};
            var B = this.getFieldsMap();
            for (var D in B) {
                var _ = B[D];
                if (!_)
                    continue;if (_[setValue]) {
                    var E = F[D];
                    if (C == true)
                        E = mini._getMap(D, F);
                    if (E === undefined && A === false)
                        continue;if (E === null )
                        E = "";
                    _[setValue](E)
                }
                if (_[setText] && _.textName) {
                    var $ = F[_.textName];
                    if (C == true)
                        $ = mini._getMap(_.textName, F);
                    if (mini.isNull($))
                        $ = "";
                    _[setText]($)
                }
            }
        },
        reset: function() {
            var $ = this.getFields();
            for (var _ = 0, B = $.length; _ < B; _++) {
                var A = $[_];
                if (!A[setValue])
                    continue;if (A[setText] && A._clearText !== false)
                    A[setText]("");
                A[setValue](A[defaultValue])
            }
            this[setIsValid](true)
        },
        clear: function() {
            var $ = this.getFields();
            for (var _ = 0, B = $.length; _ < B; _++) {
                var A = $[_];
                if (!A[setValue])
                    continue;if (A[setText] && A._clearText !== false)
                    A[setText]("");
                A[setValue]("")
            }
            this[setIsValid](true)
        },
        validate: function(C) {
            var $ = this.getFields();
            for (var _ = 0, D = $.length; _ < D; _++) {
                var A = $[_];
                if (!A[validate])
                    continue;if (A[isDisplay] && A[isDisplay]()) {
                    var B = A[validate]();
                    if (B == false && C === false)
                        break
                }
            }
            return this[isValid]()
        },
        setIsValid: function(B) {
            var $ = this.getFields();
            for (var _ = 0, C = $.length; _ < C; _++) {
                var A = $[_];
                if (!A[setIsValid])
                    continue;A[setIsValid](B)
            }
        },
        isValid: function() {
            var $ = this.getFields();
            for (var _ = 0, B = $.length; _ < B; _++) {
                var A = $[_];
                if (!A[isValid])
                    continue;if (A[isValid]() == false)
                    return false
            }
            return true
        },
        getErrorTexts: function() {
            var A = []
              , _ = this.getErrors();
            for (var $ = 0, C = _.length; $ < C; $++) {
                var B = _[$];
                A.push(B.errorText)
            }
            return A
        },
        getErrors: function() {
            var A = []
              , $ = this.getFields();
            for (var _ = 0, C = $.length; _ < C; _++) {
                var B = $[_];
                if (!B[isValid])
                    continue;if (B[isValid]() == false)
                    A.push(B)
            }
            return A
        },
        mask: function($) {
            if (typeof $ == "string")
                $ = {
                    html: $
                };
            $ = $ || {};
            $.el = this.el;
            if (!$.cls)
                $.cls = this.oo10O;
            mini[mask]($)
        },
        unmask: function() {
            mini[unmask](this.el)
        },
        oo10O: "mini-mask-loading",
        loadingMsg: "\u6570\u636e\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e...",
        loading: function($) {
            this[mask]($ || this.loadingMsg)
        },
        loOlo0: function($) {
            this._changed = true
        },
        _changed: false,
        setChanged: function(A) {
            this._changed = A;
            var $ = this.getFields();
            for (var _ = 0, C = $.length; _ < C; _++) {
                var B = $[_];
                B[on]("valuechanged", this.loOlo0, this)
            }
        },
        isChanged: function() {
            return this._changed
        },
        setEnabled: function(A) {
            var $ = this.getFields();
            for (var _ = 0, C = $.length; _ < C; _++) {
                var B = $[_];
                B[setEnabled](A)
            }
        }
    });
    mini.Fit = function() {
        mini.Fit[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Fit, mini.Container, {
        style: "",
        _clearBorder: false,
        uiCls: "mini-fit"
    });
    lo10l = mini.Fit[prototype];
    lo10l[getAttrs] = l1l1Ol;
    lo10l[set_bodyParent] = O1Ol0o;
    lo10l[doLayout] = l0o1Oo;
    lo10l[isFixedSize] = lo11o;
    lo10l[_initEvents] = Oo0Oll;
    lo10l[_create] = lo111;
    l00O(mini.Fit, "fit");
    mini.Panel = function() {
        this.Oloo();
        mini.Panel[superclass][constructor][call](this);
        if (this.url)
            this[setUrl](this.url);
        this.lOlO = this.O1OOoo;
        this[_doVisibleEls]();
        this.l0OO10 = new o01l1(this);
        this[_doTools]()
    }
    ;
    O00lO(mini.Panel, mini.Container, {
        width: 250,
        title: "",
        iconCls: "",
        iconStyle: "",
        allowResize: false,
        url: "",
        refreshOnExpand: false,
        maskOnLoad: true,
        showCollapseButton: false,
        showCloseButton: false,
        closeAction: "display",
        showHeader: true,
        showToolbar: false,
        showFooter: false,
        headerCls: "",
        headerStyle: "",
        bodyCls: "",
        bodyStyle: "",
        footerCls: "",
        footerStyle: "",
        toolbarCls: "",
        toolbarStyle: "",
        minWidth: 180,
        minHeight: 100,
        maxWidth: 5000,
        maxHeight: 3000,
        uiCls: "mini-panel",
        lo01: 80,
        expanded: true
    });
    llO00 = mini.Panel[prototype];
    llO00[getAttrs] = O0oO1;
    llO00[expand] = Ooloo;
    llO00[collapse] = oO011;
    llO00[toggle] = l0O01O;
    llO00[setExpanded] = O0o0o;
    llO00[getAllowResize] = OO1l1;
    llO00[setAllowResize] = lo0o;
    llO00[getMaskOnLoad] = oo011;
    llO00[setMaskOnLoad] = O0oo1O;
    llO00[getRefreshOnExpand] = oolo0;
    llO00[setRefreshOnExpand] = oOlll;
    llO00[getUrl] = oO0o1;
    llO00[setUrl] = oooO;
    llO00[reload] = l0oOO;
    llO00[load] = Ol101;
    llO00.oll0l0 = Oool1;
    llO00.ol01O = o10l;
    llO00.lO10OO = Olo0l;
    llO00[getIFrameEl] = l1oO01;
    llO00[getFooterEl] = ll1O11;
    llO00[getBodyEl] = l0llO;
    llO00[getToolbarEl] = O1O0;
    llO00[getHeaderEl] = Ol111;
    llO00[setFooter] = lo1ol;
    llO00[setToolbar] = OoOlOO;
    llO00[set_bodyParent] = lll10;
    llO00[setBody] = lOOO;
    llO00[getButton] = ol1l0;
    llO00[removeButton] = l0oOl;
    llO00[updateButton] = loOo1;
    llO00[addButton] = ooO10;
    llO00[createButton] = o0oo0;
    llO00.Oloo = llOlO;
    llO00[onButtonClick] = O1lll;
    llO00.llloO = OOoO1;
    llO00.o0O0lo = oolOoO;
    llO00[getShowFooter] = l00oOO;
    llO00[setShowFooter] = lo1O0;
    llO00[getShowToolbar] = l10Oo1;
    llO00[setShowToolbar] = oloo;
    llO00[getShowHeader] = l1111;
    llO00[setShowHeader] = O1OOo;
    llO00[getShowCollapseButton] = l0O10;
    llO00[setShowCollapseButton] = loO01;
    llO00[getCloseAction] = OOo1O;
    llO00[setCloseAction] = oOloO;
    llO00[getShowCloseButton] = o1OOO;
    llO00[setShowCloseButton] = oO00O;
    llO00[_doTools] = lolo1;
    llO00[getIconCls] = o1OoO;
    llO00[setIconCls] = oO1O0;
    llO00[getTitle] = olo1ll;
    llO00[setTitle] = oo11l;
    llO00[_doTitle] = l0oo;
    llO00[getFooterCls] = l0lo;
    llO00[setFooterCls] = lo1olCls;
    llO00[getToolbarCls] = OO1ol;
    llO00[setToolbarCls] = OoOlOOCls;
    llO00[getBodyCls] = oo10l;
    llO00[setBodyCls] = lOOOCls;
    llO00[getHeaderCls] = o101o1;
    llO00[setHeaderCls] = O0ll;
    llO00[getFooterStyle] = O010;
    llO00[setFooterStyle] = lo1olStyle;
    llO00[getToolbarStyle] = o01olo;
    llO00[setToolbarStyle] = OoOlOOStyle;
    llO00[getBodyStyle] = O0Olo;
    llO00[setBodyStyle] = lOOOStyle;
    llO00[getHeaderStyle] = ooOll0;
    llO00[setHeaderStyle] = ooo0;
    llO00[getFooterHeight] = OO1lO;
    llO00[getToolbarHeight] = lO1O1O;
    llO00[getHeaderHeight] = OOOll;
    llO00[getBodyHeight] = oool;
    llO00[getViewportHeight] = l0oOo;
    llO00[getViewportWidth] = ooO1O;
    llO00[_stopLayout] = OO00l;
    llO00[deferLayout] = o0Oll;
    llO00[doLayout] = l0111;
    llO00[_doVisibleEls] = O1l01;
    llO00[_initEvents] = O01oO0;
    llO00[destroy] = lo000;
    llO00[_create] = O10Ooo;
    llO00[set] = oOO0oo;
    l00O(mini.Panel, "panel");
    mini.Window = function() {
        mini.Window[superclass][constructor][call](this);
        this[addCls]("mini-window");
        this[setVisible](false);
        this[setAllowDrag](this.allowDrag);
        this[setAllowResize](this[allowResize])
    }
    ;
    O00lO(mini.Window, mini.Panel, {
        x: 0,
        y: 0,
        state: "restore",
        llOolO: "mini-window-drag",
        lll010: "mini-window-resize",
        allowDrag: true,
        showCloseButton: true,
        showMaxButton: false,
        showMinButton: false,
        showCollapseButton: false,
        showModal: true,
        minWidth: 150,
        minHeight: 80,
        maxWidth: 2000,
        maxHeight: 2000,
        uiCls: "mini-window",
        containerEl: null 
    });
    OOoO = mini.Window[prototype];
    OOoO[showAtEl] = oOl10;
    OOoO[getAttrs] = o1oo1;
    OOoO[destroy] = oOOol;
    OOoO.lO0oO = lOooo;
    OOoO.lo0O = O0Ool;
    OOoO.llloO = lo0o0;
    OOoO.o00oo = OlOo1;
    OOoO.l001 = OO01o;
    OOoO[getBox] = lOO0ol;
    OOoO[getWidth] = OO0O;
    OOoO[hide] = l1ll01;
    OOoO[show] = ll1l;
    OOoO[showAtPos] = ll1lAtPos;
    OOoO[restore] = lO1l;
    OOoO[max] = oool0;
    OOoO[getShowMinButton] = l0O1o;
    OOoO[setShowMinButton] = o011o;
    OOoO[getShowMaxButton] = o1010l;
    OOoO[setShowMaxButton] = oOl1l0;
    OOoO[getAllowDrag] = loO1;
    OOoO[setAllowDrag] = lO0o0;
    OOoO[getMaxHeight] = oo101l;
    OOoO[setMaxHeight] = o0OO;
    OOoO[getMaxWidth] = o0Oo1;
    OOoO[setMaxWidth] = lOlo00;
    OOoO[getMinHeight] = looOl;
    OOoO[setMinHeight] = lO000;
    OOoO[getMinWidth] = o1O00;
    OOoO[setMinWidth] = O0lO0;
    OOoO[getShowModal] = OO11;
    OOoO[setShowModal] = ollo;
    OOoO[getParentBox] = oOOO1;
    OOoO.Oo0olO = o1o1l;
    OOoO[doLayout] = o0OO1O;
    OOoO[_initEvents] = oOoo0;
    OOoO.Oloo = oollO;
    OOoO[_create] = lO0O;
    l00O(mini.Window, "window");
    mini.MessageBox = {
        alertTitle: "\u63d0\u9192",
        confirmTitle: "\u786e\u8ba4",
        prompTitle: "\u8f93\u5165",
        prompMessage: "\u8bf7\u8f93\u5165\u5185\u5bb9\uff1a",
        buttonText: {
            ok: "\u786e\u5b9a",
            cancel: "\u53d6\u6d88",
            yes: "\u662f",
            no: "\u5426"
        },
        show: function(F) {
            F = mini.copyTo({
                width: "auto",
                height: "auto",
                showModal: true,
                minWidth: 150,
                maxWidth: 800,
                minHeight: 100,
                maxHeight: 350,
                showHeader: true,
                title: "",
                titleIcon: "",
                iconCls: "",
                iconStyle: "",
                message: "",
                html: "",
                spaceStyle: "margin-right:15px",
                showCloseButton: true,
                buttons: null ,
                buttonWidth: 58,
                callback: null 
            }, F);
            var I = F.callback
              , C = new mini.Window();
            C[setBodyStyle]("overflow:hidden");
            C[setShowModal](F[showModal]);
            C[setTitle](F.title || "");
            C[setIconCls](F.titleIcon);
            C[setShowHeader](F.showHeader);
            C[setShowCloseButton](F[showCloseButton]);
            var J = C.uid + "$table"
              , O = C.uid + "$content"
              , M = "<div class=\"" + F.iconCls + "\" style=\"" + F[iconStyle] + "\"></div>"
              , R = "<table class=\"mini-messagebox-table\" id=\"" + J + "\" style=\"\" cellspacing=\"0\" cellpadding=\"0\"><tr><td>" + M + "</td><td id=\"" + O + "\" class=\"mini-messagebox-content-text\">" + (F.message || "") + "</td></tr></table>"
              , _ = "<div class=\"mini-messagebox-content\"></div>" + "<div class=\"mini-messagebox-buttons\"></div>";
            C.O1OOoo.innerHTML = _;
            var N = C.O1OOoo.firstChild;
            if (F.html) {
                if (typeof F.html == "string")
                    N.innerHTML = F.html;
                else if (mini.isElement(F.html))
                    N.appendChild(F.html)
            } else
                N.innerHTML = R;
            C._Buttons = [];
            var Q = C.O1OOoo.lastChild;
            if (F.buttons && F.buttons.length > 0) {
                for (var H = 0, D = F.buttons.length; H < D; H++) {
                    var E = F.buttons[H]
                      , K = mini.MessageBox.buttonText[E];
                    if (!K)
                        K = E;
                    var $ = new mini.Button();
                    $[setText](K);
                    $[setWidth](F.buttonWidth);
                    $[render](Q);
                    $.action = E;
                    $[on]("click", function(_) {
                        var $ = _.sender;
                        if (I)
                            I($.action);
                        mini.MessageBox[hide](C)
                    }
                    );
                    if (H != D - 1)
                        $[setStyle](F.spaceStyle);
                    C._Buttons.push($)
                }
            } else
                Q.style.display = "none";
            C[setMinWidth](F.minWidth);
            C[setMinHeight](F.minHeight);
            C[setMaxWidth](F.maxWidth);
            C[setMaxHeight](F.maxHeight);
            C[setWidth](F.width);
            C[setHeight](F.height);
            C[show]();
            var A = C[getWidth]();
            C[setWidth](A);
            var L = C[getHeight]();
            C[setHeight](L);
            var B = document.getElementById(J);
            if (B)
                B.style.width = "100%";
            var G = document.getElementById(O);
            if (G)
                G.style.width = "100%";
            var P = C._Buttons[0];
            if (P)
                P[focus]();
            else
                C[focus]();
            C[on]("beforebuttonclick", function($) {
                if (I)
                    I("close");
                $.cancel = true;
                mini.MessageBox[hide](C)
            }
            );
            l1Oo0O(C.el, "keydown", function($) {
                if ($.keyCode == 27) {
                    if (I)
                        I("close");
                    $.cancel = true;
                    mini.MessageBox[hide](C)
                }
            }
            );
            return C.uid
        },
        hide: function(C) {
            if (!C)
                return;
            var _ = typeof C == "object" ? C : mini.getbyUID(C);
            if (!_)
                return;
            for (var $ = 0, A = _._Buttons.length; $ < A; $++) {
                var B = _._Buttons[$];
                B[destroy]()
            }
            _._Buttons = null ;
            _[destroy]()
        },
        alert: function(A, _, $) {
            return mini.MessageBox[show]({
                minWidth: 250,
                title: _ || mini.MessageBox.alertTitle,
                buttons: ["ok"],
                message: A,
                iconCls: "mini-messagebox-warning",
                callback: $
            })
        },
        confirm: function(A, _, $) {
            return mini.MessageBox[show]({
                minWidth: 250,
                title: _ || mini.MessageBox.confirmTitle,
                buttons: ["ok", "cancel"],
                message: A,
                iconCls: "mini-messagebox-question",
                callback: $
            })
        },
        prompt: function(C, B, A, _) {
            var F = "prompt$" + new Date()[getTime]()
              , E = C || mini.MessageBox.promptMessage;
            if (_)
                E = E + "<br/><textarea id=\"" + F + "\" style=\"width:200px;height:60px;margin-top:3px;\"></textarea>";
            else
                E = E + "<br/><input id=\"" + F + "\" type=\"text\" style=\"width:200px;margin-top:3px;\"/>";
            var D = mini.MessageBox[show]({
                title: B || mini.MessageBox.promptTitle,
                buttons: ["ok", "cancel"],
                width: 250,
                html: "<div style=\"padding:5px;padding-left:10px;\">" + E + "</div>",
                callback: function(_) {
                    var $ = document.getElementById(F);
                    if (A)
                        A(_, $.value)
                }
            })
              , $ = document.getElementById(F);
            $[focus]();
            return D
        },
        loading: function(_, $) {
            return mini.MessageBox[show]({
                minHeight: 50,
                title: $,
                showCloseButton: false,
                message: _,
                iconCls: "mini-messagebox-waiting"
            })
        }
    };
    mini.alert = mini.MessageBox.alert;
    mini.confirm = mini.MessageBox.confirm;
    mini.prompt = mini.MessageBox.prompt;
    mini[loading] = mini.MessageBox[loading];
    mini.showMessageBox = mini.MessageBox[show];
    mini.hideMessageBox = mini.MessageBox[hide];
    mini.Splitter = function() {
        this.l01lol();
        mini.Splitter[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Splitter, mini.Control, {
        width: 300,
        height: 180,
        vertical: false,
        allowResize: true,
        pane1: null ,
        pane2: null ,
        showHandleButton: true,
        handlerStyle: "",
        handlerCls: "",
        handlerSize: 5,
        uiCls: "mini-splitter"
    });
    oo1lo1 = mini.Splitter[prototype];
    oo1lo1[getAttrs] = o1ool1;
    oo1lo1.l10l = lOlll;
    oo1lo1.ooOo = olOo0;
    oo1lo1.ollOll = l0O0l;
    oo1lo1.O01l0l = o0lO0;
    oo1lo1.ol1Ol = ooO0O;
    oo1lo1[onButtonClick] = oll0O;
    oo1lo1.llloO = o1lO0;
    oo1lo1.o0O0lo = ooOl1;
    oo1lo1[getHandlerSize] = o0OOO;
    oo1lo1[setHandlerSize] = O1l1O;
    oo1lo1[getAllowResize] = O1o0o;
    oo1lo1[setAllowResize] = l01O0;
    oo1lo1[hidePane] = O0l1l;
    oo1lo1[showPane] = OOO11;
    oo1lo1[togglePane] = oOl10l;
    oo1lo1[collapsePane] = ll10O;
    oo1lo1[expandPane] = l1oOo;
    oo1lo1[getVertical] = O00O0;
    oo1lo1[setVertical] = lo010l;
    oo1lo1[getShowHandleButton] = oo1ol0;
    oo1lo1[setShowHandleButton] = l0ooo;
    oo1lo1[updatePane] = lo001;
    oo1lo1[getPaneEl] = o00lOo;
    oo1lo1[setPaneControls] = Ol0O0;
    oo1lo1[setPanes] = Ol0o0;
    oo1lo1[getPane] = o1OOo;
    oo1lo1[getPaneBox] = o1OOoBox;
    oo1lo1[doLayout] = o1010;
    oo1lo1[doUpdate] = loOlo;
    oo1lo1.l01lol = ll1l1;
    oo1lo1[_initEvents] = l11o1;
    oo1lo1[_create] = O1oO;
    l00O(mini.Splitter, "splitter");
    mini.Layout = function() {
        this.regions = [];
        this.regionMap = {};
        mini.Layout[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Layout, mini.Control, {
        regions: [],
        splitSize: 5,
        collapseWidth: 28,
        collapseHeight: 25,
        regionWidth: 150,
        regionHeight: 80,
        regionMinWidth: 50,
        regionMinHeight: 25,
        regionMaxWidth: 2000,
        regionMaxHeight: 2000,
        uiCls: "mini-layout",
        hoverProxyEl: null 
    });
    Ol0l = mini.Layout[prototype];
    Ol0l[onButtonMouseDown] = OlOO;
    Ol0l[onButtonClick] = o1oO;
    Ol0l.o1oo0 = OllOo1;
    Ol0l.ol0OOo = l11Oo;
    Ol0l.o1ol = Ol1o0;
    Ol0l.llloO = ol000;
    Ol0l.o0O0lo = lO1Oo;
    Ol0l.ll00O = Ol1l01;
    Ol0l.llOOO0 = o10O1;
    Ol0l.Oll0 = Oo00;
    Ol0l[isVisibleRegion] = OOOlo;
    Ol0l[isExpandRegion] = loOo1O;
    Ol0l[hideRegion] = O1o11l;
    Ol0l[showRegion] = O0l0Oo;
    Ol0l[toggleRegion] = l0011;
    Ol0l[collapseRegion] = lO1Ol;
    Ol0l[expandRegion] = lOl1l;
    Ol0l[updateRegion] = oO111;
    Ol0l.OOOl = o00Oo;
    Ol0l[moveRegion] = o1o0O;
    Ol0l[removeRegion] = O101l;
    Ol0l[addRegion] = lO0lo;
    Ol0l[setRegions] = oO0l;
    Ol0l[setRegionControls] = OOOl0;
    Ol0l.o0lO = O00010;
    Ol0l.O0o0o0 = oloo0;
    Ol0l.OO100 = lOl11;
    Ol0l[getRegion] = olOOo;
    Ol0l[getRegionBox] = olOOoBox;
    Ol0l[getRegionProxyEl] = olOOoProxyEl;
    Ol0l[getRegionSplitEl] = olOOoSplitEl;
    Ol0l[getRegionBodyEl] = olOOoBodyEl;
    Ol0l[getRegionHeaderEl] = olOOoHeaderEl;
    Ol0l[getRegionEl] = olOOoEl;
    Ol0l[_initEvents] = O10lo;
    Ol0l[_create] = l0o0o;
    mini.copyTo(mini.Layout.prototype, {
        o11l: function(_, A) {
            var C = "<div class=\"mini-tools\">";
            if (A)
                C += "<span class=\"mini-tools-collapse\"></span>";
            else
                for (var $ = _.buttons.length - 1; $ >= 0; $--) {
                    var B = _.buttons[$];
                    C += "<span class=\"" + B.cls + "\" style=\"";
                    C += B.style + ";" + (B.visible ? "" : "display:none;") + "\">" + B.html + "</span>"
                }
            C += "</div>";
            C += "<div class=\"mini-layout-region-icon " + _.iconCls + "\" style=\"" + _[iconStyle] + ";" + ((_[iconStyle] || _.iconCls) ? "" : "display:none;") + "\"></div>";
            C += "<div class=\"mini-layout-region-title\">" + _.title + "</div>";
            return C
        },
        doUpdate: function() {
            for (var $ = 0, E = this.regions.length; $ < E; $++) {
                var B = this.regions[$]
                  , _ = B.region
                  , A = B._el
                  , D = B._split
                  , C = B._proxy;
                if (B.cls)
                    O0Oo0(A, B.cls);
                B._header.style.display = B.showHeader ? "" : "none";
                B._header.innerHTML = this.o11l(B);
                if (B._proxy)
                    B._proxy.innerHTML = this.o11l(B, true);
                if (D) {
                    Ol00(D, "mini-layout-split-nodrag");
                    if (B.expanded == false || !B[allowResize])
                        O0Oo0(D, "mini-layout-split-nodrag")
                }
            }
            this[doLayout]()
        },
        doLayout: function() {
            if (!this[canLayout]())
                return;
            if (this.OO1oOO)
                return;
            var C = lOl10(this.el, true)
              , _ = o110O(this.el, true)
              , D = {
                x: 0,
                y: 0,
                width: _,
                height: C
            }
              , I = this.regions.clone()
              , P = this[getRegion]("center");
            I.remove(P);
            if (P)
                I.push(P);
            for (var K = 0, H = I.length; K < H; K++) {
                var E = I[K];
                E._Expanded = false;
                Ol00(E._el, "mini-layout-popup");
                var A = E.region
                  , L = E._el
                  , F = E._split
                  , G = E._proxy;
                if (E.visible == false) {
                    L.style.display = "none";
                    if (A != "center")
                        F.style.display = G.style.display = "none";
                    continue
                }
                L.style.display = "";
                if (A != "center")
                    F.style.display = G.style.display = "";
                var R = D.x
                  , O = D.y
                  , _ = D.width
                  , C = D.height
                  , B = E.width
                  , J = E.height;
                if (!E.expanded)
                    if (A == "west" || A == "east") {
                        B = E.collapseSize;
                        oO1Ol(L, E.width)
                    } else if (A == "north" || A == "south") {
                        J = E.collapseSize;
                        OO01(L, E.height)
                    }
                switch (A) {
                case "north":
                    C = J;
                    D.y += J;
                    D.height -= J;
                    break;
                case "south":
                    C = J;
                    O = D.y + D.height - J;
                    D.height -= J;
                    break;
                case "west":
                    _ = B;
                    D.x += B;
                    D.width -= B;
                    break;
                case "east":
                    _ = B;
                    R = D.x + D.width - B;
                    D.width -= B;
                    break;
                case "center":
                    break;
                default:
                    continue
                }
                if (_ < 0)
                    _ = 0;
                if (C < 0)
                    C = 0;
                if (A == "west" || A == "east")
                    OO01(L, C);
                if (A == "north" || A == "south")
                    oO1Ol(L, _);
                var N = "left:" + R + "px;top:" + O + "px;"
                  , $ = L;
                if (!E.expanded) {
                    $ = G;
                    L.style.top = "-100px";
                    L.style.left = "-1500px"
                } else if (G) {
                    G.style.left = "-1500px";
                    G.style.top = "-100px"
                }
                $.style.left = R + "px";
                $.style.top = O + "px";
                oO1Ol($, _);
                OO01($, C);
                var M = jQuery(E._el).height()
                  , Q = E.showHeader ? jQuery(E._header).outerHeight() : 0;
                OO01(E._body, M - Q);
                if (A == "center")
                    continue;B = J = E.splitSize;
                R = D.x,
                O = D.y,
                _ = D.width,
                C = D.height;
                switch (A) {
                case "north":
                    C = J;
                    D.y += J;
                    D.height -= J;
                    break;
                case "south":
                    C = J;
                    O = D.y + D.height - J;
                    D.height -= J;
                    break;
                case "west":
                    _ = B;
                    D.x += B;
                    D.width -= B;
                    break;
                case "east":
                    _ = B;
                    R = D.x + D.width - B;
                    D.width -= B;
                    break;
                case "center":
                    break
                }
                if (_ < 0)
                    _ = 0;
                if (C < 0)
                    C = 0;
                F.style.left = R + "px";
                F.style.top = O + "px";
                oO1Ol(F, _);
                OO01(F, C);
                if (E.showSplit && E.expanded && E[allowResize] == true)
                    Ol00(F, "mini-layout-split-nodrag");
                else
                    O0Oo0(F, "mini-layout-split-nodrag");
                F.firstChild.style.display = E.showSplitIcon ? "block" : "none";
                if (E.expanded)
                    Ol00(F.firstChild, "mini-layout-spliticon-collapse");
                else
                    O0Oo0(F.firstChild, "mini-layout-spliticon-collapse")
            }
            mini.layout(this.oO0o1l);
            this[fire]("layout")
        },
        ol1Ol: function(B) {
            if (this.OO1oOO)
                return;
            if (llOo(B.target, "mini-layout-split")) {
                var A = jQuery(B.target).attr("uid");
                if (A != this.uid)
                    return;
                var _ = this[getRegion](B.target.id);
                if (_.expanded == false || !_[allowResize] || !_.showSplit)
                    return;
                this.dragRegion = _;
                var $ = this.O01l0l();
                $.start(B)
            }
        },
        O01l0l: function() {
            if (!this.drag)
                this.drag = new mini.Drag({
                    capture: true,
                    onStart: mini.createDelegate(this.ollOll, this),
                    onMove: mini.createDelegate(this.ooOo, this),
                    onStop: mini.createDelegate(this.l10l, this)
                });
            return this.drag
        },
        ollOll: function($) {
            this.o110Ol = mini.append(document.body, "<div class=\"mini-resizer-mask\"></div>");
            this.OO0loo = mini.append(document.body, "<div class=\"mini-proxy\"></div>");
            this.OO0loo.style.cursor = "n-resize";
            if (this.dragRegion.region == "west" || this.dragRegion.region == "east")
                this.OO0loo.style.cursor = "w-resize";
            this.splitBox = OOl1o0(this.dragRegion._split);
            oO11Oo(this.OO0loo, this.splitBox);
            this.elBox = OOl1o0(this.el, true)
        },
        ooOo: function(C) {
            var I = C.now[0] - C.init[0]
              , V = this.splitBox.x + I
              , A = C.now[1] - C.init[1]
              , U = this.splitBox.y + A
              , K = V + this.splitBox.width
              , T = U + this.splitBox.height
              , G = this[getRegion]("west")
              , L = this[getRegion]("east")
              , F = this[getRegion]("north")
              , D = this[getRegion]("south")
              , H = this[getRegion]("center")
              , O = G && G.visible ? G.width : 0
              , Q = L && L.visible ? L.width : 0
              , R = F && F.visible ? F.height : 0
              , J = D && D.visible ? D.height : 0
              , P = G && G.showSplit ? o110O(G._split) : 0
              , $ = L && L.showSplit ? o110O(L._split) : 0
              , B = F && F.showSplit ? lOl10(F._split) : 0
              , S = D && D.showSplit ? lOl10(D._split) : 0
              , E = this.dragRegion
              , N = E.region;
            if (N == "west") {
                var M = this.elBox.width - Q - $ - P - H.minWidth;
                if (V - this.elBox.x > M)
                    V = M + this.elBox.x;
                if (V - this.elBox.x < E.minWidth)
                    V = E.minWidth + this.elBox.x;
                if (V - this.elBox.x > E.maxWidth)
                    V = E.maxWidth + this.elBox.x;
                mini.setX(this.OO0loo, V)
            } else if (N == "east") {
                M = this.elBox.width - O - P - $ - H.minWidth;
                if (this.elBox.right - (V + this.splitBox.width) > M)
                    V = this.elBox.right - M - this.splitBox.width;
                if (this.elBox.right - (V + this.splitBox.width) < E.minWidth)
                    V = this.elBox.right - E.minWidth - this.splitBox.width;
                if (this.elBox.right - (V + this.splitBox.width) > E.maxWidth)
                    V = this.elBox.right - E.maxWidth - this.splitBox.width;
                mini.setX(this.OO0loo, V)
            } else if (N == "north") {
                var _ = this.elBox.height - J - S - B - H.minHeight;
                if (U - this.elBox.y > _)
                    U = _ + this.elBox.y;
                if (U - this.elBox.y < E.minHeight)
                    U = E.minHeight + this.elBox.y;
                if (U - this.elBox.y > E.maxHeight)
                    U = E.maxHeight + this.elBox.y;
                mini.setY(this.OO0loo, U)
            } else if (N == "south") {
                _ = this.elBox.height - R - B - S - H.minHeight;
                if (this.elBox.bottom - (U + this.splitBox.height) > _)
                    U = this.elBox.bottom - _ - this.splitBox.height;
                if (this.elBox.bottom - (U + this.splitBox.height) < E.minHeight)
                    U = this.elBox.bottom - E.minHeight - this.splitBox.height;
                if (this.elBox.bottom - (U + this.splitBox.height) > E.maxHeight)
                    U = this.elBox.bottom - E.maxHeight - this.splitBox.height;
                mini.setY(this.OO0loo, U)
            }
        },
        l10l: function(B) {
            var C = OOl1o0(this.OO0loo)
              , D = this.dragRegion
              , A = D.region;
            if (A == "west") {
                var $ = C.x - this.elBox.x;
                this[updateRegion](D, {
                    width: $
                })
            } else if (A == "east") {
                $ = this.elBox.right - C.right;
                this[updateRegion](D, {
                    width: $
                })
            } else if (A == "north") {
                var _ = C.y - this.elBox.y;
                this[updateRegion](D, {
                    height: _
                })
            } else if (A == "south") {
                _ = this.elBox.bottom - C.bottom;
                this[updateRegion](D, {
                    height: _
                })
            }
            jQuery(this.OO0loo).remove();
            this.OO0loo = null ;
            this.elBox = this.handlerBox = null ;
            jQuery(this.o110Ol).remove();
            this.o110Ol = null 
        },
        ll0lo: function($) {
            $ = this[getRegion]($);
            if ($._Expanded === true)
                this.oo1Ol($);
            else
                this.lOoO1($)
        },
        lOoO1: function(D) {
            if (this.OO1oOO)
                return;
            this[doLayout]();
            var A = D.region
              , H = D._el;
            D._Expanded = true;
            O0Oo0(H, "mini-layout-popup");
            var E = OOl1o0(D._proxy)
              , B = OOl1o0(D._el)
              , F = {};
            if (A == "east") {
                var K = E.x
                  , J = E.y
                  , C = E.height;
                OO01(H, C);
                mini.setX(H, K);
                H.style.top = D._proxy.style.top;
                var I = parseInt(H.style.left);
                F = {
                    left: I - B.width
                }
            } else if (A == "west") {
                K = E.right - B.width,
                J = E.y,
                C = E.height;
                OO01(H, C);
                mini.setX(H, K);
                H.style.top = D._proxy.style.top;
                I = parseInt(H.style.left);
                F = {
                    left: I + B.width
                }
            } else if (A == "north") {
                var K = E.x
                  , J = E.bottom - B.height
                  , _ = E.width;
                oO1Ol(H, _);
                mini[setXY](H, K, J);
                var $ = parseInt(H.style.top);
                F = {
                    top: $ + B.height
                }
            } else if (A == "south") {
                K = E.x,
                J = E.y,
                _ = E.width;
                oO1Ol(H, _);
                mini[setXY](H, K, J);
                $ = parseInt(H.style.top);
                F = {
                    top: $ - B.height
                }
            }
            O0Oo0(D._proxy, "mini-layout-maxZIndex");
            this.OO1oOO = true;
            var G = this
              , L = jQuery(H);
            L.animate(F, 250, function() {
                Ol00(D._proxy, "mini-layout-maxZIndex");
                G.OO1oOO = false
            }
            )
        },
        oo1Ol: function(F) {
            if (this.OO1oOO)
                return;
            F._Expanded = false;
            var B = F.region
              , E = F._el
              , D = OOl1o0(E)
              , _ = {};
            if (B == "east") {
                var C = parseInt(E.style.left);
                _ = {
                    left: C + D.width
                }
            } else if (B == "west") {
                C = parseInt(E.style.left);
                _ = {
                    left: C - D.width
                }
            } else if (B == "north") {
                var $ = parseInt(E.style.top);
                _ = {
                    top: $ - D.height
                }
            } else if (B == "south") {
                $ = parseInt(E.style.top);
                _ = {
                    top: $ + D.height
                }
            }
            O0Oo0(F._proxy, "mini-layout-maxZIndex");
            this.OO1oOO = true;
            var A = this
              , G = jQuery(E);
            G.animate(_, 250, function() {
                Ol00(F._proxy, "mini-layout-maxZIndex");
                A.OO1oOO = false;
                A[doLayout]()
            }
            )
        },
        Olo0ll: function(B) {
            if (this.OO1oOO)
                return;
            for (var $ = 0, A = this.regions.length; $ < A; $++) {
                var _ = this.regions[$];
                if (!_._Expanded)
                    continue;if (l1oooo(_._el, B.target) || l1oooo(_._proxy, B.target))
                    ;
                else
                    this.oo1Ol(_)
            }
        },
        getAttrs: function(A) {
            var H = mini.Layout[superclass][getAttrs][call](this, A)
              , G = jQuery(A)
              , E = parseInt(G.attr("splitSize"));
            if (!isNaN(E))
                H.splitSize = E;
            var F = []
              , D = mini[getChildNodes](A);
            for (var _ = 0, C = D.length; _ < C; _++) {
                var B = D[_]
                  , $ = {};
                F.push($);
                $.cls = B.className;
                $.style = B.style.cssText;
                mini[_ParseString](B, $, ["region", "title", "iconCls", "iconStyle", "cls", "headerCls", "headerStyle", "bodyCls", "bodyStyle"]);
                mini[_ParseBool](B, $, ["allowResize", "visible", "showCloseButton", "showCollapseButton", "showSplit", "showHeader", "expanded", "showSplitIcon"]);
                mini[_ParseInt](B, $, ["splitSize", "collapseSize", "width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
                $.bodyParent = B
            }
            H.regions = F;
            return H
        }
    });
    l00O(mini.Layout, "layout");
    mini.Box = function() {
        mini.Box[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Box, mini.Container, {
        style: "",
        borderStyle: "",
        bodyStyle: "",
        uiCls: "mini-box"
    });
    ooo0o0 = mini.Box[prototype];
    ooo0o0[getAttrs] = l1o1Oo;
    ooo0o0[setBodyStyle] = oOooO;
    ooo0o0[set_bodyParent] = olo0oO;
    ooo0o0[setBody] = OOol;
    ooo0o0[doLayout] = lO1o10;
    ooo0o0[_initEvents] = lOO0;
    ooo0o0[_create] = Ol0O0O;
    l00O(mini.Box, "box");
    mini.Include = function() {
        mini.Include[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Include, mini.Control, {
        url: "",
        uiCls: "mini-include"
    });
    O1ll = mini.Include[prototype];
    O1ll[getAttrs] = Ol0oo;
    O1ll[getUrl] = O0ll1o;
    O1ll[setUrl] = O0l0o;
    O1ll[doLayout] = ooOoo;
    O1ll[_initEvents] = OoOol;
    O1ll[_create] = o1o0Ol;
    l00O(mini.Include, "include");
    mini.Tabs = function() {
        this.Ooll0();
        mini.Tabs[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Tabs, mini.Control, {
        activeIndex: -1,
        tabAlign: "left",
        tabPosition: "top",
        showBody: true,
        nameField: "name",
        titleField: "title",
        urlField: "url",
        url: "",
        maskOnLoad: true,
        plain: true,
        bodyStyle: "",
        OO1l: "mini-tab-hover",
        Ol0lo: "mini-tab-active",
        uiCls: "mini-tabs",
        oOllll: 1,
        lo01: 180,
        hoverTab: null 
    });
    lol0l = mini.Tabs[prototype];
    lol0l[getAttrs] = oOoOo1;
    lol0l[onActiveChanged] = l0ol;
    lol0l[onCloseClick] = O11O00;
    lol0l[onBeforeCloseClick] = OOl0o;
    lol0l.o1Ol = oo1o1l;
    lol0l.oo11 = o00Ol;
    lol0l.O0Oo = loOlO;
    lol0l.OOll10 = O00Oo;
    lol0l.llO1O = O001o;
    lol0l.oOo10 = llOOol;
    lol0l.ol1Ol = OOO10;
    lol0l.o1oo0 = l1loO;
    lol0l.ol0OOo = lolO0;
    lol0l.o0O0lo = l0oO1o;
    lol0l.l1l1 = oOll;
    lol0l[getTabByEvent] = OOOoo;
    lol0l[getPlain] = OO0oO1;
    lol0l[setPlain] = ool00;
    lol0l[getMaskOnLoad] = oo0o;
    lol0l[setMaskOnLoad] = lOll1o;
    lol0l[getBodyStyle] = Oo100;
    lol0l[setBodyStyle] = O10lO;
    lol0l[getShowBody] = oo0lo1;
    lol0l[setShowBody] = o10o;
    lol0l.OoO0 = l0lll;
    lol0l[getActiveIndex] = oo1lo;
    lol0l[getActiveTab] = ol0l;
    lol0l[activeTab] = Oll1l;
    lol0l[getActiveIndex] = oo1lo;
    lol0l[setActiveIndex] = lllo0;
    lol0l.l0O0 = OlOoo;
    lol0l.oo0O = Ol0o0l;
    lol0l.o001O0 = oOlOO;
    lol0l[getTabIFrameEl] = OOoo0O;
    lol0l[getTabBodyEl] = ooO11;
    lol0l[getTabEl] = loO0O;
    lol0l[getBodyEl] = oo01;
    lol0l[getHeaderEl] = loooO;
    lol0l[getTab] = l1oO;
    lol0l[setTabPosition] = oo11OO;
    lol0l[setTabAlign] = ol001;
    lol0l[doLayout] = oo00o;
    lol0l[_handleIFrameOverflow] = Oo01OO;
    lol0l[doUpdate] = OO1loO;
    lol0l[getTabRows] = l1oORows;
    lol0l[reloadTab] = ol0ol;
    lol0l[loadTab] = o1oO1;
    lol0l.O1OlO = oo1O0O;
    lol0l.Oo1o11 = OO1O0O;
    lol0l[_cancelLoadTabs] = oolo10;
    lol0l.ol01O = lOO1l;
    lol0l.lO10OO = oolO1;
    lol0l[updateTab] = Ol1OOl;
    lol0l[moveTab] = llO001;
    lol0l[removeTab] = O0llO;
    lol0l[addTab] = olll1;
    lol0l[removeAll] = lO01;
    lol0l[getTabs] = l1oOs;
    lol0l[setTabs] = o11o;
    lol0l[setTabControls] = l1o0o;
    lol0l[getUrlField] = O0o10o;
    lol0l[setUrlField] = oO110;
    lol0l[getTitleField] = o1o0l;
    lol0l[setTitleField] = l0l0;
    lol0l[getNameField] = lO1l0O;
    lol0l[setNameField] = OOlo0l;
    lol0l[getUrl] = Ol0Oo;
    lol0l[setUrl] = OOo1l;
    lol0l[load] = ooO100;
    lol0l.oll0l0 = looOo;
    lol0l[createTab] = oOOOl;
    lol0l.Ooll0 = OllOl;
    lol0l[_initEvents] = l1Ool;
    lol0l.O0OO = lO111;
    lol0l[destroy] = ooOOO;
    lol0l[_create] = olOl0O;
    lol0l[set] = OlOlO0;
    l00O(mini.Tabs, "tabs");
    mini.Menu = function() {
        this.items = [];
        mini.Menu[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Menu, mini.Control);
    mini.copyTo(mini.Menu.prototype, l0ooOO_prototype);
    var l0ooOO_prototype_hide = l0ooOO_prototype[hide];
    mini.copyTo(mini.Menu.prototype, {
        height: "auto",
        width: "auto",
        minWidth: 140,
        vertical: true,
        allowSelectItem: false,
        loOl0O: null ,
        _lOlO0: "mini-menuitem-selected",
        textField: "text",
        resultAsTree: false,
        idField: "id",
        parentField: "pid",
        itemsField: "children",
        showNavArrow: true,
        _clearBorder: false,
        showAction: "none",
        hideAction: "outerclick",
        uiCls: "mini-menu",
        _disableContextMenu: false,
        url: "",
        hideOnClick: true
    });
    l10O1 = mini.Menu[prototype];
    l10O1[getAttrs] = lo11l;
    l10O1[parseItems] = lol0;
    l10O1[setToolbar] = lllol;
    l10O1[_startScrollMove] = o0oo;
    l10O1[__OnBottomMouseDown] = ol1o;
    l10O1[__OnTopMouseDown] = o0O0;
    l10O1[onItemSelect] = lOl0;
    l10O1[onItemClick] = lOoll;
    l10O1[_OnItemSelect] = O110;
    l10O1[_OnItemClick] = Oo1l;
    l10O1[getHideOnClick] = o0o0;
    l10O1[setHideOnClick] = Ol001l;
    l10O1[getUrl] = oo10;
    l10O1[setUrl] = o1Oll;
    l10O1[load] = Ol11ll;
    l10O1[loadList] = Ol11llList;
    l10O1.oll0l0 = o0O1;
    l10O1.l001 = lO0lO;
    l10O1[doLayout] = OloOoO;
    l10O1[getParentField] = OolO;
    l10O1[setParentField] = ll0001;
    l10O1[getIdField] = oO1o0;
    l10O1[setIdField] = ol0o0l;
    l10O1[getResultAsTree] = O0oO0;
    l10O1[setResultAsTree] = ol0OOO;
    l10O1[getTextField] = l1O10O;
    l10O1[setTextField] = l0lOl;
    l10O1[getShowNavArrow] = oo0o0o;
    l10O1[setShowNavArrow] = looO1;
    l10O1[getSelectedItem] = oOO00;
    l10O1[setSelectedItem] = oll0;
    l10O1[getAllowSelectItem] = ooO0o;
    l10O1[setAllowSelectItem] = olOl;
    l10O1[getItem] = llooo;
    l10O1[getGroupItems] = olllol;
    l10O1[removeAll] = oloO1;
    l10O1[removeItemAt] = o1ll;
    l10O1[removeItem] = ll0lo1;
    l10O1[addItem] = OO1O;
    l10O1[getItems] = llooos;
    l10O1[setItems] = OlOOo;
    l10O1[getData] = l1oll;
    l10O1[setData] = oolll;
    l10O1[hasShowItemMenu] = o10l0O;
    l10O1[showItemMenu] = lOOoo;
    l10O1[hideItems] = Ooo01;
    l10O1[hide] = O0OOol;
    l10O1[show] = ooloo;
    l10O1[isVertical] = loO0oO;
    l10O1[getVertical] = l0OO1l;
    l10O1[setVertical] = Oooo1;
    l10O1[within] = o0l01;
    l10O1[_initEvents] = l11l1;
    l10O1[destroy] = olll0o;
    l10O1[_create] = lOo1;
    l10O1[set] = l0lO0;
    l10O1[getbyName] = Ol1Ol;
    l00O(mini.Menu, "menu");
    lOo00oBar = function() {
        lOo00oBar[superclass][constructor][call](this)
    }
    ;
    O00lO(lOo00oBar, mini.Menu, {
        uiCls: "mini-menubar",
        vertical: false,
        setVertical: function($) {
            this.vertical = false
        }
    });
    l00O(lOo00oBar, "menubar");
    mini.ContextMenu = function() {
        mini.ContextMenu[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.ContextMenu, mini.Menu, {
        uiCls: "mini-contextmenu",
        vertical: true,
        visible: false,
        _disableContextMenu: true,
        setVertical: function($) {
            this.vertical = true
        }
    });
    l00O(mini.ContextMenu, "contextmenu");
    mini.MenuItem = function() {
        mini.MenuItem[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.MenuItem, mini.Control, {
        text: "",
        iconCls: "",
        iconStyle: "",
        iconPosition: "left",
        showIcon: true,
        showAllow: true,
        checked: false,
        checkOnClick: false,
        groupName: "",
        _hoverCls: "mini-menuitem-hover",
        oooO1O: "mini-menuitem-pressed",
        l1OlOO: "mini-menuitem-checked",
        _clearBorder: false,
        menu: null ,
        uiCls: "mini-menuitem",
        lll1O1: false
    });
    O1ol0 = mini.MenuItem[prototype];
    O1ol0[getAttrs] = lll1;
    O1ol0[onCheckedChanged] = o0Oo0;
    O1ol0[onClick] = lOO0l;
    O1ol0.o1oo0 = o0o1o;
    O1ol0.ol0OOo = o11olo;
    O1ol0.OOlooO = lo100;
    O1ol0.o0O0lo = oOOoo;
    O1ol0[getTopMenu] = l00l1;
    O1ol0.Oo1Oo = OO111;
    O1ol0[hide] = Ooll11;
    O1ol0[hideMenu] = Ooll11Menu;
    O1ol0[showMenu] = o0O1O1;
    O1ol0[getMenu] = ol1oo;
    O1ol0[setMenu] = o00ol;
    O1ol0[setChildren] = oOo0Oo;
    O1ol0[getGroupName] = olO11O;
    O1ol0[setGroupName] = o1OO1;
    O1ol0[getChecked] = O11o1;
    O1ol0[setChecked] = l101;
    O1ol0[getCheckOnClick] = loO0l;
    O1ol0[setCheckOnClick] = Oll1;
    O1ol0[getIconPosition] = l1ll00;
    O1ol0[setIconPosition] = o001l;
    O1ol0[getIconStyle] = O1010;
    O1ol0[setIconStyle] = Olo0Ol;
    O1ol0[getIconCls] = llll;
    O1ol0[setIconCls] = l100oo;
    O1ol0[getText] = l0oo0;
    O1ol0[setText] = OlOl1;
    O1ol0[doUpdate] = lOolo;
    O1ol0[_doUpdateIcon] = oO00;
    O1ol0[within] = lo10;
    O1ol0[destroy] = O1o1O;
    O1ol0.oOo1O = Olo0o;
    O1ol0[_initEvents] = ol11O;
    O1ol0[_create] = ooo0l;
    l00O(mini.MenuItem, "menuitem");
    mini.Separator = function() {
        mini.Separator[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Separator, mini.Control, {
        _clearBorder: false,
        uiCls: "mini-separator",
        _create: function() {
            this.el = document.createElement("span");
            this.el.className = "mini-separator"
        }
    });
    l00O(mini.Separator, "separator");
    mini.OutlookBar = function() {
        this.olo0l();
        mini.OutlookBar[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.OutlookBar, mini.Control, {
        width: 180,
        expandOnLoad: true,
        activeIndex: -1,
        autoCollapse: false,
        groupCls: "",
        groupStyle: "",
        groupHeaderCls: "",
        groupHeaderStyle: "",
        groupBodyCls: "",
        groupBodyStyle: "",
        groupHoverCls: "",
        groupActiveCls: "",
        allowAnim: true,
        uiCls: "mini-outlookbar",
        _GroupId: 1
    });
    lol0O = mini.OutlookBar[prototype];
    lol0O[getAttrs] = oolOo;
    lol0O[parseGroups] = l1o1l;
    lol0O.o0O0lo = lOool;
    lol0O.oOoo = Oo0lO;
    lol0O.ol00 = ol1ol;
    lol0O[expandGroup] = llOo1;
    lol0O[collapseGroup] = Oollo;
    lol0O[toggleGroup] = Ol01O;
    lol0O[hideGroup] = lol0o;
    lol0O[showGroup] = loo01;
    lol0O[getActiveGroup] = o101O;
    lol0O[getActiveIndex] = Ol11o1;
    lol0O[setActiveIndex] = l000;
    lol0O[getExpandOnLoad] = o1oll;
    lol0O[setExpandOnLoad] = O0Oll;
    lol0O[getAutoCollapse] = l0OOl;
    lol0O[setAutoCollapse] = l0Ol1;
    lol0O[getGroupBodyEl] = ll1o;
    lol0O[getGroupEl] = lO1l0;
    lol0O.oll0lo = O0O1;
    lol0O[getGroup] = O1Oo1;
    lol0O.O11l = O0O1l;
    lol0O.l100 = O1101;
    lol0O[doLayout] = l1OOl;
    lol0O[doUpdate] = o1Ol0;
    lol0O[moveGroup] = oOOOO;
    lol0O[removeAll] = olO1l;
    lol0O[removeGroup] = o0ll0;
    lol0O[updateGroup] = OloO0;
    lol0O[addGroup] = o101o;
    lol0O[getGroups] = O1Oo1s;
    lol0O[setGroups] = OOo11;
    lol0O[createGroup] = O1l1l;
    lol0O.lo0111 = Ol11O;
    lol0O.olo0l = o0l1o;
    lol0O.OlO0 = Oll00;
    lol0O[_initEvents] = l10ll;
    lol0O[_create] = ol1lo;
    lol0O[set] = o0O10;
    l00O(mini.OutlookBar, "outlookbar");
    mini.OutlookMenu = function() {
        mini.OutlookMenu[superclass][constructor][call](this);
        this.data = []
    }
    ;
    O00lO(mini.OutlookMenu, mini.OutlookBar, {
        url: "",
        textField: "text",
        iconField: "iconCls",
        urlField: "url",
        resultAsTree: false,
        itemsField: "children",
        idField: "id",
        parentField: "pid",
        style: "width:100%;height:100%;",
        uiCls: "mini-outlookmenu",
        l0o0O: null ,
        autoCollapse: true,
        activeIndex: 0
    });
    lol10 = mini.OutlookMenu[prototype];
    lol10.O0ol = O010l;
    lol10.l1l101 = olllO;
    lol10[createNavBarMenu] = l1lll;
    lol10[getAttrs] = ol01l;
    lol10[_getOwnerMenu] = o11Ol;
    lol10[getList] = lo1l0;
    lol10[getNode] = o0110;
    lol10[findNodes] = l0Oll;
    lol10[selectNode] = Oo1o0;
    lol10[getSelected] = O11O0;
    lol10[getParentField] = oOo00;
    lol10[setParentField] = llo0l;
    lol10[getIdField] = o1111;
    lol10[setIdField] = oo001;
    lol10[getNodesField] = o0110sField;
    lol10[setNodesField] = o10Oo;
    lol10[getResultAsTree] = Ol1OO;
    lol10[setResultAsTree] = o1Ool;
    lol10[getUrlField] = Oo11O;
    lol10[setUrlField] = OooO1;
    lol10[getIconField] = OOl1l;
    lol10[setIconField] = olo1o;
    lol10[getTextField] = O00o0;
    lol10[setTextField] = l110O;
    lol10[getUrl] = loO0o;
    lol10[setUrl] = O00lo;
    lol10[setData] = lO1lo;
    lol10[load] = lO0O0;
    lol10[loadList] = lO0O0List;
    lol10.oll0l0 = O1l0o;
    lol10.o00000Fields = OlO1l;
    lol10[destroy] = OOl0l;
    lol10[set] = OlO00;
    l00O(mini.OutlookMenu, "outlookmenu");
    mini.OutlookTree = function() {
        mini.OutlookTree[superclass][constructor][call](this);
        this.data = []
    }
    ;
    O00lO(mini.OutlookTree, mini.OutlookBar, {
        url: "",
        textField: "text",
        iconField: "iconCls",
        urlField: "url",
        resultAsTree: false,
        nodesField: "children",
        idField: "id",
        parentField: "pid",
        style: "width:100%;height:100%;",
        uiCls: "mini-outlooktree",
        l0o0O: null ,
        expandOnLoad: false,
        autoCollapse: true,
        activeIndex: 0
    });
    ololo = mini.OutlookTree[prototype];
    ololo.llOo11 = OllOO;
    ololo.OOol1o = O00oo;
    ololo[__OnNodeMouseDown] = Oo000;
    ololo[createNavBarTree] = O11OO;
    ololo[getAttrs] = oooOl;
    ololo[getExpandOnLoad] = OoOl1;
    ololo[setExpandOnLoad] = oo1l0;
    ololo[_getOwnerTree] = lll1O;
    ololo[getList] = l1l1l;
    ololo[getNode] = oOoOl;
    ololo[findNodes] = l0ool;
    ololo[expandPath] = ll1oo;
    ololo[selectNode] = Ol10o;
    ololo[getSelected] = l1OO1;
    ololo[getParentField] = OOlll;
    ololo[setParentField] = l100O;
    ololo[getIdField] = ol01o;
    ololo[setIdField] = l000l;
    ololo[getNodesField] = oOoOlsField;
    ololo[setNodesField] = ol0Ol;
    ololo[getResultAsTree] = l0loo;
    ololo[setResultAsTree] = OlO10;
    ololo[getUrlField] = o111o;
    ololo[setUrlField] = O1oOo;
    ololo[getIconField] = Ol000;
    ololo[setIconField] = Olol0;
    ololo[getTextField] = ol0OO;
    ololo[setTextField] = OoOo1;
    ololo[getUrl] = ol0lo;
    ololo[setUrl] = O010o;
    ololo[setData] = oOo1oo;
    ololo[load] = Ooo0o;
    ololo[loadList] = Ooo0oList;
    ololo.oll0l0 = OOOOo;
    ololo.o00000Fields = oOl0O;
    ololo[destroy] = Ol00o;
    ololo[set] = Oo11o;
    l00O(mini.OutlookTree, "outlooktree");
    mini.NavBar = function() {
        mini.NavBar[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.NavBar, mini.OutlookBar, {
        uiCls: "mini-navbar"
    });
    l00O(mini.NavBar, "navbar");
    mini.NavBarMenu = function() {
        mini.NavBarMenu[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.NavBarMenu, mini.OutlookMenu, {
        uiCls: "mini-navbarmenu"
    });
    l00O(mini.NavBarMenu, "navbarmenu");
    mini.NavBarTree = function() {
        mini.NavBarTree[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.NavBarTree, mini.OutlookTree, {
        uiCls: "mini-navbartree"
    });
    l00O(mini.NavBarTree, "navbartree");
    mini.ToolBar = function() {
        mini.ToolBar[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.ToolBar, mini.Container, {
        _clearBorder: false,
        style: "",
        uiCls: "mini-toolbar",
        _create: function() {
            this.el = document.createElement("div");
            this.el.className = "mini-toolbar"
        },
        _initEvents: function() {},
        doLayout: function() {
            if (!this[canLayout]())
                return;
            var A = mini[getChildNodes](this.el, true);
            for (var $ = 0, _ = A.length; $ < _; $++)
                mini.layout(A[$])
        },
        set_bodyParent: function($) {
            if (!$)
                return;
            this.el = $;
            this[doLayout]()
        },
        getAttrs: function($) {
            var _ = {};
            mini[_ParseString]($, _, ["id", "borderStyle"]);
            this.el = $;
            this.el.uid = this.uid;
            this[addCls](this.uiCls);
            return _
        }
    });
    l00O(mini.ToolBar, "toolbar");
    mini.Pager = function() {
        mini.Pager[superclass][constructor][call](this)
    }
    ;
    O00lO(mini.Pager, mini.Control, {
        pageIndex: 0,
        pageSize: 10,
        totalCount: 0,
        totalPage: 0,
        showPageIndex: true,
        showPageSize: true,
        showTotalCount: true,
        showPageInfo: true,
        showReloadButton: true,
        _clearBorder: false,
        showButtonText: false,
        showButtonIcon: true,
        firstText: "\u9996\u9875",
        prevText: "\u4e0a\u4e00\u9875",
        nextText: "\u4e0b\u4e00\u9875",
        lastText: "\u5c3e\u9875",
        pageInfoText: "\u6bcf\u9875 {0} \u6761,\u5171 {1} \u6761",
        sizeList: [10, 20, 50, 100],
        uiCls: "mini-pager"
    });
    O1lo = mini.Pager[prototype];
    O1lo[getAttrs] = o001l1;
    O1lo[onPageChanged] = l1O11;
    O1lo.lOoO = l10ol;
    O1lo.oo1l = olo0o;
    O1lo[update] = looooo;
    O1lo[getTotalPage] = o10oo;
    O1lo[getShowReloadButton] = o1l0l;
    O1lo[setShowReloadButton] = OlOllo;
    O1lo[getShowPageInfo] = ooOOlO;
    O1lo[setShowPageInfo] = Oll0o;
    O1lo[getShowTotalCount] = Oll0O;
    O1lo[setShowTotalCount] = lo0ll;
    O1lo[getShowPageIndex] = oOOlo;
    O1lo[setShowPageIndex] = loo0o;
    O1lo[getShowPageSize] = ll1O1;
    O1lo[setShowPageSize] = llO110;
    O1lo[getSizeList] = oo101;
    O1lo[setSizeList] = o0l0l;
    O1lo[getTotalCount] = Oo0l0;
    O1lo[setTotalCount] = OO00o;
    O1lo[getPageSize] = o1ool;
    O1lo[setPageSize] = O0lOO;
    O1lo[getPageIndex] = O1o1o;
    O1lo[setPageIndex] = o11oo;
    O1lo[doLayout] = l1lOO;
    O1lo[_initEvents] = loO10;
    O1lo[destroy] = O11OoO;
    O1lo[_create] = O0llo1;
    l00O(mini.Pager, "pager");
    mini.DataGrid = function() {
        this.data = [];
        this.l1O000 = {};
        this.Ooo100 = [];
        this.OO0Ool = {};
        this.columns = [];
        this.l1lo = [];
        this.OOO1Oo = {};
        this.O1ooO0 = {};
        this.Oolo0 = [];
        this.oOOlo0 = {};
        this._cellErrors = [];
        this._cellMapErrors = {};
        mini.DataGrid[superclass][constructor][call](this);
        this[doUpdate]();
        var $ = this;
        setTimeout(function() {
            if ($.autoLoad)
                $[reload]()
        }
        , 1)
    }
    ;
    l00ll = 0;
    o110l = 0;
    O00lO(mini.DataGrid, mini.Control, {
        oOo11l: "block",
        width: 300,
        height: "auto",
        allowCellValid: false,
        cellEditAction: "cellclick",
        showEmptyText: false,
        emptyText: "No data returned.",
        showModified: true,
        minWidth: 300,
        minHeight: 150,
        maxWidth: 5000,
        maxHeight: 3000,
        _viewRegion: null ,
        _virtualRows: 50,
        virtualScroll: false,
        allowCellWrap: false,
        allowHeaderWrap: false,
        showColumnsMenu: false,
        bodyCls: "",
        bodyStyle: "",
        footerCls: "",
        footerStyle: "",
        pagerCls: "",
        pagerStyle: "",
        idField: "id",
        data: [],
        columns: null ,
        allowResize: false,
        selectOnLoad: false,
        _rowIdField: "_uid",
        columnWidth: 120,
        columnMinWidth: 20,
        columnMaxWidth: 2000,
        fitColumns: true,
        autoHideRowDetail: true,
        showHeader: true,
        showFooter: true,
        showTop: false,
        showHGridLines: true,
        showVGridLines: true,
        showFilterRow: false,
        showSummaryRow: false,
        sortMode: "server",
        allowSortColumn: true,
        allowMoveColumn: true,
        allowResizeColumn: true,
        enableHotTrack: true,
        allowRowSelect: true,
        multiSelect: false,
        allowAlternating: false,
        ooooOl: "mini-grid-row-alt",
        allowUnselect: false,
        lOooO: "mini-grid-frozen",
        Ool0: "mini-grid-frozenCell",
        frozenStartColumn: -1,
        frozenEndColumn: -1,
        Ool1oo: "mini-grid-row",
        O1l00l: "mini-grid-row-hover",
        o01Ol: "mini-grid-row-selected",
        _headerCellCls: "mini-grid-headerCell",
        _cellCls: "mini-grid-cell",
        uiCls: "mini-datagrid",
        O001oo: true,
        showNewRow: true,
        _rowHeight: 23,
        _ool11: true,
        pageIndex: 0,
        pageSize: 10,
        totalCount: 0,
        totalPage: 0,
        showPageInfo: true,
        pageIndexField: "pageIndex",
        pageSizeField: "pageSize",
        sortFieldField: "sortField",
        sortOrderField: "sortOrder",
        totalField: "total",
        showPageSize: true,
        showPageIndex: true,
        showTotalCount: true,
        sortField: "",
        sortOrder: "",
        url: "",
        autoLoad: false,
        loadParams: null ,
        ajaxAsync: true,
        ajaxMethod: "post",
        showLoading: true,
        resultAsData: false,
        checkSelectOnLoad: true,
        totalField: "total",
        dataField: "data",
        allowCellSelect: false,
        allowCellEdit: false,
        olO0: "mini-grid-cell-selected",
        lOoOl: null ,
        l1o0O: null ,
        Oo0Oo: null ,
        OO11oo: null ,
        editNextOnEnterKey: false,
        editOnTabKey: true,
        createOnEnter: false,
        oolO: "_uid",
        Olo1O: true,
        autoCreateNewID: false,
        collapseGroupOnLoad: false,
        showGroupSummary: false,
        O1111o: 1,
        o00o0: "",
        Oo00Oo: "",
        l0o0O: null ,
        Oolo0: [],
        headerContextMenu: null ,
        columnsMenu: null 
    });
    l1101 = mini.DataGrid[prototype];
    l1101[getAttrs] = lO1ol;
    l1101[onCellBeginEdit] = O0oo0;
    l1101[onDrawCell] = O0O11;
    l1101[onPreLoad] = OO0lO;
    l1101[onLoadError] = OO0o1;
    l1101[onLoad] = o01l;
    l1101[onBeforeLoad] = l11O;
    l1101[onCellContextMenu] = o0o00;
    l1101[onCellMouseDown] = O10ol0;
    l1101[onCellClick] = O0O0O;
    l1101[onRowContextMenu] = l0o01;
    l1101[onRowMouseDown] = o1O1O;
    l1101[onRowClick] = O110ll;
    l1101[onRowDblClick] = l1Oo1;
    l1101.o00ooColumnsMenu = ol0oO;
    l1101[createColumnsMenu] = OooOoO;
    l1101[getHeaderContextMenu] = oO0o0;
    l1101[setHeaderContextMenu] = O11ol;
    l1101.Ol1o = lo1O1;
    l1101[_OnHeaderCellClick] = olOol;
    l1101[_OnRowMouseMove] = Olo00;
    l1101[_OnRowMouseOut] = Oll10;
    l1101[_OnCellMouseDown] = OoOoO;
    l1101.ll001SummaryCell = l00O1;
    l1101[_OnDrawSummaryCell] = o1lOl;
    l1101.OO0OO = Ol0l0;
    l1101.o1l111 = oo0lo;
    l1101.OO0100 = oO01o;
    l1101.loOOO = Ol1O1;
    l1101.ll01o0 = loooo;
    l1101.o1oo0 = o1l1;
    l1101.ol0OOo = ollO1;
    l1101.lolO = l1Olo;
    l1101.OOlooO = lolOl;
    l1101.ol1Ol = o1l0o;
    l1101.Ol1l0 = ollo1;
    l1101[_tryFocus] = Oo1Ol;
    l1101.o0O0lo = O11Ol;
    l1101.O0OOOO = oo01O;
    l1101.lo1oO = o1l1l;
    l1101.looll = o1O0l;
    l1101.OOOl1 = OlO0o;
    l1101[removeRowCls] = llolo;
    l1101[addRowCls] = O10ll;
    l1101.OloOOl = ooooo;
    l1101.OOo1 = oo11O;
    l1101.oO0oo = Ooo00;
    l1101[deselects] = oO10o;
    l1101[selects] = l1OOO;
    l1101[clearSelect] = olooO;
    l1101[deselectAll] = o11l1;
    l1101[selectAll] = oOoo1;
    l1101[deselect] = l001O;
    l1101[select] = l1l0O;
    l1101[setSelected] = o01OO;
    l1101[scrollIntoView] = Ol1l;
    l1101[getSelected] = lO01o;
    l1101[getCurrent] = O0101;
    l1101[setCurrent] = llo10;
    l1101[getSelecteds] = lO01os;
    l1101[isSelected] = O0Ol1;
    l1101[_getSelectAllCheckState] = O0011;
    l1101[getMultiSelect] = OoO1o;
    l1101[setMultiSelect] = lOO1O;
    l1101[getAllowRowSelect] = l10lo;
    l1101[setAllowRowSelect] = OO101;
    l1101[getAllowUnselect] = loOoO;
    l1101[setAllowUnselect] = l1oo0;
    l1101.o0oOo = ol11o;
    l1101.o1o1o0 = llO0;
    l1101[_doMargeCells] = oOlo0;
    l1101[_isCellVisible] = loo00;
    l1101[margeCells] = o1O1;
    l1101[mergeCells] = l0Olo;
    l1101[mergeColumns] = Ol1oO;
    l1101[onDrawGroupSummary] = O0l01;
    l1101[onDrawGroupHeader] = OOlO1;
    l1101.ll001 = l001l;
    l1101.lol0ol = oll01;
    l1101.Oo111 = oO11o;
    l1101[isGrouping] = olOlO;
    l1101[getGroupDir] = OOl10;
    l1101[getGroupField] = Oo0o0;
    l1101[clearGroup] = oO0Oo0;
    l1101[groupBy] = OlOo01;
    l1101.loolO0 = o01ol;
    l1101.l01001 = llll1;
    l1101[expandGroups] = OoOo;
    l1101[collapseGroups] = O1olO;
    l1101[getShowGroupSummary] = ll11O;
    l1101[setShowGroupSummary] = O0l1o;
    l1101[getCollapseGroupOnLoad] = OOOo0;
    l1101[setCollapseGroupOnLoad] = O1Oll;
    l1101[findRow] = oO0O1;
    l1101[findRows] = oO0O1s;
    l1101[getRowByUID] = lOl1O;
    l1101[getRowById] = O11O1;
    l1101[getRowByValue] = l11o0;
    l1101[getRow] = OO0lo;
    l1101[getAt] = O1OO00;
    l1101[indexOf] = lllOl;
    l1101[clearRows] = oOOO;
    l1101[moveDown] = Ol1Ol0;
    l1101[moveUp] = o0ooO;
    l1101[moveRow] = oO1O01;
    l1101[addRow] = oOO0l;
    l1101[addRows] = oOO0ls;
    l1101[removeRow] = l00lo;
    l1101[removeSelected] = oOoOO;
    l1101[removeRows] = l00los;
    l1101[deleteRow] = ooool;
    l1101[deleteRows] = ooools;
    l1101[updateRow] = loll0;
    l1101[_updateRowEl] = l0OlO;
    l1101.o1o1Ol = Ol1l1;
    l1101.Ol1O = oloo1;
    l1101.O01O = o10l1;
    l1101[isChanged] = Oo01l;
    l1101[getChanges] = o1l1o;
    l1101[getEditRowData] = ll110;
    l1101[getEditData] = ol1l1;
    l1101[getEditingRow] = O01lO;
    l1101[getEditingRows] = O01lOs;
    l1101[isNewRow] = Olo01;
    l1101[isEditingRow] = loo11;
    l1101[isEditing] = l10Oo;
    l1101[commitEditRow] = oll11;
    l1101[cancelEditRow] = lOo10;
    l1101[beginEditRow] = Olo1oo;
    l1101[getEditorOwnerRow] = oo0OO;
    l1101[_beginEditNextCell] = lOo1o;
    l1101.l01l = OO10O;
    l1101.Oo0l1 = OOll1;
    l1101.l111 = Ooll1;
    l1101.O1Ol = O110o;
    l1101.llOl1 = OolO1;
    l1101.OO1l0o = lOolO;
    l1101.ll0OO0 = o0ol0O;
    l1101[getCellEditor] = ooOl;
    l1101[commitEdit] = Oo1o;
    l1101[cancelEdit] = oll0l;
    l1101[isEditingCell] = l10OoCell;
    l1101[beginEditCell] = l1o00;
    l1101[getAllowCellEdit] = O0o00;
    l1101[setAllowCellEdit] = OlO1o;
    l1101[getAllowCellSelect] = OOoo0;
    l1101[setAllowCellSelect] = O1llO;
    l1101[getCurrentCell] = O0101Cell;
    l1101[setCurrentCell] = llo10Cell;
    l1101.l00o0 = oolOl;
    l1101[_getSortFnByField] = oOl1o;
    l1101[clearSort] = lll1l;
    l1101[sortBy] = O1lOl;
    l1101[gotoPage] = oooO1;
    l1101[reload] = O0O1O;
    l1101[load] = l0001;
    l1101.oll0l0 = l0lo1;
    l1101[getResultObject] = oO11Ol;
    l1101.lolo = lll1Oo;
    l1101[getCheckSelectOnLoad] = l11lo;
    l1101[setCheckSelectOnLoad] = loOoo;
    l1101[getTotalPage] = o1OOl;
    l1101[getTotalCount] = o1100;
    l1101[setTotalCount] = oO1Oo;
    l1101[getSortOrder] = o0OlO;
    l1101[getSortField] = ol00l;
    l1101[getDataField] = l0Oo0;
    l1101[setDataField] = lo0o1;
    l1101[getTotalField] = Oo101;
    l1101[setTotalField] = l1llo;
    l1101[getSortOrderField] = o0OlOField;
    l1101[setSortOrderField] = l1lOl;
    l1101[getSortFieldField] = ol00lField;
    l1101[setSortFieldField] = l1o10;
    l1101[getPageSizeField] = l1oOl;
    l1101[setPageSizeField] = Ol0l1;
    l1101[getPageIndexField] = oOlO1;
    l1101[setPageIndexField] = oloOol;
    l1101[getShowTotalCount] = l11oo;
    l1101[setShowTotalCount] = loll1;
    l1101[getShowPageIndex] = O00ol;
    l1101[setShowPageIndex] = oO11l;
    l1101[getShowPageSize] = olo1O;
    l1101[setShowPageSize] = O0000;
    l1101[getPageIndex] = OO1l1O;
    l1101[setPageIndex] = OOolo;
    l1101[getPageSize] = o0o1O;
    l1101[setPageSize] = ol0o1;
    l1101[getSizeList] = loool;
    l1101[setSizeList] = lo1O;
    l1101[getShowPageInfo] = ool1;
    l1101[setShowPageInfo] = loo0;
    l1101[getShowReloadButton] = O10O1;
    l1101[setShowReloadButton] = O1o1l;
    l1101.ooo1O = l01OO;
    l1101.lO11o = oO10l;
    l1101.OoloO = OOolO;
    l1101.l0oo1 = olo0O;
    l1101.ol10 = ll0Ol;
    l1101.O01l = O01O0;
    l1101[getRowDetailCellEl] = OO0loDetailCellEl;
    l1101[getRowDetailEl] = OO0loDetailEl;
    l1101[isShowRowDetail] = o1l1o1;
    l1101[toggleRowDetail] = lo110;
    l1101[hideRowDetail] = oO11lo;
    l1101[showRowDetail] = OollO;
    l1101[hideAllRowDetail] = O0lo;
    l1101[showAllRowDetail] = o1oOl;
    l1101[getAllowCellValid] = Oo0l1O;
    l1101[setAllowCellValid] = lllO;
    l1101[getCellEditAction] = ooo10;
    l1101[setCellEditAction] = l1ooo;
    l1101[getShowNewRow] = lO0l;
    l1101[setShowNewRow] = lOol1o;
    l1101[getShowModified] = O0ol0;
    l1101[setShowModified] = l0O11;
    l1101[getEmptyText] = oOO1l;
    l1101[setEmptyText] = lo01O;
    l1101[getShowEmptyText] = l0l0l;
    l1101[setShowEmptyText] = oO0lO;
    l1101[getAllowResize] = O011o;
    l1101[setAllowResize] = o010O;
    l1101[getSelectOnLoad] = o0llo;
    l1101[setSelectOnLoad] = o0o0l;
    l1101[getAllowResizeColumn] = O011oColumn;
    l1101[setAllowResizeColumn] = o010OColumn;
    l1101[getAllowMoveColumn] = lOO00;
    l1101[setAllowMoveColumn] = o00l0;
    l1101[getAllowSortColumn] = l110o;
    l1101[setAllowSortColumn] = O0OO1;
    l1101[getSortMode] = ooloO;
    l1101[setSortMode] = o0lol;
    l1101[setAutoHideRowDetail] = o0oOoO;
    l1101[getShowFooter] = O0lo1;
    l1101[setShowFooter] = l1lo0;
    l1101[getShowPager] = lol1o;
    l1101[setShowPager] = Ool11;
    l1101[setShowHeader] = lollOO;
    l1101[getFooterCls] = l0o11;
    l1101[setFooterCls] = looO;
    l1101[getFooterStyle] = OO0ol;
    l1101[setFooterStyle] = OOl00;
    l1101[getBodyCls] = lo0Oo;
    l1101[setBodyCls] = l1ll0;
    l1101[getBodyStyle] = lOOO0;
    l1101[setBodyStyle] = ooO01;
    l1101[getScrollTop] = l0Oll0;
    l1101[setScrollTop] = l1l11l;
    l1101[getVirtualScroll] = o0Oo;
    l1101[setVirtualScroll] = Oo001;
    l1101[getEditOnTabKey] = O1lOo;
    l1101[setEditOnTabKey] = llOO;
    l1101[getEditNextOnEnterKey] = OOool;
    l1101[setEditNextOnEnterKey] = l0l01;
    l1101[getShowColumnsMenu] = lo1oo;
    l1101[setShowColumnsMenu] = O0oOo;
    l1101[getAllowHeaderWrap] = oo0o1;
    l1101[setAllowHeaderWrap] = O0oOO;
    l1101[getAllowCellWrap] = o1O11;
    l1101[setAllowCellWrap] = Ooo0O;
    l1101[setShowLoading] = O0o1l;
    l1101[getEnableHotTrack] = OO0o;
    l1101[setEnableHotTrack] = Ol1lo;
    l1101[getAllowAlternating] = ol00O;
    l1101[setAllowAlternating] = l00Ol;
    l1101.loloO = ll0o0;
    l1101[getShowSummaryRow] = O0010;
    l1101[setShowSummaryRow] = o1l00;
    l1101[getShowFilterRow] = lolooo;
    l1101[setShowFilterRow] = ll1o0;
    l1101[getShowVGridLines] = o10lo;
    l1101[setShowVGridLines] = Ol0O00;
    l1101[getShowHGridLines] = l100o;
    l1101[setShowHGridLines] = Oo1ll;
    l1101[_doGridLines] = olOOl;
    l1101.Ol11 = oo01o;
    l1101[_doScrollFrozen] = O1O0O;
    l1101.Oo0O00 = l0Ooo;
    l1101.O0lO1 = lO1Ool;
    l1101[_tryUpdateScroll] = O1Oo0;
    l1101[_canVirtualUpdate] = OooO11;
    l1101[_getViewNowRegion] = olo11;
    l1101._O1oO11 = OoOoo;
    l1101[frozenColumns] = lO110;
    l1101[unFrozenColumns] = looo;
    l1101[getFrozenEndColumn] = l00OO;
    l1101[setFrozenEndColumn] = oooo;
    l1101[getFrozenStartColumn] = ollo0;
    l1101[setFrozenStartColumn] = l11O11;
    l1101[_deferFrozen] = olO0o;
    l1101._OOO1o = O1OO11;
    l1101.lol1 = oO1l0l;
    l1101.loO11 = o0OO0;
    l1101[getColumnWidth] = l01Ol;
    l1101[setColumnWidth] = OOo0o;
    l1101[getRowsBox] = OO0losBox;
    l1101[getRowBox] = OO0loBox;
    l1101[getCellBox] = ol10l;
    l1101.l010lo = OlolO;
    l1101[getSummaryCellEl] = OoOOl;
    l1101[getFilterCellEl] = l1Oo0;
    l1101[_getHeaderScrollEl] = O1lool;
    l1101.lO00 = O01O0Id;
    l1101.OlOo0 = olo1;
    l1101.o11o1 = o01lll;
    l1101.lloo0o = O00l;
    l1101.oo1O1 = o1lOO;
    l1101.oo10o = oO0oO;
    l1101[isFitColumns] = oo111;
    l1101[getFitColumns] = O101O;
    l1101[setFitColumns] = O00l1;
    l1101[_doInnerLayout] = oOoOo;
    l1101[_doLayoutTopRightCell] = l1OlO;
    l1101[doLayout] = lOOlO;
    l1101.O10lOO = OoO0o;
    l1101.o1l11 = O000l;
    l1101[doUpdate] = o00ll;
    l1101[getScrollLeft] = lOO0O;
    l1101[isVirtualScroll] = OllOOo;
    l1101.oll1o = OOO01;
    l1101[_doUpdateBody] = Ol00oo;
    l1101.oolOOo = OlOlo;
    l1101.o11lText = l0l10;
    l1101.OOll0 = O1loo;
    l1101.l0ll = lol0O0;
    l1101.O0OlOl = O001l;
    l1101.loOll = l0lO1;
    l1101[getSummaryRowHeight] = OoOo0;
    l1101[getFilterRowHeight] = ol0o;
    l1101[getFooterHeight] = ll0ol;
    l1101[getHeaderHeight] = o1oOO;
    l1101[selectRange] = l1l0ORange;
    l1101[getRange] = ll1lOO;
    l1101[toArray] = OlooO;
    l1101[getData] = lo0O1;
    l1101[setData] = loOO;
    l1101[loadData] = l0001Data;
    l1101[acceptRecord] = lOOOl;
    l1101[accept] = o1Oo;
    l1101[getAutoLoad] = O0o0;
    l1101[setAutoLoad] = olOlo;
    l1101[getUrl] = Olo10;
    l1101[setUrl] = ollO0;
    l1101[getIdField] = o01oO;
    l1101[setIdField] = ooO11o;
    l1101[bindPager] = O0oO00;
    l1101[setPager] = l1O0l;
    l1101.OOo1o = ool0;
    l1101[focus] = ll00l;
    l1101.o00ooRows = o0OO1;
    l1101[_initEvents] = lO10;
    l1101[destroy] = l11Ol;
    l1101[_create] = oOOOo;
    l1101[set] = l101l;
    l1101[isFrozen] = l01oO;
    l00O(mini.DataGrid, "datagrid");
    OoOlo = {
        _getColumnEl: function($) {
            $ = this[getColumn]($);
            if (!$)
                return null ;
            var _ = this.O1O0o($);
            return document.getElementById(_)
        },
        l10Ol: function($, _) {
            $ = this[getRow] ? this[getRow]($) : this[getNode]($);
            _ = this[getColumn](_);
            if (!$ || !_)
                return null ;
            var A = this.lloo0o($, _);
            return document.getElementById(A)
        },
        l1lO: function(A) {
            var $ = this.lo1oO ? this.lo1oO(A) : this[_getNodeByEvent](A)
              , _ = this.l1oo1(A);
            return {
                record: $,
                column: _
            }
        },
        l1oo1: function(B) {
            var _ = llOo(B.target, this._cellCls);
            if (!_)
                _ = llOo(B.target, this._headerCellCls);
            if (_) {
                var $ = _.id.split("$")
                  , A = $[$.length - 1];
                return this.olo0(A)
            }
            return null 
        },
        O1O0o: function($) {
            return this.uid + "$column$" + $._id
        },
        getColumnBox: function(A) {
            var B = this.O1O0o(A)
              , _ = document.getElementById(B);
            if (_) {
                var $ = OOl1o0(_);
                $.x -= 1;
                $.left = $.x;
                $.right = $.x + $.width;
                return $
            }
        },
        setColumns: function(value) {
            if (!mini.isArray(value))
                value = [];
            this.columns = value;
            this.OOO1Oo = {};
            this.O1ooO0 = {};
            this.l1lo = [];
            this.maxColumnLevel = 0;
            var level = 0;
            function init(column, index, parentColumn) {
                if (column.type) {
                    if (!mini.isNull(column.header) && typeof column.header !== "function")
                        if (column.header.trim() == "")
                            delete column.header;
                    var col = mini[_getColumn](column.type);
                    if (col) {
                        var _column = mini.copyTo({}, column);
                        mini.copyTo(column, col);
                        mini.copyTo(column, _column)
                    }
                }
                var width = parseInt(column.width);
                if (mini.isNumber(width) && String(width) == column.width)
                    column.width = width + "px";
                if (mini.isNull(column.width))
                    column.width = this[columnWidth] + "px";
                column.visible = column.visible !== false;
                column[allowResize] = column[allowResize] !== false;
                column.allowMove = column.allowMove !== false;
                column.allowSort = column.allowSort === true;
                column.allowDrag = !!column.allowDrag;
                column[readOnly] = !!column[readOnly];
                column.autoEscape = !!column.autoEscape;
                if (!column._id)
                    column._id = o110l++;
                column._gridUID = this.uid;
                column[_rowIdField] = this[_rowIdField];
                column._pid = parentColumn == this ? -1 : parentColumn._id;
                this.OOO1Oo[column._id] = column;
                if (column.name)
                    this.O1ooO0[column.name] = column;
                if (!column.columns || column.columns.length == 0)
                    this.l1lo.push(column);
                column.level = level;
                level += 1;
                this[eachColumns](column, init, this);
                level -= 1;
                if (column.level > this.maxColumnLevel)
                    this.maxColumnLevel = column.level;
                if (typeof column.editor == "string") {
                    var cls = mini.getClass(column.editor);
                    if (cls)
                        column.editor = {
                            type: column.editor
                        };
                    else
                        column.editor = eval("(" + column.editor + ")")
                }
                if (typeof column[filter] == "string")
                    column[filter] = eval("(" + column[filter] + ")");
                if (column[filter] && !column[filter].el)
                    column[filter] = mini.create(column[filter]);
                if (typeof column.init == "function" && column.inited != true)
                    column.init(this);
                column.inited = true
            }
            this[eachColumns](this, init, this);
            if (this.l0ll)
                this.l0ll();
            this[doUpdate]();
            this[fire]("columnschanged")
        },
        getColumns: function() {
            return this.columns
        },
        getBottomColumns: function() {
            return this.l1lo
        },
        getVisibleColumns: function() {
            var B = this[getBottomColumns]()
              , A = [];
            for (var $ = 0, C = B.length; $ < C; $++) {
                var _ = B[$];
                if (_.visible)
                    A.push(_)
            }
            return A
        },
        getBottomVisibleColumns: function() {
            var A = [];
            for (var $ = 0, B = this.l1lo.length; $ < B; $++) {
                var _ = this.l1lo[$];
                if (this[isVisibleColumn](_))
                    A.push(_)
            }
            return A
        },
        eachColumns: function(B, F, C) {
            var D = B.columns;
            if (D) {
                var _ = D.clone();
                for (var A = 0, E = _.length; A < E; A++) {
                    var $ = _[A];
                    if (F[call](C, $, A, B) === false)
                        break
                }
            }
        },
        getColumn: function($) {
            var _ = typeof $;
            if (_ == "number")
                return this[getBottomColumns]()[$];
            else if (_ == "object")
                return $;
            else
                return this.O1ooO0[$]
        },
        getColumnByField: function(A) {
            if (!A)
                return;
            var B = this[getBottomColumns]();
            for (var $ = 0, C = B.length; $ < C; $++) {
                var _ = B[$];
                if (_.field == A)
                    return _
            }
            return _
        },
        olo0: function($) {
            return this.OOO1Oo[$]
        },
        getParentColumn: function($) {
            $ = this[getColumn]($);
            var _ = $._pid;
            if (_ == -1)
                return this;
            return this.OOO1Oo[_]
        },
        getAncestorColumns: function(A) {
            var _ = [];
            while (1) {
                var $ = this[getParentColumn](A);
                if (!$ || $ == this)
                    break;
                _[_.length] = $;
                A = $
            }
            _.reverse();
            return _
        },
        isAncestorColumn: function(_, B) {
            if (_ == B)
                return true;
            if (!_ || !B)
                return false;
            var A = this[getAncestorColumns](B);
            for (var $ = 0, C = A.length; $ < C; $++)
                if (A[$] == _)
                    return true;
            return false
        },
        isVisibleColumn: function(_) {
            _ = this[getColumn](_);
            var A = this[getAncestorColumns](_);
            for (var $ = 0, B = A.length; $ < B; $++)
                if (A[$].visible == false)
                    return false;
            return true
        },
        updateColumn: function(_, $) {
            _ = this[getColumn](_);
            if (!_)
                return;
            mini.copyTo(_, $);
            this[setColumns](this.columns)
        },
        removeColumn: function($) {
            $ = this[getColumn]($);
            var _ = this[getParentColumn]($);
            if ($ && _) {
                _.columns.remove($);
                this[setColumns](this.columns)
            }
            return $
        },
        moveColumn: function(C, _, A) {
            C = this[getColumn](C);
            _ = this[getColumn](_);
            if (!C || !_ || !A || C == _)
                return;
            if (this[isAncestorColumn](C, _))
                return;
            var D = this[getParentColumn](C);
            if (D)
                D.columns.remove(C);
            var B = _
              , $ = A;
            if ($ == "before") {
                B = this[getParentColumn](_);
                $ = B.columns[indexOf](_)
            } else if ($ == "after") {
                B = this[getParentColumn](_);
                $ = B.columns[indexOf](_) + 1
            } else if ($ == "add" || $ == "append") {
                if (!B.columns)
                    B.columns = [];
                $ = B.columns.length
            } else if (!mini.isNumber($))
                return;
            B.columns.insert($, C);
            this[setColumns](this.columns)
        },
        hideColumns: function(A) {
            if (this[allowCellEdit])
                this[commitEdit]();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = this[getColumn](A[$]);
                if (!_)
                    continue;_.visible = false
            }
            this[setColumns](this.columns)
        },
        showColumns: function(A) {
            if (this[allowCellEdit])
                this[commitEdit]();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = this[getColumn](A[$]);
                if (!_)
                    continue;_.visible = true
            }
            this[setColumns](this.columns)
        },
        hideColumn: function($) {
            $ = this[getColumn]($);
            if (!$)
                return;
            if (this[allowCellEdit])
                this[commitEdit]();
            $.visible = false;
            this[setColumns](this.columns)
        },
        showColumn: function($) {
            $ = this[getColumn]($);
            if (!$)
                return;
            if (this[allowCellEdit])
                this[commitEdit]();
            $.visible = true;
            this[setColumns](this.columns)
        },
        olo1O1: function() {
            var _ = this[getMaxColumnLevel]()
              , D = [];
            for (var C = 0, F = _; C <= F; C++)
                D.push([]);
            function A(C) {
                var D = mini[treeToArray](C.columns, "columns")
                  , A = 0;
                for (var $ = 0, B = D.length; $ < B; $++) {
                    var _ = D[$];
                    if (_.visible != true || _._hide == true)
                        continue;if (!_.columns || _.columns.length == 0)
                        A += 1
                }
                return A
            }
            var $ = mini[treeToArray](this.columns, "columns");
            for (C = 0,
            F = $.length; C < F; C++) {
                var E = $[C]
                  , B = D[E.level];
                if (E.columns && E.columns.length > 0)
                    E.colspan = A(E);
                if ((!E.columns || E.columns.length == 0) && E.level < _)
                    E.rowspan = _ - E.level + 1;
                B.push(E)
            }
            return D
        },
        getMaxColumnLevel: function() {
            return this.maxColumnLevel
        }
    };
    mini.copyTo(mini.DataGrid.prototype, OoOlo);
    l0lOo = function($) {
        this.grid = $;
        l1Oo0O($.l10OO, "mousemove", this.__OnGridHeaderMouseMove, this);
        l1Oo0O($.l10OO, "mouseout", this.__OnGridHeaderMouseOut, this)
    }
    ;
    l0lOo[prototype] = {
        __OnGridHeaderMouseOut: function($) {
            if (this.o0o1lColumnEl)
                Ol00(this.o0o1lColumnEl, "mini-grid-headerCell-hover")
        },
        __OnGridHeaderMouseMove: function(_) {
            var $ = llOo(_.target, "mini-grid-headerCell");
            if ($) {
                O0Oo0($, "mini-grid-headerCell-hover");
                this.o0o1lColumnEl = $
            }
        },
        __onGridHeaderCellClick: function($) {}
    };
    l0lO = function($) {
        this.grid = $;
        l1Oo0O(this.grid.el, "mousedown", this.l00oo, this);
        $[on]("layout", this.lo1olO, this)
    }
    ;
    l0lO[prototype] = {
        lo1olO: function(A) {
            if (this.splittersEl)
                mini[removeNode](this.splittersEl);
            if (this.splitterTimer)
                return;
            var $ = this.grid;
            if ($[isDisplay]() == false)
                return;
            var _ = this;
            this.splitterTimer = setTimeout(function() {
                var H = $[getBottomColumns]()
                  , I = H.length
                  , E = OOl1o0($.l10OO, true)
                  , B = $[getScrollLeft]()
                  , G = [];
                for (var J = 0, F = H.length; J < F; J++) {
                    var D = H[J]
                      , C = $[getColumnBox](D);
                    if (!C)
                        break;
                    var A = C.top - E.top
                      , M = C.right - E.left - 2
                      , K = C.height;
                    if ($[isFrozen] && $[isFrozen]()) {
                        if (J >= $[frozenStartColumn])
                            ;
                    } else
                        M += B;
                    var N = $[getParentColumn](D);
                    if (N && N.columns)
                        if (N.columns[N.columns.length - 1] == D)
                            if (K + 5 < E.height) {
                                A = 0;
                                K = E.height
                            }
                    if ($[allowResizeColumn] && D[allowResize])
                        G[G.length] = "<div id=\"" + D._id + "\" class=\"mini-grid-splitter\" style=\"left:" + (M - 1) + "px;top:" + A + "px;height:" + K + "px;\"></div>"
                }
                var O = G.join("");
                _.splittersEl = document.createElement("div");
                _.splittersEl.className = "mini-grid-splitters";
                _.splittersEl.innerHTML = O;
                var L = $[_getHeaderScrollEl]();
                L.appendChild(_.splittersEl);
                _.splitterTimer = null 
            }
            , 100)
        },
        l00oo: function(B) {
            var $ = this.grid
              , A = B.target;
            if (O1O1Oo(A, "mini-grid-splitter")) {
                var _ = $.OOO1Oo[A.id];
                if ($[allowResizeColumn] && _ && _[allowResize]) {
                    this.splitterColumn = _;
                    this.getDrag().start(B)
                }
            }
        },
        getDrag: function() {
            if (!this.drag)
                this.drag = new mini.Drag({
                    capture: true,
                    onStart: mini.createDelegate(this.ollOll, this),
                    onMove: mini.createDelegate(this.ooOo, this),
                    onStop: mini.createDelegate(this.l10l, this)
                });
            return this.drag
        },
        ollOll: function(_) {
            var $ = this.grid
              , B = $[getColumnBox](this.splitterColumn);
            this.columnBox = B;
            this.OO0loo = mini.append(document.body, "<div class=\"mini-grid-proxy\"></div>");
            var A = $[getBox](true);
            A.x = B.x;
            A.width = B.width;
            A.right = B.right;
            oO11Oo(this.OO0loo, A)
        },
        ooOo: function(A) {
            var $ = this.grid
              , B = mini.copyTo({}, this.columnBox)
              , _ = B.width + (A.now[0] - A.init[0]);
            if (_ < $.columnMinWidth)
                _ = $.columnMinWidth;
            if (_ > $.columnMaxWidth)
                _ = $.columnMaxWidth;
            oO1Ol(this.OO0loo, _)
        },
        l10l: function(E) {
            var $ = this.grid
              , F = OOl1o0(this.OO0loo)
              , D = this
              , C = $[allowSortColumn];
            $[allowSortColumn] = false;
            setTimeout(function() {
                jQuery(D.OO0loo).remove();
                D.OO0loo = null ;
                $[allowSortColumn] = C
            }
            , 10);
            var G = this.splitterColumn
              , _ = parseInt(G.width);
            if (_ + "%" != G.width) {
                var A = $[getColumnWidth](G)
                  , B = parseInt(_ / A * F.width);
                $[setColumnWidth](G, B)
            }
        }
    };
    o10O0 = function($) {
        this.grid = $;
        l1Oo0O(this.grid.el, "mousedown", this.l00oo, this)
    }
    ;
    o10O0[prototype] = {
        l00oo: function(B) {
            var $ = this.grid;
            if ($[isEditing] && $[isEditing]())
                return;
            if (O1O1Oo(B.target, "mini-grid-splitter"))
                return;
            if (B.button == mini.MouseButton.Right)
                return;
            var A = llOo(B.target, $._headerCellCls);
            if (A) {
                this._remove();
                var _ = $.l1oo1(B);
                if ($[allowMoveColumn] && _ && _.allowMove) {
                    this.dragColumn = _;
                    this._columnEl = A;
                    this.getDrag().start(B)
                }
            }
        },
        getDrag: function() {
            if (!this.drag)
                this.drag = new mini.Drag({
                    capture: false,
                    onStart: mini.createDelegate(this.ollOll, this),
                    onMove: mini.createDelegate(this.ooOo, this),
                    onStop: mini.createDelegate(this.l10l, this)
                });
            return this.drag
        },
        ollOll: function(_) {
            function A(_) {
                var A = _.header;
                if (typeof A == "function")
                    A = A[call]($, _);
                if (mini.isNull(A) || A === "")
                    A = "&nbsp;";
                return A
            }
            var $ = this.grid;
            this.OO0loo = mini.append(document.body, "<div class=\"mini-grid-columnproxy\"></div>");
            this.OO0loo.innerHTML = "<div class=\"mini-grid-columnproxy-inner\" style=\"height:26px;\">" + A(this.dragColumn) + "</div>";
            mini[setXY](this.OO0loo, _.now[0] + 15, _.now[1] + 18);
            O0Oo0(this.OO0loo, "mini-grid-no");
            this.moveTop = mini.append(document.body, "<div class=\"mini-grid-movetop\"></div>");
            this.moveBottom = mini.append(document.body, "<div class=\"mini-grid-movebottom\"></div>")
        },
        ooOo: function(A) {
            var $ = this.grid
              , G = A.now[0];
            mini[setXY](this.OO0loo, G + 15, A.now[1] + 18);
            this.targetColumn = this.insertAction = null ;
            var D = llOo(A.event.target, $._headerCellCls);
            if (D) {
                var C = $.l1oo1(A.event);
                if (C && C != this.dragColumn) {
                    var _ = $[getParentColumn](this.dragColumn)
                      , E = $[getParentColumn](C);
                    if (_ == E) {
                        this.targetColumn = C;
                        this.insertAction = "before";
                        var F = $[getColumnBox](this.targetColumn);
                        if (G > F.x + F.width / 2)
                            this.insertAction = "after"
                    }
                }
            }
            if (this.targetColumn) {
                O0Oo0(this.OO0loo, "mini-grid-ok");
                Ol00(this.OO0loo, "mini-grid-no");
                var B = $[getColumnBox](this.targetColumn);
                this.moveTop.style.display = "block";
                this.moveBottom.style.display = "block";
                if (this.insertAction == "before") {
                    mini[setXY](this.moveTop, B.x - 4, B.y - 9);
                    mini[setXY](this.moveBottom, B.x - 4, B.bottom)
                } else {
                    mini[setXY](this.moveTop, B.right - 4, B.y - 9);
                    mini[setXY](this.moveBottom, B.right - 4, B.bottom)
                }
            } else {
                Ol00(this.OO0loo, "mini-grid-ok");
                O0Oo0(this.OO0loo, "mini-grid-no");
                this.moveTop.style.display = "none";
                this.moveBottom.style.display = "none"
            }
        },
        _remove: function() {
            var $ = this.grid;
            mini[removeNode](this.OO0loo);
            mini[removeNode](this.moveTop);
            mini[removeNode](this.moveBottom);
            this.OO0loo = this.moveTop = this.moveBottom = this.dragColumn = this.targetColumn = null 
        },
        l10l: function(_) {
            var $ = this.grid;
            $[moveColumn](this.dragColumn, this.targetColumn, this.insertAction);
            this._remove()
        }
    };
    o1Ol1 = function($) {
        this.grid = $;
        this.grid[on]("cellmousedown", this.l1o0, this);
        this.grid[on]("cellclick", this.OO1o, this);
        this.grid[on]("celldblclick", this.OO1o, this);
        l1Oo0O(this.grid.el, "keydown", this.ol11, this)
    }
    ;
    o1Ol1[prototype] = {
        ol11: function(G) {
            var $ = this.grid;
            if (l1oooo($.o01loo, G.target) || l1oooo($.oO0o01, G.target) || l1oooo($.o111, G.target) || llOo(G.target, "mini-grid-detailRow") || llOo(G.target, "mini-grid-rowEdit"))
                return;
            var A = $[getCurrentCell]();
            if (G.ctrlKey)
                return;
            if (G.keyCode == 37 || G.keyCode == 38 || G.keyCode == 39 || G.keyCode == 40)
                G.preventDefault();
            var C = $[getBottomVisibleColumns]()
              , B = A ? A[1] : null 
              , _ = A ? A[0] : null ;
            if (!A)
                _ = $[getCurrent]();
            var F = C[indexOf](B)
              , D = $[indexOf](_)
              , E = $[getData]().length;
            switch (G.keyCode) {
            case 9:
                if ($[allowCellEdit] && $.editOnTabKey) {
                    G.preventDefault();
                    $[_beginEditNextCell](G.shiftKey == false);
                    return
                }
                break;
            case 27:
                break;
            case 13:
                if ($[allowCellEdit] && $.editNextOnEnterKey)
                    if ($[isEditingCell](A) || !B.editor) {
                        $[_beginEditNextCell](G.shiftKey == false);
                        return
                    }
                if ($[allowCellEdit] && A && !B[readOnly])
                    $[beginEditCell]();
                break;
            case 37:
                if (B) {
                    if (F > 0)
                        F -= 1
                } else
                    F = 0;
                break;
            case 38:
                if (_) {
                    if (D > 0)
                        D -= 1
                } else
                    D = 0;
                if (D != 0 && $[isVirtualScroll]())
                    if ($._viewRegion.start > D) {
                        $.O1OOoo.scrollTop -= $._rowHeight;
                        $[_tryUpdateScroll]()
                    }
                break;
            case 39:
                if (B) {
                    if (F < C.length - 1)
                        F += 1
                } else
                    F = 0;
                break;
            case 40:
                if (_) {
                    if (D < E - 1)
                        D += 1
                } else
                    D = 0;
                if ($[isVirtualScroll]())
                    if ($._viewRegion.end < D) {
                        $.O1OOoo.scrollTop += $._rowHeight;
                        $[_tryUpdateScroll]()
                    }
                break;
            default:
                break
            }
            B = C[F];
            _ = $[getAt](D);
            if (B && _ && $[allowCellSelect]) {
                A = [_, B];
                $[setCurrentCell](A);
                $[scrollIntoView](_, B)
            }
            if (_ && $[allowRowSelect]) {
                $[deselectAll]();
                $[setCurrent](_)
            }
        },
        OO1o: function(B) {
            var $ = this.grid;
            if ($[allowCellEdit] == false)
                return;
            if (this.grid.cellEditAction != B.type)
                return;
            var _ = B.record
              , A = B.column;
            if (!A[readOnly] && !this.grid[isReadOnly]())
                if (B.htmlEvent.shiftKey || B.htmlEvent.ctrlKey)
                    ;
                else
                    this.grid[beginEditCell]()
        },
        l1o0: function(_) {
            var $ = this;
            setTimeout(function() {
                $.__doSelect(_)
            }
            , 1)
        },
        __doSelect: function(D) {
            var _ = D.record
              , B = D.column
              , $ = this.grid;
            if (this.grid[allowCellSelect]) {
                var A = [_, B];
                this.grid[setCurrentCell](A)
            }
            if ($[allowRowSelect])
                if ($[multiSelect]) {
                    this.grid.el.onselectstart = function() {}
                    ;
                    if (D.htmlEvent.shiftKey) {
                        this.grid.el.onselectstart = function() {
                            return false
                        }
                        ;
                        D.htmlEvent.preventDefault();
                        if (!this.currentRecord) {
                            this.grid[select](_);
                            this.currentRecord = this.grid[getSelected]()
                        } else {
                            this.grid[deselectAll]();
                            this.grid[selectRange](this.currentRecord, _)
                        }
                    } else {
                        this.grid.el.onselectstart = function() {}
                        ;
                        if (D.htmlEvent.ctrlKey) {
                            this.grid.el.onselectstart = function() {
                                return false
                            }
                            ;
                            try {
                                D.htmlEvent.preventDefault()
                            } catch (C) {}
                        }
                        if (D.column._multiRowSelect === true || D.htmlEvent.ctrlKey || $.allowUnselect) {
                            if ($[isSelected](_))
                                $[deselect](_);
                            else
                                $[select](_)
                        } else if ($[isSelected](_))
                            ;
                        else {
                            $[deselectAll]();
                            $[select](_)
                        }
                        this.currentRecord = this.grid[getSelected]()
                    }
                } else if (!$[isSelected](_)) {
                    $[deselectAll]();
                    $[select](_)
                } else if (D.htmlEvent.ctrlKey)
                    $[deselectAll]()
        }
    };
    oOloo = function($) {
        this.grid = $;
        l1Oo0O(this.grid.el, "mousemove", this.__onGridMouseMove, this)
    }
    ;
    oOloo[prototype] = {
        __onGridMouseMove: function(D) {
            var $ = this.grid
              , A = $.l1lO(D)
              , _ = $.l10Ol(A.record, A.column)
              , B = $.getCellError(A.record, A.column);
            if (_) {
                if (B) {
                    _.title = B.errorText;
                    return
                }
                if (_.firstChild)
                    if (O1O1Oo(_.firstChild, "mini-grid-cell-inner") || O1O1Oo(_.firstChild, "mini-treegrid-treecolumn-inner"))
                        _ = _.firstChild;
                if (_.scrollWidth > _.clientWidth) {
                    var C = _.innerText || _.textContent || "";
                    _.title = C.trim()
                } else
                    _.title = ""
            }
        }
    };
    mini.ll01loMenu = function($) {
        this.grid = $;
        this.menu = this.createMenu();
        l1Oo0O($.el, "contextmenu", this.OO0100, this)
    }
    ;
    mini.ll01loMenu[prototype] = {
        createMenu: function() {
            var $ = mini.create({
                type: "menu",
                hideOnClick: false
            });
            $[on]("itemclick", this.l1l101, this);
            return $
        },
        updateMenu: function() {
            var _ = this.grid
              , F = this.menu
              , D = _[getBottomColumns]()
              , B = [];
            for (var A = 0, E = D.length; A < E; A++) {
                var C = D[A]
                  , $ = {};
                $.checked = C.visible;
                $[checkOnClick] = true;
                $.text = _.o11lText(C);
                if ($.text == "&nbsp;") {
                    if (C.type == "indexcolumn")
                        $.text = "\u5e8f\u53f7";
                    if (C.type == "checkcolumn")
                        $.text = "\u9009\u62e9"
                }
                B.push($);
                $._column = C
            }
            F[setItems](B)
        },
        OO0100: function(_) {
            var $ = this.grid;
            if ($.showColumnsMenu == false)
                return;
            if (l1oooo($.l10OO, _.target) == false)
                return;
            this[updateMenu]();
            this.menu[showAtPos](_.pageX, _.pageY);
            return false
        },
        l1l101: function(J) {
            var C = this.grid
              , I = this.menu
              , A = C[getBottomColumns]()
              , E = I[getItems]()
              , $ = J.item
              , _ = $._column
              , H = 0;
            for (var D = 0, B = E.length; D < B; D++) {
                var F = E[D];
                if (F[getChecked]())
                    H++
            }
            if (H < 1)
                $[setChecked](true);
            var G = $[getChecked]();
            if (G)
                C.showColumn(_);
            else
                C.hideColumn(_)
        }
    };
    olOO1 = {
        getCellErrors: function() {
            var A = this._cellErrors.clone()
              , C = this.data;
            for (var $ = 0, D = A.length; $ < D; $++) {
                var E = A[$]
                  , _ = E.record
                  , B = E.column;
                if (C[indexOf](_) == -1) {
                    var F = _[this._rowIdField] + "$" + B._id;
                    delete this._cellMapErrors[F];
                    this._cellErrors.remove(E)
                }
            }
            return this._cellErrors
        },
        getCellError: function($, _) {
            $ = this[getNode] ? this[getNode]($) : this[getRow]($);
            _ = this[getColumn](_);
            if (!$ || !_)
                return;
            var A = $[this._rowIdField] + "$" + _._id;
            return this._cellMapErrors[A]
        },
        isValid: function() {
            return this.getCellErrors().length == 0
        },
        validate: function() {
            var A = this.data;
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = A[$];
                this.validateRow(_)
            }
        },
        validateRow: function(_) {
            var B = this[getBottomColumns]();
            for (var $ = 0, C = B.length; $ < C; $++) {
                var A = B[$];
                this.validateCell(_, A)
            }
        },
        validateCell: function(C, E) {
            C = this[getNode] ? this[getNode](C) : this[getRow](C);
            E = this[getColumn](E);
            if (!C || !E)
                return;
            var I = {
                record: C,
                row: C,
                node: C,
                column: E,
                field: E.field,
                value: C[E.field],
                isValid: true,
                errorText: ""
            };
            if (E.vtype)
                mini.l011O(E.vtype, I.value, I, E);
            if (I[isValid] == true && E.unique && E.field) {
                var A = {}
                  , D = this.data
                  , F = E.field;
                for (var _ = 0, G = D.length; _ < G; _++) {
                    var $ = D[_]
                      , H = $[F];
                    if (mini.isNull(H) || H === "")
                        ;
                    else {
                        var B = A[H];
                        if (B && $ == C) {
                            I[isValid] = false;
                            I.errorText = mini.llOl(E, "uniqueErrorText");
                            this.setCellIsValid(B, E, I.isValid, I.errorText);
                            break
                        }
                        A[H] = $
                    }
                }
            }
            this[fire]("cellvalidation", I);
            this.setCellIsValid(C, E, I.isValid, I.errorText)
        },
        setIsValid: function(_) {
            if (_) {
                var A = this._cellErrors.clone();
                for (var $ = 0, B = A.length; $ < B; $++) {
                    var C = A[$];
                    this.setCellIsValid(C.record, C.column, true)
                }
            }
        },
        _removeRowError: function(_) {
            var B = this[getColumns]();
            for (var $ = 0, C = B.length; $ < C; $++) {
                var A = B[$]
                  , E = _[this._rowIdField] + "$" + A._id
                  , D = this._cellMapErrors[E];
                if (D) {
                    delete this._cellMapErrors[E];
                    this._cellErrors.remove(D)
                }
            }
        },
        setCellIsValid: function(_, A, B, D) {
            _ = this[getNode] ? this[getNode](_) : this[getRow](_);
            A = this[getColumn](A);
            if (!_ || !A)
                return;
            var E = _[this._rowIdField] + "$" + A._id
              , $ = this.l10Ol(_, A)
              , C = this._cellMapErrors[E];
            delete this._cellMapErrors[E];
            this._cellErrors.remove(C);
            if (B === true) {
                if ($ && C)
                    Ol00($, "mini-grid-cell-error")
            } else {
                C = {
                    record: _,
                    column: A,
                    isValid: B,
                    errorText: D
                };
                this._cellMapErrors[E] = C;
                this._cellErrors[add](C);
                if ($)
                    O0Oo0($, "mini-grid-cell-error")
            }
        }
    };
    mini.copyTo(mini.DataGrid.prototype, olOO1);
    mini.GridEditor = function() {
        this._inited = true;
        mini.Control[superclass][constructor][call](this);
        this[_create]();
        this.el.uid = this.uid;
        this[_initEvents]();
        this.ll0Oo0();
        this[addCls](this.uiCls)
    }
    ;
    O00lO(mini.GridEditor, mini.Control, {
        el: null ,
        _create: function() {
            this.el = document.createElement("input");
            this.el.type = "text";
            this.el.style.width = "100%"
        },
        getValue: function() {
            return this.el.value
        },
        setValue: function($) {
            this.el.value = $
        },
        setWidth: function($) {}
    });
    mini.Tree = function($) {
        this._ajaxOption = {
            async: false,
            type: "get"
        };
        this.root = {
            _id: -1,
            _pid: "",
            _level: -1
        };
        this.data = this.root[this.nodesField] = [];
        this.oolo = {};
        this.Ool1 = {};
        this._viewNodes = null ;
        mini.Tree[superclass][constructor][call](this, $);
        this[on]("beforeexpand", function(B) {
            var $ = B.node
              , A = this[isLeaf]($)
              , _ = $[this.nodesField];
            if (!A && (!_ || _.length == 0))
                if (this.loadOnExpand && $.asyncLoad !== false) {
                    B.cancel = true;
                    this[loadNode]($)
                }
        }
        , this);
        this[doUpdate]()
    }
    ;
    mini.Tree.NodeUID = 1;
    var lastNodeLevel = [];
    O00lO(mini.Tree, mini.Control, {
        isTree: true,
        oOo11l: "block",
        autoEscape: false,
        loadOnExpand: true,
        removeOnCollapse: true,
        expandOnDblClick: true,
        expandOnNodeClick: false,
        value: "",
        Oo0oO: null ,
        allowSelect: true,
        showCheckBox: false,
        showFolderCheckBox: true,
        showExpandButtons: true,
        enableHotTrack: true,
        showArrow: false,
        expandOnLoad: false,
        delimiter: ",",
        url: "",
        root: null ,
        resultAsTree: true,
        parentField: "pid",
        idField: "id",
        textField: "text",
        iconField: "iconCls",
        nodesField: "children",
        showTreeIcon: false,
        showTreeLines: true,
        checkRecursive: false,
        allowAnim: true,
        o0O01l: "mini-tree-checkbox",
        O00o: "mini-tree-selectedNode",
        Oo1lll: "mini-tree-node-hover",
        leafIcon: "mini-tree-leaf",
        folderIcon: "mini-tree-folder",
        o101: "mini-tree-border",
        o0oO: "mini-tree-header",
        oo110: "mini-tree-body",
        ollOlo: "mini-tree-node",
        O01l0: "mini-tree-nodes",
        o1OlO: "mini-tree-expand",
        lOoo: "mini-tree-collapse",
        lo11O: "mini-tree-node-ecicon",
        O0oo: "mini-tree-nodeshow",
        uiCls: "mini-tree",
        _ajaxOption: {
            async: false,
            type: "get"
        },
        _allowExpandLayout: true,
        autoCheckParent: false,
        allowDrag: false,
        allowDrop: false,
        dragGroupName: "",
        dropGroupName: "",
        allowLeafDropIn: false
    });
    lO01l = mini.Tree[prototype];
    lO01l[getAttrs] = OloO;
    lO01l.o1Oo1 = oO0OO;
    lO01l.O100l = Oo1l01;
    lO01l.ollOll = l0l0o;
    lO01l[isAllowDrag] = O1110;
    lO01l[getDropGroupName] = OOlO;
    lO01l[setDropGroupName] = o0Ool;
    lO01l[getDragGroupName] = ol0O1;
    lO01l[setDragGroupName] = l011;
    lO01l[getAllowDrop] = Ool0O;
    lO01l[setAllowDrop] = l1ll;
    lO01l[getAllowDrag] = O1oOl;
    lO01l[setAllowDrag] = ool1l;
    lO01l[getAllowLeafDropIn] = o0OoOo;
    lO01l[setAllowLeafDropIn] = lool0;
    lO01l.O01l0lText = llll10;
    lO01l.O01l0lData = OO1111;
    lO01l[onDataLoad] = lOlOo;
    lO01l[onLoadError] = olO10;
    lO01l[onLoad] = l1l0o0;
    lO01l[onBeforeLoad] = OO000o;
    lO01l[onCollapse] = o001O;
    lO01l[onBeforeCollapse] = o00o;
    lO01l[onExpand] = l1o1;
    lO01l[onBeforeExpand] = o1l01;
    lO01l[onNodeMouseDown] = Olo1l;
    lO01l[onCheckNode] = llll1O;
    lO01l[onBeforeNodeCheck] = O10OO;
    lO01l[onNodeSelect] = lOOlo;
    lO01l[onBeforeNodeSelect] = ll1Olo;
    lO01l[onNodeClick] = Ool01;
    lO01l.Ol1o = Oo1O0;
    lO01l[scrollIntoView] = lO100;
    lO01l[blurNode] = o0OolO;
    lO01l[focusNode] = O0OolO;
    lO01l[_OnNodeMouseMove] = Ol0lO;
    lO01l[_OnNodeMouseOut] = o0lOo;
    lO01l.o1oo0 = Oo0ol;
    lO01l.lolO = llll0;
    lO01l[_OnNodeClick] = o111l;
    lO01l[_OnNodeMouseDown] = o1ll0;
    lO01l.ol1Ol = O10loo;
    lO01l.o0O0lo = O0olO;
    lO01l.Ol1l0 = lO1ll;
    lO01l[getAutoEscape] = o10ol;
    lO01l[setAutoEscape] = OO0l0;
    lO01l[getLoadOnExpand] = OoO01;
    lO01l[setLoadOnExpand] = o111O;
    lO01l[getRemoveOnCollapse] = lll01;
    lO01l[setRemoveOnCollapse] = l1ol;
    lO01l[getExpandOnNodeClick] = Ooo1o;
    lO01l[setExpandOnNodeClick] = oOO0o;
    lO01l[getExpandOnDblClick] = l10O;
    lO01l[setExpandOnDblClick] = Oolll0;
    lO01l[getFolderIcon] = Oo110;
    lO01l[setFolderIcon] = o1o0;
    lO01l[getLeafIcon] = oooOlo;
    lO01l[setLeafIcon] = lO001;
    lO01l[getTreeColumn] = O101o;
    lO01l[setTreeColumn] = oOO1o;
    lO01l[getNodesField] = o101l;
    lO01l[setNodesField] = o1O1OO;
    lO01l[getIconField] = l0o111;
    lO01l[setIconField] = l10o1;
    lO01l[getShowArrow] = o01001;
    lO01l[setShowArrow] = lOo0;
    lO01l[getShowTreeLines] = O01o1;
    lO01l[setShowTreeLines] = O0oOl;
    lO01l[getTextField] = oOo0lO;
    lO01l[setTextField] = Oo0OO0;
    lO01l[getIdField] = o1llO;
    lO01l[setIdField] = oo0Ol;
    lO01l[getParentField] = l0Ol;
    lO01l[setParentField] = o100Ol;
    lO01l[getResultAsTree] = Ol1O11;
    lO01l[setResultAsTree] = looOO;
    lO01l[getValue] = O0O0;
    lO01l.o0ol = O0O0AndText;
    lO01l[getNodesByValue] = l011ol;
    lO01l[setValue] = lll1o;
    lO01l[getCheckedNodes] = Ol11o;
    lO01l[uncheckAllNodes] = lOOOO;
    lO01l[checkAllNodes] = l0l00;
    lO01l[uncheckNodes] = l0o10;
    lO01l[checkNodes] = o00l0o;
    lO01l[uncheckNode] = oool1;
    lO01l[checkNode] = ol00o;
    lO01l[_doCheckNode] = l0Oo;
    lO01l[_doCheckLoadNodes] = o1o10;
    lO01l[hasCheckedChildNode] = O11O;
    lO01l[getAutoCheckParent] = OO1Ol;
    lO01l[setAutoCheckParent] = l1ol1;
    lO01l[doUpdateCheckedState] = ool0O;
    lO01l[getSelectedNodes] = l0ll1;
    lO01l[getSelectedNode] = lOo10l;
    lO01l[selectNode] = lo1O0O;
    lO01l[collapsePath] = ollO;
    lO01l[expandPath] = o1l000;
    lO01l[collapseAll] = o11ol;
    lO01l[expandAll] = Olloo;
    lO01l[collapseLevel] = lo0ol;
    lO01l[expandLevel] = o10lo1;
    lO01l[toggleNode] = o0lOO;
    lO01l[collapseNode] = ool01;
    lO01l[expandNode] = loo1l0;
    lO01l[disableNode] = lo10oO;
    lO01l[enableNode] = oO001o;
    lO01l[showNode] = llOl11;
    lO01l[hideNode] = lll0l0;
    lO01l[getNode] = O1llo1;
    lO01l[findNodes] = O11o;
    lO01l.lool = llol0;
    lO01l.lll1oO = O0O10;
    lO01l.l111o = Ol0Ol;
    lO01l.ll00 = l0O0l0;
    lO01l[_getNodeEl] = OoOOO;
    lO01l[getNodeBox] = O1llo1Box;
    lO01l[removeNodeCls] = Oooll;
    lO01l[addNodeCls] = Oo11ol;
    lO01l.l0l1 = O1oO0;
    lO01l.olll00 = oOl0;
    lO01l.Ol0O = olll;
    lO01l[_getNodeByEvent] = ol1o1o;
    lO01l.o0101 = oo00;
    lO01l.O1lO = oOool;
    lO01l[cancelEdit] = loO00;
    lO01l[beginEdit] = oOlO0;
    lO01l[isEditingNode] = OoOo1O;
    lO01l[moveNode] = lO1lll;
    lO01l[moveNodes] = lO1llls;
    lO01l[addNode] = l010O;
    lO01l[addNodes] = l010Os;
    lO01l[removeNode] = o1l0;
    lO01l[updateNode] = loO0;
    lO01l[setNodeIconCls] = olOoo;
    lO01l[setNodeText] = o000;
    lO01l.l10o = lOllO;
    lO01l[removeNodes] = o1l0s;
    lO01l.Ol01Oo = O11lO;
    lO01l.olOl0 = ll0o;
    lO01l[eachChild] = ol1o11;
    lO01l[cascadeChild] = O10oo;
    lO01l[bubbleParent] = l0O01;
    lO01l[isInLastNode] = O1o0O1;
    lO01l[isLastNode] = Oo01o;
    lO01l[isFirstNode] = O000;
    lO01l[isEnabledNode] = Olll0l;
    lO01l[isVisibleNode] = lOOl0;
    lO01l[isCheckedNode] = l101O;
    lO01l[isExpandedNode] = lO10o;
    lO01l[getLevel] = o0O11;
    lO01l[isLeaf] = olOl1;
    lO01l[hasChildren] = oo1o1O;
    lO01l[indexOfChildren] = O10l10;
    lO01l[getAt] = o110;
    lO01l[indexOf] = oOolO;
    lO01l[getAllChildNodes] = oO0o;
    lO01l[getChildNodes] = llO0o;
    lO01l[_getViewChildNodes] = olo000;
    lO01l[_isInViewLastNode] = O0O1o0;
    lO01l[_isViewLastNode] = OO10Ol;
    lO01l[_isViewFirstNode] = ll11oO;
    lO01l[getParentNode] = llOOoo;
    lO01l[getRootNode] = OooO;
    lO01l[getAncestors] = ooo11;
    lO01l[isAncestor] = OOooO;
    lO01l[getNodeIcon] = O1llo1Icon;
    lO01l[getCheckRecursive] = o1ooo;
    lO01l[setCheckRecursive] = Ool100;
    lO01l[getExpandOnLoad] = oO0O1l;
    lO01l[setExpandOnLoad] = Oo00oo;
    lO01l[getEnableHotTrack] = oOlOo0;
    lO01l[setEnableHotTrack] = OOllO;
    lO01l[getShowExpandButtons] = o10OO;
    lO01l[setShowExpandButtons] = ll100o;
    lO01l[getShowTreeIcon] = oOoOO0;
    lO01l[setShowTreeIcon] = lo11;
    lO01l[getAllowSelect] = oOOo;
    lO01l[setAllowSelect] = l1OO;
    lO01l[getShowFolderCheckBox] = Oo01;
    lO01l[setShowFolderCheckBox] = l1O1l1;
    lO01l[getShowCheckBox] = OOloo;
    lO01l[setShowCheckBox] = o01lo;
    lO01l[clearFilter] = l1Ol01;
    lO01l[filter] = o11oOl;
    lO01l[doLayout] = OoooO;
    lO01l.O10lOO = lo0l1;
    lO01l.oolOO = o1loO;
    lO01l[doUpdate] = OO1oo;
    lO01l.o00oO = oOOOoO;
    lO01l.Oo0o = o010OO;
    lO01l.O0l0 = o010OOTitle;
    lO01l.OOO00O = Ol1lOO;
    lO01l[getItemText] = o0Ol1;
    lO01l[getItemValue] = Oo0OO;
    lO01l.oll0l0 = lo1o0;
    lO01l[getAjaxOption] = OlOlO;
    lO01l[setAjaxOption] = o0oO1;
    lO01l[loadNode] = OlO0ll;
    lO01l[getUrl] = l0olO;
    lO01l[setUrl] = O1O1o;
    lO01l[clearData] = ll1O0;
    lO01l[loadData] = Ooo1lO;
    lO01l[loadList] = l000O;
    lO01l[_clearTree] = O0ll1l;
    lO01l[getList] = ll000O;
    lO01l[toArray] = l0lOO;
    lO01l[getData] = OolOo0;
    lO01l[setData] = l11o00;
    lO01l[load] = l1l00;
    lO01l[_initEvents] = OlOl;
    lO01l[_create] = Ooooo;
    lO01l[set] = OO1o0;
    l00O(mini.Tree, "tree");
    o100 = function($) {
        this.owner = $;
        this.owner[on]("NodeMouseDown", this.OlOo, this)
    }
    ;
    o100[prototype] = {
        OlOo: function(B) {
            var A = B.node;
            if (B.htmlEvent.button == mini.MouseButton.Right)
                return;
            var _ = this.owner;
            if (_[isReadOnly]() || _[isAllowDrag](B.node) == false)
                return;
            if (_[isEditingNode](A))
                return;
            this.dragData = _.O01l0lData();
            if (this.dragData[indexOf](A) == -1)
                this.dragData.push(A);
            var $ = this.O01l0l();
            $.start(B.htmlEvent)
        },
        ollOll: function($) {
            var _ = this.owner;
            this.feedbackEl = mini.append(document.body, "<div class=\"mini-feedback\"></div>");
            this.feedbackEl.innerHTML = _.O01l0lText(this.dragData);
            this.lastFeedbackClass = "";
            this[enableHotTrack] = _[enableHotTrack];
            _[setEnableHotTrack](false)
        },
        _getDropTree: function(_) {
            var $ = llOo(_.target, "mini-tree", 500);
            if ($)
                return mini.get($)
        },
        ooOo: function(_) {
            var B = this.owner
              , A = this._getDropTree(_.event)
              , E = _.now[0]
              , C = _.now[1];
            mini[setXY](this.feedbackEl, E + 15, C + 18);
            this.dragAction = "no";
            if (A) {
                var $ = A[_getNodeByEvent](_.event);
                this.dropNode = $;
                if ($ && A[allowDrop] == true) {
                    if (!A[isLeaf]($)) {
                        var D = $[A.nodesField];
                        if (D && D.length > 0)
                            ;
                        else if (B.loadOnExpand && $.asyncLoad !== false)
                            A[loadNode]($)
                    }
                    this.dragAction = this.getFeedback($, C, 3, A)
                } else
                    this.dragAction = "no";
                if (B && A && B != A && !$ && A[getChildNodes](A.root).length == 0) {
                    $ = A[getRootNode]();
                    this.dragAction = "add";
                    this.dropNode = $
                }
            }
            this.lastFeedbackClass = "mini-feedback-" + this.dragAction;
            this.feedbackEl.className = "mini-feedback " + this.lastFeedbackClass;
            if (this.dragAction == "no")
                $ = null ;
            this.setRowFeedback($, this.dragAction, A)
        },
        l10l: function(A) {
            var E = this.owner
              , C = this._getDropTree(A.event);
            mini[removeNode](this.feedbackEl);
            this.feedbackEl = null ;
            this.setRowFeedback(null );
            var D = [];
            for (var H = 0, G = this.dragData.length; H < G; H++) {
                var J = this.dragData[H]
                  , B = false;
                for (var K = 0, _ = this.dragData.length; K < _; K++) {
                    var F = this.dragData[K];
                    if (F != J) {
                        B = E[isAncestor](F, J);
                        if (B)
                            break
                    }
                }
                if (!B)
                    D.push(J)
            }
            this.dragData = D;
            if (this.dropNode && C && this.dragAction != "no") {
                var L = E.O100l(this.dragData, this.dropNode, this.dragAction);
                if (!L.cancel) {
                    var D = L.dragNodes
                      , I = L.targetNode
                      , $ = L.action;
                    if (E == C)
                        E[moveNodes](D, I, $);
                    else {
                        E[removeNodes](D);
                        C[addNodes](D, I, $)
                    }
                }
            }
            E[setEnableHotTrack](this[enableHotTrack]);
            L = {
                dragNode: this.dragData[0],
                dropNode: this.dropNode,
                dragAction: this.dragAction
            };
            E[fire]("drop", L);
            this.dropNode = null ;
            this.dragData = null 
        },
        setRowFeedback: function(B, F, A) {
            if (this.lastAddDomNode)
                Ol00(this.lastAddDomNode, "mini-tree-feedback-add");
            if (B == null  || this.dragAction == "add") {
                mini[removeNode](this.feedbackLine);
                this.feedbackLine = null 
            }
            this.lastRowFeedback = B;
            if (B != null )
                if (F == "before" || F == "after") {
                    if (!this.feedbackLine)
                        this.feedbackLine = mini.append(document.body, "<div class='mini-feedback-line'></div>");
                    this.feedbackLine.style.display = "block";
                    var D = A[getNodeBox](B)
                      , E = D.x
                      , C = D.y - 1;
                    if (F == "after")
                        C += D.height;
                    mini[setXY](this.feedbackLine, E, C);
                    var _ = A[getBox](true);
                    oO1Ol(this.feedbackLine, _.width)
                } else {
                    var $ = A.l111o(B);
                    O0Oo0($, "mini-tree-feedback-add");
                    this.lastAddDomNode = $
                }
        },
        getFeedback: function($, I, F, A) {
            var J = A[getNodeBox]($)
              , _ = J.height
              , H = I - J.y
              , G = null ;
            if (this.dragData[indexOf]($) != -1)
                return "no";
            var C = false;
            if (F == 3) {
                C = A[isLeaf]($);
                for (var E = 0, D = this.dragData.length; E < D; E++) {
                    var K = this.dragData[E]
                      , B = A[isAncestor](K, $);
                    if (B) {
                        G = "no";
                        break
                    }
                }
            }
            if (G == null )
                if (C && A.allowLeafDropIn == false) {
                    if (H > _ / 2)
                        G = "after";
                    else
                        G = "before"
                } else if (H > (_ / 3) * 2)
                    G = "after";
                else if (_ / 3 <= H && H <= (_ / 3 * 2))
                    G = "add";
                else
                    G = "before";
            var L = A.o1Oo1(G, this.dragData, $);
            return L.effect
        },
        O01l0l: function() {
            if (!this.drag)
                this.drag = new mini.Drag({
                    capture: false,
                    onStart: mini.createDelegate(this.ollOll, this),
                    onMove: mini.createDelegate(this.ooOo, this),
                    onStop: mini.createDelegate(this.l10l, this)
                });
            return this.drag
        }
    };
    mini.TreeGrid = function() {
        this.columns = [];
        this.l1lo = [];
        this.OOO1Oo = {};
        this.O1ooO0 = {};
        this._cellErrors = [];
        this._cellMapErrors = {};
        mini.TreeGrid[superclass][constructor][call](this);
        this.lOlOo1.style.display = this[allowResize] ? "" : "none"
    }
    ;
    O00lO(mini.TreeGrid, mini.Tree, {
        _rowIdField: "_id",
        width: 300,
        height: 180,
        minWidth: 300,
        minHeight: 150,
        maxWidth: 5000,
        maxHeight: 3000,
        allowResize: false,
        treeColumn: "",
        columns: [],
        columnWidth: 80,
        allowResizeColumn: true,
        allowMoveColumn: true,
        o10O00: true,
        _headerCellCls: "mini-treegrid-headerCell",
        _cellCls: "mini-treegrid-cell",
        o101: "mini-treegrid-border",
        o0oO: "mini-treegrid-header",
        oo110: "mini-treegrid-body",
        ollOlo: "mini-treegrid-node",
        O01l0: "mini-treegrid-nodes",
        O00o: "mini-treegrid-selectedNode",
        Oo1lll: "mini-treegrid-hoverNode",
        o1OlO: "mini-treegrid-expand",
        lOoo: "mini-treegrid-collapse",
        lo11O: "mini-treegrid-ec-icon",
        O0oo: "mini-treegrid-nodeTitle",
        uiCls: "mini-treegrid"
    });
    ooooO = mini.TreeGrid[prototype];
    ooooO[getAttrs] = ll0Oo;
    ooooO.oO1O = O1O0l;
    ooooO[getColumnWidth] = o0O1O;
    ooooO[setColumnWidth] = oOOoO;
    ooooO.lloo0o = olO0l;
    ooooO[getAllowResize] = olOll;
    ooooO[setAllowResize] = Oo011;
    ooooO[getAllowMoveColumn] = OoOl;
    ooooO[setAllowMoveColumn] = l110;
    ooooO[getAllowResizeColumn] = olOllColumn;
    ooooO[setAllowResizeColumn] = Oo011Column;
    ooooO[getTreeColumn] = O011l;
    ooooO[setTreeColumn] = Olo1;
    ooooO.oOolo = Olooo;
    ooooO.OO0OO = oolloo;
    ooooO[getHeaderHeight] = oO0ol;
    ooooO.oolOO = OO0o0;
    ooooO[_doLayoutTopRightCell] = lollo;
    ooooO[doLayout] = o0o1;
    ooooO[getScrollLeft] = OoO11l;
    ooooO[doUpdate] = o1oO0;
    ooooO.O0l0 = l1o1o;
    ooooO.oolOOo = O1Ol1;
    ooooO.O0OlOl = Oo11l;
    ooooO[_getHeaderScrollEl] = OlloO;
    ooooO.O1O0o = OOlOo;
    ooooO[_create] = Oll1o;
    ooooO.ll00 = lOOol;
    mini.copyTo(mini.TreeGrid.prototype, OoOlo);
    mini.copyTo(mini.TreeGrid.prototype, olOO1);
    l00O(mini.TreeGrid, "treegrid");
    mini.RadioButtonList = mini.RadioButtonList,
    mini.ValidatorBase = mini.ValidatorBase,
    mini.AutoComplete = mini.AutoComplete,
    mini.CheckBoxList = mini.CheckBoxList,
    mini.DataBinding = mini.DataBinding,
    mini.OutlookTree = mini.OutlookTree,
    mini.OutlookMenu = mini.OutlookMenu,
    mini.TextBoxList = mini.TextBoxList,
    mini.TimeSpinner = mini.TimeSpinner,
    mini.ListControl = mini.ListControl,
    mini.OutlookBar = mini.OutlookBar,
    mini.FileUpload = mini.FileUpload,
    mini.TreeSelect = mini.TreeSelect,
    mini.DatePicker = mini.DatePicker,
    mini.ButtonEdit = mini.ButtonEdit,
    mini.MenuButton = mini.MenuButton,
    mini.PopupEdit = mini.PopupEdit,
    mini.Component = mini.Component,
    mini.TreeGrid = mini.TreeGrid,
    mini.DataGrid = mini.DataGrid,
    mini.MenuItem = mini.MenuItem,
    mini.Splitter = mini.Splitter,
    mini.HtmlFile = mini.HtmlFile,
    mini.Calendar = mini.Calendar,
    mini.ComboBox = mini.ComboBox,
    mini.TextArea = mini.TextArea,
    mini.Password = mini.Password,
    mini.CheckBox = mini.CheckBox,
    mini.DataSet = mini.DataSet,
    mini.Include = mini.Include,
    mini.Spinner = mini.Spinner,
    mini.ListBox = mini.ListBox,
    mini.TextBox = mini.TextBox,
    mini.Control = mini.Control,
    mini.Layout = mini.Layout,
    mini.Window = mini.Window,
    mini.Lookup = mini.Lookup,
    mini.Button = mini.Button,
    mini.Hidden = mini.Hidden,
    mini.Pager = mini.Pager,
    mini.Panel = mini.Panel,
    mini.Popup = mini.Popup,
    mini.Tree = mini.Tree,
    mini.Menu = mini.Menu,
    mini.Tabs = mini.Tabs,
    mini.Fit = mini.Fit,
    mini.Box = mini.Box;
    mini.locale = "en-US";
    mini.dateInfo = {
        monthsLong: ["\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"],
        monthsShort: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
        daysLong: ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
        daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
        quarterLong: ["\u4e00\u5b63\u5ea6", "\u4e8c\u5b63\u5ea6", "\u4e09\u5b63\u5ea6", "\u56db\u5b63\u5ea6"],
        quarterShort: ["Q1", "Q2", "Q2", "Q4"],
        halfYearLong: ["\u4e0a\u534a\u5e74", "\u4e0b\u534a\u5e74"],
        patterns: {
            "d": "yyyy-M-d",
            "D": "yyyy\u5e74M\u6708d\u65e5",
            "f": "yyyy\u5e74M\u6708d\u65e5 H:mm",
            "F": "yyyy\u5e74M\u6708d\u65e5 H:mm:ss",
            "g": "yyyy-M-d H:mm",
            "G": "yyyy-M-d H:mm:ss",
            "m": "MMMd\u65e5",
            "o": "yyyy-MM-ddTHH:mm:ss.fff",
            "s": "yyyy-MM-ddTHH:mm:ss",
            "t": "H:mm",
            "T": "H:mm:ss",
            "U": "yyyy\u5e74M\u6708d\u65e5 HH:mm:ss",
            "y": "yyyy\u5e74MM\u6708"
        },
        tt: {
            "AM": "\u4e0a\u5348",
            "PM": "\u4e0b\u5348"
        },
        ten: {
            "Early": "\u4e0a\u65ec",
            "Mid": "\u4e2d\u65ec",
            "Late": "\u4e0b\u65ec"
        },
        today: "\u4eca\u5929",
        clockType: 24
    };
    if (mini.Calendar)
        mini.copyTo(mini.Calendar.prototype, {
            firstDayOfWeek: 0,
            todayText: "\u4eca\u5929",
            clearText: "\u6e05\u9664",
            okText: "\u786e\u5b9a",
            cancelText: "\u53d6\u6d88",
            daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
            format: "yyyy\u5e74MM\u6708",
            timeFormat: "H:mm"
        });
    for (var id in mini) {
        var clazz = mini[id];
        if (clazz && clazz[prototype] && clazz[prototype].isControl)
            clazz[prototype][requiredErrorText] = "\u4e0d\u80fd\u4e3a\u7a7a"
    }
    if (mini.VTypes)
        mini.copyTo(mini.VTypes, {
            uniqueErrorText: "\u5b57\u6bb5\u4e0d\u80fd\u91cd\u590d",
            requiredErrorText: "\u4e0d\u80fd\u4e3a\u7a7a",
            emailErrorText: "\u8bf7\u8f93\u5165\u90ae\u4ef6\u683c\u5f0f",
            urlErrorText: "\u8bf7\u8f93\u5165URL\u683c\u5f0f",
            floatErrorText: "\u8bf7\u8f93\u5165\u6570\u5b57",
            intErrorText: "\u8bf7\u8f93\u5165\u6574\u6570",
            dateErrorText: "\u8bf7\u8f93\u5165\u65e5\u671f\u683c\u5f0f {0}",
            maxLengthErrorText: "\u4e0d\u80fd\u8d85\u8fc7 {0} \u4e2a\u5b57\u7b26",
            minLengthErrorText: "\u4e0d\u80fd\u5c11\u4e8e {0} \u4e2a\u5b57\u7b26",
            maxErrorText: "\u6570\u5b57\u4e0d\u80fd\u5927\u4e8e {0} ",
            minErrorText: "\u6570\u5b57\u4e0d\u80fd\u5c0f\u4e8e {0} ",
            rangeLengthErrorText: "\u5b57\u7b26\u957f\u5ea6\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4",
            rangeCharErrorText: "\u5b57\u7b26\u6570\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4",
            rangeErrorText: "\u6570\u5b57\u5fc5\u987b\u5728 {0} \u5230 {1} \u4e4b\u95f4"
        });
    if (mini.Pager)
        mini.copyTo(mini.Pager.prototype, {
            firstText: "\u9996\u9875",
            prevText: "\u4e0a\u4e00\u9875",
            nextText: "\u4e0b\u4e00\u9875",
            lastText: "\u5c3e\u9875",
            pageInfoText: "\u6bcf\u9875 {0} \u6761,\u5171 {1} \u6761"
        });
    if (mini.DataGrid)
        mini.copyTo(mini.DataGrid.prototype, {
            emptyText: "\u6ca1\u6709\u8fd4\u56de\u7684\u6570\u636e"
        });
    if (mini.FileUpload)
        mini.FileUpload[prototype].buttonText = "\u6d4f\u89c8...";
    if (mini.HtmlFile)
        mini.HtmlFile[prototype].buttonText = "\u6d4f\u89c8...";
    if (window.mini.Gantt) {
        mini.GanttView.ShortWeeks = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"];
        mini.GanttView.LongWeeks = ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"];
        mini.Gantt.PredecessorLinkType = [{
            ID: 0,
            Name: "\u5b8c\u6210-\u5b8c\u6210(FF)",
            Short: "FF"
        }, {
            ID: 1,
            Name: "\u5b8c\u6210-\u5f00\u59cb(FS)",
            Short: "FS"
        }, {
            ID: 2,
            Name: "\u5f00\u59cb-\u5b8c\u6210(SF)",
            Short: "SF"
        }, {
            ID: 3,
            Name: "\u5f00\u59cb-\u5f00\u59cb(SS)",
            Short: "SS"
        }];
        mini.Gantt.ConstraintType = [{
            ID: 0,
            Name: "\u8d8a\u65e9\u8d8a\u597d"
        }, {
            ID: 1,
            Name: "\u8d8a\u665a\u8d8a\u597d"
        }, {
            ID: 2,
            Name: "\u5fc5\u987b\u5f00\u59cb\u4e8e"
        }, {
            ID: 3,
            Name: "\u5fc5\u987b\u5b8c\u6210\u4e8e"
        }, {
            ID: 4,
            Name: "\u4e0d\u5f97\u65e9\u4e8e...\u5f00\u59cb"
        }, {
            ID: 5,
            Name: "\u4e0d\u5f97\u665a\u4e8e...\u5f00\u59cb"
        }, {
            ID: 6,
            Name: "\u4e0d\u5f97\u65e9\u4e8e...\u5b8c\u6210"
        }, {
            ID: 7,
            Name: "\u4e0d\u5f97\u665a\u4e8e...\u5b8c\u6210"
        }];
        mini.copyTo(mini.Gantt, {
            ID_Text: "\u6807\u8bc6\u53f7",
            Name_Text: "\u4efb\u52a1\u540d\u79f0",
            PercentComplete_Text: "\u8fdb\u5ea6",
            Duration_Text: "\u5de5\u671f",
            Start_Text: "\u5f00\u59cb\u65e5\u671f",
            Finish_Text: "\u5b8c\u6210\u65e5\u671f",
            Critical_Text: "\u5173\u952e\u4efb\u52a1",
            PredecessorLink_Text: "\u524d\u7f6e\u4efb\u52a1",
            Work_Text: "\u5de5\u65f6",
            Priority_Text: "\u91cd\u8981\u7ea7\u522b",
            Weight_Text: "\u6743\u91cd",
            OutlineNumber_Text: "\u5927\u7eb2\u5b57\u6bb5",
            OutlineLevel_Text: "\u4efb\u52a1\u5c42\u7ea7",
            ActualStart_Text: "\u5b9e\u9645\u5f00\u59cb\u65e5\u671f",
            ActualFinish_Text: "\u5b9e\u9645\u5b8c\u6210\u65e5\u671f",
            WBS_Text: "WBS",
            ConstraintType_Text: "\u9650\u5236\u7c7b\u578b",
            ConstraintDate_Text: "\u9650\u5236\u65e5\u671f",
            Department_Text: "\u90e8\u95e8",
            Principal_Text: "\u8d1f\u8d23\u4eba",
            Assignments_Text: "\u8d44\u6e90\u540d\u79f0",
            Summary_Text: "\u6458\u8981\u4efb\u52a1",
            Task_Text: "\u4efb\u52a1",
            Baseline_Text: "\u6bd4\u8f83\u57fa\u51c6",
            LinkType_Text: "\u94fe\u63a5\u7c7b\u578b",
            LinkLag_Text: "\u5ef6\u9694\u65f6\u95f4",
            From_Text: "\u4ece",
            To_Text: "\u5230",
            Goto_Text: "\u8f6c\u5230\u4efb\u52a1",
            UpGrade_Text: "\u5347\u7ea7",
            DownGrade_Text: "\u964d\u7ea7",
            Add_Text: "\u65b0\u589e",
            Edit_Text: "\u7f16\u8f91",
            Remove_Text: "\u5220\u9664",
            Move_Text: "\u79fb\u52a8",
            ZoomIn_Text: "\u653e\u5927",
            ZoomOut_Text: "\u7f29\u5c0f",
            Deselect_Text: "\u53d6\u6d88\u9009\u62e9",
            Split_Text: "\u62c6\u5206\u4efb\u52a1"
        })
    }
