import React, { useState, createContext, useContext } from "react";

export type ColorMode = "Light" | "Natural" | "Dark";

type IColorContext = {
  color: ColorMode;
  setColor: (color: ColorMode) => void;
};

const ColorContext = createContext<IColorContext>({
  color: "Light",
  setColor: () => {},
});

export const useColorContext = () => useContext(ColorContext);
export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState<ColorMode>("Light");
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
