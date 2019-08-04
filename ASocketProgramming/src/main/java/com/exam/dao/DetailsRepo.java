package com.exam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.Details;
@Repository
public interface DetailsRepo extends JpaRepository<Details, Integer> {

}
