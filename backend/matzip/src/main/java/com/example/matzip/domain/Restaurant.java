package com.example.matzip.domain;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Restaurant {

    private Long restaurantId;
    private String name;
    private String address;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}