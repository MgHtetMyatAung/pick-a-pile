import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = 60;

export default async function HomePage() {
  const datas = await getData("questions");
  return (
    <section>
      <div className="container mx-auto">
        <h1 className=" text-xl text-center font-semibold mb-5">
          Latest Articles
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {datas.questions.map((ques) => (
            <Card key={ques.QuestionId}>
              <CardHeader className={" p-0 pb-6 rounded-b-md overflow-hidden"}>
                <Image
                  src={`/articles/${ques.QuestionId}/1.jpg`}
                  alt={ques.QuestionName}
                  width={300}
                  height={300}
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  }}
                />
              </CardHeader>
              <CardContent>
                <h3 className=" md:text-lg font-semibold mb-2">
                  {ques.QuestionName.slice(0, 30)} ...
                </h3>
                <p className=" text-gray-600">
                  {ques.QuestionDesp.slice(0, 40)} ...
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/${ques.QuestionId}`} className=" w-full">
                  <Button className={" w-1/2"}>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
