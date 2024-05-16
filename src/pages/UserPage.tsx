import useAuth from '../hooks/useAuth';

function UserPage(): JSX.Element {
    const { user } = useAuth();

    return (
        <div>
            <p className="text-center">You are {user && 'logged in'}!</p>
        </div>
    );
}

export default UserPage;
