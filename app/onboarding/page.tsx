import ProfileForm from "@/components/custom/onBoarding/personal_info"

export default function onboarding() {
  return (
    <div className="flex justify-center">
      <div className=" h-auto w-1/2 p-8">
        <ProfileForm />
      </div>
    </div>
  )
}