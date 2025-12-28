package com.example.payment.service.controller;

import com.example.payment.service.data.Payment;
import com.example.payment.service.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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


    @GetMapping("/appointment/{appointmentId}")
    public List<Payment> getPaymentsByAppointment(@PathVariable int appointmentId) {
        return paymentService.getPaymentsByAppointmentId(appointmentId);
    }

    @GetMapping("/patient/{patientId}")
    public List<Payment> getPaymentsByPatient(@PathVariable int patientId) {
        return paymentService.getPaymentsByPatientId(patientId);
    }

    @PostMapping
    public Payment createPaymentById(@RequestBody Payment pay) {
        return paymentService.createPayment(pay);
    }

    @PutMapping("/{paymentId}")
    public Payment updatePaymentById(@RequestBody Payment payment) {
        return paymentService.updatePayment(payment);
    }

    @DeleteMapping("/{paymentId}")
    public String deletePaymentById(@PathVariable int paymentId) {
       Boolean deleted = paymentService.deletePayment(paymentId);
       return deleted ? "Payment refunded" : "Payment not found";
    }
}


