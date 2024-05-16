import { useRouteError } from 'react-router-dom';

function ErrorPage(): JSX.Element {
    const error = useRouteError();

    console.log(error);

    return (
        <div>
            <h1>This is the error page!</h1>
            <p>{error.status}</p>
        </div>
    );
}

export default ErrorPage;
