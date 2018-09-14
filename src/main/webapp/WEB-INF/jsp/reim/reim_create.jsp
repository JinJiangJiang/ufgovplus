<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
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
    <link href="<%=path%>/static/iconfont/font_772630_plccqcnutaa/iconfont.css" />
    <link href="<%=path%>/static/siui/siui/themes/default/siui.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/icons.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/blue/skin.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/blue/bluebutton.css" rel="stylesheet" />
    <style type="text/css">
        body {
            background-color: #f2f2f2;
        }
        .layui-fluid {
            padding: 15px;
        }
        .layui-card-header {
            height: 52px;;
        }
        .layui-btn-group {
            margin: 5px;;
        }
        .layui-row div{
            /*border: solid 1px red;*/
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
        .centerHtml{
            text-align:center;
        }
        .oerTitle{
            font-size: 20px;
            padding: 5px;
            font-weight: bold;
            color: #0204b0;
        }
        .inputDiv{
            text-align: right;
            padding: 3px;
        }
        .si-required *{
            background-color: white;
        }
    </style>

</head>
<body>
<script src="<%=path%>/static/bootstrap/js/jquery-1.11.1.min.js"type="text/javascript" ></script>
<script type="text/javascript" src="<%=path%>/static/siui/jquery/date.util.js"></script>
<script type="text/javascript" src="<%=path%>/static/siui/jquery/jquery.extend.js"></script>
<script type="text/javascript" src="<%=path%>/static/siui/siui/siui.js"></script>
<script src="<%=path%>/static/layui/layui.js" charset="utf-8"></script>
<div class="layui-fluid">
    <div class="layui-card">
        <div class="layui-card-header">
            <div class="layui-btn-group">
                <button class="layui-btn">保存</button>
                <button class="layui-btn">保存并送审</button>
                <button class="layui-btn">上传附件</button>
                <button class="layui-btn">取消</button>
            </div>
        </div>
        <div class="centerHtml oerTitle">${oer.djlx.djlxmc}</div>
        <div class="layui-card-body bwx">
            <div class="layui-row">
                <c:forEach items="${oer.bwx}" var="bwx">
                    <div class="layui-col-xs6 layui-col-sm6 layui-col-md3 inputDiv">
                        <c:if test="${bwx.xswz eq '0'}">
                            ${bwx.bwxmc}
                            <c:if test="${bwx.allownull eq '0'}">
                                <span style="color: red;">*</span>
                            </c:if>：
                            <input id="${bwx.bwxfield}" name="${bwx.bwxfield}" emptyText=""
                                   value="${bwx.defvalue}" width="60%"
                                <c:choose>
                                    <c:when test="${bwx.sjly eq '1' or bwx.sjly eq '2' or bwx.sjly eq '5'
                                        or bwx.sjly eq '6' or bwx.sjly eq '14' or bwx.sjly eq '24'}">
                                        class="si-treeselect dynamicInput"
                                    </c:when>
                                    <c:when test="${bwx.sjly eq '3' or bwx.sjly eq '4' or bwx.sjly eq '12'
                                        or bwx.sjly eq '17' or bwx.sjly eq '25' or bwx.sjly eq '26'
                                        or fn:startsWith(bwx.sjly, '[zd]')}">
                                        class="si-combobox dynamicInput"
                                    </c:when>
                                    <c:when test="${bwx.sjly eq '18'}">
                                        class="si-buttonedit dynamicInput"
                                    </c:when>
                                    <c:when test="${bwx.sjlx eq '4'}">
                                        class="si-datepicker dynamicInput"
                                    </c:when>
                                    <c:otherwise>
                                        class="si-textbox dynamicInput"
                                    </c:otherwise>
                                </c:choose>
                                <c:if test="${bwx.allownull eq '0'}">
                                    required="true"
                                </c:if>
                                <c:if test="${bwx.allowinput eq '0'}">
                                    allowInput="false"
                                </c:if>
                                <c:choose>
                                    <c:when test="${bwx.sjlx eq '0'}">
                                        validator="maxLength:${bwx.fieldwidth}"
                                    </c:when>
                                    <c:when test="${bwx.sjlx eq '1'}">
                                        validator="int"
                                    </c:when>
                                    <c:when test="${bwx.sjlx eq '2' or bwx.sjlx eq '3'}">
                                        validator="float"
                                    </c:when>
                                </c:choose>
                            />
                        </c:if>
                    </div>
                </c:forEach>
            </div>
            <div class="si-fit">

            </div>
        </div>
    </div>
</div>
<script>
    si.analyze();

</script>
</body>
</html>
