import { SearchBox } from "./SearchBox";
import { Button } from "./Button";
interface SideBarArgs{
  setPageToAll: () =>void
  setPageToToday:() =>void
  setPageToFinished:() =>void
  setPageToAdd:() =>void
}
function SideBar({setPageToAll, setPageToToday, setPageToFinished, setPageToAdd}: SideBarArgs){
    return (
      <div className="bg-gray-200 w-64 flex flex-col p-4">
        <SearchBox/>
        <div className="flex-1">
          <Button icon="7" label="最近" bgColor="bg-blue-600" onClick={setPageToToday}/>
          <Button icon="全" label="全部" bgColor="bg-gray-600" onClick={setPageToAll}/>
          <Button icon="完" label="完成" bgColor="bg-red-600" onClick={setPageToFinished}/>
        </div>
        <div>
          <Button icon="+" label="添加代办" bgColor="bg-gray-600" onClick={setPageToAdd}/>
        </div>
      </div>
    );
}
export {SideBar};