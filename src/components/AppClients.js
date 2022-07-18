function AppClients() {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary uppercase mb-2">Clients</h4>
            <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Have Been Worked With</h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              I have been working with some companies and that I have worked with.
            </p>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a href="https://bappeda.jepara.go.id" target="_blank" rel="noreferrer" className="max-w-[180px] m-4 rounded py-3 px-4 bg-white grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-lg hover:shadow-slate-900 xl:mx-5">
                <img src="/clients/bappeda-jepara.png" alt="Bappeda Jepara"/>
              </a>
              <a href="https://decorunic.id" target="_blank" rel="noreferrer" className="max-w-[180px] m-4 rounded py-3 px-4 bg-white grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-lg hover:shadow-slate-900 xl:mx-5">
                <img src="/clients/decorunic.png" alt="Decorunic"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppClients;
