import { notFound } from "next/navigation";

// Function to fetch all games
const fetchAllGames = async () => {
  try {
    const response = await fetch("https://www.freetogame.com/api/games");
    if (!response.ok) throw new Error("Failed to fetch games");
    const games = await response.json();
    return games;
  } catch (error) {
    console.error("Error fetching all games:", error);
    return [];
  }
};

// Function to fetch a game by ID
const fetchGameById = async (id) => {
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

const GamePage = async ({ params }) => {
  const currentGameId = parseInt(params.id);

  // Fetch the game by ID
  const game = await fetchGameById(currentGameId);
  if (!game) {
    return notFound();
  }

  // Fetch all games for navigation
  const games = await fetchAllGames();
  const currentIndex = games.findIndex((g) => g.id === currentGameId);

  const previousGameId = currentIndex > 0 ? games[currentIndex - 1].id : null;
  const nextGameId =
    currentIndex < games.length - 1 ? games[currentIndex + 1].id : null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={game.thumbnail} alt={game.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{game.title}</div>
          <p className="text-gray-700 text-base">{game.short_description}</p>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <a
          href={previousGameId ? `/explore/${previousGameId}` : "#"}
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600  ${
            !previousGameId && "opacity-50 cursor-not-allowed"
          }`}
        >
          Previous
        </a>
        <a
          href={nextGameId ? `/explore/${nextGameId}` : "#"}
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ms-5 ${
            !nextGameId && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default GamePage;
