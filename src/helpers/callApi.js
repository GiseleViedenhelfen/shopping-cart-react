export async function fetchApi() {
  const endpoint = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
  const data = await fetch(endpoint);
  const response = await data.json();
  return response;
}