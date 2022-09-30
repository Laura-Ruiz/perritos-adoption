export default function Validation(values) {
  
  let errors = {};
  let nameRegex = /^[A-Z]+$/i;
  let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (values.name == "") {
    errors.name = "Insertar nombre.";
   } else if (!nameRegex.test(values.name)) {
    errors.name = "El nombre escrito no es válido. Utilice solo letras.";
  }

  if (!values.email) {
    errors.email = "Insertar email.";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "El email escrito no es válido.";
  }
  if (!values.password) {
    errors.password = "Insertar password.";
  } else if (values.password.length < 6) {
    errors.password = "El password debe contener como mínimo 6 caracteres.";
  }

  return errors;
}
