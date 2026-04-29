package com.dibyajit.portfoliobackend.controller;

import com.dibyajit.portfoliobackend.dto.MessageDto;
import com.dibyajit.portfoliobackend.mapper.MessageMapper;
import com.dibyajit.portfoliobackend.model.Message;
import com.dibyajit.portfoliobackend.repository.MessageRepo;
import com.dibyajit.portfoliobackend.service.MessageService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping(path = "/api/message")
public class MessageController {
    private final MessageService messageService;
    private final MessageMapper messageMapper;

    public MessageController(MessageService messageService, MessageRepo messageRepo, MessageMapper messageMapper) {
        this.messageService = messageService;
        this.messageMapper = messageMapper;
    }
    @GetMapping
    public List<MessageDto> listMessages(){
        return messageService.getMessages().stream().map(messageMapper::toDto).toList();
    }
    @PostMapping
    public MessageDto addMessage(@RequestBody MessageDto messageDto){
        return messageMapper.toDto(messageService.addMessage(messageMapper.fromDto(messageDto)));
    }
}
