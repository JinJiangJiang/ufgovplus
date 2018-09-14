package com.ufgov.yunsun.reimburse.dao.impl;

import com.ufgov.yunsun.login.model.User;
import com.ufgov.yunsun.reimburse.dao.ReimDao;
import com.ufgov.yunsun.reimburse.model.OerBnx;
import com.ufgov.yunsun.reimburse.model.OerBnxYs;
import com.ufgov.yunsun.reimburse.model.OerBwx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ReimDaoImpl implements ReimDao {


    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * 获取表外项元素
     * @param user
     * @param djlx
     * @return
     */
    @Override
    public List<OerBwx> getBwxByDjlxBeforeInput(User user, String djlx) {
        String sql = "select  " +
                "BWXID,DJLXID,GSDM,KJND,BWXBM,BWXMC,bz,LY,XSWZ,XSBJ,SJLX,SJLY,BWXTABLE,BWXFIELD,ALLOWNULL, " +
                "SYSNONULL,FIELDWIDTH,DEFVALUE,ISREADONLY,ALLOWINPUT " +
                "from  " +
                "OER_BWX bwx  " +
                "where  " +
                "GSDM=? and KJND=? and DJLXID=? and SFQY='1' " +
                "and BSSHOW='1' order by XSWZ, CONTROLTABORDER";
        List<OerBwx> bwxList = jdbcTemplate.query(sql,
                new Object[]{user.getGsdm(), user.getKjnd(), djlx}, new BeanPropertyRowMapper(OerBwx.class));
        return bwxList;
    }

    /**
     * 获取表内项tab
     * @param user
     * @param djlx
     * @return
     */
    @Override
    public List<OerBnx> getBnxByDjlxBeforeInput(User user, String djlx) {
        String sql = "select * from OER_BNX where " +
                "GSDM=? and KJND=? and DJLXID=? and SFQY='1' order by XH";
        List<OerBnx> bnxList = jdbcTemplate.query(sql,
                new Object[]{user.getGsdm(), user.getKjnd(), djlx}, new BeanPropertyRowMapper(OerBnx.class));
        return bnxList;
    }

    /**
     * 获取表内项元素
     * @param user
     * @param djlx
     * @param bnxid
     * @return
     */
    @Override
    public List<OerBnxYs> getBnxYsByDjlxBeforeInput(User user, String djlx, String bnxid) {
        String sql = "select * from OER_BNX_YS where " +
                "GSDM=? and KJND=? and DJLXID=? and SFQY='1' and BNXID=?";
        List<OerBnxYs> bnxysList = jdbcTemplate.query(sql,
                new Object[]{user.getGsdm(), user.getKjnd(), djlx, bnxid}, new BeanPropertyRowMapper(OerBnxYs.class));
        return bnxysList;
    }


    /**
     * 获取单据类型信息
     * @param user
     * @param djlx
     * @return
     */
    @Override
    public Map<String, String> getDjlxInfoBeforeInput(User user, String djlx) {
        String sql = "select djlxid,djlxbm,djlxmc from OER_DJLX where gsdm=? and kjnd=? and djlxid=? ";
        Map<String, String> result = jdbcTemplate.queryForObject(sql,
                new Object[]{user.getGsdm(), user.getKjnd(), djlx},
                new RowMapper<Map<String, String>>() {
                    @Override
                    public Map<String, String> mapRow(ResultSet rs, int rowNum) throws SQLException {
                        Map<String, String> row = new HashMap<>();
                        row.put("djlxid", rs.getString("djlxid"));
                        row.put("djlxbm", rs.getString("djlxbm"));
                        row.put("djlxmc", rs.getString("djlxmc"));
                        return row;
                    }}
        );
        return result;
    }
}