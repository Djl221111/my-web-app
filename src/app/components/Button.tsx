interface ButtonArgs{
    icon: string,
    label: string,
    bgColor: string
    onClick?: () => void;
  }
function Button({icon, label, bgColor, onClick}: ButtonArgs){
    return(
      <div className="my-2">
        <button onClick={onClick} className="w-full px-3 py-2 flex items-center bg-gray-300 rounded-lg">
          <div className={`w-6 h-6 rounded-full text-center text-white ${bgColor}`}>
            {icon}
          </div>
          <div>
            {label}
          </div>
        </button>
      </div>
    );
}

export{Button};