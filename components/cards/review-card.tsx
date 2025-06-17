interface ReviewCardProps {
  name: string
  initials: string
  rating: number
  review: string
}

export function ReviewCard({ name, initials, rating, review }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center mr-3">
          <span className="font-medium text-neutral-700">{initials}</span>
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-500" : "text-neutral-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-neutral-700">{review}</p>
    </div>
  )
}
