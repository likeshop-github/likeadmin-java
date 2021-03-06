package com.hxkj.common.entity.system;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.io.Serializable;

/**
 * 系统菜单实体
 */
@Data
public class SystemMenu implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value="id", type= IdType.AUTO)
    private Integer id;
    private Integer pid;
    private String menuType;
    private String menuName;
    private String menuIcon;
    private Integer menuSort;
    private String perms;
    private String paths;
    private String component;
    private String selected;
    private String params;
    private Integer isCache;
    private Integer isShow;
    private Integer isDisable;
    private Long createTime;
    private Long updateTime;

}
