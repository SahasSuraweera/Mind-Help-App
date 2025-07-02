package com.example.StaffService.controller;

import com.example.StaffService.data.StaffMember;
import com.example.StaffService.service.StaffMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
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

