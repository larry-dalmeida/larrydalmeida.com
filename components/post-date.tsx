type PostDateProps = {
  date: string;
};

export default function PostDate({date}: PostDateProps) {
  return (
    <p className="text-sm m-0 font-semibold">
      {new Date(date).toLocaleDateString("en-GB", {
        dateStyle: "medium",
      })}
    </p>
  );
}
