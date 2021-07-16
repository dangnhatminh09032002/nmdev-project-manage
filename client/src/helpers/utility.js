export function getView(width) {
  width = parseInt(width);
  let newView = "mobileView";
  if (width > 1220) {
    newView = "desktopView";
  } else if (width > 767) {
    newView = "tabView";
  }
  return newView;
}
