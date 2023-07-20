export const Calc=()=>{
    const add=(a,b)=>{
        let sum=a+b       
        return sum
    }
    const sub=(a,b)=>{
        let min=a-b
         return min
    }
    const mul=(a,b)=>{
        let multiply=a*b
        return multiply
    }
    const div=(a,b)=>{
        let divst=a/b
        return divst
    }
    
return (
    <>
    <h1>Add value{add(3,5)}</h1>
    <h1>sub value{sub(8,5)}</h1>
    <h1>sub value{mul(3,5)}</h1>
    <h1>sub value{div(48,5)}</h1>
    <input type="text" value="shraddga"/>
    </>
)
}
export default Calc