const { createEntry } = require('./script');

test('createEntry function creates a new entry', () => {
 
  const title = 'Test Entry';
  const content = 'This is a test entry';
  const entry = createEntry(title, content);
  expect(entry).toMatchObject({ title, content });
});

test('createEntry function handles empty title', () => {

  const title = '';
  const content = 'This is a test entry';
  const entry = createEntry(title, content);
  expect(entry.title).toBe('');
});

test('createEntry function handles empty content', () => {
 
  const title = 'Test Entry';
  const content = '';
  const entry = createEntry(title, content);
  expect(entry.content).toBe('');
});
