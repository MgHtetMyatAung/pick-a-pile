import { NextResponse } from "next/server";
import answers from "@/app/json/answers_data.json";

export async function GET() {
  return await NextResponse.json(answers);
}
