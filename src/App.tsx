import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { client, GET_LESSONS_QUERY } from "./lib/apollo";

function App() {
  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY);

  console.log(data);

  interface Lesson {
    id: string,
    title: string
  }
  
  return (
    <div className="App">
      <ul>
        {data?.lessons.map(lesson => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
