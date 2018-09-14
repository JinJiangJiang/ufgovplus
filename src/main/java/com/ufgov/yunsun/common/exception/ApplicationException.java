
package com.ufgov.yunsun.common.exception;

/**
 * 应用程序异常类，其他所有的应用程序异常都继承该类。
 */
public class ApplicationException extends RuntimeException {
  
	private static final long serialVersionUID = 1L;

/**
   * 构造器
   * 
   * @param moduleName 模块名称
   * @param aspectName 功能名称
   * @param message 异常信息
   * @param ex 异常
   * @roseuid 41C9003A0170
   */
  public ApplicationException(String moduleName, String aspectName, String message, Throwable ex) {
  	super("[" + moduleName + "] [" + aspectName + "] : " + message, ex);   
  }

  /**
   * 构造器
   * 
   * @param message 异常信息
   * @param ex 异常
   */
  public ApplicationException(String message, Throwable ex) {
  	super(message, ex);   
  }

}
