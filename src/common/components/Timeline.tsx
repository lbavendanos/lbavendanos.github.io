import { dtFormat } from 'lib/utils/date'
import React from 'react'
import {
  VueIcon,
  NextIcon,
  MysqlIcon,
  ReactIcon,
  LaravelIcon,
  FlutterIcon,
  TailwindIcon,
  BootstrapIcon,
} from './Icons'

export interface Item {
  url: string
  title: string
  subtitle: string
  description: string
  timeStart: string
  timeEnd?: string
  tools?: string[]
}

export type Items = Item[]

export interface TimelineProps {
  items: Items
}

export default function Timeline({ items }: TimelineProps) {
  const toolIconClassName = 'inline-block w-4 h-4'

  return (
    <ol className="relative border-0 md:border-l md:border-gray-200">
      {items.map((item, index) => (
        <li key={index} className="mb-10 ml-0 md:ml-5">
          <div className="hidden absolute md:flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white mt-0.5">
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
          <h4 className="text-lg leading-snug font-semibold text-blue-400">
            {item.title}
          </h4>
          <p className="font-semibold text-base leading-snug">
            {item.subtitle}
          </p>
          <p className="flex gap-x-1 mb-3 text-sm font-normal leading-snug text-gray-400">
            <time dateTime={item.timeStart}>
              {dtFormat(new Date(item.timeStart))}
            </time>
            {item.timeEnd && (
              <>
                -
                <time dateTime={item.timeEnd}>
                  {dtFormat(new Date(item.timeEnd))}
                </time>
              </>
            )}
          </p>
          <p className="mb-3 text-base font-normal leading-snug">
            {item.description}
          </p>
          {item.tools && (
            <div className="space-x-2">
              <p className="text-base font-semibold inline-block">Tools:</p>
              {item.tools?.map((tool, index) => (
                <React.Fragment key={index}>
                  {tool === 'react' && (
                    <ReactIcon className={toolIconClassName} />
                  )}
                  {tool === 'next' && (
                    <NextIcon className={toolIconClassName} />
                  )}
                  {tool === 'vue' && <VueIcon className={toolIconClassName} />}
                  {tool === 'laravel' && (
                    <LaravelIcon className={toolIconClassName} />
                  )}
                  {tool === 'flutter' && (
                    <FlutterIcon className={toolIconClassName} />
                  )}
                  {tool === 'tailwind' && (
                    <TailwindIcon className={toolIconClassName} />
                  )}
                  {tool === 'bootstrap' && (
                    <BootstrapIcon className={toolIconClassName} />
                  )}
                  {tool === 'mysql' && (
                    <MysqlIcon className={toolIconClassName} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}
