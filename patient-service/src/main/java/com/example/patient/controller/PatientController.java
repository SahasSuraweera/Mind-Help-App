package com.example.patient.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.patient.data.Patient;
import com.example.patient.service.PatientService;
import com.example.patient.data.Record;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    // Add a new patient
    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientService.addPatient(patient);
    }

    // Get all patients
    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    // Get a patient by ID
    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable int id) {
        return patientService.getPatientById(id);
    }

    // Update a patient by ID
    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable int id, @RequestBody Patient patient) {
        return patientService.updatePatient(id, patient);
    }

    // Delete a patient by ID
    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable int id) {
        patientService.deletePatient(id);
    }

    // Insert a new record for a specific patient
    @PostMapping("/{id}/records")
    public Record addRecord(@PathVariable int id, @RequestBody Record record) {
        return patientService.addRecord(id, record);
    }

    // Get all records for a specific patient
    @GetMapping("/{id}/records")
    public List<Record> getRecords(@PathVariable int id) {
        return patientService.getRecordsByPatient(id);
    }
}