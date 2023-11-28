/* eslint-disable react/prop-types */
import { Group, Button, Box, Tooltip, Divider } from '@mantine/core';
import {
  IconHome,
  IconSettings,
  IconCopy,
  IconCheck,
} from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';
import classes from '../styles/TopBar.module.css';

export default function TopBar({ onToggleTaskList, showTaskList }) {
  const clipboard = useClipboard();
  return (
    <>
      <Box py={12}>
        <header className={classes.header}>
          <Group px={18} justify='space-between' h='100%'>
            <Group>
              <Button variant='filled' color='gray' size='sm' radius='sm'>
                Task Manageri
              </Button>
            </Group>

            <Group justify='center'>
              <Button
                onClick={onToggleTaskList}
                variant='filled'
                disabled={showTaskList} // Disable button when showNoteList is false
                color='gray'
                size='md'
                radius='sm'
              >
                <IconHome size={18} />
              </Button>
            </Group>

            <Group justify='flex-end' gap={4}>
              <Tooltip
                label='Task copied to clipboard!'
                offset={18}
                position='bottom'
                radius='xl'
                transitionProps={{ duration: 100, transition: 'slide-down' }}
                opened={clipboard.copied}
                color='gray'
                styles={{ tooltip: { color: 'white' } }} // Change text color here
              >
                <Button
                  variant='filled'
                  color='gray'
                  size='md'
                  radius='sm'
                  disabled={showTaskList}
                  onClick={() =>
                    clipboard.copy(
                      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                    )
                  }
                >
                  {clipboard.copied ? (
                    <IconCheck size={18} />
                  ) : (
                    <IconCopy size={18} />
                  )}
                </Button>
              </Tooltip>
              <Button variant='filled' color='gray' size='md' radius='sm'>
                <IconSettings size={18} />
              </Button>
            </Group>
          </Group>
          <Divider my='sm' />
        </header>
      </Box>
    </>
  );
}
