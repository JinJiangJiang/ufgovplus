package com.ufgov.yunsun.login.action;

import com.alibaba.druid.util.StringUtils;
import com.ufgov.yunsun.common.model.ResultEntity;
import com.ufgov.yunsun.login.biz.LoginBiz;
import com.ufgov.yunsun.login.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;


/**
 * Created by biu on 2018/2/23.
 * RestController注解 相当于@Controller + @RespondeBody，但无法通过application.properties配置的MVC前后缀返回到JSP，
 * 必须通过ModelAndView
 */
@RestController
public class LoginController {

    protected static final Logger logger = LoggerFactory.getLogger(LoginController.class);
    @Autowired
    private LoginBiz loginBiz;

    /**
     * 进入登录页面
     * @return
     */
    @RequestMapping(value = {"/","/index.html"})
    public ModelAndView loginPage(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("login/index");
        return mav;
    }

    /**
     * 进入选择单位与账套页面
     * @return
     */
    @RequestMapping(value = {"/gs_zt.html"})
    public ModelAndView gsZtPage(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("login/gs_zt");
        return mav;
    }

    /**
     * 登陆成功，页面跳转到主页
     * @return
     */
    @RequestMapping(value = {"/login_success.html"})
    public ModelAndView LoginSuccess(HttpServletRequest request){
        ModelAndView mav = new ModelAndView();
        User user = (User)request.getSession().getAttribute("olUser");
        // 判断有没有经过登录，如果有，进入主页面，如果没有，返回登录页面
        if(null != user){
            mav.setViewName("main/main");
        }else{
            mav.setViewName("login/index");
        }
        return mav;
    }

    /**
     * 登录前选择单位与账套的步骤
     * @param user
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = {"/before_login.do"})
    public ResultEntity<List<User>> brforeLogin(User user, HttpServletRequest request)throws Exception{
        ResultEntity<List<User>> re = loginBiz.beforeLogin(user);
        if(re.getStatus() == 1){// 如果需要选择单位或账套
            request.getSession().setAttribute("ztxx",re.getData());
        }
        return re;
    }

    /**
     * 前台选择单位和账套时，采用两个联动Combobox，选择单位后，账套Combobox下拉可见的数据即为该单位下的账套
     * @param user
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = {"/get_ztxx.do"})
    public List<User> getZtxxByGsxx(User user, HttpServletRequest request)throws Exception{
        // 从session中获取原数据
        List<User> oldList = (List<User>)request.getSession().getAttribute("ztxx");
        // 如果前台传来的gsdm不为空，则获取账套信息，否则获取单位信息
        if(!StringUtils.isEmpty(user.getGsdm())){
            // 组装新集合
            List<User> newList = new ArrayList<User>();
            // 如果单位信息匹配，则将元数据集合中的数据放入新集合
            for(User u:oldList){
                if(u.getGsdm().equals(user.getGsdm())){
                    newList.add(u);
                }
            }
            return newList;
        }else{
            return oldList;
        }
    }

    /**
     * 真正的登录方法
     * @param user
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = {"/login.do"})
    public ResultEntity<User> login(User user, HttpServletRequest request)throws Exception{
        ResultEntity<User> re = loginBiz.login(user);
        // 判断如果登陆成功，则向session作用域放入在线用户
        if(re.getStatus() == 0){
            request.getSession().setAttribute("olUser", re.getData());
        }
        return re;
    }

    /**
     * 修改密码
     * @param user
     * @param request
     * @return
     * @throws Exception
     */
    @RequestMapping(value = {"/modify_password.do"})
    public ResultEntity<User> modifyPassword(User user, HttpServletRequest request)throws Exception{
        ResultEntity<User> re = loginBiz.modifyPassword(user);
        // 判断如果修改成功，则清空session作用域，强制让用户重新登录
        if(re.getStatus() == 0){
            request.getSession().invalidate();
        }
        return re;
    }

}
