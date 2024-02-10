import { Layout } from "@/shared/layout";
import { AboutProject } from "@/widgets/aboutProject-slice/aboutProject";
import { CoverBlock } from "@/widgets/coverBlock-slice/cover";
import { Header } from "@/widgets/header-slice/header";
import "./globals.scss";
import { Advantages } from "@/widgets/advantages-slice/advantages";
import { ProjectDev } from "@/widgets/projectsDev-slice/projectsDev";
import { Publish } from "@/widgets/publish-slice/publish";
import { Team } from "@/widgets/team-slice/team";
import { Form } from "@/widgets/form-slice/form";
import { Footer } from "@/widgets/footer-slice/footer";

export default function Home() {
  return (
    <>
      <div className="everest">
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Header />
          <CoverBlock />
        </section>
        <section
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <Layout>
            <AboutProject />
            <Advantages />
            <ProjectDev />
            <Publish />
            <Team />
            <Form />
          </Layout>
        </section>
        <Footer />
      </div>
    </>
  );
}
