type ErrorsListPropsType = {
  errorsList: string[];
};
export function ErrorsList(props: ErrorsListPropsType) {
  const { errorsList } = props;
  return (
    <ul className="error-messages">
      {errorsList &&
        errorsList.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{item}</li>
        ))}
    </ul>
  );
}
