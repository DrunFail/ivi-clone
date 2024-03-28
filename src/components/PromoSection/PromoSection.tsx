import Image from "next/image";
import React from "react";
import ButtonPromoContainer from "./ButtonPromoContainer/ButtonPromoContainer";
import Button from "../UI/core/Button/Button";

export default function PromoSection() {
    return (
        <ButtonPromoContainer>
            <Button>
                <Image src="/lightning.svg" width={24} height={32} alt='30 дней подписки за 1 ₽' />
                        30 дней подписки за 1 ₽
            </Button>

            
            <Button>
                <Image src="/gift.svg" width={56} height={32} alt='Активировать сертификат' />
                    Активировать сертификат
                </Button>
            
        </ButtonPromoContainer>

    );
}
