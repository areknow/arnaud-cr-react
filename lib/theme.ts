const head =
  typeof document !== "undefined"
    ? document.getElementsByTagName("head")[0]
    : null;

export const SetTheme = () => {
  if (typeof window !== "undefined") {
    let isDarkActive = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    changeFavicon(isDarkActive);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        isDarkActive = event.matches;
        changeFavicon(isDarkActive);
      });
  }
};

const changeFavicon = (state: boolean) => {
  var lightIcon = "/favicon-light.ico";
  var darkIcon = "/favicon-dark.ico";

  var link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");

  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = state ? darkIcon : lightIcon;

  if (oldLink) {
    head.removeChild(oldLink);
  }
  head.appendChild(link);
};
