type ErrorMessageProps = {
  message: string
}

function ErrorMessage({message}: ErrorMessageProps) {
  return (
    <p className="bg-red-600 text-white font-bold p-2 text-center rounded-lg">{message}</p>
  )
}

export default ErrorMessage