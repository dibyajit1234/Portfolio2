package com.dibyajit.portfoliobackend.mapper.imple;

import com.dibyajit.portfoliobackend.dto.ProjectDto;
import com.dibyajit.portfoliobackend.mapper.ProjectMapper;
import com.dibyajit.portfoliobackend.model.Project;

public class ProjectMapperImple implements ProjectMapper {
    @Override
    public Project fromDto(ProjectDto projectDto) {
        return new Project(
                projectDto.id(),
                projectDto.title(),
                projectDto.description(),
                projectDto.techStack(),
                projectDto.githib(),
                projectDto.liveUrl(),
                projectDto.image()
        );
    }

    @Override
    public ProjectDto toDto(Project project) {
        return new ProjectDto(
                project.getId(),
                project.getTitle(),
                project.getDescription(),
                project.getTechStack(),
                project.getGithub(),
                project.getLiveUrl(),
                project.getImage()
        );
    }
}
