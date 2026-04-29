package com.dibyajit.portfoliobackend.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "message")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "subject",nullable = false)
    private String subject;

    @Column(name = "message")
    private String message;

    @Column(name = "createdAt",nullable = false)
    private LocalDateTime createdAt=LocalDateTime.now();
}
