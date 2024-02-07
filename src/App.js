import "./App.css";
import Card from "./components/Card";
import { useState } from "react";

let arr = [
  {
    title: "Dağ 1",
    par: "açıklama 1",
  },
  {
    title: "Dağ 2",
    par: "açıklama 2",
  },
  {
    title: "Dağ 3",
    par: "açıklama 3",
  },
  {
    title: "Dağ 4",
    par: "açıklama 4",
  },
];

const App = () => {
  const [lesson, setLesson] = useState(11);
  return (
    <div>
      <h1>Başlık</h1>
      <h2>Ders {lesson}</h2>
      <button
        onClick={() => {
          setLesson(lesson + 1);
        }}
      >
        Ders Arttır
      </button>
      <button
        onClick={() => {
          setLesson(lesson - 1);
        }}
      >
        Ders Azalt
      </button>
      <button
        onClick={() => {
          setLesson(100);
        }}
      >
        Ders 100
      </button>
      <div className="Cards">
        {arr.map(({ title, par }, index) => {
          return <Card key={index} title={title} p={par} lesson={lesson} />;
        })}
      </div>
    </div>
  );
};

export default App;
