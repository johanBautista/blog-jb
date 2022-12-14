import React, { useEffect, useState } from "react";

type Theme = "dark" | "light";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const Switch = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const handleChange = (e: ChangeEvent) => setTheme(e.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container">
      <span>Theme</span>
      <label htmlFor="checkbox" className="switch">
        <input type="checkbox" id="checkbox" onChange={handleChange} checked={theme === "dark"} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
