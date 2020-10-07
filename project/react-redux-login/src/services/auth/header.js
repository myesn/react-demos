export default function header() {
  const token = localStorage.getItem('token');

  if (!token) return {};

  return { Authorization: 'Bearer ' + token };
}
