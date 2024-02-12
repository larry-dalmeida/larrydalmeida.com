import Link from "next/link";

const Hero = () => (
  <section className="my-16">
    <h1>Hey! I&apos;m Larry.</h1>
    <p className="mt-0">Welcome to my little corner of the internet.</p>
    <p>I&apos;m a Software Engineer living in Berlin, Germany.</p>
    <p>
      I love building{" "}
      <a
        href="https://en.zalando.de/campaigns/adaptive-fashion/"
        target="_blank"
      >
        innovative
      </a>{" "}
      products for the Web whilst helping teams foster an inclusive, high
      performing culture that enables them to{" "}
      <a href="https://en.zalando.de/about-sustainability/" target="_blank">raise the bar</a> in
      online fashion retail.
    </p>
    <p>
      I enjoy listening to a spectrum of{" "}
      <a
        href="https://open.spotify.com/playlist/31F0jQTNwQDsc5gDd71q4p?si=345d354962a54f5f"
        target="_blank"
      >
        music
      </a>
      , watching terribly good{" "}
      <a
        href="https://www.imdb.com/title/tt2724064/?ref_=ext_shr_lnk"
        target="_blank"
      >
        movies
      </a>{" "}
      and indulging my{" "}
      <a
        href="https://media.giphy.com/media/JJE87NYU69EnS/giphy.gif"
        target="_blank"
      >
        sweet teeth
      </a>
      .
    </p>
    <p>
      If you&apos;d like to say hi you can contact me by email at{" "}
      <Link href="mailto:hello@larrydalmeida.com">hello@larrydalmeida.com</Link>
      .
    </p>
  </section>
);

export default function Home() {
  return (
    <div className="prose prose-invert">
      <Hero />
    </div>
  );
}
