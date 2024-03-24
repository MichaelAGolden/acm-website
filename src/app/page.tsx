import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { TypographyH1, TypographyH2, TypographyH3, TypographyMuted, TypographyP, TypographyLarge, TypographyBlockquote } from "@/components/typography/typography";
import {
  Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";


export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-indigo-200 to-orange-500 dark:from-purple-950 dark:to-orange-300 ">
      <Navbar />
      <main className="flex-1" style={{ height: 'calc(100vh)-80px' }}>
        <div className="container relative">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <section className="h-screen text-center">
              <TypographyH1 className="mb-5 text-center pt-40">ACC ACM</TypographyH1>
              <TypographyMuted className="mb-10 text-center">Welcome to the Austin Community College Association for Computing Machinery Student Chapter</TypographyMuted>
              <div className="space-x-5">
                <Button>
                  <a>
                    Sign Up
                  </a>
                </Button>
                <Button variant="secondary">
                  <a>
                    Learn More
                  </a>
                </Button>
              </div>
            </section>
            <section id="about">
              <h2 className="text-2xl font-bold">About Us</h2>
              <p>
                The Austin Community College ACM Student Chapter is a student organization that aims to provide resources and opportunities for students interested in computer science and technology.
              </p>
            </section>
            <Separator className="my-8" />

            <section id="hackathons">
              <TypographyH2>Hackathons</TypographyH2>
              <div className="grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-2 my-5">
                <Card className="max-w-fit">
                  <CardHeader className="flex-row space-x-3">
                    <Image
                      src="/riverhacks-23.png"
                      alt="RiverHacks logo"
                      width={64}
                      height={64}
                      className="top-0" />
                    <CardTitle>RiverHacks 2024</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Dates: April 13- 14, 2024

                      RiverHacks 2024 is our third annual hackathon event. Whether you're an absolute beginner or experienced, this is the perfect opportunity to learn and create projects
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
                    <CardTitle>RiverHacks 2023</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Dates: May 18–19, 2023

                      RiverHacks 2023 was our second annual hackathon event. Whether you're an absolute beginner or experienced, this is the perfect opportunity to learn and create projects
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
                      alt="RiverHacks logo"
                      width={64}
                      height={64}
                      className="top-0" />
                    <CardTitle>RiverHacks 2022</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Dates: May 20-21, 2022

                      Our first hackathon, RiverHacks 2022, was a huge success! We had 42 participants and 11 projects submitted.
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
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <Card>
                      <CardHeader className="flex-row space-x-3">
                        <Image
                          src="/riverhacks-23.png"
                          alt="RiverHacks logo"
                          width={64}
                          height={64}
                          className="top-0" />
                        <CardTitle>Event 1</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Description of event 1
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardHeader className="flex-row space-x-3">
                        <Image
                          src="/riverhacks-23.png"
                          alt="RiverHacks logo"
                          width={64}
                          height={64}
                          className="top-0" />
                        <CardTitle>Event 2</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Description of event 2
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem><Card><CardHeader className="flex-row space-x-3"><Image src="/riverhacks-23.png" alt="RiverHacks logo" width={128} height={128} className="top-0" /><CardTitle>Event 3</CardTitle></CardHeader><CardContent><CardDescription>Description of event 3</CardDescription></CardContent></Card></CarouselItem></CarouselContent></Carousel>


            </section>
            <Separator className="my-8" />
            <section id="resources">
              <h2 className="text-2xl font-bold">Resources</h2>
              <TypographyP>
                We provide resources for students to learn and grow in the field of computer science, including tutoring, mentorship, and project collaboration.
              </TypographyP>
            </section>
            <Separator className="my-8" />
            <section id="contact">
              <h2 className="text-2xl font-bold">Contact</h2>
              <TypographyP>
                You can reach out to us at&nbsp;
                <a className="font-medium text-primary underline underline-offset-4" href="mailto:">contact@austincs.org</a>
              </TypographyP>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
              </div>
            </section>
            <Separator className="my-8" />
          </div>
        </div >
      </main >
      <Footer />
    </div >
  );
}

