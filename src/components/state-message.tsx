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
          ? "mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-6 text-red-900 shadow-sm"
          : "mt-10 rounded-[2rem] border border-stone-200 bg-white p-6 text-stone-900 shadow-sm"
      }
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div
          aria-hidden="true"
          className={
            isError
              ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-lg"
              : "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-lg"
          }
        >
          {isError ? "!" : "?"}
        </div>

        <div>
          <h2 className="text-lg font-semibold">{title}</h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}