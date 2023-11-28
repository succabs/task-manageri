/* eslint-disable react/prop-types */
import { Card, Button, Text, Progress, Badge, Group } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

export default function TaskCard({ task, onClick, onDelete }) {
  const handleDeleteClick = (event) => {
    // Prevent the click event from bubbling up to the TaskCard
    event.stopPropagation();
    onDelete(task.id); // Call onDelete with the task ID to delete the task
  };
  return (
    <li onClick={onClick}>
      <Card withBorder padding='lg' radius='md' mb='lg'>
        <Group justify='space-between'>
          <Group>
            <Badge>{task.company}</Badge>
          </Group>
          <Group justify='flex-end'>
            <Button
              variant='filled'
              color='gray'
              size='sm'
              radius='sm'
              onClick={handleDeleteClick}
            >
              <IconDots size={18} />
            </Button>
          </Group>
        </Group>
        <Text fz='lg' fw={500} mt='md'>
          Taskin nimi
        </Text>
        <Text fz='sm' c='dimmed' mt={5}>
          Muokattu viimeksi hh:mm:ss dd:mm
        </Text>

        <Text c='dimmed' fz='sm' mt='md'>
          Tilanne:{' '}
          <Text span fw={500} c='bright'>
            Etenee
          </Text>
        </Text>

        <Progress value={(36 / 36) * 100} mt={5} />
      </Card>
    </li>
  );
}
