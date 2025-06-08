"use client";

import { useState, useEffect } from "react";

export default function ColorPlate() {
  /*   1-й цвет = фирменный оттенок логотипа   */
  const colors = [
    "#9c4b8f", // Nek Dental Studio – основной
    "#1A76D1",
    "#2196F3",
    "#32B87D",
    "#FE754A",
    "#F82F56",
    "#01B2B7",
    "#6C5CE7",
    "#85BA46",
    "#273C75",
    "#FD7272",
    "#BADC58",
    "#44CE6F",
  ];

  /* по умолчанию сразу ставим фирменный */
  const [primaryColor, setPrimaryColor] = useState(colors[0]);

  /* пушим выбранный цвет в CSS-переменную */
  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  }, [primaryColor]);

  /* щёлк по кружку */
  const handleColorClick = (color) => setPrimaryColor(color);

  /* открыть/закрыть панель */
  const [optionsOpen, setOptionsOpen] = useState(false);
  const toggleOptions = () => setOptionsOpen(!optionsOpen);

  return (
    <div className={`color-plate${optionsOpen ? " active" : ""}`}>
      <div className="color-plate-icon" onClick={toggleOptions}>
        <i className="fa fa-cog fa-spin"></i>
      </div>

      <h4>Nek Dental Studio</h4>
      <p>Pick a color to instantly preview the theme.</p>

      {colors.map((color, idx) => (
        <ColorOption key={idx} color={color} onClick={handleColorClick} />
      ))}
    </div>
  );
}

const ColorOption = ({ color, onClick }) => (
  <div
    className="color-option"
    style={{ backgroundColor: color }}
    onClick={() => onClick(color)}
  />
);
