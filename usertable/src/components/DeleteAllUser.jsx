import React from "react";
import styled from "styled-components";
import {useDispatch} from 'react-redux'
import { deleteUsers } from "../store/slices/userSlice";
export const DeleteAllUser = () => {
  const dispatch=useDispatch();
  const deleteall=()=>{
dispatch(deleteUsers());
  }
  return (
    <Wrapper>
      <button className="clear-btn" onClick={()=>deleteall()}>Delete All User</button>
    </Wrapper>
  );
};
const Wrapper=styled.section`
.clear-btn{
  text-transform:capitalize;
  background-color:#db338a;
  margin-top:3vh;
  padding:2vh;
}`
