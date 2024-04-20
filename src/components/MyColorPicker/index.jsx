import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

function MyColorPicker() {
    const [color, setColor] = useState("lightblue");
    const [hidden, setHidden] = useState(true); // Initially hidden

  const pickerStyle = {
    default: {
      picker: {
        position: "absolute",
        // bottom: "50px",
        top: "350px" ,
        // left: "100px",
        right: "320px",
        transform: "translateY(-50%)",
        // width: "550px"

      }
    },
    hidden: {
      picker: {
        display: "none" // Hide the color picker
      }
    }
  };
  const toggleColorPicker = () => {
    setHidden(!hidden); // Toggle the visibility of the color picker
  };

  const handleColorChange = (updatedColor) => {
    setColor(updatedColor.hex);
  };

  return (
   <>

<button className="flex rounded-md bg-stone-400 p-2" style={{ position: 'absolute', top: '30%', right: '360px', transform: 'translateY(-50%)', zIndex: '2' }} onClick={toggleColorPicker}>
        {hidden ? "Open Color Picker" : "Close Color Picker"}
      </button>
      <div style={hidden ? pickerStyle.hidden.picker : pickerStyle.default.picker}>
        {!hidden && (
          <SketchPicker
            color={color}
            onChange={handleColorChange}
          />
        )}
      </div>
   </>
  )
}

export default MyColorPicker