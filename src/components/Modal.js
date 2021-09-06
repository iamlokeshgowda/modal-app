import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'

function Modal() {
    const {isModalOpen, closeModal} = useGlobalContext()
    return (
        <div className={`${isModalOpen?'modal-overlay show-modal':'modal-overlay'}`}>
            <div className="modal-container">
                <h3>Modal content</h3>
                <button onClick={closeModal} className="modal-close-btn">
                    <FaTimes />
                </button>
            </div>            
        </div>
    )
}

export default Modal
