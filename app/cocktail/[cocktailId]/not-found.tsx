import { faMartiniGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <main className="flex h-screen flex-col items-center justify-center">
        <h1 className="flex text-4xl font-bold text-red-600">
          404 - Cocktail Not Found
          <FontAwesomeIcon className="ml-3 w-8" icon={faMartiniGlass} />
        </h1>
        <p className="mt-2 text-lg">
          Sorry, the cocktail you're looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-4 rounded-lg bg-blue-400 px-4 py-2 text-white transition-colors duration-150 hover:bg-blue-500"
        >
          Go Back Home
        </Link>
      </main>
    </main>
  );
}
