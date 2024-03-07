import TextFieldWithLabel from "../../UI/TextFieldWithLabel/TextFieldWithLabel";
import FormAuth from "../components/FormAuth/FormAuth";
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
            <TextFieldWithLabel
                labelText="Введите e-mail"
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={setInputEmail }
            />

            <TextFieldWithLabel
                labelText="Введите пароль"
                id="password"
                value={password}
                type="password"
                name="password"
                onChange={setInputPassword }
            />

        </FormAuth>
    );
}