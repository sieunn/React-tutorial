import React from "react";
import {Link} from 'react-router-dom';
function Navbar (){
    return(
        <div>
        <Link to="/userlist">사용자추가하기</Link><br />
        <Link to="/todolist">할일추가하기</Link>
        </div>
    )
}
export default Navbar;