package com.dibyajit.portfoliobackend.service;

import com.dibyajit.portfoliobackend.model.Message;

import java.util.List;

public interface MessageService {
    List<Message> getMessages();
    Message addMessage(Message message);
}
