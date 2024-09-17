import "./MissionAction.css";

const MissionAction = ({ missionId, updateStatus }) => {
  return (
    <>
      <button
        className="actionButton"
        onClick={() => updateStatus(missionId, "Active")}
      >
        Launch
      </button>
      <button
        className="actionButton"
        onClick={() => updateStatus(missionId, "Completed")}
      >
        {" "}
        complete
      </button>
    </>
  );
};

export default MissionAction;
