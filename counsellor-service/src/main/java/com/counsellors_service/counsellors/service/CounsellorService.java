package com.counsellors_service.counsellors.service;

import com.counsellors_service.counsellors.data.Counsellor;
import com.counsellors_service.counsellors.data.CounsellorAvailability;
import com.counsellors_service.counsellors.data.CounsellorAvailabilityRepository;
import com.counsellors_service.counsellors.data.CounsellorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.*;
import java.util.*;

@Service
public class CounsellorService {
    @Autowired
    private CounsellorRepository counsellorRepo;

    @Autowired
    private CounsellorAvailabilityRepository availabilityRepo;

    public Counsellor saveCounsellor(Counsellor counsellor) {
        return counsellorRepo.save(counsellor);
    }

    public List<Counsellor> getAllCounsellors() {
        return counsellorRepo.findAll();
    }

    public List<CounsellorAvailability> getAvailability(int counsellorId) {
        return availabilityRepo.findByCounsellor_CounsellorId(counsellorId);
    }

    public CounsellorAvailability addAvailability(int counsellorId, DayOfWeek day) {
        Counsellor counsellor = counsellorRepo.findById(counsellorId).orElseThrow();
        CounsellorAvailability availability = new CounsellorAvailability();
        availability.setCounsellor(counsellor);
        availability.setDay(day);
        return availabilityRepo.save(availability);
    }

    public List<String> getAvailableTimeSlots(int counsellorId, DayOfWeek day) {
        List<CounsellorAvailability> availabilities = availabilityRepo.findByCounsellor_CounsellorId(counsellorId);
        boolean isAvailable = availabilities.stream()
                .anyMatch(a -> a.getDay() == day);

        if (!isAvailable) {
            return Collections.emptyList();
        }

        List<String> slots = new ArrayList<>();
        LocalTime start = LocalTime.of(9, 0);
        LocalTime end = LocalTime.of(17, 0);

        while (start.isBefore(end)) {
            LocalTime slotEnd = start.plusMinutes(30);
            slots.add(start + " - " + slotEnd);
            start = slotEnd;
        }
        return slots;
    }


}
