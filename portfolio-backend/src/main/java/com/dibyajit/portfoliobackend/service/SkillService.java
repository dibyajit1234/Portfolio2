package com.dibyajit.portfoliobackend.service;

import com.dibyajit.portfoliobackend.model.Skill;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public interface SkillService {
    List<Skill> getSkills();
    Skill updateSkill(Skill skill,UUID id);
    void deleteSkill(UUID id);
    Skill addSkill(Skill skill);
}
