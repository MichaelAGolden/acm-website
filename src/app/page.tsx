import {
  Card, CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-indigo-300 to-orange-100 dark:from-purple-950 dark:to-orange-900">
      <Navbar />
      <main className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>

        <div className="container py-20">
          <h1 className="text-4xl font-bold">Welcome to the ACM at ACC Website</h1>
          <Separator className="my-8" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        </div>


      </main >
      <footer className="py-6 md:px-8 md:py-0">
        test test yall
      </footer>
    </div >
  );
}
