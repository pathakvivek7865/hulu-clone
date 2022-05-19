
function HeaderItem({ title, Icon }) {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-10 hover:text-white sm:w-20">
            <Icon className="h-6 mb-1 group-hover:animate-bounce" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItem