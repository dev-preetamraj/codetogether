import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="mx-10 lg:mx-40 pt-20 flex flex-col space-y-10" id="hero">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl text-center bg-gradient-to-r from-purple-500 to-primary text-transparent bg-clip-text">
            Bored of coding alone?
          </h1>
          <p className="text-6xl text-center font-bold">
            Collab with your friends
          </p>
          <p className="text-6xl text-center font-bold">Code together</p>
          <p className="text-muted-foreground text-center">
            Codetogether allows you to create rooms for colaborative coding and
            seperate playground.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Button size="lg">
            Get started
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/playground.png"
          alt="Playground"
          height={867}
          width={1915}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
