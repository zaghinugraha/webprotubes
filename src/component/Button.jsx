
const Button = (props) => {
    return (
        <button className="bg-white text-sky-800 font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-grey-200 duration-500">
            {props.children}
        </button>
    )
}

export default Button