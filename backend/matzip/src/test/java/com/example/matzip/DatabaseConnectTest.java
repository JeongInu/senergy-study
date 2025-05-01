package com.example.matzip;

import com.example.matzip.mapper.TestMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;
import com.example.matzip.domain.Restaurant;
import com.example.matzip.mapper.TestMapper;
import java.time.LocalDateTime;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
@SpringBootTest
public class DatabaseConnectTest {

    @Autowired
    private TestMapper testMapper;

    @Test
    public void testDatabaseConnection() {
        // Mapper를 통해 SELECT 1 쿼리 실행
        int result = testMapper.checkConnection();

        // 결과가 1이어야 DB 연결이 잘 된 것
        assertEquals(1, result);
    }

    @Test
    @Transactional
    @Commit
    public void testInsertRestaurant() {
        Restaurant restaurant = new Restaurant();
        restaurant.setName("Test Restaurant");
        restaurant.setAddress("Test Address");

        testMapper.insertRestaurant(restaurant);
    }

}
