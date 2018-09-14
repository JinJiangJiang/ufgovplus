package com.ufgov.yunsun.main.dao;

import com.ufgov.yunsun.login.model.User;

import java.util.List;
import java.util.Map;

public interface MainDao {
    public List<Map<String, String>> getReimDjList(User user);
}