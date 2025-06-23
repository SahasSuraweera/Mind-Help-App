package com.example.patient.data;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

public interface RecordRepository extends JpaRepository<Record, Integer> {

    // Custom query to find records by patient ID
    @Query("SELECT r FROM Record r WHERE r.patient.id = :patientid")
    List<Record> findByPatientId(@Param("patientid") Integer patientId);

    // Custom query to find records by date
    @Query("SELECT r FROM Record r WHERE r.date = :date")
    List<Record> findByDate(@Param("date") LocalDate date);

}
