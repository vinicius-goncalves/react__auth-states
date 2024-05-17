import background from '../assets/background.png';
import FormButton from '../components/form/FormButton';
import FormInput from '../components/form/FormInput';
import { useRef } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

function LoginPage(): JSX.Element {
    const formRef = useRef<HTMLFormElement | null>(null);
    const { user, setUserAuthStatus } = useAuth();

    if (user) {
        return <Navigate to="/user" />;
    }

    function logIn() {
        if (!formRef) {
            return;
        }

        const formData = new FormData(formRef.current as HTMLFormElement);

        const username = formData.get('username');
        const password = formData.get('password');

        if (username === 'admin' && password === 'admin') {
            setUserAuthStatus(true);
        }
    }

    return (
        <div className="bg-color3 min-h-screen w-full flex justify-center items-center">
            <form
                className="bg-white w-full max-w-3xl flex justify-between shadow-md max-lg:flex-col-reverse max-lg:max-w-96"
                ref={formRef}>
                <div className="p-16 min-w-96 max-lg:max-h-96 max-lg:p-8">
                    <header>
                        <h2 className="text-4xl font-bold">Welcome!</h2>
                        <small className="text-color0/60">
                            Login to see protected pages
                        </small>
                    </header>
                    <main>
                        <header className="w-full">
                            <FormInput
                                name="username"
                                title="Username"
                                briefing="What is your username?"
                                type="text"
                            />
                            <FormInput
                                name="password"
                                title="Password"
                                briefing="What is your password?"
                                type="password"
                            />
                        </header>
                        <footer className="text-center">
                            <FormButton
                                type="button"
                                title="Login"
                                className="max-w-80 p-2 my-3 font-[500]"
                                onClick={logIn}
                            />
                        </footer>
                    </main>
                </div>
                <img
                    src={background}
                    className="overflow-hidden object-cover w-auto h-auto max-lg:h-24"
                />
            </form>
        </div>
    );
}

export default LoginPage;
