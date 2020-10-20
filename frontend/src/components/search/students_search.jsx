import React from 'react'
import StudentItem from './student_item'
import { Link } from 'react-router-dom'
import "./students_search.css";

class StudentsSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: {
                text: '',
                allergies: false,
                specialNeeds: false,
                medicalConditions: false,
                gender: '',
                grade: ''
            },
            selectedStudents: {},
            checkedAll: false, 
            sortType: "firstName",
            sortFunc: (x, y) => { if (x < y) return - 1; return 1;}
        }
        this.filterUpdate = this.filterUpdate.bind(this);
        this.handleStudentCheck = this.handleStudentCheck.bind(this);
        this.handleSortClick = this.handleSortClick.bind(this);
    }

    filterUpdate(field) {
        return e => {
            let newQuery = Object.assign({}, this.state.query, { [field]: e.target.value });
            let newState = Object.assign({}, this.state, { query: newQuery })
            this.setState(newState);
        }
    };

    handleFilterCheck(field) {
        return () => {
            let newQuery = Object.assign({}, this.state.query, { [field]: !this.state.query[field] });
            let newState = Object.assign({}, this.state, { query: newQuery })
            this.setState(newState);
        }
    }

    handleStudentCheck(student) {
        if (this.state.selectedStudents[student._id]) {
            let newSelectedStudents = delete this.state.selectedStudents[student._id];
            newSelectedStudents = Object.assign({}, this.state.selectedStudents, newSelectedStudents);
            let newState = Object.assign({}, this.state, { selectedStudents: newSelectedStudents })
            this.setState(newState);
        } else {
            let newSelectedStudents = Object.assign({}, this.state.selectedStudents, { [student._id]: student });
            let newState = Object.assign({}, this.state, { selectedStudents: newSelectedStudents })
            this.setState(newState);
        }
    }

    componentDidMount() {
        this.props.fetchAllStudents();
        this.props.fetchAllUsers();
    }


    studentFilters (student) {
        
        let medicalvar = true;
        let namevar = true;
        let gendervar = true;
        let gradevar = true; 

        if (this.state.query.allergies || this.state.query.specialNeeds || this.state.query.medicalConditions) {
            medicalvar = false;
            if (this.state.query.allergies && Boolean(student.allergies[0])) {
                medicalvar = true;
            }
            if (this.state.query.specialNeeds && Boolean(student.specialNeeds[0])) {
                medicalvar = true;
            }
            if (this.state.query.medicalConditions && Boolean(student.medicalConditions[0])) {
                medicalvar = true;
            }
        }

        if (student) {
<<<<<<< HEAD
            namevar = (student.firstName.toLowerCase().indexOf(this.state.query.text.toLowerCase()) !== -1 ||
                student.lastName.toLowerCase().indexOf(this.state.query.text.toLowerCase()) !== -1);
        }

        if (this.state.query.gender) {
            
            gendervar = student.gender.toLowerCase() === this.state.query.gender.toLowerCase();
=======
            let searchQuery = this.state.query.text.toLowerCase();
            // debugger
            // console.log("the search query is" + searchQuery);
          // console.log("the first name  is" + student.firstName);
          // console.log("the last name  is" + student.lastName);

            namevar = (
              student.firstName.toLowerCase().includes(searchQuery)
              ||
              student.lastName.toLowerCase().includes(searchQuery)
            );
        }

        if (this.state.query.gender) {
          gendervar = (student.gender === this.state.query.gender);
>>>>>>> pr/2
        };

        if (this.state.query.grade) {
            gradevar = student.grade === this.state.query.grade;
        };

       return gradevar && gendervar && namevar && medicalvar;
        
    };

    handleAllCheck (filteredStudents) {
<<<<<<< HEAD
        if (Object.keys(this.state.selectedStudents).length === 0) {
            let newSelectedStudents = {}
            filteredStudents.forEach( student => { 
                newSelectedStudents = Object.assign({}, newSelectedStudents, { [student._id]: student });
                
            });
            let newState = Object.assign({}, this.state, { selectedStudents: newSelectedStudents, checkedAll: true });
            this.setState(newState);
        } else {
           
            let newState = Object.assign({}, this.state, {selectedStudents: {}, checkedAll: false});
            this.setState(newState);
        } 
    }
=======
        if (Object.keys(this.state.selectedStudents).length === filteredStudents.length) {
          let newState = Object.assign({}, this.state, {selectedStudents: {}, checkedAll: false});
          this.setState(newState);
        } else {
           
          let newSelectedStudents = {}
          filteredStudents.forEach( student => { 
              newSelectedStudents = Object.assign({}, newSelectedStudents, { [student._id]: student });
              
          });
          let newState = Object.assign({}, this.state, { selectedStudents: newSelectedStudents, checkedAll: true });
          this.setState(newState);
        } 
    }
    
