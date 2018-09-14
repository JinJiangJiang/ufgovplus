<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
    <title>MelonHTML5 - Metro Framework</title>
    <base href="<%=basePath%>">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <link rel="stylesheet" type="text/css" href="<%=path%>/static/main/metro/metro.css" />
    <link rel="stylesheet" type="text/css" href="<%=path%>/static/main/metro/metro_mobile.css" media="screen and (max-height: 500px), screen and (orientation:portrait)" />
    <link rel="stylesheet" type="text/css" href="<%=path%>/static/main/metro/demo.css" />
    <link href="<%=path%>/static/iconfont/font_772630_plccqcnutaa/iconfont.css" rel="stylesheet">
    <script type="text/javascript" src="<%=path%>/static/bootstrap/js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="<%=path%>/static/main/metro/metro.js"></script>
    <script type="text/javascript" src="<%=path%>/static/main/metro/demo.js"></script>
    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-30465336-1']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
    <!-- Computed in PHP based on your settings -->
    <style>
        #widget_scroll_container {
            width: 2160px;
        }
        div.widget_container {
            width: 1200px;
        }
        div.widget_container.half {
            width: 400px;
        }
        @media screen and (max-height: 680px) {
            #widget_scroll_container {
                width: 1660px;
            }
            div.widget_container {
                width: 900px;
            }
            div.widget_container.half {
                width: 300px;
            }
        }
        .widget .widget_content .iconfont{
            font-size:70px;
        }
        .widget .widget_content .title{
            font-family: "Microsoft Yahei";
            font-weight: bolder;
            font-size:20px;
        }
        .widget .widget_content .font-table{
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
<div id="widget_scroll_container" style="top:5%;left:50px;">
    <div class="widget_container full" data-num="0">
        <!-- 审批工作台 -->
        <div class="widget widget4x2 widget_orange animation unloaded" data-url="metro_ui.php" data-theme="orange" data-name="Metro_UI">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-shenpi"></i><br/>
                            <label class="title">审批工作台</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 预算管理 -->
        <div class="widget widget2x2 widget_red widget_link animation unloaded" style="background-color:#3E3F3A;">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-qitafeiyong"></i><br/>
                            <label class="title">预算管理</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 经费申请 -->
        <div class="widget widget2x2 widget_darkblue animation unloaded" data-url="contact.php" data-theme="darkblue" data-name="Contact">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-qiandai"></i><br/>
                            <label class="title">经费申请</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 采购管理 -->
        <div class="widget widget2x2 widget_red animation unloaded" data-url="royal_preloader.php" data-theme="red" data-name="royal_preloader">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-caigou-tianchong"></i><br/>
                            <label class="title">采购管理</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 网上报销 -->
        <div class="widget widget4x2 widget_darkgreen animation unloaded" data-url="admin7.php" data-theme="darkgreen" data-name="admin7">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-baoxiao1"></i><br/>
                            <label class="title">网上报销</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 其他薪资管理 -->
        <div class="widget widget2x2 widget_darkred animation unloaded" data-url="typography.php" data-theme="darkred" data-name="typography">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-baoxiao"></i><br/>
                            <label class="title">其他薪资</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 资产管理 -->
        <div class="widget widget2x2 widget_green animation unloaded" data-url="metro_gallery.php" data-theme="green" data-name="metro_gallery.js">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-huowu"></i><br/>
                            <label class="title">资产管理</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 物资管理 -->
        <div class="widget widget2x2 widget_blue animation unloaded" data-url="sliding_menu.php" data-theme="blue" data-name="sliding_menu">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-huopin_f"></i><br/>
                            <label class="title">物资管理</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 查询分析 -->
        <div class="widget widget4x2 widget_darkblue animation unloaded" data-url="timeline.php" data-theme="darkblue" data-name="timeline">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-fenxi"></i><br/>
                            <label class="title">查询分析</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 合同管理 -->
        <div class="widget widget2x2 widget_blue animation unloaded" data-url="cube.php" data-theme="blue" data-name="gallery.js">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-hetongbeian"></i><br/>
                            <label class="title">合同管理</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 来款认领 -->
        <div class="widget widget2x2 widget_red animation unloaded" data-url="grid_slider.php" data-theme="red" data-name="grid_slider">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-yusuanyuchengbenguanli"></i><br/>
                            <label class="title">来款认领</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <!-- 系统管理 -->
        <div class="widget widget2x2 widget_darkblue animation unloaded" data-url="royal_tab.php" data-theme="darkblue" data-name="royal_tab">
            <div class="widget_content">
                <table class="font-table">
                    <tr class="font-tr">
                        <td class="font-td" align="center" valign="middle">
                            <i class="iconfont icon-xitongguanli5"></i><br/>
                            <label class="title">系统管理</label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div id="widget_preview">
    <div id="widget_sidebar">
        <div>
            <div class="cancel"><span>Close</span></div>
            <div class="refresh"><span>Refresh</span></div>
            <div class="download"><span>Download</span></div>
            <div class="back"><span>Back</span></div>
            <div class="next"><span>Next</span></div>
        </div>
    </div>
</div>
<script>
    /*!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
*/</script>
<script>
    var Userback = window.Userback || {};
/*
    (function(id) {
        if (document.getElementById(id)) {return;}
        var s = document.createElement('script');
        s.id = id;
        s.src = 'https://static.userback.io/widget/v1.js';
        document.getElementsByTagName('head')[0].appendChild(s);
    })('userback-sdk');

    Userback.access_token = '1|8|IjXmeq4nrQRoPlmr84Tm7x2dDZUdpW08fYuuoyRQpIef3AHcFB';
*/
    $(function(){
        $(".widget").mouseover(function(){
            if($(this).hasClass("big_widget")){
                var tid = $(this).prop("id");
                $(this).hide();
                $("."+tid+"s").show();
            }
        })
    })
</script>
</body>
</html>
