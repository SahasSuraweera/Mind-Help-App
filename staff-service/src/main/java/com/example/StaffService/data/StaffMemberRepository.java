package com.example.StaffService.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StaffMemberRepository extends JpaRepository<StaffMember, Integer> {
    List<StaffMember> findByIsDeletedFalse();
    Optional<StaffMember> findByStaffIdAndIsDeletedFalse(int staffId);

}
