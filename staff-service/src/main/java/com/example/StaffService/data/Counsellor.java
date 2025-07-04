package com.example.StaffService.data;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
    @Table(name = "counsellor")
    public class Counsellor {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "counsellor_id")
        private int counsellorId;

        @Column(name = "staff_id" )
        private int staffId;

        @Column(name = "display_name")
        private String displayName;

        @Column(name = "specialization" )
        private String specialization;

        @Column(name = "description" )
        private String description;

        @Column(name = "hourly_rate" )
        private float hourlyRate;

        public int getCounsellorId() {
            return counsellorId;
        }

        public void setCounsellorId(int counsellorId) {
            this.counsellorId = counsellorId;
        }

        public int getStaffId() {
            return staffId;
        }

        public void setStaffID(int staffId) {
            this.staffId = staffId;
        }

        public String getDisplayName() {
            return displayName;
        }

        public void setDisplayName(String displayName) {
            this.displayName = displayName;
        }

        public String getSpecialization() {
            return specialization;
        }

        public void setSpecialization(String specialization) {
            this.specialization = specialization;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public float getHourlyRate() {
            return hourlyRate;
        }

        public void setHourlyRate(float hourlyRate) {
            this.hourlyRate = hourlyRate;
        }
    }


