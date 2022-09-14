package com.mdd.admin.service.channel.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.core.toolkit.Assert;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.mdd.admin.service.channel.IChannelOaReplyService;
import com.mdd.admin.validate.common.PageParam;
import com.mdd.common.entity.OfficialReply;
import com.mdd.common.entity.server.Sys;
import com.mdd.common.exception.OperateException;
import com.mdd.common.mapper.OfficialReplyMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.*;

/**
 * 公众号回复服务实现类
 */
@Service
public class ChannelOaReplyServiceImpl implements IChannelOaReplyService {

    @Resource
    OfficialReplyMapper officialReplyMapper;

    /**
     * 回复列表
     *
     * @author fzr
     * @param pageParam 分页参数
     * @param params 参数
     * @return List<Map<String, Object>>
     */
    @Override
    public List<Map<String, Object>> list(PageParam pageParam, Map<String, String> params) {
        Integer pageNo   = pageParam.getPageNo();
        Integer pageSize = pageParam.getPageSize();

        Assert.notNull(params.get("type"), "type参数缺失");
        int type;
        switch (params.get("type")) {
            case "follow":
                type = 1;
                break;
            case "keyword":
                type = 2;
                break;
            case "default":
                type = 3;
                break;
            default:
                throw new OperateException("不被支持的类型!");
        }

        QueryWrapper<OfficialReply> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("is_delete", 0);
        queryWrapper.orderByDesc(Arrays.asList("sort", "id"));
        queryWrapper.eq("reply_type", type);
        IPage<OfficialReply> iPage = officialReplyMapper.selectPage(new Page<>(pageNo, pageSize), queryWrapper);

        List<Map<String, Object>> list = new LinkedList<>();
        for (OfficialReply officialReply : iPage.getRecords()) {
            Map<String, Object> map = new LinkedHashMap<>();
            switch (params.get("type")) {
                case "follow":
                    map.put("id", officialReply.getId());
                    map.put("name", officialReply.getName());
                    map.put("replyType", officialReply.getReplyType());
                    map.put("contentType", officialReply.getContentType());
                    map.put("content", officialReply.getContent());
                    map.put("sort", officialReply.getSort());
                    map.put("status", officialReply.getStatus());
                    break;
                case "keyword":
                    map.put("id", officialReply.getId());
                    map.put("name", officialReply.getName());
                    map.put("keyword", officialReply.getKeyword());
                    map.put("matchingType", officialReply.getMatchingType());
                    map.put("replyType", officialReply.getReplyType());
                    map.put("contentType", officialReply.getContentType());
                    map.put("content", officialReply.getContent());
                    map.put("sort", officialReply.getSort());
                    map.put("status", officialReply.getStatus());
                    break;
                case "default":
                    map.put("id", officialReply.getId());
                    map.put("name", officialReply.getName());
                    map.put("replyType", officialReply.getReplyType());
                    map.put("content", officialReply.getContent());
                    map.put("sort", officialReply.getSort());
                    map.put("status", officialReply.getStatus());
                    break;
                default:
                    throw new OperateException("不被支持的类型!");
            }
            list.add(map);
        }

        return list;
    }

    /**
     * 回复详情
     *
     * @author fzr
     * @param id 主键
     * @return Map<String, Object>
     */
    @Override
    public Map<String, Object> detail(Integer id) {
        OfficialReply officialReply = officialReplyMapper.selectOne(new QueryWrapper<OfficialReply>()
                .eq("id", id)
                .eq("is_delete", 0)
                .last("limit 1"));

        Assert.notNull(officialReply, "数据不存在!");

        Map<String, Object> map = new LinkedHashMap<>();
        switch (officialReply.getReplyType()) {
            case 1:
                map.put("id", officialReply.getId());
                map.put("name", officialReply.getName());
                map.put("replyType", officialReply.getReplyType());
                map.put("contentType", officialReply.getContentType());
                map.put("content", officialReply.getContent());
                map.put("sort", officialReply.getSort());
                map.put("status", officialReply.getStatus());
                break;
            case 2:
                map.put("id", officialReply.getId());
                map.put("name", officialReply.getName());
                map.put("keyword", officialReply.getKeyword());
                map.put("replyType", officialReply.getReplyType());
                map.put("matchingType", officialReply.getMatchingType());
                map.put("contentType", officialReply.getContentType());
                map.put("content", officialReply.getContent());
                map.put("sort", officialReply.getSort());
                map.put("status", officialReply.getStatus());
                break;
            case 3:
                map.put("id", officialReply.getId());
                map.put("name", officialReply.getName());
                map.put("replyType", officialReply.getReplyType());
                map.put("content", officialReply.getContent());
                map.put("sort", officialReply.getSort());
                map.put("status", officialReply.getStatus());
                break;
            default:
                throw new OperateException("不被支持的类型!");
        }

        return map;
    }

