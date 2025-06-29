package com.appointments.appointments.service;

import com.appointments.appointments.data.Appointment;
import com.appointments.appointments.data.AppointmentSlot;
import com.appointments.appointments.data.AppointmentRepository;
import com.appointments.appointments.data.SlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;


@Service
public class AppointmentService {
    @Autowired
    private SlotRepository slotRepo;

    public AppointmentSlot createSlot(AppointmentSlot slot) {
        slot.setIsAvailable(true); //mark new slots as available
        return slotRepo.save(slot);
    }
    public List<AppointmentSlot> getAvailableSlotsByDate(LocalDate date) {
        return slotRepo.findByDateAndIsAvailableTrue(date);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepo.findAll();
    }

    @Autowired
    private AppointmentRepository appointmentRepo;

    public Appointment bookAppointment(int slotId, String feedback) {
        // get slot
        AppointmentSlot slot = slotRepo.findById(slotId)
                .orElseThrow(() -> new RuntimeException("Slot not found"));

        if (!slot.getIsAvailable()) {
            throw new RuntimeException("Slot already booked!");
        }

        // create appointment
        Appointment appointment = new Appointment();
        appointment.setSlot(slot);
        appointment.setDate(slot.getDate());
        appointment.setStartTime(slot.getSlotStartTime());
        appointment.setEndTime(slot.getSlotEndTime());
        appointment.setFeedback(feedback);

        // mark slot as unavailable
        slot.setIsAvailable(false);
        slotRepo.save(slot);

        return appointmentRepo.save(appointment);
    }

    public Appointment cancelAppointment(int appointmentId) {
        Appointment appt = appointmentRepo.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        appt.setCancelled(true);

        AppointmentSlot slot = appt.getSlot();
        slot.setIsAvailable(true);

        slotRepo.save(slot);
        return appointmentRepo.save(appt);
    }

}

