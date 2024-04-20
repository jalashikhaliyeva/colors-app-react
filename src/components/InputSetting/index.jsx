import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

function InputSetting({ onAddColor, colors, onAddGroup }) {
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [colorGroup, setColorGroup] = useState([]);
  

  const toast = useToast();

  const handleColorNameChange = (event) => {
    setColorName(event.target.value);
    console.log(event.target.value);
  };

  const handleColorCodeChange = (event) => {
    setColorCode(event.target.value);
    console.log(event.target.value);
  };
  const clearSettings = () => {
    setColorName("");
    setColorCode("");
  };

  const handleAddColorClick = () => {
    if (colorName.trim() === "" || colorCode.trim() === "") {
        toast({
            title: "Error",
            description: "Please fill in both color name and color code.",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
    } else if (!colorCode.trim().startsWith("#")) {
        toast({
            title: "Error",
            description: "Color code must start with #.",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
    } else if (colors.length >= 6) {
        if (colors.length === 5) {
            setColorGroup([...colors, { name: colorName, code: colorCode }]);
          


        }
        toast({
            title: "Error",
            description: "There cannot be more than 6 boxes.",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
    } else {
        onAddColor({ name: colorName, code: colorCode });

        // Call the parent component's onAddColor function to update Box component's state
        // onAddColor({ name: colorName, code: colorCode });

        // Reset inputs
        setColorName("");
        setColorCode("");
        if (colors.length % 6 === 0) {
            // If the number of colors is a multiple of 6, clear settings
            clearSettings();
        }
    }
};


const handleAddGroupClick = () => {
  const group = onAddGroup();
  if (colors?.length >= 4) {
      // Show success toast if group is added
      toast({
        title: "Success",
        description: "Group added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
    });
  } else  {
      toast({
          title: "Error",
          description: "There cannot be less than 6 boxes for group.",
          status: "error",
          duration: 5000,
          isClosable: true,
      });
  }
};


  return (
    <>
      <div className="pb-6">
        <label
          className="flex pb-2 text-sm font-medium leading-6 text-gray-900"
          htmlFor="colorName"
        >
          Color Name
        </label>
        <input
          type="text"
          name="colorName"
          id="colorName"
          value={colorName}
          onChange={handleColorNameChange}
          className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6 outline-stone-200 w-80"
          placeholder="enter color name ... "
        />
      </div>
      <div className="pb-6">
        <label
          className="flex pb-2  text-sm font-medium leading-6 text-gray-900"
          htmlFor="colorCode"
        >
          Color Code
        </label>
        <input
          type="text"
          name="colorCode"
          id="colorCode"
          value={colorCode}
          onChange={handleColorCodeChange}
          className="block w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm sm:leading-6 outline-stone-200"
          placeholder="enter color code ... "
        />
      </div>
      <button
        onClick={handleAddColorClick}
        className="flex rounded-md bg-stone-400 p-2"
      >
        Add Color
      </button>

      <button
        onClick={handleAddGroupClick}
        className="flex rounded-md bg-emerald-200 p-2 mb- mt-8"
      >
        Add group
      </button>
    </>
  );
}

export default InputSetting;
