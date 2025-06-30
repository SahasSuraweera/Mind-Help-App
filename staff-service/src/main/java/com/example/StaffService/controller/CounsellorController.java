package com.example.StaffService.controller;

import com.example.StaffService.data.Counsellor;
import com.example.StaffService.service.CounsellorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/counsellors")
public class CounsellorController {

    @Autowired
    private CounsellorService counsellorService;

    @GetMapping
    public List<Counsellor> getAll(){
        return counsellorService.getAllCounsellors();
    }

}
