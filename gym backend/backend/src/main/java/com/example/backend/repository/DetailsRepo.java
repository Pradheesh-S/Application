package com.example.backend.repository;

import com.example.backend.model.Details;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DetailsRepo extends JpaRepository<Details, Long> {
}
