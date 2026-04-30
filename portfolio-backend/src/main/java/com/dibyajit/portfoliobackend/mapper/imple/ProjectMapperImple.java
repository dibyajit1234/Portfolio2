package com.dibyajit.portfoliobackend.mapper.imple;

import com.dibyajit.portfoliobackend.dto.ProjectDto;
import com.dibyajit.portfoliobackend.mapper.ProjectMapper;
import com.dibyajit.portfoliobackend.model.Project;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
public class ProjectMapperImple implements ProjectMapper {
    @Override
    public Project fromDto(ProjectDto projectDto) {
        byte[] imageBytes = projectDto.image() != null && !projectDto.image().isEmpty()
                ? Base64.getDecoder().decode(projectDto.image())
                : null;
        return new Project(
                projectDto.id(),
                projectDto.title(),
                projectDto.description(),
                projectDto.techStack(),
                projectDto.githib(),
                projectDto.liveUrl(),
                imageBytes
        );
    }

    @Override
    public ProjectDto toDto(Project project) {
        String imageBase64 = project.getImage() != null
                ? Base64.getEncoder().encodeToString(project.getImage())
                : null;
        return new ProjectDto(
                project.getId(),
                project.getTitle(),
                project.getDescription(),
                project.getTechStack(),
                project.getGithub(),
                project.getLiveUrl(),
                imageBase64
        );
    }
}
