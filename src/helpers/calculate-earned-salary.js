const calculateEarnedSalary = ({ ellapsedTime, hourlyRate }) => Math.ceil(ellapsedTime / 3600 * hourlyRate || 0)

export default calculateEarnedSalary
