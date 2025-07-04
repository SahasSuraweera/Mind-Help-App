package com.example.StaffService.data;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "schedule")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "slot_id")
    private int slotId;

    @Column(name = "counsellor_id")
    private int counsellorId;

    @Column(name = "slot_date")
    private LocalDate slotDate;

    @Column(name = "slot_time")
    private LocalTime slotTime;

    @Column(name = "is_available")
    private boolean isAvailable;

    @Column(name = "is_booked")
    private boolean isBooked;

    public int getSlotId() {
        return slotId;
    }

    public void setSlotId(int slotId) {
        this.slotId = slotId;
    }

    public int getCounsellorId() {
        return counsellorId;
    }

    public void setCounsellorId(int counsellorId) {
        this.counsellorId = counsellorId;
    }

    public LocalDate getSlotDate() {
        return slotDate;
    }

    public void setSlotDate(LocalDate slotDate) {
        this.slotDate = slotDate;
    }

    public LocalTime getSlotTime() {
        return slotTime;
    }

    public void setSlotTime(LocalTime slotTime) {
        this.slotTime = slotTime;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public boolean isBooked() {
        return isBooked;
    }

    public void setBooked(boolean booked) {
        isBooked = booked;
    }
}
