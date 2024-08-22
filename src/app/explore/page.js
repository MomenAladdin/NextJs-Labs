import Card from "./components/Card";

const explore = async () => {
  const gamesData = await fetch("https://www.freetogame.com/api/games");
  const games = await gamesData.json();

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {games.map((game) => (
        <Card
          key={game.id}
          title={game.title}
          image={game.thumbnail}
          description={game.short_description}
          id={game.id}
        />
      ))}
    </div>
  );
};

export default explore;
