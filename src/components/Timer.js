import {useEffect,useContext} from 'react'
import { QuizContext } from '../Context/QuizHolder';
const Timer = (setStop) => {
    const {timer,setTimer,changetimer} = useContext(QuizContext);
        useEffect(() => {
            // if(timer===0) return setStop(true);
            const interval=setInterval(()=>{
                setTimer((prev)=>prev-1);
            },1000);
            return ()=>clearInterval(interval);
        }, [timer])
    useEffect(()=>{
        setTimer(changetimer);
    },[]);
    return timer
}

export default Timer
