import { FaStar } from "react-icons/fa";
import { Provider } from "react-redux";
import store from "../../../../../store/createStore";
import ButtonWithHint from "../../../../UI/ButtonWithHint/ButtonWithHint";
import WrapperIntl from "../../../../WrapperIntl/WrapperIntl";

export default function ButtonRateWithHint() {
    return (
        <Provider store={store}>
            <WrapperIntl>
                <ButtonWithHint description="button.hint.rate">
                    <FaStar color="white" />
                </ButtonWithHint>
            </WrapperIntl>
        </Provider>
    );
}
