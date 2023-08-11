package com.spring.project.backend.service.impl;

import com.spring.project.backend.entity.Region;
import com.spring.project.backend.repository.RegionRepository;
import com.spring.project.backend.service.RegionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RegionServiceImpl implements RegionService {

    @Autowired
    private RegionRepository regionRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Region> findAll() {
        return regionRepository.findAll();
    }
}
