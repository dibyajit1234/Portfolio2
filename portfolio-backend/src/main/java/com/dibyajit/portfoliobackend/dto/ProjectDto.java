package com.dibyajit.portfoliobackend.dto;

import java.util.UUID;

public record ProjectDto(
        UUID id,
        String title,
        String description,
        String techStack,
        String githib,
        String liveUrl,
        String image
) {
}
