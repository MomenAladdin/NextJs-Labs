export const fetchAllGames = async () => {
  try {
    const response = await fetch("https://www.freetogame.com/api/games");
    const games = await response.json();
    return games;
  } catch (error) {
    console.error("Error fetching all games:", error);
    return [];
  }
};
