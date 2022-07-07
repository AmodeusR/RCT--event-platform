import { useQuery } from "@apollo/client";
import { GET_LESSONS_QUERY } from "../lib/apollo";
import Lesson from "./Lesson";

import { LessonProps } from "./Lesson";

const Sidebar = () => {
  const { data } = useQuery(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl block">Cronograma de Aulas</span>
      <hr className="my-6 border-gray-600" />
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson: LessonProps) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            lessonType={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
