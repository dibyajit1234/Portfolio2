package com.dibyajit.portfoliobackend.controller;

import com.dibyajit.portfoliobackend.dto.ExperienceDto;
import com.dibyajit.portfoliobackend.mapper.ExperienceMapper;
import com.dibyajit.portfoliobackend.service.ExperienceService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/experience")
public class ExperienceController {
    private final ExperienceMapper experienceMapper;
    private final ExperienceService experienceService;

    public ExperienceController(ExperienceMapper experienceMapper, ExperienceService experienceService) {
        this.experienceMapper = experienceMapper;
        this.experienceService = experienceService;
    }
    @GetMapping
    public List<ExperienceDto> listExperience(){
        return experienceService.getExperience().stream().map(experienceMapper::toDto).toList();
    }
    @PostMapping
    public ExperienceDto addExperience(@RequestBody ExperienceDto experienceDto){
        return experienceMapper.toDto(experienceService.addExperience(experienceMapper.fromDto(experienceDto)));
    }
    @PutMapping(path = "/{exp_id}")
    public ExperienceDto updateExperience(@PathVariable("exp_id")UUID id, @RequestBody ExperienceDto experienceDto){
        return experienceMapper.toDto(experienceService.updateExperience(experienceMapper.fromDto(experienceDto),id));
    }
    @DeleteMapping(path = "/{exp_id}")
    public void deleteExperience(@PathVariable("exp_id") UUID id){
        experienceService.deleteExperience(id);
    }

}
