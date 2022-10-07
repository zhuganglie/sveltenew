export const formatDate = (/** @type {string | number | Date} */ value) => {
    const date = new Date(value);
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium'
    }).format(date);
  };