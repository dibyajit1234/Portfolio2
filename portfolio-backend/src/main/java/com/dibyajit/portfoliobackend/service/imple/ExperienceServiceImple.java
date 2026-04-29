package com.dibyajit.portfoliobackend.service.imple;

import com.dibyajit.portfoliobackend.model.Experience;
import com.dibyajit.portfoliobackend.repository.ExperienceRepo;
import com.dibyajit.portfoliobackend.service.ExperienceService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ExperienceServiceImple implements ExperienceService {

    private final ExperienceRepo experienceRepo;

    public ExperienceServiceImple(ExperienceRepo experienceRepo) {
        this.experienceRepo = experienceRepo;
    }

    @Override
    public List<Experience> getExperience() {
        return experienceRepo.findAll();
    }

    @Override
    public Experience updateExperience(Experience Experience, UUID id) {
        Experience oldExp = experienceRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Experience not found"));
        oldExp.setDescription(Experience.getDescription());
        oldExp.setRole(Experience.getRole());
        oldExp.setOrganization(Experience.getOrganization());
        oldExp.setEndDate(Experience.getEndDate());
        oldExp.setStartDate(Experience.getStartDate());
        return experienceRepo.save(oldExp);
    }

    @Override
    public Experience addExperience(Experience Experience) {
        return experienceRepo.save(Experience);
    }

    @Override
    public void deleteExperience(UUID id) {
        experienceRepo.deleteById(id);
    }
}
