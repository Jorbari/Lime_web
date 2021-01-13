import React from 'react';
import Modal from "react-bootstrap/Modal";
import CustomButton from '../custom-button/custom-button.component';
import * as Style from './execution-plan-modal.styles'

const ExecPlanModal = ({ showModal, onHide }) => {
    console.log(showModal)
    return (
        <Style.ModalContainer size={"lg"} center modalId show={showModal} onHide={onHide}>
            <Modal.Header className="modalHeader" closeButton>
                <h4>Execution Plan - New entry</h4>
            </Modal.Header>
            <Modal.Body>
                <Style.FormInput>
                    <label>Project Activity:</label>
                    <input
                        type="text"
                        name="item"
                        value={''}
                        onChange={null}
                    />
                </Style.FormInput>

                <Style.FormGroupRow>
                    <Style.FormInput>
                        <label>Start Date:</label>
                        <input
                            type="date"
                            name="start_date"
                            value={''}
                            onChange={null}
                        />
                    </Style.FormInput>

                    <Style.FormInput>
                        <label>End Date:</label>
                        <input
                            type="date"
                            name="end_date"
                            value={''}
                            onChange={null}
                        />
                    </Style.FormInput>
                </Style.FormGroupRow>

                <Style.FormInput>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="item"
                        value={''}
                        onChange={null}
                    />
                </Style.FormInput>

                <Style.FormInput>
                    <input
                        type="text"
                        name="item"
                        value={'Assign To Teammate'}
                        onChange={null}
                    />
                </Style.FormInput>
                <Style.DoneButton primary>Done</Style.DoneButton>
            </Modal.Body>
        </Style.ModalContainer>
    )
}

export default ExecPlanModal;