const MissionAction = ({ missionId, updateStatus }) => {
  return (
    <>
      <button onClick={() => updateStatus(missionId, "Active")}>Launch</button>
      <button onClick={() => updateStatus(missionId, "Completed")}>
        {" "}
        complete
      </button>
    </>
  );
};

export default MissionAction;
