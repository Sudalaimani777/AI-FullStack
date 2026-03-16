import "./UserCard.css";

const UserCard = ({ userData = {} }) => {
  const { name, age, email, avatarUrl } = userData;

  return (
    <section className="user-card">
      <img className="user-card__avatar" src={avatarUrl} alt={name || "Profile"} />
      <div>
        <p className="user-card__name">{name}</p>
        <p className="user-card__meta">Age: {age}</p>
        <p className="user-card__meta">Email: {email}</p>
      </div>
    </section>
  );
};

export default UserCard;