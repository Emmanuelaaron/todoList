import todo from '../functions/todo';

describe('Module Todo', () => {
  it('gets a title from toDo object', () => {
    expect(todo('name', 'description', '01/02/2022', 'high').name).toBe('name');
  });

  it('gets description from toDo object', () => {
    expect(todo('name', 'description', '01/02/2022', 'high').description).toBe('description');
  });

  it('gets DueDate from toDo object', () => {
    expect(todo('name', 'description', '01/02/2022', 'high').dueDate).toBe('01/02/2022');
  });

  it('Get priority from toDo object', () => {
    expect(todo('name', 'description', '01/02/2022', 'high').priority).toBe('high');
  });

  it('fields undefined if not provided', () => {
    expect(todo().title).toBe(undefined);
  });
});