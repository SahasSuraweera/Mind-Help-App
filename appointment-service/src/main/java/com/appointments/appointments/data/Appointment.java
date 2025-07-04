package com.appointments.appointments.data;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.*;

@Entity
@Table(name ="appointment")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointment_id")
    private int appointmentId;

    @Column(name = "slot_id")
    private int slotId;

    @Column(name = "counsellor_id")
    private int CounsellorId;

    @Column(name = "date")
    private LocalDate appointmentDate;

    @Column(name = "time")
    private LocalTime appointmentTime;

    @Column(name = "appointment_fee")
    private float appointmentFee;

    @Column(name = "patient_name")
    private String patientName;

    @Column(name = "contact_number")
    private String contactNUmber;

    @Column(name = "notes")
    private String notes;

    @Column(name = "status")
    private String status;

    @Column(name = "is_deleted")
    private boolean isDeleted;

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public int getSlotId() {
        return slotId;
    }

    public void setSlotId(int slotId) {
        this.slotId = slotId;
    }

    public int getCounsellorId() {
        return CounsellorId;
    }

    public void setCounsellorId(int counsellorId) {
        CounsellorId = counsellorId;
    }

    public LocalDate getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDate appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public LocalTime getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(LocalTime appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public float getAppointmentFee() {
        return appointmentFee;
    }

    public void setAppointmentFee(float appointmentFee) {
        this.appointmentFee = appointmentFee;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getContactNUmber() {
        return contactNUmber;
    }

    public void setContactNUmber(String contactNUmber) {
        this.contactNUmber = contactNUmber;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

}
