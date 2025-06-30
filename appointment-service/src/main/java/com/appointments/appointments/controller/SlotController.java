package com.appointments.appointments.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.appointments.appointments.data.AppointmentSlot;
import com.appointments.appointments.service.AppointmentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/appointments/slots")
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
    
    @GetMapping("/available")
    public List<AppointmentSlot> getAvailableSlots() {
        return service.getAvailableSlots();
    }

    @GetMapping("/available/start")
    public List<AppointmentSlot> getAvailableStartSlots(
        @RequestParam int counsellorId,
        @RequestParam String date,
        @RequestParam int durationInMinutes
    ) {
        return service.findAvailableStartSlots(counsellorId, date, durationInMinutes);
    }
}

