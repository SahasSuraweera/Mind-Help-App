package com.example.StaffService.controller;

import com.example.StaffService.data.Schedule;
import com.example.StaffService.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/schedules")
public class ScheduleController {

    @Autowired
    private ScheduleService  scheduleService;

    @GetMapping
    public List<Schedule> getAllSlots() {
        return scheduleService.findAllData();
    }

    @GetMapping("/available")
    public List<Schedule> getAvailableSlots(
            @RequestParam int counsellorId,
            @RequestParam String slotDate // format: yyyy-MM-dd
    ) {
        LocalDate date = LocalDate.parse(slotDate);
        return scheduleService.getAvailableSlots(counsellorId, date);
    }

    @PutMapping("/{slotId}")
    public void updateSchedule(@PathVariable int slotId) {
        scheduleService.updateSchedule(slotId);
    }
}
