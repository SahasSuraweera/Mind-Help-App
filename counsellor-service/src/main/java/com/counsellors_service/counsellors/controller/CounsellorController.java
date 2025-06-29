package com.counsellors_service.counsellors.controller;

import com.counsellors_service.counsellors.data.Counsellor;
import com.counsellors_service.counsellors.data.CounsellorAvailability;
import com.counsellors_service.counsellors.service.CounsellorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.DayOfWeek;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/counsellors")
public class CounsellorController {
    @Autowired
    private CounsellorService service;

    @GetMapping
    public List<Counsellor> getAllCounsellors() {
        return service.getAllCounsellors();
    }
    @PostMapping
    public Counsellor addCounsellor(@RequestBody Counsellor counsellor) {
        return service.saveCounsellor(counsellor);
    }

    @GetMapping("/{id}/availability")
    public List<CounsellorAvailability> getAvailability(@PathVariable int availabilityId) {
        return service.getAvailability(availabilityId);
    }

    @PostMapping("/{id}/availability")
    public CounsellorAvailability addAvailability(@PathVariable int id, @RequestBody String day) {
        return service.addAvailability(id, DayOfWeek.valueOf(day.toUpperCase()));
    }

    @GetMapping("/{id}/slots/{day}")
    public List<String> getTimeSlotsForDay(@PathVariable int id, @PathVariable String day) {
        try {
            DayOfWeek dayOfWeek = DayOfWeek.valueOf(day.toUpperCase());
            return service.getAvailableTimeSlots(id, dayOfWeek);
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid day: " + day);
        }
    }

}
