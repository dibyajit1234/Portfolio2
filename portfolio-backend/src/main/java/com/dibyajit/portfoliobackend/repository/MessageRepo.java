package com.dibyajit.portfoliobackend.repository;

import com.dibyajit.portfoliobackend.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MessageRepo extends JpaRepository<Message, UUID> {
}
