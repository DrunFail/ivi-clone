import InputField from "../components/InputField/InputField";
import InputErrorBlock from "../components/InputErrorBlock/InputErrorBlock";
import FormAuth from "../components/FormAuth/FormAuth";
import useRegistration from "../hooks/useRegistration";
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
            <InputField
                valid={emailValid}
                autoComplete="off"
                placeholder="Введите e-mail"
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={setInputEmail}

            />
            <div>
                <InputField
                    valid={passwordValid}
                    placeholder="Введите пароль"
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    onChange={setInputPwd}
                />
                {!passwordValid && <InputErrorBlock error={"Пароль должен содержать от 4 до 16 символов"} />}
            </div>
            <InputField
                valid={confirmPwdValid}
                placeholder="Подтвердите пароль"
                value={confirmPwd}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                onChange={setInputConfirmPwd}
            />

        </FormAuth>

    );
}