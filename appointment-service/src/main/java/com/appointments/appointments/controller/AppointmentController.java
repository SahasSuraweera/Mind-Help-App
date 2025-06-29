package com.appointments.appointments.controller;

import com.appointments.appointments.data.Appointment;
import com.appointments.appointments.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService service;

    @PostMapping("/book")
    public Appointment bookAppointment(@RequestBody Map<String, String> request) {
        int slotId = Integer.parseInt(request.get("slotId"));
        String feedback = request.getOrDefault("feedback", "");
        return service.bookAppointment(slotId, feedback);
    }

    @GetMapping
    public List<Appointment> getAppointments() {
        return service.getAllAppointments();
    }

    @PutMapping("/{id}/cancel")
    public Appointment cancelAppointment(@PathVariable int id) {
        return service.cancelAppointment(id);
    }


}
