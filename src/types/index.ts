export type ErrorResponse = {
  status: string;
  message: string;
};
export type ListResponse<Data> = {
  list: Data[];
};
