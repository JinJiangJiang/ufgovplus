package com.ufgov.yunsun.reimburse.biz.impl;

import com.ufgov.yunsun.login.model.User;
import com.ufgov.yunsun.reimburse.biz.ReimBiz;
import com.ufgov.yunsun.reimburse.dao.ReimDao;
import com.ufgov.yunsun.reimburse.model.OerBnx;
import com.ufgov.yunsun.reimburse.model.OerBnxYs;
import com.ufgov.yunsun.reimburse.model.OerBwx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReimBizImpl implements ReimBiz {

    @Autowired
    private ReimDao reimDao;

    /**
     * 根据GSDM、KJND、DJLX获取单据表外项、表内项的内容
     * @param user
     * @param djlx
     * @return
     */
    @Override
    public Map<String, Object> getInputByDjlxBeforeInput(User user, String djlx) {
        Map<String, Object> map = new HashMap<>();
        // 获取表外项元素
        List<OerBwx> bwxByDjlxBeforeInput = reimDao.getBwxByDjlxBeforeInput(user, djlx);
        List<OerBwx> bwxList = bwxByDjlxBeforeInput;
        map.put("bwx", bwxList);
        // 获取表内项tab
        List<OerBnx> bnxList = reimDao.getBnxByDjlxBeforeInput(user, djlx);
        Map<OerBnx, List<OerBnxYs>> bnxYsMap = new LinkedHashMap<>();
        // 遍历表内项tab，获取表内项元素
        for(OerBnx ob:bnxList){
            List<OerBnxYs> bnxYsList = reimDao.getBnxYsByDjlxBeforeInput(user, djlx, ob.getBnxid().toString());
            bnxYsMap.put(ob, bnxYsList);
        }
        map.put("bnx", bnxYsMap);
        // 获取单据类型信息
        Map<String, String> djlxMap = reimDao.getDjlxInfoBeforeInput(user, djlx);
        map.put("djlx", djlxMap);
        return map;
    }
}