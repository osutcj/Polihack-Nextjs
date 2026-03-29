import * as AntIcons from "@ant-design/icons";

export default function CategoryCard({ title, description, icon }) {
  const IconComponent = icon ? AntIcons[icon] : null;

  return (
    <>
      <div className="card w-100 mb-4 bg-dark text-white">
        <div className="card-body">
          <h3 className="card-title">
            {title} {IconComponent && <IconComponent className="m-2"/>}
          </h3>
          <p className="card-text">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
