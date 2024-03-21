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
import { TypographyH1, TypographyH2, TypographyH3, TypographyP } from "@/components/typography/typography";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-indigo-200 to-orange-500 dark:from-purple-950 dark:to-orange-300 ">
      <Navbar />
      <main className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <TypographyH1 className="mb-5">ACM at ACC</TypographyH1>
          <Separator className="my-8" />
          <section className="my-10" id="about">
            <TypographyH2>About</TypographyH2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <TypographyP>
                  **Passionate about technology and coding?** Join ACM at ACC, a vibrant community where students learn, create, and connect.
                </TypographyP>

                <TypographyP>
                  With almost 400 members, we are one of the largest clubs at ACC. We welcome everyone, regardless of background or experience level.
                </TypographyP>

                <TypographyP>
                  **Join for:**
                  <ul className="list-disc ml-4">
                    <li>Networking with fellow tech enthusiasts</li>
                    <li>Learning new skills through workshops and events</li>
                    <li>Collaborating on exciting projects</li>
                    <li>Having fun and building friendships</li>
                  </ul>
                </TypographyP>
              </div>

              <div>

              </div>
            </div>

            <TypographyH3 className="mt-8">Empowering Your Success</TypographyH3>

            <TypographyP>
              We provide resources to help you learn and grow in computer science:
            </TypographyP>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="flex items-center">

                <TypographyP>Workshops</TypographyP>
              </div>
              <div className="flex items-center">

                <TypographyP>Hackathons</TypographyP>
              </div>
              <div className="flex items-center">

                <TypographyP>Project Collaboration</TypographyP>
              </div>
            </div>

            <TypographyP className="mt-8">
              Our club fosters an inclusive, supportive, and collaborative environment where everyone can thrive.
            </TypographyP>

            <TypographyP className="mt-4">
              **Ready to join?**
              <a href="membership_form_link" className="font-medium text-primary underline underline-offset-4">
                Click here to become a member
              </a> or contact us at
              <a href="mailto:contact@acm-acc.com" className="font-medium text-primary underline underline-offset-4">
                contact@acm-acc.com
              </a>
            </TypographyP>
          </section>
          {/* <section className="my-10" id="about">
            <TypographyH2>About</TypographyH2>
            <TypographyP>
              Passionate about technology and coding? Join ACM at ACC, a vibrant community where students learn, create, and connect.
            </TypographyP>
            <TypographyP>
              At almost 400 Members registered with student life, we are one of the largest clubs at ACC. We are a diverse group of students from all walks of life, and we welcome everyone, regardless of their background or experience level.
            </TypographyP>

            <TypographyP>
              Join for networking, learning, and fun. We host a variety of events, including workshops, hackathons, and socials. We also provide resources for students to learn and grow in the field of computer science, including tutoring, mentorship, and project collaboration.
            </TypographyP>
            <TypographyP>
              We are proud of our past successes and achievements. Last semester, we hosted two student-led workshops. We also run a Leetcode workshop multiple times a week to help students prepare for technical interviews. We have successfully held two student-created hackathons, with our third planned for April 13-14, dexpecting around 200 participants. Our ongoing speaker series brings in professionals in Computer Science and Software Development to provide perspective, mentorship, and advice to interested students.
            </TypographyP>
            <TypographyP>
              By joining ACM at ACC, students gain access to workshops, networking opportunities, mentorship programs, project collaborations, and career development support. Our focus is on helping students grow their skills, build their network, and achieve their career goals.
            </TypographyP>
            <TypographyP>
              Our club culture is inclusive, supportive, collaborative, and innovative. We strive to create a welcoming and engaging community for all our members.
            </TypographyP>
            <TypographyP>
              Interested in joining us? We invite you to learn more about our membership and take the next step in your career development. <a href="membership_form_link">Click here</a> to access our membership form or contact us at <a href="mailto:contact@acm-acc.com">contact@acm-acc.com</a> for more information.
            </TypographyP>
          </section> */}
          <section id="hackathons">
            <TypographyH2>Hackathons</TypographyH2>
            <div className="grid grid-cols-1 justify-items-center gap-2 md:grid-cols-2 lg:grid-cols-2 my-5">
              <Card className="max-w-fit">
                <CardHeader className="flex-row space-x-3">
                  <Image
                    src="/riverhacks-23.png"
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
      </main >
      <Footer />
    </div>
  );
}

