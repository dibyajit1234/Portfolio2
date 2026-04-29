package com.dibyajit.portfoliobackend.dto;

import java.time.LocalDateTime;
import java.util.UUID;

public record MessageDto(
        UUID id,
        String name,
        String email,
        String subject,
        String message,
        LocalDateTime createdAt
) {
}
