package com.ufgov.yunsun.common.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.*;

import javax.servlet.http.HttpServletRequest;

import com.alibaba.druid.util.StringUtils;
import com.ufgov.yunsun.common.model.ResultEntity;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

public class UploadUtil {
	
	/**
	 * 文件上传通用方法
	 * @param request
	 * @return
	 * @throws Exception
	 */
	public static ResultEntity<Map<String, String>> uploadFile(HttpServletRequest request)throws Exception{
        ResultEntity<Map<String, String>> rs = new ResultEntity<Map<String, String>>();
        Map<String, String> map = new HashMap<String, String>();
        // 上传时生成的临时文件保存目录
        ResourceBundle config = ResourceBundle.getBundle("config");
        String savePath = request.getServletContext().getRealPath(config.getString("FILEPATH"));
        String tempPath = request.getServletContext().getRealPath(config.getString("TEMPPATH"));
        File tmpFile = new File(tempPath);
        if (!tmpFile.exists()) {
            // 创建临时目录
            tmpFile.mkdir();
        }
		try {
			// 1、创建一个DiskFileItemFactory工厂  
            DiskFileItemFactory factory = new DiskFileItemFactory();
            // 设置工厂的缓冲区的大小，当上传的文件大小超过缓冲区的大小时，就会生成一个临时文件存放到指定的临时目录当中。 
            // 设置缓冲区的大小为100KB，如果不指定，那么缓冲区的大小默认是10KB
            factory.setSizeThreshold(1024 * 100);
            // 设置上传时生成的临时文件的保存目录  
            factory.setRepository(tmpFile);
            // 2、判断提交上来的数据是否是上传表单的数据
            if (!ServletFileUpload.isMultipartContent(request)) {  
                // 按照传统方式获取数据  
            	rs.setStatus(-1);
                rs.setMsg("提交request不含文件数据！");
                return rs;
            }
            // 3、SpringMVC特殊处理文件
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            // 获取普通表单数据
            String[] modalIidArray = multipartRequest.getParameterMap().get("modalIid");
            String modalIid = "";
            if(null != modalIidArray && modalIidArray.length == 1){
            	modalIid = modalIidArray[0];
            }
            
            // 获取文件名集合
            Iterator<String> fileNameIte = multipartRequest.getFileNames();
            while(fileNameIte.hasNext()){
            	String fileName = fileNameIte.next();
            	MultipartFile mr = multipartRequest.getFile(fileName);
                // 得到上传的文件名称
                String filename = mr.getOriginalFilename();
//                    Long filesizeNum = (Long) item.getSize();
//                    if (filesizeNum > 0) {  
//                        DecimalFormat df = new DecimalFormat("####.00");
//                        float size = (float) filesizeNum / 1024;  
//                        String fileSize = df.format(size);
//                    }
                if (filename == null || filename.trim().equals("")) {
                    continue;
                }
                // 注意：不同的浏览器提交的文件名是不一样的，有些浏览器提交上来的文件名是带有路径的，如：
                // c:\a\b\1.txt，而有些只是单纯的文件名，如：1.txt
                filename = filename.substring(filename.lastIndexOf("\\") + 1);
                // 得到上传文件的扩展名
                String fileExtName = filename.substring(filename.lastIndexOf(".") + 1);
                if (!StringUtils.isEmpty(fileExtName)) {
                    fileExtName = fileExtName.toLowerCase();
                }
                // 如果需要限制上传的文件类型，那么可以通过文件的扩展名来判断上传的文件类型是否合法
                // 获取item中的上传文件的输入流
                InputStream in = mr.getInputStream();
                // 得到文件保存的名称
                String saveFilename = makeFileName(fileExtName);
                // 得到文件的保存目录
                String realSavePath = makePath(saveFilename, savePath);
                // 创建一个文件输出流
                FileOutputStream out = new FileOutputStream(realSavePath + "\\" + saveFilename);
                // 创建一个缓冲区
                byte buffer[] = new byte[1024];
                // 判断输入流中的数据是否已经读完的标识
                int len = 0;
                // 循环将输入流读入到缓冲区当中，(len=in.read(buffer))>0就表示in里面还有数据
                while ((len = in.read(buffer)) > 0) {
                    // 使用FileOutputStream输出流将缓冲区的数据写入到指定的目录(savePath + "\\" + filename)当中
                    out.write(buffer, 0, len);
                }
                // 关闭输出流
                out.close();
                // 删除处理文件上传时生成的临时文件
                // item.delete();
                // message = "文件上传成功！";
                // 关闭输入流
                in.close();
                map.put("originalName", filename);
                map.put("newName", saveFilename);
                map.put("modalIid", modalIid);
                rs.setStatus(0);
                rs.setMsg("上传成功！");
                rs.setData(map);
            }
        } catch (Exception e) {
            rs.setStatus(-1);
            rs.setMsg("上传文件失败！");
            return rs;
        }
		return rs;
	}
	
    private static String makeFileName(String fileExtName) { // 2.jpg  
        // 为防止文件覆盖的现象发生，要为上传文件产生一个唯一的文件名  
        return UUID.randomUUID().toString() + "." + fileExtName;
    }
    
    private static String makePath(String filename, String savePath) {  
        //int dir1 = hashcode & 0xf; // 0--15  
        //int dir2 = (hashcode & 0xf0) >> 4; // 0-15  
        // 构造新的保存目录  
        // String dir = savePath + "\\" + dir1 + "\\" + dir2; //upload\2\3  
        // upload\3\5  
        String dir = savePath;  
        // File既可以代表文件也可以代表目录  
        File file = new File(dir);  
        // 如果目录不存在  
        if (!file.exists()) {  
            // 创建目录  
            file.mkdirs();  
        }  
        return dir;  
    }
}
