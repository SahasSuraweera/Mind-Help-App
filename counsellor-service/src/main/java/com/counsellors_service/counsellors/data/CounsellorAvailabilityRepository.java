package com.counsellors_service.counsellors.data;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CounsellorAvailabilityRepository extends JpaRepository<CounsellorAvailability, Integer> {
    List<CounsellorAvailability> findByCounsellor_CounsellorId(int counsellorId);
}
