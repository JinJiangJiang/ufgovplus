if(typeof(mini) != 'undefined'){
	mini.showNotyAlert = true;
	mini.showFiledsNotyAlert = true;
	mini.getLabelText = function(A){
		if($(A.el.parentNode).prev(".label")){
			 var prefix =  $.trim($(A.el.parentNode).prev(".label").text());
			 prefix = prefix.replace(/(：|:)/, "");
			 return prefix;
		}
		return "";
	};
	mini.Form.prototype.validate = function(C) {
		var state = true;
		var $ = this.getFields();
		var notShowNotyAlert = false;
		if ($.length > 1 && C !== false && mini.showNotyAlert) {
			notShowNotyAlert = true;
		}
		for ( var _ = 0, D = $.length; _ < D; _++) {
			var A = $[_];
			if (!A[validate])
				continue;
			if (A[isDisplay] && A[isDisplay]()) {
				A["notShowNotyAlert"] = notShowNotyAlert;
				var B = A[validate]();
				if (B == false)state = false;
				if (B == false && C === false)
					break;
			}
		}
		if (!state && mini.showFiledsNotyAlert) {
			setTimeout(function(){mini.noty('表单数据错误不能保存！', mini.notyErrorType);},500);
			//mini.noty('输入数据有误,请修改后再提交!', mini.notyErrorType);
		}
		//this[isValid]()
		return state;
	};
	$.extend( mini.AutoComplete, {
		escapeRegex: function( value ) {
			return value.replace( /[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&" );
		},
		filter: function( array, term ) {
			var matcher = new RegExp( mini.AutoComplete.escapeRegex( term ), "i" );
			return $.grep( array, function( value ) {
				return matcher.test(value.cabbreviation || value.cname || value.label || value.value || value );
			} );
		}
	} );
}else{
	mini = {};
}

if(typeof mini_debugger =="undefined" || mini_debugger)
	mini_debugger = false;

function closeWindow(action) {
    if (action == "close" && form.isChanged()) {
        if (confirm("数据被修改了，是否先保存?")) {
            return false;
        }
    }
    if (window.CloseOwnerWindow)
    	return window.CloseOwnerWindow(action);
    else 
    	window.close();  
}
var si = {
			maskAdvice : function(originalFunc){
				return function() {
					if(console.log){
						console.log("before function");
						console.log(window.frameElement);
						console.log("showload");
						console.log(window.frameElement.showload);
						console.log("onload");
						console.log(window.frameElement);
						console.log("originalFunc");
					}
					originalFunc();
				};
			},
			openWfW:function(){},
			closeWindow:function(action){
				 if (action == "close" && form.isChanged()) {
				        if (confirm("数据被修改了，是否先保存?")) {
				            return false;
				        }
				    }
				    if (window.CloseOwnerWindow)
				    	return window.CloseOwnerWindow(action);
				    else 
				    	window.close(); 
			},
			closeWfWindow:function(){},
			refreshInputWfWindow:function(){
				if(window.parent && window.parent.refreshInputWfWindow){
					window.parent.refreshInputWfWindow();
				}
			}
	};
/**
 * 给所有ajax方式数据加上token参数处理
 */
$(function () {
  var token = $("meta[name='_csrf']").attr("content");
  var header = $("meta[name='_csrf_header']").attr("content");
  $(document).ajaxSend(function(e, xhr, options) {
    xhr.setRequestHeader(header, token);
  });

});
/**
 * 统一消息处理
 */

$(function(){
	  var token = $("meta[name='_csrf']").attr("content");
	  var header = $("meta[name='_csrf_header']").attr("content");
     //设置jQuery Ajax全局的参数 
    $.ajaxSetup({
        type: "POST", 
        beforeSend: function(XMLHttpRequest){
        	XMLHttpRequest.setRequestHeader(header, token);
        },
        success: function (data) {
        	si.noty(data.message);
			closeWindow();
        },
        error: function(jqXHR, textStatus, errorThrown){
            switch (jqXHR.status){
                case(500):
                    si.noty("500 服务器系统内部错误!");
                    break;
                case(403):
                	si.noty("403 无权限执行此操作!");
                    break;
                case(408):
                	si.noty("408 请求超时!");
                    break;
                case(404):
                	si.noty("404 未找到页面!");
                    break;
                case(200): //后台转json对象异常程序会运行到此处
                	si.noty(jqXHR.responseText);
                	break;
                default:
                	si.noty("无网络连接或未知错误");
            }
            si.unmask();
        }
    });
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

(function(){
	var getParentWindow = function(win){
		return win.parent;
	};
	var obj = window;
	while(!obj.parent.mi && obj.parent && obj != obj.parent){
		obj = getParentWindow(obj);
	}
	obj = obj.parent || obj;
	if(obj.mi){
		mini.noty = function(text,type,layout){
			obj.mi.alert(text,'information',layout);
		};
		si.noty = function(text,type){
			obj.mi.alert(text,'information');
		};
		si.confirm = obj.mi.confirm;
		si.openWfW = obj.openWfW;
		si.openInputWfW = obj.openInputWfW;
		si.openViewWfW = obj.openViewWfW;
		si.closeWfWindow = obj.closeWfWindow;
		si.addPanel = obj.addPanel;
		si.removePanel = obj.removePanel;
		si.refreshTabWf = obj.refreshTabWf;
		si.refreshMessage = obj.refreshMessage;
		si.mask = obj.mi.mask;
		si.refreshWfWindow = obj.refreshWfWindow;
		si.workflowforward = obj.workflowforward;
		si.viewTask = obj.viewTask;
		si.unmask = obj.unmask;
		si.closeInputWfWindow = obj.closeInputWfWindow;
	}
})();


$(function(){
	if($("#searchmore")){
		$("#searchmore").hover(function(){
			$(this).css("opacity",1);
			$(this).css("filter","alpha(opacity=100)");
		},function(){
			$(this).css("opacity",0.6);
			$(this).css("filter","alpha(opacity=60)");
		});
		$("#searchmore").click(function(){
			$(this).toggleClass("searchmore-collapse");
			$("#searchmorebox").toggleClass("searchmorebox-display");
			if(mini.get("mini-fit")){
				mini.get("mini-fit").doLayout();
			}
		});
	}
	if(!window.submitForm){
		submitForm = function(){
			return false;
		};
	}
	submitForm = si.maskAdvice(submitForm);
});