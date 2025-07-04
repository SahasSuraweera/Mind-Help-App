package com.example.payment.service.controller;

import com.example.payment.service.data.Payment;
import com.example.payment.service.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
        }

    @GetMapping("/{paymentId}")
    public Payment getPaymentById(@PathVariable int paymentId) {
        return paymentService.getPaymentById(paymentId);
    }

    @GetMapping("/patients/payments")
    public List<Payment> getPaymentsByPatientId(@RequestParam int patientId) {
        return paymentService.getPaymentsByPatientId(patientId);
    }

    @PostMapping
    public Payment createPayment(@RequestBody Payment pay) {
        return paymentService.createPayment(pay);
    }

    @PutMapping("/{paymentId}")
    public Payment updatePayment(@RequestBody Payment pay) {
        return paymentService.createPayment(pay);
    }
    @DeleteMapping("/{paymentId}")
    public Payment deletePaymentById(@PathVariable int paymentId) {
        return paymentService.deletePaymentById(paymentId);
    }

}


