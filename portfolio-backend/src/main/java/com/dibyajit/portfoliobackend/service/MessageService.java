package com.dibyajit.portfoliobackend.service;

import com.dibyajit.portfoliobackend.model.Message;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface MessageService {
    List<Message> getMessages();
    Message addMessage(Message message);
}
