import {
  Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-indigo-200 to-orange-500 dark:from-purple-950 dark:to-orange-300 ">
      <Navbar />
      <main className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold">ACM at ACC</h1>
          <Separator className="my-8" />
          <section id="about">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p>
              The Association for Computing Machinery at Austin Community College is a student organization that aims to provide resources and opportunities for students interested in computer science and technology.
            </p>
          </section>
          <Separator className="my-8" />
          <section id="hackathons">
            <h2 className="text-2xl font-bold">Hackathons</h2>
            <div className="grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-2 my-5">
              <Card className="max-w-fit">
                <CardHeader className="flex-row space-x-3">
                  <Image
                    src="/riverhacks-24.png"
                    alt="Riverhacks logo"
                    width={64}
                    height={64}
                    className="top-0" />
                  <CardTitle>Riverhacks 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Dates: April 13- 14, 2024

                    Riverhacks 2024 is our third annual hackathon event. Whether youre the absolute beginner or experienced, this is the perfect opportunity to learn and create projects
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="max-w-fit">
                <CardHeader className="flex-row space-x-3">
                  <Image
                    src="/riverhacks-23.png"
                    alt="Riverhacks logo"
                    width={64}
                    height={64}
                    className="top-0" />
                  <CardTitle>Riverhacks 2023</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Dates: May 18–19, 2023

                    Riverhacks 2023 was our second annual hackathon  hackathon event. Whether youre the absolute beginner or experienced, this is the perfect opportunity to learn and create projects
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://riverhacks-2023.devpost.com/">Devpost and Results</a>
                </CardFooter>
              </Card>

              <Card className="max-w-fit">
                <CardHeader className="flex-row space-x-3">
                  <Image
                    src="/riverhacks-22.png"
                    alt="Riverhacks logo"
                    width={64}
                    height={64}
                    className="top-0" />
                  <CardTitle>Riverhacks 2022</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Dates: May 20-21, 2022

                    Our first hackathon, Riverhacks 2022, was a huge success! We had 42 participants and 11 projects submitted.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <a href="https://riverhacks-2022.devpost.com/?ref_feature=challenge&ref_medium=discover">Devpost and Results</a>
                </CardFooter>
              </Card>
            </div>
            <Separator className="my-8" />
          </section>
          <section id="events">
            <h2 className="text-2xl font-bold">Events</h2>
            <p>
              We host a variety of events throughout the year, including workshops, hackathons, and socials.
            </p>

          </section>
          <Separator className="my-8" />
          <section id="resources">
            <h2 className="text-2xl font-bold">Resources</h2>

            <p>
              We provide resources for students to learn and grow in the field of computer science, including tutoring, mentorship, and project collaboration.
            </p>
          </section>
          <Separator className="my-8" />
          <section id="contact">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>
              You can reach out to us at
              <a href="mailto:">contact@austincs.org</a>
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
            </div>
          </section>
          <Separator className="my-8" />
        </div>

      </main >
      <Footer />
    </div>
  );
}

