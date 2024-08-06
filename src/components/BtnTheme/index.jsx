import React from "react";
import {MdOutlineNightlight, MdOutlineWbSunny} from "react-icons/md";
import {BtnThemeContainer} from "./BtnTheme";
import {useThemeContext} from "../../hooks/themeHook/themeHook.js";
const BtnTheme = () => {
  const {dark, toggleTheme} = useThemeContext();

  return (
    <BtnThemeContainer onClick={toggleTheme}>
      {dark && <MdOutlineWbSunny size={22} />}
      {!dark && <MdOutlineNightlight size={22} />}
    </BtnThemeContainer>
  );
};

export default BtnTheme;
