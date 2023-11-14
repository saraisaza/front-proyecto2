
export const DeleteFb = ({ idDelete2 }) => {
    console.log(idDelete2)
  const handleDelete = async (event) => {
    event.preventDefault();
    const request = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      const url = new URL('http://localhost:4000/api/v1/server/delete')
      url.search = new URLSearchParams({id: idDelete2}).toString();
      const response = await fetch(url, request);
      if (response.status === 200) {
        console.log('Notification deleted successfully');
      } else {
        console.log(`Server responded with status ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="formulario">
      <form onSubmit={handleDelete}>
        <button2 className="si" type="submit">Eliminar</button2>
      </form>
    </div>
  );
};
