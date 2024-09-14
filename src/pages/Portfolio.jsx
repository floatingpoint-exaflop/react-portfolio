import Project from "../components/Project";

export default function Portfolio() {
  const projectList = [
    {
      id: 1,
      img: "/assets/eatitorbeatit.png",
      label: "Recipe Search n' Save",
      repoHref: "https://github.com/TeutonicTed/project-03",
      deployHref: "https://project-03-yel1.onrender.com/",
    },
    {
      id: 2,
      img: "/assets/exposition-inn.png",
      label: "DND Character Builder",
      repoHref: "https://github.com/JonGrom/Exposition_Inn",
      deployHref: "https://exposition-inn.onrender.com",
    },
    {
      id: 3,
      img: "/assets/war-cards.png",
      label: "War: The Card Game",
      repoHref: "https://github.com/floatingpoint-exaflop/group-project-one",
      deployHref: "https://floatingpoint-exaflop.github.io/group-project-one/",
    },
    {
      id: 4,
      img: "/assets/note-taker.png",
      label: "Express Note Taker",
      repoHref: "https://github.com/floatingpoint-exaflop/note-taker",
      deployHref: "https://note-taker-n2wc.onrender.com",
    },
    {
      id: 5,
      img: "/assets/weather-dash.png",
      label: "API Weather Dashboard",
      repoHref: "https://github.com/floatingpoint-exaflop/weather-dashboard",
      deployHref: "https://floatingpoint-exaflop.github.io/weather-dashboard/",
    },
    {
      id: 6,
      img: "/assets/task-board.png",
      label: "JQueryUI Task Board",
      repoHref: "https://github.com/floatingpoint-exaflop/task-board",
      deployHref: "https://floatingpoint-exaflop.github.io/task-board/",
    },
  ];

  return (
    <section className="card portfoliocard">
      <h2>Here's what I've been working on lately:</h2>
      <div className="container">
        <div className="row">
          {projectList.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
