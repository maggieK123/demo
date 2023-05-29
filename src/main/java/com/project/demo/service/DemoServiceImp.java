package com.project.demo.service;

import com.project.demo.model.Demo;
import com.project.demo.repository.DemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DemoServiceImp implements DemoService{

    @Autowired
    private DemoRepository demoRepository;


    @Override
    public Demo saveDemo(Demo demo) {
        return demoRepository.save(demo);
    }
}
