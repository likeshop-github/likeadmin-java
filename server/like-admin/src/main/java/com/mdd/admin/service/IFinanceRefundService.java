package com.mdd.admin.service;

import com.mdd.admin.validate.commons.PageValidate;
import com.mdd.admin.validate.finance.FinanceRefundSearchValidate;
import com.mdd.admin.vo.finance.FinanceRefundListVo;
import com.mdd.common.core.PageResult;

/**
 * 退款记录服务接口类
 */
public interface IFinanceRefundService {

    /**
     * 退款记录列表
     *
     * @author fzr
     * @param pageValidate 分页参数
     * @param searchValidate 搜索参数
     * @return PageResult<FinanceRechargeListVo>
     */
    PageResult<FinanceRefundListVo> list(PageValidate pageValidate, FinanceRefundSearchValidate searchValidate);

}