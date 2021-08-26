
export default function ProfileCard({ user }) {
    return (
        <figure className="md:flex bg-gray-100 rounded-xl m-3  p-8 md:p-0">
            <div className="flex rounded-lg overflow-hidden">
                <img className="w-32 h-32 md:h-auto md:rounded-none rounded-full mx-auto md:mx-0 " src={user.picture} alt="" />

            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

                <figcaption className="font-medium">
                    <div className="text-blue-600">
                        {user.name}
                    </div>
                    <div className="text-gray-500">
                        {user.email}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}