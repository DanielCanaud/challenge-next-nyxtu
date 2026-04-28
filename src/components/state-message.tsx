type StateMessageProps = {
    title: string;
    description: string;
    status?: "empty" | "error";
  };
  
  export function StateMessage({
    title,
    description,
    status = "empty",
  }: StateMessageProps) {
    const isError = status === "error";
  
    return (
      <div
        role={isError ? "alert" : "status"}
        className={
          isError
            ? "mt-10 rounded-3xl border border-red-200 bg-red-50 p-6 text-red-900"
            : "mt-10 rounded-3xl border border-stone-200 bg-white p-6 text-stone-900 shadow-sm"
        }
      >
        <h2 className="text-lg font-semibold">{title}</h2>
  
        <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">
          {description}
        </p>
      </div>
    );
  }