import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

const ProfileCard = () => {
  return (
    <section id="top">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between p-2 ">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-lg">Hey, I'm</span>
          <h3 className="h2">
            <span className="text-accent">Sagar Gohil</span>
          </h3>
          <span className="text-lg">Software Engineer</span>
          <p className="pt-2 pb-2 text-lg text-muted-foreground">
            Engineering the Backbone of Modern Web Solutions.
          </p>

          <div className="pt-2 pb-2 flex items-center justify-center xl:justify-start gap-4">
            <Socials
              containerStyles="flex flex-wrap justify-center gap-4 sm:gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
        <div className="order-1 xl:order-none px-12">
          <Photo />
        </div>
      </div>
      <div className="flex justify-center p-2">
        <Stats />
      </div>
    </section>
  );
};

export default ProfileCard;
