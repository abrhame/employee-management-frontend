import React, { useEffect } from "react";
import { useDispatch,useSelector, connect } from "react-redux";
import Button from "./Button";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { deleteData } from "../services/api";
import Modal from "react-modal"
import { fetchEmployees } from "../redux/actions";
import '../style/table.css'
import EditForm from "./EditForm";

const Table = ({ employees, fetchEmployees }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.editModal.isOpen);
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);


  const handleDelete = async (_id) => {
    const userConfirmed = window.confirm("Are you sure you want to delete?");
    if (!userConfirmed) {
      return;
    }
    try {
      const deletedData = await deleteData(`employees/${_id}`);
      console.log(deletedData);
      if (deletedData.status === 200) {
        window.alert("Employee Deleted Successfully");
        dispatch({
          type: "DELETE_EMPLOYEE",
          payload: {
            id: _id,
          },
        });
      }
    } catch (error) {
      console.error("Error deleting employee", error);
    }
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_MODAL",
    })
  }

  const handleOpen = () => {
    dispatch({
      type: "OPEN_MODAL",
    })
  }


  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: 0,
      transform: 'translate(-50%, -50%)',
      border: 'none', 
      padding: 0, 
      borderRadius: '10px', 
      width: "80%",
      height: "80%",
    },
  };

  return (
    <>

      <table className="table">
        <thead className="table-header">
          <tr className="table-header-row">
            <th className="table-header-cell">Name</th>
            <th className="table-header-cell">Email</th>
            <th className="table-header-cell">Phone Number</th>
            <th className="table-header-cell">Departement</th>
            <th className="table-header-cell">Role</th>
            <th className="table-header-cell">Action</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {employees.map((item) => (
            <tr className="table-row" key={item._id}>
              <td className="table-cell">{item.name}</td>
              <td className="table-cell">{item.email}</td>
              <td className="table-cell">{item.phoneNumber}</td>
              <td className="table-cell">{item.department}</td>
              <td className="table-cell">{item.role}</td>
              <td className="table-cell">
                <Button onClick={handleOpen} Children={<FaEdit />} />
                <Button
                  onClick={() => handleDelete(item._id)}
                  Children={<FaRegTrashAlt />}
                />
              </td>
              <Modal  style={customStyles} isOpen={isOpen} onRequestClose={handleClose} contentLabel="edit">
        <EditForm handleClose={handleClose} item = {item} />
    </Modal>
            </tr>
            
          ))}
        </tbody>
        
      </table>
    </>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees.employees,
  totalEmployees: state.employees.totalEmployees,
});
const mapDispatchToProps = {
  fetchEmployees,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
