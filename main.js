/*---------VALIDACION REGISTRAR---------*/
const form = document.getElementById("registrar");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");


const checkUsername = () => {
	let valid = false;
	const min =5;
	const max = 10;
	
	const username = nameInput.value.trim();
	
	if (isEmpty(username)) {
		showError(nameInput, "El nombre es obligatorio");
		
	} else if (!isBetween(username.length, min, max)) {
		showError(
			nameInput,
			`El nombre debe tener entre ${min} y ${max} caracteres`
		);
	
	} else {
		showSuccess(nameInput);
		valid = true;
	}
	return valid;
};

const checkPassword = () => {
	let valid = false;
	const password = passInput.value.trim();
	
	
	if (isEmpty(password)) {
		showError(passInput, "La contraseña es obligatoria");
		
	} else if (!isPassSecure(password)) {
		showError(
			passInput,
			"Debe contener como mínimo 8 caracteres y tener una mayúscula,minúscula,simbolo y número"
		);

	} else {
		showSuccess(passInput);
		valid = true;
	}
	return valid;
};

const checkMail = () => {

	let valid = false;
	const emailValue = emailInput.value.trim();
	
	if (isEmpty(emailInput)) {
		showError(emailInput, "El mail es obligatorio");
	
	} else if (!isEmailValid(emailValue)) {
		showError(emailInput, "El mail no es válido");
	} else {
		
		showSuccess(emailInput);
		valid = true;
	}
	return valid;
};


const isEmpty = (value) => value === "";


const isBetween = (length, min, max) => {
	return length < min || length > max ? false : true;
};

const isEmailValid = (email) => {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	return re.test(email);
};


const isPassSecure = (pass) => {
	const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
	return re.test(pass);
};

const showError = (input, message) => {
	const registrar = input.parentElement;
	registrar.classList.remove("success");
	registrar.classList.add("error");
	const error = registrar.querySelector("small");
	error.textContent = message;
};

const showSuccess = (input) => {
	const registrar = input.parentElement;
	registrar.classList.remove("error");
	registrar.classList.add("success");
	const error = registrar.querySelector("small");
    const login= input.parentElement;
	login.classList.remove("error");
	login.classList.add("success");
	const errorr = login.querySelector("small");
	error.textContent = "";
};

const debounce = (fn, delay = 500) => {
	let timeoutId;

	return (...args) => {

		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			fn.apply(null, args);
		}, delay);
	};
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let isUsernameValid = checkUsername();
	let isEmailValid = checkMail();
	let isPasswordValid = checkPassword();



	let isregistrarValid =
		isUsernameValid && isEmailValid && isPasswordValid;

	if (isregistrarValid) {
		console.log("Enviamos el formulario");
		form.submit();
		alert ("Se ha registrado con exito!")
	}
});
    form.addEventListener(
	"input",
	debounce((e) => {
		switch (e.target.id) {
			case "username":
				checkUsername();
				break;
			case "email":
				checkMail();
				break;
			case "password":
				checkPassword();
				break;
		}
	})
);


/*---------VALIDACION LOGIN---------*/

const form3 = document.getElementById ("formu")
const form2 = document.getElementById ("login")
const inputname = document.getElementById("usuario");
const inputpass = document.getElementById("contraseña");

const checkUsuario = () => {
	
	let valid = false;
	const min =5;
	const max = 10;
	const usuario = inputname.value.trim();

	if (isEmpty(usuario)) {
		showDaño(inputname, "El nombre es obligatorio");
		
	} else if (!isBetween(usuario.length, min, max)) {
		showDaño(
			inputname,
			`El nombre debe tener entre ${min} y ${max} caracteres`
		);
		
	} else {
		Success(inputname);
		valid = true;
	}
	return valid;
};

const checkContraseña = () => {

	let valid = false;
	const contraseña = inputpass.value.trim();
	
	if (isEmpty(contraseña)) {
		showDaño(inputpass, "La contraseña es obligatoria");
		
	} else if (!isPassSecure(contraseña)) {
		showDaño(
			inputpass,
			"Debe contener como mínimo 8 caracteres y tener una mayúscula, minúscula, simbolo y número"
		);
	
	} else {
		Success(inputpass);
		valid = true;
	}
	return valid;
};


const showDaño = (input, message) => {
	const login = input.parentElement;
	login.classList.remove("success");
	login.classList.add("error");
	const error = login.querySelector("small");
	error.textContent = message;
};

const Success = (input) => {
	const login= input.parentElement;
	login.classList.remove("error");
	login.classList.add("success");
	const error = login.querySelector("small");
	error.textContent = "";
};


form2.addEventListener("submit", (e) => {
	
	e.preventDefault();

	let isUsuarioValid = checkUsuario();
	let isContraseñaValid = checkContraseña();
	let isloginValid =
		isUsuarioValid  && isContraseñaValid;

	if (isloginValid) {
		console.log("Enviamos el formulario");
		form2.submit()
		alert ("Inicio de sesion con exito!")
	}
});
    form2.addEventListener(
	"input",
	debounce((e) => {
		switch (e.target.id) {
			case "usuario":
				checkUsuario();
				break;
			
			case "contraseña":
				checkContraseña();
				break;
		}
	})
);
