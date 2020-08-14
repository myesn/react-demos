export function httpGet(url) {
  const result = fetch(url);
  return result;
}

export function httpPost(url, params) {
  const result = fetch(url, {
    method: 'post',
    body: JSON.stringify(params),
  });
  return result;
}
