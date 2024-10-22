import "./MissionFilter.css";

const MissionFilter = ({ setFilter }) => {
  const statuses = ["All", "Planned", "Active", "Complete"];

  return (
    <>
      {statuses.map((status, index) => (
        <button
          key={index}
          onClick={() => setFilter(status)}
          className="buttonFilters"
        >
          {status}
        </button>
      ))}
    </>
  );
};
export default MissionFilter;
