import { createFileRoute } from "@tanstack/react-router";
import { ColoringBook } from "@/components/coloring-book";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ColoringBook />;
}
