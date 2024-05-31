$(document).ready(function() {
    var students = [];
    updateStudentTable();

    function addStudent(student) {
        students.push(student);
        updateStudentTable();
    }

    function updateStudentTable() {
        var tbody = $('#studentTable tbody');
        tbody.empty();
        if (students.length === 0) {
            tbody.append('<tr><td colspan="8"  style="text-align: center;">No records Available</td></tr>');
        } else {
            $.each(students, function(index, student) {
                var row = '<tr>' +
                            '<td>' + student.name + '</td>' +
                            '<td>' + student.email + '</td>' +
                            '<td>' + student.age + '</td>' +
                            '<td>' + student.course + '</td>' +
                            '<td>' + student.bdate + '</td>' +
                            '<td>' + student.address + '</td>' +
                            '<td>' + student.gender + '</td>' +
                            '<td><button class="edit-btn " data-index="' + index + '">Update</button> ' +
                            '<button class="delete-btn" data-index="' + index + '">Delete</button></td>' +
                            '</tr>';
                tbody.append(row);
            });
        }
    }

    $('#studentForm').submit(function(e) {
        e.preventDefault();
        var student = {
            name: $('#name').val(),
            email: $('#email').val(),
            age: $('#age').val(),
            course: $('#course').val(),
            bdate: $('#bdate').val(),
            address: $('#address').val(),
            gender: $('input[name="gender"]:checked').val()
        };
        addStudent(student);
        $(this)[0].reset();
    });

    $(document).on('click', '.edit-btn', function() {
        var index = $(this).data('index');
        var student = students[index];
        $('#name').val(student.name);
        $('#email').val(student.email);
        $('#age').val(student.age);
        $('#course').val(student.course);
        $('#bdate').val(student.bdate);
        $('#address').val(student.address);
        if (student.gender === 'Male') {
            $('#male').prop('checked', true);
        } else if (student.gender === 'Female') {
            $('#female').prop('checked', true);
        }
        students.splice(index, 1);
        updateStudentTable();
    });

    $(document).on('click', '.delete-btn', function() {
        var index = $(this).data('index');
        students.splice(index, 1);
        updateStudentTable();
    });
});