    /**
     * 回复新增
     *
     * @author fzr
     * @param params 参数
     */
    @Transactional
    @Override
    public void add(Map<String, String> params) {
        String type = params.getOrDefault("type", "");

        if (!type.equals("keyword")) {
            OfficialReply reply = new OfficialReply();
            reply.setStatus(0);
            Integer t = type.equals("follow") ? 1 : 3;
            officialReplyMapper.update(reply,  new QueryWrapper<OfficialReply>()
                    .eq("reply_type", t));
        }

        OfficialReply officialReply = new OfficialReply();
        switch (type) {
            case "follow":
                Assert.notNull(params.get("name"), "规则名称不能为空");
                Assert.notNull(params.get("contentType"), "请正确选择回复类型");
                Assert.notNull(params.get("content"), "回复内容不能为空");
                Assert.notNull(params.get("sort"), "排序号不能为空");
                Assert.notNull(params.get("status"), "请正确选择状态");
                officialReply.setName(params.get("name"));
                officialReply.setReplyType(1);
                officialReply.setSort(Integer.parseInt(params.get("sort")));
                officialReply.setContentType(Integer.parseInt(params.get("contentType")));
                officialReply.setContent(params.get("content"));
                officialReply.setStatus(Integer.parseInt(params.get("status")));
                officialReply.setCreateTime(System.currentTimeMillis() / 1000);
                officialReply.setUpdateTime(System.currentTimeMillis() / 1000);
                officialReplyMapper.insert(officialReply);
                break;
            case "keyword":
                Assert.notNull(params.get("name"), "规则名称不能为空");
                Assert.notNull(params.get("keyword"), "关键词不能为空");
                Assert.notNull(params.get("matchingType"), "请正确选择匹配模式");
                Assert.notNull(params.get("contentType"), "请正确选择回复类型");
                Assert.notNull(params.get("content"), "回复内容不能为空");
                Assert.notNull(params.get("status"), "请正确选择状态");
                officialReply.setName(params.get("name"));
                officialReply.setKeyword(params.get("keyword"));
                officialReply.setMatchingType(Integer.parseInt(params.get("matchingType")));
                officialReply.setReplyType(2);
                officialReply.setContent(params.get("content"));
                officialReply.setContentType(Integer.parseInt(params.get("contentType")));
                officialReply.setStatus(Integer.parseInt(params.get("status")));
                officialReply.setCreateTime(System.currentTimeMillis() / 1000);
                officialReply.setUpdateTime(System.currentTimeMillis() / 1000);
                officialReplyMapper.insert(officialReply);
                break;
            case "default":
                Assert.notNull(params.get("name"), "规则名称不能为空");
                Assert.notNull(params.get("contentType"), "请正确选择回复类型");
                Assert.notNull(params.get("content"), "回复内容不能为空");
                Assert.notNull(params.get("status"), "请正确选择状态");
                officialReply.setName(params.get("name"));
                officialReply.setReplyType(3);
                officialReply.setContent(params.get("content"));
                officialReply.setContentType(Integer.parseInt(params.get("contentType")));
                officialReply.setStatus(Integer.parseInt(params.get("status")));
                officialReply.setCreateTime(System.currentTimeMillis() / 1000);
                officialReply.setUpdateTime(System.currentTimeMillis() / 1000);
                officialReplyMapper.insert(officialReply);
                break;
            default:
                throw new OperateException("不被支持的类型");
        }
    }

