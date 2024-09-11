export default function HigherorderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full">{children}</div>;
}
