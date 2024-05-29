type ErrorObject = {
  message: string;
};

export const formatErrors = (data: ErrorObject[]): string[] => {
  return Object.values(data).map((error) => error.message);
};
