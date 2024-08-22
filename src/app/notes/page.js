import clientPromise from "./../../lib/mongodb";

const MyNotes = async () => {
  const client = await clientPromise;
  const db = client.db("myNotes");
  const notesCollection = db.collection("posts");
  const notes = await notesCollection.find({}).toArray();

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100">
      {notes.map((note) => (
        <div
          key={note._id}
          className="w-full max-w-md p-4 bg-white shadow-md rounded-md"
        >
          <img
            src={note.img}
            alt={note.name}
            className="w-full h-64 object-cover rounded-md"
          />

          <h2 className="text-2xl font-semibold">{note.title}</h2>
          <p className="text-lg font-semibold">{note.name}</p>
          <p className="text-gray-700">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MyNotes;
