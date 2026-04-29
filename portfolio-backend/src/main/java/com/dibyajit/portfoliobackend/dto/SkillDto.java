package com.dibyajit.portfoliobackend.dto;

import com.dibyajit.portfoliobackend.model.enums.SkillCategory;

import java.util.UUID;

public record SkillDto(
        UUID id,
        String name,
        SkillCategory category
) {
}
