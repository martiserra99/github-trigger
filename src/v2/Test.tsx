import AddIcon from "../icons/add-icon";

interface TestProps {
  name: string;
}

export default function Test({ name }: TestProps) {
  return (
    <>
      <AddIcon />
      <div>{name}</div>
    </>
  );
}
