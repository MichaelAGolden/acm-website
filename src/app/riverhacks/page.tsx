import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { TypographyH1, TypographyMuted, TypographyP } from "@/components/typography/typography";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function RiverhacksLanding() {


	return (
		<div className="bg-gradient-to-b from-indigo-200 to-orange-500 dark:from-purple-950 dark:to-orange-300">
			<Navbar />
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="flex flex-row items-center justify-between">
					<div className="flex flex-col space-y-4">
						<Button variant="outline" className="self-start">
							🎉 Update
						</Button>
						<TypographyH1>Welcome to Riverhacks!</TypographyH1>
						<TypographyMuted>Join us for a weekend of innovation and creativity.</TypographyMuted>
						<Button variant="outline">Get Started</Button>
					</div>
					<div className="w-1/2">
						<Image src="/logoDark.svg" alt="Riverhacks" width={512} height={512} layout="responsive" />
					</div>
				</div>

			</div>
		</div>
	);
}
