import { Route, Switch } from "wouter";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { MathsPage } from "@/pages/MathsPage";
import { BiologyPage } from "@/pages/BiologyPage";
import { ChemistryPage } from "@/pages/ChemistryPage";
import { SciencePage } from "@/pages/SciencePage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/maths" component={MathsPage} />
        <Route path="/biology" component={BiologyPage} />
        <Route path="/chemistry" component={ChemistryPage} />
        <Route path="/science" component={SciencePage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
}
