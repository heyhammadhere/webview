import { createRoot as DOM } from "react-dom/client";
import { App } from "./App";
import "./index.css";

const ROOT = document.getElementById("root") as HTMLElement;

DOM(ROOT).render(<App />);
