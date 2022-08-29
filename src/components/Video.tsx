import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { DefaultUi, Player, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
  lessonSlug: string;
}

const Video = ({ lessonSlug }: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return <div className="flex-1">Carregando...</div>;
  }

  return (
    <section className="flex-1">
      <div className="bg-black w-full h-1/2 flex justify-center">
        <div className="h-full max-h-[60vh] max-w-[1100px] bg-slate-900 aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <section className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-white text-2xl font-bold mb-4 flex-1">
              {data.lesson.title}
            </h1>
            <p className="text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className=" flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt="foto do professor"
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-white text-sm bg-green-500 p-4 rounded font-bold uppercase gap-2 flex justify-center items-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade no Discord
            </a>
            <a
              href="#"
              className="text-blue-500 text-sm flex p-4 gap-2 justify-center items-center rounded border border-blue-500 uppercase font-bold hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o Desafio
            </a>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-8 mt-20">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 p-6 h-full flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <h2 className="text-xl font-bold">Material complementar</h2>
              <p className="text-sm text-gray-200 mt-2">
                Afie seu aprendizado com estes materiais complementares da
                jornada Jedi
              </p>
            </div>
            <div className="flex items-center p-6 h-full">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 p-6 h-full flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <h2 className="text-xl font-bold">Baixe Wallpapers Exclusivos</h2>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos da galáxia e personalize a sua
                máquina!
              </p>
            </div>
            <div className="flex items-center p-6 h-full">
              <CaretRight size={24} />
            </div>
          </a>
        </section>
      </div>
    </section>
  );
};

export default Video;
