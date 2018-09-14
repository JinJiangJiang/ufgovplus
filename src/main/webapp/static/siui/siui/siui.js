
sipagergetshowpageinfo = function() {
    return this.showPageInfo
};

sipagersetshowreloadbutton = function($) {
    this.showReloadButton = $;
    this["update"]()
};

sipagergetshowreloadbutton = function() {
    return this.showReloadButton
};

sipagergettotalpage = function() {
    return this.totalPage
};
sipagerupdate = function($, H, F) {
    if (si.isNumber($))
        this["pageIndex"] = parseInt($);
    if (si.isNumber(H))
        this["pageSize"] = parseInt(H);
    if (si.isNumber(F))
        this["totalCount"] = parseInt(F);
    this.totalPage = parseInt(this["totalCount"] / this["pageSize"]) + 1;
    if ((this.totalPage - 1) * this["pageSize"] == this["totalCount"])
        this.totalPage -= 1;
    if (this["totalCount"] == 0)
        this.totalPage = 0;
    if (this["pageIndex"] > this.totalPage - 1)
        this["pageIndex"] = this.totalPage - 1;
    if (this["pageIndex"] <= 0)
        this["pageIndex"] = 0;
    if (this.totalPage <= 0)
        this.totalPage = 0;
    this.firstButton["enable"]();
    this.prevButton["enable"]();
    this.nextButton["enable"]();
    this.lastButton["enable"]();
    if (this["pageIndex"] == 0) {
        this.firstButton["disable"]();
        this.prevButton["disable"]()
    }
    if (this["pageIndex"] >= this.totalPage - 1) {
        this.nextButton["disable"]();
        this.lastButton["disable"]()
    }
    this.numInput.value = this["pageIndex"] > -1 ? this["pageIndex"] + 1 : 0;
    this.pagesLabel.innerHTML = "/ " + this.totalPage;
    var L = this["sizeList"].clone();
    if (L["indexOf"](this["pageSize"]) == -1) {
        L.push(this["pageSize"]);
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
    this.sizeCombo["setData"](_);
    this.sizeCombo["setValue"](this["pageSize"]);
    var A = this.firstText
      , K = this.prevText
      , C = this.nextText
      , I = this.lastText;
    if (this.showButtonText == false)
        A = K = C = I = "";
    this.firstButton["setText"](A);
    this.prevButton["setText"](K);
    this.nextButton["setText"](C);
    this.lastButton["setText"](I);
    A = this.firstText,
    K = this.prevText,
    C = this.nextText,
    I = this.lastText;
    if (this.showButtonText == true)
        A = K = C = I = "";
    this.firstButton["setTooltip"](A);
    this.prevButton["setTooltip"](K);
    this.nextButton["setTooltip"](C);
    this.lastButton["setTooltip"](I);
    this.firstButton["setIconCls"](this.showButtonIcon ? "si-pager-first" : "");
    this.prevButton["setIconCls"](this.showButtonIcon ? "si-pager-prev" : "");
    this.nextButton["setIconCls"](this.showButtonIcon ? "si-pager-next" : "");
    this.lastButton["setIconCls"](this.showButtonIcon ? "si-pager-last" : "");
    this.reloadButton["setIconCls"](this.showButtonIcon ? "si-pager-reload" : "");
    this.reloadButton["setVisible"](this.showReloadButton);
    var J = this.reloadButton.el.previousSibling;
    if (J)
        J.style.display = this.showReloadButton ? "" : "none";
    this._rightEl.innerHTML = String.format(this.pageInfoText, this.pageSize, this["totalCount"]);
    this.indexEl.style.display = this.showPageIndex ? "" : "none";
    this.sizeEl.style.display = this.showPageSize ? "" : "none";
    this._rightEl.style.display = this.showPageInfo ? "" : "none"
};

    sicreategrid = function() {
        var $ = this.el = document.createElement("div");
        this.el.className = "si-grid";
        this.el.style.display = "block";
        this.el.tabIndex = 1;
        var _ = "<div class=\"si-grid-border\">" + "<div class=\"si-grid-header\"><div class=\"si-grid-headerInner\"></div></div>" + "<div class=\"si-grid-filterRow\"></div>" + "<div class=\"si-grid-body\"><div class=\"si-grid-bodyInner\"></div><div class=\"si-grid-body-scrollHeight\"></div></div>" + "<div class=\"si-grid-scroller\"><div></div></div>" + "<div class=\"si-grid-summaryRow\"></div>" + "<div class=\"si-grid-footer\"></div>" + "<div class=\"si-resizer-trigger\" style=\"\"></div>" + "<a href=\"#\" class=\"si-grid-focus\" style=\"position:absolute;left:-10px;top:-10px;width:0px;height:0px;outline:none;\" hideFocus onclick=\"return false\" ></a>" + "</div>";
        this.el.innerHTML = _;
        this.borderEl = this.el.firstChild;
        this.headerEl = this.borderEl.childNodes[0];
        this.filterRowEl = this.borderEl.childNodes[1];
        this.bodyEl = this.borderEl.childNodes[2];
        this._bodyInnerEl = this.bodyEl.childNodes[0];
        this._bodyScrollEl = this.bodyEl.childNodes[1];
        this._headerInnerEl = this.headerEl.firstChild;
        this.scrollEl = this.borderEl.childNodes[3];
        this.summaryRowEl = this.borderEl.childNodes[4];
        this.footerEl = this.borderEl.childNodes[5];
        this.resizerTriggerEl = this.borderEl.childNodes[6];
        this._focusEl = this.borderEl.childNodes[7];
        this.initFilter();
        this.initSummaryRow();
        sisetstyle(this.bodyEl, this.bodyStyle);
        siaddclass(this.bodyEl, this.bodyCls);
        this.initPager();
        this.updateRows()
    };
    
    sidatagridgetrowbox = function(_) {
        var $ = this.getRowEl(_);
        if ($)
            return sigetbox($);
        return null 
    }
    ;
    sidatagridgetrowsbox = function() {
        var G = []
          , C = this.data
          , B = 0;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var A = C[_]
              , F = this.getRowId(A)
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

    sidatagriddeferfrozen = function() {
        this._headerTableHeight = sigetheight(this._headerInnerEl.firstChild);
        var $ = this;
        if (this._deferFrozenTimer)
            clearTimeout(this._deferFrozenTimer);
        this._deferFrozenTimer = setTimeout(function() {
            $._beforeGridFrozenLayout()
        }
        , 1)
    };
    
    sidatagridsetfrozenstartcolumn = function($) {
        var _ = new Date();
        $ = parseInt($);
        if (isNaN($))
            return;
        this["frozenStartColumn"] = $;
        this["_deferFrozen"]()
    };
    
    sidatagridgetfrozenstartcolumn = function() {
        return this["frozenStartColumn"]
    };
    
    sidatagridsetfrozenendcolumn = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this["frozenEndColumn"] = $;
        this["_deferFrozen"]()
    };
    
    sidatagridgetfrozenendcolumn = function() {
        return this["frozenEndColumn"]
    };
    
    sidatagridunfrozencolumns = function() {
        this["setFrozenStartColumn"](-1);
        this["setFrozenEndColumn"](-1)
    };
    
    sidatagridfrozencolumns = function($, _) {
        this["unFrozenColumns"]();
        this["setFrozenStartColumn"]($);
        this["setFrozenEndColumn"](_)
    };
   
    sidatagridgetviewnowregion = function() {
        var B = this._rowHeight
          , D = this.bodyEl.scrollTop
          , $ = this.bodyEl.offsetHeight
          , C = parseInt(D / B)
          , _ = parseInt((D + $) / B) + 1
          , A = {
            start: C,
            end: _
        };
        return A
    };
    
    sidatagridcanvirtualupdate = function() {
        if (!this._viewRegion)
            return true;
        var $ = this["_getViewNowRegion"]();
        if (this._viewRegion.start <= $.start && $.end <= this._viewRegion.end)
            return false;
        return true
    }
    ;
    sidatagridtryupdatescroll = function() {
        var $ = this["_canVirtualUpdate"]();
        if ($)
            this["doUpdate"]()
    };
    sidatagriddoscrollfrozen = function() {
        if (!this["isFrozen"]())
            return;
        var F = this["getBottomColumns"]()
          , H = this.scrollEl.scrollLeft;
        this.__frozenScrollLeft = H;
        var $ = this["frozenEndColumn"]
          , C = 0;
        for (var _ = $ + 1, G = F.length; _ < G; _++) {
            var D = F[_];
            if (!D.visible)
                continue;var A = this["getColumnWidth"](D);
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
            if (this["frozenEndColumn"] < _ && _ <= $)
                D._hide = true
        }
        for (_ = 0,
        G = F.length; _ < G; _++) {
            D = F[_];
            if (_ < this.frozenStartColumn || (_ > this["frozenEndColumn"] && _ < $) || D.visible == false)
                this.changeDisplayValue(D, false);
            else
                this.changeDisplayValue(D, true)
        }
        var E = "width:100%;";
        if (this.scrollEl.offsetWidth < this.scrollEl.scrollWidth || !this["isFitColumns"]())
            E = "width:0px";
        this.updateHeader(E);
        var B = this._headerTableHeight;
        if (si.isIE9)
            B -= 1;
        sisetheight(this._headerInnerEl.firstChild, B);
        for (_ = this["frozenEndColumn"] + 1,
        G = F.length; _ < G; _++) {
            D = F[_];
            if (!D.visible)
                continue;if (_ <= $)
                this.changeDisplayValue(D, false);
            else
                this.changeDisplayValue(D, true)
        }
        this.setGridDetailRowSpan();
        this["_doMargeCells"]();
        this["_doLayoutTopRightCell"]();
        this["fire"]("layout")
    };
    sidatagriddogridlines = function() {
        if (this["showVGridLines"])
            siremoveclass(this.el, "si-grid-hideVLine");
        else
            siaddclass(this.el, "si-grid-hideVLine");
        if (this["showHGridLines"])
            siremoveclass(this.el, "si-grid-hideHLine");
        else
            siaddclass(this.el, "si-grid-hideHLine")
    };

    sidatagridsetshowhgridlines = function($) {
        if (this["showHGridLines"] != $) {
            this["showHGridLines"] = $;
            this["_doGridLines"]();
            this["doLayout"]()
        }
    };
    sidatagridgetshowhgridlines = function() {
        return this["showHGridLines"]
    };
    sidatagridsetshowvgridlines = function($) {
        if (this["showVGridLines"] != $) {
            this["showVGridLines"] = $;
            this["_doGridLines"]();
            this["doLayout"]()
        }
    }
    ;
    sidatagridgetshowvgridlines = function() {
        return this["showVGridLines"]
    };

    sidatagridsetshowfilterrow = function($) {
        if (this["showFilterRow"] != $) {
            this["showFilterRow"] = $;
            this.updateRows();
            this["doLayout"]()
        }
    };
    
    sidatagridgetshowfilterrow = function() {
        return this["showFilterRow"]
    }
    ;
    sidatagridsetshowsummaryrow = function($) {
        if (this["showSummaryRow"] != $) {
            this["showSummaryRow"] = $;
            this.updateRows();
            this["doLayout"]()
        }
    }
    ;
    sidatagridgetshowsummaryrow = function() {
        return this["showSummaryRow"]
    };
    
    sidatagridsetallowalternating = function($) {
        if (this["allowAlternating"] != $) {
            this["allowAlternating"] = $;
            this.alternateAllRows()
        }
    }
    ;
    sidatagridgetallowalternating = function() {
        return this["allowAlternating"]
    }
    ;
    sidatagridsetenablehottrack = function($) {
        if (this["enableHotTrack"] != $)
            this["enableHotTrack"] = $
    }
    ;
    sidatagridgetenablehottrack = function() {
        return this["enableHotTrack"]
    }
    ;
    sidatagridsetshowloading = function($) {
        this.showLoading = $
    }
    ;
    sidatagridsetallowcellwarp = function($) {
        if (this.allowCellWrap != $)
            this.allowCellWrap = $
    }
    ;
    sidatagridgetallowcellwarp = function() {
        return this.allowCellWrap
    }
    ;
	sidatagridset=function (kv) {var columns = kv.columns; delete kv.columns; si.DataGrid["superclass"]["set"]["call"](this,kv); if (columns) this["setColumns"](columns); return this; }
    sidatagridsetallowheaderwarp = function($) {
        this.allowHeaderWrap = $;
        siremoveclass(this.el, "si-grid-headerWrap");
        if ($)
            siaddclass(this.el, "si-grid-headerWrap")
    }
    ;

    sidatagridgetallowheaderwarp = function() {
        return this.allowHeaderWrap
    };
    
    sidatagridsetshowcolumnsmenu = function($) {
        this.showColumnsMenu = $
    };
    
    sidatagridgetshowcolumnsmenu = function() {
        return this.showColumnsMenu
    };
    
    sidatagridseteditnextonenterkey = function($) {
        this.editNextOnEnterKey = $
    };
    
    sidatagridgeteditnextonenterkey = function() {
        return this.editNextOnEnterKey
    };
    
    sidatagridseteditontabkey = function($) {
        this.editOnTabKey = $
    };
    
    sidatagridgeteditontabkey = function() {
        return this.editOnTabKey
    };
    
    sidatagridsetvirtualscroll = function($) {
        if (this.virtualScroll != $)
            this.virtualScroll = $
    };
    
    sidatagridgetvirtualscroll = function() {
        return this.virtualScroll
    }
    ;
    sidatagridsetscrolltop = function($) {
        this.scrollTop = $;
        this.bodyEl.scrollTop = $
    }
    ;
    sidatagridgetscrolltop = function() {
        return this.bodyEl.scrollTop
    };
    
    sidatagridsetbodystyle = function($) {
        this.bodyStyle = $;
        sisetstyle(this.bodyEl, $)
    }
    ;
    sidatagridgetbodystyle = function() {
        return this.bodyStyle
    }
    ;
    sidatagridsetbodycls = function($) {
        this.bodyCls = $;
        siaddclass(this.bodyEl, $)
    }
    ;
    sidatagridgetbodycls = function() {
        return this.bodyCls
    }
    ;
    sidatagridsetfooterstyle = function($) {
        this.footerStyle = $;
        sisetstyle(this.footerEl, $)
    }
    ;
    sidatagridgetfooterstyle = function() {
        return this.footerStyle
    }
    ;
    sidatagridsetfootercls = function($) {
        this.footerCls = $;
        siaddclass(this.footerEl, $)
    }
    ;
    sidatagridgetfootercls = function() {
        return this.footerCls
    }
    ;
    sidatagridsetshowheader = function($) {
        this.showHeader = $;
        this.updateRows();
        this["doLayout"]()
    }
    ;
    sidatagridsetshowpager = function($) {
        this["setShowFooter"]($)
    }
    ;
    sidatagridgetshowpager = function() {
        return this["showFooter"]
    }
    ;
    sidatagridsetshowfooter = function($) {
        this["showFooter"] = $;
        this.updateRows();
        this["doLayout"]()
    }
    ;
    sidatagridgetshowfooter = function() {
        return this["showFooter"]
    };
   
    sidatagridsetautohiderowdetail = function($) {
        this.autoHideRowDetail = $
    }
    ;
    sidatagridsetsortmode = function($) {
        this.sortMode = $
    }
    ;
    sidatagridgetsortmode = function() {
        return this.sortMode
    }
    ;
    sidatagridsetallowsortcolumn = function($) {
        this["allowSortColumn"] = $
    }
    ;
    sidatagridgetallowsortcolumn = function() {
        return this["allowSortColumn"]
    }
    ;
    sidatagridsetallowmovecolumn = function($) {
        this["allowMoveColumn"] = $
    }
    ;
    sidatagridgetallowmovecolumn = function() {
        return this["allowMoveColumn"]
    }
    ;
    sidatagridsetallowresizecolumn = function($) {
        this["allowResizeColumn"] = $
    }
    ;
    sidatagridgetallowresizecolumn = function() {
        return this["allowResizeColumn"]
    }
    ;
    sidatagridsetselectonload = function($) {
        this.selectOnLoad = $
    }
    ;
    sidatagridgetselectonload = function() {
        return this.selectOnLoad
    }
    ;
    sidatagridsetallowresize = function($) {
        this["allowResize"] = $;
        this.resizerTriggerEl.style.display = this["allowResize"] ? "" : "none"
    }
    ;
    sidatagridgetallowresize = function() {
        return this["allowResize"]
    }
    ;
    sidatagridsetshowemptytext = function($) {
        this.showEmptyText = $
    }
    ;
    sidatagridgetshowemptytext = function() {
        return this.showEmptyText
    }
    ;
    sidatagridsetemptytext = function($) {
        this["emptyText"] = $
    }
    ;
    sidatagridgetemptytext = function() {
        return this["emptyText"]
    }
    ;
    sidatagridsetshowmodified = function($) {
        this.showModified = $
    }
    ;

    sidatagridgetshowmodified = function() {
        return this.showModified
    }
    ;
    sidatagridsetshownewrow = function($) {
        this.showNewRow = $
    }
    ;
    sidatagridgetshownewrow = function() {
        return this.showNewRow
    }
    ;
    sidatagridsetcelleditaction = function($) {
        this.cellEditAction = $
    }
    ;

    sidatagridgetcelleditaction = function() {
        return this.cellEditAction
    }
    ;
    sidatagridsetallowcellvalid = function($) {
        this.allowCellValid = $
    }
    ;
    sidatagridgetallowcellvalid = function() {
        return this.allowCellValid
    }
    ;
    sidatagridshowallrowdetail = function() {
        this._showRowDetailFlag = false;
        for (var $ = 0, A = this.data.length; $ < A; $++) {
            var _ = this.data[$];
            this["showRowDetail"](_)
        }
        this._showRowDetailFlag = true;
        this["doLayout"]()
    }
    ;
    sidatagridhideallrowdetail = function() {
        this._showRowDetailFlag = false;
        for (var $ = 0, A = this.data.length; $ < A; $++) {
            var _ = this.data[$];
            if (this["isShowRowDetail"](_))
                this["hideRowDetail"](_)
        }
        this._showRowDetailFlag = true;
        this["doLayout"]()
    }
    ;

    sidatagridshowrowdetail = function(_) {
        _ = this["getRow"](_);
        if (!_)
            return;
        var B = this["getRowDetailEl"](_);
        B.style.display = "";
        _._showDetail = true;
        var $ = this.getRowEl(_);
        siaddclass($, "si-grid-expandRow");
        this["fire"]("showrowdetail", {
            record: _
        });
        if (this._showRowDetailFlag)
            this["doLayout"]();
        var A = this
    }
    ;
    sidatagridhiderowdetail = function(_) {
        _ = this["getRow"](_);
        if (!_)
            return;
        var B = this.getRowDetailId(_)
          , A = document.getElementById(B);
        if (A)
            A.style.display = "none";
        delete _._showDetail;
        var $ = this.getRowEl(_);
        siremoveclass($, "si-grid-expandRow");
        this["fire"]("hiderowdetail", {
            record: _
        });
        if (this._showRowDetailFlag)
            this["doLayout"]()
    }
    ;
    sidatagridtogglerowdetail = function($) {
        $ = this["getRow"]($);
        if (!$)
            return;
        if (grid["isShowRowDetail"]($))
            grid["hideRowDetail"]($);
        else
            grid["showRowDetail"]($)
    }
    ;
    sidatagridisshowrowdetail = function($) {
        $ = this["getRow"]($);
        if (!$)
            return false;
        return !!$._showDetail
    }
    ;
    sidatagridgetrowdetailel = function($) {
        $ = this["getRow"]($);
        if (!$)
            return null ;
        var A = this.getRowDetailId($)
          , _ = document.getElementById(A);
        if (!_)
            _ = this.generateGridRowDetail($);
        return _
    }
    ;
    sidatagridgetrowdetailcellel = function($) {
        var _ = this["getRowDetailEl"]($);
        if (_)
            return _.cells[0]
    };
    
    ;
    sidatagridsetshowreloadbutton = function($) {
        this.pager["setShowReloadButton"]($)
    }
    ;
    sidatagridgetshowreloadbutton = function() {
        return this.pager["getShowReloadButton"]()
    }
    ;
    sidatagridsetshowpageinfo = function($) {
        this.pager["setShowPageInfo"]($)
    }
    ;
    sidatagridgetshowpageinfo = function() {
        return this.pager["getShowPageInfo"]()
    }
    ;
    sidatagridsetsizelist = function($) {
        if (!si.isArray($))
            return;
        this.pager["setSizeList"]($)
    };
    
    sidatagridgetsizelist = function() {
        return this.pager["getSizeList"]()
    };
    
    sidatagridsetpagesize = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this["pageSize"] = $;
        if (this.pager)
            this.pager["update"](this.pageIndex, this.pageSize, this["totalCount"])
    };
    
    sidatagridgetpagesize = function() {
        return this["pageSize"]
    };
    
    sidatagridsetpageindex = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this["pageIndex"] = $;
        if (this.pager)
            this.pager["update"](this.pageIndex, this.pageSize, this["totalCount"])
    }
    ;
    sidatagridgetpageindex = function() {
        return this["pageIndex"]
    }
    ;
    sidatagridsetshowpagesize = function($) {
        this.showPageSize = $;
        this.pager["setShowPageSize"]($)
    }
    ;
    sidatagridgetshowpagesize = function() {
        return this.showPageSize
    }
    ;
    sidatagridsetshowpageindex = function($) {
        this.showPageIndex = $;
        this.pager["setShowPageIndex"]($)
    }
    ;
    sidatagridgetshowpageindex = function() {
        return this.showPageIndex
    }
    ;
    sidatagridsetshowtotalcount = function($) {
        this.showTotalCount = $;
        this.pager["setShowTotalCount"]($)
    }
    ;

    sidatagridgetshowtotalcount = function() {
        return this.showTotalCount
    }
    ;
    sidatagridsetpageindexfield = function($) {
        this.pageIndexField = $
    }
    ;
    sidatagridgetpageindexfield = function() {
        return this.pageIndexField
    }
    ;
    sidatagridsetpagesizefield = function($) {
        this.pageSizeField = $
    }
    ;
    sidatagridgetpagesizefield = function() {
        return this.pageSizeField
    }
    ;
    sidatagridsetsortfieldfield = function($) {
        this.sortFieldField = $
    }
    ;
    sidatagridgetsortfieldfield = function() {
        return this.sortFieldField
    }
    ;
    sidatagridsetsortorderfield = function($) {
        this.sortOrderField = $
    }
    ;
    sidatagridgetsortorderfield = function() {
        return this.sortOrderField
    }
    ;
    sidatagridsettotalfield = function($) {
        this.totalField = $
    }
    ;
    sidatagridgettotalfield = function() {
        return this.totalField
    }
    ;
	sidatagridgetfitcolumns=function (value) {return this.fitColumns; }
    sidatagridsetdatafield = function($) {
        this.dataField = $
    }
    ;
    sidatagridgetdatafield = function() {
        return this.dataField
    }
    ;
    sidatagridgetsortfield = function() {
        return this.sortField
    }
    ;
    sidatagridgetsortorder = function() {
        return this.sortOrder
    }
    ;
    sidatagridsettotalcount = function($) {
        this["totalCount"] = $;
        this.pager["setTotalCount"]($)
    }
    ;
    sidatagridgettotalcount = function() {
        return this["totalCount"]
    }
    ;
    sidatagridgettotalpage = function() {
        return this.totalPage
    }
    ;
    sidatagridsetcheckselectonload = function($) {
        this["checkSelectOnLoad"] = $
    }
    ;
    sidatagridgetcheckselectonload = function() {
        return this["checkSelectOnLoad"]
    }
    ;
    sidatagridgetdataobj = function($) {
        return $.data
    }
    ;
    sidatagridgetresultobject = function() {
        return this._resultObject ? this._resultObject : {}
    };
 
    sidatagridload = function(A, B, C) {
        if (this._loadTimer)
            clearTimeout(this._loadTimer);
        var $ = this
          , _ = si.byClass("si-grid-emptyText", this.el);
        if (_)
            _.style.display = "none";
        this["cancelEdit"]();
        this.loadParams = A || {};
        if (this.ajaxAsync)
            this._loadTimer = setTimeout(function() {
                $.insideLoad(A, B, C)
            }
            , 1);
        else
            $.insideLoad(A, B, C)
    };

    sidatagridreload = function(_, $) {
        this["accept"]();
        this["load"](this.loadParams, _, $)
    }
    ;

    sidatagridgotopage = function($, A) {
        var _ = this.loadParams || {};
        if (si.isNumber($))
            _["pageIndex"] = $;
        if (si.isNumber(A))
            _["pageSize"] = A;
        this["load"](_)
    }
    ;
    sidatagridsortby = function(F, D) {
        this.sortField = F;
        this.sortOrder = D == "asc" ? "asc" : "desc";
        if (this.sortMode == "server") {
            var A = this.loadParams || {};
            A.sortField = F;
            A.sortOrder = D;
            A["pageIndex"] = this["pageIndex"];
            var E = this;
            this["load"](A, function() {
                E["fire"]("sort")
            }
            )
        } else {
            var B = this["getData"]().clone()
              , C = this["_getSortFnByField"](F);
            if (!C)
                return;
            var H = [];
            for (var _ = B.length - 1; _ >= 0; _--) {
                var $ = B[_]
                  , G = si._getMap(F, $);
                if (si.isNull(G) || G === "") {
                    H.insert(0, $);
                    B.removeAt(_)
                }
            }
            B = B.clone();
            si.sort(B, C, this);
            B.insertRange(0, H);
            if (this.sortOrder == "desc")
                B.reverse();
            this.data = B;
            this["doUpdate"]();
            this["fire"]("sort")
        }
    }
    ;
    sidatagridclearsort = function() {
        this.sortField = "";
        this.sortOrder = "";
        this["reload"]()
    }
    ;
    sidatagridgetsortfnbyfield = function(D) {
        if (!D)
            return null ;
        var F = "string"
          , C = null 
          , E = this["getBottomColumns"]();
        for (var $ = 0, G = E.length; $ < G; $++) {
            var A = E[$];
            if (A.field == D) {
                if (A.dataType)
                    F = A.dataType.toLowerCase();
                break
            }
        }
        var B = si.sortTypes[F];
        if (!B)
            B = si.sortTypes["string"];
        function _(A, F) {
            var C = si._getMap(D, A)
              , _ = si._getMap(D, F)
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
    };
    
    sidatagridsetcurrentcell = function(A) {
        if (this.currentCell != A) {
            this.addOrRemoveCurrentSelectedCellCls(false);
            this.currentCell = A;
            if (A) {
                var $ = this["getRow"](A[0])
                  , _ = this["getColumn"](A[1]);
                if ($ && _)
                    this.currentCell = [$, _];
                else
                    this.currentCell = null 
            }
            this.addOrRemoveCurrentSelectedCellCls(true);
            if (A)
                if (this["isFrozen"]())
                    this["scrollIntoView"](A[0]);
                else
                    this["scrollIntoView"](A[0]);
            this["fire"]("currentcellchanged")
        }
    }
    ;
    sidatagridgetcurrentcell = function() {
        var $ = this.currentCell;
        if ($)
            if (this.data["indexOf"]($[0]) == -1) {
                this.currentCell = null ;
                $ = null 
            }
        return $
    }
    ;
    sidatagridsetallowcellselect = function($) {
        this["allowCellSelect"] = $
    }
    ;
    sidatagridgetallowcellselect = function($) {
        return this["allowCellSelect"]
    }
    ;
    sidatagridsetallowcelledit = function($) {
        this["allowCellEdit"] = $
    };
    sidatagridgetallowcelledit = function($) {
        return this["allowCellEdit"]
    };
    sidatagridbegineditcell = function($, A) {
        $ = this["getRow"]($);
        A = this["getColumn"](A);
        var _ = [$, A];
        if ($ && A)
            this["setCurrentCell"](_);
        _ = this["getCurrentCell"]();
        if (this.editingCell && _)
            if (this.editingCell[0] == _[0] && this.editingCell[1] == _[1])
                return;
        if (this.editingCell)
            this["commitEdit"]();
        if (_) {
            var $ = _[0]
              , A = _[1]
              , B = this._beforeCellBeginEdit($, A, this["getCellEditor"](A));
            if (B !== false) {
                this["scrollIntoView"]($, A);
                this.editingCell = _;
                this._beforeCellShowingEdit($, A)
            }
        }
    }
    ;
    sidatagridiseditingcell = function($) {
        return this.editingCell && this.editingCell[0] == $[0] && this.editingCell[1] == $[1]
    }
    ;
    sidatagridcanceledit = function() {
        if (this["allowCellEdit"]) {
            if (this.editingCell)
                this._beforeCellendedit()
        } else if (this["isEditing"]()) {
            this._componentLock = false;
            var A = this.data.clone();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = A[$];
                if (_._editing == true)
                    this["cancelEditRow"]($)
            }
            this._componentLock = true;
            this["doLayout"]()
        }
    }
    ;
    sidatagridcommitedit = function() {
        if (this["allowCellEdit"]) {
            if (this.editingCell) {
                this._beforeCellCommitEdit(this.editingCell[0], this.editingCell[1]);
                this._beforeCellendedit()
            }
        } else if (this["isEditing"]()) {
            this._componentLock = false;
            var A = this.data.clone();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = A[$];
                if (_._editing == true)
                    this["commitEditRow"]($)
            }
            this._componentLock = true;
            this["doLayout"]()
        }
    }
    ;
    sidatagridgetcelleditor = function(_, $) {
        _ = this["getColumn"](_);
        if (!_)
            return;
        if (this["allowCellEdit"]) {
            var B = _.__editor;
            if (!B)
                B = si.getAndCreate(_.editor);
            if (B && B != _.editor)
                _.editor = B;
            return B
        } else {
            $ = this["getRow"]($);
            _ = this["getColumn"](_);
            if (!$)
                $ = this["getEditingRow"]();
            if (!$ || !_)
                return null ;
            var A = this.uid + "$" + $._uid + "$" + _._id + "$editor";
            return si.get(A)
        }
    };

	sidatagridaccept=function () {this._idleToUpdate = false; var data = this["getData"](); for (var i = 0,l = data.length; i < l; i++) {var row = data[i]; this["acceptRecord"](row); } this._idleToUpdate = true; this["doUpdate"](); };
    
    sidatagridbegineditnextcell = function(C) {
        var $ = this
          , A = this["getCurrentCell"]();
        if (!A)
            return;
        this["focus"]();
        var D = $["getBottomVisibleColumns"]()
          , B = A ? A[1] : null 
          , _ = A ? A[0] : null 
          , G = D["indexOf"](B)
          , E = $["indexOf"](_)
          , F = $["getData"]().length;
        if (C === false) {
            G -= 1;
            B = D[G];
            if (!B) {
                B = D[D.length - 1];
                _ = $["getAt"](E - 1);
                if (!_)
                    return
            }
        } else {
            G += 1;
            B = D[G];
            if (!B) {
                B = D[0];
                _ = $["getAt"](E + 1);
                if (!_)
                    if (this.createOnEnter) {
                        _ = {};
                        this["addRow"](_)
                    } else
                        return
            }
        }
        A = [_, B];
        $["setCurrentCell"](A);
        $["deselectAll"]();
        $["setCurrent"](_);
        $["scrollIntoView"](_, B);
        $["beginEditCell"]()
    }
    ;
    sidatagridgeteditorownerrow = function(_) {
        var $ = _.ownerRowID;
        return this["getRowByUID"]($)
    }
    ;
    sidatagridbegineditrow = function(row) {
        if (this["allowCellEdit"])
            return;
        var sss = new Date();
        row = this["getRow"](row);
        if (!row)
            return;
        var rowEl = this.getRowEl(row);
        if (!rowEl)
            return;
        row._editing = true;
        var s = this._getGridRowStr(row)
          , rowEl = this.getRowEl(row);
        jQuery(rowEl).before(s);
        rowEl.parentNode.removeChild(rowEl);
        rowEl = this.getRowEl(row);
        siaddclass(rowEl, "si-grid-rowEdit");
        var columns = this["getBottomColumns"]();
        for (var i = 0, l = columns.length; i < l; i++) {
            var column = columns[i]
              , value = row[column.field]
              , cellId = this.getRowColumnId(row, columns[i])
              , cellEl = document.getElementById(cellId);
            if (!cellEl)
                continue;if (typeof column.editor == "string")
                column.editor = eval("(" + column.editor + ")");
            var editorConfig = si.copyTo({}, column.editor);
            editorConfig.id = this.uid + "$" + row._uid + "$" + column._id + "$editor";
            var editor = si.create(editorConfig);
            if (this._beforeCellBeginEdit(row, column, editor))
                if (editor) {
                    siaddclass(cellEl, "si-grid-cellEdit");
                    cellEl.innerHTML = "";
                    cellEl.appendChild(editor.el);
                    siaddclass(editor.el, "si-grid-editor")
                }
        }
        this["doLayout"]()
    }
    ;
    sidatagridcanceleditrow = function(B) {
        if (this["allowCellEdit"])
            return;
        B = this["getRow"](B);
        if (!B || !B._editing)
            return;
        delete B._editing;
        var _ = this.getRowEl(B)
          , D = this["getBottomColumns"]();
        for (var $ = 0, F = D.length; $ < F; $++) {
            var C = D[$]
              , H = this.getRowColumnId(B, D[$])
              , A = document.getElementById(H)
              , E = A.firstChild
              , I = si.get(E);
            if (!I)
                continue;I["destroy"]()
        }
        var G = this._getGridRowStr(B);
        jQuery(_).before(G);
        _.parentNode.removeChild(_);
        this["doLayout"]()
    }
    ;
    sidatagridcommiteditrow = function($) {
        if (this["allowCellEdit"])
            return;
        $ = this["getRow"]($);
        if (!$ || !$._editing)
            return;
        var _ = this["getEditRowData"]($);
        this._idleToUpdate = false;
        this["updateRow"]($, _);
        this._idleToUpdate = true;
        this["cancelEditRow"]($)
    }
    ;
    sidatagridisediting = function() {
        for (var $ = 0, A = this.data.length; $ < A; $++) {
            var _ = this.data[$];
            if (_._editing == true)
                return true
        }
        return false
    }
    ;
    sidatagridiseditingrow = function($) {
        $ = this["getRow"]($);
        if (!$)
            return false;
        return !!$._editing
    }
    ;
    sidatagridisnewrow = function($) {
        return $._state == "added"
    }
    ;
    sidatagridgeteditingrows = function() {
        var A = [];
        for (var $ = 0, B = this.data.length; $ < B; $++) {
            var _ = this.data[$];
            if (_._editing == true)
                A.push(_)
        }
        return A
    }
    ;
    sidatagridgeteditingrow = function() {
        var $ = this["getEditingRows"]();
        return $[0]
    }
    ;
    sidatagridgeteditdata = function(C) {
        var B = [];
        for (var $ = 0, D = this.data.length; $ < D; $++) {
            var _ = this.data[$];
            if (_._editing == true) {
                var A = this["getEditRowData"]($, C);
                A._index = $;
                B.push(A)
            }
        }
        return B
    }
    ;
    sidatagridgeteditrowdata = function(H, K) {
        H = this["getRow"](H);
        if (!H || !H._editing)
            return null ;
        var J = {}
          , C = this["getBottomColumns"]();
        for (var G = 0, D = C.length; G < D; G++) {
            var B = C[G]
              , E = this.getRowColumnId(H, C[G])
              , A = document.getElementById(E)
              , M = null ;
            if (B.type == "checkboxcolumn") {
                var I = B.getCheckBoxEl(H)
                  , _ = I.checked ? B.trueValue : B.falseValue;
                M = this._beforeCellCommitEdit(H, B, _)
            } else {
                var L = A.firstChild
                  , F = si.get(L);
                if (!F)
                    continue;M = this._beforeCellCommitEdit(H, B, null , F)
            }
            si._setMap(B.field, M.value, J);
            if (B.displayField)
                si._setMap(B.displayField, M.text, J)
        }
        J[this.idField] = H[this.idField];
        if (K) {
            var $ = si.copyTo({}, H);
            J = si.copyTo($, J)
        }
        return J
    }
    ;
    sidatagridgetchanges = function(E, G) {
        var C = [];
        if (!E || E == "removed")
            C.addRange(this._removedRows);
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
                        var $ = this._hasOwnProperty(B, D);
                        if ($)
                            A[D] = B[D]
                    }
                    C[_] = A
                }
            }
        return C
    }
    ;
    sidatagridischanged = function() {
        var $ = this["getChanges"]();
        return $.length > 0
    };

    sidatagridupdaterowel = function(_) {
        var A = this
          , B = A._getGridRowStr(_)
          , $ = A.getRowEl(_);
        jQuery($).before(B);
        $.parentNode.removeChild($)
    }
    ;
    sidatagridupdaterow = function(A, B, _) {
        A = this["getRow"](A);
        if (!A || !B)
            return;
        if (typeof B == "string") {
            var $ = {};
            $[B] = _;
            B = $
        }
        var C = this.isNeedUpdate(A, B);
        if (C == false)
            return;
        if (this._idleToUpdate)
            this["_updateRowEl"](A);
        if (A._state == "modified")
            this["fire"]("updaterow", {
                record: A,
                row: A
            });
        if (A == this["getSelected"]())
            this.delayCurrentChanged(A);
        this["_doMargeCells"]();
        this.initSummaryRow();
        this._deferLayout()
    }
    ;
    sidatagriddeleterows = function(_) {
        if (!si.isArray(_))
            return;
        _ = _.clone();
        for (var $ = 0, A = _.length; $ < A; $++)
            this["deleteRow"](_[$])
    }
    ;
    sidatagriddeleterow = function(_) {
        _ = this["getRow"](_);
        if (!_ || _._state == "deleted")
            return;
        if (_._state == "added")
            this["removeRow"](_, true);
        else {
            if (this["isEditingRow"](_))
                this["cancelEditRow"](_);
            _._state = "deleted";
            var $ = this.getRowEl(_);
            siaddclass($, "si-grid-deleteRow");
            this["fire"]("deleterow", {
                record: _,
                row: _
            })
        }
        this.initSummaryRow()
    }
    ;
    sidatagridremoves = function(_, B) {
        if (!si.isArray(_))
            return;
        _ = _.clone();
        for (var $ = 0, A = _.length; $ < A; $++)
            this["removeRow"](_[$], B)
    }
    ;
    sidatagridremoveselected = function() {
        var $ = this["getSelected"]();
        if ($)
            this["removeRow"]($, true)
    }
    ;
    sidatagridremoverow = function(A, H) {
        A = this["getRow"](A);
        if (!A)
            return;
        var D = A == this["getSelected"]()
          , C = this["isSelected"](A)
          , $ = this.data["indexOf"](A);
        this.data.remove(A);
        if (A._state != "added") {
            A._state = "removed";
            this._removedRows.push(A);
            delete this.rowIdFieldMap[A[this._idField]]
        }
        delete this.rowUidMap[A._uid];
        var G = this._getGridRowStr(A)
          , _ = this.getRowEl(A);
        if (_)
            _.parentNode.removeChild(_);
        var F = this.getRowDetailId(A)
          , E = document.getElementById(F);
        if (E)
            E.parentNode.removeChild(E);
        if (C && H) {
            var B = this["getAt"]($);
            if (!B)
                B = this["getAt"]($ - 1);
            this["deselectAll"]();
            this["select"](B)
        }
        this.refreshSelectedInfo();
        this._removeRowError(A);
        this["fire"]("removerow", {
            record: A,
            row: A
        });
        if (D)
            this.delayCurrentChanged(A);
        this.alternateAllRows();
        this._deferLayout();
        this["_doMargeCells"]();
        this.initSummaryRow()
    }
    ;
    sidatagridaddrows = function(A, $) {
        if (!si.isArray(A))
            return;
        A = A.clone();
        for (var _ = 0, B = A.length; _ < B; _++)
            this["addRow"](A[_], $)
    }
    ;
    sidatagridaddrow = function(A, $) {
        if (si.isNull($))
            $ = this.data.length;
        $ = this["indexOf"]($);
        var C = this["getRow"]($);
        this.data.insert($, A);
        if (!A[this.idField]) {
            if (this.autoCreateNewID)
                A[this.idField] = UUID();
            var E = {
                row: A,
                record: A
            };
            this["fire"]("beforeaddrow", E)
        }
        A._state = "added";
        delete this.rowUidMap[A._uid];
        A._uid = _sigridglobalrowid++;
        this.rowUidMap[A._uid] = A;
        var D = this._getGridRowStr(A);
        if (C) {
            var _ = this.getRowEl(C);
            jQuery(_).before(D)
        } else
            si.append(this._bodyInnerEl.firstChild, D);
        this.alternateAllRows();
        this._deferLayout();
        this["fire"]("addrow", {
            record: A,
            row: A
        });
        var B = jQuery(".si-grid-emptyText", this.bodyEl)[0];
        if (B)
            si["removeNode"](B.parentNode);
        this["_doMargeCells"]();
        this.initSummaryRow()
    }
    ;
    sidatagridmoverow = function(B, _) {
        B = this["getRow"](B);
        if (!B)
            return;
        if (_ < 0)
            return;
        if (_ > this.data.length)
            return;
        var D = this["getRow"](_);
        if (B == D)
            return;
        this.data.remove(B);
        var A = this.getRowEl(B);
        if (D) {
            _ = this.data["indexOf"](D);
            this.data.insert(_, B);
            var C = this.getRowEl(D);
            jQuery(C).before(A)
        } else {
            this.data.insert(this.data.length, B);
            var $ = this._bodyInnerEl.firstChild;
            si.append($.firstChild || $, A)
        }
        this.alternateAllRows();
        this._deferLayout();
        this["scrollIntoView"](B);
        this["fire"]("moverow", {
            record: B,
            row: B,
            index: _
        });
        this["_doMargeCells"]()
    }
    ;
    sidatagridmoveup = function(B) {
        if (!si.isArray(B))
            return;
        var C = this;
        B = B.sort(function($, A) {
            var B = C["indexOf"]($)
              , _ = C["indexOf"](A);
            if (B > _)
                return 1;
            return -1
        }
        );
        for (var A = 0, D = B.length; A < D; A++) {
            var _ = B[A]
              , $ = this["indexOf"](_);
            this["moveRow"](_, $ - 1)
        }
    }
    ;
    sidatagridmovedown = function(B) {
        if (!si.isArray(B))
            return;
        var C = this;
        B = B.sort(function($, A) {
            var B = C["indexOf"]($)
              , _ = C["indexOf"](A);
            if (B > _)
                return 1;
            return -1
        }
        );
        B.reverse();
        for (var A = 0, D = B.length; A < D; A++) {
            var _ = B[A]
              , $ = this["indexOf"](_);
            this["moveRow"](_, $ + 2)
        }
    }
    ;
    sidatagridclearrows = function() {
        this.data = [];
        this["doUpdate"]()
    }
    ;
    sidatagridindexof = function($) {
        if (typeof $ == "number")
            return $;
        if (this["isGrouping"]()) {
            var _ = this.getGroupMaps();
            return _.data["indexOf"]($)
        } else
            return this.data["indexOf"]($)
    }
    ;
    sidatagridgetat = function($) {
        if (this["isGrouping"]()) {
            var _ = this.getGroupMaps();
            return _.data[$]
        } else
            return this.data[$]
    }
    ;
    sidatagridgetrow = function($) {
        var _ = typeof $;
        if (_ == "number")
            return this.data[$];
        else if (_ == "object")
            return $;
        else
            return this["getRowById"]($)
    };
    
    sidatagridgetrowbyvalue = function(A) {
        for (var _ = 0, B = this.data.length; _ < B; _++) {
            var $ = this.data[_];
            if ($[this.idField] == A)
                return $
        }
    };
    
    sidatagridgetrowbyid = function($) {
        return this["getRowByValue"]($)
    };
    
    sidatagridgetrowbyuid = function($) {
        return this.rowUidMap[$]
    };
    
    sidatagridfindrows = function(D) {
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
    sidatagridfindrow = function(B) {
        if (B)
            for (var $ = 0, A = this.data.length; $ < A; $++) {
                var _ = this.data[$];
                if (B(_) === true)
                    return _
            }
    }
    ;
    sidatagridsetcollapsegrouponload = function($) {
        this.collapseGroupOnLoad = $
    }
    ;
    sidatagridgetcollapsegrouponload = function() {
        return this.collapseGroupOnLoad
    }
    ;
    sidatagridsetshowgroupsummary = function($) {
        this.showGroupSummary = $
    };
    
    sidatagridgetshowgroupsummary = function() {
        return this.showGroupSummary
    }
    ;
    sidatagridcollapsegroups = function() {
        if (!this._groupMaps)
            return;
        for (var $ = 0, A = this._groupMaps.length; $ < A; $++) {
            var _ = this._groupMaps[$];
            this.collapsegroup(_)
        }
    }
    ;
    sidatagridexpandgroups = function() {
        if (!this._groupMaps)
            return;
        for (var $ = 0, A = this._groupMaps.length; $ < A; $++) {
            var _ = this._groupMaps[$];
            this.expandgroup(_)
        }
    }
    ;
    sidatagridgroupby = function($, _) {
        if (!$)
            return;
        this._groupField = $;
        if (typeof _ == "string")
            _ = _.toLowerCase();
        this._groupDir = _;
        this._groupMaps = null ;
        this["doUpdate"]()
    }
    ;
    sidatagridcleargroup = function() {
        this._groupField = "";
        this._groupDir = "";
        this._groupMaps = null ;
        this["doUpdate"]()
    }
    ;
    sidatagridgetgroupfield = function() {
        return this._groupField
    }
    ;
    sidatagridgetgroupdir = function() {
        return this._groupDir
    }
    ;
    sidatagridisgrouping = function() {
        return this._groupField != ""
    }
   
    ;
    sidatagridondrawgroupheader = function(_, $) {
        this["on"]("drawgroupheader", _, $)
    }
    ;
    sidatagridondrawgroupsummary = function(_, $) {
        this["on"]("drawgroupsummary", _, $)
    }
    ;
    sidatagridmergecolumns = function(F) {
        if (F && si.isArray(F) == false)
            F = [F];
        var $ = this
          , A = $["getBottomColumns"]();
        if (!F)
            F = A;
        var D = $["getData"]().clone();
        D.push({});
        var B = [];
        for (var _ = 0, G = F.length; _ < G; _++) {
            var C = F[_];
            C = $["getColumn"](C);
            if (!C)
                continue;var H = E(C);
            B.addRange(H)
        }
        $["mergeCells"](B);
        function E(F) {
            if (!F.field)
                return;
            var K = []
              , I = -1
              , G = 1
              , J = A["indexOf"](F)
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
    sidatagridmergecells = function(D) {
        if (!si.isArray(D))
            return;
        this._margedCells = D;
        this["_doMargeCells"]();
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
    };

    sidatagridmargecells = function($) {
        this["mergeCells"]($)
    }
    ;
    sidatagridiscellvisible = function(_, A) {
        if (!this._mergedCellMaps)
            return true;
        var $ = this._mergedCellMaps[_ + ":" + A];
        return !($ === true)
    }
    ;
    sidatagriddomargecells = function() {
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
                var E = this.getRowColumnSpanArrayInfo(B.rowIndex, B.columnIndex, B.rowSpan, B.colSpan);
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
        $["call"](this)
    };
    
    sidatagridsetallowunselect = function($) {
        this.allowUnselect = $
    }
    ;
    sidatagridgetallowunselect = function($) {
        return this.allowUnselect
    }
    ;
    sidatagridsetallowrowselect = function($) {
        this["allowRowSelect"] = $
    }
    ;
    sidatagridgetallowrowselect = function($) {
        return this["allowRowSelect"]
    }
    ;
    sidatagridsetmultiselect = function($) {
        if (this["multiSelect"] != $) {
            this["multiSelect"] = $;
            this.updateHeader()
        }
    };

    sidatagridgetmultiselect = function() {
        return this["multiSelect"]
    }
    ;
    sidatagridgetselectallcheckstate = function() {
        var B = this["getData"]()
          , C = true;
        if (B.length == 0) {
            C = false;
            return C
        }
        var A = 0;
        for (var _ = 0, D = B.length; _ < D; _++) {
            var $ = B[_];
            if (this["isSelected"]($))
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
    sidatagridisselected = function($) {
        $ = this["getRow"]($);
        if (!$)
            return false;
        return !!this.selectedsMap[$._uid]
    }
    ;
    sidatagridgetselecteds = function() {
        this.refreshSelectedInfo();
        return this.allselecteds.clone()
    }
    ;
    sidatagridsetcurrent = function($) {
        this["setSelected"]($)
    }
    ;
    sidatagridgetcrrent = function() {
        return this["getSelected"]()
    }
    ;
    sidatagridgetselected = function() {
        this.refreshSelectedInfo();
        return this.selectedEl
    }
    ;
    sidatagridscrollintoview = function(A, B) {
        try {
            if (B) {
                var _ = this.getCellEl(A, B);
                si["scrollIntoView"](_, this.bodyEl, true)
            } else {
                var $ = this.getRowEl(A);
                si["scrollIntoView"]($, this.bodyEl, false)
            }
        } catch (C) {}
    }
    ;
	sidatagridgetheaderscrollel=function () {return this._headerInnerEl; }
    sidatagridsetselected = function($) {
        if ($)
            this["select"]($);
        else
            this["deselect"](this.selectedEl);
        if (this.selectedEl)
            this["scrollIntoView"](this.selectedEl);
        this.clearHoverCls()
    }
    ;
    sidatagridselect = function($) {
        if (this["multiSelect"] == false)
            this["deselectAll"]();
        $ = this["getRow"]($);
        if (!$)
            return;
        this.selectedEl = $;
        this["selects"]([$])
    }
    ;
    sidatagriddeselect = function($) {
        $ = this["getRow"]($);
        if (!$)
            return;
        this["deselects"]([$])
    }
    ;
	sidatagridgetfilterrowheight=function () {return this["showFilterRow"] ? sigetheight(this.filterRowEl) :0; }
    sidatagridselectall = function() {
        var $ = this.data.clone();
        this["selects"]($)
    }
    ;
    sidatagriddeselectall = function() {
        var $ = this.allselecteds.clone();
        this.selectedEl = null ;
        this["deselects"]($)
    }
    ;
    sidatagridclearselect = function() {
        this["deselectAll"]()
    }
    ;
    sidatagridselects = function(C) {
        if (!C || C.length == 0)
            return;
        var E = new Date();
        C = C.clone();
        for (var A = C.length - 1; A >= 0; A--) {
            var _ = this["getRow"](C[A]);
            if (_)
                C[A] = _;
            else
                C.removeAt(A)
        }
        var H = {}
          , D = this["getData"]();
        for (var A = 0, G = D.length; A < G; A++) {
            var $ = this["getRow"](D[A])
              , I = $[this.idField];
            if (I)
                H[$[this.idField]] = $
        }
        var F = [];
        for (A = 0,
        G = C.length; A < G; A++) {
            var _ = C[A]
              , B = this.rowUidMap[_._uid];
            if (!B)
                _ = H[_[this.idField]];
            if (_)
                F.push(_)
        }
        C = F;
        C = C.clone();
        this.updateRowCls(C, true);
        for (A = 0,
        G = C.length; A < G; A++) {
            _ = C[A];
            if (!this["isSelected"](_)) {
                this.allselecteds.push(_);
                this.selectedsMap[_._uid] = _
            }
        }
        this.beforeSelectionChanged()
    }
    ;
    sidatagriddeselects = function(A) {
        if (!A)
            A = [];
        A = A.clone();
        for (var _ = A.length - 1; _ >= 0; _--) {
            var $ = this["getRow"](A[_]);
            if ($)
                A[_] = $;
            else
                A.removeAt(_)
        }
        A = A.clone();
        this.updateRowCls(A, false);
        for (_ = A.length - 1; _ >= 0; _--) {
            $ = A[_];
            if (this["isSelected"]($)) {
                this.allselecteds.remove($);
                delete this.selectedsMap[$._uid]
            }
        }
        if (A["indexOf"](this.selectedEl) != -1)
            this.selectedEl = null ;
        this.beforeSelectionChanged()
    }
    ;
	sidatagridgetautoload=function (value) {return this.autoLoad; };
    sidatagridaddrowcls = function(_, A) {
        var $ = this.getRowEl(_);
        if ($)
            siaddclass($, A)
    }
    ;
    sidatagridremoverowcls = function(_, A) {
        var $ = this.getRowEl(_);
        if ($)
            siremoveclass($, A)
    };

    sidatagridtryfocus = function(B) {
        try {
            var A = B.target.tagName.toLowerCase();
            if (A == "input" || A == "textarea" || A == "select")
                return;
            if (siisAncestor(this.filterRowEl, B.target) || siisAncestor(this.summaryRowEl, B.target) || siisAncestor(this.footerEl, B.target) || sifindAncestor(B.target, "si-grid-rowEdit") || sifindAncestor(B.target, "si-grid-detailRow"))
                ;
            else {
                var $ = this;
                $["focus"]()
            }
        } catch (_) {}
    }
    
	sidatagridgetsummarycellel=function (column) {column = this["getColumn"](column); if (!column) return null; return sigetelementbyid(this.getSummaryColumnId(column),this.el); };
    
    siondrawsummarycell = function(A, B) {
        var D = {
            result: this["getResultObject"](),
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
            var C = si.summaryTypes[B.summaryType];
            if (C)
                D.value = C(A, B.field)
        }
        var $ = D.value;
        D.cellHtml = D.value;
        if (D.value && parseInt(D.value) != D.value && D.value.toFixed) {
            decimalPlaces = parseInt(B["decimalPlaces"]);
            if (isNaN(decimalPlaces))
                decimalPlaces = 2;
            D.cellHtml = parseFloat(D.value.toFixed(decimalPlaces))
        }
        if (B.dateFormat)
            if (si.isDate(D.value))
                D.cellHtml = si.formatDate($, B.dateFormat);
            else
                D.cellHtml = $;
        if (B.dataType == "currency")
            D.cellHtml = si.formatCurrency(D.cellHtml, B.currencyUnit);
        var _ = B.summaryRenderer;
        if (_) {
            C = typeof _ == "function" ? _ : window[_];
            if (C)
                D.cellHtml = C["call"](B, D)
        }
        B.summaryValue = D.value;
        this["fire"]("drawsummarycell", D);
        if (D.cellHtml === null  || D.cellHtml === undefined || D.cellHtml === "")
            D.cellHtml = "&nbsp;";
        return D
    };

    sidatagridoncellmousedown = function(_) {
        var $ = _.record;
        this["fire"]("cellmousedown", _)
    }
    ;
    sidatagridonrowmouseout = function($) {
        if (!this.enabled)
            return;
        if (siisAncestor(this.el, $.target))
            return
    }
    ;
    sidatagridonrowmousemove = function(_) {
        record = _.record;
        if (!this.enabled || record.enabled === false || this["enableHotTrack"] == false)
            return;
        this["fire"]("rowmousemove", _);
        var $ = this;
        $.addHoverCls(record)
    }
    ;
    sidatagridonheadercellclick = function(A) {
        A.sender = this;
        var $ = A.column;
        if (!sihasclass(A.htmlEvent.target, "si-grid-splitter")) {
            if (this["allowSortColumn"] && this["isEditing"]() == false)
                if (!$.columns || $.columns.length == 0)
                    if ($.field && $.allowSort !== false) {
                        var _ = "asc";
                        if (this.sortField == $.field)
                            _ = this.sortOrder == "asc" ? "desc" : "asc";
                        this["sortBy"]($.field, _)
                    }
            this["fire"]("headercellclick", A)
        }
    }
    
    ;
    sidatagridsetheadercontextmenu = function($) {
        var _ = this._initContextMenu($);
        if (!_)
            return;
        if (this.headerContextMenu !== _) {
            this.headerContextMenu = _;
            this.headerContextMenu.owner = this;
            siBindEvent(this.el, "contextmenu", this.oncontrolcontextmenu, this)
        }
    }
    ;
    sidatagridgetheadercontextmenu = function() {
        return this.headerContextMenu
    }
    ;
    sicreatecolumnsmenu = function() {
        if (!this.columnsMenu)
            this.columnsMenu = si.create({
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
    };
    
    sidatagridonrowdblclick = function(_, $) {
        this["on"]("rowdblclick", _, $)
    }
    ;
    sidatagridonrowclick = function(_, $) {
        this["on"]("rowclick", _, $)
    }
    ;
    sidatagridonrowmousedown = function(_, $) {
        this["on"]("rowmousedown", _, $)
    }
    ;
    sidatagridonrowcontextmenu = function(_, $) {
        this["on"]("rowcontextmenu", _, $)
    }
    ;
    sidatagridoncellclick = function(_, $) {
        this["on"]("cellclick", _, $)
    }
    ;
    sidagatridoncellmousedown = function(_, $) {
        this["on"]("cellmousedown", _, $)
    }
    ;
    sidatagridoncellcontextmenu = function(_, $) {
        this["on"]("cellcontextmenu", _, $)
    }
    ;
    sidatagridonbeforeload = function(_, $) {
        this["on"]("beforeload", _, $)
    }
    ;
    sidatagridonload = function(_, $) {
        this["on"]("load", _, $)
    }
    ;
    sidatagridonloaderror = function(_, $) {
        this["on"]("loaderror", _, $)
    }
    ;
    sidatagridonpreload = function(_, $) {
        this["on"]("preload", _, $)
    }
    ;
    sidatagridondrawcell = function(_, $) {
        this["on"]("drawcell", _, $)
    }
    ;
    sidatagridoncellbeginedit = function(_, $) {
        this["on"]("cellbeginedit", _, $)
    }
    ;
    sidatagridgetattrs = function(el) {
        var attrs = si.DataGrid["superclass"]["getAttrs"]["call"](this, el)
          , cs = si["getChildNodes"](el);
        for (var i = 0, l = cs.length; i < l; i++) {
            var node = cs[i]
              , property = jQuery(node).attr("property");
            if (!property)
                continue;property = property.toLowerCase();
            if (property == "columns")
                attrs.columns = si.createColumns(node);
            else if (property == "data")
                attrs.data = node.innerHTML
        }
        si["_ParseString"](el, attrs, ["url", "sizeList", "bodyCls", "bodyStyle", "footerCls", "footerStyle", "pagerCls", "pagerStyle", "onheadercellclick", "onheadercellmousedown", "onheadercellcontextmenu", "onrowdblclick", "onrowclick", "onrowmousedown", "onrowcontextmenu", "oncellclick", "oncellmousedown", "oncellcontextmenu", "onbeforeload", "onpreload", "onloaderror", "onload", "ondrawcell", "oncellbeginedit", "onselectionchanged", "onshowrowdetail", "onhiderowdetail", "idField", "valueField", "ajaxMethod", "ondrawgroup", "pager", "oncellcommitedit", "oncellendedit", "headerContextMenu", "loadingMsg", "emptyText", "cellEditAction", "sortMode", "oncellvalidation", "onsort", "pageIndexField", "pageSizeField", "sortFieldField", "sortOrderField", "totalField", "dataField", "ondrawsummarycell", "ondrawgroupsummarycell", "onresize", "oncolumnschanged"]);
        si["_ParseBool"](el, attrs, ["showHeader", "showPager", "showFooter", "showTop", "allowSortColumn", "allowMoveColumn", "allowResizeColumn", "showHGridLines", "showVGridLines", "showFilterRow", "showSummaryRow", "showFooter", "showTop", "fitColumns", "showLoading", "multiSelect", "allowAlternating", "resultAsData", "allowRowSelect", "allowUnselect", "enableHotTrack", "showPageIndex", "showPageSize", "showTotalCount", "checkSelectOnLoad", "allowResize", "autoLoad", "autoHideRowDetail", "allowCellSelect", "allowCellEdit", "allowCellWrap", "allowHeaderWrap", "selectOnLoad", "virtualScroll", "collapseGroupOnLoad", "showGroupSummary", "showEmptyText", "allowCellValid", "showModified", "showColumnsMenu", "showPageInfo", "showReloadButton", "showNewRow", "editNextOnEnterKey", "createOnEnter"]);
        si["_ParseInt"](el, attrs, ["columnWidth", "frozenStartColumn", "frozenEndColumn", "pageIndex", "pageSize"]);
        if (typeof attrs["sizeList"] == "string")
            attrs["sizeList"] = eval(attrs["sizeList"]);
        if (!attrs["idField"] && attrs["valueField"])
            attrs["idField"] = attrs["valueField"];
        return attrs
    };

    si = {
		//add six properties to diy validate styles
		showNotyAlert: false,
		showFiledsNotyAlert: false,
		isValidatingFields: false,
		notyErrorType: 'information',
		noty: function(text,type){
			si.alert(text,type || si.notyErrorType);
		},
		getLabelText: function(A){
			return "";
		},
		// diy end --
        components: {},
        uids: {},
        ux: {},
        isReady: false,
        byClass: function(_, $) {
            if (typeof $ == "string")
                $ = sigetelementbyid($);
            return jQuery("." + _, $)[0]
        },
        getComponents: function() {
            var _ = [];
            for (var A in si.components) {
                var $ = si.components[A];
                _.push($)
            }
            return _
        },
        get: function(_) {
            if (!_)
                return null ;
            if (si.isControl(_))
                return _;
            if (typeof _ == "string")
                if (_.charAt(0) == "#")
                    _ = _.substr(1);
            if (typeof _ == "string")
                return si.components[_];
            else {
                var $ = si.uids[_.uid];
                if ($ && $.el == _)
                    return $
            }
            return null 
        },
        getbyUID: function($) {
            return si.uids[$]
        },
        findControls: function(E, B) {
            if (!E)
                return [];
            B = B || si;
            var $ = []
              , D = si.uids;
            for (var A in D) {
                var _ = D[A]
                  , C = E["call"](B, _);
                if (C === true || C === 1) {
                    $.push(_);
                    if (C === 1)
                        break
                }
            }
            return $
        },
        getChildControls: function(B) {
            var A = si.get(B);
            if (!A)
                return [];
            var _ = B.el ? B.el : B
              , $ = si.findControls(function($) {
                if (!$.el || B == $)
                    return false;
                if (siisAncestor(_, $.el) && $["within"])
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
              , $ = si.findControls(function($) {
                if (!$.el || !$.name)
                    return false;
                if (siisAncestor(C, $.el))
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
            var B = si.isControl(_)
              , A = _;
            if (_ && B)
                _ = _.el;
            _ = sigetelementbyid(_);
            _ = _ || document.body;
            var $ = this.findControls(function($) {
                if (!$.el)
                    return false;
                if ($.name == C && siisAncestor(_, $.el))
                    return 1;
                return false
            }
            , this);
            if (B && $.length == 0 && A && A["getbyName"])
                return A["getbyName"](C);
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
            delete si.components[$.id];
            delete si.uids[$.uid]
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
        idPre: "si-",
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
                    if (si.isNull($[_]))
                        $[_] = A[_];
            return $
        },
        //绑定元素和事件方法，利用apply实现方法和元素的耦合，这样定义是可以分开定义
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
                if ((si.isNull($) || $ == "") && (si.isNull(_) || _ == ""))
                    return true;
            if ($ && _ && $.getFullYear && _.getFullYear)
                return $["getTime"]() === _["getTime"]();
            if (typeof $ == "object" && typeof _ == "object")
                return $ === _;
            return String($) === String(_)
        },
        forEach: function(E, D, B) {
            var _ = E.clone();
            for (var A = 0, C = _.length; A < C; A++) {
                var $ = _[A];
                if (D["call"](B, $, A, E) === false)
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
    if (typeof si_debugger == "undefined")
        si_debugger = true;
    siRegClass = function(A, _) {
        _ = _.toLowerCase();
        if (!si.classes[_]) {
            si.classes[_] = A;
            A["prototype"].type = _
        }
        var $ = A["prototype"].uiCls;
        if (!si.isNull($) && !si.uiClasses[$])
            si.uiClasses[$] = A
    }
    ;
    siextend = function(E, A, $) {
        if (typeof A != "function")
            return this;
        var D = E
          , C = D.prototype
          , _ = A["prototype"];
        if (D["superclass"] == _)
            return;
        D["superclass"] = _;
        D["superclass"]["constructor"] = A;
        for (var B in _)
            C[B] = _[B];
        if ($)
            for (B in $)
                C[B] = $[B];
        return D
    }
    ;
    si.copyTo(si, {
        extend: siextend,
        regClass: siRegClass,
        debug: false
    });
    si.namespace = function(A) {
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
    _eventBindQueue = [];
    siEventTimer = function(_, $) {
    	//将绑定事件的任务 装载到队列
        _eventBindQueue.push([_, $]);
        //定时任务触发
        if (!si._EventTimer)
            si._EventTimer = setTimeout(function() {
                _doEventBindFromQueue()
            }
            , 50)
    };
    
    _doEventBindFromQueue = function() {
        for (var $ = 0, _ = _eventBindQueue.length; $ < _; $++) {
            var A = _eventBindQueue[$];
            A[0]["call"](A[1])
        }
        _eventBindQueue = [];
        si._EventTimer = null 
    };
    
    _getFunctionByFunctionName = function(C) {
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
    si._getMap = function(name, obj) {
        if (!name)
            return null ;
        if (name["indexOf"](".") == -1 && name["indexOf"]("[") == -1)
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
    si._setMap = function(H, A, B) {
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
                if (H["indexOf"]("]") == -1)
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
            if (H["indexOf"]("]") == -1) {
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
    si.getAndCreate = function($) {
        if (!$)
            return null ;
        if (typeof $ == "string")
            return si.components[$];
        if (typeof $ == "object")
            if (si.isControl($))
                return $;
            else if (si.isElement($))
                return si.uids[$.uid];
            else
                return si.create($);
        return null 
    }
    ;
    si.create = function($) {
        if (!$)
            return null ;
        if (si.get($.id) === $)
            return $;
        var _ = this.getClass($.type);
        if (!_)
            return null ;
        var A = new _();
        A["set"]($);
        return A
    };
    
   
    si.Component = function() {
        this.handles = {};
        this.uid = si.newId(this.clsPrefix);
        this._id = this.uid;
        if (!this.id)
            this.id = this.uid;
        si.reg(this)
    }
    ;
    si.Component["prototype"] = {
        isControl: true,
        id: null ,
        clsPrefix: "si-",
        idNotNull: false,
        estate: true
    };
    siComponentPrototype = si.Component["prototype"];
    siComponentPrototype["destroy"] = function() {
        si["unreg"](this);
        this["fire"]("destroy")
    };
    siComponentPrototype["getId"] = function() {
        return this.id
    };
    siComponentPrototype["setId"] = function($) {
        if (!$)
            throw new Error("component id can not be null");
        if (this.idNotNull)
            throw new Error("id can set only once");
        si["unreg"](this);
        this.id = $;
        if (this.el)
            this.el.id = $;
        if (this.textEl)
            this.textEl.id = $ + "$text";
        if (this.inputEl)
            this.inputEl.id = $ + "$value";
        this.idNotNull = true;
        si.reg(this)
    };
    siComponentPrototype["findListener"] = function(A, E, B) {
        A = A.toLowerCase();
        B = B || this;
        var _ = this.handles[A];
        if (_)
            for (var $ = 0, D = _.length; $ < D; $++) {
                var C = _[$];
                if (C[0] === E && C[1] === B)
                    return C
            }
    };
    siComponentPrototype["un"] = function($, C, _) {
        if (typeof C != "function")
            return false;
        $ = $.toLowerCase();
        var A = this.handles[$];
        if (A) {
            _ = _ || this;
            var B = this["findListener"]($, C, _);
            if (B)
                A.remove(B)
        }
        return this
    };
    siComponentPrototype["on"] = function(type, fn, scope) {
        if (typeof fn == "string") {
            var f = _getFunctionByFunctionName(fn);
            if (!f) {
                var id = si.newId("__str_");
                window[id] = fn;
                eval("fn = function(e){var s = " + id + ";var fn = _getFunctionByFunctionName(s); if(fn) {fn[\"call\"](this,e)}else{eval(s);}}")
            } else
                fn = f
        }
        if (typeof fn != "function" || !type)
            return false;
        type = type.toLowerCase();
        var event = this.handles[type];
        if (!event)
            event = this.handles[type] = [];
        scope = scope || this;
        if (!this["findListener"](type, fn, scope))
            event.push([fn, scope]);
        return this
    };
    siComponentPrototype["fire"] = function(A, B) {
        if (this.estate == false)
            return;
        A = A.toLowerCase();
        var _ = this.handles[A];
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
    };
    siComponentPrototype["set"] = function(A) {
        if (typeof A == "string")
            return this;
        var D = this._componentLock;
        this._componentLock = false;
        var B = A["renderTo"] || A["render"];
        delete A["renderTo"];
        delete A["render"];
        for (var $ in A)
            if ($.toLowerCase()["indexOf"]("on") == 0) {
                var F = A[$];
                this["on"]($.substring(2, $.length).toLowerCase(), F);
                delete A[$]
            }
        for ($ in A) {
            var E = A[$]
              , C = "set" + $.charAt(0).toUpperCase() + $.substring(1, $.length)
              , _ = this[C];
            if (_)
                _["call"](this, E);
            else
                this[$] = E
        }
        if (B && this["render"])
            this["render"](B);
        this._componentLock = D;
        if (this["doLayout"])
            this["doLayout"]();
        return this
    };
    si.Control = function() {
        si.Control["superclass"]["constructor"]["call"](this);
        this["_create"]();
        this.el.uid = this.uid;
        this["_initEvents"]();
        if (this._clearBorder) {
            this.el.style.borderWidth = "0";
            this.el.style.padding = "0px"
        }
        this["addCls"](this.uiCls);
        this["setWidth"](this.width);
        this["setHeight"](this.height);
        this.el.style.display = this.visible ? this._display : "none"
    }
    ;
    siextend(si.Control, si.Component, {
        jsName: null ,
        width: "",
        height: "",
        visible: true,
        readOnly: false,
        enabled: true,
        tooltip: "",
        _readonlyCls: "si-readonly",
        _disabledCls: "si-disabled",
        name: "",
        _clearBorder: true,
        _display: "",
        allowUpdate: true,
        allowAnim: true,
        _maskLoadingCls: "si-mask-loading",
        loadingMsg: "",
        contextMenu: null ,
        dataField: ""
    });
    siControlPrototype = si.Control["prototype"];
    siControlPrototype["getAttrs"] = function(el) {
    var attrs = {}
      , cls = el.className;
    if (cls)
        attrs.cls = cls;
    if (el.value)
        attrs.value = el.value;
    si["_ParseString"](el, attrs, ["id", "name", "width", "height", "borderStyle", "value", "defaultValue", "contextMenu", "tooltip", "ondestroy", "data-options", "dataField"]);
    si["_ParseBool"](el, attrs, ["visible", "enabled", "readOnly"]);
    if (el["readOnly"] && el["readOnly"] != "false")
        attrs["readOnly"] = true;
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
    if (this["borderStyle"])
        if (attrs["borderStyle"])
            attrs["borderStyle"] = this["borderStyle"] + ";" + attrs["borderStyle"];
        else
            attrs["borderStyle"] = this["borderStyle"];
    var ts = si._attrs;
    if (ts)
        for (var i = 0, l = ts.length; i < l; i++) {
            var t = ts[i]
              , name = t[0]
              , type = t[1];
            if (!type)
                type = "string";
            if (type == "string")
                si["_ParseString"](el, attrs, [name]);
            else if (type == "bool")
                si["_ParseBool"](el, attrs, [name]);
            else if (type == "int")
                si["_ParseInt"](el, attrs, [name])
        }
    var options = attrs["data-options"];
    if (options) {
        options = eval("(" + options + ")");
        if (options)
            si.copyTo(attrs, options)
    }
    return attrs
};
    siControlPrototype["getDataField"] = function() {
    return this.dataField
};
    siControlPrototype["setDataField"] = function($) {
    this.dataField = $
};
    siControlPrototype._callBackFunction = function($) {};
    siControlPrototype["getValue"] = function() {
    return this.value
};
    siControlPrototype["setValue"] = function($) {
    this.value = $
};
    siControlPrototype["getDefaultValue"] = function() {
    return this["defaultValue"]
};
    siControlPrototype["setDefaultValue"] = function($) {
    this["defaultValue"] = $
};
    siControlPrototype["getContextMenu"] = function() {
    return this["contextMenu"]
};
    siControlPrototype["setContextMenu"] = function($) {
    var _ = this._initContextMenu($);
    if (!_)
        return;
    if (this["contextMenu"] !== _) {
        this["contextMenu"] = _;
        this["contextMenu"].owner = this;
        siBindEvent(this.el, "contextmenu", this.oncontrolcontextmenu, this)
    }
};
    siControlPrototype.oncontrolcontextmenu = function(_) {
    var $ = {
        popupEl: this.el,
        htmlEvent: _,
        cancel: false
    };
    this["contextMenu"]["fire"]("BeforeOpen", $);
    if ($.cancel == true)
        return;
    this["contextMenu"]["fire"]("opening", $);
    if ($.cancel == true)
        return;
    this["contextMenu"]["showAtPos"](_.pageX, _.pageY);
    this["contextMenu"]["fire"]("Open", $);
    return false
};
    siControlPrototype._initContextMenu = function($) {
    var _ = $;
    if (typeof $ == "string") {
        _ = si.get($);
        if (!_) {
            si.analyze($);
            _ = si.get($)
        }
    } else if (si.isArray($))
        _ = {
            type: "menu",
            items: $
        };
    else if (!si.isControl($))
        _ = si.create($);
    return _
};
    siControlPrototype["getLoadingMsg"] = function() {
    return this.loadingMsg
};
    siControlPrototype["setLoadingMsg"] = function($) {
    this.loadingMsg = $
};
    siControlPrototype["loading"] = function($) {
    this["mask"]($ || this.loadingMsg)
};
    siControlPrototype["unmask"] = function() {
    si["unmask"](this._getBodyEl())
};
    siControlPrototype["mask"] = function($) {
    if (typeof $ == "string")
        $ = {
            html: $
        };
    $ = $ || {};
    $.el = this._getBodyEl();
    if (!$.cls)
        $.cls = this._maskLoadingCls;
    si["mask"]($)
};
    siControlPrototype._getBodyEl = function() {
    return this.el
};
    siControlPrototype["getAllowAnim"] = function() {
    return this.allowAnim
};
    siControlPrototype["setAllowAnim"] = function($) {
    this.allowAnim = $
};
    siControlPrototype["blur"] = function() {
    try {
        var $ = this;
        $.el["blur"]()
    } catch (_) {}
};
    siControlPrototype["focus"] = function() {
    try {
        var $ = this;
        $.el["focus"]()
    } catch (_) {}
};
    siControlPrototype["destroy"] = function(_) {
    this["_destroyChildren"](_);
    if (this.el) {
        si["clearEvent"](this.el);
        if (_ !== false) {
            var $ = this.el.parentNode;
            if ($)
                $.removeChild(this.el)
        }
    }
    this.borderEl = null ;
    this.el = null ;
    si["unreg"](this);
    this["fire"]("destroy")
};
    siControlPrototype["_destroyChildren"] = function(B) {
    if (this.el) {
        var A = si.getChildControls(this);
        for (var $ = 0, C = A.length; $ < C; $++) {
            var _ = A[$];
            _["destroy"](B)
        }
    }
};
    siControlPrototype["layoutChanged"] = function() {
    if (this["canLayout"]() == false)
        return;
    this["doLayout"]()
};
    siControlPrototype["doLayout"] = function() {};
    siControlPrototype["canLayout"] = function() {
    if (this._componentLock == false)
        return false;
    return this["isDisplay"]()
};
    siControlPrototype["doUpdate"] = function() {};
    siControlPrototype["endUpdate"] = function() {
    this.allowUpdate = true;
    this["doUpdate"]()
};
    siControlPrototype["beginUpdate"] = function() {
    this.allowUpdate = false
};
    siControlPrototype["isDisplay"] = function() {
    if (isWindowDisplay == false)
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
};
    siControlPrototype["hide"] = function() {
    this["setVisible"](false)
};
    siControlPrototype["show"] = function() {
    this["setVisible"](true)
};
    siControlPrototype["getVisible"] = function() {
    return this.visible
};
    siControlPrototype["setVisible"] = function($) {
    this.visible = $;
    if (this.el) {
        this.el.style.display = $ ? this._display : "none";
        this["doLayout"]()
    }
};
    siControlPrototype["disable"] = function() {
    this["setEnabled"](false)
};
    siControlPrototype["enable"] = function() {
    this["setEnabled"](true)
};
    siControlPrototype["getEnabled"] = function() {
    return this.enabled
};
    siControlPrototype["setEnabled"] = function($) {
    this.enabled = $;
    if (this.enabled)
        this["removeCls"](this._disabledCls);
    else
        this["addCls"](this._disabledCls);
    this._afterSetReadonlyDisabledAllowInput()
};
    siControlPrototype["isReadOnly"] = function() {
    if (this["readOnly"] || !this.enabled)
        return true;
    var $ = this["getParent"]();
    if ($)
        return $["isReadOnly"]();
    return false
};
    siControlPrototype["getParent"] = function(A) {
    var $ = document
      , B = this.el.parentNode;
    while (B != $ && B != null ) {
        var _ = si.get(B);
        if (_) {
            if (!si.isControl(_))
                return null ;
            if (!A || _.uiCls == A)
                return _
        }
        B = B.parentNode
    }
    return null 
};
    siControlPrototype["getReadOnly"] =  function() {
    return this["readOnly"]
};
    siControlPrototype["setReadOnly"] = function($) {
    this["readOnly"] = $;
    this._afterSetReadonlyDisabledAllowInput()
};
    siControlPrototype._afterSetReadonlyDisabledAllowInput = function() {
    if (this["readOnly"])
        this["addCls"](this._readonlyCls);
    else
        this["removeCls"](this._readonlyCls)
};
    siControlPrototype["removeCls"] = function($) {
    siremoveclass(this.el, $)
};
    siControlPrototype["addCls"] = function($) {
    siaddclass(this.el, $)
};
    siControlPrototype["getCls"] = function() {
    return this.cls
};
    siControlPrototype["setCls"] = function($) {
    this["addCls"]($)
};
    siControlPrototype["getStyle"] = function() {
    return this.style
};
    siControlPrototype["setStyle"] = function($) {
    this.style = $;
    sisetstyle(this.el, $);
    if (this._clearBorder)
        this.el.style.borderWidth = "0";
    this.width = this.el.style.width;
    this.height = this.el.style.height;
    this["_sizeChaned"]()
};
    siControlPrototype["getBorderStyle"] = function() {
    return this["borderStyle"]
};
    siControlPrototype["setBorderStyle"] = function($) {
    var _ = this.borderEl || this.el;
    sisetstyle(_, $);
    this["doLayout"]()
};
    siControlPrototype["getBox"] = function() {
    return sigetbox(this.el)
};
    siControlPrototype["getHeight"] = function(_) {
    var $ = _ ? jQuery(this.el).height() : jQuery(this.el).outerHeight();
    if (_ && this.borderEl) {
        var A = sigetborders(this.borderEl);
        $ = $ - A.top - A.bottom
    }
    return $
};
    siControlPrototype["setHeight"] = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.height = $;
    this.el.style.height = $;
    this["_sizeChaned"]()
};
    siControlPrototype["getWidth"] = function(_) {
    var $ = _ ? jQuery(this.el).width() : jQuery(this.el).outerWidth();
    if (_ && this.borderEl) {
        var A = sigetborders(this.borderEl);
        $ = $ - A.left - A.right
    }
    return $
};
    siControlPrototype["setWidth"] = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.width = $;
    this.el.style.width = $;
    this["_sizeChaned"]()
};
    siControlPrototype["_sizeChaned"] = function() {
    this["doLayout"]()
};
    siControlPrototype["getTooltip"] = function() {
    return this.tooltip
};
    siControlPrototype["setTooltip"] = function($) {
    this.tooltip = $;
    this.el.title = $
};
    siControlPrototype["getJsName"] = function() {
    return this["jsName"]
};
    siControlPrototype["setJsName"] = function($) {
    this["jsName"] = $;
    window[$] = this
};
    siControlPrototype["getEl"] = function() {
    return this.el
};
    siControlPrototype["render"] = function(_, $) {
    if (typeof _ === "string")
        if (_ == "#body")
            _ = document.body;
        else
            _ = sigetelementbyid(_);
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
    this["doLayout"]();
    this["fire"]("render")
};
    siControlPrototype["isRender"] = function($) {
    return !!(this.el && this.el.parentNode && this.el.parentNode.tagName)
};
    siControlPrototype["isFixedSize"] = function() {
    var $ = this.width
      , _ = this.height;
    if (parseInt($) + "px" == $ && parseInt(_) + "px" == _)
        return true;
    return false
};
    siControlPrototype["isAutoWidth"] = function() {
    var $ = this.el.style.width;
    return $ == "auto" || $ == ""
};
    siControlPrototype["isAutoHeight"] = function() {
    var $ = this.el.style.height;
    return $ == "auto" || $ == ""
};
    siControlPrototype["getName"] = function() {
    return this.name
};
    siControlPrototype["setName"] = function($) {
    this.name = $
};
    siControlPrototype["within"] = function($) {
    if (siisAncestor(this.el, $.target))
        return true;
    return false
};
    siControlPrototype["_initEvents"] = function() {};
    siControlPrototype["_create"] = function() {
    this.el = document.createElement("div")
};
    si._attrs = null ;
    si.regHtmlAttr = function(_, $) {
        if (!_)
            return;
        if (!$)
            $ = "string";
        if (!si._attrs)
            si._attrs = [];
        si._attrs.push([_, $])
    }
    ;
    __si_setControls = function($, B, C) {
        B = B || this.contentEl;
        C = C || this;
        if (!$)
            $ = [];
        if (!si.isArray($))
            $ = [$];
        for (var _ = 0, D = $.length; _ < D; _++) {
            var A = $[_];
            if (typeof A == "string") {
                if (A["indexOf"]("#") == 0)
                    A = sigetelementbyid(A)
            } else if (si.isElement(A))
                ;
            else {
                A = si.getAndCreate(A);
                A = A.el
            }
            if (!A)
                continue;si.append(B, A)
        }
        si.analyze(B);
        C["doLayout"]();
        return C
    }
    ;
    si.Container = function() {
        si.Container["superclass"]["constructor"]["call"](this);
        this.contentEl = this.el
    }
    ;
    siextend(si.Container, si.Control, {
        setControls: __si_setControls,
        getContentEl: function() {
            return this.contentEl
        },
        getBodyEl: function() {
            return this.contentEl
        }
    });
    si.ValidatorBase = function() {
        si.ValidatorBase["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.ValidatorBase, si.Control, {
        required: false,
        requiredErrorText: "This field is required.",
        requiredCls: "si-required",
        errorText: "",
        errorCls: "si-error",
        invalidCls: "si-invalid",
        errorMode: "icon",
        validateOnChanged: true,
        validateOnLeave: true,
        _isValidState: true,
        errorIconEl: null 
    });
    siValidatorBasePrototype = si.ValidatorBase["prototype"];
    siValidatorBasePrototype["getAttrs"] = function(_) {
        var A = si.ValidatorBase["superclass"]["getAttrs"]["call"](this, _);
        si["_ParseString"](_, A, ["onvaluechanged", "onvalidation", "requiredErrorText", "errorMode"]);
        si["_ParseBool"](_, A, ["validateOnChanged", "validateOnLeave"]);
        var $ = _.getAttribute("required");
        if (!$)
            $ = _.required;
        if ($)
            A.required = $ != "false" ? true : false;
        return A
    };
    siValidatorBasePrototype["onValidation"] = function(_, $) {
        this["on"]("validation", _, $)
    };
    siValidatorBasePrototype["onValueChanged"] = function(_, $) {
        this["on"]("valuechanged", _, $)
    };
    siValidatorBasePrototype._onbeforevaluechanged = function() {
        if (this.validateOnChanged)
            this["_tryValidate"]();
        this["fire"]("valuechanged", {
            value: this["getValue"]()
        })
    };
    siValidatorBasePrototype._showErrorInfo = function() {
        if (!this.el)
            return;
        this["removeCls"](this.errorCls);
        this["removeCls"](this.invalidCls);
        this.el.title = "";
        if (this._isValidState == false)
            switch (this["errorMode"]) {
            case "icon":
                this["addCls"](this.errorCls);
                var $ = this["getErrorIconEl"]();
				// add noty alert
                // if ($)
                    // $.title = this.errorText;
				if($){
					$.title = this.errorText;
					if(!this.notShowNotyAlert && si.showNotyAlert){
						var eText = si.getLabelText(this) + this.errorText
						setTimeout(function(){si.noty(eText,si.notyErrorType);},10);
						// si.noty(eText,si.notyErrorType);
					}
					this["notShowNotyAlert"] = false;
				}
                break;
            case "border":
                this["addCls"](this.invalidCls);
                this.el.title = this.errorText;
            default:
                this.removeErrorIconEl();
                break
            }
        else
            this.removeErrorIconEl();
        this["doLayout"]()
    };
    siValidatorBasePrototype._delayShowErrorInfo = function() {
        var $ = this;
        this._delayShowErrorInfoTimer = setTimeout(function() {
            $._showErrorInfo()
        }
        , 1)
    };
    siValidatorBasePrototype.removeErrorIconEl = function() {};
    siValidatorBasePrototype["getErrorIconEl"] = function() {
        return this.errorIconEl
    };
    siValidatorBasePrototype["getRequiredErrorText"] = function() {
        return this["requiredErrorText"]
    };
    siValidatorBasePrototype["setRequiredErrorText"] = function($) {
        this["requiredErrorText"] = $
    };
    siValidatorBasePrototype["getRequired"] = function() {
        return this.required
    };
    siValidatorBasePrototype["setRequired"] = function($) {
        this.required = $;
        if (this.required)
            this["addCls"](this.requiredCls);
        else
            this["removeCls"](this.requiredCls)
    };
    siValidatorBasePrototype["getErrorText"] = function() {
        return this.errorText
    };
    siValidatorBasePrototype["setErrorText"] = function($) {
        this.errorText = $;
        if (this._isValidState == false)
            this._delayShowErrorInfo()
    };
    siValidatorBasePrototype["getErrorMode"] = function() {
        return this["errorMode"]
    };
    siValidatorBasePrototype["setErrorMode"] = function($) {
        if (!$)
            $ = "none";
        this["errorMode"] = $.toLowerCase();
        if (this._isValidState == false)
            this._delayShowErrorInfo()
    };
    siValidatorBasePrototype["getValidateOnLeave"] = function($) {
        return this.validateOnLeave
    };
    siValidatorBasePrototype["setValidateOnLeave"] = function($) {
        this.validateOnLeave = $
    };
    siValidatorBasePrototype["getValidateOnChanged"] = function($) {
        return this.validateOnChanged
    };
    siValidatorBasePrototype["setValidateOnChanged"] = function($) {
        this.validateOnChanged = $
    };
    siValidatorBasePrototype["getIsValid"] = function() {
        return this._isValidState
    };
    siValidatorBasePrototype["setIsValid"] = function($) {
        this._isValidState = $;
        this._delayShowErrorInfo()
    };
    siValidatorBasePrototype["isValid"] = function() {
        return this._isValidState
    };
    siValidatorBasePrototype["validate"] = function() {
        if (this.enabled == false) {
            this["setIsValid"](true);
            return true
        }
        var $ = {
            value: this["getValue"](),
            errorText: "",
            isValid: true
        };
        if (this.required)
            if (si.isNull($.value) || String($.value).trim() === "") {
                $["isValid"] = false;
                $.errorText = this["requiredErrorText"]
            }
        this["fire"]("validation", $);
        this.errorText = $.errorText;
        this["setIsValid"]($["isValid"]);
        return this["isValid"]()
    };
    siValidatorBasePrototype["_tryValidate"] = function() {
        if (this._tryValidateTimer)
            clearTimeout(this._tryValidateTimer);
        var $ = this;
        this._tryValidateTimer = setTimeout(function() {
            $["validate"]()
        }
        , 30)
    };
    si.ListControl = function() {
        this.data = [];
        this.allselecteds = [];
        si.ListControl["superclass"]["constructor"]["call"](this);
        this["doUpdate"]()
    }
    ;
    siextend(si.ListControl, si.ValidatorBase, {
        defaultValue: "",
        value: "",
        valueField: "id",
        textField: "text",
        delimiter: ",",
        data: null ,
        url: "",
        listItemCls: "si-list-item",
        listItemhoverCls: "si-list-item-hover",
        itemSelectedCls: "si-list-item-selected",
        uiCls: "si-list",
        name: "",
        _bodyEl: null ,
        selectedEl: null ,
        allselecteds: [],
        multiSelect: false,
        _insideItemFlag: true
    });
    siListControlPrototype = si.ListControl["prototype"];
    siListControlPrototype["getAttrs"] = function(C) {
        var G = si.ListControl["superclass"]["getAttrs"]["call"](this, C);
        si["_ParseString"](C, G, ["url", "data", "value", "textField", "valueField", "onitemclick", "onitemmousemove", "onselectionchanged", "onitemdblclick", "onbeforeload", "onload", "onloaderror", "ondataload"]);
        si["_ParseBool"](C, G, ["multiSelect"]);
        var E = G["valueField"] || this["valueField"]
          , B = G["textField"] || this["textField"];
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
    };
    siListControlPrototype["onPreLoad"] = function(_, $) {
        this["on"]("preload", _, $)
    };
    siListControlPrototype["onLoadError"] = function(_, $) {
        this["on"]("loaderror", _, $)
    };
    siListControlPrototype["onLoad"] = function(_, $) {
        this["on"]("load", _, $)
    };
    siListControlPrototype["onBeforeLoad"] = function(_, $) {
        this["on"]("beforeload", _, $)
    };
    siListControlPrototype["onItemMouseDown"] = function(_, $) {
        this["on"]("itemmousedown", _, $)
    };
    siListControlPrototype["onItemClick"] = function(_, $) {
        this["on"]("itemclick", _, $)
    };
    siListControlPrototype["_OnItemMouseMove"] = function($, _) {
        si["repaint"](this.el);
        if (!this.enabled || $.enabled === false)
            return;
        this._addOrRemoveItemHoverCls($);
        var _ = {
            item: $,
            htmlEvent: _
        };
        this["fire"]("itemmousemove", _)
    };
    siListControlPrototype["_OnItemMouseOut"] = function($, _) {
        si["repaint"](this.el);
        if (!this.enabled)
            return;
        if (this._insideItemFlag)
            this._cleanFocusHoverItem();
        var _ = {
            item: $,
            htmlEvent: _
        };
        this["fire"]("itemmouseout", _)
    };
    siListControlPrototype["_OnItemClick"] = function($, A) {
        if (this["isReadOnly"]() || this.enabled == false || $.enabled === false) {
            A.preventDefault();
            return
        }
        var _ = this["getValue"]();
        if (this["multiSelect"]) {
            if (this["isSelected"]($)) {
                this["deselect"]($);
                if (this.selectedEl == $)
                    this.selectedEl = null 
            } else {
                this["select"]($);
                this.selectedEl = $
            }
            this.beforeSelectionChanged()
        } else if (!this["isSelected"]($)) {
            this["deselectAll"]();
            this["select"]($);
            this.selectedEl = $;
            this.beforeSelectionChanged()
        }
        if (_ != this["getValue"]())
            this._onbeforevaluechanged();
        var A = {
            item: $,
            htmlEvent: A
        };
        this["fire"]("itemclick", A)
    };
    siListControlPrototype.autoFireEvent = function(C, A) {
        if (!this.enabled)
            return;
        var $ = this._getCurrentItemData(C);
        if (!$)
            return;
        var B = this["_OnItem" + A];
        if (B)
            B["call"](this, $, C);
        else {
            var _ = {
                item: $,
                htmlEvent: C
            };
            this["fire"]("item" + A, _)
        }
    };
    siListControlPrototype._oncontextmenu = function($) {
        this.autoFireEvent($, "ContextMenu")
    };
    siListControlPrototype._onkeyup = function($) {
        this.autoFireEvent($, "KeyUp")
    };
    siListControlPrototype._onkeydown = function($) {
        this.autoFireEvent($, "KeyDown")
    };
    siListControlPrototype._onmouseout = function($) {
        this.autoFireEvent($, "MouseOut")
    };
    siListControlPrototype._onmouseover = function($) {
        this.autoFireEvent($, "MouseOver")
    };
    siListControlPrototype._onmousemove = function($) {
        this.autoFireEvent($, "MouseMove")
    };
    siListControlPrototype._onmouseup = function($) {
        this.autoFireEvent($, "MouseUp")
    };
    siListControlPrototype._onmousedown = function($) {
        this.autoFireEvent($, "MouseDown")
    };
    siListControlPrototype._ondblclick = function($) {
        this.autoFireEvent($, "Dblclick")
    };
    siListControlPrototype._onclick = function($) {
        this.autoFireEvent($, "Click")
    };
    siListControlPrototype._createListControlId = function($) {
        return this.uid + "$" + $
    };
    siListControlPrototype._createListControlCkId = function($) {
        return this.uid + "$ck$" + $
    };
    siListControlPrototype.beforeSelectionChanged = function(_, B) {
        var $ = this._toValueTextArray(this.allselecteds);
        this.value = $[0];
        if (this.inputEl)
            this.inputEl.value = this.value;
        var A = {
            selecteds: this["getSelecteds"](),
            selected: this["getSelected"](),
            value: this["getValue"]()
        };
        this["fire"]("SelectionChanged", A)
    };
    siListControlPrototype.updateRowCls = function() {
        var C = this._toValueTextArray(this.allselecteds);
        this.value = C[0];
        if (this.inputEl)
            this.inputEl.value = this.value;
        for (var A = 0, D = this.data.length; A < D; A++) {
            var _ = this.data[A]
              , F = this["isSelected"](_);
            if (F)
                this["addItemCls"](_, this.itemSelectedCls);
            else
                this["removeItemCls"](_, this.itemSelectedCls);
            var $ = this.data["indexOf"](_)
              , E = this._createListControlCkId($)
              , B = document.getElementById(E);
            if (B)
                B.checked = !!F
        }
    };
    siListControlPrototype["deselects"] = function(A) {
        if (!A || A.length == 0)
            return;
        A = A.clone();
        for (var _ = A.length - 1; _ >= 0; _--) {
            var $ = A[_];
            if (this["isSelected"]($))
                this.allselecteds.remove($)
        }
        var B = this;
        setTimeout(function() {
            B.updateRowCls()
        }
        , 1)
    };
    siListControlPrototype["selects"] = function(A) {
        if (!A || A.length == 0)
            return;
        A = A.clone();
        for (var _ = 0, C = A.length; _ < C; _++) {
            var $ = A[_];
            if (!this["isSelected"]($))
                this.allselecteds.push($)
        }
        var B = this;
        setTimeout(function() {
            B.updateRowCls()
        }
        , 1)
    };
    siListControlPrototype["clearSelect"] = function() {
        this["deselectAll"]()
    };
    siListControlPrototype["deselectAll"] = function() {
        this["deselects"](this.allselecteds)
    };
    siListControlPrototype["selectAll"] = function() {
        var $ = this.data.clone();
        this["selects"]($)
    };
    siListControlPrototype["deselect"] = function($) {
        $ = this["getItem"]($);
        if (!$)
            return;
        if (!this["isSelected"]($))
            return;
        this["deselects"]([$])
    };
    siListControlPrototype["select"] = function($) {
        $ = this["getItem"]($);
        if (!$)
            return;
        if (this["isSelected"]($))
            return;
        this["selects"]([$])
    };
    siListControlPrototype["getSelected"] = function() {
        return this.selectedEl
    };
    siListControlPrototype["setSelected"] = function($) {
        if ($) {
            this.selectedEl = $;
            this["select"]($)
        }
    };
    siListControlPrototype["getSelecteds"] = function() {
        var $ = this.allselecteds.clone()
          , _ = this;
        si.sort($, function(A, C) {
            var $ = _["indexOf"](A)
              , B = _["indexOf"](C);
            if ($ > B)
                return 1;
            if ($ < B)
                return -1;
            return 0
        }
        );
        return $
    };
    siListControlPrototype["isSelected"] = function($) {
        if (!$)
            return false;
        return this.allselecteds["indexOf"]($) != -1
    };
    siListControlPrototype["getMultiSelect"] = function() {
        return this["multiSelect"]
    };
    siListControlPrototype["setMultiSelect"] = function($) {
        this["multiSelect"] = $
    };
    siListControlPrototype.refreshSelectedInfo = function() {
        for (var _ = this.allselecteds.length - 1; _ >= 0; _--) {
            var $ = this.allselecteds[_];
            if (this.data["indexOf"]($) == -1)
                this.allselecteds.removeAt(_)
        }
        var A = this._toValueTextArray(this.allselecteds);
        this.value = A[0];
        if (this.inputEl)
            this.inputEl.value = this.value
    };
    siListControlPrototype["moveItem"] = function(_, $) {
        if (!_ || !si.isNumber($))
            return;
        if ($ < 0)
            $ = 0;
        if ($ > this.data.length)
            $ = this.data.length;
        this.data.remove(_);
        this.data.insert($, _);
        this["doUpdate"]()
    };
    siListControlPrototype["removeItem"] = function(_) {
        var $ = this.data["indexOf"](_);
        if ($ != -1) {
            this.data.removeAt($);
            this.refreshSelectedInfo();
            this["doUpdate"]()
        }
    };
    siListControlPrototype["removeItems"] = function($) {
        if (!si.isArray($))
            return;
        this.data.removeRange($);
        this.refreshSelectedInfo();
        this["doUpdate"]()
    };
    siListControlPrototype["addItem"] = function(_, $) {
        if (!_)
            return;
        if (this.data["indexOf"](_) != -1)
            return;
        if (si.isNull($))
            $ = this.data.length;
        this.data.insert($, _);
        this["doUpdate"]()
    };
    siListControlPrototype["addItems"] = function(_, $) {
        if (!si.isArray(_))
            return;
        if (si.isNull($))
            $ = this.data.length;
        this.data.insertRange($, _);
        this["doUpdate"]()
    };
    siListControlPrototype["removeAll"] = function() {
        var $ = this["getData"]();
        this["removeItems"]($)
    };
    siListControlPrototype["findItems"] = function(B) {
        if (si.isNull(B) || B === "")
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
    };
    siListControlPrototype._toValueTextArray = function(A) {
        if (si.isNull(A))
            A = [];
        if (!si.isArray(A))
            A = this["findItems"](A);
        var B = []
          , C = [];
        for (var _ = 0, D = A.length; _ < D; _++) {
            var $ = A[_];
            if ($) {
                B.push(this["getItemValue"]($));
                C.push(this["getItemText"]($))
            }
        }
        return [B.join(this.delimiter), C.join(this.delimiter)]
    };
    siListControlPrototype["getItemText"] = function($) {
        var _ = si._getMap(this.textField, $);
        return si.isNull(_) ? "" : String(_)
    };
    siListControlPrototype["getItemValue"] = function($) {
        return String(si._getMap(this.valueField, $))
    };
    siListControlPrototype["getTextField"] = function() {
        return this["textField"]
    };
    siListControlPrototype["setTextField"] = function($) {
        this["textField"] = $
    };
    siListControlPrototype["getValueField"] = function() {
        return this["valueField"]
    };
    siListControlPrototype["setValueField"] = function($) {
        this["valueField"] = $
    };
    siListControlPrototype["getFormValue"] = function() {
        return this.value
    };
    siListControlPrototype["getValue"] = function() {
        return this.value
    };
    siListControlPrototype["setValue"] = function($) {
        if (si.isNull($))
            $ = "";
        if (this.value !== $) {
            this["deselectAll"]();
            this.value = $;
            if (this.inputEl)
                this.inputEl.value = $;
            var _ = this["findItems"](this.value);
            this["selects"](_)
        }
    };
    siListControlPrototype.insideLoad = function(params) {
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
        this["fire"]("beforeload", e);
        if (e.data != e.params && e.params != params)
            e.data = e.params;
        if (e.cancel == true)
            return;
        var sf = this
          , url = e.url;
        si.copyTo(e, {
            success: function($) {
                var _ = null ;
                try {
                    _ = si.decode($)
                } catch (A) {
                    _ = [];
                    if (si_debugger == true)
                        alert(url + "\njson is error.")
                }
                if (sf.dataField)
                    _ = si._getMap(sf.dataField, _);
                if (!_)
                    _ = [];
                var A = {
                    data: _,
                    cancel: false
                };
                sf["fire"]("preload", A);
                if (A.cancel == true)
                    return;
                sf["setData"](A.data);
                sf["fire"]("load");
                setTimeout(function() {
                    sf["doLayout"]()
                }
                , 100)
            },
            error: function($, A, _) {
                var B = {
                    xmlHttp: $,
                    errorMsg: $.responseText,
                    errorCode: $.status
                };
                if (si_debugger == true)
                    alert(url + "\n" + B.errorCode + "\n" + B.errorMsg);
                sf["fire"]("loaderror", B)
            }
        });
        this._tempAjaxRequest = si.ajax(e)
    };
    siListControlPrototype["getUrl"] = function() {
        return this.url
    };
    siListControlPrototype["setUrl"] = function($) {
        this.url = $;
        this.insideLoad({})
    };
    siListControlPrototype["getData"] = function() {
        return this.data.clone()
    };
    siListControlPrototype["setData"] = function(data) {
        if (typeof data == "string")
            data = eval(data);
        if (!si.isArray(data))
            data = [];
        this.data = data;
        this["doUpdate"]();
        if (this.value != "") {
            this["deselectAll"]();
            var records = this["findItems"](this.value);
            this["selects"](records)
        }
    };
    siListControlPrototype["loadData"] = function($) {
        this["setData"]($)
    };
    siListControlPrototype["load"] = function($) {
        if (typeof $ == "string")
            this["setUrl"]($);
        else
            this["setData"]($)
    };
    siListControlPrototype["updateItem"] = function($, _) {
        $ = this["getItem"]($);
        if (!$)
            return;
        si.copyTo($, _);
        this["doUpdate"]()
    };
    siListControlPrototype["getAt"] = function($) {
        return this.data[$]
    };
    siListControlPrototype["indexOf"] = function($) {
        return this.data["indexOf"]($)
    };
    siListControlPrototype["getCount"] = function() {
        return this.data.length
    };
    siListControlPrototype["getItem"] = function($) {
        if (typeof $ == "object")
            return $;
        if (typeof $ == "number")
            return this.data[$];
        return this["findItems"]($)[0]
    };
    siListControlPrototype["scrollIntoView"] = function(_) {
        try {
            var $ = this["getItemEl"](_)
              , A = this._bodyEl || this.el;
            si["scrollIntoView"]($, A, false)
        } catch (B) {}
    };
    siListControlPrototype["getFocusedIndex"] = function() {
        return this.data["indexOf"](this._focusedItem)
    };
    siListControlPrototype["getFocusedItem"] = function() {
        return this._focusedItem
    };
    siListControlPrototype._cleanFocusHoverItem = function() {
        if (!this._focusedItem)
            return;
        try {
            var $ = this["getItemEl"](this._focusedItem);
            if ($)
                siremoveclass($, this.listItemhoverCls)
        } catch (_) {}
        this._focusedItem = null 
    };
    siListControlPrototype._addOrRemoveItemHoverCls = function(_, $) {
        _ = this["getItem"](_);
        if (!_)
            return;
        var A = this["getItemEl"](_);
        if ($ && A)
            this["scrollIntoView"](_);
        if (this._focusedItem == _) {
            if (A)
                siaddclass(A, this.listItemhoverCls);
            return
        }
        this._cleanFocusHoverItem();
        this._focusedItem = _;
        if (A)
            siaddclass(A, this.listItemhoverCls)
    };
    siListControlPrototype["getItemEl"] = function(_) {
        _ = this["getItem"](_);
        var $ = this.data["indexOf"](_)
          , A = this._createListControlId($);
        return document.getElementById(A)
    };
    siListControlPrototype["removeItemCls"] = function(_, A) {
        var $ = this["getItemEl"](_);
        if ($)
            siremoveclass($, A)
    };
    siListControlPrototype["addItemCls"] = function(_, A) {
        var $ = this["getItemEl"](_);
        if ($)
            siaddclass($, A)
    };
    siListControlPrototype._getCurrentItemData =  function(_) {
        var A = sifindAncestor(_.target, this.listItemCls);
        if (A) {
            var $ = parseInt(si.getAttr(A, "index"));
            return this.data[$]
        }
    };
    siListControlPrototype["setName"] = function($) {
        this.name = $;
        if (this.inputEl)
            si.setAttr(this.inputEl, "name", this.name)
    };
    siListControlPrototype["destroy"] = function($) {
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
        si.ListControl["superclass"]["destroy"]["call"](this, $)
    };
    siListControlPrototype["_initEvents"] = function() {
        siEventTimer(function() {
            siTriggerEvent(this.el, "click", this._onclick, this);
            siTriggerEvent(this.el, "dblclick", this._ondblclick, this);
            siTriggerEvent(this.el, "mousedown", this._onmousedown, this);
            siTriggerEvent(this.el, "mouseup", this._onmouseup, this);
            siTriggerEvent(this.el, "mousemove", this._onmousemove, this);
            siTriggerEvent(this.el, "mouseover", this._onmouseover, this);
            siTriggerEvent(this.el, "mouseout", this._onmouseout, this);
            siTriggerEvent(this.el, "keydown", this._onkeydown, this);
            siTriggerEvent(this.el, "keyup", this._onkeyup, this);
            siTriggerEvent(this.el, "contextmenu", this._oncontextmenu, this)
        }
        , this)
    };
    siListControlPrototype["_create"] = function() {};
    siListControlPrototype["set"] = function(A) {
        if (typeof A == "string")
            return this;
        var $ = A.value;
        delete A.value;
        var B = A.url;
        delete A.url;
        var _ = A.data;
        delete A.data;
        si.ListControl["superclass"]["set"]["call"](this, A);
        if (!si.isNull(_))
            this["setData"](_);
        if (!si.isNull(B))
            this["setUrl"](B);
        if (!si.isNull($))
            this["setValue"]($);
        return this
    };
    si._Layouts = {};
    si.layout = function($, _) {
        if (!document.body)
            return;
        function A(C) {
            if (!C)
                return;
            var D = si.get(C);
            if (D) {
                if (D["doLayout"])
                    if (!si._Layouts[D.uid]) {
                        si._Layouts[D.uid] = D;
                        if (_ !== false || D["isFixedSize"]() == false)
                            D["doLayout"](false);
                        delete si._Layouts[D.uid]
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
            si.layoutIFrames()
    }
    ;
    si.applyTo = function(_) {
        _ = sigetelementbyid(_);
        if (!_)
            return this;
        if (si.get(_))
            throw new Error("not applyTo a si control");
        var $ = this["getAttrs"](_);
        delete $._applyTo;
        if (si.isNull($["defaultValue"]) && !si.isNull($.value))
            $["defaultValue"] = $.value;
        var A = _.parentNode;
        if (A && this.el != _)
            A.replaceChild(this.el, _);
        this["set"]($);
        this._callBackFunction(_);
        return this
    }
    ;
    si._doAnalyze = function(G) {
        var F = G.nodeName.toLowerCase();
        if (!F)
            return;
        var B = G.className;
        if (B && B.split) {
            var $ = si.get(G);
            if (!$) {
                var H = B.split(" ");
                for (var E = 0, C = H.length; E < C; E++) {
                    var A = H[E]
                      , I = si.getClassByUICls(A);
                    if (I) {
                        siremoveclass(G, A);
                        var D = new I();
                        si.applyTo["call"](D, G);
                        G = D.el;
                        break
                    }
                }
            }
        }
        if (F == "select" || sihasclass(G, "si-menu") || sihasclass(G, "si-datagrid") || sihasclass(G, "si-treegrid") || sihasclass(G, "si-tree") || sihasclass(G, "si-button") || sihasclass(G, "si-textbox") || sihasclass(G, "si-buttonedit"))
            return;
        var J = si["getChildNodes"](G, true);
        for (E = 0, C = J.length; E < C; E++) {
            var _ = J[E];
            if (_.nodeType == 1)
                if (_.parentNode == G)
                    si._doAnalyze(_)
        }
    }
    ;
    si._Removes = [];
    si.analyze = function($) {
        if (typeof $ == "string") {
            var A = $;
            $ = sigetelementbyid(A);
            if (!$)
                $ = document.body
        }
        if ($ && !si.isElement($))
            $ = $.el;
        if (!$)
            $ = document.body;
        var _ = isWindowDisplay;
        if (isIE)
            isWindowDisplay = false;
        si._doAnalyze($);
        isWindowDisplay = _;
        si.layout($)
    }
    ;
    si["_ParseString"] = function(B, A, E) {
        for (var $ = 0, D = E.length; $ < D; $++) {
            var C = E[$]
              , _ = si.getAttr(B, C);
            if (_)
                A[C] = _
        }
    }
    ;
    si["_ParseBool"] = function(B, A, E) {
        for (var $ = 0, D = E.length; $ < D; $++) {
            var C = E[$]
              , _ = si.getAttr(B, C);
            if (_)
                A[C] = _ == "true" ? true : false
        }
    };
    
    si["_ParseInt"] = function(B, A, E) {
        for (var $ = 0, D = E.length; $ < D; $++) {
            var C = E[$]
              , _ = parseInt(si.getAttr(B, C));
            if (!isNaN(_))
                A[C] = _
        }
    }
    ;
    si.createColumns = function(el) {
        var columns = []
          , cs = si["getChildNodes"](el);
        for (var i = 0, l = cs.length; i < l; i++) {
            var node = cs[i]
              , jq = jQuery(node)
              , column = {}
              , editor = null 
              , filter = null 
              , subCs = si["getChildNodes"](node);
            if (subCs)
                for (var ii = 0, li = subCs.length; ii < li; ii++) {
                    var subNode = subCs[ii]
                      , property = jQuery(subNode).attr("property");
                    if (!property)
                        continue;property = property.toLowerCase();
                    if (property == "columns") {
                        column.columns = si.createColumns(subNode);
                        jQuery(subNode).remove()
                    }
                    if (property == "editor" || property == "filter") {
                        var className = subNode.className
                          , classes = className.split(" ");
                        for (var i3 = 0, l3 = classes.length; i3 < l3; i3++) {
                            var cls = classes[i3]
                              , clazz = si.getClassByUICls(cls);
                            if (clazz) {
                                var ui = new clazz();
                                if (property == "filter") {
                                    filter = ui["getAttrs"](subNode);
                                    filter.type = ui.type
                                } else {
                                    editor = ui["getAttrs"](subNode);
                                    editor.type = ui.type
                                }
                                break
                            }
                        }
                        jQuery(subNode).remove()
                    }
                }
            column.header = node.innerHTML;
            si["_ParseString"](node, column, ["name", "header", "field", "editor", "filter", "renderer", "width", "type", "renderer", "headerAlign", "align", "headerCls", "cellCls", "headerStyle", "cellStyle", "displayField", "dateFormat", "listFormat", "mapFormat", "trueValue", "falseValue", "dataType", "validator", "currencyUnit", "summaryType", "summaryRenderer", "groupSummaryType", "groupSummaryRenderer", "defaultValue", "defaultText", "decimalPlaces", "data-options"]);
            si["_ParseBool"](node, column, ["visible", "readOnly", "allowSort", "allowResize", "allowMove", "allowDrag", "autoShowPopup", "unique", "autoEscape"]);
            if (editor)
                column.editor = editor;
            if (filter)
                column["filter"] = filter;
            if (column.dataType)
                column.dataType = column.dataType.toLowerCase();
            if (column["defaultValue"] === "true")
                column["defaultValue"] = true;
            if (column["defaultValue"] === "false")
                column["defaultValue"] = false;
            columns.push(column);
            var options = column["data-options"];
            if (options) {
                options = eval("(" + options + ")");
                if (options)
                    si.copyTo(column, options)
            }
        }
        return columns
    };
    
    si._AllColumnBaseClassObject = {};
    si["_getColumn"] = function($) {
        var _ = si._AllColumnBaseClassObject[$.toLowerCase()];
        if (!_)
            return {};
        return _()
    }
    ;
    si.IndexColumn = function($) {
        return si.copyTo({
            width: 30,
            cellCls: "",
            align: "center",
            draggable: false,
            allowDrag: true,
            init: function($) {
                $["on"]("addrow", this.__OnIndexChanged, this);
                $["on"]("removerow", this.__OnIndexChanged, this);
                $["on"]("moverow", this.__OnIndexChanged, this);
                if ($.isTree) {
                    $["on"]("loadnode", this.__OnIndexChanged, this);
                    this._gridUID = $.uid;
                    this["_rowIdField"] = "_id"
                }
            },
            getNumberId: function($) {
                return this._gridUID + "$number$" + $[this._rowIdField]
            },
            createNumber: function($, _) {
                if (si.isNull($["pageIndex"]))
                    return _ + 1;
                else
                    return ($["pageIndex"] * $["pageSize"]) + _ + 1
            },
            renderer: function(A) {
                var $ = A.sender;
                if (this.draggable) {
                    if (!A.cellStyle)
                        A.cellStyle = "";
                    A.cellStyle += ";cursor:move;"
                }
                var _ = "<div id=\"" + this.getNumberId(A.record) + "\">";
                if (si.isNull($["pageIndex"]))
                    _ += A.rowIndex + 1;
                else
                    _ += ($["pageIndex"] * $["pageSize"]) + A.rowIndex + 1;
                _ += "</div>";
                return _
            },
            __OnIndexChanged: function(F) {
                var $ = F.sender
                  , C = $["toArray"]();
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
    si._AllColumnBaseClassObject["indexcolumn"] = si.IndexColumn;
    si.CheckColumn = function($) {
        return si.copyTo({
            width: 30,
            cellCls: "si-checkcolumn",
            headerCls: "si-checkcolumn",
            _multiRowSelect: true,
            header: function($) {
                var A = this.uid + "checkall"
                  , _ = "<input type=\"checkbox\" id=\"" + A + "\" />";
                if (this["multiSelect"] == false)
                    _ = "";
                return _
            },
            getCheckId: function($) {
                return this._gridUID + "$checkcolumn$" + $[this._rowIdField]
            },
            init: function($) {
                $["on"]("selectionchanged", this._onCheckColumnSelectionOnChanged, this);
                $["on"]("HeaderCellClick", this._onCheckColumnHeaderCellClick, this)
            },
            renderer: function(C) {
                var B = this.getCheckId(C.record)
                  , _ = C.sender["isSelected"] ? C.sender["isSelected"](C.record) : false
                  , A = "checkbox"
                  , $ = C.sender;
                if ($["multiSelect"] == false)
                    A = "radio";
                return "<input type=\"" + A + "\" id=\"" + B + "\" " + (_ ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false\"/>"
            },
            _onCheckColumnHeaderCellClick: function(B) {
                var $ = B.sender;
                if (B.column != this)
                    return;
                var A = $.uid + "checkall"
                  , _ = document.getElementById(A);
                if (_) {
                    if ($["getMultiSelect"]()) {
                        if (_.checked)
                            $["selectAll"]();
                        else
                            $["deselectAll"]()
                    } else {
                        $["deselectAll"]();
                        if (_.checked)
                            $["select"](0)
                    }
                    $["fire"]("checkall")
                }
            },
            _onCheckColumnSelectionOnChanged: function(H) {
                var $ = H.sender
                  , C = $["toArray"]();
                for (var A = 0, E = C.length; A < E; A++) {
                    var _ = C[A]
                      , G = $["isSelected"](_)
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
                if (_ && $["_getSelectAllCheckState"]) {
                    var A = $["_getSelectAllCheckState"]();
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
    si._AllColumnBaseClassObject["checkcolumn"] = si.CheckColumn;
    si.ExpandColumn = function($) {
        return si.copyTo({
            width: 30,
            cellCls: "",
            align: "center",
            draggable: false,
            cellStyle: "padding:0",
            renderer: function($) {
                return "<a class=\"si-grid-ecIcon\" href=\"javascript:#\" onclick=\"return false\"></a>"
            },
            init: function($) {
                $["on"]("cellclick", this._onExpandColumnCellClick, this)
            },
            _onExpandColumnCellClick: function(A) {
                var $ = A.sender;
                if (A.column == this && $["isShowRowDetail"])
                    if (sifindAncestor(A.htmlEvent.target, "si-grid-ecIcon")) {
                        var _ = $["isShowRowDetail"](A.record);
                        if ($.autoHideRowDetail)
                            $["hideAllRowDetail"]();
                        if (_)
                            $["hideRowDetail"](A.record);
                        else
                            $["showRowDetail"](A.record)
                    }
            }
        }, $)
    }
    ;
    si._AllColumnBaseClassObject["expandcolumn"] = si.ExpandColumn;
    si._AllColumnBaseClassObject["checkboxcolumn"] = function($) {
        return si.copyTo({
            _type: "checkboxcolumn",
            header: "#",
            headerAlign: "center",
            cellCls: "si-checkcolumn",
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
                  , B = si._getMap(C.field, C.record)
                  , _ = B == this.trueValue ? true : false
                  , $ = "checkbox";
                return "<input type=\"" + $ + "\" id=\"" + A + "\" " + (_ ? "checked" : "") + " hidefocus style=\"outline:none;\" onclick=\"return false;\"/>"
            },
            init: function($) {
                this.grid = $;
                function _(B) {
                    if ($["isReadOnly"]() || this["readOnly"])
                        return;
                    B.value = si._getMap(B.field, B.record);
                    $["fire"]("cellbeginedit", B);
                    if (B.cancel !== true) {
                        var A = si._getMap(B.column.field, B.record)
                          , _ = A == this.trueValue ? this.falseValue : this.trueValue;
                        if ($._beforeCellCommitEdit)
                            $._beforeCellCommitEdit(B.record, B.column, _)
                    }
                }
                function A(C) {
                    if (C.column == this) {
                        var B = this.getCheckId(C.record)
                          , A = C.htmlEvent.target;
                        if (A.id == B)
                            if ($["allowCellEdit"]) {
                                C.cancel = false;
                                _["call"](this, C)
                            } else if ($["isEditingRow"] && $["isEditingRow"](C.record))
                                setTimeout(function() {
                                    A.checked = !A.checked
                                }
                                , 1)
                    }
                }
                $["on"]("cellclick", A, this);
                siBindEvent(this.grid.el, "keydown", function(C) {
                    if (C.keyCode == 32 && $["allowCellEdit"]) {
                        var A = $["getCurrentCell"]();
                        if (!A)
                            return;
                        var B = {
                            record: A[0],
                            column: A[1]
                        };
                        _["call"](this, B);
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
    };
    si._AllColumnBaseClassObject["comboboxcolumn"] = function($) {
        return si.copyTo({
            renderer: function(M) {
                var _ = !si.isNull(M.value) ? String(M.value) : ""
                  , C = _.split(",")
                  , D = "id"
                  , J = "text"
                  , A = {}
                  , G = M.column.editor;
                if (G && G.type == "combobox") {
                    var B = this.__editor;
                    if (!B) {
                        if (si.isControl(G))
                            B = G;
                        else {
                            G = si.clone(G);
                            B = si.create(G)
                        }
                        this.__editor = B
                    }
                    D = B["getValueField"]();
                    J = B["getTextField"]();
                    A = this._valueMaps;
                    if (!A) {
                        A = {};
                        var K = B["getData"]();
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
    };
    si.BaseDraggable = function($) {
        this.owner = $;
        siBindEvent(this.owner.el, "mousedown", this._onmousedown, this)
    }
    ;
    si.BaseDraggable["prototype"] = {
        _onmousedown: function(A) {
            var $ = sihasclass(A.target, "si-resizer-trigger");
            if ($ && this.owner["allowResize"]) {
                var _ = this._GetResizeDragger();
                _.start(A)
            }
        },
        _GetResizeDragger: function() {
            if (!this._resizeDragger)
                this._resizeDragger = new si.Drag({
                    capture: true,
                    onStart: si.createDelegate(this.onDragStart, this),
                    onMove: si.createDelegate(this.onDragMove, this),
                    onStop: si.createDelegate(this.onDragStop, this)
                });
            return this._resizeDragger
        },
        onDragStart: function($) {
            this.proxy = si.append(document.body, "<div class=\"si-resizer-proxy\"></div>");
            this.proxy.style.cursor = "se-resize";
            this.elBox = sigetbox(this.owner.el);
            sisetbox(this.proxy, this.elBox)
        },
        onDragMove: function(B) {
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
            si.setSize(this.proxy, A, C)
        },
        onDragStop: function($, A) {
            if (!this.proxy)
                return;
            var _ = sigetbox(this.proxy);
            jQuery(this.proxy).remove();
            this.proxy = null ;
            this.elBox = null ;
            if (A) {
                this.owner["setWidth"](_.width);
                this.owner["setHeight"](_.height);
                this.owner["fire"]("resize")
            }
        }
    };
    si._topWindow = null ;
    si._getTopWindow = function() {
        if (si._topWindow)
            return si._topWindow;
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
        si._topWindow = $[$.length - 1];
        return si._topWindow
    }
    ;
    var __ps = si.getParams();
    if (__ps._winid) {
        try {
            window.Owner = si._getTopWindow()[__ps._winid]
        } catch (ex) {}
    }
    si._WindowID = "w" + Math.floor(Math.random() * 10000);
    si._getTopWindow()[si._WindowID] = window;
    si.__IFrameCreateCount = 1;
    si.createIFrame = function(E, F) {
        var H = "__iframe_onload" + si.__IFrameCreateCount++;
        window[H] = _;
        if (!E)
            E = "";
        var D = E.split("#");
        E = D[0];
        var C = "_t=" + Math.floor(Math.random() * 1000000);
        if (E["indexOf"]("?") == -1)
            E += "?" + C;
        else
            E += "&" + C;
        if (D[1])
            E = E + "#" + D[1];
        var G = "<iframe style=\"width:100%;height:100%;\" onload=\"" + H + "()\"  frameborder=\"0\"></iframe>"
          , $ = document.createElement("div")
          , B = si.append($, G)
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
            window[H] = si.emptyFn;
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
    si._doOpen = function(C) {
        if (typeof C == "string")
            C = {
                url: C
            };
        C = si.copyTo({
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
        C["closeAction"] = "destroy";
        var $ = C.onload;
        delete C.onload;
        var B = C.ondestroy;
        delete C.ondestroy;
        var _ = C.url;
        delete C.url;
        var A = new si.Window();
        A["set"](C);
        A["load"](_, $, B);
        A["show"]();
        return A
    }
    ;
    si.open = function(E) {
        if (!E)
            return;
        var C = E.url;
        if (!C)
            C = "";
        var B = C.split("#")
          , C = B[0]
          , A = "_winid=" + si._WindowID;
        if (C["indexOf"]("?") == -1)
            C += "?" + A;
        else
            C += "&" + A;
        if (B[1])
            C = C + "#" + B[1];
        E.url = C;
        E.Owner = window;
        var $ = [];
        function _(A) {
            if (A.si)
                $.push(A);
            if (A.parent && A.parent != A)
                _(A.parent)
        }
        _(window);
        var D = $[$.length - 1];
        return D["si"]._doOpen(E)
    }
    ;
    si.openTop = si.open;
    si["getData"] = function(C, A, E, D, _) {
        var $ = si["getText"](C, A, E, D, _)
          , B = si.decode($);
        return B
    }
    ;
    si["getText"] = function(B, A, D, C, _) {
        var $ = null ;
        si.ajax({
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
    if (!window.si_RootPath)
        si_RootPath = "/";
    _getSourceFilePath = function(B) {
        var A = document.getElementsByTagName("script")
          , D = "";
        for (var $ = 0, E = A.length; $ < E; $++) {
            var C = A[$].src;
            if (C["indexOf"](B) != -1) {
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
        if (D["indexOf"]("http:") == -1 && D["indexOf"]("file:") == -1)
            D = _ + "/" + D;
        return D
    }
    ;
    if (!window.si_JSPath)
        si_JSPath = _getSourceFilePath("siui.js");
    si["update"] = function(A, _) {
        if (typeof A == "string")
            A = {
                url: A
            };
        if (_)
            A.el = _;
        var $ = si.loadText(A.url);
        si.innerHTML(A.el, $);
        si.analyze(A.el)
    }
    ;
    si.createSingle = function($) {
        if (typeof $ == "string")
            $ = si.getClass($);
        if (typeof $ != "function")
            return;
        var _ = $.single;
        if (!_)
            _ = $.single = new $();
        return _
    }
    ;
    si.createTopSingle = function($) {
        if (typeof $ != "function")
            return;
        var _ = $["prototype"].type;
        if (top && top != window && top.si && top.si.getClass(_))
            return top.si.createSingle(_);
        else
            return si.createSingle($)
    }
    ;
    si.sortTypes = {
        "string": function($) {
            return String($).toUpperCase()
        },
        "date": function($) {
            if (!$)
                return 0;
            if (si.isDate($))
                return $["getTime"]();
            return si.parseDate(String($))
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
    si._doValidate = function(G, $, K, H) {
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
            var D = si.VTypes[A];
            if (D) {
                var I = D($, _);
                if (I !== true) {
                    K["isValid"] = false;
                    var B = J[0] + "ErrorText";
                    K.errorText = H[B] || si.VTypes[B] || "";
                    K.errorText = String.format(K.errorText, _[0], _[1], _[2], _[3], _[4]);
                    break
                }
            }
        }
    };
    
    si._getValidatorErrorText = function($, _) {
        if ($ && $[_])
            return $[_];
        else
            return si.VTypes[_]
    }
    ;
    si.VTypes = {
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
            if (si.isNull(_) || _ === "")
                return false;
            return true
        },
        email: function(_, $) {
            if (si.isNull(_) || _ === "")
                return true;
            if (_.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
                return true;
            else
                return false
        },
        url: function(A, $) {
            if (si.isNull(A) || A === "")
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
            if (si.isNull(A) || A === "")
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
            if (si.isNull(A) || A === "")
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
            if (si.isNull(B) || B === "")
                return true;
            if (!B)
                return false;
            var $ = null 
              , A = _[0];
            if (A) {
                $ = si.parseDate(B, A);
                if ($ && $.getFullYear)
                    if (si.formatDate($, A) == B)
                        return true
            } else {
                $ = si.parseDate(B, "yyyy-MM-dd");
                if (!$)
                    $ = si.parseDate(B, "yyyy/MM/dd");
                if (!$)
                    $ = si.parseDate(B, "MM/dd/yyyy");
                if ($ && $.getFullYear)
                    return true
            }
            return false
        },
        maxLength: function(A, $) {
            if (si.isNull(A) || A === "")
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
            if (si.isNull(A) || A === "")
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
            if (si.isNull(B) || B === "")
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
            if (si.isNull(G) || G === "")
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
            if (si.VTypes["float"](B, _) == false)
                return false;
            if (si.isNull(B) || B === "")
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
    si.summaryTypes = {
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
    si.formatCurrency = function($, A) {
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
    si.emptyFn = function() {}
    ;
    si.Drag = function($) {
        si.copyTo(this, $)
    }
    ;
    si.Drag["prototype"] = {
        onStart: si.emptyFn,
        onMove: si.emptyFn,
        onStop: si.emptyFn,
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
            siBindEvent($, "mousemove", this.move, this);
            siBindEvent($, "mouseup", this.stop, this);
            siBindEvent($, "contextmenu", this.contextmenu, this);
            if (this.context)
                siBindEvent(this.context, "contextmenu", this.contextmenu, this);
            this.trigger = _.target;
            si.selectable(this.trigger, false);
            si.selectable($.body, false);
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
                siUnBindEvent(this.context, "contextmenu", this.contextmenu, this);
            siUnBindEvent(document, "contextmenu", this.contextmenu, this);
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
            si.selectable(this.trigger, true);
            si.selectable(A.body, true);
            if (isIE) {
                this.trigger.setCapture(false);
                this.trigger.releaseCapture()
            }
            var _ = si.MouseButton.Right != B.button;
            if (_ == false)
                B.preventDefault();
            siUnBindEvent(A, "mousemove", this.move, this);
            siUnBindEvent(A, "mouseup", this.stop, this);
            var $ = this;
            setTimeout(function() {
                siUnBindEvent(document, "contextmenu", $.contextmenu, $);
                if ($.context)
                    siUnBindEvent($.context, "contextmenu", $.contextmenu, $)
            }
            , 1);
            if (this.started)
                $.onStop($, _)
        }
    };
    si.JSON = new (function() {
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
    si.encode = si.JSON.encode;
    si.decode = si.JSON.decode;
    si.clone = function($, A) {
        if ($ === null  || $ === undefined)
            return $;
        var B = si.encode($)
          , _ = si.decode(B);
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
    si.copyTo(si, {
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
            return new Date($["getTime"]())
        },
        addDate: function(A, $, _) {
            if (!_)
                _ = "D";
            A = new Date(A["getTime"]());
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
    Date["prototype"].getHalfYear = function() {
        if (!this.getMonth)
            return null ;
        var $ = this.getMonth();
        if ($ < 6)
            return 0;
        return 1
    }
    ;
    Date["prototype"].getQuarter = function() {
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
    si.formatDate = function(C, O, F) {
        if (!C || !C.getFullYear || isNaN(C))
            return "";
        var G = C.toString()
          , B = si.dateInfo;
        if (!B)
            B = si.dateInfo;
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
    String["prototype"].escapeDateTimeTokens = function() {
        return this.replace(/([dMyHmsft])/g, "\\$1")
    }
    ;
    si.fixDate = function($, _) {
        if (+$)
            while ($.getDate() != _.getDate())
                $["setTime"](+$ + ($ < _ ? 1 : -1) * HOUR_MS)
    }
    ;
    si.parseDate = function(s, ignoreTimezone) {
        try {
            var d = eval(s);
            if (d && d.getFullYear)
                return d
        } catch (ex) {}
        if (typeof s == "object")
            return isNaN(s) ? null  : s;
        if (typeof s == "number") {
            d = new Date(s * 1000);
            if (d["getTime"]() != s)
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
                if (d["getTime"]() != s)
                    return null ;
                else
                    return d
            }
            if (ignoreTimezone === undefined)
                ignoreTimezone = true;
            d = si.parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null );
            return isNaN(d) ? null  : d
        }
        return null 
    }
    ;
    si.parseISO8601 = function(D, $) {
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
            si.fixDate(A, C);
            if (_[7])
                A.setHours(_[7]);
            if (_[8])
                A.setMinutes(_[8]);
            if (_[10])
                A.setSeconds(_[10]);
            if (_[12])
                A.setMilliseconds(Number("0." + _[12]) * 1000);
            si.fixDate(A, C)
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
    si.parseTime = function(E, F) {
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
        var $ = si.parseDate(E);
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
    si.dateInfo = {
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
    si.append = function(_, A) {
        _ = sigetelementbyid(_);
        if (!A || !_)
            return;
        if (typeof A == "string") {
            if (A.charAt(0) == "#") {
                A = sigetelementbyid(A);
                if (!A)
                    return;
                _.appendChild(A);
                return A
            } else {
                if (A["indexOf"]("<tr") == 0) {
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
    si.prepend = function(_, A) {
        if (typeof A == "string")
            if (A.charAt(0) == "#")
                A = sigetelementbyid(A);
            else {
                var $ = document.createElement("div");
                $.innerHTML = A;
                A = $.firstChild
            }
        return jQuery(_).prepend(A)[0].firstChild
    }
    ;
    si.after = function(_, A) {
        if (typeof A == "string")
            if (A.charAt(0) == "#")
                A = sigetelementbyid(A);
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
    si.before = function(_, A) {
        if (typeof A == "string")
            if (A.charAt(0) == "#")
                A = sigetelementbyid(A);
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
    si.__wrap = document.createElement("div");
    si.createElements = function($) {
        si.removeChilds(si.__wrap);
        var _ = $["indexOf"]("<tr") == 0;
        if (_)
            $ = "<table>" + $ + "</table>";
        si.__wrap.innerHTML = $;
        return _ ? si.__wrap.firstChild.rows : si.__wrap.childNodes
    }
    ;
    sigetelementbyid = function(D, A) {
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
    sihasclass = function($, _) {
        $ = sigetelementbyid($);
        if (!$)
            return;
        if (!$.className)
            return false;
        var A = String($.className).split(" ");
        return A["indexOf"](_) != -1
    }
    ;
    siaddclass = function($, _) {
        if (!_)
            return;
        if (sihasclass($, _) == false)
            jQuery($)["addClass"](_)
    }
    ;
    siremoveclass = function($, _) {
        if (!_)
            return;
        jQuery($)["removeClass"](_)
    }
    ;
    sigetmargins = function($) {
        $ = sigetelementbyid($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("margin-top"), 10) || 0,
            left: parseInt(_.css("margin-left"), 10) || 0,
            bottom: parseInt(_.css("margin-bottom"), 10) || 0,
            right: parseInt(_.css("margin-right"), 10) || 0
        }
    }
    ;
    sigetborders = function($) {
        $ = sigetelementbyid($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("border-top-width"), 10) || 0,
            left: parseInt(_.css("border-left-width"), 10) || 0,
            bottom: parseInt(_.css("border-bottom-width"), 10) || 0,
            right: parseInt(_.css("border-right-width"), 10) || 0
        }
    }
    ;
    sigetpaddings = function($) {
        $ = sigetelementbyid($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("padding-top"), 10) || 0,
            left: parseInt(_.css("padding-left"), 10) || 0,
            bottom: parseInt(_.css("padding-bottom"), 10) || 0,
            right: parseInt(_.css("padding-right"), 10) || 0
        }
    }
    ;
    sisetwidth = function(_, $) {
        _ = sigetelementbyid(_);
        $ = parseInt($);
        if (isNaN($) || !_)
            return;
        if (jQuery.boxModel) {
            var A = sigetpaddings(_)
              , B = sigetborders(_);
            $ = $ - A.left - A.right - B.left - B.right
        }
        if ($ < 0)
            $ = 0;
        _.style.width = $ + "px"
    }
    ;
    sisetheight = function(_, $) {
        _ = sigetelementbyid(_);
        $ = parseInt($);
        if (isNaN($) || !_)
            return;
        if (jQuery.boxModel) {
            var A = sigetpaddings(_)
              , B = sigetborders(_);
            $ = $ - A.top - A.bottom - B.top - B.bottom
        }
        if ($ < 0)
            $ = 0;
        _.style.height = $ + "px"
    }
    ;
    sigetwidth = function($, _) {
        $ = sigetelementbyid($);
        if ($.style.display == "none" || $.type == "text/javascript")
            return 0;
        return _ ? jQuery($).width() : jQuery($).outerWidth()
    }
    ;
    sigetheight = function($, _) {
        $ = sigetelementbyid($);
        if ($.style.display == "none" || $.type == "text/javascript")
            return 0;
        return _ ? jQuery($).height() : jQuery($).outerHeight()
    }
    ;
    sisetbox = function(A, C, B, $, _) {
        if (B === undefined) {
            B = C.y;
            $ = C.width;
            _ = C.height;
            C = C.x
        }
        si["setXY"](A, C, B);
        sisetwidth(A, $);
        sisetheight(A, _)
    }
    ;
    sigetbox = function(A) {
        var $ = si.getXY(A)
          , _ = {
            x: $[0],
            y: $[1],
            width: sigetwidth(A),
            height: sigetheight(A)
        };
        _.left = _.x;
        _.top = _.y;
        _.right = _.x + _.width;
        _.bottom = _.y + _.height;
        return _
    }
    ;
    sisetstyle = function(A, B) {
        A = sigetelementbyid(A);
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
    sigetstyle = function() {
        var $ = document.defaultView;
        return new Function("el","style",["style[\"indexOf\"]('-')>-1 && (style=style.replace(/-(\\w)/g,function(m,a){return a.toUpperCase()}));", "style=='float' && (style='", $ ? "cssFloat" : "styleFloat", "');return el.style[style] || ", $ ? "window.getComputedStyle(el,null)[style]" : "el.currentStyle[style]", " || null;"].join(""))
    }();
    siisAncestor = function(A, $) {
        var _ = false;
        A = sigetelementbyid(A);
        $ = sigetelementbyid($);
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
    sifindAncestor = function(B, A, $) {
        B = sigetelementbyid(B);
        var C = document.body, _ = 0, D;
        $ = $ || 50;
        if (typeof $ != "number") {
            D = sigetelementbyid($);
            $ = 10
        }
        while (B && B.nodeType == 1 && _ < $ && B != C && B != D) {
            if (sihasclass(B, A))
                return B;
            _++;
            B = B.parentNode
        }
        return null 
    }
    ;
    si.copyTo(si, {
        byId: sigetelementbyid,
        hasClass: sihasclass,
        addClass: siaddclass,
        removeClass: siremoveclass,
        getMargins: sigetmargins,
        getBorders: sigetborders,
        getPaddings: sigetpaddings,
        setWidth: sisetwidth,
        setHeight: sisetheight,
        getWidth: sigetwidth,
        getHeight: sigetheight,
        setBox: sisetbox,
        getBox: sigetbox,
        setStyle: sisetstyle,
        getStyle: sigetstyle,
        repaint: function($) {
            if (!$)
                $ = document.body;
            siaddclass($, "si-repaint");
            setTimeout(function() {
                siremoveclass($, "si-repaint")
            }
            , 1)
        },
        getSize: function($, _) {
            return {
                width: sigetwidth($, _),
                height: sigetheight($, _)
            }
        },
        setSize: function(A, $, _) {
            sisetwidth(A, $);
            sisetheight(A, _)
        },
        setX: function(_, B) {
            //B = parseInt(B);
            var $ = jQuery(_).offset()
              , A = parseInt($.top);
            if (A === undefined)
                A = $[1];
            si["setXY"](_, B, A)
        },
        setY: function(_, A) {
            //A = parseInt(A);
            var $ = jQuery(_).offset()
              , //B = parseInt($.left);
             B = $.left;
            if (B === undefined)
                B = $[0];
            si["setXY"](_, B, A)
        },
        setXY: function(_, B, A) {
            /*var $ = {
                left: parseInt(B),
                top: parseInt(A)
            };*/
        	var $ = {
                    left: B,
                    top: A
            };
            jQuery(_).offset($);
            jQuery(_).offset($)
        },
        getXY: function(_) {
            var $ = jQuery(_).offset();
            //20180809元素偏移0.5像素
            //return [parseInt($.left), parseInt($.top)]
            return [$.left, $.top]
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
            A = sigetelementbyid(A);
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
            B = sigetelementbyid(B);
            if (!B)
                return;
            var C = si["getChildNodes"](B, true);
            for (var $ = 0, D = C.length; $ < D; $++) {
                var A = C[$];
                if (_ && A == _)
                    ;
                else
                    B.removeChild(C[$])
            }
        },
        isAncestor: siisAncestor,
        findParent: sifindAncestor,
        findChild: function(_, A) {
            _ = sigetelementbyid(_);
            var B = _.getElementsByTagName("*");
            for (var $ = 0, C = B.length; $ < C; $++) {
                var _ = B[$];
                if (sihasclass(_, A))
                    return _
            }
        },
        isAncestor: function(A, $) {
            var _ = false;
            A = sigetelementbyid(A);
            $ = sigetelementbyid($);
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
            var B = sigetelementbyid(H) || document.body
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
            _ = sigetelementbyid(_);
            if (!!$) {
                jQuery(_)["removeClass"]("si-unselectable");
                if (isIE)
                    _.unselectable = "off";
                else {
                    _.style.MozUserSelect = "";
                    _.style.KhtmlUserSelect = "";
                    _.style.UserSelect = ""
                }
            } else {
                jQuery(_)["addClass"]("si-unselectable");
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
                $["select"]()
            } else if (B.setSelectionRange)
                B.setSelectionRange(A, _);
            try {
                B["focus"]()
            } catch (C) {}
        },
        getSelectRange: function(A) {
            A = sigetelementbyid(A);
            if (!A)
                return;
            try {
                A["focus"]()
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
        si.setAttr = function(B, C, _) {
            B.setAttribute(A ? C : ($[C] || C), _)
        }
        ;
        si.getAttr = function(B, C) {
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
    siTriggerEvent = function(_, $, C, A) {
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
            var $ = C["call"](A, _);
            if ($ === false)
                return false
        }
    }
    ;
    siBindEvent = function(_, $, D, A) {
        _ = sigetelementbyid(_);
        A = A || _;
        if (!_ || !$ || !D || !A)
            return false;
        var B = si["findListener"](_, $, D, A);
        if (B)
            return false;
        var C = si.createDelegate(D, A);
        si.listeners.push([_, $, D, A, C]);
        if (isFirefox && $ == "mousewheel")
            $ = "DOMMouseScroll";
        jQuery(_).bind($, C)
    }
    ;
    siUnBindEvent = function(_, $, C, A) {
        _ = sigetelementbyid(_);
        A = A || _;
        if (!_ || !$ || !C || !A)
            return false;
        var B = si["findListener"](_, $, C, A);
        if (!B)
            return false;
        si.listeners.remove(B);
        if (isFirefox && $ == "mousewheel")
            $ = "DOMMouseScroll";
        jQuery(_).unbind($, B[4])
    }
    ;
    si.copyTo(si, {
        listeners: [],
        on: siBindEvent,
        un: siUnBindEvent,
        findListener: function(A, _, F, B) {
            A = sigetelementbyid(A);
            B = B || A;
            if (!A || !_ || !F || !B)
                return false;
            var D = si.listeners;
            for (var $ = 0, E = D.length; $ < E; $++) {
                var C = D[$];
                if (C[0] == A && C[1] == _ && C[2] == F && C[3] == B)
                    return C
            }
        },
        clearEvent: function(A, _) {
            A = sigetelementbyid(A);
            if (!A)
                return false;
            var C = si.listeners;
            for (var $ = C.length - 1; $ >= 0; $--) {
                var B = C[$];
                if (B[0] == A)
                    if (!_ || _ == B[1])
                        siUnBindEvent(A, B[1], B[2], B[3])
            }
            A.onmouseover = A.onmousedown = null 
        }
    });
    si.__windowResizes = [];
    si.onWindowResize = function(_, $) {
        si.__windowResizes.push([_, $])
    }
    ;
    siBindEvent(window, "resize", function(C) {
        var _ = si.__windowResizes;
        for (var $ = 0, B = _.length; $ < B; $++) {
            var A = _[$];
            A[0]["call"](A[1], C)
        }
    }
    );
    si.htmlEncode = function(_) {
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
    si.htmlDecode = function(_) {
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
    si.copyTo(Array.prototype, {
        add: Array["prototype"].enqueue = function($) {
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
            return ( this["indexOf"]($) >= 0) 
        },
        indexOf: function(_, B) {
            var $ = this.length;
            for (var A = (B < 0) ? Math["max"](0, $ + B) : B || 0; A < $; A++)
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
            var $ = this["indexOf"](_);
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
    si.Keyboard = {
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
      , isOpera = Object["prototype"].toString["call"](window.opera) == "[object Opera]"
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
      , isFirefox = navigator.userAgent["indexOf"]("Firefox") > 0
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
    si.boxModel = !isBorderBox;
    si.isIE = isIE;
    si.isIE6 = isIE6;
    si.isIE7 = isIE7;
    si.isIE8 = isIE8;
    si.isIE9 = isIE9;
    si.isFirefox = isFirefox;
    si.isOpera = isOpera;
    si.isSafari = isSafari;
    if (jQuery)
        jQuery.boxModel = si.boxModel;
    si.noBorderBox = false;
    if (jQuery.boxModel == false && isIE && isIE9 == false)
        si.noBorderBox = true;
    si.MouseButton = {
        Left: 0,
        Middle: 1,
        Right: 2
    };
    if (isIE && !isIE9)
        si.MouseButton = {
            Left: 1,
            Middle: 4,
            Right: 2
        };
    si._MaskID = 1;
    si._MaskObjects = {};
    si["mask"] = function(C) {
        var _ = sigetelementbyid(C);
        if (si.isElement(_))
            C = {
                el: _
            };
        else if (typeof C == "string")
            C = {
                html: C
            };
        C = si.copyTo({
            html: "",
            cls: "",
            style: "",
            backStyle: "background:#ccc"
        }, C);
        C.el = sigetelementbyid(C.el);
        if (!C.el)
            C.el = document.body;
        _ = C.el;
        si["unmask"](C.el);
        _._maskid = si._MaskID++;
        si._MaskObjects[_._maskid] = C;
        var $ = si.append(_, "<div class=\"si-mask\">" + "<div class=\"si-mask-background\" style=\"" + C.backStyle + "\"></div>" + "<div class=\"si-mask-msg " + C.cls + "\" style=\"" + C.style + "\">" + C.html + "</div>" + "</div>");
        C.maskEl = $;
        if (!si.isNull(C.opacity))
            si.setOpacity($.firstChild, C.opacity);
        function A() {
            B.style.display = "block";
            var $ = si.getSize(B);
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
    si["unmask"] = function(_) {
        _ = sigetelementbyid(_);
        if (!_)
            _ = document.body;
        var A = si._MaskObjects[_._maskid];
        if (!A)
            return;
        delete si._MaskObjects[_._maskid];
        var $ = A.maskEl;
        A.maskEl = null ;
        if ($ && $.parentNode)
            $.parentNode.removeChild($)
    }
    ;
    si.Cookie = {
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
                _ = new Date(_["getTime"]() + (B * 1000 * 3600 * 24));
            document.cookie = C + "=" + escape($) + ((B == null ) ? "" : ("; expires=" + _.toGMTString())) + ";path=/" + (A ? "; domain=" + A : "")
        },
        del: function(_, $) {
            this["set"](_, null , -100, $)
        }
    };
    si.copyTo(si, {
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
                      , G = this["treeToArray"](_, I, J, A, E);
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
    si.treeToList = si["treeToArray"];
    si.listToTree = si.arrayToTree;
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
        var $ = Array["prototype"].slice["call"](arguments, 1);
        _ = _ || "";
        return _.replace(/\{(\d+)\}/g, function(A, _) {
            return $[_]
        }
        )
    }
    ;
    String["prototype"].trim = function() {
        var $ = /^\s+|\s+$/g;
        return function() {
            return this.replace($, "")
        }
    }
    ();
    si.copyTo(si, {
        measureText: function(B, _, C) {
            if (!this.measureEl)
                this.measureEl = si.append(document.body, "<div></div>");
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
                sisetstyle(this.measureEl, C);
            this.measureEl.innerHTML = _;
            return si.getSize(this.measureEl)
        }
    });
    jQuery(function() {
        var $ = new Date();
        si.isReady = true;
        si.analyze();
        _doEventBindFromQueue();
        if ((sigetstyle(document.body, "overflow") == "hidden" || sigetstyle(document.documentElement, "overflow") == "hidden") && (isIE6 || isIE7)) {
            jQuery(document.body).css("overflow", "visible");
            jQuery(document.documentElement).css("overflow", "visible")
        }
        si.__LastWindowWidth = document.documentElement.clientWidth;
        si.__LastWindowHeight = document.documentElement.clientHeight;
    }
    );
    si_onload = function($) {
        si.layout(null , false);
        siBindEvent(window, "resize", si_onresize)
    };
    siBindEvent(window, "load", si_onload);
    si.__LastWindowWidth = document.documentElement.clientWidth;
    si.__LastWindowHeight = document.documentElement.clientHeight;
    si.doWindowResizeTimer = null ;
    si.allowLayout = true;
    si_onresize = function(A) {
        if (si.doWindowResizeTimer)
            clearTimeout(si.doWindowResizeTimer);
        isWindowDisplay = si.isWindowDisplay();
        if ( isWindowDisplay == false || si.allowLayout == false)
            return;
        if (typeof Ext != "undefined")
            si.doWindowResizeTimer = setTimeout(function() {
                var _ = document.documentElement.clientWidth
                  , $ = document.documentElement.clientHeight;
                if (si.__LastWindowWidth == _ && si.__LastWindowHeight == $)
                    ;
                else {
                    si.__LastWindowWidth = _;
                    si.__LastWindowHeight = $;
                    si.layout(null , false)
                }
                si.doWindowResizeTimer = null 
            }
            , 300);
        else {
            var $ = 100;
            try {
                if (parent && parent != window && parent.si)
                    $ = 0
            } catch (_) {}
            si.doWindowResizeTimer = setTimeout(function() {
                var _ = document.documentElement.clientWidth
                  , $ = document.documentElement.clientHeight;
                if (si.__LastWindowWidth == _ && si.__LastWindowHeight == $)
                    ;
                else {
                    si.__LastWindowWidth = _;
                    si.__LastWindowHeight = $;
                    si.layout(null , false)
                }
                si.doWindowResizeTimer = null 
            }
            , $)
        }
    }
    ;
    si["isDisplay"] = function(_, A) {
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
    si.isWindowDisplay = function() {
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
                return si["isDisplay"](B, _.document.body)
            } else
                return true
        } catch (F) {
            return true
        }
    };
    
    isWindowDisplay = si.isWindowDisplay();
    si.layoutIFrames = function($) {
        if (!$)
            $ = document.body;
        if (!$)
            return;
        var _ = $.getElementsByTagName("iframe");
        setTimeout(function() {
            for (var A = 0, C = _.length; A < C; A++) {
                var B = _[A];
                try {
                    if (si["isDisplay"](B) && siisAncestor($, B)) {
                        if (B.contentWindow.si)
                            if (B.contentWindow.isWindowDisplay == false) {
                                B.contentWindow.isWindowDisplay = B.contentWindow.si.isWindowDisplay();
                                B.contentWindow.si.layout()
                            } else
                                B.contentWindow.si.layout(null , false);
                        B.contentWindow.si.layoutIFrames()
                    }
                } catch (D) {}
            }
        }
        , 30)
    };
    
    $.ajaxSetup({
        cache: false
    });
    
    if (isIE)
        setInterval(function() {
            CollectGarbage()
        }
        , 1000);
    si_unload = function(H) {
        try {
            var E = si._getTopWindow();
            E[si._WindowID] = "";
            delete E[si._WindowID]
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
        var A = si.getComponents();
        for ($ = 0,
        C = A.length; $ < C; $++) {
            var _ = A[$];
            _["destroy"](false)
        }
        A.length = 0;
        A = null ;
        siUnBindEvent(window, "unload", si_unload);
        siUnBindEvent(window, "load", si_onload);
        siUnBindEvent(window, "resize", si_onresize);
        si.components = {};
        si.classes = {};
        si.uiClasses = {};
        si.uids = {};
        si._topWindow = null ;
        window.si = null ;
        window.Owner = null ;
        window.CloseOwnerWindow = null ;
        try {
            CollectGarbage()
        } catch (H) {}
    };
    
    siBindEvent(window, "unload", si_unload);
    function __OnIFrameMouseDown() {
        jQuery(document).trigger("mousedown")
    }
    function sibindiframemousedown() {
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
        sibindiframemousedown()
    }
    , 1500);
    si.zIndex = 1000;
    si.getMaxZIndex = function() {
        return si.zIndex++
    };
    
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
    si._placeholder = function(A) {
        A = sigetelementbyid(A);
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
        _.className = "si-placeholder-label";
        A.parentNode.appendChild(_);
        A._placeholder_label = _;
        _.onmousedown = function() {
            A["focus"]()
        }
        ;
        A.onpropertychange = function(_) {
            _ = _ || window.event;
            if (_.propertyName == "value")
                $()
        }
        ;
        $();
        siBindEvent(A, "focus", function($) {
            if (!A["readOnly"])
                _.style.display = "none"
        }
        );
        siBindEvent(A, "blur", function(_) {
            $()
        }
        )
    };
    
    si.ajax = function($) {
        if (!$.dataType)
            $.dataType = "text";
        return window.jQuery.ajax($)
    };
    if (typeof window.rootpath == "undefined")
        rootpath = "/";
    si.loadJS = function(_, $) {
        if (!_)
            return;
        if (typeof $ == "function")
            return loadJS._async(_, $);
        else
            return loadJS._sync(_)
    }
    ;
    si.loadJS._js = {};
    si.loadJS._async = function(D, _) {
        var C = si.loadJS._js[D];
        if (!C)
            C = si.loadJS._js[D] = {
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
    si.loadJS._sync = function(A) {
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
    si.loadText = function(C) {
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
        var _ = "_t=" + new Date()["getTime"]();
        if (C["indexOf"]("?") == -1)
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
    si.loadJSON = function(url) {
        var text = loadText(url)
          , o = eval("(" + text + ")");
        return o
    }
    ;
    si.loadCSS = function(A, B) {
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
    si.loadCSS._css = {};
    si.innerHTML = function(A, _) {
        if (typeof A == "string")
            A = document.getElementById(A);
        if (!A)
            return;
        _ = "<div style=\"display:none\">&nbsp;</div>" + _;
        A.innerHTML = _;
        si.__executeScripts(A);
        var $ = A.firstChild
    }
    ;
    si.__executeScripts = function($) {
        var A = $.getElementsByTagName("script");
        for (var _ = 0, E = A.length; _ < E; _++) {
            var B = A[_]
              , D = B.src;
            if (D)
                si.loadJS(D);
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
    };
    
   si.DataBinding = function() {
        this._bindFields = [];
        this._bindForms = [];
        si.DataBinding["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.DataBinding, si.Component, {});
    siDataBindingPrototype = si.DataBinding["prototype"];
    siDataBindingPrototype._onvaluechanged = function(H) {
        if (this._doSetting)
            return;
        this._doSetting = true;
        var D = H.sender
          , _ = D["getValue"]();
        for (var $ = 0, G = this._bindFields.length; $ < G; $++) {
            var C = this._bindFields[$];
            if (C.control != D || C.mode === false)
                continue;var F = C.source
              , B = F["getCurrent"]();
            if (!B)
                continue;var A = {};
            A[C.field] = _;
            if (D["getText"] && D.textName)
                A[D.textName] = D["getText"]();
            F["updateRow"](B, A)
        }
        var E = this;
        setTimeout(function() {
            E._doSetting = false
        }
        , 10)
    };
    siDataBindingPrototype._oncurrentchanged = function(H) {
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
            if (C["setValue"])
                if (_) {
                    var A = _[D];
                    C["setValue"](A)
                } else
                    C["setValue"]("");
            if (C["setText"] && C.textName)
                if (_)
                    C["setText"](_[C.textName]);
                else
                    C["setText"]("")
        }
        var E = this;
        setTimeout(function() {
            E._doSetting = false
        }
        , 10)
    };
    siDataBindingPrototype["bindForm"] = function(B, F, D, A) {
        B = sigetelementbyid(B);
        F = si.get(F);
        if (!B || !F)
            return;
        var B = new si.Form(B)
          , $ = B.getFields();
        for (var _ = 0, E = $.length; _ < E; _++) {
            var C = $[_];
            this["bindField"](C, F, C["getName"](), D, A)
        }
    };
    siDataBindingPrototype["bindField"] = function(A, D, C, B, $) {
        A = si.get(A);
        D = si.get(D);
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
        D["on"]("currentchanged", this._oncurrentchanged, this);
        A["on"]("valuechanged", this._onvaluechanged, this)
    };
    siRegClass(si.DataBinding, "databinding");
    si.DataSet = function() {
        this._sources = {};
        this._data = {};
        this._links = [];
        this.rowIdFieldMap = {};
        si.DataSet["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.DataSet, si.Component, {});
    siDataSetPrototype = si.DataSet["prototype"];
    siDataSetPrototype._onselectionchanged = function(G) {
    var A = G.sender
      , _ = A["getSelected"]()
      , F = this._getAllLinks(A);
    for (var $ = 0, E = F.length; $ < E; $++) {
        var D = F[$]
          , C = this._sources[D.childName];
        if (_) {
            var B = {};
            B[D.parentField] = _[A["getIdField"]()];
            C["load"](B)
        } else
            C["loadData"]([])
    }
};
    siDataSetPrototype._getAllLinks = function(B) {
    var C = this._getNameFromSources(B)
      , D = [];
    for (var $ = 0, A = this._links.length; $ < A; $++) {
        var _ = this._links[$];
        if (_.parentName == C)
            D.push(_)
    }
    return D
};
    siDataSetPrototype._getParentNameFromSources = function(C) {
    var _ = this._getNameFromSources(C);
    for (var $ = 0, B = this._links.length; $ < B; $++) {
        var A = this._links[$];
        if (A.childName == _)
            return this._sources[A.parentName]
    }
};
    siDataSetPrototype._onpreload = function(M) {
    var J = M.sender
      , L = this._getNameFromSources(J)
      , K = M.sender["getIdField"]()
      , A = this._data[L]
      , $ = {};
    for (var F = 0, C = A.length; F < C; F++) {
        var G = A[F];
        $[G[K]] = G
    }
    var N = this.rowIdFieldMap[L];
    if (N)
        J.rowIdFieldMap = N;
    var I = M.data || [];
    for (F = 0,
    C = I.length; F < C; F++) {
        var G = I[F]
          , H = $[G[K]];
        if (H) {
            delete H._uid;
            si.copyTo(G, H)
        }
    }
    var D = this._getParentNameFromSources(J);
    if (J["getPageIndex"] && J["getPageIndex"]() == 0) {
        var E = [];
        for (F = 0,
        C = A.length; F < C; F++) {
            G = A[F];
            if (G._state == "added")
                if (D) {
                    var B = D["getSelected"]();
                    if (B && B[D["getIdField"]()] == G._parentId)
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
};
    siDataSetPrototype.onrowchanged = function(F) {
    var C = F.type
      , _ = F.record
      , D = this._getNameFromSources(F.sender)
      , E = this._hasChildElement(D, _, F.sender["getIdField"]())
      , A = this._data[D];
    if (E) {
        A = this._data[D];
        A.remove(E)
    }
    if (C == "removerow" && _._state == "added");
    else
        A.push(_);
    this.rowIdFieldMap[D] = F.sender.rowIdFieldMap;
    if (_._state == "added") {
        var $ = this._getParentNameFromSources(F.sender);
        if ($) {
            var B = $["getSelected"]();
            if (B)
                _._parentId = B[$["getIdField"]()];
            else
                A.remove(_)
        }
    }
};
    siDataSetPrototype._hasChildElement= function(E, _, D) {
    var B = this._data[E];
    if (!B)
        return false;
    for (var $ = 0, C = B.length; $ < C; $++) {
        var A = B[$];
        if (A[D] == _[D])
            return A
    }
    return null 
};
    siDataSetPrototype._getNameFromSources = function($) {
    for (var A in this._sources) {
        var _ = this._sources[A];
        if (_ == $)
            return A
    }
};
    siDataSetPrototype["getData"] = function() {
    return this._data
};
    siDataSetPrototype["clearData"] = function() {
    this._data = {};
    this.rowIdFieldMap = {};
    for (var $ in this._sources)
        this._data = []
};
    siDataSetPrototype["addLink"] = function(B, _, $) {
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
};
    siDataSetPrototype["add"] = function(_, $) {
    if (!_ || !$)
        return;
    this._sources[_] = $;
    this._data[_] = [];
    $.autoCreateNewID = true;
    $._idField = $["getIdField"]();
    $._needIdFieldMap = false;
    $["on"]("addrow", this.onrowchanged, this);
    $["on"]("updaterow", this.onrowchanged, this);
    $["on"]("deleterow", this.onrowchanged, this);
    $["on"]("removerow", this.onrowchanged, this);
    $["on"]("preload", this._onpreload, this);
    $["on"]("selectionchanged", this._onselectionchanged, this)
};
    siRegClass(si.DataSet, "dataset");
    si.Hidden = function() {
        si.Hidden["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Hidden, si.Control, {
        _clearBorder: false,
        formField: true,
        value: "",
        uiCls: "si-hidden"
    });
    sihiddenprototype = si.Hidden["prototype"];
    sihiddenprototype["getFormValue"] = function() {
    return this.el.value
};
	sihiddenprototype["getValue"] = function() {
    return this.value
};
	sihiddenprototype["setValue"] = function(_) {
    if (_ === null  || _ === undefined)
        _ = "";
    this.value = _;
    if (si.isDate(_)) {
        var B = _.getFullYear()
          , A = _.getMonth() + 1
          , $ = _.getDate();
        A = A < 10 ? "0" + A : A;
        $ = $ < 10 ? "0" + $ : $;
        this.el.value = B + "-" + A + "-" + $
    } else
        this.el.value = _
};
	sihiddenprototype["setName"] = function($) {
    this.name = $;
    this.el.name = $
};
	sihiddenprototype["_create"] = function() {
    this.el = document.createElement("input");
    this.el.type = "hidden";
    this.el.className = "si-hidden"
};
    siRegClass(si.Hidden, "hidden");
    si.Popup = function() {
        si.Popup["superclass"]["constructor"]["call"](this);
        this["setVisible"](false);
        this["setAllowDrag"](this.allowDrag);
        this["setAllowResize"](this["allowResize"])
    }
    ;
    siextend(si.Popup, si.Container, {
        _clearBorder: false,
        uiCls: "si-popup"
    });
    siPopupPrototype = si.Popup["prototype"];
    siPopupPrototype["getAttrs"] = function($) {
    var A = si.Popup["superclass"]["getAttrs"]["call"](this, $);
    si["_ParseString"]($, A, ["popupEl", "popupCls", "showAction", "hideAction", "xAlign", "yAlign", "modalStyle", "onbeforeopen", "open", "onbeforeclose", "onclose"]);
    si["_ParseBool"]($, A, ["showModal", "showShadow", "allowDrag", "allowResize"]);
    si["_ParseInt"]($, A, ["showDelay", "hideDelay", "xOffset", "yOffset", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
    var _ = si["getChildNodes"]($, true);
    A.body = _;
    return A
};
    siPopupPrototype["setBody"] = function(_) {
    if (!_)
        return;
    if (!si.isArray(_))
        _ = [_];
    for (var $ = 0, A = _.length; $ < A; $++)
        si.append(this.contentEl, _[$])
};
    siPopupPrototype["setHeight"] = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.height = $;
    if ($["indexOf"]("px") != -1)
        sisetheight(this.el, $);
    else
        this.el.style.height = $;
    this["_sizeChaned"]()
};
    siPopupPrototype["setWidth"] = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.width = $;
    if ($["indexOf"]("px") != -1)
        sisetwidth(this.el, $);
    else
        this.el.style.width = $;
    this["_sizeChaned"]()
};
    siPopupPrototype["destroy"] = function($) {
    if (this.el)
        this.el.onmouseover = null ;
    si.removeChilds(this.contentEl);
    siUnBindEvent(document, "mousedown", this._onOutComponentDocumentMouseDown, this);
    siUnBindEvent(window, "resize", this._onCommonWindowResize, this);
    if (this._modalEl) {
        jQuery(this._modalEl).remove();
        this._modalEl = null 
    }
    if (this.shadowEl) {
        jQuery(this.shadowEl).remove();
        this.shadowEl = null 
    }
    si.Popup["superclass"]["destroy"]["call"](this, $)
};
    siPopupPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    si.Popup["superclass"]["doLayout"]["call"](this);
    this._initShadow();
    var A = this.el.childNodes;
    if (A)
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            si.layout(_)
        }
};
    siPopupPrototype["_initEvents"] = function() {
    siEventTimer(function() {
        siTriggerEvent(this.el, "mouseover", this._onmouseover, this)
    }
    , this)
};
    siPopupPrototype["_create"] = function() {
    var $ = this.el = document.createElement("div");
    this.el.className = "si-popup";
    this.contentEl = this.el
};
    siRegClass(si.Popup, "popup");
    base_prototype = {
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
        dragCls: "si-popup-drag",
        resizeCls: "si-popup-resize",
        allowDrag: false,
        allowResize: false,
        _baseprototypeunbindevent: function() {
            if (!this.popupEl)
                return;
            siUnBindEvent(this.popupEl, "click", this._onpopupclick, this);
            siUnBindEvent(this.popupEl, "contextmenu", this._onpopupcontextmenu, this);
            siUnBindEvent(this.popupEl, "mouseover", this._onmouseover, this)
        },
        _baseprototypebindevent: function() {
            if (!this.popupEl)
                return;
            siBindEvent(this.popupEl, "click", this._onpopupclick, this);
            siBindEvent(this.popupEl, "contextmenu", this._onpopupcontextmenu, this);
            siBindEvent(this.popupEl, "mouseover", this._onmouseover, this)
        },
        doShow: function(A) {
            var $ = {
                popupEl: this.popupEl,
                htmlEvent: A,
                cancel: false
            };
            this["fire"]("BeforeOpen", $);
            if ($.cancel == true)
                return;
            this["fire"]("opening", $);
            if ($.cancel == true)
                return;
            if (!this.popupEl)
                this["show"]();
            else {
                var _ = {};
                if (A)
                    _.xy = [A.pageX, A.pageY];
                this["showAtEl"](this.popupEl, _)
            }
        },
        doHide: function(_) {
            var $ = {
                popupEl: this.popupEl,
                htmlEvent: _,
                cancel: false
            };
            this["fire"]("BeforeClose", $);
            if ($.cancel == true)
                return;
            this.close()
        },
        show: function(_, $) {
            this["showAtPos"](_, $)
        },
        showAtPos: function(B, A) {
            this["render"](document.body);
            if (!B)
                B = "center";
            if (!A)
                A = "middle";
            this.el.style.position = "absolute";
            this.el.style.left = "-2000px";
            this.el.style.top = "-2000px";
            this.el.style.display = "";
            this._setBoxWidthAndHeight();
            var _ = si.getViewportBox()
              , $ = sigetbox(this.el);
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
            this._beforebaseprototypefireopen(B, A)
        },
        _initModal: function() {
            jQuery(this._modalEl).remove();
            if (!this["showModal"])
                return;
            if (this.visible == false)
                return;
            var $ = document.documentElement
              , A = parseInt(Math["max"](document.body.scrollWidth, $ ? $.scrollWidth : 0))
              , D = parseInt(Math["max"](document.body.scrollHeight, $ ? $.scrollHeight : 0))
              , C = si.getViewportBox()
              , B = C.height;
            if (B < D)
                B = D;
            var _ = C.width;
            if (_ < A)
                _ = A;
            this._modalEl = si.append(document.body, "<div class=\"si-modal\"></div>");
            this._modalEl.style.height = B + "px";
            this._modalEl.style.width = _ + "px";
            this._modalEl.style.zIndex = sigetstyle(this.el, "zIndex") - 1;
            sisetstyle(this._modalEl, this.modalStyle)
        },
        _initShadow: function() {
            if (!this.shadowEl)
                this.shadowEl = si.append(document.body, "<div class=\"si-shadow\"></div>");
            this.shadowEl.style.display = this["showShadow"] ? "" : "none";
            if (this["showShadow"]) {
                function $() {
                    this.shadowEl.style.display = "";
                    var $ = sigetbox(this.el)
                      , A = this.shadowEl.style;
                    A.width = $.width + "px";
                    A.height = $.height + "px";
                    A.left = $.x + "px";
                    A.top = $.y + "px";
                    var _ = sigetstyle(this.el, "zIndex");
                    if (!isNaN(_))
                        this.shadowEl.style.zIndex = _ - 2
                }
                this.shadowEl.style.display = "none";
                if (this._basePrototypeTempTimer) {
                    clearTimeout(this._basePrototypeTempTimer);
                    this._basePrototypeTempTimer = null 
                }
                var _ = this;
                this._basePrototypeTempTimer = setTimeout(function() {
                    _._basePrototypeTempTimer = null ;
                    $["call"](_)
                }
                , 20)
            }
        },
        _setBoxWidthAndHeight: function() {
            this.el.style.display = "";
            var $ = sigetbox(this.el);
            if ($.width > this.maxWidth) {
                sisetwidth(this.el, this.maxWidth);
                $ = sigetbox(this.el)
            }
            if ($.height > this.maxHeight) {
                sisetheight(this.el, this.maxHeight);
                $ = sigetbox(this.el)
            }
            if ($.width < this.minWidth) {
                sisetwidth(this.el, this.minWidth);
                $ = sigetbox(this.el)
            }
            if ($.height < this.minHeight) {
                sisetheight(this.el, this.minHeight);
                $ = sigetbox(this.el)
            }
        },
        showAtEl: function(H, D) {
            H = sigetelementbyid(H);
            if (!H)
                return;
            if (!this["isRender"]() || this.el.parentNode != document.body)
                this["render"](document.body);
            var A = {
                xAlign: this.xAlign,
                yAlign: this.yAlign,
                xOffset: this.xOffset,
                yOffset: this.yOffset,
                popupCls: this.popupCls
            };
            si.copyTo(A, D);
            siaddclass(H, A.popupCls);
            H.popupCls = A.popupCls;
            this._popupEl = H;
            this.el.style.position = "absolute";
            this.el.style.left = "-2000px";
            this.el.style.top = "-2000px";
            this.el.style.display = "";
            this["doLayout"]();
            this._setBoxWidthAndHeight();
            var J = si.getViewportBox()
              , B = sigetbox(this.el)
              , L = sigetbox(H)
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
            //popup偏移0.5像素
            //M = parseInt(M);
            //K = parseInt(K);
            if (A.outYAlign || A.outXAlign) {
                if (A.outYAlign == "above")
                    if (K + B.height > J.bottom) {
                        var _ = L.y - J.y
                          , I = J.bottom - L.bottom;
                        if (_ > I)
                        	// 一个像素位移，避免边框重复
                            K = L.y - B.height + 1
                    }else{
                    	 // 一个像素位移，避免边框重复
                    	K = K - 1
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
               
                this._beforebaseprototypefireopen(M, K)
            } else
                this["showAtPos"](M + A.xOffset, K + A.yOffset -1)
        },
        _beforebaseprototypefireopen: function(A, _) {
            this.el.style.display = "";
            this.el.style.zIndex = si.getMaxZIndex();
            si.setX(this.el, A);
            si.setY(this.el, _);
            this["setVisible"](true);
            if (this.hideAction == "mouseout")
                siBindEvent(document, "mousemove", this._onbaseprotomousemove, this);
            var $ = this;
            //this._initShadow();
            this._initModal();
            si.layoutIFrames(this.el);
            this.isPopup = true;
            siBindEvent(document, "mousedown", this._onOutComponentDocumentMouseDown, this);
            siBindEvent(window, "resize", this._onCommonWindowResize, this);
            this["fire"]("Open")
        },
        open: function() {
            this["show"]()
        },
        close: function() {
            this["hide"]()
        },
        hide: function() {
            if (!this.el)
                return;
            if (this.popupEl)
                siremoveclass(this.popupEl, this.popupEl.popupCls);
            if (this._popupEl)
                siremoveclass(this._popupEl, this._popupEl.popupCls);
            this._popupEl = null ;
            jQuery(this._modalEl).remove();
            if (this.shadowEl)
                this.shadowEl.style.display = "none";
            siUnBindEvent(document, "mousemove", this._onbaseprotomousemove, this);
            siUnBindEvent(document, "mousedown", this._onOutComponentDocumentMouseDown, this);
            siUnBindEvent(window, "resize", this._onCommonWindowResize, this);
            this["setVisible"](false);
            this.isPopup = false;
            this["fire"]("Close")
        },
        setPopupEl: function($) {
            $ = sigetelementbyid($);
            if (!$)
                return;
            this._baseprototypeunbindevent();
            this.popupEl = $;
            this._baseprototypebindevent()
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
            this["showModal"] = $
        },
        setShowShadow: function($) {
            this["showShadow"] = $
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
            siremoveclass(this.el, this.dragCls);
            if ($)
                siaddclass(this.el, this.dragCls)
        },
        setAllowResize: function($) {
            this["allowResize"] = $;
            siremoveclass(this.el, this.resizeCls);
            if ($)
                siaddclass(this.el, this.resizeCls)
        },
        _onpopupclick: function(_) {
            if (this.doingLayout)
                return;
            if (this.showAction != "leftclick")
                return;
            var $ = jQuery(this.popupEl).attr("allowPopup");
            if (String($) == "false")
                return;
            this.doShow(_)
        },
        _onpopupcontextmenu: function(_) {
            if (this.doingLayout)
                return;
            if (this.showAction != "rightclick")
                return;
            var $ = jQuery(this.popupEl).attr("allowPopup");
            if (String($) == "false")
                return;
            _.preventDefault();
            this.doShow(_)
        },
        _onmouseover: function(A) {
            if (this.doingLayout)
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
        _onbaseprotomousemove: function($) {
            if (this.hideAction != "mouseout")
                return;
            this._baseprototypedelayhide($)
        },
        _onOutComponentDocumentMouseDown: function($) {
            if (this.hideAction != "outerclick")
                return;
            if (!this.isPopup)
                return;
            if (this["within"]($) || (this.popupEl && siisAncestor(this.popupEl, $.target)))
                ;
            else
                this.doHide($)
        },
        _baseprototypedelayhide: function(_) {
            if (siisAncestor(this.el, _.target) || (this.popupEl && siisAncestor(this.popupEl, _.target)))
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
        _onCommonWindowResize: function($) {
            if (this["isDisplay"]() && !si.isIE6)
                this._initModal()
        },
        within: function(C) {
            if (siisAncestor(this.el, C.target))
                return true;
            var $ = si.getChildControls(this);
            for (var _ = 0, B = $.length; _ < B; _++) {
                var A = $[_];
                if (A["within"](C))
                    return true
            }
            return false
        }
    };
    si.copyTo(si.Popup.prototype, base_prototype);
    si.Button = function() {
        si.Button["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Button, si.Control, {
        text: "",
        iconCls: "",
        iconStyle: "",
        plain: false,
        checkOnClick: false,
        checked: false,
        groupName: "",
        _buttonPlainCls: "si-button-plain",
        _hoverCls: "si-button-hover",
        _pressedCls: "si-button-pressed",
        _checkedCls: "si-button-checked",
        _disabledCls: "si-button-disabled",
        allowCls: "",
        _clearBorder: false,
        uiCls: "si-button",
        href: "",
        target: ""
    });
    siButtonPrototype = si.Button["prototype"];
    siButtonPrototype["getAttrs"] = function($) {
    var _ = si.Button["superclass"]["getAttrs"]["call"](this, $);
    _.text = $.innerHTML;
    si["_ParseString"]($, _, ["text", "href", "iconCls", "iconStyle", "iconPosition", "groupName", "menu", "onclick", "oncheckedchanged", "target"]);
    si["_ParseBool"]($, _, ["plain", "checkOnClick", "checked"]);
    return _
};
    siButtonPrototype["onClick"] = function(_, $) {
    this["on"]("click", _, $)
};
    siButtonPrototype._onOutComponentDocumentMouseUp = function($) {
    this["removeCls"](this._pressedCls);
    siUnBindEvent(document, "mouseup", this._onOutComponentDocumentMouseUp, this)
};
    siButtonPrototype._onmousedown = function($) {
    if (this["isReadOnly"]())
        return;
    this["addCls"](this._pressedCls);
    siBindEvent(document, "mouseup", this._onOutComponentDocumentMouseUp, this)
};
    siButtonPrototype._onclick = function(D) {
    if (this["readOnly"] || this.enabled == false)
        return;
    this["focus"]();
    if (this["checkOnClick"])
        if (this["groupName"]) {
            var _ = this["groupName"]
              , C = si.findControls(function($) {
                if ($.type == "button" && $["groupName"] == _)
                    return true
            }
            );
            if (C.length > 0) {
                for (var $ = 0, A = C.length; $ < A; $++) {
                    var B = C[$];
                    if (B != this)
                        B["setChecked"](false)
                }
                this["setChecked"](true)
            } else
                this["setChecked"](!this.checked)
        } else
            this["setChecked"](!this.checked);
    this["fire"]("click", {
        htmlEvent: D
    });
    return false
};
    siButtonPrototype["doClick"] = function() {
    this._onclick(null )
};
    siButtonPrototype["getChecked"] = function() {
    return this.checked
};
    siButtonPrototype["setChecked"] = function($) {
    var _ = this.checked != $;
    this.checked = $;
    if ($)
        this["addCls"](this._checkedCls);
    else
        this["removeCls"](this._checkedCls);
    if (_)
        this["fire"]("CheckedChanged")
};
    siButtonPrototype["getCheckOnClick"] = function() {
    return this["checkOnClick"]
};
    siButtonPrototype["setCheckOnClick"] = function($) {
    this["checkOnClick"] = $
};
    siButtonPrototype["getGroupName"] = function() {
    return this["groupName"]
};
    siButtonPrototype["setGroupName"] = function($) {
    this["groupName"] = $
};
    siButtonPrototype["getPlain"] = function() {
    return this.plain
};
    siButtonPrototype["setPlain"] = function($) {
    this.plain = $;
    if ($)
        this["addCls"](this._buttonPlainCls);
    else
        this["removeCls"](this._buttonPlainCls)
};
    siButtonPrototype["getIconPosition"] = function() {
    return this.iconPosition
};
    siButtonPrototype["setIconPosition"] = function($) {
    this.iconPosition = "left";
    this["doUpdate"]()
};
    siButtonPrototype["getIconStyle"] = function() {
    return this["iconStyle"]
};
    siButtonPrototype["setIconStyle"] = function($) {
    this["iconStyle"] = $;
    this["doUpdate"]()
};
    siButtonPrototype["getIconCls"] = function() {
    return this.iconCls
};
    siButtonPrototype["setIconCls"] =  function($) {
    this.iconCls = $;
    this["doUpdate"]()
};
    siButtonPrototype["getText"] = function() {
    return this.text
};
    siButtonPrototype["setText"] = function($) {
    if (this.text != $) {
        this.text = $;
        this["doUpdate"]()
    }
};
    siButtonPrototype["getTarget"] = function() {
    return this.target
};
    siButtonPrototype["setTarget"] = function($) {
    this.target = $;
    this.el.target = $
};
    siButtonPrototype["getHref"] = function() {
    return this.href
};
    siButtonPrototype["setHref"] = function($) {
    this.href = $;
    this.el.href = $;
    var _ = this.el;
    setTimeout(function() {
        _.onclick = null 
    }
    , 100)
};
    siButtonPrototype["doUpdate"] = function() {
    if (this.allowUpdate === false)
        return;
    var _ = ""
      , $ = this.text;
    if (this.iconCls && $)
        _ = " si-button-icon " + this.iconCls;
    else if (this.iconCls && $ === "") {
        _ = " si-button-iconOnly " + this.iconCls;
        $ = "&nbsp;"
    } else if ($ == "")
        $ = "&nbsp;";
    var A = "<span class=\"si-button-text " + _ + "\">" + $ + "</span>";
    if (this.allowCls)
        A = A + "<span class=\"si-button-allow " + this.allowCls + "\"></span>";
    this.el.innerHTML = A
};
    siButtonPrototype["destroy"] =  function($) {
    if (this.el) {
        this.el.onclick = null ;
        this.el.onmousedown = null 
    }
    if (this.menu)
        this.menu.owner = null ;
    this.menu = null ;
    si.Button["superclass"]["destroy"]["call"](this, $)
};
    siButtonPrototype["_initEvents"] =  function() {
    siEventTimer(function() {
        siTriggerEvent(this.el, "mousedown", this._onmousedown, this);
        siTriggerEvent(this.el, "click", this._onclick, this)
    }
    , this)
};
    siButtonPrototype["_create"] = function() {
    this.el = document.createElement("a");
    this.el.className = "si-button";
    this.el.hideFocus = true;
    this.el.href = "javascript:void(0)";
    this["doUpdate"]()
};
    siButtonPrototype["set"] = function($) {
    if (typeof $ == "string")
        return this;
    this.allowUpdate = $.text || $["iconStyle"] || $.iconCls || $.iconPosition;
    si.Button["superclass"]["set"]["call"](this, $);
    if (this.allowUpdate === false) {
        this.allowUpdate = true;
        this["doUpdate"]()
    }
    return this
};
    siRegClass(si.Button, "button");
    si.MenuButton = function() {
        si.MenuButton["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.MenuButton, si.Button, {
        uiCls: "si-menubutton",
        allowCls: "si-button-menu"
    });
    siMenuButtonPrototype = si.MenuButton["prototype"];
    siMenuButtonPrototype["setEnabled"] = function($) {
        this.enabled = $;
        if ($)
            this["removeCls"](this._disabledCls);
        else
            this["addCls"](this._disabledCls);
        jQuery(this.el).attr("allowPopup", !!$)
    };
    siMenuButtonPrototype["setMenu"] = function($) {
        if (si.isArray($))
            $ = {
                type: "menu",
                items: $
            };
        if (typeof $ == "string") {
            var _ = sigetelementbyid($);
            if (!_)
                return;
            si.analyze($);
            $ = si.get($)
        }
        if (this.menu !== $) {
            this.menu = si.getAndCreate($);
            this.menu.setPopupEl(this.el);
            this.menu.setPopupCls("si-button-popup");
            this.menu.setShowAction("leftclick");
            this.menu.setHideAction("outerclick");
            this.menu.setXAlign("left");
            this.menu.setYAlign("below");
            this.menu["hide"]();
            this.menu.owner = this
        }
    };
    siRegClass(si.MenuButton, "menubutton");
    si.SplitButton = function() {
        si.SplitButton["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.SplitButton, si.MenuButton, {
        uiCls: "si-splitbutton",
        allowCls: "si-button-split"
    });
    siRegClass(si.SplitButton, "splitbutton");
    si.CheckBox = function() {
        si.CheckBox["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.CheckBox, si.Control, {
        formField: true,
        _clearText: false,
        text: "",
        checked: false,
        defaultValue: false,
        trueValue: true,
        falseValue: false,
        uiCls: "si-checkbox"
    });
    siCheckBoxPrototype = si.CheckBox["prototype"];
    siCheckBoxPrototype["getAttrs"] = function(A) {
    var D = si.CheckBox["superclass"]["getAttrs"]["call"](this, A)
      , C = jQuery(A);
    D.text = A.innerHTML;
    si["_ParseString"](A, D, ["text", "oncheckedchanged", "onclick", "onvaluechanged"]);
    si["_ParseBool"](A, D, ["enabled"]);
    var B = si.getAttr(A, "checked");
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
};
    siCheckBoxPrototype._onCheckBoxElClick = function($) {
    if (this["isReadOnly"]())
        return;
    this["setChecked"](!this.checked);
    this["fire"]("checkedchanged", {
        checked: this.checked
    });
    this["fire"]("valuechanged", {
        value: this["getValue"]()
    });
    this["fire"]("click", $, this)
};
    siCheckBoxPrototype["getFalseValue"] = function() {
    return this.falseValue
};
    siCheckBoxPrototype["setFalseValue"] = function($) {
    this.falseValue = $
};
    siCheckBoxPrototype["getTrueValue"] = function() {
    return this.trueValue
};
    siCheckBoxPrototype["setTrueValue"] = function($) {
    this.inputEl.value = $;
    this.trueValue = $
};
    siCheckBoxPrototype["getFormValue"] = function() {
    return this["getValue"]()
};
    siCheckBoxPrototype["getValue"] = function() {
    return String(this.checked == true ? this.trueValue : this.falseValue)
};
    siCheckBoxPrototype["setValue"] = function($) {
    if (this.checked != $) {
        this["setChecked"]($);
        this.value = this["getValue"]()
    }
};
    siCheckBoxPrototype["getChecked"] = function() {
    return this.checked
};
    siCheckBoxPrototype["setChecked"] = function($) {
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
        this.inputEl.checked = this.checked;
        this.value = this["getValue"]()
    }
};
    siCheckBoxPrototype["getText"] = function() {
    return this.text
};
    siCheckBoxPrototype["setText"] = function($) {
    if (this.text !== $) {
        this.text = $;
        this.labelEl.innerHTML = $
    }
};
    siCheckBoxPrototype["setName"] = function($) {
    this.name = $;
    si.setAttr(this.inputEl, "name", this.name)
};
    siCheckBoxPrototype["_initEvents"] = function() {
    siEventTimer(function() {
        siBindEvent(this.el, "click", this._onCheckBoxElClick, this);
        this.inputEl.onmouseup = function() {
            return false
        }
        ;
        var $ = this;
        this.inputEl.onclick = function() {
            if ($["isReadOnly"]())
                return false
        }
    }
    , this)
};
    siCheckBoxPrototype["destroy"] = function($) {
    if (this.inputEl) {
        this.inputEl.onmouseup = null ;
        this.inputEl.onclick = null ;
        this.inputEl = null 
    }
    si.CheckBox["superclass"]["destroy"]["call"](this, $)
};
    siCheckBoxPrototype["_create"] = function() {
    var $ = this.uid + "$check";
    this.el = document.createElement("span");
    this.el.className = "si-checkbox";
    this.el.innerHTML = "<input id=\"" + $ + "\" name=\"" + this.id + "\" type=\"checkbox\" class=\"si-checkbox-check\"><label for=\"" + $ + "\" onclick=\"return false;\">" + this.text + "</label>";
    this.inputEl = this.el.firstChild;
    this.labelEl = this.el.lastChild
};
    siRegClass(si.CheckBox, "checkbox");
    si.ButtonEdit = function() {
        si.ButtonEdit["superclass"]["constructor"]["call"](this);
        var $ = this["isReadOnly"]();
        if ($ || this.allowInput == false)
            this.textEl["readOnly"] = true;
        if (this.enabled == false)
            this["addCls"](this._disabledCls);
        if ($)
            this["addCls"](this._readonlyCls);
        if (this.required)
            this["addCls"](this.requiredCls)
    }
    ;
    siextend(si.ButtonEdit, si.ValidatorBase, {
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
        _noInputCls: "si-buttonedit-noInput",
        _readonlyCls: "si-buttonedit-readOnly",
        _disabledCls: "si-buttonedit-disabled",
        _emptyCls: "si-buttonedit-empty",
        _focusCls: "si-buttonedit-focus",
        _buttonCls: "si-buttonedit-button",
        _hoverCls: "si-buttonedit-button-hover",
        _pressedCls: "si-buttonedit-button-pressed",
        _closeCls: "si-buttonedit-close",
        uiCls: "si-buttonedit",
        _isEventBinded: false,
        _buttonWidth: 20,
        _closeWidth: 20,
        errorIconEl: null ,
        textName: "",
        inputStyle: ""
    });
    siButtonEditPrototype = si.ButtonEdit["prototype"];
    siButtonEditPrototype["getAttrs"] = function($) {
        var A = si.ButtonEdit["superclass"]["getAttrs"]["call"](this, $)
          , _ = jQuery($);
        si["_ParseString"]($, A, ["value", "text", "textName", "emptyText", "inputStyle", "onenter", "onkeydown", "onkeyup", "onkeypress", "onbuttonclick", "onbuttonmousedown", "ontextchanged", "onfocus", "onblur", "oncloseclick"]);
        si["_ParseBool"]($, A, ["allowInput", "inputAsValue", "selectOnFocus", "showClose"]);
        si["_ParseInt"]($, A, ["maxLength", "minLength"]);
        return A
    };
    siButtonEditPrototype["setInputStyle"] = function($) {
        this.inputStyle = $;
        sisetstyle(this.textEl, $)
    };
    siButtonEditPrototype["getShowClose"] = function($) {
        return this.showClose
    };
    siButtonEditPrototype["setShowClose"] = function($) {
        this.showClose = $;
        this["_doInputLayout"]()
    };
    siButtonEditPrototype["getSelectOnFocus"] = function($) {
        return this.selectOnFocus
    };
    siButtonEditPrototype["setSelectOnFocus"] = function($) {
        this.selectOnFocus = $
    };
    siButtonEditPrototype["getTextName"] = function() {
        return this.textName
    };
    siButtonEditPrototype["setTextName"] = function($) {
        this.textName = $;
        if (this.textEl)
            si.setAttr(this.textEl, "name", this.textName)
    };
    siButtonEditPrototype["onTextChanged"] = function(_, $) {
        this["on"]("textchanged", _, $)
    };
    siButtonEditPrototype["onButtonMouseDown"] = function(_, $) {
        this["on"]("buttonmousedown", _, $)
    };
    siButtonEditPrototype["onButtonClick"] = function(_, $) {
        this["on"]("buttonclick", _, $)
    };
    siButtonEditPrototype._onButtonMouseDown = function(_, $) {
        this["focus"]();
        this["addCls"](this._focusCls);
        this["fire"]("buttonmousedown", {
            htmlEvent: _,
            spinType: $
        })
    };
    siButtonEditPrototype._onCommonButtonClick = function($) {
        var _ = {
            htmlEvent: $,
            cancel: false
        };
        this["fire"]("beforebuttonclick", _);
        if (_.cancel == true)
            return;
        this["fire"]("buttonclick", _)
    };
    siButtonEditPrototype._onboxkeypress = function($) {
        this["fire"]("keypress", {
            htmlEvent: $
        })
    };
    siButtonEditPrototype._onboxkeyup = function($) {
        this["fire"]("keyup", {
            htmlEvent: $
        })
    };
    siButtonEditPrototype._oncommonchange = function() {
        var _ = this.textEl.value
          , $ = this["getValue"]();
        this["setValue"](_);
        if ($ !== this["getFormValue"]())
            this._onbeforevaluechanged()
    };
    siButtonEditPrototype._oncommonkeydown = function(B) {
        var A = {
            htmlEvent: B
        };
        this["fire"]("keydown", A);
        if (B.keyCode == 8 && (this["isReadOnly"]() || this.allowInput == false))
            return false;
        if (B.keyCode == 13 || B.keyCode == 9) {
            var $ = this;
            $._oncommonchange(null );
            if (B.keyCode == 13) {
                var _ = this;
                _["fire"]("enter", A)
            }
        }
        if (B.keyCode == 27)
            B.preventDefault()
    };
    siButtonEditPrototype._oncommonblur = function(_) {
        var $ = this;
        setTimeout(function() {
            $["__fireBlur"](_)
        }
        , 10)
    };
    siButtonEditPrototype["__fireBlur"] = function(A) {
        this._focused = false;
        var $ = this;
        function _() {
            if ($._focused == false)
                $["removeCls"]($._focusCls)
        }
        setTimeout(function() {
            _["call"]($)
        }
        , 2);
        this["fire"]("blur", {
            htmlEvent: A
        })
    };
    siButtonEditPrototype._onfocus = function($) {
        this["doUpdate"]();
        this._initCommonEvent();
        if (this["isReadOnly"]())
            return;
        this._focused = true;
        this["addCls"](this._focusCls);
        if (this.selectOnFocus)
            this["selectText"]();
        this["fire"]("focus", {
            htmlEvent: $
        })
    };
    siButtonEditPrototype._onOutComponentDocumentMouseUp = function(_) {
        this._clickTarget = null ;
        var $ = this;
        setTimeout(function() {
            var A = $._buttonEl.getElementsByTagName("*");
            for (var _ = 0, B = A.length; _ < B; _++)
                siremoveclass(A[_], $._pressedCls);
            siremoveclass($._buttonEl, $._pressedCls);
            siremoveclass($.el, $._pressedCls)
        }
        , 80);
        siUnBindEvent(document, "mouseup", this._onOutComponentDocumentMouseUp, this)
    };
    siButtonEditPrototype._onmousedown = function(B) {
        if (this["isReadOnly"]() || this.enabled == false)
            return;
        if (!siisAncestor(this.borderEl, B.target))
            return;
        if (!siisAncestor(this.textEl, B.target)) {
            this._clickTarget = B.target;
            var $ = this;
            setTimeout(function() {
                $["focus"]();
                si["selectRange"]($.textEl, 1000, 1000)
            }
            , 1);
            if (siisAncestor(this._buttonEl, B.target)) {
                var _ = sifindAncestor(B.target, "si-buttonedit-up")
                  , A = sifindAncestor(B.target, "si-buttonedit-down");
                if (_) {
                    siaddclass(_, this._pressedCls);
                    this._onButtonMouseDown(B, "up")
                } else if (A) {
                    siaddclass(A, this._pressedCls);
                    this._onButtonMouseDown(B, "down")
                } else {
                    siaddclass(this._buttonEl, this._pressedCls);
                    this._onButtonMouseDown(B)
                }
                siBindEvent(document, "mouseup", this._onOutComponentDocumentMouseUp, this)
            }
        }
    };
    siButtonEditPrototype._onclick = function(_) {
        if (this["isReadOnly"]() || this.enabled == false)
            return;
        if (!siisAncestor(this.borderEl, _.target))
            return;
        var $ = new Date();
        if (siisAncestor(this._buttonEl, _.target))
            this._onCommonButtonClick(_);
        if (sifindAncestor(_.target, this._closeCls))
            this["fire"]("closeclick", {
                htmlEvent: _
            })
    };
    siButtonEditPrototype.removeErrorIconEl = function() {
        if (this.errorIconEl) {
            var $ = this.errorIconEl;
            jQuery($).remove()
        }
        this.errorIconEl = null 
    };
    siButtonEditPrototype["getErrorIconEl"] = function() {
        if (!this.errorIconEl)
            this.errorIconEl = si.append(this.el, "<span class=\"si-errorIcon\"></span>");
        return this.errorIconEl
    };
    siButtonEditPrototype["getInputAsValue"] = function() {
        return this.inputAsValue
    };
    siButtonEditPrototype["setInputAsValue"] = function($) {
        this.inputAsValue = $
    };
    siButtonEditPrototype["getAllowInput"] = function() {
        return this.allowInput
    };
    siButtonEditPrototype["setAllowInput"] = function($) {
        this.allowInput = $;
        this._afterSetReadonlyDisabledAllowInput()
    };
    siButtonEditPrototype._afterSetReadonlyDisabledAllowInput = function() {
        var $ = this["isReadOnly"]();
        if ($ || this.allowInput == false)
            this.textEl["readOnly"] = true;
        else
            this.textEl["readOnly"] = false;
        if ($)
            this["addCls"](this._readonlyCls);
        else
            this["removeCls"](this._readonlyCls);
        if (this.allowInput)
            this["removeCls"](this._noInputCls);
        else
            this["addCls"](this._noInputCls);
        if (this.enabled)
            this.textEl.disabled = false;
        else
            this.textEl.disabled = true
    };
    siButtonEditPrototype["setEnabled"] = function($) {
        si.ButtonEdit["superclass"]["setEnabled"]["call"](this, $);
        this["_tryValidate"]()
    };
    siButtonEditPrototype["getMinLength"] = function() {
        return this.minLength
    };
    siButtonEditPrototype["setMinLength"] = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this.minLength = $
    };
    siButtonEditPrototype["getMaxLength"] = function() {
        return this.maxLength
    };
    siButtonEditPrototype["setMaxLength"] = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this.maxLength = $;
        this.textEl.maxLength = $
    };
    siButtonEditPrototype["getEmptyText"] = function() {
        return this["emptyText"]
    };
    siButtonEditPrototype["setEmptyText"] = function($) {
        if (this["emptyText"] != $) {
            this["emptyText"] = $;
            this._createPlaceHolder()
        }
    };
    siButtonEditPrototype._createPlaceHolder = function() {
        this.textEl.placeholder = this["emptyText"];
        if (this["emptyText"])
            si._placeholder(this.textEl)
    };
    siButtonEditPrototype["getFormValue"] = function() {
        value = this.value;
        if (value === null  || value === undefined)
            value = "";
        return String(value)
    };
    siButtonEditPrototype["getValue"] = function() {
        return this.value
    };
    siButtonEditPrototype["setValue"] = function($) {
        if ($ === null  || $ === undefined)
            $ = "";
        var _ = this.value !== $;
        this.value = $;
        this.inputEl.value = this["getFormValue"]()
    };
    siButtonEditPrototype["getText"] = function() {
        var $ = this.textEl.value;
        return $
    };
    siButtonEditPrototype["setText"] = function($) {
        if ($ === null  || $ === undefined)
            $ = "";
        var _ = this.text !== $;
        this.text = $;
        this.textEl.value = $;
        this._createPlaceHolder()
    };
    siButtonEditPrototype["setName"] = function($) {
        this.name = $;
        if (this.inputEl)
            si.setAttr(this.inputEl, "name", this.name)
    };
    siButtonEditPrototype["getTextEl"] = function() {
        return this.textEl
    };
    siButtonEditPrototype["selectText"] = function() {
        this.textEl["select"]()
    };
    siButtonEditPrototype["blur"] = function() {
        try {
            this.textEl["blur"]()
        } catch ($) {}
    };
    siButtonEditPrototype["focus"] = function() {
        try {
            this.textEl["focus"]();
            var $ = this;
            setTimeout(function() {
                if ($._focused)
                    $.textEl["focus"]()
            }
            , 10)
        } catch (_) {}
    };
    siButtonEditPrototype["setHeight"] = function($) {
        if (parseInt($) == $)
            $ += "px";
        this.height = $
    };
    siButtonEditPrototype["doLayout"] = function() {};
    siButtonEditPrototype["_doInputLayout"] = function() {
        if (this._closeEl)
            this._closeEl.style.display = this.showClose ? "inline-block" : "none";
        var $ = this._buttonsEl.offsetWidth + 2;
        this.borderEl.style["paddingRight"] = $ + "px";
        this["doLayout"]()
    };
    siButtonEditPrototype._initCommonEvent = function() {
        if (this._isEventBinded)
            return;
        this._isEventBinded = true;
        siBindEvent(this.el, "click", this._onclick, this);
        siBindEvent(this.textEl, "blur", this._oncommonblur, this);
        siBindEvent(this.textEl, "keydown", this._oncommonkeydown, this);
        siBindEvent(this.textEl, "keyup", this._onkeyup, this);
        siBindEvent(this.textEl, "keypress", this._onboxkeypress, this)
    };
    siButtonEditPrototype["_initEvents"] = function() {
        siEventTimer(function() {
            siTriggerEvent(this.el, "mousedown", this._onmousedown, this);
            siTriggerEvent(this.textEl, "focus", this._onfocus, this);
            siTriggerEvent(this.textEl, "change", this._oncommonchange, this);
            var $ = this.text;
            this.text = null ;
            this["setText"]($)
        }
        , this)
    };
    siButtonEditPrototype["destroy"] = function($) {
        if (this.el) {
            this.el.onmousedown = null ;
            this.el.onmousewheel = null ;
            this.el.onmouseover = null ;
            this.el.onmouseout = null 
        }
        if (this.textEl) {
            this.textEl.onchange = null ;
            this.textEl.onfocus = null ;
            si["clearEvent"](this.textEl);
            this.textEl = null 
        }
        si.ButtonEdit["superclass"]["destroy"]["call"](this, $)
    };
    siButtonEditPrototype["_create"] = function() {
        this.el = document.createElement("span");
        this.el.className = "si-buttonedit";
        var $ = this._buttonEditGenerateWrapperHtml();
        this.el.innerHTML = "<span class=\"si-buttonedit-border\"><input type=\"input\" class=\"si-buttonedit-input\" autocomplete=\"off\"/>" + $ + "</span><input name=\"" + this.name + "\" type=\"hidden\"/>";
        this.borderEl = this.el.firstChild;
        this.textEl = this.borderEl.firstChild;
        this.inputEl = this.el.lastChild;
        this._buttonsEl = this.borderEl.lastChild;
        this._buttonEl = this._buttonsEl.lastChild;
        this._closeEl = this._buttonEl.previousSibling;
        this._createPlaceHolder()
    };
    siButtonEditPrototype._GenerateElementHtml = function() {
        var $ = "onmouseover=\"siaddclass(this,'" + this._hoverCls + "');\" " + "onmouseout=\"siremoveclass(this,'" + this._hoverCls + "');\"";
        return "<span class=\"si-buttonedit-button\" " + $ + "><span class=\"si-buttonedit-icon\"></span></span>"
    };
    siButtonEditPrototype._buttonEditGenerateWrapperHtml = function() {
        var $ = "<span class=\"si-buttonedit-close\"></span>" + this._GenerateElementHtml();
        return "<span class=\"si-buttonedit-buttons\">" + $ + "</span>"
    };
    siButtonEditPrototype["set"] = function(A) {
        if (typeof A == "string")
            return this;
        var $ = A.value;
        delete A.value;
        var _ = A.text;
        delete A.text;
        this.allowUpdate = !(A.enabled == false || A.allowInput == false || A["readOnly"]);
        si.ButtonEdit["superclass"]["set"]["call"](this, A);
        if (this.allowUpdate === false) {
            this.allowUpdate = true;
            this["doUpdate"]()
        }
        if (!si.isNull(_))
            this["setText"](_);
        if (!si.isNull($))
            this["setValue"]($);
        return this
    };
    siRegClass(si.ButtonEdit, "buttonedit");
    si.TextBox = function() {
        si.TextBox["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.TextBox, si.ValidatorBase, {
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
        _emptyCls: "si-textbox-empty",
        _focusCls: "si-textbox-focus",
        _disabledCls: "si-textbox-disabled",
        uiCls: "si-textbox",
        type: "text",
        _isEventBinded: false,
        _placeholdered: false,
        errorIconEl: null ,
        inputStyle: "",
        validator: ""
    });
    siTextBoxPrototype = si.TextBox["prototype"];
    siTextBoxPrototype["getRangeErrorText"] = function() {
    return this.rangeErrorText
};
    siTextBoxPrototype["setRangeErrorText"] = function($) {
    this.rangeErrorText = $
};
    siTextBoxPrototype["getRangeCharErrorText"] = function() {
    return this.rangeCharErrorText
};
    siTextBoxPrototype["setRangeCharErrorText"] = function($) {
    this.rangeCharErrorText = $
};
    siTextBoxPrototype["getRangeLengthErrorText"] = function() {
    return this.rangeLengthErrorText
};
    siTextBoxPrototype["setRangeLengthErrorText"] = function($) {
    this.rangeLengthErrorText = $
};
    siTextBoxPrototype["getMinErrorText"] = function() {
    return this.minErrorText
};
    siTextBoxPrototype["setMinErrorText"] = function($) {
    this.minErrorText = $
};
    siTextBoxPrototype["getMaxErrorText"] = function() {
    return this.maxErrorText
};
    siTextBoxPrototype["setMaxErrorText"] = function($) {
    this.maxErrorText = $
};
    siTextBoxPrototype["getMinLengthErrorText"] = function() {
    return this.minLengthErrorText
};
    siTextBoxPrototype["setMinLengthErrorText"] = function($) {
    this.minLengthErrorText = $
};
    siTextBoxPrototype["getMaxLengthErrorText"] = function() {
    return this.maxLengthErrorText
};
    siTextBoxPrototype["setMaxLengthErrorText"] = function($) {
    this.maxLengthErrorText = $
};
    siTextBoxPrototype["getDateErrorText"] = function() {
    return this.dateErrorText
};
    siTextBoxPrototype["setDateErrorText"] = function($) {
    this.dateErrorText = $
};
    siTextBoxPrototype["getIntErrorText"] = function() {
    return this.intErrorText
};
    siTextBoxPrototype["setIntErrorText"] = function($) {
    this.intErrorText = $
};
    siTextBoxPrototype["getFloatErrorText"] = function() {
    return this.floatErrorText
};
    siTextBoxPrototype["setFloatErrorText"] = function($) {
    this.floatErrorText = $
};
    siTextBoxPrototype["getUrlErrorText"] = function() {
    return this.urlErrorText
};
    siTextBoxPrototype["setUrlErrorText"] = function($) {
    this.urlErrorText = $
};
    siTextBoxPrototype["getEmailErrorText"] = function() {
    return this.emailErrorText
};
    siTextBoxPrototype["setEmailErrorText"] = function($) {
    this.emailErrorText = $
};
    siTextBoxPrototype._oncommonvalidation = function($) {
    if ($["isValid"] == false)
        return;
    si._doValidate(this.validator, $.value, $, this)
};
    siTextBoxPrototype["getVtype"] = function() {
    return this.validator
};
    siTextBoxPrototype["setVtype"] = function($) {
    this.validator = $
};
    siTextBoxPrototype["getAttrs"] = function($) {
    var A = si.TextBox["superclass"]["getAttrs"]["call"](this, $)
      , _ = jQuery($);
    si["_ParseString"]($, A, ["value", "text", "emptyText", "inputStyle", "onenter", "onkeydown", "onkeyup", "onkeypress", "maxLengthErrorText", "minLengthErrorText", "onfocus", "onblur", "validator", "emailErrorText", "urlErrorText", "floatErrorText", "intErrorText", "dateErrorText", "minErrorText", "maxErrorText", "rangeLengthErrorText", "rangeErrorText", "rangeCharErrorText"]);
    si["_ParseBool"]($, A, ["allowInput", "selectOnFocus"]);
    si["_ParseInt"]($, A, ["maxLength", "minLength", "minHeight", "minWidth"]);
    return A
};
    siTextBoxPrototype["setInputStyle"] = function($) {
    this.inputStyle = $;
    sisetstyle(this.textEl, $)
};
    siTextBoxPrototype._oncommonblur = function(_) {
    this._focused = false;
    var $ = this;
    setTimeout(function() {
        if ($._focused == false)
            $["removeCls"]($._focusCls)
    }
    , 2);
    this["fire"]("blur", {
        htmlEvent: _
    });
    if (this.validateOnLeave)
        this["_tryValidate"]()
};
    siTextBoxPrototype._onfocus = function($) {
    this["doUpdate"]();
    if (this["isReadOnly"]())
        return;
    this._focused = true;
    this["addCls"](this._focusCls);
    this._initCommonEvent();
    if (this.selectOnFocus)
        this["selectText"]();
    this["fire"]("focus", {
        htmlEvent: $
    })
};
    siTextBoxPrototype._onboxkeypress = function($) {
    this["fire"]("keypress", {
        htmlEvent: $
    })
};
    siTextBoxPrototype._onboxkeyup = function($) {
    this["fire"]("keyup", {
        htmlEvent: $
    })
};
    siTextBoxPrototype._oncommonkeydown = function(A) {
    var _ = {
        htmlEvent: A
    };
    this["fire"]("keydown", _);
    if (A.keyCode == 8 && (this["isReadOnly"]() || this.allowInput == false))
        return false;
    if (A.keyCode == 13 || A.keyCode == 9)
        if (this.type == "textarea" && A.keyCode == 13)
            ;
        else {
            this._oncommonchange(null , true);
            if (A.keyCode == 13) {
                var $ = this;
                $["fire"]("enter", _)
            }
        }
    if (A.keyCode == 27)
        A.preventDefault()
};
    siTextBoxPrototype._ondrop = function(_) {
    var $ = this;
    setTimeout(function() {
        $._oncommonchange(_)
    }
    , 0)
};
    siTextBoxPrototype._oncommonchange = function(A, _) {
    var $ = this.value;
    this["setValue"](this.textEl.value);
    if ($ !== this["getValue"]() || _ === true)
        this._onbeforevaluechanged()
};
    siTextBoxPrototype._onmousedown = function(_) {
    var $ = this;
    if (!siisAncestor(this.textEl, _.target))
        setTimeout(function() {
            $["focus"]();
            si["selectRange"]($.textEl, 1000, 1000)
        }
        , 1);
    else
        setTimeout(function() {
            try {
                $.textEl["focus"]()
            } catch (_) {}
        }
        , 1)
};
    siTextBoxPrototype.removeErrorIconEl = function() {
    if (this.errorIconEl) {
        var $ = this.errorIconEl;
        jQuery($).remove()
    }
    this.errorIconEl = null 
};
    siTextBoxPrototype["getErrorIconEl"] = function() {
    if (!this.errorIconEl)
        this.errorIconEl = si.append(this.el, "<span class=\"si-errorIcon\"></span>");
    return this.errorIconEl
};
    siTextBoxPrototype["getSelectOnFocus"] = function($) {
    return this.selectOnFocus
};
    siTextBoxPrototype["setSelectOnFocus"] = function($) {
    this.selectOnFocus = $
};
    siTextBoxPrototype["getInputText"] = function() {
    return this.textEl.value
};
    siTextBoxPrototype["getTextEl"] = function() {
    return this.textEl
};
    siTextBoxPrototype["selectText"] = function() {
    var _ = this;
    function $() {
        try {
            _.textEl["select"]()
        } catch ($) {}
    }
    $();
    setTimeout(function() {
        $()
    }
    , 30)
};
    siTextBoxPrototype["blur"] = function() {
    try {
        this.textEl["blur"]()
    } catch ($) {}
};
    siTextBoxPrototype["focus"] = function() {
    try {
        this.textEl["focus"]()
    } catch ($) {}
};
    siTextBoxPrototype["doUpdate"] = function() {
    if (this.enabled)
        this["removeCls"](this._disabledCls);
    else
        this["addCls"](this._disabledCls);
    if (this["isReadOnly"]() || this.allowInput == false) {
        this.textEl["readOnly"] = true;
        siaddclass(this.el, "si-textbox-readOnly")
    } else {
        this.textEl["readOnly"] = false;
        siremoveclass(this.el, "si-textbox-readOnly")
    }
    if (this.required)
        this["addCls"](this.requiredCls);
    else
        this["removeCls"](this.requiredCls);
    if (this.enabled)
        this.textEl.disabled = false;
    else
        this.textEl.disabled = true
};
    siTextBoxPrototype["setEnabled"] = function($) {
    if (this.enabled != $) {
        this.enabled = $;
        this["doUpdate"]();
        this["_tryValidate"]()
    }
};
    siTextBoxPrototype["setReadOnly"] = function($) {
    if (this["readOnly"] != $) {
        this["readOnly"] = $;
        this["doUpdate"]()
    }
};
    siTextBoxPrototype["getMaxLength"] = function() {
    return this.maxLength
};
    siTextBoxPrototype._onTextBoxTextElKeyPress = function($) {
    if (this.textEl.value.length >= this.maxLength)
        $.preventDefault()
};
    siTextBoxPrototype["setMaxLength"] = function($) {
    this.maxLength = $;
    si.setAttr(this.textEl, "maxLength", $);
    if (this.type == "textarea" && si.isIE)
        siBindEvent(this.textEl, "keypress", this._onTextBoxTextElKeyPress, this)
};
    siTextBoxPrototype["getEmptyText"] = function() {
    return this["emptyText"]
};
    siTextBoxPrototype["setEmptyText"] = function($) {
    if (this["emptyText"] != $) {
        this["emptyText"] = $;
        this._createPlaceHolder()
    }
};
    siTextBoxPrototype._createPlaceHolder = function() {
    this.textEl.placeholder = this["emptyText"];
    if (this["emptyText"])
        si._placeholder(this.textEl)
};
    siTextBoxPrototype["getAllowInput"] = function() {
    return this.allowInput
};
    siTextBoxPrototype["setAllowInput"] = function($) {
    if (this.allowInput != $) {
        this.allowInput = $;
        this["doUpdate"]()
    }
};
    siTextBoxPrototype["getFormValue"] = function() {
    value = this.value;
    if (value === null  || value === undefined)
        value = "";
    return String(value)
};
    siTextBoxPrototype["getValue"] = function() {
    return this.value
};
    siTextBoxPrototype["setValue"] = function($) {
    if ($ === null  || $ === undefined)
        $ = "";
    $ = String($);
    if ($.length > this.maxLength)
        $ = $.substring(0, this.maxLength);
    if (this.value !== $) {
        this.value = $;
        this.inputEl.value = this.textEl.value = $;
        this._createPlaceHolder()
    }
};
    siTextBoxPrototype["setName"] = function($) {
    if (this.name != $) {
        this.name = $;
        if (this.inputEl)
            si.setAttr(this.inputEl, "name", this.name)
    }
};
    siTextBoxPrototype["setHeight"] = function($) {
    if (parseInt($) == $)
        $ += "px";
    this.height = $;
    if (this.type == "textarea") {
        this.el.style.height = $;
        this["doLayout"]()
    }
};
    siTextBoxPrototype["doLayout"] = function() {};
    siTextBoxPrototype["destroy"] = function($) {
    if (this.el)
        this.el.onmousedown = null ;
    if (this.textEl) {
        this.textEl.ondrop = null ;
        this.textEl.onchange = null ;
        this.textEl.onfocus = null ;
        si["clearEvent"](this.textEl);
        this.textEl = null 
    }
    if (this.inputEl) {
        si["clearEvent"](this.inputEl);
        this.inputEl = null 
    }
    si.TextBox["superclass"]["destroy"]["call"](this, $)
};
    siTextBoxPrototype._initCommonEvent = function() {
    if (this._isEventBinded)
        return;
    this._isEventBinded = true;
    siBindEvent(this.textEl, "blur", this._oncommonblur, this);
    siBindEvent(this.textEl, "keydown", this._oncommonkeydown, this);
    siBindEvent(this.textEl, "keyup", this._onboxkeyup, this);
    siBindEvent(this.textEl, "keypress", this._onboxkeypress, this)
};
    siTextBoxPrototype["_initEvents"] = function() {
    siEventTimer(function() {
        siTriggerEvent(this.textEl, "drop", this._ondrop, this);
        siTriggerEvent(this.textEl, "change", this._oncommonchange, this);
        siTriggerEvent(this.textEl, "focus", this._onfocus, this);
        siTriggerEvent(this.el, "mousedown", this._onmousedown, this);
        var $ = this.value;
        this.value = null ;
        this["setValue"]($)
    }
    , this);
    this["on"]("validation", this._oncommonvalidation, this)
};
    siTextBoxPrototype["_create"] = function() {
    var $ = "<input  type=\"" + this.type + "\" class=\"si-textbox-input\" autocomplete=\"off\"/>";
    if (this.type == "textarea")
        $ = "<textarea  class=\"si-textbox-input\" autocomplete=\"off\"/></textarea>";
    $ = "<span class=\"si-textbox-border\">" + $ + "</span>";
    $ += "<input type=\"hidden\"/>";
    this.el = document.createElement("span");
    this.el.className = "si-textbox";
    this.el.innerHTML = $;
    this.borderEl = this.el.firstChild;
    this.textEl = this.borderEl.firstChild;
    this.inputEl = this.borderEl.lastChild;
    this._createPlaceHolder()
};
    siRegClass(si.TextBox, "textbox");
    si.Password = function() {
        si.Password["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Password, si.TextBox, {
        uiCls: "si-password",
        type: "password"
    });
    sipasswordprototype = si.Password["prototype"];
    sipasswordprototype["setEmptyText"] = function($) {
    this["emptyText"] = ""
};
    siRegClass(si.Password, "password");
    si.TextArea = function() {
        si.TextArea["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.TextArea, si.TextBox, {
        maxLength: 10000000,
        width: 180,
        height: 50,
        minHeight: 50,
        type: "textarea",
        uiCls: "si-textarea"
    });
    sitextareaprototype = si.TextArea["prototype"];
    sitextareaprototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    si.TextArea["superclass"]["doLayout"]["call"](this);
    var $ = sigetheight(this.el);
    sisetheight(this.borderEl, $);
    $ -= 2;
    if ($ < 0)
        $ = 0;
    this.textEl.style.height = $ + "px"
};
    siRegClass(si.TextArea, "textarea");
    si.PopupEdit = function() {
        si.PopupEdit["superclass"]["constructor"]["call"](this);
        this["_createPopup"]();
        this.el.className += " si-popupedit"
    }
    ;
    siextend(si.PopupEdit, si.ButtonEdit, {
        uiCls: "si-popupedit",
        popup: null ,
        popupCls: "si-buttonedit-popup",
        _hoverCls: "si-buttonedit-hover",
        _pressedCls: "si-buttonedit-pressed",
        popupWidth: "100%",
        popupMinWidth: 50,
        popupMaxWidth: 2000,
        popupHeight: "",
        popupMinHeight: 30,
        popupMaxHeight: 2000
    });
    siPopupEditPortotype = si.PopupEdit["prototype"];
    siPopupEditPortotype["getAttrs"] = function($) {
        var _ = si.PopupEdit["superclass"]["getAttrs"]["call"](this, $);
        si["_ParseString"]($, _, ["popupWidth", "popupHeight", "popup", "onshowpopup", "onhidepopup", "onbeforeshowpopup"]);
        si["_ParseInt"]($, _, ["popupMinWidth", "popupMaxWidth", "popupMinHeight", "popupMaxHeight"]);
        return _
    };
    siPopupEditPortotype._onbeforebuttonclick = function($) {
        if ($.name == "close")
            this["hidePopup"]();
        $.cancel = true
    };
    siPopupEditPortotype._onclick = function(_) {
        if (this["isReadOnly"]())
            return;
        if (siisAncestor(this._buttonEl, _.target))
            this._onCommonButtonClick(_);
        if (sifindAncestor(_.target, this._closeCls)) {
            if (this["isShowPopup"]())
                this["hidePopup"]();
            this["fire"]("closeclick", {
                htmlEvent: _
            });
            return
        }
        if (this.allowInput == false || siisAncestor(this._buttonEl, _.target))
            if (this["isShowPopup"]())
                this["hidePopup"]();
            else {
                var $ = this;
                setTimeout(function() {
                    $["showPopup"]()
                }
                , 1)
            }
    };
    siPopupEditPortotype["getPopupMinHeight"] = function($) {
        return this["popupMinHeight"]
    };
    siPopupEditPortotype["getPopupMaxHeight"] = function($) {
        return this["popupMaxHeight"]
    };
    siPopupEditPortotype["getPopupHeight"] = function($) {
        return this["popupHeight"]
    };
    siPopupEditPortotype["setPopupMinHeight"] = function($) {
        this["popupMinHeight"] = $
    };
    siPopupEditPortotype["setPopupMaxHeight"] = function($) {
        this["popupMaxHeight"] = $
    };
    siPopupEditPortotype["setPopupHeight"] = function($) {
        this["popupHeight"] = $
    };
    siPopupEditPortotype["getPopupMinWidth"] = function($) {
        return this["popupMinWidth"]
    };
    siPopupEditPortotype["getPopupMaxWidth"] = function($) {
        return this["popupMaxWidth"]
    };
    siPopupEditPortotype["getPopupWidth"] = function($) {
        return this["popupWidth"]
    };
    siPopupEditPortotype["setPopupMinWidth"] = function($) {
        this["popupMinWidth"] = $
    };
    siPopupEditPortotype["setPopupMaxWidth"] = function($) {
        this["popupMaxWidth"] = $
    };
    siPopupEditPortotype["setPopupWidth"] = function($) {
        this["popupWidth"] = $
    };
    siPopupEditPortotype["isShowPopup"] = function() {
        if (this.popup && this.popup["isDisplay"]())
            return true;
        else
            return false
    };
    siPopupEditPortotype["hidePopup"] = function() {
        if (this["isShowPopup"]()) {
            var $ = this["getPopup"]();
            $.close()
        }
    };
    siPopupEditPortotype._onpopupeditclose = function($) {
        this._oncommonblur();
        this["fire"]("hidepopup")
    };
    siPopupEditPortotype["_syncShowPopup"] = function() {
        var _ = this["getPopup"]();
        if (this._popupInner && this._popupInner.el.parentNode != this.popup.contentEl) {
            this.popup.contentEl.appendChild(this._popupInner.el);
            this._popupInner["setVisible"](true)
        }
        var B = this["getBox"]()
          , $ = this["popupWidth"];
        if (this["popupWidth"] == "100%" && _.width=="")
            $ = B.width - 2 ;
        else if(this["popupWidth"] == "100%")
            $ = B.width;
        _["setWidth"]($);
        var A = parseInt(this["popupHeight"]);
        if (!isNaN(A))
            _["setHeight"](A);
        else
            _["setHeight"]("auto");
        _["setMinWidth"](this["popupMinWidth"]);
        _["setMinHeight"](this["popupMinHeight"]);
        _["setMaxWidth"](this["popupMaxWidth"]);
        _["setMaxHeight"](this["popupMaxHeight"]);
        _["showAtEl"](this.el, {
            xAlign: "left",
            yAlign: "below",
            outYAlign: "above",
            outXAlign: "right",
            popupCls: this.popupCls
        })
    };
    siPopupEditPortotype["doLayout"] = function() {
        si.PopupEdit["superclass"]["doLayout"]["call"](this);
        if (this["isShowPopup"]())
            ;
    };
    siPopupEditPortotype["showPopup"] = function() {
        var _ = {
            cancel: false
        };
        this["fire"]("beforeshowpopup", _);
        if (_.cancel == true)
            return;
        var $ = this["getPopup"]();
        this["_syncShowPopup"]();
        $["on"]("Close", this._onpopupeditclose, this);
        this["fire"]("showpopup")
    };
    siPopupEditPortotype._onpopupeditkeydown = function($) {};
    siPopupEditPortotype._onpopupeditbeforeclose = function($) {
        if (this["within"]($.htmlEvent))
            $.cancel = true
    };
    siPopupEditPortotype["_createPopup"] = function() {
        this.popup = new si.Popup();
        this.popup.setShowAction("none");
        this.popup.setHideAction("outerclick");
        this.popup.setPopupEl(this.el);
        this.popup["on"]("BeforeClose", this._onpopupeditbeforeclose, this);
        siBindEvent(this.popup.el, "keydown", this._onpopupeditkeydown, this)
    };
    siPopupEditPortotype["getPopup"] = function() {
        if (!this.popup)
            this["_createPopup"]();
        return this.popup
    };
    siPopupEditPortotype["setPopup"] =  function($) {
        if (typeof $ == "string") {
            si.analyze($);
            $ = si.get($)
        }
        var _ = si.getAndCreate($);
        if (!_)
            return;
        _["setVisible"](false);
        this._popupInner = _;
        _.owner = this;
        _["on"]("beforebuttonclick", this._onbeforebuttonclick, this)
    };
    siPopupEditPortotype["within"] = function($) {
        if (siisAncestor(this.el, $.target))
            return true;
        if (this.popup["within"]($))
            return true;
        return false
    };
    siPopupEditPortotype._oncommonkeydown = function($) {
        this["fire"]("keydown", {
            htmlEvent: $
        });
        if ($.keyCode == 8 && (this["isReadOnly"]() || this.allowInput == false))
            return false;
        if ($.keyCode == 9) {
            this["hidePopup"]();
            return
        }
        if ($.keyCode == 27) {
            this["hidePopup"]();
            return
        }
        if ($.keyCode == 13)
            this["fire"]("enter");
        if (this["isShowPopup"]())
            if ($.keyCode == 13 || $.keyCode == 27)
                $.stopPropagation()
    };
    siPopupEditPortotype._onmousedown = function($) {
        if (this["isReadOnly"]())
            return;
        si.PopupEdit["superclass"]._onmousedown["call"](this, $);
        if (this.allowInput == false && sifindAncestor($.target, "si-buttonedit-border")) {
            siaddclass(this.el, this._pressedCls);
            siBindEvent(document, "mouseup", this._onOutComponentDocumentMouseUp, this)
        }
    };
    siPopupEditPortotype._onmouseout = function($) {
        if (this["isReadOnly"]() || this.allowInput)
            return;
        this["removeCls"](this._hoverCls)
    };
    siPopupEditPortotype._onmouseover = function($) {
        if (this["isReadOnly"]() || this.allowInput)
            return;
        if (sifindAncestor($.target, "si-buttonedit-border"))
            this["addCls"](this._hoverCls)
    };
    siPopupEditPortotype._oncommonblur = function($) {
        if (this._clickTarget && siisAncestor(this.el, this._clickTarget))
            return;
        if (this["isShowPopup"]())
            return;
        si.PopupEdit["superclass"]._oncommonblur["call"](this, $)
    };
    siPopupEditPortotype.initButton = function() {
        this.buttons = [];
        var $ = this["createButton"]({
            cls: "si-buttonedit-popup",
            iconCls: "si-buttonedit-icons-popup",
            name: "popup"
        });
        this.buttons.push($)
    };
    siPopupEditPortotype["_initEvents"] = function() {
        si.PopupEdit["superclass"]["_initEvents"]["call"](this);
        siEventTimer(function() {
            siTriggerEvent(this.el, "mouseover", this._onmouseover, this);
            siTriggerEvent(this.el, "mouseout", this._onmouseout, this)
        }
        , this)
    };
    siPopupEditPortotype["destroy"] = function($) {
        if (this["isShowPopup"]())
            this["hidePopup"]();
        if (this.popup) {
            this.popup["destroy"]();
            this.popup = null 
        }
        if (this._popupInner) {
            this._popupInner.owner = null ;
            this._popupInner = null 
        }
        si.PopupEdit["superclass"]["destroy"]["call"](this, $)
    };
    siRegClass(si.PopupEdit, "popupedit");
    si.ComboBox = function() {
        this.data = [];
        this.columns = [];
        si.ComboBox["superclass"]["constructor"]["call"](this);
        var $ = this;
        if (isFirefox)
            this.textEl.oninput = function() {
                $._delayLoadData()
            }
    }
    ;
    siextend(si.ComboBox, si.PopupEdit, {
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
        uiCls: "si-combobox",
        showNullItem: false
    });
    siComboBoxPrototype = si.ComboBox["prototype"];
    siComboBoxPrototype["getAttrs"] = function(G) {
    var E = si.ComboBox["superclass"]["getAttrs"]["call"](this, G);
    si["_ParseString"](G, E, ["url", "data", "textField", "valueField", "displayField", "nullItemText", "ondrawcell", "onbeforeload", "onload", "onloaderror", "onitemclick"]);
    si["_ParseBool"](G, E, ["multiSelect", "showNullItem", "valueFromSelect"]);
    if (E.displayField)
        E["textField"] = E.displayField;
    var C = E["valueField"] || this["valueField"]
      , H = E["textField"] || this["textField"];
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
        var J = si["getChildNodes"](G);
        for (F = 0,
        D = J.length; F < D; F++) {
            var A = J[F]
              , B = jQuery(A).attr("property");
            if (!B)
                continue;B = B.toLowerCase();
            if (B == "columns")
                E.columns = si.createColumns(A);
            else if (B == "data")
                E.data = A.innerHTML
        }
    }
    return E
};
    siComboBoxPrototype._oncommonchange = function(J) {
    if (this["multiSelect"] == false) {
        var E = this.textEl.value
          , H = this["getData"]()
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
            this.listBox["setValue"](F ? F[this.valueField] : "");
            var C = this.listBox["getValue"]()
              , A = this.listBox._toValueTextArray(C)
              , _ = this["getValue"]();
            this["setValue"](C);
            this["setText"](A[1])
        } else if (this.valueFromSelect) {
            this["setValue"]("");
            this["setText"]("")
        } else {
            this["setValue"](E);
            this["setText"](E)
        }
        if (_ != this["getValue"]()) {
            var G = this;
            G._onbeforevaluechanged()
        }
    }
};
    siComboBoxPrototype["findItems"] = function($) {
    return this.listBox["findItems"]($)
};
    siComboBoxPrototype._onpopupeditclose = function($) {
    if (this._filtered) {
        this._filtered = false;
        if (this.listBox.el)
            this.listBox["setData"](this.data)
    }
    this["fire"]("hidepopup")
};
    siComboBoxPrototype._insideLoadData = function(B) {
    if (this["multiSelect"] == true)
        return;
    var A = [];
    for (var C = 0, F = this.data.length; C < F; C++) {
        var _ = this.data[C]
          , D = si._getMap(this.textField, _);
        if (typeof D == "string") {
            D = D.toUpperCase();
            B = B.toUpperCase();
            if (D["indexOf"](B) != -1)
                A.push(_)
        }
    }
    this.listBox["setData"](A);
    this._filtered = true;
    if (B !== "" || this["isShowPopup"]()) {
        this["showPopup"]();
        var $ = 0;
        if (this.listBox["getShowNullItem"]())
            $ = 1;
        var E = this;
        E.listBox._addOrRemoveItemHoverCls($, true)
    }
};
    siComboBoxPrototype._delayLoadData = function(_) {
	    var $ = this;
	    setTimeout(function() {
	        var A = $.textEl.value;
	        if (A != _)
	            $._insideLoadData(A)
	    }
	    , 20)
	};
    siComboBoxPrototype._onboxkeypress = function($) {
    this["fire"]("keypress", {
        htmlEvent: $
    })
};
    siComboBoxPrototype._onboxkeyup = function($) {
    this["fire"]("keyup", {
        htmlEvent: $
    })
};
    siComboBoxPrototype._oncommonkeydown = function(D, A) {
    this["fire"]("keydown", {
        htmlEvent: D
    });
    if (D.keyCode == 8 && (this["isReadOnly"]() || this.allowInput == false))
        return false;
    if (D.keyCode == 9) {
        this["hidePopup"]();
        return
    }
    if (this["isReadOnly"]())
        return;
    switch (D.keyCode) {
    case 27:
        D.preventDefault();
        if (this["isShowPopup"]())
            D.stopPropagation();
        this["hidePopup"]();
        break;
    case 13:
        if (this["isShowPopup"]()) {
            D.preventDefault();
            D.stopPropagation();
            var _ = this.listBox["getFocusedIndex"]();
            if (_ != -1) {
                var $ = this.listBox["getAt"](_);
                if (this["multiSelect"])
                    ;
                else {
                    this.listBox["deselectAll"]();
                    this.listBox["select"]($)
                }
                var C = this.listBox["getSelecteds"]()
                  , B = this.listBox._toValueTextArray(C);
                this["setValue"](B[0]);
                this["setText"](B[1]);
                this._onbeforevaluechanged()
            }
            this["hidePopup"]()
        } else
            this["fire"]("enter");
        break;
    case 37:
        break;
    case 38:
        D.preventDefault();
        _ = this.listBox["getFocusedIndex"]();
        if (_ == -1) {
            _ = 0;
            if (!this["multiSelect"]) {
                $ = this.listBox["findItems"](this.value)[0];
                if ($)
                    _ = this.listBox["indexOf"]($)
            }
        }
        if (this["isShowPopup"]())
            if (!this["multiSelect"]) {
                _ -= 1;
                if (_ < 0)
                    _ = 0;
                this.listBox._addOrRemoveItemHoverCls(_, true)
            }
        break;
    case 39:
        break;
    case 40:
        D.preventDefault();
        _ = this.listBox["getFocusedIndex"]();
        if (_ == -1) {
            _ = 0;
            if (!this["multiSelect"]) {
                $ = this.listBox["findItems"](this.value)[0];
                if ($)
                    _ = this.listBox["indexOf"]($)
            }
        }
        if (this["isShowPopup"]()) {
            if (!this["multiSelect"]) {
                _ += 1;
                if (_ > this.listBox["getCount"]() - 1)
                    _ = this.listBox["getCount"]() - 1;
                this.listBox._addOrRemoveItemHoverCls(_, true)
            }
        } else {
            this["showPopup"]();
            if (!this["multiSelect"])
                this.listBox._addOrRemoveItemHoverCls(_, true)
        }
        break;
    default:
        this._delayLoadData(this.textEl.value);
        break
    }
};
    siComboBoxPrototype._onitemclick = function(C) {
	    var B = this.listBox["getSelecteds"]()
	      , A = this.listBox._toValueTextArray(B)
	      , $ = this["getValue"]();
	    this["setValue"](A[0]);
	    this["setText"](A[1]);
	    if (C) {
	        if ($ != this["getValue"]()) {
	            var _ = this;
	            setTimeout(function() {
	                _._onbeforevaluechanged()
	            }
	            , 1)
	        }
	        if (!this["multiSelect"])
	            this["hidePopup"]();
	        this["focus"]();
	        this["fire"]("itemclick", {
	            item: C.item
	        })
	    }
	};
    siComboBoxPrototype["__OnItemDrawCell"] = function($) {
    this["fire"]("drawcell", $)
};;
    siComboBoxPrototype["getSelected"] = function() {
    return this["getSelecteds"]()[0]
};
    siComboBoxPrototype["getSelecteds"] = function() {
    return this.listBox["findItems"](this.value)
};
    siComboBoxPrototype._onbeforevaluechanged = function() {
	    if (this.validateOnChanged)
	        this["validate"]();
	    var $ = this["getValue"]()
	      , B = this["getSelecteds"]()
	      , _ = B[0]
	      , A = this;
	    A["fire"]("valuechanged", {
	        value: $,
	        selecteds: B,
	        selected: _
	    })
	};
    siComboBoxPrototype["getValueFromSelect"] = function() {
    return this.valueFromSelect
};
    siComboBoxPrototype["setValueFromSelect"] = function($) {
    this.valueFromSelect = $
};
    siComboBoxPrototype["getNullItemText"] = function() {
    return this.nullItemText
};
    siComboBoxPrototype["setNullItemText"] = function($) {
    if (this.nullItemText != $) {
        this.nullItemText = $;
        this.listBox["setNullItemText"]($)
    }
};
    siComboBoxPrototype["getShowNullItem"] = function() {
    return this.showNullItem
};
    siComboBoxPrototype["setShowNullItem"] = function($) {
    if (this.showNullItem != $) {
        this.showNullItem = $;
        this.listBox["setShowNullItem"]($)
    }
};
    siComboBoxPrototype["getColumns"] = function() {
    return this.columns
};
    siComboBoxPrototype["setColumns"] = function($) {
    if (!si.isArray($))
        $ = [];
    this.columns = $;
    this.listBox["setColumns"]($)
};
    siComboBoxPrototype["getMultiSelect"] = function() {
    return this["multiSelect"]
};
    siComboBoxPrototype["setMultiSelect"] = function($) {
    if (this["multiSelect"] != $) {
        this["multiSelect"] = $;
        if (this.listBox) {
            this.listBox["setMultiSelect"]($);
            this.listBox["setShowCheckBox"]($)
        }
    }
};
    siComboBoxPrototype["setValue"] = function($) {
    if (this.value !== $) {
        var _ = this.listBox._toValueTextArray($);
        this.value = $;
        this.inputEl.value = this.value;
        this.text = this.textEl.value = _[1];
        this._createPlaceHolder()
    } else {
        _ = this.listBox._toValueTextArray($);
        this.text = this.textEl.value = _[1]
    }
};
    siComboBoxPrototype["setDataField"] = function($) {
    if (this.listBox)
        this.listBox["setDataField"]($);
    this.dataField = $
};
    siComboBoxPrototype["setDisplayField"] = function($) {
    this["setTextField"]($)
};
    siComboBoxPrototype["getTextField"] = function() {
    return this["textField"]
};
    siComboBoxPrototype["setTextField"] = function($) {
    if (this.listBox)
        this.listBox["setTextField"]($);
    this["textField"] = $
};
    siComboBoxPrototype["getValueField"] = function() {
    return this["valueField"]
};
    siComboBoxPrototype["setValueField"] = function($) {
    this["valueField"] = $;
    if (this.listBox)
        this.listBox["setValueField"]($)
};
    siComboBoxPrototype["getUrl"] = function() {
    return this.url
};
    siComboBoxPrototype["setUrl"] = function(_) {
    this["getPopup"]();
    this.listBox["setUrl"](_);
    this.url = this.listBox.url;
    this.data = this.listBox.data;
    var $ = this.listBox._toValueTextArray(this.value);
    this.text = this.textEl.value = $[1]
};
    siComboBoxPrototype["getData"] = function() {
    return this.data
};
    siComboBoxPrototype["setData"] = function(data) {
    if (typeof data == "string")
        data = eval("(" + data + ")");
    if (!si.isArray(data))
        data = [];
    this.listBox["setData"](data);
    this.data = this.listBox.data;
    var vts = this.listBox._toValueTextArray(this.value);
    this.text = this.textEl.value = vts[1]
};
    siComboBoxPrototype["load"] =  function($) {
    if (typeof $ == "string")
        this["setUrl"]($);
    else
        this["setData"]($)
};
    siComboBoxPrototype["getAt"] = function($) {
    return this.data[$]
};
    siComboBoxPrototype["indexOf"] = function($) {
    return this.data["indexOf"]($)
};
    siComboBoxPrototype["getItem"] = function($) {
    return typeof $ == "object" ? $ : this.data[$]
};
    siComboBoxPrototype["select"] = function($) {
    this.listBox["deselectAll"]();
    $ = this["getItem"]($);
    if ($) {
        this.listBox["select"]($);
        this._onitemclick()
    }
};
    siComboBoxPrototype["showPopup"] = function() {
    var _ = {
        cancel: false
    };
    this["fire"]("beforeshowpopup", _);
    if (_.cancel == true)
        return;
    this.listBox["setHeight"]("auto");
    si.ComboBox["superclass"]["showPopup"]["call"](this);
    var $ = this.popup.el.style.height;
    if ($ == "" || $ == "auto")
        this.listBox["setHeight"]("auto");
    else
        this.listBox["setHeight"]("100%");
    this.listBox["setValue"](this.value)
};
    siComboBoxPrototype["_createPopup"] = function() {
    si.ComboBox["superclass"]["_createPopup"]["call"](this);
    this.listBox = new si.ListBox();
    this.listBox["setBorderStyle"]("border:0;");
    this.listBox["setStyle"]("width:100%;height:auto;");
    this.listBox["render"](this.popup.contentEl);
    this.listBox["on"]("itemclick", this._onitemclick, this);
    this.listBox["on"]("drawcell", this.__OnItemDrawCell, this);
    var $ = this;
    this.listBox["on"]("beforeload", function(_) {
        $["fire"]("beforeload", _)
    }
    , this);
    this.listBox["on"]("load", function(_) {
        $["fire"]("load", _)
    }
    , this);
    this.listBox["on"]("loaderror", function(_) {
        $["fire"]("loaderror", _)
    }
    , this)
};
    siComboBoxPrototype["set"] = function(A) {
    if (typeof A == "string")
        return this;
    var $ = A.value;
    delete A.value;
    var B = A.url;
    delete A.url;
    var _ = A.data;
    delete A.data;
    si.ComboBox["superclass"]["set"]["call"](this, A);
    if (!si.isNull(_)) {
        this["setData"](_);
        A.data = _
    }
    if (!si.isNull(B)) {
        this["setUrl"](B);
        A.url = B
    }
    if (!si.isNull($)) {
        this["setValue"]($);
        A.value = $
    }
    return this
};
    siRegClass(si.ComboBox, "combobox");
    
    si.DatePicker = function() {
        si.DatePicker["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.DatePicker, si.PopupEdit, {
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
        uiCls: "si-datepicker"
    });
    siDatePickerPrototype = si.DatePicker["prototype"];
    siDatePickerPrototype["getAttrs"] = function($) {
        var _ = si.DatePicker["superclass"]["getAttrs"]["call"](this, $);
        si["_ParseString"]($, _, ["format", "viewDate", "timeFormat", "ondrawdate", "minDate", "maxDate"]);
        si["_ParseBool"]($, _, ["showTime", "showTodayButton", "showClearButton", "showOkButton"]);
        return _
    };
    siDatePickerPrototype._oncommonkeydown = function(_) {
        this["fire"]("keydown", {
            htmlEvent: _
        });
        if (_.keyCode == 8 && (this["isReadOnly"]() || this.allowInput == false))
            return false;
        if (_.keyCode == 9) {
            this["hidePopup"]();
            return
        }
        if (this["isReadOnly"]())
            return;
        switch (_.keyCode) {
        case 27:
            _.preventDefault();
            if (this["isShowPopup"]())
                _.stopPropagation();
            this["hidePopup"]();
            break;
        case 9:
        case 13:
            if (this["isShowPopup"]()) {
                _.preventDefault();
                _.stopPropagation();
                this["hidePopup"]()
            } else {
                this._oncommonchange(null );
                var $ = this;
                setTimeout(function() {
                    $["fire"]("enter")
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
            this["showPopup"]();
            break;
        default:
            break
        }
    };
    siDatePickerPrototype._oncommonchange = function(B) {
        var A = this.textEl.value
          , $ = si.parseDate(A);
        if (!$ || isNaN($) || $.getFullYear() == 1970)
            $ = null ;
        var _ = this["getFormValue"]();
        this["setValue"]($);
        if ($ == null )
            this.textEl.value = "";
        if (_ !== this["getFormValue"]())
            this._onbeforevaluechanged()
    };
    siDatePickerPrototype["getMinDate"] = function() {
        return this.minDate
    };
    siDatePickerPrototype["setMinDate"] = function($) {
        this.minDate = $
    };
    siDatePickerPrototype["getMaxDate"] = function() {
        return this.maxDate
    };
    siDatePickerPrototype["setMaxDate"] = function($) {
        this.maxDate = $
    };
    siDatePickerPrototype["getShowOkButton"] = function() {
        return this.showOkButton
    };
    siDatePickerPrototype["setShowOkButton"] = function($) {
        this.showOkButton = $
    };
    siDatePickerPrototype["getShowClearButton"] = function() {
        return this.showClearButton
    };
    siDatePickerPrototype["setShowClearButton"] = function($) {
        this.showClearButton = $
    };
    siDatePickerPrototype["getShowTodayButton"] =  function() {
        return this.showTodayButton
    };
    siDatePickerPrototype["setShowTodayButton"] = function($) {
        this.showTodayButton = $
    };
    siDatePickerPrototype["getTimeFormat"] = function() {
        return this.timeFormat
    };
    siDatePickerPrototype["setTimeFormat"] = function($) {
        if (this.timeFormat != $)
            this.timeFormat = $
    };
    siDatePickerPrototype["getShowTime"] = function() {
        return this.showTime
    };
    siDatePickerPrototype["setShowTime"] =  function($) {
        if (this.showTime != $)
            this.showTime = $
    };
    siDatePickerPrototype["getViewDate"] = function() {
        return this._datePickerCalendar["getViewDate"]()
    };
    siDatePickerPrototype["setViewDate"] = function($) {
        $ = si.parseDate($);
        if (!si.isDate($))
            return;
        this.viewDate = $
    };
    siDatePickerPrototype["getFormValue"] = function() {
        if (!si.isDate(this.value))
            return "";
        return si.formatDate(this.value, this.format)
    };
    siDatePickerPrototype["getValue"] = function() {
        if (!si.isDate(this.value))
            return "";
        return this.value
    };
    siDatePickerPrototype["setValue"] = function($) {
        $ = si.parseDate($);
        if (si.isNull($))
            $ = "";
        if (si.isDate($))
            $ = new Date($["getTime"]());
        if (this.value != $) {
            this.value = $;
            this.text = this.textEl.value = this.inputEl.value = this["getFormValue"]()
        }
    };
    siDatePickerPrototype["getFormat"] =  function() {
        return this.format
    };
    siDatePickerPrototype["setFormat"] = function($) {
        if (typeof $ != "string")
            return;
        if (this.format != $) {
            this.format = $;
            this.textEl.value = this.inputEl.value = this["getFormValue"]()
        }
    };
    siDatePickerPrototype._ontimechanged = function(_) {
        if (this.showOkButton)
            return;
        var $ = this._datePickerCalendar["getValue"]();
        this["setValue"]($);
        this._onbeforevaluechanged()
    };
    siDatePickerPrototype._ondateclick =  function(A) {
        if (this.showOkButton && A.action != "ok")
            return;
        var _ = this._datePickerCalendar["getValue"]()
          , $ = this["getFormValue"]();
        this["setValue"](_);
        if ($ !== this["getFormValue"]())
            this._onbeforevaluechanged();
        this["focus"]();
        this["hidePopup"]()
    };
    siDatePickerPrototype._ondrawdate = function(B) {
        var _ = B.date
          , $ = si.parseDate(this.maxDate)
          , A = si.parseDate(this.minDate);
        if (si.isDate($))
            if (_["getTime"]() > $["getTime"]())
                B["allowSelect"] = false;
        if (si.isDate(A))
            if (_["getTime"]() < A["getTime"]())
                B["allowSelect"] = false;
        this["fire"]("drawdate", B)
    };
    siDatePickerPrototype._onpopupeditkeydown = function($) {
        if ($.keyCode == 13)
            this._ondateclick();
        if ($.keyCode == 27) {
            this["hidePopup"]();
            this["focus"]()
        }
    };
    siDatePickerPrototype["within"] = function($) {
        if ($.keyCode == 13)
            this._ondateclick();
        if ($.keyCode == 27) {
            this["hidePopup"]();
            this["focus"]()
        }
    };
    siDatePickerPrototype["hidePopup"] = function() {
        si.DatePicker["superclass"]["hidePopup"]["call"](this);
        this._datePickerCalendar["un"]("timechanged", this._ontimechanged, this);
        this._datePickerCalendar["un"]("dateclick", this._ondateclick, this);
        this._datePickerCalendar["un"]("drawdate", this._ondrawdate, this)
    };
    siDatePickerPrototype["showPopup"] =  function() {
        var A = {
            cancel: false
        };
        this["fire"]("beforeshowpopup", A);
        if (A.cancel == true)
            return;
        this._datePickerCalendar["beginUpdate"]();
        this._datePickerCalendar._componentLock = false;
        if (this._datePickerCalendar.el.parentNode != this.popup.contentEl)
            this._datePickerCalendar["render"](this.popup.contentEl);
        this._datePickerCalendar["set"]({
            showTime: this.showTime,
            timeFormat: this.timeFormat,
            showClearButton: this.showClearButton,
            showTodayButton: this.showTodayButton,
            showOkButton: this.showOkButton
        });
        this._datePickerCalendar["setValue"](this.value);
        if (this.value)
            this._datePickerCalendar["setViewDate"](this.value);
        else
            this._datePickerCalendar["setViewDate"](this.viewDate);
        si.DatePicker["superclass"]["showPopup"]["call"](this);
        function $() {
            if (this._datePickerCalendar._target) {
                var $ = this._datePickerCalendar._target;
                this._datePickerCalendar["un"]("timechanged", $._ontimechanged, $);
                this._datePickerCalendar["un"]("dateclick", $._ondateclick, $);
                this._datePickerCalendar["un"]("drawdate", $._ondrawdate, $)
            }
            this._datePickerCalendar["on"]("timechanged", this._ontimechanged, this);
            this._datePickerCalendar["on"]("dateclick", this._ondateclick, this);
            this._datePickerCalendar["on"]("drawdate", this._ondrawdate, this);
            this._datePickerCalendar["endUpdate"]();
            this._datePickerCalendar._componentLock = true;
            this._datePickerCalendar["doLayout"]();
            this._datePickerCalendar["focus"]();
            this._datePickerCalendar._target = this
        }
        var _ = this;
        $["call"](_)
    };
    siDatePickerPrototype["_createPopup"] = function() {
        si.DatePicker["superclass"]["_createPopup"]["call"](this);
        this._datePickerCalendar = this["_getCalendar"]()
    };
    siDatePickerPrototype["_getCalendar"] = function() {
        if (!si.DatePicker._Calendar) {
            var $ = si.DatePicker._Calendar = new si.Calendar();
            $["setStyle"]("border:0;")
        }
        return si.DatePicker._Calendar
    };
    siRegClass(si.DatePicker, "datepicker");
    si.Calendar = function() {
        this.viewDate = new Date();
        this._selectedDates = [];
        si.Calendar["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Calendar, si.Control, {
        width: 220,
        height: 160,
        _clearBorder: false,
        viewDate: null ,
        _selectedDate: "",
        _selectedDates: [],
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
        todayCls: "si-calendar-today",
        weekendCls: "si-calendar-weekend",
        otherMonthCls: "si-calendar-othermonth",
        selectedCls: "si-calendar-selected",
        showHeader: true,
        showFooter: true,
        showWeekNumber: false,
        showDaysHeader: true,
        showMonthButtons: true,
        showYearButtons: true,
        showTodayButton: true,
        showClearButton: true,
        showOkButton: false,
        uiCls: "si-calendar",
        menuEl: null ,
        menuYear: null ,
        menuSelectMonth: null ,
        menuSelectYear: null 
    });
    siCalendarPrototype = si.Calendar["prototype"];
    siCalendarPrototype["getAttrs"] = function($) {
    var _ = si.Calendar["superclass"]["getAttrs"]["call"](this, $);
    si["_ParseString"]($, _, ["viewDate", "rows", "columns", "ondateclick", "ondrawdate", "ondatechanged", "timeFormat", "ontimechanged", "onvaluechanged"]);
    si["_ParseBool"]($, _, ["multiSelect", "showHeader", "showFooter", "showWeekNumber", "showDaysHeader", "showMonthButtons", "showYearButtons", "showTodayButton", "showClearButton", "showTime", "showOkButton"]);
    return _
};
    siCalendarPrototype._onbeforevaluechanged = function() {
    this["fire"]("valuechanged")
};
    siCalendarPrototype._onkeydown = function(B) {
    if (this.enabled == false)
        return;
    var _ = this["getSelectedDate"]();
    if (!_)
        _ = new Date(this.viewDate["getTime"]());
    switch (B.keyCode) {
    case 27:
        break;
    case 13:
        break;
    case 37:
        _ = si.addDate(_, -1, "D");
        break;
    case 38:
        _ = si.addDate(_, -7, "D");
        break;
    case 39:
        _ = si.addDate(_, 1, "D");
        break;
    case 40:
        _ = si.addDate(_, 7, "D");
        break;
    default:
        break
    }
    var $ = this;
    if (_.getMonth() != $.viewDate.getMonth()) {
        $["setViewDate"](si.cloneDate(_));
        $["focus"]()
    }
    var A = this["getDateEl"](_);
    if (A && sihasclass(A, "si-calendar-disabled"))
        return;
    $["setSelectedDate"](_);
    if (B.keyCode == 37 || B.keyCode == 38 || B.keyCode == 39 || B.keyCode == 40)
        B.preventDefault()
};
    siCalendarPrototype._ontimechanged = function($) {
    this["fire"]("timechanged");
    this._onbeforevaluechanged()
};
    siCalendarPrototype._onmousedown = function(C) {
    if (this.enabled == false)
        return;
    var B = sifindAncestor(C.target, "si-calendar-date");
    if (B && !sihasclass(B, "si-calendar-disabled")) {
        var $ = B.id.split("$")
          , _ = parseInt($[$.length - 1]);
        if (_ == -1)
            return;
        var A = new Date(_);
        this["setSelectedDate"](A)
    }
};
    siCalendarPrototype._onclick = function(H) {
    var G = this.viewDate;
    if (this.enabled == false)
        return;
    var C = H.target
      , F = sifindAncestor(H.target, "si-calendar-title");
    if (sifindAncestor(C, "si-calendar-monthNext")) {
        G.setMonth(G.getMonth() + 1);
        this["setViewDate"](G)
    } else if (sifindAncestor(C, "si-calendar-yearNext")) {
        G.setFullYear(G.getFullYear() + 1);
        this["setViewDate"](G)
    } else if (sifindAncestor(C, "si-calendar-monthPrev")) {
        G.setMonth(G.getMonth() - 1);
        this["setViewDate"](G)
    } else if (sifindAncestor(C, "si-calendar-yearPrev")) {
        G.setFullYear(G.getFullYear() - 1);
        this["setViewDate"](G)
    } else if (sifindAncestor(C, "si-calendar-tadayButton")) {
        var _ = new Date();
        this["setViewDate"](_);
        this["setSelectedDate"](_);
        if (this.currentTime) {
            var $ = new Date();
            this["setTime"]($)
        }
        this._beforeCalendarDateClick(_, "today")
    } else if (sifindAncestor(C, "si-calendar-clearButton")) {
        this["setSelectedDate"](null );
        this["setTime"](null );
        this._beforeCalendarDateClick(null , "clear")
    } else if (sifindAncestor(C, "si-calendar-okButton"))
        this._beforeCalendarDateClick(null , "ok");
    else if (F)
        this["showMenu"](F);
    var E = sifindAncestor(H.target, "si-calendar-date");
    if (E && !sihasclass(E, "si-calendar-disabled")) {
        var A = E.id.split("$")
          , B = parseInt(A[A.length - 1]);
        if (B == -1)
            return;
        var D = new Date(B);
        this._beforeCalendarDateClick(D)
    }
};
    siCalendarPrototype._onDoucmentCalendarMouseDown = function($) {
    if (!sifindAncestor($.target, "si-calendar-menu"))
        this["hideMenu"]()
};
    siCalendarPrototype._onCalendarMenuElClick = function(C) {
    var _ = C.target
      , B = sifindAncestor(_, "si-calendar-menu-month")
      , $ = sifindAncestor(_, "si-calendar-menu-year");
    if (B) {
        this.selectMouth = parseInt(B.id);
        this["updateMenu"]()
    } else if ($) {
        this.selectYear = parseInt($.id);
        this["updateMenu"]()
    } else if (sifindAncestor(_, "si-calendar-menu-prevYear")) {
        this.menuYear = this.menuYear - 1;
        this.menuYear = parseInt(this.menuYear / 10) * 10;
        this["updateMenu"]()
    } else if (sifindAncestor(_, "si-calendar-menu-nextYear")) {
        this.menuYear = this.menuYear + 11;
        this.menuYear = parseInt(this.menuYear / 10) * 10;
        this["updateMenu"]()
    } else if (sifindAncestor(_, "si-calendar-okButton")) {
        var A = new Date(this.selectYear,this.selectMouth,1);
        this["setViewDate"](A);
        this["hideMenu"]()
    } else if (sifindAncestor(_, "si-calendar-cancelButton"))
        this["hideMenu"]()
};
    siCalendarPrototype["updateMenu"] = function() {
    var C = "<div class=\"si-calendar-menu-months\">";
    for (var $ = 0, B = 12; $ < B; $++) {
        var _ = si.getShortMonth($)
          , A = "";
        if (this.selectMouth == $)
            A = "si-calendar-menu-selected";
        C += "<a id=\"" + $ + "\" class=\"si-calendar-menu-month " + A + "\" href=\"javascript:void(0);\" hideFocus onclick=\"return false\">" + _ + "</a>"
    }
    C += "<div style=\"clear:both;\"></div></div>";
    C += "<div class=\"si-calendar-menu-years\">";
    for ($ = this.menuYear,
    B = this.menuYear + 10; $ < B; $++) {
        _ = $,
        A = "";
        if (this.selectYear == $)
            A = "si-calendar-menu-selected";
        C += "<a id=\"" + $ + "\" class=\"si-calendar-menu-year " + A + "\" href=\"javascript:void(0);\" hideFocus onclick=\"return false\">" + _ + "</a>"
    }
    C += "<div class=\"si-calendar-menu-prevYear\"></div><div class=\"si-calendar-menu-nextYear\"></div><div style=\"clear:both;\"></div></div>";
    C += "<div class=\"si-calendar-footer\">" + "<span class=\"si-calendar-okButton\">" + this.okText + "</span>" + "<span class=\"si-calendar-footerSpace\"></span>" + "<span class=\"si-calendar-cancelButton\">" + this.cancelText + "</span>" + "</div><div style=\"clear:both;\"></div>";
    this.menuEl.innerHTML = C
};
    siCalendarPrototype["hideMenu"] = function() {
    if (this.menuEl) {
        siUnBindEvent(this.menuEl, "click", this._onCalendarMenuElClick, this);
        siUnBindEvent(document, "mousedown", this._onDoucmentCalendarMouseDown, this);
        jQuery(this.menuEl).remove();
        this.menuEl = null 
    }
};
    siCalendarPrototype["showMenu"] = function(_) {
    if (!_)
        return;
    this["hideMenu"]();
    this.menuYear = parseInt(this.viewDate.getFullYear() / 10) * 10;
    this.selectMouth = this.viewDate.getMonth();
    this.selectYear = this.viewDate.getFullYear();
    var A = "<div class=\"si-calendar-menu\"></div>";
    this.menuEl = si.append(document.body, A);
    this["updateMenu"](this.viewDate);
    var $ = this["getBox"]();
    if (this.el.style.borderWidth == "0px")
        this.menuEl.style.border = "0";
    sisetbox(this.menuEl, $);
    siBindEvent(this.menuEl, "click", this._onCalendarMenuElClick, this);
    siBindEvent(document, "mousedown", this._onDoucmentCalendarMouseDown, this)
};
    siCalendarPrototype._beforeCalendarDateClick = function(_, $) {
    var A = {
        date: _,
        action: $
    };
    this["fire"]("dateclick", A);
    this._onbeforevaluechanged()
};
    siCalendarPrototype._beforeDrawDate = function($) {
    var _ = {
        date: $,
        dateCls: "",
        dateStyle: "",
        dateHtml: $.getDate(),
        allowSelect: true
    };
    this["fire"]("drawdate", _);
    return _
};
    siCalendarPrototype._getCalendarViewHtml = function(R, J, C) {
    var _ = R.getMonth()
      , F = this["getFirstDateOfMonth"](R)
      , K = new Date(F["getTime"]())
      , A = si.clearTime(new Date())["getTime"]()
      , D = this.value ? si.clearTime(this.value)["getTime"]() : -1
      , N = this.rows > 1 || this.columns > 1
      , P = "";
    P += "<table class=\"si-calendar-view\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
    if (this.showHeader) {
        P += "<tr ><td colSpan=\"10\" class=\"si-calendar-header\"><div class=\"si-calendar-headerInner\">";
        if (J == 0 && C == 0) {
            P += "<div class=\"si-calendar-prev\">";
            if (this.showYearButtons)
                P += "<span class=\"si-calendar-yearPrev\"></span>";
            if (this.showMonthButtons)
                P += "<span class=\"si-calendar-monthPrev\"></span>";
            P += "</div>"
        }
        if (J == 0 && C == this.columns - 1) {
            P += "<div class=\"si-calendar-next\">";
            if (this.showMonthButtons)
                P += "<span class=\"si-calendar-monthNext\"></span>";
            if (this.showYearButtons)
                P += "<span class=\"si-calendar-yearNext\"></span>";
            P += "</div>"
        }
        P += "<span class=\"si-calendar-title\">" + si.formatDate(R, this.format);
        +"</span>";
        P += "</div></td></tr>"
    }
    if (this.showDaysHeader) {
        P += "<tr class=\"si-calendar-daysheader\"><td class=\"si-calendar-space\"></td>";
        if (this.showWeekNumber)
            P += "<td sclass=\"si-calendar-weeknumber\"></td>";
        for (var L = this.firstDayOfWeek, B = L + 7; L < B; L++) {
            var O = this["getShortWeek"](L);
            P += "<td yAlign=\"middle\">";
            P += O;
            P += "</td>";
            F = new Date(F.getFullYear(),F.getMonth(),F.getDate() + 1)
        }
        P += "<td class=\"si-calendar-space\"></td></tr>"
    }
    F = K;
    for (var H = 0; H <= 5; H++) {
        P += "<tr class=\"si-calendar-days\"><td class=\"si-calendar-space\"></td>";
        if (this.showWeekNumber) {
            var G = si.getWeek(F.getFullYear(), F.getMonth() + 1, F.getDate());
            if (String(G).length == 1)
                G = "0" + G;
            P += "<td class=\"si-calendar-weeknumber\" yAlign=\"middle\">" + G + "</td>"
        }
        for (L = this.firstDayOfWeek,
        B = L + 7; L < B; L++) {
            var M = this["isWeekend"](F)
              , I = si.clearTime(F)["getTime"]()
              , $ = I == A
              , E = this["isSelectedDate"](F);
            if (_ != F.getMonth() && N)
                I = -1;
            var Q = this._beforeDrawDate(F);
            P += "<td yAlign=\"middle\" id=\"";
            P += this.uid + "$" + I;
            P += "\" class=\"si-calendar-date ";
            if (M)
                P += " si-calendar-weekend ";
            if (Q["allowSelect"] == false)
                P += " si-calendar-disabled ";
            if (_ != F.getMonth() && N)
                ;
            else {
                if (E)
                    P += " " + this.selectedCls + " ";
                if ($)
                    P += " si-calendar-today "
            }
            if (_ != F.getMonth())
                P += " si-calendar-othermonth ";
            P += "\">";
            if (_ != F.getMonth() && N)
                ;
            else
                P += Q.dateHtml;
            P += "</td>";
            F = new Date(F.getFullYear(),F.getMonth(),F.getDate() + 1)
        }
        P += "<td class=\"si-calendar-space\"></td></tr>"
    }
    P += "<tr class=\"si-calendar-bottom\" colSpan=\"10\"><td ></td></tr>";
    P += "</table>";
    return P
};
    siCalendarPrototype["doUpdate"] = function() {
    if (!this.allowUpdate)
        return;
    var G = new Date(this.viewDate["getTime"]())
      , A = this.rows == 1 && this.columns == 1
      , C = 100 / this.rows
      , F = "<table class=\"si-calendar-views\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">";
    for (var $ = 0, E = this.rows; $ < E; $++) {
        F += "<tr >";
        for (var D = 0, _ = this.columns; D < _; D++) {
            F += "<td style=\"height:" + C + "%\">";
            F += this._getCalendarViewHtml(G, $, D);
            F += "</td>";
            G = new Date(G.getFullYear(),G.getMonth() + 1,1)
        }
        F += "</tr>"
    }
    F += "</table>";
    this.innerEl.innerHTML = F;
    var B = this.el;
    setTimeout(function() {
        si["repaint"](B)
    }
    , 100);
    this["doLayout"]()
};
    siCalendarPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    this.timeWrapEl.style.display = this.showTime ? "" : "none";
    this.todayButtonEl.style.display = this.showTodayButton ? "" : "none";
    this.closeButtonEl.style.display = this.showClearButton ? "" : "none";
    this.okButtonEl.style.display = this.showOkButton ? "" : "none";
    this.footerSpaceEl.style.display = (this.showClearButton && this.showTodayButton) ? "" : "none";
    this.footerEl.style.display = this["showFooter"] ? "" : "none";
    var _ = this.innerEl.firstChild
      , $ = this["isAutoHeight"]();
    if (!$) {
        _.parentNode.style.height = "100px";
        h = jQuery(this.el).height();
        h -= jQuery(this.footerEl).outerHeight();
        _.parentNode.style.height = h + "px"
    } else
        _.parentNode.style.height = "";
    si.layout(this.footerEl)
};
    siCalendarPrototype["getTimeFormat"] = function() {
    return this.timeFormat
};
    siCalendarPrototype["setTimeFormat"] = function($) {
    if (this.timeFormat != $) {
        this.timeSpinner["setFormat"]($);
        this.timeFormat = this.timeSpinner.format
    }
};
    siCalendarPrototype["getShowTime"] = function() {
    return this.showTime
};
    siCalendarPrototype["setShowTime"] = function($) {
    if (this.showTime != $) {
        this.showTime = $;
        this.timeWrapEl.style.display = this.showTime ? "" : "none";
        this["doLayout"]()
    }
};
    siCalendarPrototype["getColumns"] = function() {
    return this.columns
};
    siCalendarPrototype["setColumns"] = function($) {
    if (isNaN($))
        return;
    if ($ < 1)
        $ = 1;
    this.columns = $;
    this["doUpdate"]()
};
    siCalendarPrototype["getRows"] = function() {
    return this.rows
};
    siCalendarPrototype["setRows"] = function($) {
    if (isNaN($))
        return;
    if ($ < 1)
        $ = 1;
    this.rows = $;
    this["doUpdate"]()
};
    siCalendarPrototype["getMultiSelect"] = function() {
    return this["multiSelect"]
};
    siCalendarPrototype["setMultiSelect"] = function($) {
    this["multiSelect"] = $;
    this["doUpdate"]()
};
    siCalendarPrototype["isSelectedDate"] = function($) {
    if (!$ || !this._selectedDate)
        return false;
    return si.clearTime($)["getTime"]() == si.clearTime(this._selectedDate)["getTime"]()
};
    siCalendarPrototype["getFormValue"] = function() {
    var $ = this["getValue"]();
    if ($)
        return si.formatDate($, "yyyy-MM-dd HH:mm:ss");
    return ""
};
    siCalendarPrototype["getValue"] = function() {
    var $ = this._selectedDate;
    if ($) {
        $ = si.clearTime($);
        if (this.showTime) {
            var _ = this.timeSpinner["getValue"]();
            $.setHours(_.getHours());
            $.setMinutes(_.getMinutes());
            $.setSeconds(_.getSeconds())
        }
    }
    return $ ? $ : ""
};
    siCalendarPrototype["setValue"] = function($) {
    this["setSelectedDate"]($);
    if (!$)
        $ = new Date();
    this["setTime"]($)
};
    siCalendarPrototype["getTime"] = function() {
    return this.timeSpinner["getFormValue"]()
};
    siCalendarPrototype["setTime"] = function($) {
    this.timeSpinner["setValue"]($)
};
    siCalendarPrototype["getSelectedDate"] = function() {
    return this._selectedDate ? this._selectedDate : ""
};
    siCalendarPrototype["setSelectedDates"] = function($) {
    if (!si.isArray($))
        $ = [];
    this._selectedDates = $;
    this["doUpdate"]()
};
    siCalendarPrototype["setSelectedDate"] = function($) {
    $ = si.parseDate($);
    if (!si.isDate($))
        $ = "";
    else
        $ = new Date($["getTime"]());
    var _ = this["getDateEl"](this._selectedDate);
    if (_)
        siremoveclass(_, this.selectedCls);
    this._selectedDate = $;
    if (this._selectedDate)
        this._selectedDate = si.cloneDate(this._selectedDate);
    _ = this["getDateEl"](this._selectedDate);
    if (_)
        siaddclass(_, this.selectedCls);
    this["fire"]("datechanged")
};
    siCalendarPrototype["getViewDate"] = function() {
    return this.viewDate
};
    siCalendarPrototype["setViewDate"] = function($) {
    $ = si.parseDate($);
    if (!$)
        $ = new Date();
    if (si.isDate($))
        $ = new Date($["getTime"]());
    this.viewDate = $;
    this["doUpdate"]()
};
    siCalendarPrototype["getShowOkButton"] = function() {
    return this.showOkButton
};
    siCalendarPrototype["setShowOkButton"] = function($) {
    this.showOkButton = $;
    this.okButtonEl.style.display = this.showOkButton ? "" : "none";
    this["doUpdate"]()
};
    siCalendarPrototype["getShowClearButton"] = function() {
    return this.showClearButton
};
    siCalendarPrototype["setShowClearButton"] = function($) {
    this.showClearButton = $;
    this.closeButtonEl.style.display = this.showClearButton ? "" : "none";
    this["doUpdate"]()
};
    siCalendarPrototype["getShowTodayButton"] = function() {
    return this.showTodayButton
};
    siCalendarPrototype["setShowTodayButton"] = function($) {
    this.showTodayButton = $;
    this.todayButtonEl.style.display = this.showTodayButton ? "" : "none";
    this["doUpdate"]()
};
    siCalendarPrototype["getShowYearButtons"] = function() {
    return this.showYearButtons
};
    siCalendarPrototype["setShowYearButtons"] = function($) {
    this.showYearButtons = $;
    this["doUpdate"]()
};
    siCalendarPrototype["getShowMonthButtons"] = function() {
    return this.showMonthButtons
};
    siCalendarPrototype["setShowMonthButtons"] = function($) {
    this.showMonthButtons = $;
    this["doUpdate"]()
};
    siCalendarPrototype["getShowDaysHeader"] = function() {
    return this.showDaysHeader
};
    siCalendarPrototype["setShowDaysHeader"] = function($) {
    this.showDaysHeader = $;
    this["doUpdate"]()
};
    siCalendarPrototype["getShowWeekNumber"] = function() {
    return this.showWeekNumber
};
    siCalendarPrototype["setShowWeekNumber"] = function($) {
    this.showWeekNumber = $;
    this["doUpdate"]()
};
    siCalendarPrototype["getShowFooter"] = function() {
    return this["showFooter"]
};
    siCalendarPrototype["setShowFooter"] = function($) {
    this["showFooter"] = $;
    this["doUpdate"]()
};
    siCalendarPrototype["getShowHeader"] = function() {
    return this.showHeader
};
    siCalendarPrototype["setShowHeader"] = function($) {
    this.showHeader = $;
    this["doUpdate"]()
};
    siCalendarPrototype["within"] = function($) {
	    if (siisAncestor(this.el, $.target))
	        return true;
	    if (this.menuEl && siisAncestor(this.menuEl, $.target))
	        return true;
	    return false
	};
    siCalendarPrototype["getDateEl"] = function($) {
	    if (!$)
	        return null ;
	    var _ = this.uid + "$" + si.clearTime($)["getTime"]();
	    return document.getElementById(_)
	};
    siCalendarPrototype["_initEvents"] = function() {
	    if (this.timeSpinner)
	        this.timeSpinner["on"]("valuechanged", this._ontimechanged, this);
	    siEventTimer(function() {
	        siBindEvent(this.el, "click", this._onclick, this);
	        siBindEvent(this.el, "mousedown", this._onmousedown, this);
	        siBindEvent(this.el, "keydown", this._onkeydown, this)
	    }
	    , this)
	};
    siCalendarPrototype["destroy"] = function($) {
    	this.innerEl = this.footerEl = this.timeWrapEl = this.todayButtonEl = this.footerSpaceEl = this.closeButtonEl = null ;
    	si.Calendar["superclass"]["destroy"]["call"](this, $)
	};
    siCalendarPrototype["focus"] = function() {
    try {
        this._focusEl["focus"]()
    } catch ($) {}
};
    siCalendarPrototype["_create"] = function() {
	    var C = "<tr style=\"width:100%;\"><td style=\"width:100%;\"></td></tr>";
	    C += "<tr ><td><div class=\"si-calendar-footer\">" + "<span style=\"display:inline-block;\"><input name=\"time\" class=\"si-timespinner\" style=\"width:80px\" format=\"" + this.timeFormat + "\"/>" + "<span class=\"si-calendar-footerSpace\"></span></span>" + "<span class=\"si-calendar-tadayButton\">" + this.todayText + "</span>" + "<span class=\"si-calendar-footerSpace\"></span>" + "<span class=\"si-calendar-clearButton\">" + this.clearText + "</span>" + "<span class=\"si-calendar-okButton\">" + this.okText + "</span>" + "<a href=\"#\" class=\"si-calendar-focus\" style=\"position:absolute;left:-10px;top:-10px;width:0px;height:0px;outline:none\" hideFocus></a>" + "</div></td></tr>";
	    var A = "<table class=\"si-calendar\" cellpadding=\"0\" cellspacing=\"0\">" + C + "</table>"
	      , _ = document.createElement("div");
	    _.innerHTML = A;
	    this.el = _.firstChild;
	    var $ = this.el.getElementsByTagName("tr")
	      , B = this.el.getElementsByTagName("td");
	    this.innerEl = B[0];
	    this.footerEl = si.byClass("si-calendar-footer", this.el);
	    this.timeWrapEl = this.footerEl.childNodes[0];
	    this.todayButtonEl = this.footerEl.childNodes[1];
	    this.footerSpaceEl = this.footerEl.childNodes[2];
	    this.closeButtonEl = this.footerEl.childNodes[3];
	    this.okButtonEl = this.footerEl.childNodes[4];
	    this._focusEl = this.footerEl.lastChild;
	    si.analyze(this.footerEl);
	    this.timeSpinner = si["getbyName"]("time", this.el);
	    this["doUpdate"]()
	};
    siCalendarPrototype["getShortWeek"] = function($) {
    return this.daysShort[$]
};
    siCalendarPrototype["getFirstDateOfMonth"] = function($) {
	    var $ = new Date($.getFullYear(),$.getMonth(),1);
	    return si.getWeekStartDate($, this.firstDayOfWeek)
	};
    siCalendarPrototype["isWeekend"] = function(_) {
	   	var $ = _.getDay();
	    return $ == 0 || $ == 6
	};
    siRegClass(si.Calendar, "calendar");
    si.ListBox = function() {
        si.ListBox["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.ListBox, si.ListControl, {
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
        listItemCls: "si-listbox-item",
        listItemhoverCls: "si-listbox-item-hover",
        itemSelectedCls: "si-listbox-item-selected",
        uiCls: "si-listbox"
    });
    siListBoxPrototype = si.ListBox["prototype"];
    siListBoxPrototype["getAttrs"] = function(_) {
    var E = si.ListBox["superclass"]["getAttrs"]["call"](this, _);
    si["_ParseString"](_, E, ["nullItemText", "ondrawcell"]);
    si["_ParseBool"](_, E, ["showCheckBox", "showAllCheckBox", "showNullItem", "showColumns"]);
    if (_.nodeName.toLowerCase() != "select") {
        var C = si["getChildNodes"](_);
        for (var $ = 0, D = C.length; $ < D; $++) {
            var B = C[$]
              , A = jQuery(B).attr("property");
            if (!A)
                continue;A = A.toLowerCase();
            if (A == "columns")
                E.columns = si.createColumns(B);
            else if (A == "data")
                E.data = B.innerHTML
        }
    }
    return E
};
    siListBoxPrototype._onclick = function(C) {
    var A = this.uid + "$ck$all";
    if (C.target.id == A) {
        var _ = document.getElementById(A);
        if (_) {
            var B = _.checked
              , $ = this["getValue"]();
            if (B)
                this["selectAll"]();
            else
                this["deselectAll"]();
            this.beforeSelectionChanged();
            if ($ != this["getValue"]()) {
                this._onbeforevaluechanged();
                this["fire"]("itemclick", {
                    htmlEvent: C
                })
            }
        }
        return
    }
    this.autoFireEvent(C, "Click")
};
    siListBoxPrototype._onBodyElScroll = function($) {
    this.headerEl.scrollLeft = this.viewBodyEl.scrollLeft
};
    siListBoxPrototype.getCellObject = function(_, $, C) {
    var A = C ? _[C.field] : this["getItemText"](_)
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
        E.cellHtml = si.htmlEncode(E.cellHtml);
    if (C) {
        if (C.dateFormat)
            if (si.isDate(E.value))
                E.cellHtml = si.formatDate(A, C.dateFormat);
            else
                E.cellHtml = A;
        var B = C.renderer;
        if (B) {
            fn = typeof B == "function" ? B : window[B];
            if (fn)
                E.cellHtml = fn["call"](C, E)
        }
    }
    this["fire"]("drawcell", E);
    if (E.cellHtml === null  || E.cellHtml === undefined || E.cellHtml === "")
        E.cellHtml = "&nbsp;";
    return E
};
    siListBoxPrototype.initNullItem = function() {
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
};
    siListBoxPrototype["getNullItemText"] = function() {
    return this.nullItemText
};
    siListBoxPrototype["setNullItemText"] = function($) {
    if (this.nullItemText != $) {
        this.nullItemText = $;
        this.initNullItem();
        this["doUpdate"]()
    }
};
    siListBoxPrototype["getShowNullItem"] = function() {
    return this.showNullItem
};
    siListBoxPrototype["setShowNullItem"] = function($) {
    if (this.showNullItem != $) {
        this.showNullItem = $;
        this.initNullItem();
        this["doUpdate"]()
    }
};
    siListBoxPrototype["getShowColumns"] = function() {
    return this.showColumns
};
    siListBoxPrototype["setShowColumns"] = function($) {
    this.showColumns = $;
    this["doUpdate"]()
};
    siListBoxPrototype["getShowAllCheckBox"] = function() {
    return this["showAllCheckBox"]
};
    siListBoxPrototype["setShowAllCheckBox"] = function($) {
    this["showAllCheckBox"] = $;
    this["doLayout"]()
};
    siListBoxPrototype["getShowCheckBox"] = function() {
    return this["showCheckBox"]
};
    siListBoxPrototype["setShowCheckBox"] = function($) {
    this["showCheckBox"] = $;
    this["doLayout"]()
};
    siListBoxPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    if (this.columns && this.columns.length > 0)
        siaddclass(this.el, "si-listbox-showcolumns");
    else
        siremoveclass(this.el, "si-listbox-showcolumns");
    if (this["showCheckBox"])
        siremoveclass(this.el, "si-listbox-hideCheckBox");
    else
        siaddclass(this.el, "si-listbox-hideCheckBox");
    var D = this.uid + "$ck$all"
      , B = document.getElementById(D);
    if (B)
        B.style.display = this["showAllCheckBox"] ? "" : "none";
    var E = this["isAutoHeight"]();
    h = this["getHeight"](true);
    _ = this["getWidth"](true);
    var C = _
      , F = this.viewBodyEl;
    F.style.width = _ + "px";
    if (!E) {
        var $ = sigetheight(this.headerEl);
        h = h - $;
        F.style.height = h + "px"
    } else
        F.style.height = "auto";
    if (isIE) {
        var A = this.headerEl.firstChild
          , G = this.viewBodyEl.firstChild;
        if (this.viewBodyEl.offsetHeight >= this.viewBodyEl.scrollHeight) {
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
    if (this.viewBodyEl.offsetHeight < this.viewBodyEl.scrollHeight)
        this.headerEl.style.width = (C - 17) + "px";
    else
        this.headerEl.style.width = "100%"
};
    siListBoxPrototype["doUpdate"] = function() {
    if (this.allowUpdate === false)
        return;
    var S = this.columns && this.columns.length > 0;
    if (S)
        siaddclass(this.el, "si-listbox-showColumns");
    else
        siremoveclass(this.el, "si-listbox-showColumns");
    this.headerEl.style.display = S ? "" : "none";
    var I = [];
    if (S && this.showColumns) {
        I[I.length] = "<table class=\"si-listbox-headerInner\" cellspacing=\"0\" cellpadding=\"0\"><tr>";
        var D = this.uid + "$ck$all";
        I[I.length] = "<td class=\"si-listbox-checkbox\"><input type=\"checkbox\" id=\"" + D + "\"></td>";
        for (var R = 0, _ = this.columns.length; R < _; R++) {
            var B = this.columns[R]
              , E = B.header;
            if (si.isNull(E))
                E = "&nbsp;";
            var A = B.width;
            if (si.isNumber(A))
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
    this.headerEl.innerHTML = I.join("");
    var I = []
      , P = this.data;
    I[I.length] = "<table class=\"si-listbox-items\" cellspacing=\"0\" cellpadding=\"0\">";
    if (this["showEmpty"] && P.length == 0)
        I[I.length] = "<tr><td colspan=\"20\">" + this["emptyText"] + "</td></tr>";
    else {
        this.initNullItem();
        for (var K = 0, G = P.length; K < G; K++) {
            var $ = P[K]
              , M = -1
              , O = " "
              , J = -1
              , N = " ";
            I[I.length] = "<tr id=\"";
            I[I.length] = this._createListControlId(K);
            I[I.length] = "\" index=\"";
            I[I.length] = K;
            I[I.length] = "\" class=\"si-listbox-item ";
            if ($.enabled === false)
                I[I.length] = " si-disabled ";
            M = I.length;
            I[I.length] = O;
            I[I.length] = "\" style=\"";
            J = I.length;
            I[I.length] = N;
            I[I.length] = "\">";
            var H = this._createListControlCkId(K)
              , L = this.name
              , F = this["getItemValue"]($)
              , C = "";
            if ($.enabled === false)
                C = "disabled";
            I[I.length] = "<td class=\"si-listbox-checkbox\"><input " + C + " id=\"" + H + "\" type=\"checkbox\" ></td>";
            if (S) {
                for (R = 0,
                _ = this.columns.length; R < _; R++) {
                    var B = this.columns[R]
                      , T = this.getCellObject($, K, B)
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
                T = this.getCellObject($, K, null );
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
    this.viewBodyEl.innerHTML = Q;
    this.updateRowCls();
    this["doLayout"]()
};
    siListBoxPrototype["getColumns"] = function() {
    return this.columns
};
    siListBoxPrototype["setColumns"] = function(_) {
    if (!si.isArray(_))
        _ = [];
    this.columns = _;
    for (var $ = 0, D = this.columns.length; $ < D; $++) {
        var B = this.columns[$];
        if (B.type) {
            if (!si.isNull(B.header) && typeof B.header !== "function")
                if (B.header.trim() == "")
                    delete B.header;
            var C = si["_getColumn"](B.type);
            if (C) {
                var E = si.copyTo({}, B);
                si.copyTo(B, C);
                si.copyTo(B, E)
            }
        }
        var A = parseInt(B.width);
        if (si.isNumber(A) && String(A) == B.width)
            B.width = A + "px";
        if (si.isNull(B.width))
            B.width = this["columnWidth"] + "px"
    }
    this["doUpdate"]()
};
    siListBoxPrototype["destroy"] = function($) {
    if (this.viewBodyEl) {
        si["clearEvent"](this.viewBodyEl);
        this.viewBodyEl = null 
    }
    this.borderEl = null ;
    this.headerEl = null ;
    this.viewBodyEl = null ;
    this.inputEl = null ;
    si.ListBox["superclass"]["destroy"]["call"](this, $)
};
    siListBoxPrototype["_initEvents"] = function() {
    si.ListBox["superclass"]["_initEvents"]["call"](this);
    siEventTimer(function() {
        siTriggerEvent(this.viewBodyEl, "scroll", this._onBodyElScroll, this)
    }
    , this)
};
    siListBoxPrototype["destroy"] = function($) {
    if (this.viewBodyEl)
        this.viewBodyEl.onscroll = null ;
    si.ListBox["superclass"]["destroy"]["call"](this, $)
};
    siListBoxPrototype["_create"] = function() {
    var $ = this.el = document.createElement("div");
    this.el.className = "si-listbox";
    this.el.innerHTML = "<div class=\"si-listbox-border\"><div class=\"si-listbox-header\"></div><div class=\"si-listbox-view\"></div><input type=\"hidden\"/></div><div class=\"si-errorIcon\"></div>";
    this.borderEl = this.el.firstChild;
    this.headerEl = this.borderEl.firstChild;
    this.viewBodyEl = this.borderEl.childNodes[1];
    this.inputEl = this.borderEl.childNodes[2];
    this.errorIconEl = this.el.lastChild;
    this._bodyEl = this.viewBodyEl
};
    siRegClass(si.ListBox, "listbox");
    si.CheckBoxList = function() {
        si.CheckBoxList["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.CheckBoxList, si.ListControl, {
        formField: true,
        multiSelect: true,
        repeatItems: 0,
        repeatLayout: "none",
        repeatDirection: "horizontal",
        listItemCls: "si-checkboxlist-item",
        listItemhoverCls: "si-checkboxlist-item-hover",
        itemSelectedCls: "si-checkboxlist-item-selected",
        listTableCls: "si-checkboxlist-table",
        listTdCls: "si-checkboxlist-td",
        selectType: "checkbox",
        uiCls: "si-checkboxlist"
    });
    siCheckBoxListPrototype = si.CheckBoxList["prototype"];
    siCheckBoxListPrototype["getAttrs"] = function(_) {
        var D = si.CheckBoxList["superclass"]["getAttrs"]["call"](this, _)
          , C = jQuery(_);
        si["_ParseString"](_, D, ["ondrawitem"]);
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
    };
    siCheckBoxListPrototype["getRepeatDirection"] = function() {
        return this.repeatDirection
    };
    siCheckBoxListPrototype["setRepeatDirection"] = function($) {
        if ($ != "vertical")
            $ = "horizontal";
        if (this.repeatDirection != $) {
            this.repeatDirection = $;
            this["doUpdate"]()
        }
    };
    siCheckBoxListPrototype["getRepeatLayout"] = function() {
        return this.repeatLayout
    };
    siCheckBoxListPrototype["setRepeatLayout"] = function($) {
        if ($ != "flow" && $ != "table")
            $ = "none";
        if (this.repeatLayout != $) {
            this.repeatLayout = $;
            this["doUpdate"]()
        }
    };
    siCheckBoxListPrototype["getRepeatItems"] = function() {
        return this.repeatItems
    };
    siCheckBoxListPrototype["setRepeatItems"] = function($) {
        $ = parseInt($);
        if (isNaN($))
            $ = 0;
        if (this.repeatItems != $) {
            this.repeatItems = $;
            this["doUpdate"]()
        }
    };
    siCheckBoxListPrototype._drawItem = function(_, $) {
        var A = this["getItemText"](_)
          , B = {
            index: $,
            item: _,
            itemHtml: A,
            itemCls: "",
            itemStyle: ""
        };
        this["fire"]("drawitem", B);
        if (B.itemHtml === null  || B.itemHtml === undefined)
            B.itemHtml = "";
        return B
    };
    siCheckBoxListPrototype._getCheckboxListHtml = function(_, $) {
        var G = this._drawItem(_, $)
          , F = this._createListControlId($)
          , A = this._createListControlCkId($)
          , D = this["getItemValue"](_)
          , B = ""
          , E = "<div id=\"" + F + "\" index=\"" + $ + "\" class=\"" + this.listItemCls + " ";
        if (_.enabled === false) {
            E += " si-disabled ";
            B = "disabled"
        }
        var C = "onclick=\"return false\"";
        if (isChrome)
            C = "onmousedown=\"this._checked = this.checked;\" onclick=\"this.checked = this._checked\"";
        E += G.itemCls + "\" style=\"" + G.itemStyle + "\"><input " + C + " " + B + " value=\"" + D + "\" id=\"" + A + "\" type=\"" + this.selectType + "\" /><label for=\"" + A + "\" onclick=\"return false;\">";
        E += G.itemHtml + "</label></div>";
        return E
    };
    siCheckBoxListPrototype["doUpdate"] = function() {
        var D = this.data
          , G = "";
        for (var A = 0, F = D.length; A < F; A++) {
            var _ = D[A];
            _._i = A
        }
        if (this.repeatLayout == "flow") {
            var $ = this.getCheckBoxListData();
            for (A = 0,
            F = $.length; A < F; A++) {
                var C = $[A];
                for (var E = 0, B = C.length; E < B; E++) {
                    _ = C[E];
                    G += this._getCheckboxListHtml(_, _._i)
                }
                if (A != F - 1)
                    G += "<br/>"
            }
        } else if (this.repeatLayout == "table") {
            $ = this.getCheckBoxListData();
            G += "<table class=\"" + this.listTableCls + "\" cellpadding=\"0\" cellspacing=\"1\">";
            for (A = 0,
            F = $.length; A < F; A++) {
                C = $[A];
                G += "<tr>";
                for (E = 0,
                B = C.length; E < B; E++) {
                    _ = C[E];
                    G += "<td class=\"" + this.listTdCls + "\">";
                    G += this._getCheckboxListHtml(_, _._i);
                    G += "</td>"
                }
                G += "</tr>"
            }
            G += "</table>"
        } else
            for (A = 0,
            F = D.length; A < F; A++) {
                _ = D[A];
                G += this._getCheckboxListHtml(_, A)
            }
        this.innerEl.innerHTML = G;
        for (A = 0,
        F = D.length; A < F; A++) {
            _ = D[A];
            delete _._i
        }
    };
    siCheckBoxListPrototype.getCheckBoxListData = function() {
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
    };
    siCheckBoxListPrototype["_create"] = function() {
        var $ = this.el = document.createElement("div");
        this.el.className = this.uiCls;
        this.el.innerHTML = "<div class=\"si-list-inner\"></div><div class=\"si-errorIcon\"></div><input type=\"hidden\" />";
        this.innerEl = this.el.firstChild;
        this.inputEl = this.el.lastChild;
        this.errorIconEl = this.el.childNodes[1]
    };
    siRegClass(si.CheckBoxList, "checkboxlist");
    si.RadioButtonList = function() {
        si.RadioButtonList["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.RadioButtonList, si.CheckBoxList, {
        multiSelect: false,
        listItemCls: "si-radiobuttonlist-item",
        listItemhoverCls: "si-radiobuttonlist-item-hover",
        itemSelectedCls: "si-radiobuttonlist-item-selected",
        listTableCls: "si-radiobuttonlist-table",
        listTdCls: "si-radiobuttonlist-td",
        selectType: "radio",
        uiCls: "si-radiobuttonlist"
    });
    siradiobuttonlistprototype = si.RadioButtonList["prototype"];
    siRegClass(si.RadioButtonList, "radiobuttonlist");
    si.TreeSelect = function() {
        this.data = [];
        si.TreeSelect["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.TreeSelect, si.PopupEdit, {
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
        uiCls: "si-treeselect"
    });
    siTreeSelectPrototype = si.TreeSelect["prototype"];
    siTreeSelectPrototype["getAttrs"] = function(_) {
        var A = si.ComboBox["superclass"]["getAttrs"]["call"](this, _);
        si["_ParseString"](_, A, ["url", "data", "textField", "valueField", "nodesField", "parentField", "onbeforenodecheck", "onbeforenodeselect", "expandOnLoad", "onnodeclick", "onbeforeload", "onload", "onloaderror"]);
        si["_ParseBool"](_, A, ["multiSelect", "resultAsTree", "checkRecursive", "showTreeIcon", "showTreeLines", "showFolderCheckBox", "autoCheckParent", "valueFromSelect"]);
        if (A.expandOnLoad) {
            var $ = parseInt(A.expandOnLoad);
            if (si.isNumber($))
                A.expandOnLoad = $;
            else
                A.expandOnLoad = A.expandOnLoad == "true" ? true : false
        }
        return A
    };
    siTreeSelectPrototype["setDataField"] =  function($) {
        if (this.tree)
            this.tree["setDataField"]($);
        this.dataField = $
    };
    siTreeSelectPrototype["getValueFromSelect"] = function() {
        return this.valueFromSelect
    };
    siTreeSelectPrototype["setValueFromSelect"] = function($) {
        this.valueFromSelect = $
    };
    siTreeSelectPrototype["getExpandOnLoad"] = function() {
        return this.expandOnLoad
    };
    siTreeSelectPrototype["setExpandOnLoad"] =  function($) {
        this.expandOnLoad = $;
        if (this.tree)
            this.tree["setExpandOnLoad"]($)
    };
    siTreeSelectPrototype["getAutoCheckParent"] = function() {
        return this.autoCheckParent
    };
    siTreeSelectPrototype["setAutoCheckParent"] = function($) {
        this.autoCheckParent = $;
        if (this.tree)
            this.tree["setAutoCheckParent"]($)
    };
    siTreeSelectPrototype["getShowFolderCheckBox"] = function() {
        return this["showFolderCheckBox"]
    };
    siTreeSelectPrototype["setShowFolderCheckBox"] = function($) {
        this["showFolderCheckBox"] = $;
        if (this.tree)
            this.tree["setShowFolderCheckBox"]($)
    };
    siTreeSelectPrototype["getShowTreeLines"] = function() {
        return this["showTreeLines"]
    };
    siTreeSelectPrototype["setShowTreeLines"] = function($) {
        this["showTreeLines"] = $;
        if (this.tree)
            this.tree["setShowTreeLines"]($)
    };
    siTreeSelectPrototype["getShowTreeIcon"] = function() {
        return this["showTreeIcon"]
    };
    siTreeSelectPrototype["setShowTreeIcon"] = function($) {
        this["showTreeIcon"] = $;
        if (this.tree)
            this.tree["setShowTreeIcon"]($)
    };
    siTreeSelectPrototype["getValueField"] = function() {
        return this["valueField"]
    };
    siTreeSelectPrototype["setValueField"] = function($) {
        if (this.tree)
            this.tree["setIdField"]($);
        this["valueField"] = $
    };
    siTreeSelectPrototype["getParentField"] = function() {
        return this["parentField"]
    };
    siTreeSelectPrototype["setParentField"] = function($) {
        this["parentField"] = $;
        if (this.tree)
            this.tree["setParentField"]($)
    };
    siTreeSelectPrototype["getResultAsTree"] = function() {
        return this["resultAsTree"]
    };
    siTreeSelectPrototype["setResultAsTree"] = function($) {
        this["resultAsTree"] = $;
        if (this.tree)
            this.tree["setResultAsTree"]($)
    };
    siTreeSelectPrototype["getCheckRecursive"] = function() {
        return this["checkRecursive"]
    };
    siTreeSelectPrototype["setCheckRecursive"] = function($) {
        this["checkRecursive"] = $;
        if (this.tree)
            this.tree["setCheckRecursive"]($)
    };
    siTreeSelectPrototype._insideLoadData = function() {
        var _ = this["textField"]
          , $ = this.textEl.value.toLowerCase();
        this.tree["filter"](function(B) {
            var A = String(B[_] ? B[_] : "").toLowerCase();
            if (A["indexOf"]($) != -1)
                return true;
            else
                return false
        }
        );
        this.tree["expandAll"]();
        this["showPopup"]()
    };
    siTreeSelectPrototype._oncommonkeydown = function(_) {
        this["fire"]("keydown", {
            htmlEvent: _
        });
        if (_.keyCode == 8 && (this["isReadOnly"]() || this.allowInput == false))
            return false;
        if (_.keyCode == 9) {
            this["hidePopup"]();
            return
        }
        if (this["isReadOnly"]())
            return;
        switch (_.keyCode) {
        case 27:
            if (this["isShowPopup"]())
                _.stopPropagation();
            this["hidePopup"]();
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
            this["showPopup"]();
            break;
        default:
            var $ = this;
            setTimeout(function() {
                $._insideLoadData()
            }
            , 10);
            break
        }
    };
    siTreeSelectPrototype._onnodecheck = function(A) {
        if (!this["multiSelect"])
            return;
        var _ = this.tree["getValue"]()
          , $ = this["getValue"]();
        this["setValue"](_);
        if ($ != this["getValue"]())
            this._onbeforevaluechanged()
    };
    siTreeSelectPrototype._onnodeclick = function(B) {
        if (this["multiSelect"])
            return;
        var _ = this.tree["getSelectedNode"]()
          , A = this.tree["getItemValue"](_)
          , $ = this["getValue"]();
        this["setValue"](A);
        if ($ != this["getValue"]())
            this._onbeforevaluechanged();
        this["hidePopup"]();
        this["fire"]("nodeclick", {
            node: B.node
        })
    };
    siTreeSelectPrototype["getMultiSelect"] = function() {
        return this["multiSelect"]
    };
    siTreeSelectPrototype["setMultiSelect"] =  function($) {
        if (this["multiSelect"] != $) {
            this["multiSelect"] = $;
            this.tree["setShowCheckBox"]($);
            this.tree["setAllowSelect"](!$);
            this.tree["setEnableHotTrack"](!$)
        }
    };
    siTreeSelectPrototype["setValue"] = function($) {
        var _ = this.tree._toValueTextArray($);
        if (_[1] == "" && !this.valueFromSelect) {
            _[0] = $;
            _[1] = $
        }
        this.value = $;
        this.inputEl.value = $;
        this.text = this.textEl.value = _[1];
        this._createPlaceHolder();
        this.tree.value = this.value
    };
    siTreeSelectPrototype["getNodesField"] = function() {
        return this.nodesField
    };
    siTreeSelectPrototype["setNodesField"] =  function($) {
        if (this.tree)
            this.tree["setNodesField"]($);
        this.nodesField = $
    };
    siTreeSelectPrototype["getTextField"] = function() {
        return this["textField"]
    };
    siTreeSelectPrototype["setTextField"] = function($) {
        if (this.tree)
            this.tree["setTextField"]($);
        this["textField"] = $
    };
    siTreeSelectPrototype["getUrl"] = function() {
        return this.url
    };
    siTreeSelectPrototype["setUrl"] = function($) {
        this["getPopup"]();
        this.tree["setUrl"]($);
        this.url = this.tree.url
    };
    siTreeSelectPrototype["getData"] = function() {
        return this.data
    };
    siTreeSelectPrototype["setData"] = function($) {
        this.tree["setData"]($);
        this.data = this.tree["getData"]()
    };
    siTreeSelectPrototype["load"] = function($) {
        this.tree["load"]($)
    };
    siTreeSelectPrototype["getList"] =  function() {
        return this.tree["getList"]()
    };
    siTreeSelectPrototype["loadList"] = function($, A, _) {
        this.tree["loadList"]($, A, _);
        this.data = this.tree["getData"]()
    };
    siTreeSelectPrototype["getAt"] = function($) {
        return this.data[$]
    };
    siTreeSelectPrototype["indexOf"] = function($) {
        return this.data["indexOf"]($)
    };
    siTreeSelectPrototype["getItem"] = function($) {
        return typeof $ == "object" ? $ : this.data[$]
    };
    siTreeSelectPrototype._onpopupeditclose = function($) {
        this.tree["clearFilter"]();
        this["fire"]("hidepopup")
    };
    siTreeSelectPrototype["showPopup"] = function() {
        var $ = {
            cancel: false
        };
        this["fire"]("beforeshowpopup", $);
        if ($.cancel == true)
            return;
        si.TreeSelect["superclass"]["showPopup"]["call"](this);
        this.tree["setValue"](this.value)
    };
    siTreeSelectPrototype["getChildNodes"] = function($) {
        return this.tree["getChildNodes"]($)
    };
    siTreeSelectPrototype["getParentNode"] = function($) {
        return this.tree["getParentNode"]($)
    };
    siTreeSelectPrototype["getSelectedNodes"] = function() {
        return this.tree["getSelectedNodes"]()
    };
    siTreeSelectPrototype["getCheckedNodes"] = function($) {
        return this.tree["getCheckedNodes"]($)
    };
    siTreeSelectPrototype["getSelectedNode"] = function() {
        return this.tree["getSelectedNode"]()
    };
    siTreeSelectPrototype._oncollapse = function($) {};
    siTreeSelectPrototype._onexpand = function($) {};
    siTreeSelectPrototype._onbeforenodeselect = function($) {
        $.tree = $.sender;
        this["fire"]("beforenodeselect", $)
    };
    siTreeSelectPrototype._onbeforenodecheck = function($) {
        $.tree = $.sender;
        this["fire"]("beforenodecheck", $)
    };
    siTreeSelectPrototype["_createPopup"] = function() {
        si.TreeSelect["superclass"]["_createPopup"]["call"](this);
        this.tree = new si.Tree();
        this.tree["setShowTreeIcon"](true);
        this.tree["setStyle"]("border:0;width:100%;height:100%;");
        this.tree["setResultAsTree"](this["resultAsTree"]);
        this.tree["render"](this.popup.contentEl);
        this.tree["setCheckRecursive"](this["checkRecursive"]);
        this.tree["setShowFolderCheckBox"](this["showFolderCheckBox"]);
        this.tree["on"]("nodeclick", this._onnodeclick, this);
        this.tree["on"]("nodecheck", this._onnodecheck, this);
        this.tree["on"]("expand", this._onexpand, this);
        this.tree["on"]("collapse", this._oncollapse, this);
        this.tree["on"]("beforenodecheck", this._onbeforenodecheck, this);
        this.tree["on"]("beforenodeselect", this._onbeforenodeselect, this);
        this.tree.allowAnim = false;
        var $ = this;
        this.tree["on"]("beforeload", function(_) {
            $["fire"]("beforeload", _)
        }
        , this);
        this.tree["on"]("load", function(_) {
            $["fire"]("load", _)
        }
        , this);
        this.tree["on"]("loaderror", function(_) {
            $["fire"]("loaderror", _)
        }
        , this)
    };
    siTreeSelectPrototype["set"] = function(B) {
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
        si.TreeSelect["superclass"]["set"]["call"](this, B);
        if (!si.isNull(A))
            this["setData"](A);
        if (!si.isNull(C))
            this["setUrl"](C);
        if (!si.isNull($))
            this["setValue"]($);
        if (!si.isNull(_))
            this["setText"](_);
        return this
    };
    siRegClass(si.TreeSelect, "TreeSelect");
    si.Spinner = function() {
        si.Spinner["superclass"]["constructor"]["call"](this);
        this["setValue"](this["minValue"])
    }
    ;
    siextend(si.Spinner, si.ButtonEdit, {
        value: 0,
        minValue: 0,
        maxValue: 100,
        increment: 1,
        decimalPlaces: 0,
        changeOnMousewheel: true,
        allowLimitValue: true,
        uiCls: "si-spinner",
        _timespinnertimer: null 
    });
    siSpinnerPrototype = si.Spinner["prototype"];
    siSpinnerPrototype["getAttrs"] = function($) {
    var _ = si.Spinner["superclass"]["getAttrs"]["call"](this, $);
    si["_ParseString"]($, _, ["minValue", "maxValue", "increment", "decimalPlaces", "changeOnMousewheel"]);
    si["_ParseBool"]($, _, ["allowLimitValue"]);
    return _
};
    siSpinnerPrototype._oncommonchange = function(A) {
    var _ = this["getValue"]()
      , $ = parseFloat(this.textEl.value);
    this["setValue"]($);
    if (_ != this["getValue"]())
        this._onbeforevaluechanged()
};
    siSpinnerPrototype._onSpinnerPrototypeMouseup = function($) {
    this._clearSpinnerTimer();
    siUnBindEvent(document, "mouseup", this._onSpinnerPrototypeMouseup, this);
    if (this._DownValue != this["getValue"]())
        this._onbeforevaluechanged()
};
    siSpinnerPrototype._onmousewheel =  function(A) {
    if (this["isReadOnly"]())
        return;
    if (this.changeOnMousewheel == false)
        return;
    var $ = A.wheelDelta || A.originalEvent.wheelDelta;
    if (si.isNull($))
        $ = -A.detail * 24;
    var _ = this["increment"];
    if ($ < 0)
        _ = -_;
    this["setValue"](this.value + _);
    this._onbeforevaluechanged();
    return false
};
    siSpinnerPrototype._oncommonkeydown = function(_) {
    si.Spinner["superclass"]._oncommonkeydown["call"](this, _);
    var $ = si.Keyboard;
    switch (_.keyCode) {
    case $.Top:
        this["setValue"](this.value + this["increment"]);
        this._onbeforevaluechanged();
        break;
    case $.Bottom:
        this["setValue"](this.value - this["increment"]);
        this._onbeforevaluechanged();
        break
    }
};
    siSpinnerPrototype._onSpinnerButtonMouseDown = function($) {
    this._DownValue = this["getValue"]();
    this._oncommonchange();
    if ($.spinType == "up")
        this._timespinnerbuttonclick(this.increment, 230, 2);
    else
        this._timespinnerbuttonclick(-this.increment, 230, 2)
};
    siSpinnerPrototype._clearSpinnerTimer = function() {
    clearInterval(this._timespinnertimer);
    this._timespinnertimer = null 
};
    siSpinnerPrototype._timespinnerbuttonclick = function(D, B, C) {
    this._clearSpinnerTimer();
    this["setValue"](this.value + D);
    var A = this
      , _ = C
      , $ = new Date();
    this._timespinnertimer = setInterval(function() {
        A["setValue"](A.value + D);
        A._onbeforevaluechanged();
        C--;
        if (C == 0 && B > 50)
            A._timespinnerbuttonclick(D, B - 100, _ + 3);
        var E = new Date();
        if (E - $ > 500)
            A._clearSpinnerTimer();
        $ = E
    }
    , B);
    siBindEvent(document, "mouseup", this._onSpinnerPrototypeMouseup, this)
};
    siSpinnerPrototype["getAllowLimitValue"] = function($) {
    return this.allowLimitValue
};
    siSpinnerPrototype["setAllowLimitValue"] = function($) {
    this.allowLimitValue = $
};
    siSpinnerPrototype["getChangeOnMousewheel"] = function($) {
    return this.changeOnMousewheel
};
    siSpinnerPrototype["setChangeOnMousewheel"] = function($) {
    this.changeOnMousewheel = $
};
    siSpinnerPrototype["getDecimalPlaces"] = function($) {
    return this["decimalPlaces"]
};
    siSpinnerPrototype["setDecimalPlaces"] = function($) {
    $ = parseInt($);
    if (isNaN($) || $ < 0)
        return;
    this["decimalPlaces"] = $
};
    siSpinnerPrototype["getIncrement"] = function($) {
    return this["increment"]
};
    siSpinnerPrototype["setIncrement"] = function($) {
    $ = parseFloat($);
    if (isNaN($))
        return;
    if (this["increment"] != $)
        this["increment"] = $
};
    siSpinnerPrototype["getMinValue"] = function($) {
    return this["minValue"]
};
    siSpinnerPrototype["setMinValue"] = function($) {
    $ = parseFloat($);
    if (isNaN($))
        return;
    $ = parseFloat($.toFixed(this["decimalPlaces"]));
    if (this["minValue"] != $) {
        this["minValue"] = $;
        this._limitValue()
    }
};
    siSpinnerPrototype["getMaxValue"] = function($) {
    return this["maxValue"]
};
    siSpinnerPrototype["setMaxValue"] = function($) {
    $ = parseFloat($);
    if (isNaN($))
        return;
    $ = parseFloat($.toFixed(this["decimalPlaces"]));
    if (this["maxValue"] != $) {
        this["maxValue"] = $;
        this._limitValue()
    }
};
    siSpinnerPrototype["setValue"] = function($) {
    $ = parseFloat($);
    if (isNaN($))
        $ = this["defaultValue"];
    $ = parseFloat($);
    if (isNaN($))
        $ = this["minValue"];
    $ = parseFloat($.toFixed(this["decimalPlaces"]));
    if (this.value != $) {
        this.value = $;
        this._limitValue();
        this.inputEl.value = this.value;
        this.text = this.textEl.value = this["getFormValue"]()
    } else
        this.text = this.textEl.value = this["getFormValue"]()
};
    siSpinnerPrototype["getFormValue"] = function() {
    var D = this.value;
    D = parseFloat(D);
    if (isNaN(D))
        D = 0;
    var C = String(D).split(".")
      , B = C[0]
      , _ = C[1];
    if (!_)
        _ = "";
    if (this["decimalPlaces"] > 0) {
        for (var $ = _.length, A = this["decimalPlaces"]; $ < A; $++)
            _ += "0";
        _ = "." + _
    }
    return B + _
};
    siSpinnerPrototype._limitValue = function() {
    if (this.allowLimitValue == false)
        return;
    if (this["minValue"] > this["maxValue"])
        this["maxValue"] = this["minValue"] + 100;
    if (this.value < this["minValue"])
        this["setValue"](this["minValue"]);
    if (this.value > this["maxValue"])
        this["setValue"](this["maxValue"])
};
    siSpinnerPrototype["_initEvents"] = function() {
    si.Spinner["superclass"]["_initEvents"]["call"](this);
    siEventTimer(function() {
        this["on"]("buttonmousedown", this._onSpinnerButtonMouseDown, this);
        siBindEvent(this.el, "mousewheel", this._onmousewheel, this)
    }
    , this)
};
    siSpinnerPrototype._GenerateElementHtml = function() {
    var $ = "onmouseover=\"siaddclass(this,'" + this._hoverCls + "');\" " + "onmouseout=\"siremoveclass(this,'" + this._hoverCls + "');\"";
    return "<span class=\"si-buttonedit-button\" " + $ + "><span class=\"si-buttonedit-up\"><span></span></span><span class=\"si-buttonedit-down\"><span></span></span></span>"
};
    siSpinnerPrototype["set"] = function(_) {
    if (typeof _ == "string")
        return this;
    var $ = _.value;
    delete _.value;
    si.Spinner["superclass"]["set"]["call"](this, _);
    if (!si.isNull($))
        this["setValue"]($);
    return this
};
    siRegClass(si.Spinner, "spinner");
    si.TimeSpinner = function() {
        si.TimeSpinner["superclass"]["constructor"]["call"](this);
        this["setValue"]("00:00:00")
    };
    
    siextend(si.TimeSpinner, si.ButtonEdit, {
        value: null ,
        format: "H:mm:ss",
        uiCls: "si-timespinner",
        _timespinnertimer: null 
    });
    siTimeSpinnerPrototype = si.TimeSpinner["prototype"];
    siTimeSpinnerPrototype["getAttrs"] = function($) {
        var _ = si.TimeSpinner["superclass"]["getAttrs"]["call"](this, $);
        si["_ParseString"]($, _, ["format"]);
        return _
    };
    siTimeSpinnerPrototype._oncommonchange = function(_) {
        var $ = this["getFormValue"]();
        this["setValue"](this.textEl.value);
        if ($ != this["getFormValue"]())
            this._onbeforevaluechanged()
    };
    siTimeSpinnerPrototype._onSpinnerPrototypeMouseup = function($) {
        this._clearSpinnerTimer();
        siUnBindEvent(document, "mouseup", this._onSpinnerPrototypeMouseup, this);
        if (this._DownValue != this["getFormValue"]())
            this._onbeforevaluechanged()
    };
    siTimeSpinnerPrototype._onSpinnerButtonMouseDown = function($) {
        this._DownValue = this["getFormValue"]();
        this._spinnerType = "hours";
        if ($.spinType == "up")
            this._timespinnerbuttonclick(1, 230, 2);
        else
            this._timespinnerbuttonclick(-1, 230, 2)
    };
    siTimeSpinnerPrototype._clearSpinnerTimer = function() {
        clearInterval(this._timespinnertimer);
        this._timespinnertimer = null 
    };
    siTimeSpinnerPrototype._timespinnerbuttonclick = function(D, B, C) {
        this._clearSpinnerTimer();
        this._beforeonspinnerprototypemouseup(D, this._spinnerType);
        var A = this
          , _ = C
          , $ = new Date();
        this._timespinnertimer = setInterval(function() {
            A._beforeonspinnerprototypemouseup(D, A._spinnerType);
            C--;
            if (C == 0 && B > 50)
                A._timespinnerbuttonclick(D, B - 100, _ + 3);
            var E = new Date();
            if (E - $ > 500)
                A._clearSpinnerTimer();
            $ = E
        }
        , B);
        siBindEvent(document, "mouseup", this._onSpinnerPrototypeMouseup, this)
    };
    siTimeSpinnerPrototype._beforeonspinnerprototypemouseup = function(D, C) {
        var $ = this["getValue"]();
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
        this["setValue"]($)
    };
    siTimeSpinnerPrototype["getFormattedValue"] = function() {
        if (!this.value)
            return "";
        return si.formatDate(this.value, this.format)
    };
    siTimeSpinnerPrototype["getFormValue"] = function() {
        if (!this.value)
            return "";
        return si.formatDate(this.value, "H:mm:ss")
    };
    siTimeSpinnerPrototype["getValue"] = function() {
        return this.value == null  ? null  : new Date(this.value["getTime"]())
    };
    siTimeSpinnerPrototype["setValue"] = function($) {
        $ = si.parseTime($, this.format);
        if (!$)
            $ = si.parseTime("00:00:00", this.format);
        if (si.isDate($))
            $ = new Date($["getTime"]());
        if (si.formatDate(this.value, "H:mm:ss") != si.formatDate($, "H:mm:ss")) {
            this.value = $;
            this.text = this.textEl.value = this["getFormattedValue"]();
            this.inputEl.value = this["getFormValue"]()
        }
    };
    siTimeSpinnerPrototype["getFormat"] = function() {
        return this.format
    };
    siTimeSpinnerPrototype["setFormat"] = function($) {
        if (typeof $ != "string")
            return;
        var _ = ["H:mm:ss", "HH:mm:ss", "H:mm", "HH:mm", "H", "HH", "mm:ss"];
        if (this.format != $) {
            this.format = $;
            this.text = this.textEl.value = this["getFormattedValue"]()
        }
    };
    siTimeSpinnerPrototype["_initEvents"] = function() {
        si.TimeSpinner["superclass"]["_initEvents"]["call"](this);
        siEventTimer(function() {
            this["on"]("buttonmousedown", this._onSpinnerButtonMouseDown, this);
            siBindEvent(this.el, "mousewheel", this._onmousewheel, this);
            siBindEvent(this.textEl, "keydown", this._onkeydown, this)
        }
        , this)
    };
    siTimeSpinnerPrototype._GenerateElementHtml = function() {
        var $ = "onmouseover=\"siaddclass(this,'" + this._hoverCls + "');\" " + "onmouseout=\"siremoveclass(this,'" + this._hoverCls + "');\"";
        return "<span class=\"si-buttonedit-button\" " + $ + "><span class=\"si-buttonedit-up\"><span></span></span><span class=\"si-buttonedit-down\"><span></span></span></span>"
    };
    siRegClass(si.TimeSpinner, "timespinner");
    si.HtmlFile = function() {
        si.HtmlFile["superclass"]["constructor"]["call"](this);
        this["on"]("validation", this._oncommonvalidation, this)
    }
    ;
    siextend(si.HtmlFile, si.ButtonEdit, {
        width: 180,
        buttonText: "\u6d4f\u89c8...",
        _buttonWidth: 56,
        limitType: "",
        limitTypeErrorText: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f\u4e3a\uff1a",
        allowInput: false,
        readOnly: true,
        _notonuseprototype: 0,
        uiCls: "si-htmlfile"
    });
    siHtmlFilePrototype = si.HtmlFile["prototype"];
    siHtmlFilePrototype["getAttrs"] = function($) {
    var _ = si.HtmlFile["superclass"]["getAttrs"]["call"](this, $);
    si["_ParseString"]($, _, ["limitType", "buttonText", "limitTypeErrorText"]);
    return _
};
    siHtmlFilePrototype["getLimitType"] = function() {
    return this.limitType
};
    siHtmlFilePrototype["setLimitType"] = function($) {
    this.limitType = $
};
    siHtmlFilePrototype["getButtonText"] = function() {
    return this.buttonText
};
    siHtmlFilePrototype["setButtonText"] = function($) {
    this.buttonText = $
};
    siHtmlFilePrototype["getValue"] = function() {
    return this.textEl.value
};
    siHtmlFilePrototype["setName"] = function($) {
    this.name = $;
    si.setAttr(this._tempUploadEl, "name", this.name)
};
    siHtmlFilePrototype._oncommonvalidation = function(B) {
    if (!this.limitType)
        return;
    var A = B.value.split(".")
      , $ = "*." + A[A.length - 1]
      , _ = this.limitType.split(";");
    if (_.length > 0 && _["indexOf"]($) == -1) {
        B.errorText = this.limitTypeErrorText + this.limitType;
        B["isValid"] = false
    }
};
    siHtmlFilePrototype._onmousemove = function(B) {
    var A = B.pageX
      , _ = B.pageY
      , $ = sigetbox(this.el);
    A = (A - $.x - 5);
    _ = (_ - $.y - 5);
    if (this.enabled == false) {
        A = -20;
        _ = -20
    }
    this._tempUploadEl.style.display = "";
    this._tempUploadEl.style.left = A + "px";
    this._tempUploadEl.style.top = _ + "px"
};
    siHtmlFilePrototype._onTempUploadElChanged = function($) {
    this.value = this.textEl.value = this._tempUploadEl.value;
    this._onbeforevaluechanged();
    $ = {
        htmlEvent: $
    };
    this["fire"]("fileselect", $)
};
    siHtmlFilePrototype._GenerateElementHtml = function() {
    var $ = "onmouseover=\"siaddclass(this,'" + this._hoverCls + "');\" " + "onmouseout=\"siremoveclass(this,'" + this._hoverCls + "');\"";
    return "<span class=\"si-buttonedit-button\" " + $ + ">" + this.buttonText + "</span>"
};
    siHtmlFilePrototype["_create"] = function() {
    si.HtmlFile["superclass"]["_create"]["call"](this);
    this._tempUploadEl = si.append(this.el, "<input type=\"file\" hideFocus class=\"si-htmlfile-file\" name=\"" + this.name + "\" ContentEditable=false/>");
    siBindEvent(this.borderEl, "mousemove", this._onmousemove, this);
    siBindEvent(this._tempUploadEl, "change", this._onTempUploadElChanged, this)
};
    siRegClass(si.HtmlFile, "htmlfile");
    si.FileUpload = function($) {
        this.postParam = {};
        si.FileUpload["superclass"]["constructor"]["call"](this, $);
        this["on"]("validation", this._oncommonvalidation, this)
    }
    ;
    siextend(si.FileUpload, si.ButtonEdit, {
        width: 180,
        buttonText: "\u6d4f\u89c8...",
        _buttonWidth: 56,
        limitTypeErrorText: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f\u4e3a\uff1a",
        readOnly: true,
        _notonuseprototype: 0,
        limitSize: "",
        limitType: "",
        typesDescription: "\u4e0a\u4f20\u6587\u4ef6\u683c\u5f0f",
        uploadLimit: 0,
        queueLimit: "",
        flashUrl: "",
        uploadUrl: "",
        postParam: null ,
        uploadOnSelect: false,
        uiCls: "si-fileupload"
    });
    siFileUploadPrototype = si.FileUpload["prototype"];
    siFileUploadPrototype["getAttrs"] = function($) {
        var _ = si.FileUpload["superclass"]["getAttrs"]["call"](this, $);
        si["_ParseString"]($, _, ["limitType", "limitSize", "flashUrl", "uploadUrl", "uploadLimit", "buttonText", "onuploadsuccess", "onuploaderror", "onuploadcomplete", "onfileselect"]);
        si["_ParseBool"]($, _, ["uploadOnSelect"]);
        return _
    };
    siFileUploadPrototype["__fileError"] = function() {};
    siFileUploadPrototype["__on_upload_complete"] = function($) {
        this["fire"]("uploadcomplete", $)
    };
    siFileUploadPrototype["__on_upload_error"] = function($) {
        var _ = {
            file: $
        };
        this["fire"]("uploaderror", _)
    };
    siFileUploadPrototype["__on_upload_success"] = function(_, $) {
        var A = {
            file: _,
            serverData: $
        };
        this["fire"]("uploadsuccess", A)
    };
    siFileUploadPrototype["__on_file_queued"] = function($) {
        var _ = {
            file: $
        };
        if (this.uploadOnSelect)
            this.swfUpload["startUpload"]();
        this["setText"]($.name);
        this["fire"]("fileselect", _)
    };
    siFileUploadPrototype["startUpload"] = function($) {
        var _ = {
            cancel: false
        };
        this["fire"]("beforeupload", _);
        if (_.cancel == true)
            return;
        if (this.swfUpload) {
            this.swfUpload.setPostParams(this.postParam);
            this.swfUpload["startUpload"]()
        }
    };
    siFileUploadPrototype["setName"] = function($) {
        this.name = $
    };
    siFileUploadPrototype["setUploadUrl"] = function($) {
        if (this.swfUpload)
            this.swfUpload.setUploadURL($);
        this.uploadUrl = $
    };
    siFileUploadPrototype["setFlashUrl"] = function($) {
        this.flashUrl = $
    };
    siFileUploadPrototype["setQueueLimit"] = function($) {
        this.queueLimit = $
    };
    siFileUploadPrototype["setUploadLimit"] = function($) {
        this.uploadLimit = $
    };
    siFileUploadPrototype["getButtonText"] = function() {
        return this.buttonText
    };
    siFileUploadPrototype["setButtonText"] = function($) {
        this.buttonText = $;
        this._buttonEl.innerHTML = $
    };
    siFileUploadPrototype["getTypesDescription"] = function() {
        return this.typesDescription
    };
    siFileUploadPrototype["setTypesDescription"] = function($) {
        this.typesDescription = $
    };
    siFileUploadPrototype["getLimitType"] = function() {
        return this.limitType
    };
    siFileUploadPrototype["setLimitType"] = function($) {
        this.limitType = $
    };
    siFileUploadPrototype["getPostParam"] = function() {
        return this.postParam
    };
    siFileUploadPrototype["setPostParam"] = function($) {
        this["addPostParam"]($)
    };
    siFileUploadPrototype["addPostParam"] = function($) {
        si.copyTo(this.postParam, $)
    };
    siFileUploadPrototype._onmousemove = function(A) {
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
                file_queued_handler: si.createDelegate(this.__on_file_queued, this),
                upload_error_handler: si.createDelegate(this.__on_upload_error, this),
                upload_success_handler: si.createDelegate(this.__on_upload_success, this),
                upload_complete_handler: si.createDelegate(this.__on_upload_complete, this),
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
    };
    siFileUploadPrototype["destroy"] = function($) {
        if (this.innerEl) {
            si["clearEvent"](this.innerEl);
            this.innerEl = null 
        }
        si.FileUpload["superclass"]["destroy"]["call"](this, $)
    };
    siFileUploadPrototype._GenerateElementHtml = function() {
        var $ = "onmouseover=\"siaddclass(this,'" + this._hoverCls + "');\" " + "onmouseout=\"siremoveclass(this,'" + this._hoverCls + "');\"";
        return "<span class=\"si-buttonedit-button\" " + $ + ">" + this.buttonText + "</span>"
    };
    siFileUploadPrototype["_create"] = function() {
        si.FileUpload["superclass"]["_create"]["call"](this);
        siaddclass(this.el, "si-htmlfile");
        this._uploadId = this.uid + "$button_placeholder";
        this._tempUploadEl = si.append(this.el, "<span id=\"" + this._uploadId + "\"></span>");
        this.uploadEl = this._tempUploadEl;
        siBindEvent(this.borderEl, "mousemove", this._onmousemove, this)
    };
    siRegClass(si.FileUpload, "fileupload");
    si.Lookup = function() {
        this.data = [];
        si.Lookup["superclass"]["constructor"]["call"](this);
        siBindEvent(this.textEl, "mouseup", this._onmouseup, this);
        this["on"]("showpopup", this.__OnShowPopup, this)
    }
    ;
    siextend(si.Lookup, si.PopupEdit, {
        allowInput: true,
        valueField: "id",
        textField: "text",
        delimiter: ",",
        multiSelect: false,
        data: [],
        grid: null ,
        uiCls: "si-lookup"
    });
    siLookupPrototype = si.Lookup["prototype"];
    siLookupPrototype["getAttrs"] = function($) {
    var _ = si.Lookup["superclass"]["getAttrs"]["call"](this, $);
    si["_ParseString"]($, _, ["grid", "valueField", "textField"]);
    si["_ParseBool"]($, _, ["multiSelect"]);
    return _
};
    siLookupPrototype._endOfOnMouseUp =  function(E) {
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
};
    siLookupPrototype._onmouseup = function(C) {
    if (this["isReadOnly"]())
        return;
    var _ = si.getSelectRange(this.textEl)
      , A = _[0]
      , B = _[1]
      , $ = this._endOfOnMouseUp(A)
};
    siLookupPrototype._oncommonkeydown = function($) {
    si.Lookup["superclass"]._oncommonkeydown["call"](this, $);
    switch ($.keyCode) {
    case 46:
    case 8:
        break;
    case 37:
        break;
    case 39:
        break
    }
};
    siLookupPrototype["doUpdate"] = function() {
    si.Lookup["superclass"]["doUpdate"]["call"](this);
    this.textEl["readOnly"] = true;
    this.el.style.cursor = "default"
};
    siLookupPrototype["__OnShowPopup"] = function(H) {
    var C = String(this.value).split(this.delimiter)
      , F = {};
    for (var $ = 0, D = C.length; $ < D; $++) {
        var G = C[$];
        F[G] = 1
    }
    var A = this.grid["getData"]()
      , B = [];
    for ($ = 0,
    D = A.length; $ < D; $++) {
        var _ = A[$]
          , E = _[this.valueField];
        if (F[E])
            B.push(_)
    }
    this.grid["selects"](B)
};
    siLookupPrototype.__onLookupGridLoad = function($) {
    this["__OnShowPopup"]($)
};
    siLookupPrototype["__OnGridRowClickChanged"] = function(G) {
    var B = this._getValueObjectMap(this.grid["getData"]())
      , C = this._getValueObjectMap(this.grid["getSelecteds"]())
      , F = this._getValueObjectMap(this.data);
    if (this["multiSelect"] == false) {
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
    var D = this._toValueTextArray(this.data);
    this["setValue"](D[0]);
    this["setText"](D[1]);
    this._onbeforevaluechanged()
};
    siLookupPrototype["setText"] = function($) {
    si.Lookup["superclass"]["setText"]["call"](this, $);
    this._storeValue()
};
    siLookupPrototype["setValue"] = function($) {
    si.Lookup["superclass"]["setValue"]["call"](this, $);
    this._storeValue()
};
    siLookupPrototype._getValueObjectMap = function(A) {
    var D = {};
    for (var $ = 0, B = A.length; $ < B; $++) {
        var _ = A[$]
          , C = _[this.valueField];
        D[C] = _
    }
    return D
};
    siLookupPrototype._storeValue = function() {
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
};
    siLookupPrototype._toValueTextArray = function(A) {
    if (si.isNull(A))
        A = [];
    var B = []
      , C = [];
    for (var _ = 0, D = A.length; _ < D; _++) {
        var $ = A[_];
        if ($) {
            B.push(this["getItemValue"]($));
            C.push(this["getItemText"]($))
        }
    }
    return [B.join(this.delimiter), C.join(this.delimiter)]
};
    siLookupPrototype["getItemText"] = function($) {
    var _ = $[this.textField];
    return si.isNull(_) ? "" : String(_)
};
    siLookupPrototype["getItemValue"] = function($) {
    return String($[this.valueField])
};
    siLookupPrototype["deselectAll"] = function() {
    this.data = [];
    this["setValue"]("");
    this["setText"]("");
    if (this.grid)
        this.grid["deselectAll"]()
};
    siLookupPrototype["getTextField"] = function() {
    return this["textField"]
};
    siLookupPrototype["setTextField"] = function($) {
    this["textField"] = $
};
    siLookupPrototype["getValueField"] = function() {
    return this["valueField"]
};
    siLookupPrototype["setValueField"] = function($) {
    this["valueField"] = $
};
    siLookupPrototype["getGrid"] = function() {
    return this.grid
};
    siLookupPrototype["setGrid"] = function($) {
    if (typeof $ == "string") {
        si.analyze($);
        $ = si.get($)
    }
    this.grid = si.getAndCreate($);
    if (this.grid) {
        this.grid["setMultiSelect"](this["multiSelect"]);
        this.grid["setCheckSelectOnLoad"](false);
        this.grid["on"]("rowclick", this.__OnGridRowClickChanged, this);
        this.grid["on"]("load", this.__onLookupGridLoad, this);
        this.grid["on"]("checkall", this.__OnGridRowClickChanged, this)
    }
};
    siLookupPrototype["setMultiSelect"] = function($) {
    this["multiSelect"] = $;
    if (this.grid)
        this.grid["setMultiSelect"]($)
};
    siLookupPrototype["destroy"] = function($) {
    if (this.grid) {
        this.grid["un"]("rowclick", this.__OnGridRowClickChanged, this);
        this.grid["un"]("load", this.__onLookupGridLoad, this);
        this.grid = null 
    }
    si.Lookup["superclass"]["destroy"]["call"](this, $)
};
    siRegClass(si.Lookup, "lookup");
    si.TextBoxList = function() {
        si.TextBoxList["superclass"]["constructor"]["call"](this);
        this.data = [];
        this["doUpdate"]()
    }
    ;
    siextend(si.TextBoxList, si.ValidatorBase, {
        formField: true,
        value: "",
        text: "",
        valueField: "id",
        textField: "text",
        url: "",
        delay: 150,
        allowInput: true,
        editIndex: 0,
        _focusCls: "si-textboxlist-focus",
        _itemHoverCls: "si-textboxlist-item-hover",
        _itemSelectedCls: "si-textboxlist-item-selected",
        _hoverCls: "si-textboxlist-close-hover",
        textName: "",
        uiCls: "si-textboxlist",
        errorIconEl: null ,
        popupLoadingText: "<span class='si-textboxlist-popup-loading'>Loading...</span>",
        popupErrorText: "<span class='si-textboxlist-popup-error'>Error</span>",
        popupEmptyText: "<span class='si-textboxlist-popup-noresult'>No Result</span>",
        isShowPopup: false,
        popupHeight: "",
        popupMinHeight: 30,
        popupMaxHeight: 150,
        searchField: "key"
    });
    siTextBoxList = si.TextBoxList["prototype"];
    siTextBoxList["getAttrs"] = function($) {
        var A = si.TextBox["superclass"]["getAttrs"]["call"](this, $)
          , _ = jQuery($);
        si["_ParseString"]($, A, ["value", "text", "valueField", "textField", "url", "popupHeight", "textName", "onfocus", "onbeforeload", "onload", "searchField"]);
        si["_ParseBool"]($, A, ["allowInput"]);
        si["_ParseInt"]($, A, ["popupMinHeight", "popupMaxHeight"]);
        return A
    };
    siTextBoxList["getSearchField"] = function() {
        return this.searchField
    };
    siTextBoxList["setSearchField"] = function($) {
        this.searchField = $
    };
    siTextBoxList["blur"] = function() {
        try {
            this._tbInputEl["blur"]()
        } catch ($) {}
    };
    siTextBoxList["focus"] = function() {
        try {
            this._tbInputEl["focus"]()
        } catch ($) {}
    };
    siTextBoxList._oncommonkeydown = function(G) {
        this._selectOnLoad = null ;
        if (this["isReadOnly"]() || this.allowInput == false)
            return false;
        G.stopPropagation();
        if (this["isReadOnly"]() || this.allowInput == false)
            return;
        var E = si.getSelectRange(this._tbInputEl)
          , B = E[0]
          , D = E[1]
          , F = this._tbInputEl.value.length
          , C = B == D && B == 0
          , A = B == D && D == F;
        if (this["isReadOnly"]() || this.allowInput == false)
            G.preventDefault();
        if (G.keyCode == 9) {
            this["hidePopup"]();
            return
        }
        if (G.keyCode == 16 || G.keyCode == 17 || G.keyCode == 18)
            return;
        switch (G.keyCode) {
        case 13:
            if (this["isShowPopup"]) {
                G.preventDefault();
                if (this._loading) {
                    this._selectOnLoad = true;
                    return
                }
                this["__doSelectValue"]()
            }
            break;
        case 27:
            G.preventDefault();
            this["hidePopup"]();
            break;
        case 8:
            if (C)
                G.preventDefault();
        case 37:
            if (C)
                if (this["isShowPopup"])
                    this["hidePopup"]();
                else if (this.editIndex > 0) {
                    var _ = this.editIndex - 1;
                    if (_ < 0)
                        _ = 0;
                    if (_ >= this.data.length)
                        _ = this.data.length - 1;
                    this["showInput"](false);
                    this["select"](_)
                }
            break;
        case 39:
            if (A)
                if (this["isShowPopup"])
                    this["hidePopup"]();
                else if (this.editIndex <= this.data.length - 1) {
                    _ = this.editIndex;
                    this["showInput"](false);
                    this["select"](_)
                }
            break;
        case 38:
            G.preventDefault();
            if (this["isShowPopup"]) {
                var _ = -1
                  , $ = this.listBox["getFocusedItem"]();
                if ($)
                    _ = this.listBox["indexOf"]($);
                _--;
                if (_ < 0)
                    _ = 0;
                this.listBox._addOrRemoveItemHoverCls(_, true)
            }
            break;
        case 40:
            G.preventDefault();
            if (this["isShowPopup"]) {
                _ = -1,
                $ = this.listBox["getFocusedItem"]();
                if ($)
                    _ = this.listBox["indexOf"]($);
                _++;
                if (_ < 0)
                    _ = 0;
                if (_ >= this.listBox["getCount"]())
                    _ = this.listBox["getCount"]() - 1;
                this.listBox._addOrRemoveItemHoverCls(_, true)
            } else
                this._delayLoadTextBoxListData(true);
            break;
        default:
            break
        }
    };
    siTextBoxList["__doSelectValue"] = function() {
        var $ = this.listBox["getFocusedItem"]();
        if ($)
            this.listBox["setSelected"]($);
        this.lastInputText = this.text;
        this["hidePopup"]();
        this._doPopupSelect()
    };
    siTextBoxList._onkeydown = function(B) {
        if (this["isReadOnly"]() || this.allowInput == false)
            return false;
        var $ = this.data["indexOf"](this.selectedEl)
          , _ = this;
        function A() {
            var A = _.data[$];
            _["removeItem"](A);
            A = _.data[$];
            if (!A)
                A = _.data[$ - 1];
            _["select"](A);
            if (!A)
                _["showInput"]()
        }
        switch (B.keyCode) {
        case 8:
            B.preventDefault();
            A();
            break;
        case 37:
        case 38:
            this["select"](null );
            this["showInput"]($);
            break;
        case 39:
        case 40:
            $ += 1;
            this["select"](null );
            this["showInput"]($);
            break;
        case 46:
            A();
            break
        }
    };
    siTextBoxList._onclick = function(_) {
        if (this["isReadOnly"]() || this.enabled == false)
            return;
        if (this.enabled == false)
            return;
        var $ = this._getCurrentItemData(_);
        if (!$) {
            if (sifindAncestor(_.target, "si-textboxlist-input"))
                ;
            else
                this["showInput"]();
            return
        }
        this.focusEl["focus"]();
        this["select"]($);
        if (_ && sihasclass(_.target, "si-textboxlist-close"))
            this["removeItem"]($)
    };
    siTextBoxList._onmouseout = function($) {
        this["blurItem"]()
    };
    siTextBoxList._onmousemove = function(_) {
        if (this.enabled == false)
            return;
        var $ = this._getCurrentItemData(_);
        if (!$) {
            this["blurItem"]();
            return
        }
        this["hoverItem"]($, _)
    };
    
    siTextBoxList["hidePopup"] = function() {
        this["isShowPopup"] = false;
        if (this.popup)
            this.popup.el.style.display = "none"
    };
    siTextBoxList["showPopup"] = function($) {
        if (this["isDisplay"]() == false)
            return;
        this["isShowPopup"] = true;
        var _ = this["_createPopup"]();
        _.el.style.zIndex = si.getMaxZIndex();
        var B = this.listBox;
        B["emptyText"] = this.popupEmptyText;
        if ($ == "loading") {
            B["emptyText"] = this.popupLoadingText;
            this.listBox["setData"]([])
        } else if ($ == "error") {
            B["emptyText"] = this.popupLoadingText;
            this.listBox["setData"]([])
        }
        this.listBox["doUpdate"]();
        var A = this["getBox"]()
          , D = A.x
          , C = A.y + A.height;
        this.popup.el.style.display = "block";
        si["setXY"](_.el, -1000, -1000);
        this.popup["setWidth"](A.width);
        this.popup["setHeight"](this["popupHeight"]);
        if (this.popup["getHeight"]() < this["popupMinHeight"])
            this.popup["setHeight"](this["popupMinHeight"]);
        if (this.popup["getHeight"]() > this["popupMaxHeight"])
            this.popup["setHeight"](this["popupMaxHeight"]);
        si["setXY"](_.el, D, C)
    };
    siTextBoxList["_createPopup"] = function() {
        if (!this.popup) {
            this.popup = new si.ListBox();
            this.popup["addCls"]("si-textboxlist-popup");
            this.popup["setStyle"]("position:absolute;left:0;top:0;");
            this.popup["showEmpty"] = true;
            this.popup["setValueField"](this["valueField"]);
            this.popup["setTextField"](this["textField"]);
            this.popup["render"](document.body);
            this.popup["on"]("itemclick", function($) {
                this["hidePopup"]();
                this._doPopupSelect()
            }
            , this)
        }
        this.listBox = this.popup;
        return this.popup
    };
    siTextBoxList["within"] =  function($) {
        if (siisAncestor(this.el, $.target))
            return true;
        if (this["showPopup"] && this.popup && this.popup["within"]($))
            return true;
        return false
    };
    siTextBoxList._cleanTimerAndRequest = function() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null 
        }
        if (this._tempAjaxRequest)
            this._tempAjaxRequest.abort();
        this._loading = false
    };
    siTextBoxList._insideLoadData = function() {
        if (this["isDisplay"]() == false)
            return;
        var _ = this["getInputText"]()
          , A = this
          , $ = this.listBox["getData"]()
          , B = {
            value: this["getValue"](),
            text: this["getText"]()
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
            if (C["indexOf"](".txt") != -1 || C["indexOf"](".json") != -1)
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
        this["fire"]("beforeload", D);
        if (D.data != D.params && D.params != B)
            D.data = D.params;
        if (D.cancel)
            return;
        si.copyTo(D, {
            success: function($) {
                var _ = si.decode($);
                if (A.dataField)
                    _ = si._getMap(A.dataField, _);
                if (!_)
                    _ = [];
                A.listBox["setData"](_);
                A["showPopup"]();
                A.listBox._addOrRemoveItemHoverCls(0, true);
                A["fire"]("load");
                A._loading = false;
                if (A._selectOnLoad) {
                    A["__doSelectValue"]();
                    A._selectOnLoad = null 
                }
            },
            error: function($, B, _) {
                A["showPopup"]("error")
            }
        });
        A._tempAjaxRequest = si.ajax(D)
    };
    siTextBoxList._delayLoadTextBoxListData = function(_) {
        var $ = this;
        setTimeout(function() {
            $._autoFitWdth()
        }
        , 1);
        this["showPopup"]("loading");
        this._cleanTimerAndRequest();
        this._loading = true;
        this.delayTimer = setTimeout(function() {
            var _ = $._tbInputEl.value;
            $._insideLoadData()
        }
        , this.delay)
    };
    siTextBoxList._autoFitWdth = function() {
        if (this["isDisplay"]() == false)
            return;
        var _ = this["getInputText"]()
          , B = si.measureText(this._tbInputEl, _)
          , $ = B.width > 20 ? B.width + 4 : 20
          , A = sigetwidth(this.el, true);
        if ($ > A - 15)
            $ = A - 15;
        this._tbInputEl.style.width = $ + "px"
    };
    siTextBoxList["doQuery"] = function() {
        this._delayLoadTextBoxListData(true)
    };
    siTextBoxList["getPopupMaxHeight"] = function() {
        return this["popupMaxHeight"]
    };
    siTextBoxList["setPopupMaxHeight"] = function($) {
        this["popupMaxHeight"] = $
    };
    siTextBoxList["getPopupMinHeight"] = function() {
        return this["popupMinHeight"]
    };
    siTextBoxList["setPopupMinHeight"] = function($) {
        this["popupMinHeight"] = $
    };
    siTextBoxList["getPopupHeight"] = function() {
        return this["popupHeight"]
    };
    siTextBoxList["setPopupHeight"] = function($) {
        this["popupHeight"] = $
    };
    siTextBoxList["getUrl"] = function() {
        return this.url
    };
    siTextBoxList["setUrl"] = function($) {
        this.url = $
    };
    siTextBoxList["getAllowInput"] = function() {
        return this.allowInput
    };
    siTextBoxList["setAllowInput"] = function($) {
        this.allowInput = $;
        this["doLayout"]()
    };
    siTextBoxList["getTextField"] = function() {
        return this["textField"]
    };
    siTextBoxList["setTextField"] = function($) {
        this["textField"] = $;
        this._storeValue()
    };
    siTextBoxList["getValueField"] = function() {
        return this["valueField"]
    };
    siTextBoxList["setValueField"] = function($) {
        this["valueField"] = $;
        this._storeValue()
    };
    siTextBoxList["setText"] = function($) {
        if (si.isNull($))
            $ = "";
        if (this.text !== $) {
            this.text = $;
            this._storeValue();
            this["doUpdate"]()
        }
    };
    siTextBoxList["setValue"] = function($) {
        if (si.isNull($))
            $ = "";
        if (this.value != $) {
            this.value = $;
            this.inputEl.value = $;
            this._storeValue();
            this["doUpdate"]()
        }
    };
    siTextBoxList["setName"] = function($) {
        if (this.name != $) {
            this.name = $;
            this.inputEl.name = $
        }
    };
    siTextBoxList["getValue"] = function() {
        var B = [];
        for (var _ = 0, A = this.data.length; _ < A; _++) {
            var $ = this.data[_]
              , C = si._getMap(this.valueField, $);
            B.push(C)
        }
        return B.join(",")
    };
    siTextBoxList["getText"] = function() {
        var C = [];
        for (var _ = 0, A = this.data.length; _ < A; _++) {
            var $ = this.data[_]
              , B = si._getMap(this.textField, $);
            if (si.isNull(B))
                B = "";
            B = B.replace(",", "\uff0c");
            C.push(B)
        }
        return C.join(",")
    };
    siTextBoxList["getInputText"] =  function() {
        return this._tbInputEl ? this._tbInputEl.value : ""
    };
    siTextBoxList._storeValue = function() {
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
            var C = !si.isNull(E[A]) ? E[A] : ""
              , B = !si.isNull(D[A]) ? D[A] : "";
            si._setMap(this.textField, C, $);
            si._setMap(this.valueField, B, $)
        }
        this.value = this["getValue"]();
        this.text = this["getText"]()
    };
    siTextBoxList["removeItem"] = function(_) {
        if (!_)
            return;
        var $ = this["getItemEl"](_);
        si["removeNode"]($);
        this.data.remove(_);
        var B = this["getText"]()
          , A = this["getValue"]();
        this["setValue"](A, false);
        this["setText"](B, false);
        this._onbeforevaluechanged()
    };
    siTextBoxList["insertItem"] = function(_, $) {
        this.data.insert(_, $);
        var B = this["getText"]()
          , A = this["getValue"]();
        this["setValue"](A, false);
        this["setText"](B, false);
        this._storeValue();
        this["doUpdate"]();
        this["showInput"](_ + 1);
        this._onbeforevaluechanged()
    };
    siTextBoxList._doPopupSelect = function() {
        var _ = this.listBox["getSelected"]()
          , $ = this.editIndex;
        if (_) {
            _ = si.clone(_);
            this["insertItem"]($, _)
        }
    };
    siTextBoxList["select"] = function(_) {
        _ = this["getItem"](_);
        if (this.selectedEl) {
            var $ = this["getItemEl"](this.selectedEl);
            siremoveclass($, this._itemSelectedCls)
        }
        this.selectedEl = _;
        if (this.selectedEl) {
            $ = this["getItemEl"](this.selectedEl);
            siaddclass($, this._itemSelectedCls)
        }
        var A = this;
        if (this.selectedEl) {
            this.focusEl["focus"]();
            var B = this;
            setTimeout(function() {
                try {
                    B.focusEl["focus"]()
                } catch ($) {}
            }
            , 50)
        }
        if (this.selectedEl) {
            A["addCls"](A._focusCls);
            A._focused = true
        }
    };
    
    siTextBoxList["showInput"] = function(A) {
        this["select"](null );
        if (si.isNumber(A))
            this.editIndex = A;
        else
            this.editIndex = this.data.length;
        if (this.editIndex < 0)
            this.editIndex = 0;
        if (this.editIndex > this.data.length)
            this.editIndex = this.data.length;
        var B = this.inputLi;
        B.style.display = "block";
        if (si.isNumber(A) && A < this.data.length) {
            var _ = this.data[A]
              , $ = this["getItemEl"](_);
            jQuery($).before(B)
        } else
            this.ulEl.appendChild(B);
        if (A !== false)
            setTimeout(function() {
                try {
                    B.firstChild["focus"]();
                    si["selectRange"](B.firstChild, 100)
                } catch ($) {}
            }
            , 10);
        else {
            this.lastInputText = "";
            this._tbInputEl.value = ""
        }
        return B
    };
    
    siTextBoxList["blurItem"] = function() {
        var _ = this.data.length;
        for (var A = 0, C = _; A < C; A++) {
            var $ = this.data[A]
              , B = this["getItemEl"]($);
            if (B) {
                siremoveclass(B, this._itemHoverCls);
                siremoveclass(B.lastChild, this._hoverCls)
            }
        }
    };
    
    siTextBoxList["hoverItem"] = function($, A) {
        if (this["isReadOnly"]() || this.enabled == false)
            return;
        this["blurItem"]();
        var _ = this["getItemEl"]($);
        siaddclass(_, this._itemHoverCls);
        if (A && sihasclass(A.target, "si-textboxlist-close"))
            siaddclass(A.target, this._hoverCls)
    };
    
    siTextBoxList["getItemEl"] = function(_) {
        var $ = this.data["indexOf"](_)
          , A = this.uid + "$text$" + $;
        return document.getElementById(A)
    };
    
    siTextBoxList["getItem"] = function($) {
        if (typeof $ == "number")
            return this.data[$];
        if (typeof $ == "object")
            return $
    };
    
    siTextBoxList._getCurrentItemData = function(_) {
        var A = sifindAncestor(_.target, "si-textboxlist-item");
        if (A) {
            var $ = A.id.split("$")
              , B = $[$.length - 1];
            return this.data[B]
        }
    };
    
    siTextBoxList["doUpdate"] = function() {
        if (this._tbTempTimer)
            clearInterval(this._tbTempTimer);
        if (this._tbInputEl)
            siUnBindEvent(this._tbInputEl, "keydown", this._oncommonkeydown, this);
        var G = []
          , F = this.uid;
        for (var A = 0, E = this.data.length; A < E; A++) {
            var _ = this.data[A]
              , C = F + "$text$" + A
              , B = si._getMap(this.textField, _);
            if (si.isNull(B))
                B = "";
            G[G.length] = "<li id=\"" + C + "\" class=\"si-textboxlist-item\">";
            G[G.length] = B;
            G[G.length] = "<span class=\"si-textboxlist-close\"></span></li>"
        }
        var $ = F + "$input";
        G[G.length] = "<li id=\"" + $ + "\" class=\"si-textboxlist-inputLi\"><input class=\"si-textboxlist-input\" type=\"text\" autocomplete=\"off\"></li>";
        this.ulEl.innerHTML = G.join("");
        this.editIndex = this.data.length;
        if (this.editIndex < 0)
            this.editIndex = 0;
        this.inputLi = this.ulEl.lastChild;
        this._tbInputEl = this.inputLi.firstChild;
        siBindEvent(this._tbInputEl, "keydown", this._oncommonkeydown, this);
        var D = this;
        this._tbInputEl.onkeyup = function() {
            D._autoFitWdth()
        }
        ;
        D._tbTempTimer = null ;
        D._tempCurrentValue = D._tbInputEl.value;
        this._tbInputEl.onfocus = function() {
            D._tbTempTimer = setInterval(function() {
                if (D._tempCurrentValue != D._tbInputEl.value) {
                    D._delayLoadTextBoxListData();
                    D._tempCurrentValue = D._tbInputEl.value
                }
            }
            , 10);
            D["addCls"](D._focusCls);
            D._focused = true;
            D["fire"]("focus")
        }
        ;
        this._tbInputEl.onblur = function() {
            clearInterval(D._tbTempTimer);
            D["fire"]("blur")
        }
    };
    siTextBoxList["doLayout"] = function() {
        if (this["canLayout"]() == false)
            return;
        si.TextBoxList["superclass"]["doLayout"]["call"](this);
        if (this["isReadOnly"]() || this.allowInput == false)
            this._tbInputEl["readOnly"] = true;
        else
            this._tbInputEl["readOnly"] = false
    };
    siTextBoxList.removeErrorIconEl = function() {
        if (this.errorIconEl)
            jQuery(this.errorIconEl.parentNode).remove();
        this.errorIconEl = null
    };
    siTextBoxList["getErrorIconEl"] = function() {
        if (!this.errorIconEl) {
            var _ = this.el.rows[0]
              , $ = _.insertCell(1);
            $.style.cssText = "width:18px;vertical-align:top;";
            $.innerHTML = "<div class=\"si-errorIcon\"></div>";
            this.errorIconEl = $.firstChild
        }
        return this.errorIconEl
    };
    siTextBoxList._ondocumentmousedown = function($) {
        if (this["isReadOnly"]())
            return;
        if (this["isShowPopup"])
            if (!siisAncestor(this.popup.el, $.target))
                this["hidePopup"]();
        if (this._focused)
            if (this["within"]($) == false) {
                this["select"](null , false);
                this["showInput"](false);
                this["removeCls"](this._focusCls);
                this._focused = false
            }
    };
    siTextBoxList["_initEvents"] = function() {
        si.TextBoxList["superclass"]["_initEvents"]["call"](this);
        siBindEvent(this.el, "mousemove", this._onmousemove, this);
        siBindEvent(this.el, "mouseout", this._onmouseout, this);
        siBindEvent(this.el, "mousedown", this._onmousedown, this);
        siBindEvent(this.el, "click", this._onclick, this);
        siBindEvent(this.el, "keydown", this._onkeydown, this);
        siBindEvent(document, "mousedown", this._ondocumentmousedown, this)
    };
    siTextBoxList["destroy"] = function($) {
        if (this["isShowPopup"])
            this["hidePopup"]();
        siUnBindEvent(document, "mousedown", this._ondocumentmousedown, this);
        si.TextBoxList["superclass"]["destroy"]["call"](this, $)
    };
    siTextBoxList["_create"] = function() {
        var A = "<table class=\"si-textboxlist\" cellpadding=\"0\" cellspacing=\"0\"><tr ><td class=\"si-textboxlist-border\"><ul></ul><a href=\"#\"></a><input type=\"hidden\"/></td></tr></table>"
          , _ = document.createElement("div");
        _.innerHTML = A;
        this.el = _.firstChild;
        var $ = this.el.getElementsByTagName("td")[0];
        this.ulEl = $.firstChild;
        this.inputEl = $.lastChild;
        this.focusEl = $.childNodes[1]
    };
    siTextBoxList["getTextName"] = function() {
        return this.textName
    };
    siTextBoxList["setTextName"] = function($) {
        this.textName = $
    };
    siRegClass(si.TextBoxList, "textboxlist");
    si.AutoComplete = function() {
        si.AutoComplete["superclass"]["constructor"]["call"](this);
        var $ = this;
        $._tbTempTimer = null;
        this.textEl.onfocus = function() {
            $._tempCurrentValue = $.textEl.value;
            $._tbTempTimer = setInterval(function() {
                if ($._tempCurrentValue != $.textEl.value) {
                    $._delayLoadData();
                    $._tempCurrentValue = $.textEl.value;
                    if ($.textEl.value == "" && $.value != "") {
                        $["setValue"]("");
                        $._onbeforevaluechanged()
                    }
                }
            }
            , 20)
        };
        
        this.textEl.onblur = function() {
            clearInterval($._tbTempTimer);
            if (!$["isShowPopup"]())
                if ($._tempCurrentValue != $.textEl.value)
                    if ($.textEl.value == "" && $.value != "") {
                        $["setValue"]("");
                        $._onbeforevaluechanged()
                    }
        }
        ;
        this._buttonEl.style.display = "none"
    };
    
    siextend(si.AutoComplete, si.ComboBox, {
        url: "",
        allowInput: true,
        delay: 500,
        searchField: "key",
        minChars: 0,
        _buttonWidth: 0,
        uiCls: "si-autocomplete",
        popupLoadingText: "<span class='si-textboxlist-popup-loading'>Loading...</span>",
        popupErrorText: "<span class='si-textboxlist-popup-error'>Error</span>",
        popupEmptyText: "<span class='si-textboxlist-popup-noresult'>No Result</span>"
    });
    
    siAutoCompletePrototype = si.AutoComplete["prototype"];
    siAutoCompletePrototype["getAttrs"] = function($) {
        var _ = si.AutoComplete["superclass"]["getAttrs"]["call"](this, $);
        si["_ParseString"]($, _, ["searchField"]);
        return _
    };
    siAutoCompletePrototype._insideLoadData = function($) {
        if (!this.url){
             if(typeof(si_acdata)==="undefined")
            	 return;
             var _ = si.AutoComplete.filter(si_acdata,$);
             var B = sf = this;
             if (sf.dataField)
                 _ = si._getMap(sf.dataField, _);
             if (!_)
                 _ = [];
             B.listBox["setData"](_);
             B["showPopup"]();
             B.listBox._addOrRemoveItemHoverCls(0, true);
             B.data = _;
             B["fire"]("load", {
                 data: _
             })
             return;
        }
            
        if (this._tempAjaxRequest)
            this._tempAjaxRequest.abort();
        var A = this.url
          , D = "post";
        if (A)
            if (A["indexOf"](".txt") != -1 || A["indexOf"](".json") != -1)
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
        this["fire"]("beforeload", C);
        if (C.data != C.params && C.params != _)
            C.data = C.params;
        if (C.cancel)
            return;
        var B = sf = this;
        si.copyTo(C, {
            success: function($) {
                try {
                    var _ = si.decode($)
                } catch (A) {
                    throw new Error("autocomplete json is error")
                }
                if (sf.dataField)
                    _ = si._getMap(sf.dataField, _);
                if (!_)
                    _ = [];
                B.listBox["setData"](_);
                B["showPopup"]();
                B.listBox._addOrRemoveItemHoverCls(0, true);
                B.data = _;
                B["fire"]("load", {
                    data: _
                })
            },
            error: function($, A, _) {
                B["showPopup"]("error")
            }
        });
        this._tempAjaxRequest = si.ajax(C)
    };
    siAutoCompletePrototype._delayLoadData = function(_) {
        var $ = this;
        if (this._queryTimer) {
            clearTimeout(this._queryTimer);
            this._queryTimer = null 
        }
        this._queryTimer = setTimeout(function() {
            var _ = $.textEl.value;
            $._insideLoadData(_)
        }
        , this.delay);
        this["showPopup"]("loading")
    };
    siAutoCompletePrototype["doQuery"] = function() {
        this._delayLoadData()
    };
    siAutoCompletePrototype._oncommonkeydown = function(C) {
        this["fire"]("keydown", {
            htmlEvent: C
        });
        if (C.keyCode == 8 && (this["isReadOnly"]() || this.allowInput == false))
            return false;
        if (C.keyCode == 9) {
            this["hidePopup"]();
            return
        }
        if (this["isReadOnly"]())
            return;
        switch (C.keyCode) {
        case 27:
            if (this["isShowPopup"]())
                C.stopPropagation();
            this["hidePopup"]();
            break;
        case 13:
            if (this["isShowPopup"]()) {
                C.preventDefault();
                C.stopPropagation();
                var _ = this.listBox["getFocusedIndex"]();
                if (_ != -1) {
                    var $ = this.listBox["getAt"](_)
                      , B = this.listBox._toValueTextArray([$])
                      , A = B[0];
                    this["setText"](B[1]);
                    if (si.isFirefox) {
                        this["blur"]();
                        this["focus"]()
                    }
                    this["setValue"](A, false);
                    this._onbeforevaluechanged();
                    this["hidePopup"]()
                }
            } else
                this["fire"]("enter");
            break;
        case 37:
            break;
        case 38:
            _ = this.listBox["getFocusedIndex"]();
            if (_ == -1) {
                _ = 0;
                if (!this["multiSelect"]) {
                    $ = this.listBox["findItems"](this.value)[0];
                    if ($)
                        _ = this.listBox["indexOf"]($)
                }
            }
            if (this["isShowPopup"]())
                if (!this["multiSelect"]) {
                    _ -= 1;
                    if (_ < 0)
                        _ = 0;
                    this.listBox._addOrRemoveItemHoverCls(_, true)
                }
            break;
        case 39:
            break;
        case 40:
            _ = this.listBox["getFocusedIndex"]();
            if (this["isShowPopup"]()) {
                if (!this["multiSelect"]) {
                    _ += 1;
                    if (_ > this.listBox["getCount"]() - 1)
                        _ = this.listBox["getCount"]() - 1;
                    this.listBox._addOrRemoveItemHoverCls(_, true)
                }
            } else
                this._delayLoadData(this.textEl.value);
            break;
        default:
            this._delayLoadData(this.textEl.value);
            break
        }
    };
    siAutoCompletePrototype["showPopup"] = function($) {
        var _ = this["getPopup"]()
          , A = this.listBox;
        A["showEmpty"] = true;
        A["emptyText"] = this.popupEmptyText;
        if ($ == "loading") {
            A["emptyText"] = this.popupLoadingText;
            this.listBox["setData"]([])
        } else if ($ == "error") {
            A["emptyText"] = this.popupLoadingText;
            this.listBox["setData"]([])
        }
        this.listBox["doUpdate"]();
        si.AutoComplete["superclass"]["showPopup"]["call"](this)
    };
    siAutoCompletePrototype["getSearchField"] = function() {
        return this.searchField
    };
    siAutoCompletePrototype["setSearchField"] = function($) {
        this.searchField = $
    };
    siAutoCompletePrototype["getMinChars"] = function() {
        return this.minChars
    };
    siAutoCompletePrototype["setMinChars"] = function($) {
        this.minChars = $
    };
    siAutoCompletePrototype["setText"] = function($) {
        if (si.isNull($))
            $ = "";
        if (this.text != $) {
            this.text = $;
            this._tempCurrentValue = $
        }
        this.textEl.value = this.text
    };
    siAutoCompletePrototype["setValue"] = function($) {
        if (si.isNull($))
            $ = "";
        if (this.value != $) {
            this.value = $;
            this.inputEl.value = this.value
        }
    };
    siAutoCompletePrototype["setUrl"] = function($) {
        this.url = $
    };
    siRegClass(si.AutoComplete, "autocomplete");
    si.Form = function($) {
        this.el = sigetelementbyid($);
        if (!this.el)
            throw new Error("form element not null");
        si.Form["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Form, si.Component, {
        el: null ,
        getFields: function() {
            if (!this.el)
                return [];
            var $ = si.findControls(function($) {
                if (!$.el || $.formField != true)
                    return false;
                if (siisAncestor(this.el, $.el))
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
            return si["getbyName"]($, this.el)
        },
        getData: function(B, F) {
            if (si.isNull(F))
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
                        si._setMap(C.name, G["call"](C), D);
                    else
                        D[C.name] = G["call"](C);
                if (C.textName && C["getText"])
                    if (F == true)
                        D[C.textName] = C["getText"]();
                    else
                        si._setMap(C.textName, C["getText"](), D)
            }
            return D
        },
        setData: function(F, A, C) {
            if (si.isNull(C))
                C = true;
            if (typeof F != "object")
                F = {};
            var B = this.getFieldsMap();
            for (var D in B) {
                var _ = B[D];
                if (!_)
                    continue;if (_["setValue"]) {
                    var E = F[D];
                    if (C == true)
                        E = si._getMap(D, F);
                    if (E === undefined && A === false)
                        continue;if (E === null )
                        E = "";
                    _["setValue"](E)
                }
                if (_["setText"] && _.textName) {
                    var $ = F[_.textName];
                    if (C == true)
                        $ = si._getMap(_.textName, F);
                    if (si.isNull($))
                        $ = "";
                    _["setText"]($)
                }
            }
        },
        reset: function() {
            var $ = this.getFields();
            for (var _ = 0, B = $.length; _ < B; _++) {
                var A = $[_];
                if (!A["setValue"])
                    continue;if (A["setText"] && A._clearText !== false)
                    A["setText"]("");
                A["setValue"](A["defaultValue"])
            }
            this["setIsValid"](true)
        },
        clear: function() {
            var $ = this.getFields();
            for (var _ = 0, B = $.length; _ < B; _++) {
                var A = $[_];
                if (!A["setValue"])
                    continue;if (A["setText"] && A._clearText !== false)
                    A["setText"]("");
                A["setValue"]("")
            }
            this["setIsValid"](true)
        },
        validate: function(C) {
            var $ = this.getFields();
            for (var _ = 0, D = $.length; _ < D; _++) {
                var A = $[_];
                if (!A["validate"])
                    continue;if (A["isDisplay"] && A["isDisplay"]()) {
                    var B = A["validate"]();
                    if (B == false && C === false)
                        break
                }
            }
            return this["isValid"]()
        },
        setIsValid: function(B) {
            var $ = this.getFields();
            for (var _ = 0, C = $.length; _ < C; _++) {
                var A = $[_];
                if (!A["setIsValid"])
                    continue;A["setIsValid"](B)
            }
        },
        isValid: function() {
            var $ = this.getFields();
            for (var _ = 0, B = $.length; _ < B; _++) {
                var A = $[_];
                if (!A["isValid"])
                    continue;if (A["isValid"]() == false)
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
                if (!B["isValid"])
                    continue;if (B["isValid"]() == false)
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
                $.cls = this._maskLoadingCls;
            si["mask"]($)
        },
        unmask: function() {
            si["unmask"](this.el)
        },
        _maskLoadingCls: "si-mask-loading",
        loadingMsg: "\u6570\u636e\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e...",
        loading: function($) {
            this["mask"]($ || this.loadingMsg)
        },
        _onvaluechanged: function($) {
            this._changed = true
        },
        _changed: false,
        setChanged: function(A) {
            this._changed = A;
            var $ = this.getFields();
            for (var _ = 0, C = $.length; _ < C; _++) {
                var B = $[_];
                B["on"]("valuechanged", this._onvaluechanged, this)
            }
        },
        isChanged: function() {
            return this._changed
        },
        setEnabled: function(A) {
            var $ = this.getFields();
            for (var _ = 0, C = $.length; _ < C; _++) {
                var B = $[_];
                B["setEnabled"](A)
            }
        }
    });
    si.Fit = function() {
        si.Fit["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Fit, si.Container, {
        style: "",
        _clearBorder: false,
        uiCls: "si-fit"
    });
    siFitPrototype = si.Fit["prototype"];
    siFitPrototype["getAttrs"] = function($) {
    var _ = si.Fit["superclass"]["getAttrs"]["call"](this, $);
    _._bodyParent = $;
    return _
};
    siFitPrototype["set_bodyParent"] = function($) {
    if (!$)
        return;
    var _ = this.bodyEl
      , A = $;
    while (A.firstChild) {
        try {
            _.appendChild(A.firstChild)
        } catch (B) {}
    }
    this["doLayout"]()
};
    siFitPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    var $ = this.el.parentNode
      , _ = si["getChildNodes"]($);
    if ($ == document.body)
        this.el.style.height = "0px";
    var F = sigetheight($, true);
    for (var E = 0, D = _.length; E < D; E++) {
        var C = _[E]
          , J = C.tagName ? C.tagName.toLowerCase() : "";
        if (C == this.el || (J == "style" || J == "script"))
            continue;var G = sigetstyle(C, "position");
        if (G == "absolute" || G == "fixed")
            continue;var A = sigetheight(C)
          , I = sigetmargins(C);
        F = F - A - I.top - I.bottom
    }
    var H = sigetborders(this.el)
      , B = sigetpaddings(this.el)
      , I = sigetmargins(this.el);
    F = F - I.top - I.bottom;
    if (jQuery.boxModel)
        F = F - B.top - B.bottom - H.top - H.bottom;
    if (F < 0)
        F = 0;
    this.el.style.height = F + "px";
    try {
        _ = si["getChildNodes"](this.el);
        for (E = 0,
        D = _.length; E < D; E++) {
            C = _[E];
            si.layout(C)
        }
    } catch (K) {}
};
    siFitPrototype["isFixedSize"] = function() {
    return false
};
    siFitPrototype["_initEvents"] = function() {};
    siFitPrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-fit";
    this.bodyEl = this.el
};
    siRegClass(si.Fit, "fit");
    si.Panel = function() {
        this.initButton();
        si.Panel["superclass"]["constructor"]["call"](this);
        if (this.url)
            this["setUrl"](this.url);
        this.contentEl = this.bodyEl;
        this["_doVisibleEls"]();
        this._DraggableTool = new si.BaseDraggable(this);
        this["_doTools"]()
    }
    ;
siextend(si.Panel, si.Container, {
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
        uiCls: "si-panel",
        _maskDelay: 80,
        expanded: true
    });
    siPanelPrototype = si.Panel["prototype"];
    siPanelPrototype["getAttrs"] = function(_) {
    var D = si.Panel["superclass"]["getAttrs"]["call"](this, _);
    si["_ParseString"](_, D, ["title", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "footerCls", "footerStyle", "toolbarCls", "toolbarStyle", "footer", "toolbar", "url", "closeAction", "loadingMsg", "onbeforebuttonclick", "onbuttonclick", "onload"]);
    si["_ParseBool"](_, D, ["allowResize", "showCloseButton", "showHeader", "showToolbar", "showFooter", "showCollapseButton", "refreshOnExpand", "maskOnLoad", "expanded"]);
    var C = si["getChildNodes"](_, true);
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
};
    siPanelPrototype["expand"] = function() {
    this.expanded = true;
    this.el.style.height = this._height;
    this.viewportEl.style.display = "block";
    delete this._height;
    siremoveclass(this.el, "si-panel-collapse");
    if (this.url && this.url != this.loadedUrl)
        this.insideLoad();
    this["doLayout"]()
};
    siPanelPrototype["collapse"] = function() {
    this.expanded = false;
    this._height = this.el.style.height;
    this.el.style.height = "auto";
    this.viewportEl.style.display = "none";
    siaddclass(this.el, "si-panel-collapse");
    this["doLayout"]()
};
    siPanelPrototype["toggle"] = function() {
    if (this.expanded)
        this["collapse"]();
    else
        this["expand"]()
};
    siPanelPrototype["setExpanded"] = function($) {
    if (this.expanded != $) {
        this.expanded = $;
        if (this.expanded)
            this["expand"]();
        else
            this["collapse"]()
    }
};
    siPanelPrototype["getAllowResize"] = function() {
    return this["allowResize"]
};
    siPanelPrototype["setAllowResize"] = function($) {
    if (this["allowResize"] != $) {
        this["allowResize"] = $;
        this["doLayout"]()
    }
};
    siPanelPrototype["getMaskOnLoad"] = function($) {
    return this.maskOnLoad
};
    siPanelPrototype["setMaskOnLoad"] = function($) {
    this.maskOnLoad = $
};
    siPanelPrototype["getRefreshOnExpand"] = function() {
    return this["refreshOnExpand"]
};
    siPanelPrototype["setRefreshOnExpand"] = function($) {
    this["refreshOnExpand"] = $
};
    siPanelPrototype["getUrl"] = function() {
    return this.url
};
    siPanelPrototype["setUrl"] = function($, _, A) {
    this.url = $;
    this.__onLoad = _;
    this.__onDestroy = A;
    if (this.expanded)
        this.insideLoad()
};
    siPanelPrototype["reload"] = function() {
    this["setUrl"](this.url)
};
    siPanelPrototype["load"] = function(_, $, A) {
    this["setUrl"](_, $, A)
};
    siPanelPrototype.insideLoad = function() {
    this._clearInnerIframeEl(true);
    var A = new Date()
      , $ = this;
    this.loadedUrl = this.url;
    if (this.maskOnLoad)
        this["loading"]();
    jQuery(this.bodyEl).css("overflow", "hidden");
    var _ = si.createIFrame(this.url, function(_, C) {
        var B = (A - new Date()) + $._maskDelay;
        if (B < 0)
            B = 0;
        setTimeout(function() {
            $["unmask"]()
        }
        , B);
        try {
            $.iframeEl.contentWindow.Owner = $.Owner;
            $.iframeEl.contentWindow.CloseOwnerWindow = function(_) {
                $.__HideAction = _;
                var A = true;
                if ($.__onDestroy)
                    A = $.__onDestroy(_);
                if (A === false)
                    return false;
                var B = {
                    iframe: $.iframeEl,
                    action: _
                };
                $["fire"]("unload", B);
                setTimeout(function() {
                    $["destroy"]()
                }
                , 10)
            }
        } catch (D) {}
        if (C) {
            if ($.__onLoad)
                $.__onLoad();
            var D = {
                iframe: $.iframeEl
            };
            $["fire"]("load", D)
        }
    }
    );
    this.bodyEl.appendChild(_);
    this.iframeEl = _
};
    siPanelPrototype._clearInnerIframeEl = function($) {
    if (this.iframeEl) {
        var _ = this.iframeEl;
        _.src = "";
        try {
            _.contentWindow.document.write("");
            _.contentWindow.document.close()
        } catch (A) {}
        if (_._ondestroy)
            _._ondestroy();
        try {
            this.iframeEl.parentNode.removeChild(this.iframeEl);
            this.iframeEl["removeNode"](true)
        } catch (A) {}
    }
    this.iframeEl = null ;
    if ($ === true)
        si.removeChilds(this.bodyEl)
};
    siPanelPrototype._getBodyEl = function() {
    return this.bodyEl
};
    siPanelPrototype["getIFrameEl"] = function($) {
    return this.iframeEl
};
    siPanelPrototype["getFooterEl"] = function() {
    return this.footerEl
};
    siPanelPrototype["getBodyEl"] = function() {
    return this.bodyEl
};
    siPanelPrototype["getToolbarEl"] = function() {
    return this.toolbarEl
};
    siPanelPrototype["getHeaderEl"] = function() {
    return this.headerEl
};
    siPanelPrototype["setFooter"] = function($) {
    __si_setControls($, this.footerEl, this)
};
    siPanelPrototype["setToolbar"] = function($) {
    __si_setControls($, this.toolbarEl, this)
};
    siPanelPrototype["set_bodyParent"] = function($) {};
    siPanelPrototype["setBody"] = function($) {
    __si_setControls($, this.bodyEl, this)
};
    siPanelPrototype["getButton"] = function($) {
    if (typeof $ == "number")
        return this.buttons[$];
    else
        for (var _ = 0, A = this.buttons.length; _ < A; _++) {
            var B = this.buttons[_];
            if (B.name == $)
                return B
        }
};
    siPanelPrototype["removeButton"] = function($) {
    var _ = this["getButton"]($);
    if (!_)
        return;
    this.buttons.remove(_);
    this["_doTools"]()
};
    siPanelPrototype["updateButton"] = function($, A) {
    var _ = this["getButton"]($);
    if (!_)
        return;
    si.copyTo(_, A);
    this["_doTools"]()
};
    siPanelPrototype["addButton"] = function(_, $) {
    if (typeof _ == "string")
        _ = {
            iconCls: _
        };
    _ = this["createButton"](_);
    if (typeof $ != "number")
        $ = this.buttons.length;
    this.buttons.insert($, _);
    this["_doTools"]()
};
    siPanelPrototype["createButton"] = function(_) {
    var $ = si.copyTo({
        name: "",
        cls: "",
        style: "",
        visible: true,
        enabled: true,
        html: ""
    }, _);
    return $
};
    siPanelPrototype.initButton = function() {
    this.buttons = [];
    var _ = this["createButton"]({
        name: "close",
        cls: "si-tools-close",
        visible: this["showCloseButton"]
    });
    this.buttons.push(_);
    var $ = this["createButton"]({
        name: "collapse",
        cls: "si-tools-collapse",
        visible: this["showCollapseButton"]
    });
    this.buttons.push($)
};
    siPanelPrototype["onButtonClick"] = function(_, $) {
    this["on"]("buttonclick", _, $)
};
    siPanelPrototype._onCommonButtonClick = function(B, $) {
    var C = {
        button: B,
        index: this.buttons["indexOf"](B),
        name: B.name.toLowerCase(),
        htmlEvent: $,
        cancel: false
    };
    this["fire"]("beforebuttonclick", C);
    try {
        if (C.name == "close" && this["closeAction"] == "destroy" && this.iframeEl && this.iframeEl.contentWindow) {
            var _ = true;
            if (this.iframeEl.contentWindow.CloseWindow)
                _ = this.iframeEl.contentWindow.CloseWindow("close");
            else if (this.iframeEl.contentWindow.CloseOwnerWindow)
                _ = this.iframeEl.contentWindow.CloseOwnerWindow("close");
            if (_ === false)
                C.cancel = true
        }
    } catch (A) {}
    if (C.cancel == true)
        return C;
    this["fire"]("buttonclick", C);
    if (C.name == "close")
        if (this["closeAction"] == "destroy") {
            this.__HideAction = "close";
            this["destroy"]()
        } else
            this["hide"]();
    if (C.name == "collapse") {
        this["toggle"]();
        if (this["refreshOnExpand"] && this.expanded && this.url)
            this["reload"]()
    }
    return C
};
    siPanelPrototype._onclick = function(A) {
    if (siisAncestor(this.headerEl, A.target)) {
        var $ = sifindAncestor(A.target, "si-tools");
        if ($) {
            var _ = this["getButton"](parseInt(A.target.id));
            if (_)
                this._onCommonButtonClick(_, A)
        }
    }
};
    siPanelPrototype["getShowFooter"] = function() {
    return this["showFooter"]
};
    siPanelPrototype["setShowFooter"] = function($) {
    this["showFooter"] = $;
    this["_doVisibleEls"]();
    this["deferLayout"]()
};
    siPanelPrototype["getShowToolbar"] = function() {
    return this["showToolbar"]
};
    siPanelPrototype["setShowToolbar"] = function($) {
    this["showToolbar"] = $;
    this["_doVisibleEls"]();
    this["deferLayout"]()
};
    siPanelPrototype["getShowHeader"] = function() {
    return this.showHeader
};
    siPanelPrototype["setShowHeader"] = function($) {
    this.showHeader = $;
    this["_doVisibleEls"]();
    this["deferLayout"]()
};
    siPanelPrototype["getShowCollapseButton"] = function() {
    return this["showCollapseButton"]
};
    siPanelPrototype["setShowCollapseButton"] = function($) {
    this["showCollapseButton"] = $;
    var _ = this["getButton"]("collapse");
    _.visible = $;
    this["_doTools"]()
};
    siPanelPrototype["getCloseAction"] = function() {
    return this["closeAction"]
};
    siPanelPrototype["setCloseAction"] = function($) {
    this["closeAction"] = $
};
    siPanelPrototype["getShowCloseButton"] = function() {
    return this["showCloseButton"]
};
    siPanelPrototype["setShowCloseButton"] = function($) {
    this["showCloseButton"] = $;
    var _ = this["getButton"]("close");
    _.visible = $;
    this["_doTools"]()
};
    siPanelPrototype["_doTools"] = function() {
    var A = "";
    for (var $ = this.buttons.length - 1; $ >= 0; $--) {
        var _ = this.buttons[$];
        A += "<span id=\"" + $ + "\" class=\"" + _.cls + " " + (_.enabled ? "" : "si-disabled") + "\" style=\"" + _.style + ";" + (_.visible ? "" : "display:none;") + "\"></span>"
    }
    this.toolsEl.innerHTML = A
};
    siPanelPrototype["getIconCls"] = function() {
    return this.iconCls
};
    siPanelPrototype["setIconCls"] = function($) {
    this.iconCls = $;
    this["_doTitle"]()
};
    siPanelPrototype["getTitle"] = function() {
    return this.title
};
    siPanelPrototype["setTitle"] = function($) {
    this.title = $;
    this["_doTitle"]()
};
    siPanelPrototype["_doTitle"] = function() {
    this.titleEl.innerHTML = this.title;
    this.iconEl.style.display = (this.iconCls || this["iconStyle"]) ? "inline" : "none";
    this.iconEl.className = "si-panel-icon " + this.iconCls;
    sisetstyle(this.iconEl, this["iconStyle"])
};
    siPanelPrototype["getFooterCls"] = function() {
    return this.footerCls
};
    siPanelPrototype["setFooterCls"] = function($) {
    jQuery(this.footerEl)["removeClass"](this.footerCls);
    jQuery(this.footerEl)["addClass"]($);
    this.footerCls = $;
    this["doLayout"]()
};
    siPanelPrototype["getToolbarCls"] = function() {
    return this.toolbarCls
};
    siPanelPrototype["setToolbarCls"] = function($) {
    jQuery(this.toolbarEl)["removeClass"](this.toolbarCls);
    jQuery(this.toolbarEl)["addClass"]($);
    this.toolbarCls = $;
    this["doLayout"]()
};
    siPanelPrototype["getBodyCls"] = function() {
    return this.bodyCls
};
    siPanelPrototype["setBodyCls"] = function($) {
    jQuery(this.bodyEl)["removeClass"](this.bodyCls);
    jQuery(this.bodyEl)["addClass"]($);
    this.bodyCls = $;
    this["doLayout"]()
};
    siPanelPrototype["getHeaderCls"] = function() {
    return this.headerCls
};
    siPanelPrototype["setHeaderCls"] = function($) {
    jQuery(this.headerEl)["removeClass"](this.headerCls);
    jQuery(this.headerEl)["addClass"]($);
    this.headerCls = $;
    this["doLayout"]()
};
    siPanelPrototype["getFooterStyle"] = function() {
    return this.footerStyle
};
    siPanelPrototype["setFooterStyle"] = function($) {
    this.footerStyle = $;
    sisetstyle(this.footerEl, $);
    this["doLayout"]()
};
    siPanelPrototype["getToolbarStyle"] = function() {
    return this.toolbarStyle
};
    siPanelPrototype["setToolbarStyle"] = function($) {
    this.toolbarStyle = $;
    sisetstyle(this.toolbarEl, $);
    this["doLayout"]()
};
    siPanelPrototype["getBodyStyle"] = function() {
    return this.bodyStyle
};
    siPanelPrototype["setBodyStyle"] = function($) {
    this.bodyStyle = $;
    sisetstyle(this.bodyEl, $);
    this["doLayout"]()
};
    siPanelPrototype["getHeaderStyle"] = function() {
    return this.headerStyle
};
    siPanelPrototype["setHeaderStyle"] = function($) {
    this.headerStyle = $;
    sisetstyle(this.headerEl, $);
    this["doLayout"]()
};
    siPanelPrototype["getFooterHeight"] = function() {
    var $ = this["showFooter"] ? jQuery(this.footerEl).outerHeight() : 0;
    return $
};
    siPanelPrototype["getToolbarHeight"] = function() {
    var $ = this["showToolbar"] ? jQuery(this.toolbarEl).outerHeight() : 0;
    return $
};
    siPanelPrototype["getHeaderHeight"] = function() {
    var $ = this.showHeader ? jQuery(this.headerEl).outerHeight() : 0;
    return $
};
    siPanelPrototype["getBodyHeight"] = function(A) {
    var _ = this["getViewportHeight"]()
      , _ = _ - this["getToolbarHeight"]() - this["getFooterHeight"]();
    if (A) {
        var $ = sigetpaddings(this.viewportEl)
          , B = sigetborders(this.viewportEl)
          , C = sigetmargins(this.viewportEl);
        if (jQuery.boxModel)
            _ = _ - $.top - $.bottom - B.top - B.bottom;
        _ = _ - C.top - C.bottom
    }
    if (_ < 0)
        _ = 0;
    return _
};
    siPanelPrototype["getViewportHeight"] = function(_) {
    var $ = this["getHeight"](true) - this["getHeaderHeight"]();
    if (_) {
        var C = sigetpaddings(this.viewportEl)
          , B = sigetborders(this.viewportEl)
          , A = sigetmargins(this.viewportEl);
        if (jQuery.boxModel)
            $ = $ - C.top - C.bottom - B.top - B.bottom;
        $ = $ - A.top - A.bottom
    }
    return $
};
    siPanelPrototype["getViewportWidth"] = function($) {
    return sigetwidth(this.viewportEl, $)
};
    siPanelPrototype["_stopLayout"] = function() {
    clearTimeout(this._tempTimer);
    this._tempTimer = null 
};
    siPanelPrototype["deferLayout"] = function($) {
    if (!$)
        $ = 10;
    if (this._tempTimer)
        return;
    var _ = this;
    this._tempTimer = setTimeout(function() {
        _._tempTimer = null ;
        _["doLayout"]()
    }
    , $)
};
    siPanelPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    this._resizerTriggerEl.style.display = this["allowResize"] ? "" : "none";
    var A = this["isAutoHeight"]()
      , D = this["isAutoWidth"]()
      , $ = sigetwidth(this.viewportEl, true)
      , _ = $;
    if (!A) {
        var C = this["getViewportHeight"]();
        sisetheight(this.viewportEl, C);
        var B = this["getBodyHeight"](true);
        sisetheight(this.bodyEl, B)
    } else {
        this.viewportEl.style.height = "auto";
        this.bodyEl.style.height = "auto"
    }
    si.layout(this.borderEl);
    this["fire"]("layout")
};
    siPanelPrototype["_doVisibleEls"] = function() {
    this.headerEl.style.display = this.showHeader ? "" : "none";
    this.toolbarEl.style.display = this["showToolbar"] ? "" : "none";
    this.footerEl.style.display = this["showFooter"] ? "" : "none"
};
    siPanelPrototype["_initEvents"] = function() {
    siEventTimer(function() {
        siBindEvent(this.el, "click", this._onclick, this)
    }
    , this)
};
    siPanelPrototype["destroy"] = function($) {
    this._clearInnerIframeEl();
    this.iframeEl = null ;
    this.viewportEl = this.borderEl = this.bodyEl = this.footerEl = this.toolbarEl = null ;
    this.toolsEl = this.titleEl = this.iconEl = this._resizerTriggerEl = null ;
    si.Panel["superclass"]["destroy"]["call"](this, $)
};
    siPanelPrototype["_create"] =  function() {
    this.el = document.createElement("div");
    this.el.className = "si-panel";
    var _ = "<div class=\"si-panel-border\">" + "<div class=\"si-panel-header\" ><div class=\"si-panel-header-inner\" ><span class=\"si-panel-icon\"></span><div class=\"si-panel-title\" ></div><div class=\"si-tools\" ></div></div></div>" + "<div class=\"si-panel-viewport\">" + "<div class=\"si-panel-toolbar\"></div>" + "<div class=\"si-panel-body\" ></div>" + "<div class=\"si-panel-footer\"></div>" + "<div class=\"si-resizer-trigger\"></div>" + "</div>" + "</div>";
    this.el.innerHTML = _;
    this.borderEl = this.el.firstChild;
    this.headerEl = this.borderEl.firstChild;
    this.viewportEl = this.borderEl.lastChild;
    this.toolbarEl = si.byClass("si-panel-toolbar", this.el);
    this.bodyEl = si.byClass("si-panel-body", this.el);
    this.footerEl = si.byClass("si-panel-footer", this.el);
    this._resizerTriggerEl = si.byClass("si-resizer-trigger", this.el);
    var $ = si.byClass("si-panel-header-inner", this.el);
    this.iconEl = si.byClass("si-panel-icon", this.el);
    this.titleEl = si.byClass("si-panel-title", this.el);
    this.toolsEl = si.byClass("si-tools", this.el);
    sisetstyle(this.bodyEl, this.bodyStyle);
    this["_doTitle"]()
};
    siPanelPrototype["set"] = function(_) {
    if (typeof _ == "string")
        return this;
    var C = this._componentLock;
    this._componentLock = false;
    var B = _.toolbar;
    delete _.toolbar;
    var $ = _.footer;
    delete _.footer;
    var A = _.url;
    delete _.url;
    si.Panel["superclass"]["set"]["call"](this, _);
    if (B)
        this["setToolbar"](B);
    if ($)
        this["setFooter"]($);
    if (A)
        this["setUrl"](A);
    this._componentLock = C;
    this["doLayout"]();
    return this
};
    siRegClass(si.Panel, "panel");
    si.Window = function() {
        si.Window["superclass"]["constructor"]["call"](this);
        this["addCls"]("si-window");
        this["setVisible"](false);
        this["setAllowDrag"](this.allowDrag);
        this["setAllowResize"](this["allowResize"])
    }
    ;
    siextend(si.Window, si.Panel, {
        x: 0,
        y: 0,
        state: "restore",
        dragCls: "si-window-drag",
        resizeCls: "si-window-resize",
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
        uiCls: "si-window",
        containerEl: null 
    });
    siWindowPrototype = si.Window["prototype"];
    siWindowPrototype["showAtEl"] = function(H, D) {
    H = sigetelementbyid(H);
    if (!H)
        return;
    if (!this["isRender"]() || this.el.parentNode != document.body)
        this["render"](document.body);
    var A = {
        xAlign: this.xAlign,
        yAlign: this.yAlign,
        xOffset: 0,
        yOffset: 0,
        popupCls: this.popupCls
    };
    si.copyTo(A, D);
    this._popupEl = H;
    this.el.style.position = "absolute";
    this.el.style.left = "-2000px";
    this.el.style.top = "-2000px";
    this.el.style.display = "";
    this["doLayout"]();
    this._setBoxWidthAndHeight();
    var J = si.getViewportBox()
      , B = this["getBox"]()
      , L = sigetbox(H)
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
        this._beforebaseprototypefireopen(M, K)
    } else
        this["showAtPos"](M + A.xOffset, K + A.yOffset)
};
    siWindowPrototype["getAttrs"] = function($) {
    var _ = si.Window["superclass"]["getAttrs"]["call"](this, $);
    si["_ParseString"]($, _, ["modalStyle"]);
    si["_ParseBool"]($, _, ["showModal", "showShadow", "allowDrag", "allowResize", "showMaxButton", "showMinButton"]);
    si["_ParseInt"]($, _, ["minWidth", "minHeight", "maxWidth", "maxHeight"]);
    return _
};
    siWindowPrototype["destroy"] = function($) {
    siUnBindEvent(window, "resize", this._onCommonWindowResize, this);
    if (this._modalEl) {
        jQuery(this._modalEl).remove();
        this._modalEl = null 
    }
    if (this.shadowEl) {
        jQuery(this.shadowEl).remove();
        this.shadowEl = null 
    }
    si.Window["superclass"]["destroy"]["call"](this, $)
};
    siWindowPrototype._onmousedown = function(B) {
    if (this.el)
        this.el.style.zIndex = si.getMaxZIndex();
    var _ = this;
    if (this.state != "max" && this.allowDrag && siisAncestor(this.headerEl, B.target) && !sifindAncestor(B.target, "si-tools")) {
        var _ = this
          , A = this["getBox"]()
          , $ = new si.Drag({
            capture: false,
            onStart: function() {
                _.resizerEl = si.append(document.body, "<div class=\"si-resizer-mask\"></div>");
                _.proxyDragEl = si.append(document.body, "<div class=\"si-drag-proxy\"></div>");
                _.el.style.display = "none"
            },
            onMove: function(B) {
                var F = B.now[0] - B.init[0]
                  , E = B.now[1] - B.init[1];
                F = A.x + F;
                E = A.y + E;
                var D = _["getParentBox"]()
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
                sisetbox(_.proxyDragEl, G);
                this.moved = true
            },
            onStop: function() {
                _.el.style.display = "block";
                if (this.moved) {
                    var $ = sigetbox(_.proxyDragEl);
                    si["setXY"](_.el, $.x, $.y)
                }
                jQuery(_.resizerEl).remove();
                _.resizerEl = null ;
                jQuery(_.proxyDragEl).remove();
                _.proxyDragEl = null 
            }
        });
        $.start(B)
    }
};
    siWindowPrototype._onCommonWindowResize = function($) {
    if (this.state == "max")
        this["doLayout"]();
    if (!si.isIE6)
        this._initModal()
};
    siWindowPrototype._onCommonButtonClick = function(_, $) {
    var A = si.Window["superclass"]._onCommonButtonClick["call"](this, _, $);
    if (A.cancel == true)
        return A;
    if (A.name == "max")
        if (this.state == "max")
            this["restore"]();
        else
            this["max"]();
    return A
};
    siWindowPrototype._beforeWindowLayout = function(B, A) {
    var _ = this["getParentBox"]();
    if (this.state == "max") {
        if (!this._width) {
            var $ = this["getBox"]();
            this._width = $.width;
            this._height = $.height;
            this.x = $.x;
            this.y = $.y
        }
    } else {
        if (si.isNull(B))
            B = "center";
        if (si.isNull(A))
            A = "middle";
        this.el.style.position = "absolute";
        this.el.style.left = "-2000px";
        this.el.style.top = "-2000px";
        this.el.style.display = "";
        if (this._width) {
            this["setWidth"](this._width);
            this["setHeight"](this._height)
        }
        this._setBoxWidthAndHeight();
        $ = this["getBox"]();
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
        si.setX(this.el, B);
        si.setY(this.el, A);
        this.el.style.left = B + "px";
        this.el.style.top = A + "px"
    }
    this["doLayout"]()
};
    siWindowPrototype._setBoxWidthAndHeight = function() {
    var $ = this["getBox"]();
    if ($.width > this.maxWidth) {
        sisetwidth(this.el, this.maxWidth);
        $ = this["getBox"]()
    }
    if ($.height > this.maxHeight) {
        sisetheight(this.el, this.maxHeight);
        $ = this["getBox"]()
    }
    if ($.width < this.minWidth) {
        sisetwidth(this.el, this.minWidth);
        $ = this["getBox"]()
    }
    if ($.height < this.minHeight) {
        sisetheight(this.el, this.minHeight);
        $ = this["getBox"]()
    }
};
    siWindowPrototype["getBox"] = function() {
    this.headerEl.style.width = "50px";
    this.el.style.display = "";
    var $ = sigetwidth(this.el);
    this.headerEl.style.width = "auto";
    var _ = sigetbox(this.el);
    _.width = $;
    _.right = _.x + $;
    return _
};
    siWindowPrototype["getWidth"] = function() {
    this.headerEl.style.width = "50px";
    var $ = sigetwidth(this.el);
    this.headerEl.style.width = "auto";
    return $
};
    siWindowPrototype["hide"] = function() {
    this["setVisible"](false);
    this._initModal()
};
    siWindowPrototype["show"] = function(B, _, D) {
    this._componentLock = false;
    var A = document.body;
    if (!this["isRender"]() || this.el.parentNode != A)
        this["render"](A);
    this.el.style.zIndex = si.getMaxZIndex();
    this._beforeWindowLayout(B, _);
    this._componentLock = true;
    this["setVisible"](true);
    if (this.state != "max") {
        var $ = this["getBox"]();
        this.x = $.x;
        this.y = $.y
    }
    try {
        this.el["focus"]()
    } catch (C) {}
};
    siWindowPrototype["showAtPos"] = function(_, $, A) {
    this["show"](_, $, A)
};
    siWindowPrototype["restore"] = function() {
    this.state = "restore";
    this["show"](this.x, this.y);
    var $ = this["getButton"]("max");
    if ($) {
        $.cls = "si-tools-max";
        this["_doTools"]()
    }
};
    siWindowPrototype["max"] = function() {
    this.state = "max";
    this["show"]();
    var $ = this["getButton"]("max");
    if ($) {
        $.cls = "si-tools-restore";
        this["_doTools"]()
    }
};
    siWindowPrototype["getShowMinButton"] = function() {
    return this["showMinButton"]
};
    siWindowPrototype["setShowMinButton"] = function($) {
    this["showMinButton"] = $;
    var _ = this["getButton"]("min");
    _.visible = $;
    this["_doTools"]()
};
    siWindowPrototype["getShowMaxButton"] = function() {
    return this["showMaxButton"]
};
    siWindowPrototype["setShowMaxButton"] = function($) {
    this["showMaxButton"] = $;
    var _ = this["getButton"]("max");
    _.visible = $;
    this["_doTools"]()
};
    siWindowPrototype["getAllowDrag"] = function() {
    return this.allowDrag
};
    siWindowPrototype["setAllowDrag"] = function($) {
    this.allowDrag = $;
    siremoveclass(this.el, this.dragCls);
    if ($)
        siaddclass(this.el, this.dragCls)
};
    siWindowPrototype["getMaxHeight"] = function() {
    return this.maxHeight
};
    siWindowPrototype["setMaxHeight"] = function($) {
    if (isNaN($))
        return;
    this.maxHeight = $
};
    siWindowPrototype["getMaxWidth"] = function() {
    return this.maxWidth
};
    siWindowPrototype["setMaxWidth"] = function($) {
    if (isNaN($))
        return;
    this.maxWidth = $
};
    siWindowPrototype["getMinHeight"] =  function() {
    return this.minHeight
};
    siWindowPrototype["setMinHeight"] = function($) {
    if (isNaN($))
        return;
    this.minHeight = $
};
    siWindowPrototype["getMinWidth"] = function() {
    return this.minWidth
};
    siWindowPrototype["setMinWidth"] = function($) {
    if (isNaN($))
        return;
    this.minWidth = $
};
    siWindowPrototype["getShowModal"] = function() {
    return this["showModal"]
};
    siWindowPrototype["setShowModal"] = function($) {
    this["showModal"] = $
};
    siWindowPrototype["getParentBox"] = function() {
    var $ = si.getViewportBox()
      , _ = document.body;
    if (_ != document.body)
        $ = sigetbox(_);
    return $
};
    siWindowPrototype._initModal = function() {
    var A = this["showModal"] && this["isDisplay"]() && this.visible;
    if (!this._modalEl && this["showModal"] == false)
        return;
    if (!this._modalEl)
        this._modalEl = si.append(document.body, "<div class=\"si-modal\" style=\"display:none\"></div>");
    function $() {
        si["repaint"](document.body);
        var $ = document.documentElement
          , B = parseInt(Math["max"](document.body.scrollWidth, $ ? $.scrollWidth : 0))
          , E = parseInt(Math["max"](document.body.scrollHeight, $ ? $.scrollHeight : 0))
          , D = si.getViewportBox()
          , C = D.height;
        if (C < E)
            C = E;
        var _ = D.width;
        if (_ < B)
            _ = B;
        this._modalEl.style.display = A ? "block" : "none";
        this._modalEl.style.height = C + "px";
        this._modalEl.style.width = _ + "px";
        this._modalEl.style.zIndex = sigetstyle(this.el, "zIndex") - 1
    }
    if (A) {
        var _ = this;
        setTimeout(function() {
            if (_._modalEl) {
                _._modalEl.style.display = "none";
                $["call"](_)
            }
        }
        , 1)
    } else
        this._modalEl.style.display = "none"
};
    siWindowPrototype["doLayout"] =  function() {
    if (!this["canLayout"]())
        return;
    if (this.state == "max") {
        var $ = this["getParentBox"]();
        this.el.style.left = "0px";
        this.el.style.top = "0px";
        si.setSize(this.el, $.width, $.height)
    }
    si.Window["superclass"]["doLayout"]["call"](this);
    if (this.allowDrag)
        siaddclass(this.el, this.dragCls);
    if (this.state == "max") {
        this._resizerTriggerEl.style.display = "none";
        siremoveclass(this.el, this.dragCls)
    }
    this._initModal()
};
    siWindowPrototype["_initEvents"] = function() {
    si.Window["superclass"]["_initEvents"]["call"](this);
    siEventTimer(function() {
        siBindEvent(this.el, "mouseover", this._onmouseover, this);
        siBindEvent(window, "resize", this._onCommonWindowResize, this);
        siBindEvent(this.el, "mousedown", this._onmousedown, this)
    }
    , this)
};
    siWindowPrototype.initButton = function() {
    this.buttons = [];
    var A = this["createButton"]({
        name: "close",
        cls: "si-tools-close",
        visible: this["showCloseButton"]
    });
    this.buttons.push(A);
    var B = this["createButton"]({
        name: "max",
        cls: "si-tools-max",
        visible: this["showMaxButton"]
    });
    this.buttons.push(B);
    var _ = this["createButton"]({
        name: "min",
        cls: "si-tools-min",
        visible: this["showMinButton"]
    });
    this.buttons.push(_);
    var $ = this["createButton"]({
        name: "collapse",
        cls: "si-tools-collapse",
        visible: this["showCollapseButton"]
    });
    this.buttons.push($)
};
    siWindowPrototype["_create"] = function() {
    si.Window["superclass"]["_create"]["call"](this)
};
    siRegClass(si.Window, "window");
	si.MessageBox = {
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
            F = si.copyTo({
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
              , C = new si.Window();
            C["setBodyStyle"]("overflow:hidden");
            C["setShowModal"](F["showModal"]);
            C["setTitle"](F.title || "");
            C["setIconCls"](F.titleIcon);
            C["setShowHeader"](F.showHeader);
            C["setShowCloseButton"](F["showCloseButton"]);
            var J = C.uid + "$table"
              , O = C.uid + "$content"
              , M = "<div class=\"" + F.iconCls + "\" style=\"" + F["iconStyle"] + "\"></div>"
              , R = "<table class=\"si-messagebox-table\" id=\"" + J + "\" style=\"\" cellspacing=\"0\" cellpadding=\"0\"><tr><td>" + M + "</td><td id=\"" + O + "\" class=\"si-messagebox-content-text\">" + (F.message || "") + "</td></tr></table>"
              , _ = "<div class=\"si-messagebox-content\"></div>" + "<div class=\"si-messagebox-buttons\"></div>";
            C.bodyEl.innerHTML = _;
            var N = C.bodyEl.firstChild;
            if (F.html) {
                if (typeof F.html == "string")
                    N.innerHTML = F.html;
                else if (si.isElement(F.html))
                    N.appendChild(F.html)
            } else
                N.innerHTML = R;
            C._Buttons = [];
            var Q = C.bodyEl.lastChild;
            if (F.buttons && F.buttons.length > 0) {
                for (var H = 0, D = F.buttons.length; H < D; H++) {
                    var E = F.buttons[H]
                      , K = si.MessageBox.buttonText[E];
                    if (!K)
                        K = E;
                    var $ = new si.Button();
                    $["setText"](K);
                    $["setWidth"](F.buttonWidth);
                    $["render"](Q);
                    $.action = E;
                    $["on"]("click", function(_) {
                        var $ = _.sender;
                        if (I)
                            I($.action);
                        si.MessageBox["hide"](C)
                    }
                    );
                    if (H != D - 1)
                        $["setStyle"](F.spaceStyle);
                    C._Buttons.push($)
                }
            } else
                Q.style.display = "none";
            C["setMinWidth"](F.minWidth);
            C["setMinHeight"](F.minHeight);
            C["setMaxWidth"](F.maxWidth);
            C["setMaxHeight"](F.maxHeight);
            C["setWidth"](F.width);
            C["setHeight"](F.height);
            C["show"]();
            var A = C["getWidth"]();
            C["setWidth"](A);
            var L = C["getHeight"]();
            C["setHeight"](L);
            var B = document.getElementById(J);
            if (B)
                B.style.width = "100%";
            var G = document.getElementById(O);
            if (G)
                G.style.width = "100%";
            var P = C._Buttons[0];
            if (P)
                P["focus"]();
            else
                C["focus"]();
            C["on"]("beforebuttonclick", function($) {
                if (I)
                    I("close");
                $.cancel = true;
                si.MessageBox["hide"](C)
            }
            );
            siBindEvent(C.el, "keydown", function($) {
                if ($.keyCode == 27) {
                    if (I)
                        I("close");
                    $.cancel = true;
                    si.MessageBox["hide"](C)
                }
            }
            );
            return C.uid
        },
        hide: function(C) {
            if (!C)
                return;
            var _ = typeof C == "object" ? C : si.getbyUID(C);
            if (!_)
                return;
            for (var $ = 0, A = _._Buttons.length; $ < A; $++) {
                var B = _._Buttons[$];
                B["destroy"]()
            }
            _._Buttons = null ;
            _["destroy"]()
        },
        alert: function(A, _, $) {
            return si.MessageBox["show"]({
                minWidth: 250,
                title: _ || si.MessageBox.alertTitle,
                buttons: ["ok"],
                message: A,
                iconCls: "si-messagebox-warning",
                callback: $
            })
        },
        confirm: function(A, _, $) {
            return si.MessageBox["show"]({
                minWidth: 250,
                title: _ || si.MessageBox.confirmTitle,
                buttons: ["ok", "cancel"],
                message: A,
                iconCls: "si-messagebox-question",
                callback: $
            })
        },
        prompt: function(C, B, A, _) {
            var F = "prompt$" + new Date()["getTime"]()
              , E = C || si.MessageBox.promptMessage;
            if (_)
                E = E + "<br/><textarea id=\"" + F + "\" style=\"width:200px;height:60px;margin-top:3px;\"></textarea>";
            else
                E = E + "<br/><input id=\"" + F + "\" type=\"text\" style=\"width:200px;margin-top:3px;\"/>";
            var D = si.MessageBox["show"]({
                title: B || si.MessageBox.promptTitle,
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
            $["focus"]();
            return D
        },
        loading: function(_, $) {
            return si.MessageBox["show"]({
                minHeight: 50,
                title: $,
                showCloseButton: false,
                message: _,
                iconCls: "si-messagebox-waiting"
            })
        }
    };
    si.alert = si.MessageBox.alert;
    si.confirm = si.MessageBox.confirm;
    si.prompt = si.MessageBox.prompt;
    si["loading"] = si.MessageBox["loading"];
    si.showMessageBox = si.MessageBox["show"];
    si.hideMessageBox = si.MessageBox["hide"];
    si.Splitter = function() {
        this._createSplitter();
        si.Splitter["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Splitter, si.Control, {
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
        uiCls: "si-splitter"
    });
    siSplitterPrototype = si.Splitter["prototype"];
    siSplitterPrototype["getAttrs"] = function(B) {
        var G = si.Splitter["superclass"]["getAttrs"]["call"](this, B);
        si["_ParseBool"](B, G, ["allowResize", "vertical", "showHandleButton", "onresize"]);
        si["_ParseInt"](B, G, ["handlerSize"]);
        var A = []
          , F = si["getChildNodes"](B);
        for (var _ = 0, E = 2; _ < E; _++) {
            var C = F[_]
              , D = jQuery(C)
              , $ = {};
            A.push($);
            if (!C)
                continue;$.style = C.style.cssText;
            si["_ParseString"](C, $, ["cls", "size", "id", "class"]);
            si["_ParseBool"](C, $, ["visible", "expanded", "showCollapseButton"]);
            si["_ParseInt"](C, $, ["minSize", "maxSize", "handlerSize"]);
            $.bodyParent = C
        }
        G.panes = A;
        return G
    };
    siSplitterPrototype.onDragStop = function(_) {
        var $ = this.elBox.width
          , B = this.elBox.height
          , C = this["handlerSize"]
          , D = parseFloat(this.pane1.size)
          , E = parseFloat(this.pane2.size)
          , I = isNaN(D)
          , N = isNaN(E)
          , J = !isNaN(D) && this.pane1.size["indexOf"]("%") != -1
          , M = !isNaN(E) && this.pane2.size["indexOf"]("%") != -1
          , G = !I && !J
          , K = !N && !M
          , L = this.vertical ? B - this["handlerSize"] : $ - this["handlerSize"]
          , A = sigetbox(this.proxyDragEl)
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
        jQuery(this.proxyDragEl).remove();
        jQuery(this.resizerEl).remove();
        this.resizerEl = null ;
        this.proxyDragEl = null ;
        this.elBox = this.handlerBox = null ;
        this["doLayout"]();
        this["fire"]("resize")
    };
    siSplitterPrototype.onDragMove = function(C) {
        if (!this.handlerBox)
            return;
        if (!this.elBox)
            this.elBox = sigetbox(this.borderEl, true);
        var B = this.elBox.width
          , D = this.elBox.height
          , E = this["handlerSize"]
          , I = this.vertical ? D - this["handlerSize"] : B - this["handlerSize"]
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
            si.setY(this.proxyDragEl, H)
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
            si.setX(this.proxyDragEl, K)
        }
    };
    siSplitterPrototype.onDragStart =  function($) {
        this.resizerEl = si.append(document.body, "<div class=\"si-resizer-mask\"></div>");
        this.proxyDragEl = si.append(document.body, "<div class=\"si-proxy\"></div>");
        this.proxyDragEl.style.cursor = this.vertical ? "n-resize" : "w-resize";
        this.handlerBox = sigetbox(this.splitterHandlerEl);
        this.elBox = sigetbox(this.borderEl, true);
        sisetbox(this.proxyDragEl, this.handlerBox)
    };
    siSplitterPrototype._getDrag = function () {if (!this.drag) {this.drag = new si.Drag({capture:true,onStart:si.createDelegate(this.onDragStart,this),onMove:si.createDelegate(this.onDragMove,this),onStop:si.createDelegate(this.onDragStop,this) }); } return this.drag; };
    siSplitterPrototype._onmousedown = function(A) {
        var _ = A.target;
        if (!this["allowResize"])
            return;
        if (!this.pane1.visible || !this.pane2.visible || !this.pane1.expanded || !this.pane2.expanded)
            return;
        if (siisAncestor(this.splitterHandlerEl, _))
            if (_.className == "si-splitter-pane1-button" || _.className == "si-splitter-pane2-button")
                ;
            else {
                var $ = this._getDrag();
                $.start(A)
            }
    };
    siSplitterPrototype["onButtonClick"] = function (fn,scope) {this["on"]("buttonclick",fn,scope); };
    siSplitterPrototype._onCommonButtonClick = function (pane,htmlEvent) {this["fire"]("buttonclick",{pane:pane,index:this.pane1 == pane ? 1 :2,htmlEvent:htmlEvent }); };
    siSplitterPrototype._onclick = function(B) {
        var A = B.target;
        if (!siisAncestor(this.splitterHandlerEl, A))
            return;
        var _ = parseInt(A.id)
          , $ = this["getPane"](_)
          , B = {
            pane: $,
            paneIndex: _,
            cancel: false
        };
        if ($.expanded)
            this["fire"]("beforecollapse", B);
        else
            this["fire"]("beforeexpand", B);
        if (B.cancel == true)
            return;
        if (A.className == "si-splitter-pane1-button")
            this["togglePane"](_);
        else if (A.className == "si-splitter-pane2-button")
            this["togglePane"](_)
    };
    siSplitterPrototype["getHandlerSize"] = function () {return this["handlerSize"]; };
    siSplitterPrototype["setHandlerSize"] = function (value) {if (this["handlerSize"] != value) {this["handlerSize"] = value; this["doLayout"](); } };
    siSplitterPrototype["getAllowResize"] = function () {return this["allowResize"]; };
    siSplitterPrototype["setAllowResize"] = function (value) {if (this["allowResize"] != value) {this["allowResize"] = value; this["doLayout"](); } };
    siSplitterPrototype["hidePane"] = function (index) {var pane = this["getPane"](index); if (!pane) return; pane.visible = false; var pane2 = pane == this.pane1 ? this.pane2 :this.pane1; if (pane2.visible == false) {pane2.expanded = true; pane2.visible = true; } this["doUpdate"](); };
    siSplitterPrototype["showPane"] = function (index) {var pane = this["getPane"](index); if (!pane) return; pane.visible = true; this["doUpdate"](); };
    siSplitterPrototype["togglePane"] = function (index) {var pane = this["getPane"](index); if (!pane) return; if (pane.expanded) {this["collapsePane"](pane); } else {this["expandPane"](pane); } };
    siSplitterPrototype["collapsePane"] = function(_) {
        var $ = this["getPane"](_);
        if (!$)
            return;
        $.expanded = false;
        var A = $ == this.pane1 ? this.pane2 : this.pane1;
        if (A.expanded == false) {
            A.expanded = true;
            A.visible = true
        }
        this["doUpdate"]();
        var B = {
            pane: $,
            paneIndex: this.pane1 == $ ? 1 : 2
        };
        this["fire"]("collapse", B)
    };
    siSplitterPrototype["expandPane"] = function (index) {var pane = this["getPane"](index); if (!pane) return; pane.expanded = true; this["doUpdate"](); var e = {pane:pane,paneIndex:this.pane1 == pane ? 1 :2 }; this["fire"]("expand",e); };
    siSplitterPrototype["getVertical"] = function () {return this.vertical; };
    siSplitterPrototype["setVertical"] = function (value) {this.vertical = value; this["doUpdate"](); };
    siSplitterPrototype["getShowHandleButton"] = function (value) {return this.showHandleButton; };
    siSplitterPrototype["setShowHandleButton"] = function (value) {this.showHandleButton = value; this["doUpdate"](); };
    siSplitterPrototype["updatePane"] = function(_, F) {
        var $ = this["getPane"](_);
        if (!$)
            return;
        si.copyTo($, F);
        var B = this["getPaneEl"](_)
          , C = $.body;
        delete $.body;
        if (C) {
            if (!si.isArray(C))
                C = [C];
            for (var A = 0, E = C.length; A < E; A++)
                si.append(B, C[A])
        }
        if ($.bodyParent) {
            var D = $.bodyParent;
            while (D.firstChild)
                B.appendChild(D.firstChild)
        }
        delete $.bodyParent;
        B.id = $.id;
        sisetstyle(B, $.style);
        siaddclass(B, $["class"]);
        if ($.controls) {
            var _ = $ == this.pane1 ? 1 : 2;
            this["setPaneControls"](_, $.controls);
            delete $.controls
        }
        this["doUpdate"]()
    };
    siSplitterPrototype["getPaneEl"] = function (index) {if (index == 1) return this.pane1El; return this.pane2El; };
    siSplitterPrototype["setPaneControls"] = function (index,value) {var pane = this["getPane"](index); if (!pane) return; var el = this["getPaneEl"](index); __si_setControls(value,el,this); };
    siSplitterPrototype["setPanes"] = function (panes) {if (!si.isArray(panes)) return; for (var i = 0; i < 2; i++) {var p = panes[i]; this["updatePane"](i + 1,p); } };
    siSplitterPrototype["getPane"] = function (index) {if (index == 1) return this.pane1; else if (index == 2) return this.pane2; return index; };
    siSplitterPrototype["getPaneBox"] = function($) {
        var _ = this["getPaneEl"]($);
        if (!_)
            return null ;
        return sigetbox(_)
    };
    siSplitterPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    this.splitterHandlerEl.style.cursor = this["allowResize"] ? "" : "default";
    siremoveclass(this.el, "si-splitter-vertical");
    if (this.vertical)
        siaddclass(this.el, "si-splitter-vertical");
    siremoveclass(this.pane1El, "si-splitter-pane1-vertical");
    siremoveclass(this.pane2El, "si-splitter-pane2-vertical");
    if (this.vertical) {
        siaddclass(this.pane1El, "si-splitter-pane1-vertical");
        siaddclass(this.pane2El, "si-splitter-pane2-vertical")
    }
    siremoveclass(this.splitterHandlerEl, "si-splitter-handler-vertical");
    if (this.vertical)
        siaddclass(this.splitterHandlerEl, "si-splitter-handler-vertical");
    var B = this["getHeight"](true)
      , _ = this["getWidth"](true);
    if (!jQuery.boxModel) {
        var Q = sigetborders(this.borderEl);
        B = B + Q.top + Q.bottom;
        _ = _ + Q.left + Q.right
    }
    this.borderEl.style.width = _ + "px";
    this.borderEl.style.height = B + "px";
    var $ = this.pane1El
      , C = this.pane2El
      , G = jQuery($)
      , I = jQuery(C);
    $.style.display = C.style.display = this.splitterHandlerEl.style.display = "";
    var D = this["handlerSize"];
    this.pane1.size = String(this.pane1.size);
    this.pane2.size = String(this.pane2.size);
    var F = parseFloat(this.pane1.size)
      , H = parseFloat(this.pane2.size)
      , O = isNaN(F)
      , T = isNaN(H)
      , N = !isNaN(F) && this.pane1.size["indexOf"]("%") != -1
      , R = !isNaN(H) && this.pane2.size["indexOf"]("%") != -1
      , J = !O && !N
      , M = !T && !R
      , P = this.vertical ? B - this["handlerSize"] : _ - this["handlerSize"]
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
        this.splitterHandlerEl.style.display = "none"
    } else if (this.pane2.visible == false) {
        K = P + D;
        p2Size = D = 0;
        C.style.display = "none";
        this.splitterHandlerEl.style.display = "none"
    }
    if (this.vertical) {
        sisetwidth($, _);
        sisetwidth(C, _);
        sisetheight($, K);
        sisetheight(C, p2Size);
        C.style.top = (K + D) + "px";
        this.splitterHandlerEl.style.left = "0px";
        this.splitterHandlerEl.style.top = K + "px";
        sisetwidth(this.splitterHandlerEl, _);
        sisetheight(this.splitterHandlerEl, this["handlerSize"]);
        $.style.left = "0px";
        C.style.left = "0px"
    } else {
        sisetwidth($, K);
        sisetwidth(C, p2Size);
        sisetheight($, B);
        sisetheight(C, B);
        C.style.left = (K + D) + "px";
        this.splitterHandlerEl.style.top = "0px";
        this.splitterHandlerEl.style.left = K + "px";
        sisetwidth(this.splitterHandlerEl, this["handlerSize"]);
        sisetheight(this.splitterHandlerEl, B);
        $.style.top = "0px";
        C.style.top = "0px"
    }
    var S = "<div class=\"si-splitter-handler-buttons\">";
    if (!this.pane1.expanded || !this.pane2.expanded) {
        if (!this.pane1.expanded) {
            if (this.pane1["showCollapseButton"])
                S += "<a id=\"1\" class=\"si-splitter-pane2-button\"></a>"
        } else if (this.pane2["showCollapseButton"])
            S += "<a id=\"2\" class=\"si-splitter-pane1-button\"></a>"
    } else {
        if (this.pane1["showCollapseButton"])
            S += "<a id=\"1\" class=\"si-splitter-pane1-button\"></a>";
        if (this["allowResize"])
            if ((!this.pane1["showCollapseButton"] && !this.pane2["showCollapseButton"])
                )
                    S += "<span class=\"si-splitter-resize-button\"></span>";
            if (this.pane2["showCollapseButton"])
                S += "<a id=\"2\" class=\"si-splitter-pane2-button\"></a>"
        }
        S += "</div>";
        this.splitterHandlerEl.innerHTML = S;
        var E = this.splitterHandlerEl.firstChild;
        E.style.display = this.showHandleButton ? "" : "none";
        var A = sigetbox(E);
        if (this.vertical)
            E.style.marginLeft = -A.width / 2 + "px";
        else
            E.style.marginTop = -A.height / 2 + "px";
        if (!this.pane1.visible || !this.pane2.visible || !this.pane1.expanded || !this.pane2.expanded)
            siaddclass(this.splitterHandlerEl, "si-splitter-nodrag");
        else
            siremoveclass(this.splitterHandlerEl, "si-splitter-nodrag");
        si.layout(this.borderEl);
        this["fire"]("layout")
    };
    siSplitterPrototype["doUpdate"] = function () {this["doLayout"](); };
    siSplitterPrototype._createSplitter = function () {this.pane1 = {id:"",index:1,minSize:30,maxSize:3000,size:'',showCollapseButton:false,cls:"",style:"",visible:true,expanded:true }; this.pane2 = si.copyTo({},this.pane1); this.pane2.index = 2; };
    siSplitterPrototype["_initEvents"] = function () {siEventTimer(function () {siBindEvent(this.el,"click",this._onclick,this); siBindEvent(this.el,"mousedown",this._onmousedown,this); },this); };
    siSplitterPrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-splitter";
    this.el.innerHTML = "<div class=\"si-splitter-border\"><div id=\"1\" class=\"si-splitter-pane si-splitter-pane1\"></div><div id=\"2\" class=\"si-splitter-pane si-splitter-pane2\"></div><div class=\"si-splitter-handler\"></div></div>";
    this.borderEl = this.el.firstChild;
    this.pane1El = this.borderEl.firstChild;
    this.pane2El = this.borderEl.childNodes[1];
    this.splitterHandlerEl = this.borderEl.lastChild
};
    siRegClass(si.Splitter, "splitter");
    si.Layout = function() {
        this.regions = [];
        this.regionMap = {};
        si.Layout["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Layout, si.Control, {
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
        uiCls: "si-layout",
        hoverProxyEl: null 
    });
    siLayoutPrototype = si.Layout["prototype"];
    siLayoutPrototype["onButtonMouseDown"] = function(_, $) {
    this["on"]("buttonmousedown", _, $)
};
    siLayoutPrototype["onButtonClick"] = function(_, $) {
    this["on"]("buttonclick", _, $)
};
    siLayoutPrototype._onmouseout = function($) {
    if (this.hoverProxyEl)
        siremoveclass(this.hoverProxyEl, "si-layout-proxy-hover");
    this.hoverProxyEl = null 
};
    siLayoutPrototype._onmouseover = function(_) {
    var $ = this._findProxyAncestor(_);
    if ($) {
        siaddclass($, "si-layout-proxy-hover");
        this.hoverProxyEl = $
    }
};
    siLayoutPrototype._onButtonMouseDown = function(_, A, $) {
    this["fire"]("buttonmousedown", {
        htmlEvent: $,
        region: _,
        button: A,
        index: this.buttons["indexOf"](A),
        name: A.name
    })
};
    siLayoutPrototype._onCommonButtonClick = function(_, A, $) {
    this["fire"]("buttonclick", {
        htmlEvent: $,
        region: _,
        button: A,
        index: this.buttons["indexOf"](A),
        name: A.name
    })
};
    siLayoutPrototype._onclick = function(D) {
    if (this.doingLayout)
        return;
    var A = this._findProxyAncestor(D);
    if (A) {
        var _ = A.id
          , C = sifindAncestor(D.target, "si-tools-collapse");
        if (C)
            this._doToolBarLayout(_);
        else
            this._doNormalLayout(_)
    }
    var B = this._findRegionAncestor(D);
    if (B && sifindAncestor(D.target, "si-layout-region-header")) {
        _ = B.id,
        C = sifindAncestor(D.target, "si-tools-collapse");
        if (C)
            this._doToolBarLayout(_);
        var $ = sifindAncestor(D.target, "si-tools-close");
        if ($)
            this["updateRegion"](_, {
                visible: false
            })
    }
    if (sihasclass(D.target, "si-layout-spliticon")) {
        _ = D.target.parentNode.id;
        this._doToolBarLayout(_)
    }
};
    siLayoutPrototype._findRegionAncestor = function(_) {
    var $ = sifindAncestor(_.target, "si-layout-region");
    return $
};
    siLayoutPrototype._findProxyAncestor = function(_) {
    var $ = sifindAncestor(_.target, "si-layout-proxy");
    return $
};
    siLayoutPrototype._doToolBarLayout = function($) {
    $ = this["getRegion"]($);
    var _ = {
        region: $,
        cancel: false
    };
    if ($.expanded) {
        this["fire"]("BeforeCollapse", _);
        if (_.cancel == false)
            this["collapseRegion"]($)
    } else {
        this["fire"]("BeforeExpand", _);
        if (_.cancel == false)
            this["expandRegion"]($)
    }
};
    siLayoutPrototype["isVisibleRegion"] = function($) {
    $ = this["getRegion"]($);
    if (!$)
        return null ;
    return this.region.visible
};
    siLayoutPrototype["isExpandRegion"] = function($) {
    $ = this["getRegion"]($);
    if (!$)
        return null ;
    return this.region.expanded
};
    siLayoutPrototype["hideRegion"] = function($) {
    $ = this["getRegion"]($);
    if (!$)
        return;
    $.visible = false;
    this["doUpdate"]()
};
    siLayoutPrototype["showRegion"] = function($) {
    $ = this["getRegion"]($);
    if (!$)
        return;
    $.visible = true;
    this["doUpdate"]()
};
    siLayoutPrototype["toggleRegion"] = function($) {
    $ = this["getRegion"]($);
    if (!$)
        return;
    if ($.expanded)
        this["collapseRegion"]($);
    else
        this["expandRegion"]($)
};
    siLayoutPrototype["collapseRegion"] = function($) {
    $ = this["getRegion"]($);
    if (!$)
        return;
    $.expanded = false;
    this["doUpdate"]()
};
    siLayoutPrototype["expandRegion"] = function($) {
    $ = this["getRegion"]($);
    if (!$)
        return;
    $.expanded = true;
    this["doUpdate"]()
};
    siLayoutPrototype["updateRegion"] = function($, _) {
    $ = this["getRegion"]($);
    if (!$)
        return;
    if (_)
        delete _.region;
    si.copyTo($, _);
    this._beforeDoUpdate($);
    this["doUpdate"]()
};
    siLayoutPrototype._beforeDoUpdate = function($) {
    var _ = this._getLayoutButtonByName($, "close");
    _.visible = $["showCloseButton"];
    _ = this._getLayoutButtonByName($, "collapse");
    _.visible = $["showCollapseButton"];
    if ($.width < $.minWidth)
        $.width = si.minWidth;
    if ($.width > $.maxWidth)
        $.width = si.maxWidth;
    if ($.height < $.minHeight)
        $.height = si.minHeight;
    if ($.height > $.maxHeight)
        $.height = si.maxHeight
};
    siLayoutPrototype["moveRegion"] = function(A, $) {
    var A = this["getRegion"](A);
    if (!A)
        return;
    var _ = this.regions[$];
    if (!_ || _ == A)
        return;
    this.regions.remove(A);
    var $ = this.region["indexOf"](_);
    this.regions.insert($, A);
    this["doUpdate"]()
};
    siLayoutPrototype["removeRegion"] = function($) {
    var $ = this["getRegion"]($);
    if (!$)
        return;
    this.regions.remove($);
    delete this.regionMap[$.region];
    jQuery($._el).remove();
    jQuery($._split).remove();
    jQuery($._proxy).remove();
    this["doUpdate"]()
};
    siLayoutPrototype["addRegion"] = function(D, $) {
    var G = D;
    D = this._addLayoutProperty(D);
    if (!D.region)
        D.region = "center";
    D.region = D.region.toLowerCase();
    if (D.region == "center" && G && !G.showHeader)
        D.showHeader = false;
    if (D.region == "north" || D.region == "south")
        if (!G.collapseSize)
            D.collapseSize = this.collapseHeight;
    this._beforeDoUpdate(D);
    if (typeof $ != "number")
        $ = this.regions.length;
    var A = this.regionMap[D.region];
    if (A)
        return;
    this.regions.insert($, D);
    this.regionMap[D.region] = D;
    this._afterLayOutInsertRegion(D);
    var B = this["getRegionBodyEl"](D)
      , C = D.body;
    delete D.body;
    if (C) {
        if (!si.isArray(C))
            C = [C];
        for (var _ = 0, F = C.length; _ < F; _++)
            si.append(B, C[_])
    }
    if (D.bodyParent) {
        var E = D.bodyParent;
        while (E.firstChild)
            B.appendChild(E.firstChild)
    }
    delete D.bodyParent;
    if (D.controls) {
        this["setRegionControls"](D, D.controls);
        delete D.controls
    }
    this["doUpdate"]()
};
    siLayoutPrototype["setRegions"] = function(A) {
    if (!si.isArray(A))
        return;
    for (var $ = 0, _ = A.length; $ < _; $++)
        this["addRegion"](A[$])
};
    siLayoutPrototype["setRegionControls"] = function(A, $) {
    var A = this["getRegion"](A);
    if (!A)
        return;
    var _ = this["getRegionBodyEl"](A);
    __si_setControls($, _, this)
};
    siLayoutPrototype._afterLayOutInsertRegion = function($) {
    var $ = this["getRegion"]($);
    if (!$)
        return;
    si.append(this.borderEl, "<div id=\"" + $.region + "\" class=\"si-layout-region\"><div class=\"si-layout-region-header\" style=\"" + $.headerStyle + "\"></div><div class=\"si-layout-region-body\" style=\"" + $.bodyStyle + "\"></div></div>");
    $._el = this.borderEl.lastChild;
    $._header = $._el.firstChild;
    $._body = $._el.lastChild;
    if ($.cls)
        siaddclass($._el, $.cls);
    if ($.style)
        sisetstyle($._el, $.style);
    siaddclass($._el, "si-layout-region-" + $.region);
    if ($.region != "center") {
        si.append(this.borderEl, "<div uid=\"" + this.uid + "\" id=\"" + $.region + "\" class=\"si-layout-split\"><div class=\"si-layout-spliticon\"></div></div>");
        $._split = this.borderEl.lastChild;
        siaddclass($._split, "si-layout-split-" + $.region)
    }
    if ($.region != "center") {
        si.append(this.borderEl, "<div id=\"" + $.region + "\" class=\"si-layout-proxy\"></div>");
        $._proxy = this.borderEl.lastChild;
        siaddclass($._proxy, "si-layout-proxy-" + $.region)
    }
};
    siLayoutPrototype._addLayoutProperty = function(_) {
    var $ = si.copyTo({
        region: "",
        title: "",
        iconCls: "",
        iconStyle: "",
        showCloseButton: false,
        showCollapseButton: true,
        buttons: [{
            name: "close",
            cls: "si-tools-close",
            html: "",
            visible: false
        }, {
            name: "collapse",
            cls: "si-tools-collapse",
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
};
    siLayoutPrototype._getLayoutButtonByName = function(_, B) {
    var D = _.buttons;
    for (var $ = 0, A = D.length; $ < A; $++) {
        var C = D[$];
        if (C.name == B)
            return C
    }
};
    siLayoutPrototype["getRegion"] = function($) {
    if (typeof $ == "string")
        return this.regionMap[$];
    return $
};
    siLayoutPrototype["getRegionBox"] = function(_) {
    var $ = this["getRegionEl"](_);
    if ($)
        return sigetbox($);
    return null 
};
    siLayoutPrototype["getRegionProxyEl"] = function($) {
    var $ = this["getRegion"]($);
    if (!$)
        return null ;
    return $._proxy
};
    siLayoutPrototype["getRegionSplitEl"] = function($) {
    var $ = this["getRegion"]($);
    if (!$)
        return null ;
    return $._split
};
    siLayoutPrototype["getRegionBodyEl"] = function($) {
    var $ = this["getRegion"]($);
    if (!$)
        return null ;
    return $._body
};
    siLayoutPrototype["getRegionHeaderEl"] = function($) {
    var $ = this["getRegion"]($);
    if (!$)
        return null ;
    return $._header
};
    siLayoutPrototype["getRegionEl"] = function($) {
    var $ = this["getRegion"]($);
    if (!$)
        return null ;
    return $._el
};
    siLayoutPrototype["_initEvents"] = function() {
    siEventTimer(function() {
        siBindEvent(this.el, "click", this._onclick, this);
        siBindEvent(this.el, "mousedown", this._onmousedown, this);
        siBindEvent(this.el, "mouseover", this._onmouseover, this);
        siBindEvent(this.el, "mouseout", this._onmouseout, this);
        siBindEvent(document, "mousedown", this._ondocumentmousedown, this)
    }
    , this)
};
    siLayoutPrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-layout";
    this.el.innerHTML = "<div class=\"si-layout-border\"></div>";
    this.borderEl = this.el.firstChild;
    this["doUpdate"]()
};
    si.copyTo(si.Layout.prototype, {
        _getLayoutHeaderText: function(_, A) {
            var C = "<div class=\"si-tools\">";
            if (A)
                C += "<span class=\"si-tools-collapse\"></span>";
            else
                for (var $ = _.buttons.length - 1; $ >= 0; $--) {
                    var B = _.buttons[$];
                    C += "<span class=\"" + B.cls + "\" style=\"";
                    C += B.style + ";" + (B.visible ? "" : "display:none;") + "\">" + B.html + "</span>"
                }
            C += "</div>";
            C += "<div class=\"si-layout-region-icon " + _.iconCls + "\" style=\"" + _["iconStyle"] + ";" + ((_["iconStyle"] || _.iconCls) ? "" : "display:none;") + "\"></div>";
            C += "<div class=\"si-layout-region-title\">" + _.title + "</div>";
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
                    siaddclass(A, B.cls);
                B._header.style.display = B.showHeader ? "" : "none";
                B._header.innerHTML = this._getLayoutHeaderText(B);
                if (B._proxy)
                    B._proxy.innerHTML = this._getLayoutHeaderText(B, true);
                if (D) {
                    siremoveclass(D, "si-layout-split-nodrag");
                    if (B.expanded == false || !B["allowResize"])
                        siaddclass(D, "si-layout-split-nodrag")
                }
            }
            this["doLayout"]()
        },
        doLayout: function() {
            if (!this["canLayout"]())
                return;
            if (this.doingLayout)
                return;
            var C = sigetheight(this.el, true)
              , _ = sigetwidth(this.el, true)
              , D = {
                x: 0,
                y: 0,
                width: _,
                height: C
            }
              , I = this.regions.clone()
              , P = this["getRegion"]("center");
            I.remove(P);
            if (P)
                I.push(P);
            for (var K = 0, H = I.length; K < H; K++) {
                var E = I[K];
                E._Expanded = false;
                siremoveclass(E._el, "si-layout-popup");
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
                        sisetwidth(L, E.width)
                    } else if (A == "north" || A == "south") {
                        J = E.collapseSize;
                        sisetheight(L, E.height)
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
                    sisetheight(L, C);
                if (A == "north" || A == "south")
                    sisetwidth(L, _);
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
                sisetwidth($, _);
                sisetheight($, C);
                var M = jQuery(E._el).height()
                  , Q = E.showHeader ? jQuery(E._header).outerHeight() : 0;
                sisetheight(E._body, M - Q);
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
                sisetwidth(F, _);
                sisetheight(F, C);
                if (E.showSplit && E.expanded && E["allowResize"] == true)
                    siremoveclass(F, "si-layout-split-nodrag");
                else
                    siaddclass(F, "si-layout-split-nodrag");
                F.firstChild.style.display = E.showSplitIcon ? "block" : "none";
                if (E.expanded)
                    siremoveclass(F.firstChild, "si-layout-spliticon-collapse");
                else
                    siaddclass(F.firstChild, "si-layout-spliticon-collapse")
            }
            si.layout(this.borderEl);
            this["fire"]("layout")
        },
        _onmousedown: function(B) {
            if (this.doingLayout)
                return;
            if (sifindAncestor(B.target, "si-layout-split")) {
                var A = jQuery(B.target).attr("uid");
                if (A != this.uid)
                    return;
                var _ = this["getRegion"](B.target.id);
                if (_.expanded == false || !_["allowResize"] || !_.showSplit)
                    return;
                this.dragRegion = _;
                var $ = this._getDrag();
                $.start(B)
            }
        },
        _getDrag: function() {
            if (!this.drag)
                this.drag = new si.Drag({
                    capture: true,
                    onStart: si.createDelegate(this.onDragStart, this),
                    onMove: si.createDelegate(this.onDragMove, this),
                    onStop: si.createDelegate(this.onDragStop, this)
                });
            return this.drag
        },
        onDragStart: function($) {
            this.resizerEl = si.append(document.body, "<div class=\"si-resizer-mask\"></div>");
            this.proxyDragEl = si.append(document.body, "<div class=\"si-proxy\"></div>");
            this.proxyDragEl.style.cursor = "n-resize";
            if (this.dragRegion.region == "west" || this.dragRegion.region == "east")
                this.proxyDragEl.style.cursor = "w-resize";
            this.splitBox = sigetbox(this.dragRegion._split);
            sisetbox(this.proxyDragEl, this.splitBox);
            this.elBox = sigetbox(this.el, true)
        },
        onDragMove: function(C) {
            var I = C.now[0] - C.init[0]
              , V = this.splitBox.x + I
              , A = C.now[1] - C.init[1]
              , U = this.splitBox.y + A
              , K = V + this.splitBox.width
              , T = U + this.splitBox.height
              , G = this["getRegion"]("west")
              , L = this["getRegion"]("east")
              , F = this["getRegion"]("north")
              , D = this["getRegion"]("south")
              , H = this["getRegion"]("center")
              , O = G && G.visible ? G.width : 0
              , Q = L && L.visible ? L.width : 0
              , R = F && F.visible ? F.height : 0
              , J = D && D.visible ? D.height : 0
              , P = G && G.showSplit ? sigetwidth(G._split) : 0
              , $ = L && L.showSplit ? sigetwidth(L._split) : 0
              , B = F && F.showSplit ? sigetheight(F._split) : 0
              , S = D && D.showSplit ? sigetheight(D._split) : 0
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
                si.setX(this.proxyDragEl, V)
            } else if (N == "east") {
                M = this.elBox.width - O - P - $ - H.minWidth;
                if (this.elBox.right - (V + this.splitBox.width) > M)
                    V = this.elBox.right - M - this.splitBox.width;
                if (this.elBox.right - (V + this.splitBox.width) < E.minWidth)
                    V = this.elBox.right - E.minWidth - this.splitBox.width;
                if (this.elBox.right - (V + this.splitBox.width) > E.maxWidth)
                    V = this.elBox.right - E.maxWidth - this.splitBox.width;
                si.setX(this.proxyDragEl, V)
            } else if (N == "north") {
                var _ = this.elBox.height - J - S - B - H.minHeight;
                if (U - this.elBox.y > _)
                    U = _ + this.elBox.y;
                if (U - this.elBox.y < E.minHeight)
                    U = E.minHeight + this.elBox.y;
                if (U - this.elBox.y > E.maxHeight)
                    U = E.maxHeight + this.elBox.y;
                si.setY(this.proxyDragEl, U)
            } else if (N == "south") {
                _ = this.elBox.height - R - B - S - H.minHeight;
                if (this.elBox.bottom - (U + this.splitBox.height) > _)
                    U = this.elBox.bottom - _ - this.splitBox.height;
                if (this.elBox.bottom - (U + this.splitBox.height) < E.minHeight)
                    U = this.elBox.bottom - E.minHeight - this.splitBox.height;
                if (this.elBox.bottom - (U + this.splitBox.height) > E.maxHeight)
                    U = this.elBox.bottom - E.maxHeight - this.splitBox.height;
                si.setY(this.proxyDragEl, U)
            }
        },
        onDragStop: function(B) {
            var C = sigetbox(this.proxyDragEl)
              , D = this.dragRegion
              , A = D.region;
            if (A == "west") {
                var $ = C.x - this.elBox.x;
                this["updateRegion"](D, {
                    width: $
                })
            } else if (A == "east") {
                $ = this.elBox.right - C.right;
                this["updateRegion"](D, {
                    width: $
                })
            } else if (A == "north") {
                var _ = C.y - this.elBox.y;
                this["updateRegion"](D, {
                    height: _
                })
            } else if (A == "south") {
                _ = this.elBox.bottom - C.bottom;
                this["updateRegion"](D, {
                    height: _
                })
            }
            jQuery(this.proxyDragEl).remove();
            this.proxyDragEl = null ;
            this.elBox = this.handlerBox = null ;
            jQuery(this.resizerEl).remove();
            this.resizerEl = null 
        },
        _doNormalLayout: function($) {
            $ = this["getRegion"]($);
            if ($._Expanded === true)
                this._expandLayout($);
            else
                this._collapseLayout($)
        },
        _collapseLayout: function(D) {
            if (this.doingLayout)
                return;
            this["doLayout"]();
            var A = D.region
              , H = D._el;
            D._Expanded = true;
            siaddclass(H, "si-layout-popup");
            var E = sigetbox(D._proxy)
              , B = sigetbox(D._el)
              , F = {};
            if (A == "east") {
                var K = E.x
                  , J = E.y
                  , C = E.height;
                sisetheight(H, C);
                si.setX(H, K);
                H.style.top = D._proxy.style.top;
                var I = parseInt(H.style.left);
                F = {
                    left: I - B.width
                }
            } else if (A == "west") {
                K = E.right - B.width,
                J = E.y,
                C = E.height;
                sisetheight(H, C);
                si.setX(H, K);
                H.style.top = D._proxy.style.top;
                I = parseInt(H.style.left);
                F = {
                    left: I + B.width
                }
            } else if (A == "north") {
                var K = E.x
                  , J = E.bottom - B.height
                  , _ = E.width;
                sisetwidth(H, _);
                si["setXY"](H, K, J);
                var $ = parseInt(H.style.top);
                F = {
                    top: $ + B.height
                }
            } else if (A == "south") {
                K = E.x,
                J = E.y,
                _ = E.width;
                sisetwidth(H, _);
                si["setXY"](H, K, J);
                $ = parseInt(H.style.top);
                F = {
                    top: $ - B.height
                }
            }
            siaddclass(D._proxy, "si-layout-maxZIndex");
            this.doingLayout = true;
            var G = this
              , L = jQuery(H);
            L.animate(F, 250, function() {
                siremoveclass(D._proxy, "si-layout-maxZIndex");
                G.doingLayout = false
            }
            )
        },
        _expandLayout: function(F) {
            if (this.doingLayout)
                return;
            F._Expanded = false;
            var B = F.region
              , E = F._el
              , D = sigetbox(E)
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
            siaddclass(F._proxy, "si-layout-maxZIndex");
            this.doingLayout = true;
            var A = this
              , G = jQuery(E);
            G.animate(_, 250, function() {
                siremoveclass(F._proxy, "si-layout-maxZIndex");
                A.doingLayout = false;
                A["doLayout"]()
            }
            )
        },
        _ondocumentmousedown: function(B) {
            if (this.doingLayout)
                return;
            for (var $ = 0, A = this.regions.length; $ < A; $++) {
                var _ = this.regions[$];
                if (!_._Expanded)
                    continue;if (siisAncestor(_._el, B.target) || siisAncestor(_._proxy, B.target))
                    ;
                else
                    this._expandLayout(_)
            }
        },
        getAttrs: function(A) {
            var H = si.Layout["superclass"]["getAttrs"]["call"](this, A)
              , G = jQuery(A)
              , E = parseInt(G.attr("splitSize"));
            if (!isNaN(E))
                H.splitSize = E;
            var F = []
              , D = si["getChildNodes"](A);
            for (var _ = 0, C = D.length; _ < C; _++) {
                var B = D[_]
                  , $ = {};
                F.push($);
                $.cls = B.className;
                $.style = B.style.cssText;
                si["_ParseString"](B, $, ["region", "title", "iconCls", "iconStyle", "cls", "headerCls", "headerStyle", "bodyCls", "bodyStyle"]);
                si["_ParseBool"](B, $, ["allowResize", "visible", "showCloseButton", "showCollapseButton", "showSplit", "showHeader", "expanded", "showSplitIcon"]);
                si["_ParseInt"](B, $, ["splitSize", "collapseSize", "width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight"]);
                $.bodyParent = B
            }
            H.regions = F;
            return H
        }
    });
    siRegClass(si.Layout, "layout");
    si.Box = function() {
        si.Box["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Box, si.Container, {
        style: "",
        borderStyle: "",
        bodyStyle: "",
        uiCls: "si-box"
    });
    siBoxPrototype = si.Box["prototype"];
    siBoxPrototype["getAttrs"] = function($) {
    var _ = si.Box["superclass"]["getAttrs"]["call"](this, $);
    _._bodyParent = $;
    si["_ParseString"]($, _, ["bodyStyle"]);
    return _
};
    siBoxPrototype["setBodyStyle"] = function($) {
    sisetstyle(this.bodyEl, $);
    this["doLayout"]()
};
    siBoxPrototype["set_bodyParent"] = function($) {
    if (!$)
        return;
    var _ = this.bodyEl
      , A = $;
    while (A.firstChild)
        _.appendChild(A.firstChild);
    this["doLayout"]()
};
    siBoxPrototype["setBody"] = function(_) {
    if (!_)
        return;
    if (!si.isArray(_))
        _ = [_];
    for (var $ = 0, A = _.length; $ < A; $++)
        si.append(this.bodyEl, _[$]);
    si.analyze(this.bodyEl);
    this["doLayout"]()
};
    siBoxPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    var C = this["isAutoHeight"]()
      , E = this["isAutoWidth"]()
      , B = sigetpaddings(this.bodyEl)
      , D = sigetmargins(this.bodyEl);
    if (!C) {
        var A = this["getHeight"](true);
        if (jQuery.boxModel)
            A = A - B.top - B.bottom;
        A = A - D.top - D.bottom;
        if (A < 0)
            A = 0;
        this.bodyEl.style.height = A + "px"
    } else
        this.bodyEl.style.height = "";
    var $ = this["getWidth"](true)
      , _ = $;
    $ = $ - D.left - D.right;
    if (jQuery.boxModel)
        $ = $ - B.left - B.right;
    if ($ < 0)
        $ = 0;
    this.bodyEl.style.width = $ + "px";
    si.layout(this.borderEl);
    this["fire"]("layout")
};
    siBoxPrototype["_initEvents"] = function() {};
    siBoxPrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-box";
    this.el.innerHTML = "<div class=\"si-box-border\"></div>";
    this.bodyEl = this.borderEl = this.el.firstChild;
    this.contentEl = this.bodyEl
};
    siRegClass(si.Box, "box");
    si.Include = function() {
        si.Include["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Include, si.Control, {
        url: "",
        uiCls: "si-include"
    });
    siIncludePrototype = si.Include["prototype"];
    siIncludePrototype["getAttrs"] = function($) {
    var _ = si.Include["superclass"]["getAttrs"]["call"](this, $);
    si["_ParseString"]($, _, ["url"]);
    return _
};
    siIncludePrototype["getUrl"] = function($) {
    return this.url
};
    siIncludePrototype["setUrl"] = function($) {
    this.url = $;
    si["update"]({
        url: this.url,
        el: this.el,
        async: this.async
    });
    this["doLayout"]()
};
    siIncludePrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    var A = this.el.childNodes;
    if (A)
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            si.layout(_)
        }
};
    siIncludePrototype["_initEvents"] = function() {};
    siIncludePrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-include"
};
    siRegClass(si.Include, "include");
    si.Tabs = function() {
        this.tabInit();
        si.Tabs["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Tabs, si.Control, {
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
        hoverCls: "si-tab-hover",
        activeCls: "si-tab-active",
        uiCls: "si-tabs",
        _startId: 1,
        _maskDelay: 180,
        hoverTab: null 
    });
    siTabsPrototype = si.Tabs["prototype"];
    siTabsPrototype["getAttrs"] = function(el) {
    var attrs = si.Tabs["superclass"]["getAttrs"]["call"](this, el);
    si["_ParseString"](el, attrs, ["tabAlign", "tabPosition", "bodyStyle", "onactivechanged", "onbeforeactivechanged", "url", "ontabload", "ontabdestroy", "onbeforecloseclick", "oncloseclick", "titleField", "urlField", "nameField", "loadingMsg"]);
    si["_ParseBool"](el, attrs, ["allowAnim", "showBody", "maskOnLoad", "plain"]);
    si["_ParseInt"](el, attrs, ["activeIndex"]);
    var tabs = []
      , nodes = si["getChildNodes"](el);
    for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i]
          , o = {};
        tabs.push(o);
        o.style = node.style.cssText;
        si["_ParseString"](node, o, ["name", "title", "url", "cls", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle", "onload", "ondestroy", "data-options"]);
        si["_ParseBool"](node, o, ["newLine", "visible", "enabled", "showCloseButton", "refreshOnClick"]);
        o.bodyParent = node;
        var options = o["data-options"];
        if (options) {
            options = eval("(" + options + ")");
            if (options)
                si.copyTo(o, options)
        }
    }
    attrs.tabs = tabs;
    return attrs
};
    siTabsPrototype["onActiveChanged"] = function(_, $) {
    this["on"]("activechanged", _, $)
};
    siTabsPrototype["onCloseClick"] = function(_, $) {
    	this["on"]("closeclick", _, $)
	};
    siTabsPrototype["onBeforeCloseClick"] = function(_, $) {
    	this["on"]("beforecloseclick", _, $)
	};
    siTabsPrototype._preTabCloseClick = function(_, $) {
    var C = {
        tab: _,
        index: this.tabs["indexOf"](_),
        name: _.name.toLowerCase(),
        htmlEvent: $,
        cancel: false
    };
    this["fire"]("beforecloseclick", C);
    if (C.cancel == true)
        return;
    try {
        if (_.iframeEl && _.iframeEl.contentWindow) {
            var A = true;
            if (_.iframeEl.contentWindow.CloseWindow)
                A = _.iframeEl.contentWindow.CloseWindow("close");
            else if (_.iframeEl.contentWindow.CloseOwnerWindow)
                A = _.iframeEl.contentWindow.CloseOwnerWindow("close");
            if (A === false)
                C.cancel = true
        }
    } catch (B) {}
    if (C.cancel == true)
        return;
    _.removeAction = "close";
    this["removeTab"](_);
    this["fire"]("closeclick", C)
};
    siTabsPrototype._preRightLayout = function() {
    this._preLeftLayout();
    siremoveclass(this._firstTdEl, "si-tabs-header");
    siremoveclass(this._thirdTdEl, "si-tabs-header");
    si.append(this._thirdTdEl, this._firstTdEl.firstChild);
    this.headerEl = this._thirdTdEl
};
    siTabsPrototype._preLeftLayout = function() {
    var J = "<table cellspacing=\"0\" cellpadding=\"0\"><tr>"
      , B = this["getTabRows"]();
    for (var H = 0, A = B.length; H < A; H++) {
        var F = B[H]
          , C = "";
        if (A > 1 && H != A - 1)
            C = "si-tabs-header2";
        J += "<td class=\"" + C + "\"><table class=\"si-tabs-header\" cellspacing=\"0\" cellpadding=\"0\">";
        J += "<tr ><td class=\"si-tabs-space si-tabs-firstSpace\" ><div></div></td></tr>";
        for (var G = 0, D = F.length; G < D; G++) {
            var I = F[G]
              , E = this.getTabsId(I);
            if (!I.visible)
                continue;var $ = this.tabs["indexOf"](I)
              , C = I.headerCls || "";
            if (I.enabled == false)
                C += " si-disabled";
            J += "<tr><td id=\"" + E + "\" index=\"" + $ + "\"  class=\"si-tab " + C + "\" style=\"" + I.headerStyle + "\">";
            if (I.iconCls || I["iconStyle"])
                J += "<span class=\"si-tab-icon " + I.iconCls + "\" style=\"" + I["iconStyle"] + "\"></span>";
            J += "<span class=\"si-tab-text\">" + I.title + "</span>";
            if (I["showCloseButton"]) {
                var _ = "";
                if (I.enabled)
                    _ = "onmouseover=\"siaddclass(this,'si-tab-close-hover')\" onmouseout=\"siremoveclass(this,'si-tab-close-hover')\"";
                J += "<span class=\"si-tab-close\" " + _ + "></span>"
            }
            J += "</td></tr>";
            if (G != D - 1)
                J += "<tr><td class=\"si-tabs-space2\"><div></div></td></tr>"
        }
        J += "<tr ><td class=\"si-tabs-space si-tabs-lastSpace\" ><div></div></td></tr>";
        J += "</table></td>"
    }
    J += "</tr ></table>";
    this._clearTabsHeader();
    siaddclass(this._firstTdEl, "si-tabs-header");
    si.append(this._firstTdEl, J);
    this.headerEl = this._firstTdEl
};
    siTabsPrototype._preBottomLayout = function() {
	    this._preTopLayout();
	    var $ = this._secondTdEl;
	    si.append($, $.firstChild);
	    this.headerEl = $.lastChild
	};
    siTabsPrototype._preTopLayout = function() {
    var L = this["tabPosition"] == "top"
      , O = "";
    if (L) {
        O += "<div class=\"si-tabs-scrollCt\">";
        O += "<a class=\"si-tabs-leftButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a><a class=\"si-tabs-rightButton\" href=\"javascript:void(0)\" hideFocus onclick=\"return false\"></a>"
    }
    O += "<div class=\"si-tabs-headers\">";
    var B = this["getTabRows"]();
    for (var M = 0, A = B.length; M < A; M++) {
        var I = B[M]
          , E = "";
        O += "<table class=\"si-tabs-header\" cellspacing=\"0\" cellpadding=\"0\"><tr><td class=\"si-tabs-space si-tabs-firstSpace\"><div></div></td>";
        for (var J = 0, F = I.length; J < F; J++) {
            var N = I[J]
              , G = this.getTabsId(N);
            if (!N.visible)
                continue;var $ = this.tabs["indexOf"](N)
              , E = N.headerCls || "";
            if (N.enabled == false)
                E += " si-disabled";
            O += "<td id=\"" + G + "\" index=\"" + $ + "\"  class=\"si-tab " + E + "\" style=\"" + N.headerStyle + "\">";
            if (N.iconCls || N["iconStyle"])
                O += "<span class=\"si-tab-icon " + N.iconCls + "\" style=\"" + N["iconStyle"] + "\"></span>";
            O += "<span class=\"si-tab-text\">" + N.title + "</span>";
            if (N["showCloseButton"]) {
                var _ = "";
                if (N.enabled)
                    _ = "onmouseover=\"siaddclass(this,'si-tab-close-hover')\" onmouseout=\"siremoveclass(this,'si-tab-close-hover')\"";
                O += "<span class=\"si-tab-close\" " + _ + "></span>"
            }
            O += "</td>";
            if (J != F - 1)
                O += "<td class=\"si-tabs-space2\"><div></div></td>"
        }
        O += "<td class=\"si-tabs-space si-tabs-lastSpace\" ><div></div></td></tr></table>"
    }
    if (L)
        O += "</div>";
    O += "</div>";
    this._clearTabsHeader();
    si.prepend(this._secondTdEl, O);
    var H = this._secondTdEl;
    this.headerEl = H.firstChild.lastChild;
    if (L) {
        this._headerParentFirstChild = this.headerEl.parentNode.firstChild;
        this._headerParentSecondChild = this.headerEl.parentNode.childNodes[1]
    }
    switch (this["tabAlign"]) {
    case "center":
        var K = this.headerEl.childNodes;
        for (J = 0,
        F = K.length; J < F; J++) {
            var C = K[J]
              , D = C.getElementsByTagName("td");
            D[0].style.width = "50%";
            D[D.length - 1].style.width = "50%"
        }
        break;
    case "right":
        K = this.headerEl.childNodes;
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
        K = this.headerEl.childNodes;
        for (J = 0,
        F = K.length; J < F; J++) {
            C = K[J],
            D = C.getElementsByTagName("td");
            D[D.length - 1].style.width = "100%"
        }
        break
    }
};
    siTabsPrototype._onOutComponentDocumentMouseUp = function($) {
	    clearInterval(this._tempInsideTimer);
	    this._tempInsideTimer = null ;
	    siUnBindEvent(document, "mouseup", this._onOutComponentDocumentMouseUp, this)
	};
    siTabsPrototype._onmousedown = function(B) {
	    clearInterval(this._tempInsideTimer);
	    if (this["tabPosition"] == "top") {
	        var _ = this
	          , A = 0
	          , $ = 10;
	        if (B.target == this._headerParentFirstChild)
	            this._tempInsideTimer = setInterval(function() {
	                _.headerEl.scrollLeft -= $;
	                A++;
	                if (A > 5)
	                    $ = 18;
	                if (A > 10)
	                    $ = 25;
	                _._beforeTabTopLayout()
	            }
	            , 25);
	        else if (B.target == this._headerParentSecondChild)
	            this._tempInsideTimer = setInterval(function() {
	                _.headerEl.scrollLeft += $;
	                A++;
	                if (A > 5)
	                    $ = 18;
	                if (A > 10)
	                    $ = 25;
	                _._beforeTabTopLayout()
	            }
	            , 25);
	        siBindEvent(document, "mouseup", this._onOutComponentDocumentMouseUp, this)
	    }
	};
    siTabsPrototype._onmouseout = function(_) {
	    if (this.hoverTab) {
	        var $ = this["getTabEl"](this.hoverTab);
	        siremoveclass($, this.hoverCls)
	    }
	    this.hoverTab = null 
	};
    siTabsPrototype._onmouseover = function(A) {
	    var $ = this._findTabByEvent(A);
	    if ($ && $.enabled) {
	        var _ = this["getTabEl"]($);
	        siaddclass(_, this.hoverCls);
	        this.hoverTab = $
	    }
	};
    siTabsPrototype._onclick = function(A) {
	    var $ = this._findTabByEvent(A);
	    if (!$)
	        return;
	    if ($.enabled) {
	        var _ = this;
	        setTimeout(function() {
	            if (sifindAncestor(A.target, "si-tab-close"))
	                _._preTabCloseClick($, A);
	            else {
	                var B = $.loadedUrl;
	                _._beforeActiveChanged($);
	                if ($["refreshOnClick"] && $.url == B)
	                    _["reloadTab"]($)
	            }
	        }
	        , 10)
	    }
	};
    siTabsPrototype._findTabByEvent = function(B) {
	    var A = sifindAncestor(B.target, "si-tab");
	    if (!A)
	        return null ;
	    var _ = A.id.split("$");
	    if (_[0] != this.uid)
	        return null ;
	    var $ = parseInt(jQuery(A).attr("index"));
	    return this["getTab"]($)
	};
    siTabsPrototype["getTabByEvent"] = function($) {
    	return this._findTabByEvent($)
	};
    siTabsPrototype["getPlain"] = function() {
    return this.plain
};
    siTabsPrototype["setPlain"] = function($) {
	    this.plain = $;
	    this["doLayout"]()
	};
    siTabsPrototype["getMaskOnLoad"] = function() {
    	return this.maskOnLoad
	};
    siTabsPrototype["setMaskOnLoad"] =  function($) {
   	 this.maskOnLoad = $
	};
    siTabsPrototype["getBodyStyle"] = function() {
    return this.bodyStyle
};
    siTabsPrototype["setBodyStyle"] = function($) {
    this.bodyStyle = $;
    sisetstyle(this.bodyEl, $);
    this["doLayout"]()
};
    siTabsPrototype["getShowBody"] = function() {
    return this["showBody"]
};
    siTabsPrototype["setShowBody"] = function($) {
    if (this["showBody"] != $) {
        this["showBody"] = $;
        this["doLayout"]()
    }
};
    siTabsPrototype._beforeActiveChanged =  function(_) {
    _ = this["getTab"](_);
    if (!_)
        return;
    var $ = this.tabs["indexOf"](_);
    if (this.activeIndex == $)
        return;
    var A = {
        tab: _,
        index: $,
        name: _.name,
        cancel: false
    };
    this["fire"]("BeforeActiveChanged", A);
    if (A.cancel == false)
        this["activeTab"](_)
};
    siTabsPrototype["getActiveTab"] = function() {
    return this["getTab"](this.activeIndex)
};
    siTabsPrototype["activeTab"] = function($) {
    this["setActiveIndex"]($)
};
    siTabsPrototype["getActiveIndex"] = function() {
    return this.activeIndex
};
    siTabsPrototype["setActiveIndex"] = function($, I) {
    var M = this["getTab"]($)
      , C = this["getTab"](this.activeIndex)
      , N = M != C
      , K = this["getTabBodyEl"](this.activeIndex);
    if (K)
        K.style.display = "none";
    if (M)
        this.activeIndex = this.tabs["indexOf"](M);
    else
        this.activeIndex = -1;
    K = this["getTabBodyEl"](this.activeIndex);
    if (K)
        K.style.display = "";
    K = this["getTabEl"](C);
    if (K)
        siremoveclass(K, this.activeCls);
    K = this["getTabEl"](M);
    if (K)
        siaddclass(K, this.activeCls);
    if (K && N) {
        if (this["tabPosition"] == "bottom") {
            var A = sifindAncestor(K, "si-tabs-header");
            if (A)
                jQuery(this.headerEl).prepend(A)
        } else if (this["tabPosition"] == "left") {
            var G = sifindAncestor(K, "si-tabs-header").parentNode;
            if (G)
                G.parentNode.appendChild(G)
        } else if (this["tabPosition"] == "right") {
            G = sifindAncestor(K, "si-tabs-header").parentNode;
            if (G)
                jQuery(G.parentNode).prepend(G)
        } else {
            A = sifindAncestor(K, "si-tabs-header");
            if (A)
                this.headerEl.appendChild(A)
        }
        var B = this.headerEl.scrollLeft;
        this["doLayout"]();
        var _ = this["getTabRows"]();
        if (_.length > 1)
            ;
        else {
            if (this["tabPosition"] == "top") {
                this.headerEl.scrollLeft = B;
                var O = this["getTabEl"](this.activeIndex);
                if (O) {
                    var J = this
                      , L = sigetbox(O)
                      , F = sigetbox(J.headerEl);
                    if (L.x < F.x)
                        J.headerEl.scrollLeft -= (F.x - L.x);
                    else if (L.right > F.right)
                        J.headerEl.scrollLeft += (L.right - F.right)
                }
            }
            this._beforeTabTopLayout()
        }
        for (var H = 0, E = this.tabs.length; H < E; H++) {
            O = this["getTabEl"](this.tabs[H]);
            if (O)
                siremoveclass(O, this.hoverCls)
        }
    }
    var D = this;
    if (N) {
        var P = {
            tab: M,
            index: this.tabs["indexOf"](M),
            name: M ? M.name : ""
        };
        setTimeout(function() {
            D["fire"]("ActiveChanged", P)
        }
        , 1)
    }
    this["_cancelLoadTabs"](M);
    if (I !== false)
        if (M && M.url && !M.loadedUrl) {
            D = this;
            D["loadTab"](M.url, M)
        }
    if (D["canLayout"]()) {
        try {
            si.layoutIFrames(D.el)
        } catch (P) {}
    }
};
    siTabsPrototype._beforeTabTopLayout = function() {
    if (this["tabPosition"] == "top") {
        siremoveclass(this._headerParentFirstChild, "si-disabled");
        siremoveclass(this._headerParentSecondChild, "si-disabled");
        if (this.headerEl.scrollLeft == 0)
            siaddclass(this._headerParentFirstChild, "si-disabled");
        var _ = this["getTabEl"](this.tabs.length - 1);
        if (_) {
            var $ = sigetbox(_)
              , A = sigetbox(this.headerEl);
            if ($.right <= A.right)
                siaddclass(this._headerParentSecondChild, "si-disabled")
        }
    }
};
    siTabsPrototype.getTabsBodyId = function($) {
    return this.uid + "$body$" + $._id
};
    siTabsPrototype.getTabsId = function($) {
    return this.uid + "$" + $._id
};
    siTabsPrototype["getTabIFrameEl"] = function($) {
    var _ = this["getTab"]($);
    if (!_)
        return null ;
    return _.iframeEl
};
    siTabsPrototype["getTabBodyEl"] = function($) {
    var C = this["getTab"]($);
    if (!C)
        return null ;
    var E = this.getTabsBodyId(C)
      , B = this.bodyEl.childNodes;
    for (var _ = 0, D = B.length; _ < D; _++) {
        var A = B[_];
        if (A.id == E)
            return A
    }
    return null 
};
    siTabsPrototype["getTabEl"] = function($) {
    var C = this["getTab"]($);
    if (!C)
        return null ;
    var E = this.getTabsId(C)
      , B = this.el.getElementsByTagName("*");
    for (var _ = 0, D = B.length; _ < D; _++) {
        var A = B[_];
        if (A.id == E)
            return A
    }
    return null 
};
    siTabsPrototype["getBodyEl"] = function() {
    return this.bodyEl
};
    siTabsPrototype["getHeaderEl"] = function() {
    return this.headerEl
};
    siTabsPrototype["getTab"] = function($) {
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
};
    siTabsPrototype["setTabPosition"] = function($) {
    this["tabPosition"] = $;
    this["doUpdate"]()
};
    siTabsPrototype["setTabAlign"] = function($) {
    this["tabAlign"] = $;
    this["doUpdate"]()
};
    siTabsPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    this["_handleIFrameOverflow"]();
    var R = this["isAutoHeight"]();
    C = this["getHeight"](true);
    w = this["getWidth"](true);
    var G = C
      , O = w;
    if (this["showBody"])
        this.bodyEl.style.display = "";
    else
        this.bodyEl.style.display = "none";
    if (this.plain)
        siaddclass(this.el, "si-tabs-plain");
    else
        siremoveclass(this.el, "si-tabs-plain");
    if (!R && this["showBody"]) {
        var Q = jQuery(this.headerEl).outerHeight()
          , $ = jQuery(this.headerEl).outerWidth();
        if (this["tabPosition"] == "top")
            Q = jQuery(this.headerEl.parentNode).outerHeight();
        if (this["tabPosition"] == "left" || this["tabPosition"] == "right")
            w = w - $;
        else
            C = C - Q;
        if (jQuery.boxModel) {
            var D = sigetpaddings(this.bodyEl)
              , S = sigetborders(this.bodyEl);
            C = C - D.top - D.bottom - S.top - S.bottom;
            w = w - D.left - D.right - S.left - S.right
        }
        margin = sigetmargins(this.bodyEl);
        C = C - margin.top - margin.bottom;
        w = w - margin.left - margin.right;
        if (C < 0)
            C = 0;
        if (w < 0)
            w = 0;
        this.bodyEl.style.width = w + "px";
        this.bodyEl.style.height = C + "px";
        if (this["tabPosition"] == "left" || this["tabPosition"] == "right") {
            var I = this.headerEl.getElementsByTagName("tr")[0]
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
            switch (this["tabAlign"]) {
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
        this.bodyEl.style.width = "auto";
        this.bodyEl.style.height = "auto"
    }
    var A = this["getTabBodyEl"](this.activeIndex);
    if (A)
        if (!R && this["showBody"]) {
            var C = sigetheight(this.bodyEl, true);
            if (jQuery.boxModel) {
                D = sigetpaddings(A),
                S = sigetborders(A);
                C = C - D.top - D.bottom - S.top - S.bottom
            }
            A.style.height = C + "px"
        } else
            A.style.height = "auto";
    switch (this["tabPosition"]) {
    case "bottom":
        var M = this.headerEl.childNodes;
        for (K = 0,
        H = M.length; K < H; K++) {
            B = M[K];
            siremoveclass(B, "si-tabs-header2");
            if (H > 1 && K != 0)
                siaddclass(B, "si-tabs-header2")
        }
        break;
    case "left":
        E = this.headerEl.firstChild.rows[0].cells;
        for (K = 0,
        H = E.length; K < H; K++) {
            var J = E[K];
            siremoveclass(J, "si-tabs-header2");
            if (H > 1 && K == 0)
                siaddclass(J, "si-tabs-header2")
        }
        break;
    case "right":
        E = this.headerEl.firstChild.rows[0].cells;
        for (K = 0,
        H = E.length; K < H; K++) {
            J = E[K];
            siremoveclass(J, "si-tabs-header2");
            if (H > 1 && K != 0)
                siaddclass(J, "si-tabs-header2")
        }
        break;
    default:
        M = this.headerEl.childNodes;
        for (K = 0,
        H = M.length; K < H; K++) {
            B = M[K];
            siremoveclass(B, "si-tabs-header2");
            if (H > 1 && K == 0)
                siaddclass(B, "si-tabs-header2")
        }
        break
    }
    siremoveclass(this.el, "si-tabs-scroll");
    if (this["tabPosition"] == "top") {
        sisetwidth(this.headerEl, O);
        if (this.headerEl.offsetWidth < this.headerEl.scrollWidth) {
            sisetwidth(this.headerEl, O - 60);
            siaddclass(this.el, "si-tabs-scroll")
        }
        if (isIE && !jQuery.boxModel)
            this._headerParentFirstChild.style.left = "-26px"
    }
    this._beforeTabTopLayout();
    si.layout(this.bodyEl);
    this["fire"]("layout")
};
    siTabsPrototype["_handleIFrameOverflow"] = function() {
    var _ = this["getTabBodyEl"](this.activeIndex);
    if (_) {
        siremoveclass(_, "si-tabs-hideOverflow");
        var $ = si["getChildNodes"](_)[0];
        if ($ && $.tagName && $.tagName.toUpperCase() == "IFRAME")
            siaddclass(_, "si-tabs-hideOverflow")
    }
};
    siTabsPrototype["doUpdate"] = function() {
    if (this.allowUpdate === false)
        return;
    siremoveclass(this.el, "si-tabs-position-left");
    siremoveclass(this.el, "si-tabs-position-top");
    siremoveclass(this.el, "si-tabs-position-right");
    siremoveclass(this.el, "si-tabs-position-bottom");
    if (this["tabPosition"] == "bottom") {
        siaddclass(this.el, "si-tabs-position-bottom");
        this._preBottomLayout()
    } else if (this["tabPosition"] == "right") {
        siaddclass(this.el, "si-tabs-position-right");
        this._preRightLayout()
    } else if (this["tabPosition"] == "left") {
        siaddclass(this.el, "si-tabs-position-left");
        this._preLeftLayout()
    } else {
        siaddclass(this.el, "si-tabs-position-top");
        this._preTopLayout()
    }
    this["doLayout"]();
    this["setActiveIndex"](this.activeIndex, false)
};
    siTabsPrototype["getTabRows"] =  function() {
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
};
    siTabsPrototype["reloadTab"] = function($) {
    $ = this["getTab"]($);
    if (!$)
        $ = this["getActiveTab"]();
    if (!$)
        return;
    this["loadTab"]($.url, $)
};
    siTabsPrototype["loadTab"] = function(B, A, _, D) {
	    if (!B)
	        return;
	    A = this["getTab"](A);
	    if (!A)
	        A = this["getActiveTab"]();
	    if (!A)
	        return;
	    var $ = this["getTabBodyEl"](A);
	    if ($)
	        siaddclass($, "si-tabs-hideOverflow");
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
	        C._beforeTabLoad(A)
	    }
	    , 1)
	};
    siTabsPrototype._beforeTabDestory = function($) {
	    var _ = {
	        sender: this,
	        tab: $,
	        index: this.tabs["indexOf"]($),
	        name: $.name,
	        iframe: $.iframeEl,
	        autoActive: true
	    };
	    this["fire"]("tabdestroy", _);
	    return _.autoActive
	};
    siTabsPrototype._beforeTabLoad = function(A) {
    if (!A)
        return;
    var B = this["getTabBodyEl"](A);
    if (!B)
        return;
    this["_cancelLoadTabs"]();
    this._clearInnerIframeEl(A, true);
    this._loading = true;
    A._loading = true;
    this["unmask"]();
    if (this.maskOnLoad)
        this["loading"]();
    var C = new Date()
      , $ = this;
    $.isLoading = true;
    var _ = si.createIFrame(A.url, function(_, D) {
        try {
            A.iframeEl.contentWindow.Owner = window;
            A.iframeEl.contentWindow.CloseOwnerWindow = function(_) {
                A.removeAction = _;
                var B = true;
                if (A.ondestroy) {
                    if (typeof A.ondestroy == "string")
                        A.ondestroy = window[A.ondestroy];
                    if (A.ondestroy)
                        B = A.ondestroy["call"](this, E)
                }
                if (B === false)
                    return false;
                setTimeout(function() {
                    $["removeTab"](A)
                }
                , 10)
            }
        } catch (E) {}
        if (A._loading != true)
            return;
        var B = (C - new Date()) + $._maskDelay;
        A._loading = false;
        A.loadedUrl = A.url;
        if (B < 0)
            B = 0;
        setTimeout(function() {
            $["unmask"]();
            $["doLayout"]();
            $.isLoading = false
        }
        , B);
        if (D) {
            var E = {
                sender: $,
                tab: A,
                index: $.tabs["indexOf"](A),
                name: A.name,
                iframe: A.iframeEl
            };
            if (A.onload) {
                if (typeof A.onload == "string")
                    A.onload = window[A.onload];
                if (A.onload)
                    A.onload["call"]($, E)
            }
        }
        $["fire"]("tabload", E)
    }
    );
    setTimeout(function() {
        if (A.iframeEl == _)
            B.appendChild(_)
    }
    , 1);
    A.iframeEl = _
};
    siTabsPrototype["_cancelLoadTabs"] = function(B) {
	    var _ = this.tabs;
	    for (var $ = 0, C = _.length; $ < C; $++) {
	        var A = _[$];
	        if (A != B)
	            if (A._loading && A.iframeEl) {
	                A._loading = false;
	                this._clearInnerIframeEl(A, true)
	            }
	    }
	    this._loading = false;
	    this["unmask"]()
	};
    siTabsPrototype._clearInnerIframeEl = function(C, A) {
	    if (C.iframeEl && C.iframeEl.parentNode) {
	        C.iframeEl.src = "";
	        try {
	            iframe.contentWindow.document.write("");
	            iframe.contentWindow.document.close()
	        } catch (F) {}
	        if (C.iframeEl._ondestroy)
	            C.iframeEl._ondestroy();
	        try {
	            C.iframeEl.parentNode.removeChild(C.iframeEl);
	            C.iframeEl["removeNode"](true)
	        } catch (F) {}
	    }
	    C.iframeEl = null ;
	    C.loadedUrl = null ;
	    if (A === true) {
	        var D = this["getTabBodyEl"](C);
	        if (D) {
	            var B = si["getChildNodes"](D, true);
	            for (var _ = 0, E = B.length; _ < E; _++) {
	                var $ = B[_];
	                if ($ && $.parentNode)
	                    $.parentNode.removeChild($)
	            }
	        }
	    }
	};
    siTabsPrototype._getBodyEl = function() {
    return this.bodyEl
};
    siTabsPrototype["updateTab"] = function($, _) {
	    $ = this["getTab"]($);
	    if (!$)
	        return;
	    si.copyTo($, _);
	    this["doUpdate"]()
	};
    siTabsPrototype["moveTab"] = function(A, $) {
	    A = this["getTab"](A);
	    if (!A)
	        return;
	    var _ = this.tabs[$];
	    if (!_ || _ == A)
	        return;
	    this.tabs.remove(A);
	    var $ = this.tabs["indexOf"](_);
	    this.tabs.insert($, A);
	    this["doUpdate"]()
	};
    siTabsPrototype["removeTab"] = function(C) {
	    C = this["getTab"](C);
	    if (!C || this.tabs["indexOf"](C) == -1)
	        return;
	    var D = this["getActiveTab"]()
	      , B = C == D
	      , A = this._beforeTabDestory(C);
	    this.tabs.remove(C);
	    this._clearInnerIframeEl(C);
	    var _ = this["getTabBodyEl"](C);
	    if (_)
	        this.bodyEl.removeChild(_);
	    if (A && B) {
	        for (var $ = this.activeIndex; $ >= 0; $--) {
	            var C = this["getTab"]($);
	            if (C && C.enabled && C.visible) {
	                this.activeIndex = $;
	                break
	            }
	        }
	        this["doUpdate"]();
	        this["setActiveIndex"](this.activeIndex);
	        this["fire"]("activechanged")
	    } else {
	        this.activeIndex = this.tabs["indexOf"](D);
	        this["doUpdate"]()
	    }
	    return C
	};
    siTabsPrototype["addTab"] = function(C, $) {
    if (typeof C == "string")
        C = {
            title: C
        };
    C = this["createTab"](C);
    if (!C.name)
        C.name = "";
    if (typeof $ != "number")
        $ = this.tabs.length;
    this.tabs.insert($, C);
    var F = this.getTabsBodyId(C)
      , G = "<div id=\"" + F + "\" class=\"si-tabs-body " + C.bodyCls + "\" style=\"" + C.bodyStyle + ";display:none;\"></div>";
    si.append(this.bodyEl, G);
    var A = this["getTabBodyEl"](C)
      , B = C.body;
    delete C.body;
    if (B) {
        if (!si.isArray(B))
            B = [B];
        for (var _ = 0, E = B.length; _ < E; _++)
            si.append(A, B[_])
    }
    if (C.bodyParent) {
        var D = C.bodyParent;
        while (D.firstChild)
            A.appendChild(D.firstChild)
    }
    delete C.bodyParent;
    if (C.controls) {
        this["setTabControls"](C, C.controls);
        delete C.controls
    }
    this["doUpdate"]();
    return C
};
    siTabsPrototype["removeAll"] = function(A) {
    var E = this["getActiveTab"]();
    if (si.isNull(A))
        A = [];
    if (!si.isArray(A))
        A = [A];
    for (var $ = A.length - 1; $ >= 0; $--) {
        var B = this["getTab"](A[$]);
        if (!B)
            A.removeAt($);
        else
            A[$] = B
    }
    var _ = this.tabs;
    for ($ = _.length - 1; $ >= 0; $--) {
        var D = _[$];
        if (A["indexOf"](D) == -1)
            this["removeTab"](D)
    }
    var C = A[0];
    if (E != this["getActiveTab"]())
        if (C)
            this["activeTab"](C)
};
    siTabsPrototype["getTabs"] = function() {
    return this.tabs
};
    siTabsPrototype["setTabs"] = function(_) {
    if (!si.isArray(_))
        return;
    this["beginUpdate"]();
    this["removeAll"]();
    for (var $ = 0, B = _.length; $ < B; $++) {
        var A = _[$];
        A.title = si._getMap(this.titleField, A);
        A.url = si._getMap(this.urlField, A);
        A.name = si._getMap(this.nameField, A)
    }
    for ($ = 0,
    B = _.length; $ < B; $++)
        this["addTab"](_[$]);
    this["setActiveIndex"](0);
    this["endUpdate"]()
};
    siTabsPrototype["setTabControls"] = function(A, $) {
    var A = this["getTab"](A);
    if (!A)
        return;
    var _ = this["getTabBodyEl"](A);
    __si_setControls($, _, this)
};
    siTabsPrototype["getUrlField"] = function() {
        return this["urlField"]
    };
    siTabsPrototype["setUrlField"] = function($) {
        this["urlField"] = $
    };
    siTabsPrototype["getTitleField"] = function() {
        return this["titleField"]
    };
    siTabsPrototype["setTitleField"] = function($) {
        this["titleField"] = $
    };
    siTabsPrototype["getNameField"] = function() {
        return this.nameField
    };
    siTabsPrototype["setNameField"] = function($) {
        this.nameField = $
    };
    siTabsPrototype["getUrl"] = function() {
    return this.url
};
    siTabsPrototype["setUrl"] = function($) {
    this.url = $;
    this.insideLoad()
};
    siTabsPrototype["load"] = function($) {
    if (typeof $ == "string")
        this["setUrl"]($);
    else
        this["setTabs"]($)
};
    siTabsPrototype.insideLoad = function() {
    var $ = si["getData"](this.url);
    if (this.dataField)
        $ = si._getMap(this.dataField, $);
    if (!$)
        $ = [];
    this["setTabs"]($);
    this["fire"]("load")
};
    siTabsPrototype["createTab"] = function(_) {
    var $ = si.copyTo({
        _id: this._startId++,
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
        _ = si.copyTo(_, $);
        $ = _
    }
    return $
};
    siTabsPrototype.tabInit = function() {
    this.tabs = []
};
    siTabsPrototype["_initEvents"] = function() {
    siEventTimer(function() {
        siBindEvent(this.el, "mousedown", this._onmousedown, this);
        siBindEvent(this.el, "click", this._onclick, this);
        siBindEvent(this.el, "mouseover", this._onmouseover, this);
        siBindEvent(this.el, "mouseout", this._onmouseout, this)
    }
    , this)
};
    siTabsPrototype._clearTabsHeader = function() {
    siremoveclass(this._firstTdEl, "si-tabs-header");
    siremoveclass(this._thirdTdEl, "si-tabs-header");
    this._firstTdEl.innerHTML = "";
    this._thirdTdEl.innerHTML = "";
    si.removeChilds(this._secondTdEl, this.bodyEl)
};
    siTabsPrototype["destroy"] = function($) {
    this.tableEl = this._firstTdEl = this._secondTdEl = this._thirdTdEl = null ;
    this.bodyEl = this.borderEl = this.headerEl = null ;
    this.tabs = [];
    si.Tabs["superclass"]["destroy"]["call"](this, $)
};
    siTabsPrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-tabs";
    var _ = "<table class=\"si-tabs-table\" cellspacing=\"0\" cellpadding=\"0\"><tr style=\"width:100%;\">" + "<td></td>" + "<td style=\"text-align:left;vertical-align:top;width:100%;\"><div class=\"si-tabs-bodys\"></div></td>" + "<td></td>" + "</tr></table>";
    this.el.innerHTML = _;
    this.tableEl = this.el.firstChild;
    var $ = this.el.getElementsByTagName("td");
    this._firstTdEl = $[0];
    this._secondTdEl = $[1];
    this._thirdTdEl = $[2];
    this.bodyEl = this._secondTdEl.firstChild;
    this.borderEl = this.bodyEl;
    this["doUpdate"]()
};
    siTabsPrototype["set"] = function($) {
    if (typeof $ == "string")
        return this;
    var B = this._componentLock;
    this._componentLock = false;
    var _ = $.activeIndex;
    delete $.activeIndex;
    var A = $.url;
    delete $.url;
    si.Tabs["superclass"]["set"]["call"](this, $);
    if (A)
        this["setUrl"](A);
    if (si.isNumber(_))
        this["setActiveIndex"](_);
    this._componentLock = B;
    this["doLayout"]();
    return this
};
    siRegClass(si.Tabs, "tabs");
    si.Menu = function() {
        this.items = [];
        si.Menu["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Menu, si.Control);
    si.copyTo(si.Menu.prototype, base_prototype);
    var base_prototype_hide = base_prototype["hide"];
    si.copyTo(si.Menu.prototype, {
        height: "auto",
        width: "auto",
        minWidth: 140,
        vertical: true,
        allowSelectItem: false,
        selectedItem: null ,
        itemSelectedCls: "si-menuitem-selected",
        textField: "text",
        resultAsTree: false,
        idField: "id",
        parentField: "pid",
        itemsField: "children",
        showNavArrow: true,
        _clearBorder: false,
        showAction: "none",
        hideAction: "outerclick",
        uiCls: "si-menu",
        _disableContextMenu: false,
        url: "",
        hideOnClick: true
    });
    siMenuPrototype = si.Menu["prototype"];
    siMenuPrototype["getAttrs"] = function(A) {
    var H = si.Menu["superclass"]["getAttrs"]["call"](this, A)
      , G = jQuery(A);
    si["_ParseString"](A, H, ["popupEl", "popupCls", "showAction", "hideAction", "xAlign", "yAlign", "modalStyle", "onbeforeopen", "open", "onbeforeclose", "onclose", "url", "onitemclick", "onitemselect", "textField", "idField", "parentField"]);
    si["_ParseBool"](A, H, ["resultAsTree", "hideOnClick", "showNavArrow"]);
    var D = si["getChildNodes"](A);
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
    var D = si["getChildNodes"](A)
      , _ = this["parseItems"](D);
    if (_.length > 0)
        H.items = _;
    var E = G.attr("vertical");
    if (E)
        H.vertical = E == "true" ? true : false;
    var F = G.attr("allowSelectItem");
    if (F)
        H.allowSelectItem = F == "true" ? true : false;
    return H
};
    siMenuPrototype["parseItems"] = function(G) {
    var C = [];
    for (var _ = 0, F = G.length; _ < F; _++) {
        var B = G[_];
        if (B.className == "separator") {
            C["add"]("-");
            continue
        }
        var E = si["getChildNodes"](B)
          , A = E[0]
          , D = E[1]
          , $ = new si.MenuItem();
        if (!D) {
            si.applyTo["call"]($, B);
            C["add"]($);
            continue
        }
        si.applyTo["call"]($, A);
        $["render"](document.body);
        var H = new si.Menu();
        si.applyTo["call"](H, D);
        $["setMenu"](H);
        H["render"](document.body);
        C["add"]($)
    }
    return C.clone()
};
    siMenuPrototype["setToolbar"] = function($) {
   		__si_setControls($, this.toolbarEl, this)
	};
    siMenuPrototype["_startScrollMove"] = function($) {
	    clearInterval(this._tempInsideTimer);
	    var A = function() {
	        clearInterval(_._tempInsideTimer);
	        siUnBindEvent(document, "mouseup", A)
	    }
	    ;
	    siBindEvent(document, "mouseup", A);
	    var _ = this;
	    this._tempInsideTimer = setInterval(function() {
	        _.contentEl.scrollTop += $
	    }
	    , 50)
	};
    siMenuPrototype["__OnBottomMouseDown"] = function($) {
    this["_startScrollMove"](20)
};
    siMenuPrototype["__OnTopMouseDown"] = function($) {
    this["_startScrollMove"](-20)
};
    siMenuPrototype["onItemSelect"] = function(_, $) {
    	this["on"]("itemselect", _, $)
	};
    siMenuPrototype["onItemClick"] =  function(_, $) {
    	this["on"]("itemclick", _, $)
    };
    siMenuPrototype["_OnItemSelect"] = function($) {
	    if (this.selectedItem)
	        this.selectedItem["removeCls"](this.itemSelectedCls);
	    this.selectedItem = $;
	    if (this.selectedItem)
	        this.selectedItem["addCls"](this.itemSelectedCls);
	    var _ = {
	        item: this.selectedItem
	    };
	    this["fire"]("itemselect", _)
	};
    siMenuPrototype["_OnItemClick"] = function($, _) {
    var A = {
        item: $,
        isLeaf: !$.menu,
        htmlEvent: _
    };
    if (this.hideOnClick)
        if (this.isPopup)
            this["hide"]();
        else
            this["hideItems"]();
    if (this.allowSelectItem && this.selectedItem != $)
        this["setSelectedItem"]($);
    this["fire"]("itemclick", A);
    if (this.ownerItem)
        ;
	};
    siMenuPrototype["getHideOnClick"] = function() {
    return this.hideOnClick
};
    siMenuPrototype["setHideOnClick"] = function($) {
    this.hideOnClick = $
};
    siMenuPrototype["getUrl"] = function() {
    return this.url
};
    siMenuPrototype["setUrl"] = function($) {
    this.url = $;
    this.insideLoad()
};
    siMenuPrototype["load"] = function($) {
    if (typeof $ == "string")
        this["setUrl"]($);
    else
        this["setItems"]($)
};
    siMenuPrototype["loadList"] = function(_, E, B) {
    if (!_)
        return;
    E = E || this["idField"];
    B = B || this["parentField"];
    for (var A = 0, D = _.length; A < D; A++) {
        var $ = _[A];
        $.text = si._getMap(this.textField, $);
        if (si.isNull($.text))
            $.text = ""
    }
    var C = si.arrayToTree(_, this.itemsField, E, B);
    this["load"](C)
};
    siMenuPrototype.insideLoad = function() {
    var B = si["getData"](this.url);
    if (this.dataField)
        B = si._getMap(this.dataField, B);
    if (!B)
        B = [];
    if (this["resultAsTree"] == false)
        B = si.arrayToTree(B, this.itemsField, this.idField, this["parentField"]);
    var _ = si["treeToArray"](B, this.itemsField, this.idField, this["parentField"]);
    for (var A = 0, D = _.length; A < D; A++) {
        var $ = _[A];
        $.text = si._getMap(this.textField, $);
        if (si.isNull($.text))
            $.text = ""
    }
    var C = new Date();
    this["setItems"](B);
    this["fire"]("load")
};
    siMenuPrototype._setBoxWidthAndHeight = function() {
    if (this.height == "auto") {
        this.el.style.height = "auto";
        this.borderEl.style.height = "auto";
        this.contentEl.style.height = "auto";
        this._topArrowEl.style.display = this._bottomArrowEl.style.display = "none";
        var B = si.getViewportBox()
          , A = sigetbox(this.el);
        this.maxHeight = B.height - 25;
        if (this.ownerItem) {
            var A = sigetbox(this.ownerItem.el)
              , C = A.top
              , _ = B.height - A.bottom
              , $ = C > _ ? C : _;
            $ -= 10;
            this.maxHeight = $
        }
    }
    this.el.style.display = "";
    A = sigetbox(this.el);
    if (A.width > this.maxWidth) {
        sisetwidth(this.el, this.maxWidth);
        A = sigetbox(this.el)
    }
    if (A.height > this.maxHeight) {
        sisetheight(this.el, this.maxHeight);
        A = sigetbox(this.el)
    }
    if (A.width < this.minWidth) {
        sisetwidth(this.el, this.minWidth);
        A = sigetbox(this.el)
    }
    if (A.height < this.minHeight) {
        sisetheight(this.el, this.minHeight);
        A = sigetbox(this.el)
    }
};
    siMenuPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    if (!this["isAutoHeight"]()) {
        var $ = sigetheight(this.el, true);
        sisetheight(this.borderEl, $);
        this._topArrowEl.style.display = this._bottomArrowEl.style.display = "none";
        this.contentEl.style.height = "auto";
        if (this.showNavArrow && this.borderEl.scrollHeight > this.borderEl.clientHeight) {
            this._topArrowEl.style.display = this._bottomArrowEl.style.display = "block";
            $ = sigetheight(this.borderEl, true);
            var B = sigetheight(this._topArrowEl)
              , A = sigetheight(this._bottomArrowEl)
              , _ = $ - B - A;
            if (_ < 0)
                _ = 0;
            sisetheight(this.contentEl, _)
        } else
            this.contentEl.style.height = "auto"
    } else {
        this.borderEl.style.height = "auto";
        this.contentEl.style.height = "auto"
    }
};
    siMenuPrototype["getParentField"] = function() {
    return this["parentField"]
};
    siMenuPrototype["setParentField"] = function($) {
    this["parentField"] = $
};
    siMenuPrototype["getIdField"] = function() {
    return this["idField"]
};
    siMenuPrototype["setIdField"] = function($) {
    this["idField"] = $
};
    siMenuPrototype["getResultAsTree"] = function() {
    return this["resultAsTree"]
};
    siMenuPrototype["setResultAsTree"] = function($) {
    this["resultAsTree"] = $
};
    siMenuPrototype["getTextField"] = function() {
    return this["textField"]
};
    siMenuPrototype["setTextField"] = function($) {
    this["textField"] = $
};
    siMenuPrototype["getShowNavArrow"] = function() {
    	return this.showNavArrow
	};
    siMenuPrototype["setShowNavArrow"] = function($) {
    this.showNavArrow = $
};
    siMenuPrototype["getSelectedItem"] = function($) {
    return this.selectedItem
};
    siMenuPrototype["setSelectedItem"] = function($) {
    $ = this["getItem"]($);
    this["_OnItemSelect"]($)
};
    siMenuPrototype["getAllowSelectItem"] = function() {
    return this.allowSelectItem
};
    siMenuPrototype["setAllowSelectItem"] = function($) {
    	this.allowSelectItem = $
	};
    siMenuPrototype["getItem"] = function($) {
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
    if ($ && this.items["indexOf"]($) != -1)
        return $;
    return null 
};
    siMenuPrototype["getGroupItems"] = function(C) {
    if (!C)
        return [];
    var A = [];
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var $ = this.items[_];
        if ($["groupName"] == C)
            A.push($)
    }
    return A
};
    siMenuPrototype["removeAll"] = function() {
	    var _ = this.items.clone();
	    for (var $ = _.length - 1; $ >= 0; $--)
	        this["removeItem"](_[$]);
	    this.contentEl.innerHTML = ""
	};
    siMenuPrototype["removeItemAt"] = function(_) {
	    var $ = this.items[_];
	    this["removeItem"]($)
	};
    siMenuPrototype["removeItem"] = function($) {
    $ = si.get($);
    if (!$)
        return;
    this.items.remove($);
    this.contentEl.removeChild($.el);
    this["fire"]("itemschanged")
};
    siMenuPrototype["addItem"] = function($) {
    if ($ == "-" || $ == "|" || $.type == "separator") {
        si.append(this.contentEl, "<span class=\"si-separator\"></span>");
        return
    }
    if (!si.isControl($) && !si.getClass($.type))
        $.type = "menuitem";
    $ = si.getAndCreate($);
    this.items.push($);
    this.contentEl.appendChild($.el);
    $.ownerMenu = this;
    this["fire"]("itemschanged")
};
    siMenuPrototype["getItems"] = function() {
    return this.items
};
    siMenuPrototype["setItems"] = function(_) {
    if (!si.isArray(_))
        _ = [];
    this["removeAll"]();
    var A = new Date();
    for (var $ = 0, B = _.length; $ < B; $++)
        this["addItem"](_[$])
};
    siMenuPrototype["getData"] = function() {
    return this["getItems"]()
};
    siMenuPrototype["setData"] = function($) {
    if (!si.isArray($))
        $ = [];
    this["setItems"]($)
};
    siMenuPrototype["hasShowItemMenu"] = function() {
    for (var $ = 0, A = this.items.length; $ < A; $++) {
        var _ = this.items[$];
        if (_ && _.menu && _.menu.isPopup)
            return true
    }
    return false
};
    siMenuPrototype["showItemMenu"] = function($) {
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var A = this.items[_];
        if (A == $)
            A["showMenu"]();
        else
            A["hideMenu"]()
    }
};
    siMenuPrototype["hideItems"] = function() {
	    for (var $ = 0, A = this.items.length; $ < A; $++) {
	        var _ = this.items[$];
	        _["hideMenu"]()
	    }
	};
    siMenuPrototype["hide"] = function() {
    	this["hideItems"]();
    	base_prototype_hide["call"](this)
	};
    siMenuPrototype["show"] = function() {
    	this["setVisible"](true)
	};
    siMenuPrototype["isVertical"] = function() {
    return this.vertical
};
    siMenuPrototype["getVertical"] = function() {
    return this.vertical
};
    siMenuPrototype["setVertical"] = function($) {
	    this.vertical = $;
	    if (!$)
	        siaddclass(this.el, "si-menu-horizontal");
	    else
	        siremoveclass(this.el, "si-menu-horizontal")
	};
    siMenuPrototype["within"] = function(B) {
	    if (siisAncestor(this.el, B.target))
	        return true;
	    for (var _ = 0, A = this.items.length; _ < A; _++) {
	        var $ = this.items[_];
	        if ($["within"](B))
	            return true
	    }
	    return false
    };
    siMenuPrototype["_initEvents"] = function() {
    siEventTimer(function() {
        siBindEvent(document, "mousedown", this._onOutComponentDocumentMouseDown, this);
        siTriggerEvent(this.el, "mouseover", this._onmouseover, this);
        siBindEvent(window, "resize", this._onCommonWindowResize, this);
        if (this._disableContextMenu)
            siTriggerEvent(this.el, "contextmenu", function($) {
                $.preventDefault()
            }
            , this);
        siTriggerEvent(this._topArrowEl, "mousedown", this.__OnTopMouseDown, this);
        siTriggerEvent(this._bottomArrowEl, "mousedown", this.__OnBottomMouseDown, this)
    }
    , this)
};
    siMenuPrototype["destroy"] = function($) {
    if (this._topArrowEl)
        this._topArrowEl.onmousedown = this._bottomArrowEl.onmousedown = null ;
    this._popupEl = this.popupEl = this.borderEl = this.innerEl = this.contentEl = null ;
    this._topArrowEl = this._bottomArrowEl = null ;
    this.owner = null ;
    siUnBindEvent(document, "mousedown", this._onOutComponentDocumentMouseDown, this);
    siUnBindEvent(window, "resize", this._onCommonWindowResize, this);
    si.Menu["superclass"]["destroy"]["call"](this, $)
};
    siMenuPrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-menu";
    this.el.innerHTML = "<div class=\"si-menu-border\"><a class=\"si-menu-topArrow\" href=\"#\" onclick=\"return false\"></a><div class=\"si-menu-inner\"></div><a class=\"si-menu-bottomArrow\" href=\"#\" onclick=\"return false\"></a></div>";
    this.borderEl = this.el.firstChild;
    this._topArrowEl = this.borderEl.childNodes[0];
    this._bottomArrowEl = this.borderEl.childNodes[2];
    this.innerEl = this.borderEl.childNodes[1];
    this.innerEl.innerHTML = "<div class=\"si-menu-float\"></div><div class=\"si-menu-toolbar\"></div><div style=\"clear:both;\"></div>";
    this.contentEl = this.innerEl.firstChild;
    this.toolbarEl = this.innerEl.childNodes[1];
    if (this["isVertical"]() == false)
        siaddclass(this.el, "si-menu-horizontal")
};
    siMenuPrototype["set"] = function($) {
    if (typeof $ == "string")
        return this;
    var _ = $.url;
    delete $.url;
    si.Menu["superclass"]["set"]["call"](this, $);
    if (_)
        this["setUrl"](_);
    return this
};
    siMenuPrototype["getbyName"] = function(C) {
    for (var _ = 0, B = this.items.length; _ < B; _++) {
        var $ = this.items[_];
        if ($.name == C)
            return $;
        if ($.menu) {
            var A = $.menu["getbyName"](C);
            if (A)
                return A
        }
    }
    return null 
};
    siRegClass(si.Menu, "menu");
    lOo00oBar = function() {
        lOo00oBar["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(lOo00oBar, si.Menu, {
        uiCls: "si-menubar",
        vertical: false,
        setVertical: function($) {
            this.vertical = false
        }
    });
    siRegClass(lOo00oBar, "menubar");
    si.ContextMenu = function() {
        si.ContextMenu["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.ContextMenu, si.Menu, {
        uiCls: "si-contextmenu",
        vertical: true,
        visible: false,
        _disableContextMenu: true,
        setVertical: function($) {
            this.vertical = true
        }
    });
    siRegClass(si.ContextMenu, "contextmenu");
    si.MenuItem = function() {
        si.MenuItem["superclass"]["constructor"]["call"](this)
    };
    siextend(si.MenuItem, si.Control, {
        text: "",
        iconCls: "",
        iconStyle: "",
        iconPosition: "left",
        showIcon: true,
        showAllow: true,
        checked: false,
        checkOnClick: false,
        groupName: "",
        _hoverCls: "si-menuitem-hover",
        _pressedCls: "si-menuitem-pressed",
        _checkedCls: "si-menuitem-checked",
        _clearBorder: false,
        menu: null ,
        uiCls: "si-menuitem",
        _isEventBinded: false
    });
    siMenuItemprototype = si.MenuItem["prototype"];
    siMenuItemprototype["getAttrs"] = function($) {
        var A = si.MenuItem["superclass"]["getAttrs"]["call"](this, $)
          , _ = jQuery($);
        A.text = $.innerHTML;
        si["_ParseString"]($, A, ["text", "iconCls", "iconStyle", "iconPosition", "groupName", "onclick", "oncheckedchanged"]);
        si["_ParseBool"]($, A, ["checkOnClick", "checked"]);
        return A
    };
    siMenuItemprototype["onCheckedChanged"] = function (fn,scope) {this["on"]("checkedchanged",fn,scope); };
    siMenuItemprototype["onClick"] = function (fn,scope) {this["on"]("click",fn,scope); };
    siMenuItemprototype._onmouseout = function (e) {siremoveclass(this.el,this._hoverCls); };
    siMenuItemprototype._onmouseover = function($) {
        if (this["isReadOnly"]())
            return;
        this._initCommonEvent();
        siaddclass(this.el, this._hoverCls);
        this.el.title = this.text;
        if (this.textEl.scrollWidth > this.textEl.clientWidth)
            this.el.title = this.text;
        else
            this.el.title = "";
        if (this.ownerMenu)
            if (this.ownerMenu["isVertical"]() == true)
                this.ownerMenu["showItemMenu"](this);
            else if (this.ownerMenu["hasShowItemMenu"]())
                this.ownerMenu["showItemMenu"](this)
    };
    siMenuItemprototype._onmouseup = function (e) {if (this["isReadOnly"]()) return; if (this.ownerMenu) {var me = this; setTimeout(function () {if (me["isDisplay"]()) {me.ownerMenu["showItemMenu"](me); } },1); } };
    siMenuItemprototype._onclick = function(D) {
        if (this["isReadOnly"]())
            return;
        if (this["checkOnClick"])
            if (this.ownerMenu && this["groupName"]) {
                var B = this.ownerMenu["getGroupItems"](this["groupName"]);
                if (B.length > 0) {
                    if (this.checked == false) {
                        for (var _ = 0, C = B.length; _ < C; _++) {
                            var $ = B[_];
                            if ($ != this)
                                $["setChecked"](false)
                        }
                        this["setChecked"](true)
                    }
                } else
                    this["setChecked"](!this.checked)
            } else
                this["setChecked"](!this.checked);
        this["fire"]("click");
        var A = this["getTopMenu"]();
        if (A)
            A["_OnItemClick"](this, D)
    };
    siMenuItemprototype["getTopMenu"] = function () {if (this.ownerMenu) {if (this.ownerMenu.ownerItem) return this.ownerMenu.ownerItem["getTopMenu"](); else return this.ownerMenu; } return null; };
    siMenuItemprototype._onMenuItemsChanged = function (e) {this["doUpdate"](); };
    siMenuItemprototype["hide"] = function () {this["hideMenu"](); this["setVisible"](false); };
    siMenuItemprototype["hideMenu"] = function() {
        if (this.menu)
            this.menu["hide"]()
    };
    siMenuItemprototype["showMenu"] = function() {
        if (this.menu && this.menu["isDisplay"]() == false) {
            this.menu.setHideAction("outerclick");
            var $ = {
                xAlign: "outright",
                yAlign: "top",
                outXAlign: "outleft",
                popupCls: "si-menu-popup"
            };
            if (this.ownerMenu && this.ownerMenu.vertical == false) {
                $.xAlign = "left";
                $.yAlign = "below";
                $.outXAlign = null 
            }
            this.menu["showAtEl"](this.el, $)
        }
    };
    siMenuItemprototype["getMenu"] = function () {return this.menu; };
    siMenuItemprototype["setMenu"] = function($) {
        if (si.isArray($))
            $ = {
                type: "menu",
                items: $
            };
        if (this.menu !== $) {
            this.menu = si.getAndCreate($);
            this.menu["hide"]();
            this.menu.ownerItem = this;
            this["doUpdate"]();
            this.menu["on"]("itemschanged", this._onMenuItemsChanged, this)
        }
    };
    siMenuItemprototype["setChildren"] = function (value) {this["setMenu"](value); };
    siMenuItemprototype["getGroupName"] = function () {return this["groupName"]; };
    siMenuItemprototype["setGroupName"] = function (value) {if (this["groupName"] != value) {this["groupName"] = value; } };
    siMenuItemprototype["getChecked"] = function () {return this.checked; };
    siMenuItemprototype["setChecked"] = function (value) {if (this.checked != value) {this.checked = value; this["doUpdate"](); this["fire"]("checkedchanged"); } };
    siMenuItemprototype["getCheckOnClick"] = function () {return this["checkOnClick"]; };
    siMenuItemprototype["setCheckOnClick"] = function (value) {this["checkOnClick"] = value; if (value) {siaddclass(this.el,"si-menuitem-showcheck"); } else {siremoveclass(this.el,"si-menuitem-showcheck"); } this["doUpdate"](); };
    siMenuItemprototype["getIconPosition"] = function () {return this.iconPosition; };
    siMenuItemprototype["setIconPosition"] = function (value) {this.iconPosition = value; this["_doUpdateIcon"](); };
    siMenuItemprototype["getIconStyle"] = function () {return this["iconStyle"]; };
    siMenuItemprototype["setIconStyle"] = function (value) {this["iconStyle"] = value; this["_doUpdateIcon"](); };
    siMenuItemprototype["getIconCls"] = function () {return this.iconCls; };
    siMenuItemprototype["setIconCls"] = function (value) {siremoveclass(this.iconEl,this.iconCls); this.iconCls = value; this["_doUpdateIcon"](); };
    siMenuItemprototype["getText"] = function () {return this.text; };
    siMenuItemprototype["setText"] = function (value) {this.text = value; if (this.textEl) this.textEl.innerHTML = this.text; };
    siMenuItemprototype["doUpdate"] = function() {
        if (this.textEl)
            this.textEl.innerHTML = this.text;
        this["_doUpdateIcon"]();
        if (this.checked)
            siaddclass(this.el, this._checkedCls);
        else
            siremoveclass(this.el, this._checkedCls);
        if (this.allowEl)
            if (this.menu && this.menu.items.length > 0)
                this.allowEl.style.display = "block";
            else
                this.allowEl.style.display = "none"
    };
    siMenuItemprototype["_doUpdateIcon"] = function() {
        var $ = this["iconStyle"] || this.iconCls || this["checkOnClick"];
        if (this.iconEl) {
            sisetstyle(this.iconEl, this["iconStyle"]);
            siaddclass(this.iconEl, this.iconCls);
            this.iconEl.style.display = $ ? "block" : "none"
        }
        if (this.iconPosition == "top")
            siaddclass(this.el, "si-menuitem-icontop");
        else
            siremoveclass(this.el, "si-menuitem-icontop")
    };
    siMenuItemprototype["within"] = function (e) {if (siisAncestor(this.el,e.target)) return true; if (this.menu && this.menu["within"](e)) return true; return false; };
    siMenuItemprototype["destroy"] = function (removeEl) {if (this.el) {this.el.onmouseover = null } this.menu = this.innerEl = this.iconEl = this.textEl = this.allowEl = null; si.MenuItem["superclass"]["destroy"]["call"](this,removeEl); };
    siMenuItemprototype._initCommonEvent = function () {if (this._isEventBinded) return; this._isEventBinded = true; siTriggerEvent(this.el,"click",this._onclick,this); siTriggerEvent(this.el,"mouseup",this._onmouseup,this); siTriggerEvent(this.el,"mouseout",this._onmouseout,this); };
    siMenuItemprototype["_initEvents"] = function () {siEventTimer(function () {siTriggerEvent(this.el,"mouseover",this._onmouseover,this); },this); };
    siMenuItemprototype["_create"] = function() {
        var $ = this.el = document.createElement("div");
        this.el.className = "si-menuitem";
        this.el.innerHTML = "<div class=\"si-menuitem-inner\"><div class=\"si-menuitem-icon\"></div><div class=\"si-menuitem-text\"></div><div class=\"si-menuitem-allow\"></div></div>";
        this.innerEl = this.el.firstChild;
        this.iconEl = this.innerEl.firstChild;
        this.textEl = this.innerEl.childNodes[1];
        this.allowEl = this.innerEl.lastChild
    };
    siRegClass(si.MenuItem, "menuitem");
    si.Separator = function() {
        si.Separator["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Separator, si.Control, {
        _clearBorder: false,
        uiCls: "si-separator",
        _create: function() {
            this.el = document.createElement("span");
            this.el.className = "si-separator"
        }
    });
    siRegClass(si.Separator, "separator");
    si.OutlookBar = function() {
        this._initOutLookBarGroup();
        si.OutlookBar["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.OutlookBar, si.Control, {
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
        uiCls: "si-outlookbar",
        _GroupId: 1
    });
    siOutlookBarPrototype = si.OutlookBar["prototype"];
    siOutlookBarPrototype["getAttrs"] = function($) {
        var A = si.OutlookBar["superclass"]["getAttrs"]["call"](this, $);
        si["_ParseString"]($, A, ["onactivechanged", "oncollapse", "onexpand"]);
        si["_ParseBool"]($, A, ["autoCollapse", "allowAnim", "expandOnLoad"]);
        si["_ParseInt"]($, A, ["activeIndex"]);
        var _ = si["getChildNodes"]($);
        A.groups = this["parseGroups"](_);
        return A
    };
    siOutlookBarPrototype["parseGroups"] = function(D) {
        var A = [];
        for (var $ = 0, C = D.length; $ < C; $++) {
            var B = D[$]
              , _ = {};
            A.push(_);
            _.style = B.style.cssText;
            si["_ParseString"](B, _, ["name", "title", "cls", "iconCls", "iconStyle", "headerCls", "headerStyle", "bodyCls", "bodyStyle"]);
            si["_ParseBool"](B, _, ["visible", "enabled", "showCollapseButton", "expanded"]);
            _.bodyParent = B
        }
        return A
    };
    siOutlookBarPrototype._onclick = function(A) {
        if (this.doingLayout)
            return;
        var _ = sifindAncestor(A.target, "si-outlookbar-groupHeader");
        if (!_)
            return;
        var $ = this._getOutLookBarGroupEl(A);
        if (!$)
            return;
        this._outLookBarDoExpandOrCollapse($)
    };
    siOutlookBarPrototype._getOutLookBarGroupEl = function(B) {
        var _ = sifindAncestor(B.target, "si-outlookbar-group");
        if (!_)
            return null ;
        var $ = _.id.split("$")
          , A = $[$.length - 1];
        return this._getGroupsElByDiyID(A)
    };
    siOutlookBarPrototype._outLookBarDoExpandOrCollapse = function($) {
        $ = this["getGroup"]($);
        var _ = {
            group: $,
            groupIndex: this.groups["indexOf"]($),
            groupName: $.name,
            cancel: false
        };
        if ($.expanded) {
            this["fire"]("BeforeCollapse", _);
            if (_.cancel == false)
                this["collapseGroup"]($)
        } else {
            this["fire"]("BeforeExpand", _);
            if (_.cancel == false)
                this["expandGroup"]($)
        }
    };
    siOutlookBarPrototype["expandGroup"] = function($) {
        $ = this["getGroup"]($);
        if (!$)
            return;
        var H = $.expanded;
        $.expanded = true;
        this.activeIndex = this.groups["indexOf"]($);
        sneedfire = true;
        if (this["autoCollapse"])
            for (var D = 0, B = this.groups.length; D < B; D++) {
                var C = this.groups[D];
                if (C.expanded && C != $)
                    this["collapseGroup"](C)
            }
        var G = this["getGroupBodyEl"]($);
        if (this.allowAnim && H == false) {
            this.doingLayout = true;
            G.style.display = "block";
            if (this["autoCollapse"] && !this["isAutoHeight"]()) {
                var A = this._getOutLookBarGroupElHeight();
                G.style.height = (A) + "px"
            } else
                G.style.height = "auto";
            var _ = sigetheight(G);
            G.style.height = "1px";
            var E = {
                height: _ + "px"
            }
              , I = G.style.overflow;
            G.style.overflow = "hidden";
            siaddclass(G, "si-outlookbar-overflow");
            var F = this
              , K = jQuery(G);
            K.animate(E, 180, function() {
                G.style.overflow = I;
                siremoveclass(G, "si-outlookbar-overflow");
                F.doingLayout = false;
                F["doLayout"]()
            }
            )
        } else
            this["doLayout"]();
        var J = {
            group: $,
            index: this.groups["indexOf"]($),
            name: $.name
        };
        this["fire"]("Expand", J);
        if (sneedfire)
            this["fire"]("activechanged")
    };
    siOutlookBarPrototype["collapseGroup"] = function(_) {
        _ = this["getGroup"](_);
        if (!_)
            return;
        var D = _.expanded
          , E = 0;
        if (this["autoCollapse"] && !this["isAutoHeight"]())
            E = this._getOutLookBarGroupElHeight();
        var F = false;
        _.expanded = false;
        var $ = this.groups["indexOf"](_);
        if ($ == this.activeIndex) {
            this.activeIndex = -1;
            F = true
        }
        var C = this["getGroupBodyEl"](_);
        if (this.allowAnim && D) {
            this.doingLayout = true;
            C.style.display = "block";
            C.style.height = "auto";
            if (this["autoCollapse"] && !this["isAutoHeight"]())
                C.style.height = E + "px";
            var A = {
                height: "1px"
            };
            siaddclass(C, "si-outlookbar-overflow");
            var B = this
              , H = jQuery(C);
            H.animate(A, 180, function() {
                B.doingLayout = false;
                siremoveclass(C, "si-outlookbar-overflow");
                B["doLayout"]()
            }
            )
        } else
            this["doLayout"]();
        var G = {
            group: _,
            index: this.groups["indexOf"](_),
            name: _.name
        };
        this["fire"]("Collapse", G);
        if (F)
            this["fire"]("activechanged")
    };
    siOutlookBarPrototype["toggleGroup"] = function($) {
        $ = this["getGroup"]($);
        if (!$)
            return;
        if ($.expanded)
            this["collapseGroup"]($);
        else
            this["expandGroup"]($)
    };
    siOutlookBarPrototype["hideGroup"] = function($) {
        $ = this["getGroup"]($);
        if (!$ || $.visible == false)
            return;
        $.visible = false;
        this["doUpdate"]()
    };
    siOutlookBarPrototype["showGroup"] = function($) {
        $ = this["getGroup"]($);
        if (!$ || $.visible == true)
            return;
        $.visible = true;
        this["doUpdate"]()
    };
    siOutlookBarPrototype["getActiveGroup"] = function() {
        return this["getGroup"](this.activeIndex)
    };
    siOutlookBarPrototype["getActiveIndex"] = function() {
        return this.activeIndex
    };
    siOutlookBarPrototype["setActiveIndex"] = function(_) {
        var $ = this["getGroup"](_)
          , A = this["getGroup"](this.activeIndex)
          , B = $ != A;
        if ($)
            this.activeIndex = this.groups["indexOf"]($);
        else
            this.activeIndex = -1;
        $ = this["getGroup"](this.activeIndex);
        if ($) {
            var C = this.allowAnim;
            this.allowAnim = false;
            this["expandGroup"]($);
            this.allowAnim = C
        }
    };
    siOutlookBarPrototype["getExpandOnLoad"] = function() {
        return this.expandOnLoad
    };
    siOutlookBarPrototype["setExpandOnLoad"] = function($) {
        this.expandOnLoad = $
    };
    siOutlookBarPrototype["getAutoCollapse"] = function() {
        return this["autoCollapse"]
    };
    siOutlookBarPrototype["setAutoCollapse"] = function($) {
        this["autoCollapse"] = $
    };
    siOutlookBarPrototype["getGroupBodyEl"] = function($) {
        var _ = this["getGroupEl"]($);
        if (_)
            return _.lastChild;
        return null 
    };
    siOutlookBarPrototype["getGroupEl"] = function($) {
        var _ = this["getGroup"]($);
        if (!_)
            return null ;
        return _._el
    };
    siOutlookBarPrototype._getGroupsElByDiyID = function(B) {
        for (var $ = 0, A = this.groups.length; $ < A; $++) {
            var _ = this.groups[$];
            if (_._id == B)
                return _
        }
    };
    siOutlookBarPrototype["getGroup"] = function($) {
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
    };
    siOutlookBarPrototype._getOutLookBarGroupElHeight = function() {
        var C = jQuery(this.el).height()
          , K = sigetborders(this.borderEl);
        C = C - K.top - K.bottom;
        var A = this["getActiveGroup"]()
          , E = 0;
        for (var F = 0, D = this.groups.length; F < D; F++) {
            var _ = this.groups[F]
              , G = this["getGroupEl"](_);
            if (_.visible == false || _ == A)
                continue;var $ = G.lastChild.style.display;
            G.lastChild.style.display = "none";
            var J = jQuery(G).outerHeight();
            G.lastChild.style.display = $;
            var L = sigetmargins(G);
            J = J + L.top + L.bottom;
            E += J
        }
        C = C - E;
        var H = this["getGroupEl"](this.activeIndex);
        if (!H)
            return 0;
        C = C - jQuery(H.firstChild).outerHeight();
        if (jQuery.boxModel) {
            var B = sigetpaddings(H.lastChild)
              , I = sigetborders(H.lastChild);
            C = C - B.top - B.bottom - I.top - I.bottom
        }
        B = sigetpaddings(H),
        I = sigetborders(H),
        L = sigetmargins(H);
        C = C - L.top - L.bottom;
        C = C - B.top - B.bottom - I.top - I.bottom;
        if (C < 0)
            C = 0;
        return C
    };
    siOutlookBarPrototype._setOutLookBarBorderElHeight = function() {
        if (this["isAutoHeight"]())
            this.borderEl.style.height = "auto";
        else {
            var $ = this["getHeight"](true);
            if (!jQuery.boxModel) {
                var _ = sigetborders(this.borderEl);
                $ = $ + _.top + _.bottom
            }
            if ($ < 0)
                $ = 0;
            this.borderEl.style.height = $ + "px"
        }
    };
    siOutlookBarPrototype["doLayout"] = function() {
        if (!this["canLayout"]())
            return;
        if (this.doingLayout)
            return;
        this._setOutLookBarBorderElHeight();
        for (var $ = 0, H = this.groups.length; $ < H; $++) {
            var _ = this.groups[$]
              , B = _._el
              , D = B.lastChild;
            if (_.expanded) {
                siaddclass(B, "si-outlookbar-expand");
                siremoveclass(B, "si-outlookbar-collapse")
            } else {
                siremoveclass(B, "si-outlookbar-expand");
                siaddclass(B, "si-outlookbar-collapse")
            }
            D.style.height = "auto";
            D.style.display = _.expanded ? "block" : "none";
            B.style.display = _.visible ? "" : "none";
            var A = sigetwidth(B, true)
              , E = sigetpaddings(D)
              , G = sigetborders(D);
            if (jQuery.boxModel)
                A = A - E.left - E.right - G.left - G.right;
            D.style.width = A + "px"
        }
        var F = this["isAutoHeight"]()
          , C = this["getActiveGroup"]();
        if (!F && this["autoCollapse"] && C) {
            B = this["getGroupEl"](this.activeIndex);
            B.lastChild.style.height = this._getOutLookBarGroupElHeight() + "px"
        }
        si.layout(this.borderEl)
    };
    siOutlookBarPrototype["doUpdate"] = function() {
        for (var _ = 0, E = this.groups.length; _ < E; _++) {
            var A = this.groups[_]
              , B = A._el
              , D = B.firstChild
              , C = B.lastChild
              , $ = "<div class=\"si-outlookbar-icon " + A.iconCls + "\" style=\"" + A["iconStyle"] + ";\"></div>"
              , F = "<div class=\"si-tools\"><span class=\"si-tools-collapse\"></span></div>" + ((A["iconStyle"] || A.iconCls) ? $ : "") + "<div class=\"si-outlookbar-groupTitle\">" + A.title + "</div><div style=\"clear:both;\"></div>";
            D.innerHTML = F;
            if (A.enabled)
                siremoveclass(B, "si-disabled");
            else
                siaddclass(B, "si-disabled");
            siaddclass(B, A.cls);
            sisetstyle(B, A.style);
            siaddclass(C, A.bodyCls);
            sisetstyle(C, A.bodyStyle);
            siaddclass(D, A.headerCls);
            sisetstyle(D, A.headerStyle);
            siremoveclass(B, "si-outlookbar-firstGroup");
            siremoveclass(B, "si-outlookbar-lastGroup");
            if (_ == 0)
                siaddclass(B, "si-outlookbar-firstGroup");
            if (_ == E - 1)
                siaddclass(B, "si-outlookbar-lastGroup")
        }
        this["doLayout"]()
    };
    siOutlookBarPrototype["moveGroup"] = function(_, $) {
        _ = this["getGroup"](_);
        if (!_)
            return;
        target = this["getGroup"]($);
        var A = this["getGroupEl"](_);
        this.groups.remove(_);
        if (target) {
            $ = this.groups["indexOf"](target);
            this.groups.insert($, _);
            var B = this["getGroupEl"](target);
            jQuery(B).before(A)
        } else {
            this.groups["add"](_);
            this.borderEl.appendChild(A)
        }
        this["doUpdate"]()
    };
    siOutlookBarPrototype["removeAll"] = function() {
        for (var $ = this.groups.length - 1; $ >= 0; $--)
            this["removeGroup"]($)
    };
    siOutlookBarPrototype["removeGroup"] = function($) {
        $ = this["getGroup"]($);
        if (!$)
            return;
        var _ = this["getGroupEl"]($);
        if (_)
            _.parentNode.removeChild(_);
        this.groups.remove($);
        this["doUpdate"]()
    };
    siOutlookBarPrototype["updateGroup"] = function($, _) {
        var $ = this["getGroup"]($);
        if (!$)
            return;
        si.copyTo($, _);
        this["doUpdate"]()
    };
    siOutlookBarPrototype["addGroup"] = function(_, $) {
        if (typeof _ == "string")
            _ = {
                title: _
            };
        _ = this["createGroup"](_);
        if (typeof $ != "number")
            $ = this.groups.length;
        this.groups.insert($, _);
        var B = this._getOutLookBarGroupHtml(_);
        _._el = B;
        var $ = this.groups["indexOf"](_)
          , A = this.groups[$ + 1];
        if (A) {
            var C = this["getGroupEl"](A);
            jQuery(C).before(B)
        }
        this["doUpdate"]();
        return _
    };
    siOutlookBarPrototype["getGroups"] = function() {
        return this.groups
    };
    siOutlookBarPrototype["setGroups"] = function(_) {
        if (!si.isArray(_))
            return;
        this["removeAll"]();
        for (var $ = 0, A = _.length; $ < A; $++)
            this["addGroup"](_[$])
    };
    siOutlookBarPrototype["createGroup"] = function(_) {
        var $ = si.copyTo({
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
    };
    siOutlookBarPrototype._getOutLookBarGroupHtml = function(_) {
        var H = this._getElementInsideId(_)
          , G = "<div id=\"" + H + "\" class=\"si-outlookbar-group " + _.cls + "\" style=\"" + _.style + "\">" + "<div class=\"si-outlookbar-groupHeader " + _.headerCls + "\" style=\"" + _.headerStyle + ";\"></div>" + "<div class=\"si-outlookbar-groupBody " + _.bodyCls + "\" style=\"" + _.bodyStyle + ";\"></div>" + "</div>"
          , A = si.append(this.borderEl, G)
          , E = A.lastChild
          , C = _.body;
        delete _.body;
        if (C) {
            if (!si.isArray(C))
                C = [C];
            for (var $ = 0, F = C.length; $ < F; $++) {
                var B = C[$];
                si.append(E, B)
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
    };
    siOutlookBarPrototype._initOutLookBarGroup = function() {
        this.groups = []
    };
    siOutlookBarPrototype._getElementInsideId = function($) {
        return this.uid + "$" + $._id
    };
    siOutlookBarPrototype["_initEvents"] = function() {
        siEventTimer(function() {
            siBindEvent(this.el, "click", this._onclick, this)
        }
        , this)
    };
    siOutlookBarPrototype["_create"] = function() {
        this.el = document.createElement("div");
        this.el.className = "si-outlookbar";
        this.el.innerHTML = "<div class=\"si-outlookbar-border\"></div>";
        this.borderEl = this.el.firstChild
    };
    siOutlookBarPrototype["set"] = function(_) {
        if (typeof _ == "string")
            return this;
        var A = this._componentLock;
        this._componentLock = false;
        var $ = _.activeIndex;
        delete _.activeIndex;
        si.OutlookBar["superclass"]["set"]["call"](this, _);
        if (si.isNumber($))
            this["setActiveIndex"]($);
        this._componentLock = A;
        this["doLayout"]();
        return this
    };
    siRegClass(si.OutlookBar, "outlookbar");
    si.OutlookMenu = function() {
        si.OutlookMenu["superclass"]["constructor"]["call"](this);
        this.data = []
    }
    ;
    siextend(si.OutlookMenu, si.OutlookBar, {
        url: "",
        textField: "text",
        iconField: "iconCls",
        urlField: "url",
        resultAsTree: false,
        itemsField: "children",
        idField: "id",
        parentField: "pid",
        style: "width:100%;height:100%;",
        uiCls: "si-outlookmenu",
        selectedEl: null ,
        autoCollapse: true,
        activeIndex: 0
    });
    siOutlookMenuPrototype = si.OutlookMenu["prototype"];
    siOutlookMenuPrototype._onitemselect = function(C) {
        if (!C.item)
            return;
        for (var $ = 0, A = this._menuArray.length; $ < A; $++) {
            var B = this._menuArray[$];
            if (B != C.sender)
                B["setSelectedItem"](null )
        }
        var _ = {
            item: C.item,
            htmlEvent: C.htmlEvent
        };
        this.selectedEl = C.item;
        this["fire"]("itemselect", _)
    };
    siOutlookMenuPrototype._onitemclick = function(_) {
        var $ = {
            item: _.item,
            htmlEvent: _.htmlEvent
        };
        this["fire"]("itemclick", $)
    };
    siOutlookMenuPrototype["createNavBarMenu"] = function(D) {
        if (!si.isArray(D))
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
        this["setGroups"](B);
        this["setActiveIndex"](this.activeIndex);
        this._menuArray = [];
        for (_ = 0,
        E = this.groups.length; _ < E; _++) {
            var A = this.groups[_]
              , C = this["getGroupBodyEl"](A)
              , F = new si.Menu();
            F._ownerGroup = A;
            F["set"]({
                showNavArrow: false,
                style: "width:100%;height:100%;border:0;background:none",
                borderStyle: "border:0",
                allowSelectItem: true,
                items: A._children
            });
            F["render"](C);
            F["on"]("itemclick", this._onitemclick, this);
            F["on"]("itemselect", this._onitemselect, this);
            this._menuArray.push(F);
            delete A._children
        }
    };
    siOutlookMenuPrototype["getAttrs"] = function($) {
        var _ = si.OutlookMenu["superclass"]["getAttrs"]["call"](this, $);
        _.text = $.innerHTML;
        si["_ParseString"]($, _, ["url", "textField", "urlField", "idField", "parentField", "itemsField", "iconField", "onitemclick", "onitemselect"]);
        si["_ParseBool"]($, _, ["resultAsTree"]);
        return _
    };
    siOutlookMenuPrototype["_getOwnerMenu"] = function(_) {
        if (!_)
            return;
        for (var $ = 0, B = this._menuArray.length; $ < B; $++) {
            var C = this._menuArray[$]
              , A = C["getItem"](_);
            if (A)
                return C
        }
    };
    siOutlookMenuPrototype["getList"] = function() {
        var $ = [];
        for (var _ = 0, B = this._menuArray.length; _ < B; _++) {
            var C = this._menuArray[_]
              , A = C["getItems"]();
            $.addRange(A)
        }
        return $
    };
    siOutlookMenuPrototype["getNode"] = function(_) {
        for (var $ = 0, B = this._menuArray.length; $ < B; $++) {
            var C = this._menuArray[$]
              , A = C["getItem"](_);
            if (A)
                return A
        }
        return null 
    };
    siOutlookMenuPrototype["findNodes"] = function(H, D) {
        var G = [];
        D = D || this;
        for (var _ = 0, F = this._menuArray.length; _ < F; _++) {
            var B = this._menuArray[_]["getItems"]()
              , C = [];
            for (var E = 0, A = B.length; E < A; E++) {
                var $ = B[E];
                if (H && H["call"](D, $) === true)
                    C.push($)
            }
            G.addRange(C)
        }
        return G
    };
    siOutlookMenuPrototype["selectNode"] = function($) {
        $ = this["getNode"]($);
        if (!$)
            return;
        var _ = this["_getOwnerMenu"]($);
        if (!_)
            return;
        this["expandGroup"](_._ownerGroup);
        setTimeout(function() {
            try {
                _["setSelectedItem"]($)
            } catch (A) {}
        }
        , 100)
    };
    siOutlookMenuPrototype["getSelected"] = function() {
        return this.selectedEl
    };
    siOutlookMenuPrototype["getParentField"] = function() {
        return this["parentField"]
    };
    siOutlookMenuPrototype["setParentField"] = function($) {
        this["parentField"] = $
    };
    siOutlookMenuPrototype["getIdField"] = function() {
        return this["idField"]
    };
    siOutlookMenuPrototype["setIdField"] = function($) {
        this["idField"] = $
    };
    siOutlookMenuPrototype["getNodesField"] = function() {
        return this.nodesField
    };
    siOutlookMenuPrototype["setNodesField"] = function($) {
        this.nodesField = $
    };
    siOutlookMenuPrototype["getResultAsTree"] = function() {
        return this["resultAsTree"]
    };
    siOutlookMenuPrototype["setResultAsTree"] = function($) {
        this["resultAsTree"] = $
    };
    siOutlookMenuPrototype["getUrlField"] = function() {
        return this["urlField"]
    };
    siOutlookMenuPrototype["setUrlField"] = function($) {
        this["urlField"] = $
    };
    siOutlookMenuPrototype["getIconField"] = function() {
        return this.iconField
    };
    siOutlookMenuPrototype["setIconField"] = function($) {
        this.iconField = $
    };
    siOutlookMenuPrototype["getTextField"] = function() {
        return this["textField"]
    };
    siOutlookMenuPrototype["setTextField"] = function($) {
        this["textField"] = $
    };
    siOutlookMenuPrototype["getUrl"] = function() {
        return this.url
    };
    siOutlookMenuPrototype["setUrl"] = function($) {
        this.url = $;
        this.insideLoad()
    };
    siOutlookMenuPrototype["setData"] = function($) {
        this["load"]($)
    };
    siOutlookMenuPrototype["load"] = function($) {
        if (typeof $ == "string")
            this["setUrl"]($);
        else
            this["createNavBarMenu"]($)
    };
    siOutlookMenuPrototype["loadList"] = function($, B, _) {
        B = B || this["idField"];
        _ = _ || this["parentField"];
        this._readFieldsConfig($);
        var A = si.arrayToTree($, this.nodesField, B, _);
        this["load"](A)
    };
    siOutlookMenuPrototype.insideLoad = function() {
        var _ = [];
        try {
            _ = si["getData"](this.url)
        } catch (A) {
            if (si_debugger == true)
                alert("outlooktree json is error.")
        }
        if (this.dataField)
            _ = si._getMap(this.dataField, _);
        if (!_)
            _ = [];
        if (this["resultAsTree"] == false)
            _ = si.arrayToTree(_, this.itemsField, this.idField, this["parentField"]);
        var $ = si["treeToArray"](_, this.itemsField, this.idField, this["parentField"]);
        this._readFieldsConfig($);
        this["createNavBarMenu"](_);
        this["fire"]("load")
    };
    siOutlookMenuPrototype._readFieldsConfig = function(_) {
        for (var A = 0, B = _.length; A < B; A++) {
            var $ = _[A];
            $.text = $[this.textField];
            $.url = $[this.urlField];
            $.iconCls = $[this.iconField]
        }
    };
    siOutlookMenuPrototype["destroy"] = function(B) {
        if (this._menuArray) {
            var _ = this._menuArray.clone();
            for (var $ = 0, C = _.length; $ < C; $++) {
                var A = _[$];
                A["destroy"]()
            }
            this._menuArray.length = 0
        }
        si.OutlookMenu["superclass"]["destroy"]["call"](this, B)
    };
    siOutlookMenuPrototype["set"] = function(_) {
        if (typeof _ == "string")
            return this;
        var A = _.url;
        delete _.url;
        var $ = _.activeIndex;
        delete _.activeIndex;
        si.OutlookMenu["superclass"]["set"]["call"](this, _);
        if (A)
            this["setUrl"](A);
        if (si.isNumber($))
            this["setActiveIndex"]($);
        return this
    };
    siRegClass(si.OutlookMenu, "outlookmenu");
    si.OutlookTree = function() {
        si.OutlookTree["superclass"]["constructor"]["call"](this);
        this.data = []
    }
    ;
    siextend(si.OutlookTree, si.OutlookBar, {
        url: "",
        textField: "text",
        iconField: "iconCls",
        urlField: "url",
        resultAsTree: false,
        nodesField: "children",
        idField: "id",
        parentField: "pid",
        style: "width:100%;height:100%;",
        uiCls: "si-outlooktree",
        selectedEl: null ,
        expandOnLoad: false,
        autoCollapse: true,
        activeIndex: 0
    });
    siOutlookTreePrototype = si.OutlookTree["prototype"];
    siOutlookTreePrototype._onnodeselect = function(C) {
        if (!C.node)
            return;
        for (var $ = 0, B = this._treeArray.length; $ < B; $++) {
            var A = this._treeArray[$];
            if (A != C.sender)
                A["selectNode"](null )
        }
        var _ = {
            node: C.node,
            isLeaf: C.sender["isLeaf"](C.node),
            htmlEvent: C.htmlEvent
        };
        this.selectedEl = C.node;
        this["fire"]("nodeselect", _)
    };
    siOutlookTreePrototype._onnodeclick = function(_) {
        var $ = {
            node: _.node,
            isLeaf: _.sender["isLeaf"](_.node),
            htmlEvent: _.htmlEvent
        };
        this["fire"]("nodeclick", $)
    };
    siOutlookTreePrototype["__OnNodeMouseDown"] = function(_) {
        var $ = {
            node: _.node,
            isLeaf: _.sender["isLeaf"](_.node),
            htmlEvent: _.htmlEvent
        };
        this["fire"]("nodemousedown", $)
    };
    siOutlookTreePrototype["createNavBarTree"] = function(D) {
        if (!si.isArray(D))
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
        this["setGroups"](B);
        this["setActiveIndex"](this.activeIndex);
        this._treeArray = [];
        for (_ = 0,
        E = this.groups.length; _ < E; _++) {
            var A = this.groups[_]
              , C = this["getGroupBodyEl"](A)
              , D = new si.Tree();
            D["set"]({
                expandOnLoad: this.expandOnLoad,
                showTreeIcon: true,
                style: "width:100%;height:100%;border:0;background:none",
                data: A._children
            });
            D["render"](C);
            D["on"]("nodeclick", this._onnodeclick, this);
            D["on"]("nodeselect", this._onnodeselect, this);
            D["on"]("nodemousedown", this.__OnNodeMouseDown, this);
            this._treeArray.push(D);
            delete A._children;
            D._ownerGroup = A
        }
        this["doLayout"]()
    };
    siOutlookTreePrototype["getAttrs"] = function(_) {
        var A = si.OutlookTree["superclass"]["getAttrs"]["call"](this, _);
        A.text = _.innerHTML;
        si["_ParseString"](_, A, ["url", "textField", "urlField", "idField", "parentField", "nodesField", "iconField", "onnodeclick", "onnodeselect", "onnodemousedown", "expandOnLoad"]);
        si["_ParseBool"](_, A, ["resultAsTree"]);
        if (A.expandOnLoad) {
            var $ = parseInt(A.expandOnLoad);
            if (si.isNumber($))
                A.expandOnLoad = $;
            else
                A.expandOnLoad = A.expandOnLoad == "true" ? true : false
        }
        return A
    };
    siOutlookTreePrototype["getExpandOnLoad"] = function() {
        return this.expandOnLoad
    };
    siOutlookTreePrototype["setExpandOnLoad"] = function($) {
        this.expandOnLoad = $
    };
    siOutlookTreePrototype["_getOwnerTree"] = function(A) {
        if (!A)
            return;
        for (var $ = 0, B = this._treeArray.length; $ < B; $++) {
            var _ = this._treeArray[$];
            if (_.nodeIdMap[A._id])
                return _
        }
    };
    siOutlookTreePrototype["getList"] = function() {
        var $ = [];
        for (var _ = 0, C = this._treeArray.length; _ < C; _++) {
            var A = this._treeArray[_]
              , B = A["getList"]();
            $.addRange(B)
        }
        return $
    };
    siOutlookTreePrototype["getNode"] = function(A) {
        for (var $ = 0, C = this._treeArray.length; $ < C; $++) {
            var _ = this._treeArray[$]
              , B = _["getNode"](A);
            if (B)
                return B
        }
        return null 
    };
    siOutlookTreePrototype["findNodes"] = function(E, B) {
        var D = [];
        B = B || this;
        for (var $ = 0, C = this._treeArray.length; $ < C; $++) {
            var A = this._treeArray[$]
              , _ = A["findNodes"](E, B);
            D.addRange(_)
        }
        return D
    };
    siOutlookTreePrototype["expandPath"] = function(_) {
        _ = this["getNode"](_);
        if (!_)
            return;
        var $ = this["_getOwnerTree"](_);
        $["expandPath"](_);
        this["expandGroup"]($._ownerGroup)
    };
    siOutlookTreePrototype["selectNode"] = function(_) {
        _ = this["getNode"](_);
        if (!_)
            return;
        var $ = this["_getOwnerTree"](_);
        $["selectNode"](_)
    };
    siOutlookTreePrototype["getSelected"] = function() {
        return this.selectedEl
    };
    siOutlookTreePrototype["getParentField"] = function() {
        return this["parentField"]
    };
    siOutlookTreePrototype["setParentField"] = function($) {
        this["parentField"] = $
    };
    siOutlookTreePrototype["getIdField"] = function() {
        return this["idField"]
    };
    siOutlookTreePrototype["setIdField"] = function($) {
        this["idField"] = $
    };
    siOutlookTreePrototype["getNodesField"] = function() {
        return this.nodesField
    };
    siOutlookTreePrototype["setNodesField"] = function($) {
        this.nodesField = $
    };
    siOutlookTreePrototype["getResultAsTree"] = function() {
        return this["resultAsTree"]
    };
    siOutlookTreePrototype["setResultAsTree"] = function($) {
        this["resultAsTree"] = $
    };
    siOutlookTreePrototype["getUrlField"] = function() {
        return this["urlField"]
    };
    siOutlookTreePrototype["setUrlField"] = function($) {
        this["urlField"] = $
    };
    siOutlookTreePrototype["getIconField"] = function() {
        return this.iconField
    };
    siOutlookTreePrototype["setIconField"] = function($) {
        this.iconField = $
    };
    siOutlookTreePrototype["getTextField"] = function() {
        return this["textField"]
    };
    siOutlookTreePrototype["setTextField"] =  function($) {
        this["textField"] = $
    };
    siOutlookTreePrototype["getUrl"] = function() {
        return this.url
    };
    siOutlookTreePrototype["setUrl"] = function($) {
        this.url = $;
        this.insideLoad()
    };
    siOutlookTreePrototype["setData"] = function($) {
        this["load"]($)
    };
    siOutlookTreePrototype["load"] = function($) {
        if (typeof $ == "string")
            this["setUrl"]($);
        else
            this["createNavBarTree"]($)
    };
    siOutlookTreePrototype["loadList"] = function($, B, _) {
        B = B || this["idField"];
        _ = _ || this["parentField"];
        this._readFieldsConfig($);
        var A = si.arrayToTree($, this.nodesField, B, _);
        this["load"](A)
    };
    siOutlookTreePrototype.insideLoad = function() {
        var _ = [];
        try {
            _ = si["getData"](this.url)
        } catch (A) {
            if (si_debugger == true)
                alert("outlooktree json is error.")
        }
        if (this.dataField)
            _ = si._getMap(this.dataField, _);
        if (!_)
            _ = [];
        if (this["resultAsTree"] == false)
            _ = si.arrayToTree(_, this.nodesField, this.idField, this["parentField"]);
        var $ = si["treeToArray"](_, this.nodesField, this.idField, this["parentField"]);
        this._readFieldsConfig($);
        this["createNavBarTree"](_);
        this["fire"]("load")
    };
    siOutlookTreePrototype._readFieldsConfig = function(_) {
        for (var A = 0, B = _.length; A < B; A++) {
            var $ = _[A];
            $.text = $[this.textField];
            $.url = $[this.urlField];
            $.iconCls = $[this.iconField]
        }
    };
    siOutlookTreePrototype["destroy"] = function(B) {
        if (this._treeArray) {
            var _ = this._treeArray.clone();
            for (var $ = 0, C = _.length; $ < C; $++) {
                var A = _[$];
                A["destroy"]()
            }
            this._treeArray.length = 0
        }
        si.OutlookTree["superclass"]["destroy"]["call"](this, B)
    };
    siOutlookTreePrototype["set"] = function(_) {
        if (typeof _ == "string")
            return this;
        var A = _.url;
        delete _.url;
        var $ = _.activeIndex;
        delete _.activeIndex;
        si.OutlookTree["superclass"]["set"]["call"](this, _);
        if (A)
            this["setUrl"](A);
        if (si.isNumber($))
            this["setActiveIndex"]($);
        return this
    };
    siRegClass(si.OutlookTree, "outlooktree");
    si.NavBar = function() {
        si.NavBar["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.NavBar, si.OutlookBar, {
        uiCls: "si-navbar"
    });
    siRegClass(si.NavBar, "navbar");
    si.NavBarMenu = function() {
        si.NavBarMenu["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.NavBarMenu, si.OutlookMenu, {
        uiCls: "si-navbarmenu"
    });
    siRegClass(si.NavBarMenu, "navbarmenu");
    si.NavBarTree = function() {
        si.NavBarTree["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.NavBarTree, si.OutlookTree, {
        uiCls: "si-navbartree"
    });
    siRegClass(si.NavBarTree, "navbartree");
    si.ToolBar = function() {
        si.ToolBar["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.ToolBar, si.Container, {
        _clearBorder: false,
        style: "",
        uiCls: "si-toolbar",
        _create: function() {
            this.el = document.createElement("div");
            this.el.className = "si-toolbar"
        },
        _initEvents: function() {},
        doLayout: function() {
            if (!this["canLayout"]())
                return;
            var A = si["getChildNodes"](this.el, true);
            for (var $ = 0, _ = A.length; $ < _; $++)
                si.layout(A[$])
        },
        set_bodyParent: function($) {
            if (!$)
                return;
            this.el = $;
            this["doLayout"]()
        },
        getAttrs: function($) {
            var _ = {};
            si["_ParseString"]($, _, ["id", "borderStyle"]);
            this.el = $;
            this.el.uid = this.uid;
            this["addCls"](this.uiCls);
            return _
        }
    });
    siRegClass(si.ToolBar, "toolbar");
    si.Pager = function() {
        si.Pager["superclass"]["constructor"]["call"](this)
    }
    ;
    siextend(si.Pager, si.Control, {
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
        uiCls: "si-pager"
    });
    siPagerPrototype = si.Pager["prototype"];
    siPagerPrototype["getAttrs"] = function(el) {
    var attrs = si.Pager["superclass"]["getAttrs"]["call"](this, el);
    si["_ParseString"](el, attrs, ["onpagechanged", "sizeList", "onbeforepagechanged"]);
    si["_ParseBool"](el, attrs, ["showPageIndex", "showPageSize", "showTotalCount", "showPageInfo", "showReloadButton"]);
    si["_ParseInt"](el, attrs, ["pageIndex", "pageSize", "totalCount"]);
    if (typeof attrs["sizeList"] == "string")
        attrs["sizeList"] = eval(attrs["sizeList"]);
    return attrs
};
    siPagerPrototype["onPageChanged"] = function(_, $) {
    this["on"]("pagechanged", _, $)
};
    siPagerPrototype._startPageChanged = function($, _) {
    var A = {
        pageIndex: si.isNumber($) ? $ : this.pageIndex,
        pageSize: si.isNumber(_) ? _ : this.pageSize,
        cancel: false
    };
    if (A["pageIndex"] > this.totalPage - 1)
        A["pageIndex"] = this.totalPage - 1;
    if (A["pageIndex"] < 0)
        A["pageIndex"] = 0;
    this["fire"]("beforepagechanged", A);
    if (A.cancel == true)
        return;
    this["fire"]("pagechanged", A);
    this["update"](A.pageIndex, A["pageSize"])
};
    siPagerPrototype._onComboValueChanged = function(_) {
    var $ = parseInt(this.sizeCombo["getValue"]());
    this._startPageChanged(0, $)
};
    siPagerPrototype["update"] = sipagerupdate;
    siPagerPrototype["getTotalPage"] = sipagergettotalpage;
    siPagerPrototype["getShowReloadButton"] = sipagergetshowreloadbutton;
    siPagerPrototype["setShowReloadButton"] = sipagersetshowreloadbutton;
    siPagerPrototype["getShowPageInfo"] = sipagergetshowpageinfo;
    siPagerPrototype["setShowPageInfo"] = function($) {
        this.showPageInfo = $;
        this["update"]()
    };
    siPagerPrototype["getShowTotalCount"] = function() {
        return this.showTotalCount
    };
    siPagerPrototype["setShowTotalCount"] = function($) {
        this.showTotalCount = $;
        this["update"]()
    };
    siPagerPrototype["getShowPageIndex"] = function() {
        return this.showPageIndex
    };
    siPagerPrototype["setShowPageIndex"] = function($) {
        this.showPageIndex = $;
        this["update"]()
    };
    siPagerPrototype["getShowPageSize"] = function() {
        return this.showPageSize
    };
    siPagerPrototype["setShowPageSize"] = function($) {
        this.showPageSize = $;
        this["update"]()
    };
    siPagerPrototype["getSizeList"] = function() {
        return this["sizeList"]
    };
    siPagerPrototype["setSizeList"] = function($) {
        if (!si.isArray($))
            return;
        this["sizeList"] = $;
        this["update"]()
    };
    siPagerPrototype["getTotalCount"] = function() {
        return this["totalCount"]
    };
    siPagerPrototype["setTotalCount"] = function($) {
        $ = parseInt($);
        if (isNaN($))
            return;
        this["totalCount"] = $;
        this["update"]()
    };
    siPagerPrototype["getPageSize"] = function() {
    	return this["pageSize"]
	};
    siPagerPrototype["setPageSize"] = function($) {
    if (isNaN($))
        return;
    this["pageSize"] = $;
    this["update"]()
	};
    siPagerPrototype["getPageIndex"] = function() {
    return this["pageIndex"]
	};
    siPagerPrototype["setPageIndex"] = function($) {
    if (isNaN($))
        return;
    this["pageIndex"] = $;
    this["update"]()
};
    siPagerPrototype["doLayout"] = function() {
    if (!this["canLayout"]())
        return;
    si.layout(this._leftEl);
    si.layout(this._rightEl)
};
    siPagerPrototype["_initEvents"] = function() {
	    si.Pager["superclass"]["_initEvents"]["call"](this);
	    this.firstButton["on"]("click", function($) {
	        this._startPageChanged(0)
	    }
	    , this);
	    this.prevButton["on"]("click", function($) {
	        this._startPageChanged(this["pageIndex"] - 1)
	    }
	    , this);
	    this.nextButton["on"]("click", function($) {
	        this._startPageChanged(this["pageIndex"] + 1)
	    }
	    , this);
	    this.lastButton["on"]("click", function($) {
	        this._startPageChanged(this.totalPage)
	    }
	    , this);
	    this.reloadButton["on"]("click", function($) {
	        this._startPageChanged()
	    }
	    , this);
	    function $() {
	        if (_)
	            return;
	        _ = true;
	        var $ = parseInt(this.numInput.value);
	        if (isNaN($))
	            this["update"]();
	        else
	            this._startPageChanged($ - 1);
	        setTimeout(function() {
	            _ = false
	        }
	        , 100)
	    }
	    var _ = false;
	    siBindEvent(this.numInput, "change", function(_) {
	        $["call"](this)
	    }
	    , this);
	    siBindEvent(this.numInput, "keydown", function(_) {
	        if (_.keyCode == 13) {
	            $["call"](this);
	            _.stopPropagation()
	        }
	    }
	    , this);
	    this.sizeCombo["on"]("valuechanged", this._onComboValueChanged, this)
};
    siPagerPrototype["destroy"] = function($) {
    if (this.pageSelect) {
        si["clearEvent"](this.pageSelect);
        this.pageSelect = null 
    }
    if (this.numInput) {
        si["clearEvent"](this.numInput);
        this.numInput = null 
    }
    this.sizeEl = null ;
    this.buttonsEl = null ;
    si.Pager["superclass"]["destroy"]["call"](this, $)
};
    siPagerPrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-pager";
    var $ = "<div class=\"si-pager-left\"></div><div class=\"si-pager-right\"></div>";
    this.el.innerHTML = $;
    this.buttonsEl = this._leftEl = this.el.childNodes[0];
    this._rightEl = this.el.childNodes[1];
    this.sizeEl = si.append(this.buttonsEl, "<span class=\"si-pager-size\"></span>");
    this.sizeCombo = new si.ComboBox();
    this.sizeCombo["setName"]("pagesize");
    this.sizeCombo["setWidth"](48);
    this.sizeCombo["render"](this.sizeEl);
    si.append(this.sizeEl, "<span class=\"separator\"></span>");
    this.firstButton = new si.Button();
    this.firstButton["render"](this.buttonsEl);
    this.prevButton = new si.Button();
    this.prevButton["render"](this.buttonsEl);
    this.indexEl = document.createElement("span");
    this.indexEl.className = "si-pager-index";
    this.indexEl.innerHTML = "<input id=\"\" type=\"text\" class=\"si-pager-num\"/><span class=\"si-pager-pages\">/ 0</span>";
    this.buttonsEl.appendChild(this.indexEl);
    this.numInput = this.indexEl.firstChild;
    this.pagesLabel = this.indexEl.lastChild;
    this.nextButton = new si.Button();
    this.nextButton["render"](this.buttonsEl);
    this.lastButton = new si.Button();
    this.lastButton["render"](this.buttonsEl);
    si.append(this.buttonsEl, "<span class=\"separator\"></span>");
    this.reloadButton = new si.Button();
    this.reloadButton["render"](this.buttonsEl);
    this.firstButton["setPlain"](true);
    this.prevButton["setPlain"](true);
    this.nextButton["setPlain"](true);
    this.lastButton["setPlain"](true);
    this.reloadButton["setPlain"](true);
    this["update"]()
};
    siRegClass(si.Pager, "pager");
    si.DataGrid = function() {
        this.data = [];
        this.rowUidMap = {};
        this._removedRows = [];
        this.rowIdFieldMap = {};
        this.columns = [];
        this.bottomColumns = [];
        this.columnIdMap = {};
        this.columnNameMap = {};
        this.allselecteds = [];
        this.selectedsMap = {};
        this._cellErrors = [];
        this._cellMapErrors = {};
        si.DataGrid["superclass"]["constructor"]["call"](this);
        this["doUpdate"]();
        var $ = this;
        setTimeout(function() {
            if ($.autoLoad)
                $["reload"]()
        }
        , 1)
    };
    
    _sigridglobalrowid = 0;
    _sigridglobalcolumnid = 0;
    siextend(si.DataGrid, si.Control, {
        _display: "block",
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
        altCls: "si-grid-row-alt",
        allowUnselect: false,
        frozenCls: "si-grid-frozen",
        frozeCellCls: "si-grid-frozenCell",
        frozenStartColumn: -1,
        frozenEndColumn: -1,
        _rowCls: "si-grid-row",
        _rowhoverCls: "si-grid-row-hover",
        _rowselectedCls: "si-grid-row-selected",
        _headerCellCls: "si-grid-headerCell",
        _cellCls: "si-grid-cell",
        uiCls: "si-datagrid",
        _needIdFieldMap: true,
        showNewRow: true,
        _rowHeight: 23,
        _showRowDetailFlag: true,
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
        cellselectedCls: "si-grid-cell-selected",
        currentCell: null ,
        editingCell: null ,
        currentEditor: null ,
        editwrapEl: null ,
        editNextOnEnterKey: false,
        editOnTabKey: true,
        createOnEnter: false,
        _idField: "_uid",
        _idleToUpdate: true,
        autoCreateNewID: false,
        collapseGroupOnLoad: false,
        showGroupSummary: false,
        _groupMapRowId: 1,
        _groupField: "",
        _groupDir: "",
        selectedEl: null ,
        allselecteds: [],
        headerContextMenu: null ,
        columnsMenu: null 
    });
    sidatagridprototype = si.DataGrid["prototype"];
    sidatagridprototype["getAttrs"] = sidatagridgetattrs;
    sidatagridprototype["onCellBeginEdit"] = sidatagridoncellbeginedit;
    sidatagridprototype["onDrawCell"] = sidatagridondrawcell;
    sidatagridprototype["onPreLoad"] = sidatagridonpreload;
    sidatagridprototype["onLoadError"] = sidatagridonloaderror;
    sidatagridprototype["onLoad"] = sidatagridonload;
    sidatagridprototype["onBeforeLoad"] = sidatagridonbeforeload;
    sidatagridprototype["onCellContextMenu"] = sidatagridoncellcontextmenu;
    sidatagridprototype["onCellMouseDown"] = sidagatridoncellmousedown;
    sidatagridprototype["onCellClick"] = sidatagridoncellclick;
    sidatagridprototype["onRowContextMenu"] = sidatagridonrowcontextmenu;
    sidatagridprototype["onRowMouseDown"] = sidatagridonrowmousedown;
    sidatagridprototype["onRowClick"] = sidatagridonrowclick;
    sidatagridprototype["onRowDblClick"] = sidatagridonrowdblclick;
    sidatagridprototype._beforeCreateColumnsMenu = function(A) {
        var B = this["createColumnsMenu"]()
          , _ = this._getColumnEl(A)
          , $ = sigetbox(_);
        B["showAtPos"]($.right - 17, $.bottom)
    };
    sidatagridprototype["createColumnsMenu"] = sicreatecolumnsmenu;
    sidatagridprototype["getHeaderContextMenu"] = sidatagridgetheadercontextmenu;
    sidatagridprototype["setHeaderContextMenu"] = sidatagridsetheadercontextmenu;
    sidatagridprototype.oncontrolcontextmenu = function(A) {
        var _ = {
            popupEl: this.el,
            htmlEvent: A,
            cancel: false
        };
        if (siisAncestor(this.headerEl, A.target)) {
            if (this.headerContextMenu) {
                this.headerContextMenu["fire"]("BeforeOpen", _);
                if (_.cancel == true)
                    return;
                this.headerContextMenu["fire"]("opening", _);
                if (_.cancel == true)
                    return;
                this.headerContextMenu["showAtPos"](A.pageX, A.pageY);
                this.headerContextMenu["fire"]("Open", _)
            }
        } else {
            var $ = sifindAncestor(A.target, "si-grid-detailRow");
            if ($ && siisAncestor(this.el, $))
                return;
            if (this["contextMenu"]) {
                this["contextMenu"]["fire"]("BeforeOpen", _);
                if (_.cancel == true)
                    return;
                this["contextMenu"]["fire"]("opening", _);
                if (_.cancel == true)
                    return;
                this["contextMenu"]["showAtPos"](A.pageX, A.pageY);
                this["contextMenu"]["fire"]("Open", _)
            }
        }
        return false
    };
    sidatagridprototype["_OnHeaderCellClick"] = sidatagridonheadercellclick;
    sidatagridprototype["_OnRowMouseMove"] = sidatagridonrowmousemove;
    sidatagridprototype["_OnRowMouseOut"] = sidatagridonrowmouseout;
    sidatagridprototype["_OnCellMouseDown"] = sidatagridoncellmousedown;
    sidatagridprototype._beforeDrawGroupSummaryCell = function(_, A) {
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
            var B = si.groupSummaryType[A.summaryType];
            if (B)
                C.value = B(_, A.field)
        }
        C.cellHtml = C.value;
        var $ = A.groupSummaryRenderer;
        if ($) {
            B = typeof $ == "function" ? $ : window[$];
            if (B)
                C.cellHtml = B["call"](A, C)
        }
        this["fire"]("drawgroupsummarycell", C);
        if (C.cellHtml === null  || C.cellHtml === undefined || C.cellHtml === "")
            C.cellHtml = "&nbsp;";
        return C
    };
    sidatagridprototype["_OnDrawSummaryCell"] = siondrawsummarycell;
    sidatagridprototype.getCellObject = function($, C, D, E) {
        var _ = si._getMap(C.field, $)
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
        F.visible = this["_isCellVisible"](D, E);
        if (F.visible == true && this._mergedCellMaps) {
            var B = this._mergedCellMaps[D + ":" + E];
            if (B) {
                F.rowSpan = B.rowSpan;
                F.colSpan = B.colSpan
            }
        }
        if (C.dateFormat)
            if (si.isDate(F.value))
                F.cellHtml = si.formatDate(_, C.dateFormat);
            else
                F.cellHtml = _;
        if (C.dataType == "currency")
            F.cellHtml = si.formatCurrency(F.value, C.currencyUnit);
        if (C.displayField)
            F.cellHtml = $[C.displayField];
        if (F.autoEscape == true)
            F.cellHtml = si.htmlEncode(F.cellHtml);
        var A = C.renderer;
        if (A) {
            fn = typeof A == "function" ? A : _getFunctionByFunctionName(A);
            if (fn)
                F.cellHtml = fn["call"](C, F)
        }
        this["fire"]("drawcell", F);
        if (F.cellHtml && !!F.cellHtml.unshift && F.cellHtml.length == 0)
            F.cellHtml = "&nbsp;";
        if (F.cellHtml === null  || F.cellHtml === undefined || F.cellHtml === "")
            F.cellHtml = "&nbsp;";
        return F
    }
    ;
    siondrawsummarycell = function(A, B) {
        var D = {
            result: this["getResultObject"](),
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
            var C = si.summaryTypes[B.summaryType];
            if (C)
                D.value = C(A, B.field)
        }
        var $ = D.value;
        D.cellHtml = D.value;
        if (D.value && parseInt(D.value) != D.value && D.value.toFixed) {
            decimalPlaces = parseInt(B["decimalPlaces"]);
            if (isNaN(decimalPlaces))
                decimalPlaces = 2;
            D.cellHtml = parseFloat(D.value.toFixed(decimalPlaces))
        }
        if (B.dateFormat)
            if (si.isDate(D.value))
                D.cellHtml = si.formatDate($, B.dateFormat);
            else
                D.cellHtml = $;
        if (B.dataType == "currency")
            D.cellHtml = si.formatCurrency(D.cellHtml, B.currencyUnit);
        var _ = B.summaryRenderer;
        if (_) {
            C = typeof _ == "function" ? _ : window[_];
            if (C)
                D.cellHtml = C["call"](B, D)
        }
        B.summaryValue = D.value;
        this["fire"]("drawsummarycell", D);
        if (D.cellHtml === null  || D.cellHtml === undefined || D.cellHtml === "")
            D.cellHtml = "&nbsp;";
        return D
    };
    sidatagridprototype.autoFireEvent = function(F, D) {
        if (!this.enabled)
            return;
        var C = this.getEventRecordAndColumn(F)
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
                E["call"](this, A);
            else
                this["fire"]("row" + D, A)
        }
        if (B) {
            A = {
                column: B,
                field: B.field,
                htmlEvent: F
            },
            E = this["_OnColumn" + D];
            if (E)
                E["call"](this, A);
            else
                this["fire"]("column" + D, A)
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
                E["call"](this, A);
            else
                this["fire"]("cell" + D, A);
            if (B["onCell" + D])
                B["onCell" + D]["call"](B, A)
        }
        if (!_ && B) {
            A = {
                column: B,
                htmlEvent: F
            },
            E = this["_OnHeaderCell" + D];
            if (E)
                E["call"](this, A);
            else {
                var $ = "onheadercell" + D.toLowerCase();
                if (B[$]) {
                    A.sender = this;
                    B[$](A)
                }
                this["fire"]("headercell" + D, A)
            }
        }
        if (!_)
            this.clearHoverCls()
    };
    sidatagridprototype._oncontextmenu = function($) {
        this.autoFireEvent($, "ContextMenu")
    };
    sidatagridprototype._onkeyup = function($) {
        this.autoFireEvent($, "KeyUp")
    };
    sidatagridprototype._onkeydown = function($) {
        this.autoFireEvent($, "KeyDown")
    };
    sidatagridprototype._onmouseout = function($) {
        this.autoFireEvent($, "MouseOut")
    };
    sidatagridprototype._onmouseover = function($) {
        this.autoFireEvent($, "MouseOver")
    };
    sidatagridprototype._onmousemove = function($) {
        this.autoFireEvent($, "MouseMove")
    };
    sidatagridprototype._onmouseup = function($) {
        if (siisAncestor(this.el, $.target)) {
            this["_tryFocus"]($);
            this.autoFireEvent($, "MouseUp")
        }
    };
    sidatagridprototype._onmousedown = function($) {
        this.autoFireEvent($, "MouseDown");
        this["_tryFocus"]($)
    };
    sidatagridprototype._ondblclick = function($) {
        this.autoFireEvent($, "Dblclick")
    };
    sidatagridprototype["_tryFocus"] = sidatagridtryfocus;
    sidatagridprototype._onclick = function(D) {
        var A = sifindAncestor(D.target, "si-grid-groupRow");
        if (A) {
            var _ = A.id.split("$")
              , C = _[_.length - 1]
              , $ = this._getGroupRow(C);
            if ($) {
                var B = !($.expanded === false ? false : true);
                if (B)
                    this.expandgroup($);
                else
                    this.collapsegroup($)
            }
        } else
            this.autoFireEvent(D, "Click")
    };
    sidatagridprototype._onmousewheel = function(C, A) {
        if (this["allowCellEdit"])
            this["commitEdit"]();
        var B = jQuery(this.bodyEl).css("overflow-y");
        if (B == "hidden") {
            var $ = C.wheelDelta || -C.detail * 24
              , _ = this.bodyEl.scrollTop;
            _ -= $;
            this.bodyEl.scrollTop = _;
            if (_ == this.bodyEl.scrollTop)
                C.preventDefault();
            var C = {
                scrollTop: this.bodyEl.scrollTop,
                direction: "vertical"
            };
            this["fire"]("scroll", C)
        }
    };
    sidatagridprototype.getRowByEvent = function(B) {
        var A = sifindAncestor(B.target, this._rowCls);
        if (!A)
            return null ;
        var $ = A.id.split("$")
          , _ = $[$.length - 1];
        return this["getRowByUID"](_)
    };
    sidatagridprototype.clearHoverCls = function() {
        if (!this.currentHoverEl)
            return;
        var $ = this.getRowEl(this.currentHoverEl);
        if ($)
            siremoveclass($, this._rowhoverCls);
        this.currentHoverEl = null 
    };
    sidatagridprototype.addHoverCls = function(_, $) {
        _ = this["getRow"](_);
        if (!_ || _ == this.currentHoverEl)
            return;
        var A = this.getRowEl(_);
        if ($ && A)
            this["scrollIntoView"](_);
        if (this.currentHoverEl == _)
            return;
        this.clearHoverCls();
        this.currentHoverEl = _;
        siaddclass(A, this._rowhoverCls)
    };
    sidatagridprototype["removeRowCls"] = sidatagridremoverowcls;
    sidatagridprototype["addRowCls"] = sidatagridaddrowcls;
    sidatagridprototype.delayCurrentChanged = function($) {
        if (this._currentTimer)
            clearTimeout(this._currentTimer);
        var _ = this;
        this._currentTimer = setTimeout(function() {
            var A = {
                record: $,
                row: $
            };
            _["fire"]("CurrentChanged", A);
            _._currentTimer = null 
        }
        , 1)
    };
    sidatagridprototype.beforeSelectionChanged = function() {
        if (this._beforeselectchangedTimer)
            clearTimeout(this._beforeselectchangedTimer);
        var $ = this;
        this._beforeselectchangedTimer = setTimeout(function() {
            var _ = {
                selecteds: $["getSelecteds"](),
                selected: $["getSelected"]()
            };
            $["fire"]("SelectionChanged", _);
            $.delayCurrentChanged(_.selected)
        }
        , 1)
    };
    sidatagridprototype.updateRowCls = function(A, D) {
        var B = new Date();
        for (var _ = 0, C = A.length; _ < C; _++) {
            var $ = A[_];
            if (D)
                this["addRowCls"]($, this._rowselectedCls);
            else
                this["removeRowCls"]($, this._rowselectedCls)
        }
    };
    sidatagridprototype["deselects"] = sidatagriddeselects;
    sidatagridprototype["selects"] = sidatagridselects;
    sidatagridprototype["clearSelect"] = sidatagridclearselect;
    sidatagridprototype["deselectAll"] = sidatagriddeselectall;
    sidatagridprototype["selectAll"] = sidatagridselectall;
    sidatagridprototype["deselect"] = sidatagriddeselect;
    sidatagridprototype["select"] = sidatagridselect;
    sidatagridprototype["setSelected"] = sidatagridsetselected;
    sidatagridprototype["scrollIntoView"] = sidatagridscrollintoview;
    sidatagridprototype["getSelected"] = sidatagridgetselected;
    sidatagridprototype["getCurrent"] = sidatagridgetcrrent;
    sidatagridprototype["setCurrent"] = sidatagridsetcurrent;
    sidatagridprototype["getSelecteds"] = sidatagridgetselecteds;
    sidatagridprototype["isSelected"] = sidatagridisselected;
    sidatagridprototype["_getSelectAllCheckState"] = sidatagridgetselectallcheckstate;
    sidatagridprototype["getMultiSelect"] = sidatagridgetmultiselect;
    sidatagridprototype["setMultiSelect"] = sidatagridsetmultiselect;
    sidatagridprototype["getAllowRowSelect"] = sidatagridgetallowrowselect;
    sidatagridprototype["setAllowRowSelect"] = sidatagridsetallowrowselect;
    sidatagridprototype["getAllowUnselect"] = sidatagridgetallowunselect;
    sidatagridprototype["setAllowUnselect"] = sidatagridsetallowunselect;
    sidatagridprototype.refreshSelectedInfo = function() {
        var A = this.allselecteds;
        for (var $ = A.length - 1; $ >= 0; $--) {
            var _ = A[$];
            if (!!this.rowUidMap[_._uid] == false) {
                A.removeAt($);
                delete this.selectedsMap[_._uid]
            }
        }
        if (this.selectedEl)
            if (!!this.selectedsMap[this.selectedEl._uid] == false)
                this.selectedEl = null 
    };
    sidatagridprototype.getRowColumnSpanArrayInfo = function(I, E, A, B) {
        var J = [];
        if (!si.isNumber(I))
            return [];
        if (!si.isNumber(E))
            return [];
        var C = this["getBottomColumns"]()
          , G = this.data;
        for (var F = I, D = I + A; F < D; F++)
            for (var H = E, $ = E + B; H < $; H++) {
                var _ = this.getCellEl(F, H);
                if (_)
                    J.push(_)
            }
        return J
    };
    sidatagridprototype["_doMargeCells"] = sidatagriddomargecells;
    sidatagridprototype["_isCellVisible"] = sidatagridiscellvisible;
    sidatagridprototype["margeCells"] = sidatagridmargecells;
    sidatagridprototype["mergeCells"] = sidatagridmergecells;
    sidatagridprototype["mergeColumns"] = sidatagridmergecolumns;
    sidatagridprototype["onDrawGroupSummary"] = sidatagridondrawgroupsummary;
    sidatagridprototype["onDrawGroupHeader"] = sidatagridondrawgroupheader;
    sidatagridprototype._drawgroup = function($) {
        var _ = {
            group: $,
            rows: $.rows,
            field: $.field,
            dir: $.dir,
            value: $.value,
            cellHtml: $.header + " :" + $.value
        };
        this["fire"]("drawgroup", _);
        return _
    };
    sidatagridprototype._getGroupRow = function(C) {
        if (!this._groupMaps)
            return null ;
        var A = this._groupMaps;
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            if (_.id == C)
                return _
        }
    };
    sidatagridprototype.getGroupMaps = function() {
        if (this["isGrouping"]() == false)
            return null ;
        if (!this._groupMaps) {
            var F = this._groupField
              , H = this._groupDir
              , D = this.data.clone();
            if (typeof H == "function")
                si.sort(D, H);
            else {
                si.sort(D, function(_, B) {
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
                  , E = si.isDate(I) ? I["getTime"]() : I
                  , A = C[E];
                if (!A) {
                    A = C[E] = {};
                    A.header = F;
                    A.field = F;
                    A.dir = H;
                    A.value = I;
                    A.rows = [];
                    B.push(A);
                    A.id = this._groupMapRowId++
                }
                A.rows.push($)
            }
            this._groupMaps = B;
            D = [];
            for (_ = 0,
            G = B.length; _ < G; _++)
                D.addRange(B[_].rows);
            this._groupMaps.data = D
        }
        return this._groupMaps
    };
    sidatagridprototype["isGrouping"] = sidatagridisgrouping;
    sidatagridprototype["getGroupDir"] = sidatagridgetgroupdir;
    sidatagridprototype["getGroupField"] = sidatagridgetgroupfield;
    sidatagridprototype["clearGroup"] = sidatagridcleargroup;
    sidatagridprototype["groupBy"] = sidatagridgroupby;
    sidatagridprototype.expandgroup = function(A) {
        var C = A.rows;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var B = C[_]
              , $ = this.getRowEl(B);
            if ($)
                $.style.display = "";
            $ = this["getRowDetailEl"](B);
            if ($)
                $.style.display = B._showDetail ? "" : "none"
        }
        A.expanded = true;
        var F = this.uid + "$group$" + A.id
          , D = document.getElementById(F);
        if (D)
            siremoveclass(D, "si-grid-group-collapse");
        this["doLayout"]()
    };
    sidatagridprototype.collapsegroup = function(A) {
        var C = A.rows;
        for (var _ = 0, E = C.length; _ < E; _++) {
            var B = C[_]
              , $ = this.getRowEl(B);
            if ($)
                $.style.display = "none";
            $ = this["getRowDetailEl"](B);
            if ($)
                $.style.display = "none"
        }
        A.expanded = false;
        var F = this.uid + "$group$" + A.id
          , D = document.getElementById(F);
        if (D)
            siaddclass(D, "si-grid-group-collapse");
        this["doLayout"]()
    };
    sidatagridprototype["expandGroups"] = sidatagridexpandgroups;
    sidatagridprototype["collapseGroups"] = sidatagridcollapsegroups;
    sidatagridprototype["getShowGroupSummary"] = sidatagridgetshowgroupsummary;
    sidatagridprototype["setShowGroupSummary"] = sidatagridsetshowgroupsummary;
    sidatagridprototype["getCollapseGroupOnLoad"] = sidatagridgetcollapsegrouponload;
    sidatagridprototype["setCollapseGroupOnLoad"] = sidatagridsetcollapsegrouponload;
    sidatagridprototype["findRow"] = sidatagridfindrow;
    sidatagridprototype["findRows"] = sidatagridfindrows;
    sidatagridprototype["getRowByUID"] = sidatagridgetrowbyuid;
    sidatagridprototype["getRowById"] = sidatagridgetrowbyid;
    sidatagridprototype["getRowByValue"] = sidatagridgetrowbyvalue;
    sidatagridprototype["getRow"] = sidatagridgetrow;
    sidatagridprototype["getAt"] = sidatagridgetat;
    sidatagridprototype["indexOf"] = sidatagridindexof;
    sidatagridprototype["clearRows"] = sidatagridclearrows;
    sidatagridprototype["moveDown"] = sidatagridmovedown;
    sidatagridprototype["moveUp"] = sidatagridmoveup;
    sidatagridprototype["moveRow"] = sidatagridmoverow;
    sidatagridprototype["addRow"] = sidatagridaddrow;
    sidatagridprototype["addRows"] = sidatagridaddrows;
    sidatagridprototype["removeRow"] = sidatagridremoverow;
    sidatagridprototype["removeSelected"] = sidatagridremoveselected;
    sidatagridprototype["removeRows"] = sidatagridremoves;
    sidatagridprototype["deleteRow"] = sidatagriddeleterow;
    sidatagridprototype["deleteRows"] = sidatagriddeleterows;
    sidatagridprototype["updateRow"] = sidatagridupdaterow;
    sidatagridprototype["_updateRowEl"] = sidatagridupdaterowel;
    sidatagridprototype.isNeedUpdate = function(A, B) {
        var E = false;
        for (var C in B) {
            var $ = B[C]
              , D = A[C];
            if (si["isEquals"](D, $))
                continue;si._setMap(C, $, A);
            if (A._state != "added") {
                A._state = "modified";
                var _ = this.getRowObject(A);
                if (!_.hasOwnProperty(C))
                    _[C] = D
            }
            E = true
        }
        return E
    };
    sidatagridprototype._hasOwnProperty = function(A, _) {
        var $ = this.rowIdFieldMap[A[this._idField]];
        if (!$)
            return false;
        if (si.isNull(_))
            return false;
        return $.hasOwnProperty(_)
    };
    sidatagridprototype.getRowObject = function($) {
        var A = $[this._idField]
          , _ = this.rowIdFieldMap[A];
        if (!_)
            _ = this.rowIdFieldMap[A] = {};
        return _
    };
    sidatagridprototype["isChanged"] = sidatagridischanged;
    sidatagridprototype["getChanges"] = sidatagridgetchanges;
    sidatagridprototype["getEditRowData"] = sidatagridgeteditrowdata;
    sidatagridprototype["getEditData"] = sidatagridgeteditdata;
    sidatagridprototype["getEditingRow"] = sidatagridgeteditingrow;
    sidatagridprototype["getEditingRows"] = sidatagridgeteditingrows;
    sidatagridprototype["isNewRow"] = sidatagridisnewrow;
    sidatagridprototype["isEditingRow"] = sidatagridiseditingrow;
    sidatagridprototype["isEditing"] = sidatagridisediting;
    sidatagridprototype["commitEditRow"] = sidatagridcommiteditrow;
    sidatagridprototype["cancelEditRow"] = sidatagridcanceleditrow;
    sidatagridprototype["beginEditRow"] = sidatagridbegineditrow;
    sidatagridprototype["getEditorOwnerRow"] = sidatagridgeteditorownerrow;
    sidatagridprototype["_beginEditNextCell"] = sidatagridbegineditnextcell;
    sidatagridprototype.oneditwrapkeydown = function(A) {
        var _ = this.currentEditor;
        if (A.keyCode == 13 && _ && _.type == "textarea")
            return;
        if (A.keyCode == 13) {
            var $ = this.editingCell;
            if ($ && $[1] && $[1].enterCommit === false)
                return;
            this["commitEdit"]();
            this["focus"]();
            if (this.editNextOnEnterKey)
                this["_beginEditNextCell"](A.shiftKey == false)
        } else if (A.keyCode == 27) {
            this["cancelEdit"]();
            this["focus"]()
        } else if (A.keyCode == 9) {
            this["commitEdit"]();
            if (this.editOnTabKey) {
                A.preventDefault();
                this["commitEdit"]();
                this["_beginEditNextCell"](A.shiftKey == false)
            }
        }
    };
    sidatagridprototype._getEditWrapElText = function($) {
        if (!this.editwrapEl) {
            this.editwrapEl = si.append(document.body, "<div class=\"si-grid-editwrap\" style=\"position:absolute;\"></div>");
            siBindEvent(this.editwrapEl, "keydown", this.oneditwrapkeydown, this)
        }
        this.editwrapEl.style.zIndex = 1000000000;
        this.editwrapEl.style.display = "block";
        si["setXY"](this.editwrapEl, $.x, $.y-1);
        sisetwidth(this.editwrapEl, $.width);
        var _ = si.getViewportBox().width;
        if ($.x > _)
            si.setX(this.editwrapEl, -1000);
        return this.editwrapEl
    };
    sidatagridprototype._onOutComponentDocumentMouseDown = function(C) {
        if (this.currentEditor) {
            var A = this.getEventRecordAndColumn(C);
            if (this.editingCell && A)
                if (this.editingCell[0] == A.record && this.editingCell[1] == A.column)
                    return false;
            var _ = false;
            if (this.currentEditor["within"])
                _ = this.currentEditor["within"](C);
            else
                _ = siisAncestor(this.editwrapEl, C.target);
            if (_ == false) {
                var B = this;
                if (siisAncestor(this.bodyEl, C.target) == false)
                    setTimeout(function() {
                        B["commitEdit"]()
                    }
                    , 1);
                else {
                    var $ = B.editingCell;
                    setTimeout(function() {
                        var _ = B.editingCell;
                        if ($ == _)
                            B["commitEdit"]()
                    }
                    , 70)
                }
                siUnBindEvent(document, "mousedown", this._onOutComponentDocumentMouseDown, this)
            }
        }
    };
    sidatagridprototype._beforeCellShowingEdit = function(_, D) {
        if (!this.currentEditor)
            return false;
        var $ = this["getCellBox"](_, D)
          , E = si.getViewportBox().width;
        if ($.right > E) {
            $.width = E - $.left;
            if ($.width < 10)
                $.width = 10;
            $.right = $.left + $.width
        }
        var G = {
            sender: this,
            rowIndex: this.data["indexOf"](_),
            record: _,
            row: _,
            column: D,
            field: D.field,
            cellBox: $,
            editor: this.currentEditor
        };
        this["fire"]("cellshowingedit", G);
        var F = G.editor;
        if (F && F["setIsValid"])
            F["setIsValid"](true);
        var B = this._getEditWrapElText($);
        this.editwrapEl.style.zIndex = si.getMaxZIndex();
        if (F["render"]) {
            F["render"](this.editwrapEl);
            setTimeout(function() {
                F["focus"]();
                if (F["selectText"])
                    F["selectText"]()
            }
            , 50);
            if (F["setVisible"])
                F["setVisible"](true)
        } else if (F.el) {
            this.editwrapEl.appendChild(F.el);
            setTimeout(function() {
                try {
                    F.el["focus"]()
                } catch ($) {}
            }
            , 50)
        }
        if (F["setWidth"]) {
            var A = $.width;
            if (A < 20)
                A = 20;
            F["setWidth"](A)
        }
        if (F["setHeight"] && F.type == "textarea") {
            var C = $.height - 1;
            if (F.minHeight && C < F.minHeight)
                C = F.minHeight;
            F["setHeight"](C)
        }
        if (F["setWidth"] && F.type == "textarea") {
            A = $.width - 1;
            if (F.minWidth && A < F.minWidth)
                A = F.minWidth;
            F["setWidth"](A)
        }
        siBindEvent(document, "mousedown", this._onOutComponentDocumentMouseDown, this);
        if (D.autoShowPopup && F["showPopup"])
            F["showPopup"]()
    };
    sidatagridprototype._beforeCellendedit = function() {
        if (!this.editingCell)
            return;
        var _ = this.editingCell[0]
          , C = this.editingCell[1]
          , E = {
            sender: this,
            record: _,
            rowIndex: this.data["indexOf"](_),
            row: _,
            column: C,
            field: C.field,
            editor: this.currentEditor,
            value: _[C.field]
        };
        this["fire"]("cellendedit", E);
        if (this["allowCellEdit"]) {
            var D = E.editor;
            if (D && D["setIsValid"])
                D["setIsValid"](true);
            if (this.editwrapEl)
                this.editwrapEl.style.display = "none";
            var A = this.editwrapEl.childNodes;
            for (var $ = A.length - 1; $ >= 0; $--) {
                var B = A[$];
                this.editwrapEl.removeChild(B)
            }
            if (D && D["hidePopup"])
                D["hidePopup"]();
            if (D && D["setValue"])
                D["setValue"]("");
            this.currentEditor = null ;
            this.editingCell = null ;
            if (this.allowCellValid)
                this.validateCell(_, C)
        }
    };
    sidatagridprototype._beforeCellCommitEdit = function(A, C, B, F) {
        var E = {
            sender: this,
            record: A,
            rowIndex: this.data["indexOf"](A),
            row: A,
            column: C,
            field: C.field,
            editor: F ? F : this["getCellEditor"](C),
            value: si.isNull(B) ? "" : B,
            text: "",
            cancel: false
        };
        if (E.editor && E.editor["getValue"])
            E.value = E.editor["getValue"]();
        if (E.editor && E.editor["getText"])
            E.text = E.editor["getText"]();
        var D = A[C.field]
          , _ = E.value;
        if (si["isEquals"](D, _))
            return E;
        this["fire"]("cellcommitedit", E);
        if (E.cancel == false)
            if (this["allowCellEdit"]) {
                var $ = {};
                si._setMap(C.field, E.value, $);
                if (C.displayField)
                    si._setMap(C.displayField, E.text, $);
                this["updateRow"](A, $)
            }
        return E
    };
    sidatagridprototype._beforeCellBeginEdit = function($, D, F) {
        var _ = si._getMap(D.field, $)
          , E = {
            sender: this,
            rowIndex: this.data["indexOf"]($),
            row: $,
            record: $,
            column: D,
            field: D.field,
            editor: F,
            value: _,
            cancel: false
        };
        this["fire"]("cellbeginedit", E);
        if (!si.isNull(D["defaultValue"]) && (si.isNull(E.value) || E.value === "")) {
            var C = D["defaultValue"]
              , B = si.clone({
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
        if (si.isNull(_))
            _ = "";
        if (F["setValue"])
            F["setValue"](_);
        F.ownerRowID = $._uid;
        if (D.displayField && F["setText"]) {
            var A = si._getMap(D.displayField, $);
            if (!si.isNull(D.defaultText) && (si.isNull(A) || A === "")) {
                B = si.clone({
                    d: D.defaultText
                });
                A = B.d
            }
            F["setText"](A)
        }
        if (this["allowCellEdit"])
            this.currentEditor = E.editor;
        return true
    };
    sidatagridprototype["getCellEditor"] = sidatagridgetcelleditor;
    sidatagridprototype["commitEdit"] = sidatagridcommitedit;
    sidatagridprototype["cancelEdit"] = sidatagridcanceledit;
    sidatagridprototype["isEditingCell"] = sidatagridiseditingcell;
    sidatagridprototype["beginEditCell"] = sidatagridbegineditcell;
    sidatagridprototype["getAllowCellEdit"] = sidatagridgetallowcelledit;
    sidatagridprototype["setAllowCellEdit"] = sidatagridsetallowcelledit;
    sidatagridprototype["getAllowCellSelect"] = sidatagridgetallowcellselect;
    sidatagridprototype["setAllowCellSelect"] = sidatagridsetallowcellselect;
    sidatagridprototype["getCurrentCell"] = sidatagridgetcurrentcell;
    sidatagridprototype["setCurrentCell"] = sidatagridsetcurrentcell;
    sidatagridprototype.addOrRemoveCurrentSelectedCellCls = function(B) {
        if (this.currentCell) {
            var $ = this.currentCell[0]
              , A = this.currentCell[1]
              , _ = this.getCellEl($, A);
            if (_)
                if (B)
                    siaddclass(_, this.cellselectedCls);
                else
                    siremoveclass(_, this.cellselectedCls)
        }
    };
    sidatagridprototype["_getSortFnByField"] = sidatagridgetsortfnbyfield;
    sidatagridprototype["clearSort"] = sidatagridclearsort;
    sidatagridprototype["sortBy"] = sidatagridsortby;
    sidatagridprototype["gotoPage"] = sidatagridgotopage;
    sidatagridprototype["reload"] = sidatagridreload;
    sidatagridprototype["load"] = sidatagridload;
    sidatagridprototype.insideLoad = function(params, success, fail) {
        try {
            var url = eval(this.url);
            if (url != undefined)
                this.url = url
        } catch (e) {}
        params = params || {};
        if (si.isNull(params["pageIndex"]))
            params["pageIndex"] = 0;
        if (si.isNull(params["pageSize"]))
            params["pageSize"] = this["pageSize"];
        params.sortField = this.sortField;
        params.sortOrder = this.sortOrder;
        if (this.sortMode != "server") {
            params.sortField = this.sortField = "";
            params.sortOrder = this.sortOrder = ""
        }
        this.loadParams = params;
        var o = {};
        o[this.pageIndexField] = params["pageIndex"];
        o[this.pageSizeField] = params["pageSize"];
        if (params.sortField)
            o[this.sortFieldField] = params.sortField;
        if (params.sortOrder)
            o[this.sortOrderField] = params.sortOrder;
        si.copyTo(params, o);
        var url = this.url
          , ajaxMethod = this.ajaxMethod;
        if (url) {
            if (url["indexOf"](".txt") != -1 || url["indexOf"](".json") != -1)
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
        this["fire"]("beforeload", e);
        if (e.data != e.params && e.params != params)
            e.data = e.params;
        if (e.cancel == true) {
            params["pageIndex"] = this["getPageIndex"]();
            params["pageSize"] = this["getPageSize"]();
            return
        }
        if (this.showLoading)
            this["loading"]();
        this.selectedElIdValue = this.selectedEl ? this.selectedEl[this.idField] : null ;
        var sf = me = this
          , url = e.url;
        si.copyTo(e, {
            success: function(C, A, _) {
                var G = null ;
                try {
                    G = si.decode(C)
                } catch (H) {
                    if (si_debugger == true)
                        alert(url + "\ndatagrid json is error.")
                }
                if (G && !si.isArray(G)) {
                    G.total = parseInt(si._getMap(me.totalField, G));
                    G.data = si._getMap(me.dataField, G)
                } else if (G == null ) {
                    G = {};
                    G.data = [];
                    G.total = 0
                } else if (si.isArray(G)) {
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
                sf["unmask"]();
                if (si.isNumber(G.error) && G.error != 0) {
                    var I = {
                        errorCode: G.error,
                        xmlHttp: _,
                        errorMsg: G.message,
                        result: G
                    };
                    if (si_debugger == true)
                        alert(url + "\n" + I.errorMsg + "\n" + G.stackTrace);
                    sf["fire"]("loaderror", I);
                    if (fail)
                        fail["call"](sf, I);
                    return
                }
                var B = G.total
                  , F = sf.getDataObj(G);
                if (si.isNumber(params["pageIndex"]))
                    sf["pageIndex"] = params["pageIndex"];
                if (si.isNumber(params["pageSize"]))
                    sf["pageSize"] = params["pageSize"];
                if (si.isNumber(B))
                    sf["totalCount"] = B;
                var H = {
                    result: G,
                    data: F,
                    total: B,
                    cancel: false,
                    xmlHttp: _
                };
                sf["fire"]("preload", H);
                if (H.cancel == true)
                    return;
                var E = sf._componentLock;
                sf._componentLock = false;
                sf["loadData"](H.data);
                if (sf.selectedElIdValue && sf["checkSelectOnLoad"]) {
                    var $ = sf["getRowById"](sf.selectedElIdValue);
                    if ($)
                        sf["select"]($);
                    else
                        sf["deselectAll"]()
                } else if (sf.selectedEl)
                    sf["deselectAll"]();
                if (sf["getSelected"]() == null  && sf.selectOnLoad && sf.data.length > 0)
                    sf["select"](0);
                if (sf.collapseGroupOnLoad)
                    sf["collapseGroups"]();
                sf["fire"]("load", H);
                if (success)
                    success["call"](sf, H);
                sf._componentLock = E;
                sf["doLayout"]()
            },
            error: function($, B, _) {
                var A = {
                    xmlHttp: $,
                    errorMsg: $.responseText,
                    errorCode: $.status
                };
                if (si_debugger == true)
                    alert(url + "\n" + A.errorCode + "\n" + A.errorMsg);
                sf["fire"]("loaderror", A);
                sf["unmask"]();
                if (fail)
                    fail["call"](sf, A)
            }
        });
        this._tempAjaxRequest = si.ajax(e)
    };
    sidatagridprototype["getResultObject"] = sidatagridgetresultobject;
    sidatagridprototype.getDataObj = sidatagridgetdataobj;
    sidatagridprototype["getCheckSelectOnLoad"] = sidatagridgetcheckselectonload;
    sidatagridprototype["setCheckSelectOnLoad"] = sidatagridsetcheckselectonload;
    sidatagridprototype["getTotalPage"] = sidatagridgettotalpage;
    sidatagridprototype["getTotalCount"] = sidatagridgettotalcount;
    sidatagridprototype["setTotalCount"] = sidatagridsettotalcount;
    sidatagridprototype["getSortOrder"] = sidatagridgetsortorder;
    sidatagridprototype["getSortField"] = sidatagridgetsortfield;
    sidatagridprototype["getDataField"] = sidatagridgetdatafield;
    sidatagridprototype["setDataField"] = sidatagridsetdatafield;
    sidatagridprototype["getTotalField"] = sidatagridgettotalfield;
    sidatagridprototype["setTotalField"] = sidatagridsettotalfield;
    sidatagridprototype["getSortOrderField"] = sidatagridgetsortorderfield;
    sidatagridprototype["setSortOrderField"] = sidatagridsetsortorderfield;
    sidatagridprototype["getSortFieldField"] = sidatagridgetsortfieldfield;
    sidatagridprototype["setSortFieldField"] = sidatagridsetsortfieldfield;
    sidatagridprototype["getPageSizeField"] = sidatagridgetpagesizefield;
    sidatagridprototype["setPageSizeField"] = sidatagridsetpagesizefield;
    sidatagridprototype["getPageIndexField"] = sidatagridgetpageindexfield;
    sidatagridprototype["setPageIndexField"] = sidatagridsetpageindexfield;
    sidatagridprototype["getShowTotalCount"] = sidatagridgetshowtotalcount;
    sidatagridprototype["setShowTotalCount"] = sidatagridsetshowtotalcount;
    sidatagridprototype["getShowPageIndex"] = sidatagridgetshowpageindex;
    sidatagridprototype["setShowPageIndex"] = sidatagridsetshowpageindex;
    sidatagridprototype["getShowPageSize"] = sidatagridgetshowpagesize;
    sidatagridprototype["setShowPageSize"] = sidatagridsetshowpagesize;
    sidatagridprototype["getPageIndex"] = sidatagridgetpageindex;
    sidatagridprototype["setPageIndex"] = sidatagridsetpageindex;
    sidatagridprototype["getPageSize"] = sidatagridgetpagesize;
    sidatagridprototype["setPageSize"] = sidatagridsetpagesize;
    sidatagridprototype["getSizeList"] = sidatagridgetsizelist;
    sidatagridprototype["setSizeList"] = sidatagridsetsizelist;
    sidatagridprototype["getShowPageInfo"] = sidatagridgetshowpageinfo;
    sidatagridprototype["setShowPageInfo"] = sidatagridsetshowpageinfo;
    sidatagridprototype["getShowReloadButton"] = sidatagridgetshowreloadbutton;
    sidatagridprototype["setShowReloadButton"] = sidatagridsetshowreloadbutton;
    sidatagridprototype._onbeforepagechanged = function($) {
        $.cancel = true;
        this["gotoPage"]($.pageIndex, $["pageSize"])
    };
    sidatagridprototype._doRowElLayout = function() {
        for (var $ = 0, B = this.data.length; $ < B; $++) {
            var _ = this.data[$];
            if (_._editing == true) {
                var A = this.getRowEl(_);
                if (A)
                    si.layout(A)
            }
        }
    };
    sidatagridprototype._doDetailLayout = function() {
        for (var $ = 0, B = this.data.length; $ < B; $++) {
            var _ = this.data[$];
            if (_._showDetail == true) {
                var C = this.getRowDetailId(_)
                  , A = document.getElementById(C);
                if (A)
                    si.layout(A)
            }
        }
    };
    sidatagridprototype.setGridDetailRowSpan = function() {
        var _ = jQuery(".si-grid-detailRow", this.el)
          , B = this.countDetailRowSpan();
        for (var A = 0, C = _.length; A < C; A++) {
            var D = _[A]
              , $ = D.firstChild;
            $.colSpan = B
        }
    };
    sidatagridprototype.countDetailRowSpan = function() {
        var D = this._bodyInnerEl.firstChild.getElementsByTagName("tr")[0]
          , B = D.getElementsByTagName("td")
          , A = 0;
        for (var _ = 0, C = B.length; _ < C; _++) {
            var $ = B[_];
            if ($.style.display != "none")
                A++
        }
        return A
    };
    sidatagridprototype.generateGridRowDetail = function($) {
        var A = this.getRowEl($)
          , B = this.getRowDetailId($)
          , _ = this["getBottomColumns"]().length;
        jQuery(A).after("<tr id=\"" + B + "\" class=\"si-grid-detailRow\"><td class=\"si-grid-detailCell\" colspan=\"" + _ + "\"></td></tr>");
        this.setGridDetailRowSpan();
        return document.getElementById(B)
    };
    sidatagridprototype["getRowDetailCellEl"] = sidatagridgetrowdetailcellel;
    sidatagridprototype["getRowDetailEl"] = sidatagridgetrowdetailel;
    sidatagridprototype["isShowRowDetail"] = sidatagridisshowrowdetail;
    sidatagridprototype["toggleRowDetail"] = sidatagridtogglerowdetail;
    sidatagridprototype["hideRowDetail"] = sidatagridhiderowdetail;
    sidatagridprototype["showRowDetail"] = sidatagridshowrowdetail;
    sidatagridprototype["hideAllRowDetail"] = sidatagridhideallrowdetail;
    sidatagridprototype["showAllRowDetail"] = sidatagridshowallrowdetail;
    sidatagridprototype["getAllowCellValid"] = sidatagridgetallowcellvalid;
    sidatagridprototype["setAllowCellValid"] = sidatagridsetallowcellvalid;
    sidatagridprototype["getCellEditAction"] = sidatagridgetcelleditaction;
    sidatagridprototype["setCellEditAction"] = sidatagridsetcelleditaction;
    sidatagridprototype["getShowNewRow"] = sidatagridgetshownewrow;
    sidatagridprototype["setShowNewRow"] = sidatagridsetshownewrow;
    sidatagridprototype["getShowModified"] = sidatagridgetshowmodified;
    sidatagridprototype["setShowModified"] = sidatagridsetshowmodified;
    sidatagridprototype["getEmptyText"] = sidatagridgetemptytext;
    sidatagridprototype["setEmptyText"] = sidatagridsetemptytext;
    sidatagridprototype["getShowEmptyText"] = sidatagridgetshowemptytext;
    sidatagridprototype["setShowEmptyText"] = sidatagridsetshowemptytext;
    sidatagridprototype["getAllowResize"] = sidatagridgetallowresize;
    sidatagridprototype["setAllowResize"] = sidatagridsetallowresize;
    sidatagridprototype["getSelectOnLoad"] = sidatagridgetselectonload;
    sidatagridprototype["setSelectOnLoad"] = sidatagridsetselectonload;
    sidatagridprototype["getAllowResizeColumn"] = sidatagridgetallowresizecolumn;
    sidatagridprototype["setAllowResizeColumn"] = sidatagridsetallowresizecolumn;
    sidatagridprototype["getAllowMoveColumn"] = sidatagridgetallowmovecolumn;
    sidatagridprototype["setAllowMoveColumn"] = sidatagridsetallowmovecolumn;
    sidatagridprototype["getAllowSortColumn"] = sidatagridgetallowsortcolumn;
    sidatagridprototype["setAllowSortColumn"] = sidatagridsetallowsortcolumn;
    sidatagridprototype["getSortMode"] = sidatagridgetsortmode;
    sidatagridprototype["setSortMode"] = sidatagridsetsortmode;
    sidatagridprototype["setAutoHideRowDetail"] = sidatagridsetautohiderowdetail;
    sidatagridprototype["getShowFooter"] = sidatagridgetshowfooter;
    sidatagridprototype["setShowFooter"] = sidatagridsetshowfooter;
    sidatagridprototype["getShowPager"] = sidatagridgetshowpager;
    sidatagridprototype["setShowPager"] = sidatagridsetshowpager;
    sidatagridprototype["setShowHeader"] = sidatagridsetshowheader;
    sidatagridprototype["getFooterCls"] = sidatagridgetfootercls;
    sidatagridprototype["setFooterCls"] = sidatagridsetfootercls;
    sidatagridprototype["getFooterStyle"] = sidatagridgetfooterstyle;
    sidatagridprototype["setFooterStyle"] = sidatagridsetfooterstyle;
    sidatagridprototype["getBodyCls"] = sidatagridgetbodycls;
    sidatagridprototype["setBodyCls"] = sidatagridsetbodycls;
    sidatagridprototype["getBodyStyle"] = sidatagridgetbodystyle;
    sidatagridprototype["setBodyStyle"] = sidatagridsetbodystyle;
    sidatagridprototype["getScrollTop"] = sidatagridgetscrolltop;
    sidatagridprototype["setScrollTop"] = sidatagridsetscrolltop;
    sidatagridprototype["getVirtualScroll"] = sidatagridgetvirtualscroll;
    sidatagridprototype["setVirtualScroll"] = sidatagridsetvirtualscroll;
    sidatagridprototype["getEditOnTabKey"] = sidatagridgeteditontabkey;
    sidatagridprototype["setEditOnTabKey"] = sidatagridseteditontabkey;
    sidatagridprototype["getEditNextOnEnterKey"] = sidatagridgeteditnextonenterkey;
    sidatagridprototype["setEditNextOnEnterKey"] = sidatagridseteditnextonenterkey;
    sidatagridprototype["getShowColumnsMenu"] = sidatagridgetshowcolumnsmenu;
    sidatagridprototype["setShowColumnsMenu"] = sidatagridsetshowcolumnsmenu;
    sidatagridprototype["getAllowHeaderWrap"] = sidatagridgetallowheaderwarp;
    sidatagridprototype["setAllowHeaderWrap"] = sidatagridsetallowheaderwarp;
    sidatagridprototype["getAllowCellWrap"] = sidatagridgetallowcellwarp;
    sidatagridprototype["setAllowCellWrap"] = sidatagridsetallowcellwarp;
    sidatagridprototype["setShowLoading"] = sidatagridsetshowloading;
    sidatagridprototype["getEnableHotTrack"] = sidatagridgetenablehottrack;
    sidatagridprototype["setEnableHotTrack"] = sidatagridsetenablehottrack;
    sidatagridprototype["getAllowAlternating"] = sidatagridgetallowalternating;
    sidatagridprototype["setAllowAlternating"] = sidatagridsetallowalternating;
    sidatagridprototype.alternateAllRows = function() {
        if (this["allowAlternating"] == false)
            return;
        var B = this.data;
        for (var _ = 0, C = B.length; _ < C; _++) {
            var A = B[_]
              , $ = this.getRowEl(A);
            if ($)
                if (this["allowAlternating"] && _ % 2 == 1)
                    siaddclass($, this.altCls);
                else
                    siremoveclass($, this.altCls)
        }
    };
    sidatagridprototype["getShowSummaryRow"] = sidatagridgetshowsummaryrow;
    sidatagridprototype["setShowSummaryRow"] = sidatagridsetshowsummaryrow;
    sidatagridprototype["getShowFilterRow"] = sidatagridgetshowfilterrow;
    sidatagridprototype["setShowFilterRow"] = sidatagridsetshowfilterrow;
    sidatagridprototype["getShowVGridLines"] = sidatagridgetshowvgridlines;
    sidatagridprototype["setShowVGridLines"] = sidatagridsetshowvgridlines;
    sidatagridprototype["getShowHGridLines"] = sidatagridgetshowhgridlines;
    sidatagridprototype["setShowHGridLines"] = sidatagridsetshowhgridlines;
    sidatagridprototype["_doGridLines"] = sidatagriddogridlines;
    sidatagridprototype._setDataGridRowElHeight = function(B) {
        var D = this.data;
        for (var _ = 0, E = D.length; _ < E; _++) {
            var A = D[_]
              , $ = this.getRowEl(A);
            if ($)
                if (B) {
                    var C = 0;
                    $.style.height = C + "px"
                } else
                    $.style.height = ""
        }
    };
    sidatagridprototype["_doScrollFrozen"] = sidatagriddoscrollfrozen;
    sidatagridprototype.onScrollElScroll = function(_) {
        var $ = this;
        if (this._HScrollTimer)
            return;
        this._HScrollTimer = setTimeout(function() {
            $["_doScrollFrozen"]();
            $._HScrollTimer = null 
        }
        , 30)
    };
    sidatagridprototype.onBodyElScroll = function(_) {
        this.filterRowEl.scrollLeft = this.summaryRowEl.scrollLeft = this._headerInnerEl.scrollLeft = this.bodyEl.scrollLeft;
        var $ = this;
        setTimeout(function() {
            $._headerInnerEl.scrollLeft = $.bodyEl.scrollLeft
        }
        , 10);
        if (this["isVirtualScroll"]()) {
            $ = this;
            if (this._scrollTopTimer)
                clearTimeout(this._scrollTopTimer);
            this._scrollTopTimer = setTimeout(function() {
                $._scrollTopTimer = null ;
                $["_tryUpdateScroll"]()
            }
            , 100)
        }
    };
    sidatagridprototype["_tryUpdateScroll"] = sidatagridtryupdatescroll;
    sidatagridprototype["_canVirtualUpdate"] = sidatagridcanvirtualupdate;
    sidatagridprototype["_getViewNowRegion"] = sidatagridgetviewnowregion;
    sidatagridprototype._getViewRegionObject = function() {
        var E = this["_getViewNowRegion"]()
          , D = this._rowHeight
          , G = this.bodyEl.scrollTop
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
    };
    sidatagridprototype["frozenColumns"] = sidatagridfrozencolumns;
    sidatagridprototype["unFrozenColumns"] = sidatagridunfrozencolumns;
    sidatagridprototype["getFrozenEndColumn"] = sidatagridgetfrozenendcolumn;
    sidatagridprototype["setFrozenEndColumn"] = sidatagridsetfrozenendcolumn;
    sidatagridprototype["getFrozenStartColumn"] = sidatagridgetfrozenstartcolumn;
    sidatagridprototype["setFrozenStartColumn"] = sidatagridsetfrozenstartcolumn;
    sidatagridprototype["_deferFrozen"] = sidatagriddeferfrozen;
    sidatagridprototype._beforeGridFrozenLayout = function() {
        this.scrollEl.scrollLeft = this._headerInnerEl.scrollLeft = this.bodyEl.scrollLeft = 0;
        var C = this["isFrozen"]();
        if (C)
            siaddclass(this.el, this.frozenCls);
        else
            siremoveclass(this.el, this.frozenCls);
        var D = this["getBottomColumns"]()
          , _ = this.filterRowEl.firstChild
          , $ = this.summaryRowEl.firstChild;
        if (C) {
            _.style.height = jQuery(_).outerHeight() + "px";
            $.style.height = jQuery($).outerHeight() + "px"
        } else {
            _.style.height = "auto";
            $.style.height = "auto"
        }
        if (this["isFrozen"]()) {
            for (var A = 0, E = D.length; A < E; A++) {
                var B = D[A];
                if (this["frozenStartColumn"] <= A && A <= this["frozenEndColumn"])
                    this.AddOrRemoveFrozenCellCls(B, this.frozeCellCls, true);
                else
                    this.AddOrRemoveFrozenCellCls(B, this.frozeCellCls, false)
            }
            this._setDataGridRowElHeight(true)
        } else {
            for (A = 0,
            E = D.length; A < E; A++) {
                B = D[A];
                delete B._hide;
                if (B.visible)
                    this.changeDisplayValue(B, true);
                this.AddOrRemoveFrozenCellCls(B, this.frozeCellCls, false)
            }
            this.updateHeader();
            this._setDataGridRowElHeight(false)
        }
        this["doLayout"]();
        this._borderElforIE()
    };
    sidatagridprototype.AddOrRemoveFrozenCellCls = function(B, D, $) {
        var J = this.data;
        if (this["isVirtualScroll"]()) {
            var F = this._getViewRegionObject()
              , A = F.start
              , C = F.end;
            for (var H = A, E = C; H < E; H++) {
                var I = J[H]
                  , G = this.getRowColumnId(I, B)
                  , _ = document.getElementById(G);
                if (_)
                    if ($)
                        siaddclass(_, D);
                    else
                        siremoveclass(_, D)
            }
        } else
            for (H = 0,
            E = this.data.length; H < E; H++) {
                I = this.data[H],
                G = this.getRowColumnId(I, B),
                _ = document.getElementById(G);
                if (_)
                    if ($)
                        siaddclass(_, D);
                    else
                        siremoveclass(_, D)
            }
    };
    sidatagridprototype.changeDisplayValue = function(E, R) {
        var L = document.getElementById(this.generateId(E));
        if (L)
            L.style.display = R ? "" : "none";
        var F = document.getElementById(this.getFilterColumnId(E));
        if (F)
            F.style.display = R ? "" : "none";
        var _ = document.getElementById(this.getSummaryColumnId(E));
        if (_)
            _.style.display = R ? "" : "none";
        var M = this.generateId(E) + "$header"
          , Q = this.generateId(E) + "$body"
          , B = this.generateId(E) + "$filter"
          , G = this.generateId(E) + "$summary"
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
        if (this["isVirtualScroll"]()) {
            var I = this._getViewRegionObject()
              , C = I.start
              , D = I.end;
            for (var K = C, H = D; K < H; K++) {
                var N = P[K]
                  , J = this.getRowColumnId(N, E)
                  , A = document.getElementById(J);
                if (A)
                    A.style.display = R ? "" : "none"
            }
        } else
            for (K = 0,
            H = this.data.length; K < H; K++) {
                N = this.data[K],
                J = this.getRowColumnId(N, E),
                A = document.getElementById(J);
                if (A)
                    A.style.display = R ? "" : "none"
            }
    };
    sidatagridprototype["getColumnWidth"] = function(B) {
        B = this["getColumn"](B);
        if (!B)
            return 0;
        if (B.visible == false)
            return 0;
        var _ = 0
          , C = this.generateId(B) + "$body"
          , A = document.getElementById(C);
        if (A) {
            var $ = A.style.display;
            A.style.display = "";
            _ = sigetwidth(A);
            A.style.display = $
        }
        return _
    };
    sidatagridprototype["setColumnWidth"] = function(E, B) {
        E = this["getColumn"](E);
        if (!E)
            return;
        if (si.isNumber(B))
            B += "px";
        E.width = B;
        var _ = this.generateId(E) + "$header"
          , F = this.generateId(E) + "$body"
          , A = this.generateId(E) + "$filter"
          , D = this.generateId(E) + "$summary"
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
        this["doLayout"]();
        this["fire"]("columnschanged")
    };
    sidatagridprototype["getRowsBox"] = sidatagridgetrowsbox;
    sidatagridprototype["getRowBox"] = sidatagridgetrowbox;
    sidatagridprototype["getCellBox"] = function (row,column) {row = this["getRow"](row); column = this["getColumn"](column); if (!row || !column) return null; var cellEl = this.getCellEl(row,column); if (!cellEl) return null; return sigetbox(cellEl); };
    sidatagridprototype.getRowEl = function (row) {row = this["getRow"](row); if (!row) return null; var id = this.getRowId(row); return sigetelementbyid(id,this.el); };
    sidatagridprototype["getSummaryCellEl"] = sidatagridgetsummarycellel;
    sidatagridprototype["getFilterCellEl"] = function (column) {column = this["getColumn"](column); if (!column) return null; return sigetelementbyid(this.getFilterColumnId(column),this.el); };
    sidatagridprototype["_getHeaderScrollEl"] = sidatagridgetheaderscrollel;
    sidatagridprototype.getRowDetailId = function($) {
        return this.uid + "$detail$" + $._uid
    };
    sidatagridprototype.getSummaryColumnId = function (column) {return this.uid + "$summary$" + column._id; };
    sidatagridprototype.getFilterColumnId = function (column) {return this.uid + "$filter$" + column._id; };
    sidatagridprototype.getRowColumnId = function (row,column) {return this.uid + "$" + row._uid + "$" + column._id; };
    sidatagridprototype.getRowId = function (row) {return this.uid + "$" + row._uid; };
    sidatagridprototype.getTotalColumnWidth = function() {
        if (this.bodyEl.offsetWidth < this._bodyInnerEl.firstChild.offsetWidth || this["isFrozen"]()) {
            var _ = 0
              , B = this["getBottomColumns"]();
            for (var $ = 0, C = B.length; $ < C; $++) {
                var A = B[$];
                _ += this["getColumnWidth"](A)
            }
            return _
        } else
            return 0
    };
    sidatagridprototype["isFitColumns"] = function () {return this.fitColumns && !this["isFrozen"](); };
    sidatagridprototype["getFitColumns"] = sidatagridgetfitcolumns;
    sidatagridprototype["setFitColumns"] = function (value) {this.fitColumns = value; if (this.fitColumns) {siremoveclass(this.el,"si-grid-fixcolumns"); } else {siaddclass(this.el,"si-grid-fixcolumns"); } this["doLayout"](); };
    sidatagridprototype["_doInnerLayout"] = function () {this._doDetailLayout(); this._doRowElLayout(); si.layout(this.filterRowEl); si.layout(this.summaryRowEl); si.layout(this.footerEl); si["repaint"](this.el); this._doLayouted = true; };
    sidatagridprototype["_doLayoutTopRightCell"] = function() {
        var A = this._headerInnerEl.firstChild
        , $ = A.offsetWidth + 1
        , _ = A.offsetHeight - 1;
      if (_ < 0)
          _ = 0;
      this._topRightCellEl.style.left = $ + "px";
      this._topRightCellEl.style.height = _ + "px"
  };
    sidatagridprototype["doLayout"] = function() {
        if (!this["canLayout"]())
            return;
        this.filterRowEl.scrollLeft = this.summaryRowEl.scrollLeft = this._headerInnerEl.scrollLeft = this.bodyEl.scrollLeft;
        var L = new Date()
          , N = this["isFrozen"]()
          , J = this._headerInnerEl.firstChild
          , C = this._bodyInnerEl.firstChild
          , G = this.filterRowEl.firstChild
          , $ = this.summaryRowEl.firstChild
          , K = this["getData"]();
        if (K.length == 0)
            C.style.height = "1px";
        else
            C.style.height = "auto";
        var M = this["isAutoHeight"]();
        h = this["getHeight"](true);
        B = this["getWidth"](true);
        var I = B;
        if (I < 17)
            I = 17;
        if (h < 0)
            h = 0;
        var H = I
          , _ = 2000;
        if (!M) {
            h = h - this["getHeaderHeight"]() - this["getFooterHeight"]() - this["getFilterRowHeight"]() - this["getSummaryRowHeight"]() - this.getScrollHeight();
            if (h < 0)
                h = 0;
            this.bodyEl.style.height = h + "px";
            _ = h
        } else
            this.bodyEl.style.height = "auto";
        var D = this.bodyEl.scrollHeight
          , F = this.bodyEl.clientHeight
          , A = jQuery(this.bodyEl).css("overflow-y") == "hidden";
        if (this["isFitColumns"]()) {
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
                if (H >= this.bodyEl.scrollWidth - 1)
                    this.bodyEl.style.height = "auto";
                else
                    this.bodyEl.style.height = (C.offsetHeight + 17) + "px";
            if (M && N)
                this.bodyEl.style.height = "auto"
        } else {
            J.style.width = C.style.width = "0px";
            G.style.width = $.style.width = "0px"
        }
        if (this["isFitColumns"]()) {
            if (!A && F < D) {
                B = I - 18;
                if (B < 0)
                    B = 0
            } else {
                this._headerInnerEl.style.width = "100%";
                this.filterRowEl.style.width = "100%";
                this.summaryRowEl.style.width = "100%";
                this.footerEl.style.width = "auto"
            }
        } else {
            this._headerInnerEl.style.width = "100%";
            this.filterRowEl.style.width = "100%";
            this.summaryRowEl.style.width = "100%";
            this.footerEl.style.width = "auto"
        }
        if (this["isFrozen"]()) {
            if (!A && F < this.bodyEl.scrollHeight)
                this.scrollEl.style.width = (I - 17) + "px";
            else
                this.scrollEl.style.width = (I) + "px";
            if (this.bodyEl.offsetWidth < C.offsetWidth || this["isFrozen"]()) {
                this.scrollEl.firstChild.style.width = this.getTotalColumnWidth() + "px";
                J.style.width = C.style.width = "0px";
                G.style.width = $.style.width = "0px"
            } else
                this.scrollEl.firstChild.style.width = "0px"
        }
        if (this.data.length == 0)
            this["_doInnerLayout"]();
        else {
            var E = this;
            if (!this._innerLayoutTimer)
                this._innerLayoutTimer = setTimeout(function() {
                    E["_doInnerLayout"]();
                    E._innerLayoutTimer = null 
                }
                , 10)
        }
        this["_doLayoutTopRightCell"]();
        this["fire"]("layout");
        if (this["isFrozen"]())
            if (this.scrollEl.scrollLeft != this.__frozenScrollLeft)
                this["_doScrollFrozen"]()
    };
    sidatagridprototype._deferLayout = function () {var me = this; if (this._tempTimer) return; this._tempTimer = setTimeout(function () {me["doLayout"](); me._tempTimer = null; },1); };
    sidatagridprototype._borderElforIE = function () {if (isIE) {this.borderEl.style.display = "none"; h = this["getHeight"](true); w = this["getWidth"](true); this.borderEl.style.display = ""; } };
    sidatagridprototype["doUpdate"] = function() {
        var $ = new Date();
        if (this.allowUpdate === false)
            return;
        if (this["isAutoHeight"]() == true)
            this["addCls"]("si-grid-auto");
        else
            this["removeCls"]("si-grid-auto");
        if (this.initSummaryRow)
            this.initSummaryRow();
        this["_doUpdateBody"]();
        if (this["isVirtualScroll"]())
            ;if (this["isFrozen"]()) {
            var _ = this;
            _.onScrollElScroll()
        }
        this["doLayout"]()
    };
    sidatagridprototype["getScrollLeft"] = function () {return this["isFrozen"]() ? this.scrollEl.scrollLeft :this.bodyEl.scrollLeft; };
    sidatagridprototype["isVirtualScroll"] = function () {return this.virtualScroll && this["isAutoHeight"]() == false && this["isGrouping"]() == false; };
    sidatagridprototype._getGridRowStr = function(F, D, P) {
        if (!si.isNumber(P))
            P = this["indexOf"](F);
        var L = P == this.data.length - 1
          , N = this["isFrozen"]()
          , O = !D;
        if (!D)
            D = [];
        var A = this["getBottomColumns"]()
          , G = -1
          , I = " "
          , E = -1
          , J = " ";
        D[D.length] = "<tr id=\"";
        D[D.length] = this.getRowId(F);
        D[D.length] = "\" class=\"si-grid-row ";
        if (this["isSelected"](F)) {
            D[D.length] = this._rowselectedCls;
            D[D.length] = " "
        }
        if (F._state == "deleted")
            D[D.length] = "si-grid-deleteRow ";
        if (F._state == "added" && this.showNewRow)
            D[D.length] = "si-grid-newRow ";
        if (this["allowAlternating"] && P % 2 == 1) {
            D[D.length] = this.altCls;
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
              , M = _.field ? this._hasOwnProperty(F, _.field) : false
              , B = this.getCellError(F, _)
              , Q = this.getCellObject(F, _, P, K)
              , C = this.getRowColumnId(F, _);
            D[D.length] = "<td id=\"";
            D[D.length] = C;
            D[D.length] = "\" class=\"si-grid-cell ";
            if (Q.cellCls)
                D[D.length] = Q.cellCls;
            if (B)
                D[D.length] = " si-grid-cell-error ";
            if (this.currentCell && this.currentCell[0] == F && this.currentCell[1] == _) {
                D[D.length] = " ";
                D[D.length] = this.cellselectedCls
            }
            if (L)
                D[D.length] = " si-grid-last-row ";
            if (K == H)
                D[D.length] = " si-grid-last-column ";
            if (N && this["frozenStartColumn"] <= K && K <= this["frozenEndColumn"]) {
                D[D.length] = " ";
                D[D.length] = this.frozeCellCls + " "
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
            if (N && K < this["frozenStartColumn"] || _.visible == false || _._hide == true)
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
                D[D.length] = "<div class=\"si-grid-cell-inner si-grid-cell-dirty\" style=\"";
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
    };
    sidatagridprototype["_doUpdateBody"] = function() {
        var D = this["getBottomColumns"]();
        for (var G = 0, P = D.length; G < P; G++) {
            var B = D[G];
            delete B._hide
        }
        this.updateHeader();
        var U = this.data
          , K = this["isVirtualScroll"]()
          , R = this._getViewRegionObject()
          , S = []
          , V = this["isAutoHeight"]()
          , _ = 0;
        if (K)
            _ = R.top;
        if (V)
            S[S.length] = "<table class=\"si-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        else
            S[S.length] = "<table style=\"position:absolute;top:" + _ + "px;left:0;\" class=\"si-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        S[S.length] = this.getTrElementString("body");
        if (U.length > 0) {
            if (this["isGrouping"]()) {
                var J = 0
                  , T = this.getGroupMaps()
                  , L = this.getVisibleColumns();
                for (var I = 0, $ = T.length; I < $; I++) {
                    var N = T[I]
                      , E = this.uid + "$group$" + N.id
                      , W = this._drawgroup(N);
                    S[S.length] = "<tr id=\"" + E + "\" class=\"si-grid-groupRow\"><td class=\"si-grid-groupCell\" colspan=\"" + L.length + "\"><div class=\"si-grid-groupHeader\">";
                    S[S.length] = "<div class=\"si-grid-group-ecicon\"></div>";
                    S[S.length] = "<div class=\"si-grid-groupTitle\">" + W.cellHtml + "</div>";
                    S[S.length] = "</div></td></tr>";
                    var O = N.rows;
                    for (G = 0,
                    P = O.length; G < P; G++) {
                        var H = O[G];
                        this._getGridRowStr(H, S, J++)
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
                    this._getGridRowStr(H, S, G)
                }
            } else
                for (G = 0,
                P = U.length; G < P; G++) {
                    H = U[G];
                    this._getGridRowStr(H, S, G)
                }
        } else if (this.showEmptyText)
            S[S.length] = "<tr ><td class=\"si-grid-emptyText\" colspan=\"" + this.getVisibleColumns().length + "\">" + this["emptyText"] + "</td></tr>";
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
    };
    sidatagridprototype.updateHeader = function(L) {
        L = L || "";
        var N = this["isFrozen"]()
          , A = this.getColumnLevelColRowSpan()
          , G = this["getBottomColumns"]()
          , H = G.length
          , F = [];
        F[F.length] = "<table style=\"" + L + ";display:table\" class=\"si-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        F[F.length] = this.getTrElementString("header");
        for (var M = 0, _ = A.length; M < _; M++) {
            var D = A[M];
            F[F.length] = "<tr >";
            for (var I = 0, E = D.length; I < E; I++) {
                var B = D[I]
                  , C = this.getHeaderText(B)
                  , J = this.generateId(B)
                  , $ = "";
                if (this.sortField == B.field)
                    $ = this.sortOrder == "asc" ? "si-grid-asc" : "si-grid-desc";
                F[F.length] = "<td id=\"";
                F[F.length] = J;
                F[F.length] = "\" class=\"si-grid-headerCell " + $ + " " + (B.headerCls || "") + " ";
                if (I == H - 1)
                    F[F.length] = " si-grid-last-column ";
                F[F.length] = "\" style=\"";
                var K = G["indexOf"](B);
                if ((N && K != -1 && K < this["frozenStartColumn"]) || B.visible == false || B._hide == true)
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
                F[F.length] = "><div class=\"si-grid-cellInner\">";
                F[F.length] = C;
                if ($)
                    F[F.length] = "<span class=\"si-grid-sortIcon\"></span>";
                F[F.length] = "</div>";
                F[F.length] = "</td>"
            }
            F[F.length] = "</tr>"
        }
        F[F.length] = "</table>";
        var O = F.join("");
        O = "<div class=\"si-grid-header\">" + O + "</div>";
        O = "<div class=\"si-grid-scrollHeaderCell\"></div>";
        O += "<div class=\"si-grid-topRightCell\"></div>";
        this._headerInnerEl.innerHTML = F.join("") + O;
        this._topRightCellEl = this._headerInnerEl.lastChild;
        this["fire"]("refreshHeader")
    };
    sidatagridprototype.getHeaderText = function (column) {var header = column.header; if (typeof header == "function") header = header["call"](this,column); if (si.isNull(header) || header === "") header = " "; return header; };
    sidatagridprototype.initSummaryRow = function() {
        var _ = this["getData"]();
        if (this.summaryRowEl.firstChild)
            this.summaryRowEl.removeChild(this.summaryRowEl.firstChild);
        var B = this["isFrozen"]()
          , C = this["getBottomColumns"]()
          , F = [];
        F[F.length] = "<table class=\"si-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        F[F.length] = this.getTrElementString("summary");
        F[F.length] = "<tr >";
        for (var $ = 0, D = C.length; $ < D; $++) {
            var A = C[$]
              , E = this.getSummaryColumnId(A)
              , G = this["_OnDrawSummaryCell"](_, A);
            F[F.length] = "<td id=\"";
            F[F.length] = E;
            F[F.length] = "\" class=\"si-grid-summaryCell " + G.cellCls + "\" style=\"" + G.cellStyle + ";";
            if ((B && $ < this["frozenStartColumn"]) || A.visible == false || A._hide == true)
                F[F.length] = ";display:none;";
            F[F.length] = "\">";
            F[F.length] = G.cellHtml;
            F[F.length] = "</td>"
        }
        F[F.length] = "</tr></table><div class=\"si-grid-scrollCell\"></div>";
        this.summaryRowEl.innerHTML = F.join("")
    };
    sidatagridprototype.initFilter = function() {
        if (this.filterRowEl.firstChild)
            this.filterRowEl.removeChild(this.filterRowEl.firstChild);
        var B = this["isFrozen"]()
          , C = this["getBottomColumns"]()
          , F = [];
        F[F.length] = "<table class=\"si-grid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        F[F.length] = this.getTrElementString("filter");
        F[F.length] = "<tr >";
        for (var $ = 0, D = C.length; $ < D; $++) {
            var A = C[$]
              , E = this.getFilterColumnId(A);
            F[F.length] = "<td id=\"";
            F[F.length] = E;
            F[F.length] = "\" class=\"si-grid-filterCell\" style=\"";
            if ((B && $ < this["frozenStartColumn"]) || A.visible == false || A._hide == true)
                F[F.length] = ";display:none;";
            F[F.length] = "\"><span class=\"si-grid-hspace\"></span></td>"
        }
        F[F.length] = "</tr></table><div class=\"si-grid-scrollCell\"></div>";
        this.filterRowEl.innerHTML = F.join("");
        for ($ = 0,
        D = C.length; $ < D; $++) {
            A = C[$];
            if (A["filter"]) {
                var _ = this["getFilterCellEl"]($);
                A["filter"]["render"](_)
            }
        }
    };
    sidatagridprototype.getTrElementString = function(F) {
        var A = F == "empty"
          , B = 0;
        if (A && this.showEmptyText == false)
            B = 1;
        var H = ""
          , D = this["getBottomColumns"]();
        if (A)
            H += "<tr style=\"height:" + B + "px\">";
        else if (isIE) {
            if (isIE6 || isIE7 || (isIE8 && !si.boxModel) || (isIE9 && !si.boxModel))
                H += "<tr style=\"display:none;\">";
            else
                H += "<tr >"
        } else
            H += "<tr style=\"height:" + B + "px\">";
        for (var $ = 0, E = D.length; $ < E; $++) {
            var C = D[$]
              , _ = C.width
              , G = this.generateId(C) + "$" + F;
            H += "<td id=\"" + G + "\" style=\"padding:0;border:0;margin:0;height:" + B + "px;";
            if (C.width)
                H += "width:" + C.width;
            if ($ < this["frozenStartColumn"] || C.visible == false)
                H += ";display:none;";
            H += "\" ></td>"
        }
        H += "</tr>";
        return H
    };
    sidatagridprototype.getScrollHeight = function () {return this["isFrozen"]() ? sigetheight(this.scrollEl) :0; };
    sidatagridprototype["getSummaryRowHeight"] = function () {return this["showSummaryRow"] ? sigetheight(this.summaryRowEl) :0; };
    sidatagridprototype["getFilterRowHeight"] = sidatagridgetfilterrowheight;
    sidatagridprototype["getFooterHeight"] = function () {return this["showFooter"] ? sigetheight(this.footerEl) :0; };
    sidatagridprototype["getHeaderHeight"] = function () {return this.showHeader ? sigetheight(this.headerEl) :0; };
    sidatagridprototype["selectRange"] = function($, _) {
        if (!si.isNumber($))
            $ = this["indexOf"]($);
        if (!si.isNumber(_))
            _ = this["indexOf"](_);
        if (si.isNull($) || si.isNull(_))
            return;
        var A = this["getRange"]($, _);
        this["selects"](A)
    };
    sidatagridprototype["getRange"] = function (start,end) {if (start > end) {var t = start; start = end; end = t; } var data = this.data; var range = []; for (var i = start,l = end; i <= l; i++) {var o = data[i]; range.push(o); } return range; };
    sidatagridprototype["toArray"] = function () {return this.data.clone(); };
    sidatagridprototype["getData"] = function () {return this.data.clone(); };
    sidatagridprototype["setData"] = function (data) {this["loadData"](data); };
    sidatagridprototype["loadData"] = function(A) {
        if (!si.isArray(A))
            A = [];
        this.data = A;
        if (this._needIdFieldMap == true)
            this.rowIdFieldMap = {};
        this._removedRows = [];
        this.rowUidMap = {};
        this.allselecteds = [];
        this.selectedsMap = {};
        this._cellErrors = [];
        this._cellMapErrors = {};
        this._margedCells = null ;
        this._mergedCellMaps = null ;
        this._groupMaps = null ;
        for (var $ = 0, B = A.length; $ < B; $++) {
            var _ = A[$];
            _._uid = _sigridglobalrowid++;
            _._index = $;
            this.rowUidMap[_._uid] = _
        }
        this["doUpdate"]()
    };
    sidatagridprototype["acceptRecord"] = function (row) {row = this["getRow"](row); if (!row) return; if (row._state == "removed") {this._removedRows.remove(row); } delete this.rowIdFieldMap[row._uid]; delete row._state; if (this._idleToUpdate) {this["_updateRowEl"](row); } };
    sidatagridprototype["accept"] = sidatagridaccept;
    sidatagridprototype["getAutoLoad"] = sidatagridgetautoload;
    sidatagridprototype["setAutoLoad"] = function (value) {this.autoLoad = value; };
    sidatagridprototype["getUrl"] = function (url) {return this.url; };
    sidatagridprototype["setUrl"] = function (url) {this.url = url; };
    sidatagridprototype["getIdField"] = function () {return this["idField"]; };
    sidatagridprototype["setIdField"] = function (value) {this["idField"] = value; };
    sidatagridprototype["bindPager"] = function (pager) {pager["on"]("beforepagechanged",this._onbeforepagechanged,this); this["on"]("load",function (e) {pager["update"](this.pageIndex,this.pageSize,this["totalCount"]); this.totalPage = pager.totalPage; },this); };
    sidatagridprototype["setPager"] = function (value) {if (typeof value == "string") {var el = sigetelementbyid(value); if (!el) return; si.analyze(value); value = si.get(value); } if (value) {this["bindPager"](value); } };
    sidatagridprototype.initPager = function () {this.pager = new si.Pager(); this.pager["render"](this.footerEl); this["bindPager"](this.pager); };
    sidatagridprototype["focus"] = function() {
        try {
            var _ = this["getCurrent"]();
            if (_) {
                var $ = this.getRowEl(_);
                if ($) {
                    var A = sigetbox($);
                    si.setY(this._focusEl, A.top);
                    if (isOpera)
                        $["focus"]();
                    else if (isChrome)
                        this.el["focus"]();
                    else if (isGecko)
                        this.el["focus"]();
                    else
                        this._focusEl["focus"]()
                }
            } else
                this._focusEl["focus"]()
        } catch (B) {}
    };
    sidatagridprototype.updateRows = function() {
        this.resizerTriggerEl.style.display = this["allowResize"] ? "" : "none";
        this.footerEl.style.display = this["showFooter"] ? "" : "none";
        this.summaryRowEl.style.display = this["showSummaryRow"] ? "" : "none";
        this.filterRowEl.style.display = this["showFilterRow"] ? "" : "none";
        this.headerEl.style.display = this.showHeader ? "" : "none"
    };
    sidatagridprototype["_initEvents"] = function() {
        js_touchScroll(this.bodyEl);
        siEventTimer(function() {
            siBindEvent(this.el, "click", this._onclick, this);
            siBindEvent(this.el, "dblclick", this._ondblclick, this);
            siBindEvent(this.el, "mousedown", this._onmousedown, this);
            siBindEvent(this.el, "mouseup", this._onmouseup, this);
            siBindEvent(this.el, "mousemove", this._onmousemove, this);
            siBindEvent(this.el, "mouseover", this._onmouseover, this);
            siBindEvent(this.el, "mouseout", this._onmouseout, this);
            siBindEvent(this.el, "keydown", this._onkeydown, this);
            siBindEvent(this.el, "keyup", this._onkeyup, this);
            siBindEvent(this.el, "contextmenu", this._oncontextmenu, this);
            siBindEvent(this.bodyEl, "scroll", this.onBodyElScroll, this);
            siBindEvent(this.scrollEl, "scroll", this.onScrollElScroll, this);
            siBindEvent(this.el, "mousewheel", this._onmousewheel, this)
        }
        , this);
        this._DraggableTool = new si.BaseDraggable(this);
        this._GridSplitter = new si.GridSplitter(this);
        this._ColumnMove = new si.GridColumnMove(this);
        this.oOlloo = new si.GridCellEvent(this);
        this._CellTip = new si.CellTip(this);
        this._Sort = new si.GridSort(this);
        this.ContentMenu = new si.ContentMenu(this)
    };
    sidatagridprototype["destroy"] = function($) {
        if (this.bodyEl) {
            si["clearEvent"](this.bodyEl);
            this.bodyEl = null 
        }
        if (this.scrollEl) {
            si["clearEvent"](this.scrollEl);
            this.scrollEl = null 
        }
        this.borderEl = null ;
        this.headerEl = null ;
        this.filterRowEl = null ;
        this.bodyEl = null ;
        this.scrollEl = null ;
        this.summaryRowEl = null ;
        this.footerEl = null ;
        this.resizerTriggerEl = null ;
        si.DataGrid["superclass"]["destroy"]["call"](this, $)
    };
    sidatagridprototype["_create"] = sicreategrid;
    sidatagridprototype["set"] = sidatagridset;
    sidatagridprototype["isFrozen"] = function () {return this["frozenStartColumn"] >= 0 && this["frozenEndColumn"] >= this["frozenStartColumn"]; };
    siRegClass(si.DataGrid, "datagrid");
    si.BaseGridColumn = {
        _getColumnEl: function($) {
            $ = this["getColumn"]($);
            if (!$)
                return null ;
            var _ = this.generateId($);
            return document.getElementById(_)
        },
        getCellEl: function($, _) {
            $ = this["getRow"] ? this["getRow"]($) : this["getNode"]($);
            _ = this["getColumn"](_);
            if (!$ || !_)
                return null ;
            var A = this.getRowColumnId($, _);
            return document.getElementById(A)
        },
        getEventRecordAndColumn: function(A) {
            var $ = this.getRowByEvent ? this.getRowByEvent(A) : this["_getNodeByEvent"](A)
              , _ = this.getHeaderColumnObj(A);
            return {
                record: $,
                column: _
            }
        },
        getHeaderColumnObj: function(B) {
            var _ = sifindAncestor(B.target, this._cellCls);
            if (!_)
                _ = sifindAncestor(B.target, this._headerCellCls);
            if (_) {
                var $ = _.id.split("$")
                  , A = $[$.length - 1];
                return this.getColumnObject(A)
            }
            return null 
        },
        generateId: function($) {
            return this.uid + "$column$" + $._id
        },
        getColumnBox: function(A) {
            var B = this.generateId(A)
              , _ = document.getElementById(B);
            if (_) {
                var $ = sigetbox(_);
                $.x -= 1;
                $.left = $.x;
                $.right = $.x + $.width;
                return $
            }
        },
        setColumns: function(value) {
            if (!si.isArray(value))
                value = [];
            this.columns = value;
            this.columnIdMap = {};
            this.columnNameMap = {};
            this.bottomColumns = [];
            this.maxColumnLevel = 0;
            var level = 0;
            function init(column, index, parentColumn) {
                if (column.type) {
                    if (!si.isNull(column.header) && typeof column.header !== "function")
                        if (column.header.trim() == "")
                            delete column.header;
                    var col = si["_getColumn"](column.type);
                    if (col) {
                        var _column = si.copyTo({}, column);
                        si.copyTo(column, col);
                        si.copyTo(column, _column)
                    }
                }
                var width = parseInt(column.width);
                if (si.isNumber(width) && String(width) == column.width)
                    column.width = width + "px";
                if (si.isNull(column.width))
                    column.width = this["columnWidth"] + "px";
                column.visible = column.visible !== false;
                column["allowResize"] = column["allowResize"] !== false;
                column.allowMove = column.allowMove !== false;
                column.allowSort = column.allowSort === true;
                column.allowDrag = !!column.allowDrag;
                column["readOnly"] = !!column["readOnly"];
                column.autoEscape = !!column.autoEscape;
                if (!column._id)
                    column._id = _sigridglobalcolumnid++;
                column._gridUID = this.uid;
                column["_rowIdField"] = this["_rowIdField"];
                column._pid = parentColumn == this ? -1 : parentColumn._id;
                this.columnIdMap[column._id] = column;
                if (column.name)
                    this.columnNameMap[column.name] = column;
                if (!column.columns || column.columns.length == 0)
                    this.bottomColumns.push(column);
                column.level = level;
                level += 1;
                this["eachColumns"](column, init, this);
                level -= 1;
                if (column.level > this.maxColumnLevel)
                    this.maxColumnLevel = column.level;
                if (typeof column.editor == "string") {
                    var cls = si.getClass(column.editor);
                    if (cls)
                        column.editor = {
                            type: column.editor
                        };
                    else
                        column.editor = eval("(" + column.editor + ")")
                }
                if (typeof column["filter"] == "string")
                    column["filter"] = eval("(" + column["filter"] + ")");
                if (column["filter"] && !column["filter"].el)
                    column["filter"] = si.create(column["filter"]);
                if (typeof column.init == "function" && column.inited != true)
                    column.init(this);
                column.inited = true
            }
            this["eachColumns"](this, init, this);
            if (this.initFilter)
                this.initFilter();
            this["doUpdate"]();
            this["fire"]("columnschanged")
        },
        getColumns: function() {
            return this.columns
        },
        getBottomColumns: function() {
            return this.bottomColumns
        },
        getVisibleColumns: function() {
            var B = this["getBottomColumns"]()
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
            for (var $ = 0, B = this.bottomColumns.length; $ < B; $++) {
                var _ = this.bottomColumns[$];
                if (this["isVisibleColumn"](_))
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
                    if (F["call"](C, $, A, B) === false)
                        break
                }
            }
        },
        getColumn: function($) {
            var _ = typeof $;
            if (_ == "number")
                return this["getBottomColumns"]()[$];
            else if (_ == "object")
                return $;
            else
                return this.columnNameMap[$]
        },
        getColumnByField: function(A) {
            if (!A)
                return;
            var B = this["getBottomColumns"]();
            for (var $ = 0, C = B.length; $ < C; $++) {
                var _ = B[$];
                if (_.field == A)
                    return _
            }
            return _
        },
        getColumnObject: function($) {
            return this.columnIdMap[$]
        },
        getParentColumn: function($) {
            $ = this["getColumn"]($);
            var _ = $._pid;
            if (_ == -1)
                return this;
            return this.columnIdMap[_]
        },
        getAncestorColumns: function(A) {
            var _ = [];
            while (1) {
                var $ = this["getParentColumn"](A);
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
            var A = this["getAncestorColumns"](B);
            for (var $ = 0, C = A.length; $ < C; $++)
                if (A[$] == _)
                    return true;
            return false
        },
        isVisibleColumn: function(_) {
            _ = this["getColumn"](_);
            var A = this["getAncestorColumns"](_);
            for (var $ = 0, B = A.length; $ < B; $++)
                if (A[$].visible == false)
                    return false;
            return true
        },
        updateColumn: function(_, $) {
            _ = this["getColumn"](_);
            if (!_)
                return;
            si.copyTo(_, $);
            this["setColumns"](this.columns)
        },
        removeColumn: function($) {
            $ = this["getColumn"]($);
            var _ = this["getParentColumn"]($);
            if ($ && _) {
                _.columns.remove($);
                this["setColumns"](this.columns)
            }
            return $
        },
        moveColumn: function(C, _, A) {
            C = this["getColumn"](C);
            _ = this["getColumn"](_);
            if (!C || !_ || !A || C == _)
                return;
            if (this["isAncestorColumn"](C, _))
                return;
            var D = this["getParentColumn"](C);
            if (D)
                D.columns.remove(C);
            var B = _
              , $ = A;
            if ($ == "before") {
                B = this["getParentColumn"](_);
                $ = B.columns["indexOf"](_)
            } else if ($ == "after") {
                B = this["getParentColumn"](_);
                $ = B.columns["indexOf"](_) + 1
            } else if ($ == "add" || $ == "append") {
                if (!B.columns)
                    B.columns = [];
                $ = B.columns.length
            } else if (!si.isNumber($))
                return;
            B.columns.insert($, C);
            this["setColumns"](this.columns)
        },
        hideColumns: function(A) {
            if (this["allowCellEdit"])
                this["commitEdit"]();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = this["getColumn"](A[$]);
                if (!_)
                    continue;_.visible = false
            }
            this["setColumns"](this.columns)
        },
        showColumns: function(A) {
            if (this["allowCellEdit"])
                this["commitEdit"]();
            for (var $ = 0, B = A.length; $ < B; $++) {
                var _ = this["getColumn"](A[$]);
                if (!_)
                    continue;_.visible = true
            }
            this["setColumns"](this.columns)
        },
        hideColumn: function($) {
            $ = this["getColumn"]($);
            if (!$)
                return;
            if (this["allowCellEdit"])
                this["commitEdit"]();
            $.visible = false;
            this["setColumns"](this.columns)
        },
        showColumn: function($) {
            $ = this["getColumn"]($);
            if (!$)
                return;
            if (this["allowCellEdit"])
                this["commitEdit"]();
            $.visible = true;
            this["setColumns"](this.columns)
        },
        getColumnLevelColRowSpan: function() {
            var _ = this["getMaxColumnLevel"]()
              , D = [];
            for (var C = 0, F = _; C <= F; C++)
                D.push([]);
            function A(C) {
                var D = si["treeToArray"](C.columns, "columns")
                  , A = 0;
                for (var $ = 0, B = D.length; $ < B; $++) {
                    var _ = D[$];
                    if (_.visible != true || _._hide == true)
                        continue;if (!_.columns || _.columns.length == 0)
                        A += 1
                }
                return A
            }
            var $ = si["treeToArray"](this.columns, "columns");
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
    si.copyTo(si.DataGrid.prototype, si.BaseGridColumn);
    si.GridSort = function($) {
        this.grid = $;
        siBindEvent($.headerEl, "mousemove", this.__OnGridHeaderMouseMove, this);
        siBindEvent($.headerEl, "mouseout", this.__OnGridHeaderMouseOut, this)
    }
    ;
    si.GridSort["prototype"] = {
        __OnGridHeaderMouseOut: function($) {
            if (this._gridHeaderCellColumnEl)
                siremoveclass(this._gridHeaderCellColumnEl, "si-grid-headerCell-hover")
        },
        __OnGridHeaderMouseMove: function(_) {
            var $ = sifindAncestor(_.target, "si-grid-headerCell");
            if ($) {
                siaddclass($, "si-grid-headerCell-hover");
                this._gridHeaderCellColumnEl = $
            }
        },
        __onGridHeaderCellClick: function($) {}
    };
    si.GridSplitter = function($) {
        this.grid = $;
        siBindEvent(this.grid.el, "mousedown", this._onmove_mousedown, this);
        $["on"]("layout", this._onGridSplitterLayout, this)
    }
    ;
    si.GridSplitter["prototype"] = {
        _onGridSplitterLayout: function(A) {
            if (this.splittersEl)
                si["removeNode"](this.splittersEl);
            if (this.splitterTimer)
                return;
            var $ = this.grid;
            if ($["isDisplay"]() == false)
                return;
            var _ = this;
            this.splitterTimer = setTimeout(function() {
                var H = $["getBottomColumns"]()
                  , I = H.length
                  , E = sigetbox($.headerEl, true)
                  , B = $["getScrollLeft"]()
                  , G = [];
                for (var J = 0, F = H.length; J < F; J++) {
                    var D = H[J]
                      , C = $["getColumnBox"](D);
                    if (!C)
                        break;
                    var A = C.top - E.top
                      , M = C.right - E.left - 2
                      , K = C.height;
                    if ($["isFrozen"] && $["isFrozen"]()) {
                        if (J >= $["frozenStartColumn"])
                            ;
                    } else
                        M += B;
                    var N = $["getParentColumn"](D);
                    if (N && N.columns)
                        if (N.columns[N.columns.length - 1] == D)
                            if (K + 5 < E.height) {
                                A = 0;
                                K = E.height
                            }
                    if ($["allowResizeColumn"] && D["allowResize"])
                        G[G.length] = "<div id=\"" + D._id + "\" class=\"si-grid-splitter\" style=\"left:" + (M - 1) + "px;top:" + A + "px;height:" + K + "px;\"></div>"
                }
                var O = G.join("");
                _.splittersEl = document.createElement("div");
                _.splittersEl.className = "si-grid-splitters";
                _.splittersEl.innerHTML = O;
                var L = $["_getHeaderScrollEl"]();
                L.appendChild(_.splittersEl);
                _.splitterTimer = null 
            }
            , 100)
        },
        _onmove_mousedown: function(B) {
            var $ = this.grid
              , A = B.target;
            if (sihasclass(A, "si-grid-splitter")) {
                var _ = $.columnIdMap[A.id];
                if ($["allowResizeColumn"] && _ && _["allowResize"]) {
                    this.splitterColumn = _;
                    this.getDrag().start(B)
                }
            }
        },
        getDrag: function() {
            if (!this.drag)
                this.drag = new si.Drag({
                    capture: true,
                    onStart: si.createDelegate(this.onDragStart, this),
                    onMove: si.createDelegate(this.onDragMove, this),
                    onStop: si.createDelegate(this.onDragStop, this)
                });
            return this.drag
        },
        onDragStart: function(_) {
            var $ = this.grid
              , B = $["getColumnBox"](this.splitterColumn);
            this.columnBox = B;
            this.proxyDragEl = si.append(document.body, "<div class=\"si-grid-proxy\"></div>");
            var A = $["getBox"](true);
            A.x = B.x;
            A.width = B.width;
            A.right = B.right;
            sisetbox(this.proxyDragEl, A)
        },
        onDragMove: function(A) {
            var $ = this.grid
              , B = si.copyTo({}, this.columnBox)
              , _ = B.width + (A.now[0] - A.init[0]);
            if (_ < $.columnMinWidth)
                _ = $.columnMinWidth;
            if (_ > $.columnMaxWidth)
                _ = $.columnMaxWidth;
            sisetwidth(this.proxyDragEl, _)
        },
        onDragStop: function(E) {
            var $ = this.grid
              , F = sigetbox(this.proxyDragEl)
              , D = this
              , C = $["allowSortColumn"];
            $["allowSortColumn"] = false;
            setTimeout(function() {
                jQuery(D.proxyDragEl).remove();
                D.proxyDragEl = null ;
                $["allowSortColumn"] = C
            }
            , 10);
            var G = this.splitterColumn
              , _ = parseInt(G.width);
            if (_ + "%" != G.width) {
                var A = $["getColumnWidth"](G)
                  , B = parseInt(_ / A * F.width);
                $["setColumnWidth"](G, B)
            }
        }
    };
    si.GridColumnMove = function($) {
        this.grid = $;
        siBindEvent(this.grid.el, "mousedown", this._onmove_mousedown, this)
    }
    ;
    si.GridColumnMove["prototype"] = {
        _onmove_mousedown: function(B) {
            var $ = this.grid;
            if ($["isEditing"] && $["isEditing"]())
                return;
            if (sihasclass(B.target, "si-grid-splitter"))
                return;
            if (B.button == si.MouseButton.Right)
                return;
            var A = sifindAncestor(B.target, $._headerCellCls);
            if (A) {
                this._remove();
                var _ = $.getHeaderColumnObj(B);
                if ($["allowMoveColumn"] && _ && _.allowMove) {
                    this.dragColumn = _;
                    this._columnEl = A;
                    this.getDrag().start(B)
                }
            }
        },
        getDrag: function() {
            if (!this.drag)
                this.drag = new si.Drag({
                    capture: false,
                    onStart: si.createDelegate(this.onDragStart, this),
                    onMove: si.createDelegate(this.onDragMove, this),
                    onStop: si.createDelegate(this.onDragStop, this)
                });
            return this.drag
        },
        onDragStart: function(_) {
            function A(_) {
                var A = _.header;
                if (typeof A == "function")
                    A = A["call"]($, _);
                if (si.isNull(A) || A === "")
                    A = "&nbsp;";
                return A
            }
            var $ = this.grid;
            this.proxyDragEl = si.append(document.body, "<div class=\"si-grid-columnproxy\"></div>");
            this.proxyDragEl.innerHTML = "<div class=\"si-grid-columnproxy-inner\" style=\"height:26px;\">" + A(this.dragColumn) + "</div>";
            si["setXY"](this.proxyDragEl, _.now[0] + 15, _.now[1] + 18);
            siaddclass(this.proxyDragEl, "si-grid-no");
            this.moveTop = si.append(document.body, "<div class=\"si-grid-movetop\"></div>");
            this.moveBottom = si.append(document.body, "<div class=\"si-grid-movebottom\"></div>")
        },
        onDragMove: function(A) {
            var $ = this.grid
              , G = A.now[0];
            si["setXY"](this.proxyDragEl, G + 15, A.now[1] + 18);
            this.targetColumn = this.insertAction = null ;
            var D = sifindAncestor(A.event.target, $._headerCellCls);
            if (D) {
                var C = $.getHeaderColumnObj(A.event);
                if (C && C != this.dragColumn) {
                    var _ = $["getParentColumn"](this.dragColumn)
                      , E = $["getParentColumn"](C);
                    if (_ == E) {
                        this.targetColumn = C;
                        this.insertAction = "before";
                        var F = $["getColumnBox"](this.targetColumn);
                        if (G > F.x + F.width / 2)
                            this.insertAction = "after"
                    }
                }
            }
            if (this.targetColumn) {
                siaddclass(this.proxyDragEl, "si-grid-ok");
                siremoveclass(this.proxyDragEl, "si-grid-no");
                var B = $["getColumnBox"](this.targetColumn);
                this.moveTop.style.display = "block";
                this.moveBottom.style.display = "block";
                if (this.insertAction == "before") {
                    si["setXY"](this.moveTop, B.x - 4, B.y - 9);
                    si["setXY"](this.moveBottom, B.x - 4, B.bottom)
                } else {
                    si["setXY"](this.moveTop, B.right - 4, B.y - 9);
                    si["setXY"](this.moveBottom, B.right - 4, B.bottom)
                }
            } else {
                siremoveclass(this.proxyDragEl, "si-grid-ok");
                siaddclass(this.proxyDragEl, "si-grid-no");
                this.moveTop.style.display = "none";
                this.moveBottom.style.display = "none"
            }
        },
        _remove: function() {
            var $ = this.grid;
            si["removeNode"](this.proxyDragEl);
            si["removeNode"](this.moveTop);
            si["removeNode"](this.moveBottom);
            this.proxyDragEl = this.moveTop = this.moveBottom = this.dragColumn = this.targetColumn = null 
        },
        onDragStop: function(_) {
            var $ = this.grid;
            $["moveColumn"](this.dragColumn, this.targetColumn, this.insertAction);
            this._remove()
        }
    };
    
    si.GridCellEvent = function($) {
        this.grid = $;
        this.grid["on"]("cellmousedown", this._oncellmousedown, this);
        this.grid["on"]("cellclick", this._oncellclick, this);
        this.grid["on"]("celldblclick", this._oncellclick, this);
        siBindEvent(this.grid.el, "keydown", this._onkeydown, this)
    };
    
    si.GridCellEvent["prototype"] = {
    	_onkeydown: function(G) {
            var $ = this.grid;
            if (siisAncestor($.filterRowEl, G.target) || siisAncestor($.summaryRowEl, G.target) || siisAncestor($.footerEl, G.target) || sifindAncestor(G.target, "si-grid-detailRow") || sifindAncestor(G.target, "si-grid-rowEdit"))
                return;
            var A = $["getCurrentCell"]();
            if (G.ctrlKey)
                return;
            if (G.keyCode == 37 || G.keyCode == 38 || G.keyCode == 39 || G.keyCode == 40)
                G.preventDefault();
            var C = $["getBottomVisibleColumns"]()
              , B = A ? A[1] : null
              , _ = A ? A[0] : null ;
            if (!A)
                _ = $["getCurrent"]();
            var F = C["indexOf"](B)
              , D = $["indexOf"](_)
              , E = $["getData"]().length;
            switch (G.keyCode) {
            case 9:
                if ($["allowCellEdit"] && $.editOnTabKey) {
                    G.preventDefault();
                    $["_beginEditNextCell"](G.shiftKey == false);
                    return
                }
                break;
            case 27:
                break;
            case 13:
                if ($["allowCellEdit"] && $.editNextOnEnterKey)
                    if ($["isEditingCell"](A) || !B.editor) {
                        $["_beginEditNextCell"](G.shiftKey == false);
                        return
                    }
                if ($["allowCellEdit"] && A && !B["readOnly"])
                    $["beginEditCell"]();
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
                if (D != 0 && $["isVirtualScroll"]())
                    if ($._viewRegion.start > D) {
                        $.bodyEl.scrollTop -= $._rowHeight;
                        $["_tryUpdateScroll"]()
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
                if ($["isVirtualScroll"]())
                    if ($._viewRegion.end < D) {
                        $.bodyEl.scrollTop += $._rowHeight;
                        $["_tryUpdateScroll"]()
                    }
                break;
              default:
                break
            }
            B = C[F];
            _ = $["getAt"](D);
            if (B && _ && $["allowCellSelect"]) {
                A = [_, B];
                $["setCurrentCell"](A);
                $["scrollIntoView"](_, B)
            }
            if (_ && $["allowRowSelect"]) {
                $["deselectAll"]();
                $["setCurrent"](_)
            }
        },
        _oncellclick: function(B) {
            var $ = this.grid;
            if ($["allowCellEdit"] == false)
                return;
            if (this.grid.cellEditAction != B.type)
                return;
            var _ = B.record
              , A = B.column;
            if (!A["readOnly"] && !this.grid["isReadOnly"]())
                if (B.htmlEvent.shiftKey || B.htmlEvent.ctrlKey)
                    ;
                else
                    this.grid["beginEditCell"]()
        },
        _oncellmousedown: function(_) {
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
            if (this.grid["allowCellSelect"]) {
                var A = [_, B];
                this.grid["setCurrentCell"](A)
            }
            if ($["allowRowSelect"])
                if ($["multiSelect"]) {
                    this.grid.el.onselectstart = function() {}
                    ;
                    if (D.htmlEvent.shiftKey) {
                        this.grid.el.onselectstart = function() {
                            return false
                        }
                        ;
                        D.htmlEvent.preventDefault();
                        if (!this.currentRecord) {
                            this.grid["select"](_);
                            this.currentRecord = this.grid["getSelected"]()
                        } else {
                            this.grid["deselectAll"]();
                            this.grid["selectRange"](this.currentRecord, _)
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
                            if ($["isSelected"](_))
                                $["deselect"](_);
                            else
                                $["select"](_)
                        } else if ($["isSelected"](_))
                            ;
                        else {
                            $["deselectAll"]();
                            $["select"](_)
                        }
                        this.currentRecord = this.grid["getSelected"]()
                    }
                } else if (!$["isSelected"](_)) {
                    $["deselectAll"]();
                    $["select"](_)
                } else if (D.htmlEvent.ctrlKey)
                    $["deselectAll"]()
        }
    };
    si.CellTip = function($) {
        this.grid = $;
        siBindEvent(this.grid.el, "mousemove", this.__onGridMouseMove, this)
    }
    ;
    si.CellTip["prototype"] = {
        __onGridMouseMove: function(D) {
            var $ = this.grid
              , A = $.getEventRecordAndColumn(D)
              , _ = $.getCellEl(A.record, A.column)
              , B = $.getCellError(A.record, A.column);
            if (_) {
                if (B) {
                    _.title = B.errorText;
                    return
                }
                if (_.firstChild)
                    if (sihasclass(_.firstChild, "si-grid-cell-inner") || sihasclass(_.firstChild, "si-treegrid-treecolumn-inner"))
                        _ = _.firstChild;
                if (_.scrollWidth > _.clientWidth) {
                    var C = _.innerText || _.textContent || "";
                    _.title = C.trim()
                } else
                    _.title = ""
            }
        }
    };
    si.ContentMenu = function($) {
        this.grid = $;
        this.menu = this.createMenu();
        siBindEvent($.el, "contextmenu", this._oncontextmenu, this)
    }
    ;
    si.ContentMenu["prototype"] = {
        createMenu: function() {
            var $ = si.create({
                type: "menu",
                hideOnClick: false
            });
            $["on"]("itemclick", this._onitemclick, this);
            return $
        },
        updateMenu: function() {
            var _ = this.grid
              , F = this.menu
              , D = _["getBottomColumns"]()
              , B = [];
            for (var A = 0, E = D.length; A < E; A++) {
                var C = D[A]
                  , $ = {};
                $.checked = C.visible;
                $["checkOnClick"] = true;
                $.text = _.getHeaderText(C);
                if ($.text == "&nbsp;") {
                    if (C.type == "indexcolumn")
                        $.text = "\u5e8f\u53f7";
                    if (C.type == "checkcolumn")
                        $.text = "\u9009\u62e9"
                }
                B.push($);
                $._column = C
            }
            F["setItems"](B)
        },
        _oncontextmenu: function(_) {
            var $ = this.grid;
            if ($.showColumnsMenu == false)
                return;
            if (siisAncestor($.headerEl, _.target) == false)
                return;
            this["updateMenu"]();
            this.menu["showAtPos"](_.pageX, _.pageY);
            return false
        },
        _onitemclick: function(J) {
            var C = this.grid
              , I = this.menu
              , A = C["getBottomColumns"]()
              , E = I["getItems"]()
              , $ = J.item
              , _ = $._column
              , H = 0;
            for (var D = 0, B = E.length; D < B; D++) {
                var F = E[D];
                if (F["getChecked"]())
                    H++
            }
            if (H < 1)
                $["setChecked"](true);
            var G = $["getChecked"]();
            if (G)
                C.showColumn(_);
            else
                C.hideColumn(_)
        }
    };
    si.BaseValidateGrid = {
        getCellErrors: function() {
            var A = this._cellErrors.clone()
              , C = this.data;
            for (var $ = 0, D = A.length; $ < D; $++) {
                var E = A[$]
                  , _ = E.record
                  , B = E.column;
                if (C["indexOf"](_) == -1) {
                    var F = _[this._rowIdField] + "$" + B._id;
                    delete this._cellMapErrors[F];
                    this._cellErrors.remove(E)
                }
            }
            return this._cellErrors
        },
        getCellError: function($, _) {
            $ = this["getNode"] ? this["getNode"]($) : this["getRow"]($);
            _ = this["getColumn"](_);
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
            var B = this["getBottomColumns"]();
            for (var $ = 0, C = B.length; $ < C; $++) {
                var A = B[$];
                this.validateCell(_, A)
            }
        },
        validateCell: function(C, E) {
            C = this["getNode"] ? this["getNode"](C) : this["getRow"](C);
            E = this["getColumn"](E);
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
            if (E.validator)
                si._doValidate(E.validator, I.value, I, E);
            if (I["isValid"] == true && E.unique && E.field) {
                var A = {}
                  , D = this.data
                  , F = E.field;
                for (var _ = 0, G = D.length; _ < G; _++) {
                    var $ = D[_]
                      , H = $[F];
                    if (si.isNull(H) || H === "")
                        ;
                    else {
                        var B = A[H];
                        if (B && $ == C) {
                            I["isValid"] = false;
                            I.errorText = si._getValidatorErrorText(E, "uniqueErrorText");
                            this.setCellIsValid(B, E, I.isValid, I.errorText);
                            break
                        }
                        A[H] = $
                    }
                }
            }
            this["fire"]("cellvalidation", I);
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
            var B = this["getColumns"]();
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
            _ = this["getNode"] ? this["getNode"](_) : this["getRow"](_);
            A = this["getColumn"](A);
            if (!_ || !A)
                return;
            var E = _[this._rowIdField] + "$" + A._id
              , $ = this.getCellEl(_, A)
              , C = this._cellMapErrors[E];
            delete this._cellMapErrors[E];
            this._cellErrors.remove(C);
            if (B === true) {
                if ($ && C)
                    siremoveclass($, "si-grid-cell-error")
            } else {
                C = {
                    record: _,
                    column: A,
                    isValid: B,
                    errorText: D
                };
                this._cellMapErrors[E] = C;
                this._cellErrors["add"](C);
                if ($)
                    siaddclass($, "si-grid-cell-error")
            }
        }
    };
    si.copyTo(si.DataGrid.prototype, si.BaseValidateGrid);
    si.GridEditor = function() {
        this._inited = true;
        si.Control["superclass"]["constructor"]["call"](this);
        this["_create"]();
        this.el.uid = this.uid;
        this["_initEvents"]();
        this.tempMethord();
        this["addCls"](this.uiCls)
    }
    ;
    siextend(si.GridEditor, si.Control, {
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
    si.Tree = function($) {
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
        this.nodeIdMap = {};
        this.nodeIdFieldMap = {};
        this._viewNodes = null ;
        si.Tree["superclass"]["constructor"]["call"](this, $);
        this["on"]("beforeexpand", function(B) {
            var $ = B.node
              , A = this["isLeaf"]($)
              , _ = $[this.nodesField];
            if (!A && (!_ || _.length == 0))
                if (this.loadOnExpand && $.asyncLoad !== false) {
                    B.cancel = true;
                    this["loadNode"]($)
                }
        }
        , this);
        this["doUpdate"]()
    }
    ;
    si.Tree.NodeUID = 1;
    var lastNodeLevel = [];
    siextend(si.Tree, si.Control, {
        isTree: true,
        _display: "block",
        autoEscape: false,
        loadOnExpand: true,
        removeOnCollapse: true,
        expandOnDblClick: true,
        expandOnNodeClick: false,
        value: "",
        selectedNode: null ,
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
        checkboxCls: "si-tree-checkbox",
        selectedNodeCls: "si-tree-selectedNode",
        hoverNodeCls: "si-tree-node-hover",
        leafIcon: "si-tree-leaf",
        folderIcon: "si-tree-folder",
        boderCls: "si-tree-border",
        _headerCls: "si-tree-header",
        bodyCls: "si-tree-body",
        treeNodeCls: "si-tree-node",
        treeNodesCls: "si-tree-nodes",
        expandCls: "si-tree-expand",
        collapseCls: "si-tree-collapse",
        eciconCls: "si-tree-node-ecicon",
        nodeshowCls: "si-tree-nodeshow",
        uiCls: "si-tree",
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
    siTreePrototype = si.Tree["prototype"];
    siTreePrototype["getAttrs"] = function(C) {
    var G = si.Tree["superclass"]["getAttrs"]["call"](this, C);
    si["_ParseString"](C, G, ["value", "url", "idField", "textField", "iconField", "nodesField", "parentField", "valueField", "leafIcon", "folderIcon", "ondrawnode", "onbeforenodeselect", "onnodeselect", "onnodemousedown", "onnodeclick", "onnodedblclick", "onbeforeload", "onpreload", "onload", "onloaderror", "ondataload", "onbeforenodecheck", "onnodecheck", "onbeforeexpand", "onexpand", "onbeforecollapse", "oncollapse", "dragGroupName", "dropGroupName", "onendedit", "expandOnLoad", "ajaxOption", "onbeforedrop", "ondrop", "ongivefeedback"]);
    si["_ParseBool"](C, G, ["allowSelect", "showCheckBox", "showExpandButtons", "showTreeIcon", "showTreeLines", "checkRecursive", "enableHotTrack", "showFolderCheckBox", "resultAsTree", "allowLeafDropIn", "allowDrag", "allowDrop", "showArrow", "expandOnDblClick", "removeOnCollapse", "autoCheckParent", "loadOnExpand", "expandOnNodeClick", "autoEscape"]);
    if (G.ajaxOption)
        G.ajaxOption = si.decode(G.ajaxOption);
    if (G.expandOnLoad) {
        var _ = parseInt(G.expandOnLoad);
        if (si.isNumber(_))
            G.expandOnLoad = _;
        else
            G.expandOnLoad = G.expandOnLoad == "true" ? true : false
    }
    var E = G["idField"] || this["idField"]
      , B = G["textField"] || this["textField"]
      , F = G.iconField || this.iconField
      , A = G.nodesField || this.nodesField;
    function $(I) {
        var N = [];
        for (var L = 0, J = I.length; L < J; L++) {
            var D = I[L]
              , H = si["getChildNodes"](D)
              , R = H[0]
              , G = H[1];
            if (!R || !G)
                R = D;
            var C = jQuery(R)
              , _ = {}
              , K = _[E] = R.getAttribute("value");
            _[F] = C.attr("iconCls");
            _[B] = R.innerHTML;
            N["add"](_);
            var P = C.attr("expanded");
            if (P)
                _.expanded = P == "false" ? false : true;
            var Q = C.attr("allowSelect");
            if (Q)
                _["allowSelect"] = Q == "false" ? false : true;
            if (!G)
                continue;var O = si["getChildNodes"](G)
              , M = $(O);
            if (M.length > 0)
                _[A] = M
        }
        return N
    }
    var D = $(si["getChildNodes"](C));
    if (D.length > 0)
        G.data = D;
    if (!G["idField"] && G["valueField"])
        G["idField"] = G["valueField"];
    return G
};
    siTreePrototype._ongivefeedback = function(A, _, $) {
    var B = {};
    B.effect = A;
    B.nodes = _;
    B.targetNode = $;
    B.node = B.nodes[0];
    B.dragNodes = _;
    B.dragNode = B.dragNodes[0];
    B.dropNode = B.targetNode;
    B.dragAction = B.action;
    this["fire"]("givefeedback", B);
    return B
};
    siTreePrototype.getDragDropNodes = function(_, $, A) {
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
    this["fire"]("beforedrop", B);
    this["fire"]("DragDrop", B);
    return B
};
    siTreePrototype.onDragStart = function($) {
    var _ = {
        node: $,
        cancel: false
    };
    this["fire"]("DragStart", _);
    return _
};
    siTreePrototype["isAllowDrag"] = function($) {
    if (!this.allowDrag)
        return false;
    if ($.allowDrag === false)
        return false;
    var _ = this.onDragStart($);
    return !_.cancel
};
    siTreePrototype["getDropGroupName"] = function() {
    return this["dropGroupName"]
};
    siTreePrototype["setDropGroupName"] = function($) {
    this["dropGroupName"] = $
};
    siTreePrototype["getDragGroupName"] = function() {
    return this["dragGroupName"]
};
    siTreePrototype["setDragGroupName"] =  function($) {
    this["dragGroupName"] = $
};
    siTreePrototype["getAllowDrop"] = function() {
    return this["allowDrop"]
};
    siTreePrototype["setAllowDrop"] = function($) {
    this["allowDrop"] = $
};
    siTreePrototype["getAllowDrag"] = function() {
    return this.allowDrag
};
    siTreePrototype["setAllowDrag"] = function($) {
    this.allowDrag = $
};
    siTreePrototype["getAllowLeafDropIn"] = function() {
    return this.allowLeafDropIn
};
    siTreePrototype["setAllowLeafDropIn"] = function($) {
    this.allowLeafDropIn = $
};
    siTreePrototype._nodeslengthText = function($) {
    return "Nodes " + $.length
};
    siTreePrototype._cloneSelectedNodes = function() {
    return this["getSelectedNodes"]().clone()
};
    siTreePrototype["onDataLoad"] = function(_, $) {
    this["on"]("dataload", _, $)
};
    siTreePrototype["onLoadError"] = function(_, $) {
    this["on"]("loaderror", _, $)
};
    siTreePrototype["onLoad"] = function(_, $) {
    this["on"]("load", _, $)
};
    siTreePrototype["onBeforeLoad"] = function(_, $) {
    this["on"]("beforeload", _, $)
};
    siTreePrototype["onCollapse"] =  function(_, $) {
    this["on"]("collapse", _, $)
};
    siTreePrototype["onBeforeCollapse"] = function(_, $) {
    this["on"]("beforecollapse", _, $)
};
    siTreePrototype["onExpand"] = function(_, $) {
    this["on"]("expand", _, $)
};
    siTreePrototype["onBeforeExpand"] = function(_, $) {
    this["on"]("beforeexpand", _, $)
};
    siTreePrototype["onNodeMouseDown"] = function(_, $) {
    this["on"]("nodemousedown", _, $)
};
    siTreePrototype["onCheckNode"] = function(_, $) {
    this["on"]("nodecheck", _, $)
};
    siTreePrototype["onBeforeNodeCheck"] = function(_, $) {
    this["on"]("beforenodecheck", _, $)
};
    siTreePrototype["onNodeSelect"] = function(_, $) {
    this["on"]("nodeselect", _, $)
};
    siTreePrototype["onBeforeNodeSelect"] = function(_, $) {
    this["on"]("beforenodeselect", _, $)
};
    siTreePrototype["onNodeClick"] = function(_, $) {
    this["on"]("nodeClick", _, $)
};
    siTreePrototype.oncontrolcontextmenu = function($) {
    if (siisAncestor(this.headerEl, $.target))
        return true;
    return si.Tree["superclass"].oncontrolcontextmenu["call"](this, $)
};
    siTreePrototype["scrollIntoView"] = function(_) {
    var $ = this["_getNodeEl"](_);
    si["scrollIntoView"]($, this.el, false)
};
    siTreePrototype["blurNode"] = function() {
    if (!this.currentFocusNode)
        return;
    var $ = this._getNodeShowEl(this.currentFocusNode);
    if ($)
        siremoveclass($, this.hoverNodeCls);
    this.currentFocusNode = null 
};
    siTreePrototype["focusNode"] = function(_, $) {
    _ = this["getNode"](_);
    if (!_)
        return;
    function A() {
        var A = this._getNodeShowEl(_);
        if ($ && A)
            this["scrollIntoView"](_);
        if (this.currentFocusNode == _)
            return;
        this["blurNode"]();
        this.currentFocusNode = _;
        siaddclass(A, this.hoverNodeCls)
    }
    var B = this;
    setTimeout(function() {
        A["call"](B)
    }
    , 1)
};
    siTreePrototype["_OnNodeMouseMove"] = function($, _) {
    if (!this["isEnabledNode"]($))
        return;
    if (!sifindAncestor(_.target, this.nodeshowCls))
        return;
    if (this["enableHotTrack"] == true)
        this["focusNode"]($);
    var _ = {
        node: $,
        htmlEvent: _
    };
    this["fire"]("nodemousemove", _)
};
    siTreePrototype["_OnNodeMouseOut"] = function($, _) {
    if (!this["isEnabledNode"]($))
        return;
    if (!sifindAncestor(_.target, this.nodeshowCls))
        return;
    this["blurNode"]();
    var _ = {
        node: $,
        htmlEvent: _
    };
    this["fire"]("nodemouseout", _)
};
    siTreePrototype._onmouseout = function(_) {
    var $ = this["_getNodeByEvent"](_);
    if ($)
        this["_OnNodeMouseOut"]($, _)
};
    siTreePrototype._onmousemove =  function(_) {
    var $ = this["_getNodeByEvent"](_);
    if ($)
        this["_OnNodeMouseMove"]($, _)
};
    siTreePrototype["_OnNodeClick"] = function(A, $) {
    var C = sifindAncestor($.target, this.nodeshowCls);
    if (!C)
        return null ;
    if ($.target.tagName.toLowerCase() == "a")
        $.target.hideFocus = true;
    if (!this["isEnabledNode"](A))
        return;
    var B = {
        node: A,
        cancel: false,
        isLeaf: this["isLeaf"](A),
        htmlEvent: $
    };
    if (this.getHeaderColumnObj) {
        var _ = this.getHeaderColumnObj($);
        if (_) {
            B.column = _;
            B.field = _.field
        }
    }
    this["fire"]("nodeClick", B)
};
    siTreePrototype["_OnNodeMouseDown"] = function(_, $) {
    var B = sifindAncestor($.target, this.nodeshowCls);
    if (!B)
        return null ;
    if (!this["isEnabledNode"](_))
        return;
    var A = {
        node: _,
        cancel: false,
        isLeaf: this["isLeaf"](_),
        htmlEvent: $
    };
    if (this["allowSelect"] && _["allowSelect"] !== false)
        if (this.selectedNode != _) {
            this["fire"]("beforenodeselect", A);
            if (A.cancel != true)
                this["selectNode"](_)
        }
    this["fire"]("nodeMouseDown", A)
};
    siTreePrototype._onmousedown = function(_) {
    if (!this.enabled)
        return;
    if (this._editInput)
        this._editInput["blur"]();
    var $ = this["_getNodeByEvent"](_);
    if ($)
        if (sifindAncestor(_.target, this.eciconCls))
            ;
        else if (sifindAncestor(_.target, this.checkboxCls))
            ;
        else
            this["_OnNodeMouseDown"]($, _)
};
    siTreePrototype._onclick = function(D) {
    if (!this.enabled)
        return;
    var $ = this["_getNodeByEvent"](D);
    if ($ && $.enabled !== false) {
        var C = sifindAncestor(D.target, this.nodeshowCls) && this.expandOnNodeClick;
        if ((sifindAncestor(D.target, this.eciconCls) || C) && this["isLeaf"]($) == false) {
            if (this.doingLayout)
                return;
            var _ = this["isExpandedNode"]($)
              , B = {
                node: $,
                expanded: _,
                cancel: false
            };
            if (!this.doingLayout)
                if (_) {
                    this["fire"]("beforecollapse", B);
                    if (B.cancel == true)
                        return;
                    this["collapseNode"]($, this.allowAnim)
                } else {
                    this["fire"]("beforeexpand", B);
                    if (B.cancel == true)
                        return;
                    this["expandNode"]($, this.allowAnim)
                }
        } else if (sifindAncestor(D.target, this.checkboxCls)) {
            var A = this["isCheckedNode"]($)
              , B = {
                isLeaf: this["isLeaf"]($),
                node: $,
                checked: A,
                checkRecursive: this.checkRecursive,
                htmlEvent: D,
                cancel: false
            };
            this["fire"]("beforenodecheck", B);
            if (B.cancel == true) {
                D.preventDefault();
                return
            }
            if (A)
                this["uncheckNode"]($);
            else
                this["checkNode"]($);
            this["fire"]("nodecheck", B)
        } else
            this["_OnNodeClick"]($, D)
    }
};
    siTreePrototype._ondblclick = function(B) {
    if (!this.enabled)
        return;
    if (sifindAncestor(B.target, this.checkboxCls))
        return;
    var $ = this["_getNodeByEvent"](B);
    if ($ && $.enabled !== false)
        if (sifindAncestor(B.target, this.nodeshowCls)) {
            var _ = this["isExpandedNode"]($)
              , A = {
                node: $,
                expanded: _,
                cancel: false
            };
            if (this.expandOnDblClick && !this.doingLayout)
                if (_) {
                    this["fire"]("beforecollapse", A);
                    if (A.cancel == true)
                        return;
                    this["collapseNode"]($, this.allowAnim)
                } else {
                    this["fire"]("beforeexpand", A);
                    if (A.cancel == true)
                        return;
                    this["expandNode"]($, this.allowAnim)
                }
            this["fire"]("nodedblclick", {
                htmlEvent: B,
                node: $,
                isLeaf: this["isLeaf"]($)
            })
        }
};
    siTreePrototype["getAutoEscape"] = function() {
    return this.autoEscape
};
    siTreePrototype["setAutoEscape"] = function($) {
    this.autoEscape = $
};
    siTreePrototype["getLoadOnExpand"] = function() {
    return this.loadOnExpand
};
    siTreePrototype["setLoadOnExpand"] = function($) {
    this.loadOnExpand = $
};
    siTreePrototype["getRemoveOnCollapse"] = function() {
    return this.removeOnCollapse
};
    siTreePrototype["setRemoveOnCollapse"] = function($) {
    this.removeOnCollapse = $
};
    siTreePrototype["getExpandOnNodeClick"] = function() {
    return this.expandOnNodeClick
};
    siTreePrototype["setExpandOnNodeClick"] = function($) {
    this.expandOnNodeClick = $;
    if ($)
        siaddclass(this.el, "si-tree-nodeclick");
    else
        siremoveclass(this.el, "si-tree-nodeclick")
};
    siTreePrototype["getExpandOnDblClick"] = function() {
    return this.expandOnDblClick
};
    siTreePrototype["setExpandOnDblClick"] = function($) {
    this.expandOnDblClick = $
};
    siTreePrototype["getFolderIcon"] = function() {
    return this.folderIcon
};
    siTreePrototype["setFolderIcon"] = function($) {
    this.folderIcon = $
};
    siTreePrototype["getLeafIcon"] = function() {
    return this.leafIcon
};
    siTreePrototype["setLeafIcon"] = function($) {
    this.leafIcon = $
};
    siTreePrototype["getTreeColumn"] = function() {
    return this.treeColumn
};
    siTreePrototype["setTreeColumn"] = function($) {
    this.treeColumn = $
};
    siTreePrototype["getNodesField"] = function() {
    return this.nodesField
};
    siTreePrototype["setNodesField"] = function($) {
    this.nodesField = $
};
    siTreePrototype["getIconField"] = function() {
    return this.iconField
};
    siTreePrototype["setIconField"] = function($) {
    this.iconField = $
};
    siTreePrototype["getShowArrow"] = function() {
    return this.showArrow
};
    siTreePrototype["setShowArrow"] = function($) {
    this.showArrow = $;
    if ($ == true)
        siaddclass(this.el, "si-tree-showArrows");
    else
        siremoveclass(this.el, "si-tree-showArrows")
};
    siTreePrototype["getShowTreeLines"] = function() {
    return this["showTreeLines"]
};
    siTreePrototype["setShowTreeLines"] = function($) {
    this["showTreeLines"] = $;
    if ($ == true)
        siaddclass(this.el, "si-tree-treeLine");
    else
        siremoveclass(this.el, "si-tree-treeLine")
};
    siTreePrototype["getTextField"] = function() {
    return this["textField"]
};
    siTreePrototype["setTextField"] = function($) {
    this["textField"] = $
};
    siTreePrototype["getIdField"] = function() {
    return this["idField"]
};
    siTreePrototype["setIdField"] = function($) {
    this["idField"] = $
};
    siTreePrototype["getParentField"] = function() {
    return this["parentField"]
};
    siTreePrototype["setParentField"] = function($) {
    this["parentField"] = $
};
    siTreePrototype["getResultAsTree"] =  function() {
    return this["resultAsTree"]
};
    siTreePrototype["setResultAsTree"] =  function($) {
    this["resultAsTree"] = $
};
    siTreePrototype["getValue"] = function(_) {
    var B = this["getCheckedNodes"](_)
      , D = [];
    for (var $ = 0, A = B.length; $ < A; $++) {
        var C = this["getItemValue"](B[$]);
        if (C)
            D.push(C)
    }
    return D.join(",")
};
    siTreePrototype._toValueTextArray = function(A) {
    if (si.isNull(A))
        A = [];
    if (!si.isArray(A))
        A = this["getNodesByValue"](A);
    var B = []
      , C = [];
    for (var _ = 0, D = A.length; _ < D; _++) {
        var $ = A[_];
        if ($) {
            B.push(this["getItemValue"]($));
            C.push(this["getItemText"]($))
        }
    }
    return [B.join(this.delimiter), C.join(this.delimiter)]
};
    siTreePrototype["getNodesByValue"] = function(_) {
    if (si.isNull(_))
        _ = "";
    _ = String(_);
    var D = []
      , A = String(_).split(",");
    for (var $ = 0, C = A.length; $ < C; $++) {
        var B = this["getNode"](A[$]);
        if (B)
            D.push(B)
    }
    return D
};
    siTreePrototype["setValue"] = function(_) {
    if (si.isNull(_))
        _ = "";
    _ = String(_);
    var C = this["getCheckedNodes"]();
    this["uncheckNodes"](C);
    this.value = _;
    if (this["showCheckBox"]) {
        var A = String(_).split(",");
        for (var $ = 0, B = A.length; $ < B; $++)
            this["checkNode"](A[$])
    } else
        this["selectNode"](_)
};
    siTreePrototype["getCheckedNodes"] = function(_) {
    var A = []
      , $ = {};
    this["cascadeChild"](this.root, function(D) {
        if (D.checked == true) {
            A.push(D);
            if (_) {
                var C = this["getAncestors"](D);
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
};
    siTreePrototype["uncheckAllNodes"] = function($) {
    this["cascadeChild"](this.root, function($) {
        this["_doCheckNode"]($, false, false)
    }
    , this)
};
    siTreePrototype["checkAllNodes"] = function() {
    this["cascadeChild"](this.root, function($) {
        this["_doCheckNode"]($, true, false)
    }
    , this)
};
    siTreePrototype["uncheckNodes"] = function(B) {
    if (!si.isArray(B))
        B = [];
    for (var $ = 0, A = B.length; $ < A; $++) {
        var _ = B[$];
        this["uncheckNode"](_)
    }
};
    siTreePrototype["checkNodes"] = function(B) {
    if (!si.isArray(B))
        B = [];
    for (var $ = 0, A = B.length; $ < A; $++) {
        var _ = B[$];
        this["checkNode"](_)
    }
};
    siTreePrototype["uncheckNode"] = function($) {
    $ = this["getNode"]($);
    if (!$)
        return;
    this["_doCheckNode"]($, false, this["checkRecursive"])
};
    siTreePrototype["checkNode"] = function($) {
    $ = this["getNode"]($);
    if (!$)
        return;
    this["_doCheckNode"]($, true, this["checkRecursive"])
};
    siTreePrototype["_doCheckNode"] = function(B, M, I) {
    var C = B
      , N = [];
    B.checked = M;
    B._indeterminate = false;
    N.push(B);
    if (I) {
        this["cascadeChild"](B, function($) {
            $.checked = M;
            $._indeterminate = false;
            N.push($)
        }
        , this);
        var _ = this["getAncestors"](B);
        _.reverse();
        for (var J = 0, G = _.length; J < G; J++) {
            var D = _[J]
              , A = this["getChildNodes"](D)
              , L = true
              , K = false;
            for (var $ = 0, F = A.length; $ < F; $++) {
                var E = A[$];
                if (this["isCheckedNode"](E))
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
          , H = this.getCheckboxEl(B);
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
        _ = this["getAncestors"](C);
        for (J = 0,
        G = _.length; J < G; J++) {
            D = _[J],
            K = this["hasCheckedChildNode"](D);
            if (K) {
                D.checked = true;
                D._indeterminate = false;
                H = this.getCheckboxEl(D);
                if (H) {
                    H.indeterminate = false;
                    H.checked = true
                }
            }
        }
    }
};
    siTreePrototype["_doCheckLoadNodes"] = function() {
	    var C = this["getList"]()
	      , _ = [];
	    for (var $ = 0, B = C.length; $ < B; $++) {
	        var A = C[$];
	        if (A.checked)
	            _.push(A)
	    }
	    for ($ = 0,
	    B = _.length; $ < B; $++) {
	        A = _[$];
	        this["_doCheckNode"](A, true, this["checkRecursive"])
	    }
	};
    siTreePrototype["hasCheckedChildNode"] = function(_) {
    var A = false
      , D = this["getAllChildNodes"](_);
    for (var $ = 0, C = D.length; $ < C; $++) {
        var B = D[$];
        if (this["isCheckedNode"](B)) {
            A = true;
            break
        }
    }
    return A
};
    siTreePrototype["getAutoCheckParent"] = function($) {
    return this.autoCheckParent
};
    siTreePrototype["setAutoCheckParent"] = function($) {
    this.autoCheckParent = $
};
    siTreePrototype["doUpdateCheckedState"] = function() {};
    siTreePrototype["getSelectedNodes"] = function() {
    var $ = [];
    if (this.selectedNode)
        $.push(this.selectedNode);
    return $
};
    siTreePrototype["getSelectedNode"] = function() {
    return this.selectedNode
};
    siTreePrototype["selectNode"] = function(_) {
    _ = this["getNode"](_);
    var $ = this["_getNodeEl"](this.selectedNode);
    if ($)
        siremoveclass($.firstChild, this.selectedNodeCls);
    this.selectedNode = _;
    $ = this["_getNodeEl"](this.selectedNode);
    if ($)
        siaddclass($.firstChild, this.selectedNodeCls);
    var A = {
        node: _,
        isLeaf: this["isLeaf"](_)
    };
    this["fire"]("nodeselect", A)
};
    siTreePrototype["collapsePath"] =  function(A) {
    A = this["getNode"](A);
    if (!A)
        return;
    var _ = this["getAncestors"](A);
    for (var $ = 0, B = _.length; $ < B; $++)
        this["collapseNode"](_[$])
};
    siTreePrototype["expandPath"] = function(A) {
    A = this["getNode"](A);
    if (!A)
        return;
    var _ = this["getAncestors"](A);
    for (var $ = 0, B = _.length; $ < B; $++)
        this["expandNode"](_[$])
};
    siTreePrototype["collapseAll"] = function() {
    this["cascadeChild"](this.root, function($) {
        if ($[this.nodesField] != null )
            this["collapseNode"]($)
    }
    , this)
};
    siTreePrototype["expandAll"] = function() {
    this["cascadeChild"](this.root, function($) {
        if ($[this.nodesField] != null )
            this["expandNode"]($)
    }
    , this)
};
    siTreePrototype["collapseLevel"] = function($) {
    this["cascadeChild"](this.root, function(_) {
        if (this["getLevel"](_) == $)
            if (_[this.nodesField] != null )
                this["collapseNode"](_)
    }
    , this)
};
    siTreePrototype["expandLevel"] = function($) {
    this["cascadeChild"](this.root, function(_) {
        if (this["getLevel"](_) == $)
            if (_[this.nodesField] != null )
                this["expandNode"](_)
    }
    , this)
};
    siTreePrototype["toggleNode"] = function(_, $) {
    if (this["isExpandedNode"](_))
        this["collapseNode"](_, $);
    else
        this["expandNode"](_, $)
};
    siTreePrototype["collapseNode"] = function(_, F) {
    _ = this["getNode"](_);
    if (!_)
        return;
    var D = this["isExpandedNode"](_);
    if (!D)
        return;
    if (this["isLeaf"](_))
        return;
    _.expanded = false;
    var A = this["_getNodeEl"](_)
      , H = this._getNodesEl(_);
    if (H)
        H.style.display = "none";
    H = this["_getNodeEl"](_);
    if (H) {
        var C = H.firstChild;
        siremoveclass(C, this.expandCls);
        siaddclass(C, this.collapseCls)
    }
    this["fire"]("collapse", {
        node: _
    });
    F = F && !(si.isIE6);
    var B = this["_getViewChildNodes"](_);
    if (F && B && B.length > 0) {
        this.doingLayout = true;
        H = this._getNodesEl(_);
        if (!H)
            return;
        H.style.display = "";
        H.style.height = "auto";
        if (this.positionState)
            H.style.position = "relative";
        var $ = sigetheight(H)
          , E = {
            height: "1px"
        }
          , G = this
          , J = jQuery(H);
        J.animate(E, 180, function() {
            H.style.display = "none";
            H.style.height = "auto";
            if (G.positionState)
                H.style.position = "static";
            G.doingLayout = false;
            G.beforeBodyElScroll();
            clearInterval(G._treeTempTimer);
            var $ = G._getNodesEl(_);
            if (G.removeOnCollapse && $)
                jQuery($).remove();
            si["repaint"](A)
        }
        );
        clearInterval(this._treeTempTimer);
        this._treeTempTimer = setInterval(function() {
            G.beforeBodyElScroll()
        }
        , 60)
    } else {
        var I = this._getNodesEl(_);
        if (this.removeOnCollapse && I)
            jQuery(I).remove()
    }
    this.beforeBodyElScroll();
    if (this._allowExpandLayout)
        si["repaint"](this.el)
};
    siTreePrototype["expandNode"] = function(_, H) {
    _ = this["getNode"](_);
    if (!_)
        return;
    var E = this["isExpandedNode"](_);
    if (E)
        return;
    if (this["isLeaf"](_))
        return;
    _.expanded = true;
    var A = this["_getNodeEl"](_);
    if (this.removeOnCollapse && A) {
        var L = this.getNodeEl(_);
        jQuery(A).before(L);
        jQuery(A).remove()
    }
    var J = this._getNodesEl(_);
    if (J)
        J.style.display = "";
    J = this["_getNodeEl"](_);
    if (J) {
        var D = J.firstChild;
        siremoveclass(D, this.collapseCls);
        siaddclass(D, this.expandCls)
    }
    this["fire"]("expand", {
        node: _
    });
    H = H && !(si.isIE6);
    var C = this["_getViewChildNodes"](_);
    if (H && C && C.length > 0) {
        this.doingLayout = true;
        J = this._getNodesEl(_);
        if (!J)
            return;
        var $ = sigetheight(J);
        J.style.height = "1px";
        if (this.positionState)
            J.style.position = "relative";
        var G = {
            height: $ + "px"
        }
          , I = this
          , M = jQuery(J);
        M.animate(G, 180, function() {
            I.doingLayout = false;
            I.beforeBodyElScroll();
            clearInterval(I._treeTempTimer);
            J.style.height = "auto";
            if (I.positionState)
                J.style.position = "static";
            si["repaint"](A)
        }
        );
        clearInterval(this._treeTempTimer);
        this._treeTempTimer = setInterval(function() {
            I.beforeBodyElScroll()
        }
        , 60)
    }
    this.beforeBodyElScroll();
    if (this._allowExpandLayout)
        si["repaint"](this.el);
    C = this["getAllChildNodes"](_);
    C.push(_);
    for (var F = 0, B = C.length; F < B; F++) {
        var _ = C[F]
          , K = this.getCheckboxEl(_);
        if (K && _._indeterminate)
            K.indeterminate = _._indeterminate
    }
};
    siTreePrototype["disableNode"] = function(A) {
    A = this["getNode"](A);
    if (!A)
        return;
    A.enabled = false;
    var _ = this["_getNodeEl"](A);
    siaddclass(_, "si-disabled");
    var $ = this.getCheckboxEl(A);
    if ($)
        $.disabled = true
};
    siTreePrototype["enableNode"] = function(A) {
    A = this["getNode"](A);
    if (!A)
        return;
    A.enabled = true;
    var _ = this["_getNodeEl"](A);
    siremoveclass(_, "si-disabled");
    var $ = this.getCheckboxEl(A);
    if ($)
        $.disabled = false
};
    siTreePrototype["showNode"] = function(_) {
    _ = this["getNode"](_);
    if (!_)
        return;
    _.visible = false;
    var $ = this["_getNodeEl"](_);
    $.style.display = ""
};
    siTreePrototype["hideNode"] = function(_) {
    _ = this["getNode"](_);
    if (!_)
        return;
    _.visible = false;
    var $ = this["_getNodeEl"](_);
    $.style.display = "none"
};
    siTreePrototype["getNode"] = function($) {
    if (typeof $ == "object")
        return $;
    return this.nodeIdFieldMap[$] || null 
};
    siTreePrototype["findNodes"] =  function(A, $) {
    var _ = [];
    $ = $ || this;
    this["cascadeChild"](this.root, function(B) {
        if (A && A["call"]($, B) === true)
            _.push(B)
    }
    , this);
    return _
};
    siTreePrototype.getCheckboxEl = function($) {
    if (!$)
        return null ;
    var _ = this.getCheckboxUid($);
    return sigetelementbyid(_, this.el)
};
    siTreePrototype._getNodesEl = function($) {
    if (!$)
        return null ;
    var _ = this.getNodesId($);
    return sigetelementbyid(_, this.el)
};
    siTreePrototype._getNodeElFirstChild = function(_) {
    var $ = this["_getNodeEl"](_);
    if ($)
        return $.firstChild
};
    siTreePrototype._getNodeShowEl = function(_) {
    if (!_)
        return null ;
    var $ = this._getNodeElFirstChild(_);
    if ($) {
        $ = si.byClass(this.nodeshowCls, $);
        return $
    }
    return null 
};
    siTreePrototype["_getNodeEl"] = function($) {
    if (!$)
        return null ;
    var _ = this.getTreeNodeId($);
    return document.getElementById(_)
};
    siTreePrototype["getNodeBox"] = function(_) {
    var $ = this["_getNodeEl"](_);
    if ($)
        return sigetbox($.firstChild)
};
    siTreePrototype["removeNodeCls"] = function($, _) {
    var A = this["_getNodeEl"]($);
    if (A)
        siremoveclass(A, _)
};
    siTreePrototype["addNodeCls"] = function($, _) {
    var A = this["_getNodeEl"]($);
    if (A)
        siaddclass(A, _)
};
    siTreePrototype.getCheckboxUid = function($) {
    return this.uid + "$check$" + $._id
};
    siTreePrototype.getNodesId = function($) {
    return this.uid + "$nodes$" + $._id
};
    siTreePrototype.getTreeNodeId = function($) {
    return this.uid + "$" + $._id
};
    siTreePrototype["_getNodeByEvent"] = function(C) {
    if (sihasclass(C.target, this.treeNodesCls))
        return null ;
    var A = sifindAncestor(C.target, this.treeNodeCls);
    if (A) {
        var $ = A.id.split("$")
          , B = $[$.length - 1]
          , _ = this.nodeIdMap[B];
        return _
    }
    return null 
};
    siTreePrototype._onTreeEditInputBlur = function(_) {
    var $ = this._editInput.value;
    this["setNodeText"](this._editingNode, $);
    this["cancelEdit"]();
    this["fire"]("endedit", {
        node: this._editingNode,
        text: $
    })
};
    siTreePrototype._onTreeEditInputKeyDown = function(_) {
    if (_.keyCode == 13) {
        var $ = this._editInput.value;
        this["setNodeText"](this._editingNode, $);
        this["cancelEdit"]();
        this["fire"]("endedit", {
            node: this._editingNode,
            text: $
        })
    } else if (_.keyCode == 27)
        this["cancelEdit"]()
};
    siTreePrototype["cancelEdit"] = function() {
    if (this._editingNode) {
        this._updateNodeTitleEl(this._editingNode);
        siUnBindEvent(this._editInput, "keydown", this._onTreeEditInputKeyDown, this);
        siUnBindEvent(this._editInput, "blur", this._onTreeEditInputBlur, this)
    }
    this._editingNode = null ;
    this._editInput = null 
};
    siTreePrototype["beginEdit"] = function(_) {
    _ = this["getNode"](_);
    if (!_)
        return;
    var A = this["_getNodeEl"](_)
      , B = this.getNodeTitleEl(_, true)
      , A = this["_getNodeEl"](_);
    if (A)
        jQuery(A.firstChild).replaceWith(B);
    this._editingNode = _;
    var $ = this.uid + "$edit$" + _._id;
    this._editInput = document.getElementById($);
    this._editInput["focus"]();
    si["selectRange"](this._editInput, 1000, 1000);
    siBindEvent(this._editInput, "keydown", this._onTreeEditInputKeyDown, this);
    siBindEvent(this._editInput, "blur", this._onTreeEditInputBlur, this)
};
    siTreePrototype["isEditingNode"] = function($) {
    return this._editingNode == $
};
    siTreePrototype["moveNode"] = function(G, E, C) {
    G = this["getNode"](G);
    E = this["getNode"](E);
    if (!G || !E || !C)
        return false;
    if (this["isAncestor"](G, E))
        return false;
    var $ = -1
      , _ = null ;
    switch (C) {
    case "before":
        _ = this["getParentNode"](E);
        $ = this["indexOfChildren"](E);
        break;
    case "after":
        _ = this["getParentNode"](E);
        $ = this["indexOfChildren"](E) + 1;
        break;
    default:
        _ = E;
        var B = this["getChildNodes"](_);
        if (!B)
            B = _[this.nodesField] = [];
        $ = B.length;
        break
    }
    var F = {}
      , B = this["getChildNodes"](_);
    B.insert($, F);
    var D = this["getParentNode"](G)
      , A = this["getChildNodes"](D);
    A.remove(G);
    $ = B["indexOf"](F);
    B[$] = G;
    this.registerNodes(G, _);
    this["doUpdate"]();
    return true
};
    siTreePrototype["moveNodes"] = function(E, B, _) {
    if (!E || E.length == 0 || !B || !_)
        return;
    this["beginUpdate"]();
    var A = this;
    for (var $ = 0, D = E.length; $ < D; $++) {
        var C = E[$];
        this["moveNode"](C, B, _);
        if ($ != 0) {
            B = C;
            _ = "after"
        }
    }
    this["endUpdate"]()
};
    siTreePrototype["addNode"] = function(C, $, _) {
    C = this["getNode"](C);
    if (!C)
        return;
    if (!_)
        $ = "add";
    var B = _;
    switch ($) {
    case "before":
        if (!B)
            return;
        _ = this["getParentNode"](B);
        var A = _[this.nodesField];
        $ = A["indexOf"](B);
        break;
    case "after":
        if (!B)
            return;
        _ = this["getParentNode"](B);
        A = _[this.nodesField];
        $ = A["indexOf"](B) + 1;
        break;
    case "add":
        break;
    default:
        break
    }
    _ = this["getNode"](_);
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
    this.registerNodes(C, _);
    var E = this._getNodesEl(_);
    if (E) {
        var H = this.getNodeEl(C)
          , $ = F["indexOf"](C) + 1
          , B = F[$];
        if (B) {
            var G = this["_getNodeEl"](B);
            jQuery(G).before(H)
        } else
            si.append(E, H)
    } else {
        var H = this.getNodeEl(_)
          , D = this["_getNodeEl"](_);
        jQuery(D).replaceWith(H)
    }
    _ = this["getParentNode"](C);
    this._UpdateAllNodeTitleEl(_)
};
    siTreePrototype["addNodes"] = function(D, _, A) {
    if (!si.isArray(D))
        return;
    for (var $ = 0, C = D.length; $ < C; $++) {
        var B = D[$];
        this["addNode"](B, A, _)
    }
};
    siTreePrototype["removeNode"] = function(A) {
    A = this["getNode"](A);
    if (!A)
        return;
    if (this.selectedNode == A)
        this.selectedNode = null ;
    var D = [A];
    this["cascadeChild"](A, function($) {
        D.push($)
    }
    , this);
    var _ = this["getParentNode"](A);
    _[this.nodesField].remove(A);
    this.registerNodes(A, _);
    var B = this["_getNodeEl"](A);
    if (B)
        B.parentNode.removeChild(B);
    this._UpdateAllNodeTitleEl(_);
    for (var $ = 0, C = D.length; $ < C; $++) {
        var A = D[$];
        delete A._id;
        delete A._pid;
        delete this.nodeIdMap[A._id];
        delete this.nodeIdFieldMap[A[this.idField]]
    }
};
    siTreePrototype["updateNode"] = function(_, $) {
    _ = this["getNode"](_);
    if (!_ || !$)
        return;
    var A = _[this.nodesField];
    si.copyTo(_, $);
    _[this.nodesField] = A;
    this._updateNodeTitleEl(_)
};
    siTreePrototype["setNodeIconCls"] = function(_, $) {
    _ = this["getNode"](_);
    if (!_)
        return;
    _[this.iconField] = $;
    this._updateNodeTitleEl(_)
};
    siTreePrototype["setNodeText"] = function(_, $) {
    _ = this["getNode"](_);
    if (!_)
        return;
    _[this.textField] = $;
    this._updateNodeTitleEl(_)
};
    siTreePrototype._updateNodeTitleEl = function($) {
    var A = this.getNodeTitleEl($)
      , _ = this["_getNodeEl"]($);
    if (_)
        jQuery(_.firstChild).replaceWith(A)
};
    siTreePrototype["removeNodes"] = function(B) {
    if (!si.isArray(B))
        return;
    B = B.clone();
    for (var $ = 0, A = B.length; $ < A; $++) {
        var _ = B[$];
        this["removeNode"](_)
    }
};
    siTreePrototype._UpdateAllNodeTitleEl = function(_) {
    var $ = this;
    function A(_) {
        $._updateNodeTitleEl(_)
    }
    if (_ != this.root)
        A(_);
    this["cascadeChild"](_, function($) {
        A($)
    }
    , this)
};
    siTreePrototype.registerNodes =  function(_, $) {
    if (!_._id)
        _._id = si.Tree.NodeUID++;
    this.nodeIdMap[_._id] = _;
    this.nodeIdFieldMap[_[this.idField]] = _;
    _._pid = $ ? $._id : "";
    _._level = $ ? $._level + 1 : -1;
    this["cascadeChild"](_, function(A, $, _) {
        if (!A._id)
            A._id = si.Tree.NodeUID++;
        this.nodeIdMap[A._id] = A;
        this.nodeIdFieldMap[A[this.idField]] = A;
        A._pid = _._id;
        A._level = _._level + 1
    }
    , this);
    this["_clearTree"]()
};
    siTreePrototype["eachChild"] = function(B, F, C) {
    if (!F || !B)
        return;
    var E = B[this.nodesField];
    if (E) {
        var _ = E.clone();
        for (var A = 0, D = _.length; A < D; A++) {
            var $ = _[A];
            if (F["call"](C || this, $, A, B) === false)
                break
        }
    }
};
    siTreePrototype["cascadeChild"] = function(A, E, B) {
    if (!E)
        return;
    if (!A)
        A = this.root;
    var D = A[this.nodesField];
    if (D) {
        D = D.clone();
        for (var $ = 0, C = D.length; $ < C; $++) {
            var _ = D[$];
            if (E["call"](B || this, _, $, A) === false)
                return;
            this["cascadeChild"](_, E, B)
        }
    }
};
    siTreePrototype["bubbleParent"] = function(_, B, A) {
    A = A || this;
    if (_)
        B["call"](this, _);
    var $ = this["getParentNode"](_);
    if ($ && $ != this.root)
        this["bubbleParent"]($, B, A)
};
    siTreePrototype["isInLastNode"] = function(D, $) {
    var C = null 
      , A = this["getAncestors"](D);
    for (var _ = 0, E = A.length; _ < E; _++) {
        var B = A[_];
        if (this["getLevel"](B) == $)
            C = B
    }
    if (!C || C == this.root)
        return false;
    return this["isLastNode"](C)
};
    siTreePrototype["isLastNode"] = function(_) {
    var $ = this["getParentNode"](_)
      , A = this["getChildNodes"]($);
    return A[A.length - 1] === _
};
    siTreePrototype["isFirstNode"] = function(_) {
    var $ = this["getParentNode"](_)
      , A = this["getChildNodes"]($);
    return A[0] === _
};
    siTreePrototype["isEnabledNode"] = function($) {
    return $.enabled !== false || this.enabled
};
    siTreePrototype["isVisibleNode"] = function($) {
    return $.visible !== false
};
    siTreePrototype["isCheckedNode"] = function($) {
    $ = this["getNode"]($);
    if (!$)
        return false;
    return $.checked == true
};
    siTreePrototype["isExpandedNode"] = function($) {
    $ = this["getNode"]($);
    if (!$)
        return false;
    return $.expanded == true || si.isNull($.expanded)
};
    siTreePrototype["getLevel"] = function($) {
    return $._level
};
    siTreePrototype["isLeaf"] = function($) {
    if (!$ || $["isLeaf"] === false)
        return false;
    var _ = this["getChildNodes"]($);
    if (_ && _.length > 0)
        return false;
    return true
};
    siTreePrototype["hasChildren"] = function($) {
    var _ = this["getChildNodes"]($);
    return !!(_ && _.length > 0)
};
    siTreePrototype["indexOfChildren"] = function(A) {
    var $ = this["getParentNode"](A);
    if (!$)
        return -1;
    var _ = $[this.nodesField];
    return _["indexOf"](A)
};
    siTreePrototype["getAt"] = function(_) {
    var $ = this["getList"]();
    return $[_]
};
    siTreePrototype["indexOf"] = function(_) {
    _ = this["getNode"](_);
    if (!_)
        return -1;
    this["getList"]();
    var $ = this._indexs[_[this.idField]];
    if (si.isNull($))
        return -1;
    return $
};
    siTreePrototype["getAllChildNodes"] = function($) {
    $ = this["getNode"]($);
    if (!$)
        return [];
    var _ = [];
    this["cascadeChild"]($, function($) {
        _.push($)
    }
    , this);
    return _
};
    siTreePrototype["getChildNodes"] = function($) {
    $ = this["getNode"]($);
    if (!$)
        return null ;
    return $[this.nodesField]
};
    siTreePrototype["_getViewChildNodes"] = function($) {
    if (this._viewNodes)
        return this._viewNodes[$._id];
    else
        return this["getChildNodes"]($)
};
    siTreePrototype["_isInViewLastNode"] = function(D, $) {
    if (this._viewNodes) {
        var C = null 
          , A = this["getAncestors"](D);
        for (var _ = 0, E = A.length; _ < E; _++) {
            var B = A[_];
            if (this["getLevel"](B) == $)
                C = B
        }
        if (!C || C == this.root)
            return false;
        return this["_isViewLastNode"](C)
    } else
        return this["isInLastNode"](D, $)
};
    siTreePrototype["_isViewLastNode"] = function(_) {
    if (this._viewNodes) {
        var $ = this["getParentNode"](_)
          , A = this["_getViewChildNodes"]($);
        return A[A.length - 1] === _
    } else
        return this["isLastNode"](_)
};
    siTreePrototype["_isViewFirstNode"] = function(_) {
    if (this._viewNodes) {
        var $ = this["getParentNode"](_)
          , A = this["_getViewChildNodes"]($);
        return A[0] === _
    } else
        return this["isFirstNode"](_)
};
    siTreePrototype["getParentNode"] = function($) {
    if (!$)
        return null ;
    if ($._pid == this.root._id)
        return this.root;
    return this.nodeIdMap[$._pid]
};
    siTreePrototype["getRootNode"] = function() {
    return this.root
};
    siTreePrototype["getAncestors"] = function(A) {
    var _ = [];
    while (1) {
        var $ = this["getParentNode"](A);
        if (!$ || $ == this.root)
            break;
        _[_.length] = $;
        A = $
    }
    _.reverse();
    return _
};
    siTreePrototype["isAncestor"] = function(_, B) {
    if (_ == B)
        return true;
    if (!_ || !B)
        return false;
    var A = this["getAncestors"](B);
    for (var $ = 0, C = A.length; $ < C; $++)
        if (A[$] == _)
            return true;
    return false
};
    siTreePrototype["getNodeIcon"] = function(_) {
    var $ = si._getMap(this.iconField, _);
    if (!$)
        if (this["isLeaf"](_))
            $ = this.leafIcon;
        else
            $ = this.folderIcon;
    return $
};
    siTreePrototype["getCheckRecursive"] = function() {
    return this["checkRecursive"]
};
    siTreePrototype["setCheckRecursive"] = function($) {
    if (this["checkRecursive"] != $)
        this["checkRecursive"] = $
};
    siTreePrototype["getExpandOnLoad"] = function() {
    return this.expandOnLoad
};
    siTreePrototype["setExpandOnLoad"] = function($) {
    this.expandOnLoad = $
};
    siTreePrototype["getEnableHotTrack"] = function() {
    return this["enableHotTrack"]
};
    siTreePrototype["setEnableHotTrack"] = function($) {
    if (this["enableHotTrack"] != $) {
        this["enableHotTrack"] = $;
        this["doLayout"]()
    }
};
    siTreePrototype["getShowExpandButtons"] = function() {
    return this["showExpandButtons"]
};
    siTreePrototype["setShowExpandButtons"] = function($) {
    if (this["showExpandButtons"] != $) {
        this["showExpandButtons"] = $;
        this["doUpdate"]()
    }
};
    siTreePrototype["getShowTreeIcon"] = function() {
    return this["showTreeIcon"]
};
    siTreePrototype["setShowTreeIcon"] = function($) {
    if (this["showTreeIcon"] != $) {
        this["showTreeIcon"] = $;
        this["doUpdate"]()
    }
};
    siTreePrototype["getAllowSelect"] = function() {
    return this["allowSelect"]
};
    siTreePrototype["setAllowSelect"] = function($) {
    if (this["allowSelect"] != $) {
        this["allowSelect"] = $;
        this["doUpdate"]()
    }
};
    siTreePrototype["getShowFolderCheckBox"] = function() {
    return this["showFolderCheckBox"]
};
    siTreePrototype["setShowFolderCheckBox"] = function($) {
    if (this["showFolderCheckBox"] != $) {
        this["showFolderCheckBox"] = $;
        this["doUpdate"]()
    }
};
    siTreePrototype["getShowCheckBox"] = function() {
    return this["showCheckBox"]
};
    siTreePrototype["setShowCheckBox"] = function($) {
    if (this["showCheckBox"] != $) {
        this["showCheckBox"] = $;
        this["doUpdate"]()
    }
};
    siTreePrototype["clearFilter"] = function() {
    if (this._viewNodes) {
        this._viewNodes = null ;
        this["doUpdate"]()
    }
};
    siTreePrototype["filter"] = function(C, B) {
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
              , E = C["call"](B, F, D, this);
            if (E === true || L)
                H.push(F)
        }
        if (H.length > 0)
            A[K] = H;
        return H.length > 0
    }
    $(this.root);
    this["doUpdate"]()
};
    siTreePrototype["doLayout"] = function() {
    if (this["showCheckBox"])
        siaddclass(this.el, "si-tree-showCheckBox");
    else
        siremoveclass(this.el, "si-tree-showCheckBox");
    if (this["enableHotTrack"])
        siaddclass(this.el, "si-tree-hottrack");
    else
        siremoveclass(this.el, "si-tree-hottrack");
    var $ = this.el.firstChild;
    if ($)
        siaddclass($, "si-tree-rootnodes")
};
    siTreePrototype._deferLayout = function() {
    var $ = this;
    if (this._tempTimer)
        return;
    this._tempTimer = setTimeout(function() {
        $["doLayout"]();
        $._tempTimer = null 
    }
    , 1)
};
    siTreePrototype.beforeBodyElScroll = function() {};
    siTreePrototype["doUpdate"] = function() {
    if (!this.allowUpdate)
        return;
    var $ = this["_getViewChildNodes"](this.root)
      , A = [];
    this.getNodesEl($, this.root, A);
    var _ = A.join("");
    this.bodyEl.innerHTML = _;
    this._deferLayout()
};
    siTreePrototype.getNodesEl = function(F, B, G) {
    var E = !G;
    if (!G)
        G = [];
    if (!F)
        return "";
    var C = this.getNodesId(B)
      , $ = this["isExpandedNode"](B) ? "" : "display:none";
    G[G.length] = "<div id=\"";
    G[G.length] = C;
    G[G.length] = "\" class=\"";
    G[G.length] = this.treeNodesCls;
    G[G.length] = "\" style=\"";
    G[G.length] = $;
    G[G.length] = "\">";
    for (var _ = 0, D = F.length; _ < D; _++) {
        var A = F[_];
        this.getNodeEl(A, G)
    }
    G[G.length] = "</div>";
    if (E)
        return G.join("")
};
    siTreePrototype.getNodeEl = function(A, D) {
    var C = !D;
    if (!D)
        D = [];
    if (!A)
        return "";
    var _ = this.getTreeNodeId(A)
      , $ = this["isVisibleNode"](A) ? "" : "display:none";
    D[D.length] = "<div id=\"";
    D[D.length] = _;
    D[D.length] = "\" class=\"";
    D[D.length] = this.treeNodeCls;
    D[D.length] = "\" style=\"";
    D[D.length] = $;
    D[D.length] = "\">";
    this.getNodeTitleEl(A, false, D);
    var B = this["_getViewChildNodes"](A);
    if (B)
        if (this.removeOnCollapse && this["isExpandedNode"](A))
            this.getNodesEl(B, A, D);
    D[D.length] = "</div>";
    if (C)
        return D.join("")
};
    siTreePrototype.getNodeTitleEl = function(D, P, H) {
    var O = !H;
    if (!H)
        H = [];
    var K = D[this.textField];
    if (K === null  || K === undefined)
        K = "";
    var M = this["isLeaf"](D)
      , $ = this["getLevel"](D)
      , Q = this.getNodeObj(D)
      , E = Q.nodeCls;
    if (!M)
        E = this["isExpandedNode"](D) ? this.expandCls : this.collapseCls;
    if (this.selectedNode == D)
        E += " " + this.selectedNodeCls;
    if (D.enabled === false)
        E += " si-disabled";
    if (!M)
        E += " si-tree-parentNode";
    var F = this["getChildNodes"](D)
      , I = F && F.length > 0;
    H[H.length] = "<div class=\"si-tree-nodetitle " + E + "\" style=\"" + Q.nodeStyle + "\">";
    var A = this["getParentNode"](D)
      , _ = 0;
    for (var J = _; J <= $; J++) {
        if (J == $)
            continue;if (M)
            if (this["showExpandButtons"] == false && J >= $ - 1)
                continue;var L = "";
        if (this["_isInViewLastNode"](D, J))
            L = "background:none";
        H[H.length] = "<span class=\"si-tree-indent \" style=\"" + L + "\"></span>"
    }
    var C = "";
    if (this["_isViewFirstNode"](D))
        C = "si-tree-node-ecicon-first";
    else if (this["_isViewLastNode"](D))
        C = "si-tree-node-ecicon-last";
    if (this["_isViewFirstNode"](D) && this["_isViewLastNode"](D)) {
        C = "si-tree-node-ecicon-last";
        if (A == this.root)
            C = "si-tree-node-ecicon-firstLast"
    }
    if (!M)
        H[H.length] = "<a class=\"" + this.eciconCls + " " + C + "\" style=\"" + (this["showExpandButtons"] ? "" : "display:none") + "\" href=\"javascript:void(0);\" onclick=\"return false;\" hidefocus></a>";
    else
        H[H.length] = "<span class=\"" + this.eciconCls + " " + C + "\" ></span>";
    H[H.length] = "<span class=\"si-tree-nodeshow\">";
    if (Q["showTreeIcon"])
        H[H.length] = "<span class=\"" + Q.iconCls + " si-tree-icon\"></span>";
    if (Q["showCheckBox"]) {
        var G = this.getCheckboxUid(D)
          , N = this["isCheckedNode"](D);
        H[H.length] = "<input type=\"checkbox\" id=\"" + G + "\" class=\"" + this.checkboxCls + "\" hidefocus " + (N ? "checked" : "") + " " + (D.enabled === false ? "disabled" : "") + "/>"
    }
    H[H.length] = "<span class=\"si-tree-nodetext\">";
    if (P) {
        var B = this.uid + "$edit$" + D._id
          , K = D[this.textField];
        if (K === null  || K === undefined)
            K = "";
        H[H.length] = "<input id=\"" + B + "\" type=\"text\" class=\"si-tree-editinput\" value=\"" + K + "\"/>"
    } else
        H[H.length] = Q.nodeHtml;
    H[H.length] = "</span>";
    H[H.length] = "</span>";
    H[H.length] = "</div>";
    if (O)
        return H.join("")
};
    siTreePrototype.getNodeObj = function($) {
    var B = this["showCheckBox"];
    if (B && this["hasChildren"]($))
        B = this["showFolderCheckBox"];
    var _ = this["getItemText"]($)
      , A = {
        isLeaf: this["isLeaf"]($),
        node: $,
        nodeHtml: _,
        nodeCls: "",
        nodeStyle: "",
        showCheckBox: B,
        iconCls: this["getNodeIcon"]($),
        showTreeIcon: this.showTreeIcon
    };
    if (this.autoEscape == true)
        A.nodeHtml = si.htmlEncode(A.nodeHtml);
    this["fire"]("drawnode", A);
    if (A.nodeHtml === null  || A.nodeHtml === undefined || A.nodeHtml === "")
        A.nodeHtml = "&nbsp;";
    return A
};
    siTreePrototype["getItemText"] = function($) {
    if (!$)
        return "";
    var _ = si._getMap(this.textField, $);
    return si.isNull(_) ? "" : String(_)
};
    siTreePrototype["getItemValue"] = function($) {
    if (!$)
        return "";
    var _ = si._getMap(this.idField, $);
    return si.isNull(_) ? "" : String(_)
};
    siTreePrototype.insideLoad = function(params, node, success, fail) {
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
    this["fire"]("beforeload", e);
    if (e.data != e.params && e.params != params)
        e.data = e.params;
    if (e.cancel == true)
        return;
    if (node != this.root)
        ;var sf = this;
    si.copyTo(e, {
        success: function(A, _, $) {
            var B = null ;
            try {
                B = si.decode(A)
            } catch (C) {
                B = [];
                if (si_debugger == true)
                    alert("tree json is error.")
            }
            if (sf.dataField)
                B = si._getMap(sf.dataField, B);
            if (!B)
                B = [];
            var C = {
                result: B,
                data: B,
                cancel: false,
                node: node
            };
            if (sf["resultAsTree"] == false)
                C.data = si.arrayToTree(C.data, sf.nodesField, sf.idField, sf["parentField"]);
            sf["fire"]("preload", C);
            if (C.cancel == true)
                return;
            if (isRoot)
                sf["setData"](C.data);
            if (success)
                success(C.data);
            sf["_doCheckLoadNodes"]();
            sf["fire"]("load", C)
        },
        error: function($, A, _) {
            var B = {
                xmlHttp: $,
                errorCode: A
            };
            if (fail)
                fail(B);
            if (si_debugger == true)
                alert("network error");
            sf["fire"]("loaderror", B)
        }
    });
    this._tempAjaxRequest = si.ajax(e)
};
    siTreePrototype["getAjaxOption"] = function($) {
    return this._ajaxOption
};
    siTreePrototype["setAjaxOption"] = function($) {
    si.copyTo(this._ajaxOption, $)
};
    siTreePrototype["loadNode"] = function(C, $) {
    C = this["getNode"](C);
    if (!C)
        return;
    if (this["isLeaf"](C))
        return;
    var B = {};
    B[this.idField] = this["getItemValue"](C);
    var _ = this;
    _["addNodeCls"](C, "si-tree-loading");
    var D = this._ajaxOption.async;
    this._ajaxOption.async = true;
    var A = new Date();
    this.insideLoad(B, C, function(B) {
        var E = new Date() - A;
        if (E < 60)
            E = 60 - E;
        setTimeout(function() {
            _._ajaxOption.async = D;
            _["removeNodeCls"](C, "si-tree-loading");
            _["removeNodes"](C[_.nodesField]);
            if (B && B.length > 0) {
                _["addNodes"](B, C);
                if ($ !== false)
                    _["expandNode"](C, true);
                else
                    _["collapseNode"](C, true);
                _["fire"]("loadnode", {
                    node: C
                })
            } else {
                delete C["isLeaf"];
                _._updateNodeTitleEl(C)
            }
        }
        , E)
    }
    , function($) {
        _["removeNodeCls"](C, "si-tree-loading")
    }
    );
    this.ajaxAsync = false
};
    siTreePrototype["getUrl"] = function() {
    return this.url
};
    siTreePrototype["setUrl"] = function($) {
    this.url = $;
    this["load"]($)
};
    siTreePrototype["clearData"] = function() {
    this["loadData"]([])
};
    siTreePrototype["loadData"] = function($) {
    if (!si.isArray($))
        $ = [];
    this.root[this.nodesField] = $;
    this.data = $;
    this.nodeIdFieldMap = {};
    this.nodeIdMap = {};
    this.registerNodes(this.root, null );
    this["cascadeChild"](this.root, function(_) {
        if (si.isNull(_.expanded)) {
            var $ = this["getLevel"](_);
            if (this.expandOnLoad === true || (si.isNumber(this.expandOnLoad) && $ <= this.expandOnLoad))
                _.expanded = true;
            else
                _.expanded = false
        }
        if (_["isLeaf"] === false) {
            var A = _[this.nodesField];
            if (A && A.length > 0)
                delete _["isLeaf"]
        }
    }
    , this);
    this._viewNodes = null ;
    this.selectedNode = null ;
    this["doUpdate"]()
};
    siTreePrototype["loadList"] = function($, B, _) {
    B = B || this["idField"];
    _ = _ || this["parentField"];
    var A = si.arrayToTree($, this.nodesField, B, _);
    this["setData"](A)
};
    siTreePrototype["_clearTree"] = function() {
    this.treeArrayList = null ;
    this._indexs = null 
};
    siTreePrototype["getList"] = function() {
    if (!this.treeArrayList) {
        this.treeArrayList = si["treeToArray"](this.root[this.nodesField], this.nodesField, this.idField, this.parentField, "-1");
        this._indexs = {};
        for (var $ = 0, A = this.treeArrayList.length; $ < A; $++) {
            var _ = this.treeArrayList[$];
            this._indexs[_[this.idField]] = $
        }
    }
    return this.treeArrayList
};
    siTreePrototype["toArray"] = function() {
    return this["getList"]()
};
    siTreePrototype["getData"] = function() {
    return this.data
};
    siTreePrototype["setData"] =  function($) {
    this["loadData"]($);
    this.data = $;
    this._cellErrors = [];
    this._cellMapErrors = {}
};
    siTreePrototype["load"] = function($) {
    if (typeof $ == "string") {
        this.url = $;
        this.insideLoad({}, this.root)
    } else
        this["setData"]($)
};
    siTreePrototype["_initEvents"] = function() {
    siEventTimer(function() {
        siBindEvent(this.el, "click", this._onclick, this);
        siBindEvent(this.el, "dblclick", this._ondblclick, this);
        siBindEvent(this.el, "mousedown", this._onmousedown, this);
        siBindEvent(this.el, "mousemove", this._onmousemove, this);
        siBindEvent(this.el, "mouseout", this._onmouseout, this)
    }
    , this)
};
    siTreePrototype["_create"] = function() {
    this.el = document.createElement("div");
    this.el.className = "si-tree";
    if (this["showTreeLines"] == true)
        siaddclass(this.el, "si-tree-treeLine");
    this.el.style.display = "block";
    this.borderEl = si.append(this.el, "<div class=\"" + this.boderCls + "\">" + "<div class=\"" + this._headerCls + "\"></div><div class=\"" + this.bodyCls + "\"></div></div>");
    this.headerEl = this.borderEl.childNodes[0];
    this.bodyEl = this.borderEl.childNodes[1];
    this._DragDrop = new BaseDragDrop(this)
};
    siTreePrototype["set"] = function(A) {
    if (typeof A == "string")
        return this;
    var $ = A.value;
    delete A.value;
    var B = A.url;
    delete A.url;
    var _ = A.data;
    delete A.data;
    si.Tree["superclass"]["set"]["call"](this, A);
    if (!si.isNull(_))
        this["setData"](_);
    if (!si.isNull(B))
        this["setUrl"](B);
    if (!si.isNull($))
        this["setValue"]($);
    return this
};
    siRegClass(si.Tree, "tree");
    BaseDragDrop = function($) {
        this.owner = $;
        this.owner["on"]("NodeMouseDown", this.onBaseNodeMouseDown, this)
    };
    
    BaseDragDrop["prototype"] = {
        onBaseNodeMouseDown: function(B) {
            var A = B.node;
            if (B.htmlEvent.button == si.MouseButton.Right)
                return;
            var _ = this.owner;
            if (_["isReadOnly"]() || _["isAllowDrag"](B.node) == false)
                return;
            if (_["isEditingNode"](A))
                return;
            this.dragData = _._cloneSelectedNodes();
            if (this.dragData["indexOf"](A) == -1)
                this.dragData.push(A);
            var $ = this._getDrag();
            $.start(B.htmlEvent)
        },
        onDragStart: function($) {
            var _ = this.owner;
            this.feedbackEl = si.append(document.body, "<div class=\"si-feedback\"></div>");
            this.feedbackEl.innerHTML = _._nodeslengthText(this.dragData);
            this.lastFeedbackClass = "";
            this["enableHotTrack"] = _["enableHotTrack"];
            _["setEnableHotTrack"](false)
        },
        _getDropTree: function(_) {
            var $ = sifindAncestor(_.target, "si-tree", 500);
            if ($)
                return si.get($)
        },
        onDragMove: function(_) {
            var B = this.owner
              , A = this._getDropTree(_.event)
              , E = _.now[0]
              , C = _.now[1];
            si["setXY"](this.feedbackEl, E + 15, C + 18);
            this.dragAction = "no";
            if (A) {
                var $ = A["_getNodeByEvent"](_.event);
                this.dropNode = $;
                if ($ && A["allowDrop"] == true) {
                    if (!A["isLeaf"]($)) {
                        var D = $[A.nodesField];
                        if (D && D.length > 0)
                            ;
                        else if (B.loadOnExpand && $.asyncLoad !== false)
                            A["loadNode"]($)
                    }
                    this.dragAction = this.getFeedback($, C, 3, A)
                } else
                    this.dragAction = "no";
                if (B && A && B != A && !$ && A["getChildNodes"](A.root).length == 0) {
                    $ = A["getRootNode"]();
                    this.dragAction = "add";
                    this.dropNode = $
                }
            }
            this.lastFeedbackClass = "si-feedback-" + this.dragAction;
            this.feedbackEl.className = "si-feedback " + this.lastFeedbackClass;
            if (this.dragAction == "no")
                $ = null ;
            this.setRowFeedback($, this.dragAction, A)
        },
        onDragStop: function(A) {
            var E = this.owner
              , C = this._getDropTree(A.event);
            si["removeNode"](this.feedbackEl);
            this.feedbackEl = null ;
            this.setRowFeedback(null );
            var D = [];
            for (var H = 0, G = this.dragData.length; H < G; H++) {
                var J = this.dragData[H]
                  , B = false;
                for (var K = 0, _ = this.dragData.length; K < _; K++) {
                    var F = this.dragData[K];
                    if (F != J) {
                        B = E["isAncestor"](F, J);
                        if (B)
                            break
                    }
                }
                if (!B)
                    D.push(J)
            }
            this.dragData = D;
            if (this.dropNode && C && this.dragAction != "no") {
                var L = E.getDragDropNodes(this.dragData, this.dropNode, this.dragAction);
                if (!L.cancel) {
                    var D = L.dragNodes
                      , I = L.targetNode
                      , $ = L.action;
                    if (E == C)
                        E["moveNodes"](D, I, $);
                    else {
                        E["removeNodes"](D);
                        C["addNodes"](D, I, $)
                    }
                }
            }
            E["setEnableHotTrack"](this["enableHotTrack"]);
            L = {
                dragNode: this.dragData[0],
                dropNode: this.dropNode,
                dragAction: this.dragAction
            };
            E["fire"]("drop", L);
            this.dropNode = null ;
            this.dragData = null 
        },
        setRowFeedback: function(B, F, A) {
            if (this.lastAddDomNode)
                siremoveclass(this.lastAddDomNode, "si-tree-feedback-add");
            if (B == null  || this.dragAction == "add") {
                si["removeNode"](this.feedbackLine);
                this.feedbackLine = null 
            }
            this.lastRowFeedback = B;
            if (B != null )
                if (F == "before" || F == "after") {
                    if (!this.feedbackLine)
                        this.feedbackLine = si.append(document.body, "<div class='si-feedback-line'></div>");
                    this.feedbackLine.style.display = "block";
                    var D = A["getNodeBox"](B)
                      , E = D.x
                      , C = D.y - 1;
                    if (F == "after")
                        C += D.height;
                    si["setXY"](this.feedbackLine, E, C);
                    var _ = A["getBox"](true);
                    sisetwidth(this.feedbackLine, _.width)
                } else {
                    var $ = A._getNodeElFirstChild(B);
                    siaddclass($, "si-tree-feedback-add");
                    this.lastAddDomNode = $
                }
        },
        getFeedback: function($, I, F, A) {
            var J = A["getNodeBox"]($)
              , _ = J.height
              , H = I - J.y
              , G = null ;
            if (this.dragData["indexOf"]($) != -1)
                return "no";
            var C = false;
            if (F == 3) {
                C = A["isLeaf"]($);
                for (var E = 0, D = this.dragData.length; E < D; E++) {
                    var K = this.dragData[E]
                      , B = A["isAncestor"](K, $);
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
            var L = A._ongivefeedback(G, this.dragData, $);
            return L.effect
        },
        _getDrag: function() {
            if (!this.drag)
                this.drag = new si.Drag({
                    capture: false,
                    onStart: si.createDelegate(this.onDragStart, this),
                    onMove: si.createDelegate(this.onDragMove, this),
                    onStop: si.createDelegate(this.onDragStop, this)
                });
            return this.drag
        }
    };
    si.TreeGrid = function() {
        this.columns = [];
        this.bottomColumns = [];
        this.columnIdMap = {};
        this.columnNameMap = {};
        this._cellErrors = [];
        this._cellMapErrors = {};
        si.TreeGrid["superclass"]["constructor"]["call"](this);
        this.resizerTriggerEl.style.display = this["allowResize"] ? "" : "none"
    };
    
    siextend(si.TreeGrid, si.Tree, {
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
        positionState: true,
        _headerCellCls: "si-treegrid-headerCell",
        _cellCls: "si-treegrid-cell",
        boderCls: "si-treegrid-border",
        _headerCls: "si-treegrid-header",
        bodyCls: "si-treegrid-body",
        treeNodeCls: "si-treegrid-node",
        treeNodesCls: "si-treegrid-nodes",
        selectedNodeCls: "si-treegrid-selectedNode",
        hoverNodeCls: "si-treegrid-hoverNode",
        expandCls: "si-treegrid-expand",
        collapseCls: "si-treegrid-collapse",
        eciconCls: "si-treegrid-ec-icon",
        nodeshowCls: "si-treegrid-nodeTitle",
        uiCls: "si-treegrid"
    });
    siTreeGridPrototype = si.TreeGrid["prototype"];
    siTreeGridPrototype["getAttrs"] = function(_) {
        var E = si.TreeGrid["superclass"]["getAttrs"]["call"](this, _);
        si["_ParseString"](_, E, ["treeColumn", "ondrawcell"]);
        si["_ParseBool"](_, E, ["allowResizeColumn", "allowMoveColumn", "allowResize"]);
        var C = si["getChildNodes"](_);
        for (var $ = 0, D = C.length; $ < D; $++) {
            var B = C[$]
              , A = jQuery(B).attr("property");
            if (!A)
                continue;A = A.toLowerCase();
            if (A == "columns")
                E.columns = si.createColumns(B)
        }
        delete E.data;
        return E
    };
    siTreeGridPrototype._onBodyElScroll = function(_) {
        var $ = this.bodyEl.scrollLeft;
        this.headerEl.firstChild.scrollLeft = $
    };
    siTreeGridPrototype["getColumnWidth"] = function(_) {
        var $ = this["getColumnBox"](_);
        return $ ? $.width : 0
    };
    siTreeGridPrototype["setColumnWidth"] = function(_, $) {
        _ = this["getColumn"](_);
        if (!_)
            return;
        if (si.isNumber($))
            $ += "px";
        _.width = $;
        this["doUpdate"]()
    };
    siTreeGridPrototype.getRowColumnId = function(_, $) {
        return this.uid + "$" + _._id + "$" + $._id
    };
    siTreeGridPrototype["getAllowResize"] = function() {
        return this["allowResize"]
    };
    siTreeGridPrototype["setAllowResize"] = function($) {
        this["allowResize"] = $;
        this.resizerTriggerEl.style.display = this["allowResize"] ? "" : "none"
    };
    siTreeGridPrototype["getAllowMoveColumn"] = function($) {
        return this["allowMoveColumn"]
    };
    siTreeGridPrototype["setAllowMoveColumn"] = function($) {
        this["allowMoveColumn"] = $
    };
    siTreeGridPrototype["getAllowResizeColumn"] = function($) {
        return this["allowResizeColumn"]
    };
    siTreeGridPrototype["setAllowResizeColumn"] = function($) {
        this["allowResizeColumn"] = $
    };
    siTreeGridPrototype["getTreeColumn"] = function($) {
        return this.treeColumn
    };
    siTreeGridPrototype["setTreeColumn"] = function($) {
        if (this.treeColumn != $) {
            this.treeColumn = $;
            this["doUpdate"]()
        }
    };
    siTreeGridPrototype.getTreeColumnCellObj = function(H) {
        var A = H.node;
        if (si.isNull(H["showTreeIcon"]))
            H["showTreeIcon"] = this["showTreeIcon"];
        var G = H.cellHtml
          , B = this["isLeaf"](A)
          , $ = this["getLevel"](A) * 18
          , D = "";
        if (H.cellCls)
            H.cellCls += " si-treegrid-treecolumn ";
        else
            H.cellCls = " si-treegrid-treecolumn ";
        var F = "<div class=\"si-treegrid-treecolumn-inner " + D + "\">";
        if (!B)
            F += "<a href=\"#\" onclick=\"return false;\"  hidefocus class=\"" + this.eciconCls + "\" style=\"left:" + ($) + "px;\"></a>";
        $ += 18;
        if (H["showTreeIcon"]) {
            var _ = this["getNodeIcon"](A);
            F += "<div class=\"" + _ + " si-treegrid-nodeicon\" style=\"left:" + $ + "px;\"></div>";
            $ += 18
        }
        G = "<span class=\"si-tree-nodetext\">" + G + "</span>";
        if (H["showCheckBox"]) {
            var E = this.getCheckboxUid(A)
              , C = this["isCheckedNode"](A);
            G = "<input type=\"checkbox\" id=\"" + E + "\" class=\"" + this.checkboxCls + "\" hidefocus " + (C ? "checked" : "") + "/>" + G
        }
        F += "<div class=\"si-treegrid-nodeshow\" style=\"margin-left:" + ($ + 2) + "px;\">" + G + "</div>";
        F += "</div>";
        G = F;
        H.cellHtml = G
    };
    siTreeGridPrototype.getCellObject = function($, B) {
        var D = this["showCheckBox"];
        if (D && this["hasChildren"]($))
            D = this["showFolderCheckBox"];
        var _ = si._getMap(B.field, $)
          , C = {
            isLeaf: this["isLeaf"]($),
            rowIndex: this["indexOf"]($),
            showCheckBox: D,
            iconCls: this["getNodeIcon"]($),
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
            if (si.isDate(C.value))
                C.cellHtml = si.formatDate(_, B.dateFormat);
            else
                C.cellHtml = _;
        var A = B.renderer;
        if (A) {
            fn = typeof A == "function" ? A : window[A];
            if (fn)
                C.cellHtml = fn["call"](B, C)
        }
        this["fire"]("drawcell", C);
        if (C.cellHtml === null  || C.cellHtml === undefined || C.cellHtml === "")
            C.cellHtml = "&nbsp;";
        if (!this.treeColumn || this.treeColumn !== B.name)
            return C;
        this.getTreeColumnCellObj(C);
        return C
    };
    siTreeGridPrototype["getHeaderHeight"] = function() {
        return sigetheight(this.headerEl)
    };
    siTreeGridPrototype.beforeBodyElScroll = function() {
        var B = this.bodyEl.scrollHeight
          , E = this.bodyEl.clientHeight
          , A = this["getWidth"](true)
          , _ = this.headerEl.firstChild.firstChild
          , D = this.bodyEl.firstChild;
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
            $ = this.headerEl.firstChild.firstChild.firstChild.offsetWidth;
            this.bodyEl.firstChild.style.width = $ + "px"
        } catch (C) {}
        this._onBodyElScroll()
    };
    siTreeGridPrototype["_doLayoutTopRightCell"] = function() {
        var A = this._headerInnerEl.firstChild
          , $ = A.offsetWidth + 1
          , _ = A.offsetHeight - 1;
        if (_ < 0)
            _ = 0;
        this._topRightCellEl.style.height = _ + "px"
    };
    siTreeGridPrototype["doLayout"] = function() {
        if (!this["canLayout"]())
            return;
        var C = this["isAutoHeight"]()
          , D = this["isAutoWidth"]()
          , _ = this["getWidth"](true)
          , A = this["getHeight"](true)
          , B = this["getHeaderHeight"]()
          , $ = A - B;
        this.bodyEl.style.width = _ + "px";
        if (C)
            this.bodyEl.style.height = "auto";
        else
            this.bodyEl.style.height = $ + "px";
        this.beforeBodyElScroll();
        this["_doLayoutTopRightCell"]();
        this["fire"]("layout")
    };
    siTreeGridPrototype["getScrollLeft"] = function() {
        return this.bodyEl.scrollLeft
    };
    siTreeGridPrototype["doUpdate"] = function() {
        if (!this.allowUpdate)
            return;
        this.updateHeader();
        var $ = new Date()
          , _ = this["_getViewChildNodes"](this.root)
          , B = [];
        this.getNodesEl(_, this.root, B);
        var A = B.join("");
        this.bodyEl.innerHTML = A;
        this._deferLayout()
    };
    siTreeGridPrototype.getNodeTitleEl = function(B, M, G) {
        var K = !G;
        if (!G)
            G = [];
        var H = B[this.textField];
        if (H === null  || H === undefined)
            H = "";
        var I = this["isLeaf"](B)
          , $ = this["getLevel"](B)
          , D = "";
        if (!I)
            D = this["isExpandedNode"](B) ? this.expandCls : this.collapseCls;
        if (this.selectedNode == B)
            D += " " + this.selectedNodeCls;
        var E = this["getBottomColumns"]();
        G[G.length] = "<table class=\"si-treegrid-nodeTitle ";
        G[G.length] = D;
        G[G.length] = "\" cellspacing=\"0\" cellpadding=\"0\">";
        G[G.length] = this.getTrElementString();
        G[G.length] = "<tr>";
        for (var J = 0, _ = E.length; J < _; J++) {
            var C = E[J]
              , F = this.getRowColumnId(B, C)
              , L = this.getCellObject(B, C)
              , A = C.width;
            if (typeof A == "number")
                A = A + "px";
            G[G.length] = "<td id=\"";
            G[G.length] = F;
            G[G.length] = "\" class=\"si-treegrid-cell ";
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
    };
    siTreeGridPrototype.updateHeader = function() {
        var _ = this.getColumnLevelColRowSpan()
          , F = this["getBottomColumns"]()
          , G = F.length
          , E = [];
        E[E.length] = "<div class=\"si-treegrid-headerInner\"><table style=\"display:table\" class=\"si-treegrid-table\" cellspacing=\"0\" cellpadding=\"0\">";
        E[E.length] = this.getTrElementString("header");
        for (var K = 0, $ = _.length; K < $; K++) {
            var C = _[K];
            E[E.length] = "<tr >";
            for (var H = 0, D = C.length; H < D; H++) {
                var A = C[H]
                  , B = A.header;
                if (typeof B == "function")
                    B = B["call"](this, A);
                if (si.isNull(B) || B === "")
                    B = "&nbsp;";
                var I = this.generateId(A);
                E[E.length] = "<td id=\"";
                E[E.length] = I;
                E[E.length] = "\" class=\"si-treegrid-headerCell  " + (A.headerCls || "") + " ";
                E[E.length] = "\" style=\"";
                var J = F["indexOf"](A);
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
        E[E.length] = "</table><div class=\"si-treegrid-topRightCell\"></div></div>";
        var L = E.join("");
        this.headerEl.innerHTML = L;
        this._headerInnerEl = this.headerEl.firstChild;
        this._topRightCellEl = this._headerInnerEl.lastChild
    };
    siTreeGridPrototype.getTrElementString = function(D) {
        var F = ""
          , B = this["getBottomColumns"]();
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
              , E = this.generateId(A) + "$" + D;
            F += "<td id=\"" + E + "\" style=\"padding:0;border:0;margin:0;height:0;";
            if (A.width)
                F += "width:" + A.width;
            if (A.visible == false)
                F += ";display:none;";
            F += "\" ></td>"
        }
        F += "</tr>";
        return F
    };
    siTreeGridPrototype["_getHeaderScrollEl"] = function() {
        return this.headerEl.firstChild
    };
    siTreeGridPrototype.generateId = function($) {
        return this.uid + "$column$" + $.id
    };
    siTreeGridPrototype["_create"] = function() {
        si.TreeGrid["superclass"]["_create"]["call"](this);
        this.resizerTriggerEl = si.append(this.borderEl, "<div class=\"si-resizer-trigger\" style=\"\"></div>");
        siBindEvent(this.bodyEl, "scroll", this._onBodyElScroll, this);
        this._DraggableTool = new si.BaseDraggable(this);
        this._ColumnMove = new si.GridColumnMove(this);
        this._GridSplitter = new si.GridSplitter(this);
        this._CellTip = new si.CellTip(this)
    };
    siTreeGridPrototype._getNodeShowEl = function(_) {
        if (!_)
            return null ;
        var $ = this._getNodeElFirstChild(_);
        return $
    };
    si.copyTo(si.TreeGrid.prototype, si.BaseGridColumn);
    si.copyTo(si.TreeGrid.prototype, si.BaseValidateGrid);
    siRegClass(si.TreeGrid, "treegrid");
    si.locale = "en-US";
    si.dateInfo = {
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
    if (si.Calendar)
        si.copyTo(si.Calendar.prototype, {
            firstDayOfWeek: 0,
            todayText: "\u4eca\u5929",
            clearText: "\u6e05\u9664",
            okText: "\u786e\u5b9a",
            cancelText: "\u53d6\u6d88",
            daysShort: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
            format: "yyyy\u5e74MM\u6708",
            timeFormat: "H:mm"
        });
    for (var id in si) {
        var clazz = si[id];
        if (clazz && clazz["prototype"] && clazz["prototype"].isControl)
            clazz["prototype"]["requiredErrorText"] = "\u4e0d\u80fd\u4e3a\u7a7a"
    }
    if (si.VTypes)
        si.copyTo(si.VTypes, {
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
    if (si.Pager)
        si.copyTo(si.Pager.prototype, {
            firstText: "\u9996\u9875",
            prevText: "\u4e0a\u4e00\u9875",
            nextText: "\u4e0b\u4e00\u9875",
            lastText: "\u5c3e\u9875",
            pageInfoText: "\u6bcf\u9875 {0} \u6761,\u5171 {1} \u6761"
        });
    if (si.DataGrid)
        si.copyTo(si.DataGrid.prototype, {
            emptyText: "\u6ca1\u6709\u8fd4\u56de\u7684\u6570\u636e"
        });
    if (si.FileUpload)
        si.FileUpload["prototype"].buttonText = "\u6d4f\u89c8...";
    if (si.HtmlFile)
        si.HtmlFile["prototype"].buttonText = "\u6d4f\u89c8...";
    if (window.si.Gantt) {
        si.GanttView.ShortWeeks = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"];
        si.GanttView.LongWeeks = ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"];
        si.Gantt.PredecessorLinkType = [{
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
        si.Gantt.ConstraintType = [{
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
        si.copyTo(si.Gantt, {
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
