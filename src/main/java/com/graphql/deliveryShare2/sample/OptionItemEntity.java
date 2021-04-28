package com.graphql.deliveryShare2.sample;

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
@Table(name = "optionitem")
@Getter
public class OptionItemEntity {

    @Id
    @Column(name= "seq", nullable=false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;

    @Column(name = "content",nullable=false)
    private String content;

    @Column(name = "price",nullable=false)
    private int price;

    @Column(name = "option_seq", nullable=false)
    private int option_seq;

    public OptionItemEntity(String content, int price, int option_seq){
        this.content=content;
        this.price=price;
        this.option_seq=option_seq;
    }
}
