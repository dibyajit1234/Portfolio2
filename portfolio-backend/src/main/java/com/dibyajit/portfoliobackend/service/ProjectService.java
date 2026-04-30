package com.dibyajit.portfoliobackend.service;

import com.dibyajit.portfoliobackend.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public interface ProjectService {
    List<Project> getProjects();
    Project addProject(Project project);
    Project updateProject(Project project, UUID id);
    Project getProject(UUID id);
    Void deleteProject(UUID id);
}
