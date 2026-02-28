const getStoreApp=()=>{
    const storedApps = JSON.parse(localStorage.getItem("Installed")) || [];
    return storedApps;
}

const AddToStoredDB=(id)=>{

    const storedAppData=getStoreApp();
    if(storedAppData.includes(id)){
        alert("already exist");
    }else{
        storedAppData.push(id);
        const data=JSON.stringify(storedAppData);
        localStorage.setItem("Installed",data)

    }

}
const RemveFromStoredDB=(id)=>{
    const RemovedAppData=getStoreApp();
    const updatedApps = RemovedAppData.filter(appId => appId !== id);
    localStorage.setItem("Installed", JSON.stringify(updatedApps));
}
export {AddToStoredDB,getStoreApp,RemveFromStoredDB};