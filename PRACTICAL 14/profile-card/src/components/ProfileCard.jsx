import './ProfileCard.css';

function ProfileCard({ name, photo, bio }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <img src={photo} alt={`${name}'s profile`} />
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;