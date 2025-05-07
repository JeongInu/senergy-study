package com.example.matzip.controller;

import com.example.matzip.domain.Restaurant;
import com.example.matzip.service.RestaurantService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping
    public List<Restaurant> getRestaurants() {
        log.info("call me ;)");
        return restaurantService.getAllRestaurants();
    }

    @PostMapping
    public ResponseEntity<Restaurant> addRestaurant(@RequestBody Restaurant restaurant) {
        log.info("POST RESTAURANT");
        log.info("RESTAURANT: {}", restaurant);

        return restaurantService.insertRestaurant(restaurant) != null ? ResponseEntity.ok(restaurant) : ResponseEntity.badRequest().build();
    }



}
