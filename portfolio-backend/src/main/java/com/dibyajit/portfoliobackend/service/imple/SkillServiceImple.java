package com.dibyajit.portfoliobackend.service.imple;

import com.dibyajit.portfoliobackend.model.Skill;
import com.dibyajit.portfoliobackend.repository.SkillsRepo;
import com.dibyajit.portfoliobackend.service.SkillService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Component
public class SkillServiceImple implements SkillService {

    private final SkillsRepo skillsRepo;

    public SkillServiceImple(SkillsRepo skillsRepo) {
        this.skillsRepo = skillsRepo;
    }

    @Override
    public List<Skill> getSkills() {
        return skillsRepo.findAll();
    }

    @Override
    public Skill updateSkill(Skill skill,UUID id) {
        Skill oldSkill = skillsRepo.findById(id).orElseThrow(()->new IllegalArgumentException("skill not found"));
        oldSkill.setCategory(skill.getCategory());
        oldSkill.setName(skill.getName());
        return skillsRepo.save(oldSkill);
    }

    @Override
    public void deleteSkill(UUID id) {
        skillsRepo.deleteById(id);
    }

    @Override
    public Skill addSkill(Skill skill) {
        return skillsRepo.save(skill);
    }
}
