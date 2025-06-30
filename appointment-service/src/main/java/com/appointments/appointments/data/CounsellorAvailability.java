package com.appointments.appointments.data;

import java.time.DayOfWeek;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class CounsellorAvailability {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int availabilityId;

    private int counsellorId;

    @Enumerated(EnumType.STRING)
    private DayOfWeek availableDay;

    //default constructor
    public CounsellorAvailability() {
    }

    public int getAvailabilityId() {
        return availabilityId;
    }

    public void setAvailabilityId(int availabilityId) {
        this.availabilityId = availabilityId;
    }

    public int getCounsellorId() {
        return counsellorId;
    }

    public void setCounsellorId(int counsellorId) {
        this.counsellorId = counsellorId;
    }

    public DayOfWeek getAvailableDay() {
        return availableDay;
    }

    public void setAvailableDay(DayOfWeek availableDay) {
        this.availableDay = availableDay;
    }
}
