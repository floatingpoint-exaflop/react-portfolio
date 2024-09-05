export default function AboutMe() {
  return (
    <article className="card aboutme">
      <h2>Hi! My name is Tim.</h2>
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src="/assets/headshot-timscallon.jpg"
            className="img-fluid"
            alt="Tim Scallon headshot"
          />
        </div>
        <div className="col-12 col-md-6">
          <p>
            I live in North Minneapolis with my cat, Marge. I've worked in tech
            for nearly a decade, mainly in the healthcare data realm, and have
            been playing around with computing since dabbling with Applescript
            and Cocoa back in seventh grade.
          </p>
          <p>
            I left my previous job in June 2024 to pursue coding knowledge, and
            completed a full-stack development boot camp course via the
            University of Minnesota, graduating in September.
          </p>
          <p>
            I hope to one day work with robots, but until then I'm aiming to
            simply expand my knowledge base as much as possible, using Node web
            development paradigms as a foundation for moving into the C-family,
            and Python libraries.
          </p>
          <p>
            In my spare time, I modify old Nintendo products, and I am an active
            member of the Gamecube and WiiLink Discord Groups. For now, I am
            mostly enjoying others' codebase, but the chance to contribute to
            the myriad projects in the DOL ecosystem is exciting motivation to
            learn in and of itself.
          </p>
          <p>
            Additionally, I write fiction, spend time on the St. Croix River,
            and read read read: lately it's been mostly nonfiction, but I am
            genuinely always looking for a good book recommendation.
          </p>
        </div>
      </div>
    </article>
  );
}
