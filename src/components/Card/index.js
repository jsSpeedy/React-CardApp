import { Card, Image, Text, Button, Group, CloseButton } from "@mantine/core";
import "./Card.css";

const CardComponent = ({ title, p, i, click }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section>
      <Image
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
        height={160}
        alt="Norway"
      />
    </Card.Section>

    <Group justify="space-between" mt="md" mb="xs">
      <Text fw={500}>{title}</Text>
      <CloseButton aria-label="Close modal" onClick={click} />
    </Group>

    <Text size="sm" c="dimmed">
      {p}
    </Text>

    <Button color="blue" fullWidth mt="md" radius="md">
      Book classic tour now
    </Button>
  </Card>
);

export default CardComponent;
