package com.example.StaffService.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StaffService.data.StaffMember;
import com.example.StaffService.service.StaffMemberService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/staff")
public class StaffMemberController {

    @Autowired
    private StaffMemberService staffMemberService;

    @GetMapping
    public List<StaffMember> getAll(){
        return staffMemberService.getAllStaff();
    }
    @GetMapping("/{id}")
    public StaffMember getById(@PathVariable int id) {
        return staffMemberService.getStaffById(id);
    }
    @PostMapping
    public StaffMember create(@RequestBody StaffMember staff) {
        return staffMemberService.createStaffMember(staff);
    }
    @PutMapping("/{id}")
    public StaffMember updateStaff(@RequestBody StaffMember staff) {
        return staffMemberService.updateStaffMember(staff);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStaffById(@PathVariable int id){
        staffMemberService.deleteStaffMember(id);
        return ResponseEntity.ok("Successfully Deleted");
    }
 
}

