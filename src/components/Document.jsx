function Document({ title, source, image }) {
  return (
    <div className="document-container w-100">
      <a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="document-link"
      >
        <h1 className="document-title">{title}</h1>
        <img src={image} className="cover-image image-fluid" alt="Document" />
      </a>
    </div>
  );
}

export default Document;
