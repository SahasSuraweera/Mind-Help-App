package com.example.StaffService.service;


import com.example.StaffService.data.StaffMember;
import com.example.StaffService.data.StaffMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffMemberService {

    @Autowired
    private StaffMemberRepository staffMemberRepository;

    public List<StaffMember> getAllActiveStaff() {
        return staffMemberRepository.findByIsDeletedFalse();
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

    public void softDeleteStaff(int staffId) {
        StaffMember staff = staffMemberRepository.findById(staffId)
                .orElseThrow(() -> new RuntimeException("Staff not found"));

        staff.setDeleted(true);
        staffMemberRepository.save(staff);
    }

}