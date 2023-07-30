import React from "react";

const RightPanelButtons = ({
  setActive,
  active,
  setActiveComponent,
  activeComponent,
}) => {
  const onClick = (e) => {
    onChangeActiveComponent(e.target.id);
    !active && setActive(!active);
  };

  const onChangeActiveComponent = (id) => {
    setActiveComponent({
      ...activeComponent,
      [id]: !activeComponent[id],
    });
  };

  return (
    <div className="rightPanelButtons">
      <button id={"component1"} onClick={onClick}>
        Button1
      </button>
      <button id={"component2"} onClick={onClick}>
        Button2
      </button>
      <button id={"component3"} onClick={onClick}>
        Button3
      </button>
    </div>
  );
};

export default RightPanelButtons;
