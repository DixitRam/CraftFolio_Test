'use client'
import clsx from 'clsx'

interface SideBarProps {
  activeItem: string
  setActiveItem: (id: string) => void
}

const items = [
  {
    title: "Personal",
    id: "ProfileForm"
  },
  {
    title: "Projects",
    id: "ProjectForm"
  },
  {
    title: "Experience",
    id: "ExperienceForm"
  },
  {
    title: "Education",
    id: "EducationForm"
  },
]

export default function SideBar({ activeItem, setActiveItem }: SideBarProps) {
  return (
    <div className="h-[calc(100vh-4rem)] w-64 bg-gray-50 border-r">
      <nav className="p-4 space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={clsx(
              'w-full text-left px-4 py-2 rounded-lg transition-colors',
              {
                'bg-blue-100 text-custom-primary': activeItem === item.id,
                'text-gray-700 hover:bg-gray-100': activeItem !== item.id,
              }
            )}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  )
}