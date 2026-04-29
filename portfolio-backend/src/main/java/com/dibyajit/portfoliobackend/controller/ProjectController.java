package com.dibyajit.portfoliobackend.controller;

import com.dibyajit.portfoliobackend.dto.ProjectDto;
import com.dibyajit.portfoliobackend.mapper.ProjectMapper;
import com.dibyajit.portfoliobackend.model.Project;
import com.dibyajit.portfoliobackend.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/projects")
public class ProjectController {

    private final ProjectService projectService;
    private final ProjectMapper projectMapper;

    public ProjectController(ProjectService projectService, ProjectMapper projectMapper) {
        this.projectService = projectService;
        this.projectMapper = projectMapper;
    }

    @GetMapping
    public List<ProjectDto> listProjects(){
        return projectService.getProjects().stream().map(projectMapper::toDto).toList();
    }
    @PostMapping
    public Project addProject(@RequestBody ProjectDto projectDto){
        Project project = projectMapper.fromDto(projectDto);
        return projectService.addProject(project);
    }
    @GetMapping(path = "/{project_id}")
    public ProjectDto listProject(@PathVariable("project_id") UUID id){
        return projectMapper.toDto(projectService.getProject(id));
    }
    @DeleteMapping(path = "/{project_id}")
    public void deleteProject(@PathVariable("project_id") UUID id){
        projectService.deleteProject(id);
    }
    @PutMapping(path = "/{project_id}")
    public ProjectDto updateProject(@PathVariable("project_id") UUID id,@RequestBody ProjectDto projectDto){
        return projectMapper.toDto(projectService.updateProject(projectMapper.fromDto(projectDto),id));
    }

}
