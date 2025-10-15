import RatingHeading from './components/RatingHeading/RatingHeading';
import RatingTextDescription from './components/RatingTextDescription/RatingTextDescription';
import RatingVote from './components/RatingVote/RatingVote';
import RatingVoteGrade from './components/RatingVoteGrade/RatingVoteGrade';
import RatingModalContentContainer from './containers/RaringModalContentContainer/RatingModalContentContainer';
import RatingModalContainer from './containers/RatingModalContainer/RatingModalContainer';
import RatingModalTextContainer from './containers/RatingModalTextContainer/RatingModalTextContainer';
import RatingModalVoteContainer from './containers/RatingModalVoteContainer/RatingModalVoteContainer';
import { useTranslations } from 'next-intl';

export default function RatingModalContent() {
    const t = useTranslations();
    return (
        <RatingModalContainer>
            <RatingModalContentContainer>
                <RatingModalTextContainer>
                    <RatingHeading>{t('YourMark')}</RatingHeading>
                    <RatingTextDescription>{t('MarkImproveRecomendation')}</RatingTextDescription>
                </RatingModalTextContainer>
                <RatingModalVoteContainer>
                    <RatingVote />
                    <RatingVoteGrade />
                </RatingModalVoteContainer>
            </RatingModalContentContainer>
        </RatingModalContainer>
    );
}
