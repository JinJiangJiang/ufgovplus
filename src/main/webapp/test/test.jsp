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

        .iconfont{
            font-size:100px;
        }
    </style>

</head>
<body>
<br/><br/><br/><br/>
<center>
    <i class="iconfont icon-xitongguanli1"/>
</center>
    <script src="<%=path%>/static/main/js/jquery-2.1.1.min.js" type="text/javascript"></script>
    <script src="<%=path%>/static/main/dist/sidebar-menu.js"></script>
</body>
</html>
