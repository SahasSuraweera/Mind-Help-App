package com.example.StaffService.service;

import com.example.StaffService.data.Schedule;
import com.example.StaffService.data.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    public List<Schedule> getAvailableSlots(int counsellorId, LocalDate slotDate) {
        return scheduleRepository.findAvailableSlotsByCounsellorAndDate(counsellorId, slotDate);
    }

}
