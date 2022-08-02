package com.hxkj.admin.service.system;

import com.hxkj.admin.validate.common.PageParam;
import com.hxkj.admin.validate.system.SystemRoleParam;
import com.hxkj.admin.vo.system.SystemRoleVo;
import com.hxkj.common.core.PageResult;
import org.springframework.validation.annotation.Validated;

/**
 * 系统角色服务接口类
 */
public interface ISystemRoleService {

    /**
     * 角色列表
     *
     * @author fzr
     * @param pageParam 参数
     * @return PageResult<SysRoleListVo>
     */
    PageResult<SystemRoleVo> list(@Validated PageParam pageParam);

    /**
     * 角色详情
     *
     * @author fzr
     * @param id 主键参数
     * @return SysRole
     */
    SystemRoleVo detail(Integer id);

    /**
     * 角色新增
     *
     * @author fzr
     * @param systemRoleParam 参数
     */
    void add(SystemRoleParam systemRoleParam);

    /**
     * 角色更新
     *
     * @author fzr
     * @param systemRoleParam 参数
     */
    void edit(SystemRoleParam systemRoleParam);

    /**
     * 角色删除
     *
     * @author fzr
     * @param id 主键参数
     */
    void del(Integer id);

}