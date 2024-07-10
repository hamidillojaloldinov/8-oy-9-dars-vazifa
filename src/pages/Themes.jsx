import { useEffect, useState } from "react";

function Themes() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "winter"
  );

  const handleToggle = (e) => {
    setTheme((prevTheme) => (e));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  const themes = [
    "default",
    "dark",
    "sunset",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "luxury",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "dracula",
    "cmyk",
    "autumn",
    "fantasy",
    "wireframe",
    "black",
  ];

  const [currentTheme, setCurrentTheme] = useState("default");
  function themeChanger(theme) {
    const root = document.documentElement;
    const attribute = "data-theme";
    root.setAttribute(attribute, theme);
    setCurrentTheme(() => theme);
    handleToggle(theme)
  }
  return (
    <div className="pt-20 px-20">
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 sm:grid-cols-2">
        {themes
          ? themes.map((theme, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={() => themeChanger(theme)}
                    className={`${
                      currentTheme == theme && "btn-neutral"
                    } btn w-full`}
                  >
                    {theme}
                  </button>
                </li>
              );
            })
          : "Loading..."}
      </ul>
    </div>
  );
}

export default Themes;
