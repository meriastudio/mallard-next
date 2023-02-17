import Heading from "../atoms/Heading";
import Separator from "../atoms/Separator";

export default function Team(props) {
  const team = [
    {
      name: "Demosthenes",
      text: "Co-founder, Director, Chief Strategist",
      img: "/team-demosthenes.png",
    },
    {
      name: "Nemesis",
      text: "Co-founder, Creative Director, Artist/Designer",
      img: "/team-nemesis.png",
    },
    {
      name: "Crypt Keeper",
      text: "Co-founder, Developer",
      img: "/team-keeper.png",
    },
    { name: "Brane", text: "NFT Artist/Designer", img: "/team-brane.png" },
    {
      name: "DUR",
      text: "TECHNOMANCER/DEVELOPER",
      img: "/team-demosthenes.png",
    },
    {
      name: "BOXLORD",
      text: "ILLUSIONIST/ARTIST",
      img: "/team-nemesis.png",
    },
    {
      name: "RZ",
      text: "MODERATOR",
      img: "/team-keeper.png",
    },
    {
      name: "REYVANZ",
      text: "MODERATOR",
      img: "/team-keeper.png",
    },
    { name: "SK", text: "MODERATOR", img: "/team-brane.png" },
    {
      name: "MONEYMIKE",
      text: "MODERATOR",
      img: "/team-demosthenes.png",
    },
    {
      name: "DUCKCZESTER",
      text: "MODERATOR",
      img: "/team-nemesis.png",
    },
    {
      name: "MJ",
      text: "MODERATOR",
      img: "/team-keeper.png",
    },
  ];

  return (
    <section
      className="bg-off-black bg-chosen bg-cover bg-center py-12 lg:py-32"
      {...props}
    >
      <div className="xl:container  space-y-16">
        <div className="text-center">
          <Heading>Team</Heading>
        </div>

        <div className="px-6 lg:px-12 xl:px-0 grid  items-center grid-cols-7 sm:grid-cols-10 md:grid-cols-9 h-full lg:grid-cols-12 lg:gap-6 lg:space-y-0">
          {team.map(({ name, text, img }, i) => (
            <div
              key={name}
              className="col-span-7 sm:col-span-5 md:col-span-3 lg:col-span-4 px-2 my-6 sm:my-8 lg:my-16 xl:col-span-3 text-center space-y-1 sm:space-y-3 "
            >
              <img src={img} alt={name} className="w-4/5 mx-auto sm:w-full" />

              <h4 className="font-serif font-bold text-2xl">{name}</h4>

              <p className="teamText">{text}</p>
            </div>
          ))}
        </div>
        <Separator
          href="/#footer"
          className="block w-4/6 md:w-3/6 mx-auto mb-12"
        />
      </div>
    </section>
  );
}
