package com.hxkj.generator.util;

import com.hxkj.common.utils.ArrayUtil;
import com.hxkj.common.utils.StringUtil;
import com.hxkj.generator.config.GenConfig;
import com.hxkj.generator.constant.GenConstants;
import com.hxkj.generator.constant.SqlConstants;
import com.hxkj.generator.entity.GenTable;
import com.hxkj.generator.entity.GenTableColumn;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;
import org.apache.velocity.runtime.RuntimeConstants;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;

import java.io.File;
import java.util.LinkedList;
import java.util.List;
import java.util.Properties;

public class VelocityUtil {

    /**
     * 初始化vm方法
     */
    public static void initVelocity() {
        try {
            Properties p = new Properties();
            p.setProperty(RuntimeConstants.RESOURCE_LOADER, "classpath");
            p.setProperty("classpath.resource.loader.class", ClasspathResourceLoader.class.getName());
            p.setProperty(Velocity.INPUT_ENCODING, "UTF-8");
            Velocity.init(p);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 设置模板变量信息
     *
     * @author fzr
     * @return VelocityContext
     */
    public static VelocityContext prepareContext(GenTable table, List<GenTableColumn> columns) {
        boolean isSearch = false; // 是否需要搜索
        String primaryKey = "id"; // 主键字段名称
        List<String> allFields    = new LinkedList<>();  // 所有字段
        List<String> listFields   = new LinkedList<>();  // 列表字段
        List<String> detailFields = new LinkedList<>();  // 详情字段
        List<String> dictFields   = new LinkedList<>();  // 字段字段
        for (GenTableColumn column : columns) {
            allFields.add(column.getColumnName());
            if (column.getIsList() == 1) {
                listFields.add(column.getColumnName());
            }
            if (column.getIsDetail() == 1) {
                detailFields.add(column.getColumnName());
            }
            if (column.getIsQuery() == 1) {
                isSearch = true;
            }
            if (column.getIsPk() == 1) {
                primaryKey = column.getJavaField();
            }
            if (StringUtil.isNotEmpty(column.getDictType())) {
                dictFields.add(column.getDictType());
            }
        }

        // 设置模板变量
        VelocityContext velocityContext = new VelocityContext();
        velocityContext.put("genTpl", table.getGenTpl());
        velocityContext.put("tableName", table.getTableName());
        velocityContext.put("authorName", table.getAuthorName());
        velocityContext.put("packageName", GenConfig.packageName);
        velocityContext.put("EntityName", table.getEntityName());
        velocityContext.put("entityName", StringUtil.uncapitalize(table.getEntityName()));
        velocityContext.put("moduleName", table.getModuleName());
        velocityContext.put("functionName", StringUtil.isNotEmpty(table.getFunctionName()) ? table.getFunctionName() : "【请填写功能名称】");
        velocityContext.put("table", table);
        velocityContext.put("columns", columns);
        velocityContext.put("dateFields", SqlConstants.COLUMN_TIME_NAME);
        velocityContext.put("primaryKey", primaryKey);
        velocityContext.put("allFields", allFields);
        velocityContext.put("listFields", listFields);
        velocityContext.put("detailFields", detailFields);
        velocityContext.put("dictFields", ArrayUtil.listToStringByStr(dictFields,","));
        velocityContext.put("isSearch", isSearch);
        return velocityContext;
    }

    /**
     * 获取生成路径
     *
     * @author fzr
     * @param table 表
     * @return String
     */
    public static String getGenPath(GenTable table) {
        String genPath = table.getGenPath();
        if (StringUtil.equals(genPath, "/")) {
            return System.getProperty("user.dir") + File.separator + "src" + File.separator;
        }
        return genPath + File.separator;
    }

    /**
     * 获取模板列表
     *
     * @author fzr
     * @return List<String>
     */
    public static List<String> getTemplateList(String genTpl, List<GenTableColumn> columns) {
        List<String> templates = new LinkedList<>();
//        templates.add("java/controller.java.vm");
//        templates.add("java/entity.java.vm");
//        templates.add("java/mapper.java.vm");
//        templates.add("java/service.java.vm");
//        templates.add("java/serviceImpl.java.vm");
//        templates.add("java/validate.java.vm");
//        templates.add("java/voList.java.vm");
//        templates.add("java/voDetail.java.vm");
        if (GenConstants.TPL_CRUD.equals(genTpl)) {
            templates.add("vue/index.vue.vm");
        }

        else if (GenConstants.TPL_TREE.equals(genTpl)) {
            templates.add("vue/index-tree.vue.vm");
        }

        return templates;
    }

    /**
     * 获取文件名
     */
    public static String getFileName(String template, GenTable genTable) {
        String fileName = "";
        String entityName   = genTable.getEntityName();
        String moduleName   = genTable.getModuleName();

        if (template.contains("mapper.java.vm")) {
            fileName = StringUtil.format("{}/mapper/{}/{}Mapper.java", GenConfig.commonPackage, moduleName, entityName);
        }

        else if (template.contains("entity.java.vm")) {
            fileName = StringUtil.format("{}/entity/{}/{}.java", GenConfig.commonPackage, moduleName, entityName);
        }

        else if (template.contains("service.java.vm")) {
            fileName = StringUtil.format("{}/service/{}/I{}Service.java", GenConfig.adminPackage, moduleName, entityName);
        }

        else if (template.contains("serviceImpl.java.vm")) {
            fileName = StringUtil.format("{}/service/{}/impl/{}ServiceImpl.java", GenConfig.adminPackage, moduleName, entityName);
        }

        else if (template.contains("controller.java.vm")) {
            fileName = StringUtil.format("{}/controller/{}/{}Controller.java", GenConfig.adminPackage, moduleName, entityName);
        }

        else if (template.contains("validate.java.vm")) {
            fileName = StringUtil.format("{}/validate/{}/{}Param.java", GenConfig.adminPackage, moduleName, entityName);
        }

        else if (template.contains("vo.java.vm")) {
            fileName = StringUtil.format("{}/vo/{}/{}Vo.java", GenConfig.adminPackage, moduleName, entityName);
        }

        else if (template.contains("voList.java.vm")) {
            fileName = StringUtil.format("{}/vo/{}/{}ListVo.java", GenConfig.adminPackage, moduleName, entityName);
        }

        else if (template.contains("voDetail.java.vm")) {
            fileName = StringUtil.format("{}/vo/{}/{}DetailVo.java", GenConfig.adminPackage, moduleName, entityName);
        }

        return fileName;
    }

}
