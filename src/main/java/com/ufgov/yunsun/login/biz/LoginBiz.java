package com.ufgov.yunsun.login.biz;

import com.ufgov.yunsun.common.model.ResultEntity;
import com.ufgov.yunsun.login.model.User;

import java.util.List;

/**
 * Created by Administrator on 2018-07-31.
 */
public interface LoginBiz {
    public ResultEntity<List<User>> beforeLogin(User user);
    public ResultEntity<User> login(User user);
    public ResultEntity<User> modifyPassword(User user);
}
