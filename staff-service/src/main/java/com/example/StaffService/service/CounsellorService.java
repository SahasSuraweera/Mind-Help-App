package com.example.StaffService.service;

import com.example.StaffService.data.Counsellor;
import com.example.StaffService.data.CounsellorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CounsellorService {

    @Autowired
    private CounsellorRepository counsellorRepository;

    public List<Counsellor> getAllCounsellors() {

        return counsellorRepository.findAll();
    }

    public Counsellor getCounsellorById(int counsellorId) {
        return counsellorRepository.findById(counsellorId).orElse(null);
    }

    public Counsellor findByStaffId(int staffId) {
        return counsellorRepository.findByStaffId(staffId);
    }


}
