$(document).ready(function() {
    $('#submitButton').click(function(e) {
      e.preventDefault(); // Предотвращаем отправку формы по умолчанию

      // Собираем данные из полей формы
      var user_name = $('#fullname').val();
      var user_phone = $('#phoneparent').val();
      var child_name = $('#namechild').val();
      var child_age = $('#number').val();
      var course_name = $('#namecourse').val();
      var child_phone = $('#telephone').val();

      // Отправляем запрос на сервер FormSubmit с данными формы
      $.ajax({
        url: 'https://formsubmit.co/el/wejiso',
        method: 'POST',
        dataType: 'json',
        data: {
          user_name: user_name,
          user_phone: user_phone,
          child_name: child_name,
          child_age: child_age,
          course_name: course_name,
          child_phone: child_phone
        },
        success: function(response) {
          // Обработка успешного ответа от сервера (опционально)
          console.log(response);
          alert('Форма успешно отправлена!');
        },
        error: function(xhr, status, error) {
          // Обработка ошибки (опционально)
          console.error(error);
          alert('Произошла ошибка при отправке формы.');
        }
      });
    });
  });

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var btnTwo = document.getElementById("btnTwo");
var btnThree = document.getElementById("btnThree")
var span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
btnTwo.onclick = function () {
    modal.style.display = "block";
}
btnThree.onclick = function () {
    modal.style.display = "block";
}
btnFour.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}