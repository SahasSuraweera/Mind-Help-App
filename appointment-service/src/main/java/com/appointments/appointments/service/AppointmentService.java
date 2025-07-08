package com.appointments.appointments.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appointments.appointments.data.Appointment;
import com.appointments.appointments.data.AppointmentRepository;

import jakarta.transaction.Transactional;


@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepo;

    public List<Appointment> getAllAppointments() {
        return appointmentRepo.findAllActiveAppointments();
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepo.save(appointment);
    }

    public Appointment getAppointmentById(int appointmentId) {
        return appointmentRepo.findById(appointmentId).orElse(null);
    }

    public Appointment updateAppointment (Appointment updatedAppointment) {
        return appointmentRepo.save(updatedAppointment);
    }

    @Transactional
    public boolean updateAppointmentStatus(int appointmentId, String status) {
        int rowsUpdated = appointmentRepo.updateAppointmentStatus(status, appointmentId);
        return rowsUpdated > 0;
    }

    public boolean deleteById(int appointmentId) {
        return  appointmentRepo.softDeleteAppointment(appointmentId) > 0;
    }

}

