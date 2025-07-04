package com.example.StaffService.controller;

import com.example.StaffService.data.Schedule;
import com.example.StaffService.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/schedules")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @GetMapping("/available")
    public List<Schedule> getAvailableSlots(
            @RequestParam int counsellorId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate slotDate) {

        return scheduleService.getAvailableSlots(counsellorId, slotDate);
    }

    @PutMapping("{slotId}")
    public String updateScheduleBySlotID (@PathVariable int slotId) {
        return scheduleService.updateSlotById(slotId);
    }
}

