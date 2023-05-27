import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from "./homepage/index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <Homepage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
