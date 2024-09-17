const MissionCard = ({ name, status, crew }) => {
  return (
    <>
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Crew: {crew.join(", ")}</p>
    </>
  );
};

export default MissionCard;
