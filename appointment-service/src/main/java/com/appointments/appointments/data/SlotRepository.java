package com.appointments.appointments.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface SlotRepository extends JpaRepository<AppointmentSlot, Integer> {
    List<AppointmentSlot> findByDate(LocalDate date);
    List<AppointmentSlot> findByDateAndIsAvailableTrue(LocalDate date);
}
