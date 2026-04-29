package com.dibyajit.portfoliobackend.repository;

import com.dibyajit.portfoliobackend.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SkillsRepo extends JpaRepository<Skill, UUID> {
}
