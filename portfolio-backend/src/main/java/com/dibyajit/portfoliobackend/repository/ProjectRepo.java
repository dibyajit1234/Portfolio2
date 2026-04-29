package com.dibyajit.portfoliobackend.repository;

import com.dibyajit.portfoliobackend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProjectRepo extends JpaRepository<Project, UUID> {
}
