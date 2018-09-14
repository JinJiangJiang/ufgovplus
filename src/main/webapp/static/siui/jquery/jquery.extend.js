/***
 * 基础工具
 */
var getStyle = function() {
    var $ = document.defaultView;
    return new Function("el","style",["style['indexOf']('-')>-1 && (style=style.replace(/-(\\w)/g,function(m,a){return a.toUpperCase()}));", "style=='float' && (style='", $ ? "cssFloat" : "styleFloat", "');return el.style[style] || ", $ ? "window.getComputedStyle(el,null)[style]" : "el.currentStyle[style]", " || null;"].join(""))
}();
var isOpera = Object['prototype'].toString['call'](window.opera) == "[object Opera]";

var d8 = {
    autofit: function(obj) {
        var $ = obj.parentNode
            , _ = d8["getChildNodes"]($);
        if ($ == document.body)
            obj.style.height = "0px";
        var F = d8["getHeight"]($, true);
        for (var E = 0, D = _.length; E < D; E++) {
            var C = _[E]
                , J = C.tagName ? C.tagName.toLowerCase() : "";
            if (C == obj || (J == "style" || J == "script"))
                continue;
            var G = getStyle(C, "position");
            if (G == "absolute" || G == "fixed")
                continue;
            var A = d8["getHeight"](C)
                , I = d8["getMargins"](C);
            F = F - A - I.top - I.bottom
        }
        var H = d8["getBorders"](obj)
            , B = d8["getPaddings"](obj)
            , I = d8["getMargins"](obj);
        F = F - I.top - I.bottom;
        if (!(d8.isIE &&!d8.isisStrict))
            F = F - B.top - B.bottom - H.top - H.bottom;
        if (F < 0)
            F = 0;
        obj.style.height = F + "px";
        /*try {
         _ = d8[getChildNodes](this.el);
         for (E = 0,
         D = _.length; E < D; E++) {
         C = _[E];
         si.layout(C)
         }
         } catch (K) {}*/
    },
    isEmpty: function(s){
        if (s == null || s == "") {
            return true;
        }
        return false;
    },
    isNull: function(s){
        if (typeof(s)==undefined || s == null || s == undefined || s == "" || s == "undefined" || s == "null") {
            return true;
        }
        return false;
    },
    converNullToValue : function(param, value){
        return this.isNull(param) ? value : param;
    },
    containsSpecialWord :function(str){
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？\"]");
        return pattern.test(str);
    },
    confirm2:function(c,f){
        var d = window.parent.dialog({
            button: [
                {
                    value: '取消',
                    callback: function () {
                    },
                    autofocus: false
                }
            ],
            ok: function () {
                f();
            },
            okValue: '确定',
            autofocus:false,
            width:300,
            height:30,
            drag:true,
            title: '提示',
            content: c
        });
        return d;
    },
    prompt:function(c,f){
        var d = window.parent.dialog({
            title: '消息',
            content: '<input id="property-returnValue-demo" value="1" />',
            ok: function () {
                var value = $('#property-returnValue-demo').val();
                f(value);
            },
            okValue: '确定',
            autofocus:false,
            width:300,
            height:30,
            drag:true,
            title: '提示',
            content: c
        });
        return d;
    },
    alert2:function(c){
        var d = window.parent.dialog({
            autofocus: false,
            width:300,
            height:30,
            title: '信息',
            content: c,
            ok: function () {},
            okValue: '确定'
        });
        d.showModal();
    },
    confirm:function(c,f){
        window.parent.layer.confirm(c, {
            btn: ['确定','取消'] //按钮
        }, function(){
            f();
        });
    },
    siconfirm:function(c,f){
        window.parent.si.confirm(c, "系统提示",
        function (action) {
            if (action == "ok") {
                f();
            }
        });
    },
    siprompt:function(c,f){
        window.parent.si.prompt("系统提示：", c,
            function (action, value) {
                if (action == "ok") {
                    f(value);
                }
            },
            true
        );
    },
    open:function(obj){
        var param = {type: 2,
            anim: -1,
            isOutAnim: false
            //content: 'question_select.jsp?sectionId='+sectionId,
        }
        obj = $.extend(obj,param);
        window.top.layer.open(obj);
    },
    msg:function(msg){
        window.top.mainMsg('<i class="Hui-iconfont" style="font-size:18px">&#xe615;</i>&nbsp;'+msg,{anim:-1,isOutAnim:false,offset:'55px'});
    },
    loading:function(obj){
        window.parent.layer.load();
    },
    cancelLoad:function(obj){
        window.parent.layer.closeAll('loading');
    },
    alert:function(obj){
        /*window.parent.layer.open({
         type: 1,
         skin: 'layui-layer-demo',
         //area: ['360px', '195px'], //宽高
         title: false, //不显示标题
         content: '<div style="padding:20px;text-align:center">'+obj+'</div>',
         cancel: function(){
         }
         });*/
        window.parent.layer.alert(obj, {
            skin: 'layui-layer-lan'
            ,closeBtn: 0
        });
    },
    sialert:function(msg){
        window.parent.si.alert(msg);
    },
    close:function(){
        window.parent.layer.closeAll();
    },
    closeLayer:function(){
        var index = window.parent.layer.getFrameIndex(window.name);
        window.parent.layer.close(index);
    },
    closePage:function(){
        window.parent.layer.closeAll('page');
    },
    closeIframe:function(){
        window.parent.layer.closeAll('iframe');
    },
    getHeight:function($, _) {
        $ = d8.getElementById($);
        if ($.style.display == "none" || $.type == "text/javascript")
            return 0;
        return _ ? jQuery($).height() : jQuery($).outerHeight()
    },
    getElementById:function(D, A) {
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
    },
    getChildNodes: function(A, C) {
        A = d8.getElementById(A);
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
    getMargins: function($) {
        $ = d8.getElementById($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("margin-top"), 10) || 0,
            left: parseInt(_.css("margin-left"), 10) || 0,
            bottom: parseInt(_.css("margin-bottom"), 10) || 0,
            right: parseInt(_.css("margin-right"), 10) || 0
        }
    },
    getBorders: function($) {
        $ = d8.getElementById($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("border-top-width"), 10) || 0,
            left: parseInt(_.css("border-left-width"), 10) || 0,
            bottom: parseInt(_.css("border-bottom-width"), 10) || 0,
            right: parseInt(_.css("border-right-width"), 10) || 0
        }
    },
    getPaddings: function($) {
        $ = d8.getElementById($);
        var _ = jQuery($);
        return {
            top: parseInt(_.css("padding-top"), 10) || 0,
            left: parseInt(_.css("padding-left"), 10) || 0,
            bottom: parseInt(_.css("padding-bottom"), 10) || 0,
            right: parseInt(_.css("padding-right"), 10) || 0
        }
    },
    convertHtml2Text:function(html,length){
        var rst = html.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');
        if(length){
            rst = rst.substr(0,length);
        }
        return rst;
    },
    isOpera: (function(){return window.Object['prototype'].toString['call'](window.opera) == "[object Opera]"}()),
    isIE: (function(){return !!window.attachEvent && !isOpera}()),
    isIE678:(function(){return (!$.support.leadingWhitespace)}()),
    isStrict: (function(){DOC = document;return DOC.compatMode == "CSS1Compat"}())
}

