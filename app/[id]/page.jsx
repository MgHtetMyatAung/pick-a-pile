import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function Detail({ params }) {
  const questionDatas = await getData("questions");
  const answerDatas = await getData("answers");
  const answers = answerDatas.answers.filter(
    (data) => data.QuestionId == params.id
  );
  const question = questionDatas.questions.find(
    (ques) => ques.QuestionId == params.id
  );
  return (
    <section className=" py-5">
      <div className="container mx-auto mb-5">
        <Button>
          <Link href={"/"}>Back</Link>
        </Button>
        <div
          className=" w-full h-[250px] rounded-md my-5"
          style={{
            backgroundImage: `url("/articles/${params.id}/1.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className=" mb-10">
          <h1 className=" text-xl font-semibold">{question.QuestionName}</h1>
          <div className=" my-5"></div>
          <p className=" text-gray-600">{question.QuestionDesp}</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {answers.map((ans, index) => (
            <Card key={ans.AnswerId}>
              <CardContent className={"p-3 overflow-hidden"}>
                <Link href={`/${params.id}/${ans.AnswerId}-${index + 1}`}>
                  <Image
                    src={`/articles/${params.id}/${index + 1}.jpg`}
                    alt={ans.AnswerName}
                    width={300}
                    height={300}
                    style={{
                      width: "100%",
                      height: "300px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                    }}
                    className=" rounded-md"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
