import { NextResponse } from "next/server";
import questions from "@/app/json/questions_data.json";

export async function GET() {
  return await NextResponse.json(questions);
}
