const API_URL = 'http://localhost:3030';

export const getUser = async () => {
  const response = await fetch(`${API_URL}/user`);
  const data = await response.json();
  return data;
}

export const start = async () => {
  const response = await fetch(`${API_URL}/start`);
  const data = await response.json();
  return data;
}

export const getQuestion = async (questionId) => {
  const response = await fetch(`${API_URL}/questions/${questionId}`);
  const data = await response.json();
  return data;
}
export const getAnswer = async (questionId) => {
  const response = await fetch(`${API_URL}/answers/${questionId}`);
  const data = await response.json();
  return data;
}