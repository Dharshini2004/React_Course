const Dateformat=()=>
{
    const username="John";
    const date=new Date();
    const dateFormat=date.toLocaleDateString("en-US",
    {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
    });
    return (
        <div><p>Hello ,{username}"</p>
        <p>{dateFormat}</p>
        </div>
    );
}
export default Dateformat;