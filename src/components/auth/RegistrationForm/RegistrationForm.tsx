import InputErrorBlock from "../components/InputErrorBlock/InputErrorBlock";
import FormAuth from "../components/FormAuth/FormAuth";
import useRegistration from "../hooks/useRegistration";
import TextFieldWithLabel from "../../UI/TextFieldWithLabel/TextFieldWithLabel";
export default function RegistrationForm() {
    const {
        handleSubmitRegistration,
        password,
        setInputPwd,
        email,
        emailValid,
        setInputEmail,
        passwordValid,
        confirmPwd,
        confirmPwdValid,
        setInputConfirmPwd,
        error
    } = useRegistration();
    return (
        <FormAuth error={error} handleSubmit={handleSubmitRegistration}>
            <TextFieldWithLabel
                id="email"
                name="email"
                type="email"
                labelText="Введите e-mail"
                value={email}
                onChange={setInputEmail}
            />
            <div>
                <TextFieldWithLabel
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={setInputPwd}
                    labelText="Введите пароль"
                />
                {!passwordValid && <InputErrorBlock error={"Пароль должен содержать от 4 до 16 символов"} />}
            </div>
            <TextFieldWithLabel
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPwd}
                onChange={setInputConfirmPwd}
                labelText="Подтвердите пароль"
            />

        </FormAuth>

    );
}