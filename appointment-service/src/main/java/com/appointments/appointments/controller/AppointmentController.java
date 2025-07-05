package com.appointments.appointments.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.appointments.appointments.data.Appointment;
import com.appointments.appointments.service.AppointmentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @PostMapping
    public Appointment bookAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @GetMapping("/{appointmentId}")
    public Appointment getAppointmentById(@PathVariable int appointmentId){
        return appointmentService.getAppointmentById(appointmentId);
    }

    @PutMapping("/{appointmentId}/status")
    public String updateStatus(
            @PathVariable int appointmentId,
            @RequestParam String status
    ) {
        boolean updated = appointmentService.updateAppointmentStatus(appointmentId, status);
        if (updated) {
            return "Appointment status updated to: " + status;
        } else {
            return "Failed to update status. Appointment not found.";
        }
    }

    @DeleteMapping("/{appointmentId}")
    public String deleteAppointment(@PathVariable int appointmentId) {
        boolean deleted = appointmentService.deleteById(appointmentId);
        return deleted ? "Appointment Cancelled" : "Appointment not found";
    }

}
