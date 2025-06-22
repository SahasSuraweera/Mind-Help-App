package com.example.patient.service;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.patient.data.Patient;
import com.example.patient.data.Record;
import com.example.patient.data.PatientRepository;
import com.example.patient.data.RecordRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepo;

    @Autowired
    private RecordRepository recordRepo;

    public Patient addPatient(Patient patient) {
        Optional<Patient> existing = patientRepo.findByEmail(patient.getEmail());
        if (existing.isPresent()) {
            throw new RuntimeException("Patient with this email already exists");
        }
        return patientRepo.save(patient);
    }

    public List<Patient> getAllPatients() {
        return patientRepo.findAll();
    }

    public Patient getPatientById(int id) {
        return patientRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Patient not found"));
    }

    public Patient updatePatient(int id, Patient updated) {
        Patient existing = getPatientById(id);
        existing.setName(updated.getName());
        existing.setPhone(updated.getPhone());
        existing.setDob(updated.getDob());
        existing.setGender(updated.getGender());
        return patientRepo.save(existing);
    }

    public void deletePatient(int id) {
        patientRepo.deleteById(id);
    }

    public Record addRecord(int patientId, Record record) {
        Patient patient = getPatientById(patientId);
        record.setPatient(patient);
        return recordRepo.save(record);
    }

    public List<Record> getRecordsByPatient(int patientId) {
        return recordRepo.findByPatientId(patientId);
    }
}
