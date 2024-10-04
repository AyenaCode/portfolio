import { Container } from "./Container";

export const ContactForm = () => {
  return (
    <Container className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#c084fc] to-[#93c5fd] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <h2 className="text-2xl font-bold text-center mb-4">
        Contacter moi pour profiter de mon expertise
      </h2>
      <form className="grid grid-rows-3 grid-cols-2 gap-x-2 shadow-md rounded-md bg-accent/30 p-6">
        <div className="flex flex-col">
          <label htmlFor="name">Nom</label>
          <input
            className="border border-accent p-2 bg-primary/10 focus:bg-background focus:text-accent-foreground rounded"
            type="text"
            id="name"
            placeholder="Votre nom"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border border-accent p-2 bg-primary/10 focus:bg-background focus:text-accent-foreground rounded"
            type="email"
            id="email"
            placeholder="Votre email"
            required
          />
        </div>
        <div className="col-span-2 flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            className="border border-accent p-2 bg-primary/10 focus:bg-background focus:text-accent-foreground rounded resize-none "
            id="message"
            placeholder="Votre message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary/80 col-span-2 h-[60%] w-[30%] max-w-48 mx-auto text-gray-200 rounded-md p-2 mt-4 hover:bg-primary/60"
        >
          Envoyer
        </button>
      </form>
    </Container>
  );
};
