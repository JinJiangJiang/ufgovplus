<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>徐州经济技术开发区管委会</title>
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/static/login/style_log.css">
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/static/login/style.css">
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/static/login/userpanel.css">
    <link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/static/login/jquery.ui.all.css">
    <script type="text/javascript" src="<%=request.getContextPath() %>/static/login/jquery-1.8.3.js"></script>

</head>
<body class="login" mycollectionplug="bind">
<div class="login_m">
    <div class="login_logo" style="margin-left:-245px;"><img src="<%=request.getContextPath() %>/static/login/logo.png" width="900" height="80"></div>
        <div class="login_boder">
            <div class="login_padding" id="login_model">
                <h2 style="font-size:15px;">用户名<label id="usernameTip" class="inputTip" style="color:red;display:none;">&emsp;用户名不能为空！</label></h2>
                <label>
                    <input type="text" id="username" class="txt_input txt_input2" value="">
                </label>
                <h2 style="font-size:15px;">密码<label id="passwordTip" class="inputTip" style="color:red;display:none;">&emsp;密码不能为空！</label></h2>
                <label>
                    <input type="password" name="textfield2" id="password" class="txt_input" value="">
                </label>
                <p class="forgot"><a id="iforget" href="javascript:;"></a></p>
                <div class="rem_sub">
                    <div class="rem_sub_l">
                        <input type="checkbox" name="checkboxName" id="save_me" style="vertical-align:middle;">
                        <label>记住用户名</label>
                    </div>
                    <label>
                        <input type="button" class="sub_button" name="subButton" id="subButton" value="登 录" style="opacity: 0.7;" onClick="checkLogin()">
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
<div style="position:fixed; bottom:0px;width:100%;text-align:center;font-size:15px;color: white;padding: 10px;
    font-weight: bold;">
    徐州经济技术开发区管委会<br/>技术支持：徐州市元申软件有限公司
</div>

<script>
    function checkLogin(){
        $(".inputTip").hide();
        if("" == $("#username").val().trim()){
            $("#usernameTip").show();
            return false;
        }
        if("" == $("#password").val().trim()){
            $("#passwordTip").show();
            return false;
        }

        $.ajax({
            url: "<%=request.getContextPath() %>/loginCheck.do",
            type:"POST",
            contentType: "application/json;charset=utf-8",
            async:false,
            cache:false,
            data:JSON.stringify({
                "name":$("#username").val(),
                "password":$("#password").val()
            }),
            success: function(e){
                console.log(e);
                if("0" == e.status){
                    window.location="loginSuccess.html";
                }else{
                    alert(e.msg);
                }
            }
        });
    }
</script>
</body>
</html>
