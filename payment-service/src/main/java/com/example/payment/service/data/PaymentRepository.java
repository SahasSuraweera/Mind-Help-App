package com.example.payment.service.data;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

    //@Query("SELECT DISTINCT p.status FROM Payment p")
    //List<String> findDistinctStatuses();

    @Query("SELECT p FROM Payment p WHERE p.appointmentId = :appointmentId AND p.isDeleted = false")
    List<Payment> findAllByAppointmentId(Long appointmentId);

    @Modifying
    @Transactional
    @Query("UPDATE Payment p SET p.isDeleted = true WHERE p.paymentId = :paymentId")
    int softDeletePayment(@Param("paymentId") int paymentId);

}

