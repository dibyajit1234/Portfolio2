package com.dibyajit.portfoliobackend.service.imple;

import com.dibyajit.portfoliobackend.model.Message;
import com.dibyajit.portfoliobackend.repository.MessageRepo;
import com.dibyajit.portfoliobackend.service.MessageService;

import java.util.List;

public class MessageServiceImple implements MessageService {
    private final MessageRepo messageRepo;

    public MessageServiceImple(MessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }

    @Override
    public List<Message> getMessages() {
        return messageRepo.findAll();
    }

    @Override
    public Message addMessage(Message message) {
        return messageRepo.save(message);
    }
}
