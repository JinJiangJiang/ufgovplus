package com.ufgov.yunsun.login.dao.impl;

import com.ufgov.yunsun.login.dao.LoginDao;
import com.ufgov.yunsun.login.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Administrator on 2018-07-30.
 */
@Repository
public class LoginDaoImpl implements LoginDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public User login(User user) {
        List<User> list = jdbcTemplate.query("select zy.gsdm,zy.kjnd,zy.zydm,zy.zyxm,zy.bmdm,zy.wbdm,gs.gsmc," +
                        "czy.id czyid,zt.ztbh zth,zt.ztmc,bm.bmmc from pubzyxx zy left join PubGszl gs " +
                        "on zy.gsdm=gs.gsdm and zy.kjnd=gs.kjnd left join GL_Ztcs zt on gs.gsdm = zt.hsdwdm " +
                        "and gs.kjnd = zt.kjnd and zt.ztbh != '99999999999999999999' left join gl_czy czy " +
                        "on zy.zydm=czy.CzyCode left join PUBBMXX bm on zy.bmdm=bm.bmdm and zy.gsdm=bm.gsdm " +
                        "and zy.kjnd=bm.kjnd where zy.zydm=? and zy.kjnd=? and zy.gsdm=? and zt.ztbh=? " +
                        "and zy.password=?",
                new Object[]{user.getZydm(), user.getKjnd(),user.getGsdm(),user.getZth(),user.getPassword()},
                new BeanPropertyRowMapper(User.class));
        if(list != null && list.size() == 1){
            return list.get(0);
        }else{
            return null;
        }
    }

    @Override
    public int modifyPassword(User user) {
        return jdbcTemplate.update("update PUBZYXX set password=? where gsdm=? and kjnd=? and zydm=?",
                user.getPassword(), user.getGsdm(), user.getKjnd(), user.getZydm());
    }

    @Override
    public List<User> searchZtxxByZydm(User user) {
        List<User> list = jdbcTemplate.query("select zy.zydm,zy.zyxm,gs.gsdm,gs.gsmc,zt.ztbh zth,zt.ztmc " +
                        "from pubzyxx zy left join PubGszl gs on zy.gsdm=gs.gsdm and zy.kjnd=gs.kjnd " +
                        "left join GL_Ztcs zt on gs.gsdm = zt.hsdwdm and gs.kjnd = zt.kjnd and zt.ztbh != '99999999999999999999' " +
                        "where zy.zydm=? and zy.kjnd=?",
                new Object[]{user.getZydm(), user.getKjnd()}, new BeanPropertyRowMapper(User.class));
        if(list!=null && list.size()>0){
            return list;
        }else{
            return null;
        }
    }
}
