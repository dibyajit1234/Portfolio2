package com.dibyajit.portfoliobackend.mapper.imple;

import com.dibyajit.portfoliobackend.dto.MessageDto;
import com.dibyajit.portfoliobackend.mapper.MessageMapper;
import com.dibyajit.portfoliobackend.model.Message;
import org.springframework.stereotype.Component;

@Component
public class MessageMapperImple implements MessageMapper {
    @Override
    public Message fromDto(MessageDto messageDto) {
        return new Message(
                messageDto.id(),
                messageDto.name(),
                messageDto.email(),
                messageDto.subject(),
                messageDto.message(),
                messageDto.createdAt()
        );
    }

    @Override
    public MessageDto toDto(Message message) {
        return new MessageDto(
                message.getId(),
                message.getName(),
                message.getEmail(),
                message.getSubject(),
                message.getMessage(),
                message.getCreatedAt()
        );
    }
}
