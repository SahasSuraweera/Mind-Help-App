package com.appointments.appointments.data;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SlotRepository extends JpaRepository<AppointmentSlot, Integer> {
    List<AppointmentSlot> findByDate(LocalDate date);
    List<AppointmentSlot> findByDateAndIsAvailableTrue(LocalDate date);
    List<AppointmentSlot> findByIsAvailableTrue();
    List<AppointmentSlot> findByCounsellorIdAndDateOrderBySlotStartTime(int counsellorId, LocalDate date);
}
