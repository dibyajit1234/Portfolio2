package com.dibyajit.portfoliobackend.service.imple;

import com.dibyajit.portfoliobackend.model.Project;
import com.dibyajit.portfoliobackend.repository.ProjectRepo;
import com.dibyajit.portfoliobackend.service.ProjectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProjectServiceImple implements ProjectService {

    private final ProjectRepo projectRepo;

    public ProjectServiceImple(ProjectRepo projectRepo) {
        this.projectRepo = projectRepo;
    }


    @Override
    public List<Project> getProjects() {
        return projectRepo.findAll();
    }

    @Override
    public Project addProject(Project project) {
        return projectRepo.save(project);
    }

    @Override
    public Project updateProject(Project project, UUID id) {
        Project oldProject = getProject(id);
        oldProject.setTitle(project.getTitle());
        oldProject.setDescription(project.getDescription());
        oldProject.setImage(project.getImage());
        oldProject.setGithub(project.getGithub());
        oldProject.setLiveUrl(project.getLiveUrl());
        oldProject.setTechStack(project.getTechStack());

        return projectRepo.save(oldProject);
    }

    @Override
    public Project getProject(UUID id) {
        return projectRepo.findById(id).orElseThrow(()-> new IllegalArgumentException("project not found"));
    }

    @Override
    public Void deleteProject(UUID id) {
        projectRepo.deleteById(id);
        return null;
    }
}
