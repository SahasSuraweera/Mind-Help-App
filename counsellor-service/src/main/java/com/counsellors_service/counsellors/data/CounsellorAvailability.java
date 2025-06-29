package com.counsellors_service.counsellors.data;

import jakarta.persistence.*;
import java.time.DayOfWeek;

@Entity
public class CounsellorAvailability {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int availabilityId;

    @ManyToOne
    @JoinColumn(name = "counsellor_id")
    private Counsellor counsellor;

    @Enumerated(EnumType.STRING)
    private DayOfWeek day;

    public int getAvailabilityId() {
        return availabilityId;
    }

    public void setAvailabilityId(int availabilityId) {
        this.availabilityId = availabilityId;
    }

    public Counsellor getCounsellor() {
        return counsellor;
    }

    public void setCounsellor(Counsellor counsellor) {
        this.counsellor = counsellor;
    }

    public DayOfWeek getDay() {
        return day;
    }

    public void setDay(DayOfWeek day) {
        this.day = day;
    }
}
