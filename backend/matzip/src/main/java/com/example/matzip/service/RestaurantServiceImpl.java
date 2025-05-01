package com.example.matzip.service;

import com.example.matzip.domain.Restaurant;
import com.example.matzip.mapper.RestaurantMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    private RestaurantMapper restaurantMapper;

    @Override
    public List<Restaurant> getAllRestaurants() {
        return restaurantMapper.getAllRestaurants();
    }
}
