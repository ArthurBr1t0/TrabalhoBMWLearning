import NextLink from "next/link";

export function Link(props: React.ComponentProps<typeof NextLink>) {
  return <NextLink style={{ color: "red" }} {...props} />;
}
