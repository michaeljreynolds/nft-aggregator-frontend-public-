import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./componenets/Header/Header";
import InfoModal from "./componenets/InfoModal/InfoModal";
import Collections from "./pages/Collections/Collections";
import Favorite from "./pages/Favorite/Favorite";
import Giveaways from "./pages/Giveaways/Giveaways";
import Profile from "./pages/Profile/Profile";

// maybe rewrite later
function RequireSubscriptionGuard({ children }: { children: React.ReactNode }) {
  const tempHasSubs = false;
  const redirectFunc = () => {
    return <InfoModal type="no-subscription" />;
  };
  return tempHasSubs ? children : redirectFunc();
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Collections />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/giveaways" element={<Giveaways />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
