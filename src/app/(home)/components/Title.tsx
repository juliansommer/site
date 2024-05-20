export default function Title({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold transition-all group-hover:text-green-400">
        {text}
      </h1>
      <div className="h-2 w-40 rounded-full bg-green-500"></div>
      <div className="h-2 w-40 translate-x-2 rounded-full bg-indigo-500"></div>
    </div>
  )
}
