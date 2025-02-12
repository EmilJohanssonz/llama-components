type  UserCardProps = {
  name:string;
  age: number;
  location: string;
  jobbTitle: string;
};

const UserCard = ({ name, age, location, jobbTitle}: UserCardProps) => {
  return (
    <section className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>{jobbTitle}</p>
    </section>
  );
};

export default UserCard