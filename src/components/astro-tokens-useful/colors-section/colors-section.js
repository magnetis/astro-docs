import React from "react";
import * as colors from "@magnetis/astro-tokens/lib/colors/index.js";

const DARK_TEXT_COLOR = "#212121";
const LIGHT_TEXT_COLOR = "#ffffff";

function mapColors(colors) {
  const result = Object.keys(colors).reduce((acc, color) => {
    const fragments = color.replace(/([a-z])([A-Z])/g, "$1 $2").split(" ");
    const key = fragments[1].toLowerCase();

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push({
      name: `${fragments[0]} ${fragments[2]}`.toUpperCase(),
      intensity: fragments[2].toLowerCase(),
      type: fragments[0].toLowerCase(),
      value: colors[color].toUpperCase(),
    });

    return acc;
  }, {});

  console.log(result);

  return result;
}

function rgbaToDec(rgba) {
  return rgba
    .replace("RGBA(", "")
    .replace(")", "")
    .split(",")
    .map((value) => value.trim());
}

function hexToRgb(hex) {
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return [r, g, b];
}

function getTextColor(bgColor) {
  if (!bgColor.includes("#")) {
    const [r, g, b, a] = rgbaToDec(bgColor);

    if ((r === "255" && g === "255" && b === "255") || a < 0.6) {
      return DARK_TEXT_COLOR;
    }

    return LIGHT_TEXT_COLOR;
  }

  const [r, g, b] = hexToRgb(bgColor.substring(1, 7));

  return r * 0.299 + g * 0.587 + b * 0.114 > 186
    ? DARK_TEXT_COLOR
    : LIGHT_TEXT_COLOR;
}

export default function ColorsSection({ section }) {
  const group = mapColors(colors)[section];

  return group.map((color) => (
    <>
      <div
        style={{
          padding: "12px",
          width: "100%",
          border: "1px solid #e3e3e3",
          marginBottom: "4px",
          backgroundColor: color.value,
          color: getTextColor(color.value),
          fontSize: "12px",
          borderRadius: "5px",
        }}
      >
        {color.name} - {color.value}
      </div>
    </>
  ));
}
