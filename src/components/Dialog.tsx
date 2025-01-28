export const Dialog: React.FC<{
  dialogRef: React.RefObject<HTMLDialogElement>;
  children: React.ReactNode;
  title: string;
}> = ({ dialogRef, children, title }) => (
  <dialog
    ref={dialogRef}
    className="bg-green-50 px-4 rounded-lg py-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative w-[calc(100vw-2rem)] max-w-[32rem] backdrop-blur-lg "
  >
    <header className="flex justify-between mb-8">
      <h2 className="font-bold text-xl md:text-2xl">{title}</h2>
      <form method="dialog">
        <button title={`Close ${title}`} className="" autoFocus>
          ❌
        </button>
      </form>
    </header>
    {children}
  </dialog>
);
