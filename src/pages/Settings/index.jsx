import React, { useState } from "react";
import Header from "../../components/Header";
import InputSetting from "../../components/InputSetting";
import Box from "../../components/Box";
import MyColorPicker from "../../components/MyColorPicker";
// import { ColorPicker } from "react-color-palette";
// import { Link } from "react-router-dom";

function Settings({ setGroups }) {
  const [colors, setColors] = useState([]);

  const handleAddColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const handleAddGroup = () => {
    if (colors.length >= 6) {
      const group = [...colors];
      setColors([]);
      setGroups((prevGroups) => [...prevGroups, group]);
    }
  };

  return (
    <>
      <Header />
      <h4 className="flex pt-10 pb-10">Settings Page</h4>
      <InputSetting
        onAddColor={handleAddColor}
        onAddGroup={handleAddGroup}
        colors={colors}
      />
      <Box colors={colors} />
      <MyColorPicker />
    </>
  );
}

export default Settings;
