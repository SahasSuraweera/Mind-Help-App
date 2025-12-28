package com.example.StaffService.controller;


import com.example.StaffService.data.StaffMember;
import com.example.StaffService.service.StaffMemberService;
import org.hibernate.boot.jaxb.Origin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.lang.model.util.Elements;
import java.util.List;


@CrossOrigin (origins = "http://localhost:3000")
@RestController
@RequestMapping("/staff")
public class StaffMemberController {

    @Autowired
    private StaffMemberService staffMemberService;

    @GetMapping
    public List<StaffMember> getAllActiveStaff() {
        return staffMemberService.getAllActiveStaff();
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

    @PutMapping("/archive/{id}")
    public ResponseEntity<?> softDeleteStaff(@PathVariable int id) {
        try {
            staffMemberService.softDeleteStaff(id); // sets isDeleted = true
            return ResponseEntity.ok("Staff deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete staff");
        }
    }



}

