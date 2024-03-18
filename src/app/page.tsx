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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
            </div>
          </section>
          <Separator className="my-8" />
          <section id="events">
            <h2 className="text-2xl font-bold">Events</h2>
            <p>
              We host a variety of events throughout the year, including workshops, hackathons, and socials.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
            </div>
          </section>
          <Separator className="my-8" />
          <section id="resources">
            <h2 className="text-2xl font-bold">Resources</h2>
            <p>
              We provide resources for students to learn and grow in the field of computer science, including tutoring, mentorship, and project collaboration.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
            </div>
          </section>
          <Separator className="my-8" />
          <section id="contact">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>
              You can reach out to us at
              <a href="mailto:">contact@austincs.org</a>
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    This is a card description
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <button className="btn">Click me</button>
                </CardFooter>
              </Card>
            </div>
          </section>
          <Separator className="my-8" />
        </div>
      </main >
      <Footer />
    </div >
  );
}
