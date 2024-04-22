# CIJournal

CIJournal is a simple journaling application developed using HTML, CSS, and JavaScript. It allows users to create, view, update, and delete journal entries with a minimalistic user interface.

## Continuous Integration Workflow

The project includes a GitHub Actions workflow (`ci.yml`) for automating the CI process. The workflow triggers on every push to the `main` branch and includes the following steps:

- Check out the repository
- Set up the environment
- Install dependencies
- Run unit tests
- Report test results

## Testing

Unit tests are implemented for critical components of the journaling application to ensure functionality, reliability, and performance. The tests cover edge cases and handle potential errors gracefully.

### Edge Cases Covered

- Empty Input Fields
- Long Text Input
- Special Characters
- Date Format
- Concurrency
- Permissions and Authorization
- Error Handling
- Browser Compatibility

