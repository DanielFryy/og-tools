import { AppProps as Props } from "./App.types";
import { Button } from "@/components/ui/button";

const App = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
    </div>
  );
};

export default App;
