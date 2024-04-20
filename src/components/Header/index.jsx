import { useNavigate } from "react-router-dom";
import Home from "../../pages/Home";
import Settings from "../../pages/Settings";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-top bg-stone-400 w-full h-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex  lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            Color App
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-10">
          <button onClick={() => navigate("/home")}className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </button>
          <button onClick={() => navigate("/settings")} className="text-sm font-semibold leading-6 text-gray-900">
            Settings
          </button>
        </div>
      </nav>
    </header>
  );
}
