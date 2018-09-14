<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="zh">
<head>
    <base href="<%=basePath%>">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>高校内控管理软件</title>
    <link rel="shortcut icon" href="<%=path%>/static/favicon.ico" />
    <link rel="bookmark" href="favicon.ico" />

    <link href="<%=path%>/static/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <!--<link href="<%=path%>/static/bootstrap/css/font-awesome.css" rel="stylesheet" />-->
    <link href="<%=path%>/static/iconfont/font_772630_plccqcnutaa/iconfont.css" rel="stylesheet">
    <link href="<%=path%>/static/main/dist/sidebar-menu.css" rel="stylesheet">
    <style type="text/css">
        .main-sidebar{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            min-height: 100%;
            width: 230px;
            z-index: 810;
            background-color: #222d32;
        }
        .sidebar-menu li.header {
            background: #222D32 !important;
        }
        body{
            background: #222D32 !important;
        }
        .iconfont{
            font-size:14px;
        }

        /*滚动条样式*/
        *::-webkit-scrollbar {/*滚动条整体样式*/
            width: 4px !important;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 4px !important;
        }
        *::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
            border-radius: 5px !important;
            -webkit-box-shadow: inset 0 0 5px white !important;
            background: rgba(0,0,0,0.2) !important;
        }
        *::-webkit-scrollbar-track {/*滚动条里面轨道*/
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2) !important;
            border-radius: 0 !important;
            background: rgba(0,0,0,0.1) !important;
        }
    </style>

</head>
<body>
        <ul class="sidebar-menu">
            <li class="header" style="color: white;font-weight: bold;height:100px;font-size: 20px;">
                <br/>
                    <!--
                    <img src="<%=path%>/static/image/logo.png" style="width: 120px;height: 120px;"/>
                    <br/><br/>
                    -->
                <span><span style="color:red;">UFIDA</span>高校内控管理系统—云端版</span>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont icon-shenpi"></i>&emsp;<span>审批中心</span>
                    <span class="label label-primary pull-right">&nbsp;4&nbsp;</span>
                </a>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="iconfont icon-qian1"></i>&emsp;<span>预算系统</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu" style="display: none;">
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>预算填报</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="iconfont icon-qiandai"></i>&emsp;<span>经费申请</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>经费申请单</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="iconfont icon-baoxiao1"></i>&emsp;<span>网上报销</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu" id="reimList">
                    <!--
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>一般经费报销单</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>差旅费报销单</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>报销单登记簿</a></li>
                    -->
                </ul>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="iconfont icon-qian"></i>&emsp;<span>其他薪资管理</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>劳务费</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>其他收入</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>学生奖助学金</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>其他薪资单据登记簿</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="iconfont icon-caigou-tianchong"></i>&emsp;<span>采购管理</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>采购申请</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont icon-huowu"></i>&emsp;<span>资产管理</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>资产购入</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="iconfont icon-huopin_f"></i>&emsp;<span>物资管理</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>物资领用</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont icon-hetongbeian"></i>&emsp;<span>合同管理</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>合同录入</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="iconfont icon-fenxi"></i>&emsp;<span>查询分析</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>工资查询</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>其他薪资查询</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>借款查询</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>个人项目</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>部门项目</a></li>
                    <li><a href="#">&emsp;<i class="iconfont icon-liebiao">&emsp;</i>借款查询</a></li>
                </ul>
            </li>
            <li class="treeview">
                <a href="#">
                    <i class="iconfont icon-shouye"></i>&emsp;<span>来款认领</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="iconfont icon-xitongguanli4"></i>&emsp;<span>系统管理</span>
                    <i class="iconfont icon-jiantouarrow483 pull-right">&emsp;</i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#"><i class="fa fa-circle-o"></i>模板管理</a></li>
                    <li><a href="#"><i class="fa fa-circle-o"></i>参数管理</a></li>
                </ul>
            </li>
        </ul>

<script src="<%=path%>/static/main/js/jquery-2.1.1.min.js" type="text/javascript"></script>
<script src="<%=path%>/static/main/dist/sidebar-menu.js"></script>
<script>
    $.sidebarMenu($('.sidebar-menu'));

    $(function(){
        getReimDjList();
    })

    /**
    *  获取网上报销模块的单据类型目录
     */
    function getReimDjList(){
        $.ajax({
            type:"post",
            url: "main/menu_reim_djlist.do",
            async:true,
            cache:false,
            success: function (re) {
                $("#reimList").html("");
                for(var i = 0; i < re.data.length; i ++){
                    var innerHtml = "<li><a href='JAVASCRIPT:openTab(\""+re.data[i].url+"\",\""+re.data[i].id+"\",\""+re.data[i].name+"\")'>&emsp;<i class='iconfont icon-liebiao'>&emsp;</i>"+re.data[i].name+"</a></li>";
                    $("#reimList").append(innerHtml);
                }
            }
        });
    }

    /**
     * 点击菜单，Tab跳转
     * @param url
     * @param id
     * @param name
     */
    function openTab(url,id,name){
        window.parent.openTab(url,id,name);
    }
</script>
</body>
</html>
