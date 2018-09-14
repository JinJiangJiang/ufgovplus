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
	<style>
		html, body{
			margin: 0;
			padding: 0;
			background-image: url(<%=path%>/static/login/background.jpg);
            filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='<%=path%>/static/login/background.jpg', sizingMethod='scale');
            -ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='<%=path%>/static/login/background.jpg', sizingMethod='scale');
			repeat: no-repeat;
			background-attachment:fixed;
			background-size: cover;
			-moz-background-size: cover;
			-webkit-background-size: cover;
		}
		#login_area_div{
			background: rgba(0, 0, 0, 0.2);
			top: 0px;
			right: 0%;
			z-index: 102;
			width: 380px;
			height: 100%;    
			position: absolute;    
			margin: 0;
			padding: 0;
			padding-top:50px;
			padding-left:30px;
			padding-right:30px;
			font-family: "Microsoft YaHei",SimSun,Arial,Helvetica,sans-serif;
		}
		.footer{
			position:absolute;
			bottom:20px;
			left:27%;
		}
	</style>
	<link href="<%=path%>/static/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/default/siui.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/icons.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/blue/skin.css" rel="stylesheet" />
    <link href="<%=path%>/static/siui/siui/themes/blue/bluebutton.css" rel="stylesheet" />
	<script type="text/javascript" src="<%=path%>/static/bootstrap/js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="<%=path%>/static/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="<%=path%>/static/siui/jquery/date.util.js"></script>
     <script type="text/javascript" src="<%=path%>/static/siui/siui/siui.js"></script>
	</head>
	<body style="height: 100%;">
		<div id="login_area_div" class="login_area_l_r" style="background: rgba(0, 0, 0, 0.2); top: 0px; right: 0%;">
			<center><h3 style="color:white;">高校内控管理软件云端版</h3></center><br/>
			<form id="loginForm" action="" method="post">
				<div class="input-group">
					<div class="input-group-addon">职员代码</div>
					<input type="text" class="form-control" id="zydm" name="zydm" placeholder="请输入工号">
				</div><br/>
				<div class="input-group">
					<div class="input-group-addon">登录密码</div>
				   	<input type="password" class="form-control" id="password" name="password" placeholder="请输入密码">
				</div><br/>
                <!-- 此处注释为扩展功能，可实现会计年度的切换功能
                <div class="input-group">
                    <div class="input-group-addon">会计年度</div>
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">-</button>
                    </span>
                    <input type="text" class="form-control" id="kjnd" name="kjnd" placeholder="请输入会计年度">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">+</button>
                    </span>
                </div><br/>
                -->
				<center>
					<button class="btn btn-default" type="button" onClick="doLogin()">&emsp;&emsp;登&emsp;录&emsp;&emsp;</button>
				</center>
			</form><br/>
			<center><a href="最新浏览器及使用方法.rar" style="color:white;">若显示格式有误，请下载并使用最新浏览器登录</a></center>
			<center id="jsmsg" style="color:red;"></center>
			<center class="footer" style="color:white;">徐州幼儿师范高等专科学校</center>
		</div>
	</body>
	<script type="text/javascript">
        si.analyze();

        window.onload=function (){
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
            if(isIE){
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion <= 7) {
                    window.location="error.jsp";
                }
            }

            // 默认设置会计期间为当年（客户端时间）
            //var fullYear = getFullYear();
            //$("#kjnd").val(fullYear);
        }

        // 登录前的验证
        function doLogin(){
            $("#jsmsg").html("");
            var zydm = $("#zydm").val();
            var password = $("#password").val();
            //var kjnd = $("#kjnd").val();
            if(zydm == ''){
            $("#jsmsg").html("职员代码不能为空！");
                return false;
            }
            if(password == ''){
                $("#jsmsg").html("密码不能为空！");
                return false;
            }
            /*
            if(kjnd == ''){
                $("#jsmsg").html("会计年度不能为空！");
                return false;
            }
            */
            var jsonBefore = {
                "zydm":zydm,
                "password":password,
                "kjnd":getFullYear()
            }
            $.ajax({
                type:"post",
                url: "before_login.do",
                data: jsonBefore,
                async:true,
                cache:false,
                success: function (data) {
                    console.log(data);
                    if(data.status == 0){

                    }else if(data.status == 1){// 需要选择单位和账套
                        si.open({
                            url : "<%=path%>/gs_zt.html",
                            title : "请选择单位与账套",
                            width : "30%",
                            height : "25%",
                            showModal: true,
                            allowResize: false,
                            allowDrag:false,
                            ondestroy : function(action) {
                                if (action == "ok") {
                                    var iframe = this.getIFrameEl();
                                    var json = iframe.contentWindow.getData();
                                    var jsonNew = si.clone(json);  // 必须
                                    console.log(jsonNew);
                                    Object.assign(jsonNew, jsonBefore);// Object.assign(目标对象, 被合并的对象)
                                    realLogin(jsonNew);
                                }
                            }
                        });
                    }else{

                    }
                }
            });
        }

        // 真正的登录方法
        function realLogin(json){
            console.log("真正登录的数据"+json);
            $.ajax({
                type: "post",
                url: "login.do",
                data: json,
                async: true,
                cache: false,
                success: function (data) {
                    if(data.status == 0){
                        // 登陆成功
                        window.location="<%=path%>/login_success.html";
                    }else{
                        si.noty(data.msg,"系统提示");
                    }
                }
            });
        }
		
	</script>
</html>
