package com.ufgov.yunsun.main.biz.impl;

import com.ufgov.yunsun.login.model.User;
import com.ufgov.yunsun.main.biz.MainBiz;
import com.ufgov.yunsun.main.dao.MainDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class MainBizImpl implements MainBiz {

    @Autowired
    private MainDao mainDao;

    /**
     * 获取用户被授权的单据集合，并处理返回结果，使其符合action要求
     * @param user
     * @return
     */
    @Override
    public List<Map<String, String>> getReimDjList(User user) {
        // 获取用户被授权的单据集合
        List<Map<String, String>> djList = mainDao.getReimDjList(user);
        // 建立view中的菜单需要的集合
        List<Map<String, String>> menuList = new ArrayList<Map<String, String>>();
        // 遍历单据集合
        for(Map<String, String> m:djList){
            Map<String, String> map = new HashMap<String, String>();
            // 拼接url
            map.put("url", "reim/reim_dj_add.html?djlx=" + m.get("djlxid"));
            // 拼接id
            map.put("id", "oer" + m.get("djlxid"));
            // name
            map.put("name", m.get("djlxmc"));
            menuList.add(map);
        }
        // 加入单据登记簿
        Map<String, String> map = new HashMap<>();
        map.put("url","reim/reim_my_dj.html");
        map.put("id", "oerdjdjb");
        map.put("name", "网上报销单据登记簿");
        menuList.add(0, map);
        // 返回新集合
        return menuList;
    }
}