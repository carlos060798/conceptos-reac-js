
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
export default function Image() {
  return (
    <div>
      <img src={user.imageUrl} alt={user.name} width={user.imageSize} />
      <h3>{user.name}</h3>
    </div>
  );
}