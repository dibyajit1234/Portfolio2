package com.dibyajit.portfoliobackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "admin")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "user_name",nullable = false)
    private String userName;

    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "password_hash",nullable = false)
    private String password;

    @Column(name = "created_at")
    private LocalDateTime createdAt=LocalDateTime.now();
}
