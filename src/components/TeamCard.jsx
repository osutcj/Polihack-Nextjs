import { InstagramOutlined, FacebookFilled } from "@ant-design/icons";

export default function TeamCard({ name, role, image, instagram, facebook }) {
  return (
    <div className="card w-100 mb-4 p-3 text-white center team-card">
      <div className="image-circle">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="placeholder-avatar" style={{ width: '100%', height: '100%', backgroundColor: '#444', borderRadius: '50%' }}></div>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title text-center mt-2">{name}</h3>
        <p className="card-text text-center">{role}</p>
        <div className="d-flex justify-content-center">
          <a href={instagram} target="_blank" rel="noopener noreferrer" className="team-instagram">
            <InstagramOutlined />
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer" className="team-facebook">
            <FacebookFilled />
          </a>
        </div>
      </div>
    </div>
  );
}
