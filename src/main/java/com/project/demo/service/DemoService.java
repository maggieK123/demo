package com.project.demo.service;

import com.project.demo.model.Demo;
import java.util.List;

public interface DemoService{
        public Demo saveDemo(Demo demo);

        public List<Demo> getAllDemos();
        }
