import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const Desktop6MixpanelGenerateTextToVideo = React.lazy(() =>
  import("pages/Desktop6MixpanelGenerateTextToVideo"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Desktop6MixpanelGenerateTextToVideo />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/desktop6mixpanelgeneratetexttovideo"
            element={<Desktop6MixpanelGenerateTextToVideo />}
          />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
