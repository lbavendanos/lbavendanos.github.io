export interface Item {
  url: string
  title: string
  description: string
  timeStart: string
  timeEnd?: string
}

export type Items = Item[]

export interface HomeTimelineProps {
  items: Items
}

const dateFormat = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: import.meta.env.APP_TIMEZONE,
  }).format(date)

export default function HomeTimeline({ items }: HomeTimelineProps) {
  return (
    <ol className="relative border-0 md:border-l md:border-gray-200">
      {items.map((item, index) => (
        <li key={index} className="mb-10 ml-0 md:ml-5">
          <div className="hidden absolute md:flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white mt-1">
            <svg
              aria-hidden="true"
              className="w-3 h-3 text-blue-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <a
            href={item.url}
            className="flex items-center mb-1 text-lg font-semibold text-blue-400 hover:text-blue-800"
            target="_blank"
          >
            {item.title}
          </a>
          <div className="flex gap-x-1 mb-2 text-sm font-normal leading-none text-gray-400">
            <time dateTime={item.timeStart}>
              {dateFormat(new Date(item.timeStart))}
            </time>
            {item.timeEnd && (
              <>
                -
                <time dateTime={item.timeEnd}>
                  {dateFormat(new Date(item.timeEnd))}
                </time>
              </>
            )}
          </div>
          <p
            className="mb-4 text-base font-normal leading-snug"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </li>
      ))}
    </ol>
  )
}