>>>>>>> pr/2

    handleSortClick = (type, func) => {  
        this.setState({sortType: type, sortFunc: func})
    }
<<<<<<< HEAD

    render() {

=======

    render() {

>>>>>>> pr/2
        let filteredStudents = [];
        let filteredParentsArr = [];
        if (this.props.students[0]) {
            filteredStudents = this.props.students.filter((student) => {
                return this.studentFilters(student);
            })
            filteredParentsArr = Object.values(this.state.selectedStudents).map(student => {
                //improvement opportunity - avoid a n^2 query
                let oneStudentParentsArr = []
                for (let index = 0; index < student.parentId.length; index++) {
                    oneStudentParentsArr.push(this.props.users[student.parentId[index]]);
                }
                return oneStudentParentsArr;
            });

           filteredStudents = filteredStudents.quickSort(this.state.sortType, this.state.sortFunc);
          
<<<<<<< HEAD
=======
        }
        
        function noDups(arr) {

          // // array of all student ids
          // let studentIds = arr.map(ids => ids._id);
          // // arrray of all unique ids (no dups)
          // let uniqueIds = studentIds.filter((ids, index) => studentIds.indexOf(ids) >= index);
          let uniqueIds = [];
          let noDuplicates = [];

          for (let i = 0; i < arr.length; i++) {
            let dupCheck = arr[i]._id

            if (!uniqueIds.includes(dupCheck)) {
              uniqueIds.push(dupCheck)
              noDuplicates.push(arr[i])
            }
          }

          return noDuplicates
>>>>>>> pr/2
        }
        
        function noDups(arr) {

          // // array of all student ids
          // let studentIds = arr.map(ids => ids._id);
          // // arrray of all unique ids (no dups)
          // let uniqueIds = studentIds.filter((ids, index) => studentIds.indexOf(ids) >= index);
          let uniqueIds = [];
          let noDuplicates = [];

          for (let i = 0; i < arr.length; i++) {
            let dupCheck = arr[i]._id

            if (!uniqueIds.includes(dupCheck)) {
              uniqueIds.push(dupCheck)
              noDuplicates.push(arr[i])
            }
          }

<<<<<<< HEAD
          return noDuplicates
        }

=======
>>>>>>> pr/2
        let noDupChildren = noDups(filteredStudents)

        const userAdminId = this.props.adminUserId;
        const { createReminder, deleteStudent, updateStudent, openModal } = this.props;
        
        return (
          <div id="admin-search-container">
            {/* Jesse note: not sure if we want a title or not on search page */}
            <h1 className="admin-welcome-message">
              School Director{" "}
              {this.props.adminUser[0].firstName} {this.props.adminUser[0].lastName}'s
              Dashboard
            </h1>
            <div className="admin-welcome-break"> </div>
            <h2 className="adminSearchTitle">
              Filter the students whose parents you want to message
            </h2>
            <div className="studentNameFilter">
              Student Name Filter:
              <input
                className="studentNameFilterTextBox"
                type="text"
                placeholder="try 'sally' or 'smith'"
                value={`${this.state.query.text}`}
                onChange={this.filterUpdate("text")}
              />
              <Link
                className="adminCreateReminderLink"
                to={{
                  pathname: "/draftReminder",
                  state: {
                    users: { filteredParentsArr },
                    adminId: { userAdminId },
                    createReminder: { createReminder }
                  }
                }}
              >
                Draft Reminder
              </Link>
              <Link className="adminCreateReminderLink" to={{pathname: "/pastReminders"}}>
                View Past Reminders
              </Link>
            </div>

            <div className="studentChecks">
              <div className="checkboxContainer">
                {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}
                <label className="toggle">
                  <input
                    className="checkboxStudent toggle__input"
                    type="checkbox"
                    name="allergies"
                    onChange={this.handleFilterCheck("allergies")}
                  />
                  <span className="toggle__label">
                    <span className="toggle__text"></span>
                  </span>
                </label>

                <div className="search-name">Allergies?</div>
              </div>

              <div className="checkboxContainer">
                {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}
                <label className="toggle">
                  <input
                    className="checkboxStudent toggle__input"
                    type="checkbox"
                    name="specialNeeds"
                    onChange={this.handleFilterCheck("specialNeeds")}
                  />
                  <span className="toggle__label">
                    <span className="toggle__text"></span>
                  </span>
                </label>

                <div className="search-name">Special Needs?</div>
              </div>

              <div className="checkboxContainer">
                {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}
                <label className="toggle">
                  <input
                    className="checkboxStudent toggle__input"
                    type="checkbox"
                    name="medicalConditions"
                    onChange={this.handleFilterCheck("medicalConditions")}
                  />
                  <span className="toggle__label">
                    <span className="toggle__text"></span>
                  </span>
                </label>

                <div className="search-name">Medical Conditions?</div>
              </div>

              {/* <label className="checkboxContainer">Include Allergies Search?
                        <input className="checkbox" type="checkbox" name='allergies' onChange={this.handleFilterCheck('allergies')} />
                    </label>

                    <label className="checkboxContainer">Include Special Needs Search?
                        <input className="checkbox" type="checkbox" name='specialNeeds' onChange={this.handleFilterCheck('specialNeeds')} />
                    </label>

                    <label className="checkboxContainer">Include Medical Conditions Search?
                        <input className="checkbox" type="checkbox" name='medicalConditions' onChange={this.handleFilterCheck('medicalConditions')} />
                    </label> */}
                    <div className='studentoptions'>

                        <select className='genderSelect' onChange={this.filterUpdate('gender')}>

                            <option value="" disabled selected value>Gender</option>
                            <option value="">All</option>
<<<<<<< HEAD
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option> 
=======
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option> 
>>>>>>> pr/2
                        </select>
                        <label className="gradeContainer">
                        <select className='genderSelect' value={`${this.state.query.grade}`} onChange={this.filterUpdate('grade')}>
                        <option value=''>Grade</option>
                        <option value='Nursery'>Nursery</option>
                        <option value='PreK'>PreK</option>
                        <option value='Kindergarten'>Kindergarten</option>
                        <option value='1st'>1st</option>
                        <option value='2nd'>2nd</option>
                        <option value='3rd'>3rd</option>
                        <option value='4th'>4th</option>
                        <option value='5th'>5th</option>
                        <option value='6th'>6th</option>
                        <option value='7th'>7th</option>
                        <option value='8th'>8th</option>
                        <option value='9th'>9th</option>
                        <option value='10th'>10th</option>
                        <option value='11th'>11th</option>
                        <option value='12th'>12th</option>
                        </select>
                        </label>
                    </div>
                </div>

                <div className='div-student-sort'>
                    <h2 className='studentIndexTitle'>Select the students to draft a reminder to their parents</h2>
                    {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}

                    <div className="select-all">
                    <div className="checkboxContainer">
                    <label className="toggle">
                    <input className="checkboxStudent toggle__input" type="checkbox" name="selectAll" onChange={() => this.handleAllCheck(filteredStudents)} />
                    <span className="toggle__label">
                        <span className="toggle__text"></span>
                    </span>
                    </label>
                       <div className="search-name-all"> Select All Students</div>
                    </div>
                    </div>

                    <div className="student-sort">
                        <button 
                        onClick={() => this.handleSortClick("firstName", (x, y) => { if (x < y) return - 1; return 1;})}
                        >Sort by first name (asc)</button>
                        <button 
                        onClick={() => this.handleSortClick("firstName", (x, y) => { if (x > y) return - 1; return 1;})}
                        >Sort by first name (desc)</button>
                        <button 
                        onClick={() => this.handleSortClick("lastName", (x, y) => { if (x < y) return - 1; return 1;})}
                        >Sort by last name (asc)</button>
                        <button 
                        onClick={() => this.handleSortClick("lastName", (x, y) => { if (x > y) return - 1; return 1;})}
                        >Sort by last name (desc)</button>
                     </div>
                </div>

            <div className="studentIndex">
              <ul className="studentsUl">
                {noDupChildren.map(student => (
                  <StudentItem
                    student={student}
                    handleStudentCheck={this.handleStudentCheck}
                    selectedStudents={this.state.selectedStudents}
                    deleteStudent={deleteStudent}
                    updateStudent={updateStudent}
                    openModal={openModal}
                    key={student._id}
                  />
                ))}
                {filteredStudents.length === 0 && <div><h2>No students to display</h2></div>}
              </ul>
            </div>
          </div>
        );
    }
}

export default StudentsSearch;


Array.prototype.quickSort = function (type, func) {
    if (this.length < 2) return this;
    
    const pivot = this[0];
    
    let left = this.slice(1).filter((el) => func(el[type], pivot[type]) === -1);
    let right = this.slice(1).filter((el) => func(el[type], pivot[type]) !== -1);
    
    left = left.quickSort(type, func);
    right = right.quickSort(type, func);
    
    return left.concat([pivot]).concat(right);
  };