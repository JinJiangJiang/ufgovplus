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
var mi = {
	confirmstatus : false,
	notyTimer : null,
	innerHtml1 : '<div class="activity-item"> <i class="icon-ok"></i> <div class="activity"> There are <a href="#">6 new tasks</a> waiting for you. Don\'t forget! <span>About 3 hours ago</span> </div> </div>',
	innerHtml2 : '<div style="padding: 7px 12px;"> <i class="icon-exclamation-sign" style="float: left;font-size: 16px;display: inline-block;font-family: FontAwesome;font-style: normal;font-weight: normal;line-height: 1;-webkit-font-smoothing: antialiased;"></i> <div class="activity"><span>��ɫ��ƣ�����Ϊ��</span> </div> </div>',
	innerHtml3 : '<div class="activity-item"> <i class="fa fa-heart text-danger"></i> <div class="activity"> Your <a href="#">latest post</a> was liked by <a href="#">Audrey Mall</a> <span>35 minutes ago</span> </div> </div>',
	innerHtml4 : '<div class="activity-item"> <i class="fa fa-shopping-cart text-success"></i> <div class="activity"> <a href="#">Eugene</a> ordered 2 copies of <a href="#">OEM license</a> <span>14 minutes ago</span> </div> </div>',
	html3 : '<div class="activity-item"> <i class="icon-ok"></i> <div class="activity"> 系统提示：请输入角色信息！See <a href="#">changelog</a> <span>About 2 hours ago</span> <div> </div>',
	warp : function(text) {
		/*return '<span class="mini-errorIcon" style="margin-right:15px"></span><span>'
				+ text + '</span>' text-success;fa fa-check text-success*/
		text = text.replace(/(\pP)$/,"。");
		return '<div class="activity-item" style="text-align:center;font-size:14px"><i class="noty-info"></i><div class="activity">'+text+'<div> </div>';
	},

	alert : function(text, type,layout) {
		if (mi.notyTimer != null) {
			clearTimeout(mi.notyTimer);
			mi.notyTimer = null;
		}
		if (mi.noty != null) {
			$.noty.close(mi.noty.options.id);
			mi.noty = null;
		}
		text = this.warp(text);
		setTimeout(function(){
			mi.noty = noty({
				text : text,
				type : 'information',
				dismissQueue : true,
				layout : layout || 'topCenter',
				/* generate('top');
		        generate('topCenter');
		        generate('topLeft');
		        generate('topRight');
		        generate('center');
		        generate('centerLeft');
		        generate('centerRight');
		        generate('bottom');
		        generate('bottomCenter');
		        generate('bottomLeft');
		        generate('bottomRight');*/
				//theme : 'defaultTheme','bootstrapTheme','metroui','relax'
				theme:'defaultTheme',
				killer: true,
				maxVisible : 2,
				animation : {
					open : {
						height : "toggle"
					},
					close : {
						height : "toggle"
					},
					easing : "swing",
					speed : 300,
					fadeSpeed : "fast"
				}
			});
			mi.notyTimer = setTimeout(function() {
				$.noty.close(mi.noty.options.id);
			}, 4000);
		},0);
	},
	confirm : function(text, confirmcallback,cancelcallback) {
		if (!mi.confirmstatus) {
			noty({
				text : text,
				type : 'information',
				dismissQueue : true,
				layout : 'center',
				buttons : [ {
					addClass : 'btn btn-primary',
					text : '确定',
					onClick : function($noty) {
						$noty.close();
						if(confirmcallback){
							confirmcallback();
						}
					}
				}, {
					addClass : 'btn btn-danger',
					text : '取消',
					onClick : function($noty) {
						$noty.close();
						if(cancelcallback){
							cancelcallback();
						}
					}
				} ]
			});
			return false;
		} else {
			mi.confirmstatus = false;
			return true;
		}
	},
	maskAdvice : function(originalFunc) {
		return function() {
			if (console.log) {
				/*console.log("before function");
				console.log(window.frameElement);
				console.log("showload");
				console.log(window.frameElement.showload);
				console.log("onload");
				console.log(window.frameElement);
				console.log("originalFunc");*/
			}
			originalFunc();
		};
	},
	mask:function(){
		var $$mask = $(document.getElementById('mask'));
		var $$maskMessage = $(document.getElementById('maskMessage'));
		//var $$maskBottom = $(document.getElementById('maskBottom'));
		$$mask[0].style.display ="block";
		$$maskMessage[0].style.display ="block";
		//$$maskBottom[0].style.display="block";
	},
	unmask:function(){
		var $$mask = $(document.getElementById('mask'));
		var $$maskMessage = $(document.getElementById('maskMessage'));
		var $$maskBottom = $(document.getElementById('maskBottom'));
		$([ $$mask[0], $$maskMessage[0] ]).fadeOut('slow', function() {
			$(this).css('display','none');
			//$(this).remove();
			if ($(this).hasClass('mask-message')) {
				$$maskBottom.fadeOut('slow', function() {
					//$(this).remove();
					$(this).css('display','none');
				});
			}
		});
	}
};
var _timeId = 0;
$(function(){
	$("li.pushdown_second").hover(function(){
		$(this).css('color','rgb(255,255,255)').css('background','rgb(66,179,229)');
	},function(){
		$(this).css('color','rgb(0,0,0)').css('background','rgb(255,255,255)');
	});
	$("#syssetting").hover(function(){
		clearTimeout(_timeId);
		$("#syspersoncontainer").stop().css('display','block');
	},function(){
		clearTimeout(_timeId);
		//$("#syspersoncontainer").stop().css('display','none');
		_timeId = setTimeout(function(){
			$("#syspersoncontainer").stop().css('display','none');
		},300);
	});
	$("#syspersoncontainer").hover(function(){
		clearTimeout(_timeId);
		$(this).stop().css('display','block');
	},function(){
		clearTimeout(_timeId);
		_timeId = setTimeout(function(){
			$("#syspersoncontainer").stop().css('display','none');
		},300);
	});
});

