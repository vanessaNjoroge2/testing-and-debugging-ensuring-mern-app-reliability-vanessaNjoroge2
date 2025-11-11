// backend/utils/bugValidator.js
function validateBug(bug) {
  if (!bug.title || !bug.description) {
    throw new Error('Title and description are required');
  }
  return true;
}

module.exports = { validateBug };
