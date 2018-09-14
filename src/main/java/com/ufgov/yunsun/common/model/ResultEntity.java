package com.ufgov.yunsun.common.model;

import java.util.Map;

/**
 * Created by Administrator on 2018-06-14.
 * 返回报文实体类，用于ajax统一异常处理
 */
public class ResultEntity<T> {
    //    error_code 状态值：0 极为成功，其他数值代表失败
    private Integer status;

    //    error_msg 错误信息，若status为0时，为success
    private String msg;

    //    content 返回体报文的出参，使用泛型兼容不同的类型
    private T data;

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public ResultEntity(String msg, Integer status) {
        this.msg = msg;
        this.status = status;
    }

    public ResultEntity() {

    }

    public ResultEntity(T data, String msg, Integer status) {

        this.data = data;
        this.msg = msg;
        this.status = status;
    }

    @Override
    public String toString() {
        return "Result{" +
                "status=" + status +
                ", msg='" + msg + '\'' +
                ", data=" + data +

                '}';
    }

    public static ResultEntity exception(Integer status,String msg){
        return new ResultEntity(msg,status);
    }

    public static ResultEntity success(Integer status,String msg){
        return new ResultEntity(msg,status);
    }

    public static ResultEntity exception(Integer status,String msg,Map<String, String> map){
        return new ResultEntity(map,msg,status);
    }

    public static ResultEntity success(Integer status,String msg,Map<String, String> map){
        return new ResultEntity(map,msg,status);
    }
}
