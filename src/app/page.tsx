const HomePage = () => {
  return (
    <div className="Home flex-1 flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-6 p-4 flex-1">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">OG-Tools</h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Welcome to OG-Tools. Here you can find some of the tools you need to calculate your units.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
