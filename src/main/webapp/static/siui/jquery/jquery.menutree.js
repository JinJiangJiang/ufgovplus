(function (d) {
	d.extend(d.fn, {swapClass:function (a, b) {
		var f = this.filter("." + a);
		this.filter("." + b).removeClass(b).addClass(a);
		f.removeClass(a).addClass(b);
		return this;
	}, replaceClass:function (a, b) {
		return this.filter("." + a).removeClass(a).addClass(b).end();
	}, hoverClass:function (a) {
		a = a || "hover";
		return this.hover(function () {
			d(this).addClass(a);
		}, function () {
			d(this).removeClass(a);
		});
	}, heightToggle:function (b, a) {
		b ? this.animate({height:"toggle"}, b, a) : this.each(function () {
			jQuery(this)[jQuery(this).is(":hidden") ? "show" : "hide"]();
			if (a) {
				a.apply(this, arguments);
			}
		});
	}, heightHide:function (b, a) {
		if (b) {
			this.animate({height:"hide"}, b, a);
		} else {
			this.hide();
			if (a) {
				this.each(a);
			}
		}
	}, prepareBranches:function (a) {
		if (!a.prerendered) {
			this.filter(":last-child:not(ul)").addClass(c.last);
			this.filter((a.collapsed ? "" : "." + c.closed) + ":not(." + c.open + ")").find(">ul").hide();
		}
		return this.filter(":has(>ul)");
	}, applyClasses:function (b, a) {
		this.filter(":has(>ul):not(:has(>a))").find(">span").unbind("click.treeview").bind("click.treeview", function (e) {
			if (this == e.target) {
				a.apply(d(this).next());
			}
		}).add(d("a", this)).hoverClass();
		if (!b.prerendered) {
			this.filter(":has(>ul:hidden)").addClass(c.expandable).replaceClass(c.last, c.lastExpandable);
			this.not(":has(>ul:hidden)").addClass(c.collapsable).replaceClass(c.last, c.lastCollapsable);
			var f = this.find("div." + c.hitarea);
			if (!f.length) {
				f = this.prepend("<div class=\"" + c.hitarea + "\"/>").find("div." + c.hitarea);
			}
			f.removeClass().addClass(c.hitarea).each(function () {
				var e = "";
				d.each(d(this).parent().attr("class").split(" "), function () {
					e += this + "-hitarea ";
				});
				d(this).addClass(e);
			});
		}
		this.find("div." + c.hitarea).click(a);
	}, treeview:function (s) {
		function t(e, f) {
			function g(h) {
				return function () {
					q.apply(d("div." + c.hitarea, e).filter(function () {
						return h ? d(this).parent("." + h).length : true;
					}));
					return false;
				};
			}
			d("a:eq(0)", f).click(g(c.collapsable));
			d("a:eq(1)", f).click(g(c.expandable));
			d("a:eq(2)", f).click(g());
		}
		function q() {
			d(this).parent().find(">.hitarea").swapClass(c.collapsableHitarea, c.expandableHitarea).swapClass(c.lastCollapsableHitarea, c.lastExpandableHitarea).end().swapClass(c.collapsable, c.expandable).swapClass(c.lastCollapsable, c.lastExpandable).find(">ul").heightToggle(s.animated, s.toggle);
			if (s.unique) {
				d(this).parent().siblings().find(">.hitarea").replaceClass(c.collapsableHitarea, c.expandableHitarea).replaceClass(c.lastCollapsableHitarea, c.lastExpandableHitarea).end().replaceClass(c.collapsable, c.expandable).replaceClass(c.lastCollapsable, c.lastExpandable).find(">ul").heightHide(s.animated, s.toggle);
			}
		}
		this.data("toggler", q);
		
		this.addClass("treeview");
		var b = this.find("li").prepareBranches(s);
		b.applyClasses(s, q);
		return this;
	}});
	d.treeview = {};
	var c = (d.treeview.classes = {open:"open", closed:"closed", expandable:"expandable", expandableHitarea:"expandable-hitarea", lastExpandableHitarea:"lastExpandable-hitarea", collapsable:"collapsable", collapsableHitarea:"collapsable-hitarea", lastCollapsableHitarea:"lastCollapsable-hitarea", lastCollapsable:"lastCollapsable", lastExpandable:"lastExpandable", last:"last", hitarea:"hitarea"});
})(jQuery);
if (!si) {
	var si = {};
}
si.init = function () {
	var i = $("#leftMenuPanelId").children("div").filter(function (a) {
			return this.style.display !== "none";
		}).children("ul");
	i.find("a").closest("div").bind("mouseover", function (a) {
			a.stopImmediatePropagation();
			$(this).addClass("hover");
		});
		i.find("a").closest("div").bind("mouseout", function (a) {
			a.stopImmediatePropagation();
			$(this).removeClass("hover");
		});
	$("#leftMenuPanelId").children("div").filter(function (a) {
		return this.style.display !== "none";
	}).children("ul").treeview({}).find("li").bind("click", function (a) {
		si.handler.processLeftMenuStyle(this, a);
		si.handler.handleLeftMenuClick(this, a);
	});
};
si.handler = function () {
	return {menus:[], activeTreeId:null, setActiveTreeMenu:function (b) {
		this.activeTreeId = b;
	},
	 handleLeftMenuCategory:function (h, n, k) {
		var l = this;
		var m = encodeURI($(h).attr("lazy"));
		var j = $(h).attr("class").split(" ")[0].split("-")[1];
		var i = $(h).children("ul").length;
		if (m != "" && m != null) {
			if ($(h).children("ul").length <= 0) {
				$.ajax({url:m, data:{level:j}, dataType:"text", type:"post", success:function (a) {
					$(h).children("ul").remove();
					var c = $(h).append(a);
					var b = $("#leftMenuPanelId").children("div").filter(function (d) {
						return this.style.display !== "none";
					}).children("ul");
					b.parent().css({width:$("#leftMenuPanelId").width()});
					$(b).treeview({add:c});
					if ($(h).children("ul").length > 0) {
						$(h).children("div.last-level").remove();
					}
					$(h).children("ul").children("li").click(function (e, d) {
						l.processLeftMenuStyle(this, e, d);
						l.handleLeftMenuClick(this, e, d);
						l.handleLeftMenuCategory(this, e, d);
					});
				}});
			}
		}
	}, processLeftMenuStyle:function (i, n, k) {
		if (n) {
			n.preventDefault();
			n.stopImmediatePropagation();
		}
		if (n && n.target.tagName == "DIV") {
			return;
		}
		$(i).children("ul").slideToggle(0);
		$(i).filter(":has(>ul)").children("div.hitarea").swapClass("expandable-hitarea", "collapsable-hitarea");
		if (i.className.search("dis-menu") !== -1) {
			return;
		}
		var p = $(i).parents("li");
		for (var o = 0, j = p.length; o < j; o++) {
			if (p[o].className.search("dis-menu") !== -1) {
				return;
			}
		}
		var l = i.className.split(" ");
		for (var o = 0, j = l.length; o < j; o++) {
			if (l[o] == "nav-first") {
				return;
			}
		}
		$(i).closest("div").find("a").closest("div").removeClass("ces-menu-tree-curr");
		$(i).children("div:last").addClass("ces-menu-tree-curr");
		var m = $(i).closest(".nav-first");
		m.parent().find(".nav-first").filter(function (a) {
			return $(this)[0] !== m[0];
		}).children("ul").end().children("div.hitarea").removeClass("collapsable-hitarea").addClass("expandable-hitarea");
	}, handleLeftMenuClick:function (i, t, s) {
		var l = i.attributes.getNamedItem("iframesrc");
		var n = l !== null ? l.nodeValue : "";
		if (i.className.search("dis-menu") !== -1) {
			return;
		}
		var o = $(i).parents("li");
		for (var r = 0, p = o.length; r < p; r++) {
			if (o[r].className.search("dis-menu") !== -1) {
				return;
			}
		}
		if (n == "#") {
			return;
		}
	} };
}();

$(document).ready(function () {
	si.init();
});


