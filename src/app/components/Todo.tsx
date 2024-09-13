interface TodoArgs{
    title: string,
    expireDate: number
}
function convertTimestampToDateString(timestamp: number){
    let date = new Date(timestamp);
    return `${date.toDateString()}`;
}
function Todo({title,expireDate} : TodoArgs){
    return (
        <div className="border rounded-md shadow-md
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold p-3 h-24">
        <div> {title} </div>
        <div className="text-sm font-light"> {convertTimestampToDateString(expireDate)} </div> 
    </div>
    );
}
export {Todo};