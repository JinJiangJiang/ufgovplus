package com.ufgov.yunsun.login.biz.impl;

import com.ufgov.yunsun.common.exception.U8PlusException;
import com.ufgov.yunsun.common.model.ResultEntity;
import com.ufgov.yunsun.login.biz.LoginBiz;
import com.ufgov.yunsun.login.dao.LoginDao;
import com.ufgov.yunsun.login.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2018-07-31.
 */
@Service
public class LoginBizImpl implements LoginBiz {
    @Autowired
    private LoginDao loginDao;

    @Override
    public ResultEntity<List<User>> beforeLogin(User user) {
        ResultEntity<List<User>> re = new ResultEntity<List<User>>();
        // 根据用户名、年度获取单位信息与账套信息
        List<User> ztList = loginDao.searchZtxxByZydm(user);
        // 判断三种情况
        // 返回结果集为空，或长度为0
        if(null == ztList || ztList.size() == 0){
            re.setStatus(-1);
            re.setMsg("用户名不存在！详情请联系管理员！");
        }else if(ztList.size() == 1){// 返回结果集长度刚好为1，即代表用户只有一个单位且只有一个账套权限
            re.setStatus(0);
            re.setMsg("允许继续登录！");
            re.setData(ztList);
        }else{// 返回结果集有多条数据，即代表用户在真正登陆前，需要选择单位与账套
            re.setStatus(1);
            re.setMsg("需要选择单位与账套！");
            re.setData(ztList);
        }
        return re;
    }

    @Override
    public ResultEntity<User> login(User user) {
        ResultEntity<User> re = new ResultEntity<User>();
        user = loginDao.login(user);
        if(null == user){
            re.setStatus(-1);
            re.setMsg("用户名或密码不正确！");
        }else{
            re.setStatus(0);
            re.setMsg("登录成功！");
            re.setData(user);
        }
        return re;
    }

    @Override
    public ResultEntity<User> modifyPassword(User user) {
        ResultEntity<User> re = new ResultEntity<User>();
        int rs = loginDao.modifyPassword(user);
        if(rs == 1) {
            re.setStatus(0);
            re.setMsg("修改成功！请重新登陆！");
        }else{
            throw new U8PlusException("用户模块","修改密码","修改密码失败！(修改数" + rs + ")", new Exception());
        }
        return re;
    }
}
