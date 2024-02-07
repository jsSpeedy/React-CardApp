import "./App.css";
import Card from "./components/Card";
import { useState } from "react";
import { Button, Input, Textarea, Container, Stack } from "@mantine/core";

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
    <Container>
      <h1>Kart Oluşturma Programı</h1>
      <Stack>
        <Input.Wrapper label="Başlık">
          <Input placeholder="Başık Yazınız" />
        </Input.Wrapper>
        <Textarea label="Paragraf" placeholder="Paragraf Yazınız" />
        <Button variant="outline" color="cyan" size="md">
          Kart Oluştur
        </Button>
      </Stack>
      <p>Kartlar</p>
      <div className="Cards">
        {arr.map(({ title, par }, index) => {
          return <Card key={index} title={title} p={par} lesson={lesson} />;
        })}
      </div>
    </Container>
  );
};

export default App;
