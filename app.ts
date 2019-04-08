export default app => {
  app.validator.addRule('jsonString', (_rule, value) => {
    try {
      JSON.parse(value);
    } catch (err) {
      return 'must be json string';
    }
  });
};
