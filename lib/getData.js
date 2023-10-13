export async function getData(urlPath) {
  const res = await fetch(`https://pick-a-pile.vercel.app/api/${urlPath}`);
  return res.json();
}
