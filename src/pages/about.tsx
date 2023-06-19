import Footer from "~/components/Footer";
import NavBar from "~/components/Navbar";

const about = () => {
  return (
    <section className="flex min-h-screen flex-col justify-between">
      <NavBar />
      <section className=" flex h-full flex-grow-[1] flex-col gap-12 p-8 pt-12  text-primary">
        <section className="Why flex flex-col gap-4">
          <h1 className="h3 pb-2">Why this website?</h1>
          <section className="explanation flex flex-col gap-4 indent-4">
            <p className="body-small ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              provident qui repellat nesciunt aperiam? Reprehenderit quod
              repudiandae, voluptates recusandae eum error odio et ipsam, sit,
              possimus quasi ex alias id.
            </p>
            <p className="body-small">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              provident qui repellat nesciunt aperiam? Reprehenderit quod
              repudiandae, voluptates recusandae eum error odio et ipsam, sit,
              possimus quasi ex alias id.
            </p>
          </section>
        </section>
        <section className=" flex flex-col gap-4">
          <h2 className="h3 pb-2">Have some feedback?</h2>
          <section className="explanation flex flex-col gap-4 indent-4">
            <p className="body-small ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              provident qui repellat nesciunt aperiam? Reprehenderit quod
              repudiandae, voluptates recusandae eum error odio et ipsam, sit,
              possimus quasi ex alias id.
            </p>
          </section>
        </section>
      </section>

      <Footer />
    </section>
  );
};

export default about;
