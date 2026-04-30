package com.dibyajit.portfoliobackend.mapper.imple;

import com.dibyajit.portfoliobackend.dto.SkillDto;
import com.dibyajit.portfoliobackend.mapper.SkillMapper;
import com.dibyajit.portfoliobackend.model.Skill;
import org.springframework.stereotype.Component;

@Component
public class SkillMapperImple implements SkillMapper {
    @Override
    public Skill fromDto(SkillDto skillDto) {
        return new Skill(
                skillDto.id(),
                skillDto.name(),
                skillDto.category()
        );
    }

    @Override
    public SkillDto toDto(Skill skill) {
        return new SkillDto(
                skill.getId(),
                skill.getName(),
                skill.getCategory()
        );
    }
}
