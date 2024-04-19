import { Add } from "@mui/icons-material";

interface Props {
  name: string;
}

export default function Test({ name }: Props) {
  return (
    <>
      <Add />
      <div>{name}</div>
    </>
  );
}
