import React from "react";
import { useColorContext, ColorMode } from "../context/colorMode";
const Footer = () => {
  const { color, setColor } = useColorContext();
  const colorModes: ColorMode[] = ["Dark", "Light", "Natural"];
  return (
    <footer>
      <div> カラーモード: {color} </div>
      <div>
        <select
          defaultValue={color}
          onChange={(e) => setColor(e.target.value as ColorMode)}
        >
          {Object.entries(colorModes).map(([_, label]) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </footer>
  );
};
export default Footer;
