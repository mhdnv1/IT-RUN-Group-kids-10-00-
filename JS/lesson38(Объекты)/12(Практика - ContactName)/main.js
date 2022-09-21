let contact_name = {};
while (true) {
  let comand = prompt(
    "1 - Добавить\n2 - Удалить\n3 - Просмотреть\nВведите команду: "
  );
  if (comand == "1") {
    let name = prompt("Введите имя: ");
    // let isName;
    // for (i in contact_name) {
    //   if (name == contact_name[i]) {
    //     isName = name;
    //   }
    // }
    // if (isName || !name || !name.trim()) {
    //   alert(
    //     "Такой пользователь уже существует, либо вы вели не корректное имя"
    //   );
    // } 
    // else {
    //   contact_name[name] = name;
    // }
    contact_name[name] = name;
  } 


  else if (comand == "2") {
    let name = prompt("Введите имя: ");
    // let isName;
    // for (i in contact_name) {
    //   if (name == contact_name[i]) {
    //     isName = name;
    //   }
    // }
    // if (isName) {
    //   delete contact_name[isName];
    // } else {
    //   alert("Такого пользователя не существует");
    // }
    delete contact_name[name]
  } 
  
  
  else if (comand == "3") {
    let names = "";
    for (i in contact_name) {
      names +=  `${contact_name[i]}`;
    }
    alert(contact_name[names]);
  } else {
    break;
  }
}