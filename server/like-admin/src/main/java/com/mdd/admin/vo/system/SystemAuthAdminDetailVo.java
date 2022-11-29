package com.mdd.admin.vo.system;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * 管理员详情Vo
 */
@Data
public class SystemAuthAdminDetailVo implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer id;            // 主键
    private List<Integer> roleIds; // 角色ID
    private List<Integer> deptIds; // 部门ID
    private List<Integer> postIds; // 岗位ID
    private String username;       // 账号
    private String nickname;       // 昵称
    private String avatar;         // 头像
    private Integer isMultipoint;  // 多端登录: [0=否, 1=是]
    private Integer isDisable;     // 是否禁用: [0=否, 1=是]
    private String lastLoginIp;    // 最后登录IP
    private String lastLoginTime;  // 最后登录时间
    private String createTime;     // 创建时间
    private String updateTime;     // 更新时间

}
