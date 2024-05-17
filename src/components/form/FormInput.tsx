interface IFormInput {
    title: string;
    briefing: string;
    type: React.HTMLInputTypeAttribute;
    name?: string;
    required?: boolean;
    ref?: React.Ref<HTMLInputElement>;
}

function FormInput({
    title,
    briefing,
    type,
    name,
    required,
    ref,
}: IFormInput): JSX.Element {
    return (
        <label className="flex flex-col my-4">
            <div className="flex flex-col my-1">
                <span className="font-bold text-lg -my-1">{title}</span>
                <small className="text-gray-500/80"> {briefing}</small>
            </div>
            <input
                type={type}
                className="focus:outline-none focus:border-gray-500/60 p-1 rounded-md border border-gray-500/35"
                required={required}
                ref={ref}
                name={name}
            />
        </label>
    );
}

export default FormInput;
