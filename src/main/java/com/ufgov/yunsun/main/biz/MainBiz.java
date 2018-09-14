package com.ufgov.yunsun.main.biz;

import com.ufgov.yunsun.login.model.User;

import java.util.List;
import java.util.Map;

public interface MainBiz {
    public List<Map<String, String>> getReimDjList(User user);
}