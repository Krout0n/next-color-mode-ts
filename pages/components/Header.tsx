import React from "react";
import { useColorContext, ColorMode } from "../context/colorMode";
const Header = () => {
  const { color, setColor } = useColorContext();
  const colorModes: ColorMode[] = ["Dark", "Light", "Natural"];
  return (
    <header>
      <div> カラーモード: {color} </div>
      <div>
        <select
          defaultValue={color}
          // この as 結構危険なのでどうにかする
          onChange={(e) => {
            setColor(e.target.value as ColorMode);
          }}
        >
          {Object.entries(colorModes).map(([_, label]) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};
export default Header;
