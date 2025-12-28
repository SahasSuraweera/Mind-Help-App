package com.example.StaffService.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CounsellorRepository extends JpaRepository<Counsellor, Integer> {

    @Query("SELECT c FROM Counsellor c WHERE c.staffId = :staffId")
    Counsellor findByStaffId(@Param("staffId") int staffId);
}
