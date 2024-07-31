"use server";

import Question from "@/models/question.model";
import { connectToDB } from "../mongoose";
import { CreateQuestionParams, GetQuestionsParams } from "./shared";
import Tag from "@/models/tags.model";
import User from "@/models/user.model";
import { revalidatePath } from "next/cache";

export async function getQuestions({
  page,
  pageSize,
  searchQuery,
  filter,
}: GetQuestionsParams) {
  try {
    connectToDB();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDB();

    const { title, content, tags, author, path } = params;

    // create the question

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    // create the Tags

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    // update the question

    await Question.findByIdAndUpdate(question._id, {
      $push: {
        tags: { $each: tagDocuments },
      },
    });

    // create an interactin record for the user's ask_question action

    // increment author's reputation by +5 points for creating a question

    revalidatePath(path);
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
