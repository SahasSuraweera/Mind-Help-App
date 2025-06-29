package com.counsellors_service.counsellors.data;

import jakarta.persistence.*;


@Entity
public class Counsellor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int counsellorId;

    private String name;
    private String specialization;

    public int getCounsellorId() {
        return counsellorId;
    }

    public void setCounsellorId(int counsellorId) {
        this.counsellorId = counsellorId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }
}
