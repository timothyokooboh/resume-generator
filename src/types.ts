export interface ResumeStage {
    title: string
    value: string,
    step: number
}

export interface Job {
    title: string
    employer: string
    city: string
    country: string
    startDate: null | Date
    endDate: null | Date
    isCurrent: boolean
    description: string
}