import { PersonSuggest } from "../../../../models/types";
import styles from "./SuggestContent.module.scss";

interface SuggestContentProps {
    suggestList: PersonSuggest[];
    filterKey: string
}

export default function SuggestContent({ suggestList, filterKey }: SuggestContentProps) {
    return (
        <div className={styles.container}>
            {suggestList.map(suggestion =>
                <div key={suggestion.personId}>
                    <label
                        className={styles.item}

                        htmlFor={`${suggestion.personId}`}
                    >
                        <img src={`https://kinopoiskapiunofficial.tech/images/actor_posters/kp/${suggestion.personId}.jpg`} width={20} alt="" />

                        {suggestion.nameRu}

                    </label>
                    <input type="radio" data-person-name={suggestion.nameRu} value={suggestion.personId} id={`${suggestion.personId}`} name={filterKey} />
                </div>
            )}
        </div>

    );
}