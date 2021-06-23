import { Project } from '../functions/project';

describe('Module Project', () => {
  it('initializes the Project', () => {
    expect(new Project(' New Project')).toBeTruthy();
  });
});