package org.ssafy.d210.wallets.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.ssafy.d210._common.entity.OnlyCreatedTime;
import org.ssafy.d210.members.entity.Members;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "wallet_history")
public class WalletHistory extends OnlyCreatedTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 1)
    @Column(name = "wallet_history_id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "wallet_type", nullable = false)
    private WalletType walletType;

    @Column(nullable = false)
    private Boolean operator;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private String receiptId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Members member;

    @Builder
    private WalletHistory(WalletType walletType, Boolean operator, Integer price, String receiptId, Members member) {
        this.walletType = walletType;
        this.operator = operator;
        this.price = price;
        this.receiptId = receiptId;
        this.member = member;
    }

    public static WalletHistory of(WalletType walletType, Boolean operator, Integer price, String receiptId, Members member) {
        return builder()
                .walletType(walletType)
                .operator(operator)
                .price(price)
                .receiptId(receiptId)
                .member(member)
                .build();
    }

    public void updateReceiptId(String receiptId) {
        this.receiptId = receiptId;
    }
}