package com.ufgov.yunsun.common.exception;

import com.ufgov.yunsun.common.model.ResultEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * Created by Administrator on 2018-06-14.
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    protected static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public ResultEntity handle(Exception ex) {
        logger.error("出现异常：" + ex.getMessage());
        return ResultEntity.exception(-1, ex.getMessage());
    }
}
