$.extend($.fn.tabs.methods, {
    /**
     * 加载iframe内容
     * @param {jq Object} jq [description]
     * @param {Object} params.which:tab的标题或者index;params.iframe:iframe的相关参数
     * @return {jq Object} [description]
     */
    loadTabIframe: function(jq, params) {
        return jq.each(function() {
            var $tab = $(this).tabs('getTab', params.which);
            if ($tab == null) return;
            var $tabBody = $tab.panel('body');
            // 销毁已有的iframe
            var $frame = $('iframe', $tabBody);
            if ($frame.length > 0) {
                try { // 跨域会拒绝访问，这里处理掉该异常
                    $frame[0].contentWindow.document.write('');
                    $frame[0].contentWindow.close();
                } catch(e) {
                    // Do nothing
                }
                $frame.remove();
                if ($.browser.msie) {
                    // CollectGarbage();
                }
            }
            $tabBody.html('');
            $tabBody.css({
                'overflow': 'hidden',
                'position': 'relative'
            });
            var $containter = $('<div class="m-iframe-border" style="position:absolute;width:100%;height:100%;z-index:0;"></div>').appendTo($tabBody);
            var $mask = $('<div style="position:absolute;z-index:2;width:100%;height:100%;background:#ccc;z-index:1000;opacity:0.5;filter:alpha(opacity=50);"></div>').appendTo($tabBody);
            var $maskMessage = $('<div class="mask-message" style="z-index:6;width:40px;height:32px;line-height:32px;position:absolute;top:50%;left:50%;margin-top:-32px;margin-left:-32px;background: transparent url(\'images/ajaxloading.gif\') no-repeat scroll 5px center;"></div>').appendTo($tabBody);
            var $containterMask = $('<div style="position:absolute;width:100%;height:100%;z-index:5;"></div>').appendTo($tabBody);
            var iframe = document.createElement("iframe");
            setTimeout(function() {
                iframe.src = params.iframe.src;
            },
            1);
            iframe.frameBorder = params.iframe.frameBorder || 0;
            iframe.height = params.iframe.height || '100%';
            iframe.width = params.iframe.width || '100%';
            if (iframe.attachEvent) {
                iframe.attachEvent("onload",
                function() {
                    $(iframe.contentWindow).unload(function() {
                        // console.log("enter
                        // unload");
                        setTimeout(function() {
                            $mask[0].style.display = "block";
                            $maskMessage[0].style.display = "block";
                            $containterMask[0].style.display = "block";
                        },
                        1);

                    });
                    setTimeout(function() {
                        $([$mask[0], $maskMessage[0]]).fadeOut(params.iframe.delay || 'fast',
                        function() {
                            $(this).css('display', 'none');
                            if ($(this).hasClass('mask-message')) {
                                $($containterMask).css('display', 'none');
                            }
                        });
                    },
                    1);
                });
                iframe._unload = function() {

                    $.each($([$mask[0], $maskMessage[0], $containterMask[0]]),
                    function() {
                        $(this).css('display', 'block');
                    });
                };
            } else {
                iframe.onload = function() {
                    $(iframe.contentWindow).unload(function() {
                        setTimeout(function() {
                            $mask[0].style.display = "block";
                            $maskMessage[0].style.display = "block";
                            $containterMask[0].style.display = "block";
                            $containterMask[0].style.display = "block";
                        },
                        1);
                    });
                    setTimeout(function() {
                        $([$mask[0], $maskMessage[0]]).fadeOut(params.iframe.delay || 'fast',
                        function() {
                            $(this).css('display', 'none');
                            if ($(this).hasClass('mask-message')) {
                                $($containterMask).css('display', 'none');
                            }
                        });
                    },
                    1);
                };
                /*
										 * iframe._unload = function(){
										 * $.each($([$mask[0],$maskMessage[0],$containterMask[0]]),function(){
										 * $(this).css('display','block'); }); };
										 */
            }
            $containter[0].appendChild(iframe);
        });
    },
    /**
     * 增加iframe模式的标签页
     * 
     * @param {[type]} jq [description]
     * @param {[type]} params [description]
     */
    addIframeTab: function(jq, params) {
        return jq.each(function() {
            if (params.tab.href) {
                delete params.tab.href;
            }
            $(this).tabs('add', params.tab);
            $(this).tabs('loadTabIframe', {
                'which': params.tab.title,
                'iframe': params.iframe
            });
        });
    },
	/**
     * 更新tab的iframe内容
     * @param {jq  Object} jq [description]
     * @param {Object}  params [description]
     * @return {jq Object} [description]
	*/
    updateIframeTab: function(jq, params) {
        return jq.each(function() {
            params.iframe = params.iframe || {};
            if (!params.iframe.src) {
                var $tab = $(this).tabs('getTab', params.which);
                if ($tab == null) return;
                var $tabBody = $tab.panel('body');
                var $iframe = $tabBody.find('iframe');
                if ($iframe.length === 0) return;
                $.extend(params.iframe, {
                    'src': $iframe.attr('src')
                });
            }
            $(this).tabs('loadTabIframe', params);
        });
    }
});