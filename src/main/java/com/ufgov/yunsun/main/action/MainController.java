package com.ufgov.yunsun.main.action;

import com.ufgov.yunsun.common.model.ResultEntity;
import com.ufgov.yunsun.login.model.User;
import com.ufgov.yunsun.main.biz.MainBiz;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


/**
 * Created by biu on 2018/2/23.
 * RestController注解 相当于@Controller + @RespondeBody，但无法通过application.properties配置的MVC前后缀返回到JSP，
 * 必须通过ModelAndView
 */
@RestController
@RequestMapping("/main")
public class MainController {

    protected static final Logger logger = LoggerFactory.getLogger(MainController.class);
    @Autowired
    private MainBiz mainBiz;


    /**
     * 进入菜单页面
     * @return
     */
    @RequestMapping(value = {"/menutree_query.html"})
    public ModelAndView menuPage(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("main/menu");
        return mav;
    }

    /**
     * 进入主页面
     * @return
     */
    @RequestMapping(value = {"/metro.html"})
    public ModelAndView mainPage(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("main/metro");
        return mav;
    }

    /**
     * 获取网上报销模块的子目录
     * @return
     */
    @RequestMapping(value = {"/menu_reim_djlist"})
    public ResultEntity<List<Map<String, String>>> getReimDjList(HttpServletRequest request){
        // 获取在线用户
        User user = (User)request.getSession().getAttribute("olUser");
        // 获取用户对应的网上报销模块的子菜单集合
        List<Map<String, String>> list = mainBiz.getReimDjList(user);
        // 封装数据
        ResultEntity<List<Map<String, String>>> re = new ResultEntity<>(list, "success", 0);
        return re;
    }


}
