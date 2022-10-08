import Button from "./buttonComponent/Button";

export default function Board({arr,handleClick,won}){
    return(
        <div className=' mt-2 mb-1'>
            <Button name='0' disabled={arr[0]?true:false || won} number={arr[0]} handleClick={handleClick}/>
            <Button name='1' disabled={arr[1]?true:false || won} number={arr[1]} handleClick={handleClick}/>
            <Button name='2' disabled={arr[2]?true:false || won}number={arr[2]}  handleClick={handleClick}/>
            <br/>
            <Button name='3' disabled={arr[3]?true:false || won} number={arr[3]} handleClick={handleClick}/>
            <Button name='4' disabled={arr[4]?true:false || won} number={arr[4]} handleClick={handleClick}/>
            <Button name='5' disabled={arr[5]?true:false || won} number={arr[5]} handleClick={handleClick}/>
            <br/>
            <Button name='6' disabled={arr[6]?true:false || won} number={arr[6]} handleClick={handleClick}/>
            <Button name='7' disabled={arr[7]?true:false || won} number={arr[7]} handleClick={handleClick}/>
            <Button name='8' disabled={arr[8]?true:false || won}  number={arr[8]}handleClick={handleClick}/>
        </div>
    )
}