import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cloud from "./pages/Cloud";
import CodeReview from "./pages/CodeReview";
import Guide from "./pages/Guide";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Signin from "./pages/Signin";
import Support from "./pages/Support";
import { useRepo } from "./Context/RepoContext";

function App() {
  const { signedIn } = useRepo();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={signedIn ? <Layout /> : <Signin />}>
          <Route index element={<Home />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/review" element={<CodeReview />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
