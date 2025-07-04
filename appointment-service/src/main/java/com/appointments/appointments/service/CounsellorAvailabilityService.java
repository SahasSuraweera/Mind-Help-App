package com.appointments.appointments.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appointments.appointments.data.CounsellorAvailability;
import com.appointments.appointments.data.CounsellorAvailabilityRepository;

@Service
public class CounsellorAvailabilityService {
    @Autowired
    private CounsellorAvailabilityRepository repo;

    public List<CounsellorAvailability> getAvailabilityForCounsellor(int counsellorId) {
        return repo.findByCounsellorId(counsellorId);
    }

    public CounsellorAvailability addAvailability(CounsellorAvailability availability) {
        return repo.save(availability);
    }
}
