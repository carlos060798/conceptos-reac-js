
type buttonType = {
    title: string;
    onClick: () => void;
}
function ButtonType({ title, onClick }: buttonType) {
    return (
        <button onClick={onClick}>{title}</button>
    );
}

export default ButtonType;