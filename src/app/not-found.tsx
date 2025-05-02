import { Button } from "./components/button";
import MainHeader from "./components/MainHeader";

export default function NotFound() {
  return (
    <>
    <MainHeader />
      <main className="grid min-h-screen place-items-center bg-WHITE px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-BLUE">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="/"
              className="bg-BLUE px-3.5 py-2.5 text-sm font-semibold text-WHITE shadow-sm"
            >
              Go back home
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
