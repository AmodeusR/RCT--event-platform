import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

export interface LessonProps {
  id?: string;
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class";
}

const Lesson = ({ title, slug, availableAt, lessonType }: LessonProps) => {
  const isLessonAvail = isPast(availableAt);
  const formattedAvailableDate = format(availableAt, "EEEE '•' d 'de' MMMM '•' k'h'mm", {
    locale: ptBR
  }) 

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{formattedAvailableDate}</span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors">
        <header className="flex items-center justify-between">
          {isLessonAvail ? (
            <span className="text-sm text-blue-500 flex h-4 gap-2 items-center font-medium">
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 flex h-4 gap-2 items-center font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded border text-white border-green-500 px-2 py-[3px] font-bold">
            {lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="block mt-5 text-gray-200">{title}</strong>
      </div>
    </Link>
  );
};

export default Lesson;
