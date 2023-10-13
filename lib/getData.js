export async function getData(urlPath) {
  const res = await fetch(`http://localhost:3000/api/${urlPath}`);
  return res.json();
}
