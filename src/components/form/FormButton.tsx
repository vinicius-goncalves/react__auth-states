interface IFormButton {
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    title: string;
    className: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

function FormButton({
    type,
    title,
    className,
    onClick,
    children,
}: IFormButton): JSX.Element {
    return (
        <button
            type={type}
            className={`hover:bg-purple-500 bg-color0 w-full text-white rounded-md ${className}`}
            onClick={onClick}>
            <span>{title}</span>
            {children}
        </button>
    );
}

export default FormButton;
