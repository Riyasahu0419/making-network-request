export default function Datadisplay({id, title, body}) {
    if (!id) return null
    return (
      <div id={id}>
        <h2>Title: {title}</h2>
        <p>Body: {body}</p>
      </div>
    );
}