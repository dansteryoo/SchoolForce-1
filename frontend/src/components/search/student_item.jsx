import React from 'react';

const studentItem = props => {
    return (
    <li>
            <input className="checkbox" checked={Boolean(props.selectedStudents[props.student._id])} type="checkbox" name="student.name" onChange={() => props.handleStudentCheck(props.student)}/>
        <div className="student-name">
            <p>First Name: {props.student.firstName}</p>
            <p>Last Name: {props.student.lastName}</p>
        </div>
        <div className='allergies'>Allergies: {props.student.allergies.map( (allergy, idx) => (
            <p key={`allergy${idx}`}>{idx + 1}- {allergy}</p>
        ))}</div>
         <div className='specialNeeds'>Special Needs: {props.student.specialNeeds.map( (specialNeed, idx) => (
             <p key={`specialNeed${idx}`}>{idx + 1}- {specialNeed}</p>
        ))}</div>
         <div className='medicalConditions'>Medical Conditions: {props.student.medicalConditions.map( (medicalCondition, idx) => (
             <p key={`medicalCondition${idx}`}>{idx + 1}- {medicalCondition}</p>
        ))}</div>
        <div className='gender'><p>Gender: {props.student.gender}</p></div>
        <div className='grade'><p>Grade: {props.student.grade}</p></div>
    </li>
    )}

export default studentItem;