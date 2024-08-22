export const fetchGameById = async (id) => {
  try {
    const response = await fetch("https://www.freetogame.com/api/games");
    const games = await response.json();
    const game = games.find((g) => g.id === id);
    return game;
  } catch (error) {
    console.error("Error fetching game by ID:", error);
    return null;
  }
};
