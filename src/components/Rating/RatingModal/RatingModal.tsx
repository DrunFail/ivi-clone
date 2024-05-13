import Modal from "../../UI/Modal/Modal";
import RatingHeading from "./components/RatingHeading/RatingHeading";
import RatingTextDescription from "./components/RatingTextDescription/RatingTextDescription";
import RatingVote from "./components/RatingVote/RatingVote";
import RatingVoteGrade from "./components/RatingVoteGrade/RatingVoteGrade";
import RatingModalContentContainer from "./containers/RaringModalContentContainer/RatingModalContentContainer";
import RatingModalContainer from "./containers/RatingModalContainer/RatingModalContainer";
import RatingModalTextContainer from "./containers/RatingModalTextContainer/RatingModalTextContainer";
import RatingModalVoteContainer from "./containers/RatingModalVoteContainer/RatingModalVoteContainer";
import { useTranslations } from "next-intl";

interface RatingModalProps {
    visible: boolean,
    call: () => void
}
export default function RatingModal({ visible, call }: RatingModalProps) {
    const t = useTranslations();
    return (
        <Modal callback={() => call()} visible={visible}>
            <RatingModalContainer>
                <RatingModalContentContainer>
                    <RatingModalTextContainer>
                        <RatingHeading>
                            {t("YourMark") }
                        </RatingHeading>
                        <RatingTextDescription>
                            {t("MarkImproveRecomendation") }
                        </RatingTextDescription>
                    </RatingModalTextContainer>
                    <RatingModalVoteContainer>
                        <RatingVote />
                        <RatingVoteGrade />
                    </RatingModalVoteContainer>
                </RatingModalContentContainer>
            </RatingModalContainer>
        </Modal>

    );
}