package com.hxkj.front.controller;

import com.hxkj.common.core.AjaxResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class IndexController {

    @GetMapping("/index")
    public Object index() {
        return AjaxResult.success();
    }

}
