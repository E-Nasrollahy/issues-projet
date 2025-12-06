import { Label } from "./ui/label";
import { Input } from "./ui/input";

type propsType ={
    id : string
    type : string
    placeholder : string
    label ?: string
    discription ?: string
    register ?: object
    errorInputClassName ?: string 
    errorSpanClassName ?: string 
}

const InputTamplate = ({id , type , placeholder , discription , label , register , errorInputClassName , errorSpanClassName}:propsType) => {
    return <div className="flex justify-center flex-col gap-2 w-full">
        <Label className="capitalize" htmlFor={id}>{label ? label : id}</Label>
        <Input className={`bg-gray-200 ${errorInputClassName}  border-0`} {...register} id={id} type={type} placeholder={placeholder}></Input>
        <span className={`text-xs ${errorSpanClassName} text-gray-400`}>{discription === "false" ?"":  discription }</span> 
    </div>
}

export default InputTamplate;