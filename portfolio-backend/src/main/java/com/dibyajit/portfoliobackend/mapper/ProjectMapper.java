package com.dibyajit.portfoliobackend.mapper;

import com.dibyajit.portfoliobackend.dto.ProjectDto;
import com.dibyajit.portfoliobackend.model.Project;

public interface ProjectMapper {
    Project fromDto(ProjectDto projectDto);
    ProjectDto toDto(Project project);
}
