package com.appointments.appointments.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CounsellorAvailabilityRepository extends JpaRepository<CounsellorAvailability, Integer> {
    List<CounsellorAvailability> findByCounsellorId(int counsellorId);
}
