import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, } from "@fortawesome/free-regular-svg-icons";
import { faHome ,faUserDoctor,faEye } from "@fortawesome/free-solid-svg-icons";

const Font=()=>{
return(
    
library.add(faBell,faHome,faUserDoctor,faEye)
)
}

export default {
    Font
}






