const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04.Let’s Connect
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I’m always open to exciting opportunities, collaborations, or just a
        friendly chat about tech and innovation. If you’d like to connect, feel
        free to reach out and I’ll get back to you as soon as I can!
      </p>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=etenesh4good@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300 flex items-center justify-center"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
