export const formatServerErrors = (errors: string[]) => {
  const formattedErrors: string[] = [];

  Object.keys(errors).forEach((key, index) => {
    formattedErrors.push(`${key}: ${errors[index]}`);
  });

  return formattedErrors;
};
