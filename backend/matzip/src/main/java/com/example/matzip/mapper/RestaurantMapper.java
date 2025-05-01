package com.example.matzip.mapper;

import com.example.matzip.domain.Restaurant;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RestaurantMapper {
    List<Restaurant> getAllRestaurants();
}
