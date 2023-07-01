import FormAuth from "../components/FormAuth/FormAuth";
import InputField from "../components/InputField/InputField";
import useLogin from "../hooks/useLogin";

export default function LoginForm() {
    const {
        email,
        password,
        error,
        handleSignInCredentials,
        setInputEmail,
        setInputPassword
    } = useLogin();

    return (
        <FormAuth error={error} handleSubmit={handleSignInCredentials}>
            <InputField
                placeholder="Введите e-mail"
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={setInputEmail}
            />
            <InputField
                placeholder="Введите пароль"
                value={password}
                type="password"
                id="password"
                name="password"
                onChange={setInputPassword}
            />

        </FormAuth>
    );
}