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
    <link href="<%=path%>/static/bootstrap/css/font-awesome.min.css" rel="stylesheet" />
    <link href="<%=path%>/static/main/dist/sidebar-menu.css" rel="stylesheet">
    <link href="<%=path%>/static/layui/css/layui.css" rel="stylesheet" />
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
        .sidebar{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            min-height: 100%;
        }
        html{
            overflow: hidden;
        }
        header{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: #011923;
        }
        .layui-tab-content.layui-fluid{
            padding: 0px !important;
        }
        .layui-tab.layui-tab-brief{
            margin: 0px !important;
        }
        .layui-tab-title{
            background-color: #222D32;
            color: white;
            border-color: gray;
        }
        .layui-tab-item.layui-show{
            margin: 0px !important;
            padding: 0px !important;
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
<aside class="main-sidebar">
    <section  class="sidebar">
        <iframe id="menutree" class="menutree" name="menutreeName" frameborder="0" src="<%=path%>/main/menutree_query.html"
                style="width: 100%; height: 100%;"></iframe>
    </section>
</aside>

<script src="<%=path%>/static/main/js/jquery-2.1.1.min.js" type="text/javascript"></script>
<script src="<%=path%>/static/main/dist/sidebar-menu.js"></script>
<script src="<%=path%>/static/layui/layui.js" charset="utf-8"></script>
<script>
    $.sidebarMenu($('.sidebar-menu'));
</script>
<div class="layui-body" style="position: absolute;left:230px;width:100%; font:normal 14px/24px 'MicroSoft YaHei';
overflow: hidden;">
    <div class="layui-tab layui-tab-brief" lay-filter="tabMenu" lay-allowClose="true">
        <ul class="layui-tab-title" id="tabMenunList">
        </ul>
        <div class="layui-tab-content layui-fluid"></div>
    </div>
</div>
<script>
    //JavaScript代码区域
    layui.use(['jquery','element'], function(){
        var $ = layui.$;
        var element = layui.element;
        //触发事件
        var active = {
            //在这里给active绑定几项事件，后面可通过active调用这些事件
            tabAdd: function(url,id,name) {
                //新增一个Tab项 传入三个参数，分别对应其标题，tab页面的地址，还有一个规定的id，是标签中data-id的属性值
                //关于tabAdd的方法所传入的参数可看layui的开发文档中基础方法部分

                //否则判断该tab项是否以及存在
                var isData = false; //初始化一个标志，为false说明未打开该tab项 为true则说明已有
                $.each($(".layui-tab-title li[lay-id]"), function () {
                    //如果点击左侧菜单栏所传入的id 在右侧tab项中的lay-id属性可以找到，则说明该tab项已经打开
                    if ($(this).attr("lay-id") == id) {
                        isData = true;
                    }
                })
                if (isData == false) {
                    //标志为false 新增一个tab项
                    element.tabAdd('tabMenu', {
                        title: name,
                        content: '<iframe data-frameid="'+id+'" scrolling="no" frameborder="0" src="'+url+'" style="width:100%;height:100%;"></iframe>',
                        id: id //规定好的id
                    })
                }else{
                    element.tabChange('tabMenu', id); //根据传入的id传入到指定的tab项
                }
                //CustomRightClick(id); //给tab绑定右击事件
                FrameWH();  //计算ifram层的大小
            },
            tabChange: function(id) {
                //切换到指定Tab项
                element.tabChange('tabMenu', id); //根据传入的id传入到指定的tab项
            },
            tabDelete: function (id) {
                if(id != 'metro'){
                    element.tabDelete("tabMenu", id);//删除
                }
            },
            tabDeleteAll: function (ids) {//删除所有
                $.each(ids, function (i,item) {
                    element.tabDelete("tabMenu", item); //ids是一个数组，里面存放了多个id，调用tabDelete方法分别删除
                })
            }
        };


        window.openTab = function (url,id,name){
            active.tabAdd(url, id,name);
            active.tabChange(id);
        }

        $(function(){
            window.openTab("<%=path%>/main/metro.html", "metro","主页");
        })

        function FrameWH() {
            //var h = $(window).height() -41- 10 -60 -10 -44 -10 -13;
            var h = $(window).height() -40;
            var w = $(window).width() -230;
            $("iframe").css("height",h+"px");
            $(".layui-body").css("width",w+"px");
        }

        $(window).resize(function () {
            FrameWH();
        })
    });

</script>
</body>
</html>
