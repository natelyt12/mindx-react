const Card = ({ personName, className, desc }) => {
  return (
    <div className="card">
      <p>Tôi tên: {personName}</p>
      <p>Học lớp: {className}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
