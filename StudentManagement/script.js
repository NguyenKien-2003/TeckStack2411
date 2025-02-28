let students = [{ name: "Nguyen Van A", gender: "Male", math: 8, english: 7, literature: 9 },
{ name: "Le Van C", gender: "Male", math: 9, english: 9.5, literature: 8 }];

let currentIndex = -1;

//bien dung cho phan trang
const rowsPerPage = 5;
let currentPage = 1;

function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(students));
}

function loadFromLocalStorage() {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
        students = JSON.parse(storedStudents);
        renderStudents();
    }
}
window.onload = loadFromLocalStorage;

renderStudents();

const $name = document.getElementById('name');
const $gender = document.getElementById('gender');
const $mathScore = document.getElementById('math-score');
const $englishScore = document.getElementById('english-score');
const $literatureScore = document.getElementById('literature-score');

const $btnCreateStudent = document.getElementById('create-student');
const $btnDeleteStudent = document.getElementById('delete-student')
const $btnUpdateStudent = document.getElementById('update-student');
const $btnSearchStudent = document.getElementById('search-student');

const $keyword = document.getElementById('keyword');




function renderStudents(data) {
    if (data == undefined) {
        data = students;
    }
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = data.slice(start, end);

    paginatedItems.forEach((student, index) => {
        console.log(student.name);
        const row = `
            <tr>

                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.math}</td>
                <td>${student.english}</td>
                <td>${student.literature}</td>
                <td>${calculateAverage(student.math, student.english, student.literature).toFixed(2)}</td>
                <td><button onclick="getInfoStudent(${index})" type="button" class="btn btn-success" >Update</button>
                    <button onclick="deleteStudent(${index})" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;

        renderPagination();
    });

}



function createStudent() {
    const name = $name.value;
    const gender = $gender.value;
    const mathScore = $mathScore.value;
    const englishScore = $englishScore.value;
    const literatureScore = $literatureScore.value;

    const newStudent = {
        name: name,
        gender: gender,
        math: Number(mathScore),
        english: Number(englishScore),
        literature: Number(literatureScore),
    }

    students.unshift(newStudent);
    saveToLocalStorage();
    loadFromLocalStorage();
    console.log(students)
    renderStudents();
    clearInput();
};

$btnCreateStudent.onclick = createStudent;

function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
    saveToLocalStorage();
}

function searchStudent() {
    const keyword = $keyword.value.trim().toLowerCase();

    const result = [];

    for (let student of students) {
        if (student.name.toLowerCase().includes(keyword) || student.gender.toLocaleLowerCase() == keyword) {
            result.push(student);
        }
    }
    renderStudents(result);
}
$btnSearchStudent.onclick = searchStudent;

function getInfoStudent(index) {
    let result = {};
    currentIndex = index;
    result = students[index];

    $name.value = result.name;
    $gender.value = result.gender;
    $englishScore.value = result.english;
    $mathScore.value = result.math;
    $literatureScore.value = result.literature;

    $btnCreateStudent.style.display = 'none';
    $btnUpdateStudent.style.display = 'inline-block';
    console.log(result);

}

function updateStudent() {
    const name = $name.value;
    const gender = $gender.value;
    const englishScore = $englishScore.value;
    const mathScore = $mathScore.value;
    const literatureScore = $literatureScore.value;

    students[currentIndex].name = name;
    students[currentIndex].gender = gender;
    students[currentIndex].english = Number(englishScore);
    students[currentIndex].math = Number(mathScore);
    students[currentIndex].literature = Number(literatureScore);

    currentIndex = -1;
    saveToLocalStorage();
    clearInput();
    renderStudents();
    $btnCreateStudent.style.display = 'inline-block';
    $btnUpdateStudent.style.display = 'none';


}
$btnUpdateStudent.onclick = updateStudent;



function clearInput() {
    $name.value = '';
    $gender.value = 'default';
    $mathScore.value = '';
    $englishScore.value = '';
    $literatureScore.value = '';
}





function calculateAverage(math, english, literature) {
    return (math + english + literature) / 3;
}

// phaan trang


function renderPagination() {
    const totalPages = Math.ceil(students.length / rowsPerPage);
    const pagination = document.getElementById('pagination');

    pagination.innerHTML = `
     <li class="page-item ${currentPage === 1 ? "disabled" : ""}" id="prev-page">
        <a class="page-link" href="#">Previous</a>
    </li>
    `;
    for(let i=1; i<=totalPages;i++){
        pagination.innerHTML +=`
        <li class = "page-item ${i === currentPage ? 'active' : ''}">
        <a class="page-link" href="#">${i}</a>
        </li>
        `;
    }
    pagination.innerHTML += `
    <li class="page-item ${currentPage === totalPages ? "disabled" : ""}" id="next-page">
       <a class="page-link" href="#">Next</a>
   </li>
   `;
    attachPaginationEvents();

}

function attachPaginationEvents() {
    document.querySelectorAll(".pagination .page-item a").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            if (this.parentElement.classList.contains("disabled")) return;

            const text = this.textContent;
            if (text === "Previous") currentPage--;
            else if (text === "Next") currentPage++;
            else currentPage = Number(text);
            console.log("currentpage: ", currentPage)
            renderStudents();
        });
    });
}

