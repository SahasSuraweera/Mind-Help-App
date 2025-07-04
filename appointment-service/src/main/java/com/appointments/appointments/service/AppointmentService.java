package com.appointments.appointments.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appointments.appointments.data.Appointment;
import com.appointments.appointments.data.AppointmentRepository;

import java.util.List;


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



}

