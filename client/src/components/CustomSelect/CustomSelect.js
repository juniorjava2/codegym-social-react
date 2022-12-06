import React, { useState } from "react";
import { Select } from "./CustomSelectStyle";

export const CustomSelect = (props) => {
  // const [data] = useState(props.data);
  // const [selectedData, updateSelectedData] = useState("");

  // function handleChange(event) {
  //   updateSelectedData(event.target.value);
  //   if (props.onSelectChange) props.onSelectChange(selectedData);
  //   console.log(event.target.value);
  // }

  // let options = data.map((data) => (
  //   <option key={data.id} value={data.name}>
  //     {data.name}
  //   </option>
  // ));

  return (
    <Select>
      <select>
        <option value="0">Select Spaces:</option>
        <option value="1"> Android</option>
        <option value="2"> React Native</option>
        <option value="3"> Flutter</option>
        <option value="4"> Chess</option>
      </select>
      <div className="span-arrow">
        <span className="triangle-up"></span>
        <span className="triangle-down"></span>
      </div>
    </Select>
  );
};
