type LabelProps = {
  label: string;
  required?: boolean;
};

const Label = ({ label, required }: LabelProps) => {
  return (
    <p style={{ marginTop: 0, marginBottom: "8px", paddingLeft: "4px" }}>
      {label}
      {required ? <span style={{ color: "red" }}> *</span> : ""}
    </p>
  );
};

export default Label;
