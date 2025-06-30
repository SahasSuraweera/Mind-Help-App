package com.example.StaffService.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CounsellorRepository extends JpaRepository<Counsellor, Integer> {
}
