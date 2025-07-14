import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SapBtpImplementation from "./pages/SapBtpImplementation";
import SapFioriDevelopment from "./pages/SapFioriDevelopment";
import SapFioriConsulting from "./pages/SapFioriConsulting";
import SapS4HanaMigration from "./pages/SapS4HanaMigration";
import SapIntegrationServices from "./pages/SapIntegrationServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sap-btp-implementation" element={<SapBtpImplementation />} />
          <Route path="/sap-fiori-development" element={<SapFioriDevelopment />} />
          <Route path="/sap-fiori-consulting" element={<SapFioriConsulting />} />
          <Route path="/sap-s4hana-migration" element={<SapS4HanaMigration />} />
          <Route path="/sap-integration-services" element={<SapIntegrationServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
