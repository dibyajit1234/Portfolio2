package com.dibyajit.portfoliobackend.repository;

import com.dibyajit.portfoliobackend.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ExperienceRepo extends JpaRepository<Experience, UUID> {
}
