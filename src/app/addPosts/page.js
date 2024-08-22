import React from "react";
import { v2 as cloudinary } from "cloudinary";
import clientPromise from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

cloudinary.config({
  cloud_name: "dabhquykv",
  api_key: "584865414158468",
  api_secret: "a94oz8aWAKVLtgcJh9DjQ1hQuwo",
});

const AddPost = () => {
  const create = async (formData) => {
    "use server";

    // const file = formData.get("image");
    // const arrayBuffer = await file.arrayBuffer();
    // const buffer = new Uint8Array(arrayBuffer);

    // const imageRes = await new Promise((resolve, reject) => {
    //   cloudinary.uploader
    //     .upload_stream(
    //       { tags: ["nextjs-server-actions-upload-sneakers"] },
    //       function (error, result) {
    //         if (error) {
    //           reject(error);
    //           return;
    //         }
    //         resolve(result);
    //       }
    //     )
    //     .end(buffer);
    // });

    // const name = formData.get("name");
    // const description = formData.get("description");
    // const client = await clientPromise;
    // const db = client.db();
    // await db
    //   .collection("posts")
    //   .insertOne({ name, description, imageSrc: imageRes.url });

    // revalidatePath("/posts");
    // redirect("/notes");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        action={create}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Add a New Post
        </h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter the post name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter the description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-gray-700 font-medium mb-2"
          >
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="w-full text-gray-700"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
