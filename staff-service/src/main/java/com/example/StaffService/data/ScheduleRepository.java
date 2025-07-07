package com.example.StaffService.data;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {
    @Query("SELECT s FROM Schedule s WHERE s.counsellorId = :counsellorId AND s.slotDate = :slotDate AND s.isAvailable = true AND s.isBooked = false")
    List<Schedule> findAvailableSlotsByCounsellorAndDate(
            @Param("counsellorId") int counsellorId,
            @Param("slotDate") LocalDate slotDate);

    @Modifying
    @Transactional
    @Query("UPDATE Schedule s SET s.isBooked = true WHERE s.slotId = :slotId")
    int updateSlotBookedStatus(@Param("slotId") int slotId);

    @Modifying
    @Transactional
    @Query("UPDATE Schedule s SET s.isBooked = false WHERE s.slotId = :slotId")
    int cancelSlotBookedStatus(@Param("slotId") int slotId);
}
