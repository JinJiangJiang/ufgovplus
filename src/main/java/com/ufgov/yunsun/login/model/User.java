package com.ufgov.yunsun.login.model;

import java.io.Serializable;

/**
 * Created by Administrator on 2018-07-30.
 */
public class User implements Serializable {
    // 职员代码
    private String zydm;
    // 职员姓名
    private String zyxm;
    // 操作员ID
    private String czyId;
    // 公司代码
    private String gsdm;
    // 公司名称
    private String gsmc;
    // 会计年度
    private String kjnd;
    // 账套号
    private String zth;
    // 账套名称
    private String ztmc;
    // 密码
    private String password;
    // 部门代码
    private String bmdm;
    // 部门名称
    private String bmmc;
    // 外部代码（单点登录用）
    private String wbdm;

    public String getBmdm() {
        return bmdm;
    }

    public void setBmdm(String bmdm) {
        this.bmdm = bmdm;
    }

    public String getBmmc() {
        return bmmc;
    }

    public void setBmmc(String bmmc) {
        this.bmmc = bmmc;
    }

    public String getGsdm() {
        return gsdm;
    }

    public void setGsdm(String gsdm) {
        this.gsdm = gsdm;
    }

    public String getKjnd() {
        return kjnd;
    }

    public void setKjnd(String kjnd) {
        this.kjnd = kjnd;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getWbdm() {
        return wbdm;
    }

    public void setWbdm(String wbdm) {
        this.wbdm = wbdm;
    }

    public String getZth() {
        return zth;
    }

    public void setZth(String zth) {
        this.zth = zth;
    }

    public String getZydm() {
        return zydm;
    }

    public void setZydm(String zydm) {
        this.zydm = zydm;
    }

    public String getZyxm() {
        return zyxm;
    }

    public void setZyxm(String zyxm) {
        this.zyxm = zyxm;
    }

    public String getGsmc() {
        return gsmc;
    }

    public void setGsmc(String gsmc) {
        this.gsmc = gsmc;
    }

    public String getZtmc() {
        return ztmc;
    }

    public void setZtmc(String ztmc) {
        this.ztmc = ztmc;
    }

    public String getCzyId() {
        return czyId;
    }

    public void setCzyId(String czyId) {
        this.czyId = czyId;
    }

    public User(String bmdm, String bmmc, String czyId, String gsdm, String gsmc, String kjnd, String password, String wbdm, String zth, String ztmc, String zydm, String zyxm) {
        this.bmdm = bmdm;
        this.bmmc = bmmc;
        this.czyId = czyId;
        this.gsdm = gsdm;
        this.gsmc = gsmc;
        this.kjnd = kjnd;
        this.password = password;
        this.wbdm = wbdm;
        this.zth = zth;
        this.ztmc = ztmc;
        this.zydm = zydm;
        this.zyxm = zyxm;
    }

    public User() {
    }
}
