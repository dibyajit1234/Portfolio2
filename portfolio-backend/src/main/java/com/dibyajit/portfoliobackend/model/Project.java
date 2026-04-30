package com.dibyajit.portfoliobackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "Projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false,updatable = false)
    private UUID id ;

    @Column(name = "title",nullable = false)
    private String title;

    @Column(name = "description")
    private String description;


    @Column(name = "tech_stack",nullable = false)
    private String techStack;

    @Column(name = "github_url")
    private String github;

    @Column(name = "live_url")
    private String liveUrl;

    @Column(columnDefinition = "BYTEA")
    private byte[] image;

}
