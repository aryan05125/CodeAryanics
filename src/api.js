const baseUrl = "https://codearyanicsback.onrender.com";

export const sendMessage = async (data) => {
  const response = await fetch(`${baseUrl}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return response.json();
};
