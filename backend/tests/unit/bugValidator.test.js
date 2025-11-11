// backend/tests/unit/bugValidator.test.js

// Update the path to go up two levels to reach utils/
const { validateBug } = require('../../utils/bugValidator');

describe('Bug Validator', () => {
  it('should pass for valid bug', () => {
    const validBug = {
      title: 'Sample bug',
      description: 'A valid bug description'
    };
    const result = validateBug(validBug);
    expect(result).toBe(true);
  });

  it('should fail for invalid bug', () => {
  const invalidBug = { title: '', description: '' };
  expect(() => validateBug(invalidBug)).toThrow('Title and description are required');
});

});
