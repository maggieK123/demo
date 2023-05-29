package com.project.demo.controller;

import com.project.demo.model.Demo;
import com.project.demo.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class DemoController {
    @Autowired
    private DemoService demoService;

    @PostMapping("/add")
    public String add(@RequestBody Demo demo){
        demoService.saveDemo(demo);
        return "new is added";
    }
}
