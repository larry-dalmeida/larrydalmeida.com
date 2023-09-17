type TagProps = {
    title: string;
  };
  
  export const Tag = ({ title }: TagProps) => (
    <span className="lowercase text-xs bg-slate-800 rounded-md py-1 px-2">
      {title}
    </span>
  );
  
  type TagsProps = {
    tags: string[];
  };
  
  export const Tags = ({ tags }: TagsProps) => (
    <ul className="space-x-2 flex list-none p-0 m-0">
      {tags.map((tag) => (
        <li key={tag} className="p-0">
          <Tag title={tag} />
        </li>
      ))}
    </ul>
  );