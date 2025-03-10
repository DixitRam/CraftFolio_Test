interface ProgressBarProps {
  currentStep: string;
}

const steps = [
  { id: "ProfileForm", label: "Personal" },
  { id: "ProjectForm", label: "Projects" },
  { id: "ExperienceForm", label: "Experience" },
  { id: "EducationForm", label: "Education" }
];

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const currentIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center flex-1"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                transform transition-all duration-500 ease-in-out
                ${index <= currentIndex 
                  ? 'bg-custom-primary text-white scale-110 shadow-lg' 
                  : 'bg-gray-200 text-gray-500 scale-100'}
                ${index < currentIndex 
                  ? 'animate-bounce-once' 
                  : ''}`}
            >
              {index <= currentIndex ? (
                <svg
                  className={`w-4 h-4 transition-opacity duration-300 ${
                    index < currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className={`text-sm transition-all duration-500 ${
              index <= currentIndex 
                ? 'text-custom-primary font-medium' 
                : 'text-gray-500'
            }`}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-custom-primary rounded-full transition-all duration-700 ease-out"
          style={{ 
            width: `${(currentIndex + 1) * 25}%`,
            boxShadow: '0 0 10px rgba(var(--custom-primary), 0.5)'
          }}
        >
          <div className="absolute top-0 right-0 h-full w-4 bg-white/20 animate-shimmer" />
        </div>
      </div>
    </div>
  );
}