export default function Index() {
  return (
    <main className="h-screen">
      <section className="container flex flex-col max-w-5xl px-8 mx-auto text gap-y-6 py-44 lg:px-4">
        <p>Hi, my name is</p>
        <h1 className="text-6xl font-extrabold">Muthukumar</h1>
        <p className="text-6xl font-extrabold opacity">
          I build things of the web.
        </p>
        <p className="w-2/3 opacity">
          I&#8217;m a software engineer specializing in building web
          applications using React. Currently focused on building accessible,
          fast and reliable website using Remix.run.
        </p>
        <button className="px-6 py-3 mr-auto font-bold transition-all duration-150 border rounded-md border-sky-500 text-sky-500 hover:border-sky-300 hover:text-sky-300">
          Hire me
        </button>
      </section>
    </main>
  );
}
