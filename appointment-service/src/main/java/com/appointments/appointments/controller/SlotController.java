package com.appointments.appointments.controller;

import com.appointments.appointments.data.AppointmentSlot;
import com.appointments.appointments.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/slots")
public class SlotController {

    @Autowired
    private AppointmentService service;

    @PostMapping
    public AppointmentSlot createSlot(@RequestBody AppointmentSlot slot) {
        return service.createSlot(slot);
    }

    @GetMapping
    public List<AppointmentSlot> getSlotsByDate(@RequestParam("date") String dateStr) {
        LocalDate date = LocalDate.parse(dateStr); // parses "2025-06-30"
        return service.getAvailableSlotsByDate(date);
    }
}
