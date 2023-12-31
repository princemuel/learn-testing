interface Props {
  name?: string;
}

export const Greet = (props: Props) => {
  return <div>Hey {props.name ? props.name : "Guest"}</div>;
};
