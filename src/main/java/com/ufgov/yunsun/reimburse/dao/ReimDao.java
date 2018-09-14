package com.ufgov.yunsun.reimburse.dao;

import com.ufgov.yunsun.login.model.User;
import com.ufgov.yunsun.reimburse.model.OerBnx;
import com.ufgov.yunsun.reimburse.model.OerBnxYs;
import com.ufgov.yunsun.reimburse.model.OerBwx;

import java.util.List;
import java.util.Map;

public interface ReimDao {
    public List<OerBwx> getBwxByDjlxBeforeInput(User user, String djlx);
    public List<OerBnx> getBnxByDjlxBeforeInput(User user, String djlx);
    public List<OerBnxYs> getBnxYsByDjlxBeforeInput(User user, String djlx, String bnxid);
    public Map<String, String> getDjlxInfoBeforeInput(User user, String djlx);
}