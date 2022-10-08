export default function Button({disabled,name,number,handleClick}){
    return(
        <button disabled={disabled} name={name} className='bg-sky-500 border-2 border-sky-600 rounded-lg w-10 h-10 ml-0.5 mb-0.5 text-white font-bold' onClick={handleClick}>{number ? number:'‎'}</button>
    )
}