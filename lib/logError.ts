export const logError = (error: Error, additionalInfo?: any): void => {
    console.error(`Error: ${error.message}`, additionalInfo, error)
}