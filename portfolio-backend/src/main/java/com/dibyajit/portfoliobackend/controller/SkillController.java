package com.dibyajit.portfoliobackend.controller;

import com.dibyajit.portfoliobackend.dto.SkillDto;
import com.dibyajit.portfoliobackend.mapper.SkillMapper;
import com.dibyajit.portfoliobackend.service.SkillService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping(path = "/api/skills")
public class SkillController {
    private final SkillService skillService;
    private final SkillMapper skillMapper;

    public SkillController(SkillService skillService, SkillMapper skillMapper) {
        this.skillService = skillService;
        this.skillMapper = skillMapper;
    }
    @GetMapping
    public List<SkillDto> listSkills(){
        return skillService.getSkills().stream().map(skillMapper::toDto).toList();
    }
    @PostMapping
    public SkillDto addSkill(@RequestBody SkillDto skillDto){
        return skillMapper.toDto(skillService.addSkill(skillMapper.fromDto(skillDto)));
    }
    @DeleteMapping(path = "/{skill_id}")
    public void deleteSkill(@PathVariable("skill_id") UUID id){
        skillService.deleteSkill(id);
    }
    @PutMapping(path = "/{skill_id}")
    public SkillDto updateSkill(@PathVariable("skill_id") UUID id,@RequestBody SkillDto skillDto){
        return skillMapper.toDto(skillService.updateSkill(skillMapper.fromDto(skillDto),id));
    }
}
