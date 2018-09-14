package com.ufgov.yunsun.login.dao;

import com.ufgov.yunsun.login.model.User;

import java.util.List;

/**
 * Created by Administrator on 2018-07-30.
 */
public interface LoginDao {
    public List<User> searchZtxxByZydm(User user);

    public User login(User user);

    public int modifyPassword(User user);
}
