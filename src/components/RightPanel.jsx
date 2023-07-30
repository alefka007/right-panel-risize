import { useEffect, useState } from "react";
import "./RightPanel.css";
import RightPanelButtons from "./RightPanelButton";
import RightComponent1 from "./RightComponent1";
import RightComponent2 from "./RightComponent2";
import RightComponent3 from "./RightComponent3";

const itemMap = [
  { id: "component1", component: <RightComponent1 /> },
  { id: "component2", component: <RightComponent2 /> },
  { id: "component3", component: <RightComponent3 /> },
];

const RightPanel = () => {
  const [active, setActive] = useState(false);
  const [activeComponent, setActiveComponent] = useState({
    component1: false,
    component2: false,
    component3: false,
  });

  useEffect(() => {
    if (
      !activeComponent.component1 &&
      !activeComponent.component2 &&
      !activeComponent.component3
    ) {
      setActive(false);
    }
  }, [activeComponent]);

  return (
    <div
      className={!active ? "rightPanel" : "rightPanel" + " rightPanelActive"}
    >
      <RightPanelButtons
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
        active={active}
        setActive={setActive}
      />
      <div className="rightPanelComponents">
      {itemMap.map(
        (item) =>
          activeComponent[item.id] &&
          active && <span key={item.id}>{item.component}</span>
      )}
      </div>
    </div>
  );
};

export default RightPanel;
