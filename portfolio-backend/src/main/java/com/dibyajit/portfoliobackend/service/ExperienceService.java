package com.dibyajit.portfoliobackend.service;

import com.dibyajit.portfoliobackend.model.Experience;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public interface ExperienceService {
    List<Experience> getExperience();
    Experience updateExperience(Experience Experience, UUID id);
    Experience addExperience(Experience Experience);
    void deleteExperience(UUID id);
}
