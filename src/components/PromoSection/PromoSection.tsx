import Image from "next/image";
import ButtonPromoContainer from "./ButtonPromoContainer/ButtonPromoContainer";
import Button from "../UI/core/Button/Button";

export default function PromoSection() {
    return (
        <ButtonPromoContainer>
            <Button
                aria-label="30 дней подписки за 1 рубль"
            >
                <Image
                    src="/lightning.svg"
                    width={24}
                    height={32}
                    alt=''
                    aria-hidden
                />
                        30 дней подписки за 1 ₽
            </Button>

            
            <Button
                aria-label="Активировать сертификат"
            >
                <Image
                    src="/gift.svg"
                    width={56}
                    height={32}
                    alt=''
                    aria-hidden
                />
                    Активировать сертификат
                </Button>
            
        </ButtonPromoContainer>

    );
}
