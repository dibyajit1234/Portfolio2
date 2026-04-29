package com.dibyajit.portfoliobackend.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record ExperienceDto(
        UUID id,
        String organization,
        String role,
        LocalDateTime startDate,
        LocalDateTime endDate,
        String Description
) {
}
