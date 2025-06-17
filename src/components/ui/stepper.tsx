import React from 'react'

export type Step = {
  id: string
  name: string
  status: 'complete' | 'current' | 'upcoming'
  shortName?: string // Optional short name for responsive display
}

interface Props {
  steps: Step[]
}

const StepProgressBar: React.FC<Props> = ({ steps }) => {
  return (
    <ol className="flex items-center justify-between w-full p-3 space-x-2 text-md font-medium text-center text-white rounded-lg sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
      {steps.map((step, index) => (
        <li 
          key={step.id} 
          className="flex items-center text-white"
        >
          <span 
            className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${
              step.status === 'complete'
                ? 'bg-green-600 border-green-600'
                : step.status === 'current'
                  ? 'border-white'
                  : 'border-white'
            }`}
          >
            {step.status === 'complete' ? (
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : step.status === 'current' ? (
              <span className="text-white">{step.id}</span>
            ) : (
              <span className="text-white">{step.id}</span>
            )}
          </span>
          
          {step.name.split(' ').map((part, i) => (
            <React.Fragment key={i}>
              {i > 0 ? (
                <span className="hidden sm:inline-flex sm:ms-2">{part}</span>
              ) : (
                <span>{part}</span>
              )}
            </React.Fragment>
          ))}
          
          {index !== steps.length - 1 && (
            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
            </svg>
          )}
        </li>
      ))}
    </ol>
  )
}

export default StepProgressBar