package com.appointments.appointments.data;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

    @Query("SELECT a FROM Appointment a WHERE a.isDeleted = false")
    List<Appointment> findAllActiveAppointments();

    @Modifying
    @Query("UPDATE Appointment s SET s.paymentStatus = :paymentStatus WHERE s.appointmentId = :appointmentId")
    int updateAppointmentStatus(@Param("paymentStatus") String status, @Param("appointmentId") int appointmentId);

    @Modifying
    @Transactional
    @Query("UPDATE Appointment a SET a.isDeleted = true WHERE a.appointmentId = :appointmentId")
    int softDeleteAppointment(@Param("appointmentId") int appointmentId);

}



