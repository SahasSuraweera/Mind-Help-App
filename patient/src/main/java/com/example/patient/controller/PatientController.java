package com.example.patient.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.patient.data.Patient;
import com.example.patient.service.PatientService;
import com.example.patient.data.Record;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping
    public Patient addPatient(@RequestBody Patient patient) {
        return patientService.addPatient(patient);
    }

    @GetMapping
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable int id) {
        return patientService.getPatientById(id);
    }

    @PutMapping("/{id}")
    public Patient updatePatient(@PathVariable int id, @RequestBody Patient patient) {
        return patientService.updatePatient(id, patient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable int id) {
        patientService.deletePatient(id);
    }

    @PostMapping("/{id}/records")
    public Record addRecord(@PathVariable int id, @RequestBody Record record) {
        return patientService.addRecord(id, record);
    }

    @GetMapping("/{id}/records")
    public List<Record> getRecords(@PathVariable int id) {
        return patientService.getRecordsByPatient(id);
    }
}