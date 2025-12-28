package com.example.payment.service.service;

import com.example.payment.service.data.Payment;
import com.example.payment.service.data.PaymentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayments() {
        return paymentRepository.findAllPayments();
    }

    public Payment getPaymentById(int paymentId) {
       return paymentRepository.findAllByPaymentId(paymentId);

    }

    public List<Payment> getPaymentsByAppointmentId(int appointmentId) {
        return paymentRepository.findAllByAppointmentId(appointmentId);
    }

    public List<Payment> getPaymentsByPatientId(int patientId) {
        return paymentRepository.findAllByPatientId(patientId);
    }

    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Payment updatePayment(Payment payment) {
       return paymentRepository.save(payment);
    }

    @Transactional
    public Boolean deletePayment(int paymentId) {
        return paymentRepository.softDeletePayment(paymentId) > 0;

    }
}
