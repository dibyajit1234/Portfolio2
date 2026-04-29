package com.dibyajit.portfoliobackend.repository;

import com.dibyajit.portfoliobackend.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ExperienceRepo extends JpaRepository<Experience, UUID> {
}
