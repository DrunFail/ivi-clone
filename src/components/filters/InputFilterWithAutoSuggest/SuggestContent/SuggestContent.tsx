import { PersonSuggest } from "../../../../models/types";
import styles from "./SuggestContent.module.scss";

interface SuggestContentProps {
    suggestList: PersonSuggest[];
    handler: (suggestion:PersonSuggest) => void
}

export default function SuggestContent({ suggestList, handler }: SuggestContentProps) {
    return (
        <div className={styles.container }>
            {suggestList.map(suggestion =>
                <div
                    className={styles.item +
                        (suggestList.length === 2 ? " " + styles.dropdownItem_twoItem : "") +
                        (suggestList.length === 1 ? " " + styles.dropdownItem_oneItem : "")
                    }
                    key={suggestion.personId}
                    data-person-id={suggestion.personId}
                    onClick={() => handler(suggestion)}
                >
                    <img src={`https://kinopoiskapiunofficial.tech/images/actor_posters/kp/${suggestion.personId}.jpg`} width={20 } />

                    {suggestion.nameRu}
                </div>
            )}
        </div>
    
    );
}