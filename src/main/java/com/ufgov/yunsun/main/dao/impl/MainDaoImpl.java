package com.ufgov.yunsun.main.dao.impl;

import com.ufgov.yunsun.login.model.User;
import com.ufgov.yunsun.main.dao.MainDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class MainDaoImpl implements MainDao {


    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * 根据zydm、gsdm、kjnd获取职员被授权的单据集合
     * 封装成List<Map<String, String>>
     * @return
     */
    @Override
    public List<Map<String, String>> getReimDjList(User user) {
        String sql = " select  " +
                " djlx.djlxid,djlx.djlxmc " +
                " from ( " +
                " select  " +
                " roledj.DJLXID,roledj.DJLXMC  " +
                " from( " +
                " select  " +
                " dj.DJLXID,dj.DJLXMC  " +
                " from CIM_ROLEUSER role " +
                " left join  CIM_RoleDJLX dj on role.GSDM=dj.GSDM and role.KJND=dj.KJND and role.ROLECODE=dj.ROLECODE " +
                " where role.ZYDM='"+user.getZydm()+"' and role.GSDM='"+user.getGsdm()+"' and role.KJND='"+user.getKjnd()+"' and dj.Modname='OER' " +
                " ) roledj group by roledj.DJLXID,roledj.DJLXMC " +
                " )djlx " +
                " left join oer_djlx lx on lx.GSDM='"+user.getGsdm()+"' and lx.KJND='"+user.getKjnd()+"' and lx.DJLXID=djlx.DJLXID " +
                " where lx.SYZT='2' " +
                " order by lx.xh ";
        List<Map<String, String>> result = jdbcTemplate.query(sql, new RowMapper<Map<String, String>>() {
            @Override
            public Map<String, String> mapRow(ResultSet rs, int rowNum) throws SQLException {
                Map<String, String> row = new HashMap<>();
                row.put("djlxid",rs.getString("djlxid"));
                row.put("djlxmc",rs.getString("djlxmc"));
                return row;
            }}
        );
        return result;
    }
}