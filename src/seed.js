import { v4 as uuid } from 'uuid';
import { generateRandomColor } from './utilities';

export const SEED_DATA = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: 'Book concert hall',
      isComplete: false,
      subtaskIds: [],
    },
    'task-2': {
      id: 'task-2',
      content: 'Choose repertoire',
      isComplete: false,
      subtaskIds: ['subtask-1', 'subtask-2', 'subtask-3', 'subtask-4'],
    },
    'task-3': {
      id: 'task-3',
      content: 'Learn pieces',
      isComplete: true,
      subtaskIds: [],
    },
    'task-4': {
      id: 'task-4',
      content: 'Choose dish to cook',
      isComplete: false,
      subtaskIds: [],
    },
    'task-5': {
      id: 'task-5',
      content: 'Shop for ingredients',
      isComplete: true,
      subtaskIds: [],
    },
    'task-6': {
      id: 'task-6',
      content: "Get friend's availability",
      isComplete: false,
      subtaskIds: ['subtask-5', 'subtask-6', 'subtask-7', 'subtask-8'],
    },
    'task-7': {
      id: 'task-7',
      content: 'Clean apartment',
      isComplete: false,
      subtaskIds: [],
    },
    'task-8': {
      id: 'task-8',
      content: 'Choose type of wood',
      isComplete: true,
      subtaskIds: [],
    },
    'task-9': {
      id: 'task-9',
      content: 'Look up blueprint',
      isComplete: false,
      subtaskIds: [],
    },
    'task-10': {
      id: 'task-10',
      content: 'Choose wood finish',
      isComplete: true,
      subtaskIds: [],
    },
    'task-11': {
      id: 'task-11',
      content: 'Get parts',
      isComplete: false,
      subtaskIds: ['subtask-9', 'subtask-10', 'subtask-11'],
    },
    'task-12': {
      id: 'task-12',
      content: 'Get supplies',
      isComplete: false,
      subtaskIds: [],
    },
    'task-13': {
      id: 'task-13',
      content: 'Sketch layout on paper',
      isComplete: true,
      subtaskIds: [],
    },
    'task-14': {
      id: 'task-14',
      content: 'Get family recipes',
      isComplete: false,
      subtaskIds: ['subtask-12', 'subtask-13', 'subtask-14'],
    },
    'task-15': {
      id: 'task-15',
      content: 'Find teacher',
      isComplete: false,
      subtaskIds: [],
    },
    'task-16': {
      id: 'task-16',
      content: 'Start taking lessons',
      isComplete: false,
      subtaskIds: [],
    },
    'task-17': {
      id: 'task-17',
      content: 'Buy fiddle',
      isComplete: true,
      subtaskIds: [],
    },
  },
  subtasks: {
    'subtask-1': {
      id: 'subtask-1',
      content: 'Opener',
      isComplete: false,
      parentId: 'task-2',
    },
    'subtask-2': {
      id: 'subtask-2',
      content: 'Slow and somber',
      isComplete: true,
      parentId: 'task-2',
    },
    'subtask-3': {
      id: 'subtask-3',
      content: 'Fast and lively',
      isComplete: true,
      parentId: 'task-2',
    },
    'subtask-4': {
      id: 'subtask-4',
      content: 'Closer',
      isComplete: true,
      parentId: 'task-2',
    },
    'subtask-5': {
      id: 'subtask-5',
      content: 'Derek',
      isComplete: false,
      parentId: 'task-6',
    },
    'subtask-6': {
      id: 'subtask-6',
      content: 'Greg',
      isComplete: true,
      parentId: 'task-6',
    },
    'subtask-7': {
      id: 'subtask-7',
      content: 'Christine',
      isComplete: true,
      parentId: 'task-6',
    },
    'subtask-8': {
      id: 'subtask-8',
      content: 'Chip',
      isComplete: true,
      parentId: 'task-6',
    },
    'subtask-9': {
      id: 'subtask-9',
      content: 'Wood',
      isComplete: true,
      parentId: 'task-11',
    },
    'subtask-10': {
      id: 'subtask-10',
      content: 'Finish',
      isComplete: false,
      parentId: 'task-11',
    },
    'subtask-11': {
      id: 'subtask-11',
      content: 'Screws',
      isComplete: false,
      parentId: 'task-11',
    },
    'subtask-12': {
      id: 'subtask-12',
      content: "Grandma's chocolate chip cookies",
      isComplete: false,
      parentId: 'task-14',
    },
    'subtask-13': {
      id: 'subtask-13',
      content: "Dad's chili",
      isComplete: false,
      parentId: 'task-14',
    },
    'subtask-14': {
      id: 'subtask-14',
      content: "Mom's mac and cheese",
      isComplete: true,
      parentId: 'task-14',
    },
  },
  projects: {
    'project-1': {
      id: 'project-1',
      color: 'red',
      title: 'Perform piano recital',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'project-2': {
      id: 'project-2',
      color: 'yellow',
      title: 'Cook dinner for friends',
      taskIds: ['task-4', 'task-5', 'task-6', 'task-7'],
    },
    'project-3': {
      id: 'project-3',
      color: 'green',
      title: 'Build rocking chair for grandma',
      taskIds: ['task-8', 'task-9', 'task-10', 'task-11'],
    },
    'project-4': {
      id: 'project-4',
      color: 'blue',
      title: 'Put together family cookbook',
      taskIds: ['task-12', 'task-13', 'task-14'],
    },
    'project-5': {
      id: 'project-5',
      color: 'orange',
      title: 'Learn the fiddle',
      taskIds: ['task-15', 'task-16', 'task-17'],
    },
  },
  projectOrder: [
    'project-1',
    'project-2',
    'project-3',
    'project-4',
    'project-5',
  ],
};

export function createNewProject(title = '') {
  return {
    title,
    id: uuid(),
    color: generateRandomColor(),
    taskIds: [],
  };
}

export function createNewTask(label = '', isSubItem = false) {
  const newTask = {
    label,
    id: uuid(),
    isComplete: false,
  };

  if (!isSubItem) {
    newTask.subItems = [];
  }

  return newTask;
}
