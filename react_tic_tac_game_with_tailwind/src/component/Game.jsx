import { useState } from "react";
import Board from "./boardComponent/Board";
const isWinner = (arr)=>{
    //Horizontal check
    if(arr[0] && arr[0]===arr[1] && arr[1]===arr[2]) return arr[0]
    if(arr[3] && arr[3]===arr[4] && arr[4]===arr[5]) return arr[3]
    if(arr[6] && arr[6]===arr[7] && arr[7]===arr[8]) return arr[6]
    
    //vertical check
    if(arr[0] && arr[0]===arr[3] && arr[3]===arr[6]) return arr[0]
    if(arr[1] && arr[1]===arr[4] && arr[4]===arr[7]) return arr[1]
    if(arr[2] && arr[2]===arr[5] && arr[5]===arr[8]) return arr[2]

    //Left diagonal chek
    if(arr[0] && arr[0]===arr[4] && arr[4]===arr[8]) return arr[0]
    if(arr[2] && arr[2]===arr[4] && arr[4]===arr[6]) return arr[2]

    //else
    return ''
}
const isDraw = (arr)=>{
    let X = 0;
    let O  = 0;
    for(let i = 0 ; i<arr.length ; i++){
        // console.log("hello")
        if(arr[i]==='X') X = X+1
        if(arr[i]==='O') O = O+1
    }
    // console.log(X+O)
    // console.log(arr.length)
    if(X+O===9) return true;
    return false;
}
export default function Game(){
    const [data,setData] = useState({
        isX:'X',
        arr: [],
        winner:"",
        won:false,
        draw:false,
    });
    const [hisData,setHis] = useState({
        Data:[]
    })
    const [draw,setDraw] = useState(false)
    const handleClick = (e)=>{
        // e.preventDefault()
        const tarr = Array.from(data.arr)
        // console.log(e.target.name)
        // console.log(typeof(e.target.name))
        tarr[parseInt(e.target.name)] = data.isX 
        if(isWinner(tarr)){
            setData((prev)=>({
                ...prev,
                winner: data.isX,
                won: true,
                arr: Array.from(tarr),
                isX: prev.isX === 'X' ? 'O' : 'X',
            }))
        }else{
            
            setData((prev)=>({
                ...prev,
                arr: Array.from(tarr),
                isX: prev.isX === 'X' ? 'O' : 'X',
            }))

            const thistory = Array.from(hisData.Data)
            thistory.push(data)

            setHis({
                Data: thistory
            })

            console.log(tarr)
            // console.log(isDraw(tarr))
            // console.log(hisData.Data)
            
            if(isDraw(tarr)){
                setDraw(true)
                console.log("hello")
            }
            
        }
        // console.log(typeof(hisData.Data))
    }
    const handleHistory = (e)=>{
        setData(hisData.Data[e.target.name])
        const tD = hisData.Data;
        const newTd = tD.splice(0,e.target.name)
        setHis({
            Data:Array.from(newTd)
        })
        setDraw(false)
        // console.log(e.target.name)
    }
    return(
        <div className="flex m-64">
            <div>
                <div className="pl-2">{!data.won && !draw ? `${data.isX}'s Turn` : `‎`}</div>
                <Board arr={data.arr} won={data.won} handleClick={handleClick}/>
                <div className="pl-2">
                    {data.won ? `${data.winner} is The Winner` : draw? `Draw`: 'No Winner'}
                </div>
             </div>
             <div className="mt-8 ml-2">
                {hisData.Data.map((_,ind)=><button onClick={handleHistory}  className="text-sky-700 flex flex-row border border-sky-800 rounded-lg w-32 h-8 px-2 py-1 my-1 justify-center" name={ind} key={ind}>Goto Step {ind}</button>)}
             </div>
        </div>
        
    )
}