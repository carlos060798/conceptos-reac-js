
export default function  EventosButton() {
    const holaMundo = () => {
        alert('Hola me diste click')
    }

    return (
        <div>
            <h2>Eventos</h2>
            <button onClick={holaMundo}>Click</button>
        </div>
    )
}