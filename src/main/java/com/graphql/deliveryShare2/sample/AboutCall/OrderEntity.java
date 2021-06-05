package com.graphql.deliveryShare2.sample.AboutCall;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
@Entity
@AllArgsConstructor
@NoArgsConstructor(access=AccessLevel.PUBLIC)
@Table(name = "orders")
@Getter
public class OrderEntity {

    @Id
    @Column(name= "seq", nullable=false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;

    //@Column(name = "createdAt", nullable=false)
    //private String createdAt;
    @Column(name = "created_at", nullable=false)
    private OffsetDateTime created_at;

   
    @Column(name = "delivery_time", nullable=true)
    private int delivery_time;

    @Column(name = "status",nullable=false)
    private String status;

    @Column(name = "canWriteRestaurantReview",nullable=true)
    private boolean canWriteRestaurantReview;

    @Column(name = "canWriteUserReview",nullable=true)
    private boolean canWriteUserReview;
    
    @Column(name="call_seq",nullable=true)
    private int call_seq;

    @ManyToOne
    @JoinColumn(name="call_seq", nullable=true, insertable=false, updatable=false)
    private CallingEntity call;

    public OrderEntity(String status, OffsetDateTime created_at, int delivery_time, boolean canWriteRestaurantReview, boolean canWriteUserReview, int call_seq, CallingEntity call){
        this.status=status;
        this.created_at=created_at;
        this.delivery_time=delivery_time;
        this.canWriteRestaurantReview=canWriteRestaurantReview;
        this.canWriteUserReview=canWriteUserReview;
        this.call_seq=call_seq;
        this.call=call;
    }

    public CallingEntity getCall() {
        return call;
    }

    public void setStatus(String status){
        this.status=status;
    }

    public void setCall_seq(int callseq){
        this.call_seq=callseq;
    }

    public int getCallSeq(){
        return call_seq;
    }

    public void setCreated_at(){
        LocalDateTime dateTime = LocalDateTime.now();
        ZoneOffset offset = ZoneOffset.UTC;
        this.created_at = dateTime.atOffset(offset);
    }
}
