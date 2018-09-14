package com.ufgov.yunsun.common.exception;

/**
 * Created by Administrator on 2018-07-31.
 */
public class U8PlusException extends ApplicationException {
    public U8PlusException(String message, Throwable ex) {
        super(message, ex);
    }

    /**
     *
     * @param moduleName 模块名称
     * @param aspectName 功能名称
     * @param message 错误信息
     * @param ex 异常
     */
    public U8PlusException(String moduleName, String aspectName, String message, Throwable ex) {
        super(moduleName, aspectName, message, ex);
    }
}
