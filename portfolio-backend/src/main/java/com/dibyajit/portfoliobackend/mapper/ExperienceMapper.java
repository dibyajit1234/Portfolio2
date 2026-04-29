package com.dibyajit.portfoliobackend.mapper;

import com.dibyajit.portfoliobackend.dto.ExperienceDto;
import com.dibyajit.portfoliobackend.model.Experience;


public interface ExperienceMapper {
    Experience fromDto(ExperienceDto experienceDto);
    ExperienceDto toDto(Experience experience);

}
