import { Button } from "@/components/ui/button";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function NestDetail({ params }) {
  const answerDatas = await getData("answers");
  const arr = params.slug.split("-");
  const answer = answerDatas.answers.find((ans) => ans.AnswerId == arr[0]);
  return (
    <section className=" py-5">
      <div className="container mx-auto">
        <Button>
          <Link href={"/"}>Back</Link>
        </Button>
        <div className=" flex flex-col lg:flex-row mt-5">
          <div className=" lg:w-1/3">
            <Image
              src={`/articles/${answer.QuestionId}/${arr[1]}.jpg`}
              alt={answer.AnswerName}
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "300px",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
              className=" rounded-md max-w-[300px] mx-auto lg:mx-0"
            />
          </div>
          <div className=" lg:w-2/3 mt-10 text-center lg:text-start">
            <h2 className=" text-2xl font-semibold mb-5">
              {answer.AnswerName}
            </h2>
            <p className="  text-gray-600">{answer.AnswerDesp}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
