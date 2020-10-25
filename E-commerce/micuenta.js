import page from './PageObjectModel'

let rndNumber = Math.random().toString(36).substring(1,4);
const email = 'dummy' + rndNumber + '@mailinator.com'
const firstname = "Bernardo"
const lastname = "Cabrera"
const password = "88888"

fixture('pruebas del modulo mi cuenta')
    .page('http://automationpractice.com/');

test('Crear una cuenta', async t => {
    await t
        .click(page.signin_Link)
        console.log("Correo", email)
    
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
    .typeText(page.address, "PO BOX 254")





});

test('Loggearse con una cuenta nueva', async t => {});
test('Logout', async t => {});
test('Crear una cuenta con correo existente', async t => {});
test('Recuperar contraseña con correo valido', async t => {});
test('Validar recuperar contraseña con un correo no valido', async t => {});
test('Cambiar información de mi cuenta', async t => {});