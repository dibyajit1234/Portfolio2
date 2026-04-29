package com.dibyajit.portfoliobackend.service;

import com.dibyajit.portfoliobackend.model.Skill;

import java.util.List;
import java.util.UUID;

public interface SkillService {
    List<Skill> getSkills();
    Skill updateSkill(Skill skill,UUID id);
    void deleteSkill(UUID id);
    Skill addSkill(Skill skill);
}
