package com.example.matzip.service;

import com.example.matzip.domain.Restaurant;

import java.util.List;

public interface RestaurantService {

   List<Restaurant> getAllRestaurants();
   Restaurant insertRestaurant(Restaurant restaurant);

}