/**
 * 统一消息处理
 */
$(function(){
    var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
    // 设置jQuery Ajax全局的参数
    $.ajaxSetup({
        type: "POST",
        beforeSend: function(XMLHttpRequest){
            if(header){
                XMLHttpRequest.setRequestHeader(header, token);
            }
        },
        success: function (data) {
            d8.msg(data.message);
            d8.closeLayer();
        },
        error: function(jqXHR, textStatus, errorThrown){
            switch (jqXHR.status){
                case(500):
                    d8.msg("500 服务器系统内部错误!");
                    break;
                case(403):
                    d8.msg("403 无权限执行此操作!");
                    break;
                case(408):
                    d8.msg("408 请求超时!");
                    break;
                case(404):
                    d8.msg("404 未找到页面!");
                    break;
                case(200): //后台转json对象异常程序会运行到此处
                    console.log(222222);
                    d8.msg(jqXHR.responseText);
                    break;
                default:
                    d8.msg("网络或未知错误");
            }
            // console.log(jqXHR);
            //d8.unmask();
        },
        complete: function(xhr,status) {
            var sessionStatus = xhr.getResponseHeader('sessionstatus');
            if(sessionStatus == 'timeout') {
                window.top.disp_confirm();
            }
        }
    });
    /**初始化div-fit,table-fit*/
    $(".s-fit").each(function(i,dom){
        d8.autofit(dom);
        $(window).resize(function(){
            d8.autofit(dom);
        });
    });
    $(window).resize(function(){
        $(".table-fit").css('width','100%');
    });
    $(window).load(function(){
        $(".table-fit").css('width','100%');
    });
    /**初始化dataTables**/
    if($.fn.DataTable != null && $.fn.DataTable != undefined){
        $.extend(true,$.fn.DataTable.defaults, {
            searching: false,
            ordering:  false,
            //iDisplayLength:1,默认显示条目数
            oLanguage: {
                sInfo:"显示 _START_ 到 _END_ 条记录，共 _TOTAL_ 条记录",
                oPaginate: {
                    sFirst: "首页",
                    sPrevious: "<上一页",
                    sNext: "下一页>",
                    sLast: "尾页"
                }
            }
        } );
    }
});
/** jquery serializeObject */
(function($) {
    $.fn.extend({
        serializeObject : function() {
            if (this.length > 1) {
                return false;
            }
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name]) {
                    if (!o[this.name].push) {
                        o[this.name] = [ o[this.name] ];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        }
    });
})(jQuery);