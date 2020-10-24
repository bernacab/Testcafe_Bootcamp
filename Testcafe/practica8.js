import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/login');

test('Probar el login correcto', async t =>{
    await t
    .typeText(page.input81, 'tomsmith')
    .typeText(page.input82, 'SuperSecretPassword!')
    .click(page.login83)
    .expect(page.securearea.innerText).contains('Secure Area')

});

test('Probar el login invalido', async t =>{
    await t
    .typeText(page.input81, 'usuariox')
    .typeText(page.input82, 'contraseñax')
    .click(page.login83)
    .expect(page.invalid.innerText).contains('Your username is invalid!')
    
});