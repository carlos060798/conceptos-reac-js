  
export default function RenderList({ data }) {
    return (
        <div>

            {data.map((item, index) => (
                <div key={index}>
                    <p> nombre{item.name}
                    </p>
                    <p style={
                        !item.agotado ? { color: 'red' } : { color: 'green' }
                    }>precio{item.price}</p></div>
            ))}

        </div>
    );
}