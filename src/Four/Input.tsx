interface InputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}

export const Input: React.FC<InputProps> = ({ title, placeholder, type }) => {
  return (
    <div>
      <label className="block font-popi text-sm font-semibold" htmlFor={title}>
        {title}
      </label>
      {type === "text" && (
        <input
          className="mt-1 w-full rounded-md border-2 p-4 py-3"
          id={title}
          placeholder={placeholder}
        />
      )}

      {type === "textarea" && (
        <textarea
          className="mt-1 w-full rounded-md border-2 p-4 py-3"
          id={title}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
