package com.ufgov.yunsun.common.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateUtil {
	
	
	/**
	 * 根据字符串格式生成字符串日期
	 * @param pattern
	 * @return
	 */
	public final static String getDateFromPattern(String pattern){
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		return sdf.format(new Date());
	}
	
	/**
	 * 根据日期字符串和格式字符串反转出日期对象
	 * @param dateStr
	 * @param fomatter
	 * @return
	 */
    public final static Date getDate(String dateStr, String fomatter) {
   	 SimpleDateFormat formatter = new SimpleDateFormat(fomatter);
        Date date = null;
        try {
            date = formatter.parse(dateStr);
        } catch (Exception e) {
            date = new Date();
        }
        return date;
    }
    
    /**
     * 根据日期对象，对年、月、日进行加减操作
     * @param date Date 对象
     * @param pattern 格式字符串
     * @param where 在年、月、日位进行操作
     * @param doWhat 如何操作（1-加，-1-减）
     * @param count 操作次数
     * @return
     */
    public final static String dealDate(Date date, String pattern, String where, int doWhat, int count){
		Calendar calendar = Calendar.getInstance();// 定义日期实例
		calendar.setTime(date);// 设置日期起始时间
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		for(int i = 0;i < count;i++){
			if("date".equals(where)){
				calendar.add(Calendar.DATE, doWhat);
			}else if("month".equals(where)){
				calendar.add(Calendar.MONTH, doWhat);
			}else if("year".equals(where)){
				calendar.add(Calendar.YEAR, doWhat);
			}
		}
		String rs = sdf.format(calendar.getTime());
		return rs;
    }
    
    /**
     * 根据日期字符串对象进行年月日增减操作
     * @param date String对象
     * @param pattern String对象格式
     * @param where 在年、月、日位进行操作
     * @param doWhat 如何操作（add/minus）
     * @param count 操作次数
     * @return
     */
    public final static String dealStringDate(String dateStr, String pattern, String where, int doWhat, int count) throws Exception{
    	Date date = new SimpleDateFormat(pattern).parse(dateStr);// 定义起始日期
    	Calendar calendar = Calendar.getInstance();// 定义日期实例
		calendar.setTime(date);// 设置日期起始时间
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);
		for(int i = 0;i < count;i++){
			if("date".equals(where)){
				calendar.add(Calendar.DATE, doWhat);
			}else if("month".equals(where)){
				calendar.add(Calendar.MONTH, doWhat);
			}else if("year".equals(where)){
				calendar.add(Calendar.YEAR, doWhat);
			}
		}
		String rs = sdf.format(calendar.getTime());
		return rs;
    }
}
