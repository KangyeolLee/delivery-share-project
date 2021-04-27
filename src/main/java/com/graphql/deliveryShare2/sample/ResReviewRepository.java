package com.graphql.deliveryShare2.sample;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResReviewRepository extends JpaRepository<ResReviewEntity, Long> {
    ResReviewEntity findBySeq(int seq);
}