<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!doctype html>
<html lang="en" style="height: 100%;">
 <head>
	<base href="<%=basePath%>">
	<meta charset="UTF-8">
	<meta name="Generator" content="EditPlus®">
	<meta name="Author" content="">
	<meta name="Keywords" content="">
	<meta name="Description" content="">
	<title>高校内控管理软件</title>
	<link rel="shortcut icon" href="<%=path%>/static/favicon.ico" />
	<link rel="bookmark" href="favicon.ico" />
	<link href="<%=path%>/static/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/default/siui.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/icons.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/blue/skin.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/blue/bluebutton.css" rel="stylesheet" />
	<script type="text/javascript" src="<%=path%>/static/bootstrap/js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="<%=path%>/static/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="<%=path%>/static/siui/jquery/date.util.js"></script>
    <script type="text/javascript" src="<%=path%>/static/siui/jquery/jquery.extend.js"></script>
    <script type="text/javascript" src="<%=path%>/static/siui/siui/siui.js"></script>
	</head>
	<body>
        <br/>
        <center>
            <form id="assetForm" method="post" action="assetbuild_create.do" enctype="multipart/form-data">
                <span>请选择单位</span>
                <input id="gsCombo" class="si-combobox" style="width:250px;" textField="gsmc" valueField="gsdm"
                       onvaluechanged="onGsChanged" url="<%=path%>/get_ztxx.do" required="true" showNullItem="false"/>
                <br/><br/>

                <span>请选择账套</span>
                <input id="ztCombo" class="si-combobox" style="width:250px;" required="true" textField="ztmc" valueField="zth" />
                <br/><br/>
            </form>

            <button class="btn btn-default" type="button" onClick="sureLogin()"
                    style="color: #04408c;font-weight: bold;">&emsp;&emsp;确&emsp;定&emsp;&emsp;</button>
        </center>
    </body>
	<script type="text/javascript">
        si.analyze();

        var gsCombo = si.get("gsCombo");
        var ztCombo = si.get("ztCombo");

        function onGsChanged(e) {
            var gsdm = gsCombo.getValue();

            ztCombo.setValue("");

            var url = "<%=path%>/get_ztxx.do?gsdm=" + gsdm;
            ztCombo.setUrl(url);

            ztCombo.select(0);
        }

        function getData(){
            var json = {
                "gsdm":gsCombo.getValue(),
                "zth":ztCombo.getValue()
            };
            return json;
        }

        function sureLogin(){
            var form = new si.Form("#assetForm");
            if (!form.validate()) {
                si.alert("单位和账套必须选择！");
                return;
            }
            return window.CloseOwnerWindow("ok");
        }

        function closeWindow(action) {
            if (action == "close" && form.isChanged()) {
                if (confirm("数据被修改了，是否先保存？")){
                    return false;
                }
            }
            if (window.CloseOwnerWindow){
                return window.CloseOwnerWindow("cancel");
            } else {
                window.close();
            }
        }
	</script>
</html>
