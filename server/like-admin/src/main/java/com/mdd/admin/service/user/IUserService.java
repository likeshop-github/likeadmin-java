package com.mdd.admin.service.user;

import com.mdd.admin.validate.common.PageParam;
import com.mdd.admin.vo.user.UserVo;
import com.mdd.common.core.PageResult;

import java.util.Map;

/**
 * 用户服务接口类
 */
public interface IUserService {

    /**
     * 用户列表
     *
     * @author fzr
     * @param pageParam (分页参数)
     * @param params (搜索参数)
     * @return PageResult<UserVo>
     */
    PageResult<UserVo> list(PageParam pageParam, Map<String, String> params);

    UserVo detail(Integer id);

}