package org.ssafy.d210.items.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Items {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 1)
    @Column(name = "items_id")
    private Long id;

    @Column(nullable = false, length = 15)
    private String name;

    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String icon;

    @Column(name = "egg_price")
    @ColumnDefault("0")
    private Integer eggPrice;

    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String effect;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 15)
    private ItemsType type;

    @OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
    private List<MemberItemHistory> memberItemHistories = new ArrayList<>();
}