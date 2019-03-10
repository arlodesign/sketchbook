export default path =>
  path
    .replace("/sketch/", "")
    .replace(/\/$/, "")
    .replace(/\//g, "-");
