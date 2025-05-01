package com.example.matzip.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import com.example.matzip.domain.Restaurant;

@Mapper
public interface TestMapper {

    @Select("SELECT 1 FROM DUAL")
    int checkConnection();

    void insertRestaurant(Restaurant restaurant);

}