    /**
     * 回复编辑
     *
     * @author fzr
     * @param params 参数
     */
    @Transactional
    @Override
    public void edit(Map<String, String> params) {
        Assert.notNull(params.get("id"), "id参数缺失");
        Integer id = Integer.parseInt(params.get("id"));

        OfficialReply officialReply = officialReplyMapper.selectOne(new QueryWrapper<OfficialReply>()
                .eq("id", id)
                .eq("is_delete", 0)
                .last("limit 1"));

        Assert.notNull(officialReply, "数据不存在!");

        if (officialReply.getReplyType() != 2) {
            OfficialReply reply = new OfficialReply();
            reply.setStatus(0);
            officialReplyMapper.update(reply,  new QueryWrapper<OfficialReply>()
                    .eq("reply_type", officialReply.getReplyType() ));
        }

        switch (officialReply.getReplyType()) {
            case 1:
                Assert.notNull(params.get("name"), "规则名称不能为空");
                Assert.notNull(params.get("contentType"), "请正确选择回复类型");
                Assert.notNull(params.get("content"), "回复内容不能为空");
                Assert.notNull(params.get("sort"), "排序号不能为空");
                Assert.notNull(params.get("status"), "请正确选择状态");
                officialReply.setId(id);
                officialReply.setName(params.get("name"));
                officialReply.setReplyType(1);
                officialReply.setSort(Integer.parseInt(params.get("sort")));
                officialReply.setContentType(Integer.parseInt(params.get("contentType")));
                officialReply.setContent(params.get("content"));
                officialReply.setStatus(Integer.parseInt(params.get("status")));
                officialReply.setCreateTime(System.currentTimeMillis() / 1000);
                officialReply.setUpdateTime(System.currentTimeMillis() / 1000);
                officialReplyMapper.updateById(officialReply);
                break;
            case 2:
                Assert.notNull(params.get("name"), "规则名称不能为空");
                Assert.notNull(params.get("keyword"), "关键词不能为空");
                Assert.notNull(params.get("matchingType"), "请正确选择匹配模式");
                Assert.notNull(params.get("contentType"), "请正确选择回复类型");
                Assert.notNull(params.get("content"), "回复内容不能为空");
                Assert.notNull(params.get("status"), "请正确选择状态");
                officialReply.setId(id);
                officialReply.setName(params.get("name"));
                officialReply.setKeyword(params.get("keyword"));
                officialReply.setMatchingType(Integer.parseInt(params.get("matchingType")));
                officialReply.setReplyType(2);
                officialReply.setContent(params.get("content"));
                officialReply.setContentType(Integer.parseInt(params.get("contentType")));
                officialReply.setStatus(Integer.parseInt(params.get("status")));
                officialReply.setCreateTime(System.currentTimeMillis() / 1000);
                officialReply.setUpdateTime(System.currentTimeMillis() / 1000);
                officialReplyMapper.updateById(officialReply);
                break;
            case 3:
                Assert.notNull(params.get("name"), "规则名称不能为空");
                Assert.notNull(params.get("contentType"), "请正确选择回复类型");
                Assert.notNull(params.get("content"), "回复内容不能为空");
                Assert.notNull(params.get("status"), "请正确选择状态");
                officialReply.setId(id);
                officialReply.setName(params.get("name"));
                officialReply.setReplyType(3);
                officialReply.setContent(params.get("content"));
                officialReply.setContentType(Integer.parseInt(params.get("contentType")));
                officialReply.setStatus(Integer.parseInt(params.get("status")));
                officialReply.setCreateTime(System.currentTimeMillis() / 1000);
                officialReply.setUpdateTime(System.currentTimeMillis() / 1000);
                officialReplyMapper.updateById(officialReply);
                break;
            default:
                throw new OperateException("不被支持的类型");
        }
    }

    /**
     * 回复删除
     *
     * @author fzr
     * @param id 主键
     */
    @Override
    public void del(Integer id) {
        OfficialReply officialReply =officialReplyMapper.selectOne(new QueryWrapper<OfficialReply>()
                .eq("id", id)
                .eq("is_delete", 0)
                .last("limit 1"));

        Assert.notNull(officialReply, "数据不存在!");

        officialReply.setIsDelete(1);
        officialReply.setDeleteTime(System.currentTimeMillis() / 1000);
        officialReplyMapper.updateById(officialReply);
    }

    /**
     * 回复状态
     *
     * @author fzr
     * @param id 主键
     */
    @Override
    public void status(Integer id) {
        OfficialReply officialReply = officialReplyMapper.selectOne(new QueryWrapper<OfficialReply>()
                .eq("is_delete", 0)
                .eq("id", id)
                .last("limit 1"));

        Assert.notNull(officialReply, "数据不存在!");

        if (officialReply.getReplyType() != 2 && officialReply.getStatus() == 1) {
            OfficialReply reply = new OfficialReply();
            reply.setStatus(0);
            officialReplyMapper.update(reply,  new QueryWrapper<OfficialReply>()
                    .eq("reply_type", officialReply.getReplyType()));
        }

        officialReply.setId(id);
        officialReply.setStatus(officialReply.getStatus() == 1 ? 0 : 1);
        officialReply.setUpdateTime(System.currentTimeMillis() / 1000);
        officialReplyMapper.updateById(officialReply);
    }


}