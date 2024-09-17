import MissionAction from "./MissionAction";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import { useState } from "react";
import "./MissionControl.css";

const MissionControl = ({ initialMission }) => {
  const defaultFilter = "All";

  const [mission, setMission] = useState(initialMission);
  const [filter, setFilter] = useState(defaultFilter);

  function updateMissionStatus(id, newStatus) {
    setMission(
      (prevMission) =>
        prevMission.map((mission) =>
          mission.id === id ? { ...mission, status: newStatus } : mission
        ) // if prev mission state id is equal to current id update status of mission else return current mission state
    );
  }

  const filteredMissions = mission.filter(
    (mission) => filter === "All" || mission.status === filter
  ); // Displayes the mission data that has been filtered, by deafult does not filter. Displaying all data.

  return (
    <div>
      <h1>Space Mission Control</h1>

      <div>
        <MissionFilter setFilter={setFilter} />{" "}
        {/* changes filter based on button clicked */}
      </div>

      {filteredMissions.map((mission) => {
        const { id, name, status, crew } = mission;

        return (
          <div key={id} className="card">
            <div>
              <MissionCard name={name} status={status} crew={crew} />
            </div>

            <div className="action">
              <MissionAction
                missionId={id}
                updateStatus={updateMissionStatus}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MissionControl;
