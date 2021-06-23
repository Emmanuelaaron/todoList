import todo from '../functions/todo';

describe('MODULE Todo', () => {
  it('gets a title from toDo object', () => {
    expect(todo('name', 'description', '15/12/20', 'high').name).toBe('name');
  });

  it('gets description from toDo object', () => {
    expect(todo('name', 'description', '15/12/20', 'high').description).toBe('description');
  });

  it('gets DueDate from toDo object', () => {
    expect(todo('name', 'description', '15/12/20', 'high').dueDate).toBe('15/12/20');
  });

  it('Get priority from toDo object', () => {
    expect(todo('name', 'description', '15/12/20', 'high').priority).toBe('high');
  });
});