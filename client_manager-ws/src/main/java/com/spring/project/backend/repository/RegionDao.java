package com.spring.project.backend.repository;

import com.spring.project.backend.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionDao extends JpaRepository<Region, Long> {

}
