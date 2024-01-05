import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/home.css";
import Header from "../componenets/Header";
import Button from "../componenets/Button";
import Table from "../componenets/Table";
import Modal from 'react-modal';
import RegisterForm from "../componenets/RegisterForm";
import { fetchEmployees } from "../redux/actions";




const Home = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.registerModal.isOpen);
    const totalEmployees = useSelector(state => state.employees.totalEmployees);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      }
    
      const handleNextPage = () => {
        const totalPages = Math.ceil(totalEmployees / 5); // Adjust based on your backend configuration
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      }

      useEffect(() => {
        dispatch(fetchEmployees(currentPage));
      }, [dispatch, currentPage]);
    
    const handleClose = () => {
        dispatch({
            type: "REGISTER_CLOSE_MODAL",
        })
    }

    const handleOpen = () => {
        dispatch({
            type: "REGISTER_OPEN_MODAL",
        })
    }
    const handleRegister = () => {
        console.log("Register")
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
    return <>
        <Header />
        <div className="home-body">
        <Button onClick={handleOpen} Children="Register" />
        <div className="scrollable-table">
        <Table />
        <div className="pagination">
            <Button onClick={handlePrevPage} Children="Prev"/>
            <Button onClick={handleRegister} Children={String(currentPage)}/>
            <Button onClick={handleNextPage} Children="Next"/> 
        </div>
        </div>
        

        </div>
        <Modal style={customStyles} isOpen={isOpen} onRequestClose={handleClose} contentLabel="Modal" >
            <RegisterForm handleClose={handleClose} />
        </Modal>
    </> 
}


export default Home;