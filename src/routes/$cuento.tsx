import { createFileRoute, redirect } from "@tanstack/react-router";
import { ColoringBook } from "@/components/coloring-book";
import { STORIES } from "@/lib/story";

export const Route = createFileRoute("/$cuento")({
  beforeLoad: ({ params }) => {
    if (!STORIES.some((item) => item.id === params.cuento)) {
      throw redirect({ to: "/" });
    }
  },
  head: ({ params }) => {
    const story = STORIES.find((item) => item.id === params.cuento);
    return {
      meta: [
        { title: story ? `${story.title} · Cuentos para colorear` : "Cuentos para colorear" },
        { name: "description", content: story?.blurb ?? "" },
      ],
    };
  },
  component: CuentoPage,
});

function CuentoPage() {
  const { cuento } = Route.useParams();
  return <ColoringBook storyId={cuento} />;
}
