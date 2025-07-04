package com.example.StaffService.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface ScheduleRepository extends JpaRepository <Schedule, Integer> {

    @Query("SELECT s FROM Schedule s WHERE s.counsellorId = :counsellorId AND s.slotDate = :slotDate " +
            "AND s.isAvailable = true AND s.isBooked = false ORDER BY s.slotTime ASC")
    List<Schedule> findAvailableSlots(
            @Param("counsellorId") int counsellorId,
            @Param("slotDate") LocalDate slotDate
    );

    @Modifying
    @Query("UPDATE Schedule s SET s.isBooked = true WHERE s.slotId = :slotId")
    void markSlotAsBooked(@Param("slotId") int slotId);
}
