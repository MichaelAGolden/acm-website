'use client';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyMuted,
  TypographyP,
  TypographyLarge,
  TypographyBlockquote,
  TypographyLead,
} from '@/components/typography/typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-indigo-200 to-orange-500 dark:from-purple-950 dark:to-orange-300 ">
      <Navbar />
      <main
        className="flex-1"
        style={{ height: 'calc(100vh)-80px' }}>
        <div className="container relative">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <section className="h-screen text-left">
              <TypographyH1 className="mb-5 pt-40">
                Austin Community College
              </TypographyH1>
              <TypographyH3>
                Association for Computing Machinery
              </TypographyH3>
              <TypographyLead>
                Student Chapter
              </TypographyLead>
              <TypographyMuted className="my-10 text-left max-w-40">
                Welcome to the Austin Community College Association for
                Computing Machinery Student Chapter
              </TypographyMuted>
              <div className="space-x-5">
                <Button>
                  <Link href="https://austincc.campuslabs.com/engage/organization/acc_csc">
                    Sign Up
                  </Link>
                </Button>
                <Link href="#about">
                  <Button>Learn More</Button>
                </Link>
              </div>
            </section>
            <section
              id="about"
              className="text-center pt-20">
              <h2 className="text-2xl font-bold">About Us</h2>
              <p>
                The Austin Community College ACM Student Chapter is a student
                organization that aims to provide resources and opportunities
                for students interested in computer science and technology.
              </p>
            </section>
            <Separator className="my-8" />

            <section
              id="hackathons"
              className="pt-20">
              <TypographyH2>Hackathons</TypographyH2>
              <div className="grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-2 my-5">
                <Card className="max-w-fit">
                  <CardHeader className="flex-row space-x-3">
                    <Image
                      src="/riverhacks-23.png"
                      alt="RiverHacks logo"
                      width={64}
                      height={64}
                      className="top-0"
                    />
                    <CardTitle>RiverHacks 2024</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Dates: April 13- 14, 2024 RiverHacks 2024 is our third
                      annual hackathon event. Whether you&apos;re an absolute
                      beginner or experienced, this is the perfect opportunity
                      to learn and create projects
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
                      className="top-0"
                    />
                    <CardTitle>RiverHacks 2023</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Dates: May 18–19, 2023 RiverHacks 2023 was our second
                      annual hackathon event. Whether you&apos;re an absolute
                      beginner or experienced, this is the perfect opportunity
                      to learn and create projects
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href="https://riverhacks-2023.devpost.com/">
                      Devpost and Results
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="max-w-fit">
                  <CardHeader className="flex-row space-x-3">
                    <Image
                      src="/riverhacks-22.png"
                      alt="RiverHacks logo"
                      width={64}
                      height={64}
                      className="top-0"
                    />
                    <CardTitle>RiverHacks 2022</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Dates: May 20-21, 2022 Our first hackathon, RiverHacks
                      2022, was a huge success! We had 42 participants and 11
                      projects submitted.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <a href="https://riverhacks-2022.devpost.com/?ref_feature=challenge&ref_medium=discover">
                      Devpost and Results
                    </a>
                  </CardFooter>
                </Card>
              </div>
              <Separator className="my-8" />
            </section>
            <section
              id="events"
              className="pt-20 items-center text-center align-middle">
              <h2 className="text-2xl font-bold">Events</h2>
              <p>
                We host a variety of events throughout the year, including
                workshops, hackathons, and socials.
              </p>
              <Separator className='my-10' />
              <Carousel className='md:max-w-min' opts={{ align: 'center' }}>
                <CarouselPrevious />
                <CarouselContent className='flex items-center aspect-auto justify-center px-2' >
                  <CarouselItem className='basis-1/3'>

                    <Card>
                      <CardHeader className="flex-row space-x-3">
                        <Image
                          src="/riverhacks-23.png"
                          alt="Google Logo"
                          width={64}
                          height={64}
                          className="top-0"
                        />
                        <CardTitle>Google Austin Campus Tour</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Tour of the Google Austin campus with club members.
                        </CardDescription>
                      </CardContent>
                    </Card>

                  </CarouselItem>
                  <CarouselItem className='basis-1/3'>
                    <Card>
                      <CardHeader className="flex-row space-x-3">
                        <Image
                          src="/riverhacks-23.png"
                          alt="CIVO Logo"
                          width={64}
                          height={64}
                          className="top-0"
                        />
                        <CardTitle>CIVO Navigate with Club Members</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Attending Civo Navigate 2024 in Austin with club members.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className='basis-1/3'>
                    <Card>
                      <CardHeader className="flex-row space-x-3">
                        <Image
                          src="/riverhacks-23.png"
                          alt="RiverHacks logo"
                          width={64}
                          height={64}
                          className="top-0"
                        />
                        <CardTitle>Swift Workshop</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Workshop on Swift programming language for club members.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className='basis-1/3'>
                    <Card>
                      <CardHeader className="flex-row space-x-3">
                        <Image
                          src="/riverhacks-23.png"
                          alt="RiverHacks logo"
                          width={64}
                          height={64}
                          className="top-0"
                        />
                        <CardTitle>RiverHacks 2024</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Our annual hackathon event, RiverHacks, happening in 2024.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem className='basis-1/3'>
                    <Card>
                      <CardHeader className="flex-row space-x-3">
                        <Image
                          src="/riverhacks-23.png"
                          alt="RiverHacks logo"
                          width={64}
                          height={64}
                          className="top-0"
                        />
                        <CardTitle>Speakers in Tech: Riley Hilliard</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Tech talk by guest speaker Riley Hilliard for club members.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                </CarouselContent>
                <CarouselNext />
              </Carousel>
            </section>

            <Separator className="my-8" />
            <section id="resources">
              <h2 className="text-2xl font-bold">Resources</h2>
              <TypographyP>
                We provide resources for students to learn and grow in the field
                of computer science, including tutoring, mentorship, and project
                collaboration.
              </TypographyP>
            </section>
            <Separator className="my-8" />
            <section id="contact">
              <h2 className="text-2xl font-bold">Contact</h2>
              <TypographyP>
                You can reach out to us at&nbsp;
                <a
                  className="font-medium text-primary underline underline-offset-4"
                  href="mailto:contact@austincs.org">
                  contact@austincs.org
                </a>
              </TypographyP>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5"></div>
            </section>
            <Separator className="my-8" />
          </div>
        </div>
      </main >
      <Footer />
    </div >
  );
}

