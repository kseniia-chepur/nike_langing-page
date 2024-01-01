const Button = ({ label, iconURL }) => {
  return (
    <button 
      className="flex justify-center items-center gap-2 rounded-full px-7 py-4 text-lg leading-none
      border font-montserrat bg-coral-red text-white border-coral-red">
      {label}
      <img 
        src={iconURL} 
        alt="arrow right icon" 
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  )
}

export default Button;