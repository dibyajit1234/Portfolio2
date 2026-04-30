package com.dibyajit.portfoliobackend.mapper.imple;

import com.dibyajit.portfoliobackend.dto.ExperienceDto;
import com.dibyajit.portfoliobackend.mapper.ExperienceMapper;
import com.dibyajit.portfoliobackend.model.Experience;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

@Component
public class ExperienceMapperImple implements ExperienceMapper {
    @Override
    public Experience fromDto(ExperienceDto experienceDto) {
        return new Experience(
                experienceDto.id(),
                experienceDto.organization(),
                experienceDto.role(),
                experienceDto.startDate(),
                experienceDto.endDate(),
                experienceDto.Description()
        );
    }

    @Override
    public ExperienceDto toDto(Experience experience) {
        return new ExperienceDto(
                experience.getId(),
                experience.getOrganization(),
                experience.getRole(),
                experience.getStartDate(),
                experience.getEndDate(),
                experience.getDescription()
        );
    }
}
