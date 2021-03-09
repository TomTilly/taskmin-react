import { v4 as uuid } from 'uuid';

export const PROJECTS = [
  {
    id: uuid(),
    color: 'red',
    title: 'Perform piano recital',
    tasks: [
      {
        id: uuid(),
        label: 'Book concert hall',
        isComplete: false,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Choose repertoire',
        isComplete: false,
        subItems: [
          {
            id: uuid(),
            label: 'Opener',
            isComplete: true,
          },
          {
            id: uuid(),
            label: 'Slow and somber',
            isComplete: false
          },
          {
            id: uuid(),
            label: 'Fast and lively',
            isComplete: true,
          },
          {
            id: uuid(),
            label: 'Closer',
            isComplete: false,
          }
        ]
      },
      {
        id: uuid(),
        label: 'Learn pieces',
        isComplete: false,
        subItems: []
      }
    ]
  },
  {
    id: uuid(),
    color: 'yellow',
    title: 'Cook dinner for friends',
    tasks: [
      {
        id: uuid(),
        label: 'Choose dish',
        isComplete: true,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Shop for ingredients',
        isComplete: false,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Get friend\'s availability',
        isComplete: true,
        subItems: [
          {
            id: uuid(),
            label: 'Derek',
            isComplete: true,
          },
          {
            id: uuid(),
            label: 'Greg',
            isComplete: true
          },
          {
            id: uuid(),
            label: 'Christine',
            isComplete: true,
          },
          {
            id: uuid(),
            label: 'Chip',
            isComplete: true,
          }
        ]
      },
      {
        id: uuid(),
        label: 'Clean apartment',
        isComplete: false,
        subItems: []
      },
    ]
  },
  {
    id: uuid(),
    color: 'green',
    title: 'Build rocking chair for grandma',
    tasks: [
      {
        id: uuid(),
        label: 'Choose type of wood',
        isComplete: true,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Look up blueprint',
        isComplete: false,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Choose wood finish',
        isComplete: true,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Get parts',
        isComplete: false,
        subItems: [
          {
            id: uuid(),
            label: 'Wood',
            isComplete: true,
          },
          {
            id: uuid(),
            label: 'Finish',
            isComplete: false
          },
          {
            id: uuid(),
            label: 'Screws',
            isComplete: false,
          }
        ]
      },
    ]
  },
  {
    id: uuid(),
    color: 'blue',
    title: 'Put together family cookbook',
    tasks: [
      {
        id: uuid(),
        label: 'Get supplies',
        isComplete: false,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Sketch layout on paper',
        isComplete: true,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Grandma\'s chocolate chip cookies',
        isComplete: false,
        subItems: [
          {
            id: uuid(),
            label: 'Grandma\'s chocolate chip cookie',
            isComplete: false,
          },
          {
            id: uuid(),
            label: 'Dad\'s chili',
            isComplete: false
          },
          {
            id: uuid(),
            label: 'Mom\'s mac and cheese',
            isComplete: true,
          }
        ]
      },
      {
        id: uuid(),
        label: 'Format recipes',
        isComplete: false,
        subItems: []
      },
    ]
  },
  {
    id: uuid(),
    color: 'orange',
    title: 'Learn the fiddle',
    tasks: [
      {
        id: uuid(),
        label: 'Find teacher',
        isComplete: false,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Start taking lessons',
        isComplete: false,
        subItems: []
      },
      {
        id: uuid(),
        label: 'Buy fiddle',
        isComplete: true,
        subItems: []
      },
    ]
  },
];