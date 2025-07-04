package com.appointments.appointments.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

    @Query("SELECT a FROM Appointment a WHERE a.isDeleted = false")
    List<Appointment> findAllActiveAppointments();
}
