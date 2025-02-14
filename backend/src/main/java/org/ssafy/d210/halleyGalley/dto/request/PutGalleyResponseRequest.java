package org.ssafy.d210.halleyGalley.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PutGalleyResponseRequest {
    private Long memberId;
    private Boolean isAccept;
}
