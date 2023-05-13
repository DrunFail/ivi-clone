import Image from "next/image";
import React from "react";
import ButtonPromo from "./ButtonPromo/ButtonPromo";
import ButtonPromoContainer from "./ButtonPromoContainer/ButtonPromoContainer";

export default function PromoSection() {
    return (
        <ButtonPromoContainer>
            <ButtonPromo priority>
                <Image src="/lightning.svg" width={24} height={32} alt='30 дней подписки за 1 ₽' />
                        30 дней подписки за 1 ₽
            </ButtonPromo>

            <ButtonPromo>
                <Image src="/gift.svg" width={56} height={32} alt='Активировать сертификат' />
                        Активировать сертификат
            </ButtonPromo>
        </ButtonPromoContainer>

    );
}
