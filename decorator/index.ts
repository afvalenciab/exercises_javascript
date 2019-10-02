class Field{
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement){
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validate();
      errorMessage.innerText = this.errors[0] || '';
    });
  }
  validate(){ }
}

function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validate;
  field.validate = function() {
    validate();
    let value = field.input.value;

    if(!value) {
      field.errors.push("Requerido");
    }
  };
  return field;
}

function EmailFieldDecorator(field: Field): Field {
  let validate = field.validate;
  field.validate = function() {
    validate();
    let value = field.input.value;

    //IndexOf valida dentro del caracter si esta el string pasado por arguemnto
    //Retorna -1 si no lo encuentra y si lo encuentra retorna la posición en la que lo encontro
    console.log(value.indexOf("@"));
    if(value.indexOf("@") === -1) {
      field.errors.push("Debe ser un email");
    }
  };
  return field;
}

let field = new Field(document.querySelector('#email'));
EmailFieldDecorator(RequiredFieldDecorator(field));