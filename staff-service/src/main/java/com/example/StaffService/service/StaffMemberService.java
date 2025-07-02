package com.example.StaffService.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StaffService.data.StaffMember;
import com.example.StaffService.data.StaffMemberRepository;

@Service
public class StaffMemberService {

    @Autowired
    private StaffMemberRepository staffMemberRepository;

    public List<StaffMember> getAllStaff() {
        return staffMemberRepository.findAll();
    }

    public StaffMember getStaffById(int id) {
        return staffMemberRepository.findById(id).orElse(null);
    }

    public StaffMember createStaffMember(StaffMember staff) {
        return staffMemberRepository.save(staff);
    }

    public StaffMember updateStaffMember(StaffMember staff) {
        return staffMemberRepository.save(staff);
    }

    public void deleteStaffMember(int id) {
        staffMemberRepository.deleteById((int) id);


    }

}