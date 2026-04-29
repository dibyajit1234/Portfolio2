package com.dibyajit.portfoliobackend.mapper;

import com.dibyajit.portfoliobackend.dto.SkillDto;
import com.dibyajit.portfoliobackend.model.Skill;

public interface SkillMapper {
    Skill fromDto(SkillDto skillDto);
    SkillDto toDto(Skill skill);
}
