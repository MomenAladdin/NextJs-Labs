import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request) {
  // const client = await clientPromise;
  // const db = client.db();
  // const id = request.nextUrl.searchParams.id;
  // if (id) {
  //   // Fetch a single post by ID
  //   try {
  //     const post = await db
  //       .collection("posts")
  //       .findOne({ _id: new ObjectId(id) });
  //     if (post) {
  //       return new Response(JSON.stringify(post), { status: 200 });
  //     } else {
  //       return new Response("Post not found", { status: 404 });
  //     }
  //   } catch (error) {
  //     return new Response("Invalid ID format", { status: 400 });
  //   }
  // } else {
  //   // Fetch all posts
  //   const news = await db.collection("posts").find({}).toArray();
  //   return new Response(JSON.stringify(news), { status: 200 });
  // }
}

export async function POST(request) {
  // const data = await request.json();
  // const client = await clientPromise;
  // const db = client.db();
  // await db.collection("posts").insertOne(data);
  // return new Response("success", { status: 201 });
}
