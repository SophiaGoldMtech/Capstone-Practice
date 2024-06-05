export default function Course({ title, image, label, description }) {
  return (
    <div className="course--card">
      <div className="course--image-container">
        <img src={image} alt="" className="course--img" />
        <div className="course--title">{title}</div>
        <div className="course--label">{label}</div>
      </div>
      <div className="course--info">
        <div className="course--description">{description}</div>
        <button className="course--enroll-btn btn btn-outline-warning">
          ENROLL NOW
        </button>
      </div>
    </div>
  );
}
