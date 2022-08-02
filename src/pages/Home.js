import Header from "../components/layout/Header";
import Title from "../components/layout/Title";
import Login from "./Login";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Title />
          <Login />
        </section>
      </main>
      <Footer />
    </>
  );
}
