type ErrorLabelProps = {
  errorText?: string;
};

const ErrorLabel = ({ errorText }: ErrorLabelProps) => {
  return (
    <p
      style={{
        color: "red",
        margin: 0,
        paddingLeft: "4px",
        fontSize: 12,
      }}
    >
      {errorText}
    </p>
  );
};

export default ErrorLabel;
