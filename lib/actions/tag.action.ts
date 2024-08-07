"use server";

import Tag from "@/models/tags.model";
import { connectToDB } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared";
import User from "@/models/user.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDB();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // Find interactions for the user and group by Tags...

    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDB();

    const tags = await Tag.find({});

    return { tags };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
