function validateform() {
    var name = document.regform.name.value;
    var password = document.regform.password.value;

    if (name == null || name == "" || name.length < 3) {
        alert("სახელი არ უნდა იყოს ცარიელი და 3 სიმბოლოზე ნაკლები, გთხოვთ შეავსეთ ეს ველი!");
        return false;
    } else if (password.length < 6) {
        alert("პაროლი ძალიან პატარაა, გთხოვთ შეიყვანოთ 6 ზე მეტი!");
        return false;
    }
}