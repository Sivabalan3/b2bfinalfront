export const TextInput = ({type ,onChangeText,className,placeholder,name,value}) =>{
    return(<input type={type} onChange={onChangeText} className={className} placeholder={placeholder} name={name} value={value}/>)
}