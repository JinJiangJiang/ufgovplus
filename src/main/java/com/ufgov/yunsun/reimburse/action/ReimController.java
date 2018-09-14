package com.ufgov.yunsun.reimburse.action;

import com.ufgov.yunsun.common.model.ResultEntity;
import com.ufgov.yunsun.login.model.User;
import com.ufgov.yunsun.main.biz.MainBiz;
import com.ufgov.yunsun.reimburse.biz.ReimBiz;
import com.ufgov.yunsun.reimburse.model.OerBwx;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;


/**
 * Created by biu on 2018/2/23.
 * RestController注解 相当于@Controller + @RespondeBody，但无法通过application.properties配置的MVC前后缀返回到JSP，
 * 必须通过ModelAndView
 */
@RestController
@RequestMapping("/reim")
public class ReimController {

    protected static final Logger logger = LoggerFactory.getLogger(ReimController.class);
    @Autowired
    private ReimBiz reimBiz;


    /**
     * 进入报销单填制页面
     * @return
     */
    @RequestMapping(value = {"/reim_dj_add.html"})
    public ModelAndView menuPage(HttpServletRequest request){
        // 获取在线用户
        User user = (User)request.getSession().getAttribute("olUser");
        // 获取url传入的单据类型
        String djlx = request.getParameter("djlx");
        // 获取单据类型对应的表外项、表内项
        Map<String, Object> inputMap = reimBiz.getInputByDjlxBeforeInput(user, djlx);
        ModelAndView mav = new ModelAndView();
        mav.addObject("oer", inputMap);
        mav.setViewName("reim/reim_create");
        return mav;
    }

}
