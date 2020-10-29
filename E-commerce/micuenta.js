import page from './PageObjectModel'
import { data } from './data';

fixture('pruebas del modulo mi cuenta')
    .page('http://automationpractice.com/');

test('Crear una cuenta', async t => {
    await t
        .click(page.signin_Link)
        console.log("Correo: ", data.email)
        console.log("firstname: ", data.firstname)
        console.log("lastname: ", data.lastname)
    
    await t
    .typeText(page.email_input, email)
    .click(page.createAccount_btn)
    
    await t
    .expect(page.email_form.value().contains(email))
    .expect(page.email_form.hasAttribute('readonly')).notOk()

    .typeText(page.firstname_input, firstname)
    .typeText(page.lastname_input, lastname)

    .expect(page.firstname_Address.value).contains(firstname)
    .expect(page.lastname_Address.value).contains(lastname)

    .typeText(page.password_input, password)
    .typeText(page.address, data.pbox)

    .typeText(page.city, data.city)
    .expect(page.address.value).contains(data.pbox)
    .typeText(page.city, data.city)
    





});

test('Loggearse con una cuenta nueva', async t => {});
test('Logout', async t => {});
test('Crear una cuenta con correo existente', async t => {});
test('Recuperar contraseña con correo valido', async t => {});
test('Validar recuperar contraseña con un correo no valido', async t => {});
test('Cambiar información de mi cuenta', async t => {});