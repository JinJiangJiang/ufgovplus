package com.ufgov.yunsun.reimburse.biz;

import com.ufgov.yunsun.login.model.User;
import java.util.Map;

public interface ReimBiz {
    public Map<String, Object> getInputByDjlxBeforeInput(User user, String djlx);
}