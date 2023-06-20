import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import index from "../api/index"
import {useDispatch} from 'react-redux'
import { addUser,removeUser } from "../store/slices/userSlice";
import { useSelector } from 'react-redux'
import{ MdDeleteForever } from 'react-icons/md'
const UserDetails = () => {
  const dispatch=useDispatch()
  const addNewUser=(e)=>{
dispatch(addUser(e));
  };
  const data =useSelector((state)=>state.user)
  const deleteuser=(e)=>{
    dispatch(removeUser(e));
      };
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={()=>addNewUser(index())}>Add New Users</button>
        </div>
        <ul>
      {data.map((cur,index)=>{
        return(<li  key={index}>{cur} <button className="btn-delete" onClick={()=>deleteuser(index)}>
          <MdDeleteForever className="delete-icon"/>
          </button></li>)

      })}
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  ul li{margin-bottom:15px;}
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
