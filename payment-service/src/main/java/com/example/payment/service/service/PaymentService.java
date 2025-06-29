package com.example.payment.service.service;

import com.example.payment.service.data.Payment;
import com.example.payment.service.data.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepo;

    public List<Payment> getAllPayments() {
        //from JPA repository
        return paymentRepo.findAll();
    }

    public Payment getPaymentById(int paymentId) {
        Optional<Payment> pay = paymentRepo.findById(paymentId);
        return pay.orElse(null);
    }

    public Payment createPayment(Payment payment) {
        return paymentRepo.save(payment);
    }

    public Payment updatePayment(Payment pay) {
        return paymentRepo.save(pay);
    }
    public Payment deletePaymentById(int paymentId) {
        Optional<Payment> pay = paymentRepo.findById(paymentId);
        if (pay.isPresent()) {
            Payment payment = pay.get();
            paymentRepo.deleteById(paymentId);
            return payment;
        }
        return null;
    }


}
