package com.dibyajit.portfoliobackend.mapper;

import com.dibyajit.portfoliobackend.dto.MessageDto;
import com.dibyajit.portfoliobackend.model.Message;

public interface MessageMapper {
    Message fromDto(MessageDto messageDto);
    MessageDto toDto(Message message);
}
