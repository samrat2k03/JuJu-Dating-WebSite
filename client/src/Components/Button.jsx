export const Button = ({label, iconURL}) => {
    return (
      <button 
      className="flex justify-center items-center gap-2 px-5 py-3 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ">
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full bg-white w-5 h-5"
          />
        )}
      </button>
    )
  }
