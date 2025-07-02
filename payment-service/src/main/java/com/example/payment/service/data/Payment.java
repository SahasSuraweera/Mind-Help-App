package com.example.payment.service.data;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Table(name = "payment")
public class Payment {

    @Id
    @Column(name = "payment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int paymentId;

    @Column(name = "patient_id")
    private int patientId;

    @Column(name = "appointment_id")
    private int appointmentId;

    @Column(name = "amount")
    private float amount;

    @Column(name = "payment_type")
    private String paymentType;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "created_at")
    private LocalTime createdAt;

    @Column(name = "created_staff_id")
    private Integer createdStaffId;

    @Column(name = "status")
    private String status;

    @Column(name = "is_Deleted")
    private Boolean isDeleted;

    public int getPaymentId() {
        return paymentId;
    }

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public void setPaymentID(int paymentId) {
        this.paymentId = paymentId;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(String paymentType) {
        this.paymentType = paymentType;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalTime createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getCreatedStaffId() {
        return createdStaffId;
    }

    public void setCreatedStaffId(Integer createdStaffId) {

        this.createdStaffId = createdStaffId;
    }

    public Boolean getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(Boolean isDeleted) {
       this.isDeleted = isDeleted;
    }
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

