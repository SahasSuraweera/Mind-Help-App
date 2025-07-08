package com.example.StaffService.controller;

import com.example.StaffService.data.Counsellor;
import com.example.StaffService.service.CounsellorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{counsellorId}")
    public Counsellor getCounsellorById(@PathVariable int counsellorId){
        return counsellorService.getCounsellorById(counsellorId);
    }

}
